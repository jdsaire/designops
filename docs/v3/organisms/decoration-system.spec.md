# Decoration system — capability spec (v1.4)

Companion to `decoration-system.html`, the live specimen. It loads the site's own tokens, face and decoration layer,
so it shows the shipped code, not a copy.

**Code:** `assets/css/shared/decoration.css` and `assets/js/core/decoration.js` (an ES module, loaded on all seven
pages), with the timing tokens in `assets/css/base/tokens.css` and each brief's own `:root`. MARQUEE, LIVE MAP
and TOKEN live with their components: `shared/ticker.css` and Brief 03's inline canvases. PR #37's three live with
theirs: FILL and PULSE in `pages/home/hero.css`, CUE RING in `pages/home/navcue.css` + `pages/home/navcue.js`.

**Provenance (PR #35):**
- v1.0 was the decoration diagnosis at G2 round 2. Its floor (PR35-Q29), roles and verdicts were approved at G2(a);
  D20 was changed by PR35-Q36.
- v1.1 (G4a, PR35-Q37) audited every component on the seven pages and made 17 changes: counts, one clock, one
  trigger, RUN's edge layer, EMPHASISE on the edge, act 5 as one pass, RELATE through a mask, meters, S5 retired,
  X-3 made concrete, X-4 registered, on-screen loops, reduced motion keeping the layout, the state-motion register,
  the retirements and the pre-state rules. It was approved at G4a.
- It shipped at G4b.
- v1.2 (G5 iteration, PR35-Q48…Q51): the hero's typing loop, caret and pause button are retired, so FIELD holds
  still and the hero shows at once (ENTRANCE and X-4 retired); COUNT and X-3 are retired, so About's figures are
  static. Floor rule 3 now has no exceptions; X-1 and X-2 are the only registered exceptions, both under WCAG 2.2.2.

**v1.3 (PR #37, 11 Oct 2026):** three patterns on Main, all non-text, each with its role.
- **CUE RING** (X-5, PR37-Q2, Q10, Q14): an interaction cue on the phone menu button, first Main view per browser only.
  It is the one one-shot allowed past §4's 1.5 s (7.2 s), and it repeats in place, so it relaxes WCAG 2.2.2 and is
  covered for floor rule 2's "once" test (PR37-Q6).
- **PULSE** (X-6, PR37-Q24): the square beside the name in Main's hero returns from before PR #35 (D06 reversed;
  the Lima label stays retired). An endless 2.4 s opacity pulse: WCAG 2.2.2, floor-rule-2 cover.
- **FILL** (PR37-Q16): the purple block behind each hero verb draws once as the hero shows, 0.5 s; the words are in
  place from the first frame. Inside the budget; no exception.
- X-3 and X-4 stay struck (§7); the new exceptions take the next ids. Floor rule 3 still has no exceptions.

**v1.4 (PR #39, merged at `6f45a40`, 13 Oct 2026; PR39-Q3, Q5; SY39-Q1):** one new use of RUN, one control retired, one budget finding.
- **RUN on Brief 04's architecture cards** (D40, PR39-Q5): the four numbered cards in Act 04 light in reading order from 768,
  where the set fits the view. A container opts in with `data-deco-run` (§11). Used on: 12 → 13 components.
- **Brief 02's Act 02 arrows retired** (PR38-Q25 option A): the row scrolls natively with snap and a peek, so §8's arrow row
  is removed and D31 records the retirement. The disabled-arrow samples in §10 and §10.1 stay as records; §10.2 holds the
  new measurement.
- **Budget finding, not an exception** (SY39-Q1): Brief 02's schedule at 390 runs 1,498–1,533 ms, just over §4's 1.5 s.
  PR #40 hides that schedule below 768 and replaces it with a relay timeline, and re-measures (§4, §10.2).
- Phones of Briefs 01, 02 and 04 receive Brief 03's relay motion through PR #40's mobile schedule; RUN already runs every
  relay, so only the "Used on" count changes, reported by PR #40.

## 1. Scope: what counts as a decoration

| Kind | Definition | Governed by |
|---|---|---|
| **Decoration** | Motion or ornament not needed to read or use the page: bars, fields, edges, fills, lines, the marquee, the entrance, the counts. | This spec. Every one needs a role (§3), fits the budget (§4) and meets the floor (§2). |
| **State motion** | Feedback for an action: hover, focus, open/close, slide, page fade, anchor scroll, nav hide. | §8. Not counted in the budget. |
| **Guards** | `.hero__inner` hidden until the fit, with a 3 s CSS fallback. | Not motion. |

## 2. The floor (PR35-Q29), and how each rule is tested

| Rule | Test |
|---|---|
| 1. Under reduced motion, a decoration rests on a static final frame, in the same layout as the animated end state. That frame also shows without JavaScript and in print. | After every pattern has played, each decorated component matches its reduced-motion frame pixel for pixel. |
| 2. Nothing flashes. | The largest change in one place is a 1 px edge, a 3 px bar or a 4 px meter. No pattern lights the same place more than once. |
| 3. Nothing hides or delays text. Patterns animate a bar, a border, a fill or a line, never the words. No exceptions (PR35-Q49). | Text sampled at 40, 160 and 320 ms after each scroll step: count the text elements in view whose effective opacity is below 0.99. |
| 4. Contrast and focus are never lowered. | No pattern uses `outline`, changes a text colour, or lowers the opacity of text. Count elements carrying an outline other than `:focus-visible`. |

Only WCAG 2.2.2 may be relaxed, each case named in §7; with it, X-5 and X-6 repeat in place, so rule 2's "once" test is waived for them alone (PR37-Q6) while "nothing flashes" holds (both stay under three changes a second). Floor rule 3 has no exceptions: X-3 and X-4 were revoked by PR35-Q49.

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
  - Measured at 320, 390, 768, 1024 and 1440: Main shows PULSE in its first screen and MARQUEE four sections lower, never
    both in view; Brief 03 shows the map; reduced motion shows none.
- **Ambient loops are slow and small:**
  - MARQUEE runs at 60 px/s;
  - LIVE MAP bobs 2–4 px.
- **A loop asks for frames only while on screen.** A one-shot that uses a loop stops it when it is done.
- **One-shots play once per page view**, at the trigger (§5), and finish within 1.5 s of it. Measured maximum: 1.45 s, Brief 03's act-5 relay, fade included.
  - **Known breach (v1.4, SY39-Q1):** on PR #39's base (`6261415`), Brief 02's schedule (GROW + RELATE) measures 1,498–1,533 ms
    at 390, against 1,234 ms at 1440. It predates PR #39 and is not an exception. PR #40 hides the schedule below 768, which
    removes it on phones, and re-measures its relay timeline against 1.5 s.
  - The one exception is CUE RING (X-5): an interaction one-shot with its own ceiling, 7.2 s, played once per browser,
    not per view, and stopped by the first tap or scroll (PR37-Q2, Q14).
  - FILL plays as the hero is shown (`.hero--fit`), the same beat as the eyebrow bars armed before first paint.
- **Nothing moves behind body text while it is being read.**
- **Compositor first.**
  - Patterns animate `transform` and `opacity`.
  - RELATE's `stroke-dashoffset` (motion spec S4) is the one exception, named.
- **A component already on screen when the script runs** keeps its final frame, with no restart and no flash. Only the eyebrow bars, armed before first paint, draw as the page opens.

## 5. Tokens and timing

| Token | Value | Used by |
|---|---|---|
| `--duration-ui` | 250 ms | state motion; the RUN edge's fade |
| `--duration-deco` | 500 ms | SIGNATURE, CLOSING BAR, GROW, RELATE, EMPHASISE |
| `--stagger-deco` | 80 ms; a sequence's staggers add up to 700 ms at most | GROW, meters, RELATE |
| `--stagger-run` | 140 ms, shortened so a pass lets go of its last item by 1.2 s | RUN |
| `--hold-run` | 360 ms (the key item holds 500 ms) | RUN |
| `--duration-ambient` | 7000 ms | (FIELD retired; token kept for future ambient patterns) |
| marquee speed | 60 px/s (`ticker.js`) | MARQUEE |
| `--ease-decelerate` / `--ease-standard` (exist) | (0, 0, .2, 1) / (.4, 0, .2, 1) | every arrival / EMPHASISE, state motion |
| trigger | top edge at 60 % of the viewport height; fully in view counts only where the page cannot scroll that far | every one-shot |

## 6. Patterns

| Pattern | Role | Motion | Final frame (= reduced motion = no JS = print) | Used on |
|---|---|---|---|---|
| **SIGNATURE** | Aesthetic: a section starts | the bar draws from the left, `scaleX` 0 → 1, 500 ms, decelerate; no blend mode, no opacity change | bar drawn | 44 eyebrow bars: Main 4, About 3, Contact 2, B01 8, B02 9, B03 9, B04 9 |
| **CLOSING BAR** | Aesthetic: the closing beat | SIGNATURE, on a bar above the closing statement ("Tested concepts. / Protected budgets.", sentence case, PR35-Q40) | bar drawn | the footer on all 7 pages |
| **RUN** | Message: order | a 1 px brand-purple edge layer lights each item in reading order, 140 ms apart, held 360 ms, fading over 250 ms; nothing moves, nothing hides | no edge | 13 components: timelines (B01, B04 ×3, and B02 from 1024 up, where all 3 stops show), ladders (B01, B04), the B03 journey, the B03 relays (act 1, act 5 as one pass, act 6), the B04 architecture cards 1–4 (from 768, where the set fits the view; v1.4) |
| **EMPHASISE** | Message: the key item | as the pass lands on it, the key item's edge swells `scale` 1 → 1.06 → 1 over 500 ms; the words stay still; the item rests in its own state | the item's own state | B03 journey step 2 ("the missing channel", 2 px border); B03 act-5 HANDOFF baton |
| **GROW** | Message: when and for how long | each Gantt fill grows from its start behind its label (`scaleX` on a fill layer), 500 ms, 80 ms apart, in schedule order; labels, lengths, dots and milestones stay | bars full | B01 (7 bars), B02 (5), B04 (5) |
| **GROW · meter** | Message: how much of the target | each meter fills to its value, 500 ms, 80 ms apart; the figures are static | meters at value | B02's 8 meters |
| **RELATE** | Message: what had to finish first | each dependency line starts as the bar it leaves finishes and reveals along its direction through a mask, 500 ms; it keeps its 5/4 dash, and its arrowhead appears as it arrives | dashed lines with heads | B02 (5 lines) |
| **FIELD** (retired, PR35-Q50) | Aesthetic: the opening | the hero gradient holds still; an endless drift without the retired pause button would need a 2.2.2 exception | still | Main hero |
| **ENTRANCE** (retired, PR35-Q49) | — | the hero shows at once when it is fitted | in place | Main hero |
| **MARQUEE** (X-1) | Aesthetic + Message: a deliberate pause before the work (PR35-Q28) | two lanes at 60 px/s in opposite directions; a lane holds while hovered; a logo lifts from .55 to 1 opacity on hover | static lanes | Main ticker |
| **LIVE MAP** (X-2) | Interaction: the map is live and explorable | nodes bob 2–4 px on desktop while the map is on screen; hover or tap focuses ties; the centre pulse is retired | still | B03 network (phones show the list and sheet) |
| **TOKEN** | Message: the passenger's path | on desktop, a token walks the flowchart once when the chart is first seen (about 12–15 s), lighting each step it passes, then fades; the loop then stops; hover redraws on demand | final frame | B03 flowchart |
| **COUNT** (retired, PR35-Q49) | — | About's track-record figures are static, like the briefs' | the figure | About |
| **FILL** (PR #37) | Message: the verb that carries the claim | the brand-purple block behind each hero verb draws from the left, `scaleX` 0 → 1, 500 ms, decelerate, as the hero shows; white italic words on it from the first frame (5.30:1) | block drawn | Main hero, 2 verbs |
| **CUE RING** (X-5, PR #37) | Interaction: the menu holds theme and language | a 2 px brand-purple ring expands from the 44 px menu button and fades, 1.2 s, six times (7.2 s); first Main view per browser, phones only; stops for good on the first tap, scroll, leaving the phone range or its end | the button, still | Main, ≤ 767 px |
| **PULSE** (X-6, PR #37) | Aesthetic: the opening, a sign of life by the name | a 0.45 rem brand-purple square left of the name, opacity 1 → 0.3 → 1 every 2.4 s, endless | square at full opacity | Main hero, every width |

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
| ~~X-3~~ | About track record | revoked by PR35-Q49: the figures are static | — |
| ~~X-4~~ | Main hero entrance | revoked by PR35-Q49: the hero shows at once | — |
| X-5 | Main · CUE RING on the phone menu button | WCAG 2.2.2: 7.2 s of repetition with no pause control; floor rule 2's "once" (PR37-Q6, Q10, Q14) | Non-text; the button's name ("Open menu") and its menu are unchanged. Main only, phones only, the first Main view in a browser only (flag `jds-navcue`, set when it starts); the first tap or scroll stops it for good. Never under reduced motion. |
| X-6 | Main · PULSE beside the name | WCAG 2.2.2: an endless loop with no pause control; floor rule 2's "once" (PR37-Q24) | Decorative and `aria-hidden` (a pseudo-element, not part of the name's text); a 0.45 rem square that dims to 30 %, never flashing. Reduced motion shows it still, at full opacity. |

With the typing loop retired (PR35-Q48), FIELD holds still (PR35-Q50) and needs no exception.

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
| Hero pause-button slot shift (280 ms, translate) | Main | off | retired with the typing loop (PR35-Q48) |
| Contact form fields and success modal (300 ms) | Contact | off | keep |

## 9. Verdicts per component

v1.0's D01–D26 carry over, with corrections in bold. D27–D36 are new in v1.1, D37–D39 in v1.3, D40 in v1.4.

| # | Component | Verdict (v1.1) | Role | Note |
|---|---|---|---|---|
| D01 | Main · hero gradient | **Still** (PR35-Q50) | Aesthetic | no drift |
| D02 | Main · credential ticker | **Keep** MARQUEE + hover hold | Aesthetic, Message | X-1; **60 px/s** |
| D03 | B03 · network bob | **Keep** LIVE MAP | Interaction | X-2; **frames only while on screen** |
| D04 | B03 · network centre pulse | Retire | — | a second loop in one component |
| D05 | B03 · network ring entrance (round-1 idea) | Retire | — | would delay canvas labels |
| D06 | Main · hero badge pulse | Retired at G3 | — | with the badge |
| D07 | Main · hero caret | Retired | — | PR35-Q48 |
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
| D20 | Count-ups | **Static figures everywhere** (PR35-Q49) | Message | Δ10; B02's markup "0" fixed |
| D21 | Main · work-card reveal + lift | Keep (state) | Interaction | reachable by pointer, focus and tap |
| D22 | About card reveal; ticker logo hover; CTA icons; journey step hover | Keep (state) | Interaction | §8 |
| D23 | B03 · S6 rule on `#act3 .card` | Retire | — | matches nothing |
| D24 | Nav, progress, carousels, rail, disclosures, tabs | Keep (state) | Interaction | **§8 register** |
| D25 | Main value proposition, bridge headings · purple highlight | Keep, still | Message | 12.69:1 |
| D26 | Main/About · bridge portraits | Keep, still | — | — |
| D27 | Main · hero entrance (G2(e) B) | **Retired** (PR35-Q49) | — | the hero shows at once |
| D28 | Main · hero typing loop + caret | **Retired** (PR35-Q48) | — | line 2 rests on IMPACT / IMPACTO |
| D29 | B02 · dashboard meters (8) | **Extend** GROW · meter | Message | Δ8 |
| D30 | Briefs · S5 hero bar (blend difference) | **Retire** into SIGNATURE | — | green on the light theme (Δ9) |
| D31 | B02/B04 · timeline restack under reduced motion | **Retire** the restack; B02's arrows retired (PR #39) | — | Δ13; the row scrolls natively, with snap and a peek |
| D32 | B03 · canvas loops off screen | **Fix**: frames only while on screen | — | Δ12 |
| D33 | `core/progress.js` reveal guard | **Retire** with D10–D12 | — | Δ15 |
| D34 | Page fade (view transitions, 7 pages) | **Keep** (state) | Interaction | §8 |
| D35 | About/Contact · smooth scroll and nav slide under reduced motion | **Fix** | — | Δ14 |
| D36 | Dead decoration CSS (B04 meter rules, B03 S6) | **Remove** | — | Δ15 |
| D37 | Main · hero verb blocks (PR #37) | **New** FILL | Message | one-shot, 500 ms; words never move |
| D38 | Main · phone menu button cue (PR #37) | **New** CUE RING | Interaction | X-5; 7.2 s once per browser |
| D39 | Main · square beside the name (PR #37) | **Returned** PULSE (D06 reversed) | Aesthetic | X-6; the Lima label stays retired |
| D40 | B04 · architecture cards (numbered 1–4) (PR #39) | **New** RUN from 768 | Message | order; skipped where the set is taller than the view (phones) |

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

### 10.1 Measured at PR #37 G4 (v1.3)

Branch `deploy/v24-pr37-navbar-hero`, WebKit 27.2 and Chrome 155.
- **Text hidden or fading:** Main 0 of 338 samples at 390 and 0 of 377 at 1440; the hero's text 0 at 40, 160 and
  320 ms after it shows, both engines. Every other page as before (Brief 02's disabled arrow, 6 at 390).
- **Final frame = reduced motion:** 74 of 74 decorated components identical pixel for pixel, at 1440 and at 390.
- **Layout shift** from decorations: 0.0000 on every page, at 1440 and 390.
- **Outlines** drawn by anything but focus: 0.
- **FILL:** 500 ms; the longest one-shot on Main stays 502 ms. **CUE RING:** 7,200 ms on a first visit; still on
  a reload, after About, under reduced motion and at 768 and wider; stopped by the first tap or scroll.
  **PULSE:** 2.4 s period, opacity 1 / 0.46 / 0.30 / 0.84 / 1 at 0 / 0.6 / 1.2 / 1.8 / 2.4 s; still under reduced motion.

### 10.2 Measured at PR #39 (v1.4)

Branch `deploy/v26-pr39-closure-figures`, Chrome channel and WebKit.
- **Text hidden or fading:** Brief 02 at 390, 0 of 1,271 samples (G3): the disabled-arrow samples of §10 and §10.1 are
  gone with the arrows. Hidden text 0 on all 7 pages at 390 and 1440 at the tip; Brief 04 0 at 768 and 1440 (G4).
- **B04 architecture cards (D40):** a pass of 4 items, 420 ms from first to last; final frame = reduced motion, 0 px at
  390, 768, 1024 and 1440 in both engines. Census, 7 pages × 390/1440: only Brief 04 changed, +4 events at 768 and wider.
- **Final frame = reduced motion:** 148 of 148 component frames at 390 and 1440.
- **Layout shift** from decorations: 0.0000. **Outlines** drawn by anything but focus: 0.
- **Longest one-shot, Brief 02 at 390:** 1,533 ms on the base `6261415` (1,498–1,533 ms across runs), 1,234 ms at 1440.
  Pre-existing; recorded under §4's known breach.

## 11. Where it lives, and how to add a pattern

- **A page opts in** by linking `shared/decoration.css`, calling `init()` from `core/decoration.js` (Main, About and
  Contact through their entry modules, the briefs through their inline module bootstrap), and arming the bars in its
  head script. That script adds `deco-armed` when motion is allowed. Contact's CSP lists that script's hash.
- **Every pattern is an arm/play pair.** `arm(target)` sets the pre-state, only when motion is allowed, without a
  transition, and returns `play()`. The page plays it from `when(component)`; the specimen plays it from a button.
  Exports: `sig`, `run`, `grow`, `meter`, `motion`.
- **Opt-in RUN on a set (v1.4):** `data-deco-run="<min width>"` on a container runs RUN over its children only at that
  width or wider, and only when the whole set fits the viewport height, so a pass never lights an item off screen
  (Brief 04's architecture cards use it from 768).
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
