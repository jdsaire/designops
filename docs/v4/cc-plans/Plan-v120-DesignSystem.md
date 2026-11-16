# Plan · Design System v1.2.0 (P-CC-v120-DesignSystem-v1_0)

## REVISION 1 (16 Nov 2026, at G2): structure widened, three prototypes first

### Why
At G2, JD judged the four-section page too minimal. Live parts were left out: the brief index, carousel, dashboard, charts, relay, ticker, channels, display opening, editorial heads and progress bar all ship on live pages. The practice behind the system (atomic structure, type, themes, accessibility, writing per language, IA) was missing too. The Accenture reference (restraint, precision, dark-dominant, purple with purpose, zero radius, eyebrow + display hero per section) is the inspiration. The site already derives from it, but the page shows no Accenture asset or name.

### Rulings to log first (JD via /ask, 16 Nov)
| Id | Ruled |
|---|---|
| V120-Q11 | Sections join: Atomic design (atoms → molecules → organisms → templates, mapped to live site parts, the left-out components included), Typography in detail, Dark vs light, Accessibility, Writing per language, and Information architecture (ontology, taxonomy, choreography from Plan-PR46-IA, with a sitemap network drawn from the nav markup). Supersedes V120-Q1's four-section structure |
| V120-Q12 | Navigation reuses the briefs' sticky index (`shared/brief-index.css` + `core/brief-index.js`) unchanged: a button row from 768, a select on phones, a progress line |
| V120-Q13 | Cap: index-led, no viewport cap, about 10 sections. Each section is eyebrow + hero title + one lede + specimens; no state grids or variant catalogues; graceguo.io stays the anti-reference. Supersedes PR46-Q9 and amends PR46-Q5 for this page; AIE-Q85 (live parts only) still binds every specimen |
| V120-Q14 | Three responsive prototypes on the site's CSS, with section names as structural labels and no drafted copy: A Editorial (long scroll, index row, full-bleed rhythm) · B Atomic (atoms → templates as the spine, foundations inside each tier) · C Docs (sticky side index from 1024, content column, select on phones). JD picks one |
| V120-Q15 | Practices recount replaced by the IA section (JD's answer) |

### Section list (order varies per prototype)
Opening (display) · Index · Foundations: colour roles · Typography in detail (scale, weights, tracking, line height, case rules, the "&" swap, the fallback) · Dark vs light (same names re-pointed; what flips, what never does) · Atomic design: atoms (CTA, eyebrow bar, PULSE, tag, icon), molecules (field, menu card, channel link, dashboard figure), organisms (nav, footer, overlay, dropdown, dashboard, relay, carousel, ticker), templates (page and brief skeletons) · Accessibility (contrast per theme, focus, 44px targets, reduced motion, labels, the recorded WCAG exceptions) · Writing per language (EN first, ES transcreation, usted, no added fact or magnitude, the three dictionary levels) · Information architecture (ontology, taxonomy, choreography, sitemap network).

### Steps
1. **Log** V120-Q11…Q15 in PRE-MAX-CHANGELOG. Add one backlog line: the decoration spec catalogue isn't a specimen here (it stays in docs/v3/organisms).
2. **Prototypes (decision gate G2b, no repo change).**
   - Write them to `out/active/PRE-MAX/closing/PR-v120-run/prototypes/{A-editorial,B-atomic,C-docs}/index.html`.
   - Each links the worktree's real CSS and JS through an `assets` symlink in the prototype root, so fonts and modules load same-origin. Serve on :8030 after checking the port's owner.
   - Each runs at 390, 768 and 1440, dark and light, uses the real index component, and fills specimens with live components and live strings where they exist. New section titles show as labels such as `[Typography]`.
   - Review in the preview browser, plus one comparison table: sections, viewports at 1440 and 390, index behaviour, what each costs to build.
   - **STOP:** JD picks A, B or C (or a blend) through /ask.
3. **Key inventory v2** for the picked arrangement goes to Cowork (replaces the 28-key list). The COPY-v120-DS-LOCK request widens accordingly, and the trigger for the og-10 card is unchanged.
4. **G2 rebuilt** on `site/design-system`: the picked structure replaces commit `87ef268`'s four sections (new commits on top, no history rewrite). Specimens use the shipped stylesheets: brief-index, dashboard, relay, carousel, ticker, channels, editorial and display get linked as needed. A sitemap SVG is generated from the nav markup (inline, `aria-hidden`, with a text list beside it). The CSP is re-derived. Then G2 is re-presented with the same checks; viewport counts are reported, not capped.
5. **G3–G5 unchanged** (lock injection; docs with the artifact mirrored from the page, V120-Q8; og-10 at G4; regression and release).

### Costs, stated
- The copy lock grows from about 31 to an estimated 70–90 strings, so G3 waits longer for Cowork.
- The G5 matrix covers a longer page (full grid on /design-system, tip-only).
- The original P-CC-v120 prompt's §structure_basis and cap rule are superseded by this revision. The completion report records it.

---

## Context

The LAB menu has shown Design System as 'Soon' since PR #46. This PR ships the page now, in ghost mode (SY51-Q3): a native `/design-system` page rendered from the repo's own tokens and components, linked from the LAB row as 'NEW', with a private Design System artifact as its record. The page shows only components the site uses (AIE-Q85), curated (PR46-Q5), inside PR46-Q9's cap. Curation beats density. Riders: SR-5, the SR-2 note, decoration spec v1.8, the #51 date. Base `874637b`, branch `site/design-system`, worktree `repos/designops-v120`. Effort Medium throughout, 30 min per gate.

## Rulings (JD via /ask, 15 Nov 2026). Each becomes one PRE-MAX-CHANGELOG line as the first act after acceptance

| Id | Ruled |
|---|---|
| V120-Q1 | Structure: banner + 4 sections (Foundations · Actions · Menus and dialogs · Forms). The switch is dropped: it hasn't been live since 4bb3dd0 (PR #46 footer), and switch.css is linked but unused. Amends AIE-Q85 |
| V120-Q2 | 'NEW' pulse reuses X-6 PULSE as specified; the new placement goes in the completion report, and a v1.9 spec line is owed to Cowork, including the two-in-view case when a LAB menu opens over a hero PULSE |
| V120-Q3 | v1.2.0 row placed by merge order (after #51 in CHANGELOG, above it in README) |
| V120-Q4 | og:image: a tenth card, `og-10-design-system.png`, 1200×627, on the brand-kit path, Cowork's lane. **G3 waits for it as well as the lock** |
| V120-Q5 | SR-5 verbatim plus one Scope line, with the same note in the manifest: the check covers work/ and services/; og cards, the portrait and badges are outside it and carry no label. No tool change |
| V120-Q6 | SR-2's last sentence becomes: "Every page carries its own policy, derived from what that page loads; a new page derives its own before it ships, and the inline scripts' hashes are recomputed whenever one changes." |
| V120-Q7 | #50 rows get their plan and report links in the G4 docs commit |

## System measurement (instruction 4: fills both the page and the artifact)

- **Brand:** `--color-brand-purple #A100FF` · `--color-purple-hover #8C00D9` · `--color-purple-light #C2A3FF` (light theme #8C00D9).
- **Ink and ground:** `--ink`, `--ground`, brand black/white swapped in light, `--color-text-muted`, `--color-text-dim`, `--color-on-brand`.
- **Surface ladder:** sunken · card · raised · elevated · panel · hover · input.
- **Type:** Archivo, one family; weights 300/400/500/600/700/900; fallback face per weight band.
- **Spacing:** no scale; layout tokens `--gutter`, `--col-gap`, `--nav-height`, `--max-content-width`.
- **Radius:** 0 throughout; 999px pill on the switch only (dormant).
- **Motion:** `--duration-ui/-deco/-ambient`, `--ease-standard/-decelerate`. **Shadows:** `--shadow-1…3`, `--scrim-modal`.
- **Live components and where they're used:**
  - CTA (`shared/cta.css`): Main, About, Résumé, Contact, Feedback.
  - Dropdown (`shared/dropdown.css`): the nav menus on all nine pages.
  - Overlay (`shared/legal.css` + `core/legal.js`): all nine pages.
  - Forms (`pages/contact/contact.css`): Contact, Feedback.
  - The theme control is a dropdown menu (`core/theme.js`), not a switch.

## Page structure (V120-Q1)

| Section | Specimen source | Shows | Left out |
|---|---|---|---|
| Banner | `page-hero.css`, Contact's arc opening | label · display title · subline | — |
| 01 Foundations | `tokens.css`, values read with getComputedStyle | 4 roles: brand, ink/ground, surface ladder, type ramp; the site's theme menu flips them | spacing, motion, shadows, raw token lists |
| 02 Actions | `shared/cta.css` | CTA as link and as button, idle and hover | size variants |
| 03 Menus and dialogs | `dropdown.css` + `core/navchrome.js` menu pattern; `legal.css` + `core/legal.js` | a Work-style menu reusing the `nav_card*` labels; the real Choices overlay opened from its button | a demo dialog, state grids |
| 04 Forms | `pages/contact/contact.css` inside `id="contact"` | field, hint, error, select, consent | contact.js, action, submit control, validation flow |

One specimen set; themes come from the site's own control. Each section has a heading, a one-sentence lede and its specimen. Targets: ≤4 viewports at 1440, ≤7 at 390, counted at G2.

## Key inventory, for Cowork's EN lock (V120-Q1 structure, in page order)

Line limits are estimated from sibling keys (Contact, Feedback, global) at a ~358 px column at 390, and are confirmed at G3 after injection.

| Dictionary | Key | Role | Fit |
|---|---|---|---|
| Global | `nav_new` (replaces `nav_soon`, which is retired) | LAB row label | 1 word, ≤5 chars like "Soon"; uppercase tag |
| Page | `ds_meta_title` · `ds_meta_description` | head (og:title / og:description built from them) | ~40 · ~80 chars; title-line rule POSITIONING §1 (Cowork decides "— Product Lab") |
| Page | `ds_arc_label` · `ds_arc_pre` · `ds_arc_k` · `ds_arc_post` · `ds_arc_sub` | banner | ≤14 · ≤5 · ≤9 · ≤5 display chars · ≤22 |
| Page | `ds_found_h` · `ds_found_lede` | section | 1 line ≤24 · 2 lines ≤90 |
| Page | `ds_role_brand` · `ds_role_ink` · `ds_role_surface` · `ds_role_type` | token roles | 1 line, ≤14 each |
| Page | `ds_type_sample` | type ramp line | 1 line at 1440 display size, ≤24 |
| Page | `ds_actions_h` · `ds_actions_lede` | section | ≤24 · ≤90 |
| Page | `ds_cta_link` · `ds_cta_button` | CTA samples | ≤24 each |
| Page | `ds_menus_h` · `ds_menus_lede` | section | ≤24 · ≤90 |
| Page | `ds_dropdown_trigger` · `ds_overlay_open` | menu trigger · overlay opener | ≤8 like "Work" · ≤28 |
| Page | `ds_forms_h` · `ds_forms_lede` | section | ≤24 · ≤90 |
| Page | `ds_form_label` · `ds_form_hint` · `ds_form_error` | field specimen | ≤21 · ≤60 · ≤50 |
| Page | `ds_select_label` · `ds_select_placeholder` · `ds_select_opt1` · `ds_select_opt2` | select specimen | ≤21 · ≤10 · ≤50 each |
| Lock only | `artifact_readme_positioning` | artifact README text, not a site key | 1 paragraph |

Totals: 30 new page keys plus 1 global swap (+1 −1). Reused unchanged: `nav_card1…4_label`, `theme_*`, `consent_checkbox`, `consent_link`, `consent_error`, legal and chrome keys. EN first, then one designops-copy-es pass; zero GAPs.

## Files

- **New:** `design-system/index.html` (depth 1, Feedback's chrome) · `design-system/i18n/design-system.{en,es}.json` · `design-system/README.md` · `assets/css/pages/design-system/{design-system.css,README.md}` (layout only) · `assets/js/pages/design-system/{main.js,README.md}` (imports core i18n, theme, progress, navchrome, legal, decoration; blocks implicit submit).
- **LAB row, all nine pages plus the new one:** the navbar card, overlay subitem and footer link go from a `span[data-nav-state="soon"][aria-disabled]` to an `a href` with `data-nav-page="design-system/"` (depth-correct relative path), the label `nav_new` and a PULSE square (aria-hidden; reduced motion: still at full opacity).
- **Styles:** `dropdown.css` (.nav__soon → the new state), `nav.css:244`, `footer.css:104`.
- **Tools:** the page is added to `PAGES` in `tools/parity.py`, `order.py` and `imagery.py`.
- **Global dictionary:** `assets/i18n/{en,es}.json`, `nav_soon` → `nav_new` at :11.
- **CSP:** Feedback's minus Web3Forms: `connect-src 'self'`, `form-action 'none'`; theme bootstrap and i18n-early hashes re-checked.
- **Head:** title, description, canonical, og:url, og:type, og:title, og:description, og:image `https://jdsaire.com/assets/img/og/og-10-design-system.png` + 1200/627, og:locale.

## Artifact plan (G1)

Created from the core Design System type, titled "jdsaire.com Design System", private. Contents:
- **README:** what the system is, its sources by repo path; positioning text left as [GAP] until the lock.
- **Tokens:** the measurement above, in both themes.
- **Components:** CTA, dropdown, overlay, forms, each a preview built from the repo's own CSS.
- **Assets:** logos (`logos/`) and Archivo.

It is never linked from the site, repo or PR.

## Gates and commits

- **G1, artifact:** no repo change.
- **G2, build:** placeholders `[key]` in both languages; five checks after each commit. Commits:
  1. `feat(design-system)`: page scaffold, dictionaries, READMEs, tools PAGES
  2. `feat(design-system)`: the four specimens
  3. `feat(nav)`: LAB row live, 'NEW' and PULSE on ten pages, `nav_soon` retired
  4. `chore(csp)`: the page's CSP and head
- **G3, injection:** waits for COPY-v120-DS-LOCK (EN + ES, zero GAPs) **and** `og-10-design-system.png`. Commits: `copy(design-system)`: lock injected; `feat(og)`: the tenth card copied by sha256; then the artifact README text.
- **G4, docs:**
  - `docs(rules)`: SR-5 + Scope line, SR-2 sentence
  - `docs(img)`: manifest scope note
  - `docs(decoration)`: spec v1.8 by cp
  - `docs`: README/CHANGELOG (#51 date, v1.2.0 row by merge order, #50 links), DICTIONARIES counts (+30 page, global 99), IA-CONVENTION page list, folder READMEs
  - KEYS and EVIDENCE proposals written to `closing/PR-v120-run/proposals/`
- **G5, regression and release:** base `874637b` worktree on :8010, tip on :8000. `inspect --mode regression`, 9 pages full Chrome grid, WebKit on all nine, `--mask "canvas,.ticker__lanes"`, `--floor …/8ba81f4_chrome-157.0.8103.78_webkit-2359.json`, run in the background; /design-system tip-only. Expected difference: the LAB row only. Then:
  - the five checks; SR-3 read time; attribution grep
  - plan and report archived (`Plan-v120-DesignSystem.md`, `v120-design-system-completion-report.md`)
  - PR body from the template; push; `gh pr create`, auto-merge off; PR number recorded; URL printed
- **Archive:** the relay and the Cowork paste block, also saved as `closing/PR-v120-run/TRIGGER-CW-POST-DEPLOY-SYNC-v120.md`.

## Out of scope, as backlog lines

- `switch.css` linked on nine pages, but no markup uses it.
- The briefs' CTA cleanup (SY51-Q6).

## Verification

- At every commit: `python3 tools/parity.py`, `links.py`, `orphans.py`, `imagery.py` show `failures: 0`; `order.py --strict` shows 0.
- G2–G4: `inspect --mode gate --digest-always` on the touched pages (Chrome 390/1440 dark), console 0, overflow 0. Also:
  - the cap counted
  - the form can't submit (Enter key and button)
  - reduced-motion PULSE is still (emulated)
  - 'NEW' contrast AA in both themes
  - badge v1.3.1
- Visual review in the preview browser at http://127.0.0.1:8000/design-system/ and the LAB row on Main and one brief. A WebKit shape check of the PULSE square (JD reviews in Safari).
- G5: one regression matrix, DIGEST.md, differences confined to the LAB row.
