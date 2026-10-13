# Plan — PR #38 · Mobile copy (P-CC-PR38-MobileCopy-v1_0)

**Branch:** `deploy/v25-pr38-mobile-copy`, from `41ce97b` (origin/main after PR #37)
**Pull request:** #38, manual merge only
**Dispatch:** `BRIEF-CC-PR38-MobileCopy-v1_3.md` → `P-CC-PR38-MobileCopy-v1_0.xml`, both in `out/active/PRE-MAX/closing/` outside this repository

This file holds the plan as approved, then the two re-plans approved during the gates. Where they differ, the latest governs.

---

## 1. The plan as approved (11 Oct)

### Scope
- The first global copy revision, aimed at phones: all seven pages, EN and ES.
- **Round 1 · Trim:** I edit the dictionaries on disk, page by page. Each save is re-read and checked, and each page gate ends in one commit.
- **Checkpoint:** the trimmed keys are exported, one JSON file per page, for an external copy review.
- **Round 2 · Regenerate:** the review's per-page returns are applied after audit; I keep, edit or reject each value.
- **Also carried:**
  - the menu button's two accessible names, as global keys with `data-i18n-aria`;
  - Main's search description and og:description.
- **Not in scope:**
  - layout or design (PR #37);
  - the ten hero keys, locked by PR #37;
  - new facts;
  - Brief 04's figures (PR #39);
  - hygiene (PR #40).

### Method
- **Values are carried, never authored.** Only the menu labels are typed, and every other change was settled through a question to me. Markup fallbacks are synced to the new EN.
- **Fence check on every changed value, at every gate:**
  - EVIDENCE;
  - the CV spec's banned inflations;
  - POSITIONING §6 and §7;
  - the ES audit: usted, no fact the EN lacks;
  - no academic register.
- **Fit check:** every changed string at 320 and 390, EN and ES, in Chrome and WebKit, measured against the base.
- **Locks:** the ten hero keys hash the same at every gate. No change to `core/navchrome.js`, `core/i18n.js` or `core/paths.js`.

### Gates
Plan → T-MAIN → T-ABOUT → T-CONTACT → T-B01 → T-B02 → T-B03 → T-B04 → TRIM → S-MAIN … S-B04 → RELEASE.

## 2. Re-plan at TRIM (12 Oct): a targeted Round 2
The external review returned 30 proposals over 1,042 keys. About 22 were real but small fixes; none was strategic.

A scan of every value on the site, not only the changed ones, found five more fence issues:
- Brief 04's summary used "lead" and "most advanced";
- Brief 04's v2 card said "greatest build";
- Main's offer used "interfaces";
- About's ES said "plataforma" where the EN says "revenue stream";
- About's AccreditaPass entry was missing the "optional" Web API qualifier.

Ruling: apply the vetted proposals plus these fixes, page by page, each value with its reason. No site-wide rewrite.

## 3. Re-plan before RELEASE (12 Oct): three code fixes tied to the copy
- **Brief 02:** `<strong>` reads as bold. Five components get the semibold rule that Brief 04 already uses.
- **Brief 02, Act 03 schedule:**
  - "Expand all" and the Dependencies filter are removed; the connectors are always drawn;
  - epics are numbered 01–05;
  - three keys are retired by deletion, never orphaned.
- **The four briefs:** one shared read-time label, `ui_read_min`. Only the minutes vary, in the markup; two local keys are retired.

## 4. Rulings
| Id | Ruling |
|---|---|
| PR38-Q1 | The run uses Opus 5.5 at Medium effort |
| PR38-Q2 | The ES menu labels were a placeholder until set; the ES values are "Abrir menú" / "Cerrar menú" |
| PR38-Q3 | Copy baselines are versioned dictionary snapshots, not screenshot sets |
| PR38-Q4 | Main's description and og:description: the offer, with no retired line |
| PR38-Q5 to Q19 | Values settled per page during Round 1: fence, facts, typos |
| PR38-Q20 | Round 2 is a targeted pass |
| PR38-Q21, Q22 | Brief 04's summary and v2 card |
| PR38-Q23, Q24 | The three code fixes and the read-time label |
| PR38-Q25 | Three non-copy issues move to PR #39 |
| PR38-Q26 | The release typo fixes |
