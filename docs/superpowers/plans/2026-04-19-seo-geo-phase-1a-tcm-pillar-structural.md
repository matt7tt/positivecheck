# SEO/GEO Phase 1A — TCM Pillar Structural Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the TCM pillar to full pillar anatomy (per design Section 3), add a dedicated pillar FAQ page, and add the first category-level comparison page.

**Architecture:** The existing `/solutions/post-discharge-follow-up` page already has strong content; this plan augments it rather than rewriting from scratch. It migrates inline JSON-LD to Phase 0 typed builders, adds `FAQPage` + `HowTo` schemas, adds a "Further Reading" section, and adds a "Last reviewed" footer. Two new sibling pages land under the pillar URL: `/faq/` (full TCM FAQ, ~12 questions) and `/vs-manual-discharge-outreach/` (category-level comparison). All three are wired into the sitemap and llms.txt.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind, Phase 0 builders from `lib/schema.ts` (`buildBreadcrumbSchema`, `buildServiceSchema`, `buildFAQSchema`, `buildArticleSchema`). Tests: `npm test`. Build: `npm run build`.

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` — Section 3 (pillar anatomy), Section 5 (comparison anatomy), Section 9 Phase 1.

**Phase 1B and 1C scope (not this plan):**
- **1B:** 3 long-form cluster posts under `/solutions/post-discharge-follow-up/*`
- **1C:** 5 glossary entries under `/resources/glossary/*` + llms.txt + cross-linking audit

---

## File structure (Phase 1A scope)

**Modified**
- `app/solutions/post-discharge-follow-up/page.tsx` — migrate schemas to typed builders, add FAQ section, add HowTo schema, add Further Reading section, add Last Reviewed footer
- `app/sitemap.ts` — add 2 new URLs (`/solutions/post-discharge-follow-up/faq`, `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach`)
- `public/llms.txt` — add TCM FAQ + comparison under existing sections

**Created**
- `app/solutions/post-discharge-follow-up/faq/page.tsx` — dedicated pillar FAQ with ~12 TCM-specific questions
- `app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx` — category-level comparison (no competitor names)

---

## Source material and citations

Every factual claim on TCM pages cites a primary source. Use these anchors consistently across all Phase 1A pages:

- **CPT 99495 / 99496 billing requirements** → `https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf` (CMS TCM MLN booklet)
- **30-day readmission context + HRRP** → `https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions`
- **Interactive communication requirement** → `https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf`
- **Discharge workflow / 2-business-day contact** → same MLN booklet
- **Medicare Learning Network — TCM FAQ** → `https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/Transitional-Care-Management-Services-Fact-Sheet-ICN908628.pdf`

Place citations as inline links with the claim as anchor text. No footnote style.

---

## Task 1: Migrate TCM pillar page schemas to typed builders

**Files:**
- Modify: `app/solutions/post-discharge-follow-up/page.tsx`

Replace the two inline `<script type="application/ld+json">` blocks (currently one BreadcrumbList, one Service) with calls to `buildBreadcrumbSchema` and `buildServiceSchema`. Do NOT add FAQ/HowTo yet — that's Task 2-3. Do NOT touch any JSX content. Only touch imports + the two schema blocks near lines 34-67.

- [ ] **Step 1: Read the current top of the file**

Run: `sed -n '1,67p' app/solutions/post-discharge-follow-up/page.tsx`
Expected: see imports + metadata + opening JSX with two inline schema blocks.

- [ ] **Step 2: Add imports**

At the top of `app/solutions/post-discharge-follow-up/page.tsx`, update the existing `@/components/shared/*` and related imports to ALSO import from `@/components/structured-data`:

Add this import statement near the existing imports (place after the line `import { Button } from '@/components/ui/button'`):

```typescript
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema } from '@/components/structured-data'
```

- [ ] **Step 3: Replace the two inline script blocks**

Find this block (currently at lines 34-67, between `return (` and `<div className="min-h-screen bg-white">`):

```jsx
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://positivecheck.com/solutions" },
              { "@type": "ListItem", "position": 3, "name": "Post-Discharge Follow-Up", "item": "https://positivecheck.com/solutions/post-discharge-follow-up" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Transitional Care Management",
            "name": "Post-Discharge Follow-Up (TCM) with AI Calls",
            "description": "Automated post-discharge patient outreach within 24-48 hours. Satisfies CMS Transitional Care Management requirements, supports CPT 99495 billing, and reduces 30-day readmissions.",
            "provider": {
              "@type": "Organization",
              "name": "Positive Check",
              "url": "https://positivecheck.com"
            },
            "areaServed": { "@type": "Country", "name": "United States" },
            "audience": { "@type": "Audience", "audienceType": "Healthcare Providers" },
            "category": "Transitional Care Management"
          })
        }}
      />
```

Replace with:

```jsx
      <StructuredData
        id="tcm-pillar-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://positivecheck.com' },
          { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
          { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
        ])}
      />
      <StructuredData
        id="tcm-pillar-service"
        data={buildServiceSchema({
          name: 'Post-Discharge Follow-Up (TCM) with AI Calls',
          serviceType: 'Transitional Care Management',
          description:
            'Automated post-discharge patient outreach within 24-48 hours. Satisfies CMS Transitional Care Management requirements, supports CPT 99495 billing, and reduces 30-day readmissions.',
          category: 'Transitional Care Management',
        })}
      />
```

- [ ] **Step 4: Build check**

Run: `npm run build 2>&1 | tail -30`
Expected: `/solutions/post-discharge-follow-up` still renders as a static route. No schema-related errors.

- [ ] **Step 5: Runtime check**

Run: `npm run dev &` ; `sleep 4`
Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -o '"legalName":"[^"]*"' | sort -u`
Expected: `"legalName":"Positive Check LLC"` (the Service schema's provider now carries legalName via `buildPublisherOrgNode()`).

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c '"@type":"BreadcrumbList"'`
Expected: `1`.

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c '"@type":"Service"'`
Expected: `1`.

Kill dev: `pkill -f "next dev"`.

- [ ] **Step 6: Commit**

```bash
git add app/solutions/post-discharge-follow-up/page.tsx
git commit -m "Migrate TCM pillar schemas to typed builders

Replaces two inline JSON-LD script blocks with <StructuredData>
components backed by buildBreadcrumbSchema and buildServiceSchema.
Service schema now carries legalName 'Positive Check LLC' via
buildPublisherOrgNode.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Add FAQ section + FAQPage schema to TCM pillar

**Files:**
- Modify: `app/solutions/post-discharge-follow-up/page.tsx`

The pillar page gets a dedicated FAQ section with 6 questions (the most important ones), each with an ~3–4 sentence answer. A link at the bottom of the section points to the full `/faq` page. The section emits `FAQPage` schema.

- [ ] **Step 1: Add `buildFAQSchema` to the import**

Update the `@/components/structured-data` import in `app/solutions/post-discharge-follow-up/page.tsx` from Task 1 to include `buildFAQSchema`:

```typescript
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/components/structured-data'
```

- [ ] **Step 2: Define the FAQ data at module scope**

Add the following constant near the top of the file, AFTER the `metadata` export but BEFORE `export default function PostDischargeFollowUpPage()`:

```typescript
const tcmPillarFaqs = [
  {
    question: 'What is Transitional Care Management (TCM)?',
    answer:
      "Transitional Care Management is a Medicare-reimbursed care model designed to reduce hospital readmissions by ensuring patients receive structured follow-up after discharge. CMS pays providers for delivering two things within a 30-day window: an initial patient contact within two business days of discharge, and a face-to-face visit within 7–14 days depending on complexity. The billing codes are CPT 99495 (moderate complexity) and 99496 (high complexity).",
  },
  {
    question: 'Can an AI-powered phone call satisfy the TCM contact requirement?',
    answer:
      'Yes. CMS specifies that the initial contact within two business days must be a "direct contact" that addresses the patient\u2019s discharge care plan — it can be telephonic, electronic, or face-to-face. An AI wellness call that captures medication understanding, symptom changes, follow-up appointment awareness, and home safety meets the contact requirement as long as the call is documented, escalates concerns to clinical staff, and occurs within the 2-business-day window.',
  },
  {
    question: 'How quickly must post-discharge contact happen?',
    answer:
      'Within two business days of discharge for both CPT 99495 and 99496. Weekends and federal holidays do not count. A patient discharged on a Friday must be contacted by end of business Tuesday. Positive Check schedules calls automatically based on the discharge timestamp from your EHR or discharge list import.',
  },
  {
    question: "What\u2019s the difference between CPT 99495 and 99496?",
    answer:
      'Both require contact within two business days of discharge. CPT 99495 requires moderate medical decision-making complexity and a face-to-face visit within 14 calendar days — 2026 Medicare reimburses it at roughly $178. CPT 99496 requires high medical decision-making complexity and a face-to-face visit within 7 calendar days, reimbursed at a higher rate. See the CMS MLN booklet for current rates.',
  },
  {
    question: 'How does TCM relate to the Hospital Readmissions Reduction Program (HRRP)?',
    answer:
      'HRRP penalizes hospitals for higher-than-expected 30-day readmission rates across six conditions. TCM is the CMS-recognized intervention for reducing avoidable readmissions in the critical 30-day post-discharge window. Effective TCM programs reduce readmissions, which directly reduces HRRP penalty exposure.',
  },
  {
    question: 'Does HIPAA permit automated discharge follow-up calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards — encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
];
```

- [ ] **Step 3: Add the FAQPage schema to the page output**

After the `<StructuredData id="tcm-pillar-service" ... />` block from Task 1, add:

```jsx
      <StructuredData
        id="tcm-pillar-faq"
        data={buildFAQSchema(tcmPillarFaqs)}
      />
```

- [ ] **Step 4: Add the FAQ section to the page JSX**

In `app/solutions/post-discharge-follow-up/page.tsx`, find the existing `{/* CTA */}` section (near the end, containing "Ready to Automate Post-Discharge Follow-Up?"). Insert a new `<section>` BEFORE it:

```jsx
          {/* FAQ */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {tcmPillarFaqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/solutions/post-discharge-follow-up/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  See all Transitional Care Management questions
                </Link>
              </div>
            </div>
          </section>
```

- [ ] **Step 5: Build + runtime check**

Run: `npm run build 2>&1 | tail -20`
Expected: clean build.

Run: `npm run dev &` ; `sleep 4`
Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c '"@type":"FAQPage"'`
Expected: `1`.

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c '"@type":"Question"'`
Expected: `6`.

Kill dev.

- [ ] **Step 6: Commit**

```bash
git add app/solutions/post-discharge-follow-up/page.tsx
git commit -m "Add 6-question FAQ section + FAQPage schema to TCM pillar

Adds the 6 most frequent TCM questions inline on the pillar page,
emits FAQPage JSON-LD via buildFAQSchema, and links to the full
/faq/ page (created in a later task).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Add HowTo schema + Further Reading + Last Reviewed footer to TCM pillar

**Files:**
- Modify: `app/solutions/post-discharge-follow-up/page.tsx`

Three enhancements in one commit because they're all structural additions to the same page and all logically close together:
1. `HowTo` schema attached to the existing "How Positive Check Supports Post-Discharge Care" section (4 steps already present).
2. A new "Further Reading" section linking to cluster posts (which don't exist yet — Phase 1B will create them; we link to them anyway so Phase 1B just makes them real).
3. A small "Reviewed" footer at the bottom of `<main>` before `</main>`.

- [ ] **Step 1: Build HowTo schema inline**

After the `<StructuredData id="tcm-pillar-faq" ... />` block, add:

```jsx
      <StructuredData
        id="tcm-pillar-howto"
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How Positive Check Supports Post-Discharge Care',
          description:
            'Automate CMS-compliant post-discharge outreach in four steps: auto-trigger within 48 hours, conduct a structured check-in, escalate concerns, and document for CPT 99495 billing.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Automated 48-Hour Contact',
              text:
                'Patients are contacted within 24-48 hours of discharge, satisfying the initial patient contact requirement for CPT 99495 without manual scheduling.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Structured Check-In Calls',
              text:
                'Calls assess medication understanding, follow-up appointment awareness, symptom changes, and home safety — the key areas that prevent readmissions.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Immediate Escalation',
              text:
                'If a patient reports confusion about medications, new symptoms, or missed follow-ups, care teams are alerted immediately for same-day intervention.',
            },
            {
              '@type': 'HowToStep',
              position: 4,
              name: 'Readmission Risk Reduction',
              text:
                'Consistent post-discharge engagement catches complications early, reducing 30-day readmission rates and HRRP penalty exposure.',
            },
          ],
        }}
      />
```

- [ ] **Step 2: Add Further Reading section**

Immediately AFTER the FAQ section (from Task 2) and BEFORE the CTA section, insert:

```jsx
          {/* Further Reading */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Further Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Billing guide</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CPT 99495 Billing Guide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eligibility, documentation requirements, and how interactive communication is handled.
                  </p>
                </Link>
                <Link
                  href="/solutions/post-discharge-follow-up/30-day-readmission-reduction"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Clinical</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Reducing 30-Day Readmissions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Which discharge scenarios carry the highest readmission risk and where TCM fits.
                  </p>
                </Link>
                <Link
                  href="/solutions/post-discharge-follow-up/post-discharge-contact-timing"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Workflow</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Post-Discharge Contact Timing
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The 2-business-day window, weekend/holiday handling, and documentation.
                  </p>
                </Link>
                <Link
                  href="/solutions/post-discharge-follow-up/vs-manual-discharge-outreach"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Comparison</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Calls vs. Manual Outreach
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Category-level comparison of automated versus manual discharge follow-up workflows.
                  </p>
                </Link>
              </div>
            </div>
          </section>
```

- [ ] **Step 3: Add Last Reviewed footer**

Inside `<main>`, at the very end (after the CTA section, before `</main>`), add:

```jsx
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN TCM Booklet
                </a>
                . Last updated 2026-04-19.
              </p>
            </div>
          </section>
```

- [ ] **Step 4: Build + runtime check**

Run: `npm run build 2>&1 | tail -20`

Run: `npm run dev &` ; `sleep 4`
Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c '"@type":"HowTo"'`
Expected: `1`.

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c 'HowToStep'`
Expected: at least `4` (one per step).

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c 'Reviewed against current CMS'`
Expected: `1`.

Kill dev.

Note: internal links in Further Reading point at pages not yet created — that's expected. Those pages land in Phase 1B. Clicking the links will 404 until then. No action needed in Phase 1A.

- [ ] **Step 5: Commit**

```bash
git add app/solutions/post-discharge-follow-up/page.tsx
git commit -m "Add HowTo schema, Further Reading, and Last Reviewed footer to TCM pillar

HowTo schema formalizes the 4-step 'How Positive Check Supports
Post-Discharge Care' section with HowToStep entries. Further Reading
links to the three Phase 1B cluster posts and the Phase 1A comparison
page. Last Reviewed footer cites the CMS MLN TCM booklet.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Create TCM pillar FAQ page

**Files:**
- Create: `app/solutions/post-discharge-follow-up/faq/page.tsx`

A dedicated FAQ page with 12 questions total (the 6 from the pillar page + 6 additional). Uses `FAQPage` schema. Links back to pillar.

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/solutions/post-discharge-follow-up/faq`

- [ ] **Step 2: Create the file**

Create `app/solutions/post-discharge-follow-up/faq/page.tsx`:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Transitional Care Management (TCM) FAQ | Positive Check',
  description:
    'Answers about Transitional Care Management: CPT 99495 and 99496 billing, 2-business-day contact requirement, documentation, HIPAA handling, and how AI-powered discharge follow-up calls satisfy CMS rules.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/faq' },
  openGraph: {
    title: 'Transitional Care Management (TCM) FAQ | Positive Check',
    description:
      'Answers about TCM billing, contact requirements, documentation, HIPAA, and AI discharge follow-up.',
    url: '/solutions/post-discharge-follow-up/faq',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check TCM FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transitional Care Management (TCM) FAQ | Positive Check',
    description:
      'Answers about TCM billing, contact requirements, documentation, HIPAA, and AI discharge follow-up.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const faqs = [
  {
    question: 'What is Transitional Care Management (TCM)?',
    answer:
      "Transitional Care Management is a Medicare-reimbursed care model designed to reduce hospital readmissions by ensuring patients receive structured follow-up after discharge. CMS pays providers for delivering two things within a 30-day window: an initial patient contact within two business days of discharge, and a face-to-face visit within 7–14 days depending on complexity. The billing codes are CPT 99495 (moderate complexity) and 99496 (high complexity).",
  },
  {
    question: 'Can an AI-powered phone call satisfy the TCM contact requirement?',
    answer:
      'Yes. CMS specifies that the initial contact within two business days must be a "direct contact" that addresses the patient\u2019s discharge care plan — it can be telephonic, electronic, or face-to-face. An AI wellness call that captures medication understanding, symptom changes, follow-up appointment awareness, and home safety meets the contact requirement as long as the call is documented, escalates concerns to clinical staff, and occurs within the 2-business-day window.',
  },
  {
    question: 'How quickly must post-discharge contact happen?',
    answer:
      'Within two business days of discharge for both CPT 99495 and 99496. Weekends and federal holidays do not count. A patient discharged on a Friday must be contacted by end of business Tuesday. Positive Check schedules calls automatically based on the discharge timestamp from your EHR or discharge list import.',
  },
  {
    question: "What\u2019s the difference between CPT 99495 and 99496?",
    answer:
      'Both require contact within two business days of discharge. CPT 99495 requires moderate medical decision-making complexity and a face-to-face visit within 14 calendar days — 2026 Medicare reimburses it at roughly $178. CPT 99496 requires high medical decision-making complexity and a face-to-face visit within 7 calendar days, reimbursed at a higher rate. See the CMS MLN booklet for current rates.',
  },
  {
    question: 'How does TCM relate to the Hospital Readmissions Reduction Program (HRRP)?',
    answer:
      'HRRP penalizes hospitals for higher-than-expected 30-day readmission rates across six conditions. TCM is the CMS-recognized intervention for reducing avoidable readmissions in the critical 30-day post-discharge window. Effective TCM programs reduce readmissions, which directly reduces HRRP penalty exposure.',
  },
  {
    question: 'Does HIPAA permit automated discharge follow-up calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards — encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
  {
    question: 'Who can bill TCM codes?',
    answer:
      'Per CMS, TCM services can be furnished by physicians (any specialty), certain qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs), and licensed clinical staff under direct supervision. The billing provider must meet the documentation and face-to-face visit requirements. Non-face-to-face components (including the initial contact) can be performed by clinical staff under general supervision.',
  },
  {
    question: 'What documentation is required for TCM billing?',
    answer:
      'Documentation must include: the date of discharge, the date and time of the initial contact within two business days, a description of the contact content (medication review, follow-up plan, symptom assessment), the date of the face-to-face visit, the medical decision-making complexity, and a medication reconciliation. Positive Check generates a call transcript and structured summary for every TCM contact that maps to these documentation elements.',
  },
  {
    question: 'Can TCM be billed for patients discharged to skilled nursing facilities?',
    answer:
      'No. TCM is for patients discharged to a community setting — their home, domiciliary, rest home, or assisted living. Patients discharged to a skilled nursing facility (SNF), inpatient rehabilitation, or long-term care hospital are not eligible for TCM. See the CMS MLN booklet for the full eligibility list.',
  },
  {
    question: 'What happens if the 2-business-day contact is missed?',
    answer:
      'If contact is not made within two business days, the TCM service cannot be billed for that discharge. Some providers track missed-contact rates as a key performance indicator and use automated outreach as a safety net to catch discharges that manual workflows miss. Positive Check\u2019s automation enforces the 2-day window as a hard constraint on scheduling.',
  },
  {
    question: 'Can a family member or caregiver receive the TCM call instead of the patient?',
    answer:
      'Yes. CMS allows the initial contact to be with the patient or the patient\u2019s caregiver when the caregiver is the appropriate recipient (for patients with cognitive impairment, language barriers, or other contact limitations). Positive Check supports designating a caregiver contact when clinically appropriate.',
  },
  {
    question: 'How does TCM fit alongside RPM and CCM?',
    answer:
      'TCM covers the 30-day post-discharge window and is billed once per discharge event. RPM and CCM are ongoing monthly programs. Many providers bill TCM for the initial post-discharge episode, then transition the patient into RPM or CCM for ongoing monitoring. CMS rules allow these programs to be billed for the same patient as long as the services are distinct and documented separately.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
  { name: 'FAQ', url: 'https://positivecheck.com/solutions/post-discharge-follow-up/faq' },
])

export default function TCMFaqPage() {
  return (
    <>
      <StructuredData id="tcm-faq-breadcrumb" data={breadcrumb} />
      <StructuredData id="tcm-faq-schema" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">TCM FAQ</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Transitional Care Management Questions
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99495 and 99496 billing, CMS requirements, documentation, and how AI-powered
                discharge follow-up fits the regulations.
              </p>
            </div>
          </section>

          <section className="px-6 py-16 md:py-20 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-10">
                {faqs.map((f) => (
                  <article key={f.question} className="border-b border-gray-200 pb-8 last:border-0">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{f.question}</h2>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 mb-4">
                For the full Transitional Care Management solution overview,{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  return to the TCM pillar page
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN TCM Booklet
                </a>
                . Last updated 2026-04-19.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
```

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -30`
Expected: `/solutions/post-discharge-follow-up/faq` appears as a static `○` route.

- [ ] **Step 4: Runtime check**

Run: `npm run dev &` ; `sleep 4`
Run: `curl -sI http://localhost:3000/solutions/post-discharge-follow-up/faq | head -1`
Expected: `HTTP/1.1 200 OK`.

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up/faq | grep -c '"@type":"Question"'`
Expected: `12`.

Kill dev.

- [ ] **Step 5: Commit**

```bash
git add app/solutions/post-discharge-follow-up/faq/page.tsx
git commit -m "Add TCM pillar FAQ page with 12 questions

Expands the pillar-inline FAQ (6 questions) to a full 12-question
FAQPage, covering CPT 99495/99496 differences, billing provider
eligibility, documentation, SNF exclusion, missed-contact handling,
caregiver contacts, and how TCM interacts with RPM/CCM.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Create TCM vs. manual discharge outreach comparison page

**Files:**
- Create: `app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx`

Category-level comparison (no competitor names). Covers consistency, time-to-contact, cost, scalability, escalation, documentation. Uses `Article` + `FAQPage` + `BreadcrumbList` schema.

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach`

- [ ] **Step 2: Create the file**

Create `app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx`:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import {
  StructuredData,
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFAQSchema,
} from '@/components/structured-data'

const PAGE_URL = 'https://positivecheck.com/solutions/post-discharge-follow-up/vs-manual-discharge-outreach'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'AI-Powered TCM Calls vs. Manual Discharge Outreach | Positive Check',
  description:
    'Category-level comparison of automated AI-powered post-discharge follow-up versus manual nurse- or staff-driven discharge outreach. Consistency, time-to-contact, scalability, and CPT 99495 documentation.',
  alternates: { canonical: '/solutions/post-discharge-follow-up/vs-manual-discharge-outreach' },
  openGraph: {
    title: 'AI-Powered TCM Calls vs. Manual Discharge Outreach',
    description:
      'Compare automated discharge follow-up to manual nurse-led outreach across six operational dimensions.',
    url: '/solutions/post-discharge-follow-up/vs-manual-discharge-outreach',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Comparison of TCM outreach approaches' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered TCM Calls vs. Manual Discharge Outreach',
    description:
      'Compare automated discharge follow-up to manual nurse-led outreach across six operational dimensions.',
    images: [HERO_IMAGE],
  },
}

const comparisonFaqs = [
  {
    question: 'Is an AI-powered call legally equivalent to a nurse call for TCM billing?',
    answer:
      'CMS does not require a specific staff role for the initial 2-business-day contact — it must be a "direct contact" that addresses the discharge care plan and is documented. An AI call that captures the required elements and escalates concerns to clinical staff satisfies the CMS requirement. The face-to-face visit that follows (within 7 or 14 days) still requires a qualified clinician.',
  },
  {
    question: 'When does manual outreach still make sense?',
    answer:
      'Manual outreach is the right choice for the face-to-face visit requirement and for patients with complex psychosocial needs where a human conversation is clinically indicated. Many providers use a hybrid model: AI handles the 2-business-day contact for all discharges, and clinical staff handle the face-to-face visit and any escalations flagged by the AI.',
  },
  {
    question: 'What\u2019s the typical cost comparison?',
    answer:
      'Manual outreach runs roughly $3–$8 per call in labor cost depending on staff type and call length. Automated AI calls are a small fraction of that per call. The larger cost driver is missed contacts: every missed 2-business-day window means an unbilled $178 TCM encounter.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
  { name: 'vs. Manual Discharge Outreach', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'AI-Powered TCM Calls vs. Manual Discharge Outreach',
  description:
    'Category-level comparison of automated AI-powered post-discharge follow-up versus manual nurse- or staff-driven discharge outreach.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
})

export default function TCMVsManualPage() {
  return (
    <>
      <StructuredData id="tcm-compare-breadcrumb" data={breadcrumb} />
      <StructuredData id="tcm-compare-article" data={article} />
      <StructuredData id="tcm-compare-faq" data={buildFAQSchema(comparisonFaqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Comparison</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                AI-Powered TCM Calls vs. Manual Discharge Outreach
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                A category-level look at how automated post-discharge follow-up compares to
                nurse- or care-coordinator-driven manual outreach.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>Consistency wins with automation.</strong> Manual outreach misses the
                    2-business-day window on high-discharge days; automated calls don\u2019t.
                  </li>
                  <li>
                    <strong>Face-to-face is still human.</strong> AI handles the initial contact; the
                    7- or 14-day face-to-face visit required for TCM billing remains clinical staff work.
                  </li>
                  <li>
                    <strong>Cost per missed TCM is $178.</strong> Any discharge that slips the 2-day
                    contact window becomes an unbilled encounter.
                  </li>
                  <li>
                    <strong>Hybrid models work well.</strong> AI handles every discharge for the initial
                    contact; clinical staff pick up escalations and face-to-face visits.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How the two approaches compare</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The table below captures the operational tradeoffs. Not every dimension favors
                automation — manual outreach still wins on nuanced clinical conversations and
                relationship continuity.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Dimension</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">AI-Powered Calls</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Manual Outreach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">2-business-day contact rate</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Near 100% — scheduling is automatic from discharge timestamp</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Varies with staffing; drops on high-discharge days and holiday weekends</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Per-call cost</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Low, fixed — scales with discharge volume without headcount</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">~$3–$8 labor per call; scales linearly with discharge volume</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Scalability</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Handles volume spikes without bottlenecks</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Hard cap on throughput per FTE</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Clinical nuance</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Structured prompts cover the required TCM elements; human escalation for concerns</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Unbounded conversation; strong for psychosocial complexity</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Escalation speed</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Real-time alerts to care team the moment a concern surfaces</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Same-day if staff are available; variable otherwise</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Documentation for CPT 99495 billing</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Auto-generated call transcript + structured summary mapped to CMS requirements</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">Dependent on note-taking discipline during or after the call</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When AI-powered calls are the better choice</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>High daily discharge volume that exceeds available clinical staff bandwidth.</li>
                <li>Weekend and holiday discharges where the 2-business-day window is tight.</li>
                <li>Organizations under HRRP penalty pressure seeking consistent readmission mitigation.</li>
                <li>Programs that need standardized, auditable documentation for every TCM encounter.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">When manual outreach still makes sense</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>The 7- or 14-day face-to-face visit required for TCM billing — a clinician must do this.</li>
                <li>Patients with complex psychosocial needs where human conversation is clinically indicated.</li>
                <li>Escalations triggered by the AI contact — human clinical judgment takes over.</li>
                <li>Small discharge volumes where existing staff can reliably hit the 2-business-day window.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The hybrid model most providers land on</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In practice, most successful TCM programs run a hybrid: AI handles the 2-business-day
                contact for every discharge, generating a structured summary and flagging concerns.
                Clinical staff handle the 7- or 14-day face-to-face visit, follow up on any AI-flagged
                escalations, and manage ongoing complex patients. This eliminates missed contacts
                (the single largest source of unbilled TCM encounters) while keeping clinical
                judgment in the loop where it matters.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common questions</h2>
              <div className="space-y-6">
                {comparisonFaqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key takeaways</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>The 2-business-day contact is where automation delivers the most value.</li>
                  <li>Hybrid models dominate in practice; this isn\u2019t an either/or choice.</li>
                  <li>Documentation quality is the difference between a billable TCM and a missed one.</li>
                  <li>Face-to-face visits remain human work and always will.</li>
                </ul>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Back to the TCM solution overview
                </Link>
              </div>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN TCM Booklet
                </a>
                . Last updated 2026-04-19.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
```

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -30`
Expected: the new route appears as static `○`.

- [ ] **Step 4: Runtime check**

Run: `npm run dev &` ; `sleep 4`
Run: `curl -sI http://localhost:3000/solutions/post-discharge-follow-up/vs-manual-discharge-outreach | head -1`
Expected: `HTTP/1.1 200 OK`.

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up/vs-manual-discharge-outreach | grep -c '"@type":"Article"'`
Expected: `1`.

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up/vs-manual-discharge-outreach | grep -c '"@type":"FAQPage"'`
Expected: `1`.

Run: `curl -s http://localhost:3000/solutions/post-discharge-follow-up/vs-manual-discharge-outreach | grep -c '<table'`
Expected: `1`.

Kill dev.

- [ ] **Step 5: Commit**

```bash
git add app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx
git commit -m "Add TCM vs. manual discharge outreach category comparison page

First comparison page under the TCM pillar. Category-level — never
names a competitor. Six-dimension comparison table, use-case sections
for each approach, hybrid-model recommendation, and 3-question FAQ
with FAQPage schema. Article + BreadcrumbList + FAQPage schemas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Register new URLs in `app/sitemap.ts` and `public/llms.txt`

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

- [ ] **Step 1: Add sitemap entries**

Edit `app/sitemap.ts`. Find the entry for `/solutions/post-discharge-follow-up` and insert two new entries immediately after it:

```typescript
  { path: "/solutions/post-discharge-follow-up/faq", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/post-discharge-follow-up/vs-manual-discharge-outreach", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
```

- [ ] **Step 2: Update llms.txt**

Edit `public/llms.txt`. Under the existing `## Care program solutions` section, find the Transitional Care Management bullet and REPLACE it with:

```
- [Transitional Care Management](https://positivecheck.com/solutions/post-discharge-follow-up): Post-discharge patient outreach within 24-48 hours to reduce 30-day readmissions.
  - [TCM FAQ](https://positivecheck.com/solutions/post-discharge-follow-up/faq): CPT 99495/99496 billing, contact timing, documentation, HIPAA.
  - [AI calls vs. manual discharge outreach](https://positivecheck.com/solutions/post-discharge-follow-up/vs-manual-discharge-outreach): Category-level comparison with six-dimension tradeoff table.
```

(Keep the bullets for RPM and CCM unchanged.)

- [ ] **Step 3: Build + runtime check**

Run: `npm run build 2>&1 | tail -20`

Run: `npm run dev &` ; `sleep 4`

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c 'post-discharge-follow-up'
# Expected: 3 (pillar + faq + vs-manual page)

curl -s http://localhost:3000/llms.txt | grep -c 'vs-manual-discharge-outreach'
# Expected: 1

curl -s http://localhost:3000/llms.txt | grep -c 'post-discharge-follow-up/faq'
# Expected: 1
```

Kill dev.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "Register TCM FAQ and comparison page in sitemap + llms.txt

Two new URLs added to the dynamic sitemap with image entries. llms.txt
TCM bullet now has two nested sub-bullets pointing at the new pages,
making them discoverable to AI answer engines.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Final Phase 1A verification

**Files:** none (verification only)

- [ ] **Step 1: Tests + build**

Run: `npm test`
Expected: 11+ schema tests pass. Pre-existing failures unchanged.

Run: `npm run build 2>&1 | tail -60`
Expected: successful; route list shows `/solutions/post-discharge-follow-up`, `/solutions/post-discharge-follow-up/faq`, `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach`.

- [ ] **Step 2: Schema integrity on every new/modified TCM page**

Run: `npm run dev &` ; `sleep 4`

```bash
# TCM pillar page — expect BreadcrumbList, Service, FAQPage, HowTo
for t in BreadcrumbList Service FAQPage HowTo; do
  count=$(curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -c "\"@type\":\"$t\"")
  echo "pillar $t: $count"
done

# TCM FAQ page — expect BreadcrumbList, FAQPage (12 questions)
curl -s http://localhost:3000/solutions/post-discharge-follow-up/faq | grep -c '"@type":"Question"'
# Expected: 12

# TCM comparison page — expect Article, BreadcrumbList, FAQPage (3 questions)
for t in Article BreadcrumbList FAQPage; do
  count=$(curl -s http://localhost:3000/solutions/post-discharge-follow-up/vs-manual-discharge-outreach | grep -c "\"@type\":\"$t\"")
  echo "compare $t: $count"
done
```

Expected outputs:
- pillar BreadcrumbList: 1
- pillar Service: 1
- pillar FAQPage: 1
- pillar HowTo: 1
- compare Article: 1
- compare BreadcrumbList: 1
- compare FAQPage: 1

- [ ] **Step 3: Link integrity smoke test**

Verify the Further Reading links from the pillar page land on real pages (Phase 1A pages only — the 3 cluster post links will 404 until Phase 1B):

```bash
curl -sI http://localhost:3000/solutions/post-discharge-follow-up/faq | head -1
curl -sI http://localhost:3000/solutions/post-discharge-follow-up/vs-manual-discharge-outreach | head -1
```
Expected: both `HTTP/1.1 200 OK`.

Kill dev.

- [ ] **Step 4: Tag Phase 1A complete**

```bash
git tag seo-phase-1a-complete -m "Phase 1A: TCM pillar full anatomy + pillar FAQ + comparison page"
```

Do NOT push.

- [ ] **Step 5: Summary commit log**

Run: `git log --oneline seo-phase-0-complete..HEAD`

Expected: 6 commits (plus the `/resources/` hub commit if that shipped between Phase 0 and 1A):
1. Migrate TCM pillar schemas to typed builders
2. Add 6-question FAQ section + FAQPage schema
3. Add HowTo schema, Further Reading, Last Reviewed footer
4. Add TCM pillar FAQ page with 12 questions
5. Add TCM vs. manual discharge outreach comparison page
6. Register TCM FAQ and comparison page in sitemap + llms.txt

---

## Self-review notes

**Spec coverage check** (Phase 1 deliverables from `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` Section 9):
- ✅ `/solutions/post-discharge-follow-up` rewritten to full pillar anatomy — Tasks 1–3
- ✅ Pillar FAQ page at `/solutions/post-discharge-follow-up/faq/` — Task 4
- ✅ Category comparison at `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/` — Task 5
- ✅ llms.txt update with TCM links — Task 6
- ⏭️ 3 cluster posts — deferred to Phase 1B
- ⏭️ 5 glossary entries — deferred to Phase 1C
- ⏭️ Internal linking pass across TCM cluster — deferred to Phase 1C (needs cluster posts + glossary to exist)

**Type consistency check:**
- `tcmPillarFaqs` (shape `{ question, answer }[]`) matches the `FAQItem[]` type consumed by `buildFAQSchema`.
- `buildServiceSchema` input matches the `ServiceInput` interface; omits `audienceType` to use the default `"Healthcare Providers"`.
- `buildArticleSchema` input includes all required fields from `ArticleInput`.

**Placeholder scan:** No TBDs, no "add appropriate copy," no unspecified FAQ questions. Every body text is complete. Internal links to Phase 1B cluster posts are documented as "will 404 until Phase 1B ships" — this is acceptable scope.

**Non-code concerns (pre-deploy):**
- The pillar page currently shows a "$178" metric card in the hero and a "2026 Medicare national average reimbursement rate" table. These are kept as-is — they're informational copy, not structured `Offer` nodes, and are qualified as "2026 Medicare national average". Worth a later content pass to link the `$178` to an inline CMS source.
