# Motion system — capability spec

Companion to `motion-system.html`. Six specimens, one native capability each. All motion is compositor-first, ships a static end-state, and honours `prefers-reduced-motion`.

## Capability table

**01 · Scroll choreography** — `animation-timeline: view()` (CSS, zero JS). Replaces GSAP ScrollTrigger. Static fallback: rows render in place, fully opaque (`@supports` gate; Chromium 115+ only). Reduced motion: same static render. Splice: home page section entrances; brief act transitions.

**02 · Page-to-page continuity** — `document.startViewTransition()` (same-document). Replaces an SPA framework. Cross-document form for the multipage build: `@view-transition { navigation: auto }` in CSS on both pages — this file demonstrates the same-document variant only. Static fallback: instant swap where the API is absent. Reduced motion: instant swap, transitions suppressed via `::view-transition-*` override. Splice: E3 multipage route changes; home ↔ brief navigation.

**03 · Sequenced timeline** — Web Animations API, `element.animate()` with per-element delay/easing, transform + opacity only. Replaces After Effects for interface sequencing. Static fallback: bars visible at rest; the sequence is a re-run, not a requirement. Reduced motion: duration and delay collapse to 0 in script. Splice: home hero build; brief evidence reveals.

**04 · Vector draw-on** — SVG `stroke-dasharray`/`stroke-dashoffset` with `pathLength="1"` normalisation. Replaces Illustrator line-build exports. Static fallback and reduced motion: identical — the path's resting state is fully drawn. Note: animates `stroke-dashoffset`, the spec-sanctioned exception to the transform/opacity rule (§12 row 4 names this capability explicitly). Splice: Gantt organism dependency connectors; diagram builds in briefs.

**05 · Compositing** — `clip-path` (frame), `mask-image` (type fade), `mix-blend-mode: difference` (inversion on contact). The only *animated* property is `transform` on the sweeping field; clip/mask/blend are static compositing. Replaces Photoshop. Static fallback / reduced motion: field rests at frame edge, type fully legible. Splice: home hero signature moment; section dividers.

**06 · Depth** — `transform-style: preserve-3d` + parent `perspective`; children at distinct `translateZ` offsets; tilt on hover/`focus-within`. Replaces WebGL for flat-brand depth. Static fallback / reduced motion: card holds flat, all layers readable. Splice: brief evidence cards; home work cards (restrained use).

## Contrast basis

White on black 21:1; muted text ≈ 5.9:1 (AA body); dim text ≈ 4.4:1, restricted to large display type (AA large ≥ 3:1); purple #A100FF on black ≈ 3.96:1, used as non-text accent only.

## Pass/fail gate results

1. COMPOSITOR-ONLY — PASS. All keyframes and WAAPI steps animate transform/opacity only; sole exception is S4's `stroke-dashoffset`, sanctioned by §12 row 4 and documented above.
2. REDUCED-MOTION — PASS. Base styles are static-correct; motion is layered inside `no-preference` queries; JS checks `matchMedia`; a global reduce clamp backstops everything.
3. AA CONTRAST — PASS. Ratios stated above; purple never carries body text.
4. SELF-CONTAINED — PASS. One file, inline style/script, zero external requests.
5. BRAND — PASS. `border-radius: 0` and `box-shadow: none` universal; purple confined to accent bar, S4 stroke, S5 field, S6 underline, focus rings.
6. ZERO DEPENDENCIES — PASS. No library, framework, font CDN, or build artifact.
