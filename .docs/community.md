# Community

## Where things happen

| Place | Used for | Permanent record? |
|---|---|---|
| GitHub issues | One per reform idea, and corrections | Yes |
| GitHub pull requests | Writing and reviewing one reform: sources, ratings, objections | Yes |
| [Discord](https://discord.gg/wKVNcYcgq) | Chat, brainstorming, finding collaborators, video production | No |
| Expert calls | Recorded conversations with practitioners; may be published | Yes, when published |
| Instagram and YouTube comments | Public reaction to a published reform | No |

Anything that changes a proposal (a source, a number, an objection) is posted on the pull request or issue, even if it was first said in Discord. Discord is for talk; GitHub is the record.

## Discord layout

- `#welcome`: what Open Reform is, link to CONTRIBUTING.md.
- `#ideas`: loose brainstorming before an idea issue is opened.
- `reforms` (forum channel): one post per accepted reform, titled `NNN Title`, with links to its issue and pull request. The pull request description links back to the post.
- `#sources`: help finding documents and data.
- `#video`: scripts, images, narration, editing.
- `#github`: automatic feed of new issues, pull requests and merges (GitHub webhook).

## Roles

| Role | Can |
|---|---|
| Maintainer | Accept ideas and assign numbers, merge pull requests, moderate |
| Reviewer | Trusted contributor asked to verify sources; approval counts toward merge |
| Contributor | Anyone: open issues, comment, open pull requests from a fork |

Contributors do not need write access. A public repository accepts pull requests from forks.

## GitHub settings the repo relies on

- Repository is public. Issues are enabled.
- Default branch `main`. Force pushes and deletion of `main` are blocked.
- The **Check reforms** workflow runs on every pull request. Maintainers merge only when it is green. It is not a required status check, because that rule would also block the build workflow's commit of `data/` to `main`.
- Actions have read and write permission, so the build workflow can commit `data/` to `main`.
- Workflows from first-time contributors need maintainer approval before they run.
- Labels: `idea`, `accepted`, `claimed`, `needs-sources`, `correction`, `declined`.
- `.github/CODEOWNERS` requests a maintainer review on every pull request.
