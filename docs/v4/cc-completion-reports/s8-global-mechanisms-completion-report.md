# S8 — Global Mechanisms · Completion Report

**Repo:** `jdsaire/designops` · **Author and committer of every commit:** Juan Diego S.
**Plan:** `docs/v4/cc-plans/Plan-S8-GlobalMechanisms.md`
**Branch:** `deploy/v12-s8-global-mechanisms` · **Base:** `main` at `90a1afe`, confirmed at preflight
and again before the PR, with zero drift.
**Merge:** manual, no exception — `navchrome.js` is among the changed files.

## Outcome summary

The site has a light theme and a control that says which one is active. Dark is still the default
and is now the attribute-absent state, so a first load with no stored preference resolves dark at
every breakpoint without configuration. The choice persists across navigation and reload, and an
inline head script applies it before first paint so there is no flash of the wrong theme.

The contact form posts to a real endpoint. It also stops lying: the submit handler had been calling
`preventDefault` and opening the success modal without sending anything, so every visitor since the
form shipped was shown a confirmation for a message that went nowhere.

The theme layer was built as a peer of the existing language mechanism rather than invented —
`localStorage` under its own key, a data attribute on `<html>`, one swap function, every lookup
guarded — and the light palette re-points the same six neutral tokens the reference deck re-points,
because that deck's `:root` and this repo's `tokens.css` `:root` are the same block.

## Ordered commit list

| | Commit | What |
|---|---|---|
| 1 | `22764c4` | `feat(theme)` — token layer, elevation ladder, `--ink`/`--ground` channels, light block |
| 2 | `d1ee5d3` | `feat(theme)` — `theme.js`, the no-flash head script, the control, entry wiring |
| 3 | `70fef47` | `feat(theme)` — the theme layer carried into the four brief chassis |
| 4 | `918b51c` | `fix(theme)` — both themes brought to AA contrast |
| 5 | `5b4e575` | `fix(contact)` — Web3Forms endpoint, and a real submission |
| 6 | `9370384` | `fix(theme)` — the four light-mode defects found at the principal's inspection |
| 7 | `106e85e` | `feat(nav)` — state-showing switches; Contact demoted from CTA to primary link |
| 8 | *this commit* | `docs(handoff)` — plan and completion report |

27 files, +696 / −344. Tree clean after each commit. No `fix(links):` commit exists because the
link sweep found nothing to fix; nothing was invented to fill the slot.

## Verification, with figures

| Check | Result |
|---|---|
| Theme conditions, all 8 pages | dark default with no stored preference; light on toggle; persists through reload — **8/8 pass** |
| Control reachability | navbar **and** mobile overlay on all 8 pages; `tabIndex` 0; `aria-pressed` tracks state |
| Internal links | **214 targets checked, 1 unresolved** |
| The one unresolved link | `work/front-end-evolution/` from Home's fourth card — pre-existing, lands with S10, deliberately untouched |
| Light-theme AA failures | **0** |
| Dark-theme AA failures | **66 → 17**; regressions introduced by this run: **0** |
| Runtime console errors | **identical to pristine `origin/main` on all 8 pages**, diffed page by page |
| D3 carve-out | `paths.js`, `i18n.js`, `en.json`, `es.json` **byte-identical**; `navchrome.js` **modified** |
| AI attribution | **zero** in added lines, commit messages, trailers, PR title and body |
| Commit identity | `Juan Diego S. <88201583+jdsaire@users.noreply.github.com>` on all 8 |

Verification was a real browser on every page, not a diff read. Pristine `origin/main` was served on
a second port and console errors were diffed route by route, so "no regression" is a measurement.
Contrast was computed against WCAG 2.1 relative luminance with the whole background stack
composited through its alphas — the first pass of that script was wrong, because it treated a
semi-transparent background as opaque, and its results were discarded rather than reported.

## Deviations from the approved plan

**Five commits became seven.** The brief chassis is a structurally separate surface — inline styles,
no `tokens.css` link — and separates cleanly for review and revert. Two further commits came from
the principal's inspection after the gate.

**A pre-existing dark-theme contrast shortfall was fixed rather than reported.** `--color-text-dim`
measured 4.41:1, 0.09 short of AA, on 49 elements across all 8 pages. G1's fourth condition asks
that *both* themes pass and it is the same token the light block re-points, so it was corrected
under the prompt's "trivially bundled with the toggle work itself" allowance. Dark failures fell
from 66 to 17. The remaining 17 are brand-purple pairings — `#A100FF` on black, black on purple —
which are a palette decision rather than a token bug and are left for G5.

**The XML governs C3, not the amendment.** `PATCH-F1` §A13 replaced C3's exit condition with "the form
is hidden, not endpointed." The principal directed that the XML governs and supplied a real
endpoint, which makes A13 moot rather than overridden: A13 hid the form *because* no endpoint
existed. The form ships live.

**The nav was restructured after the gate**, on the principal's inspection: both controls became one
segmented switch with the active option filled brand purple, and Contact left the utility group to
join Work and About as a primary link. This is what put `navchrome.js` in the diff — it had bound
the language options only when a dropdown trigger existed, and the new switch has options but no
trigger, so the control would have been inert. The binding is now independent of the disclosure.

## Open items and findings

**C3 delivery is wired but unconfirmed from this environment.** The client side is verified —
endpoint, `FormData`, access key, honeypot, success modal only on a genuine 200, form reset, no post
at all on an invalid form, native-submit fallback on failure. Web3Forms' edge blocks automated
clients, returning `403` to both `curl` and headless Chrome on every origin including
`jdsaire.github.io`, so an actual delivery could not be proven here. **One manual submit from a real
browser closes this.**

**Web3Forms dashboard settings are unconfigured** — redirect URL, notification address, spam rules —
and are deferred to a future Cowork pass. Not blocking.

**Airport brief, live defect, pre-existing and not fixed here.** `work/airport/index.html` references
`#tlTrack`, `#tlPrev` and `#tlNext`, none of which exist in the markup. The throw kills the rest of
that inline script block: the dashboard tabs, the count-up, and the entrance-reveal observer for 43
`.io` blocks. A CSS `animation-timeline: view()` layer masks it where supported, but that layer is
`@supports`-gated and the code comment claiming "fallback intact" is wrong. Confirmed identical on
`origin/main`. Recommended for the parking lot.

**Two brief ES dictionaries 404** — `accreditapass.es.json` and `airport.es.json`. Pre-existing,
S9's to close under G2.

**`i18n.js` carries an unguarded `langPanel.querySelectorAll`** at its `init()`. It does not throw
today because `#langPanel` still ships on all 8 pages, but it is a latent PR-5-class failure if that
id is ever removed. Left untouched to keep carve-out exposure minimal; reported rather than fixed.

**The success modal's logo is invisible in dark.** `--color-modal-bg` resolves to
`--color-brand-white`, so the modal is white in dark mode and `jdigital-logo-mini2.svg` is a white
mark. Pre-existing, inverts correctly in light, out of scope here.
