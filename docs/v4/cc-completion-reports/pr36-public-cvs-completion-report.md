# Completion report — PR #36 · Public CVs

**Branch:** `deploy/v23-pr36-public-cvs`, from `5ea2182` · **Pull request:** #36, manual merge only (link recorded after opening)
**Plan:** [Plan-PR36-PublicCVs.md](../cc-plans/Plan-PR36-PublicCVs.md)

## 1. Commits

In order, on `deploy/v23-pr36-public-cvs`:

- `eed5ef5` — "feat(about): carry the four public CVs"
- `8b6de2a` — "feat(about): link each CV by the reader's language"
- `19b0e09` — "chore(about): retire the placeholder CV files"
- `80753b6` — "fix(about): fall back to the English CV when a language has no CV link"
- (this commit) — "docs: archive the PR #36 plan and completion report"

Four commits before this one, one per item. The fix is the re-plan's single correction to G1.

## 2. Outcome

About's hero now offers the locked CV in the reader's language: English readers download
`CV_Juan_Diego_Saire_EN.pdf` and `.md`, Spanish readers the `_ES` pair, and a language switch flips both buttons without a
reload. The markup carries the English files, so a page without scripts, or a dictionary that arrives without the CV
keys, gives the English CV. The four files in `assets/docs/` are byte-identical to the locked sources. The two placeholders
are gone, and nothing live links to them.

The invariants held:
- the i18n engine, the path helpers and the inline early scripts are unchanged;
- no label, layout or other page changed.

## 3. Results against the success criteria

| # | Criterion | Result |
|---|---|---|
| 1 | Every gate released only on its phrase | PASS: Plan 9 Oct; G1 10 Oct after one re-presentation; G2 below |
| 2 | EN readers get EN files, ES readers ES; live switch flips both; JavaScript off gives EN | PASS: link check 7/7 in Chrome and 7/7 in WebKit on the tip |
| 3 | Repo files byte-identical to sources; placeholders gone, nothing live links to them | PASS: sha256 4/4, served bytes 4/4; a live-reference search finds 0 (5 historical lines kept, PR36-Q1) |
| 4 | Labels and layout unchanged | PASS: About's top 1500 px pixel-identical to the baseline in 12/12 cells; page size identical in 12/12 |
| 5 | Matrix, parity, fallbacks, contrast | PASS: 84/84 with 0 errors, overflow, clipped, unresolved, unapplied and missing keys; parity 0; fallbacks = EN; no colour or layout change, so no new contrast failure |
| 6 | Engine, early scripts and path helpers unchanged | PASS: none of them appears in `git diff origin/main..HEAD` |
| 7 | No AI attribution; sole author jdsaire | PASS: 4/4 commits authored and committed by jdsaire; 0 trailers. The only AI product names added are the CV's own skills lines, carried verbatim |
| 8 | Pushed after G2; PR open, unmerged | recorded after opening |
| 9 | Plan and report archived with index lines; links resolve | PASS: 1/1 internal links under docs/v4 resolve (the new report's link to its plan); docs/v4 had 0 internal Markdown links before |

## 4. Authorized deviations

- The baseline capture ran after the plan phrase instead of in task 0, because Plan Mode is read-only.
- The re-plan after G1 replaced the per-commit matrix with one regression pass on the tip.
- The new branch's upstream (`origin/main`, set by `git switch -c`) was removed so a bare push cannot target `main`.

## 5. Decisions resolved autonomously

- Key names `about_cv_href` and `about_cv_href_md`, after `about_cv_cta` and `about_cv_cta_md`.
- Routing lives in a new page module, `assets/js/pages/about/cv.js`, with a `data-cv-href` hook on each link.
- `cv.js` is registered before the engine's `init()`, so the first language event cannot be missed.

## 6. Open items carried forward

- On a repeat visit with Spanish stored, the buttons point at the English files for at most one animation frame (about
  45 ms) before the Spanish dictionary arrives. Measured, accepted, and within the rule that the early scripts stay untouched.
- Brief 04's "Dictionary keys" figure is a dated measurement; PR #39 recounts it at its cut-off (About now has 145 keys per language).
