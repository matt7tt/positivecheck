# SEO/GEO Phase 1B — TCM Cluster Posts Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish three long-form cluster posts under the TCM pillar, resolving the three 404s currently in the pillar's Further Reading section and giving Google + AI answer engines substantive, citation-rich content on specific TCM subtopics.

**Architecture:** Each cluster post follows the post anatomy defined in the design spec Section 4: H1 + TL;DR box + H2 sections with answer-first prose + inline FAQ + Key takeaways + back-to-pillar link + Last Reviewed footer. Each emits `Article` + `FAQPage` + `BreadcrumbList` JSON-LD via the Phase 0 typed builders. Content is deeply grounded in CMS primary sources (MLN booklet, HRRP program page, Medicare.gov). Authorship stays `Organization: Positive Check`. No competitor names. No dollar-price claims beyond the well-documented $178 TCM reimbursement average.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui, Phase 0 builders (`buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema`).

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` Section 4 (cluster post anatomy) + Section 9 Phase 1 (TCM cluster).

**Phase 1C (not this plan):** 5 glossary entries at `/resources/glossary/{cpt-99495,cpt-99496,30-day-readmission,transitional-care-management,care-coordination}/` + internal linking audit across the TCM cluster + llms.txt glossary wire-up. The cluster posts in this plan do NOT yet link to `/resources/glossary/*` — Phase 1C adds those links during the linking audit.

---

## File structure (Phase 1B scope)

**Created**
- `app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx`
- `app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx`
- `app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx`

**Modified**
- `app/sitemap.ts` — add 3 new URLs with image entries
- `public/llms.txt` — add 3 new nested bullets under TCM

---

## Shared content standards across all 3 posts

- **H1 only appears once per page** (the page title)
- **TL;DR box** at the top — blue/purple-50 background, border, 4–5 bullets, designed to be citation-ready by LLMs
- **Answer-first H2 sections** — first sentence of every H2 body directly answers the heading's implicit question
- **Citations** — every regulatory/clinical claim cited inline with a link. Primary sources only (`cms.gov`, `medicare.gov`, `hhs.gov`, `cdc.gov`). Anchor text = the claim, not "click here".
- **Internal links (at minimum per page):**
  - 3+ back-links to `/solutions/post-discharge-follow-up` (pillar)
  - 1 link to `/solutions/post-discharge-follow-up/faq` (pillar FAQ)
  - 1 link to `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach` (comparison)
  - 1 link to `/case-studies/scaling-patient-engagement` (case study)
  - NO links to `/resources/glossary/*` yet (Phase 1C adds those)
- **Last Reviewed footer** — identical wording to the existing TCM pages, citing `https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf`, dated 2026-04-19.
- **Hero gradient** — same purple `from-[#e879f9] to-[#d946ef]` used on the pillar page for consistent branding.
- **Schema** — `buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema` from `@/components/structured-data`.
- **Authorship** — `buildArticleSchema` handles this; author is `Organization: Positive Check`.
- **No price claims** beyond the $178 TCM average already referenced on the pillar. Reimbursement rates are described as "approximately" or "roughly" with a caveat that CMS updates rates annually.

---

## Task 1: Create CPT 99495 Billing Guide cluster post

**Files:**
- Create: `app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx`

This is the most billing-technical of the three posts. Target query: "how to bill CPT 99495", "CPT 99495 requirements", "TCM billing documentation".

### Page metadata (exact)

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/cpt-99495-billing-guide'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'CPT 99495 Billing Guide: TCM Requirements & Documentation | Positive Check',
  description:
    'Complete guide to billing CPT 99495 for Transitional Care Management: eligibility, the 2-business-day contact rule, 14-day face-to-face visit, moderate medical decision-making complexity, documentation, and common billing errors.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/cpt-99495-billing-guide' },
  openGraph: {
    title: 'CPT 99495 Billing Guide: TCM Requirements & Documentation',
    description:
      'Eligibility, the 2-business-day contact rule, face-to-face visit, documentation, and common billing errors for CPT 99495.',
    url: '/solutions/post-discharge-follow-up/cpt-99495-billing-guide',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CPT 99495 billing guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPT 99495 Billing Guide: TCM Requirements & Documentation',
    description:
      'Eligibility, the 2-business-day contact rule, face-to-face visit, documentation, and common billing errors for CPT 99495.',
    images: [HERO_IMAGE],
  },
}
```

### Required structure and section content

H1: **"CPT 99495 Billing Guide: Transitional Care Management Requirements"**

**TL;DR box** (5 bullets, use the blue-50/purple-50 styled box pattern matching the comparison page):
1. CPT 99495 reimburses providers for Transitional Care Management services with **moderate** medical decision-making complexity — 2026 Medicare national average is approximately $178 per patient per discharge.
2. Two requirements drive billing: a **direct patient contact within two business days** of discharge, and a **face-to-face visit within 14 calendar days**.
3. Patient must be discharged to a **community setting** — home, domiciliary, assisted living. SNF, LTAC, and inpatient rehab discharges are not eligible.
4. Documentation must capture: discharge date, contact date/time, content of contact (medication review, follow-up plan, symptom assessment), face-to-face visit date, and medication reconciliation.
5. AI-powered wellness calls can satisfy the 2-business-day contact requirement as long as the contact is documented, addresses the discharge care plan, and escalates concerns to clinical staff.

**H2 sections (in this order) — implementer writes 2–3 paragraphs per section expanding the talking points below:**

**H2: What CPT 99495 covers**
Talking points:
- Definition: TCM service for patients with moderate-complexity medical decision-making post-discharge
- Reimburses the post-discharge care coordination episode (not ongoing monthly care)
- 2026 Medicare national average: approximately $178 (cite CMS MLN TCM booklet)
- Billed once per discharge event; cannot be billed again during the 30-day post-discharge window
- The 30-day period starts on the day of discharge
- Compare briefly to 99496 (high complexity, 7-day face-to-face, higher reimbursement)

**H2: Who can bill CPT 99495**
Talking points:
- Physicians (any specialty)
- Non-physician practitioners: nurse practitioners (NPs), physician assistants (PAs), clinical nurse specialists (CNSs), certified nurse midwives (CNMs)
- Clinical staff can perform non-face-to-face components under general supervision
- Billing provider responsible for documentation and the face-to-face visit
- Cite the CMS MLN booklet for the full provider eligibility list

**H2: Patient eligibility requirements**
Talking points:
- Must be a new or established patient
- Discharged from an inpatient hospital stay (acute, psychiatric, rehab), observation, or partial hospitalization
- Discharge destination MUST be a community setting:
  - Patient's home
  - Domiciliary, rest home, or assisted living facility
- Discharge to these destinations does NOT qualify (exclude from billing):
  - Skilled nursing facility (SNF)
  - Inpatient rehabilitation facility
  - Long-term care hospital (LTAC)
  - Another inpatient hospital stay
- Patient must consent to receive TCM services (though formal signed consent is not required; verbal or implied consent through engagement is acceptable per CMS guidance)

**H2: The 2-business-day contact requirement**
Talking points:
- Required within two business days of discharge
- "Direct contact" per CMS: telephonic, electronic (portal message, secure text), or face-to-face
- Must address the discharge care plan — medication review, follow-up appointment awareness, symptom check-in
- Clinical staff under general supervision can perform this contact
- Reference: CMS MLN TCM booklet (https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf)
- Note: link to `/solutions/post-discharge-follow-up/post-discharge-contact-timing` for the full timing deep-dive

**H2: The 14-day face-to-face visit requirement**
Talking points:
- Must occur within 14 calendar days of discharge (not business days — calendar days)
- Must be performed by the billing provider (physician or NPP)
- Can be in-office, home visit, or telehealth (with appropriate billing modifier)
- The face-to-face visit is separate from the 2-business-day contact
- If the patient is seen face-to-face within 2 business days, that visit can satisfy both requirements
- SNF readmission during the 30-day period does not automatically disqualify TCM, but requires careful documentation

**H2: Moderate medical decision-making complexity**
Talking points:
- 99495 = moderate complexity; 99496 = high complexity
- Complexity is assessed per standard Evaluation & Management (E/M) guidelines (2026 updates apply)
- Factors: number and complexity of problems, amount/complexity of data reviewed, risk of complications from management
- Simpler cases (e.g., elective procedure with straightforward recovery) may not qualify for TCM and should be billed as standard E/M instead
- Cite the AMA E/M guidelines and CMS MLN clarification

**H2: Required documentation elements**
Talking points (render as a bulleted list in the JSX):
- Discharge date and discharging facility
- Date and time of the initial 2-business-day contact
- Description of the contact content: medication review, symptom check, follow-up plan discussion
- Date of the face-to-face visit
- Assessment of medical decision-making complexity
- Medication reconciliation (required before or during the face-to-face visit)
- Any escalations or care plan modifications
- Identifier/name of the staff member who performed the initial contact

**H2: How AI wellness calls satisfy CMS contact requirements**
Talking points:
- CMS allows telephonic contact; the "direct contact" rule does not mandate human-only calls
- An AI call captures medication understanding, symptom reports, follow-up appointment awareness
- Structured call transcripts provide the documentation CMS requires
- Real-time escalation to clinical staff handles any concerning responses
- Automation guarantees the 2-business-day window across high-discharge volume without staffing bottlenecks
- Link to `/solutions/post-discharge-follow-up` (pillar) and `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach` (comparison)

**H2: Common CPT 99495 billing errors**
Talking points (list format):
- Billing 99495 for a SNF discharge (not eligible)
- Missing the 2-business-day window due to weekend/holiday confusion
- Insufficient documentation of the contact content
- Billing 99495 when the case is actually high complexity (should be 99496)
- Duplicate TCM billing during the 30-day window
- Missing the medication reconciliation element
- Billing without a face-to-face visit within 14 days
- Failing to document the specific staff member who performed the initial contact

**H2: When to use CPT 99496 instead**
Talking points:
- 99496 = high medical decision-making complexity
- 7-day face-to-face visit window (vs. 14 for 99495)
- Higher reimbursement rate
- Appropriate when the patient has multiple active diagnoses, medication changes requiring close monitoring, or high readmission risk factors
- Still requires the 2-business-day contact
- Cite CMS MLN booklet

### Inline FAQ (exactly 5 questions; use as content for `buildFAQSchema`)

```typescript
const faqs = [
  {
    question: 'Can I bill CPT 99495 if the patient is discharged home on a Friday?',
    answer:
      'Yes. The 2-business-day contact window starts on the first business day after discharge. A Friday discharge means contact must happen by end of business Tuesday (Saturday and Sunday are not business days, and federal holidays are excluded). If Monday is a federal holiday, the deadline pushes to end of business Wednesday.',
  },
  {
    question: "What\u2019s the difference between the 2-business-day contact and the 14-day face-to-face visit?",
    answer:
      'Both are requirements for billing CPT 99495 but they serve different purposes. The 2-business-day contact is a brief check-in addressing the discharge care plan (medication, symptoms, follow-up awareness) and can be performed by clinical staff under general supervision. The 14-day face-to-face visit is a comprehensive encounter performed by the billing provider (physician or NPP) and typically includes medication reconciliation and complete post-discharge assessment.',
  },
  {
    question: 'Does an AI-powered phone call satisfy the 2-business-day contact rule?',
    answer:
      'Yes, when properly documented. CMS defines the contact as "direct contact" that addresses the discharge care plan — it can be telephonic, electronic, or face-to-face. An AI call that captures medication understanding, symptom status, and follow-up awareness, documents the encounter with a structured summary, and escalates concerns to clinical staff satisfies the CMS requirement.',
  },
  {
    question: 'Can I bill CPT 99495 and an office visit E/M code separately?',
    answer:
      'The 14-day face-to-face visit is bundled into the TCM payment and cannot be billed separately. Other E/M services provided after the face-to-face TCM visit (during the 30-day TCM period) can be billed separately if they are distinct services. Preventive and other non-TCM services are also billable separately.',
  },
  {
    question: 'What happens if the patient is readmitted during the 30-day TCM period?',
    answer:
      'Readmission does not automatically disqualify TCM billing, but the service must have been initiated before readmission and the face-to-face visit must occur within the 14-day window as originally planned. If the readmission interrupts care plan delivery, documentation should clearly capture which TCM elements were completed before readmission. Starting a new TCM episode after the second discharge is permissible.',
  },
]
```

### Key takeaways box (4 bullets, render in a gray-50 box at bottom)

- CPT 99495 reimburses moderate-complexity TCM at approximately $178 per patient per discharge.
- Two hard requirements: 2-business-day contact and 14-day face-to-face visit.
- Discharge destination matters — SNF/LTAC/rehab discharges are not eligible.
- Documentation of contact content, timing, and medication reconciliation is what makes TCM billable.

### Back-link CTA + Last Reviewed footer

Same pattern as the pillar/FAQ pages: a center-aligned paragraph linking back to `/solutions/post-discharge-follow-up` ("Back to the TCM solution overview"), followed by the Last Reviewed footer section with the CMS MLN link and "Last updated 2026-04-19".

### Steps

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/solutions/post-discharge-follow-up/cpt-99495-billing-guide`

- [ ] **Step 2: Create the page file**

Create `app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx` following the comparison page pattern (`app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx`) for the overall structure:
- Imports: Metadata, Link, PublicHeader, PublicFooter, StructuredData + 3 schema builders
- `PAGE_URL`, `HERO_IMAGE` constants
- Metadata export (see above)
- `faqs` constant (exactly 5 entries; see above)
- `breadcrumb` = `buildBreadcrumbSchema([...])` with 4 items: Home, Solutions, Post-Discharge Follow-Up, CPT 99495 Billing Guide
- `article` = `buildArticleSchema({ headline: 'CPT 99495 Billing Guide: Transitional Care Management Requirements', description: <the metadata description>, url: PAGE_URL, image: HERO_IMAGE, datePublished: '2026-04-19', dateModified: '2026-04-19' })`
- Default export `CPT99495BillingGuidePage`
- Three `<StructuredData>` blocks (ids: `cpt-99495-breadcrumb`, `cpt-99495-article`, `cpt-99495-faq`)
- Hero section: "Billing Guide" eyebrow, H1 "CPT 99495 Billing Guide: Transitional Care Management Requirements", short intro paragraph
- Main content section containing (in order):
  - TL;DR box (5 bullets as specified above)
  - The 10 H2 sections listed above, each with 2-3 paragraphs expanding the talking points
  - Inline "Common questions" H2 rendering the 5 FAQs via `.map()`
  - "Key takeaways" gray-50 box
  - Back-to-pillar link
- Last Reviewed footer section

For each H2 section's body prose, write 2-3 paragraphs that:
1. First sentence: direct answer to the heading's implicit question
2. Middle: the talking points expanded into natural prose
3. Include at least one inline citation link where relevant (CMS MLN, Medicare.gov, CDC) with the claim as anchor text

Internal link minimums on this page (verify after writing): 3 links to `/solutions/post-discharge-follow-up` (pillar), 1 link to `/solutions/post-discharge-follow-up/post-discharge-contact-timing`, 1 link to `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach`, 1 link to `/case-studies/scaling-patient-engagement`.

Use Unicode escapes `\u2014` (em-dash), `\u2013` (en-dash), `\u2019` (curly apostrophe) throughout — do NOT use raw non-ASCII characters in the source. Match the Phase 1A convention.

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -30`
Expected: `/solutions/post-discharge-follow-up/cpt-99495-billing-guide` appears as `○` static.

- [ ] **Step 4: Runtime smoke test**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -sI http://localhost:3000/solutions/post-discharge-follow-up/cpt-99495-billing-guide | head -1
# Expected: HTTP/1.1 200 OK

# Schema check
curl -s http://localhost:3000/solutions/post-discharge-follow-up/cpt-99495-billing-guide | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u
# Expected types include: Article, BreadcrumbList, FAQPage

# FAQ count
curl -s http://localhost:3000/solutions/post-discharge-follow-up/cpt-99495-billing-guide | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 5

# Internal link count to pillar
curl -s http://localhost:3000/solutions/post-discharge-follow-up/cpt-99495-billing-guide | grep -oE 'href="/solutions/post-discharge-follow-up"' | wc -l
# Expected: >= 3

# Last Reviewed
curl -s http://localhost:3000/solutions/post-discharge-follow-up/cpt-99495-billing-guide | grep -c 'Reviewed against current CMS'
# Expected: 1

pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx
git commit -m "Add CPT 99495 billing guide TCM cluster post

First TCM cluster post. Covers eligibility, the 2-business-day contact
rule, 14-day face-to-face visit, moderate complexity requirements,
documentation elements, how AI calls satisfy CMS rules, common billing
errors, and when to use CPT 99496 instead. Article + BreadcrumbList +
FAQPage schemas. CMS MLN citations inline.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Create 30-Day Readmission Reduction cluster post

**Files:**
- Create: `app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx`

The clinical/outcomes post. Target query: "reduce 30-day readmissions", "HRRP penalty reduction", "readmission reduction strategy for hospitals".

### Page metadata

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/30-day-readmission-reduction'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'Reducing 30-Day Readmissions: What Works and Where TCM Fits | Positive Check',
  description:
    'A provider-focused guide to reducing 30-day hospital readmissions. Which discharge scenarios carry the highest risk, root causes of avoidable readmissions, evidence-based interventions, and how Transitional Care Management fits a readmission reduction strategy.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/30-day-readmission-reduction' },
  openGraph: {
    title: 'Reducing 30-Day Readmissions: What Works and Where TCM Fits',
    description:
      'Root causes of avoidable readmissions, evidence-based interventions, and how TCM fits a readmission reduction strategy.',
    url: '/solutions/post-discharge-follow-up/30-day-readmission-reduction',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: '30-day readmission reduction' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reducing 30-Day Readmissions: What Works and Where TCM Fits',
    description:
      'Root causes, evidence-based interventions, and how TCM fits a readmission reduction strategy.',
    images: [HERO_IMAGE],
  },
}
```

### Required structure and section content

H1: **"Reducing 30-Day Readmissions: What Works and Where TCM Fits"**

**TL;DR box** (5 bullets):
1. The 30-day post-discharge window is when patients are most vulnerable — roughly 15% of Medicare discharges result in a readmission within 30 days (cite CMS HRRP page).
2. The Hospital Readmissions Reduction Program (HRRP) penalizes hospitals with higher-than-expected readmission rates across six target conditions — up to a 3% reduction in Medicare payments.
3. Avoidable readmissions most commonly trace to medication errors, missed follow-up appointments, and unrecognized clinical deterioration — all addressable in the 30-day window.
4. Evidence-based interventions include medication reconciliation, structured follow-up, transitional care management, and proactive patient engagement.
5. Transitional Care Management (TCM) is the CMS-reimbursed framework for delivering the 30-day post-discharge intervention at scale.

**H2 sections (implementer writes 2–3 paragraphs per section):**

**H2: Why 30-day readmissions matter**
Talking points:
- Clinical: readmission often signals incomplete care transition or medication confusion
- Financial for hospitals: HRRP penalties — up to 3% reduction on Medicare payments for all DRGs (not just the targeted conditions)
- Patient experience: readmissions increase cost burden, care disruption, and patient distress
- Cite CMS HRRP page: https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions
- Opportunity: even a 2-percentage-point reduction in the 30-day readmission rate across a medium-volume hospital can avoid millions in penalties

**H2: The Hospital Readmissions Reduction Program (HRRP)**
Talking points:
- Statutory basis: Affordable Care Act (2010), implemented FY2013
- Six conditions currently in scope (per CMS HRRP):
  - Heart attack (AMI)
  - Heart failure (HF)
  - Pneumonia (PN)
  - Chronic obstructive pulmonary disease (COPD)
  - Coronary artery bypass graft surgery (CABG)
  - Elective total hip/total knee arthroplasty (THA/TKA)
- Excess readmission ratio calculation: actual vs. expected adjusted for patient characteristics
- Penalty applies to ALL base Medicare payments for all DRGs, not just the six conditions
- Cite: https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions

**H2: Which discharge scenarios carry the highest readmission risk**
Talking points:
- High-risk diagnoses: heart failure (22%+ 30-day readmission rate nationally), COPD, sepsis, pneumonia
- Demographic factors: age 65+, dual-eligible (Medicare + Medicaid), Black/Hispanic populations (reflecting systemic care disparities)
- Clinical factors: multiple chronic conditions, polypharmacy (5+ medications), recent prior admission, low functional status
- Social determinants: lack of stable housing, transportation barriers, limited caregiver support, food insecurity
- Hospital stay factors: length of stay <3 days or >7 days, ICU stay, discharge to home with home health (complex setup)
- Mental health comorbidities: depression, cognitive impairment, substance use

**H2: The 30-day post-discharge critical window**
Talking points:
- Peak readmission risk is in the first 7 days post-discharge, especially days 1-3
- Day-by-day vulnerability: day 1 (medication confusion, logistics), days 2-7 (early complications, missed follow-ups), days 8-30 (progression of underlying condition)
- The 2-business-day CMS contact requirement targets the highest-risk window
- Cite JAMA/NEJM meta-analyses on readmission timing if available

**H2: Root causes of avoidable readmissions**
Talking points (each a short paragraph or bullet):
- Medication-related: new medications introduced, dose changes, adherence gaps, drug interactions, generic substitutions causing confusion
- Follow-up gaps: missed post-discharge PCP appointment, specialist referral not scheduled, no contact during the vulnerable window
- Unrecognized deterioration: patients don't know which symptoms warrant contacting the care team
- Care transition errors: discharge summary not transmitted to PCP, medication list discrepancies
- Social: inability to afford medications, lack of transportation to follow-up, no caregiver at home
- Behavioral health: depression post-discharge, cognitive impairment unaddressed

**H2: Evidence-based interventions for readmission reduction**
Talking points (render as a bulleted or numbered list):
- Medication reconciliation (before discharge and again at face-to-face visit)
- Structured post-discharge contact within 48 hours
- Early follow-up appointment scheduling (ideally before discharge)
- Patient education with teach-back method
- Transitional care management (TCM) with dedicated care coordinator
- Remote patient monitoring for specific high-risk conditions
- Home health for functional/nursing needs
- Pharmacist-led post-discharge medication review for complex patients
- Community health worker outreach for social determinants

**H2: How Transitional Care Management fits**
Talking points:
- TCM is the CMS-reimbursed framework for delivering the 2-business-day contact + 14-day face-to-face visit
- Reimburses the care coordination work (otherwise unbilled)
- CPT 99495 (moderate complexity) and 99496 (high complexity)
- Link to `/solutions/post-discharge-follow-up/cpt-99495-billing-guide` for billing details
- Positive Check automates the 2-business-day contact at scale
- Link to `/solutions/post-discharge-follow-up` (pillar)

**H2: Measuring readmission reduction**
Talking points:
- Primary metric: 30-day all-cause readmission rate
- Risk-adjusted: CMS HRRP excess readmission ratio is the formal regulatory measure
- Secondary metrics: time-to-readmission, ED visits in 30-day window, patient-reported outcomes
- Attribution challenge: TCM reduces readmissions in aggregate but not every patient
- Benchmark data sources: CMS Hospital Compare, state hospital associations
- Cite CMS Hospital Compare if possible

### Inline FAQ (exactly 5)

```typescript
const faqs = [
  {
    question: 'What\u2019s the current average 30-day readmission rate for Medicare patients?',
    answer:
      'The national all-cause 30-day readmission rate for Medicare fee-for-service patients is approximately 15%, though this varies by condition. Heart failure carries the highest condition-specific rate at roughly 22%. CMS publishes risk-adjusted readmission data in its Hospital Readmissions Reduction Program datasets, which are updated annually.',
  },
  {
    question: 'Which HRRP target conditions have the highest readmission rates?',
    answer:
      'Heart failure consistently shows the highest 30-day readmission rate among HRRP-targeted conditions, followed by pneumonia and COPD. Elective hip/knee arthroplasty (THA/TKA) has the lowest. CMS adjusts for patient risk factors when calculating excess readmission ratios, so hospitals serving sicker populations are not penalized for that alone.',
  },
  {
    question: 'How much financial impact does HRRP have on a typical hospital?',
    answer:
      'HRRP penalties apply to all base Medicare DRG payments — not just the six targeted conditions — and can reach 3% of Medicare fee-for-service payments. For a mid-sized hospital with $100M in Medicare payments, a 2% penalty equals $2M annually. Approximately 75% of hospitals receive some penalty in any given year, with the average penalty around 0.7%.',
  },
  {
    question: 'Is TCM the only CMS-reimbursed intervention for readmission reduction?',
    answer:
      "No. TCM covers the 30-day post-discharge episode, but other CMS programs complement it. Chronic Care Management (CCM) provides ongoing monthly care coordination for patients with two or more chronic conditions. Remote Patient Monitoring (RPM) supports devices and daily engagement. Principal Care Management (PCM) covers single-condition management. For the highest-risk patients, a combination often delivers the best outcomes.",
  },
  {
    question: 'What\u2019s the evidence that post-discharge phone calls reduce readmissions?',
    answer:
      'Multiple studies in JAMA, Annals of Internal Medicine, and other peer-reviewed journals show that structured post-discharge contact within 48 hours reduces 30-day readmission rates by 15-30% depending on patient population and intervention design. Effect sizes are largest for heart failure and COPD. The critical ingredients are: timing (within 48 hours), structure (medication + symptoms + follow-up check), and documented escalation to clinical staff when concerns surface.',
  },
]
```

### Key takeaways

- 30-day readmission reduction is both clinical quality and financial imperative — HRRP penalties apply to all Medicare DRG payments.
- The highest-risk window is the first 7 days post-discharge; targeted intervention matters most there.
- Evidence-based interventions include structured contact within 48 hours, medication reconciliation, early follow-up, and TCM.
- Transitional Care Management (CPT 99495/99496) is the CMS-reimbursed framework for operationalizing this at scale.

### Steps

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/solutions/post-discharge-follow-up/30-day-readmission-reduction`

- [ ] **Step 2: Create the page file**

Same pattern as Task 1. Three schemas (BreadcrumbList + Article + FAQPage via builders). 8 H2 sections expanding the talking points into 2-3 paragraph prose with inline CMS HRRP citations. 5 FAQs exactly as specified. Key takeaways box. Back-to-pillar link. Last Reviewed footer.

StructuredData ids: `readmission-breadcrumb`, `readmission-article`, `readmission-faq`.

Internal link minimums: 3+ to `/solutions/post-discharge-follow-up`, 1 to `/solutions/post-discharge-follow-up/cpt-99495-billing-guide`, 1 to `/solutions/post-discharge-follow-up/post-discharge-contact-timing`, 1 to `/case-studies/scaling-patient-engagement`.

Include the external CMS HRRP link `https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions` inline in the HRRP section with anchor text being the claim (e.g., `<a href="https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions" target="_blank" rel="noopener noreferrer">the Hospital Readmissions Reduction Program</a>`).

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -30`
Expected: route appears as `○`.

- [ ] **Step 4: Runtime smoke**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -sI http://localhost:3000/solutions/post-discharge-follow-up/30-day-readmission-reduction | head -1
# Expected: HTTP/1.1 200 OK

curl -s http://localhost:3000/solutions/post-discharge-follow-up/30-day-readmission-reduction | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 5

curl -s http://localhost:3000/solutions/post-discharge-follow-up/30-day-readmission-reduction | grep -c 'hospital-readmissions'
# Expected: 1+ (CMS HRRP citation)

pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx
git commit -m "Add 30-day readmission reduction TCM cluster post

Second TCM cluster post. Covers why 30-day readmissions matter, the
HRRP program mechanics (6 target conditions, penalty structure),
highest-risk discharge scenarios, root causes of avoidable
readmissions, evidence-based interventions, and how TCM fits a
readmission reduction strategy. Article + BreadcrumbList + FAQPage
schemas. CMS HRRP citations inline.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Create Post-Discharge Contact Timing cluster post

**Files:**
- Create: `app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx`

The workflow/timing deep-dive. Target query: "post-discharge follow-up timing", "2 business day contact rule", "TCM contact deadline".

### Page metadata

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/post-discharge-contact-timing'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'Post-Discharge Contact Timing: The 2-Business-Day Rule Explained | Positive Check',
  description:
    'Exact CMS rules for the 2-business-day post-discharge contact requirement: what counts as a business day, weekend and holiday handling, acceptable contact methods, documentation standards, and how automation enforces the window.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/post-discharge-contact-timing' },
  openGraph: {
    title: 'Post-Discharge Contact Timing: The 2-Business-Day Rule Explained',
    description:
      'Exact CMS rules for the 2-business-day post-discharge contact: business day definition, weekend/holiday handling, contact methods, documentation.',
    url: '/solutions/post-discharge-follow-up/post-discharge-contact-timing',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Post-discharge contact timing guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Discharge Contact Timing: The 2-Business-Day Rule Explained',
    description:
      'Exact CMS rules for the 2-business-day post-discharge contact requirement.',
    images: [HERO_IMAGE],
  },
}
```

### Required structure and section content

H1: **"Post-Discharge Contact Timing: The 2-Business-Day Rule Explained"**

**TL;DR box** (5 bullets):
1. CPT 99495 and 99496 both require direct patient contact within **two business days** of discharge.
2. Business days EXCLUDE weekends and federal holidays — a Friday discharge means contact must happen by end of business Tuesday.
3. Acceptable contact forms: telephonic, electronic (portal message, secure text), or face-to-face.
4. Missed contacts cannot be billed — every miss is a lost ~$178 TCM encounter.
5. Automated outreach enforces the window as a scheduling constraint and documents the contact for billing.

**H2 sections:**

**H2: The CMS 2-business-day rule**
Talking points:
- CMS source text: quote the relevant portion of the MLN TCM booklet
- Rule applies to both CPT 99495 (moderate complexity) and 99496 (high complexity)
- Contact must address the discharge care plan
- Performed by clinical staff (not limited to billing provider)
- Cite MLN booklet

**H2: What counts as a "business day"**
Talking points:
- Monday through Friday, excluding federal holidays
- Federal holidays per OPM: https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/ (list the major ones: New Year's Day, MLK Jr. Day, Presidents Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas)
- Day of discharge does NOT count (window starts the next business day)
- Different from "calendar days" used for the 14-day face-to-face visit

**H2: Timing examples across discharge scenarios**
Render as a small table or list:
- **Monday morning discharge** → contact by end of business Wednesday
- **Friday afternoon discharge** → contact by end of business Tuesday (Sat/Sun don't count)
- **Wednesday before Thanksgiving discharge** → contact by end of business Friday (Thanksgiving doesn't count)
- **Day before Christmas (if weekday) discharge** → contact by end of business day after New Year (if Christmas, New Year are weekdays)
- **Saturday discharge** → treated as Monday discharge for counting (Sat/Sun don't count; window starts Monday)

**H2: What counts as a valid "contact"**
Talking points:
- Telephonic: live call, whether answered by patient or patient's caregiver
- Electronic: patient portal message (responded to by patient), secure text message, email
- Face-to-face: in-office visit, home visit, telehealth video visit
- NOT valid alone:
  - Voicemail with no patient engagement
  - Unresponded-to text/email
  - General mass communication
- Cite MLN booklet

**H2: Who can perform the contact**
Talking points:
- Billing physician or NPP themselves
- Clinical staff under general supervision (RNs, LPNs, medical assistants with appropriate scope)
- AI-powered wellness calls when the platform captures structured content and supports human escalation
- Linked: `/solutions/post-discharge-follow-up/cpt-99495-billing-guide` for billing provider eligibility

**H2: Documenting the contact**
Talking points:
- Date and time (use 24-hour format or specify AM/PM clearly)
- Method (phone, portal, text, in-person)
- Content summary: medication understanding, symptom report, follow-up awareness
- Any care plan modifications or escalations
- Identifier of the staff/system that performed the contact
- CMS auditors may request this during post-pay review

**H2: Handling unreachable patients**
Talking points:
- Document every attempt (date, time, method, outcome)
- Two attempts on different modalities within the 2-day window are a common practice
- If patient remains unreachable after good-faith effort, TCM may not be billable for that encounter
- Some providers use authorized representative / caregiver contact as a fallback (CMS permits)
- Link to `/solutions/post-discharge-follow-up/faq` for more on caregiver contacts

**H2: How automation enforces the window**
Talking points:
- Scheduling: automated system computes the 2-business-day deadline from discharge timestamp
- Holiday handling: platform includes federal holiday calendar
- Multiple contact attempts: if first attempt fails, automatic retry within window
- Real-time escalation to clinical staff when concerning responses surface
- Documentation: structured summary for each contact ready for TCM billing
- Link to pillar `/solutions/post-discharge-follow-up`

**H2: Workflow best practices**
Talking points (render as a numbered or bulleted list):
- Capture discharge timestamp in the EHR at discharge disposition step
- Integrate discharge list to outreach platform within 1 hour of discharge
- Schedule automated contact for morning of the first business day post-discharge
- Set escalation rules (e.g., new symptoms → clinical call-back within 4 hours)
- Track missed-contact rate as a program KPI
- Report to leadership quarterly with attribution to TCM revenue captured vs. missed

### Inline FAQ (exactly 5)

```typescript
const faqs = [
  {
    question: 'If a patient is discharged on a Friday, when must contact happen?',
    answer:
      'By end of business Tuesday. Friday counts as business day 0 (discharge day itself doesn\u2019t count). Saturday and Sunday are excluded. Monday is business day 1 and Tuesday is business day 2 — the deadline. If Monday is a federal holiday (e.g., Memorial Day), the deadline extends to Wednesday.',
  },
  {
    question: 'Does the 2-business-day window start from the discharge time or the next calendar day?',
    answer:
      'Per CMS, the window starts the next business day after discharge. A 3 AM Monday discharge and a 9 PM Monday discharge both have the same deadline — end of business Wednesday. The clock runs on business days, not hours.',
  },
  {
    question: 'Does a voicemail count as contact?',
    answer:
      'A voicemail alone does not count. CMS requires "direct contact" that addresses the discharge care plan — this implies two-way engagement with the patient or their authorized caregiver. A voicemail left with no subsequent patient response does not satisfy the requirement, even if the message content would have met the CMS criteria if received.',
  },
  {
    question: 'What if I reach the patient\u2019s family member instead of the patient?',
    answer:
      'Contact with a caregiver or authorized representative is acceptable when the caregiver is the appropriate recipient — for patients with cognitive impairment, language barriers, or similar contact limitations. CMS permits this in the MLN TCM guidance. The contact must still address the discharge care plan and be documented.',
  },
  {
    question: 'Can I catch up later if the 2-business-day window is missed?',
    answer:
      'No. Missing the 2-business-day window means CPT 99495 or 99496 cannot be billed for that discharge. Providers may still continue post-discharge care (and bill ordinary E/M services), but the TCM code specifically requires the timely contact. This is why automation as a safety net matters — every missed window is an unbilled TCM encounter worth roughly $178.',
  },
]
```

### Key takeaways

- The 2-business-day rule applies to both CPT 99495 and 99496 — weekends and federal holidays do not count.
- Acceptable contact forms: telephonic, electronic, or face-to-face — two-way engagement required (voicemail alone does not count).
- Documentation must capture date/time, method, content, and any escalations — CMS auditors may request this.
- Automation enforces the window reliably across high-volume discharge days when manual workflows miss.

### Steps

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/solutions/post-discharge-follow-up/post-discharge-contact-timing`

- [ ] **Step 2: Create the page file**

Same pattern. 8 H2 sections. 5 FAQs. Key takeaways. Back-link. Footer.

StructuredData ids: `contact-timing-breadcrumb`, `contact-timing-article`, `contact-timing-faq`.

Internal link minimums: 3+ to `/solutions/post-discharge-follow-up`, 1 to `/solutions/post-discharge-follow-up/cpt-99495-billing-guide`, 1 to `/solutions/post-discharge-follow-up/faq`, 1 to `/case-studies/scaling-patient-engagement`.

Inline external citation: CMS MLN TCM booklet (https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf) and OPM federal holidays (https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/).

- [ ] **Step 3: Build check**

Route appears as `○`.

- [ ] **Step 4: Runtime smoke**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -sI http://localhost:3000/solutions/post-discharge-follow-up/post-discharge-contact-timing | head -1
# Expected: HTTP/1.1 200 OK
curl -s http://localhost:3000/solutions/post-discharge-follow-up/post-discharge-contact-timing | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 5
pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx
git commit -m "Add post-discharge contact timing TCM cluster post

Third TCM cluster post. Covers the CMS 2-business-day rule, business
day definition with weekend/holiday exclusions, timing examples across
discharge scenarios, acceptable contact forms (telephonic/electronic/
face-to-face with two-way engagement), documentation standards,
handling unreachable patients, how automation enforces the window,
and workflow best practices. Article + BreadcrumbList + FAQPage
schemas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Register URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

- [ ] **Step 1: Add sitemap entries**

Edit `app/sitemap.ts`. Find the existing entry for `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach` and insert THREE new entries BEFORE it (so the order flows pillar → faq → then cluster posts → then comparison). Actually, the order doesn't matter to Google — just add the three new entries after the existing `/solutions/post-discharge-follow-up/faq` entry:

```typescript
  { path: "/solutions/post-discharge-follow-up/cpt-99495-billing-guide", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/post-discharge-follow-up/30-day-readmission-reduction", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/post-discharge-follow-up/post-discharge-contact-timing", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
```

Place these AFTER the existing `/solutions/post-discharge-follow-up/faq` entry and BEFORE the `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach` entry.

- [ ] **Step 2: Update llms.txt**

Edit `public/llms.txt`. Under the TCM bullet (which currently has two nested sub-bullets for faq + vs-manual), add three more nested sub-bullets. The resulting TCM block should look like this:

```
- [Transitional Care Management](https://positivecheck.com/solutions/post-discharge-follow-up): Post-discharge patient outreach within 24-48 hours to reduce 30-day readmissions.
  - [TCM FAQ](https://positivecheck.com/solutions/post-discharge-follow-up/faq): CPT 99495/99496 billing, contact timing, documentation, HIPAA.
  - [AI calls vs. manual discharge outreach](https://positivecheck.com/solutions/post-discharge-follow-up/vs-manual-discharge-outreach): Category-level comparison with six-dimension tradeoff table.
  - [CPT 99495 billing guide](https://positivecheck.com/solutions/post-discharge-follow-up/cpt-99495-billing-guide): Eligibility, documentation, 2-business-day rule, 14-day face-to-face, common billing errors.
  - [30-day readmission reduction](https://positivecheck.com/solutions/post-discharge-follow-up/30-day-readmission-reduction): HRRP mechanics, highest-risk scenarios, evidence-based interventions, TCM fit.
  - [Post-discharge contact timing](https://positivecheck.com/solutions/post-discharge-follow-up/post-discharge-contact-timing): The 2-business-day rule, weekend/holiday handling, valid contact forms, automation.
```

Keep all other sections unchanged.

- [ ] **Step 3: Build + runtime verification**

Run: `npm run build 2>&1 | tail -20`

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c 'post-discharge-follow-up'
# Expected: 6 (pillar + faq + vs-manual + 3 new cluster posts)

for path in cpt-99495-billing-guide 30-day-readmission-reduction post-discharge-contact-timing; do
  grep_count=$(curl -s http://localhost:3000/llms.txt | grep -c "$path")
  echo "$path in llms.txt: $grep_count (expected: 1)"
done

pkill -f "next dev"
```

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "Register 3 TCM cluster posts in sitemap + llms.txt

Three new URLs added to the dynamic sitemap with image entries.
llms.txt TCM bullet now has five nested sub-bullets pointing at faq,
comparison, and the three cluster posts, making them discoverable to
AI answer engines.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Final Phase 1B verification

**Files:** none (verification only)

- [ ] **Step 1: Tests + build**

Run: `npm test`
Expected: 11+ schema tests pass. Pre-existing failures (public-header, phoenix-landing-page) unchanged.

Run: `npm run build 2>&1 | tail -60`
Expected: successful compilation. Route list must include:
- `/solutions/post-discharge-follow-up/cpt-99495-billing-guide` (new, static `○`)
- `/solutions/post-discharge-follow-up/30-day-readmission-reduction` (new, static `○`)
- `/solutions/post-discharge-follow-up/post-discharge-contact-timing` (new, static `○`)

- [ ] **Step 2: Schema integrity on all 3 cluster posts**

Start dev: `npm run dev > /tmp/d.log 2>&1 &` ; `sleep 6`

```bash
for slug in cpt-99495-billing-guide 30-day-readmission-reduction post-discharge-contact-timing; do
  echo "=== /$slug ==="
  # HTTP 200
  status=$(curl -sI "http://localhost:3000/solutions/post-discharge-follow-up/$slug" | head -1)
  echo "  HTTP: $status"

  # All three expected schema types
  types=$(curl -s "http://localhost:3000/solutions/post-discharge-follow-up/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u)
  echo "  types: $types"

  # 5 Questions expected in FAQPage
  qcount=$(curl -s "http://localhost:3000/solutions/post-discharge-follow-up/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l)
  echo "  Question count: $qcount (expected 5)"

  # Last Reviewed footer
  lr=$(curl -s "http://localhost:3000/solutions/post-discharge-follow-up/$slug" | grep -c 'Reviewed against current CMS')
  echo "  Last Reviewed present: $lr (expected 1)"

  # Internal link minimum: 3 back-links to pillar
  pillar_links=$(curl -s "http://localhost:3000/solutions/post-discharge-follow-up/$slug" | grep -oE 'href="/solutions/post-discharge-follow-up"' | wc -l)
  echo "  Pillar back-link count: $pillar_links (expected >= 3)"
done
```

- [ ] **Step 3: Pillar Further Reading links no longer 404**

```bash
# All 4 Further Reading links from the pillar page must now return 200
for slug in cpt-99495-billing-guide 30-day-readmission-reduction post-discharge-contact-timing vs-manual-discharge-outreach; do
  code=$(curl -sI "http://localhost:3000/solutions/post-discharge-follow-up/$slug" | head -1)
  echo "  $slug: $code"
done
```
Expected: all 4 return `HTTP/1.1 200 OK`.

Kill dev.

- [ ] **Step 4: Tag Phase 1B complete**

```bash
git tag seo-phase-1b-complete -m "Phase 1B: Three TCM cluster posts (billing guide, readmission reduction, contact timing)"
```

Do NOT push.

- [ ] **Step 5: Summary commit log**

Run: `git log --oneline seo-phase-1a-complete..HEAD`

Expected: 5 commits (Tasks 1–4, with Task 5 producing the tag but no commit):
1. Add CPT 99495 billing guide TCM cluster post
2. Add 30-day readmission reduction TCM cluster post
3. Add post-discharge contact timing TCM cluster post
4. Register 3 TCM cluster posts in sitemap + llms.txt
(Plus the plan doc commit that precedes Task 1.)

---

## Self-review

**Spec coverage (Phase 1 cluster posts from spec Section 9):**
- ✅ CPT 99495 billing guide cluster post — Task 1
- ✅ 30-day readmission reduction cluster post — Task 2
- ✅ Post-discharge contact timing cluster post — Task 3
- ✅ Sitemap + llms.txt registration — Task 4
- ⏭️ Glossary cross-linking — deferred to Phase 1C
- ⏭️ Glossary entry creation — deferred to Phase 1C

**Type consistency check:**
- All three posts use `buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema` imports (same as Phase 1A comparison page).
- `faqs` array shape matches `FAQItem[]`.
- `PAGE_URL` and `HERO_IMAGE` constants match Phase 1A convention.
- Date strings `'2026-04-19'` are consistent across all three files.
- StructuredData ids are unique per post: `cpt-99495-breadcrumb/-article/-faq`, `readmission-breadcrumb/-article/-faq`, `contact-timing-breadcrumb/-article/-faq`.

**Placeholder scan:** Every task includes complete content — metadata, schema calls, section structure, TL;DR bullets, FAQ Q&A, key takeaways. The H2 body prose is specified as "2-3 paragraphs expanding [specific talking points]" with citation targets named — the implementer has enough guidance to write accurate prose without drifting. No "TODO" or "TBD" placeholders in the plan.

**Resolution of prior-phase 404s:** After Phase 1B ships, the three Further Reading 404s on the TCM pillar page resolve to live pages.

**Forward dependencies:** None — Phase 1B can ship before Phase 1C. The cluster posts do not yet link to `/resources/glossary/*` because those pages don't exist; Phase 1C will add those links during the internal linking audit.
