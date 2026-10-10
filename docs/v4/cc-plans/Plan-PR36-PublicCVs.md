# Plan — PR #36 · Public CVs (P-CC-PR36-PublicCVs-v1_0)

**Branch:** `deploy/v23-pr36-public-cvs`, from `5ea2182` (origin/main after PR #35)
**Pull request:** #36, manual merge only
**Dispatch:** `BRIEF-CC-PR36-PublicCVs-v1_1.md` → `P-CC-PR36-PublicCVs-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository

This file holds the plan as approved, then the re-plan approved after G1. Where they differ, the re-plan governs.

---

## 1. The plan as approved (9 Oct)

### Scope
About's hero offered two placeholder CV files: one PDF, and one Spanish Markdown file that printed a phone number and district.
Four locked files replace them, one per format and language, carried byte for byte. Each download button follows the
reader's language. Copy, labels, layout and Contact are out of scope, and so is every page other than About.

### Method
- The four files are copied into `assets/docs/`, each sha256-equal to its source.
- Two new About dictionary keys, `about_cv_href` (PDF) and `about_cv_href_md` (MD), hold each language's path. The
  markup keeps the English files as the default.
- A new page module, `assets/js/pages/about/cv.js`, listens to the engine's existing `i18n:changed` event and points
  every `[data-cv-href]` link at the active language's file. `pages/about/main.js` registers it before the engine's `init()`.
- Untouched: `core/i18n.js`, `core/paths.js` and the inline theme and early-language scripts.
- The placeholders are removed once nothing live links to them. Historical mentions in `docs/` stay as run history (PR36-Q1).

### Gates

| Gate | Content | Release phrase |
|---|---|---|
| Plan | this plan | `APPROVED PR36 PLAN` |
| G1 · CVs | four files, per-language links, placeholders retired | `APPROVED PR36 G1` |
| G2 · Release | regression, attribution scan, this archive, the PR body | `APPROVED PR36 G2` |

### Verification
- The headless matrix on all 7 pages × 390/768/1440 × dark/light × EN/ES (84 cells).
- EN/ES parity and markup fallbacks.
- A link check in Chrome and WebKit:
  - first visit, stored EN, live switch, repeat visit in ES, JavaScript off;
  - every served file is byte-equal to its source.
- About's hero pixel-equal to the baseline.

## 2. Re-plan approved after G1 (10 Oct)

- A review of the G1 diff found no bug and nothing outside About touched.
- One robustness edge was fixed. A dictionary without the CV keys (a stale cached copy just after a deploy) left a link on the
  previous language's file; links now fall back to the markup's English files.
- G2 runs as one regression pass on the tip instead of a full run after every commit.

## 3. Rulings

| Id | Ruling |
|---|---|
| SY35-Q13 | PR #36 is the four public CVs only |
| SY35-Q1 | About's page script sets both CV links from the reader's language on the engine's language-change event; engine and inline early scripts untouched; markup default = English files |
| SY35-Q2 | Public CVs carry no phone and no district; no history rewrite |
| PR35-Q54, Q57, Q59 | Labels and the one-row layout on phones unchanged |
| PR36-Q1 | The five historical lines naming the placeholder files stay; only live references move |
| PR36-Q2 | Plan Mode for the plan only; gates held by their phrases |

## 4. Gate sequence

| Gate | Event |
|---|---|
| Plan | RELEASED 9 Oct |
| G1 | presented 9 Oct; re-presented 10 Oct with the fallback fix; RELEASED 10 Oct |
| G2 | presented 10 Oct; RELEASED 10 Oct; PR #36 opened |
