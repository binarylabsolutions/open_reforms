# Metrics

Every reform is rated `low`, `medium` or `high` on five metrics, in the frontmatter of its `proposal.md`. Three levels only: the ratings are judgements, and a finer scale would claim precision we do not have.

## The five metrics

| Key | Meaning | low | medium | high |
|---|---|---|---|---|
| `impact` | How much better life gets, and for how many people | A small group, or a small gain | One city or sector, a clear gain | Millions of people, or a large fiscal gain |
| `cost` | Public money, up front and recurring | Pays for itself or needs almost nothing | Fits in an existing departmental budget | Needs new major funding |
| `difficulty` | How hard it is to build and operate | One agency, known method | Several agencies, or new skills | New systems, many agencies, long rollout |
| `resistance` | Political and vested-interest pushback | No organised losers | Some organised losers | Powerful losers, or a law change against strong opposition |
| `time` | How long before citizens see results | Under 1 year | 1 to 3 years | More than 3 years |

`impact` is good when high. The other four are good when low. The dashboard colours ratings by good or bad, not by level.

Each proposal has a Scorecard table that gives one sentence of reasoning per rating. A rating without a reason is not accepted.

## Score

A single number from 0 to 100 for sorting.

- Each rating becomes points from 1 to 3, where 3 is the good end of that metric.
- Impact counts double.
- `score = (2*impact + cost + difficulty + resistance + time - 6) / 12 * 100`, rounded.

Examples: high impact with everything else low scores 100. Medium across the board scores 50.

## Quick wins

The dashboard's **Quick wins** button shows reforms with high impact and nothing rated high on cost, difficulty or resistance.

## Other fields

| Key | Values |
|---|---|
| `status` | `idea`, `research`, `proposal`, `production`, `published` |
| `scope` | `city`, `provincial`, `federal`: who has the power to do it |
| `sector` | Free text, one word, lowercase (`transport`, `tax`, `governance`, ...) |
| `countries` | List of countries the idea comes from: `[Japan, Hong Kong]` |
| `video` | YouTube URL once published |

The metric definitions and the formula live in `.cli/reforms.mjs`. Change them there and rebuild.
