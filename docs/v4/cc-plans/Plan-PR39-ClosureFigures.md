# Plan — PR #39 · Closure figures (P-CC-PR39-ClosureFigures-v1_0)

**Branch:** `deploy/v26-pr39-closure-figures`, from `6261415` (origin/main after PR #38)
**Pull request:** #39, manual merge only
**Dispatch:** `BRIEF-CC-PR39-ClosureFigures-v1_3.md` → `P-CC-PR39-ClosureFigures-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository

This file holds the plan as approved and the rulings taken at its gates.

---

## 1. The plan as approved (13 Oct)

### Scope
- Four fixes raised during PR #38, each behind its own gate, in this order:
  - **G1** — Brief 02 Act 04's first card centred its label in English at the smallest breakpoint; fix it and sweep all 7 pages, EN against ES.
  - **G2** — the phone menu must never show the plain × instead of its purple close; while open, the button is named "Close menu".
  - **G3** — Brief 02 Act 02 drops its previous/next controls; the row scrolls natively with snap and a peek.
  - **G4** — Brief 03's motion carried to the other pages, inside the decoration spec, registered patterns only.
- **G5** — Brief 04's nine "Measured at closure" figures, counted at PR #38's merge `6261415`, with the cut-off stated on the page.
- **G6** — release.
- **Not in scope:** PR #40's mobile organisms, About filters and read time; the hero; hygiene (PR #41); copy beyond the cut-off line, the formula lines and the accessible names a task needed.

### Method
- **Measure before fixing:** every defect reproduced in Chrome and WebKit before any edit; each gate shows before and after.
- **Figures:** one command per value, recorded; computed only at `6261415`; static, no count-up.
- **Decoration spec untouched:** new usage and stale lines go to a proposals file for the next spec version.
- **Baselines on `6261415`:** dictionary snapshot; matrix 84/84 with zeros; parity 0; contrast 292 (pre-existing); final frame equals reduced motion on 74/74 components.

### Gates
| Gate | Release phrase |
|---|---|
| Plan | `APPROVED PR39 PLAN` |
| G1 · Centring | `APPROVED PR39 G1` |
| G2 · Menu × | `APPROVED PR39 G2` |
| G3 · Act 02 | `APPROVED PR39 G3` |
| G4 · Motion (map, then build) | `APPROVED PR39 G4` |
| G5 · Figures | `APPROVED PR39 G5` |
| G6 · Release | `APPROVED PR39 G6` |

## 2. Rulings

| Id | Ruling |
|---|---|
| PR39-Q1 | The cut-off line states 12 Oct 2026: PR #38 merged 13 Oct 02:06 UTC, 12 Oct 21:06 in Lima, and the page's dates are local. |
| PR39-Q2 | The open menu button is named "Close menu" / "Cerrar menú"; `navchrome.js` in scope; no new keys. |
| PR39-Q3 | The decoration spec stays untouched in this PR; amendments are proposed for the next version. |
| PR39-Q4 | The three multi-page rates carry formula lines, like the single-page column. |
| PR39-Q5 | Motion map pick A: Brief 04 Act 04's numbered cards light in reading order from 768; Brief 03's relay motion reaches the other briefs' phones with PR #40's relay timelines; Main, About and Contact unchanged. |
| PR39-Q6 | The multi-page figures use the single-page column's counting rule: every commit including merges, date-difference days, distinct commit dates; window from 28 Aug 2026. |
| PR39-Q7 | Organisms = `<section>` count across the 7 pages (the single-page method). |
| PR39-Q8 | The single-page method note returns under the dashboard, beside the cut-off line. |

## 3. Gate log

- Plan — released `APPROVED PR39 PLAN`.
- G1 — released `APPROVED PR39 G1`; the preventive commit on Briefs 01, 03 and 04 kept.
- G2 — released `APPROVED PR39 G2`; the full 224-run menu grid was cut short at my request and replaced by a 56-run grid before and after.
- G3 — released `APPROVED PR39 G3`; the track's name kept as shipped ("stops"), the pillars wording offered and not taken.
- G4 — map presented, pick A (PR39-Q5); build released `APPROVED PR39 G4`.
- G5 — released `APPROVED PR39 G5` after rulings PR39-Q6 to Q8.
- G6 — release.
