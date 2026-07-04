# Brief 1 of 3 — DesignOps System
**Gate 1 review copy · EN · v1.0 · Status: DRAFT — awaiting principal approval**
Dispatch: DEPLOY-F1-Briefs-Build-v1_0 · Renderer: `renderArch` · Pillar: BUILD · Card 1

---

## (a) Outline

| Section | Move |
|---|---|
| 01 Problem | Role/duration up front. The pain: design systems fail in governance and adoption, not in the sketch. The credibility gap this brief closes: most portfolios show systems designed for someone else to run. |
| 02 Intervention | Built and governs the entire stack solo: tokens → organisms → i18n → accessibility → deployment. AI-accelerated build (Claude Code, Google AI Studio) as method, not magic. Key decisions with rationale. |
| 03 Artifact | `renderArch` — architecture tiers + three decision cards. Self-referential evidence: live site + public repo. |
| 04 Outcome | System live, versioned, governed; metrics restated in prose (10 organisms, 175 keys, WCAG AA, zero frameworks). |
| 05 Retrospective | What governing your own system teaches about governing a team's. Honest next steps (ES injection, multi-page briefs). Conversion block. |

---

## (b) Full EN copy — body ~700 words

### HERO
- **Title:** DesignOps System
- **Domain:** `jdsaire/designops` · Pillar pill: BUILD
- **Deck:** A design system built, shipped, and governed end to end — tokens, ten organisms, a bilingual i18n engine, WCAG AA — on a hand-written vanilla stack, accelerated with AI from architecture to production.
- **Meta:** 4 min read · Executive brief

### 01 — PROBLEM

**H2: A design system is easy to draw and hard to govern.**

Role: sole architect, engineer, and system governor. Duration: 2025 to present. Scope: everything — token definition, component build, internationalization, accessibility, deployment, and the ongoing governance that keeps all of it coherent.

Most design systems don't fail at the sketch stage. They fail afterward, in the operating layer: components drift from spec, translations fall out of sync, accessibility erodes with each release, and nobody owns the standard once the launch deck is filed. Portfolios rarely test for this, because a Figma library can't misbehave — only a live, versioned system can.

So the proof here is deliberately self-referential. The site documenting this system runs on the system. Every claim below can be checked against the public repository and the rendered page itself.

### 02 — INTERVENTION

**H2: I built the operating layer first, then everything on top of it.**

The build order was a governance decision. Global tokens came first — color, typography, and spacing defined once as CSS custom properties, propagating everywhere, so no component could invent its own values. On top of the tokens sit ten reusable organisms — navigation, hero, work cards, capability carousel, timeline, contact, footer among them — each held to correct token adoption.

Language was engineered, not translated ad hoc: a custom i18n engine (SwapLang) drives the interface from external JSON dictionaries — 175 keys in the English dictionary — so copy changes are data changes, never markup surgery, and a second locale injects without structural rework.

Three decisions defined the build. First, a zero-framework stack: hand-written HTML, CSS, and JavaScript, keeping the payload small and the dependency surface at zero — nothing to patch, nothing to migrate. Second, accessibility as a build gate, not a retrofit: the system ships at WCAG AA. Third, AI as an accelerant under governance: I directed the build through Claude Code and Google AI Studio, from architecture definition to production code — with every output reviewed against the token and accessibility standard before merge. The AI multiplied speed; the standard stayed mine.

### 03 — ARTIFACT

**H2: The architecture is the evidence — and it's public.**

Lede: *A hiring manager doesn't need adjectives; the system can be inspected. Here is its structure, and the decisions that shaped it.*

Archetype: code architecture + decisions (`renderArch`)

- **Tier top:** Organism layer — 10 reusable organisms · Nav · Hero · Work · Capabilities · Timeline · Contact
- **Tier mid:** i18n engine — SwapLang · 175-key EN dictionary · ES staged | Design system — global tokens in CSS custom properties
- **Tier bottom:** HTML semantic · CSS grid/flex · JS vanilla · Pages GitHub
- **Decision cards:**
  1. *Zero frameworks* — No React, no build tooling. Small payload, zero dependency surface, nothing that expires.
  2. *Tokens in code* — Brand rules enforced as CSS custom properties, not by convention. Drift is structurally impossible.
  3. *i18n as architecture* — External JSON dictionaries with a runtime engine. A new locale is a data file, not a rebuild.
- **Repo line:** Source, live · github.com/jdsaire/designops

### 04 — OUTCOME

**Metric chip:** 10 organisms · 175 keys · AA

Prose: The system is live, version-controlled on GitHub, and governed daily: ten organisms holding to a single token standard, a 175-key internationalization engine running the interface, and WCAG AA accessibility maintained in production — all on a hand-written stack with zero framework dependencies. The page you are reading — chassis, tokens, and navigation — is served by this system.

### 05 — RETROSPECTIVE

**H2: Governing your own system is the rehearsal for governing a team's.**

Every failure mode I designed against here — token drift, translation debt, accessibility erosion, undocumented decisions — is the same failure mode a design organization fights at scale, with more people and higher stakes. Building the whole stack solo made every handoff gap visible, because I was on both sides of each one.

Next steps are already in motion: injecting the staged Spanish dictionary through the same i18n architecture, and splitting this brief system into per-case pages inside the repository. Both are data-and-structure operations, not rebuilds — which was the point of the architecture all along.

**Conversion block:**
→ **Start a conversation** [mailto: **[TEMPORAL — confirm address]**]
→ Continue: *TUUA Transfer* · *LimaFly*

---

## (c) Fact ledger — Brief 1

| Claim | Tier |
|---|---|
| Tokens, 10 organisms, 175-key i18n, WCAG AA, vanilla stack, GitHub-versioned | [LOCKED] |
| Claude Code + Google AI Studio, architecture → production | [LOCKED] |
| "ES staged" (EN live, ES dictionary pending) | [DERIVED] from live repo state — only `en.json` present at root i18n path |
| Organism names listed (Nav, Hero, Work, Capabilities, Timeline, Contact, Footer) | [DERIVED] from live index.html section structure |
| "Every output reviewed against the standard before merge" | [INVENTED-verificar] — plausible working method; confirm it reflects your actual review discipline |
| "2025 to present" duration | [DERIVED] from public timeline entry (2025–present), expressed without naming the brand |

## (d) Evidence slots

| Slot | Status |
|---|---|
| Live site URL (GitHub Pages) | [LOCKED] — self-referential, no asset needed |
| Repo link github.com/jdsaire/designops | [LOCKED] |
| Contact mailto | **[TEMPORAL]** — awaiting confirmed address |

## Voice notes
- Skeleton's Alpha register ("the circuit is flooded with people who present, not build") rewritten out — competent-warm carries proof without contempt.
- Skeleton `renderArch` repo link re-pointed from locked `jdsaire/jdigital` to `jdsaire/designops`.
