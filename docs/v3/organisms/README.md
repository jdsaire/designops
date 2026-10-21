# Organisms

Reference implementations, each a single self-contained file with its capability spec.

- `motion-system.html` / `.spec.md` — six native motion capabilities, compositor-only, reduced-motion honoured.
- `decoration-system.html` / `.spec.md`: the site's decoration patterns (SIGNATURE, RUN, GROW, RELATE…), their floor, budget, tokens and exceptions. The specimen loads the shipped `shared/decoration.css` and `core/decoration.js` rather than a copy.
- `gantt-organism.html` / `.spec.md` — data-driven roadmap chart, effort-scaled, no calendar dates.

**Instantiation contract:** a page re-targets the roadmap organism by editing its `DATA` object alone — markup, CSS and logic never change. The files here are the canonical reference; pages splice their own copy inline to stay self-contained, matching the established brief-page grammar.

Shared standards that live in the site's own stylesheets rather than here (PR #43): the editorial head (`assets/css/shared/editorial.css`), the display opening (`shared/display.css`) and the dashboard (`shared/dashboard.css`).

Consumers so far: Brief 02 (`work/yape-trust-verify-brief/`) instantiates the roadmap organism in Act 05 and carries the motion system's cross-document view-transition capability.
