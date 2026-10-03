# Implementation

## Flow

```
reforms/*/proposal.md, presentation.md, images/
        |  node .cli/reforms.mjs build
        v
data/reforms.json   (for anyone who wants the data)
data/reforms.js     (same data as `window.OPEN_REFORMS = {...}`)
        |  <script src="data/reforms.js">
        v
index.html
```

## Why `reforms.js` exists

`index.html` is opened by double-click, so it runs from `file://`. Browsers block `fetch()` of local files there, but they do load a local `<script>`. The CLI therefore writes the data a second time as a script. The markdown text of each proposal and presentation is embedded in the data for the same reason.

## CLI (`.cli/reforms.mjs`)

- Node 18+, no dependencies.
- `build`: reads every `reforms/NNN-name/` folder (folders starting with `_` are skipped), validates the frontmatter, computes the score, lists the images, and writes both data files.
- `check`: the same validation as `build`, writing nothing. Used by the pull request workflow.
- `new "<title>" [number]`: copies `reforms/_template/` to the given number (or the next free one), then builds.
- Output is deterministic: folders are sorted, there are no timestamps, so the same input gives byte-identical files and clean git diffs.
- Validation errors stop the build and list every problem.
- Source rules: citations are `[n]`, references are a numbered list under `## References`. From status `proposal` on, an uncited number, an incomplete or unused reference, or an unchecked `- [ ]` is an error. Before that, the same findings are printed as a to-do list.
- AI disclosure: `ai_use` values are validated; from status `proposal` on, `author`, `ai_use` and `verified_by` are required.
- `proposal.ur.md`, when present, needs `translation: ai` or `human` in its frontmatter and is embedded as the Urdu tab.
- Frontmatter is a flat `key: value` block. Lists are written `[a, b]`.

## Dashboard (`index.html`)

- One file, no dependencies, no network.
- Status tabs, search, filters for sector, scope and each metric, a Quick wins filter, and sortable columns.
- Clicking a row opens a drawer with the Proposal, Urdu (if translated), Presentation and Images tabs, and a line stating the author, what AI was used for, and who verified the sources. The Urdu tab is right-to-left with a notice saying how the translation was made. `index.html#001` opens reform 001 directly.
- Markdown is rendered by a small built-in renderer: headings, paragraphs, lists, task lists, tables, quotes, code, links, images. Relative links and images resolve against the reform's folder.

## GitHub Actions

- `.github/workflows/check.yml`: on every pull request, runs `check` and fails if `data/` was edited.
- `.github/workflows/build.yml`: on every push to `main` that touches `reforms/` or `.cli/`, runs `build` and commits `data/`.

`data/` is generated only on `main` because two pull requests that both regenerate it would conflict.

## Docker

There is nothing to run: no server, no services. The project is static files plus one script.
