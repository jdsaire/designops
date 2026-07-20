# CV_JDSaire_UltraSpec_v1_0

> **Provenance:** Drafted under the Wave 7 one-time sequencing exception — content authored against the Wave 6.1-approved enhancement spec (SPEC-Wave6-ConsistencyPass-v1_0), pending the actual Wave 6.2 build. Verify against the live site before external use. Sources: `CV_ES_Saire_Hermes-Esp-IA_vf` (facts only), `linkedin-jdsaire-en/es-locked.txt` (frame), live `jdsaire/designops` (Brief 01 + Brief 04 measured claims, `docs/parking-lot.md`). Gate persona: ex-McKinsey recruiting screener. This is a **specification**, not a CV — every future CV Juan Diego builds inherits these parameters. Destined to evolve into a Claude Skill in a later run (not this one).

---

## 0. Purpose and standing

This document is the single source of truth for how any CV under the name Juan Diego Saire is constructed, in any language, for any target. It encodes what the Hermes CV got right, what it must never carry forward, and the parameters that make the next CV — and every one after it — pass a McKinsey-caliber screen in under 30 seconds.

A screener reads a one-page CV in 6–8 seconds before deciding whether to read it again. Every rule below exists to win the second read.

---

## 1. Hard invariants (never negotiated, never re-litigated)

1. **ONE PAGE. Always.** No exceptions for any role, seniority, or market. If content doesn't fit, the tailoring knobs (§6) decide what leaves — the page limit never flexes. A second page signals inability to prioritize, which is the exact skill the CV claims.
2. **Sole authorship.** No AI/agent attribution anywhere — in the document, its metadata, or its file properties.
3. **Facts / frame split.** Facts are mined from the verified record (`cv-hermes` bullets, live briefs, locked LinkedIn files). Frame is inherited from the locked DesignOps-governance positioning — never from an employer-branded variant. The Hermes CV's headline ("Especialista de IA · HERMES Perú") and its employer-directed motivation line are the canonical example of frame contamination: correct for one application, poison for the master.
4. **No fabrication.** Every number, date, title, and claim traces to a named source. 130,000+ stays 130,000+ — never "over 150K," never "~130 mil" in EN. Gaps are flagged `[GAP: needs principal input — X]`, never smoothed.
5. **Placeholder honesty.** Work that exists as badged placeholders on the site (Briefs 02 TUUA, 03 LimaFly UX) may appear as *work performed* (the TUUA platform is live; the LimaFly prototype was presented) but never as *published case studies*. Selected Work entries link only to real, sourced briefs.
6. **EN is master.** ES is one translation pass on the approved EN, applying `designops-copy-es` voice principles (proof-anchored, humble-confident, first person) — never hand-written in parallel, never drifting from EN facts.
7. **Simulated vs. measured segregation carries into the CV.** If a Selected Work line cites a metric, it must be a measured/build metric (45/45 assertions, 175 i18n keys). Simulated product metrics never appear. "I tested with users" never appears.

---

## 2. Identity architecture

**Master identity line (role-agnostic, replaces the Hermes headline pattern):**

> Industrial Engineer (MBA) · DesignOps & strategy-to-execution governance · I take digital products from decision to production

**Parameters:**
- One line, ≤ 110 characters, no employer name, no aspirational title the record can't defend.
- A per-application **variant slot** exists (§6), but the variant swaps *emphasis vocabulary*, never identity. "AI-directed delivery" may rise to the front for an AI role; "HERMES Perú" never enters any headline again.
- Contact block: Lima, Perú · phone · jdsaire@pucp.edu.pe · linkedin.com/in/jdsaire · github.com/jdsaire/designops. The GitHub link is load-bearing — it is the CV's only externally verifiable claim surface and always ships.

---

## 3. Section architecture (fixed order, budgeted lines)

Order is fixed; budgets are one-page enforcement, measured in rendered lines at final type size:

| # | Section | Budget | Rule |
|---|---------|--------|------|
| 1 | Header + identity line | 3 lines | §2 |
| 2 | Professional Profile | 3–4 lines | Mechanism-based, zero adjectives-as-claims (§4) |
| 3 | Experience | 14–16 lines | Reverse chronological; 3–4 bullets LAP, 1 each ESAN/UTEC/Hunt |
| 4 | Selected Work | 4–6 lines | 1–2 lines per real brief, outcome-first, verifiable link (§5) |
| 5 | Education | 3 lines | MBA (1st in class + exchanges), ESAN dual degree, HEC Montréal UX |
| 6 | Certifications | 2 lines | Relevance-ordered per target (§6), year-tagged |
| 7 | Skills | 2–3 lines | Three-band taxonomy (§5.3) |

No filler section survives. If a target demands a section not listed here, it enters via a named amendment to this spec, not ad hoc.

---

## 4. Voice parameters (the screener's rules)

- **Evidence over declaration.** Delete the trait word; let the fact carry it. Not "strong facilitator" — "3 agile workshops, 70 staff, 3.88/4."
- **Verb + object + measured outcome** is the bullet skeleton. Every Experience bullet opens with a first-person past-tense verb of *doing*, not of *being involved in*.
- **No jargon as substance.** Load-bearing technical terms stay exact and unexplained (React, TypeScript, WCAG AA, EPC). Everything else is plain language. "Leveraged synergies" is an automatic rewrite trigger.
- **Ambiguity named, not hidden.** Where the record is genuinely mixed (a 5-month tenure, a cancelled build), the CV doesn't pad around it — it states scope precisely and lets density of proof do the work.
- **Number density target:** every Experience bullet carries at least one number; the Profile carries at least two. A McKinsey reader counts numbers before reading sentences.
- **Hunger shows as rigor.** No sentence about wanting, needing, or "putting in everything." No motivation section directed at any employer — the Hermes closing line is retired permanently; its slot is deleted, not replaced.

---

## 5. Opportunity improvements over the Hermes baseline

### 5.1 What the Hermes CV got right (carry forward)
- Section discipline and compression — it already fit one page.
- Bullet factual precision (130 mil pasajeros, 12 proyectos, 3.88/4, 35 EPC, 1,200 estudiantes, 29 equipos, 11 cursos) — this fact set is the mined inventory; preserve verbatim accuracy.
- Institution qualifiers in employer lines ("operador del Aeropuerto Jorge Chávez," "primera planta de licuefacción de gas natural de Sudamérica") — cheap credibility, keep the pattern.
- "En desarrollo activo" honesty band in Skills — a screener trusts a CV that names what's still forming.

### 5.2 What changes (the upgrade deltas)
1. **Headline de-branding** (§2) — the single largest fix.
2. **Selected Work replaces Proyectos.** The Hermes "Proyectos" section described artifacts; Selected Work argues outcomes. One to two lines per *real* brief, outcome-first, sourced from the live pages:
   - *DesignOps System (Brief 01):* Designed, built, and govern an end-to-end design system — global tokens, 10 reusable organisms, 175-key EN/ES i18n engine — hand-written HTML/CSS/JS at WCAG AA, live on GitHub.
   - *Yape Trust & Verify (Brief 04):* Entered app development and shipped a merchant-side payment-verification build in under a week — React, TypeScript, 45/45 test assertions across 6 scenarios, 5 CI gates, 5 client-side security controls — every line directed and reviewed, none typed by hand.
   - Briefs 02/03 join this section only when their real case studies ship (Invariant 5).
3. **Verifiability line.** Selected Work carries the repo link; where a claim is provable by running a test suite, the CV says so in six words or fewer ("claims verifiable at the linked source"). No other CV in the stack will have this; it is the differentiator.
4. **Profile rebuild.** Replace the Hermes AI-specialist profile with the governance frame, keeping the AI capability as *mechanism*: what he does (govern the layer between strategic decision and shipped product), the evidence pattern (has done every part of the work that layer coordinates — strategy, build, teaching, vendor governance), and the accelerant (AI-directed delivery: Claude Code, Google AI Studio) as instrument, not identity.
5. **Skills three-band taxonomy:** **Process** (product development, business cases, program management, agile, stakeholders, training) · **Build** (HTML/CSS/JS, React, TypeScript, GitHub, WCAG AA, design tokens, i18n) · **AI-directed delivery** (Claude Code, Google AI Studio, prompt engineering) · plus the honest **In active development** band (Python, SQL, Machine Learning). The Hermes CV buried React/TypeScript entirely — the Brief 04 record now makes them claimable.
6. **Certification relevance-ordering** (§6) instead of pure recency: the same six credentials (Google AI Professional Certificate 2026 · AI for Data Analysis, Google 2026 · Program Management, Microsoft 2026 · GenAI Leader, Google 2025 · McKinsey Forward 2025 · MicroMasters UX, HEC Montréal 2023) reorder per target.
7. **Metric phrasing inherits from the site where sharper.** Where a live brief argues a claim more precisely than the old CV bullet, the site's version wins (e.g., the design-system line uses Brief 01's exact token/organism/key figures). Where the CV holds facts the site doesn't cover (teaching load, Hunt LNG), they remain CV-only material.

### 5.3 Experience inventory (the frozen fact set every CV draws from)
- **LAP** (May–Oct 2025, Innovation/Process Specialist): TUUA digital payment platform end to end — design, prototype, evaluation, handoff to engineering; live, serving 130,000+ international-transfer passengers monthly (pagotuua.lima-airport.com) · planning-phase articulation across five central units (Finance, IT, Terminals, Commercial, Corporate Reputation) into one standard · tracking dashboard over a 12-project hybrid portfolio with preventive/corrective action alongside Product Owners · 3 agile workshops, 70 staff, 3.88/4.
- **ESAN** (Mar 2018–Feb 2024, part-time lecturer): 1,200+ students, Calculus I, in-person and remote at scale.
- **UTEC** (Jan 2019–Dec 2022, part-time lecturer): 11 courses across three project levels · 29 teams mentored end-to-end through UX design and evaluation · Community-of-Practice environments seeded.
- **Hunt LNG** (May 2015–Apr 2016): 35 EPC projects; contractor deliverables held to quality, schedule, and technical-specification standards.
- **Education:** Tricontinental MBA, Centrum PUCP 2016–2017, 1st in class, exchanges at University of Victoria and Maastricht University, Strategic Consulting specialization · B.Sc. Industrial & Commercial Engineering, Universidad ESAN 2010–2014, Corporate Finance specialization · UX MicroMasters, HEC Montréal 2023, dedicated UX Management/DesignOps track.

---

## 6. Tailoring knobs (per-application, facts never move — emphasis does)

| Target | Identity-line emphasis | Bullets promoted | Certifications lead | Selected Work lead |
|---|---|---|---|---|
| **BCP Frontend Developer** | "from decision to production," Build band first | Brief 04 stack line; design-system engineering | Program Mgmt, MicroMasters UX | Brief 04 |
| **BCP Design Research / Innovation** | governance + evaluation vocabulary | TUUA end-to-end design→evaluation; 29 UX teams | MicroMasters UX, McKinsey Forward | Brief 04 (research-gated origin) |
| **BBVA DesignOps** | "DesignOps & strategy-to-execution governance" verbatim | Design-system governance; five-unit articulation; CoP | MicroMasters UX (DesignOps track), McKinsey Forward | Brief 01 |
| **AI-native roles (Hermes-class)** | "AI-directed delivery" rises; identity unchanged | Brief 04 zero-lines-typed record; workshops/adoption | Google AI Pro Cert, GenAI Leader | Brief 04 |

Rules: a knob may reorder, promote, or demote — it may never invent, rebrand the identity, or reintroduce an employer name into the headline.

---

## 7. Pre-ship verification checklist (runs on every CV, every time)

1. One page at final render — measured, not eyeballed.
2. Every number/date/title has a named source in §5.3 or a live brief; anything else is cut or `[GAP]`-flagged.
3. Zero adjectives standing in for evidence; zero jargon-as-substance; zero employer names in the identity line.
4. Selected Work links resolve; only real briefs appear; placeholder honesty intact.
5. No simulated metric, no "tested with users," no AI attribution.
6. EN approved before any ES pass begins.
7. Cross-check against the current locked LinkedIn — the two artifacts describe one person and may not contradict on any shared fact.

---

## 8. Skill-evolution note

Once this spec is approved, it becomes the knowledge core of a future `cv-master` Claude Skill (authoring rules + fact inventory + tailoring knobs + checklist). Not created in this run. Amendments to this spec follow the programme's freeze discipline: approved changes version this file; ideas in passing go to `docs/parking-lot.md`.
