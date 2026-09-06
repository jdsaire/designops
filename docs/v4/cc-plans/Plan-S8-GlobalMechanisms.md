# Plan — S8 · Global Mechanisms

**Prompt:** `P-CC-S8-GlobalMechanisms-v1_0.xml`
**Repo:** `jdsaire/designops` · **Base:** `main` at `90a1afe`, confirmed at preflight with zero drift.
**Push policy:** open PR, manual merge, no exception.

## What this run closes

| Condition | Statement |
|---|---|
| **G1** | Site-wide light/dark toggle, peer to SwapLang, dark default, choice persists, both themes pass WCAG AA |
| **C3** | `contact/`'s form `action` resolves to a real endpoint, not `YOUR_FORM_ID` |
| **G4** | Zero 404s across internal routes |

Not this run: the ES pass (S9 · G2), the README rewrite (S10 · G3), a full WCAG audit beyond an
AA contrast and keyboard pass (G5).

## Preflight findings that shaped the plan

**The inherited file governs the mechanism, and it is smaller than the prompt assumed.**
`JDigital_NetworkingTour_InnovaULima_1.html`'s `:root` is byte-identical to
`assets/css/base/tokens.css`. Light mode there is seven lines re-pointing the same six neutral
tokens; dark is the attribute-absent default. That satisfies G1's second condition structurally
rather than by configuration, and it reverses the direction the prompt floated
(`:root[data-theme="dark"]`). The prompt asked for whichever direction needs fewer overrides; the
reference file had already answered.

**The theme layer lands in five places, not one.** The four brief pages do not link `tokens.css`;
each carries its own `:root` copy inside a 326–408 line inline `<style>`. Those blocks were already
65–136 `var(--color-*)` references each, so each needed only the light block and one surface literal.

**113 neutral colour literals sat outside the token system** — 84 in `assets/css/`, 29 in the brief
inline blocks — including seven distinct surface greys the six tokens do not cover. The reference
file hit that gap once and answered it with one purpose-named token (`--notes-bg`). That precedent
is extended into a small elevation ladder rather than a parallel semantic set.

## Approach

1. **Token layer.** Keep `:root` as authored — it is already the dark palette. Append an elevation
   ladder and two theme channels (`--ink`, `--ground`, bare `r,g,b` triplets) so alpha literals with
   no token of their own flip with the theme. One `html[data-theme="light"]` block re-points the six
   neutrals, the ladder and the shadows.
2. **`assets/js/core/theme.js`**, new: a structural peer to `i18n.js` — `localStorage` under its own
   `jds-theme` key in a `try/catch`, a root-element data attribute, one swap function, every lookup
   guarded. Its own module so `i18n.js` need not change.
3. **No-flash head script** on all 8 pages, before the first stylesheet, applying the stored
   attribute ahead of first paint.
4. **The control**, in the navbar utility group and again in the mobile overlay, so the toggle is
   reachable at every navigation point.
5. **C3** — Web3Forms endpoint, access key, honeypot, and a real `fetch` submission.
6. **G4** — sweep, report, fix anything new. The known `work/front-end-evolution/` gap is S10's.

## Verification

Loading the running site in a browser on every page, not reading a diff — this is the PR-5 failure
class, where verification confirmed resource resolution but not JavaScript execution. Pristine
`origin/main` is served alongside the branch and runtime console errors are diffed page by page, so
"no regression" is measured rather than asserted. Contrast is computed against WCAG 2.1 relative
luminance with the full background stack composited through its alphas, in both themes.

## Merge

Manual, no exception. `navchrome.js` is touched by the post-inspection nav work, which is the
freeze's D3 carve-out; manual merge was already the standing decision for this stage regardless.
