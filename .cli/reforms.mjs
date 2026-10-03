#!/usr/bin/env node
// Open Reform CLI. Zero dependencies, deterministic output:
// same files in -> same data/reforms.json and data/reforms.js out.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REFORMS_DIR = path.join(ROOT, 'reforms');
const DATA_DIR = path.join(ROOT, 'data');
const TEMPLATE_DIR = path.join(REFORMS_DIR, '_template');

const LEVELS = ['low', 'medium', 'high'];
const STATUSES = ['idea', 'research', 'proposal', 'production', 'published'];
const SCOPES = ['city', 'provincial', 'federal'];

// `better` says which end of the scale is good; `weight` feeds the score.
const METRICS = [
  { key: 'impact', label: 'Impact', better: 'high', weight: 2, help: 'How much better life gets, and for how many people.' },
  { key: 'cost', label: 'Cost', better: 'low', weight: 1, help: 'Public money needed up front and to keep it running.' },
  { key: 'difficulty', label: 'Difficulty', better: 'low', weight: 1, help: 'How hard it is to build and operate (skills, systems, coordination).' },
  { key: 'resistance', label: 'Resistance', better: 'low', weight: 1, help: 'Political and vested-interest pushback against passing it.' },
  { key: 'time', label: 'Time', better: 'low', weight: 1, help: 'How long before citizens see results.' },
];

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);
const FOLDER_RE = /^(\d{3})-([a-z0-9]+(?:-[a-z0-9]+)*)$/;

function read(file) {
  return fs.readFileSync(file, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
}

// Frontmatter is a flat `key: value` block; `[a, b]` is a list.
function parseFrontmatter(text) {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(text);
  if (!m) return { meta: null, body: text };
  const meta = {};
  for (const line of m[1].split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const i = line.indexOf(':');
    if (i < 0) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      meta[key] = val.slice(1, -1).split(',').map(unquote).filter(Boolean);
    } else {
      meta[key] = unquote(val);
    }
  }
  return { meta, body: text.slice(m[0].length).trim() + '\n' };
}

function unquote(s) {
  s = s.trim();
  if (s.length >= 2 && ((s[0] === '"' && s.at(-1) === '"') || (s[0] === "'" && s.at(-1) === "'"))) return s.slice(1, -1);
  return s;
}

function score(meta) {
  let sum = 0, min = 0, max = 0;
  for (const m of METRICS) {
    const v = LEVELS.indexOf(meta[m.key]) + 1;
    sum += m.weight * (m.better === 'high' ? v : 4 - v);
    min += m.weight;
    max += m.weight * 3;
  }
  return Math.round(((sum - min) / (max - min)) * 100);
}

function reformFolders() {
  if (!fs.existsSync(REFORMS_DIR)) return [];
  return fs.readdirSync(REFORMS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
    .map((d) => d.name)
    .sort();
}

function loadReform(folder, errors) {
  const err = (msg) => errors.push(`reforms/${folder}: ${msg}`);
  const fm = FOLDER_RE.exec(folder);
  if (!fm) err('folder name must look like 001-short-name');

  const dir = path.join(REFORMS_DIR, folder);
  const proposalFile = path.join(dir, 'proposal.md');
  if (!fs.existsSync(proposalFile)) { err('missing proposal.md'); return null; }

  const { meta, body } = parseFrontmatter(read(proposalFile));
  if (!meta) { err('proposal.md has no frontmatter block'); return null; }

  for (const key of ['title', 'summary', 'sector']) if (!meta[key]) err(`missing "${key}"`);
  if (!STATUSES.includes(meta.status)) err(`status must be one of: ${STATUSES.join(', ')}`);
  if (!SCOPES.includes(meta.scope)) err(`scope must be one of: ${SCOPES.join(', ')}`);
  for (const m of METRICS) if (!LEVELS.includes(meta[m.key])) err(`${m.key} must be one of: ${LEVELS.join(', ')}`);

  const presFile = path.join(dir, 'presentation.md');
  const imgDir = path.join(dir, 'images');
  const images = fs.existsSync(imgDir)
    ? fs.readdirSync(imgDir).filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase())).sort()
    : [];

  const reform = {
    id: fm ? fm[1] : folder,
    slug: fm ? fm[2] : folder,
    path: `reforms/${folder}`,
    title: meta.title || folder,
    summary: meta.summary || '',
    sector: (meta.sector || '').toLowerCase(),
    scope: meta.scope || '',
    countries: Array.isArray(meta.countries) ? meta.countries : meta.countries ? [meta.countries] : [],
    status: meta.status || '',
    video: meta.video || '',
  };
  for (const m of METRICS) reform[m.key] = meta[m.key] || '';
  reform.score = score(meta);
  reform.proposal = body;
  reform.presentation = fs.existsSync(presFile) ? parseFrontmatter(read(presFile)).body : '';
  reform.images = images;
  return reform;
}

function build() {
  const errors = [];
  const reforms = reformFolders().map((f) => loadReform(f, errors)).filter(Boolean);

  const ids = new Set();
  for (const r of reforms) {
    if (ids.has(r.id)) errors.push(`${r.path}: duplicate number ${r.id}`);
    ids.add(r.id);
  }
  if (errors.length) {
    console.error('Fix these first:\n' + errors.map((e) => '  - ' + e).join('\n'));
    process.exit(1);
  }

  const data = { levels: LEVELS, statuses: STATUSES, scopes: SCOPES, metrics: METRICS, reforms };
  const json = JSON.stringify(data, null, 2) + '\n';
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(path.join(DATA_DIR, 'reforms.json'), json);
  // index.html runs from file://, where fetch() of JSON is blocked; a script tag is not.
  fs.writeFileSync(path.join(DATA_DIR, 'reforms.js'), 'window.OPEN_REFORMS = ' + json.trimEnd() + ';\n');
  console.log(`Built ${reforms.length} reforms -> data/reforms.json, data/reforms.js`);
}

function slugify(s) {
  return s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').split('-').slice(0, 6).join('-');
}

function create(title) {
  if (!title) { console.error('Usage: node .cli/reforms.mjs new "Title of the reform"'); process.exit(1); }
  const nums = reformFolders().map((f) => FOLDER_RE.exec(f)).filter(Boolean).map((m) => Number(m[1]));
  const id = String(Math.max(0, ...nums) + 1).padStart(3, '0');
  const folder = `${id}-${slugify(title)}`;
  const dir = path.join(REFORMS_DIR, folder);
  fs.mkdirSync(path.join(dir, 'images'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'images', '.gitkeep'), '');
  for (const f of ['proposal.md', 'presentation.md']) {
    fs.writeFileSync(path.join(dir, f), read(path.join(TEMPLATE_DIR, f)).replaceAll('{{title}}', title));
  }
  console.log(`Created reforms/${folder}`);
  build();
}

const [cmd = 'build', ...args] = process.argv.slice(2);
if (cmd === 'build') build();
else if (cmd === 'new') create(args.join(' ').trim());
else {
  console.log('Commands:\n  build            regenerate data/reforms.json and data/reforms.js\n  new "<title>"    scaffold the next reform folder, then build');
  process.exit(cmd === 'help' ? 0 : 1);
}
