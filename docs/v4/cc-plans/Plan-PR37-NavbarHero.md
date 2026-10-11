# Plan — PR #37 · Navbar cue and Main hero (P-CC-PR37-NavbarHero-v1_0)

**Branch:** `deploy/v24-pr37-navbar-hero`, from `6c3ab85` (origin/main after PR #36)
**Pull request:** #37, manual merge only
**Dispatch:** `BRIEF-CC-PR37-NavbarHero-v1_1.md` → `P-CC-PR37-NavbarHero-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository

This file holds the plan as approved, then the three re-plans approved during the gates. Where they differ, the latest governs.

---

## 1. The plan as approved (10 Oct)

### Scope
- Phone readers land on dark and Spanish (the defaults) and scroll without finding the theme and language switches, which live in the open menu behind a 22.5 × 13.5 px button.
- The closed menu button grows to a target of at least 44 × 44 px on all 7 pages. On Main only, a first-visit cue plays once per browser.
- Main's hero moves to finer keys with exact EN/ES parity and carries new statements chosen at G2.
- Prototypes came first, on a copy of the site served apart from the branch; the build followed at G4.

### Method
- **Menu button:** one form in `shared/nav.css` reaches all 7 pages; the open/close behaviour in `core/navchrome.js` is untouched.
- **Cue:** `pages/home/navcue.js` + `navcue.css`, imported by Main only. The flag `jds-navcue` is set when the cue starts. It stops on the first tap, scroll, leaving the phone range or its end. Never under reduced motion.
- **Hero:** `hero.js` fits any number of words per line; the dictionaries carry the same key set in EN and ES; an empty word renders nothing; markup fallbacks equal EN.
- **Decoration:** the decoration spec's floor binds. The cue's length and the dot's loop are registered exceptions in spec v1.3.

### Gates

| Gate | Content | Release phrase |
|---|---|---|
| Plan | this plan | `APPROVED PR37 PLAN` |
| G1 · Navbar prototypes | closed-button forms and their cues | `APPROVED PR37 G1 — FINALISTS: <ids>` |
| G1b · Open menu (added, PR37-Q11) | three open-menu layouts and a branded close | `APPROVED PR37 G1B — MENU: <id>` |
| G2 · Hero prototypes | hero designs and statements | `APPROVED PR37 G2 — FINALISTS: <ids> · STATEMENT EN: … · ES: …` |
| G3 · Finalists | the picks together, live | `APPROVED PR37 G3 — NAVBAR: <id> · HERO: <id>` |
| G4 · Build | one commit per item | `APPROVED PR37 G4` |
| G5 · Release | regression, archive, PR body | `APPROVED PR37 G5` |

## 2. Re-plans approved during the gates

- **During G1 (10 Oct):**
  - N1 is the sole finalist. Its cue is a ring repeated back to back, finally 6 × 1.2 s = 7.2 s (PR37-Q10, Q14), stopped for good by the first tap or scroll.
  - The open menu joins the run as gate G1b, CSS-led, with every string and behaviour kept (PR37-Q11…Q13).
- **During G2, round 2 (10 Oct):**
  - The Highlighter style wins (PR37-Q16).
  - The statement comes from JD's AI Studio rationale report (PR37-Q17).
  - One key per word, aligned by meaning (PR37-Q18).
  - The governing files outside the repo are owed to Cowork, not edited by the run (PR37-Q19).
  - No word moves (PR37-Q20).
- **During G2, round 3 (10–11 Oct):**
  - One responsive hero, HX: W1 below 768, W3 from 768 (PR37-Q21).
  - The ES line 1 is amended (PR37-Q22).
  - The highlight keeps brand purple (PR37-Q23).
  - The pulsing square beside the name returns (PR37-Q24).
  - Ten keys, with line 1's pair on phones only (PR37-Q25).

## 3. Rulings

| Id | Ruling |
|---|---|
| PR37-Q1 | At 768 the tablet bar stays as it is; the button and cue are designed for ≤ 767 |
| PR37-Q2 | The cue is registered in the decoration spec v1.3, an interaction one-shot with its own ceiling |
| PR37-Q4 | The chosen form ships on all 7 pages with a target of at least 44 × 44 px |
| PR37-Q5 | /opus loaded at task 0 |
| PR37-Q6 | Repeating cues are labelled "needs a floor-rule-2 ruling"; a pick gets its entry in spec v1.3 |
| PR37-Q10, Q14 | N1's cue: 6 rings × 1.2 s = 7.2 s, stopped for good by the first tap or scroll; WCAG 2.2.2 exception X-5 |
| PR37-Q11 | The open menu joins PR #37 (G1b), CSS-led, all 7 pages; open-menu behaviour unchanged |
| PR37-Q12 | No scroll at 390 × 844; scrolling allowed at 375 × 667 |
| PR37-Q15, Q26, Q27 | Open menu = M2 layout + M3 close + E3 labels (16.5 px) + F2 lines (4 px purple before PAGES, grey cluster separators); SITEMAP → PAGES / PÁGINAS |
| PR37-Q16 | Hero style: the verbs on a brand-purple block that draws once |
| PR37-Q17, Q22, Q25 | The statement: EN "GOOD CODE IS CONQUERED. / GOOD DESIGN PREVAILS." (from 768: "CODE IS CONQUERED. / GOOD DESIGN PREVAILS.") · ES "EL BUEN CÓDIGO SE CONQUISTA. / EL BUEN DISEÑO SE SOSTIENE." (from 768: "CÓDIGO SE CONQUISTA. / EL BUEN DISEÑO SE SOSTIENE.") |
| PR37-Q18 | One key per word, the same ten keys in EN and ES, aligned by meaning |
| PR37-Q19 | The run ships the repo dictionaries only; KEYS v1_2 and POSITIONING v1_7 are owed |
| PR37-Q20 | No word moves; floor rule 3 holds |
| PR37-Q21, Q28, Q29 | HX: below 768, small words shrink, EL stacks over BUEN, EN's GOOD turns upright within the noun's height; from 768, small words stand vertical and nouns are underlined |
| PR37-Q23 | The highlight keeps #A100FF (white on it, 5.30:1) |
| PR37-Q24 | The square beside the name pulses again (2.4 s, endless); WCAG 2.2.2 exception X-6 |

## 4. Gate sequence

| Gate | Event |
|---|---|
| Plan | presented 10 Oct (twice: before and after the baselines); RELEASED 10 Oct |
| G1 | 4 rounds (N1–N5; N1 + N3; N1 at 9.6 s; N1 at 7.2 s with the tap stop); RELEASED 10 Oct ("FINALIST: N1") |
| G1b | M1–M3; M4; reopened 11 Oct for labels (E1–E3) and lines (F1–F3); RELEASED 10 Oct and again 11 Oct (M4 · E3 · F2) |
| G2 | 4 rounds (H1–H4 × C1–C4; W0–W4; HX + dot; HX with ten keys); RELEASED 11 Oct |
| G3 | 3 rounds (finalists live; EN phone GOOD upright; GOOD within the noun's height); RELEASED 11 Oct |
| G4 | presented 11 Oct; RELEASED 11 Oct |
| G5 | presented 11 Oct |
