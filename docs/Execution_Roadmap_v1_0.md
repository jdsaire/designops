# LimaFly & Multipage — Execution Roadmap v1.0

**Purpose:** end the strategy loop. This is the last planning document. Everything below is a task, an owner, an input, and a done-check.
**Source of truth:** `LimaFly_Deploy_Strategy_v3_0.md`. It is now **FROZEN**.
**Date:** 09 Jul 2026

---

## The two rules that break the bottleneck

**Rule 1 — The strategy is frozen.** v3.0 is immutable during the build. Any new idea, doubt, or improvement goes into one file: `docs/parking-lot.md` — one line each, no elaboration. It is reviewed once, after Wave 6, never before. If a task hits a genuine blocker (something that stops work, not something that could be better), resolve it inside that task's session and log the resolution in the parking lot. **You do not open a v4.**

**Rule 2 — One task, one session, one output.** Every session starts a named task from this roadmap, uses only the inputs listed for it, produces its one output, and ends. No session mixes strategy and building again.

---

## Resolved: build direction

**Systems flow top-down. Pages flow bottom-up.**

- **Top-down (designed once, centrally, then pushed to every page):** the motion design system, the Gantt organism, the multipage chassis (routes, nav, i18n split). These are built as standalone components *before* any page consumes them, because retrofitting a system into five finished pages means touching five files five times.
- **Bottom-up (children before parent):** the brief pages and the app are finished *before* the home overhaul, because home must describe four real cards. Writing home first means rewriting it when the briefs land. Home goes last, and it goes last on purpose.

One sentence to remember: **build the vocabulary first, the chapters second, the cover last.**

---

## Resolved: other deployment details (no flags — decided)

1. **Branching.** `main` stays live and untouched. One branch per wave (`wave-3-app`, `wave-4-brief1`, …), merged only when the wave's done-check passes. No long-lived divergence.
2. **Prompts are written just-in-time,** one session before their wave starts — never in bulk. Bulk prompt-writing is the strategy loop wearing a different hat. Each prompt is drafted by **Opus 4.8 in Chat** from the named v3 sections (Fable is not needed to write prompts; the thinking is already done).
3. **Placeholders unblock the brief track.** Briefs 03 and 04 ship with pending badges before the app deploys (v3 §9 contract). The app track and brief track run in parallel; neither waits for the other except at Wave 5's evidence slots.
4. **Copy locks in Chat, splices in Code.** No copy is ever "improved" during a splice. If Code sees a copy problem, it goes to the parking lot.
5. **ES is generated once, at the end** (Wave 6), after all EN copy is approved — not per-brief. One translation pass, one review, zero drift between briefs.
6. **Career assets do not start until their trigger fires** (Wave 7). Touching the CV mid-build restarts the overthinking loop with a new subject.

---

## The roadmap

### Wave 0 — Freeze · *today, one short session*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 0.1 | Create `docs/parking-lot.md` in designops; commit the freeze | Code · **Sonnet 5** | this roadmap | one file, one commit | File exists; you stop re-reading v3 |
| 0.2 | Figma hygiene sweep (layer names, comments, version history on both pages) | **Principal** · Figma UI | — | clean file | Both pages presentable for future public links |

### Wave 1 — Raw materials · *principal, one sitting, no AI*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 1.1 | Export all Hi-Fi frames @2× PNG, Lo-Fi @1× PNG | **Principal** · Figma UI | Figma file | `docs/prototypes/{hifi,lofi}/` | Every frame present |
| 1.2 | Export all icons as SVG | **Principal** · Figma UI | Figma file | `assets/icons/` | Icon set complete |
| 1.3 | Screenshot the Hi-Fi layers panel | **Principal** | Figma file | 1–2 PNGs | Component tree readable |

*This wave is the single highest-leverage hour in the project: it unblocks everything in Track A and costs zero MCP calls.*

### Wave 2 — Design systems · *the two Fable builds, in Chat*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 2.0 | Write `P-F2-MotionSystem.xml` | Chat · **Opus 4.8** | v3 §12 | prompt file | You approve it |
| 2.1 | **Build the motion design system** — vocabulary + one standalone demo file (scroll-driven, View Transitions, WAAPI timelines, SVG draw-on, compositing recipes) | Chat · **Fable 5** | prompt + Brief1 HTML + live main.css fetch | `motion-system.html` + short spec | Reduced-motion fallback verified; AA intact; you approve the feel |
| 2.2 | Write `P-F2-GanttOrganism.xml` | Chat · **Opus 4.8** | v3 §15 | prompt file | You approve it |
| 2.3 | **Build the Gantt organism** — standalone HTML/CSS/SVG component, two zoom levels, epics E0–E5 preloaded | Chat · **Fable 5** | prompt + v3 §15 epic table | `gantt-organism.html` | Keyboard-operable; reduced-motion static; you approve |

*These are Fable's only builds until Wave 6. Everything between is derivation.*

### Wave 3 — The app · *Opus 4.8 in Claude Code · branch `wave-3-app` · runs in parallel with Waves 4–5*

| # | Task | Inputs | Output | Done when |
|---|---|---|---|---|
| 3.0 | Write `P-CC-LimaFly-AppBuild.xml` (phased, with the human gates from v3 §18) | v3 §4, §7, §8 | prompt file | You approve it |
| 3.1 | Tokens: spend MCP calls 1–4, write `tokens.css` + `tokens.md` | Wave 1 exports + Figma URLs | token files | Every authored token carries `[AUTHORED]` |
| 3.2 | Flow map — **authored in Chat (Opus), gated by you** | exports + presentation arc | `docs/flow-map.md` | You've flipped what you can to `[WIRED]` and signed off |
| 3.3 | Scaffold: Vite + TS + Router + Vitest + Actions | 3.1 | repo skeleton | CI green on empty app |
| 3.4 | Build up: atoms → molecules → organisms → screens → flows (spine · engine · dashboard incl. baggage + security slot · interrupt layer) | flow map, tokens, exports | the app | Each level reviewed before the next |
| 3.5 | Fixtures (`provenance: 'simulated'`) + the one real API widget (Open-Meteo, typed client, error/offline/fallback states) | v3 §8 | data layer | Demo never breaks offline |
| 3.6 | i18n parity + six-point accessibility pass + tests | v3 §4.3 | conformance table | All six checked — these are your Act-04 BUILD metrics |
| 3.7 | Deploy to GitHub Pages; capture live URL | — | live app | URL loads on your phone |

### Wave 4 — Brief 01 v3 + multipage chassis · *Opus 4.8 in Claude Code · branch `wave-4-brief1`*

| # | Task | Inputs | Output | Done when |
|---|---|---|---|---|
| 4.0 | Write `P-CC-Brief1-FourEdits.xml` | v3 §10 | prompt file | You approve it |
| 4.1 | Splice E1 copy edit (web-dev brush) — copy drafted in Chat first, locked, then spliced | Brief1 HTML + locked copy | edited file | Banned-string sweep clean (Sonnet) |
| 4.2 | Splice E2: Gantt organism into end of Act 02 | `gantt-organism.html` | edited file | Still exactly one lateral gesture |
| 4.3 | Splice E3: motion layer | `motion-system.html` | edited file | Reduced-motion + AA verified |
| 4.4 | Splice E4: dependency claim → governance rule; read time; `work_card1_*` keys | v3 D8 | edited file | Grep finds only new phrasing |
| 4.5 | Write `P-CC-Multipage-Migration.xml`, then execute: routes `/work/*`, nav context switch, CHROME/BODY i18n split, View Transitions wiring | v3 §11 | multipage skeleton, Brief 01 mounted at its route | Nav works both directions; merge to `main` |

### Wave 5 — Briefs 02 · 03 · 04 · *Opus 4.8 in Chat builds; Sonnet 5 sweeps · placeholders allowed*

Per brief, same four steps (order: **03 → 04 → 02**, so the LimaFly pair is written back-to-back and the bridge between them stays coherent; TUUA is independent and closes the wave):

| Step | Task | Where / who | Done when |
|---|---|---|---|
| a | Copy lock: five acts, verdicts, Gate K (5 keywords → you pick 3) | Chat · **Opus** — inputs: v3 §5–§9, presentation JSON, TNMT/Yoki/Changi/Schiphol facts from the v3 XML | You approve EN copy |
| b | Write `P-F3-BriefN-SiteBuild.xml` from locked copy + Brief 01 grammar | Chat · **Opus** | You approve |
| c | Build the single HTML file (chassis fetch live; motion layer applied) | Chat · **Opus** | Renders at all three breakpoints |
| d | Integrity sweep: banned strings, no figure before Act 04, no nested reveals, first person, "tested with users" = zero hits | Chat · **Sonnet** | Sweep report clean |

Briefs 03/04 mount with pending badges on evidence slots until Wave 3 finishes; slot in Figma embeds + app iframe + real Act-04 metrics as they land. Then `work_card2/3/4_*` keys written from the briefs (copy flows brief → card) and merged.

### Wave 6 — Home overhaul + closure · *Fable's second act*

| # | Task | Where / who | Inputs | Done when |
|---|---|---|---|---|
| 6.0 | Write `P-F4-Home-Overhaul.xml` | Chat · **Opus** | v3 §13 + four finished briefs | You approve |
| 6.1 | **Home overhaul** — content (hero, four-card work grid, capabilities incl. engineering axis, evolution arc, track record) + form (motion vocabulary, View Transitions) | Chat · **Fable 5** | prompt + live site + all four briefs | You approve; Code splices; merge |
| 6.2 | **Cross-brief consistency pass** — voice, tokens, motion, claims across five pages | Chat · **Fable 5** | live multipage site | Findings fixed by Sonnet; site coherent |
| 6.3 | ES generation, all pages, one pass | Chat · **Sonnet 5** | approved EN keys | You review; full key parity; ship |
| 6.4 | Parking-lot review — the only time it's opened | Chat · **Opus** | `parking-lot.md` | Items become tasks, or die |

### Wave 7 — Career triggers · *no content created until fired*

| Trigger | Fires when | Then |
|---|---|---|
| **CV + LinkedIn refresh** | Wave 6 merges (multipage live, four cards real) | One session: rewrite experience entries + About against the live site, using `linkedin-*-locked.txt` as base. EN first, ES after approval |
| **Content engine** (posts, carousels, short video editorial line) | Brief 04 live with real metrics | One session: editorial strategy doc. The build itself is the content mine — every wave above yields 2–3 post subjects (the Yoki rejection, the keyless-API decision, the TNMT concessions, measured-vs-simulated). Log post ideas in the parking lot as you build; do not write them |

---

## The prompt inventory (written just-in-time, never in bulk)

| Prompt | Written by | Executed by | Before |
|---|---|---|---|
| `P-F2-MotionSystem.xml` | Opus · Chat | Fable · Chat | Wave 2 |
| `P-F2-GanttOrganism.xml` | Opus · Chat | Fable · Chat | Wave 2 |
| `P-CC-LimaFly-AppBuild.xml` | Opus · Chat | Opus · Code | Wave 3 |
| `P-CC-Brief1-FourEdits.xml` | Opus · Chat | Opus · Code | Wave 4 |
| `P-CC-Multipage-Migration.xml` | Opus · Chat | Opus · Code | Wave 4 |
| `P-F3-Brief3-LimaFlyUX-SiteBuild.xml` | Opus · Chat | Opus · Chat | Wave 5 |
| `P-F3-Brief4-LimaFlyApp-SiteBuild.xml` | Opus · Chat | Opus · Chat | Wave 5 |
| `P-F3-Brief2-TUUA-SiteBuild.xml` | Opus · Chat | Opus · Chat | Wave 5 |
| `P-F4-Home-Overhaul.xml` | Opus · Chat | Fable · Chat | Wave 6 |

Nine prompts. Four Fable sessions in the entire project (2.1, 2.3, 6.1, 6.2). Everything else is Opus and Sonnet.

---

## Dependency spine (what actually blocks what)

```
Wave 1 exports ──► Wave 3 app ──► Brief 04 evidence + Act-04 metrics
Wave 2 motion ───► Wave 4 E3 ──► Wave 5 briefs ──► Wave 6 home
Wave 2 gantt ────► Wave 4 E2 ──► Wave 5 briefs
Wave 4 chassis ──► Wave 5 routing
Everything ──────► Wave 6 consistency ──► ES ──► Wave 7 triggers
```

Waves 3 and 4–5 run in parallel. Home is last by design. Career is last by discipline.

*The strategy is done. Wave 0 takes one session. Start there.*
