# AI policy

Open Reform is made by people with the help of AI, and we say so plainly.

## Who does what

| | People | AI |
|---|---|---|
| Choosing which reform to work on | Yes | No |
| The idea and the argument | Yes | May suggest; a person decides |
| Finding sources | Yes | May search and suggest leads |
| **Verifying sources and numbers** | **Always** | **Never on its own** |
| Writing and structuring the proposal | Edits and approves | Usually writes the first draft |
| Ratings on the scorecard | Decides | May propose, with reasons |
| Translation to Urdu | Reviews when possible | Usually translates |
| Images for videos | Chooses and checks | Generates |
| This repository's dashboard, scripts and guides | Directs and reviews | Wrote most of it |

In short: the ideas and the responsibility belong to people. Much of the formal writing is done with AI. A named person stands behind every published number.

## What we use

The maintainers work mainly with **Claude** (by Anthropic), through **Claude Code**. Images come from AI image tools. Contributors may use any tool; the rules below are the same for all of them.

## Rules

1. **AI output is a draft, never a source.** AI tools invent numbers, quotes and links that look real. Nothing an AI states is cited or trusted until a person has opened the original document and found it there.
2. **A person verifies every reference.** That person is named in `verified_by`. Until then a reform stays at `research` and is labelled a draft.
3. **A person is accountable.** The `author` and the verifier answer for the content, however it was drafted. "The AI wrote it" is not a defence.
4. **Disclose.** Every reform states what AI was used for (see below). Every pull request says so too.
5. **Translations are labelled.** An AI translation says it is one, and the English text is the authoritative version.
6. **No fake people.** No AI-generated quotes, interviews, testimonials, or images of real people.
7. **Experts are real.** Anything attributed to an expert comes from that person, in a call or in writing.

## How each reform discloses it

At the top of `proposal.md`:

```
author: Name of the person whose idea this is
ai_use: [research, drafting, translation, images]
ai_tools: [Claude]
verified_by: Name of the person who opened every source
```

`ai_use` takes any of: `none`, `research`, `drafting`, `translation`, `images`, `narration`. The dashboard shows this line on every reform. From status `proposal` on, `author`, `ai_use` and `verified_by` are required.

| Value | Means |
|---|---|
| `none` | No AI was used |
| `research` | AI searched for or suggested sources |
| `drafting` | AI wrote or restructured text |
| `translation` | AI translated the proposal |
| `images` | Images are AI-generated |
| `narration` | The voice in the video is AI-generated |

## Urdu translations

Proposals are written in English. An Urdu version is a second file, `proposal.ur.md`, beginning with:

```
---
translation: ai
reviewed_by:
---
```

`translation` is `ai` or `human`. `reviewed_by` names a person who has read the Urdu against the English. The dashboard shows a notice above every translation saying how it was made and whether it has been reviewed. If the two versions differ, the English one is correct.

## Videos

Video descriptions state that images are AI-generated, whether the narration is an AI voice, and link to the proposal and its references.

## For contributors

You are welcome to use AI. It is how most of this project is written. Use it to draft, to organise, to translate, to find where to look. Then do the part it cannot do: open the source, find the number, and put your name to it.
