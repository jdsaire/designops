# Editorial_Strategy_JDSaire_v1_0

> **Provenance:** Drafted under the Wave 7 one-time sequencing exception — content authored against the Wave 6.1-approved enhancement spec, pending the actual Wave 6.2 build. Verify against the live site before external use. Sources: `luke-tobin-linkedin-interaction-sample.json` (cadence mechanics only — never subject matter), live `docs/parking-lot.md`, Brief 01/04 live copy, Gates 1–2 locked positioning. Gate persona: ex-McKinsey thought-leadership strategist. Scope: EN spec only; ES editorial line is a separate follow-up if ever wanted. Subjects are mined and logged, not written in bulk — posts get drafted just-in-time, matching the programme's own discipline.

---

## 1. Editorial thesis

Juan Diego's content is about **what strategy-to-execution governance actually looks like from inside the work** — the specific, verifiable mechanics of taking a decision to a shipped, tested product, told by someone who does every layer himself. Each post names a comfortable assumption professionals hold about building digital products, shows its real cost with a concrete artifact from his own record, and shows the way through it. The reader should finish thinking "this person's claims can be checked" — never "this person is selling."

## 2. Cadence mechanics (extracted from the Tobin sample — structure only)

- **Fragment rhythm:** short declarative sentences; frequent one-line paragraphs; a two-to-five-word line as a beat change ("Then it compounds.").
- **Pattern-interrupt arc:** (1) name a comfortable assumption, (2) show its real cost, (3) show the way through — with specifics, not principles.
- **Specificity carries confidence:** numbers, filenames, dates — never adjectives.
- **Question close:** one genuine question inviting the reader's own case; never a sales CTA.
- **Never borrowed:** the sample's subjects (beginner's mind, boardrooms), persona, and engagement-bait lines (repost/follow prompts) do not transfer.

## 3. Content pillars

1. **The Fraud & Trust Files** — what makes digital proof trustworthy or fakeable; the operational anatomy of verification. Source base: Brief 04 case research.
2. **Build Records** — honest accounts of building with AI direction: what it actually costs, what broke, what "under a week" really contains. Source base: Brief 04 Act 05, wave completion reports.
3. **Governance in the Small** — the unglamorous mechanics that keep systems truthful: staleness ledgers, badging, freeze rules, measured-vs-simulated segregation. Source base: parking lot, roadmap discipline.
4. **The Postmortem Drawer** — real, humbling technical near-misses and what a verification gap looks like from inside. Source base: PR-5 record and successors.
5. **Teaching Systems to Run Themselves** — knowledge transfer at scale: workshops, Communities of Practice, standards local teams can actually operate. Source base: LAP/ESAN/UTEC record.

## 4. Post subject log (mined; angle + source per entry)

| # | Subject | One-line angle | Source | Pillar |
|---|---------|----------------|--------|--------|
| 1 | Four of five fields are fakeable | A payment receipt looks like proof; only one field on it is written by the bank — the assumption that the rest are is the fraud's whole business model | Brief 04, Fields synthesis | 1 |
| 2 | The security code trap | The most official-looking element on a Yape receipt is text anyone can type — and it isn't in the public FAQ | Brief 04 Act copy; documented FAQ gap | 1 |
| 3 | The one-line import that killed a page | A file move made `nav.js` import a path one directory too shallow; the whole JS graph failed silently — and every verification pass missed it because none executed JS | parking lot, PR-5 root cause | 4 |
| 4 | The fastest thing I built was the one I thought I couldn't | New stack, new security discipline, tested build — under a week, zero lines typed by hand, every decision reviewed | Brief 04 Act 05 read line | 2 |
| 5 | A film set with one real lock | Simulated infrastructure badged SIMULATED, real client-side controls tested — why the two must never borrow credibility from each other | Brief 04 Card 3 | 3 |
| 6 | When strict AND dead-ends | The roadmap said "intersection"; with four cards, literal AND across chips returns nothing by the second click — faceted matching, and why specs meet reality | parking lot, logged tension | 3 |
| 7 | The 7-minute honesty pass | An inherited "4 min read" survived three copy versions until someone counted 1,517 words — small metadata is where credibility quietly leaks | parking lot, Brief 04 read-time entry | 3 |
| 8 | Never hand-write the Spanish | A staleness ledger for 135-key bilingual dictionaries: log the debt, translate once, on inspection — how bilingual sites rot and how to stop it | parking lot, stale-ES section | 3 |
| 9 | The 2.2 MB badge that said nothing | An asset named "build-in-progress" was a gradient; shipping the filename's promise would have cost 2.2 MB to communicate nothing — naming vs. meaning in design systems | parking lot, asset tension | 3 |
| 10 | A reconstructed chart, labeled as one | The effort Gantt is derived, not recorded — and the caption says so; what changes when portfolios label their reconstructions | parking lot, Brief 04 Act 03 entry | 3 |
| 11 | Five units, one standard | Aligning Finance, IT, Terminals, Commercial, and Reputation onto a single deliverable standard — what "alignment" costs in practice | LAP record (LinkedIn/CV locked facts) | 5 |
| 12 | 45 assertions or it didn't happen | The only portfolio claims a stranger can verify are the ones with a test suite attached — what that implies for how professionals present work | Brief 04 measured band | 2 |

## 5. Sample post (calibration artifact — Tobin cadence, own subject)

Subject #1 — the strongest available: concrete, protective, verifiable, and entirely his.

---

A payment receipt looks like proof.

That's the assumption an entire counter economy runs on.

In Peru, merchants take mobile payments all day and glance at a confirmation screen before handing over the goods. Amount, name, date, even a security code. It reads like a document.

It's an image.

Of the five fields on that receipt, four are text that whoever makes the image can set. The amount. The recipient. The date. Even the security code — the element that looks most official.

One field is different.

The operation number is written by the bank's own record. It's the only element on the screen the person holding the phone didn't produce.

I spent a research pass mapping this before writing a line of code. The finding shaped everything: don't teach merchants to read receipts harder. Build the check that reads the one field that can't lie.

So I did. Front-end verification, merchant-side, tested against forged amounts on real operation numbers. The test suite catches the fake and names it.

The lesson travels beyond payments.

Most verification effort goes into inspecting the parts of a document that are easiest to fake — because those are the parts designed to be looked at.

Ask what your proof anchors to.

What's a "proof" in your work that everyone checks — that can't actually be trusted?

---

*Calibration notes: pattern-interrupt at line 1–2; beat-change fragments ("It's an image." / "One field is different."); every claim sourced to Brief 04's published copy; zero adjective-claims; genuine question close; no repost/follow bait.*

## 6. Cadence & voice checklist (pre-publish, every post)

1. Opens by naming a comfortable assumption — not by announcing a topic.
2. At least three one-line paragraphs; no paragraph over three lines.
3. Every claim traces to a published brief, the parking lot, or the locked profile — nothing invented, nothing rounded.
4. Numbers and named artifacts present; adjectives-as-claims absent.
5. Cost shown before solution; solution shown as mechanism, not moral.
6. Closes with one genuine question; no CTA, no repost/follow bait, no motivational-poster line.
7. Nothing about wanting it, needing it, or how hard it was — intensity reads as rigor only.
8. Simulated material, if ever referenced, is named as simulated; Briefs 02/03 claims stay future-tense until real.
9. Publishing anything referencing Wave 6 presentation state waits for the real 6.2 splice (sequencing exception).

## 7. Operating rhythm

One post per week is sustainable from the subject log alone; the log currently holds 12 entries, and every future wave feeds it via the parking lot ("Wave 7 post subjects accumulate there throughout" — Roadmap v3). Drafting stays just-in-time: pick the subject, run the checklist, publish. No new strategy session needed until the log runs dry or the positioning changes at Gate-1-spec level.
