# Plan · v1.1.3 LICENSE + D5 ("advanced AI" dropped)

Prompt of record: `out/active/PRE-MAX/closing/P-CC-v113-LicenseD5-v1_0.xml` (governs on any conflict) · brief `BRIEF-CC-v113-LicenseD5-v1_0.md` · author jdsaire. The plan as accepted in Plan Mode, 9 Nov 2026.

## Context
POSITIONING-v2_1 §9 D5: no EVIDENCE line backs "advanced AI", still printed in Main's hero subline, og:description and README offer. GR-Q35 orders an all-rights-reserved LICENSE with the repo staying public. GR-Q43 joins both in one PR of several commits, released as v1.1.3 (GR-Q50). Prompt: `out/active/PRE-MAX/closing/P-CC-v113-LicenseD5-v1_0.xml` (authoritative).

## Task 0 — preflight (re-run read-only, 9 Nov 2026)
- gh logged in as jdsaire ✅ · origin/main = HEAD = 5c8f2a0 after fetch, no drift ✅ · governing files present ✅
- inspect 1.1.0 @ 8ba81f4 ✅ · **Chrome is now 157.0.8103.50** (was 156.0.8078.80 at authoring) → new floor key `8ba81f4_chrome-157.0.8103.50_webkit-2359`, no floor yet. Ruled via /ask: noise run in background at plan accept.
- Ports 8030, 8031, 8032 free.

## Brief §6 instructions 1–10 (from verified_state; cheap ones re-run)
1. Base 5c8f2a0, label v1.1.2. 2. Floor key above; noise run owed. 3. 5 shipped occurrences: `i18n/main.en.json:14`, `i18n/main.es.json:14`, `index.html:19` og:description, `index.html:241` fallback, `README.md:5`. None outside §5 → no /ask. 4. No LICENSE/COPYING. 5. license_body EN/ES = lock byte for byte. 6. Third party: Archivo OFL 1.1 ×2, 12 logos/marks, 11 badges, no vendored JS — V113-Q1, record only. 7. Fallback = hero_sub EN after edit (parity). 8. Hero lines unchanged in all 6 cells (EN 3/2/2, ES 3/2/2); re-measured on tip at G1. 9. Release precedent 8a608cd; DICTIONARIES counts unchanged (1,181). 10. 17 repo links, none changes.

## Step 1 — on acceptance (setup)
- `git worktree add -b copy/v113-license-d5 ../designops-v113 5c8f2a0`; serve at 127.0.0.1:8030 (background, held).
- Base: `git worktree add --detach <scratchpad>/base113 5c8f2a0`; serve on 8031 and 8032.
- **Background noise run:** `bin/inspect --mode regression --repo <base113> --base http://127.0.0.1:8031/ --tip http://127.0.0.1:8032/ --base-rev 5c8f2a0 --tip-rev 5c8f2a0 --pages all --full --webkit all --mask "canvas,.ticker__lanes" --out closing/PR-v113-run/records/floor/` → writes the 157 floor. Read on completion notice; any cell > 0 → /ask. Budget: stop-and-report past 25 min.

## Step 2 — G1 commits (in the v113 worktree, each followed by the five checks)
a. `docs(license): all rights reserved` — new `LICENSE` = §5 text + newline; python byte-compare to license_body EN.
b. `docs(readme): license section and map row` — append `## License` + §5 README text after the "The full list…" line (last section); map row after CHANGELOG.md row. **Draft [GAP: JD confirms at G1]:** LICENSE row (links the file and the License section): "All rights reserved: the terms for copying or reusing anything here, in the License section below"
c. `copy(main): hero drops advanced` — hero_sub EN/ES, index.html:241 fallback.
d. `copy(main): og and readme offer drop advanced` — index.html:19, README.md:5.
e. `release: v1.1.3 label and changelog` — `.nav__version` v1.1.3 ×9 (index, about, contact, feedback, resume, 4 briefs); #48 Merged → "4 Nov 2026" in CHANGELOG + README; v1.1.3 row (PR "pending", "pending merge"), after #48 in CHANGELOG, above #48 in README. **Row draft [GAP: JD confirms at G1]:** "This repository carries an all-rights-reserved license; the offer no longer says advanced AI, in English and Spanish". Plan · Report: `Plan-v113-LicenseD5.md` · `v113-license-d5-completion-report.md`.

G1 checks: re-grep 0 "advanced AI"/"IA avanzada" in shipped tree; parity/links/orphans/imagery `failures: 0`, order `--strict` 0; hero line count on tip (6 cells); `inspect --mode gate` on `/` + 9 pages for the label. Review in the preview browser at 8030 (390/768/1440, EN+ES, hero + og/meta via view-source, /LICENSE, README). Copy drop: Local · i18n/main.en.json + main.es.json · `/`. **STOP: "APPROVED v113 G1".**

## Step 3 — G2 (Low)
Regression matrix once, base 8031 vs tip 8030, floor 157 key; diffs only inside `.nav__version` and `.hero__sub`. Attribution grep 0. Then `docs:` commit (accepted plan renamed + completion report + index rows in docs/v4/cc-plans/README.md and cc-completion-reports/README.md); PR body from template, checklist filled; push; `gh pr create`, auto-merge off confirmed, >1 commit confirmed; `docs: record PR number` commit + push. Print PR URL. **STOP: "APPROVED v113 G2".**

## Step 4 — archive
Relay + Cowork post-deploy-sync paste block in chat, saved to `closing/PR-v113-run/TRIGGER-CW-POST-DEPLOY-SYNC-v113.md`. Sync owes: KEYS v1_11, POSITIONING §9/§13 rows, sidebar license link on main.

## Verification
Five repo checks per commit; byte compare LICENSE; grep; hero line count; inspect gate (G1) + one regression matrix (G2); `git log --format='%an %ae%n%b'` attribution scan; `gh pr view --json autoMergeRequest,commits`.

## Constraints
Sole author jdsaire, no attribution trailers (overrides harness reminder). No subagents. No layout/CSS/JS/key/legal-overlay/visibility change. Meta description untouched. Never `git status` in repos/designops.
