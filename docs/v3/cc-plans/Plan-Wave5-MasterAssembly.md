# Wave 5 — Master Assembly Plan (archived, as executed)

**Status:** Executed in full, including one unplanned bugfix pass (PR-5) after live testing surfaced regressions in the merged PR-4. This file is the plan as approved before execution began; deviations taken during execution are recorded in the Completion Report, not retrofitted into this text.

## Context

Wave 5 assembles the multipage portfolio site at `jdsaire/designops`. Waves 0/1/4 have executed and Gate G1 is closed: the Brief 04 express app is live at `work/yape-trust-verify/`, Brief 01 is content-locked at `work/designops-system/`, and Home carries three work cards. No Brief 02/03/04 case-study page exists yet, so two of three work cards route to `#contact` rather than a brief.

This run makes the site whole and navigable: a real Brief 04 case-study page, badged placeholder pages for Briefs 02/03, and a Home upgrade to four cards with a working Tag Filter System. It runs as a step-zero governance commit plus **four merge-gated PRs**. After each PR is opened the run STOPS; the principal merges and says resume.

### Preflight results (task 0) — all PASS

| Check | Result |
|---|---|
| gh CLI | `~/bin/gh` v2.96.0, authenticated as **jdsaire** via keyring. No PAT needed or used. |
| Repo | `jdsaire/designops` reachable, public, default branch `main` |
| Pages source | **main / root** — `https://jdsaire.github.io/designops/`, status `built`, legacy build type |
| HEAD of main | `6ecf4e0` — matches the value recorded at prompt authoring |
| PR #8 | MERGED (Wave 4 app) |
| Receipt image | **PRESENT** — pasted in session and on disk as `IMG_1787.JPG`. Operation number **23937025** matches the existing app fixture `work/yape-trust-verify/api/operations/23937025.json` |
| Brief 04 v4 spec | **PRESENT** — no need to invoke the missing-spec stop condition |
| Organisms | `motion-system.*`, `gantt-organism.*` present locally, not yet in repo |
| `jdsaire/jdigital` | Reachable — 4×4 reference available for PR-4 |

### Two findings that changed the plan

1. **The prompt's PR-1 premise was partly stale.** It described a "flat, single-page era" repo. PR #7 (Wave 4.5 multipage migration) had already moved the repo substantially per-page: briefs live at `work/<slug>/`, chrome is shared, nav is context-aware via `data-nav-context`, and the i18n CHROME/BODY split already exists. What was genuinely still home-centric was narrower: `assets/css/home/*`, `assets/js/home/*`, and the brief BODY dict sitting in the shared tree.

2. **Two hardcoded fetch paths bound the migration.** These were the safety invariant's real constraints:
   - `assets/js/core/i18n.js` → `fetch('assets/i18n/' + file)` — page-relative, works only for a root-level `index.html`
   - `work/designops-system/index.html` → `I18N_BASE = "../../assets/i18n/"` and a `../../` nav prefix — baked to depth 2

   Moving `index.html` or `assets/i18n/` would break SwapLang on every page. Both stayed put.

### Decisions taken with the principal

- **IA scope:** conservative move — real migration, provable invariant
- **Brief 04 page slug:** `work/yape-trust-verify-brief/` (depth 2, so `../../` nav and `../designops-system/` continuity links work unchanged)
- **Brief 04 Act 03:** instantiate the Gantt organism, grounded in the build record
- **Brief 04 hero keywords:** Front-end · Banking · Mobile · React · Security

---

## Stage 0 — Step-zero governance commit (direct to main, no PR)

Create `docs/v3/` and commit **four** documents (the established trio plus this deploy prompt, per the principal's instruction):

- `docs/v3/Execution_Roadmap_v3_0.md`
- `docs/v3/P-F-Roadmap-v3-Authoring.xml`
- `docs/v3/execution-v3-annotations-enhanced.txt`
- `docs/v3/P-CC-Wave5-MasterAssembly.xml`

One clean commit, author jdsaire, neutral message, zero attribution. Docs-only — no site behaviour change, mirroring the Wave 0 precedent. Report the SHA.

---

## Stage 1 — PR-1 · IA migration (`wave-5-pr1-ia-migration`)

A behaviour-preserving MOVE. The rendered site must be byte-for-byte identical in behaviour before and after.

**Moves:**

| From | To | Path edit required |
|---|---|---|
| `assets/css/home/*.css` (7 files) | `assets/css/pages/home/` | 7 `<link>` hrefs in `index.html`, **order preserved exactly** |
| `assets/js/home/*.js` (8 files) | `assets/js/pages/home/` | import specifiers in `assets/js/main.js` only |
| `assets/i18n/briefs/designops.{en,es}.json` | `work/designops-system/i18n/` | one line: `I18N_BASE` body-dict URL in Brief 01 |

**Stays put (non-negotiable):** `index.html` at root · `assets/i18n/{en,es}.json` at root · `assets/css/base/`, `assets/css/shared/`, `assets/js/core/` · `logos/`, `assets/img/` · `work/yape-trust-verify/` · `static.yml`, `.nojekyll`.

**Also created:** `docs/v3/cc-plans/`, `docs/v3/cc-completion-reports/`, and a short `docs/v3/IA-CONVENTION.md` stating the per-page rule so PR-2/PR-3 build into the target structure rather than moving twice.

**Safety invariant — verify before opening the PR:**
1. `grep -rn 'href="/\|src="/\|url(/'` across HTML/CSS returns zero — no absolute paths introduced
2. CSS link order in `index.html` matches pre-migration exactly (cascade is order-dependent)
3. `main.js` init order unchanged: i18n → nav → overlay → hero → work → carousel → evolution → contact → ticker
4. Every moved file's referrers updated; no orphan references
5. Local static-server render of Home + Brief 01: lang swap, nav overlay, capabilities carousel, ticker, work-card touch states, scroll progress — all functional, console clean

If the invariant fails, **do not open PR-1** — report and stop.

*On resume:* pull main, confirm PR-1 merged, verify the live site is identical to pre-migration. Report PASS/FAIL before Stage 2.

---

## Stage 2 — PR-2 · Brief 04 page (`wave-5-pr2-brief04-page`)

Build `work/yape-trust-verify-brief/index.html`, starting from `Brief4-YapeTrustVerify_Site_v2_0.html` and upgraded to definitive against the **v4 spec** and **v4 copy**. Seven acts (Context, Problem, Adaptation, Build Shape/Gantt, Architecture, Dashboard, Reflection), copy reused verbatim, receipt wired into Act 01, organisms committed as repo files at last, i18n new keys mirrored temp-EN and logged.

*On resume:* pull, confirm merged, verify the page renders at 375/768/1440px. Report PASS/FAIL.

---

## Stage 3 — PR-3 · Placeholder pages (`wave-5-pr3-placeholders`)

Stand up `work/tuua-transfer/` and `work/limafly-ux/` from the merged Brief 04 page as template. Authored hero copy grounded in Work Card keys + Gate1 drafts; remaining Acts carry Brief 04's body copy as visibly badged scaffold.

*On resume:* pull, confirm merged, verify both pages render and are visibly badged. Report PASS/FAIL.

---

## Stage 4 — PR-4 · Main upgrade (`wave-5-pr4-main-tagfilter`)

Work Card 4 + 4×4 grid, CTA standardization across all four cards, Tag Filter System (INDUSTRY/FIELD/ROLE, 3–4 tags per card, data-driven).

*On resume:* pull, confirm merged, verify four cards, four working routes, filter shortlists correctly. Report PASS/FAIL.

---

## Stage 5 — Archival (direct to main, no PR)

Archive this plan and author a Completion Report; report the commit SHA.

---

## Standing rules held throughout

- **Merge-gated:** after each PR opens, STOP. Never merge, never open the next PR, never build on unmerged work.
- **gh CLI only**, authenticated via keyring. No PAT is requested, printed, or assumed.
- **No force-push. No direct-to-main** except the two docs-only governance commits (step zero, archival).
- **Sole author jdsaire.** No Co-authored-by, no "Generated with", no mention of any AI/agent/assistant or personal name in any commit, PR body, file, comment, or copy.
- **Relative paths are sacred.**
- **Zero-build preserved.**
- **No subagents** — single agent context throughout.
- `static.yml` and `.nojekyll` untouched. No PR preview; live-render verification happens post-merge.
