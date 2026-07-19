# Brief 4 — Payment-Confirmation Trust & Verification · Site Specification
**Site specification · v4.0 · Status: ELEMENTARY — prototype-grade, not copy-locked**
Source of truth for structure and behavior. Companion copy record: `Brief-4_YapeTrustVerify_Copy_v4_0.md`. Together these two files are the complete input for the HTML build; this document does not itself contain page copy — see the companion file for every string.

> **Elementary status:** built per `Execution_Roadmap_v2_0.md` principle #6 (*elementary first, assemble, then surgically refine*). Prototype-grade at assembly is acceptable and desirable. This document unblocks the HTML build; it is not itself the final copy-locked brief. Refinement happens surgically, post-assembly.

> **Provenance of content:** every claim in the companion copy traces to one of two real sources — the Gate G1 selection dossier (`docs/v2/banking-selection-dossier.md`) or the Wave 4 build record (`docs/v2/Plan-Wave4-BankingExpressBuild.md`, `docs/v2/wave-4-banking-expressbuild-completion-report.md`, and the shipped sub-app's own `README.md` / `TESTING.md`). This specification governs structure only; it does not restate that sourcing — see the companion Copy file's fact register.

---

## 0 · Page identity

One self-contained HTML file. Vanilla HTML/CSS/JS — zero frameworks, zero build tooling, zero external dependencies. Scope: **Brief 4 only** — no other case pages exist in this file; two other briefs appear exclusively as terminal continuity cards (01 DesignOps, 02 TUUA).

Arrival context: the reader lands here from the designops Work organism. **Note:** the home-page work-card for Brief 04 does not yet exist — `index.html` currently carries exactly three cards. Adding card 4 is a separate, later step. Until then this page is reachable by direct URL only. The hero H1 and short-version reveal are authored as a matched pair specifically so both can seed that future work card without further editing — see §5 Hero.

Narrator: strategy-consulting register, **first person throughout** — "I / my / myself." No anonymous subject ("a strategist," "one person," "the developer") appears anywhere on the page.

**Standing non-affiliation notice** is carried on the page surface (hero, always visible): *"An independent case study. Not affiliated with, endorsed by, or connected to Yape or BCP. Built against fabricated fixtures. No real payment, account, or ledger is involved."* This is not optional decoration — it is an integrity requirement inherited from the shipped app's own README and from this project's self-directed-work governance. This exact sentence is frozen: reproduce it character-for-character, including its one generic, non-technical use of the word "ledger" — the only place that word may appear anywhere on the page.

---

## 1 · Chassis (live-fetched from `jdsaire/designops`, verbatim)

```
--color-brand-purple:#A100FF     --color-purple-hover:#8C00D9     --color-purple-light:#C2A3FF
--color-brand-black:#000000      --color-brand-white:#FFFFFF
--color-text-muted:rgba(255,255,255,.6)     --color-text-dim:rgba(255,255,255,.45)
--color-border-faint:rgba(255,255,255,.06)  --color-border-soft:rgba(255,255,255,.10)
--font-primary:'Graphik',Arial,sans-serif   weights 300/400/500/600/700/900
--max-content-width:1440px   --gutter:clamp(1rem,3.5vw,5rem)   --nav-height:clamp(3.5rem,4vw,4rem)
--ease-standard / --ease-decelerate   --duration-ui:250ms
```
Fetch source: `raw.githubusercontent.com/jdsaire/designops/main/assets/css/base/tokens.css`. Re-confirm current at HTML-build time rather than assuming these values are still exact — the live repo is the source of truth, this table is a snapshot.
Brief-layer additions: `--peek-width`, `--slide-gap` (timeline carousel), `--act-pad`, `--panel-w` (side panel), matching the site's established pattern for these brief-scoped tokens.

Dark theme, single purple accent, Graphik with Arial fallback. Nav and footer are the live organisms; footer strings verbatim ("Built and governed **end to end.**" / "Connect on LinkedIn" / "© 2026 Juan Diego Saire." — **with a trailing period**, confirmed against the live footer).

**Route-depth note:** this page sits at `work/yape-trust-verify/`, the same depth as Brief 01's `work/designops-system/`. Nav paths are therefore `../../#work` etc., and continuity-card paths are `../designops-system/` and `../tuua-transfer/`. All relative — a leading slash would resolve against the domain root and 404 under the project path.

**Integration note:** nav wordmark is text-styled; swap for the live SVG logo set on repo merge.

---

## 2 · Responsive system

| Breakpoint | Range | Governing behavior |
|---|---|---|
| Mobile | ≤767px | Single column; timeline is swipe carousel with peek; cards stack; dashboard grid 2-col; reveals are accordions |
| Tablet | 768–1023px | 2-up card grids; timeline swipe (half-width slides); reveals remain accordions |
| Desktop | ≥1024px | Content capped at 1440px, centered; timeline becomes static 3-column layout (no swipe); reveals open in a right side-panel |

Fluid type/space via `clamp()`. Tap targets ≥44px (reveal buttons, panel close, timeline nav, dashboard tabs). `prefers-reduced-motion:reduce` disables all transitions/animation; timeline collapses to a static vertical stack; count-ups resolve instantly to final values; the scroll-progress bar keeps functioning (status indicator, not decoration) without transition smoothing.

**Hero keyword row at 4–5 items** (grown from an original 3-pill design): confirm the flex-wrap behavior comfortably accommodates five pills at mobile width without crowding or overflow — this was not a consideration when the row held exactly 3.

**Act 06 card grid at 4 cards** (grown from an original 3-card design): the existing `cardgrid--3` rule assumes exactly 3 columns at desktop. Act 06 needs its own variant — either `cardgrid--2` rendered as a 2×2 grid, or a new `cardgrid--4` — decide and implement consistently; do not force 4 cards into the 3-column rule.

---

## 3 · Ontology — by page role

| Object | Behavior |
|---|---|
| **Eyebrow** | `.section__eyebrow` — inherited live organism (purple 2.5rem×3px bar, 0.8rem semibold uppercase white text, left-aligned, all breakpoints). Hero + every act, including the reserved Act 03. |
| **Keyword pill** | Purple/black micro-tag. One row, hero only. **4–5 items** — see companion Copy for the exact provisional set and the ranked shortlist the principal is choosing from. Fixed keeps: Front-end, Banking. |
| **Listen to article** | Hero-only audio affordance. **RESERVED — not built in this pass.** Label copy ("Listen to article") is reserved in the companion Copy; render as a visibly inert/placeholder control, or omit entirely until built — do not wire a non-functional button that looks live. Assembly reference: `https://blog.google/products-and-platforms/platforms/android/world-emoji-day-noto-3d/`. |
| **Independence notice** | `.independence` — dashed-border surface block, hero only, always visible. Non-affiliation + fabricated-fixtures disclosure. **Never behind a reveal.** |
| **Verdict** | Largest-weight per-act takeaway (`.verdict`, H2). **Seven verdicts** — hero H1 + one per content-bearing act (00, 01, 02, 04, 05, 06). Act 03 is reserved and carries no verdict. Together these seven sentences are the complete story if a reader only scans headings — the screener spine. |
| **Scan line** | Supporting sentence, `.scan`, ≤3 stacked per instance, each with a `data-full` long form. Used in Act 00 (3 lines) and Act 01 (3 lines). Act 02 carries a single standalone scan (not a stacked set) beneath its verdict. |
| **Context card** | `.card` variant, no reveal, full text on surface. Act 00 only — exactly 3, informational register (state-of-the-art framing, not argument or reflection). |
| **Contrast card** | Two-face split card, Act 01 only — `What you see` vs `What it is`, plus a bridge line spanning both. |
| **Role strip** | Three stacked lines — Role / Duration / Scope. Act 01 only. |
| **Timeline stop** | `.stop` — one journey beat, only inside the Act 02 carousel. Exactly **3 stops**. This is the page's **only lateral gesture** (carousel ≤1023px / static 3-column ≥1024px). |
| **Reserved section** | A minimal placeholder pattern: eyebrow only, one line of reserved-status text, no verdict, no body content. Act 03 only, for now. Preserves the anchor and the act-numbering sequence without fabricating content ahead of the future Gantt build. |
| **Argument card** | `.card` variant, with reveal, Act 04 only — exactly **4 cards**. Surface layer (title + body) is written for a general professional reader; all technical depth — including any staged/simulated content — lives in the reveal. **Zero figures/metrics anywhere in this act's surface layer or reveals** — identity and argument language only. |
| **Fields synthesis** | A closing prose block in Act 04, immediately after the 4 argument cards — **not a table**. States the field-provenance argument (which receipt fields are forgeable, which one is bank-written) in running prose. No `role="table"` markup; this replaces any earlier tabular treatment of the same idea. |
| **Evidence bar** | `.evidence` — Act 04 terminal. Two links: the running app, the source. |
| **Provenance band** | `.band` — Act 05 only, **measured variant only** (`band--measured`, solid purple left border). There is no simulated band in Act 05 — simulated/staged content lives exclusively inside Act 04's Card 3 reveal, marked by a single explicit "SIMULATED" text marker there. **A measured band must never carry a staged claim, and Act 04's simulated reveal must never present as measured** — that segregation is the integrity rule; only its implementing mechanism differs from a two-band layout. |
| **Dashboard cell** | `.dcell` — a single measured metric, Act 05 only. Never appears before Act 05. Eight cells in the measured band. |
| **Dashboard tab** | `.dash__tab` — **two-way toggle** (Measured / The read), `role="tablist"`, distinct from the reveal system. There is no third "Derived" tab. |
| **House card** | `.card` variant, no reveal, full text on surface. Act 06 only — exactly **4 cards**, each carrying a short tag label (e.g. "The ceiling") above its title. No fixed narrative framework binds the four; each is independently categorized — see companion Copy. |
| **Conversion unit** | Terminal only: PRIMARY mailto (temporal) + SECONDARY two continuity cards (01 DesignOps, 02 TUUA). |
| **Progress fill** | Fixed top bar, page-wide status, not an act-level object. |

Governing rule: **no surface block exceeds ~60 visible words before a component boundary.** Card bodies specifically should target **≤195 characters** — this project's own measurement found that word count alone under-detects a body that reads as cramped; character density is the binding constraint.

---

## 4 · Taxonomy — sections (full EN/ES parity)

| # | Display label (EN) | ES key (staged) | Eyebrow text |
|---|---|---|---|
| Hero | — | — | Work brief · 04 · 4 min read *(read-time pending re-measurement — see §9)* |
| 00 | The Context | El Contexto | Act 00 · The Context |
| 01 | The Problem | El Problema | Act 01 · The Problem |
| 02 | The Adaptation | La Adaptación | Act 02 · The Adaptation |
| 03 | *(reserved)* | *(reserved)* | Act 03 *(reserved — Gantt chart, not yet built)* |
| 04 | The Architecture | La Arquitectura | Act 04 · The Architecture |
| 05 | The Dashboard | El Dashboard | Act 05 · The Dashboard |
| 06 | The Reflection | La Reflexión | Act 06 · The Reflection |

Act 00 exists to put every reader on the same footing before Act 01 argues anything — it states what the app is and its current scope, since an international or non-specialist reader cannot be assumed to know this. Act 02's label names the brief's real throughline: a deliberate career adaptation into banking-sector frontend work, not a construction log — its content is the journey and decisions that precede a future, separate, step-by-step build record (Act 03). Act 06 carries no single named framework; its four cards are independently categorized around the personal experience of the build, by design.

i18n key architecture: CHROME (site-wide chrome) / BODY (brief content) split, with migration-path comments for the eventual `assets/i18n/en.json` + `assets/i18n/briefs/yape-trust-verify.en.json` split. EN ships; ES is staged, not built.

**Hero eyebrow** follows the site's two-component pattern: category label ("Work brief · 04") + read-time.

---

## 5 · Section-by-section content contract

Every string referenced below lives in `Brief-4_YapeTrustVerify_Copy_v4_0.md`. This section governs structure, component choice, and behavior only.

### HERO
- H1 and short-version reveal are authored as a matched pair, since both travel to the future home-page work card independent of page context — see companion Copy for the current text and its listed alternates.
- Lede: first person, hook-framed — must build anticipation, not resolve the brief's argument in advance.
- Keyword row: 4–5 pills — see §2 for the layout implication of this grown count.
- Listen-to-article affordance: reserved, see §3.
- No metric chips anywhere in the hero (all figures deferred to Act 05 — zero exceptions).
- "The short version" reveal: desktop-only "poster" treatment (enlarged type, solid white) inside the side panel.
- **Independence notice on surface**, below the reveal. Always visible, never behind an affordance.

### ACT 00 — The Context
Three scan lines (each with a `data-full` long form) followed by exactly 3 context cards, no reveals. Both components are structurally identical to their counterparts elsewhere on the page (`.scan`, `.card`) — no new component type is introduced for this act.

### ACT 01 — The Problem
**Two-column layout at desktop:** left column carries the contrast card, the three scan lines, the role strip, and a standalone reveal ("Why I chose this problem" — the benchmark and rejected-candidates argument); right column carries a receipt image. Reasonable gutter between columns. **The receipt image file is required before this act can be built** — it does not yet exist in this project's assets and must be sourced/attached at build time. At mobile/tablet, collapse to single column with the image following the text, per the site's general single-column stacking rule.

### ACT 02 — The Adaptation
**Exactly 3 stops.** Stop-body rules: ~20–30 words each, every body starts with "I," zero dashes of any kind inside stop bodies. A single standalone scan line sits between the verdict and the timeline (not part of a 3-line stacked set). This act contains the page's only lateral gesture (carousel ≤1023px / static 3-column ≥1024px).

### ACT 03 — *(reserved)*
Placeholder only. Eyebrow renders; no verdict, no body, no cards. Reserves the anchor and the numbering sequence for a future Gantt-chart build. Do not fabricate interim content.

### ACT 04 — The Architecture
**Exactly 4 argument cards**, each with title + plain-language body on the surface and technical depth in its reveal. Governing principle: the surface layer must be understandable by a general professional reader outside the tech world; only the reveal is for a reader who wants more.

Card 3 specifically demonstrates the site's staged-vs-real security boundary and is the **only place in the entire page** where simulated/staged claims appear — its reveal carries exactly one explicit "SIMULATED" marker and states, in one paragraph, both what is staged and what genuinely runs in the client. No `.band--simulated` or `.simlist` component exists for this content; it lives entirely inside this one reveal.

Card 4's reveal enumerates six items using numerals ("1," "2," "3" …), not spelled-out ordinals.

Terminal to the card grid: the fields-synthesis prose block (§3), then the evidence bar — two links, the running app and the source.

### ACT 05 — The Dashboard
The analytical centerpiece and the **sole location in the entire page where every figure debuts** — no numeral appears anywhere earlier except structural/descriptive labels (act numbers, a scenario count named in Act 04's card title, a date). Two-tab disclosure, `role="tablist"`:
- **Measured tab:** one `band--measured`, eight `.dcell` entries. No simulated content anywhere in this act.
- **The read tab:** insight + recommendation prose, no cells.
- Footnote (always visible, both tabs): method statement — figures counted from the repository and the recorded test run, verifiable at the linked source; a pointer to Act 04 for where staged content is described and badged. Check this footnote against Act 04's reveal content at build time to avoid restating the same fact twice.

Hand-built visuals only (CSS transform-driven bar cells) — no chart libraries. Count-up animates once per element, on first intersection and on tab activation; reduced-motion compliant.

### ACT 06 — The Reflection
**Exactly 4 house cards** (see §2 for the resulting grid change), each with a short tag label, a title, and full first-person body text on the surface — no reveal. No single named framework binds the four cards; each is independently categorized. One sequel-hint line closes the act. Then the terminal conversion unit — temporal mailto + two continuity cards (01 DesignOps, 02 TUUA).

---

## 6 · Interaction mechanics

**Reveal system.** One DOM node per reveal; desktop (≥1024px) relocates it into a fixed right side-panel (focus-managed, Esc-closable, one open page-wide); mobile/tablet opens in place as an accordion (one open per act). The hero's reveal receives the desktop-only "poster" modifier on the same mechanism. Two reveal patterns exist: a standalone reveal attached directly to a section (the hero, and Act 01's "Why I chose this problem") and a reveal attached to an individual Argument card (Act 04, one per card). Act 00's context cards, Act 06's house cards, and the reserved Act 03 carry no reveals at all. **Hard rule, unchanged: reveals never nest inside reveals.** **Hard rule, unchanged: reveals never nest inside reveals.**

**Timeline carousel.** The page's single lateral gesture, Act 02 only. Swipe/scroll-snap ≤1023px with peek; static 3-column ≥1024px. Prev/next hidden at desktop.

**Dashboard tabs.** Two-way, independent of the reveal system — `aria-selected` state, `hidden` panel toggling, count-up re-triggers on tab switch.

**Section eyebrows.** Fully inherited live organism. Left-aligned at every breakpoint. Renders even on the reserved Act 03.

**Act rail.** Not present. Anchor IDs remain for deep-linking, including on the reserved act.

**Scroll progress bar.** Fixed above nav, 3px, purple, `scaleX` driven directly by scroll position. Full width at document base. Persists under reduced motion without smoothing.

---

## 7 · Accessibility & integrity

WCAG AA maintained. All reveals, tabs, and the timeline are keyboard-operable with visible focus and correct ARIA (`aria-expanded`, `role="tablist/tab/tabpanel"`, `aria-label` landmarks). Reveal content lives in the DOM, not injected on open. Trimmed display copy retains full sentences via `data-full`. Tap targets ≥44px throughout.

**Integrity commitments specific to this brief:**
- Non-affiliation notice on the hero surface, always visible.
- Measured and staged/simulated content are never rendered in the same block. In this page's actual structure that means: Act 05's measured band never carries a staged claim, and Act 04 Card 3's reveal — the only place staged content appears — carries an explicit "SIMULATED" marker and never presents as measured.
- "I tested with users" appears nowhere. The build's protocol is automated assertions against fabricated fixtures; no part of it involves people, and the page says so.
- Two words are banned from every part of this page's copy, with exactly one named exception: the independence notice's single generic, non-technical use of "ledger" (§0). No occurrence of either banned word may appear anywhere else, in any act, reveal, or footnote. See the companion Copy's fact register for the specific terms and their approved replacements.

---

## 8 · Hard constraints

- Brief 4 only; no multi-case scaffolding.
- Single self-contained file; vanilla stack; no subagents used in generation; no repo action taken by the generating run.
- "JDigital" absent from body copy; repo link is `github.com/jdsaire/designops`.
- Banned figures/lines confirmed absent: 4.85/5, "12-project portfolio," EVM, fabricated technical credentials, superlatives, solicitation language, "I tested with users."
- Contact mailto remains `[TEMPORAL]` (`data-temporal="contact-email"`, visible pending badge).
- First-person voice, page-wide, including the reserved act's placeholder text if any is ever added.
- Zero nested reveals — structural rule.
- **Zero figures before Act 05** — all numerals appearing earlier are structural or descriptive (brief number, read-time, act numbers, a named scenario count, one date), never a build/performance metric.
- Argument-card and context-card bodies target **≤195 characters**, not merely a word-count cap (§3).
- Act 06 house-card bodies: **≤40 words each**, hard cap.
- No content sourced from any pre-pivot material describing an earlier, unrelated version of this brief. All frontend-role evidence on this page comes from the actual, shipped Wave 4 build record.

---

## 9 · Open items

1. **Home-page work-card (card 4)** — does not exist; `index.html` carries three. A later step adds it. Its heading and short-description copy should inherit directly from this page's current H1 and short-version reveal, which were authored specifically to travel there unedited.
2. **Continuity card target `../tuua-transfer/`** — Brief 02's route is not yet built (confirmed 404). The link is authored against the planned route. **If a different slug is assigned to that brief, this link must be updated.**
3. **Contact email** — still a temporal placeholder; requires a confirmed address before publish.
4. **ES injection** — keys are parity-staged, dictionaries not populated. One translation pass on the approved EN, per this project's model-routing doctrine.
5. **Receipt image** — required for Act 01's two-column layout; must be sourced and attached before that act can be built (§5).
6. **Meta-description sync** — the HTML `<meta name="description">` must be updated to match the current hero lede; it currently would carry an older line if copied without checking.
7. **Read-time claim** — "4 min read" has not been measured against this page's actual word count, which has grown substantially with the addition of Act 00 and the expanded Act 04/06 content. Verify or adjust before publish.
8. **Repo integration** — this file and its companion Copy are not yet committed. Final placement, and whether the Site file is split against shared assets the way Brief 01 was, remains a decision for the assembly step that follows the HTML build.
9. **Listen-to-article affordance** — reserved only; needs its own implementation decision (real audio pipeline vs. a simpler interim treatment) before it can render as anything other than an inert placeholder or be omitted.
10. **Act 06 grid CSS** — needs a 4-card layout variant; do not force 4 cards into the existing 3-column rule (§2).
