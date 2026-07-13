# Wave 4.5 — Multipage Migration · Completion Report

Brief 01 ("DesignOps System") relocated from the temporary root staging file to a real page of
the multipage site, per `LimaFly_Deploy_Strategy_v3_0.md` §11 (Multipage IA) / §12 (Motion layer)
and Execution Roadmap task 4.5. This was a **structural migration, not a rewrite** — Brief 01's
copy and internal IDs are frozen; only the named surfaces below moved.

## Outcome

- Brief 01 served at `/work/designops-system/` (was root `work-designops-system.html`).
- CHROME dict merged into shared `assets/i18n/en.json` (+2 keys); BODY dict extracted to a new
  per-page dict `assets/i18n/briefs/designops.en.json`.
- Context-aware nav replaces the absolute `https://jdsaire.github.io/designops/...` URLs.
- Card 1 CTA + the `#bridge1-onboarding` section both link into the real route.
- Cross-document View Transitions between home and brief.
- Cross-page language persistence + a working SwapLang toggle on the brief nav (principal-approved).

## Task-9 verification — PASS/FAIL

| Check | Result |
|---|---|
| JSON validity (en 115 / es 120 / body-en 133 / body-es 0) | PASS |
| CHROME ↔ BODY key collisions on extraction | PASS — NONE |
| CHROME keys conflict with a different value in `en.json` | PASS — NONE (all pre-existing keys matched verbatim; only 2 additive) |
| All 142 brief `data-i18n*` keys resolve in merged EN dict | PASS — 0 unresolved |
| `+2` CHROME keys present (`chrome_wordmark_sub`, `chrome_nav_cta`) | PASS |
| `es.json` untouched (no invented Spanish) | PASS |
| Internal IDs sacred (`act1`–`act5`, `sch_*`, `dash`, `house`) | PASS — present, byte-unchanged |
| Old root file superseded (`git mv` → RM, not present) | PASS |
| Residual absolute nav URLs | PASS — only the intentional external "Open the live site" evidence link (`act3_ev_site`) remains, by design; not a nav link |
| ES chrome resolves (`nav_work`→Portafolio, etc.); EN-only chrome keys degrade to EN DOM defaults | PASS |
| ES body degrades to English DOM defaults where untranslated (empty ES stub prevents fetch 404) | PASS |
| Nav-context rewrite idempotent (derives from `data-nav-link`, not current href) | PASS — home prefix `""` (no-op); brief prefix `../../` |
| View Transitions opt-in on both pages + `prefers-reduced-motion` guard | PASS |

Manual browser checks (VT firing, live cross-navigation, language inheritance round-trip) require a
served `/designops/`-base host; the static contract checks above all pass and the runtime wiring
mirrors the home engine's proven sweep.

## Design-question resolutions

- **(a) Relocation** — `git mv` byte-identical transplant to `work/designops-system/index.html`;
  surface edits applied afterward.
- **(b) i18n dual-dict merge** — brief-local inline loader (chassis lock forbids importing
  `core/i18n.js` as a module). Fetches + merges CHROME (`../../assets/i18n/{en,es}.json`) and BODY
  (`../../assets/i18n/briefs/designops.{en,es}.json`), then runs the same sweep
  (`data-i18n`/`-aria`/`-placeholder`/`-alt`, `lang`/`data-lang`, `i18n:changed`). Contract preserved.
- **(c) Nav-context** — `data-nav-context="home|brief"` on `<html>`; cross-document links carry
  `data-nav-link` with a base hash. On load a prefix is applied (`home`→`""`, `brief`→`"../../"`,
  base-path-safe for GitHub Pages `/designops/`). Home folds it into `assets/js/home/nav.js` (no-op
  there); the brief inlines the same logic (stays self-contained).
- **(d) View Transitions** — `@view-transition { navigation: auto; }` + reduced-motion guard added
  to the home base stylesheet (`assets/css/base/reset.css`) and the brief's inline `<style>`.
  Default cross-fade only; non-supporting browsers navigate plainly.
- **(e) bridge1-onboarding** — gains an `<a href="work/designops-system/">` reusing the locked
  `work_card1_cta` label. No new copy.
- **(f) CHROME diff** — exactly 2 additive keys to `en.json` (`chrome_wordmark_sub` = "DesignOps",
  `chrome_nav_cta` = "Start a conversation"). All other CHROME keys already present, identical values.

## Authorized deviations (flagged per plan)

1. **`assets/js/core/i18n.js` changed by 2 lines** — persistence: `swapLang` writes
   `localStorage['jds-lang']` on every swap; `init` reads it for `initialLang` (fallback ES).
   Principal-approved; a strict superset of prior behavior; `i18n:changed` + sweep unchanged. Makes
   persistence symmetric (home↔brief), avoiding a brief-EN → home-ES snap-back.
2. **Brief nav gains a SwapLang globe** — new UI on the otherwise frozen brief chassis. Mirrors the
   home chrome pattern with minimal inline CSS (brief can't link `assets/css`) + an inline handler
   reading/writing the shared key. Principal-approved as the largest deviation from chassis-freeze.
3. **No new copy authored anywhere** — the bridge link, the brief SwapLang tokens (`EN`/`ES`, UI
   tokens), and the reused "Select language" aria-label all come from locked/existing sources.

## Stale-ES follow-up (recorded in `docs/parking-lot.md`)

- New EN-only CHROME keys awaiting the Wave 6 ES pass: `chrome_wordmark_sub`, `chrome_nav_cta`.
- Full Brief 01 BODY namespace is EN-only; `designops.es.json` is an empty stub pending Wave 6.
