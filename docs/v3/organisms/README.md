# Organisms

Reference implementations, each a single self-contained file with its capability spec.

- `motion-system.html` / `.spec.md` — six native motion capabilities, compositor-only, reduced-motion honoured.
- `gantt-organism.html` / `.spec.md` — data-driven roadmap chart, effort-scaled, no calendar dates.

**Instantiation contract:** a page re-targets the roadmap organism by editing its `DATA` object alone — markup, CSS and logic never change. The files here are the canonical reference; pages splice their own copy inline to stay self-contained, matching the established brief-page grammar.

Consumers so far: Brief 04 (`work/yape-trust-verify-brief/`) instantiates the roadmap organism in Act 03 and carries the motion system's cross-document view-transition capability.
