# PLAN-PR44 · Repository hygiene + carry-ins (v1_0)

Prompt: `out/active/PRE-MAX/closing/P-CC-PR44-RepoHygiene-v1_0.xml` (authoritative) · brief `BRIEF-CC-PR44-RepoHygiene-v1_1.md` · base `1930b8c` · branch `deploy/v31-pr44-repo-hygiene` · Opus 5.5. The plan as accepted; rulings made during the run (PR44-Q6…Q8) are in the completion report.

## Context

- **Why this PR:** an outside inspector meets a repo that opens on its build instead of its author, has no per-PR ledger, and files records by authoring iteration (audit findings 1–12).
- **What PR #43 left owed:** Main's offer meta and fallback (parity 1), two dead artefacts, decoration spec v1.7, and Brief 02's three ledes.
- **"High-performing" is now measured:** the bar is fixed by SY43-Q10, and the result is below.
- **Base:** `1930b8c`, unchanged. Branch: `deploy/v31-pr44-repo-hygiene`, created on acceptance.
- **How it runs:** Opus 5.5, a single session, gates per the prompt's `gate_protocol`. Nothing is pushed before `APPROVED PR44 G7`, and you merge by hand.
- **Server:** Plan Mode is read-only, so the tip server (8000) starts at the first step of G0, not here.

## Correction to my last message

- **Brief numbering:** the CLS 0.135 miss is **Brief 04** (Portfolio Evolution, `work/portfolio-evolution/`), not Brief 01. My task-1 labels swapped b01 and b04 against the repo's numbering (`tools/order.py`: b01 = accreditapass, b04 = portfolio-evolution).
- **What is affected:** only the labels in the raw records and in the changelog line. The URLs and values are correct.
- **Fix:** G2 renames those 12 files to the repo's numbering, and a correction line goes in PRE-MAX-CHANGELOG on acceptance.

## Preflight + censuses (from the prompt's verified_state; no drift at task 0)

- **Checks on the base:**
  - parity `failures: 1` (hero_sub fallback, `index.html:197` vs `i18n/main.en.json:14`);
  - links `failures: 0` (337 links);
  - orphans `failures: 0` (11 dictionaries, 1,085 keys);
  - order `out of place: 0`.
- **Offer outside the dictionaries:** `index.html:7` (meta description), `:13` (og:description), `:197` (fallback). Nothing else.
- **Related pair:** two empty files; the `REGIONAL_FILES` array in the four briefs; `tools/parity.py:16`; `DICTIONARIES.md:10`.
- **Unused illustration:** `about/img/pre-s3-sash.svg`. Its only live reference is `about/img/README.md:13`.
- **Old slug:** 14 live files, 49 refs. `docs/` has 18 files and 30 refs, none of them a Markdown link, and they stay.
- **Lede slots:** after the act 0, 1 and 2 verdict headings in Brief 02's `index.html` (lines 561, 600, 651), as `p.scan` right after the `h2`, with each key right after its `actN_verdict`.

## Performance audit (task 1, live site, 27 Oct 14:03–14:11 UTC)

- **Tool:** Lighthouse 13.5.0, HeadlessChrome 156, simulated throttling. 3 runs per cell, per-metric median, 42/42 runs valid.

| Page | Phone LCP s · CLS · TBT ms | Desktop LCP · CLS · TBT |
|---|---|---|
| Main | 2.35 · 0.000 · 0 | 0.49 · 0.000 · 0 |
| About | **4.58 ✗** · 0.024 · 0 | 0.89 · 0.000 · 0 |
| Contact | 1.96 · **0.164 ✗** · 0 | 0.40 · 0.066 · 0 |
| Brief 01 AccreditaPass | 1.50 · 0.003 · 0 | 0.36 · 0.003 · 0 |
| Brief 02 Trust & Verify | 1.96 · 0.004 · 0 | 0.45 · 0.030 · 0 |
| Brief 03 TUUA | 2.10 · 0.002 · 0 | 0.44 · 0.002 · 0 |
| Brief 04 Portfolio | 1.66 · **0.135 ✗** · 0 | 0.36 · 0.002 · 0 |

- **Count:** 11/14 meet all three thresholds, so **G2 selects README variant B**. Desktop is 7/7, and TBT is 0 on every page.
- **What causes each miss** (diagnostic only; nothing gets tuned, SY43-Q10):
  - About: the slowest element to appear is the `.bridge__heading-wrapper` block.
  - Contact: `section#contact` shifts, the same in all 3 runs.
  - Brief 04: `div.rolestrip` shifts, the same in all 3 runs.

## G0 · inspect tool — High

- **Home:** `/Users/jd-mac/dev-tools/inspect/`.
  - It sits outside every repo, so every run uses the same file.
  - It has its own local git history (author and committer jdsaire, no remote) and is never under `repos/`. Its path goes in RESUME.
- **Dependencies, exact versions:**
  - `playwright-core@1.64.1`, `pixelmatch@5.3.0`, `pngjs@7.0.0`: the PR41 harness set, already proven here.
  - `axe-core@4.14.0`.
  - Chrome by `channel: "chrome"`; WebKit by `executablePath` (`~/Library/Caches/ms-playwright/webkit-2359/pw_run.sh`).
- **Layout:**
  - `bin/inspect` (CLI to the skill's call shape);
  - `lib/` with `checks.js` (runs the repo's four tools from the root and records each last line), `page.js` (console errors, failed requests, unresolved keys = `[data-i18n]` empty or equal to its key, horizontal overflow, duplicate ids, CLS by PerformanceObserver, longest one-shot from `animationend` / `transitionend` timings), `matrix.js` (capture, pixelmatch, pairs), `attrib.js` (author and committer jdsaire + the word list across messages, trailers, the branch name, the PR body and added lines), `digest.js` (the DIGEST.md format verbatim);
  - `README.md`.
- **Changed pages and engines:** from `git diff --name-only <base>...<tip>`. CSS or JS changes, including a brief's inline `<script>`/`<style>` hunk, add WebKit.
- **Pages renamed by G3:** a base→tip path map (`work/yape-trust-verify-brief/` → `work/trust-verify-brief/`).
- **Pixel threshold:** pixelmatch `threshold: 0` (exact, the PR #41–#43 precedent: 84/84 and 0/96 zeros).
  - A cell differs when its differing pixels exceed that same cell's base-vs-base count, which is expected to be 0.
  - Brief 03's live canvases are masked (the capture-noise rule). Pages are scrolled before full-page capture.
  - If the noise run shows a floor above 0 on any cell, G0 reports the cells and a revised rule for you to rule on.
- **Exit code:** non-zero on any red count.
- **Proof on the base:**
  - `--mode gate`, 7 pages, expecting red only on parity 1;
  - `--mode regression` base-vs-base (8000 and 8010, both at 1930b8c) over the full G7 cell set, so G7 reuses that floor.
  - DIGESTs go to `PR44-run/digests/G0-gate/` and `G0-noise/`. Nothing goes to designops.

## G1 · Carry-ins — Medium (7–8 commits)

1. `fix(main)`: offer meta and fallback.
   - `:197` fallback and `:13` og = POSITIONING-v1_12 §1.2 EN.
   - `:7` = §4's value with "seamless" → "high-performing" (136 characters). Parity → 0.
2. `chore`: remove the related pair.
   - Delete `assets/i18n/briefs/related.{en,es}.json`.
   - Drop `"related"` from the four `REGIONAL_FILES` arrays and from `tools/parity.py:16`.
   - Remove the `DICTIONARIES.md` row; dictionaries go from 11 to 10.
3. `chore`: delete `pre-s3-sash.svg` and its README row.
4. `docs`: `docs/v3/organisms/decoration-system.spec.md` = v1.7, checked with `cmp` and the sha256 recorded.
5. `feat(brief02)`: ledes EN. Three `<p class="scan" data-i18n="actN_lede">` elements, with the EN key placed right after each `actN_verdict`.
6. `feat(brief02)`: ledes ES from the lock.
7. `fix(brief02)` (only if needed): read time, using `closing/PR42-run/harness/h/rt40.js` on EN and ES, `.rt` set to the measured value (SR-3).

- **Checks:** the four checks after each commit; `inspect --mode gate` on Main, About and the four briefs (0 console errors, 0 failed requests, EN and ES).
- **Review:** `/`, `/work/yape-trust-verify-brief/#v0`, `#v1`, `#v2`, `/about/`, at 390 and 1440, dark.

## G2 · Measurement record — Medium (no repo change)

- `PR44-run/records/PERF-AUDIT-PR44-v1_0.md` from the raw JSON: method, the table above, the three misses with their elements, variant **B** with the three deciding rows.
- `proposals/EVIDENCE-PROPOSAL-PR44.md`:
  - claim, measured lab run, source with date, limits (lab not field, phone and desktop presets, 27 Oct 2026, Lighthouse 13.5.0);
  - result: phone 4/7 and desktop 7/7 on the bar;
  - "never a score or 'fast' in copy".

## G3 · Brief 02 slug — Medium (2 commits)

1. `refactor(repo)`: the rename and its references.
   - `git mv work/yape-trust-verify-brief work/trust-verify-brief`, with its `docs/` subfolder (the convention IA-CONVENTION already states).
   - The 49 live refs: nav and menus ×7 pages, Main's work card, Keep exploring, `tools/order.py`, `tools/parity.py`, `DICTIONARIES.md`, `README.md`, `work/README.md`, the brief's two READMEs.
   - **The internal names are kept**: `i18n/yape-trust-verify.{lc}.json` and `assets/img/work/yape-trust-verify.svg`. That is the smallest change, and PR43B-Q4 rules the slug only. Renaming them instead would add about 8 file edits and 2 `git mv`.
2. `feat(repo)`: the stub at the old slug, per PR44-Q2, copying the pattern of `work/designops-system/index.html`.

- **Check:** `git grep yape-trust-verify-brief -- ':!docs'` → only the stub and the retired-address lines.

## G4 · Structure (findings 4–11) — High (~5 commits)

| Finding | Proposal | Moves · citations broken |
|---|---|---|
| 4 Ledger | New root `CHANGELOG.md`: PRs #1–#44, oldest first. Each row: PR (link), merged date, what a reader sees (one factual line from the PR title and its report), plan · report links. **No merge tags** (43 remote pushes for no reader gain; the ledger is the record) | 0 moved · 0 broken |
| 5 docs/ by iteration | **Keep every path.** Rebuild `docs/README.md` by type: specs, standing rules, history; the run table becomes "every run's plan and report: `../CHANGELOG.md`" | 0 moved. Restructuring would break 413 closure files, 3 skills, 75 in-docs links and 8 in-repo links |
| 6 Prompts and parking lot in docs/ | **Keep in place**, labelled in `docs/v3/README.md` and `docs/README.md` as working files of the Wave 5–6 runs, frozen and kept where cited | 0 moved. Moving breaks 19–35 closure citations each, and 24 repo files cite the parking lot |
| 7 docs/v4 opening sentence | Replace it with two plain lines plus a pointer to the ledger. This also adds the PR #43 row that PR #43 missed (absent from `docs/README.md` and `docs/v4/README.md` today) | 0 |
| 8 work/ stubs | The three stubs stay at their addresses (moving one would 404 its URL). `work/README.md` gets a "Retired addresses" table | 0 |
| 9 IA-CONVENTION | Refresh the layout (`about/`, `contact/`, root `i18n/` = Main's page folder, `logos/`, `assets/i18n/briefs/`, `tools/`, `docs/v4/`, the stubs). Remove line 49's exemption (the app left on 1 Sep 2026, PR #22). Add the README rule and neutral slugs. The two never-move paths are unchanged | 0 moved · 9 citers keep working |
| 10 Root i18n/, logos/ | **Keep, with the reason written in IA-CONVENTION:** the root is Main's page folder; `logos/` has 26 references across Main, About and Contact | 0 |
| 11 41 READMEs | **All 41 stay.** Rule: one README per folder where a reader chooses something; leaf data folders (`i18n/`, `img/`, stubs) are described by their parent. The duplicate index goes: the root README stops listing records and links `docs/README.md` once | 0 |

- **Checks:** links.py before and after, counts reported.

## G5 · Root README — Medium (1 commit)

- **Opening:** README-LOCK §1 verbatim with `{OFFER}` = **B** ("I build seamless websites and apps, …"), citing the G2 rows. The Author section is retired.
- **Briefs:** in one row style, `Brief NN · Name · sector | path | hero_title. hero_deck/lede`, verbatim from each brief's live dictionary.
- **Where everything lives:** a short map. "How a change ships" (gates, exact phrase, SR-4, completion report) moves to `docs/README.md`.
- **Ledger:** the last five rows plus a link to `CHANGELOG.md`.
- **Check:** `diff` against the lock → 0 differences besides `{OFFER}`.

## G6 · READMEs + release prep — Medium

- **SR-4:** `about/img/`, `assets/README.md` (i18n/briefs), `work/` and the brief's READMEs, `docs/` indexes, `DICTIONARIES.md` counts, `tools/README.md` (parity list; `order.py`'s "out of place" line).
- **Proposals** in `PR44-run/proposals/`: KEYS v1_8, POSITIONING notes.
- **Archive:** `docs/v4/cc-plans/Plan-PR44-RepoHygiene.md` + `docs/v4/cc-completion-reports/pr44-repo-hygiene-completion-report.md`, plus ledger rows.
- **PR body:** `PR-44-BODY.md` on the template.
- **Backlog lines** (out of scope, `PRE-MAX-BACKLOG.md`): Brief 02's and Brief 04's `<title>` still carry pre-relock lines.

## G7 · Regression + release — Low

- **Matrix:** 7 pages × 390/768/1440 × dark/light × EN/ES in Chrome = 84 cells, plus WebKit on the four briefs (loader JS) = 48 cells. 132 cells against the G0 floor.
- **Also measured:** spec §10.5's longest one-shot (vs 1,450 ms), CLS per page, contrast (axe).
- **Other checks:** read time on Brief 02, both slugs, attribution on every commit, branch and body.
- **Release:** DIGEST attached → STOP → on `APPROVED PR44 G7`, push, open the PR, relay + paste block. Task 11 runs after your merge word.

## Effort per gate

G0 High · G1 Medium · G2 Medium · G3 Medium · G4 High · G5 Medium · G6 Medium · G7 Low · task 11 Low.

## Verification (end to end)

- **The four repo tools at every gate:** parity, links and orphans `failures: 0`; order `out of place: 0`.
- **inspect:** `--mode gate` counts in every report from G1 on; `--mode regression` at G7 (0 unintended differences).
- **Live review:** the preview browser at 8000, Chrome 390/1440 dark, hard reload after dictionary changes.
- **Byte checks:** `cmp` for spec v1.7 and `diff` for the README opening. The ledes are compared to the lock by JSON value.
- **After the merge:** `git ls-remote --heads --tags origin` → main plus `archive/pre-reorg-backup` at 43d0db1.
- **Records:** `out/active/PRE-MAX/closing/PR44-run/`. The accepted plan is saved there as `PLAN-PR44-v1_0.md`.
