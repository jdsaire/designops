# Brief 4 — Payment-Confirmation Trust & Verification · Copy Record
**Verbatim copy target · v3.0 · Status: ELEMENTARY — REGENERATED per principal feedback (16 Jul 2026)**

> **⚠️ STATUS BANNER — READ FIRST**
> This Copy MD reflects the **new, corrected seven-section structure** (Acts 00–06, with Act 03 reserved) per the principal's dated content feedback. It **intentionally diverges from the current Site HTML**, which still runs the old five-act sequence and has not yet been rebuilt to match. A separate HTML-fix run reconciles the two — it starts only after this file is approved.
> **Assets for the HTML-fix run:** the Act 01 receipt image must be attached when that run is authored/executed (this run prepares only the accompanying copy). The regenerated hero lede must also replace the HTML `meta description`, which currently duplicates the old line.
> **Structural changes this copy implies for the HTML fix:** new Act 00 section; reserved Act 03 slot; Act 01 two-column receipt layout; one added scan line in Act 02; Act 04 field-table removed (replaced by prose); Act 05 simulated band deleted and derived tab removed; Act 06 grid grows from 3 to 4 cards (`cardgrid--2` two-by-two, or a 4-up variant — HTML-fix decision).

> **Layer key:** `[SURFACE]` = always visible. `[REVEAL]` = behind a ⊕ affordance. `[TAB]` = inside the Act-05 dashboard tab system. `[FULL]` = `data-full` long form, in the DOM, not displayed.
> **Provenance key:** `[SOURCED — X]` = traces to the named source. `[AUTHORED]` = connective prose grounded in the dossier/build record or the principal's own account. `[PRINCIPAL]` = the principal's first-person account, authoritative.

---

## HERO

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Work brief · 04 · 4 min read |
| H1 | SURFACE | A payment you cannot fake. |
| Lede | SURFACE | A fake payment looks exactly like a real one. That is the whole problem — and the reason looking closer will never solve it. |
| Keywords | SURFACE | Front-end · Verification · Banking |
| Reveal button | SURFACE | The short version |
| Short version | REVEAL | Peru's fake-receipt fraud works because a screenshot is an image, and every field on it is text. I found the one field only the bank can write, built the check that reads it, and let the test suite catch me being wrong. |
| Independence notice | SURFACE | **An independent case study.** Not affiliated with, endorsed by, or connected to Yape or BCP. Built against fabricated fixtures. No real payment, account, or ledger is involved. |
| Scroll cue | SURFACE | The story |

**Changes vs v2.0:** Lede regenerated (old line judged obvious; contained a banned word). Keywords: 2nd swapped Payment Trust → **Verification** (security-adjacent, and the case's actual mechanism); 3rd swapped Fraud → **Banking** (industry). Short version: one banned word replaced ("only the bank can write").
**Frozen exception:** the independence notice is approved verbatim for replication across all briefs. Its single generic use of "ledger" is the only permitted occurrence in this document.
**Meta-description flag (HTML fix):** the HTML `<meta name="description">` must be updated to the new lede.
**Word counts:** Lede 24. Short version 43 (cap 45 ✓).
**Provenance:** H1, lede, short version [AUTHORED]. Independence notice [SOURCED — app README, approved by principal].

---

## ACT 00 — The Context *(NEW)*

*Purpose: put every reader on the same footing before the argument starts. Act 01 previously assumed the reader knew what Yape is; an international audience mostly does not, and even local readers may know it only as a transfer app. State of the art as of publication (July 2026).*
*Components: scanstack (3 lines) + cardgrid--3 (3 cards, no reveals) — both existing mechanisms, no new component invented.*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 00 · The Context |
| Verdict (H2) | SURFACE | First, meet the app most of Peru pays with. |
| Scan 1 (trimmed) | SURFACE | Yape started as a way to send money to a phone number. It is now how a large share of Peru transacts daily. |
| Scan 1 | FULL | Yape started inside Banco de Crédito del Perú as a simple way to send money to a phone number. A decade later it reports on the order of twenty million users across Peru and Bolivia, and its monthly active base is equivalent to roughly four of every five economically active Peruvians. |
| Scan 2 (trimmed) | SURFACE | It stopped being a transfer app years ago: credit, bill payments, a marketplace, remittances — a super app. |
| Scan 2 | FULL | It stopped being a transfer app years ago. Today it carries micro-loans, utility and phone payments, a marketplace, remittances, even bus top-ups — the super-app playbook, built for people the banking system had never reached. Millions entered the financial system for the first time through it. |
| Scan 3 (trimmed) | SURFACE | Its success created a new kind of crime: if everyone trusts the app's confirmation screen, fake the screen. |
| Scan 3 | FULL | That success created a new kind of crime. When an entire economy learns to trust one confirmation screen, the attack is obvious: fake the screen. Counterfeit apps that imitate it are openly sold, iterated like products, and exported to neighboring countries. |
| Card 1 title | SURFACE | Everyone's wallet |
| Card 1 body | SURFACE | Cash still matters in Peru, but its share of transactions has fallen steeply as fast payments took over daily commerce — with Yape and its interbank rival Plin carrying most of that shift. |
| Card 2 title | SURFACE | The counter economy |
| Card 2 body | SURFACE | The typical scene is a market stall or bodega: a customer shows a payment confirmation, a queue waits, and the merchant has seconds to decide whether to hand over the goods. |
| Card 3 title | SURFACE | The stakes |
| Card 3 body | SURFACE | The people most exposed are the ones financial inclusion was meant to serve — small merchants and independent workers, for whom one fake payment can erase a day's earnings. |

**Provenance:** Scans 1–2 and Card 1 [SOURCED — dossier §3 landscape, Credicorp/CEO-interview material already absorbed into the dossier]. Scan 3 [SOURCED — dossier §3, CNSD 2024 alert: counterfeit app sold, tiered, exported]. Cards 2–3 [SOURCED — dossier §3, harm concentration]. Verdict [AUTHORED].
**Metric note:** figures here are deliberately soft-quantified market context ("on the order of," "roughly four of five") — no build metric appears; build figures still debut exclusively in Act 05.

---

## ACT 01 — The Problem

*Layout note (HTML fix): two-column act body — left column carries the contrast card + scan lines; right column carries a receipt image, reasonable gutter. **The receipt image file must be attached at the HTML-fix run.***

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 01 · The Problem |
| Verdict (H2) | SURFACE | Looking harder at the receipt cannot save you. |
| Contrast — What you see | SURFACE | A payment confirmation, on a phone, held up at your counter — |
| Contrast — What it is | SURFACE | — an image, where every field is text that whoever made it can set. |
| Contrast bridge | SURFACE | The fake reproduces exactly what you are looking at. **That is why staring harder fails.** |
| Scan 1 (trimmed) | SURFACE | Peru's wallet boom outran its trust infrastructure — and the fake receipt is the hole it left. |
| Scan 1 | FULL | Peru's wallet boom outran its trust infrastructure. In the "Yape falso" fraud, a counterfeit app generates a convincing confirmation screen — and the merchant hands over the goods for a payment that never settles. The national digital-security centre documented the method in an official 2024 alert. |
| Scan 2 (trimmed) | SURFACE | A security code shipped to close it. **The public guidance still does not mention the code.** |
| Scan 2 | FULL | A three-digit security code shipped in April 2025 to close this. It appears on every receipt in the app. It does not appear in Yape's own public anti-fraud guidance, which still tells users to check their movements, their balance, and their notifications. A verification step a merchant has never heard of is not a verification step. |
| Scan 3 (trimmed) | SURFACE | The people it hits hardest are the ones the inclusion story celebrates most. |
| Scan 3 | FULL | The harm concentrates on the people the financial-inclusion story celebrates most: market traders, bodegueros, and independent workers, taking payment at a counter with a queue behind it and seconds to decide. |
| Role strip, line 1 | SURFACE | Role — Sole author |
| Role strip, line 2 | SURFACE | Duration — July 2026, one build cycle |
| Role strip, line 3 | SURFACE | Scope — Research → selection → front-end build → test |
| Reveal button | SURFACE | Why I chose this problem |
| Reveal body | REVEAL | I benchmarked three innovation-centre banks in markets comparable to Peru — Nubank, Nequi, Attijariwafa. All three treat verifiable payment trust as a core product surface, so the gap here is real, not invented. Two other candidates lost: merchant finance tools are a crowded, solved space, and onboarding flows drift into regulated identity territory. Payment trust won because it is real, urgent, and answerable in front-end code alone. |

**Changes vs v2.0:** contrast bridge — banned word replaced ("The fake reproduces…"). Reveal — two paragraphs (≈100 words) condensed to one (≈70), same substantiating facts (benchmark trio, both rejected candidates with reasons), DBS detail dropped as the removable excess.
**Provenance:** Scans [SOURCED — dossier §2.4, §3]. Reveal [SOURCED — dossier §3 ranked table, §4, §5]. Verdict, contrast, bridge [AUTHORED].

---

## ACT 02 — The Adaptation

*Eyebrow decision: "The Build" replaced by **"The Adaptation"** (ES: La Adaptación — clean parity). Rationale: the principal's account frames this act as adaptability/resilience — a deliberate career pivot into banking-sector UX Engineering by learning app-focused frontend — not construction mechanics. The step-by-step build record belongs to the future Act 03 Gantt; this act is the journey that precedes it.*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 02 · The Adaptation |
| Verdict (H2) | SURFACE | I did not set out to master an app. I set out to solve one problem inside it. |
| Scan (new) | SURFACE | Give me the exact design system and I can build or redesign the whole app — but that is not the purpose. This case shows one real fraud problem, solved through front-end alone, with every framework, security, and codebase decision understood and backed by me. |
| Stop 1 label | SURFACE | Stop 1 |
| Stop 1 title | SURFACE | The gap I mapped |
| Stop 1 body | SURFACE | I read the frontend requirements Peru's largest bank actually hires for, mapped them against my own skillset, and aimed this project directly at the distance between the two. |
| Stop 2 label | SURFACE | Stop 2 |
| Stop 2 title | SURFACE | The jump to apps |
| Stop 2 body | SURFACE | I left the vanilla web approach this whole site was built on and entered frameworks and app development, to experience first-hand what I am able to build. |
| Stop 3 label | SURFACE | Stop 3 |
| Stop 3 title | SURFACE | One problem, done fully |
| Stop 3 body | SURFACE | I knew reshaping an already successful super app takes years. I chose instead to understand what solving a single banking problem with frontend truly takes. |

**Changes vs v2.0:** full rebuild. Old Stop 3 ("The correction," the caught defect) removed per feedback — the defect was self-contained pre-deployment and reads as pointless here; its story remains in Act 06 where it belongs to the personal reflection. Timeline stays at exactly 3 stops (existing mechanism). One scan line added under the verdict to carry the principal's key self-aware line — a minor structural addition flagged for the HTML fix.
**Stop-body compliance:** Stop 1 = 29 words · Stop 2 = 27 · Stop 3 = 26. All start with "I" ✓. Zero dashes inside stop bodies ✓.
**Provenance:** verdict, scan, all three stops [PRINCIPAL — the adaptability account, near-verbatim where marked]. The "give me the exact design system" line is carried close to verbatim by instruction.

---

## ACT 03 — *Reserved*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | — | Act 03 · *(reserved — Gantt chart of the Brief 4 build; not yet designed or written)* |

**Status:** placeholder only, held so act numbering stays consistent across Acts 00–06. No content is authored here. The future organism covers step-by-step epics, tasks, durations, and milestones — the execution record that Act 02's journey precedes.

---

## ACT 04 — The Architecture

*Governing principle (restored per feedback): the always-visible layer must be understandable by a general professional reader outside the tech world. Technical depth lives only in the purple reveals. Every heading names its object plainly.*
*Reframe: the four cards now argue the major tech-stack decisions. The honest justification, used throughout, is job-description alignment — React, TypeScript, and the named security patterns are the literal vocabulary of the target bank's frontend role. No invented engineering-superiority debate.*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 04 · The Architecture |
| Verdict (H2) | SURFACE | Every technology here was chosen for a reason I can defend. |
| Card 1 title | SURFACE | React — the framework the bank asks for |
| Card 1 body | SURFACE | React builds the screens. I chose it because it is the exact framework named in the frontend roles this case targets — so the alignment is demonstrable, not claimed. |
| Card 1 reveal btn | SURFACE | Why React and not Angular |
| Card 1 reveal | REVEAL | Angular appears in banking stacks too, and a generic "React is better" argument would be dishonest — both are capable. The real reason is precision: the target job description names React, so building in React turns a CV keyword into a working, inspectable demonstration. The app also uses React's supported mechanism for reading state that lives outside the framework, which keeps the interface stable under rapid updates — the exact condition a verification flow creates. |
| Card 2 title | SURFACE | TypeScript — code that checks itself |
| Card 2 body | SURFACE | TypeScript is JavaScript with a safety layer: it catches whole categories of mistakes before the code ever runs. In a tool that tells a merchant "trust this payment," that layer is not optional. |
| Card 2 reveal btn | SURFACE | What the safety layer buys |
| Card 2 reveal | REVEAL | Every receipt field, verdict state, and API response has a declared shape, so a malformed record cannot silently flow into a verdict. The compiler runs as a CI gate on every push — the same discipline the target role's stack (typed code, automated checks, continuous integration) expects in production banking work. |
| Card 3 title | SURFACE | Security patterns — staged, on purpose |
| Card 3 body | SURFACE | The app demonstrates how banking-grade connection security works — certificates, encrypted exchanges, risk-based challenges — using openly fabricated material, clearly badged SIMULATED. Showing the pattern honestly beats claiming it falsely. |
| Card 3 reveal btn | SURFACE | What is staged, what really runs |
| Card 3 reveal ¶1 | REVEAL | **SIMULATED, against fabricated fixtures:** the TLS 1.2 / SSL / HTTPS record layer and cipher suite, RSA-2048 asymmetric key exchange, mutual authentication where both sides present a certificate, digital certificates with fingerprints, and RSA Adaptive risk scoring that gates the check behind a step-up challenge. Nothing here measures anything and no certificate is issued by any authority — this is the target role's security vocabulary, demonstrated rather than recited. |
| Card 3 reveal ¶2 | REVEAL | **Genuinely running in this client:** an in-app secure keypad so no third-party keyboard sees the input, shuffled digits so a watching eye cannot read the finger path, an execution lock against double-submits, a blocking overlay that disables the page behind it, and privacy masking throughout. The two lists never mix — neither borrows credibility from the other. |
| Card 4 title | SURFACE | Six scenarios — the proof the build answers to |
| Card 4 body | SURFACE | Before trusting the build, I wrote a six-scenario testing protocol drawn from the case research: can it tell a fake from a real payment, and does it refuse to misfire under pressure? |
| Card 4 reveal btn | SURFACE | What the six scenarios check |
| Card 4 reveal | REVEAL | One: a forged amount on a real operation number is caught and named. Two: a verdict stays reachable even when the user has never heard of the security code — an unreadable field is never scored as a mismatch. Three: a double-tap or mid-flight cancel can never fire the check twice or record a verdict the operator backed out of. Four through six: the action stays inert until its preconditions hold, the busy overlay truly blocks the page, and privacy masking never leaks a full name or number. Results live in the dashboard below. |
| Fields synthesis | SURFACE | Of the five fields on a receipt, four — amount, recipient, date, even the security code — are text whoever makes the image can set. Only the operation number is written by the bank's own record. The security code looks like proof and ships on every receipt; it is text on the same image. **Treating it as proof is the trap the tool exists to close.** |
| Evidence label | SURFACE | The running build |
| Evidence link 1 | SURFACE | Open the app → `https://jdsaire.github.io/designops/work/yape-trust-verify/` |
| Evidence link 2 | SURFACE | Read the source → `https://github.com/jdsaire/designops/tree/main/work/yape-trust-verify` |

**Changes vs v2.0:** all four headings regenerated to name their object plainly; bodies rewritten for the non-technical reader; reveals carry the depth. Card 3 absorbs the old Act-05 PRODUCT · SIMULATED band's content — **its SIMULATED badge travels with it**, per the project-wide segregation rule. Card 4 is the reserved protocol card ("six scenarios" is a descriptive label, like an act number — pass/fail figures still debut only in Act 05). The five-row field table is removed and synthesized into the closing prose block.
**Provenance:** Cards 1–2 [SOURCED — build record + BCP JD vocabulary per dossier; the React-vs-Angular honesty framing per prompt instruction]. Card 3 [SOURCED — app README, "The security layer," both lists]. Card 4 [SOURCED — TESTING.md scenarios 1–6, plain-language rendering]. Fields synthesis [SOURCED — TESTING.md scenario 1 + dossier §2.5]. Verdict [AUTHORED].

---

## ACT 05 — The Dashboard

*Goal (restored per feedback): prove this build demonstrates real frontend competencies — production discipline, security awareness, testing rigor — in terms a hiring manager finds credible.*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 05 · The Dashboard |
| Verdict (H2) | SURFACE | The numbers a hiring manager can check. |
| Tab 1 | SURFACE | Measured |
| Tab 2 | SURFACE | The read |

### Measured tab — BUILD band `[measured]`

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Band badge | TAB | Build · measured |
| Band scope | TAB | Counted from the repository and the recorded test run. Verifiable at the linked source. |
| Cell 1 | TAB | **45** — Assertions passing — 45 of 45. None waived. |
| Cell 2 | TAB | **6** — Protocol scenarios — All six pass. |
| Cell 3 | TAB | **0** — Backend services — Front-end only, by constraint. |
| Cell 4 | TAB | **5** — CI gates per push — Typecheck, tests, build, drift, paths. |
| Cell 5 | TAB | **5** — Security controls running in the client — Secure keypad, shuffled digits, execution lock, blocking overlay, privacy masking. |
| Cell 6 | TAB | **3** — API endpoints consumed — Real request handling against mock fixtures. |
| Cell 7 | TAB | **&lt;7** — Days, research to deployed app — First app build, first use of this stack. |
| Cell 8 | TAB | **0** — Lines of code typed by hand — Every line directed, reviewed, and understood. None typed. |

### The read tab

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Read line | TAB | **The fastest artifact in this portfolio is also its most technical.** That inversion is the finding. |
| Read sub | TAB | Entering app development — new stack, new security discipline, new testing rigor — was supposed to be the slow, intimidating path reserved for career developers. Directed properly, it took under a week and produced the only work here whose claims a stranger can verify by running a test suite. The cost of entering a new stack has collapsed; what remains scarce is knowing what to build and how to prove it held. |
| Recommendation | TAB | What transfers: any stack a client's problem requires is now reachable — with every decision owned, and every claim checkable. |
| Footnote | SURFACE | Method — figures counted from the repository and the recorded test run (Node 24.18.0, Vitest 3.2.7, TypeScript 5.9.3, 15 Jul 2026), verifiable at the linked source. Staged security demonstrations are described, and badged, in The Architecture above. |

**Changes vs v2.0:** verdict regenerated to carry the goal. Measured keeps the four required cells and adds four new general-audience measures — client-side security controls (5, sourced), API endpoints (3, sourced), days to deployed (&lt;7, principal's account), and hand-typed lines (0, principal's account — the most striking figure for a reader arriving from the design world). Dropped: the anchored-field and defect-found cells (the first now lives as Act 04's prose synthesis; the second belongs to Act 06's reflection), and the job-count cell. **Derived tab excluded entirely** — every candidate derived figure either restated a measured one or required context the target audience wouldn't have; per instruction, not forced. **PRODUCT · SIMULATED band deleted** — its content relocated to Act 04, Card 3, SIMULATED badge intact. Method footnote deduplicated: the simulated-scope sentence is replaced by a pointer to where that content now lives.
**Provenance:** Cells 1–4 [SOURCED — TESTING.md, completion report]. Cell 5 [SOURCED — README, "genuinely run in this client" list]. Cell 6 [SOURCED — README, REST endpoints]. Cells 7–8 [PRINCIPAL — under a week; no line typed by hand]. Read tab [AUTHORED — grounded in the principal's account and the measured column].

---

## ACT 06 — The Reflection

*Framework decision: **no fixed framework.** The trap/tell/test sequence is discarded per feedback. Per the principal's instruction, the reflections are categorized from the personal account rather than fitted to a named device — four categories emerged naturally: the ceiling broken, the method used, the tools tested, the choice made. Card count grows 3 → 4 (structural change flagged in the status banner).*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 06 · The Reflection |
| Verdict (H2) | SURFACE | The fastest thing I ever built was the one I thought I couldn't. |
| Card 1 tag | SURFACE | The ceiling |
| Card 1 title | SURFACE | Territory I thought was closed |
| Card 1 body | SURFACE | I believed app development belonged to career developers and computer scientists. This build broke that ceiling: I now work the technical side of a solution while owning every strategic call — especially the stack itself. |
| Card 2 tag | SURFACE | The method |
| Card 2 title | SURFACE | Directed, not typed |
| Card 2 body | SURFACE | My fastest portfolio artifact yet — without typing a line of code, and without vibe-coding shortcuts. Every framework, security, and codebase decision was directed, reviewed, and understood by me. That is the superpower worth building. |
| Card 3 tag | SURFACE | The tools |
| Card 3 title | SURFACE | Knowing what each tool is for |
| Card 3 body | SURFACE | Gemini extracted the app's flows from fifteen screenshots into one master file, and out-synthesized NotebookLM on the CEO interview. Cowork and browser automation were planned, then dropped — the evidence was already strong enough. |
| Card 4 tag | SURFACE | The choice |
| Card 4 title | SURFACE | One problem, not a redesign |
| Card 4 body | SURFACE | Banking is too wide to enter everywhere at once. A short, focused study pointed at one real fraud mechanism — approached purely through front-end eyes, not as UX, redesign, or innovation theatre. |
| Sequel hint | SURFACE | The gap I did not close: this app checks a fabricated record. **The same check, against a bank's real one, is a backend conversation** — and the next thing I intend to be able to prove. |

**Changes vs v2.0:** full regeneration. Trap/tell/test discarded. Four categorized cards distill the principal's account; the caught-defect story is folded into the rigor thread implicitly rather than re-narrated (its mechanics already served Act 04's protocol card). Sequel hint rewritten — banned word removed, one line.
**Word-count compliance (cap 40):** Card 1 = 36 · Card 2 = 36 · Card 3 = 35 · Card 4 = 32 ✓
**Provenance:** all four cards and the verdict [PRINCIPAL — the reflection account, condensed]. Sequel hint [AUTHORED — grounded in the front-end-only scope boundary].

---

## CONVERSION *(unchanged — not addressed in feedback)*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Primary CTA | SURFACE | Start a conversation `[TEMPORAL]` — badge reads "Pending" |
| Next label | SURFACE | Keep reading |
| Continuity 1 title | SURFACE | DesignOps System → |
| Continuity 1 body | SURFACE | The system this brief is published on — built, governed, and operated end to end. |
| Continuity 1 href | — | `../designops-system/` (live ✓) |
| Continuity 2 title | SURFACE | TUUA Transfer → |
| Continuity 2 body | SURFACE | The paid engagement: a payment platform designed, prototyped, and handed to engineering. |
| Continuity 2 href | — | `../tuua-transfer/` (**route not yet built — resolves on Wave 5 mount; update if slug changes**) |

---

## CHROME *(unchanged — live organism strings, verbatim)*

| Element | Copy (verbatim) |
|---|---|
| Nav wordmark | JD·SAIRE DesignOps |
| Nav links | Work · Capabilities · Evolution |
| Nav CTA | Start a conversation |
| Footer tagline | Built and governed **end to end.** |
| Footer link | Connect on LinkedIn |
| Footer copyright | © 2026 Juan Diego Saire. |

---

## Suggested filter tags — future Main taxonomy *(NOT YET IMPLEMENTED — recommendation only, no file touched)*

Per the planned home-page filter system (INDUSTRY / FIELD / ROLE, 3–4 tags per case):

| Tag | Facet | Reason |
|---|---|---|
| **Banking** | INDUSTRY | The case's entire context — the target sector, the target employers, the problem domain. |
| **Development** | FIELD | The case's declared purpose: frontend applied to app development, distinct from this site's design-led briefs. |
| **Cybersecurity** | FIELD | The differentiator — fraud, verification, and the demonstrated security-pattern vocabulary set this brief apart from generic frontend work. |
| **Frontend Developer** | ROLE | The exact role this case targets and whose job-description vocabulary the build demonstrates. |

Four tags, one per strategic angle, no redundancy with each other. Hero keywords (Front-end · Verification · Banking) and these filter tags are deliberately near-aligned but not identical — keywords sell the page, tags route the visitor.

---

## Fact register

| Claim | Tier | Source |
|---|---|---|
| Yape scale: ~20M users order-of-magnitude; MAU ≈ 4 of 5 economically active Peruvians | [SOURCED] | Dossier §2.1/§3 (Credicorp Q1 2026 disclosure; CEO interview) — soft-quantified in Act 00 by design |
| Super-app scope: loans, bills, marketplace, remittances, transport | [SOURCED] | Dossier §2.1; CEO-interview material in build record |
| Counterfeit app sold, tiered, exported to neighboring countries | [SOURCED] | Dossier §3 (CNSD Alerta 216-2024) |
| Security code shipped Apr 2025; absent from public FAQ | [SOURCED] | Dossier §2.4 [VERIFIED — live fetch] |
| Benchmark trio; two rejected candidates | [SOURCED] | Dossier §3–§5 |
| 45/45 assertions; 6 scenarios; 0 backends; 5 CI gates | [SOURCED] | TESTING.md; completion report |
| 5 client-side security controls; 3 API endpoints | [SOURCED] | App README ("genuinely run in this client"; REST endpoints) |
| Under a week, research to deployed; zero lines typed by hand; no vibe coding | [PRINCIPAL] | Principal's reflection account (16 Jul 2026 feedback) |
| Gap-mapping against BCP frontend JD; adaptability motive; "give me the design system" line | [PRINCIPAL] | Principal's Act-02 account, carried near-verbatim |
| Gemini flow-extraction (15 screenshots → master JSON); Gemini over NotebookLM; Cowork/Chrome dropped | [PRINCIPAL] | Principal's reflection account |
| React/TypeScript/security-pattern choice = JD alignment (not engineering superiority) | [SOURCED] | Dossier §3 JD vocabulary; framing per prompt instruction |
| "4 min read" | [UNVERIFIED] | Inherited; not re-measured against the longer 7-section page — re-verify at HTML fix |
| Act 02 eyebrow "The Adaptation"; Act 06 categorized (no fixed framework) | [AUTHORED] | This run's decisions, rationale stated in-act |

---

## Self-verification report

1. **"ledger" occurrences outside the frozen disclaimer:** 0 ✓ (disclaimer's single generic use preserved verbatim)
2. **Second banned word, occurrences in brief copy:** 0 ✓ (replaced contextually: "whoever made it," "the fake," "whoever makes the image")
3. **Act 06 cards ≤40 words:** 36 / 36 / 35 / 32 ✓
4. **Build metrics before Act 05:** none ✓ — Act 00 uses soft-quantified market context; Act 04's "six scenarios" and "five fields" are descriptive labels; all pass/fail and count figures debut in Act 05
5. **SIMULATED labeling preserved where content moved:** ✓ — Act 04 Card 3 carries the badge in body and reveal
6. **Hero keyword row:** Front-end · Verification · Banking ✓
7. **Filter-tags section:** present, marked not-yet-implemented, touches no other file ✓
