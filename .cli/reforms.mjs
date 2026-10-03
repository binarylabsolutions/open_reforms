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
// What AI was used for in a reform; disclosed on the dashboard. See AI_POLICY.md.
const AI_USES = ['none', 'research', 'drafting', 'translation', 'images', 'narration'];
const TRANSLATIONS = ['ai', 'human'];

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

// From this status on, every figure must carry a citation and every reference must be complete.
const SOURCED = new Set(['proposal', 'production', 'published']);

// Citations are `[n]` in the text; references are a numbered list under `## References`.
function checkSources(body, strict) {
  const problems = [];
  const lines = body.split('\n');
  const start = lines.findIndex((l) => /^##\s+References\s*$/i.test(l));
  let end = lines.length;
  if (start >= 0) {
    const next = lines.findIndex((l, i) => i > start && /^##\s/.test(l));
    if (next >= 0) end = next;
  }
  const inRefs = (i) => start >= 0 && i >= start && i < end;

  const refs = new Map();
  lines.forEach((l, i) => {
    const m = inRefs(i) && /^(\d+)\.\s+(.*)$/.exec(l);
    if (m) refs.set(m[1], m[2]);
  });

  const cited = new Set();
  lines.forEach((l, i) => {
    if (inRefs(i) || /^#{1,6}\s/.test(l)) return;
    const marks = [...l.matchAll(/\[(\d+)\](?!\()/g)].map((m) => m[1]);
    marks.forEach((n) => cited.add(n));
    const bare = l.replace(/\[\d+\](?!\()/g, '').replace(/\]\([^)]*\)/g, ']').replace(/`[^`]*`/g, '').replace(/^\s*\d+\.\s/, '');
    if (/\d/.test(bare) && !marks.length) problems.push(`number without a citation: "${l.trim().slice(0, 70)}"`);
  });

  for (const n of cited) if (!refs.has(n)) problems.push(`citation [${n}] has no entry under "## References"`);
  for (const [n, text] of refs) {
    if (!/https?:\/\/\S+/.test(text)) problems.push(`reference ${n} has no URL`);
    if (!/accessed \d{4}-\d{2}-\d{2}/i.test(text)) problems.push(`reference ${n} has no "accessed YYYY-MM-DD" date`);
    if (!cited.has(n)) problems.push(`reference ${n} is never cited`);
  }
  if (strict) {
    if (!refs.size) problems.push('no references listed under "## References"');
    if (/^\s*[-*]\s+\[ \]/m.test(body)) problems.push('unchecked "- [ ]" items remain (finish or remove them)');
  }
  return problems;
}

function reformFolders() {
  if (!fs.existsSync(REFORMS_DIR)) return [];
  return fs.readdirSync(REFORMS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
    .map((d) => d.name)
    .sort();
}

function loadReform(folder, errors, warnings) {
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

  const strict = SOURCED.has(meta.status);
  const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const aiUse = list(meta.ai_use).map((s) => s.toLowerCase());
  for (const u of aiUse) if (!AI_USES.includes(u)) err(`ai_use "${u}" must be one of: ${AI_USES.join(', ')}`);
  if (strict) {
    if (!meta.author) err('missing "author" (whose idea this is)');
    if (!meta.verified_by) err('missing "verified_by" (the person who opened every source)');
    if (!aiUse.length) err('missing "ai_use" (write [none] if no AI was used)');
  }

  // Optional Urdu version; its frontmatter says who or what translated it.
  const urFile = path.join(dir, 'proposal.ur.md');
  const ur = fs.existsSync(urFile) ? parseFrontmatter(read(urFile)) : null;
  if (ur && !TRANSLATIONS.includes(ur.meta?.translation)) err(`proposal.ur.md needs frontmatter "translation": ${TRANSLATIONS.join(' or ')}`);
  for (const p of checkSources(body, strict)) (strict ? errors : warnings).push(`reforms/${folder}: ${p}`);

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
    countries: list(meta.countries),
    status: meta.status || '',
    video: meta.video || '',
    author: meta.author || '',
    ai_use: aiUse,
    ai_tools: list(meta.ai_tools),
    verified_by: meta.verified_by || '',
  };
  for (const m of METRICS) reform[m.key] = meta[m.key] || '';
  reform.score = score(meta);
  reform.proposal = body;
  reform.presentation = fs.existsSync(presFile) ? parseFrontmatter(read(presFile)).body : '';
  reform.proposal_ur = ur ? ur.body : '';
  reform.translation = ur ? { by: ur.meta?.translation || '', reviewed_by: ur.meta?.reviewed_by || '' } : null;
  reform.images = images;
  reform.pitch = fs.existsSync(path.join(dir, 'pitch.pptx')) ? 'pitch.pptx' : '';
  return reform;
}

function build(write) {
  const errors = [], warnings = [];
  const reforms = reformFolders().map((f) => loadReform(f, errors, warnings)).filter(Boolean);

  const ids = new Set();
  for (const r of reforms) {
    if (ids.has(r.id)) errors.push(`${r.path}: duplicate number ${r.id}`);
    ids.add(r.id);
  }
  if (warnings.length) console.log('Still to do before these can move to "proposal":\n' + warnings.map((e) => '  - ' + e).join('\n'));
  if (errors.length) {
    console.error('Fix these first:\n' + errors.map((e) => '  - ' + e).join('\n'));
    process.exit(1);
  }
  if (!write) { console.log(`Checked ${reforms.length} reforms: OK`); return; }

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

// The number comes from the accepted idea issue, so parallel pull requests never collide.
function create(title, number) {
  if (!title) { console.error('Usage: node .cli/reforms.mjs new "Title of the reform" [number]'); process.exit(1); }
  const nums = reformFolders().map((f) => FOLDER_RE.exec(f)).filter(Boolean).map((m) => Number(m[1]));
  const n = number ? Number(number) : Math.max(0, ...nums) + 1;
  if (nums.includes(n)) { console.error(`Number ${n} is already used.`); process.exit(1); }
  const id = String(n).padStart(3, '0');
  const folder = `${id}-${slugify(title)}`;
  const dir = path.join(REFORMS_DIR, folder);
  fs.mkdirSync(path.join(dir, 'images'), { recursive: true });
  fs.writeFileSync(path.join(dir, 'images', '.gitkeep'), '');
  for (const f of ['proposal.md', 'presentation.md']) {
    fs.writeFileSync(path.join(dir, f), read(path.join(TEMPLATE_DIR, f)).replaceAll('{{title}}', title));
  }
  console.log(`Created reforms/${folder}`);
  build(true);
}

const [cmd = 'build', ...args] = process.argv.slice(2);
if (cmd === 'build') build(true);
else if (cmd === 'check') build(false);
else if (cmd === 'new') {
  const number = /^\d{1,3}$/.test(args.at(-1) || '') && args.length > 1 ? args.pop() : '';
  create(args.join(' ').trim(), number);
} else {
  console.log('Commands:\n  check                     validate every reform, write nothing\n  build                     validate, then regenerate data/reforms.json and data/reforms.js\n  new "<title>" [number]    scaffold a reform folder, then build');
  process.exit(cmd === 'help' ? 0 : 1);
}
