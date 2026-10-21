# PLAN-PR43 · About + Lab (v1_0)

Prompt: `out/active/PRE-MAX/closing/P-CC-PR43-AboutLab-v1_0.xml` (authoritative) · brief `BRIEF-CC-PR43-AboutLab-v1_0.md` · base `6348002` · branch `deploy/v30-pr43-about-lab` · Opus 5.5.

## Context

About is the site's weakest page and does not carry the lab that LinkedIn now leads with. The briefs have no index, and the phone menu is text only. PR #43 makes the site read as an extension of LinkedIn:
- the wordmark "Product Lab";
- About rebuilt as two arcs, Lab first, each with a carousel, a timeline and figures;
- the deep links LinkedIn v3_8 already points to (`/about/#lab`, `/about/#pre-lab`);
- one brief index on the four briefs;
- icons in the phone menu.

Every About string comes from ABOUT-COPY-LOCK-v1_0 or an existing key; the run writes none. Settled, not re-asked: PR43A-Q1…Q14 plus the 20 Oct amendment, PR43B-Q1…Q25, and PR43-Q1…Q4.

**One deviation from task 1.** Plan Mode is read-only, so the 8000 server starts at the first execution step instead. Ports 8000 and 8010 measured free.

---

## G1 · Chrome (all seven pages)

Commits, one per item:

1. `docs(spec)`: v1.6 copied verbatim over `docs/v3/organisms/decoration-system.spec.md`; `cmp` proves it byte-identical.
2. `feat(nav)`: the wordmark.
   - `chrome_wordmark_sub` becomes "Product Lab" in `assets/i18n/en.json` and `es.json`.
   - The 14 static aria-labels become "Juan Diego Saire — Product Lab. Home." (2 per page).
   - Contact's `<title>` and og:title become "Contact · Juan Diego Saire — Product Lab".
3. `feat(nav)`: the four `nav_card` keys are re-valued to bare names, EN and ES as PICKS-A §4.3. Markup on all 7 pages, desktop dropdown:
   - `<a class="nav__work-item" …><span class="nav__work-num">01 · </span><span data-i18n="nav_card1_label">ACCREDITAPASS · SPORTS</span></a>`
   - The key moves to an inner span because `core/i18n.js` sets `textContent` on the keyed element, which would erase the number.
   - The overlay sub-items get the same inner span (no number there; the icon replaces it).
4. `feat(nav)`: the eight icons in the phone overlay on all 7 pages (56 placements), with PICKS-A §2's paths verbatim.
   - Markup: `<svg class="nav__ov-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">…</svg>` placed before the label span.
   - Top-level rows: 24 px icon, gap 0.85 rem. Brief rows: 20 px, gap 0.7 rem.
   - Drawn `fill:none; stroke:currentColor; stroke-width:1.9`, round caps and joins, so muted rows get muted icons and the current row's icon is white.
   - The Work trigger keeps its own layout (it is `justify-content:space-between`): icon and label are wrapped in one inline-flex span. CSS lives in `assets/css/shared/nav.css`.

Checks:
- The dropdown's rendered text equals the base in EN and ES on all 7 pages (text diff).
- Overlay rows stay at least 44 px; icons are `aria-hidden`; the nav fits at 320 with "Product Lab".
- Run in Chrome and WebKit; plus the four tools.

## G2 · Brief index D2 + M3 (Briefs 01–04, EN)

**Component** (new files, one source; it owns no copy):
- `assets/css/shared/brief-index.css`.
- `assets/js/core/brief-index.js`, exporting `init()`.

**Markup per page**, placed between the hero `</section>` and `#act0`:
```
<div class="idx-wrap container">
  <div class="section__eyebrow"><span class="section__eyebrow-bar" aria-hidden="true"></span>
    <span class="section__eyebrow-text" id="idxL" data-i18n="ui_idx_eb">INDEX</span></div>
</div>
<nav class="idx" aria-labelledby="idxL">            ← only this is sticky
  <div class="container idx__in">
    <button class="idx__face" aria-expanded="false" aria-controls="idxList">…current label · n/N…</button>   (<768)
    <ol class="idx__list" id="idxList"><li><a href="#act0"><span class="idx__n">00 · </span><span data-i18n="ui_idx_context">Context</span></a></li>…</ol>
    <div class="idx__line" aria-hidden="true"><i></i></div>   (<768 progress)
  </div>
</nav>
```

**Behaviour:**
- ≥768: the list is D2's tab strip. The current tab is white and semibold with a purple underline (`scaleX`, 250 ms), and is scrolled into view. The strip scrolls sideways at 768–1023 when it overflows. The first tab has no inset ("00 · Context" sits flush left).
- <768: M3. The face shows the current label and "n/N"; the list overlays the page (absolute, never in flow). It is a disclosure: aria-expanded and aria-controls, Esc and outside click close it, and focus returns to the face.
- Sticky: `position:sticky; top:var(--nav-height)`. A body class mirrors `.nav--hidden` and moves the band up by the nav height with the nav's 350 ms transform. z-index 60: under the nav (100) and the side panel (70), over the content.
- Offset: `--idx-h` is set on `:root` by script (measured band height). Acts and their headings get `scroll-margin-top: calc(var(--nav-height) + var(--idx-h) + 1rem)`.
- Jumping: a native anchor jump, then focus moves to the act heading (`tabindex="-1"`). Reduced motion: scroll behaviour `auto` and all transitions off.
- Scrollspy: the current act is the last whose top crossed a probe at 33 % of the viewport. Before Act 00, nothing is current. The current link gets `aria-current="true"`. No live region.

**Keys:**
- `ui_idx_eb` plus 7 regional `ui_idx_*` go in `briefs-ui.{en,es}.json`. `ui_idx_eb` sits before the act keys; each `ui_idx_*` sits right after its `ui_actNN_*` peer.
- 10 brief-local `actN_idx` keys: B01 act2/6/7, B02 act2, B03 act2–6, B04 act2. They sit between the hero keys and the act0 keys.
- Names as PICKS-A §4.1, with no collision measured at any level.
- The ES files carry the EN values at the same positions until G5.

**Wiring:** each brief's inline module imports `brief-index.js` and calls `init()` after its i18n init; each brief links the stylesheet. Commits: the component (1), then one per brief with its keys (4).

**Checks:**
- 31 entries in all (B03 = 7); no label clipped at 320, 390 or 768, B03's longest included.
- Jumps land each act heading below nav + band.
- Keyboard-only focus is never obscured at 390, 768 or 1024.
- The side panel at ≥1024 sits above the band.
- The progress bar (z 101) is untouched.
- The phone carousels' sideways scroll is unaffected.
- Light-theme contrast holds; reduced motion reads `0s`.
- The four tools, plus Chrome and WebKit.

## G3 · About on chassis B v2 (EN)

Commits, one per item:

1. `feat(i18n)`: `core/i18n.js` gets the `data-i18n-html` handler, with the early script's rule: `innerHTML` from the dictionary only.
2. `chore(i18n)`: PR43-Q1. `ui_dash_means`, `ui_carousel_prev` and `ui_carousel_next` move from briefs-ui to the global pair, values unchanged and in page order. The briefs render them identically: global loads on every brief, so text diff = 0.
3. `feat(briefs)`: the relay extension (below) and the RUN guard in `core/decoration.js` (`.relay:not(.relay--scroll)`).
   - Brief relays are untouched, proven by text and computed style.
   - Reason: a 12–13-node RUN pass would run about 2.3 s, past the 1.5 s one-shot ceiling. About's timelines therefore get no RUN at any width, and no new motion is registered.
4. `feat(carousel)`: `core/carousel.js` gives each carousel its own state key, `'dl:' + root.dataset.dl` when the attribute has a value, else `'dl'`.
   - Briefs (`data-dl` empty) behave exactly as now.
   - About uses `data-dl="lab"` / `"pre"` with `sessionStore('about:ui')`.
5. `feat(about)`: `evolution.js` reworked in place into an instance engine.
   - One instance per `[data-tl]` root: filter, count (`about_jr_count`), empty state, i18n re-render, order oldest → newest.
   - The single-id wiring, the accordion, the 38 % rail and the journey markers go.
   - In their place: one selected entry at a time. Node buttons carry aria-expanded and aria-controls. The detail opens in the arc's panel below from 768 and inline below 768, with Esc to close.
   - Nodes renumber 1…n over the visible entries.
   - The arrow buttons scroll the track by one stage width; `scroll-behavior` is `auto` under reduced motion.
6. `feat(about)`: `about/index.html` rebuilt, top to bottom:
   - **Hero:** bridge as today; h1 = `about_hero_heading` from the lock; CV links unchanged.
   - **Head:** description and og:description = the lock h1 in EN (static); title unchanged.
   - **Index:** the shared component with `about_idx_eb` and "01 · " / "02 · " from markup plus `about_idx_lab` / `about_idx_pre`. It links to `#lab` and `#pre-lab`.
   - **`<section id="lab">`:**
     - h2 `about_arc_lab_h`; no kicker (PR43-Q2).
     - Manifesto: the eyebrow (bar) `about_lab_m_eb`, the verdict, and the `.dl` with 3 slides:
       - label, title, body, alt and CTA from the lock;
       - a labelled placeholder frame until G4;
       - CTAs go to `#lab-timeline`, `https://github.com/jdsaire` and `../contact/`, as in B v2.
     - Timeline: the eyebrow and verdict; `select` filter with options All · Build · Credential (existing keys); `.tl__scroll` arrows named by `ui_carousel_prev/next`; then `.relay.relay--solo.relay--scroll` with the 12 Lab entries.
       - Each entry's markup moves from today's `#jr-sequence`: class, period, mark, title, meta, body and links.
       - 4 bodies come from the lock.
     - Figures: the eyebrow and verdict, then `.hlr.hlr--3` on `shared/brief-charts.css`.
       - Figures 3 · 3 · 1 + `about_lab_f3_unit`, with the chips from `markup_fixed`.
       - Baton `ui_dash_means`; insights `about_lab_ins1/2` (html).
       - No `ui_dash_figs_h` header.
   - **`<section id="pre-lab">`**, the same three organisms:
     - the eyebrow `about_pre_m_eb`;
     - Pre-Lab slide 1's CTA goes to `../work/airport/`; slides 2 and 3 have none (lock);
     - the timeline carries 13 entries and the four filters plus All;
     - figures: 130,000+ · 3.88 / 4 (bar 97 %, legend k0/k1) · 1,200+ · 29 (chips c1/c2).
   - **Contact** organism unchanged.
   - Retired: `#track-record` and `#evolution`'s header. The 11 retired keys are deleted from EN and ES with 0 references.
   - Stylesheets added: `shared/carousel.css`, `carousel-phone.css`, `relay.css`, `brief-charts.css`, `brief-index.css`.
   - `services__image-slot` is inert: carousel-phone.css scopes it under `.section--services`, which About doesn't have (measured), so no rule changes.
   - `assets/css/pages/about/evolution.css` is cut down to the arc layout and the timeline modifier hooks.
7. The lock's EN is injected by script from the JSON, not retyped. New About keys enter `about.en.json` in page order; `about.es.json` holds the EN placeholders until G5.

**Relay extension** (in `assets/css/shared/relay.css`; never a parallel organism):
- `.relay--scroll` from 768: `overflow-x:auto`, `scroll-snap-type:x proximity`.
- The track is `grid-auto-flow:column; grid-auto-columns:minmax(11rem,1fr)`, and the track line spans the scroll width.
- Nodes are `<button>` elements (44 px hit area around the 34 px node). The selected node is filled purple; the others take the `--after` style.
- Below 768 it falls back to the existing phone relay column (`.relay--solo` rules) with the detail inline.
- Hidden entries get `[hidden]`, and the visible ones renumber.

**String inventory.** Every About string has a source; 0 are unsourced.

| Surface | Source |
|---|---|
| h1, index eyebrow and labels, arc h2s, 6 org eyebrows and verdicts, slide label, title, body, alt and CTA, 15 timeline bodies, figure labels, lines, units, chips and legend, insights | the lock (85 values) |
| Index numbers, figures, stack and app chip names, bar percentage, anchors | lock `markup_fixed` (markup) |
| "What it means", Previous / Next (slide nav and timeline arrows) | `ui_dash_means`, `ui_carousel_prev/next` (global after PR43-Q1) |
| "Illustration" | `ui_illus_label` (global) |
| Filter label and options, entry class labels, periods, titles, meta, credential and mark alts, "View the credential", count "{n} of {total}", empty state | existing `about_jr_*` keys |
| Repo, live-app and Figma link labels | static markup, unchanged from today |
| Carousel `aria-roledescription` "carousel" / "slide", slide "01 / 03" | static markup, the briefs' existing pattern |
| CV links, portrait alt and caption, Contact organism, chrome, footer | existing keys |
| Carousel region names | `about_idx_lab` / `about_idx_pre` via `data-i18n-aria` |

The script-driven map (`records/about-string-map.json`) re-proves this at G3 and G5. Any new gap halts the gate and goes to /ask.

**Checks:**
- Lock EN = rendered (scripted, 0 mismatches).
- Lab shows 12 entries and Pre-Lab 13; filters, counts and renumbering hold under every filter.
- `#lab` and `#pre-lab` land below the sticky chrome; focus is never obscured at 390, 768 or 1024.
- The sideways scroll doesn't trap the page scroll; RUN is absent on About's timelines.
- Motion durations hold, and reduced motion reads `0s`.
- The four tools, plus Chrome and WebKit.

## G4 · Six illustrations

- Files: `about/img/{lab-s1-desk,lab-s2-review,lab-s3-room,pre-s1-tarmac,pre-s2-office,pre-s3-sash}.svg`, plus `about/img/README.md`.
- Style (PR42-Q2): 768×512, transparent ground, mid-purple strokes (#9A6BFF family), loaded as `img` on the token-grounded `.dl__media`, so they read in both themes.
- No `<title>` element; the lock's alt keys carry the meaning, so the run writes no string.
- Schematic only. Lab slide 2 draws code as abstract bars: no `<text>`, no logos, no repository names, no screens of his apps.
- One commit for the set, one for the README.

## G5 · ES

1. About's ES is injected byte-for-byte from the lock; the three moved keys keep their existing ES.
2. One `designops-copy-es` pass (after reading the ES-STYLE-B03 patterns) on the 17 derived index names, starting from PICKS-A §4.1's derivations. `ÍNDICE` is JD's.
3. Records go to `dict-history/g5/` and `records/COPY-PR43-ES-v1_0.json`.

Commits: one for About, one for the index. Checks: parity 0, order 0, lock ES = rendered (scripted), and fit at 320 in ES.

## G6 · Regression

- **Read time (SR-3):** `rt40.js` on the tip, 16 cells. The `.rt` spans are updated wherever the index changed the minutes.
- **The one matrix** (SY41-Q14): a detached worktree of `6348002` on 8010.
  - All seven pages at 390/768/1440 × dark/light × EN/ES = 84 tip and 84 base captures in Chrome.
  - WebKit for all 7 (`nav.css` and `i18n.js` changed) = 84 + 84. About 336 captures in all.
  - Scroll before capturing; base vs base is measured first; B03's canvases count as noise.
- **On the tip:** contrast in both themes (no new failure), the floor at 390 and 1440, focus at 390/768/1024, reduced-motion final frames, and the typo scan of the touched dictionaries.

## G7 · READMEs and release

- **SR-4:**
  - folder READMEs: about/, about/img/, assets/css/shared/, assets/js/core/, assets/js/pages/about/, assets/css/pages/about/, work/*/ (index), docs/v3/organisms/;
  - the root folder map;
  - `DICTIONARIES.md` counts;
  - the docs index lines.
- **The four tools on the tip:** parity, links and orphans end with `failures: 0`; `order.py --strict` ends with "out of place: 0" (exit 0). Then the attribution scan and the ancestor check.
- **Proposals** to `closing/PR43-run/proposals/`:
  - spec v1.7 §8 rows: the brief index (sticky follow 350 ms, current-act marker 250 ms, M3 disclosure 200 ms, strip auto-scroll, progress line `scaleX` 1:1), About's carousels, About's timeline selection (replacing "About's 25 panels" and the journey rail rows);
  - §6 SIGNATURE count (+1 per brief index eyebrow, About's new eyebrows);
  - KEYS v1_7, POSITIONING v1_11 (§1.3, §1.9, §4) and the W17 flag.
- **Archive** under `docs/v4/cc-plans/Plan-PR43-AboutLab.md` and `docs/v4/cc-completion-reports/pr43-about-lab-completion-report.md`. The method note per PR43-Q4.
- `PR-43-BODY.md` on the template.
- After `APPROVED PR43 G7`: push, open PR #43, bind it, then the relay and the Cowork paste block.

## Review per gate (preview browser, `127.0.0.1:8000`)

| Gate | Where to look | Widths |
|---|---|---|
| G1 | `/` and `/contact/` | 320, 390, 1440 |
| G2 | `/work/airport/` and `/work/accreditapass/` | 390, 768, 1024, 1440 |
| G3 | `/about/`, `#lab`, `#pre-lab` | 390, 768, 1024, 1440 |
| G4 | `/about/` | 390, 1440 |
| G5 | `/about/` and `/work/airport/` in ES | 320, 390, 1440 |
| G6 | the matrix summary | — |
| G7 | the READMEs and the PR body | — |

Hard-reload after every dictionary change.

## Suggested effort per gate (SY41-R2)

| Gate | Effort | Why |
|---|---|---|
| G1 | Medium | mechanical sweep over 7 pages |
| G2 | High | new component and sticky interplay |
| G3 | High | rebuild, engine, relay |
| G4 | High | drawing |
| G5 | Medium | injection plus one copy-es pass |
| G6 | Medium | scripted matrix |
| G7 | Medium | docs and proposals |
| Archive | Low | push and PR |

## Verification (end to end)

- The four tools at every gate that touches keys or files.
- Scripted string maps: lock vs rendered, EN at G3 and ES at G5.
- Text diffs of the desktop dropdown on 7 pages × EN/ES.
- Playwright (PR41 harness `node_modules` via `NODE_PATH`; WebKit 2359), checking:
  - overflow, console errors, clipping, focus obscured, anchor landing, reduced-motion `0s`;
  - Chrome and WebKit on every CSS or JS change.
- G6 matrix tip vs base with 0 unintended differences.
- Evidence images only after /ask.

## Expected commits

About 22:
- G1: 4
- G2: 5
- G3: 7
- G4: 2
- G5: 2
- G6: 0–4 (read time)
- G7: 2–3
- archive: 1

All authored by jdsaire, with no AI attribution. The accepted plan is saved as `closing/PR43-run/PLAN-PR43-v1_0.md`.
