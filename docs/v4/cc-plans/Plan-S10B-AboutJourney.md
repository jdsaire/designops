# Plan — S10-B · the `about/` journey

Task 1 of `P-CC-S10B-AboutJourney-v1_0.xml`. Approval of this plan releases **task 2 (G1) only**.

## Context

`about/` currently ends its story in an 8-item EVOLUTION accordion that stops at "DesignOps, now." It carries no credentials, no institutions beyond prose, and a ShopEase/back-end narrative that AMENDMENT-F11 (signed 15-SEP-2026) removes from the page. F11 and `SPEC-AboutJourney-v1_0.md` (approved 15-SEP-2026) replace it with **one chronological sequence of 25 items** — 14 entries and 11 credential items — with category filters, a sort control, and one collapsed body per item.

This run builds that sequence **inside the existing `#evolution` organism**, between `#track-record` and "The one-page version". The bridge with the portrait and TRACK RECORD are preserved untouched. Every failure mode here is runtime-only, so every criterion is headless-measured at a gate, never read off a diff.

Base: `origin/main` `8f238a5`. Branch `deploy/v15-s10b-about-journey`. PR opened after commit 1, never merged.

## Files

| File | Change |
|---|---|
| `about/index.html` | `#evolution`: header kept, `ol.timeline` extended to 25 items, controls added above the list |
| `assets/css/pages/about/evolution.css` | all new rules, scoped under `#evolution` (wins on specificity, not load order) |
| `assets/js/pages/about/evolution.js` | extended: filters, sort, reading position; nested-reveal path removed |
| `assets/i18n/en.json` | new EN keys only (`es.json` untouched) |
| `assets/img/badges/` | new folder, 11 credential marks |
| `docs/parking-lot.md` | 3 queued lines (G5) |
| `docs/v4/…` | plan + completion report (archive task) |

Not touched: `index.html`, `assets/css/base/*`, `assets/js/core/*`, `shared/bridge.css`, `pages/about/stats.js`, `assets/img/logos/*`, the bridge SVG, other pages. `shared/designops-variant.css` only if unavoidable, with re-verification on all four pages that link it.

## (a) Key scheme

Adopt SPEC §6's `about_jr_<item>_title` / `_meta` / `_body`, with the prototype's 25 stems (`esan_deg`, `hunt`, `centrum`, `uvic`, `maas`, `esan_lec`, `bgs`, `utec`, `hec`, `ibm`, `limafly`, `lap`, `gpm`, `mck`, `gai`, `gux`, `single`, `tv`, `msfe`, `gpy`, `c101`, `ccow`, `ccod`, `accredita`, `apex`).

- 25 × 3 = **75** item keys. `_meta` carries the subtitle line; the period string is part of `_meta`'s slot, not a separate key.
- **8** institution alt keys: `about_jr_mark_{esan,centrum,uvic,um,hunt,utec,hec,lap}_alt` (ESAN referenced twice from one key). Never a `ticker_*` key.
- **11** credential mark alt keys: `about_jr_cred_<stem>_alt`, each the credential name as its issuer holds it.
- **~11** control keys: `about_jr_filter_{all,formation,work,build,credential}`, `about_jr_filter_group_label`, `about_jr_sort_label`, `about_jr_sort_asc`, `about_jr_sort_desc`, `about_jr_count` (with an `{n}`/`{total}` placeholder), `about_jr_empty`.
- **4** class labels: `about_jr_class_{formation,work,build,credential}`.

≈ **109 EN keys**, exact count reported at G5; the same number is owed in ES at S9C. Existing `evolution_eyebrow/heading/lede` keep their keys and wording. The 30 EN / 22 ES `evo_m*` keys become orphaned and are reported as S9 dead-key input, not deleted.

## (b) Markup

`<ol class="timeline" role="list">` keeps its element and gains 25 `li.timeline__item`, in the §4.1 order in the DOM, each:

```
li.timeline__item[data-class="formation|work|build|credential"][data-sort="YYYYMMDD"][data-ord="1..25"]
  span.timeline__marker
  div.timeline__meta      → class label (word) · period · institution mark (entries) or credential plate (credentials)
  button.timeline__toggle[aria-expanded="false"][aria-controls="jr-panel-N"]
      h3.timeline__title · p.timeline__sub · span.timeline__chevron
  div.timeline__panel#jr-panel-N   → one merged body; Build/Credential outbound link
```

**Sort keys, corrected from the prototype.** The prototype invents tiebreak dates (`20160601` for the Victoria term, `20260731` for Trust & Verify) where the sources give only "within 2016–2017" and "Jul 2026". Instead: `data-sort` carries the sourced date at its real precision (`2016` → `20160000`, `Jul 2026` → `20260700`), and `data-ord` (the §4.1 ordinal) is the deterministic tiebreak. This reproduces the approved order exactly, with no invented date in the DOM. APEX has no completion date and sorts last ascending via `data-sort="99999999"`.

Formation/Work sort on **start**, Build/Credential on **completion** (§F11-c). The displayed period is SOURCE §4/§5's string; no month is invented for the exchange terms.

Bodies carry SOURCE §5 substance verbatim in substance, as amended by F11. BGS per brief §4.3, unlinked. AccreditaPass closes at 30 Aug 2026. The two re-homed lineage clauses stay on the single-page and AccreditaPass entries.

## (c)–(d) Styling, inside the design system

New rules live in `pages/about/evolution.css` under `#evolution`. `shared/designops-variant.css` is expected to need **no** change; if it does, Main/capabilities/contact are re-verified at that gate.

The prototype's `:root`, its `--F/--W/--B/--C` hues, `--accent`, `--plate` and `--r:10px` port **nowhere**. Mapping to existing tokens:

| Element | Token |
|---|---|
| rail, panel divider | `--color-border-faint` / `--color-border-soft` |
| current node, focus outline, chevron | `--color-brand-purple` (non-text, ≥3:1) |
| past node | `--color-border-soft`; upcoming item dimmed by opacity, not colour |
| title | `--color-brand-white` (20.4:1 dark) |
| body, period, class label | `--color-text-muted` (7.3:1 dark / 5.7:1 light) |
| link, credential plate ground | `--color-purple-light` (9.7:1 dark; `#8C00D9` light) / `--surface-card` |
| radius | none — the universal `border-radius:0` holds; chips and plate are square |

Class is declared by its **word label**, never by colour (ruling R1). Brand purple is never text on dark.

## (e) Institution marks — C2-b′ reading

**Reuse the eight files unchanged.** They are shared with Main's ticker, which renders them at up to 235×176 CSS px (470 device px @2×); an in-place resize would soften Main, and a resized copy would be a new institution asset, which §F9-b forbids. The mark slot on `about/` is specified at ~26–32 px high, so the existing files are oversupplied, not short. Measured slot size reported at G1; if the principal contests the reading at G4, that ruling governs.

## (f) Credential assets

Destination `assets/img/badges/`. Delivery dimension **320 px** on the long edge (SPEC-Badges §3.3 ceiling; covers any slot ≤160 CSS px @2×), LANCZOS + `optimize=True`, re-measured against the built slot at G4.

- 7 Credly PNGs resized, current stems kept; `microsoft-front.png` 674,042 B → ~122,000 B, clearing A18.
- `bgs-member.png` from `~/Downloads/BGS-Member-Badge.png`, fitted to 320 px long edge (320×202), never cropped; it letterboxes in the plate.
- 3 Academy marks by route (a): render each verify page headlessly, crop the nonagon to a square, export at 320 px, neutral filenames `academy-101.png`, `academy-cowork.png`, `academy-code-101.png`.
- One uniform plate on every credential mark slot — one ground, one padding, square — defined in `:root` **and** `html[data-theme="light"]`, so the three solid-background marks (`microsoft-front`, `ibm-design`, `forward` at 98.8% opaque) sit with the transparent ones.
- Links: 10 × `target="_blank" rel="noopener noreferrer"`, each re-verified **by content** (holder + exact name), because both hosts return 200 for bogus IDs. BGS carries no link.

## (g) Commit list

| Gate | Commits |
|---|---|
| **G1** | 1 `feat(about)` 14 entries as journey items + EN keys · **push, open PR, print URL** · 2 `feat(about)` 11 credential items (text, links, no marks yet) · 3 `feat(i18n)` 8 institution alt keys + marks wired · 4 `style(about)` sequence layout in the site's tokens |
| **G2** | 5 `feat(about)` merged body, one-open-at-a-time retained, nested reveal retired · 6 `feat(about)` rail, reading position, reduced-motion |
| **G3** | 7 `feat(about)` filters + sort, in-place reorder · 8 `feat(i18n)` control keys, live count, empty state |
| **G4** | 9 `chore(assets)` 8 resized marks · 10 `chore(assets)` 3 Academy crops · 11 `feat(about)` plate + marks wired, links verified |
| **G5** | 12 `docs(parking-lot)` the 3 queued lines (+ any refusal line) · fixes as the gate requires |
| archive | 13 `docs:` plan + completion report + 3 README rows |

~13 commits, one per discrete item, zero console errors after each.

## (h) Budget reading

SPEC §5's ≤30,000 B raw / ≤10,000 B gzip is judged on **net added** bytes (new organism minus the retired 8-item accordion, across HTML + CSS + JS). Gross is reported alongside. Dictionary bytes are reported separately, since §6 scopes the budget to HTML+CSS+JS. An overage is reported at G5, never absorbed by trimming frozen substance.

## (i) Archive

`docs/v4/cc-plans/Plan-S10B-AboutJourney.md` and `docs/v4/cc-completion-reports/s10b-about-journey-completion-report.md`, plus a row in each of the three READMEs (`docs/v4/README.md`, `cc-plans/README.md`, `cc-completion-reports/README.md`), matching the S10-C pattern.

## Verification

Server: `python3 -m http.server 8000 --bind 127.0.0.1` from the repo root, held for the session. Review URL `http://127.0.0.1:8000/about/#evolution`. Harness: playwright-core against the cached Chromium, outside the repo.

Every gate posts via `/cc-gate-report` with before/after screenshots in both themes and measurements as counts and zeroes, at 390/768/1280 in dark and light:

- **G1** items 25 · Formation 5 / Work 4 / Build 5 / Credential 11 · marks 9 refs / 8 files · `ticker_*` on `about/` 0 · removed-scope strings 0 · lists 1 · console errors 0 · SwapLang + SwapTheme OK
- **G2** open items ≤1 · `aria-expanded="true"` = open count · nested reveals 0 · exactly 1 current item per sampled scroll position · terminus reachable · transitions under reduced motion 0 · collapsed doc height at 390 px
- **G3** per-filter counts match · sort reverses · DOM `li` always 25 · duplicates 0 · empty state announced · full keyboard path · storage writes 0 · URL changes 0
- **G4** 11 files with bytes + dimensions · largest <500,000 · items linked 10, verified by content 10 · BGS anchors 0 · dead-linked images 0 · alt = credential name 11/11
- **G5** AA in both themes for every new surface (default/hover/focus/pressed/current) · full keyboard path with focus screenshots · reduced motion · component bytes gross + net · key counts · payload vs the 772,779 B baseline · 3 parking-lot lines landed · zero-attribution scan

Each gate halts until its exact phrase: `APPROVED GATE G1` … `APPROVED GATE G5`.

## One decision at G4

Credly holds the UX badge as **"Google UX Design Professional Certificate(v.3)"**, with no space; SPEC-Badges writes it spaced. Reply `UX name: issuer's` or `UX name: spaced`.

## Carried forward, not done here

H2/F6-l scan lines on Main · C2-b′'s Innova mark still on Main's ticker · local `main`'s unpushed 10C/10D lines · the bridge SVG's A18 breach · orphaned `evo_m*` keys (S9) · ES keys (S9C) · the copy gate · dead `.about-card*` CSS in `evolution.css`.

---

## Addenda recorded at the gates

The plan above is what was approved before execution. Eleven directions arrived at the gates and changed it; each is listed with the gate that carried it. The completion report records what was actually executed.

| At | Direction | Effect on this plan |
|---|---|---|
| G1 | Light-theme marks | The eight white logo files vanish on the light ground. They take the invert `shared/ticker.css` already applies on Main; assets untouched. |
| G2 | State by rail, not by dimming | The prototype's 0.42 opacity on upcoming items measured ~2.3:1 on muted body copy. State moved to the rail and node; all text stays at full contrast. |
| G3 | Sort control removed | Order fixed oldest→newest; the control, its label and three keys deleted. **Leaves C2-c′′ false.** |
| G3 | Purple-shade categories | Offered, deferred. Class stays a word label. |
| G4 | Marks fill their own box | Plate border, padding and ground removed; every file trimmed to its content box. **Retires the plate that SPEC-AboutJourney §4 specified.** |
| G4 | IBM top margin | The teal ground is the badge, not padding; file ships untrimmed. |
| G4 | Logos sized to read, Build items marked | Each logo shown through its measured content box; Figma on LimaFly, GitHub on the four repository builds. **Three new marks enter `assets/img/logos/`.** |
| G4 | One locked logo height | Then superseded at G5 by square framing. |
| G5 | EN copy pass | 68 of 134 values revised; exchange-term months supplied, so their sort keys move to Jan and Apr 2017. |
| G5 | Credential bodies removed | Ten bodies and their keys deleted; BGS keeps a body. |
| G5 | BGS verification line dropped | Principal's ruling. **Leaves 19′′′ and rule 2′ false.** |
| G5 | Marks framed on a design canvas | Two rounds. Final: square badges at one size, Hunt / Lima Airport / HEC 50% larger, ESAN reworked from its own measured emblem box. |
