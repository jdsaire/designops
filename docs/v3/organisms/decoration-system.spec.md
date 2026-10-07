# Decoration system — capability spec

Companion to `decoration-system.html`, the live specimen. It loads the site's own tokens, face and decoration layer,
so it shows the shipped code, not a copy.

**Code:** `assets/css/shared/decoration.css` and `assets/js/core/decoration.js` (an ES module, loaded on all seven
pages), with the timing tokens in `assets/css/base/tokens.css` and each brief's own `:root`. FIELD, ENTRANCE,
MARQUEE, LIVE MAP and TOKEN live with their components: `pages/home/hero.{css,js}`, `shared/ticker.css`, and Brief
03's inline canvases.

**Provenance (PR #35):**
- v1.0 was the decoration diagnosis at G2 round 2. Its floor (PR35-Q29), roles and verdicts were approved at G2(a);
  D20 was changed by PR35-Q36.
- v1.1 (G4a, PR35-Q37) audited every component on the seven pages and made 17 changes: counts, one clock, one
  trigger, RUN's edge layer, EMPHASISE on the edge, act 5 as one pass, RELATE through a mask, meters, S5 retired,
  X-3 made concrete, X-4 registered, on-screen loops, reduced motion keeping the layout, the state-motion register,
  the retirements and the pre-state rules. It was approved at G4a.
- It shipped at G4b.

## 1. Scope: what counts as a decoration

| Kind | Definition | Governed by |
|---|---|---|
| **Decoration** | Motion or ornament not needed to read or use the page: bars, fields, edges, fills, lines, the marquee, the entrance, the counts. | This spec. Every one needs a role (§3), fits the budget (§4) and meets the floor (§2). |
| **Content motion** | Motion that is itself the content: the hero's typing loop and caret (PR35-Q19). | The hero spec. It has a pause button, so WCAG 2.2.2 is met, and its accessible name is stable. It shares the pause button with FIELD. |
| **State motion** | Feedback for an action: hover, focus, open/close, slide, page fade, anchor scroll, nav hide. | §8. Not counted in the budget. |
| **Guards** | `.hero__inner` hidden until the fit, with a 3 s CSS fallback. | Not motion. |

## 2. The floor (PR35-Q29), and how each rule is tested

| Rule | Test |
|---|---|
| 1. Under reduced motion, a decoration rests on a static final frame, in the same layout as the animated end state. That frame also shows without JavaScript and in print. | After every pattern has played, each decorated component matches its reduced-motion frame pixel for pixel. |
| 2. Nothing flashes. | The largest change in one place is a 1 px edge, a 3 px bar or a 4 px meter. No pattern lights the same place more than once. |
| 3. Nothing hides or delays text. Patterns animate a bar, a border, a fill or a line, never the words. Exceptions: X-3, X-4. | Text sampled at 40, 160 and 320 ms after each scroll step: count the text elements in view whose effective opacity is below 0.99. |
| 4. Contrast and focus are never lowered. | No pattern uses `outline`, changes a text colour, or lowers the opacity of text. Count elements carrying an outline other than `:focus-visible`. |

Only WCAG 2.2.2 may be relaxed, each case named in §7. Floor rule 3 has two named exceptions, both approved by JD: X-3 (PR35-Q36) and X-4 (G2(e)).

## 3. Roles

| Role | Test |
|---|---|
| Message | It carries what the component says: order, duration, dependency, where the gap sat, how much of a target. |
| Interaction | It signals what can be done, or what just changed. |
| Aesthetic | Brand rhythm at a deliberate beat: the opening, a pause, a section start, the closing. |

No role means the decoration is retired.

## 4. Budget

- **One ambient decoration in view at a time.**
  - A component counts once: the ticker's two lanes are one MARQUEE.
  - The hero's typing is content that shares FIELD's pause button.
  - Measured at 320, 390, 768, 1024 and 1440: Main shows FIELD or MARQUEE, never both; Brief 03 shows the map; reduced motion shows none.
- **Ambient loops are slow and small:**
  - FIELD runs a 7 s period;
  - MARQUEE runs at 60 px/s;
  - LIVE MAP bobs 2–4 px.
- **A loop asks for frames only while on screen.** A one-shot that uses a loop stops it when it is done.
- **One-shots play once per page view**, at the trigger (§5), and finish within 1.5 s of it. Measured maximum: 1.45 s, Brief 03's act-5 relay, fade included.
- **Nothing moves behind body text while it is being read.**
- **Compositor first.**
  - Patterns animate `transform` and `opacity`.
  - RELATE's `stroke-dashoffset` (motion spec S4) is the one exception, named.
  - X-3 changes text by design.
- **A component already on screen when the script runs** keeps its final frame, with no restart and no flash. Only the eyebrow bars, armed before first paint, draw as the page opens.

## 5. Tokens and timing

| Token | Value | Used by |
|---|---|---|
| `--duration-ui` | 250 ms | state motion; the RUN edge's fade |
| `--duration-deco` | 500 ms | SIGNATURE, CLOSING BAR, GROW, RELATE, EMPHASISE, ENTRANCE |
| `--stagger-deco` | 80 ms; a sequence's staggers add up to 700 ms at most | GROW, meters, RELATE, ENTRANCE |
| `--stagger-run` | 140 ms, shortened so a pass lets go of its last item by 1.2 s | RUN |
| `--hold-run` | 360 ms (the key item holds 500 ms) | RUN |
| `--duration-count` | 1200 ms | COUNT (X-3) |
| `--duration-ambient` | 7000 ms | FIELD |
| marquee speed | 60 px/s (`ticker.js`) | MARQUEE |
| `--ease-decelerate` / `--ease-standard` (exist) | (0, 0, .2, 1) / (.4, 0, .2, 1) | every arrival / FIELD, EMPHASISE, state motion |
| trigger | top edge at 60 % of the viewport height; fully in view counts only where the page cannot scroll that far | every one-shot |

## 6. Patterns

| Pattern | Role | Motion | Final frame (= reduced motion = no JS = print) | Used on |
|---|---|---|---|---|
| **SIGNATURE** | Aesthetic: a section starts | the bar draws from the left, `scaleX` 0 → 1, 500 ms, decelerate; no blend mode, no opacity change | bar drawn | 44 eyebrow bars: Main 4, About 3, Contact 2, B01 8, B02 9, B03 9, B04 9 |
| **CLOSING BAR** | Aesthetic: the closing beat | SIGNATURE, on a bar above the closing statement ("Tested concepts. / Protected budgets.", sentence case, PR35-Q40) | bar drawn | the footer on all 7 pages |
| **RUN** | Message: order | a 1 px brand-purple edge layer lights each item in reading order, 140 ms apart, held 360 ms, fading over 250 ms; nothing moves, nothing hides | no edge | 12 components: timelines (B01, B04 ×3, and B02 from 1024 up, where all 3 stops show), ladders (B01, B04), the B03 journey, the B03 relays (act 1, act 5 as one pass, act 6) |
| **EMPHASISE** | Message: the key item | as the pass lands on it, the key item's edge swells `scale` 1 → 1.06 → 1 over 500 ms; the words stay still; the item rests in its own state | the item's own state | B03 journey step 2 ("the missing channel", 2 px border); B03 act-5 HANDOFF baton |
| **GROW** | Message: when and for how long | each Gantt fill grows from its start behind its label (`scaleX` on a fill layer), 500 ms, 80 ms apart, in schedule order; labels, lengths, dots and milestones stay | bars full | B01 (7 bars), B02 (5), B04 (5) |
| **GROW · meter** | Message: how much of the target | each meter fills to its value, 500 ms, 80 ms apart; the figures are static | meters at value | B02's 8 meters |
| **RELATE** | Message: what had to finish first | each dependency line starts as the bar it leaves finishes and reveals along its direction through a mask, 500 ms; it keeps its 5/4 dash, and its arrowhead appears as it arrives | dashed lines with heads | B02 (5 lines) |
| **FIELD** | Aesthetic: the opening | the hero gradient drifts `translate(−2.5 %, −1.5 %) scale(1.02)`, 7 s, alternate; paused by the hero's pause button | still | Main hero |
| **ENTRANCE** (X-4) | Aesthetic: the opening | 5 beats (attribution, line 1, line 2 with its button, value proposition, CTA): `opacity` and `translateY(1.125rem)`, 500 ms, 80 ms apart, once per load, after the fit | in place | Main hero |
| **MARQUEE** (X-1) | Aesthetic + Message: a deliberate pause before the work (PR35-Q28) | two lanes at 60 px/s in opposite directions; a lane holds while hovered; a logo lifts from .55 to 1 opacity on hover | static lanes | Main ticker |
| **LIVE MAP** (X-2) | Interaction: the map is live and explorable | nodes bob 2–4 px on desktop while the map is on screen; hover or tap focuses ties; the centre pulse is retired | still | B03 network (phones show the list and sheet) |
| **TOKEN** | Message: the passenger's path | on desktop, a token walks the flowchart once when the chart is first seen (about 12–15 s), lighting each step it passes, then fades; the loop then stops; hover redraws on demand | final frame | B03 flowchart |
| **COUNT** (X-3) | Message: the figure as payoff | the real figure stays in the text at opacity 0 while an aria-hidden runner counts over it for 1.2 s, aligned and set like the figure; the runner ends on the figure's own text and is removed; no layout moves | the figure | About's 4 shown figures |

**Implementation rules:**
- Pre-states come from script only, and only when motion is allowed.
- A RUN edge uses the item's free pseudo-element: `::after`, or `::before` where `::after` is taken (B03's journey connectors).
- A static item gets `position: relative`. Measured as neutral: the B01/B04 cards have no positioned descendants.
- GROW's fill layer moves the bar's background into `::before` for the duration only.
- RELATE's masks are removed at the end.
- Print overrides every pre-state.

## 7. Exceptions register

| ID | Component | Relaxed | Why the content stays reachable |
|---|---|---|---|
| X-1 | Main credential ticker | WCAG 2.2.2: a loop over 5 s with no pause control | Each lane is one image labelled for screen readers ("Academic and institutional credentials", "Industry and applied execution credentials"), so no reading depends on the motion. A lane holds while hovered. Reduced motion shows static lanes. |
| X-2 | B03 network bob | WCAG 2.2.2 | It moves 2–4 px, on desktop only, and only while on screen. Reduced motion is still. Every role is in the 17-item list beside the map: visible on phones, read by screen readers on desktop. Ties are reachable by hover, tap and the list. |
| X-3 | About track record, 4 figures | floor rule 3: the true figure shows up to 1.2 s late | The figure is in the markup (no JS) and stays in the accessibility tree throughout (the runner is aria-hidden). Reduced motion shows it at once. The briefs' 18 figures are static. |
| X-4 | Main hero entrance | floor rule 3: the hero text arrives up to 820 ms after the fit | Text is in the DOM and the accessibility tree from the start (opacity only). It plays once per load. Reduced motion and no JS show it at once. |

FIELD needs no exception, because the hero's pause button stops it (PR35-Q19).

## 8. State motion

These are interaction feedback, outside the decoration budget.

**Rules:**
- 420 ms or less.
- Transform, opacity or colour, except the disclosures named below.
- Instant under reduced motion.
- It never hides content without a control.

| Group | Where | Under reduced motion, before PR #35 | Now |
|---|---|---|---|
| Nav hide/return on scroll (350 ms), menu overlay (300 ms), menu icon, work caret | all pages | instant on Main and the briefs; **still moves on About and Contact** | instant everywhere |
| Anchor scroll (`scroll-behavior: smooth`) | all pages | auto on Main and the briefs; **still smooth on About and Contact** | auto everywhere |
| Page fade (cross-document view transitions) | all 7 pages | off | keep |
| Theme switch (background, 200 ms) | all pages | off | keep |
| Carousels: Main capabilities (420 ms), Main work dots, B03 deliverables (420 ms), B03 screens strip, About cards on phones | — | off | keep |
| Disclosures: About's 25 panels (`max-height`, 320 ms), brief reveals, brief side panel (320 ms), B03 map sheet (320 ms) | — | off | keep (`max-height` is the named layout exception for disclosures) |
| Hover and focus: work-card reveal + 3° tilt, About card reveal (400 ms), CTA icons, ticker logos, journey step border, card borders, chips, tabs, dots | — | off or flat | keep |
| Scroll-linked: progress bar (`scaleX`), About journey rail and markers | — | rail instant | keep |
| Hero pause-button slot shift (280 ms, translate) | Main | off | keep |
| Contact form fields and success modal (300 ms) | Contact | off | keep |
| B02 timeline arrows (≤ 1023): smooth `scrollBy` | B02 | the layout restacks instead | jump (`behavior: instant`); the layout stays (Δ13) |

## 9. Verdicts per component

v1.0's D01–D26 carry over, with corrections in bold. D27–D36 are new.

| # | Component | Verdict (v1.1) | Role | Note |
|---|---|---|---|---|
| D01 | Main · hero gradient | **Keep** FIELD | Aesthetic | paused by the hero's pause button |
| D02 | Main · credential ticker | **Keep** MARQUEE + hover hold | Aesthetic, Message | X-1; **60 px/s** |
| D03 | B03 · network bob | **Keep** LIVE MAP | Interaction | X-2; **frames only while on screen** |
| D04 | B03 · network centre pulse | Retire | — | a second loop in one component |
| D05 | B03 · network ring entrance (round-1 idea) | Retire | — | would delay canvas labels |
| D06 | Main · hero badge pulse | Retired at G3 | — | with the badge |
| D07 | Main · hero caret | Content | — | part of the typing (D28) |
| D08 | All · eyebrow bars | **Extend** SIGNATURE to **44** | Aesthetic | replaces S5 (D30) |
| D09 | All · footer | **Generate** CLOSING BAR (7) | Aesthetic | Contact included |
| D10 | Briefs · `.io` fade/rise (90 blocks) | Retire | — | floor 3 |
| D11 | Briefs · view() rise (S1) | Retire | — | floor 3 |
| D12 | Main/About · section-header rise (4 headers) | Retire | — | floor 3 |
| D13 | Timelines (B01, B02 from 1024, B04 ×3) | RUN | Message | order |
| D14 | Ladders (B01, B04) | RUN | Message | from achieved to next |
| D15 | B03 · journey (**4 steps**) | RUN + EMPHASISE step 2 | Message | **edge swell, not the item** |
| D16 | B03 · relays (act 1, 5, 6) | RUN; **act 5 as one pass** + EMPHASISE **the baton** | Message | Δ6 |
| D17 | Gantts (B01, B02, B04) | GROW | Message | fills behind labels |
| D18 | B02 · dependency overlay | RELATE **through a mask** | Message | Δ7 |
| D19 | B03 · flowchart token | Keep TOKEN | Message | **the loop stops after the walk** |
| D20 | Count-ups | About: Keep (X-3), **4 shown**; briefs: static figures | Message | Δ10; B02's markup "0" fixed |
| D21 | Main · work-card reveal + lift | Keep (state) | Interaction | reachable by pointer, focus and tap |
| D22 | About card reveal; ticker logo hover; CTA icons; journey step hover | Keep (state) | Interaction | §8 |
| D23 | B03 · S6 rule on `#act3 .card` | Retire | — | matches nothing |
| D24 | Nav, progress, carousels, rail, disclosures, tabs | Keep (state) | Interaction | **§8 register** |
| D25 | Main value proposition, bridge headings · purple highlight | Keep, still | Message | 12.69:1 |
| D26 | Main/About · bridge portraits | Keep, still | — | — |
| D27 | Main · hero entrance (G2(e) B) | **Keep, register X-4** | Aesthetic | Δ11 |
| D28 | Main · hero typing loop + caret | **Content** (outside the budget) | — | PR35-Q19; shares the pause button with FIELD |
| D29 | B02 · dashboard meters (8) | **Extend** GROW · meter | Message | Δ8 |
| D30 | Briefs · S5 hero bar (blend difference) | **Retire** into SIGNATURE | — | green on the light theme (Δ9) |
| D31 | B02/B04 · timeline restack under reduced motion | **Retire** the restack; B02's arrows jump | — | Δ13 |
| D32 | B03 · canvas loops off screen | **Fix**: frames only while on screen | — | Δ12 |
| D33 | `core/progress.js` reveal guard | **Retire** with D10–D12 | — | Δ15 |
| D34 | Page fade (view transitions, 7 pages) | **Keep** (state) | Interaction | §8 |
| D35 | About/Contact · smooth scroll and nav slide under reduced motion | **Fix** | — | Δ14 |
| D36 | Dead decoration CSS (B04 meter rules, B03 S6) | **Remove** | — | Δ15 |

## 10. Measured at G4b

Branch `deploy/v22-main-closing`, Chrome channel unless stated; WebKit where named.

- **Text hidden or fading while components enter** (text in view, sampled at 40, 160 and 320 ms after each half-screen
  scroll step):
  - 0 of 6,575 samples at 1440, against 111 of 6,188 before this spec;
  - 6 of 6,377 at 390, against 204 of 6,059 before. All 6 are Brief 02's disabled "previous" arrow, a control state
    at 30 % opacity.
- **Final frame = reduced motion:** 74 of 74 decorated components identical pixel for pixel, at 1440 and at 390, on all
  seven pages. Before, Brief 02's and Brief 04's timelines changed size.
- **Layout shift** from decorations: 0.0000 on every page, at 1440 and 390.
- **Outlines** drawn by anything but focus: 0.
- **Longest one-shot:** 1.45 s (Brief 03's act-5 relay, nine items, fade included). Brief 02's roadmap with its lines
  takes 1.23 s; SIGNATURE takes 0.50 s.
- **Brief 03 frames requested per second:** 120 everywhere before.
  - page top: 0;
  - map on screen: 61 (desktop bob);
  - after the passenger's walk: 0;
  - phones: 0.
  - Hover, chips, the card and the sheet still work.
- **Light theme:** the briefs' hero bar renders purple (it rendered rgb(94, 255, 0) under S5).
- **End state after a full scroll:** 0 pre-states, 0 lit edges, 0 masks; Brief 02's lines dashed 5/4; figures final.
  WebKit agrees.

## 11. Where it lives, and how to add a pattern

- **A page opts in** by linking `shared/decoration.css`, calling `init()` from `core/decoration.js` (Main, About and
  Contact through their entry modules, the briefs through their inline module bootstrap), and arming the bars in its
  head script. That script adds `deco-armed` when motion is allowed. Contact's CSP lists that script's hash.
- **Every pattern is an arm/play pair.** `arm(target)` sets the pre-state, only when motion is allowed, without a
  transition, and returns `play()`. The page plays it from `when(component)`; the specimen plays it from a button.
  Exports: `sig`, `run`, `grow`, `meter`, `count`, `motion`.
- **A new pattern** names its role (§3), fits the budget (§4), takes its timing from the tokens (§5), and draws a bar,
  an edge, a fill or a line, never the words. Its final frame is the markup's own state. It needs a row in §6 and in
  §9, and an exception in §7 if it relaxes anything.
- **Checks before a pattern ships:**
  - the hidden-text sample (§2 rule 3);
  - the reduced-motion pixel comparison (§2 rule 1);
  - layout shift;
  - outlines;
  - WebKit as well as Chrome. A mask on an inline box, for example, paints as a filled square in WebKit.

## 12. Noted, not built

- About's journey rail animates `height` and could animate `scaleY`. It is state motion, unchanged.
- The work cards transition `box-shadow`, which never changes, because the universal reset zeroes it.
- The briefs' favicon 404 (backlog).
