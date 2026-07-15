# Banking Selection Dossier — Brief 04
### Enhanced Business Case & Wave 1 Closing Artifact
**Prepared for:** Gate G1 governance review
**Status:** Recommendation pending principal approval
**Supersedes:** the Brief 04 Business Case (Wave 1, task 1.1 output)
**Date:** 15 July 2026
**Roadmap reference:** `Execution_Roadmap_v2_0.md` — Wave 1, task 1.3 output; gates Wave 4

---

## 1. Executive summary

The recommendation carried forward from the Business Case **stands, reaffirmed and strengthened**: a front-end-only **payment-confirmation trust and verification** express build, grounded in Peru's *"Yape falso"* fake-payment-screenshot fraud.

Four things changed in this closing pass:

1. **The problem statement sharpened.** Direct inspection of Yape's live P2P flow confirms the April 2025 *código de seguridad* is deployed and prominent on every receipt — and that Yape's own public anti-fraud guidance does not mention it. The mechanism is ahead of the documentation that would make merchants use it. [VERIFIED — live fetch, 15 Jul 2026]

2. **A sharper structural finding emerged.** The shareable receipt is a static image canvas stripped of interface chrome. Every field on it — amount, recipient, timestamp, checkmark, even the security code itself — is reproducible by a forger. The only element anchored to BCP's backend, and therefore not forgeable at the sender's end, is the **operation number**. Visual consistency between the in-app and exported receipt does not, on the sourced evidence, defeat forgery — because the forger reproduces the same visual.

3. **Yape's own institutional history supplies the strongest strategic anchor yet.** In Yape's early days, fraud pressure prompted internal calls to pause the product. Leadership refused, and instead ran an explicit **"fraud budget"** to keep the app live and protect user trust (ERA DIGITAL, 2026, 33:58). Payment trust is not an outside critique of Yape — it is a cost the institution has already chosen to pay.

4. **A build-ready reference asset now exists.** Appendix A extracts an approximate stylesheet and UI component dictionary — 4 color tokens, 15 screen states, 94 catalogued elements — directly from the flow-tree inspection. It is reference material for Wave 4, not a design proposal.

**The runner-up is unchanged** — an SME/micro-merchant finance-management case study — and loses for the same reason: a saturated space that does not exercise the security-pattern vocabulary the target role centres on.

**This dossier contains no UX proposal, no feature concept, and no innovation recommendation.** That exclusion is deliberate and is stated at §8.

---

## 2. Reconciliation ledger

Four independent bodies of evidence were cross-referenced: the Business Case, the Yape flow-tree inspection, the UX-to-frontend handoff notes, and the July 2026 CEO interview (ERA DIGITAL, 2026). Where figures conflict, each is stated with its own source and date. **No figure below has been averaged, merged, or reconciled by splitting a difference.**

### 2.1 Figure reconciliation

| Metric | Value A | Value B | Verdict |
|---|---|---|---|
| **User base** | 16.4M *monthly active users*, ≈82% of Peru's economically active population, 67 transactions/user/month, NPS 77 (Credicorp Q1 2026 earnings call, as reported May 2026) | ≈20M *registered users* in Peru; 22–23M including Bolivia (ERA DIGITAL, 2026, 04:01) | **Both stand — different metrics.** MAU ≠ registered base. Yape's own homepage states "más de 19 millones de yaperos" (Yape, n.d.-c) [VERIFIED live, 15 Jul 2026], sitting between the two and consistent with the registered-base reading. Use MAU for engagement claims, registered base for reach claims. Never interchange. |
| **NPS** | 77 (Credicorp Q1 2026) | 80 (cited as the cultural threshold; low-NPS products are pulled until fixed — ERA DIGITAL, 2026, 01:13:42) | **Both stand — different snapshots and different uses.** 77 is a measured quarterly disclosure; 80 is the operating standard the organisation holds itself to. The gap is not an error; it is the distance between target and current. |
| **Financial inclusion** | 5.7M people included since 2020 (Credicorp Q4 2024 investor release) | "over 7 million" unbanked Peruvians included; loans to over 6 million (ERA DIGITAL, 2026, 01:00:05) | **Both stand — chronological growth, ~18 months apart.** Present as a series, not a conflict. |
| **Cash share of transactions** | ≈60% (2019) → ≈31%, per BIS working-paper data | 95% (2013) → 64% (2025), per Credicorp Q3 2025 disclosure | 98% of transactions historically cash (ERA DIGITAL, 2026, 18:26) — **a founding-era framing figure, not a current measurement.** All three stand as distinct claims with distinct methodologies and dates. Do not present as a single trend line. [uncertain: no reconciling methodology is public] |
| **Marketing budget** | "Zero" customer-acquisition and marketing budget; growth entirely word-of-mouth (ERA DIGITAL, 2026, 01:57–02:05) | Budget "was not always zero" — after acquiring ~500,000 users/month through significant spend, the team switched the budget off and growth held unchanged | **RESOLVED — see §2.2.** |
| **Screen-state count** | "13 distinct screen states" (handoff report, §1) | 15 screen objects in the flow-tree dataset | **Minor internal inconsistency in project artefacts.** The dataset is authoritative: 15. The handoff report's own §5 refers to "Screen 15," confirming the executive-summary figure is a typo. Appendix A uses 15. |

### 2.2 The marketing-budget conflict — resolution [RESOLVED]

Two readings of the same interview conflict directly. The nuanced reading is adopted, per principal approval:

> **Yape operates today with effectively no customer-acquisition marketing budget. This was not always the case.** After the product reached scale — acquiring roughly 500,000 users per month through significant paid spend — the team ran a deliberate experiment and switched the budget off. The growth rate did not change. That result, not an original zero-budget doctrine, is what established the organic flywheel: users had become *hinchas* who performed acquisition themselves. The linguistic victory of *"yapear"* becoming a verb is the visible endpoint of that effect.

The flat "budget of zero" claim is therefore **true of the present state but misleading as history**. It is retained nowhere in this dossier as an unqualified statement. Flagged in §9.

### 2.3 Reinforcing evidence — the CEO interview

Four findings materially strengthen the recommendation. All are primary-sourced to the interview with timestamps.

**The fraud budget (33:58).** Early in Yape's life, security and fraud threats prompted internal calls to pause operations. Leadership instead adopted an explicit *fraud budget* — absorbing fraud losses as a cost of keeping the app live and protecting user trust. This is the single strongest anchor available: it establishes, from the institution's own account, that Yape has already priced payment trust as worth paying for. A case study on payment-confirmation trust is not proposing a concern Yape lacks; it is engaging a concern Yape has budgeted against since its founding.

**"No hacemos las cosas a la ligera" (01:15:31).** The fourth of Yape's four operating principles: obsessive perfection on crucial trust mechanisms like security. Speed never compromises trust. Corroborated across both readings of the interview.

**The simplicity mandate (09:15).** The chief risk of a Super App is cognitive overload; the team protects this by keeping the primary QR-scan and payment buttons clean and instantly accessible. This is a **constraint on Wave 4**, not an opportunity: any verification surface must not read as clutter added to the payment path. Recorded here so the build inherits it.

**"AI banker in your pocket" (01:06:34).** Just as smartphones put the bank in the pocket, conversational AI will put a personal banker there; Yape is investing accordingly. This is the anchor for the innovation/AI-native positioning the programme's Hermes-track roles require — available to Brief 04's narrative without any AI component being built.

One further note of institutional character, relevant to how the case study should be pitched rather than what it should contain: Yape was approved without a business case, the first such project in BCP's then-127-year history (ERA DIGITAL, 2026, 22:02), on the conviction that long-term survival required including the unbanked. And within Credicorp, digital ventures are explicitly framed as "speedboats" against BCP's "cruise ship" (01:17:22). An express, front-end-only build executed fast is culturally legible to this audience in a way a slow, comprehensive one is not.

### 2.4 The *código de seguridad* discrepancy [VERIFIED]

Confirmed by direct inspection of both the live application and Yape's live public documentation:

- **In the app:** every completed transfer produces a receipt carrying a prominent three-digit `CÓDIGO DE SEGURIDAD` (observed value "0 2 5"), rendered as three separated digit tiles with an information affordance, positioned between the optional message and the transaction-details table.
- **In the public FAQ:** Yape's "¿Cómo identifico un yapeo falso?" page (Yape, n.d.-a) [VERIFIED — fetched 15 Jul 2026] instructs users to verify by three means only — checking the **Movimientos** screen, using **"Mostrar saldo"**, and enabling **app notifications**. It does not mention the security code at all. It closes by warning against sites and apps that generate fake Yape screens.

**The finding:** the countermeasure is deployed in-app but absent from the public guidance that would teach merchants to look for it. A verification mechanism a merchant does not know to check is not a verification mechanism. This is a documented, citable gap — not an inference.

**Existing mitigation, recorded so Wave 4 does not duplicate it:** the same FAQ page directs merchants to **Yape Empresa** and its *Ayudantes* feature, which lets staff see the day's sales without access to the account balance or the ability to send. This already exists. Brief 04 must not re-propose it.

### 2.5 Structural finding — the shareable receipt

The flow-tree dataset documents a distinct fifteenth screen state, `YAPE_10_SHAREABLE_RECEIPT`: an exported proof-of-payment canvas that replicates the José Quiñones header and the receipt card while stripping the interface chrome and the "Más en Yape" promotional banner. The handoff report confirms the intent — the exported canvas is generated deliberately, kept small, and focused strictly on transactional proof.

The flow-tree's own analytical annotation reads: *"This structural consistency ensures that exported payment proofs look identical to the in-app screen, making it easier for merchants to spot counterfeit receipts."*

**This dossier records a tension with that annotation, on the sourced evidence.** Visual consistency between in-app and exported receipt is precisely the property a forger reproduces. The exported artefact is a static image; every field on it — `lbl_transfer_amount`, `lbl_recipient_name`, `lbl_transaction_timestamp`, `lbl_anti_fraud_security_code` — is text on a canvas. Fake-Yape tooling has iterated through multiple versions, auto-completing recipient names, scanning QR codes, and faking SMS confirmations. Fraud cases continued after the security code shipped (Infobae, 2025b).

The one field on the receipt that is **not** reproducible at the sender's end is `Nro. de operación` (observed: 23937025), because it is anchored to BCP's backend rather than rendered from sender-side input. The annotation is an analyst's interpretation and is treated as such; the structural point above is the finding this dossier carries to Gate G1.

### 2.6 Convergent validation

An independent reading of the Business Case, conducted separately from its authoring, arrived at the same four conclusions without prompting toward them: the trust-and-verification deficit as the core gap; the problem as live and unresolved despite the April 2025 code; the three-bank benchmark as correctly selected; and the SME/micro-merchant runner-up as correctly rejected for market saturation and weak security-vocabulary fit. It independently endorsed the DBS exclusion on comparability grounds and the front-end-only scope discipline. This is convergent validation of an existing conclusion, not new evidence — recorded because Gate G1 is a decision point and independent convergence is decision-relevant.

---

## 3. Landscape and gap — carried forward

The landscape analysis from the Business Case is carried forward without material revision. In summary:

**BCP and its Centro de InnovaCXión (CIX)** is a genuine solution-shipping unit, created in 2015, operating as a tribe of navigators/business innovators, design, and open innovation. It produced or incubated Cocos y Lucas, express *cartas fianza*, instant-credit web flows, digital account opening — and Yape.

**Yape** is the dominant daily-transaction wallet, now a Super App spanning utility payments, marketplace, credit, remittances, and transport top-ups. **Plin** is the interbank counter-wallet embedded in BBVA, Interbank, and Scotiabank apps. Peru remains comparatively cash-reliant but is digitising fast, with fast payments now the majority of retail cashless transactions following the central bank's interoperability mandate.

**The gap — a trust-and-verification deficit at the point of payment.** Peru's wallet boom outran its trust infrastructure. The signature failure mode is *"Yape falso"*: a fraudster shows a merchant a forged or app-generated payment-confirmation screenshot — or runs a cloned app mimicking Yape's confirmation screen and faking SMS — to take goods for a payment that never settles. Peru's national digital-security centre documented the method in an official alert (CNSD, 2024), noting the counterfeit app sold for S/10–20, rose in price with demand, shipped "VIP" premium tiers, and spread to Bolivia, Chile, and Colombia.

The harm concentrates on the client the inclusion story most celebrates: small merchants and independent workers. Reported cases include wholesale traders at Santa Anita losing more than S/3,000 to the scam, and more than 50 affected merchants at Lima's Gran Mercado Mayorista (Infobae, 2025a; La República, 2025a).

**What §2.3 and §2.4 add to this gap statement:**
- It is a gap Yape has already priced (the fraud budget) — so the case study engages an acknowledged institutional concern, not an invented one.
- It is a gap where the countermeasure exists but its public documentation does not — a specific, evidenced, addressable failure.
- It is a gap that visual receipt consistency does not close, because the forger reproduces the visual.

---

## 4. Benchmark — carried forward, unchanged

Three innovation-centre banks in Peru-comparable emerging markets. No bulge-bracket default. This selection is unchanged by the new evidence.

| Bank | Market | Why selected |
|---|---|---|
| **Nubank** | Brazil | Digital-native institution in a comparable emerging Latin-American market; globally renowned. Brazil's Pix rail suffers the identical archetype — the *golpe do comprovante falso* — and the ecosystem response (central-bank refund mechanism; courts ruling fake receipts constitute electronic fraud; client-side verification behaviour in-product) is directly instructive. |
| **Nequi / Bancolombia** | Colombia | The closest structural analogue to the CIX–BCP–Yape pattern: conceived inside Bancolombia, built greenfield, spun out in 2022. First Colombian institution to deploy mobile biometrics for authentication. A bank-incubated innovation unit owning the authentication-and-trust layer as signature competency. |
| **Attijariwafa Bank** | Morocco | Incumbent universal bank with a formal innovation apparatus (Wenov, WeLab, AI Center) in an emerging, cash-heavy, mobile-payments-nascent market. The test of whether the CIX model transfers outside Latin America. |

**DBS (Singapore) evaluated and rejected** — top-tier market maturity, scale, and regulatory context break the "reference for Peru" comparability test.

**Common thread:** in every comparable market, the innovation centre treats real-time, client-verifiable payment trust and authentication as a first-class product surface.

---

## 5. Recommendation — reaffirmed, pending Gate G1

**Recommended case study: a front-end-only payment-confirmation trust and verification express build**, motivated by Peru's *"Yape falso"* fake-payment-screenshot fraud.

The ranked comparison from the Business Case stands:

| Rank | Candidate problem space | JD-vocabulary fit | Interview-defensibility | Front-end-only feasibility |
|---|---|---|---|---|
| **1** | **Payment-confirmation trust & verification** | **Very high** — exercises REST consumption of a confirmation endpoint, Observer (real-time confirmation state), Singleton (session/verification service), unit tests on verification logic, CI, and the full TLS/mutual-auth/digital-certificate vocabulary | **Very high** — real, named, sourced national problem the target innovation centre actively works | **High** — self-contained client-side verification interface against a mock REST API |
| 2 | Micro-merchant / SME finance management | Medium — security-pattern vocabulary only weakly exercised | Medium — crowded, already solved | High |
| 3 | Inclusion onboarding for the newly-banked | Medium — leans on backend identity flows | Medium — hard to isolate as front-end-only; overlaps regulated KYC | Medium — risk of drifting into backend territory |

**Justification.**

- **Client impact.** It targets the client the inclusion story most celebrates and most exposes — the micro-merchant and independent worker — attacking a fraud that has cost market traders thousands of soles per incident and erodes the trust fast payments depend on.
- **Strategic fit, now materially stronger.** It sits on a frontier BCP's CIX actively works (the April 2025 code), that every benchmark peer treats as a first-class surface, and that Yape's own leadership has funded through an explicit fraud budget since the product's earliest days.
- **Role fit.** It is the only candidate that fully exercises the security-pattern half of the BCP Frontend job description — the differentiator of this role against a generic front-end post — while the dossier itself demonstrates the desk-research/benchmarking/insight-to-challenge method the BCP Design Research role names.
- **Innovation posture.** Verification and trust is a natural surface for the AI-native narrative the Hermes-track roles require, anchored to Yape's own stated direction, without any AI component being built.
- **Feasibility.** Genuinely small, front-end-only, one job done excellently.

**Runner-up: micro-merchant/SME finance management.** It lost on one line: a crowded, already-solved space that does not exercise the security-pattern vocabulary at the centre of the target role.

**This is a recommendation, not a decision.** Final selection belongs to the principal at Gate G1.

---

## 6. Appendix A — Approximate frontend stylesheet & component dictionary

> ### ⚠️ APPROXIMATE — NOT PIXEL-VERIFIED
> Every value below is an approximation derived from screen inspection, not from Yape's design system. Exact tokens, spacing, type scale, and easing curves are unknown and cannot be extracted from screen captures. A future design-system pass may correct any of these values; that pass is **out of scope** for this dossier and for Wave 4 as currently specified. These values are sufficient to build an approximate, valid, and internally consistent stylesheet. They are **reference material, not design decisions.**

**Source of record:** the flow-tree inspection dataset (15 screen states, 94 catalogued elements) and the accompanying handoff notes. Where the two disagree, the dataset is authoritative.

### A.1 Color tokens

| Token | Value | Role |
|---|---|---|
| `--brand-primary` | `#742C8A` | Purple. Structural navigation, secure headers, branding, loader spinners, active icons and titles. |
| `--action-primary` | `#00C2A0` | Teal. **Reserved exclusively** for high-priority actionable paths — the main "Yapear" button, active transfer buttons, share accents. |
| `--surface-modal` | `#FCE8FF` | Light lilac/pink. Modal body surface (observed on the contacts permission dialog). |
| `--surface-base` | `#FFFFFF` | White. Card bodies, content surfaces, receipt card. |
| `--state-disabled` | Grey (exact value unknown) | Muted grey. Buttons that fail a precondition render disabled **and ignore touch events**. |

**Secondary observed accents**, insufficiently sampled to tokenise: an accent yellow/orange (a "Renovar" badge on the profile screen; ~3% of the login screen), and a dark navy/grey used for section headers.

**Approximate color ratios by screen archetype** — useful as a composition sanity check, not as a spec:

| Archetype | Approximate ratio |
|---|---|
| Splash | ~95% purple / ~5% white |
| Login (PIN) | ~85% purple / ~12% white / ~3% yellow |
| Dashboard | ~50% white–light grey / ~30% purple / ~12% teal / ~8% icons |
| Scrim/loader states | ~75–80% dimmed scrim / ~18–20% white modal / ~2–5% purple |
| List/search screens | ~80% white / ~15% purple / ~5% light grey |
| Transfer entry | ~45–50% white / ~35–40% system keyboard grey / ~10–12% purple / teal when enabled |
| Receipt | ~60% purple / ~30% white card / ~8% dark grey metadata / ~2% teal |

### A.2 Typography

- **Monetary values are oversized and bold** — balances and transfer amounts dominate the visual hierarchy by scale. This is the single most consistent typographic rule across the flow.
- Bold headline + regular-weight subtitle pairing for screen intent.
- Section labels use uppercase sans-serif.
- Contact names: medium-weight dark grey; phone numbers: smaller, low-contrast regular grey.
- Recipient name on the transfer screen: prominent bold **purple** — a deliberate departure from the dark-grey body convention.
- Exact family, weights, and scale ratios are **unknown**. [uncertain]

### A.3 Component inventory

94 elements across 15 screen states, by type:

| Type | Count |
|---|---|
| `button` | 27 |
| `text` | 21 |
| `input_field` | 11 |
| `tab` | 11 |
| `card` | 8 |
| `icon` | 7 |
| `banner` | 4 |
| `backdrop` | 3 |
| `dialog` | 2 |

**Visual states observed:** `active` (92), `disabled` (2). The disabled state appears only on the transfer screen's action buttons prior to a valid amount — confirming disabled is a *precondition-gated* state, not a general-purpose one.

### A.4 Screen-state map

| # | `screen_id` | Name | Flow phase |
|---|---|---|---|
| 1 | `YAPE_01_SPLASH` | Splash Screen | App cold launch |
| 2 | `YAPE_02_LOGIN_PIN` | Secure Login PIN Entry | Authentication |
| 3 | `YAPE_02B_VALIDATION_LOADER` | Authentication State Loader | Authentication — verification |
| 4 | `YAPE_03_DASHBOARD` | Main Dashboard (default) | Core navigation & balance inspection |
| 5 | `YAPE_03B_DASHBOARD_REVEALED` | Dashboard (balance revealed + promo) | Ecosystem exploration |
| 6 | `YAPE_04_PROFILE_SETTINGS` | My Profile & Settings | Account management & security config |
| 7 | `YAPE_04_CONTACTS_PERMISSION` | Contacts Permission Soft-Ask | P2P — initialization |
| 8 | `YAPE_05A_CONTACT_DISCOVERY` | Contact Search + Discovery Tooltip | P2P — contact selection |
| 9 | `YAPE_05_CONTACT_LIST` | All Contacts Directory | P2P — contact selection |
| 10 | `YAPE_05_CONTACT_SEARCH_ACTIVE` | Active Contact Search + Keyboard | P2P — contact filtering |
| 11 | `YAPE_09_TRANSFER_INITIAL` | Transfer Amount Entry — initial | P2P — amount configuration |
| 12 | `YAPE_09_TRANSFER_READY` | Transfer Amount Entry — ready | P2P — amount configuration |
| 13 | `YAPE_09_TRANSFER_PROCESSING` | Transfer Processing Loader | P2P — execution |
| 14 | `YAPE_10_TRANSFER_RECEIPT` | In-App Transfer Receipt | P2P — post-execution |
| 15 | `YAPE_10_SHAREABLE_RECEIPT` | Exported Proof-of-Payment Canvas | External proof delivery |

### A.5 Interaction patterns

**The two-keyboard rule (critical).** The application swaps input methods by context:
- **Custom in-app secure numeric keypad** — login PIN, transfer amount. This is a deliberate security decision: it bypasses third-party keyboard sniffers on Android. The login keypad additionally uses a **shuffled digit order** (observed: `4 1 9 / 7 6 8 / 3 2 5`), defeating shoulder-surfing by position.
- **Native OS alphanumeric keyboard** — contact search, optional payment message.
- The transition between the two must animate smoothly; UI jumping and frame drops are called out as the implementation risk.

**The dark-scrim overlay.** Used for loaders, tooltips, and pop-ups. While active, background elements must be `pointer-events: none` and `aria-hidden="true"` to trap focus and prevent accidental interaction. On the authentication loader the scrim must **fully** block the UI — a fat-finger on the keypad as the request fires must not produce a duplicate validation call.

**The execution lockout.** Tapping "Yapear" initiates the ledger update; the screen layout must freeze instantly. A double-tap under network lag, or a system back-press mid-flight, risks duplicate charges or desync. This is the highest-severity interaction rule in the flow.

**Precondition gating.** The primary CTA is disabled until a value > 0 is detected. The entry state is `S/ 0` with the cursor auto-focused.

**Privacy-by-default.** The dashboard balance is masked (`S/ •••`) by default — users open the app in taxis and markets. Recipient names are truncated (`Sabina Don*`) so a bystander cannot read the full legal name. Phone numbers on the receipt are masked to the last three digits (`*** *** 794`).

**Soft-ask permissions.** Contact access is requested inside the app's own UI *before* the OS-level prompt fires, preserving the ability to ask again after a decline.

**Fuzzy search.** Contact search is "contains", not "starts with" — typing "mar" surfaces "Gianmarco". Requires a solid debounce.

**Touch targets.** Dismissal affordances specified at ≥ 44×44 px.

### A.6 Receipt field inventory — `YAPE_10_TRANSFER_RECEIPT`

The highest-value screen for Brief 04. Fields, verbatim from the dataset:

| `element_id` | Type | Observed copy |
|---|---|---|
| `btn_close_receipt` | button | — |
| `img_hero_background` | icon | "JOSÉ QUIÑONES" (engraved-style portrait, banknote motif) |
| `lbl_yapeaste_status` | text | "¡Yapeaste!" |
| `btn_share_action` | button | "Compartir" |
| `lbl_transfer_amount` | text | "S/ 1" |
| `lbl_recipient_name` | text | "Sabina Don*" |
| `lbl_transaction_timestamp` | text | "13 jul. 2026 \| 5:20 p.m." |
| `lbl_optional_message` | banner | "Prueba" |
| `lbl_anti_fraud_security_code` | text | "CÓDIGO DE SEGURIDAD 0 2 5" |
| `lbl_transaction_details_table` | card | "Nro. de celular: \*\*\* \*\*\* 794 \| Destino: Yape \| Nro. de operación: 23937025" |
| `promo_gaming_recarga` | card | "Más en Yape — Nuevo…" (stripped from the exported canvas) |

**Navigation:** forward to the system share sheet via `btn_share_action`; backward to `YAPE_03_DASHBOARD`.

**The `YAPE_10_SHAREABLE_RECEIPT` delta:** replicates the hero and receipt card; strips interface chrome and the promotional banner. One documented defect: the close ("X") button is retained in the exported image, which a clean document should not carry.

### A.7 Documented friction points

Recorded as observed facts about the reference application. **They are not a change proposal** — Brief 04 proposes no UX enhancement (§8).

- **Promotional interruption** — a credit ad pops immediately after the user attempts to view their balance, blocking the primary task.
- **Destructive proximity** — "Eliminar mi cuenta" sits in the same list style as benign profile commands, separated only by an icon, without spacing or high-contrast warning.
- **Language inconsistency** — the OS permission wrapper and its buttons render in English while the explanatory body text is Spanish, in a market served in Spanish.
- **Intrusive tooltip** — the "Nuevo número" discovery overlay blocks a user in a hurry at a register, costing an extra tap.
- **No quick-scroll index** — no A–Z slider on a contact list that may run to hundreds of entries.
- **No query highlighting** — a search for "mar" surfaces "Gianmarco" without bolding the matched substring.
- **Retained chrome in the export** — see A.6.

---

## 7. Bridge to Wave 4

This dossier is Wave 1's terminal artifact and Wave 4's opening input. Mapping onto `Execution_Roadmap_v2_0.md`:

### → Task 4.0 — author `P-CC-Banking-ExpressBuild.xml`

Pull from this dossier:
- **The confirmed problem statement** (§2.4, §2.5, §3) — the verification gap, stated with its evidence: a deployed code absent from public guidance; a static exported receipt whose every field is reproducible except the operation number.
- **The strategic anchors** (§2.3) — the fraud budget, "no hacemos las cosas a la ligera", and the speedboat framing, as the case study's justification spine.
- **The inherited constraint** (§2.3) — the simplicity mandate. Any verification surface must not read as clutter on the payment path.
- **The exclusion** (§2.4) — Yape Empresa / *Ayudantes* already exists. Do not re-propose it.

### → Task 4.1 — the build

Pull **Appendix A** in full as the styling and component reference: color tokens (A.1), typographic rules (A.2), the component inventory and state model (A.3), the screen map (A.4), and the interaction patterns (A.5). All values carry the APPROXIMATE label — the build inherits the label, not just the numbers.

The roadmap's "one job done excellently" constraint holds. The one job is the verification job.

### → Task 4.2 — testing protocol

Seed scenarios drawn directly from the confirmed evidence in this dossier. Each is a scenario, not a design:

1. **Field-level forgery discrimination** — for each receipt field in A.6, the protocol must state whether it is sender-reproducible or backend-anchored, and the build must be testable against that distinction. Only `Nro. de operación` is backend-anchored.
2. **The unknown-code case** — the FAQ gap (§2.4) means a merchant may not know the security code exists. The protocol must cover the case where the verifier does not know what to look for.
3. **Execution lockout** — double-tap under simulated network lag, and back-press mid-flight, must not produce a duplicate or a desync (A.5).
4. **Precondition gating** — the CTA must remain inert until the precondition is met (A.5).
5. **Scrim integrity** — background elements must be non-interactive and `aria-hidden` while a scrim is active (A.5).
6. **Privacy defaults** — masked balance, truncated recipient, masked phone must hold (A.5).

### → Task 4.3 — simulated front-end security

The dossier supplies the vocabulary the layer must visibly exercise, from the BCP Frontend job description: TLS 1.2, SSL, HTTPS, RSA Adaptive, mutual authentication, digital certificates — plus Singleton/Observer, REST consumption, unit testing, and CI. The two-keyboard rule and the shuffled keypad (A.5) are the reference application's own client-side security patterns and are the natural anchors for the simulated layer.

**The roadmap's provenance discipline is restated here as binding:** everything in this layer is badged `SIMULATED`. Simulated product metrics stay structurally segregated from measured build metrics. "I tested with users" must not appear anywhere.

### → Task 4.4 — elementary Brief 04 trio

§1, §3, §5 of this dossier are the narrative source. Evidence slots carry pending badges until 4.1 lands.

### What Wave 4 must NOT take from this dossier

- **§6 A.7 is not a backlog.** The documented friction points are observations about the reference application. Brief 04 fixes none of them.
- **No values in Appendix A are authoritative.** They are approximations sufficient to build against, and are labelled as such wherever they travel.
- **No UX or innovation proposal exists in this document** to carry forward. See §8.

---

## 8. Gate G1 — sign-off block

**This is a RECOMMENDATION pending the principal's approval.** It is not a decision.

**What approval unlocks:** Wave 4 — Brief 04, the express banking front-end build — tasks 4.0 through 4.4 per `Execution_Roadmap_v2_0.md`. Nothing in Wave 4 starts before this gate.

**What approval requires the principal to say yes to:**
1. The problem space: payment-confirmation trust and verification, grounded in *"Yape falso"*.
2. The Brief 04 slug, to be confirmed at sign-off.
3. The scope boundary: front-end-only, one job done excellently, no backend.

**And no to:** the SME/micro-merchant finance-management runner-up, and the inclusion-onboarding third candidate.

**Self-containment.** This dossier is approvable as it stands. It requires no further research round, no browser-automation pass, no additional screenshot capture, and no multi-tool consolidation. The tool passes originally specified for Wave 1 tasks 1.2 and 1.3 were bypassed by decision; their intended outputs — concrete benchmark evidence and a self-contained selection dossier — are delivered here.

**Scope declaration — binding.** This brief contains **no innovation proposal and no UX enhancement**, by the principal's explicit decision. Brief 04 exists to demonstrate front-end application development capability. The case study is a build, not a redesign. Appendix A is an extraction, not a design system. §6 A.7 is an observation log, not a backlog.

---

## 9. Caveats and data gaps

1. **No national aggregate for *"Yape falso"* losses exists.** The scam is folded into the broader *fraude informático* legal category. Quantified figures are per-incident, not nationwide. [uncertain]
2. **No public effectiveness metric for the April 2025 *código de seguridad*.** None has been released. Post-launch fraud reporting indicates it did not eliminate the problem, but the absence of a published metric is itself the state of the evidence — not a measured failure. [uncertain]
3. **The marketing-budget claim is contested between two readings of the same interview** (§2.2). The nuanced reading is adopted per principal approval. A reader working from the flat "zero budget" claim will find this dossier inconsistent with that reading; the resolution is stated at §2.2 and is deliberate.
4. **User, NPS, inclusion, and cash-share figures vary by source, metric definition, and date.** Each is stated with its own source. None has been merged. Readers must not interchange MAU with registered base (§2.1).
5. **Every value in Appendix A is an approximation.** No exact design token, spacing unit, type scale, easing curve, or grid was obtainable from screen inspection. The disabled-state grey has no captured hex value.
6. **The flow-tree's trust annotations are analyst interpretation**, not Yape's stated rationale. Where this dossier departs from one (§2.5), the departure is stated and evidenced.
7. **Screen-count inconsistency** between the handoff report's executive summary (13) and the dataset (15) is resolved in favour of the dataset (§2.1).
8. **The benchmark is deliberately narrow (three banks).** Depth over breadth, per the research brief. Not a claim that no other comparator exists.
9. **Timestamped interview citations are located approximately.** They derive from a working transcript annotation rather than an official transcript. The video is public and the timestamps are verifiable at source.
10. **Several figures carried forward from the Business Case lack a captured verifiable URL** — flagged individually in §10 as `[link unverified]`. They are reported as sourced in the originating research but should be re-verified before any public use.

---

## 10. References

*APA 7th edition. Links verified at the dates stated. Entries marked `[link unverified]` are reported with the source named in the originating research but without a captured URL — treat as pending verification before public use.*

### Primary — verified links

Centro Nacional de Seguridad Digital. (2024). *Alerta integrada de seguridad digital N° 216-2024-CNSD* [PDF]. Gobierno del Perú. https://cdn.www.gob.pe/uploads/document/file/6966846/6008531-alerta-integrada-de-seguridad-digital-216-2024-cnsd.pdf

ERA DIGITAL. (2026, July). *El negocio de Yape: 23+ millones de usuarios diarios. Con CEO, Raimundo Morales* [Video]. YouTube. https://www.youtube.com/watch?v=JLRGwC93Zm8

Infobae. (2024, August 25). *Estafas con "Yape falso": Descubre cómo funciona este fraude que simula transferencias de dinero*. https://www.infobae.com/peru/2024/08/25/estafas-con-yape-falso-descubre-como-funciona-este-fraude-que-simula-transferencias-de-dinero/

Infobae. (2025b, June 18). *Las estafas con "Yape falso" no paran: Estas son las cuatro maneras de prevenirlas*. https://www.infobae.com/peru/2025/06/18/siguen-las-estafas-con-yape-falso-estas-son-las-cuatro-maneras-de-prevenirlas/

La República. (2025b, April 13). *Yape: Estas son las dos razones más comunes por las que el nuevo código de seguridad no aparece en tus transferencias*. https://larepublica.pe/economia/2025/04/13/yape-estas-son-las-dos-razones-mas-comunes-por-las-que-el-nuevo-codigo-de-seguridad-no-aparece-en-tus-transferencias-nuevo-codigo-de-seguridad-bcp-billetera-digital-atmp-956956

La República. (2025c, July 3). *Más de 14 millones de usuarios en Perú usan billeteras digitales: ¿Por qué los peruanos prefieren usar Yape, Plin y otros aplicativos?* https://larepublica.pe/economia/2025/07/03/mas-de-14-millones-de-usuarios-en-peru-usan-billeteras-digitales-por-que-los-peruanos-prefieren-usar-yape-plin-y-otros-aplicativos-atmp-123657

Yape. (n.d.-a). *¿Cómo identifico un yapeo falso?* Centro de Ayuda Yape. Retrieved July 15, 2026, from https://www.yape.com.pe/preguntas-frecuentes/enviar-y-recibir-yapeos/como-identifico-un-yapeo-falso

Yape. (n.d.-b). *Centro de seguridad*. Retrieved July 15, 2026, from https://www.yape.com.pe/seguridad

Yape. (n.d.-c). *Yape, tu app para transferir dinero, pedir un préstamo y ¡mucho más!* Retrieved July 15, 2026, from https://www.yape.com.pe/

Banco de Crédito del Perú. (n.d.). *Centro de InnovaCXión BCP (CIX)*. Retrieved July 2026, from https://www.viabcp.com/cix-bcp

### Figure-conflict sources — pending link verification

Bank for International Settlements. (n.d.). *Working paper on fast payments and cash displacement in Peru*. `[link unverified — source named in originating research; specific paper number not captured]`

Credicorp Ltd. (2024, Q4). *Investor release: BCP and Yape financial inclusion figures*. `[link unverified — 5.7 million people included since 2020]`

Credicorp Ltd. (2025, Q3). *Disclosure: cash share of Peruvian transactions*. `[link unverified — 95% (2013) → 64% (2025)]`

Credicorp Ltd. (2026, Q1). *First-quarter 2026 earnings call* (A. Pérez-Reyes, CFO). `[link unverified — reported May 15, 2026; 16.4M MAU, ≈82% of EAP, 67 transactions/month, NPS 77]`

Infobae. (2025a, June 6). *Comerciantes mayoristas de Santa Anita pierden más de 3 mil soles por estafa con "falso Yape"*. `[link unverified — cited in originating research]`

La República. (2025a, June 5). *Más de 50 comerciantes afectados — Gran Mercado Mayorista de Lima*. `[link unverified — cited in originating research]`

Ministerio Público — Fiscalía de la Nación. (2025). *Boletín estadístico: delitos informáticos, enero–septiembre 2025*. `[link unverified — 21,371 cases of fraude informático, 68.9% of cyber-complaints]`

Asociación de Bancos del Perú (ASBANC). (n.d.). *Declaraciones de Nancy Figueroa, Defensora del Cliente Financiero*. `[link unverified — average loss ≈ S/2,450 following phone theft]`

Forbes Perú. (n.d.). *Interview with Alana Visconti Junge on CIX BCP innovation investment*. `[link unverified]`

Get on Board. (n.d.). *BCP Frontend Developer job posting*. `[link unverified — source of the verbatim JD security-pattern vocabulary]`

Business Wire. (2025, March 18). *Nubank named to Fast Company's Most Innovative Companies 2025*. `[link unverified]`

### Internal working artefacts

Saire, J. D. (2026a). *Brief 04 business case: Peruvian banking & fintech scan, international innovation-centre benchmark, and recommended problem statement* [Unpublished internal report]. Wave 1, task 1.1 output. Superseded by this dossier.

Saire, J. D. (2026b). *Yape master flow tree* [Unpublished UX inspection dataset]. 15 screen states, 94 catalogued elements.

Saire, J. D. (2026c, July 14). *UX to frontend handoff report: Yape core flow & P2P architecture* [Unpublished internal report].

Saire, J. D. (2026d). *Execution roadmap v2.0* [Unpublished internal governance document].

---

*End of dossier. Awaiting Gate G1 decision.*
