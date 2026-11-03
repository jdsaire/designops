# Plan · PR #46 · Information architecture (v1.1.0)

The plans as accepted in Plan Mode, in order. v1_0 (the Design System scope, superseded by the pivot, PR46-Q11) is kept in the run records; the Design System part moves to #47.

---

## Plan v2 · PR #46 pivots to the IA release · v1.1.0

## Context

- **Why:** jdsaire.com is live and its first announced release becomes the IA upgrade: Ontology, Taxonomy and Choreography across navbar and footer, ready for about 8 destinations. The Design System page moves to the next PR. Source: `pr_46_scope_reassessment_ia_redesign_prompt.md` (JD, 31 Oct 2026).
- **Preserved:** G1 stands as released. Branch `deploy/v33-pr46-design-system`, commits `8a2870f`, `0f699b8`. LAB-CHECK-PR46-G1 stays as recorded, "preview, not the bar".
- **Discarded:** the navbar prototypes on 8012 (none approved).
- **Nothing to revert:** the branch holds no Design System files. Only `/design-system` work was planned, none built.

## G2 round 2 · prototypes regenerated from JD's annotations (1 Nov 2026)

Plan Mode writes nothing, so round 1's prototypes stay up until acceptance. On acceptance: log PR46-Q20…Q24 below, then rebuild on 127.0.0.1:8012 with a new `variants.html`, measure fit, re-present G2 as a delta. No repo commits. G3 onward stands.

**Rulings to log**

| Id | Ruling | Effect |
|---|---|---|
| Q20 | Changelog renamed **Updates** in LAB and the footer; a **Surprise Page (Soon)** row holds Publications' slot | Amends Q14: Publications stays unnamed, its slot is now visible |
| Q21 | Footer clusters: **Briefs** (4 briefs), **Profile** (About, Résumé), **Lab** (Design System, Updates, Surprise Page), **Forms** (Contact, Feedback). No Work page, no Core or Support | Closes the inventory's GAP. Footer label is "Feedback"; the drawer keeps "Submit Feedback" |
| Q22 | Navbar parents use a "V" chevron; panels show big icons with name and tag, numbers removed, opaque by default and brighter on hover | Replaces round 1's three dropdowns |
| Q23 | Utilities: single toggles with current value plus a small triangle, opening the compact hairline panel | Replaces utilities A/B/C |
| Q24 | Drawer direction A, with non-repeated icons; footer has no navbar icons | Round 1's drawer pick closed |

**Regenerated surfaces**

| Surface | Prototypes |
|---|---|
| **WORK panel** | Four cards: existing brief icon enlarged, brief name, industry tag; dim to bright on hover and focus. V1 row of 4 · V2 2×2. Icons are placeholders until the later badge pass |
| **LAB panel** | Three cards, all Soon. L1 line icons in disabled blur (layers, megaphone, `?`) · L2 sharp dim icons with Soon, `?` only on Surprise · L3 a single blurred `?` for all three |
| **Contact CTA, ≥768** | Assessment built in: CONTACT leaves the centre (four nodes, which also eases the 27 px overlap at 768), utilities sit left of it. C1 the site's CTA, label + purple square (`shared/cta.css`) · C2 filled purple button from the same tokens · C3 no button, CONTACT stays centred, as the control |
| **Utilities** | Moon/sun and `EN` show the current value with a triangle; a tap opens a hairline panel (Dark, Light · ES, EN). One direction, at 1440 and 768. Phone uses the same control in the drawer's bottom row |
| **Drawer** | Direction A. Lab icon: I1 Erlenmeyer flask · I2 round-bottom flask · I3 test tube. Résumé icon: P1 page with folded corner · P2 page with text lines. All on the 24-unit line style |
| **Phone footer** | Exact 2×2: Briefs, Profile, Lab, Forms. Legal: the dot trails `Privacy policy` on its line, `Your privacy choices` starts the next line with no dot |
| **Desktop footer** | Collision fixed in all. F1 value line and contacts in one band, four columns below, legal · F2 value prop left at a capped size, four columns right, contacts beneath the value prop · F3 four columns first, then a compact value-and-contacts band, legal. Sitemap text only |

**Open, ruled at the round's picks:** the navbar still reads WORK while the footer reads Briefs; a question goes through /ask with the picks. Also: WORK panel V1 or V2, LAB L1–L3, CTA C1–C3, icons I and P, footer F1–F3, and the pending badge choice below 1024 if C1 or C2 frees the room.

**Key inventory changes:** `nav_changelog` → `nav_updates`; new `nav_surprise`, `nav_feedback_short`; `footer_col_briefs`, `footer_col_profile`, `footer_col_lab`, `footer_col_forms` replace the three heads. Cowork's impact table gains Q20–Q24.

## Rulings (log as below first thing after acceptance; Plan Mode can't write)

| Id | Ruling |
|---|---|
| G1 | RELEASED: "APPROVED PR46 G1" (JD) |
| Q11 | Scope pivot: #46 = global navbar + footer IA at all breakpoints; `/design-system` deferred to the next PR |
| Q12 | Kept in #46: one dropdown, toggle ES names, og:image absolute. CTA → `shared/cta.css` deferred with the Design System |
| Q13 | Release line: #46 IA v1.1.0 · #47 Design System v1.2.0 · #48 Résumé v1.3.0 · #49 Releases v1.4.0 · #50 CMS v1.5.0 |
| Q14 | Node states: Résumé → About hero (where the CV lives) until its page exists · Publications **hidden, absent from the markup** · Design System and Changelog (Soon) · badge `v1.1.0`, plain text, no link until the Changelog page exists |
| Q15 | Model: static markup per page with `data-nav-state="live\|soon"`; no JS config. A hidden node simply isn't in the markup |
| Q16 | `jd@jdsaire.com` ships as a plain mailto in Tier 1. **Merge gate:** JD confirms jd@ receives mail and Email Obfuscation is off |
| Q17 | Report an issue → Submit Feedback, and the page moves to `/feedback/` with a stub at `/report/` |
| Q18 | Copy: EN labels from the report locked as written; ES by a short Mode T round into `COPY-PR46-IA-LOCK`. Injection waits on it |
| Q19 | Bar: the verify session reads B35's method and a GPU-off reading, 80 + 80 runs. Cowork rules before the run which decides SY44-Q1; EVIDENCE limits state both |

**Superseded:** PR46-Q7 (those prototypes), PR46-Q8 (Design System is a LAB row, not a top-level item). **Rescued for #47:** PR46-Q5, Q9 and the section below.

## Measured facts

- **Navbar:** three-zone grid, hand-written in each of 8 pages. Centre zone 226 px at 768 and 297 px at 1440 for 3 items; logo and utility columns equal width (233 px at 768).
- **Fit risk at 768:** five nodes plus a badge must fit. Frameless utilities free space, but the wordmark may need its subtitle hidden at 768–1023; prototypes measure this and it goes to your pick.
- **Footer:** 599 px tall at 390, of which the legal strip is 285 px (five rows at 45 px plus the copyright).
- **Routes:** `/resume`, `/changelog`, `/releases`, `/design-system`, `/publications` don't exist. About's CV CTAs sit in `#bridge1-onboarding`.
- **Email:** the site has no mailto today. jdsaire.com still serves `email-decode.min.js` (re-measured 1 Nov).
- **`/report/` references:** 8 page footers, `privacy_s7_x` link (`report/?reason=privacy`), `.well-known/security.txt` Contact line, `tools/parity.py`, `tools/order.py`, `report/i18n/`.

## Gates

| Gate | Covers | Effort · budget | Release |
|---|---|---|---|
| **G2 · IA prototypes** | Direction picks; no repo commits | High · 60 | `APPROVED PR46 G2` |
| **G3 · Navbar** | Desktop and mobile build, one dropdown, toggle keys, og:image | High · 60 | `APPROVED PR46 G3` |
| **G4 · Footer + /feedback/** | Three tiers, page move, stub | High · 60 | `APPROVED PR46 G4` |
| **G5 · Injection** | Only once `COPY-PR46-IA-LOCK` has EN + ES and zero GAPs | Medium · 30 | `APPROVED PR46 G5` |
| **G6 · Docs + release prep** | SR-4, ledger, proposals, archive | Medium · 30 | `APPROVED PR46 G6` |
| **G7 · Regression + release** | One matrix, push, PR, relay; manual merge | Low · 15 | `APPROVED PR46 G7` |

## G2 · IA prototypes

On a copy of the G1 tip, served on 127.0.0.1:8012, switched by query string, with `variants.html` as the index. No new string in the repo. Picks through /ask.

| Surface | Direction A | Direction B | Direction C |
|---|---|---|---|
| Dropdowns `WORK ▾` `LAB ▾` | Text rows, today's panel on shared styles | Rows with the phone menu's icons | Compact panel, hairline rows |
| Utilities | Moon/sun single icon + `ES · EN` text, active in full ink | Same with an underline on active | Two single toggles showing the current value |
| Mobile drawer | Accordions, utilities pinned at the bottom | Always-open groups under eyebrows | — |
| Footer | Value prop left, three columns right | Three stacked tiers | — |

- All variants: frameless, no solid purple blocks, 44 px phone targets, no status indicator.
- Each is measured at 768, 1024 and 1440, EN and ES, for fit.

## G3 · Navbar

- **Markup, all 8 pages:** left `JD·SAIRE PRODUCT LAB` + `v1.1.0` · centre `WORK ▾`, `LAB ▾`, `ABOUT`, `RÉSUMÉ`, `CONTACT` · right frameless utilities. `RÉSUMÉ` → `about/#bridge1-onboarding`.
- **Reuse:** `wireDisclosure` (`assets/js/core/navchrome.js:101`) drives both dropdowns and the drawer's accordions; `markCurrent` unchanged. Rename the Work-specific classes only where the dropdown needs it.
- **`assets/css/shared/dropdown.css` (new):** panel and rows from `nav.css:54–68, :316` and `report.css:52–69`. The picker stays a `<select>`.
- **Soon rows:** `<span data-nav-state="soon" aria-disabled="true">` with a subtle badge, not focusable as links, one rule in `dropdown.css`.
- **Drawer:** accordions per pick; `Submit Feedback`, Theme and Language pinned at the bottom. Frameless menu trigger at 44 px; `navcue.js` keeps working; the overlay close stays per the pick.
- **Toggle:** `data-i18n-aria` on groups and buttons, new `data-i18n-title` in `core/i18n.js` and the 4 brief loaders, `-title` in `tools/order.py`'s `ATTR`. CSP hashes recomputed. The Language group's name joins here, since this control is being rebuilt.
- **Head:** `https://jdsaire.com/assets/img/bridge1_onboarding.svg` as absolute og:image on all pages, added on the 4 briefs.

## G4 · Footer + `/feedback/`

- **Tier 1:** value prop · `jd@jdsaire.com` · LinkedIn · GitHub.
- **Tier 2:** Core (Work, Résumé, About, Contact) · Lab (Design System Soon, Changelog Soon) · Support (Submit Feedback). Desktop columns; phone compact 2×2, Lab taking its own cell.
- **Tier 3:** one wrapping line, `© 2026 Juan Diego Saire` with Terms · License · Privacy · Your privacy choices; legal overlays unchanged (`core/legal.js`). Styles in `footer.css` and `legal.css`.
- **Move:** `report/` → `feedback/` with its dictionary pair and `assets/{css,js}/pages/report/` → `feedback/`; a stub at `report/index.html` (meta refresh, canonical, `noindex, follow`, per `work/README.md`); privacy link and `security.txt` updated; canonical and og:url updated; tools entries and CSP checked. The form service is untouched. Tests never submit.

## G5 · Injection

Key inventory for the round (→ `proposals/KEY-INVENTORY-PR46-IA-v1_0.md`, replacing the Design System one): `nav_lab`, `nav_resume`, `nav_design_system`, `nav_changelog`, `nav_soon`, `nav_feedback`, `theme_group_name`, `theme_dark_name`, `theme_light_name`, `theme_dark_title`, `theme_light_title`, `lang_group_name`, `footer_col_core`, `footer_col_lab`, `footer_col_support`, plus the changed `report_arc_label` and `privacy_s7_link`. Width fit from G3 and G4 measured at 768 and 390. Until then new keys carry their own name (KEYS BEFORE THE LOCK).

## G6 · Docs + release prep

- CHANGELOG and README table: #45 → 29 Oct 2026, Version column, `—` before #45, v1.0.0 on #45, v1.1.0 on #46 pending merge.
- READMEs, root map, DICTIONARIES.md, IA-CONVENTION (`/designops/` line, absolute og:image), `work/README.md`-style stub note, `tools/README.md`.
- PR body with the merge gate stated. KEYS, EVIDENCE and standing-rule proposals. Archive `Plan-PR46-IA.md` and `pr46-ia-completion-report.md`.

## G7 · Regression + release

`inspect --mode regression --pages all --webkit all` against the keyed floor, base on 8010. `/feedback/` has no base; its cells merge as uncovered; `/report/` is a stub. A 5-run phone lab smoke on Main and Contact against G1's numbers, labelled preview, to confirm the chrome added no pre-paint cost. Then push, PR, relay, Cowork paste block, the post-merge step. **Manual merge after Q16's two checks.**

## Rescue: Design System, carried to #47

Written after acceptance to `closing/PR46-run/proposals/DESIGN-SYSTEM-DEFERRED-v1_0.md`, unsigned, for Cowork's next brief.

- **Rulings:** AIE-Q85 scope, PR46-Q5 curation and its anti-reference, PR46-Q9 cap (banner + 6 sections, at most 4 viewports at 1440 and 7 at 390, tokens by 4 roles), PR46-Q4's stop condition.
- **Structure:** `design-system/` depth 1, Contact's chrome, own dictionary pair, `assets/{css,js}/pages/design-system/`, entries in tools' `PAGES`.
- **CSP:** `connect-src 'self'`, `form-action 'none'`.
- **Both themes:** the site's switch, values read with `getComputedStyle`.
- **Specimens:** tokens (brand, ink/ground, surface ladder, type weight) · CTA (link and button, idle and hover) · switch (on/off driving theme) · overlay (real Choices dialog) · dropdown · forms (inside `id="contact"`, no action, no key, no submit).
- **Left out:** spacing, motion, shadows, carousels, decoration, charts, ticker, nav and footer specimens.
- **Owed with it:** CTA → `shared/cta.css` (census with line numbers, overrides, the pixel-equal proof) and the page key inventory (`KEY-INVENTORY-PR46-v1_0.md`, kept).
- **Placement:** a LAB row flipped from Soon to live.

## Pipeline and governing-doc impact (Cowork, after merge)

This session writes only `P-CC-PR46-IA-v1_1.xml` and PR46-run records. Everything below goes in the relay and the paste block.

| Document | Change owed |
|---|---|
| `BRIEF-CC-PR46-DesignSystem-v1_0` | Superseded by what shipped; next brief is #47 from the rescue file |
| STRATEGY v4_0 §4, §7 | Pipeline and version table renumbered (Q13); §9 bar reads both methods (Q19) |
| LAB-CHANGELOG | AIE-Q80, Q83, Q85 amended; AIE-Q60 reversed (Submit Feedback in drawer and footer); AIE-Q86's denominator now names `/feedback/` |
| PRE-MAX-CHANGELOG | PR45-Q12 reversed (mobile navbar in scope); PR46-Q3, Q7, Q8 superseded |
| COPY-PR45 report and legal locks · KEYS | `Report an issue` → `Submit Feedback`; new IA keys in the next KEYS version |
| EVIDENCE | G1 note labelled preview; B36 limits; Q19's reading stated in the next entry |
| `TRIGGER-CC-VERIFY-PR46` | 80 + 80 runs, `/feedback/` in the 16 cells, which reading decides, Email Obfuscation check |
| PRE-MAX-STATUS · relay | Next stage: #47 Design System; PR46-Q16's merge gate |

## First actions after acceptance

1. Log the rulings and G1's release in `PRE-MAX-CHANGELOG.md`; update RESUME.
2. Stop the old 8012 server; write the rescue file and the IA key inventory; save this plan as `PLAN-PR46-v1_1.md`.
3. Author `P-CC-PR46-IA-v1_1.xml` (corrected premises list the pivot).
4. Build the prototypes on 8012 and post G2.

## Verification

Per gate: the four tools at 0, `inspect --mode gate`, live review in the preview browser, EN and ES, 390 and 1440, dark and light. G3: keyboard through both dropdowns and the drawer, Escape, focus return, Soon rows skipped, Chrome and WebKit. G4: footer height at 390 against 599 px, stub forwards, `security.txt` valid, web3forms requests 0. G5: lock comparison at 0, 0 placeholders. G7: the one matrix with 0 unintended differences, plus Main and Contact against G1.

---

## PLAN-PR46-v1_2 · annex gate G5A · Main imagery

Supersedes v1_1's gate table by inserting G5A. Everything else in v1_1 stands. Saved beside v1_1 as `closing/PR46-run/PLAN-PR46-v1_2.md` on acceptance.

## Context

Main's 7 code-drawn SVGs (4 work cards, 3 capabilities) become the locked raster images from round `main-batch-1`: 7/7 locked, 14 `.webp`, 537 KB, manifest with 0 GAP. JD placed the swap inside PR #46 as G5A, between G5 and G6 (PR46-Q52), so G6 documents it and G7's matrix covers it. Source: `imagery/BRIEF-CC-PR46-G5A-Imagery-v1_1.md`, the two gate notes, `imagery-manifest.json`.

## Rulings to log on acceptance (next free id PR46-Q57; earlier collisions cited as Q48-ES, Q49-G5, Q50-FB)

| Id | Ruling |
|---|---|
| G5 | RELEASED: "APPROVED PR46 G5" (JD) |
| Q57 | Cap alts EN locked as proposed: s1 "Two titanium caliper arms seat a violet glass core inside carbon rings." · s2 "A row of glass panels on dark stone, the first lit violet, the light carried down the row." · s3 "Carbon, steel and violet rings settled into one plane around a glowing core." ES by JD's hand (PR46-Q56) |
| Q58 | The imagery check is `tools/imagery.py`, a fifth repository check |
| Q59 | The 3 `cap-*.svg` are retired (used only by Main, measured); the 4 work SVGs stay for the briefs' Keep exploring slides |

## Gates

Plan · G1 ✓ · G2 ✓ · G3 ✓ · G4 ✓ · G5 ✓ · **G5A Main imagery (High · 60 min, `APPROVED PR46 G5A`)** · G6 Docs · G7 Regression + release. Manual merge.

## Measured (3 Nov, tip `035a9af`)

| | 390 | 768 | 1024 | 1440 |
|---|---|---|---|---|
| Work card (w × h, ratio) | 304 × 517, 0.588 | 323 × 548, 0.588 | 227 × 384, 0.590 | 319 × 540, 0.590 |
| Capability slot | phone carousel | 225 × 150 | 300 × 200 | 422 × 282 |

- Posters are 800 × 1433 (0.558), so every card is a little wider than the image: `object-position: 50% 0%` keeps the top, as the gate asked.
- Capability images are 800 × 537 (1.49).
- The capability slots carry `aria-hidden="true"`, so today's alts are never read. With the pill gone there's no reason to hide them: G5A removes `aria-hidden` on Main's slots, so the new alts reach screen readers. That's a change in behaviour, and it gets reported.
- `cap-*.svg` are referenced only by `index.html`.

## G5A · steps

1. **Before numbers:** a 5-run phone Lighthouse on Main at `035a9af` (same server setup as G1) plus Main's transferred bytes. Labelled preview.
2. **Assets:** copy the 14 files byte for byte into `assets/img/work/` and `assets/img/services/`, and `imagery-manifest.json` into `assets/img/`. Check sha256 against the source. Never re-encode. Delete the 3 `cap-*.svg` (Q59).
3. **Work cards** (`index.html`, `assets/css/pages/home/work.css`):
   - `<img src="…-800.webp" srcset="…-480.webp 480w, …-800.webp 800w" sizes="(min-width:1024px) 320px, (min-width:768px) 324px, 78vw" width="800" height="1433" alt="" loading="lazy" decoding="async">`
   - `.work-card__bg-img { inset:0; width:100%; height:100%; object-fit:cover; object-position:50% 0%; }`
   - `--work-art-top` no longer positions the art; the `.work-card__bg` gradient becomes fallback ground only.
   - Light-mode re-pinning (`work.css:88`) stays, as do the hover/focus blur, hairline, lift and the 390 peek.
4. **Headline contrast,** per card at 390 and 1440: white text against the 95th-percentile luminance of the pixels behind the headline, through the scrim.
   - If any card is under 4.5:1, strengthen `.work-card__default`'s scrim, starting from `linear-gradient(180deg, rgba(5,5,8,.78) 0%, rgba(5,5,8,.35) 38%, rgba(5,5,8,0) 60%)`, and re-measure.
   - Every number goes in the report. W01, W03 and W04 are the tight ones.
5. **Capabilities,** all 6 placements (triptych + carousel):
   - `<img srcset>` 480w/800w, `width="800" height="537"`, `loading="lazy" decoding="async"`, alts on `cap_s1…3_img_alt`.
   - The 6 `.illus-tag` spans leave Main; the CSS stays for the briefs.
   - Desktop slot stays 3:2 with `object-fit: cover` (today `contain`). Phone slot becomes 4:3 cover, centred.
   - Before/after reported per breakpoint.
6. **Caption:** one `<p class="imagery-note" data-i18n="ui_ai_imagery_note">` under the Work track and one at the end of the Capabilities organism. One shared rule in `section-extras.css` (muted, small).
7. **Keys** (global pair, page order):
   - `ui_ai_imagery_note` EN "Images made with AI. They illustrate the idea, not the app."
   - The three cap alts get their new EN.
   - ES holds the EN until JD writes all four by hand (PR46-Q56). The files are dropped as paths in the report.
8. **`tools/imagery.py` (Q58):** for every raster under `assets/img/{work,services}`:
   - it's in the manifest;
   - its file size is within the manifest budget;
   - its pixel dimensions match;
   - every manifest file exists;
   - every page that references one carries `ui_ai_imagery_note`.
   - Ends with `failures: 0`. `tools/README.md` lists it.
9. **`assets/img/README.md`:** the raster rule and a pointer to the manifest; the `services/` and `work/` rows updated. SR-5 stays a G6 proposal.
10. **After numbers:** the same 5-run phone smoke and bytes on Main.
    - No manifest asset may be the LCP element at 390 or 1440.
    - Main's LCP must not regress against the before median.
    - If either fails, stop and report.

## Verification at G5A

- The four tools plus `tools/imagery.py` at `failures: 0`.
- `inspect --mode gate` on Main.
- sha256 of the 14 files equal to the delivered ones.
- Contrast table per card, the peek width at 390, LCP element and median before/after, bytes before/after.
- Live review at 127.0.0.1:8000 in the preview browser: 390, 768, 1024 and 1440, EN and ES, dark and light.
- Report through cc-gate-report; halt on `APPROVED PR46 G5A`.

## Carried to G6 and G7

- **G6:** documents G5A (READMEs, DICTIONARIES counts, CHANGELOG row text) and proposes SR-5 as written in the brief.
- **G7:** the matrix covers Main fully in Chrome and WebKit, since CSS and markup change.

Sole author jdsaire, no AI attribution. The manifest's `method_note` and the caption are labelling, not authorship.
