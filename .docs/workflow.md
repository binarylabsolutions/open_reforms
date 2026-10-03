# Workflow

A reform moves through five statuses. Set `status` in `proposal.md` as it moves.

| Status | What exists | Done when |
|---|---|---|
| `idea` | Title, one-line summary, first-guess ratings, open questions | Worth researching |
| `research` | Sources being collected, numbers being checked | Every claim has a source |
| `proposal` | Full `proposal.md` with scorecard, risks and pilot | Proposal reads well on its own |
| `production` | `presentation.md` written, images being generated, audio recorded | Video is edited |
| `published` | Video is live, `video` URL is set | |

## Steps

1. **Create.** `node .cli/reforms.mjs new "Title"` makes `reforms/NNN-title/` from `reforms/_template/`.
2. **Research.** Fill the Sources checklist in `proposal.md`. Every number links to a source.
3. **Write the proposal.** Problem in Pakistan, how others solved it, the proposal, scorecard, risks, pilot.
4. **Write the presentation.** In `presentation.md`, one section per slide: an image prompt and the narration.
5. **Generate images.** Save to `images/` as `01.png`, `02.png`, ... matching slide numbers.
6. **Make the video.** Each image stays on screen while its narration plays.
7. **Publish.** Set `video:` and `status: published`.
8. **Rebuild.** `node .cli/reforms.mjs build` (or double-click `update.cmd`) after any change, and commit `data/` with it.

## Rules

- Folder names are `NNN-short-name`, lowercase with dashes. Numbers are never reused.
- Be honest in the scorecard. A reform that scores badly is still worth a video if it explains why.
- State the strongest objection and answer it.
- The repo is public forever: no private notes, no unlicensed images, no unsourced numbers.
