# Brief 4 — Payment-Confirmation Trust & Verification · Copy Record
**Verbatim copy target · v4.0 · Status: ELEMENTARY — REGENERATED per principal feedback (17 Jul 2026)**

> **⚠️ STATUS BANNER — READ FIRST**
> This Copy MD reflects the corrected **seven-section structure** (Acts 00–06, Act 03 reserved) and **intentionally diverges from the current Site HTML**, which still runs the old five-act sequence. A separate HTML-fix run reconciles the two — it starts only after this file is approved.
> **Structural changes for the HTML-fix run:** new Act 00; reserved Act 03 slot; Act 01 two-column receipt layout (**receipt image must be attached at that run**); one added scan line in Act 02; Act 04 field-table replaced by prose; Act 05 simulated band deleted and derived tab removed; Act 06 grid grows 3 → 4 cards; **HTML meta-description must be updated to the new lede**; **hero keyword row grows to 4–5** (pending principal's final pick); **hero gains a reserved "Listen to article" audio affordance** — assembly reference carried forward: `https://blog.google/products-and-platforms/platforms/android/world-emoji-day-noto-3d/` (not built in this run).
> **Localization note:** context is Lima, Peru — July 2026. Currency is soles; local references (e.g. UNI, systems-engineering grads) stand ready if illustrative examples are ever needed. None were needed in v4 — no invented example entered the copy.

> **Layer key:** `[SURFACE]` = always visible. `[REVEAL]` = behind a ⊕ affordance. `[TAB]` = inside the Act-05 dashboard tab system. `[FULL]` = `data-full` long form, in the DOM, not displayed. `[RESERVED]` = structural slot acknowledged, not built.
> **Provenance key:** `[SOURCED — X]` · `[AUTHORED]` · `[PRINCIPAL]` = the principal's first-person account, authoritative.

---

## HERO

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Work brief · 04 · 4 min read |
| H1 | SURFACE | The screenshot says paid. My app asks the bank. |
| Lede | SURFACE | Peru's favorite payment app has a counterfeit problem. To close it, I entered a stack I had never touched — and set one rule: prove every claim. |
| Keywords *(provisional — principal picks final 4–5)* | SURFACE | Front-end · Banking · App Development · React · Security |
| Listen to article | RESERVED | *(audio affordance — HTML-fix run; label copy reserved: "Listen to article")* |
| Reveal button | SURFACE | The short version |
| Short version | REVEAL | Yape receipts can be faked field by field — except one. I entered app development to build the merchant-side check that reads it: React, TypeScript, banking-grade security discipline, and a test protocol that proves the claim held. |
| Independence notice | SURFACE | **An independent case study.** Not affiliated with, endorsed by, or connected to Yape or BCP. Built against fabricated fixtures. No real payment, account, or ledger is involved. |
| Scroll cue | SURFACE | The story |

**Changes vs v3.0:** H1, lede, and short version regenerated as a matched pair-plus-one — the H1 and short version travel together to the future home-page work card, so both stand alone out of context. H1 now names the domain (a payment screenshot, a bank, an app the author built) and carries a memorable two-beat contrast; the lede hooks without resolving (which stack? prove how?) instead of stating the conclusion; the short version builds from the H1's terms (the fake, the check, the build) without repeating them. Keywords: row grows to a provisional 5 — Front-end and Banking kept per instruction, Verification excluded per instruction ("can be anything").
**Word counts:** Lede 26. Short version 36 (cap 45 ✓).
**Provenance:** H1, lede, short version [AUTHORED]. Independence notice — FROZEN, verbatim, including its single permitted use of the otherwise-banned word.

### H1 alternates *(menu for the principal — swap without a new run)*

| Alternate | Rationale |
|---|---|
| Catching Peru's fake payments, in front-end code alone. | Leads with geography + fraud + method; strongest domain signal, less punch. |
| Yape's fake receipts, closed from the front end. | Names the product directly; shortest path to "what is this brief." |
| One true field: a banking app built front-end only. | Leads with the case's thesis (the single trustworthy field); most conceptual. |
| Twenty million wallets, one fake screen. | Scale-versus-threat contrast; most evocative, but omits the build. |

### Keyword shortlist *(ranked menu — principal picks the final 4–5; Front-end and Banking are fixed keeps)*

| Rank | Keyword | Rationale |
|---|---|---|
| 1 | App Development | The pivot this brief exists to demonstrate — distinct from this site's web-design register. |
| 2 | React | The concrete framework; instantly legible to a technical reader scanning cards. |
| 3 | Security | The differentiator versus generic front-end work; plainer than "Verification." |
| 4 | Fraud Prevention | Names the problem domain in two words; strong for non-technical scanners. |
| 5 | Testing | The build's proof discipline; underrepresented in portfolio cards generally. |
| 6 | P2P Payments | Precise product context; slightly narrower than the brief's actual scope. |
| 7 | TypeScript | Real and demonstrable, but reads as a subset of React + Security. |
| 8 | Fintech | Broad sector tag; overlaps Banking without adding information. |

*Hero keywords sell the page; the filter tags (final section) route the visitor. They may overlap but are deliberately not identical.*

---

## ACT 00 — The Context

*Carried forward from v3.0 unchanged: verdict, three scan lines with full forms, three cards (Everyone's wallet / The counter economy / The stakes). See v3.0 for the full table — reproduced verbatim in the master copy below this note in the final assembled document.*

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

**Changes vs v3.0:** none.

---

## ACT 01 — The Problem

*Layout note (HTML fix): two-column body — contrast card + scans left, receipt image right, reasonable gutter. **Receipt image must be attached at the HTML-fix run.***

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

**Changes vs v3.0:** none.

---

## ACT 02 — The Adaptation

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 02 · The Adaptation |
| Verdict (H2) | SURFACE | I did not set out to master an app. I set out to solve one problem inside it. |
| Scan | SURFACE | Give me the exact design system and I can build or redesign the whole app — but that is not the purpose. This case shows one real fraud problem, solved through front-end alone, with every framework, security, and codebase decision understood and backed by me. |
| Stop 1 label | SURFACE | Stop 1 |
| Stop 1 title | SURFACE | The gap I mapped |
| Stop 1 body | SURFACE | I read the frontend requirements Peru's largest bank actually hires for, mapped them against my own skillset, and aimed this project directly at the distance between the two. |
| Stop 2 label | SURFACE | Stop 2 |
| Stop 2 title | SURFACE | The jump to apps |
| Stop 2 body | SURFACE | I left the vanilla web approach this whole site was built on and entered frameworks and app development, to experience first-hand what I am able to build. |
| Stop 3 label | SURFACE | Stop 3 |
| Stop 3 title | SURFACE | One problem, done fully |
| Stop 3 body | SURFACE | I knew reshaping an already successful super app takes years. I chose instead to understand what solving a single banking problem with frontend truly takes. |

**Changes vs v3.0:** none.

---

## ACT 03 — *Reserved*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | — | Act 03 · *(reserved — Gantt chart of the Brief 4 build; not yet designed or written)* |

**Status:** placeholder only; act numbering held consistent. No content authored.

---

## ACT 04 — The Architecture

*Governing principle: the always-visible layer must be understandable by a general professional reader outside the tech world; technical depth lives only in the purple reveals. Analogy technique applied on this pass where jargon meets that reader.*

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 04 · The Architecture |
| Verdict (H2) | SURFACE | Every technology here was chosen for a reason I can defend. |
| Card 1 title | SURFACE | React — one source of truth for every screen |
| Card 1 body | SURFACE | React draws every screen from the app's data, never the reverse — so what the merchant sees always matches what the app knows. In a trust tool, that guarantee is the product. |
| Card 1 reveal btn | SURFACE | Why React, and not vanilla or Angular |
| Card 1 reveal | REVEAL | The one failure a verification tool cannot survive is a stale screen — "verified" still showing for a check the operator cancelled. React is built for exactly this: the interface is a function of state, read through its supported mechanism for stores that live outside the framework, so a verdict cannot tear under rapid updates. Vanilla — how this entire site is built — would mean hand-wiring every listener and owning every teardown, and this build's one real defect was precisely a missed listener. Angular would work, but brings a large, opinionated framework surface to a deliberately small single-job build; a smaller surface is faster to get right. That the banking sector's own job postings name React is convenient corroboration — the natural tool for the problem happens to be the one the industry already builds in. |
| Card 2 title | SURFACE | TypeScript — code that checks itself |
| Card 2 body | SURFACE | TypeScript is JavaScript with a strict proofreader: it catches whole classes of mistakes before the code runs. In a tool that tells a merchant to trust a payment, that net is not optional. |
| Card 2 reveal btn | SURFACE | What the safety layer buys |
| Card 2 reveal | REVEAL | Every receipt field, verdict state, and API response has a declared shape, so a malformed record cannot silently flow into a verdict. The compiler runs as a CI gate on every push — the same discipline production banking code expects: typed contracts, automated checks, continuous integration. |
| Card 3 title | SURFACE | Security — a film set with one real lock |
| Card 3 body | SURFACE | Think of the security layer as a film set: the heavy bank infrastructure is painted scenery, openly staged, while every lock the merchant actually touches is real, working, and tested. |
| Card 3 reveal btn | SURFACE | What is scenery, what is the lock |
| Card 3 reveal | REVEAL | The scenery demonstrates the sector's security vocabulary — TLS 1.2 encrypted exchanges, RSA-2048 key pairs, mutual certificate authentication, adaptive risk scoring — against fabricated material, badged SIMULATED throughout so no one mistakes a painted server for a real one. The lock is everything the merchant touches: an in-app keypad no third-party keyboard can read, digits that shuffle to defeat a watching eye, an execution lock against double-taps, a blocking overlay while the check runs, and privacy masking on every name and number. Neither side ever borrows credibility from the other. |
| Card 4 title | SURFACE | Six scenarios — the proof the build answers to |
| Card 4 body | SURFACE | Before trusting the build, I wrote a six-scenario testing protocol drawn from the case research: can it tell a fake from a real payment, and does it refuse to misfire under pressure? |
| Card 4 reveal btn | SURFACE | What the six scenarios check |
| Card 4 reveal | REVEAL | 1: a forged amount on a real operation number is caught and named. 2: a verdict stays reachable even when the user has never heard of the security code — an unreadable field is never scored as a mismatch. 3: a double-tap or mid-flight cancel can never fire the check twice or record a verdict the operator backed out of. 4: the action stays inert until its preconditions hold. 5: the busy overlay truly blocks the page. 6: privacy masking never leaks a full name or number. Results live in the dashboard below. |
| Fields synthesis | SURFACE | Of the five fields on a receipt, four — amount, recipient, date, even the security code — are text whoever makes the image can set. Only the operation number is written by the bank's own record. The security code looks like proof and ships on every receipt; it is text on the same image. **Treating it as proof is the trap the tool exists to close.** |
| Evidence label | SURFACE | The running build |
| Evidence link 1 | SURFACE | Open the app → `https://jdsaire.github.io/designops/work/yape-trust-verify/` |
| Evidence link 2 | SURFACE | Read the source → `https://github.com/jdsaire/designops/tree/main/work/yape-trust-verify` |

**Changes vs v3.0:** Card 1 rebuilt on technical merit — the title no longer encodes the rejected job-description argument; the body leads with React's actual guarantee (interface drawn from data); the reveal argues the stale-verdict risk, the honest vanilla contrast (this build's one real defect was a missed listener), the Angular scope-fit contrast (no superiority claim), and closes with the job-posting overlap as one line of corroboration, never the premise. Card 3 body rewritten for character density (172 chars vs 241; siblings run 165–194) with the film-set analogy carrying the staged/real boundary in plain terms; its reveal collapsed from two paragraphs (126 words) to one (89), with exactly one SIMULATED marker. Card 4 reveal renumbered to digits, all six. Card 2 body brushed with the proofreader analogy — one word-level change, nothing else.
**Provenance:** Card 1 reveal [SOURCED — build record: external-store mechanism, the missed-listener defect; Angular framing per prompt constraint — no fabricated claim]. Card 3 [SOURCED — app README, both lists; film-set framing is style, not fact]. Card 4 [SOURCED — TESTING.md scenarios 1–6]. Analogies [AUTHORED — technique per the approved style source; zero facts lifted from it].

---

## ACT 05 — The Dashboard

| Element | Layer | Copy (verbatim) |
|---|---|---|
| Eyebrow | SURFACE | Act 05 · The Dashboard |
| Verdict (H2) | SURFACE | The numbers a technical lead can verify at the source. |
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

**Changes vs v3.0:** verdict regenerated — reframed from a recruiting audience to the reader who would actually audit this work; everything else carries forward unchanged, including the derived tab's exclusion.

---

## ACT 06 — The Reflection

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
| Card 3 body | SURFACE | Gemini compiled fifteen app screenshots into one master flow file and out-synthesized NotebookLM on the CEO interview. Claude Code executed deployment prompts I authored as reusable skills — every run directed, reviewed, and mine. |
| Card 4 tag | SURFACE | The choice |
| Card 4 title | SURFACE | One problem, not a redesign |
| Card 4 body | SURFACE | Banking is too wide to enter everywhere at once. A short, focused study pointed at one real fraud mechanism — approached purely through front-end eyes, not as UX, redesign, or innovation theatre. |
| Sequel hint | SURFACE | The gap I did not close: this app checks a fabricated record. **The same check, against a bank's real one, is a backend conversation** — and the next thing I intend to be able to prove. |

**Changes vs v3.0:** Card 3 regenerated for disclosure specificity — Gemini named for the screenshot-to-flow-file work and the CEO-interview synthesis (where it out-performed NotebookLM); Claude Code named with the mechanism that proves "directed, not typed": deployment prompts the author wrote himself as reusable skills. Cowork and Claude for Chrome (planned, then dropped) cut as the lowest-value disclosure under the 40-word cap. Naming directed tools is disclosure of method, not authorship attribution — sole authorship is reinforced, not diluted ("prompts I authored," "every run … mine").
**Word-count compliance (cap 40):** Card 1 = 35 · Card 2 = 35 · Card 3 = 34 · Card 4 = 32 ✓
**Provenance:** Cards 1, 2, 4, verdict, sequel [PRINCIPAL — unchanged]. Card 3 [PRINCIPAL — the tools account, per explicit naming instruction].

---

## CONVERSION *(unchanged)*

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

## Suggested filter tags — future Main taxonomy *(NOT YET IMPLEMENTED — recommendation only)*

| Tag | Facet | Reason |
|---|---|---|
| **Banking** | INDUSTRY | The case's entire context — target sector, target employers, problem domain. |
| **Development** | FIELD | The declared purpose: frontend applied to app development, distinct from this site's design-led briefs. |
| **Cybersecurity** | FIELD | The differentiator — fraud, verification, and the demonstrated security-pattern vocabulary. |
| **Frontend Developer** | ROLE | The exact role this case targets and demonstrates. |

*Hero keywords sell the page; these tags route the visitor. Deliberately near-aligned, never identical.*

---

## Fact register

| Claim | Tier | Source |
|---|---|---|
| Yape scale, super-app scope, counterfeit market, code-vs-FAQ gap, benchmark trio | [SOURCED] | Dossier §2–§5 (unchanged from v3) |
| 45/45 assertions; 6 scenarios; 0 backends; 5 CI gates; 5 client controls; 3 endpoints | [SOURCED] | TESTING.md; completion report; README |
| React reads external stores through its supported mechanism; the one real defect was a missed listener | [SOURCED] | Build record (README architecture notes; completion report deviation §7) |
| Angular contrast = scope-fit only; no superiority or internals claim made | [AUTHORED — constrained] | Per prompt: no fabricated engineering claim |
| Under a week; zero lines typed by hand; no vibe coding | [PRINCIPAL] | Reflection account |
| Gemini: 15 screenshots → master flow file; outperformed NotebookLM on CEO interview | [PRINCIPAL] | Reflection account, named per instruction |
| Claude Code driven by author-written reusable deployment prompts | [PRINCIPAL] | Reflection account, named per instruction |
| Film-set, proofreader, and one-source-of-truth analogies | [AUTHORED] | Style technique per approved source; zero facts lifted from it |
| "4 min read" | [UNVERIFIED] | Inherited; re-verify at HTML fix against the longer page |

---

## Self-verification report

1. **Banned word 1 ("ledger") outside the frozen disclaimer:** 0 ✓
2. **Banned word 2 in brief copy:** 0 ✓
3. **Act 06 cards ≤40 words:** 35 / 35 / 34 / 32 ✓
4. **Act 04 card-body density ≤195 chars, all four:** Card 1 = 174 · Card 2 = 187 · Card 3 = 184 · Card 4 = 182 ✓ — no dash-bolted detail in Card 3 ✓
5. **Act 04 Card 3 reveal:** one paragraph, exactly one SIMULATED marker ✓
6. **Act 04 Card 4 reveal:** digits 1–6 ✓
7. **Build metrics before Act 05:** none ✓ (hero, lede, and short version carry no figure; "six scenarios" and "five fields" remain descriptive labels)
8. **Hero keywords:** Front-end ✓ Banking ✓ Verification excluded ✓ — 5 provisional, marked pending principal's pick ✓
9. **Third-person self-reference / podcast register:** zero ✓ (first person throughout; no dialogue, no host artifacts)
10. **Transcript fabrications:** the invented operation-number descriptor absent from copy ✓ · network-drop scenario absent ✓ · no invented amounts or US-context references ✓ · measured column unchanged from v3 ✓
