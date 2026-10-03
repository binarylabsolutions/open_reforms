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

1. **Idea issue.** Opened by anyone. A maintainer accepts it and assigns the number. Ideas are accepted one at a time.
2. **Create.** `node .cli/reforms.mjs new "Title" NNN` makes `reforms/NNN-title/` from `reforms/_template/`, on its own branch.
3. **Draft pull request.** Opened early, at status `research`, so sources are found in the open.
4. **Research.** Each claim under `## To verify` is replaced by a cited number and a reference. Rules: [CONTRIBUTING.md](../CONTRIBUTING.md).
5. **Write the proposal.** Problem in Pakistan, how others solved it, the proposal, scorecard, risks, pilot.
6. **Review and merge.** A reviewer opens every reference. Status becomes `proposal`. The check must pass.
7. **Translate.** Optional `proposal.ur.md`, made after the English is final. Rules: [AI_POLICY.md](../AI_POLICY.md).
8. **Write the presentation.** In `presentation.md`, one section per slide: an image prompt and the narration. Optional `pitch.pptx` for the elevator pitch.
9. **Generate images.** Content prompt from the slide plus the style block in [image-style.md](image-style.md). Saved to `images/` as `01.png`, `02.png`, ... matching slide numbers.
10. **Make the short.** Vertical video for Instagram Reels and YouTube Shorts: each image stays on screen while its narration plays.
11. **Publish.** `video:` is set and `status: published`. The video description discloses AI images and voice.

## After publishing

A published reform stays open. Expert calls (see [CONTRIBUTING.md](../CONTRIBUTING.md#experts)) and corrections feed back into `proposal.md` through pull requests. A reform with enough expert input becomes a long-form video; its link is added to the proposal.

`data/` is rebuilt and committed by GitHub Actions after every merge to `main`. Pull requests never include it.

## Rules

- One reform per pull request. Folder names are `NNN-short-name`, lowercase with dashes. Numbers are never reused.
- No number without a verified source. Numbers in the video and the deck come from `proposal.md`.
- Be honest in the scorecard. A reform that scores badly is still worth a video if it explains why.
- State the strongest objection and answer it.
- The repo is public forever: no private notes, no unlicensed images.
