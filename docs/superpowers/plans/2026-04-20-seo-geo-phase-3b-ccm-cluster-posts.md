# SEO/GEO Phase 3B — CCM Cluster Posts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish three long-form CCM cluster posts under the CCM pillar, resolving the three Further Reading 404s from Phase 3A.

**Architecture:** Each post follows spec Section 4 anatomy: H1 + TL;DR box + answer-first H2 sections + inline FAQ + Key takeaways + back-to-pillar link + Last Reviewed footer. Each emits `Article` + `FAQPage` + `BreadcrumbList` via Phase 0 typed builders. Content grounded in CMS MLN 909188 (the CMS Chronic Care Management Services booklet). `Organization` author. No competitor names. No price claims beyond the documented $66 / $48 / $144 / $72 Medicare averages already on the pillar.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind. Builders: `buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema`.

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` — Section 4 (cluster post anatomy).

**Reference plan (pattern source):** `docs/superpowers/plans/2026-04-19-seo-geo-phase-2b-rpm-cluster-posts.md` — exact structural template; each Phase 3B task mirrors the equivalent Phase 2B task.

**Phase 3C (not this plan):** 5 CCM glossary entries (`cpt-99490`, `cpt-99439`, `cpt-99487`, `cpt-99489`, `chronic-care-management`) + internal linking audit across the CCM cluster.

---

## File structure

**Created**
- `app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx`
- `app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx`
- `app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx`

**Modified**
- `app/sitemap.ts` — 3 new URLs
- `public/llms.txt` — 3 new nested bullets under the CCM bullet

---

## Shared content standards

- TL;DR box, 5 bullets, purple-50 background, "In short" heading
- Answer-first H2 bodies (first sentence = direct answer to the implicit question)
- Inline CMS citations as `<a href="..." target="_blank" rel="noopener noreferrer" ...>anchor-text-is-the-claim</a>`
- Internal link minimums per post:
  - ≥ 3 to `/solutions/chronic-care-management` (pillar)
  - ≥ 1 to `/solutions/chronic-care-management/faq`
  - ≥ 1 to `/solutions/chronic-care-management/vs-in-house-care-coordinators`
  - ≥ 1 to `/case-studies/scaling-patient-engagement`
  - Cross-link between the 3 Phase 3B posts (≥ 1 to each sibling)
  - NO `/resources/glossary/*` yet (Phase 3C adds these)
- Last Reviewed footer with CMS MLN CCM booklet URL (`https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf`), link text `CMS MLN CCM Booklet`, dated 2026-04-20
- Hero gradient `from-[#e879f9] to-[#d946ef]`
- `Organization` author (via `buildArticleSchema`)
- Category-level framing only \u2014 no competitor names anywhere

### Unicode escape handling (CRITICAL)

The "no raw non-ASCII in source" constraint applies, but **JSX does NOT interpret `\uXXXX` sequences in JSX text content** (between `>` and `<`). A bare `\u2014` inside JSX markup renders as the literal string "u2014" after HTML strips the backslash. This bug shipped on the TCM and RPM comparison pages (Phase 1A/2A) and was caught during Phase 3A Task 5 review.

**Rules:**
- **Inside JavaScript string literals** (`faqs` constant answers, schema objects, `comparisonFaqs`, `metadata` descriptions, etc.): `\u2014` bare is FINE \u2014 JS parses the escape at build time.
- **Inside JSX text content** (between JSX tags): use `{'\u2014'}` JSX-expression form. Example:
  - ❌ `<li>Low, fixed \u2014 scales with volume</li>` (renders as "u2014")
  - ✅ `<li>Low, fixed {'\u2014'} scales with volume</li>` (renders as em-dash)
- Applies to every escape: `\u2014` (em-dash), `\u2013` (en-dash), `\u2019` (curly apostrophe), `\u007e` (tilde).
- All code snippets in this plan use the correct form for their context. Follow them verbatim.

---

## Task 1: Create CPT 99490 Billing Guide cluster post

**Files:**
- Create: `app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx`

Target queries: "how to bill CPT 99490", "CPT 99490 documentation", "CCM billing guide", "CPT 99490 vs 99487", "CCM add-on codes 99439 99489".

### Metadata (exact)

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/cpt-99490-billing-guide'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CPT 99490 Billing Guide: Chronic Care Management Requirements | Positive Check',
  description:
    'Complete guide to billing CPT 99490: the 20-minute clinical staff time threshold, who can furnish CCM services, care plan and consent documentation, how 99439/99487/99489 stack on top, and the common billing errors that cost practices revenue.',
  alternates: { canonical: '/solutions/chronic-care-management/cpt-99490-billing-guide' },
  openGraph: {
    title: 'CPT 99490 Billing Guide: Chronic Care Management Requirements',
    description:
      'The 20-minute clinical staff time threshold, eligibility, documentation, how 99439/99487/99489 stack, and common billing errors.',
    url: '/solutions/chronic-care-management/cpt-99490-billing-guide',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CPT 99490 billing guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPT 99490 Billing Guide: Chronic Care Management Requirements',
    description:
      'The 20-minute clinical staff time threshold, eligibility, documentation, and common billing errors.',
    images: [HERO_IMAGE],
  },
}
```

### Schema

Breadcrumb: Home → Solutions → Chronic Care Management → CPT 99490 Billing Guide.

Article schema:
```typescript
const article = buildArticleSchema({
  headline: 'CPT 99490 Billing Guide: Chronic Care Management Requirements',
  description: 'Complete guide to billing CPT 99490 for Chronic Care Management: the 20-minute clinical staff time threshold, who can furnish CCM services, care plan and consent documentation, how 99439/99487/99489 stack on top, and common billing errors.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-20',
  dateModified: '2026-04-20',
})
```

StructuredData ids: `cpt-99490-breadcrumb`, `cpt-99490-article`, `cpt-99490-faq`.

### H1
`"CPT 99490 Billing Guide: Chronic Care Management Requirements"`

### Hero eyebrow
`"Billing Guide"`

### Hero subtitle
`"The 20-minute clinical staff time threshold, who can furnish CCM services, documentation standards, how 99439/99487/99489 stack on top of 99490, and the common errors that cost practices revenue."`

### TL;DR box (5 bullets)

1. CPT 99490 reimburses the **first 20 minutes** of clinical staff time per calendar month for non-complex Chronic Care Management (\u007e$66 Medicare national average).
2. CCM requires **two or more chronic conditions** expected to last at least 12 months and that place the patient at significant risk of death, exacerbation, or decline.
3. The 20-minute threshold is **clinical staff time**, not just patient-facing time \u2014 care plan updates, medication management, and care coordination all count.
4. Add-on codes: **99439** (each additional 20 min non-complex, up to 2x/month, \u007e$48), **99487** (complex CCM 60 min, \u007e$144), **99489** (each additional 30 min complex, \u007e$72).
5. Patient **consent is required** (verbal or written, documented in the chart) and only one provider can bill CCM for a given patient per calendar month.

### H2 sections (write 2-3 paragraphs each, expanding these talking points)

**H2: What CPT 99490 covers**
- Definition: non-complex CCM \u2014 comprehensive care management for patients with 2+ chronic conditions
- 2026 Medicare national average \u007e$66 per patient per month (cite CMS MLN 909188)
- Billed once per calendar month per patient when the 20-minute threshold is met
- Rates update annually; check current CMS fee schedule before finalizing ROI
- Distinguishes from 99491 (physician-personally-furnished, 30 min, higher rate but less common)

**H2: Eligibility \u2014 the two-chronic-conditions requirement**
- Patient must have two or more chronic conditions expected to last at least 12 months (or until death)
- Conditions must place the patient at significant risk of death, acute exacerbation/decompensation, or functional decline
- Chronic conditions must be documented in the medical record
- Link to `/solutions/chronic-care-management/2-chronic-conditions-requirement` for full deep-dive
- Common qualifying combinations: hypertension + diabetes, COPD + heart failure, diabetes + CKD

**H2: The 20-minute clinical staff time threshold**
- CMS requires at least 20 cumulative minutes of clinical staff time on CCM activities per calendar month
- Time is cumulative across the month, not per-encounter
- 19 minutes total = 99490 is NOT billable that month
- What counts: care plan development/updates, medication management, patient/caregiver communication, coordination with other providers and community resources, review of test results
- What does NOT count: time spent during an E/M visit (billed separately), time not documented, time spent on non-CCM tasks
- Link to `/solutions/chronic-care-management/20-minutes-monthly-requirement` for the full deep-dive

**H2: Who can furnish CCM services**
- Physicians (any specialty) and non-physician practitioners (NPs, PAs, CNSs, CNMs)
- Clinical staff (RNs, LPNs, medical assistants) under general supervision of the billing provider
- Only ONE billing provider per patient per calendar month
- Multiple practice sites can coordinate, but only one bills CCM for that patient that month
- AI-powered calls support clinical staff but don\u2019t themselves count as clinical staff time \u2014 see the 20-minute requirement deep-dive

**H2: Required documentation elements**
Render as a bulleted list:
- Patient consent (verbal or written), including that only one provider bills CCM per month and that there is cost-sharing
- Comprehensive care plan accessible 24/7 to the care team
- Cumulative clinical staff time for the month
- Date, duration, and content of each CCM activity
- Descriptions of medication management, specialist coordination, patient communication
- Any care plan updates or escalations
- Staff identifier(s) who performed the work

**H2: How CPT 99439, 99487, and 99489 stack on 99490**
- 99439: add-on for each additional 20 minutes of non-complex CCM in the same month (\u007e$48), billable up to 2x per patient per month
- Maximum non-complex CCM in one month: 99490 + 99439 + 99439 = 60 cumulative minutes, \u007e$162 combined
- 99487: complex CCM \u2014 60 minutes and substantial care plan revision for patients with moderate-to-high complexity medical decision-making (\u007e$144). Replaces 99490, not additive.
- 99489: add-on for each additional 30 minutes of complex CCM in the same month (\u007e$72)
- A patient is billed as non-complex OR complex in a given month \u2014 not both
- Link to the Further Reading on chronic conditions for why some patients qualify for complex CCM

**H2: How AI-powered calls support CCM billing**
- AI wellness calls generate structured summaries of patient status, medication adherence, and symptom changes
- Clinical staff time spent reviewing AI summaries, updating care plans, and coordinating escalations DOES count toward the 20-minute threshold
- The AI call itself doesn\u2019t count as "clinical staff time" \u2014 but it makes the minutes that clinical staff do spend more productive
- Practical effect: the 20-minute threshold is easier to hit reliably across an enrolled population
- Link to `/solutions/chronic-care-management` (pillar) and `/solutions/chronic-care-management/vs-in-house-care-coordinators` (comparison)

**H2: Common CPT 99490 billing errors**
Render as a bulleted list:
- Billing when cumulative clinical staff time is below 20 minutes (most common error)
- Counting time spent during an E/M visit toward the CCM threshold (those minutes are already billed under the E/M)
- Missing or undocumented patient consent
- Two providers billing CCM for the same patient in the same month (only one can)
- Mixing non-complex (99490) and complex (99487) billing in the same month for the same patient
- Billing CCM for patients in inpatient, SNF, inpatient rehab, or hospice settings (excluded by CMS)
- Insufficient care plan documentation \u2014 the plan must be comprehensive, not a single diagnosis line

**H2: Combining CCM with RPM, TCM, and PCM**
- CMS permits CCM concurrent with Remote Patient Monitoring (RPM), Transitional Care Management (TCM), and Principal Care Management (PCM) for the same patient when services are distinct and documented separately
- Typical pattern: TCM during 30-day post-discharge window → transition stable patients into CCM for ongoing multi-condition coordination
- CCM + RPM stack well when remote device data is part of the patient\u2019s chronic-condition management
- PCM is for a single-condition focus \u2014 generally mutually exclusive with CCM for the same patient (CCM requires 2+ conditions)
- Do NOT count the same minute toward two programs
- Link to `/case-studies/scaling-patient-engagement` as a reference for multi-program deployment

### 5 FAQs (exact)

```typescript
const faqs = [
  {
    question: 'If my clinical staff spend exactly 20 minutes on CCM activities, can I bill 99490?',
    answer:
      '20 minutes exactly meets the threshold. CMS\u2019s rule is "at least 20 minutes" per calendar month. At 20 cumulative minutes of clinical staff time on CCM activities, 99490 is billable. At 19 minutes or less, it is not \u2014 no partial billing is permitted.',
  },
  {
    question: 'Does time spent face-to-face with the patient during an E/M visit count toward the 99490 threshold?',
    answer:
      'No. Time spent during an E/M visit is already captured by the E/M code and cannot also be counted toward the CCM 20-minute threshold. CCM time is specifically non-face-to-face care coordination. Time spent before or after the visit reviewing records, updating care plans, or coordinating specialists does count.',
  },
  {
    question: 'Can two different practices bill CCM for the same patient in the same month?',
    answer:
      'No. CMS permits only one provider to bill CCM codes for a given patient per calendar month, even if multiple practices are involved in that patient\u2019s care. Providers should coordinate with each other to determine who is the primary CCM billing provider, typically documented in the care plan.',
  },
  {
    question: 'What if a patient refuses consent for CCM?',
    answer:
      'CCM requires documented patient consent, so without consent the service cannot be billed. The consent conversation should cover what the program involves, the right to stop at any time, cost-sharing implications (there is a Medicare copay), and the single-provider-per-month rule. If a patient declines, the practice can continue providing care but bill standard E/M codes rather than CCM.',
  },
  {
    question: 'Can CCM be billed for patients in assisted living or independent living?',
    answer:
      'Yes. CMS defines community-dwelling patients as those in their home, assisted living, or similar setting \u2014 all eligible for CCM. Patients in skilled nursing facilities, inpatient rehab, or hospice are not eligible because the facility\u2019s per-diem payment already includes care coordination. See the CMS MLN CCM booklet for the full list of excluded settings.',
  },
]
```

### Key takeaways (4 bullets, gray-50 box)

- CPT 99490 reimburses the first 20 minutes of non-complex CCM clinical staff time per month at approximately $66.
- Time is cumulative across the calendar month; it must be non-face-to-face and specifically CCM-related.
- Add-on codes (99439 non-complex, 99487/99489 complex) stack \u2014 up to \u007e$162 combined for a high-time non-complex CCM month.
- Consent, care plan, and single-provider-per-month rules are what separate billable CCM from unbillable time.

### Back-to-pillar link + Last Reviewed footer

Same pattern as the CCM comparison page (from Phase 3A Task 5). Last Reviewed footer cites CMS MLN 909188 URL.

### Steps

- [ ] **Step 1:** `mkdir -p app/solutions/chronic-care-management/cpt-99490-billing-guide`
- [ ] **Step 2:** Create file using the Phase 2B cluster post pattern. Reference `app/solutions/remote-patient-monitoring/cpt-99457-billing-guide/page.tsx` for structure. Write 2-3 paragraphs of prose per H2 based on the talking points above. **For JSX text content: use `{'\uXXXX'}` expression form, not bare `\uXXXX`.**
- [ ] **Step 3:** Build + runtime check:
```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -sI http://localhost:3000/solutions/chronic-care-management/cpt-99490-billing-guide | head -1
curl -s http://localhost:3000/solutions/chronic-care-management/cpt-99490-billing-guide | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 5
curl -s http://localhost:3000/solutions/chronic-care-management/cpt-99490-billing-guide | grep -oE 'href="/solutions/chronic-care-management"' | wc -l
# Expected: >= 3
curl -s http://localhost:3000/solutions/chronic-care-management/cpt-99490-billing-guide | grep -oE 'u2014|u2013|u007e|u2019' | wc -l
# Expected: 0 (no broken JSX escapes rendering as literal text)
pkill -f "next dev"
```
- [ ] **Step 4:** Commit:
```bash
git add app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx
git commit -m "$(cat <<'EOF'
Add CPT 99490 billing guide CCM cluster post

First CCM cluster post. Covers the 20-minute clinical staff time
threshold, 2-chronic-conditions eligibility, who can furnish CCM,
documentation elements, how 99439/99487/99489 stack on 99490, how AI
calls support CCM billing, common billing errors, and combining with
RPM/TCM/PCM. Article + BreadcrumbList + FAQPage schemas. CMS MLN 909188
citations inline.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Create 2-Chronic-Conditions Requirement cluster post

**Files:**
- Create: `app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx`

Target queries: "CCM 2 chronic conditions", "does RPM require 2 conditions", "CCM vs PCM eligibility", "chronic conditions CCM", "CMS chronic conditions requirement".

### Metadata (exact)

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/2-chronic-conditions-requirement'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CCM\u2019s 2-Chronic-Conditions Requirement: Eligibility and Documentation | Positive Check',
  description:
    'Exact CMS rules for the two-chronic-conditions eligibility requirement that underpins Chronic Care Management billing. What qualifies, how CCM differs from RPM (1 condition) and PCM (1 condition), common qualifying combinations, and documentation expectations.',
  alternates: { canonical: '/solutions/chronic-care-management/2-chronic-conditions-requirement' },
  openGraph: {
    title: 'CCM 2-Chronic-Conditions Requirement: Eligibility and Documentation',
    description:
      'What qualifies, how CCM differs from RPM and PCM, common qualifying combinations, and documentation expectations.',
    url: '/solutions/chronic-care-management/2-chronic-conditions-requirement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CCM 2-chronic-conditions requirement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCM 2-Chronic-Conditions Requirement: Eligibility and Documentation',
    description:
      'What qualifies, how CCM differs from RPM and PCM, and documentation expectations.',
    images: [HERO_IMAGE],
  },
}
```

### Schema

Breadcrumb: Home → Solutions → Chronic Care Management → The 2-Chronic-Conditions Requirement.

Article headline: `"CCM\u2019s 2-Chronic-Conditions Requirement: Eligibility and Documentation"`

StructuredData ids: `ccm-conditions-breadcrumb`, `ccm-conditions-article`, `ccm-conditions-faq`.

### H1
`"CCM\u2019s 2-Chronic-Conditions Requirement: Eligibility and Documentation"`

### Hero eyebrow
`"Eligibility"`

### Hero subtitle
`"The CMS rule that defines Chronic Care Management eligibility: two or more chronic conditions expected to last at least 12 months. What qualifies, how CCM differs from RPM and PCM, and what documentation a practice needs at audit."`

### TL;DR box (5 bullets)

1. CCM requires **two or more chronic conditions** expected to last at least 12 months (or until death) and placing the patient at significant risk of death, exacerbation, or functional decline.
2. This is the single biggest eligibility distinction between CCM and other CMS programs: **RPM requires only one chronic condition**, and **PCM is specifically for a single high-risk condition**.
3. "Chronic condition" is broadly defined \u2014 diabetes, hypertension, COPD, heart failure, CKD, cancer, dementia, depression, and more all qualify.
4. Documentation must establish both the **two-condition count** and the **clinical rationale** for ongoing care coordination.
5. Patients with only one qualifying chronic condition should be evaluated for **RPM or PCM** rather than CCM.

### H2 sections

**H2: The exact CMS rule**
- CMS requires two or more chronic conditions expected to last at least 12 months, or until the death of the patient, that place the patient at significant risk of death, acute exacerbation/decompensation, or functional decline
- The definition comes from the CMS Medicare Physician Fee Schedule and the CMS MLN 909188 booklet
- Cite the booklet inline: `<a href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf" target="_blank" rel="noopener noreferrer">CMS MLN 909188 CCM Services booklet</a>`
- The two conditions must be documented in the medical record (diagnosis codes alone are insufficient without supporting clinical notes)

**H2: What counts as a "chronic condition"**
Render as structured list with examples:
- Cardiovascular: hypertension, heart failure, coronary artery disease, atrial fibrillation
- Endocrine/metabolic: diabetes (T1 or T2), obesity (when medically managed), thyroid disease
- Pulmonary: COPD, asthma, pulmonary fibrosis, sleep apnea
- Renal: chronic kidney disease (any stage), end-stage renal disease
- Oncology: cancer (during active treatment or survivorship follow-up)
- Neurological/cognitive: dementia, Parkinson\u2019s, multiple sclerosis, stroke history
- Behavioral: major depression, anxiety disorders, bipolar disorder
- Gastrointestinal: inflammatory bowel disease, cirrhosis, chronic pancreatitis
- Musculoskeletal: rheumatoid arthritis, osteoporosis with fracture history
- CMS does not publish a closed list \u2014 physicians make the clinical determination based on the duration + risk criteria

**H2: How CCM differs from RPM and PCM on eligibility**
- **CCM:** 2+ chronic conditions, ongoing coordination, either non-complex (99490) or complex (99487) tracks
- **RPM:** 1+ chronic condition where physiologic data informs care (CPT 99453/99454/99457/99458)
- **PCM:** 1 high-risk chronic condition requiring intensive focus (CPT 99424\u201399427)
- Same patient CAN be enrolled in RPM + CCM concurrently if distinct services are documented
- PCM and CCM are generally mutually exclusive for the same patient month (by CMS intent \u2014 PCM focuses on one condition, CCM manages multiple)
- Link to `/solutions/remote-patient-monitoring` for the RPM comparison

**H2: Common qualifying combinations**
Render as structured bullets (focus on the high-volume combinations providers see in practice):
- Hypertension + Diabetes \u2014 the most common CCM combination; highly manageable with regular touchpoints
- COPD + Heart Failure \u2014 both exacerbation-prone; structured monitoring prevents hospitalizations
- Diabetes + CKD \u2014 medication management is complex; coordination across specialists is critical
- Dementia + Any medical chronic condition \u2014 caregiver coordination and medication management drive value
- Depression + Chronic pain \u2014 behavioral health integration with medical care
- Heart failure + Diabetes \u2014 fluid management and glycemic control are intertwined
- Any cancer + metabolic/cardiovascular comorbidity \u2014 treatment side-effect management

**H2: Documentation that establishes eligibility**
Render as a list:
- Current problem list includes at least two qualifying chronic conditions
- Each condition has supporting clinical documentation (recent visit notes, lab results, imaging, or specialist correspondence)
- Expected duration clearly implies 12+ months (either by nature of the condition or by progression documented)
- Risk statement in the CCM care plan: why ongoing coordination is clinically necessary for this specific patient
- Patient consent to CCM services documented before billing begins
- Care plan explicitly references the qualifying conditions

**H2: Edge cases and gray zones**
- Patient with one active chronic condition + a resolved or controlled condition \u2014 may not qualify if the second condition is truly quiescent
- Newly diagnosed condition \u2014 CCM eligibility starts when the "expected to last 12+ months" criterion is met (typically immediately for conditions like diabetes, hypertension, CHF, COPD)
- Functional decline alone without a clinical chronic condition label \u2014 not sufficient; frailty must be tied to chronic diagnoses
- Mental health conditions as one of the two \u2014 CMS permits this explicitly when appropriately documented
- Substance use disorders \u2014 qualify when ongoing management is clinically indicated

**H2: When the patient doesn\u2019t meet the 2-condition threshold**
- Single chronic condition with actionable physiologic data \u2014 consider RPM (CPT 99453/99454/99457/99458)
- Single high-risk chronic condition requiring focused management \u2014 consider PCM (CPT 99424\u201399427)
- Neither CCM nor RPM nor PCM appropriate \u2014 standard E/M care coordination
- Document the clinical rationale for whichever program is chosen
- Link to `/solutions/chronic-care-management/cpt-99490-billing-guide` and `/solutions/chronic-care-management/faq`

**H2: How AI-powered engagement supports 2-condition CCM patients**
- Patients with 2+ chronic conditions typically have 3\u20137 medications and multiple specialist touchpoints per year
- AI wellness calls monitor medication adherence across conditions, catch symptom changes, and flag interactions
- Structured summaries help clinical staff update care plans efficiently \u2014 covering both conditions without siloing
- Example: a diabetes + hypertension patient whose AI call flags a missed metformin dose AND a home BP reading > 150/95 triggers a single care-plan update rather than two disconnected follow-ups
- Link to `/solutions/chronic-care-management` (pillar) and `/solutions/chronic-care-management/vs-in-house-care-coordinators` (comparison)

### 5 FAQs (exact)

```typescript
const faqs = [
  {
    question: 'Does a single worsening chronic condition count as two for CCM eligibility?',
    answer:
      'No. CMS requires two distinct chronic conditions, not two stages or complications of the same condition. For example, Type 2 diabetes with neuropathy is still one condition for CCM purposes \u2014 the diabetes and its complication are part of the same clinical entity. Adding a separate qualifying condition (hypertension, depression, CKD, etc.) is what creates CCM eligibility.',
  },
  {
    question: 'Can a behavioral health condition serve as one of the two chronic conditions?',
    answer:
      'Yes. CMS explicitly permits mental health conditions (major depression, anxiety disorders, bipolar disorder, substance use disorders, etc.) to count toward CCM eligibility when they meet the 12-month-duration and significant-risk criteria. Many high-value CCM programs pair behavioral health with a medical chronic condition to support whole-person care.',
  },
  {
    question: 'What if a patient\u2019s second chronic condition is newly diagnosed?',
    answer:
      'A newly diagnosed condition qualifies when the clinician documents it as expected to last 12+ months \u2014 which is true of most chronic conditions at diagnosis (diabetes, hypertension, COPD, CHF, depression). The patient becomes CCM-eligible once the second qualifying diagnosis is documented in the record along with clinical rationale for ongoing care coordination.',
  },
  {
    question: 'Can a patient be enrolled in both RPM and CCM based on overlapping conditions?',
    answer:
      'Yes. CMS permits RPM and CCM concurrently for the same patient when the services are distinct and documented separately. A common pattern: a patient with hypertension and diabetes has RPM covering their home BP readings and glucose transmissions, while CCM covers broader care plan coordination, specialist communication, and medication management beyond what RPM captures.',
  },
  {
    question: 'Does the diagnosis coding need to match specific ICD-10 codes for CCM?',
    answer:
      'CMS does not publish a closed list of qualifying ICD-10 codes. The clinical determination rests on the physician: does this condition meet the duration (12+ months) and risk (death, exacerbation, or functional decline) criteria? Document the clinical reasoning in the CCM care plan and support it with problem-list entries, recent notes, labs, or specialist correspondence as appropriate.',
  },
]
```

### Key takeaways

- CCM requires two or more chronic conditions lasting 12+ months and placing the patient at significant risk.
- The criteria are clinical \u2014 CMS does not publish a closed list of qualifying conditions.
- RPM needs only one chronic condition; PCM focuses on a single high-risk condition; CCM is for multi-condition coordination.
- Documentation of both the conditions and the clinical rationale is what makes CCM billable at audit.

### Back-to-pillar + Last Reviewed footer (same pattern).

### Internal link minimums (verify after writing)

- ≥ 3 to `/solutions/chronic-care-management`
- ≥ 1 to `/solutions/chronic-care-management/cpt-99490-billing-guide`
- ≥ 1 to `/solutions/chronic-care-management/20-minutes-monthly-requirement`
- ≥ 1 to `/solutions/chronic-care-management/faq`
- ≥ 1 to `/solutions/remote-patient-monitoring` (for the RPM-vs-CCM eligibility contrast)
- ≥ 1 to `/case-studies/scaling-patient-engagement`

### Steps

- [ ] **Step 1:** `mkdir -p app/solutions/chronic-care-management/2-chronic-conditions-requirement`
- [ ] **Step 2:** Create file following the cluster post pattern. 8 H2 sections, each 2-3 paragraphs expanding talking points with CMS MLN 909188 citations inline. **Use `{'\uXXXX'}` in JSX text.**
- [ ] **Step 3:** Build + runtime check (same shape as Task 1, substituting the new URL).
- [ ] **Step 4:** Commit:
```bash
git add app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx
git commit -m "$(cat <<'EOF'
Add CCM 2-chronic-conditions requirement cluster post

Second CCM cluster post. Covers the CMS eligibility rule underpinning
CCM billing: the 12+ month duration and significant-risk criteria,
what counts as a chronic condition, how CCM differs from RPM (1
condition) and PCM (single-condition focus), common qualifying
combinations, documentation standards, edge cases, and how AI-powered
engagement supports multi-condition patients. Article + BreadcrumbList
+ FAQPage schemas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Create 20-Minutes-Monthly Requirement cluster post

**Files:**
- Create: `app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx`

Target queries: "CCM 20 minutes requirement", "what counts as CCM time", "CCM clinical staff time documentation", "CCM time tracking", "CCM non-face-to-face time".

### Metadata (exact)

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/20-minutes-monthly-requirement'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CCM\u2019s 20-Minutes-Per-Month Requirement: What Counts and How to Track It | Positive Check',
  description:
    'Exact CMS rules for the 20-minute clinical staff time requirement underpinning CPT 99490. What activities count, what doesn\u2019t, who can perform the work, documentation standards, and common pitfalls that make billed time unbillable at audit.',
  alternates: { canonical: '/solutions/chronic-care-management/20-minutes-monthly-requirement' },
  openGraph: {
    title: 'CCM 20-Minutes-Per-Month Requirement: What Counts and How to Track It',
    description:
      'What activities count toward the CCM time threshold, what doesn\u2019t, documentation standards, and common billing pitfalls.',
    url: '/solutions/chronic-care-management/20-minutes-monthly-requirement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CCM 20-minute monthly requirement' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCM 20-Minutes-Per-Month Requirement: What Counts and How to Track It',
    description:
      'What activities count toward CCM time, what doesn\u2019t, documentation standards, and common pitfalls.',
    images: [HERO_IMAGE],
  },
}
```

### Schema

Breadcrumb: Home → Solutions → Chronic Care Management → The 20-Minute Monthly Requirement.

Article headline: `"CCM\u2019s 20-Minutes-Per-Month Requirement: What Counts and How to Track It"`

StructuredData ids: `ccm-20min-breadcrumb`, `ccm-20min-article`, `ccm-20min-faq`.

### H1
`"CCM\u2019s 20-Minutes-Per-Month Requirement: What Counts and How to Track It"`

### Hero eyebrow
`"Workflow"`

### Hero subtitle
`"The CMS rule that turns clinical staff effort into billable CCM encounters: what activities count toward the 20-minute threshold, what doesn\u2019t, and the documentation discipline that protects the bill at audit."`

### TL;DR box (5 bullets)

1. CPT 99490 requires at least **20 cumulative minutes of clinical staff time** on CCM activities per calendar month \u2014 it\u2019s a time threshold, not an encounter threshold.
2. Time is **non-face-to-face** \u2014 minutes during an E/M visit are billed under the E/M code, not CCM.
3. Activities that count: care plan development/updates, medication management, patient and caregiver communication, specialist coordination, review of test results, community resource coordination.
4. Activities that do NOT count: E/M visit time, time not documented, time on non-CCM tasks (general office work, training), work performed by staff not under the billing provider\u2019s general supervision.
5. The threshold is **cumulative across the month** \u2014 multiple 5-minute interactions can combine; there\u2019s no minimum per-encounter duration.

### H2 sections

**H2: What the 20-minute rule actually says**
- CPT 99490 reimburses at least 20 minutes of clinical staff time per calendar month
- Clinical staff means RNs, LPNs, medical assistants, or qualifying clinical personnel under general supervision
- Time is cumulative across the month (not per-encounter, not per-week, not per-shift)
- Time must be documented with date, duration, activity, and staff identifier
- Cite CMS MLN 909188 inline

**H2: What counts as CCM activity time**
Render as bulleted list:
- Developing, implementing, or updating the patient\u2019s comprehensive care plan
- Medication management and reconciliation (reviewing med lists, checking for interactions, adjusting doses, coordinating refills)
- Communication with the patient or caregiver about care plan, symptoms, or coordination
- Communication with other providers involved in the patient\u2019s care (specialists, home health, pharmacies)
- Review of test results, imaging, or specialist notes relevant to care coordination
- Coordination with community resources (meals on wheels, transportation, social services)
- Documentation of CCM activities (writing the note that captures the above)

**H2: What doesn\u2019t count**
Render as bulleted list:
- Time during an E/M visit (already captured by the E/M code)
- Time spent on non-CCM tasks (general office work, training, administrative tasks)
- Time by staff not meeting CMS\u2019s "clinical staff" definition or not under the billing provider\u2019s general supervision
- Time not documented (if it\u2019s not in the record, it didn\u2019t happen for audit purposes)
- Time spent on a patient who doesn\u2019t meet CCM eligibility (no documented consent, fewer than 2 chronic conditions)
- Time billed under a different code (RPM 99457 minutes are separate; don\u2019t double-count)

**H2: Who\u2019s time can count**
- Physicians, non-physician practitioners (NPs, PAs, CNSs, CNMs)
- Clinical staff (RNs, LPNs, certain medical assistants) under general supervision of the billing provider
- "Incident to" rules apply \u2014 clinical staff must be employed or contracted by the billing provider\u2019s practice
- Staff at a different practice or unaffiliated facility generally don\u2019t count unless there\u2019s a contractual arrangement
- Document the staff member who performed each CCM activity (name or unique identifier)

**H2: Tracking time accurately**
- Time-tracking tools can be simple (paper log, EHR template) or automated
- Round to the nearest minute, not to 5- or 15-minute blocks
- Start and stop times per activity are ideal but not always required
- Cumulative monthly total is what matters for billing
- Separate patient-specific time from non-patient-specific time (staff meetings, training, etc.)
- Link to `/solutions/chronic-care-management/cpt-99490-billing-guide` for billing mechanics

**H2: How AI-powered calls interact with the 20-minute rule**
- The AI call itself doesn\u2019t count as clinical staff time \u2014 no human is conducting the call
- Clinical staff time spent reviewing the AI call summary DOES count
- Time spent acting on flagged concerns (contacting the patient, updating the care plan, coordinating with specialists) counts
- Time documenting the outcome of the review counts
- Practical effect: an AI call that generates a 2-minute-review summary frees clinical staff from the data-gathering portion of the work \u2014 their 20 minutes are concentrated on decisions and documentation
- Enrolled CCM patients at scale become much easier to keep at or above the 20-minute threshold
- Link to `/solutions/chronic-care-management` (pillar) and `/solutions/chronic-care-management/vs-in-house-care-coordinators`

**H2: Common documentation pitfalls**
Render as bulleted list:
- Tracking time by activity but not by patient (CCM time must be patient-specific)
- Rolling up time in 15-minute blocks and rounding inconsistently
- Documenting "reviewed chart" without specifying what was reviewed or why it\u2019s CCM-related
- Failing to capture staff identifier for each time entry
- Including E/M visit time in the CCM total
- Billing CCM for a month with < 20 documented minutes (most common error)
- Not reconciling time tracking with the care plan updates actually made

**H2: Scaling time discipline across a population**
- Small enrolled populations (< 50 patients): manual tracking works
- Mid-size populations (50-200): EHR templates and dashboards become essential
- Large populations (200+): automation generates structured summaries that make each clinical review efficient enough to hit the threshold consistently
- Hit-rate benchmark: high-performing CCM programs bill 99490 for 80\u201390% of enrolled patients each month; low-performing programs miss 30\u201350% of enrolled patients due to time-tracking or threshold failures
- Link to `/case-studies/scaling-patient-engagement`

### 5 FAQs (exact)

```typescript
const faqs = [
  {
    question: 'Does time spent writing a CCM progress note count toward the 20-minute threshold?',
    answer:
      'Yes. Documentation of CCM activities is itself part of CCM work. Writing the monthly CCM note that captures care plan updates, medication changes, and coordination activities counts toward the 20-minute threshold. What doesn\u2019t count is documentation of non-CCM activities (E/M visit notes, general chart maintenance, etc.).',
  },
  {
    question: 'If I spend 15 minutes on CCM and 10 minutes on an E/M visit for the same patient in the same month, can I bill 99490?',
    answer:
      'No. The 10 minutes of E/M time is captured by the E/M code and cannot be double-counted. Only the 15 CCM-specific minutes apply, which is below the 99490 threshold. To bill 99490 that month, you\u2019d need at least 5 more non-face-to-face CCM minutes on that patient.',
  },
  {
    question: 'Can time spent on a single patient be split across multiple staff members in the same month?',
    answer:
      'Yes. Cumulative time across multiple clinical staff members under the billing provider\u2019s supervision all counts toward the 20-minute threshold. An RN spending 8 minutes on medication reconciliation, an LPN spending 6 minutes on a caregiver call, and a medical assistant spending 7 minutes on specialist coordination together equal 21 minutes \u2014 billable as 99490.',
  },
  {
    question: 'Does coordination with the patient\u2019s pharmacy count toward CCM time?',
    answer:
      'Yes, when the coordination is clinically relevant to the patient\u2019s care plan. Calling the pharmacy to reconcile an insulin refill, verify a new prescription was received, or clarify a dosing question all count as medication management activities. Routine administrative tasks (pharmacy billing inquiries, benefits verification) do not.',
  },
  {
    question: 'How do I handle months where the patient needed less than 20 minutes of coordination?',
    answer:
      'If cumulative CCM time for a patient is below 20 minutes in a calendar month, 99490 is not billable that month. This is a normal part of running a CCM program \u2014 some months a patient is stable and needs little coordination. Do not force time-tracking to reach 20 minutes; document what actually happened. Over time, the enrolled population averages well above 20 minutes across the month because most CCM-eligible patients have active coordination needs.',
  },
]
```

### Key takeaways

- The 20-minute threshold is cumulative clinical staff time per calendar month \u2014 non-face-to-face, patient-specific, documented.
- What counts: care plan work, medication management, patient/caregiver/specialist communication, results review, resource coordination, documentation of the above.
- What doesn\u2019t count: E/M visit time, undocumented time, non-CCM tasks, time by staff outside the billing provider\u2019s supervision.
- AI-powered calls don\u2019t count directly but concentrate clinical staff time on decisions and documentation, making the threshold easier to hit reliably.

### Back-to-pillar + Last Reviewed footer (same pattern).

### Internal link minimums

- ≥ 3 to `/solutions/chronic-care-management`
- ≥ 1 to `/solutions/chronic-care-management/cpt-99490-billing-guide`
- ≥ 1 to `/solutions/chronic-care-management/2-chronic-conditions-requirement`
- ≥ 1 to `/solutions/chronic-care-management/faq`
- ≥ 1 to `/solutions/chronic-care-management/vs-in-house-care-coordinators`
- ≥ 1 to `/case-studies/scaling-patient-engagement`

### Steps

- [ ] **Step 1:** `mkdir -p app/solutions/chronic-care-management/20-minutes-monthly-requirement`
- [ ] **Step 2:** Create file following the cluster post pattern. **Use `{'\uXXXX'}` in JSX text.**
- [ ] **Step 3:** Build + runtime check (same shape as Task 1, substituting the new URL).
- [ ] **Step 4:** Commit:
```bash
git add app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx
git commit -m "$(cat <<'EOF'
Add CCM 20-minute monthly requirement cluster post

Third CCM cluster post. Covers the CMS clinical staff time rule
underpinning CPT 99490 billing: what activities count (care plan,
medication management, patient communication, specialist coordination,
documentation), what doesn't (E/M visit time, undocumented time,
non-CCM tasks), who's time counts (clinical staff under general
supervision), time tracking standards, how AI-powered calls interact
with the rule, documentation pitfalls, and scaling discipline across
an enrolled population. Article + BreadcrumbList + FAQPage schemas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Register 3 URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

### Step 1: Sitemap

Find the entry `{ path: "/solutions/chronic-care-management/faq", ... }` in `app/sitemap.ts` (added in Phase 3A Task 6) and insert 3 new entries IMMEDIATELY AFTER it (the existing `/vs-in-house-care-coordinators` entry stays where it is, after the 3 new ones):

```typescript
  { path: "/solutions/chronic-care-management/cpt-99490-billing-guide", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/chronic-care-management/2-chronic-conditions-requirement", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/chronic-care-management/20-minutes-monthly-requirement", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
```

### Step 2: llms.txt

Find the CCM section (currently a parent bullet + 2 nested sub-bullets for faq + vs-in-house, added in Phase 3A Task 6). Replace the ENTIRE block with:

```
- [Chronic Care Management](https://positivecheck.com/solutions/chronic-care-management): Daily patient touchpoints supporting CCM documentation and care plan follow-up.
  - [CCM FAQ](https://positivecheck.com/solutions/chronic-care-management/faq): CPT 99490/99439/99487/99489 billing, 2-chronic-conditions rule, 20-minute threshold, documentation, HIPAA.
  - [AI-powered CCM vs. in-house care coordinators](https://positivecheck.com/solutions/chronic-care-management/vs-in-house-care-coordinators): Category-level comparison with six-dimension tradeoff table.
  - [CPT 99490 billing guide](https://positivecheck.com/solutions/chronic-care-management/cpt-99490-billing-guide): 20-minute clinical staff time threshold, eligibility, documentation, how 99439/99487/99489 stack, common errors.
  - [CCM 2-chronic-conditions requirement](https://positivecheck.com/solutions/chronic-care-management/2-chronic-conditions-requirement): CMS eligibility rule, qualifying combinations, documentation, how CCM differs from RPM and PCM.
  - [CCM 20-minute monthly requirement](https://positivecheck.com/solutions/chronic-care-management/20-minutes-monthly-requirement): What counts as CCM time, what doesn't, tracking standards, common pitfalls.
```

Keep the RPM and TCM bullets unchanged.

### Step 3: Build + runtime

```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c 'chronic-care-management'
# Expected: 6 (pillar + faq + vs-in-house + 3 new cluster posts)

for slug in cpt-99490-billing-guide 2-chronic-conditions-requirement 20-minutes-monthly-requirement; do
  count=$(curl -s http://localhost:3000/llms.txt | grep -c "$slug")
  echo "  llms.txt $slug: $count (expect 1)"
done

pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "$(cat <<'EOF'
Register 3 CCM cluster posts in sitemap + llms.txt

Three new URLs added to the dynamic sitemap with image entries.
llms.txt CCM bullet now has five nested sub-bullets (faq, comparison,
and the three cluster posts), making them discoverable to AI answer
engines.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Final Phase 3B verification

**Files:** none (verification only)

### Step 1: Tests + build

```bash
npm test 2>&1 | tail -30
```
Expected: schema tests pass. No new failures beyond the pre-existing ones (`public-header.test.tsx` and `phoenix-landing-page.test.js` \u2014 unrelated to the pillar rollout).

```bash
npm run build 2>&1 | tail -60
```
Expected: 3 new static routes appear as `○`:
- `/solutions/chronic-care-management/cpt-99490-billing-guide`
- `/solutions/chronic-care-management/2-chronic-conditions-requirement`
- `/solutions/chronic-care-management/20-minutes-monthly-requirement`

### Step 2: Schema + content integrity

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

for slug in cpt-99490-billing-guide 2-chronic-conditions-requirement 20-minutes-monthly-requirement; do
  echo "=== /$slug ==="
  status=$(curl -sI "http://localhost:3000/solutions/chronic-care-management/$slug" | head -1 | tr -d '\r')
  echo "  HTTP: $status"
  types=$(curl -s "http://localhost:3000/solutions/chronic-care-management/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u | tr '\n' ',')
  echo "  types: $types"
  qcount=$(curl -s "http://localhost:3000/solutions/chronic-care-management/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l | tr -d ' ')
  echo "  Question count: $qcount (expect 5)"
  pillar=$(curl -s "http://localhost:3000/solutions/chronic-care-management/$slug" | grep -oE 'href="/solutions/chronic-care-management"' | wc -l | tr -d ' ')
  echo "  Pillar back-links: $pillar (expect >= 3)"
  lr=$(curl -s "http://localhost:3000/solutions/chronic-care-management/$slug" | grep -c 'Reviewed against current CMS')
  echo "  Last Reviewed: $lr (expect 1)"
  broken=$(curl -s "http://localhost:3000/solutions/chronic-care-management/$slug" | grep -oE 'u2014|u2013|u007e|u2019' | wc -l | tr -d ' ')
  echo "  Broken JSX escapes: $broken (expect 0)"
done
```

Expected: all 3 return 200, Article + BreadcrumbList + FAQPage schemas, 5 questions each, 3+ pillar back-links each, 1 Last Reviewed footer each, 0 broken JSX escapes.

### Step 3: Pillar Further Reading no longer 404s

```bash
for slug in cpt-99490-billing-guide 2-chronic-conditions-requirement 20-minutes-monthly-requirement vs-in-house-care-coordinators; do
  code=$(curl -sI "http://localhost:3000/solutions/chronic-care-management/$slug" | head -1 | tr -d '\r')
  echo "  $slug: $code"
done
pkill -f "next dev"
```
Expected: all 4 return `HTTP/1.1 200 OK`.

### Step 4: Tag Phase 3B complete

```bash
git tag seo-phase-3b-complete -m "Phase 3B: Three CCM cluster posts (CPT 99490 billing guide, 2-chronic-conditions requirement, 20-minutes-monthly requirement)"
```

### Step 5: Summary log

```bash
git log --oneline seo-phase-3a-complete..HEAD
```
Expected: 4 commits (3 cluster posts + sitemap/llms.txt).

---

## Self-review

**Spec coverage (Phase 3 cluster posts from spec Section 9):**
- ✅ CPT 99490 billing guide \u2014 Task 1
- ✅ CCM 2-chronic-conditions requirement \u2014 Task 2
- ✅ CCM 20-minute monthly requirement \u2014 Task 3
- ✅ Sitemap + llms.txt \u2014 Task 4

**Resolution of Phase 3A 404s:** After this phase, all 4 Further Reading links on the CCM pillar resolve to live pages.

**Type consistency:**
- All 3 posts use `buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema` (same as Phase 1B/2B cluster posts).
- `faqs` shape matches `FAQItem[]`.
- StructuredData ids unique per post: `cpt-99490-*`, `ccm-conditions-*`, `ccm-20min-*`.
- Date strings consistent: `'2026-04-20'`.

**Placeholder scan:** Every task has complete metadata, schema calls, TL;DR bullets, FAQ Q&A verbatim, key takeaways, back-link + footer pattern. H2 body prose is talking-point-based (same pattern as Phase 1B/2B) \u2014 implementer writes 2-3 paragraphs from the bullets.

**JSX escape discipline:** Plan calls out the `{'\uXXXX'}` form for JSX text explicitly (Shared Content Standards section + per-task Step 2 reminder + Task 1 Step 3 runtime check for broken escapes). This closes the gap that shipped on the TCM and RPM comparison pages (Phase 1A/2A).

**Forward dependencies:** Posts do NOT link to `/resources/glossary/*` (those don\u2019t exist for CCM yet). Phase 3C will add those links during the internal linking audit.

**Constraint compliance:**
- Authorship: Organization only, no named authors
- Competitor names: none (all category-level framing)
- Price claims: approximate Medicare rates in body prose only (\u007e$66 / $48 / $144 / $72); no `offers` nodes in structured data
- Legal entity: "Positive Check LLC" via `buildPublisherOrgNode()` in Article schema provider
- Unicode escapes: `\u2014` / `\u2013` / `\u2019` / `\u007e` throughout; no raw non-ASCII; JSX text uses `{'\uXXXX'}` form
- In-house content: no external reviewer or byline references
- Last Reviewed footer: present on all 3 CCM cluster posts, citing CMS MLN 909188
