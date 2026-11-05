# Plan · v1.1.2 copy patch: "high-performing" → "reliable"

Prompt of record: `out/active/PRE-MAX/closing/P-CC-v112-Reliable-v1_0.xml` (governs on any conflict) · brief `BRIEF-CC-v112-Reliable-v1_0.md` · author jdsaire, no AI attribution.

## Context
The 18-cell bar missed twice (B37, B38: 9/18, phone 0/9). SY46-Q16, applied by SY47-Q3, takes "high-performing" / "de alto rendimiento" out of copy and puts in "reliable" / "confiables" (B39, stated). LinkedIn is changed by hand (SY47-Q4). This patch brings the site and README into line so no public surface prints a word the measurement contradicts. Copy only: no layout, performance or key change.

## Brief §6 instructions, measured (4 Nov 2026)
1. **Base:** clone-sync main = origin/main `1b89507` (PR #47 merge, 4 Nov 2026 17:02 −05:00); fetched again, 0/0, no index.lock. HEAD `1b89507`.
2. **Tool line:** inspect 1.1.0 @ `8ba81f4`, clean; floor `8ba81f4 · chrome 156.0.8078.80 · webkit 2359` covers 9 pages, 216 cells; 2 WebKit About cells above 0, already ruled. No noise run.
3. **Occurrences** (`git grep -i -E 'high[- ]performing|alto rendimiento'`, shipped tree): 6 lines, 4 surfaces, all covered by §5, none outside it:
   - `i18n/main.en.json:14` and `i18n/main.es.json:14`, `hero_sub` (Local, page `/`)
   - `index.html:241` hero markup fallback · `:11` meta description · `:19` og:description
   - `README.md:5` offer sentence
   - Excluded as history: Plan-PR44 (2), pr44 report (2), Plan-PR47 (1). "performed / performance / desempeño" in Briefs 03 and 04 is body copy and stays.
4. **Fallback:** after the swap `index.html:241` = `hero_sub` EN = Offer EN, so parity's fallback rule holds (checked by `tools/parity.py`).
5. **Hero line count** (`.hero__sub-hl` line boxes, live `1b89507` in Chrome, fonts loaded, dark; strings put in the DOM for measurement only):

| Width | EN now → after | ES now → after | Hero line box height |
|---|---|---|---|
| 390 | 3 → 3 | 3 → 3 | 77 px, unchanged |
| 768 | **3 → 2** | 2 → 2 | EN 99 → 66 px (−33) |
| 1440 | **3 → 2** | 2 → 2 | EN 112 → 75 px (−37) |

   - EN at 768 and 1440 loses a line, so everything below Main's hero moves up 33–37 px in EN at those widths. Expected in the G2 matrix: Main EN 768 and 1440 cells differ below the hero (8 cells: 2 themes × 2 widths × 2 engines). Every other cell differs only in the label (plus the offer line on Main).
   - Limit: measured with `html[lang=es]` for both languages; G1 re-checks EN with the language control set to EN.

## Rulings (/ask, Plan)
- v1.1.2 row "What a reader sees": **"The offer reads reliable websites and apps, in English and Spanish"** (closes the prompt's [GAP]).
- Archive names by version (SY47-Q1): `docs/v4/cc-plans/Plan-v112-Reliable.md` · `docs/v4/cc-completion-reports/v112-reliable-completion-report.md`.

## Execution

**Start of G1** (first steps after acceptance; Plan Mode allows no writes): `git worktree add -b copy/v112-reliable ../designops-v112 1b89507` from `repos/designops` (read-only there otherwise); serve `repos/designops-v112` at `127.0.0.1:8030` (free at authoring; if taken, stop and report).

**G1 · three commits, budget 30 min, Medium**
1. `copy(main): offer reads reliable`: `i18n/main.en.json` and `i18n/main.es.json` `hero_sub` → §5 EN/ES; `index.html:241` fallback → Offer EN; `:11` → "AI Product &amp; Experience Engineer in Lima. I build reliable websites and apps, directing AI through specs, review gates and tests." (129 characters); `:19` → Offer EN.
2. `copy(readme): offer reads reliable`: `README.md:5` → Offer EN.
3. `release: v1.1.2 label and changelog`: `.nav__version` v1.1.1 → v1.1.2 on 9 pages (`index.html`, `about/`, `contact/`, `feedback/`, `resume/`, the 4 `work/*/index.html`).
   - CHANGELOG.md: #47 Merged "4 Nov 2026"; new row after it: `| pending | v1.1.2 | pending merge | The offer reads reliable websites and apps, in English and Spanish | [plan](../../../docs/v4/cc-plans/Plan-v112-Reliable.md) · [report](../../../docs/v4/cc-completion-reports/v112-reliable-completion-report.md) |`.
   - README.md "Latest changes": same #47 date, and the same row above #47.
   - The plan and report links resolve only once G2 archives them, so `tools/links.py` runs green at G1 only if the row's links are added in the G2 `docs:` commit instead. **Decision: the row carries "—" in Plan · Report at G1 and gets its links in the G2 archive commit.**
- After each commit: `python3 tools/parity.py`, `links.py`, `orphans.py`, `imagery.py` → `failures: 0`; `order.py --strict` → `out of place: 0`. Re-grep: 0 old-word hits in the shipped tree.
- `bin/inspect --mode gate` on all 9 pages (label) and `/` (copy), Chrome 390/1440 dark, EN + ES; attribution grep on the 3 commits.
- Review in the preview browser at `http://127.0.0.1:8030/`: Main hero at 390 / 768 / 1440, EN and ES via the language control. The line reads §5 word for word with the purple highlight; EN shows 2 lines at 768/1440 and 3 at 390. Wordmark v1.1.2 on Main and one brief. View-source of `/` shows the new description and og:description.
- Copy drop: Local · `i18n/main.en.json` + `i18n/main.es.json` · page `/`.
- **STOP: "APPROVED v112 G1".**

**G2 · regression and release, budget 45 min (matrix 25), Low**
- Base worktree `1b89507` (detached) served at `127.0.0.1:8031`; `bin/inspect --mode regression … --pages all --full --webkit all --mask "canvas,.ticker__lanes" --out closing/PR-v112-run/records/G2/`. Re-run once on a browser-closed error; a second failure stops.
- Rule each differing pair by its diff box against `.nav__version`, and on `/` against `.hero__sub` plus the EN 768/1440 reflow below it; anything else is a red row.
- `docs: v1.1.2 plan and report`: this plan as accepted → `Plan-v112-Reliable.md`; completion report (gates, tokens, efforts, elapsed per gate, documentation touched: CHANGELOG, README; DICTIONARIES counts unchanged; SR-3 n/a); links filled into both release rows. Checks clean.
- PR body from `.github/pull_request_template.md`, every box filled; `git push -u origin copy/v112-reliable`; `gh pr create --base main` titled "v1.1.2: the offer reads reliable"; `gh pr view --json autoMergeRequest` reads null. Then `docs: record PR number` fills `#<n>` into both rows and the report; push; print the PR URL.
- **STOP: "APPROVED v112 G2".**

**Close:** PR open for JD's manual merge. Relay plus Cowork post-deploy-sync paste block in chat, saved to `closing/PR-v112-run/TRIGGER-CW-POST-DEPLOY-SYNC-v112.md`. The sync owes: POSITIONING §4 Main rows → brief §5, LinkedIn v3_10 confirmed, then the v1.2.0 dispatch.

## Verification
- 0 shipped hits for either old word; hero, meta and og:description = §5 word for word; README offer = Offer EN.
- Five checks clean after every commit; inspect gate mode 0 at G1; one 216-cell matrix at G2 with every difference explained.
- Label v1.1.2 on 9/9; #47 dated 4 Nov 2026; v1.1.2 rows carry the PR number and resolving links.
- `git log --format='%an|%cn|%B' 1b89507..HEAD`: jdsaire only, attribution 0; auto-merge off; PR URL printed.
