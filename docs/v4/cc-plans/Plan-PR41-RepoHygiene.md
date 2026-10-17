# Plan — PR #41 · Repository hygiene (P-CC-PR41-RepoHygiene-v1_0)

**Branch:** `deploy/v28-pr41-repo-hygiene`, from `069c7d4` (origin/main after PR #40)
**Pull request:** #41, manual merge only
**Dispatch:** `BRIEF-CC-PR41-RepoHygiene-v1_6.md` → `P-CC-PR41-RepoHygiene-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository

This file holds the plan as approved and the rulings taken at its gates. The run's full working plan and records are in
`out/active/PRE-MAX/closing/PR41-run/`.

---

## 1. The plan as approved (17 Oct)

### Scope
- **G0:** decoration spec v1.5 verbatim, standing rules SR-3 and SR-4, a pull-request template with a documentation checklist.
- **G1:** the repository's structure and a README in every folder of the ruled set, in `jdsaire/accreditapass`'s shape.
- **G1b:** six clean-ups left by PR #39 and PR #40, each proven invisible to readers.
- **G2:** a root map of every dictionary pair, a `tools/` folder anyone can run, the stale-branch list.
- **G3:** release; push and open PR #41, never merge.

### Method
- **No file moves.** Every URL-bearing and engine path stays (SY35-Q5). docs/ is served by Pages too, and the records cite its paths, so it stays by iteration with a type index on top (PR41-Q7).
- **READMEs:** `# <folder>/`, one plain paragraph on what the folder holds and why, a `File | Who it's for` table with relative links, a pointer to the neighbouring folder.
- **Excluded from READMEs:** image-only folders, the dictionary folders (the root map is their one index), `.github/` (a README there would replace the root one on GitHub), and the two retired-route stubs.
- **Tools:** Python 3 standard library only, so a fresh clone runs them with nothing to install.
- **Checks:** every claim about the site measured headless in Chrome and WebKit, against baselines taken on `069c7d4` before any change.

### Gates
Each gate stopped and released only on its exact phrase. Commits landed only after the phrase.

## 2. Rulings

| Id | Ruling | By · when |
|---|---|---|
| PR41-Q1 | Clean-up 1: the menu overlay's plain × is hidden, not removed: it stays in the 7 pages as the open menu button's name source (`aria-labelledby`); `navchrome.js` is untouched | JD · 17 Oct (Plan) |
| PR41-Q2 | Clean-up 3: one shared `assets/css/shared/relay.css`, Brief 03's relay rules as the base and the phone schedule timeline as a `.relay--sched` modifier that resets the base box; all four briefs link it | JD · 17 Oct (Plan) |
| PR41-Q3 | Clean-up 5: the decoration specimen's meters stage, button and CSS are retired in the same commit; its §06 stays as a retired record | JD · 17 Oct (Plan) |
| PR41-Q4 | Clean-up 6: key `act2_aria`, after `act2_lede`, EN and ES | JD · 17 Oct (Plan) |
| PR41-Q5 | The key-order drift in Briefs 01, 02 and 04 (7, 10 and 4 keys) is PR #42's, after its act renumbering; the dictionary map notes it | JD · 17 Oct (Plan) |
| PR41-Q6 | Clean-up 4 covers Brief 04 and Brief 02 | JD · 17 Oct (Plan) |
| PR41-Q7 | docs/ is not moved; a type index (`docs/README.md`) and a README per iteration folder | JD · 17 Oct (Plan) |
| PR41-Q8 | The dictionary map is `DICTIONARIES.md` at the root | JD · 17 Oct (Plan) |

## 3. Gate log

| Gate | Event | Date |
|---|---|---|
| Plan | `APPROVED PR41 PLAN` (after Plan Mode approval; the harness install was approved separately) | 17 Oct 2026 |
| G0 | `APPROVED PR41 G0`; 4578feb, baf6be3, f03711d, cbce1e8 | 17 Oct 2026 |
| G1 | `APPROVED PR41 G1`; 45f2df1, 262e323, 31ef8f5, b67c972 | 17 Oct 2026 |
| G1b | `APPROVED PR41 G1B`, given before the gate report; the commits waited for a clean tip regression; 44e7c68, b217ed9, dfade70, 56d5d06, a7de102, 0c93fe1, ebb40fe | 17 Oct 2026 |
| G2 | `APPROVED PR41 G2. DELETE BRANCHES: all merged`; 0d69fe8, 6f81823; 35 merged remote branches named for deletion after the push | 17 Oct 2026 |
