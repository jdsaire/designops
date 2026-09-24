# Plan — W2A · i18n split, brief standardisation, About corrections

**Branch:** `deploy/v18-w2a-i18n-split-mobile-chassis`, from `993fcd9` (the merge of PR #30)
**Dispatch:** `BRIEF-CC-W2A-v1_0.md` → `P-CC-W2A-v1_0.xml`, both in `out/active/PRE-MAX/site-w2a/` outside this repository
**Status:** approved at the plan halt (`APPROVED PLAN`), extended at Gate 3B and Gate 3 by rulings W2A-G3-Q1 and W2A-G3-Q2

This is the plan as approved, with the two gate-time extensions appended in the order they were ruled.

---

## 1. Measured before planning

- Shared dictionaries held 236 EN and 236 ES keys, with identical key sets. By referencing file they split into:

  | Class | Keys |
  |---|---|
  | Chrome, on all 8 pages | 17 |
  | Main only | 37 |
  | About only | 139 |
  | Contact only | 26 |
  | Main and Capabilities | 14 |
  | Main and Contact | 2 |
  | About and its journey script | 1 |
  | Referenced nowhere | 0 |

- No key name is assembled at run time.
- No brief body reads a non-chrome shared key, so the brief loaders need nothing from the split.
- Every live value covered by the W1 v1.1 register matched it byte for byte (EN 61/61, ES 195/195).
- Main loads two files from the Capabilities folders: `capabilities.css` and `carousel.js`. They stay.
- All four briefs share the same layout tokens and the same reveal system: an accordion below 1024 px, a side panel from 1024 px.

## 2. The split

- `assets/i18n/{en,es}.json` keep shared chrome only.
- Main, About and Contact get `<page>/i18n/<name>.{en,es}.json`, following the convention the briefs already use. Main's page folder is the site root: `i18n/main.*`.
- `assets/js/core/i18n.js` gains `setPage()`. Each language loads chrome and the page file and merges them, with the page file winning.
  - `init()` and `swapLang()` keep their signatures.
  - The `i18n:changed` event carries the merged dictionary.
- Each page entry script names its page file before `init()`.
- **Invariant:** every moved value is byte-identical, and the only key removed is the Capabilities navigation label.

## 3. Capabilities deletion

- **Deleted:**
  - The route `capabilities/index.html`.
  - The page script `pages/capabilities/main.js`.
  - The card stylesheet `capabilities-cards.css`.
  - The desktop and overlay anchors on every page.
  - The navigation rule that hid them.
  - The `nav_capabilities` key.
- **Kept:** everything Main loads.
- **Not edited:** history documents.

## 4. About

- **Hero:** the heading takes POSITIONING-v1_2 §1.1 (no "agents").
- **Single-page entry:** the window runs 24 Apr – 04 Jul 2026, 71 days.
- **Stat:** the key-count stat renders 700+.
- **Head:** the title line and the §1 spine, English only.
- **Order:** EN first (Gate 2), ES after Gate 3 (Gate 4).

## 5. Briefs — mobile chassis (Gate 3)

Brief 04's mobile rule list is the reference. Briefs 01 and 02 conform inside their own styles. Brief 03 is stabilised only.

## 6. Extension at Gate 3B — ruling W2A-G3-Q1

Brief 01 was rebuilt at every breakpoint to Brief 04's standard:
- Cards, reveals and ladders.
- A Gantt of seven phases.
- A tabbed test dashboard.
- A closing downward ladder.
- A story-led hero with the build links.

All figures are traced to the evidence file. The rights-holder stays unnamed in the brief. The principal annotated the result tag by tag, and a second round applied those annotations.

## 7. Extension at Gate 3 — ruling W2A-G3-Q2

The four briefs were standardised:
- **Hero:** one chassis, top-anchored, with Brief 04's motion. The eyebrow reads "Work brief". Read times are measured. The role strip sits under the tags, then the build links, then the short version.
- **Notices:** footnotes before the close.
- **Architecture:** the build links repeat there on Briefs 02 and 04.
- **Close:** Next steps, the contact CTA and two related briefs.

Changed English strings on Briefs 02 and 04 take new keys, so their Spanish views fall back to English until dispatch B.

## 8. Gates

Plan · 1 (split and Capabilities) · 2 (About EN) · 3B (Brief 01) · 3 (briefs) · 4 (About ES) · 5 (pre-merge). Each is reviewed on `127.0.0.1:8000` and released only by its exact phrase.
