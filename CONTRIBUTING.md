# Contributing to Open Reform

Anyone can contribute. You do not need to be a programmer: a reform is a folder of text files, and you can edit them in the GitHub website.

Read the [Charter](CHARTER.md) first: the project is non-political and evidence-based, and every reform is a starting point for discussion.

Questions and discussion: [Discord](https://discord.gg/wKVNcYcgq). Decisions and sources are recorded on GitHub.

## Ways to help

| You want to | Do this |
|---|---|
| Suggest a reform | Open a **Reform idea** issue |
| Fix a wrong number or a dead link | Open a **Correction** issue, or a pull request with the fix |
| Add sources to a reform in `research` | Pull request on that reform's folder |
| Write a full reform | Get the idea accepted first, then one pull request |
| Argue that a reform would fail in Pakistan | Comment on its issue or pull request. This is welcome. |
| Review an Urdu translation | Read `proposal.ur.md` against the English, fix it, add your name to `reviewed_by` |
| Share professional experience | See [Experts](#experts) |

## How a reform gets made

One reform = one issue = one pull request.

1. **Idea.** Open a Reform idea issue: the idea, the problem it fixes in Pakistan, and any place where something similar already works. A foreign example helps but is not required.
2. **Accepted.** A maintainer labels it `accepted` and gives it a number (for example `007`). Ideas are accepted one at a time, so not every good idea is picked up immediately.
3. **Claim it.** Comment on the issue that you are taking it, so two people do not write the same thing.
4. **Write.** Fork the repo, create `reforms/007-short-name/` from `reforms/_template/`, and open a **draft** pull request early. Research in the open.
5. **Review.** A maintainer and other contributors check every source. Expect questions.
6. **Merge.** The reform appears on the dashboard. The video is made after the proposal is merged.

A pull request touches one reform folder only. Do not edit `data/`: it is generated automatically after merge.

## Sourcing rules

These are the rules that matter most. A proposal that breaks them is not merged.

1. **Every number has a citation.** Write `[1]` after the number and list the source under `## References`.
2. **Every reference is complete:**
   `Author or organisation. Title, page or table. URL (accessed YYYY-MM-DD). Supports: the exact figure or claim.`
3. **Primary sources first.** Annual reports, budget documents, official statistics, laws, peer-reviewed studies. Reputable news is acceptable for events. Wikipedia, blogs and AI answers are not sources; follow them to the original.
4. **You opened the source yourself.** You saw the number on the page you cite. If you cannot find it, the number does not go in.
5. **No number is better than a guessed number.** Write "we could not find this figure" and list it under `## To verify`.
6. **State year and currency** with every amount. Do not convert currencies without citing the rate.
7. **Describe, do not inflate.** If the source says "about a third", do not write "over 30%".
8. **Claims without numbers need sources too** when they are about what another country does or achieved.

### Using AI

You are welcome to use AI for drafting, structure, translation and finding leads. AI tools also invent numbers and sources. Anything an AI gives you is unverified until you have opened the original document and found it there. Rule 4 applies with no exceptions.

Disclose it: fill `author`, `ai_use`, `ai_tools` and `verified_by` at the top of `proposal.md`. The full rules are in [AI_POLICY.md](AI_POLICY.md).

### What the automatic check does

Every pull request runs `node .cli/reforms.mjs check`. From status `proposal` onward it fails when:

- a line contains a number with no `[n]` citation,
- a citation has no matching reference, or a reference is never cited,
- a reference has no URL or no accessed date,
- any `- [ ]` item is still unchecked,
- `author`, `ai_use` or `verified_by` is missing.

The check cannot tell whether a source really says what you claim. Human review does that.

## Status

Set `status` at the top of `proposal.md`: `idea` → `research` → `proposal` → `production` → `published`. A reform can be merged at `research` so others can help find sources. It moves to `proposal` only when the check passes and a reviewer has verified the references.

## Files in a reform folder

| File | What |
|---|---|
| `proposal.md` | The written proposal with ratings, scorecard and references |
| `proposal.ur.md` | Optional Urdu translation, marked `translation: ai` or `human` |
| `presentation.md` | The video: one image prompt and one narration per slide |
| `images/` | Images for the video, `01.png`, `02.png`, ... |
| `pitch.pptx` | Optional elevator-pitch deck |

Numbers spoken in the video or shown in the deck must already be in `proposal.md` with a citation.

Images follow [.docs/image-style.md](.docs/image-style.md): vertical 9:16, one shared palette, no text inside the image. They must be your own, AI-generated, or openly licensed.

## Reviewing

Reviewers are as valuable as authors. To review a pull request:

1. Open every reference link. Find the cited figure. Say so in a comment ("ref 3 checked, p. 41").
2. Challenge the ratings. Each row of the Scorecard needs a reason you find convincing.
3. Look for the strongest objection. If it is missing from "Risks and objections", ask for it.

## Experts

Every reform here is a starting point. We are looking for people with direct experience of the field: engineers, planners, tax officers, doctors, teachers, civil servants, economists, operators, researchers. Your corrections and doubts are worth more than your agreement.

Ways to take part:

- **Comment** on the reform's issue or pull request.
- **A short call.** Message a maintainer on [Discord](https://discord.gg/wKVNcYcgq) with the reform you want to discuss and a line about your background. We will set up a call.
- **A long-form video.** Reforms that draw enough expert input become longer videos built around those conversations.

About calls:

- Calls may be recorded. Recordings, or parts of them, may be published on YouTube and other channels to explain the reform.
- We tell you at the start of the call that recording is on. If you prefer not to be recorded, or to speak without being named, say so beforehand and we will respect it.
- You can ask for any part to be left out before it is published.
- You speak for yourself, not for your employer, unless you say otherwise.
- The call follows the Charter: no party politics.

## Working locally (optional)

Needs [Node.js](https://nodejs.org) 18 or newer.

```bash
node .cli/reforms.mjs new "Title of the reform" 007
```

```bash
node .cli/reforms.mjs check
```

```bash
node .cli/reforms.mjs build
```

`build` refreshes `data/` so you can preview in `index.html`. Do not commit the `data/` changes.

## Licence

By contributing you agree that your text and images are published under [CC BY 4.0](LICENSE) and your code under [MIT](LICENSE-CODE).

## Conduct

Argue about ideas, not people. No party politics, no abuse. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
