# Portfolio Programme — Execution Roadmap v2.0

**Supersedes:** `Execution_Roadmap_v1_0.md`
**Nature:** Planning only. No code, no repo action, no MCP calls.
**Principal:** Juan Diego Saire — sole author across strategy, design, build, operation
**Date:** 12 Jul 2026
**The pivot, in one sentence:** the LimaFly app is cancelled and its front-end mandate relocates to a new Brief 04 — an express front-end app for the Peruvian banking industry — because the portfolio must argue the roles being applied to now, not the subject already covered twice.

---

## 0. The governing law

**Every brief displayed exists to argue the principal's hireability for a specific upcoming application.** Briefs are chosen strategically — not a complete works, but a consistent evolution line of relevant picks that reinforce an established positioning. The briefs are complementary (all are tech builds the principal developed) yet mutually exclusive (each covers a different industry, level, framework, and scope). No brief earns its slot on nostalgia; each must pull its weight as current hiring evidence.

This law is unbreakable. It decided the pivot below, and it decides every future add, cut, or sequel. A second airport-themed card would strand the portfolio in the past and skip the exact skillsets the live target roles demand — banking (BCP / BBVA: DesignOps, Design Research, Frontend) and innovation (Hermes). So the airport card dies and a banking card takes its slot.

---

## 1. What changed from v1.0

| | Item | Disposition |
|---|---|---|
| **Cancelled** | LimaFly app build (old Wave 3) | Never executed; now formally cancelled. Not resumed in any form |
| **Cancelled** | Brief 04 · LimaFly App | Archived. Will not ship as an airport-app brief |
| **Cancelled** | Old Wave 5 remainder (copy-lock 02/03/04 → Wave 6 pass) | Superseded by elementary-first assembly (§5, Waves 2–5) |
| **Retired** | Old Wave 1 Figma-export debt | No longer on the critical path; only the slice that evidences Brief 03 survives, as an optional principal task |
| **Retained** | Brief 01 · DesignOps System | Done, content-locked, live at `/work/designops-system/` — the proven page grammar |
| **Retained** | Motion system + Gantt organism | Standalone artifacts, ready to splice per brief exactly as into Brief 01 |
| **Retained** | Briefs 02 (TUUA) and 03 (LimaFly UX) | Both ship; 03 closes at original scope, no sequel |
| **New** | Banking research-and-selection wave | Claude for Research → Chrome → Cowork, gated on principal approval |
| **New** | Brief 04 · express banking front-end app | The programme's new centre of gravity; deliberately small, front-end-only |
| **New** | Content wave reprioritized | CV + LinkedIn + editorial line now outrank per-brief artifact polish |

---

## 2. The portfolio system now

Four cards. Ordered by what the reader must learn, not by date.

| | Card | The job it argues | Target role it serves | Era | State |
|---|---|---|---|---|---|
| **01** | DesignOps System | *I build and govern systems* | DesignOps (BCP / BBVA) | 2025–26 | **Done** — content-locked, live |
| **02** | TUUA Transfer | *I ship for real stakeholders, with C-level exposure* | Design Research (BCP) · cross-functional evidence | 2023–24 | Planned — principal-assisted |
| **03** | LimaFly UX | *I research and design from zero* | Design Research / Innovation (BCP · Hermes) | 2024 | Planned — closes at original scope, no sequel |
| **04** | Banking express app | *I bring it to life — in the industry I'm applying to* | Frontend (BCP) · Innovation (Hermes) | 2026 | **New** — case study pending selection (Wave 1 gate) |

Card 04 replaces LimaFly App in the grid. Its route: retire `/work/limafly-app` and rename the slot — recommendation `/work/banking-app`, or a case-study-specific slug once selected `[TBD post-selection]` — because the route should argue the industry, not the cancelled predecessor. The principal has not ratified the slug; it is logged in §8.

The 2024→2026 evolution arc survives the pivot intact — it now reads *research from zero (03) → shipped software in the target industry (04)*, which is a stronger hiring argument than two airport chapters.

---

## 3. Principles

Carried forward from v1.0 where still true; extended where the pivot demands it.

1. **Plan and execute never mix.** This roadmap sequences work; no session performing a wave reopens strategy. New ideas go to `docs/parking-lot.md`, one line each, reviewed only at the Wave 6 review slot. You do not open a v3 roadmap mid-build.
2. **One task, one session, one output.** Unchanged from v1.0.
3. **Sole author.** `jdsaire` is the only author/committer. No AI, agent, or personal-name attribution in any commit, file, or copy anywhere.
4. **Zero-build, relative paths.** The site stays vanilla HTML/CSS/JS on GitHub Pages at `/designops/`; every asset path is relative, never leading-slash absolute. Dependencies obey D8: none the principal couldn't justify.
5. **EN before ES.** ES is one Sonnet 5 translation pass at the very end, never hand-written, never per-brief. Intermediate EN-only merges are acceptable; the **final ship is never EN-only**.
6. **Elementary first, assemble, then surgically refine.** New, and it reshapes the endgame: the four briefs do **not** wait for individual copy locks before assembly. Closest-approximation elementary versions — each following the Brief 01 file trio grammar (`*_Site_v2_0.html` + `*_Spec_v2_0.md` + `*_Copy_v2_0.md`) — get assembled into the live multipage site, then refined via surgical interventions. Prototype-grade briefs at assembly are acceptable and desirable.
7. **Copy locks in Chat, splices in Code — now applied at the refinement stage,** not as an assembly precondition. No copy is "improved" during a splice; problems go to the parking lot.
8. **Simulated vs measured, always segregated.** Simulated product metrics are structurally separated from measured build metrics and badged SIMULATED. The phrase "I tested with users" never appears.
9. **Every card argues a live application** (§0). A brief that stops pulling hiring weight is archived, exactly as LimaFly App was.
10. **Prompts are written just-in-time,** one session before their wave — never in bulk.

---

## 4. The roadmap

### Wave 0 — Pivot commit · *one short session, governance only*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 0.1 | Log the pivot: archive old Brief 04 scope, cancel old Wave 3, retire Figma-export debt (except the Brief 03 slice), retire `/work/limafly-app` pending slug decision | Code · **Sonnet 5** | this roadmap | one commit updating `docs/parking-lot.md` + this file committed at `docs/` | Repo history records the pivot; you stop re-reading v1.0 |

*One commit that makes the pivot official. Nothing else happens in this wave.*

### Wave 1 — Banking research & selection · *the new centre of gravity; starts immediately, runs parallel to Waves 2–3*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 1.0 | Write the research brief `P-R-BankingScan.xml` | Chat · **Opus 4.8** | this wave's spec | prompt file | You approve it |
| 1.1 | Market scan: Peruvian banking/fintech as of Jul 2026 — practical, McKinsey-associate register, not academic. Frame: innovation / tech / client-impact / marketing, **not** a finance case study. Ground to build from: BCP and BBVA dominance; Yape and Plin as the daily-transaction wallets; strong bank tech teams, CIX BCP as a dedicated innovation centre | **Claude for Research** | prompt 1.0 | projected benchmarking study + a justified conclusion naming ONE backed-up, solvable problem and ONE winning case study to go deep on | The conclusion argues itself; you could defend it in an interview |
| 1.2 | Hands-on deepening: benchmark design systems, best practices, and relevant parameters from Peruvian banks and international players who solved the same gap | **Claude for Chrome** · principal drives | 1.1 output | annotated benchmarking captures | The winning case's design bar is concrete, not assumed |
| 1.3 | Consolidation: Cowork ingests the Research report and Chrome captures and produces the single selection dossier (benchmark table + justified recommendation) as files ready for the gate | **Claude Cowork** | 1.1 + 1.2 | `docs/banking-selection-dossier.md` (+ supporting files) | Dossier is self-contained; gate can be judged from it alone |
| **G1** | **GATE — principal approves the winning case study.** Nothing in Wave 4 starts before this | **Principal** | 1.3 dossier | signed-off case study + confirmed Brief 04 slug | You have said yes to one thing and no to the rest |

*Cowork is adopted for exactly one job: it is the multi-tool, multi-file handoff surface this wave otherwise lacks — Research and Chrome each produce artifacts in their own silo, and Cowork is the only surface that can hold both, reconcile them, and emit committed-ready files without the principal hand-carrying context between tools. If in practice it adds friction instead of speed, 1.3 falls back to Opus in Chat and the parking lot records why.*

### Wave 2 — Brief 03 · LimaFly UX, closed at original scope · *runs parallel to Wave 1*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 2.0 | Write `P-O-Brief3-Elementary.xml` | Chat · **Opus 4.8** | v3 §5–§9, presentation JSON | prompt file | You approve it |
| 2.1 | Triage the archive: pick which storytelling/design add-ons rescued from the archived Brief 04 and which **non-front-end** workflows from the cancelled Wave 3 are absorbed into 03. Nothing requiring front-end development effort qualifies | Chat · **Opus 4.8**, principal decides | archived Brief 04 scope, old Wave 3 plan | a short absorb/discard list | Every absorbed item strengthens the 2024 research-and-design story |
| 2.2 | Build the elementary Brief 03 file trio (`*_Site` + `*_Spec` + `*_Copy`) on the Brief 01 grammar — 2024 UX research + design-from-zero, plus the 2.1 absorptions | Chat · **Opus 4.8** | prompt + Brief 01 exemplar + v3 sections | elementary trio | Renders at all three breakpoints; era established in the hero's first line |
| 2.3 | Optional: export only the Figma frames that evidence Brief 03 | **Principal** · Figma UI | Figma file | evidence PNGs | Enough to fill 03's evidence slots — or skipped, with pending badges |
| 2.4 | Integrity sweep: banned strings, first person, "tested with users" = zero hits | Chat · **Sonnet 5** | 2.2 output | sweep report | Clean |

*03 gets no sequel. It closes here, at its original v3 scope, carrying only what the archive donates for free.*

### Wave 3 — Brief 02 · TUUA, principal-assisted · *runs parallel to Waves 1–2*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 3.1 | Rescue source context on the real TUUA artifacts | **Principal** · Claude for Chrome / Cowork / Drive connector | personal archives | a handed-over context pack | The model can build without inventing |
| 3.2 | Write `P-O-Brief2-TUUA-Elementary.xml` | Chat · **Opus 4.8** | 3.1 pack + v3 §5–§9 | prompt file | You approve it |
| 3.3 | Build the elementary Brief 02 file trio from the rescued context — the model builds, it does not originate facts | Chat · **Opus 4.8** | prompt + Brief 01 exemplar | elementary trio | Renders at all three breakpoints |
| 3.4 | Principal validates content; Sonnet sweeps | **Principal**, then Chat · **Sonnet 5** | 3.3 output | validated trio + sweep report | You confirm every claim; sweep clean |

*The inversion that makes this wave fast: the principal supplies truth, the model supplies structure. Never the other way around.*

### Wave 4 — Brief 04 · express banking front-end build · *gated on G1 · Opus 4.8 in Claude Code*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 4.0 | Write `P-CC-Banking-ExpressBuild.xml` (phased, human gates, no subagents) | Chat · **Opus 4.8** | G1 case study + 1.2/1.3 benchmarks | prompt file | You approve it |
| 4.1 | Concept → intermediate iterations → debugged, **fully functional deployed version**. Not a Figma-prototyping project; no prototype stage. Ships **one thing done excellently** — the single job the end user can actually complete — not many half-modules | Code · **Opus 4.8** | prompt + selection dossier | the deployed express app + live URL | The one job completes end-to-end on your phone |
| 4.2 | **Testing protocol** — required, not optional: the specific tasks and scenarios the build must pass, executed and recorded | Code · **Opus 4.8** | 4.1 | protocol doc + pass record | Every scenario passes; failures fixed, not waived |
| 4.3 | **Simulated front-end security** — required: auth patterns, TLS/certificate/asymmetric-key *patterns* demonstrated in-UI, badged SIMULATED. Ideally no real backend; if a backend concern is unavoidable, resolve it in the lightest way that still simulates the experience convincingly | Code · **Opus 4.8** | 4.1 | security layer + provenance badges | Simulated vs measured segregation intact |
| 4.4 | Build the elementary Brief 04 file trio from the selection dossier and the build record — may start immediately after G1, in parallel with 4.1 | Chat · **Opus 4.8** | G1 output | elementary trio | Renders; evidence slots carry pending badges until 4.1 lands |

*Deliberately small. It proves capability and speed-of-learning under time pressure, front-end-only, visibly exercising the target vocabulary (TypeScript/React, REST consumption, unit-test and security frameworks, Singleton/Observer, CI). Full-stack is out of scope — flagged only as a future sequel anchored to the incoming Microsoft C#/.NET/Azure programme.*

### Wave 5 — Assembly · *elementary briefs into the live site · Opus 4.8 in Claude Code*

Starts when the elementary trios for 02, 03, and 04 exist (04's from task 4.4 — the deployed app itself may still be landing). Assembly does **not** wait on copy locks.

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 5.0 | Write `P-CC-Assembly.xml` | Chat · **Opus 4.8** | trios + Brief 01's proven multipage shell | prompt file | You approve it |
| 5.1 | Mount Briefs 02/03/04 at their routes on the Brief 01 grammar: shared CHROME dict + per-page BODY dicts, `data-nav-context` nav, View Transitions | Code · **Opus 4.8** | trios | three live brief pages | Nav works both directions on every page |
| 5.2 | Splice `motion-system.*` and `gantt-organism.*` into each brief, exactly as into Brief 01; commit both organisms as repo files at last | Code · **Opus 4.8** | organism artifacts | spliced pages | Reduced-motion + AA verified per page |
| 5.3 | Repoint home: `work_card2/3/4_*` keys written from the briefs (copy flows brief → card), all four CTAs real navigation | Code · **Opus 4.8** | 5.1 | updated `index.html` | Four cards, four working routes |
| 5.4 | Slot Brief 04's live-app evidence (URL, iframe with PNG fallback, measured build metrics) as Wave 4 lands; pending badges bridge any gap | Code · **Opus 4.8** | 4.1–4.3 outputs | evidence wired | No pending badge survives final ship |
| 5.5 | Full-site sweep: banned strings, relative paths, breakpoints, key parity | Chat · **Sonnet 5** | live site | sweep report | Clean |

*Elementary content is the point: the site becomes whole now and improvable later, instead of perfect never.*

### Wave 6 — Fable consistency & enhancement pass · *Fable's act; Chat only*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 6.0 | Write `P-F-Wave6-ConsistencyPass.xml` | Chat · **Opus 4.8** | live assembled site | prompt file | You approve it |
| 6.1 | Complete consistency brush + proposed structural and copy enhancements across the assembled site. Named upgrade: promote Brief 01's purple scroll-progress bar to **all** pages, Home included — plus whatever else the upgraded site needs to back the power of the briefs | Chat · **Fable 5** | prompt + live site | findings + enhancement set | You approve the set |
| 6.2 | Surgical refinements: Fable's approved findings spliced; per-brief copy upgraded and locked where it earns it | Code · **Opus 4.8**, sweeps by **Sonnet 5** | 6.1 set | refined site | Grep-verifiable; sweeps clean |
| 6.3 | ES generation, all pages, one pass, after all EN is approved | Chat · **Sonnet 5** | approved EN keys | full ES parity | You review; site ships bilingual |
| 6.4 | Parking-lot review — the only time it opens | Chat · **Opus 4.8** | `parking-lot.md` | items become tasks, or die | List is empty or scheduled |

*Wave 6 is unchanged in spirit from v1.0 and extended in scope: it now grooms four real pages plus Home, not a hypothesis.*

### Wave 7 — The content wave · *the real prize, reprioritized*

**Explicit reprioritization:** having this content foundation ready is **more critical than polishing individual brief artifacts.** Artifacts can be curated during live applications; applications cannot start until the enhanced multipage site is closed. Per-brief polish therefore yields priority to this wave the moment Wave 6 merges.

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 7.0 | Write `P-F-ContentWave.xml` | Chat · **Opus 4.8** | Wave 6 merged site | prompt file | You approve it |
| 7.1 | Ultra-powered CV: rewrite `CV_ES_Saire_Hermes-Esp-IA_vf` against the live site | Chat · **Fable 5** | prompt + live site | new CV, EN then ES | Every claim traceable to a live page |
| 7.2 | Ultra-powered LinkedIn: rewrite from `linkedin-jdsaire-en-locked.txt` / `linkedin-jdsaire-es-locked.txt` | Chat · **Fable 5** | locked files + live site | refreshed EN + ES profiles | EN approved first; ES after |
| 7.3 | Editorial line for ongoing LinkedIn content strategy and creation under the Fable 5 lens — voice and style referenced against `luke-tobin-linkedin-interaction-sample.json`. The build itself is the content mine; post subjects were logged in the parking lot as the waves ran | Chat · **Fable 5** | live site + sample + parking-lot subjects | editorial strategy doc | You can publish weekly without a new strategy session |

*Applications open here. Everything before this wave exists so this wave lands.*

---

## 5. Wave crosswalk (v1.0 → v2.0)

| v1.0 | Fate | v2.0 |
|---|---|---|
| Wave 0 freeze · Wave 2 organisms · Wave 4 Brief 01 + chassis | Executed under v1.0 | Inherited as done |
| Wave 1 Figma exports | Retired (except Brief 03 evidence slice → task 2.3) | — |
| Wave 3 LimaFly app | **Cancelled**; Brief 04 airport scope archived | Front-end mandate relocated to Waves 1 + 4 (banking) |
| Wave 5 copy-lock-then-build 02/03/04 | Superseded | Waves 2–3 elementary + Wave 5 assembly + Wave 6.2 refinement |
| Wave 6 home overhaul + consistency + ES | Retained, extended | Wave 6 |
| Wave 7 career triggers | Retained, **promoted** above artifact polish | Wave 7 |

---

## 6. Model and tool routing

The v3 §14 doctrine carries forward, adapted: **Fable originates first-of-kind; Opus derives from proven exemplars and does all Code/repo/git work; Sonnet verifies and does the single ES pass.** Three tool surfaces join the table. **Fable 5 runs only in Claude Chat — never route it to Claude Code.**

| Task | Model / tool | Why |
|---|---|---|
| Wave 6 consistency + enhancement pass | **Fable 5 (Chat)** | Exactly the job it's for; cross-cutting, first-of-kind at this scale |
| Wave 7 CV / LinkedIn / editorial line | **Fable 5 (Chat)** | Persona-level origination against the finished site |
| Elementary briefs 02/03/04; all prompts; research consolidation fallback | **Opus 4.8 (Chat)** | The grammar exists; derivation, not origination |
| Banking express build; assembly; splices; repo, git, CI, deploy | **Opus 4.8 (Code)** | Its domain; no subagents |
| Sweeps, banned-string checks, breakpoint checks; ES pass on EN approval | **Sonnet 5** | Mechanical, checkable, bounded |
| Wave 1 market scan | **Claude for Research** | Purpose-built for the associate-register scan; first serious use |
| Wave 1 hands-on benchmarking; Wave 3 TUUA rescue | **Claude for Chrome** | Live-site inspection the other surfaces can't do; principal drives |
| Wave 1 consolidation dossier | **Claude Cowork** | The multi-tool, multi-file handoff surface (adopted per the Wave 1 note, with an Opus fallback) |

**Rule of thumb, unchanged:** *Fable earns its cost when the artifact has no precedent. If a proven exemplar exists, a cheaper model derives from it.* Two Fable stretches remain in the programme: Wave 6 and Wave 7.

---

## 7. Real debt vs parking lot

**Real debt (owed now):**

- TUUA context rescue — principal-owned, blocks Wave 3.
- The banking selection dossier and its gate — blocks Wave 4.
- Motion + Gantt organisms still uncommitted as repo files — resolved inside task 5.2.
- The stale-ES-key log in `docs/parking-lot.md` — settled by 6.3's single pass.
- Brief 03 evidence exports — optional, small, principal-owned (task 2.3); pending badges are the fallback.

**Retired (no longer owed):**

- Old Wave 1 Figma-export debt, in full, except the Brief 03 slice above. This is explicitly not a Figma-prototyping programme anymore.
- The entire archived LimaFly-app scope: build, tokens run, flow map, app-track evidence slots. Its salvage value was harvested in task 2.1; the rest is closed, not deferred.

**Parking lot:** rules unchanged from v1.0 — one line per idea, no elaboration, reviewed once at 6.4. Post subjects for Wave 7 accumulate there throughout.

---

## 8. Open decisions

Surfaced, not resolved. Three items only.

1. **The banking case study itself** — decided at Gate G1, from the Wave 1 dossier, by the principal. The roadmap deliberately does not pre-select it.
2. **Brief 04's route slug** — `/work/limafly-app` is retired; recommendation is `/work/banking-app` or a case-study-specific slug `[TBD post-selection]`. Ratified alongside G1.
3. **Which archived add-ons Brief 03 absorbs** — the principal picks from the task 2.1 list; the default is fewer, not more.

---

## 9. Dependency spine (what actually blocks what)

```
Wave 1 research ──► G1 gate ──► Wave 4 build ──► Brief 04 evidence
Wave 2 (Brief 03) ─┐
Wave 3 (Brief 02) ─┼──► Wave 5 assembly ──► Wave 6 pass ──► ES ──► Wave 7 content
G1 ──► task 4.4 ───┘
```

Waves 1, 2, and 3 run in parallel from day one. Assembly waits for elementary trios, not for copy locks and not for the finished app. Content is last by design — and first in priority the moment the site closes.

*The pivot is committed. Wave 0 takes one commit; Waves 1–3 can all start this week. Start with Wave 0.*
