# Wave 6 · Task 6.2.1 — Chrome & Work-Section Structural Pass · Completion Report

**Branch:** `wave6-task621-chrome-structural-pass` (from `main` @ `7220a68`) · **PR-based, not merged.**

## Outcome

The site chrome — five separately-maintained navigation copies at 6.2 — is now **one shared surface**: a single `assets/css/shared/nav.css` and a single `assets/js/core/navchrome.js` drive the navbar and mobile overlay on all five pages (Home + four briefs). `assets/js/pages/home/overlay.js` is deleted and `home/nav.js` is reduced to Home's scrollspy. On that consolidated surface the principal's annotations landed **once**: wordmark logo, global link grammar (underline retired, scrollspy reconciled to colour+weight), Work dropdown, purple-chevron Contact CTA, hide-on-scroll sitewide, and — restored for the first time — **working mobile navigation on every page**. The work-section filter surface was rebuilt (funnel icon, Status facet removed, chosen filters relocated into the cards per PICK A1, uppercase, centred) and the footer reverted to its pre-6.2 shape on all five pages.

This run authored **zero new i18n keys**, removed **exactly five** EN-only keys whose surfaces it deleted, and moved **exactly two** i18n values (both principal-supplied verbatim). No per-brief BODY dictionary changed. Content is otherwise frozen; Briefs 02/03 keep every in-progress marking (verified 16/16 markers unchanged vs baseline).

A live-browser render was **not available** in this environment. In its place the run used a served-path reference resolution sweep (141 local references, all resolve) and a DOM-shim `init()` execution of every changed module (all execute to completion without a synchronous throw). **Browser render remains an open verification item.**

## Success criteria

| # | Criterion | Result |
|---|---|---|
| 1 | Task 3 promotion inert before Task 4 | **PASS** — JS behaviour preserved (guarded, parses, DOM-shim INIT-OK); brief nav CSS reproduced by the shared surface. Per the prompt's guardrail, Task 4 deliberately collapsed the transient `data-nav-context="brief"` variant; the committed surface is the unified navbar. |
| 2 | One `nav.css` + one `navchrome.js`; `overlay.js` deleted; no brief inline `.nav*` CSS/script | **PASS** |
| 3 | Every annotation implemented (logo, labels, grammar, Work dropdown, no dropdown on Cap/About, SwapLang, Contact chevron, hide-on-scroll, hero CTA, bridge CTA, filter icon, Status removed, chosen filters in cards, uppercase, centred, footer, LinkedIn parity) | **PASS** |
| 4 | Both gate picks implemented + recorded | **PASS** — A1, B1 (and the PICK C mobile override); see below |
| 5 | Mobile nav reachable ≤767px on all five; nested Work lists four depth-correct links | **PASS** — hamburger `display:flex` ≤767; 4 overlay subitems/page; all links resolve |
| 6 | Scrollspy survives underline removal; `aria-current` correct; reconciliation stated | **PASS** — callback test: `aria-current="true"` + `.nav__link--current` on the correct link only |
| 7 | Zero new keys; exactly 5 EN removed; 1 ES value + 1 EN value moved; no BODY dict changed; counts reported | **PASS** — EN 156→151; ES 148→148; BODY dicts: none changed |
| 8 | Content freeze; Briefs 02/03 markings intact | **PASS** — 16/16 markers match baseline on each |
| 9 | Mechanical safety (no absolute paths, no loader depth change, no new dep/build/hinge) | **PASS** — 0 absolute paths added; only canonical 767px hinge introduced |
| 10 | Parity greps: nav / overlay / footer class sequences byte-identical ×5; zero `footer__columns`/`footer_sla` | **PASS** in live code (see deviation note re: historical docs) |
| 11 | Roadmap +1 row (6.2.1) only; parking-lot +3 bullets | **PASS** — roadmap 1/0 diff; parking-lot 3/0 diff |
| 12 | Zero AI/agent attribution; sole author `jdsaire`; one logical commit; PR via `gh`, not merged | **PASS** |
| 13 | Zero delegated sub-processes | **PASS** — single-context run |
| 14 | Plan + report archived under `docs/v3/`, stating 6.2.1 complete with 6.3/6.4 remaining | **PASS** |

## Gate picks

- **PICK A → A1.** Each work card always renders its **own full tag set** (from `data-tags`, labels from the matching chips — never hardcoded); tags matching an active filter are emphasised (`.work-card__tag--on`). Stable, self-descriptive resting state; the label row is clamped (`max-height`) so a variable tag count can never push the fixed-height card's title. Consequence: in-card tags are **read-only**, so `filter_remove_label` becomes an orphan — **retained** (the deletion cap is exactly five named keys).
- **PICK B → B1.** Full standardisation: the brief pages adopt `nav_cta` ("Contact"/"Contacto") → `../../#contact`, matching Home. One CTA grammar sitewide; both keys were already bilingual, so no translation debt. The brief's own `#convert` block remains reachable by scroll.
- **PICK C (principal's dispatch note — authorized deviation from the XML).** The XML's "SwapLang unchanged / CTA lives in overlay at ≤767px" is amended: the **mobile bar carries only the wordmark (left) and the hamburger (right)**; SwapLang and the Contact CTA (both in `.nav__utility`) are hidden at ≤767px, and language switching moves **inside the overlay** (a `.nav__overlay-lang` ES/EN control reusing the existing `data-lang` idiom — **no new key**). This collision was surfaced, not silently resolved; the reconciliation preserves desktop/tablet SwapLang byte-identically and is recorded here.

## Scrollspy reconciliation (mandatory)

The annotation's global link grammar removes `.nav__link::after` (the purple underline sweep) — the very pseudo-element P-6a used to express the current section. Per the `collision` note, P-6a **survives as a colour + weight state**: the IntersectionObserver, `aria-current`, and the `.nav__link--current` class are all kept; the class is restyled to solid white + `--fw-semibold`. Verified by executing the observer callback under a DOM shim: `aria-current="true"` and `.nav__link--current` land on the correct link only, with the underline gone.

## Authorized deviations

1. **Language wiring via injected callback.** `navchrome.js` owns the full language control (panel disclosure + option-click + overlay control) and invokes `opts.swapLang`, so `main.js` passes Home's module `swapLang` and each brief's bootstrap passes its global inline `swapLang` — the module imports neither engine. The XML suggested `nav.js` keep the `swapLang` import; that import moved to `main.js` instead. Behaviour is equivalent; success criteria unaffected.
2. **Task 3 / Task 4 as consecutive phases in one commit.** The run produces one logical commit whose final state is the unified navbar. Task 3's inertness was validated at the mechanism level (JS parse + guard analysis + DOM-shim INIT-OK); the transient brief CSS variant the guardrail describes was subsumed by Task 4's deliberate unification (the prompt states Task 4 "collapses those variants"), so it does not appear in the committed diff.
3. **Nav-scoped CTA/caret classes.** `hero.css` (`.cta__icon`) and `work.css` (`.tagfilter__trigger-caret`) are Home-only; the shared navbar reproduces their exact declarations under nav-scoped classes (`.nav__cta-icon`, `.nav__work-caret`) so the same visual idiom renders on all five pages. No second idiom invented.
4. **Brief nav hrefs are depth-correct per page.** Byte-identical parity is the **class sequence** (verified identical ×5); the raw hrefs differ per page (`../../#…`, `../<slug>/` on briefs) so links resolve depth-correctly without JS. `navchrome.js` recomputes the same values idempotently from `data-nav-link`/`data-nav-work`.
5. **`footer__columns`/`footer_sla` in historical docs.** Zero occurrences remain in live HTML/CSS/JS. The only textual matches left are in prior-wave records (`cc-plans/Plan-Wave6-Task62…`, the 6.2 completion report, `SPEC-Wave6…`), which are immutable history describing the 6.2 state and were not rewritten.
6. **Scrollspy scope.** `Work` is now a disclosure button (no `data-nav-link`), so scrollspy tracks `Capabilities` and `About`; the `#work` section stays reachable from the footer route and overlay. P-6a is preserved for the remaining anchor links.

## Verification (browser-render unavailable — substitutes run)

- JSON parse: 10/10 dictionaries (2 site + 8 body). HTML balance: 5/5 pages clean. JS parse: all modules + inline scripts.
- Served-path resolution: **141** local references resolve at real depth. DOM-shim `init()`: navchrome, home/nav, tagfilter, hero, i18n, progress — all INIT-OK.
- Parity greps: nav class-seq, overlay class-seq, footer class-seq, centre link set — each byte-identical across five pages.
- Faceted logic re-checked on the reduced (Industry/Field/Role) inventory: resting shows all four; cross-category ANDs narrow; same-category widens; dead-ends return empty.
- Sweeps: 0 absolute paths added; 0 AI/agent attribution in added lines; 0 new breakpoint hinge (only canonical 767px introduced); 0 new keyframes/animation.

## Open items carried forward

- **Browser render** — not performed in this environment; flagged for a visual pass on the PR.
- **6.3 (ES lock)** now inherits **ten** EN-only keys (down from fifteen): `filter_open_cat`, `filter_remove_label`, and the eight `evo_m{3,4,6,7}_rv_{btn,txt}`. The five retired keys (`filter_cat_status`, `tag_live`, `tag_wip`, `footer_map_label`, `footer_sla`) served surfaces this run deleted.
- **Retained orphans** (deliberate survivors, logged in `parking-lot.md`): `nav_logo_alt`, `hero_cta`, `hero_cta_aria`, `filter_remove_label`. `filter_label` stays live as the filter region's `data-i18n-aria` name.
- **`nav_capabilities` ES = "Verticales"` and `nav_evolution` EN = "About"** are principal-supplied verbatim (not stale), logged in the parking lot alongside the `work_card1_cta` exception.

**Wave 6 task 6.2.1 is complete.** Task 6.3 (ES lock pass on the approved EN) and task 6.4 (parking-lot review) remain.
