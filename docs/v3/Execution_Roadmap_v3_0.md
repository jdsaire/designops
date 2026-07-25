# Portfolio Programme — Execution Roadmap v3.0

**Supersedes:** `Execution_Roadmap_v2_0.md`
**Nature:** Planning only. No code, no repo action, no MCP calls.
**Principal:** Juan Diego Saire — sole author across strategy, design, build, operation
**Date:** 18 Jul 2026
**The re-scope, in one sentence:** with Waves 1 and 4 executed and Gate G1 closed, v3.0 re-plans the unexecuted remainder at a wave boundary — replacing the wait-for-full-trios assembly with a surgical, placeholder-driven build of the whole multipage site, run as a streamlined critical path of gated Claude Code PRs, so the site reaches Wave 6 with everything the programme already has.

---

## 0. The governing law

**Every brief displayed exists to argue the principal's hireability for a specific upcoming application.** Briefs are chosen strategically — not a complete works, but a consistent evolution line of relevant picks that reinforce an established positioning. The briefs are complementary (all are tech builds the principal developed) yet mutually exclusive (each covers a different industry, level, framework, and scope). No brief earns its slot on nostalgia; each must pull its weight as current hiring evidence.

This law is unbreakable. It decided the v2.0 pivot, it survived Gate G1 intact, and it decides every future add, cut, or sequel. Nothing in this re-scope touches it.

---

## 1. What changed from v2.0

v3.0 preserves v2.0's wave numbering in full. Nothing is renumbered; waves are re-statused and, where unexecuted, re-scoped.

| Wave | v2.0 scope | v3.0 disposition |
|---|---|---|
| **0** | Pivot commit | **Done** |
| **1** | Banking research & selection | **Done** — Gate G1 closed; dossier committed; case: payment-confirmation trust & verification ("Yape falso"); slug confirmed `yape-trust-verify` |
| **2** | Brief 03 elementary trio | **Re-scoped** — copy file only, deferred; no HTML/spec until copy approved |
| **3** | Brief 02 elementary trio | **Re-scoped** — copy file only, principal-assisted, deferred; same gate |
| **4** | Banking express build | **Done** — app live at `work/yape-trust-verify/`, PR #8 merged, 45/45 tests, CI in place. Task 4.4 (elementary trio) folds into Wave 5 |
| **5** | Assembly after all trios exist | **Re-scoped** — the heart of v3.0: surgical assembly now, via placeholder pages, a 4-card grid, a working Tag Filter System, and a per-page repo IA — executed as a gated sequence of Claude Code PRs |
| **6** | Fable enhancement pass | **Carried** — now grooms a real multipage site including its placeholder pages |
| **7** | Content wave | **Carried** — EN-first start permitted; Sonnet ES approximation for display parity |

The change of substance: v2.0 gated assembly on complete elementary trios for Briefs 02/03/04. Execution proved the opposite order stronger — the deployed Brief 04 app and the proven Brief 01 grammar are enough to assemble a whole, navigable, best-draft site **now**, with real copy backfilling later. A functional site with badged placeholders beats a complete site that does not exist.

---

## 2. The portfolio system now

Four cards. Ordered by what the reader must learn, not by date.

| | Card | The job it argues | Target role it serves | Era | State |
|---|---|---|---|---|---|
| **01** | DesignOps System | *I build and govern systems* | DesignOps (BCP / BBVA) | 2025–26 | **Done** — content-locked, live |
| **02** | TUUA Transfer | *I ship for real stakeholders, with C-level exposure* | Design Research (BCP) · cross-functional evidence | 2023–24 | Planned — copy deferred to Wave 3; placeholder page ships in Wave 5 |
| **03** | LimaFly UX | *I research and design from zero* | Design Research / Innovation (BCP · Hermes) | 2024 | Planned — copy deferred to Wave 2; placeholder page ships in Wave 5 |
| **04** | Yape Trust & Verify | *I bring it to life — in the industry I'm applying to* | Frontend (BCP) · Innovation (Hermes) | 2026 | **App done, live** — case-study page lands in Wave 5 |

The 2024→2026 evolution arc now reads *research from zero (03) → shipped software in the target industry (04)* with the shipped software actually live. Wave 5's job is to make the site say so.

---

## 3. Principles

Carried from v2.0 where still true; revised or added where execution demanded it.

1. **Plan and execute never mix — and strategy is re-planned only at wave boundaries.** No session performing a wave reopens strategy; new ideas go to `docs/parking-lot.md`, one line each. But when executed waves return learnings, the programme may re-plan at the seam between waves — which is exactly what this document is. Mid-wave churn remains forbidden.
2. **One task, one session, one output.** Unchanged.
3. **Sole author.** `jdsaire` is the only author/committer. No AI, agent, or personal-name attribution in any commit, file, or copy anywhere.
4. **Zero-build, relative paths.** Vanilla HTML/CSS/JS on GitHub Pages at `/designops/`; every asset path relative, never leading-slash absolute. These invariants survive the repo IA migration untouched.
5. **EN before ES.** ES is never hand-written. Refined: a best-approximation ES pass by Sonnet 5, writing as an expert bilingual copywriter, is permitted early — enough for SwapLang to display correctly — with the principal's inspection locking the ultimate ES. Intermediate EN-only merges remain acceptable; the final ship is never EN-only.
6. **Assemble functional first; backfill; refine.** Supersedes v2.0's elementary-first rule: the site becomes whole and navigable now — real Brief 04 page, badged placeholder pages for 02/03, working grid, CTAs, and tag filter — and real copy replaces scaffold as Waves 2/3 land.
7. **Placeholder discipline.** Placeholder pages and scaffold Acts are always visibly badged in-progress (the existing build-in-progress treatment). Outdated scaffold copy never reads as real content for the brief hosting it.
8. **Simulated vs measured, always segregated.** Simulated metrics badged SIMULATED, structurally separate from measured build metrics. "I tested with users" never appears.
9. **PR-per-intervention, skill-driven.** Every repo-modifying intervention lands as a reviewed PR in `jdsaire/designops` — opened, manually checked, merged; never direct-to-main. Each deployment is authored via `/prompt-master` + `/cc-deploy-prompts`, launched via `/pcc-dispatch-trigger`, and absorbed via `/post-deploy-sync`.
10. **The critical path is sacred.** From step zero to the close of Wave 6, nothing enters the sequence that does not accelerate the assembled multipage site. Waves 2/3 run off the critical path and never block it.
11. **Per-page information architecture.** Each page's code and documentation live in that page's own folder; anyone external can find everything about Main or a given Brief in one place.
12. **Prompts are written just-in-time,** one session before their execution — never in bulk.

---

## 4. The roadmap

### Wave 0 — Pivot commit · *done*

Executed under v2.0. One commit; repo history records the pivot. Closed.

### Wave 1 — Banking research & selection · *done · Gate G1 closed*

Executed in full: research scan, hands-on benchmarking, selection dossier committed at `docs/v2/banking-selection-dossier.md`. Gate G1 closed — problem space approved (payment-confirmation trust and verification, grounded in "Yape falso"), slug confirmed `yape-trust-verify`, both alternate candidates rejected. Closed.

### Wave 2 — Brief 03 · LimaFly UX copy · *re-scoped · off the critical path*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 2.1 | Author the correct Brief 03 copy file, evolving from `docs/briefs-v0/Brief-3_LimaFly_Gate1_v1_0.md` | Chat · **Opus 4.8** | Gate1 file + Brief 01/04 copy grammar | approved Brief 03 copy | You approve it |
| 2.2 | Integrity sweep | Chat · **Sonnet 5** | 2.1 output | sweep report | Clean |

*Copy only. No HTML, no spec, until the copy is approved. 03 still closes at original scope, no sequel. The Wave 5 placeholder page does not wait for this wave.*

### Wave 3 — Brief 02 · TUUA copy · *re-scoped · off the critical path*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 3.1 | Rescue source context on the real TUUA artifacts | **Principal** | personal archives | context pack | The model can build without inventing |
| 3.2 | Author the correct Brief 02 copy file, evolving from `docs/briefs-v0/Brief-2_TUUA-Transfer_Gate1_v1_0.md` + the rescued pack — the model builds, it does not originate facts | Chat · **Opus 4.8** | 3.1 pack + Gate1 file | approved Brief 02 copy | You confirm every claim |
| 3.3 | Integrity sweep | Chat · **Sonnet 5** | 3.2 output | sweep report | Clean |

*Same gate as Wave 2: copy approval unlocks the placeholder-to-final page swap, nothing else.*

### Wave 4 — Brief 04 · express banking build · *done*

Executed: front-end-only express app live at `work/yape-trust-verify/` (React/TS, Singleton + Observer, mock REST ledger, simulated-security panel badged SIMULATED, 45/45 test assertions, scoped CI). PR #8 merged; completion report at `docs/v2/wave-4-banking-expressbuild-completion-report.md`. Task 4.4 — the case-study page — was out of that run's scope and is absorbed by Wave 5 intervention PR-2. Closed.

### Wave 5 — Surgical assembly · *the critical path · Opus 4.8 in Claude Code, PR-gated*

The whole multipage site is assembled now from what exists: the Brief 01 grammar, the live Brief 04 app, its v4 copy and spec, the Gate1 files as tag input, and the motion/Gantt organisms. Four PRs, strictly ordered, each pausing for manual check and merge before the next begins.

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 5.0 | **Step zero — governance commit:** create `docs/v3/` and commit the governing trio: this file, `P-F-Roadmap-v3-Authoring.xml`, `execution-v3-annotations-enhanced.txt` | Code · **Opus 4.8** | the three files | one clean commit | Repo history records v3.0 as governing; you stop re-reading v2.0 |
| 5.1 | Author the Wave 5 deployment prompt set — batching decision taken here (see the deployment plan below) | Chat · **Opus 4.8** · `/prompt-master` `/cc-deploy-prompts` `/pcc-dispatch-trigger` | this wave's spec + verified repo state | approved prompt(s) + launch trigger(s) | You approve them |
| 5.2 | **PR-1 · Repo IA migration:** flat single-page layout → per-page multi-site IA (each page's code + docs in its own folder, GitHub best practice). Zero-build and relative paths survive; the live Pages deploy must not break | Code · **Opus 4.8** | current tree | merged PR-1 | Site renders identically pre/post-merge; every path relative |
| 5.3 | **PR-2 · Brief 04 page, definitive:** assemble from `Brief4-YapeTrustVerify_Site_v2_0.html`, upgrade against the v4 spec + v4 copy; land `Brief-4_YapeTrustVerify_Copy_v4_0.md` in-repo (supersedes stale v3); splice this page's Gantt + Motion organisms exactly as into Brief 01, committing both organisms as repo files at last. **Hard stop:** the Act 01 Yape receipt image is principal-supplied — if not attached at run time, stop and report; never fabricate or substitute | Code · **Opus 4.8** | v2 HTML + v4 spec/copy + organisms + receipt image | merged PR-2 | Page renders at all breakpoints; live app evidence wired; stale v3 copy superseded |
| 5.4 | **PR-3 · Placeholder pages, Briefs 02/03:** Brief 04 page as temporary template; author real hero copy now (eyebrow, h2, lede, tags, "the short version") filled from each brief's Work Card EN/ES keys; remaining Acts carry outdated Brief 04 body copy as visibly badged scaffold; include Act 0, Gantt, Motion per page | Code · **Opus 4.8** | merged PR-2 page + Gate1 files | merged PR-3 | Cards 2/3 routes resolve to badged, rendering pages — no 404, no scaffold posing as real content |
| 5.5 | **PR-4 · Main upgrade:** Work Card 4 in a new 4×4 grid (reference: the 4×4 Work organism in `jdsaire/jdigital` — structure only, no copy/brand import), keys `work_card4_label/heading/body` from Copy v4 in Brief 01 style; CTA standardized "Access Brief" / "Acceder al Brief" on all four cards, reproducing Card 1's CTA properties; **Tag Filter System** live — INDUSTRY / FIELD / ROLE, 3–4 tags per card, multi-filter intersection shortlisting, shared and exclusive tags, accessible at all breakpoints, tag values held in i18n keys / data attributes, never hardcoded | Code · **Opus 4.8** | merged PR-1..3 + Gate1 tag input | merged PR-4 | Four cards, four working routes, filter shortlists correctly with multiple filters active |
| 5.6 | Close: full-site sweep (banned strings, relative paths, breakpoints, key parity) + one ES-approximation pass over every new EN key logged stale during PR-1..4, per principle 5 | Chat · **Sonnet 5** | live site + stale-key log | sweep report + ES keys | Clean sweep; SwapLang displays correctly on every page |

**Deployment plan (decided at 5.1, defaults stated here):** the four PRs are one strictly sequential chain — PR-1 must merge before any page work, PR-2 before PR-3, and PR-4 last. The default recommendation is a **single master implementation prompt** (`P-CC-Wave5-MasterAssembly`) containing all four PRs with a hard pause after each PR opens: the principal checks, merges, and resumes the deployment — as many resume cycles as needed. This is maximal streamlining with no loss of review control, since every PR still carries its manual merge gate. The fallback, if the master proves too heavy in practice, is splitting into two dispatches (PR-1 alone; PR-2..4 chained); the parking lot records why. The receipt-image stop condition binds either shape.

*Elementary content was v2.0's point; a functional whole is v3.0's. The site becomes navigable now and improvable forever after.*

### Wave 6 — Fable consistency & enhancement pass · *Fable's act; Chat only*

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 6.0 | Write `P-F-Wave6-ConsistencyPass.xml` | Chat · **Opus 4.8** | live assembled site | prompt file | You approve it |
| 6.1 | Complete consistency brush + proposed structural and copy enhancements across the assembled site — placeholder pages included, which this pass helps evolve toward final as Waves 2/3 copy lands. Named upgrade: promote Brief 01's purple scroll-progress bar to **all** pages, Home included | Chat · **Fable 5** | prompt + live site | findings + enhancement set | You approve the set |
| 6.2 | Surgical refinements spliced; per-brief copy upgraded and locked where it earns it | Code · **Opus 4.8**, sweeps by **Sonnet 5** | 6.1 set | refined site | Grep-verifiable; sweeps clean |
| 6.2.1 | Chrome consolidation onto one shared navbar surface + work-section structural corrections; inserted after 6.2, ahead of 6.3, so the ES lock translates final surfaces | Code · **Opus 5** | 6.2 merged site + principal annotations | consolidated chrome | Grep-verifiable parity across five pages |
| 6.3 | ES lock pass, all pages, on approved EN | Chat · **Sonnet 5** | approved EN keys | full ES parity | You review; site ships bilingual |
| 6.4 | Parking-lot review — the only time it opens | Chat · **Opus 4.8** | `parking-lot.md` | items become tasks, or die | List is empty or scheduled |

*Unchanged in spirit; extended in reality — it grooms four real routes plus Home, two of them badged placeholders it is explicitly allowed to improve.*

### Wave 7 — The content wave · *the real prize, reprioritized*

**Reprioritization unchanged:** this content foundation outranks per-brief artifact polish. **Refined start condition:** Wave 7 may begin on approved EN copy alone — ES keys are not a precondition, because principle 5's Sonnet approximation keeps SwapLang whole while the principal locks final ES on inspection.

| # | Task | Where / who | Inputs | Output | Done when |
|---|---|---|---|---|---|
| 7.0 | Write `P-F-ContentWave.xml` | Chat · **Opus 4.8** | Wave 6 merged site | prompt file | You approve it |
| 7.1 | Ultra-powered CV against the live site | Chat · **Fable 5** | prompt + live site | new CV, EN then ES | Every claim traceable to a live page |
| 7.2 | Ultra-powered LinkedIn from the locked EN/ES files | Chat · **Fable 5** | locked files + live site | refreshed EN + ES profiles | EN approved first; ES after |
| 7.3 | Editorial line for ongoing LinkedIn content, voice referenced to `luke-tobin-linkedin-interaction-sample.json`; post subjects mined from the parking lot | Chat · **Fable 5** | live site + sample + subjects | editorial strategy doc | You can publish weekly without a new strategy session |

*Applications open here. Everything before this wave exists so this wave lands.*

---

## 5. Model and tool routing

The doctrine holds: **Fable originates first-of-kind (Chat only — never Claude Code); Opus derives from proven exemplars and does all Code/repo/git work; Sonnet verifies and writes ES.** v3.0 adds the deployment cadence as routing law.

| Task | Model / tool | Why |
|---|---|---|
| Wave 5 step zero + PR-1..4 execution | **Opus 4.8 (Code)** | Its domain; no subagents; PR-gated, never direct-to-main |
| Wave 5/6/7 prompt authoring; Waves 2/3 copy | **Opus 4.8 (Chat)** | Derivation from proven grammar |
| Every deployment's lifecycle | `/prompt-master` + `/cc-deploy-prompts` → `/pcc-dispatch-trigger` → `/post-deploy-sync` | Author, launch, absorb — no deployment skips a stage |
| Wave 6 pass; Wave 7 CV/LinkedIn/editorial | **Fable 5 (Chat)** | First-of-kind, cross-cutting; the two Fable stretches remaining |
| Sweeps, banned-string/breakpoint/parity checks; ES approximation + final ES lock | **Sonnet 5** | Mechanical, checkable, bounded; the bilingual pass |

**Rule of thumb, unchanged:** *Fable earns its cost when the artifact has no precedent; a cheaper model derives from exemplars.*

---

## 6. Real debt vs parking lot

**Real debt (owed now):**

- The step-zero governance commit — first action of the critical path.
- The pending **Yape receipt image** — principal-owned; hard stop for PR-2's Act 01.
- `Brief-4_YapeTrustVerify_Copy_v4_0.md` landing in-repo — resolved inside PR-2; the in-repo v3 copy is stale until then.
- Motion + Gantt organisms still uncommitted as repo files — resolved inside PR-2's splice.
- Briefs 02/03 real copy (Waves 2/3) — owed for the placeholder→final swap, off the critical path.
- Final tag values for Briefs 02/03 — provisional from the Gate1 files until their copy locks; data-editable by design.
- The stale-ES-key log — drained by 5.6's approximation pass, locked by 6.3.

**Retired / closed:** everything v2.0 retired stays retired. Waves 0/1/4 close their debts with them.

**Parking lot:** rules unchanged — one line per idea, reviewed only at 6.4. Wave 7 post subjects accumulate there throughout.

---

## 7. Open decisions

1. **Master prompt vs split dispatch for Wave 5** — default is the single master with per-PR pause/merge/resume gates; ratified or overridden at task 5.1.
2. **Final tags for Briefs 02/03** — provisional until Waves 2/3 lock their copy; a data edit, not a rebuild.
3. **Timing of the Yape receipt image** — must exist before PR-2 runs; the deployment stops without it.

---

## 8. Dependency spine (what actually blocks what)

```
5.0 step zero ──► 5.1 prompts ──► PR-1 IA ──► PR-2 Brief04 ──► PR-3 placeholders ──► PR-4 Main+filter ──► 5.6 sweep+ES
                                                   ▲                                                            │
                            receipt image ─────────┘                                                            ▼
Wave 2 (Brief 03 copy) ─┐                                                                                  Wave 6 pass ──► 6.3 ES lock ──► Wave 7 content
Wave 3 (Brief 02 copy) ─┴──► placeholder→final swap (during/after Wave 6)
```

The critical path runs straight from step zero to Wave 6 and never waits on Waves 2/3. The receipt image is the only external input that can halt it. Content remains last by design — and first in priority the moment the site closes.

*The re-scope is committed. Step zero takes one commit; the master prompt is one authoring session away. Start with step zero.*
