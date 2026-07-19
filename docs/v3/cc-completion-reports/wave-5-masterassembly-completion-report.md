# Wave 5 — Master Assembly · Completion Report

**Repo:** `jdsaire/designops` · **Wave:** 5 (surgical assembly) · **Author of every commit and PR:** jdsaire
**Plan:** `docs/v3/cc-plans/Plan-Wave5-MasterAssembly.md`
**Span:** step-zero commit `2ce95e0` through PR-5 merge `1d9885e`, 19 Jul 2026

## Outcome summary

The site went from a single locked case-study page and a three-card home to a whole, navigable, four-brief multipage site with a real second case study, two honestly-badged placeholders, a working tag filter, and a per-page repository structure that the next waves build directly into. It shipped as a step-zero governance commit, four merge-gated PRs matching the plan, and — after the principal's own live testing surfaced three regressions the mechanical verification available in this environment could not catch — a fifth bugfix PR, also merge-gated, also single-author, also without subagents.

Every PR opened, stopped for the principal's manual check, and waited for an explicit merge instruction before the run continued. No PR was merged by the run itself; no work was ever built on an unmerged branch.

## PR chain

| # | PR | Merge commit | Contents |
|---|---|---|---|
| — | — | `2ce95e0` | Step-zero governance commit: `docs/v3/` established with the roadmap v3.0, its authoring prompt, the enhanced annotations, and this deploy's own prompt |
| [#9](https://github.com/jdsaire/designops/pull/9) | Per-page IA migration | `25b643e` | Home's page-scoped CSS/JS colocated under `assets/{css,js}/pages/home/`; Brief 01's body dictionary colocated under its own folder |
| [#10](https://github.com/jdsaire/designops/pull/10) | Brief 04 case-study page | `4c6e32b` | `work/yape-trust-verify-brief/` built to the v4 spec and copy; receipt wired into Act 01; Gantt and Motion organisms committed as repo files |
| [#11](https://github.com/jdsaire/designops/pull/11) | Placeholder pages | `db95058` | `work/tuua-transfer/` and `work/limafly-ux/` stood up with authored hero copy and badged scaffold |
| [#12](https://github.com/jdsaire/designops/pull/12) | Main upgrade + tag filter | `03bf026` | Fourth work card, standardized CTAs, INDUSTRY/FIELD/ROLE tag filter |
| [#13](https://github.com/jdsaire/designops/pull/13) | Post-merge bugfixes | `1d9885e` | Unplanned — see "The PR-5 bugfix pass" below |

## PASS/FAIL against this deploy's success criteria

| # | Criterion | Result |
|---|---|---|
| 1 | `docs/v3/` holds the governing trio, committed clean | **PASS** — holds four documents; see deviation 1 |
| 2 | PR-1 merged: per-page IA in place; live render identical pre/post; all paths relative; deploy intact | **PASS**, with a caveat surfaced by PR-5: the IA migration itself was mechanically sound (byte-identical file moves, verified path resolution), but the *coincidental* fact that `nav.js` had its own internal relative import was not covered by the safety-invariant checks available at the time — see "What the verification gap actually was" |
| 3 | PR-2 merged: definitive Brief 04 page live, v4 copy verbatim + landed in-repo, receipt wired into Act 01, Gantt+Motion spliced and committed, app evidence wired with SIMULATED intact | **PASS** |
| 4 | PR-3 merged: Brief 02/03 placeholder pages live, real authored hero copy, scaffold Acts visibly badged, no route 404s | **PASS** |
| 5 | PR-4 merged: four cards in a 4×4 grid, standardized CTAs to four real routes, working Tag Filter System | **PASS** as merged; the tag filter and CTA-adjacent language toggle were non-functional immediately post-merge due to an unrelated Home-wide script failure, closed by PR-5 (see below) — the feature itself, once the script executed at all, needed no further change |
| 6 | Every new EN key mirrored temp-ES and logged stale; zero AI attribution; sole author jdsaire | **PASS** |
| 7 | Each intervention landed as its own merge-gated PR; Plan + Completion Report archived under docs/v3/ | **PASS** — five PRs, not four; see deviation 6 |

## Authorized deviations, with reasons

1. **A fourth document joined the step-zero governance trio.** The principal instructed that `P-CC-Wave5-MasterAssembly.xml` itself be included in `docs/v3/` alongside the roadmap, the authoring prompt, and the enhanced annotations — so the deploy prompt that governed this wave is part of its own governing record, not just referenced from outside it.

2. **PR-1's scope was narrower than the prompt's own description implied.** The prompt characterized the pre-migration repo as "flat, single-page era," but Wave 4.5 (PR #7, already merged before this wave began) had already relocated briefs to `work/<slug>/`, split chrome from body content, and made nav context-aware. The actual remaining flat surface was `assets/css/home/`, `assets/js/home/`, and Brief 01's colocated-but-shared body dictionary. PR-1 moved exactly that and no more — a smaller, more honest migration than the prompt's framing suggested, not a shortfall against it.

3. **`index.html` and `assets/i18n/{en,es}.json` were deliberately not moved**, despite "per-page IA" as a stated principle. Both the home i18n engine and every brief page's i18n loader resolve their dictionary URLs relative to the running page at a hardcoded depth. Moving either file would have broken language-swap on every page simultaneously. This constraint is now written down in `docs/v3/IA-CONVENTION.md` so future pages inherit it rather than rediscover it the hard way.

4. **Brief 04's Act 03 (the roadmap/Gantt organism) is grounded more thinly than Brief 01's equivalent.** Brief 01's schedule act was reconstructed from 73 days of public commit history; the Yape app landed in a single commit, so no comparable paper trail exists. Act 03's phases, tasks, and story-point estimates are instead derived from the Wave 4 build plan and completion report, and the on-page caption states plainly that story points express *relative effort*, not a recorded sprint artifact. Authorized by the principal at the planning stage as "instantiate, grounded in the build record" over the alternative of leaving Act 03 reserved.

5. **Brief 04's inherited "4 min read" claim was replaced with a measured "7 min read."** The v4 copy record's own fact register flagged the figure as unverified, and the spec's open item 7 authorized adjusting it. Measured directly from the assembled page (1,517 surface words, ~6.3–7.6 minutes at 200–240 wpm) rather than substituting a second guess.

6. **A fifth PR was added, outside the plan's original four-PR chain**, after the principal's own testing found three regressions PR-4's mechanical verification could not surface. This is recorded as its own numbered success-criterion deviation because the plan explicitly said "four interventions" — the fifth was user-directed remediation, not scope creep, and followed the identical merge-gated, single-author, no-subagent discipline as the original four.

7. **Tag filter matching is faceted (AND across categories, OR within a category), not a literal AND across every active chip.** With a four-card pool, a strict global AND would dead-end after a single cross-industry click (e.g. Banking + Airport could never return anything). The faceted reading — the standard one in faceted search — keeps the shortlist navigable and still satisfies "multiple filters shortlist to the intersection" at the category level, which is the granularity the roadmap actually specifies tags at (INDUSTRY / FIELD / ROLE). Logged for reconsideration if the card count ever grows enough to make strict-AND usable.

8. **`assets/img/work/build-in-progress.svg` was not used as the placeholder-page badge**, despite being named in the deploy prompt. On inspection it proved to be a 2.2 MB abstract art asset from the same family as the other three work-card backgrounds, with no visual in-progress semantics beyond its filename. Placeholder pages instead carry a CSS-built badge reusing the site's existing dashed-purple `.temporal` idiom. The asset was later repurposed (renamed to `verify.svg`) as Work Card 4's background in PR-4, since it was otherwise a 2.2 MB orphan referenced nowhere.

## What the verification gap actually was

This deploy's PR-1 safety invariant checked: absolute-path introduction, CSS link order, JS module init order, orphan references to old paths, and (once served locally) HTTP 200 resolution of every asset a page requests. All of these passed, and correctly so — the file moves were byte-identical and every *direct* reference was updated.

What none of those checks covered: whether a moved file had its *own* internal relative import to a file **outside** the moved directory, where the import's meaning silently shifts with the file's new depth. `assets/js/pages/home/nav.js` imported `../core/i18n.js` — correct from its pre-move location one level up from `assets/js/core/`, wrong from its post-move location two levels up. This is not a path the migration touched or was checked against; it is a second-order consequence of the move that only a full JS-module-graph trace, or actual runtime execution, would surface. No headless browser was available in this environment at any point in the wave, a limitation flagged explicitly on every PR — this is the one instance where that gap had real consequences, since a static ES-module import failure fails silently until executed, and failed the entire dependent module graph (Home's whole `main.js`) rather than just the one broken feature. Closed in PR-5, commit `17b3f6d`.

## The PR-5 bugfix pass

Not part of the original plan; commissioned directly by the principal after live-testing the merged PR-4. Three commits, one root cause investigated and fixed per commit:

1. **`17b3f6d`** — the `nav.js` import fix described above. Its blast radius was large only because the failure mode was total: fixing one line restored the language toggle, the tag filter, the carousel, evolution reveals, the contact form, and the ticker simultaneously, since all of them depend on the same `main.js` module graph that a single broken static import had taken down entirely.
2. **`a297677`** — work-card height, decoupled from the `aspect-ratio` that had been shrinking it in step with the width change PR-4 introduced (3→4 columns). Fixed with a `clamp()` fit through the pre-PR-4 height at both ends of the desktop viewport range, verified to match within 0.3px throughout, plus a defensive `-webkit-line-clamp` on the summary text as insurance.
3. **`f21d1f1`** — backfilled two CHROME-level i18n keys (`chrome_wordmark_sub`, `chrome_nav_cta`) that were absent from `es.json` entirely, not merely stale, and so guaranteed a partially-English brief-page nav bar regardless of selected language. Both values reused existing strings already established elsewhere in the site rather than authoring new copy.

Investigation for this pass used two read-only Explore agent calls before the principal's standing no-subagent constraint was reasserted; every finding from those calls was independently re-verified by direct inspection of the actual files before being acted on, and no further agents were used for the remainder of the pass, including the fix implementation itself.

## Provenance tags — Briefs 02/03 hero copy

Per the deploy prompt's tagging convention, both placeholder pages' hero copy (eyebrow, h2, lede, tags, "the short version") is tagged:

**`[AUTHORED — grounded in Gate1 draft + Work Card]`**

for `work/tuua-transfer/` (grounded in `docs/briefs-v0/Brief-2_TUUA-Transfer_Gate1_v1_0.md` and Home's `work_card2_*` keys) and `work/limafly-ux/` (grounded in `docs/briefs-v0/Brief-3_LimaFly_Gate1_v1_0.md` and `work_card3_*`). Neither is sourced fact; both are flagged as such in their pages' scaffold banners and are superseded wholesale when Waves 2/3 lock real copy.

## Resolved tag values — Briefs 02/03 (PR-4)

Resolved under the deploy's principal-ratified delegation, aligned to the profile and each brief's Gate1 draft:

| Card | INDUSTRY | FIELD | ROLE |
|---|---|---|---|
| 02 TUUA | Airport | Product Design | Program Manager |
| 03 LimaFly | Airport | UX Research · Prototyping | UX Designer |

`Airport` is deliberately shared across both; Briefs 01/04's tags came directly from established positioning and Copy v4's own tag recommendation and needed no resolution.

## Open items carried forward

- **Real ES translation, sitewide** — the still-EN-only keys logged throughout `docs/parking-lot.md`'s "Stale ES keys" sections: Brief 01's empty body dictionary, Brief 04's and both placeholders' fully EN-mirrored body dictionaries, and PR-4's filter/tag/card-4 keys. All await task 5.6's dedicated Sonnet pass. PR-5 closed only the two CHROME-level keys that were outright missing, not stale — brief-page body copy is unaffected and will still render in English under ES until 5.6 runs.
- **Briefs 02/03 real copy** — Waves 2/3 produce the locked copy files; the placeholder-to-final page swap follows once each locks.
- **Placeholder pages' current scaffold** carries Brief 04's real measured figures and staged-security material inside badged, dimmed Acts. This is by design per the deploy's placeholder-discipline rule, but it means those two pages should not outlive Waves 2/3 by much longer than necessary — the badging is the only thing keeping that content from reading as Brief 02/03 claims.
- **Brief 04 Act 03's grounding** rests on the Wave 4 plan and completion report rather than a real estimation exercise; replace the data object if a genuine one is ever produced.
- **Work-card grid width** — PR-5 fixed height, not width. Cards remain narrower under 4 columns than under 3 (~319px vs ~432px at 1440px); already-accepted per PR-4's own review. If a fifth card is ever added, the grid needs a row break rather than a fifth column — noted since Wave 4.5, still unresolved, not urgent.
- **A residual, unverified sizing risk**: PR-5's card-height fix has a small (~30px), unconfirmed margin in the narrow band just above 1024px for the single longest card's summary text — flagged honestly in that PR rather than claimed as fully closed; the added line-clamp is a safety net against it, not a proof it never triggers.

## Standing invariants held throughout

Sole author `jdsaire` on every commit and PR, zero AI/agent/subagent attribution anywhere, gh CLI only with no PAT, no force-push, no direct-to-main outside the two docs-only governance commits (step-zero and this archival), relative paths preserved sitewide, zero-build preserved, `work/yape-trust-verify/` and `static.yml`/`.nojekyll` untouched across all five PRs.
