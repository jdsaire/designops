# Roadmap organism — capability spec (v2)

Companion to `gantt-organism.html`. A generic, data-driven programme roadmap: five archetypal epics, two zoom levels, traceable effort estimates, milestones, and progressive-disclosure filters. Vanilla HTML/CSS/SVG, one file, zero dependencies. Supersedes v1, which wrongly hardcoded one specific programme's schedule as the template.

## Data-driven model

All content lives in a single `DATA` object at the top of the script: `epics → tasks → {sp, hours}`, `milestones`, `dependencies`. The render function reads only from it. **Instantiation contract:** a brief re-targets this component by editing the data object alone — markup, CSS, and logic never change. The shipped epics (Discovery, Foundation, Core build, Integration, Hardening & launch) are archetypes with sample data, stated as such in an on-page caption; a research brief and a build brief will instantiate different epic sets.

## Estimation and traceability

**Story points drive layout.** Every value is on the Fibonacci scale, assigned by declared logic (2–3 bounded well-understood work; 5 moderate breadth or coordination; 8 broad surface or high uncertainty; 13 epic-scale complexity resisting decomposition). A bar's width is proportional to its points; its position is the cumulative points of all preceding tasks in sequence order. The axis is ticked every 10 points, 0–86. No extent exists without the number that justifies it, visible on the bar and in the summary column.

**Hours are independent planned-capacity estimates per task** — not derived from points. Their epic and programme sums (632 h total) constitute the planned-value baseline (Budget at Completion) an EVM framework would track against. Earned value and actual cost are deliberately absent: this component renders a *plan*, and showing progress would imply execution that has not occurred. Epic totals reconcile exactly: each epic's SP and hours equal the sum of its tasks (10/13/29/18/16 SP; 80/96/216/128/112 h).

## Milestones

Zero-width purple diamonds positioned at cumulative-point phase boundaries (Discovery sign-off @10, Feature complete @52, Launch-ready @86), each with a visible label and accessible name. Toggleable via the Milestones filter.

## Progressive-disclosure filters

Four independent `aria-pressed` chips: **Story points** (default on), **Hours** (default off — labels only; hours never re-drive layout), **Milestones** (on), **Dependencies** (on). Each toggles its layer live with no reflow breakage. The default reading is the decision-making view; hours appear only when capacity is the question.

## Zoom levels and keyboard map

Collapsed epic band by default; per-epic toggles (`aria-expanded`) and an expand/collapse-all control. Tab reaches every control; Enter/Space toggles; ArrowUp/Down traverse epic toggles; Home/End jump to first/last. Focus is always visible; the expanded epic carries a purple label edge.

## Reduced motion

Task-row reveal fades opacity only, gated behind `no-preference`; the chevron rotates via transform. Under `reduce`, everything is instant and static, backstopped by a global clamp.

## Scope boundary

This template encodes no real programme. The whole-website-overhaul arc (DesignOps origin → repo cleanup → multipage migration) is reserved for a future sequel — a fifth portfolio card or an evolved Brief 01 — and is not built here. Website-migration scope and frontend-app-build scope are distinct briefs with distinct epic sets; the component privileges neither.

## Deliberately excluded

Progress/status % (integrity: implies unexecuted work; also saturating). Assignee avatars (saturation, no decision value at portfolio grain). Calendar dates (standing rule; effort axis instead). Critical-path highlighting (credible but out of this patch's scope; future candidate).

## Splice targets

Each of the four briefs instantiates its own copy via the data object; future DesignOps sequel reuse intended.

## Pass/fail gate results

1. NO DATES — PASS. Axis is story points; zero calendar terms (grep-verified).
2. TRACEABLE ESTIMATES — PASS. Width/position derive from SP; axis ticked in points; epic totals equal task sums; hours reconcile (verified programmatically: 86 SP / 632 h, Fibonacci-only true).
3. GENERIC & DATA-DRIVEN — PASS. One data object; archetypal names; zero §15/LimaFly/migration content (grep-verified).
4. FILTERS — PASS. Four independent aria-pressed chips at stated defaults; live layer toggling.
5. MILESTONES — PASS. Three diamonds at cumulative positions, toggleable, accessibly named.
6. TWO ZOOM LEVELS — PASS. Per-epic + expand/collapse-all, pointer and keyboard.
7. KEYBOARD + SR — PASS. Visible focus, Enter/Space, arrow traversal, aria-expanded/aria-pressed, named bars/milestones/totals, text dependency list, dashed connectors (colour never sole signal).
8. REDUCED-MOTION — PASS. Instant under reduce; transform/opacity only.
9. SELF-CONTAINED + AA + BRAND — PASS. Zero external requests; white 21:1 / muted ≈5.9:1 text; radius-0 and shadow-none universal (grep-verified); purple confined to accents; zero dependencies.
