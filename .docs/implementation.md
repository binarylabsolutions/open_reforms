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
- `new "<title>"`: copies `reforms/_template/` to the next number, then builds.
- Output is deterministic: folders are sorted, there are no timestamps, so the same input gives byte-identical files and clean git diffs.
- Validation errors stop the build and list every problem.
- Frontmatter is a flat `key: value` block. Lists are written `[a, b]`.

## Dashboard (`index.html`)

- One file, no dependencies, no network.
- Status tabs, search, filters for sector, scope and each metric, a Quick wins filter, and sortable columns.
- Clicking a row opens a drawer with the Proposal, Presentation and Images tabs. `index.html#001` opens reform 001 directly.
- Markdown is rendered by a small built-in renderer: headings, paragraphs, lists, task lists, tables, quotes, code, links, images. Relative links and images resolve against the reform's folder.

## Docker

There is nothing to run: no server, no services. The project is static files plus one script.
