# SEO/GEO Phase 3A — CCM Pillar Structural Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the CCM pillar to full pillar anatomy (matching what Phase 1A did for TCM and Phase 2A did for RPM). No pre-existing factual errors to correct this time.

**Architecture:** Tasks mirror Phase 2A structure exactly: migrate pillar schemas to typed builders, add a FAQ section with `FAQPage` schema, add `HowTo` + Further Reading + Last Reviewed, create a 12-question pillar FAQ page, and create the first category-level comparison page (CCM vs in-house care coordinators). Task 6 registers the 2 new URLs in sitemap + llms.txt. Task 7 is final verification. One small content addition: add CPT 99489 to the pillar CPT table (it's already listed in `/resources/billing-guide` and in the Phase 3C glossary scope, but currently missing from the pillar table).

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, Phase 0 typed builders from `lib/schema.ts` via `components/structured-data.tsx`.

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` — Section 3 (pillar anatomy), Section 5 (comparison anatomy), Section 9 Phase 3.

**Reference plans (pattern source):**
- `docs/superpowers/plans/2026-04-19-seo-geo-phase-1a-tcm-pillar-structural.md`
- `docs/superpowers/plans/2026-04-19-seo-geo-phase-2a-rpm-pillar-structural.md`

**CPT code reference (correct CCM code set per Medicare fee schedule + CMS MLN 909188):**
- **CPT 99490** — CCM, first 20 min/month non-complex (~$66)
- **CPT 99439** — CCM, each additional 20 min non-complex (~$48; up to 2x per month)
- **CPT 99487** — Complex CCM, first 60 min/month (~$144)
- **CPT 99489** — Complex CCM, each additional 30 min/month (~$72)
- **CPT 99491** — CCM, 30 min/month furnished personally by a physician or QHP (~$83, in lieu of 99490, not combined)

**Primary source citation (use consistently across all Phase 3 pages):**
`https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf` (CMS MLN Chronic Care Management Services booklet)

**Phase 3B and 3C (not this plan):**
- **3B:** 3 long-form CCM cluster posts (`cpt-99490-billing-guide`, `2-chronic-conditions-requirement`, `20-minutes-monthly-requirement`)
- **3C:** 5 glossary entries (cpt-99490, cpt-99439, cpt-99487, cpt-99489, chronic-care-management) + internal linking audit

---

## File structure (Phase 3A scope)

**Modified**
- `app/solutions/chronic-care-management/page.tsx` — migrate schemas to typed builders, add 99489 row to CPT table, add FAQ section + FAQPage schema, add HowTo + Further Reading + Last Reviewed footer
- `app/sitemap.ts` — add 2 new URLs
- `public/llms.txt` — nest 2 new entries under existing CCM bullet

**Created**
- `app/solutions/chronic-care-management/faq/page.tsx` — 12-question pillar FAQ
- `app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx` — category comparison

---

## Task 1: Migrate CCM pillar schemas to typed builders + add CPT 99489 row

**Files:**
- Modify: `app/solutions/chronic-care-management/page.tsx`

Two small changes in one commit:
1. Replace the two inline JSON-LD `<script>` blocks (BreadcrumbList + Service) with typed-builder `<StructuredData>` calls. This carries `legalName: "Positive Check LLC"` into the Service provider via `buildPublisherOrgNode()`.
2. Add a CPT 99489 row to the existing CPT Billing Codes table so the pillar table matches `/resources/billing-guide` and the Phase 3C glossary scope.

- [ ] **Step 1: Read the current top of the file**

Run: `sed -n '1,70p' app/solutions/chronic-care-management/page.tsx`
Expected: see imports + metadata + opening JSX with two inline schema blocks at lines ~34–67.

- [ ] **Step 2: Add the structured-data import**

In `app/solutions/chronic-care-management/page.tsx`, add this import after the existing `import { Button } from '@/components/ui/button'` line:

```typescript
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema } from '@/components/structured-data'
```

- [ ] **Step 3: Replace the two inline script blocks**

Find this block (currently at lines 34–67, between `return (` and `<div className="min-h-screen bg-white">`):

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
              { "@type": "ListItem", "position": 3, "name": "Chronic Care Management", "item": "https://positivecheck.com/solutions/chronic-care-management" }
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
            "serviceType": "Chronic Care Management",
            "name": "Chronic Care Management (CCM) with AI Wellness Calls",
            "description": "Daily AI wellness calls for CCM patients — medication adherence checks, care plan follow-up, and documentation ready for CPT 99490, 99439, and 99487 billing.",
            "provider": {
              "@type": "Organization",
              "name": "Positive Check",
              "url": "https://positivecheck.com"
            },
            "areaServed": { "@type": "Country", "name": "United States" },
            "audience": { "@type": "Audience", "audienceType": "Healthcare Providers" },
            "category": "Chronic Care Management"
          })
        }}
      />
```

Replace with:

```jsx
      <StructuredData
        id="ccm-pillar-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://positivecheck.com' },
          { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
          { name: 'Chronic Care Management', url: 'https://positivecheck.com/solutions/chronic-care-management' },
        ])}
      />
      <StructuredData
        id="ccm-pillar-service"
        data={buildServiceSchema({
          name: 'Chronic Care Management (CCM) with AI Wellness Calls',
          serviceType: 'Chronic Care Management',
          description:
            'Daily AI wellness calls for CCM patients \u2014 medication adherence checks, care plan follow-up, and documentation ready for CPT 99490, 99439, 99487, and 99489 billing.',
          category: 'Chronic Care Management',
        })}
      />
```

- [ ] **Step 4: Add CPT 99489 row to the existing billing-codes table**

Find the existing rows array in the CCM Billing Codes table (currently around lines 177–181):

```jsx
                        {[
                          { code: '99490', desc: 'CCM — first 20 min non-complex chronic care management', rate: '$66' },
                          { code: '99439', desc: 'CCM — each additional 20 min non-complex CCM', rate: '$48' },
                          { code: '99487', desc: 'Complex CCM — first 60 min for patients with multiple chronic conditions', rate: '$144' },
                        ].map((row) => (
```

Replace with (adds a fourth row for 99489):

```jsx
                        {[
                          { code: '99490', desc: 'CCM \u2014 first 20 min non-complex chronic care management', rate: '$66' },
                          { code: '99439', desc: 'CCM \u2014 each additional 20 min non-complex CCM (up to 2x/month)', rate: '$48' },
                          { code: '99487', desc: 'Complex CCM \u2014 first 60 min for patients with multiple chronic conditions', rate: '$144' },
                          { code: '99489', desc: 'Complex CCM \u2014 each additional 30 min beyond the 99487 threshold', rate: '$72' },
                        ].map((row) => (
```

- [ ] **Step 5: Build check**

Run: `npm run build 2>&1 | tail -30`
Expected: `/solutions/chronic-care-management` still renders as a static route. No schema-related errors.

- [ ] **Step 6: Runtime check**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/solutions/chronic-care-management | grep -o '"legalName":"[^"]*"' | sort -u
# Expected: "legalName":"Positive Check LLC"

curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"BreadcrumbList"'
# Expected: 1

curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"Service"'
# Expected: 1

curl -s http://localhost:3000/solutions/chronic-care-management | grep -c '99489'
# Expected: 1 (new table row)

pkill -f "next dev"
```

- [ ] **Step 7: Commit**

```bash
git add app/solutions/chronic-care-management/page.tsx
git commit -m "$(cat <<'EOF'
Migrate CCM pillar schemas to typed builders + add 99489 row

Replaces two inline JSON-LD script blocks with <StructuredData>
components backed by buildBreadcrumbSchema and buildServiceSchema.
Service schema now carries legalName 'Positive Check LLC' via
buildPublisherOrgNode. Adds CPT 99489 (complex CCM additional 30 min)
to the pillar billing-codes table to match /resources/billing-guide
coverage.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Add FAQ section + FAQPage schema to CCM pillar

**Files:**
- Modify: `app/solutions/chronic-care-management/page.tsx`

Add 6 CCM-specific FAQs inline on the pillar page with `FAQPage` schema. A link at the bottom of the section points to the full `/faq` page (created in Task 4).

- [ ] **Step 1: Extend import**

Update the `@/components/structured-data` import in `app/solutions/chronic-care-management/page.tsx` to include `buildFAQSchema`:

```typescript
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/components/structured-data'
```

- [ ] **Step 2: Define the FAQ data at module scope**

Add this constant AFTER the `metadata` export and BEFORE `export default function ChronicCareManagementPage()`:

```typescript
const ccmPillarFaqs = [
  {
    question: 'What is Chronic Care Management (CCM)?',
    answer:
      "Chronic Care Management is a Medicare-reimbursed care coordination program for patients with two or more chronic conditions expected to last at least 12 months (or until death) and that place the patient at significant risk of death, acute exacerbation, or functional decline. Clinical staff deliver non-face-to-face care coordination \u2014 medication management, care plan updates, patient communication \u2014 and bill CPT 99490 (first 20 minutes non-complex), 99439 (each additional 20 minutes), 99487 (first 60 minutes complex), and 99489 (each additional 30 minutes complex).",
  },
  {
    question: 'What is the two-chronic-conditions requirement?',
    answer:
      'To qualify for CCM, a patient must have two or more chronic conditions. This distinguishes CCM from RPM (which requires only one chronic condition) and from Principal Care Management (PCM, which is specifically for a single high-risk condition). The chronic conditions must be documented in the patient\u2019s medical record and must be expected to last at least 12 months or until death. Common qualifying combinations include hypertension + diabetes, COPD + heart failure, and diabetes + chronic kidney disease.',
  },
  {
    question: 'What is the 20-minute monthly clinical staff time requirement?',
    answer:
      'CPT 99490 requires at least 20 minutes of clinical staff time per calendar month spent on CCM activities for a given patient. The time can be cumulative across multiple touchpoints in the month \u2014 a 5-minute medication check call, a 10-minute care plan update, and a 5-minute specialist-coordination task all count toward the threshold. If the cumulative time reaches the 20-minute mark, 99490 is billable. If it does not, no CCM code can be billed for that patient that month. Each additional 20 minutes may be billed under 99439 (up to twice per month for non-complex CCM).',
  },
  {
    question: 'Can AI-powered wellness calls count toward the 20-minute CCM time requirement?',
    answer:
      'AI calls themselves do not count as "clinical staff time" under the CMS definition, but clinical staff time spent reviewing AI call summaries, updating care plans based on flagged concerns, coordinating escalations, and documenting the interaction does count. In practice, AI calls generate structured summaries that make the 20-minute clinical review highly efficient \u2014 the call captures the patient content, clinical staff spend their time on care-plan action rather than data gathering.',
  },
  {
    question: "What's the difference between non-complex (99490) and complex (99487) CCM?",
    answer:
      'Non-complex CCM (CPT 99490, \u007e$66/month) requires 20 minutes of clinical staff time and at least one moderate-complexity medical decision-making element per month. Complex CCM (CPT 99487, \u007e$144/month) requires 60 minutes of clinical staff time and substantial revision of the care plan for patients with moderate-to-high complexity medical decision-making. Complex CCM applies to patients with unstable conditions, recent hospitalizations, or significant care-plan changes. A patient can only be billed under one track per month \u2014 either non-complex or complex, not both.',
  },
  {
    question: 'Does HIPAA permit AI-powered CCM wellness calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
];
```

- [ ] **Step 3: Render the FAQPage schema**

AFTER the `<StructuredData id="ccm-pillar-service" ... />` block, insert:

```jsx
      <StructuredData
        id="ccm-pillar-faq"
        data={buildFAQSchema(ccmPillarFaqs)}
      />
```

- [ ] **Step 4: Add the FAQ JSX section**

Find the existing `{/* CTA */}` section (near the end, containing "Ready to Scale Your CCM Program?"). Insert a new `<section>` IMMEDIATELY BEFORE it:

```jsx
          {/* FAQ */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {ccmPillarFaqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/solutions/chronic-care-management/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  See all Chronic Care Management questions
                </Link>
              </div>
            </div>
          </section>
```

- [ ] **Step 5: Build + runtime check**

```bash
npm run build 2>&1 | tail -10

npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"FAQPage"'
# Expected: 1

curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 6

pkill -f "next dev"
```

- [ ] **Step 6: Commit**

```bash
git add app/solutions/chronic-care-management/page.tsx
git commit -m "$(cat <<'EOF'
Add 6-question FAQ section + FAQPage schema to CCM pillar

Adds 6 CCM-specific FAQs inline on the pillar page covering the
2-chronic-conditions requirement, the 20-minute/month clinical staff
time threshold, AI calls vs clinical staff time, 99490 vs 99487
complexity tracks, and HIPAA. Links to the full /faq page (created
in Task 4).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Add HowTo schema + Further Reading + Last Reviewed footer

**Files:**
- Modify: `app/solutions/chronic-care-management/page.tsx`

Three additions in one commit — all structural augmentations to the same page:
1. `HowTo` schema attached to the existing "How Positive Check Supports CCM" section (4 cards already present).
2. A "Further Reading" section linking to the 3 Phase 3B cluster posts and the Phase 3A comparison page (3 of 4 links will 404 until Phase 3B ships — same pattern as 1A/2A).
3. A "Last Reviewed" footer citing the CMS MLN CCM booklet.

- [ ] **Step 1: Add HowTo StructuredData block**

After the `<StructuredData id="ccm-pillar-faq" ... />` block from Task 2, add:

```jsx
      <StructuredData
        id="ccm-pillar-howto"
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How Positive Check Supports Chronic Care Management',
          description:
            'Automate CCM patient engagement in four steps: medication adherence checks, care plan follow-up, alert-triggered escalation, and support for complex patients.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Medication Adherence Checks',
              text:
                'Daily calls include medication check-ins, asking patients about doses taken, side effects, and refill needs \u2014 key documentation for CCM.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Care Plan Follow-Up',
              text:
                "Structured wellness questions align to each patient's care plan, generating documented follow-up touchpoints for CCM billing.",
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Alert-Triggered Callbacks',
              text:
                'When a call flags a concern, care teams receive immediate alerts \u2014 generating additional documented care coordination time for CPT 99439.',
            },
            {
              '@type': 'HowToStep',
              position: 4,
              name: 'Complex Patient Support',
              text:
                'For patients with multiple chronic conditions, daily monitoring with escalation protocols supports the higher documentation bar for CPT 99487 and 99489.',
            },
          ],
        }}
      />
```

- [ ] **Step 2: Add Further Reading section**

IMMEDIATELY AFTER the FAQ section (from Task 2) and BEFORE the CTA section, insert:

```jsx
          {/* Further Reading */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Further Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Billing guide</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CPT 99490 Billing Guide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eligibility, the 20-minute requirement, documentation, and how 99439/99487/99489 stack.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/2-chronic-conditions-requirement"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Eligibility</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The 2-Chronic-Conditions Requirement
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Which combinations qualify, documentation expectations, and the line between CCM and PCM.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/20-minutes-monthly-requirement"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Workflow</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The 20-Minute Monthly Requirement
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    How time is tracked, what counts as clinical staff time, and common documentation pitfalls.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/vs-in-house-care-coordinators"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Comparison</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Calls vs. In-House Care Coordinators
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Category-level comparison of automated engagement versus staffing an in-house CCM team.
                  </p>
                </Link>
              </div>
            </div>
          </section>
```

Note: 3 of the 4 links target pages that don't exist yet (Phase 3B cluster posts). They will 404 until Phase 3B ships. Matches the Phase 1A/2A pattern.

- [ ] **Step 3: Add Last Reviewed footer**

Inside `<main>`, AFTER the CTA section and BEFORE `</main>`, add:

```jsx
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN CCM Booklet
                </a>
                . Last updated 2026-04-20.
              </p>
            </div>
          </section>
```

- [ ] **Step 4: Build + runtime check**

```bash
npm run build 2>&1 | tail -10

npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"HowTo"'
# Expected: 1

curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"HowToStep"' | wc -l
# Expected: 4

curl -s http://localhost:3000/solutions/chronic-care-management | grep -c 'Reviewed against current CMS'
# Expected: 1

pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/solutions/chronic-care-management/page.tsx
git commit -m "$(cat <<'EOF'
Add HowTo schema, Further Reading, and Last Reviewed footer to CCM pillar

HowTo schema formalizes the 4-step 'How Positive Check Supports CCM'
section with HowToStep entries. Further Reading links to the three
Phase 3B cluster posts and the Phase 3A comparison page. Last Reviewed
footer cites the CMS MLN CCM booklet (MLN 909188).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Create CCM pillar FAQ page (12 questions)

**Files:**
- Create: `app/solutions/chronic-care-management/faq/page.tsx`

A dedicated FAQ page. Structure matches `app/solutions/remote-patient-monitoring/faq/page.tsx` exactly (same hero gradient, same body layout, same back-link, same Last Reviewed footer). Only the content differs.

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/solutions/chronic-care-management/faq`

- [ ] **Step 2: Create the file**

Create `app/solutions/chronic-care-management/faq/page.tsx`:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Chronic Care Management (CCM) FAQ | Positive Check',
  description:
    'Answers about Chronic Care Management: CPT 99490, 99439, 99487, and 99489 billing, the 2-chronic-conditions requirement, the 20-minute monthly time threshold, documentation, HIPAA, and how AI-powered wellness calls fit CMS rules.',
  alternates: { canonical: '/solutions/chronic-care-management/faq' },
  openGraph: {
    title: 'Chronic Care Management (CCM) FAQ | Positive Check',
    description:
      'Answers about CCM billing, eligibility, time thresholds, documentation, HIPAA, and AI wellness calls.',
    url: '/solutions/chronic-care-management/faq',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check CCM FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chronic Care Management (CCM) FAQ | Positive Check',
    description:
      'Answers about CCM billing, eligibility, time thresholds, documentation, HIPAA, and AI wellness calls.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const faqs = [
  {
    question: 'What is Chronic Care Management (CCM)?',
    answer:
      "Chronic Care Management is a Medicare-reimbursed care coordination program for patients with two or more chronic conditions expected to last at least 12 months (or until death) and that place the patient at significant risk of death, acute exacerbation, or functional decline. Clinical staff deliver non-face-to-face care coordination \u2014 medication management, care plan updates, patient communication \u2014 and bill CPT 99490 (first 20 minutes non-complex), 99439 (each additional 20 minutes), 99487 (first 60 minutes complex), and 99489 (each additional 30 minutes complex).",
  },
  {
    question: 'What is the two-chronic-conditions requirement?',
    answer:
      'To qualify for CCM, a patient must have two or more chronic conditions. This distinguishes CCM from RPM (which requires only one chronic condition) and from Principal Care Management (PCM, which is specifically for a single high-risk condition). The chronic conditions must be documented in the patient\u2019s medical record and must be expected to last at least 12 months or until death. Common qualifying combinations include hypertension + diabetes, COPD + heart failure, and diabetes + chronic kidney disease.',
  },
  {
    question: 'What is the 20-minute monthly clinical staff time requirement?',
    answer:
      'CPT 99490 requires at least 20 minutes of clinical staff time per calendar month spent on CCM activities for a given patient. The time can be cumulative across multiple touchpoints in the month \u2014 a 5-minute medication check call, a 10-minute care plan update, and a 5-minute specialist-coordination task all count toward the threshold. If the cumulative time reaches the 20-minute mark, 99490 is billable. If it does not, no CCM code can be billed for that patient that month. Each additional 20 minutes may be billed under 99439 (up to twice per month for non-complex CCM).',
  },
  {
    question: 'Can AI-powered wellness calls count toward the 20-minute CCM time requirement?',
    answer:
      'AI calls themselves do not count as "clinical staff time" under the CMS definition, but clinical staff time spent reviewing AI call summaries, updating care plans based on flagged concerns, coordinating escalations, and documenting the interaction does count. In practice, AI calls generate structured summaries that make the 20-minute clinical review highly efficient \u2014 the call captures the patient content, clinical staff spend their time on care-plan action rather than data gathering.',
  },
  {
    question: "What's the difference between non-complex (99490) and complex (99487) CCM?",
    answer:
      'Non-complex CCM (CPT 99490, \u007e$66/month) requires 20 minutes of clinical staff time and at least one moderate-complexity medical decision-making element per month. Complex CCM (CPT 99487, \u007e$144/month) requires 60 minutes of clinical staff time and substantial revision of the care plan for patients with moderate-to-high complexity medical decision-making. Complex CCM applies to patients with unstable conditions, recent hospitalizations, or significant care-plan changes. A patient can only be billed under one track per month \u2014 either non-complex or complex, not both.',
  },
  {
    question: 'Does HIPAA permit AI-powered CCM wellness calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
  {
    question: 'Who can furnish CCM services?',
    answer:
      'CCM services can be furnished by physicians, non-physician practitioners (NPs, PAs, CNSs, CNMs), and clinical staff under the general supervision of the billing provider. "Clinical staff" includes RNs, LPNs, medical assistants, and other licensed personnel acting within their scope of practice. Only one billing provider can bill CCM codes for a given patient per calendar month, even if multiple practices are involved in that patient\u2019s care.',
  },
  {
    question: 'What about CPT 99439 and 99489 \u2014 the add-on codes?',
    answer:
      'CPT 99439 is the non-complex CCM add-on for each additional 20 minutes beyond the initial 99490 threshold, billable up to 2x per month (so a non-complex CCM patient with 60 minutes of clinical staff time in a month could bill 99490 + 99439 + 99439). CPT 99489 is the complex CCM add-on for each additional 30 minutes beyond the 99487 60-minute threshold. Both require the same documentation discipline as the base codes: time tracking, care plan updates, and CMS-recognized activities.',
  },
  {
    question: 'How does CCM interact with RPM, TCM, and PCM for the same patient?',
    answer:
      'CMS permits CCM to be billed concurrently with RPM (Remote Patient Monitoring), TCM (Transitional Care Management), and PCM (Principal Care Management) for the same patient, as long as the services are distinct and documented separately. Many practices use TCM during the 30-day post-discharge window, then transition stable patients into CCM (for multi-condition coordination) or PCM (for single-condition focus). RPM layers on top of CCM when remote device data is part of the care plan.',
  },
  {
    question: 'Does the patient need to give consent for CCM?',
    answer:
      'Yes. CMS requires that the patient be informed about CCM services, their right to stop services at any time, the cost-sharing (CCM has a copay), and the fact that only one provider can bill CCM for them in a given month. Consent can be verbal or written but must be documented in the medical record. The consent conversation typically happens during a face-to-face visit (E/M, AWV, IPPE, or initial CCM visit) before CCM is first billed.',
  },
  {
    question: 'What documentation does CMS expect for CCM services?',
    answer:
      'Documentation must include: patient consent, a comprehensive care plan accessible 24/7 to the care team, cumulative clinical staff time for the month, descriptions of the care coordination activities (medication management, specialist coordination, patient communication), and any care plan updates. Positive Check generates structured summaries of each wellness call that help clinical staff quickly document care-plan-relevant changes and keep time tracking complete.',
  },
  {
    question: 'Can CCM be billed for patients in skilled nursing facilities or hospice?',
    answer:
      'Generally no. CMS excludes patients in an inpatient hospital, skilled nursing facility, inpatient rehab facility, or hospice from CCM billing. CCM is for community-dwelling patients \u2014 their home, assisted living, or similar setting. Patients receiving care in a facility-based setting are typically covered by the facility\u2019s per-diem payment, which already includes care coordination. See the CMS MLN CCM booklet for the full list of excluded settings.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/solutions/chronic-care-management' },
  { name: 'FAQ', url: 'https://positivecheck.com/solutions/chronic-care-management/faq' },
])

export default function CCMFaqPage() {
  return (
    <>
      <StructuredData id="ccm-faq-breadcrumb" data={breadcrumb} />
      <StructuredData id="ccm-faq-schema" data={buildFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">CCM FAQ</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Chronic Care Management Questions
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99490/99439/99487/99489 billing, the 2-chronic-conditions requirement, the
                20-minute monthly time threshold, documentation, and how AI-powered engagement
                fits the regulations.
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
                For the full Chronic Care Management solution overview,{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  return to the CCM pillar page
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
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN CCM Booklet
                </a>
                . Last updated 2026-04-20.
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
Expected: `/solutions/chronic-care-management/faq` appears as a static `○` route.

- [ ] **Step 4: Runtime check**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -sI http://localhost:3000/solutions/chronic-care-management/faq | head -1
# Expected: HTTP/1.1 200 OK

curl -s http://localhost:3000/solutions/chronic-care-management/faq | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 12

pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/solutions/chronic-care-management/faq/page.tsx
git commit -m "$(cat <<'EOF'
Add CCM pillar FAQ page with 12 questions

Expands the pillar-inline FAQ (6 questions) to a full 12-question
FAQPage, covering the 2-chronic-conditions rule, 20-minute time
threshold, 99490 vs 99487 complexity tracks, 99439/99489 add-ons,
who can furnish CCM, concurrent billing with RPM/TCM/PCM, consent,
documentation, and SNF/hospice exclusions.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Create CCM vs. in-house care coordinators comparison page

**Files:**
- Create: `app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx`

Category-level comparison (NO competitor names). The natural counterpoint for CCM is staffing an in-house care-coordinator team vs. using AI-powered engagement to amplify existing clinical staff. Structure mirrors the TCM and RPM comparison pages exactly.

### Content spec

**Metadata:**

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/chronic-care-management/vs-in-house-care-coordinators'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'AI-Powered CCM vs. In-House Care Coordinators | Positive Check',
  description:
    'Category-level comparison of AI-powered Chronic Care Management engagement versus staffing an in-house care-coordinator team. Staffing cost, throughput, documentation, CPT 99490 time capture, and the hybrid model most practices land on.',
  alternates: { canonical: '/solutions/chronic-care-management/vs-in-house-care-coordinators' },
  openGraph: {
    title: 'AI-Powered CCM vs. In-House Care Coordinators',
    description:
      'How AI-powered CCM engagement compares to staffing an in-house care-coordinator team across six operational dimensions.',
    url: '/solutions/chronic-care-management/vs-in-house-care-coordinators',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'CCM engagement approaches compared' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered CCM vs. In-House Care Coordinators',
    description:
      'Category-level comparison of AI-powered CCM engagement versus an in-house care-coordinator team.',
    images: [HERO_IMAGE],
  },
}
```

**Hero:** eyebrow `"Comparison"`, H1 `"AI-Powered CCM vs. In-House Care Coordinators"`, subtitle `"A category-level look at how automated CCM engagement compares to staffing an in-house care-coordinator team on cost, throughput, documentation, and the 20-minute time threshold."`

**TL;DR box (5 bullets, purple-50):**
1. Fully loaded in-house care coordinator cost is roughly $65,000–$95,000/year (salary + benefits + overhead); one coordinator typically manages 100–200 CCM patients.
2. The 20-minute/month/patient threshold is the operational constraint — miss it and 99490 is unbillable for that patient that month.
3. AI-powered engagement captures the patient content; clinical staff time shifts to care-plan action and documentation, making the 20-minute threshold easier to hit reliably.
4. Documentation discipline is the difference between a billable CCM and a missed one; automation generates structured summaries that reduce note-writing friction.
5. Hybrid models dominate in practice: AI handles routine touchpoints, care coordinators handle complex/escalated patients and face-to-face work.

**Comparison table (6 dimensions, semantic `<table>`):**

| Dimension | AI-Powered CCM engagement | In-House Care Coordinators |
|---|---|---|
| Fully loaded monthly cost | Low, fixed \u2014 scales with enrolled volume without headcount | \u007e$5,400\u2013$7,900/month per FTE (salary + benefits + overhead) |
| Patients per FTE | Not constrained by human throughput \u2014 volume scales with technology | \u007e100\u2013200 patients per care coordinator depending on complexity |
| 20-minute/month threshold consistency | Structured call cadence + summaries make the threshold easy to hit for every enrolled patient | Depends on staff bandwidth; high-volume months see missed thresholds |
| Clinical nuance | Structured prompts cover CCM activities; escalates concerns to human staff | Unbounded conversation; strong for psychosocial complexity and rapport |
| Documentation for 99490/99439 billing | Structured per-call summaries map to CCM activities + time accrual | Dependent on note-taking discipline; variable across staff |
| Escalation speed | Real-time alerts the moment a concern surfaces | Same-shift if staff available; variable otherwise |

**When AI-powered CCM engagement wins:**
- Practices with enrolled volumes that exceed available coordinator bandwidth.
- Programs targeting full 99490 capture across every enrolled patient (consistency problem).
- Populations with heavy medication regimens where routine check-ins drive adherence.
- Multi-location practices that need standardized documentation across sites.

**When in-house care coordinators still make sense:**
- Complex patients where a trusted human relationship drives outcomes.
- Face-to-face visits and in-person interventions \u2014 a coordinator must do this.
- Escalations flagged by AI \u2014 human clinical judgment takes over.
- Small enrolled volumes where existing staff reliably hit the 20-minute threshold without automation.

**The hybrid reality most practices land on:** One paragraph recommending: AI handles routine touchpoints for every enrolled patient (medication checks, symptom surveillance, care-plan follow-up), generating structured summaries and time accrual. Care coordinators focus on complex patients, face-to-face work, and escalations flagged by the AI. This maximizes the percentage of enrolled patients who hit the 20-minute threshold each month (the key operational metric) while keeping clinical judgment in the loop where it matters.

**3-question FAQ for the comparison page:**

```typescript
const comparisonFaqs = [
  {
    question: 'Can an AI-powered call satisfy the CMS CCM clinical-staff-time requirement by itself?',
    answer:
      'No \u2014 CMS defines the 20-minute threshold as clinical staff time, which means time spent by qualified personnel on CCM activities. An AI call does not itself count as clinical staff time. What it does is produce a structured summary that clinical staff can review and act on quickly, and that review/action time does count. The practical effect is that clinical staff time gets concentrated on care-plan action rather than patient data gathering, making the 20-minute threshold easier to hit reliably.',
  },
  {
    question: 'What\u2019s the typical staffing ratio for CCM with and without automation?',
    answer:
      'Without automation, a full-time care coordinator typically manages 100\u2013200 CCM patients (the range reflects patient complexity and documentation expectations). With AI-powered engagement generating structured summaries, a single coordinator can plausibly oversee 400\u2013600 CCM patients because the per-patient review time drops substantially. Actual ratios vary by practice workflow and patient mix.',
  },
  {
    question: 'Is the hybrid model always more efficient than pure staffing?',
    answer:
      'For most CCM programs, yes \u2014 once enrolled volume passes \u007e150\u2013200 patients, the cost of missed 20-minute thresholds (unbillable CCM encounters) exceeds the cost of adding automation. Below that volume, a well-run in-house team can be sufficient. Above that volume, automation typically becomes the rate-limiting investment, not more coordinator headcount.',
  },
]
```

**Key takeaways (4 bullets, gray-50):**
- Fully loaded care-coordinator cost is the dominant variable cost in CCM programs.
- The 20-minute/month threshold is what determines billable vs. unbillable \u2014 consistency is more valuable than conversation length.
- Documentation structure drives billing success; automation reduces note-writing friction.
- Hybrid AI + human coordinator models are the efficient frontier for most practice sizes.

**Schema IDs:** `ccm-compare-breadcrumb`, `ccm-compare-article`, `ccm-compare-faq`.

**Schemas to emit:** `buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema`.

**Internal links to include in prose/links:**
- \u22653 to `/solutions/chronic-care-management` (pillar)
- 1 to `/solutions/chronic-care-management/faq`
- 1 to `/case-studies/scaling-patient-engagement` (existing case study)

**Last Reviewed footer:** CMS MLN CCM booklet URL (same as the pillar page's footer).

### Steps

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/solutions/chronic-care-management/vs-in-house-care-coordinators`

- [ ] **Step 2: Create the file using the TCM comparison page as structural template**

Use `app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx` as the structural template. Keep: imports, `PAGE_URL`/`HERO_IMAGE` constants, `metadata` export, `comparisonFaqs` constant, `breadcrumb` constant, `article` constant (via `buildArticleSchema`), hero gradient with eyebrow/H1/subtitle, TL;DR purple box, "How the two approaches compare" H2 with table, "When AI-powered [X] wins" ul, "When [Y] still makes sense" ul, "The hybrid reality" H2 paragraph, "Common questions" H2 with mapped FAQs, "Key takeaways" gray-50 box, back-to-pillar link, Last Reviewed footer. Replace all TCM-specific content with the CCM content spec above. Update all URLs from `post-discharge-follow-up` / `vs-manual-discharge-outreach` to `chronic-care-management` / `vs-in-house-care-coordinators`. Update StructuredData ids to `ccm-compare-breadcrumb`, `ccm-compare-article`, `ccm-compare-faq`. Update all Last Reviewed references to use the CMS MLN CCM booklet URL.

**Article schema fields:**
- `headline: 'AI-Powered CCM vs. In-House Care Coordinators'`
- `description: 'Category-level comparison of AI-powered Chronic Care Management engagement versus staffing an in-house care-coordinator team.'`
- `url: PAGE_URL`
- `image: HERO_IMAGE`
- `datePublished: '2026-04-20'`
- `dateModified: '2026-04-20'`

**Case-study link:** Add inside the prose of "The hybrid reality most practices land on" paragraph. Example: `For a real-world look at this pattern, see <Link href="/case-studies/scaling-patient-engagement" className="text-purple-700 underline">our case study on scaling engagement</Link>.`

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -30`
Expected: new route appears as static `○`.

- [ ] **Step 4: Runtime check**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -sI http://localhost:3000/solutions/chronic-care-management/vs-in-house-care-coordinators | head -1
# Expected: HTTP/1.1 200 OK

curl -s http://localhost:3000/solutions/chronic-care-management/vs-in-house-care-coordinators | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"Article"'
# Expected: 1

curl -s http://localhost:3000/solutions/chronic-care-management/vs-in-house-care-coordinators | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"FAQPage"'
# Expected: 1

curl -s http://localhost:3000/solutions/chronic-care-management/vs-in-house-care-coordinators | grep -c '<table'
# Expected: 1

# Confirm no competitor names appear (typical RPM/CCM vendor names the spec forbids)
curl -s http://localhost:3000/solutions/chronic-care-management/vs-in-house-care-coordinators | grep -ciE 'CareSignal|Validic|Propeller|Memora|Wellframe|Livongo'
# Expected: 0

pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx
git commit -m "$(cat <<'EOF'
Add CCM vs. in-house care coordinators comparison page

Category-level comparison — never names a specific vendor. Six-dimension
comparison table covering cost, throughput, 20-minute threshold
consistency, clinical nuance, documentation, and escalation. Use-case
sections for each approach, hybrid-model recommendation, and 3-question
FAQ with FAQPage schema. Article + BreadcrumbList + FAQPage schemas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Register new URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

- [ ] **Step 1: Sitemap**

Edit `app/sitemap.ts`. Find the entry for `/solutions/chronic-care-management` (currently around line 62) and insert 2 new entries IMMEDIATELY AFTER it:

```typescript
  { path: "/solutions/chronic-care-management/faq", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/chronic-care-management/vs-in-house-care-coordinators", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
```

- [ ] **Step 2: llms.txt**

Edit `public/llms.txt`. Under `## Care program solutions`, find the existing CCM bullet (currently a single line: `- [Chronic Care Management](https://positivecheck.com/solutions/chronic-care-management): Daily patient touchpoints supporting CCM documentation and care plan follow-up.`).

Replace with:

```
- [Chronic Care Management](https://positivecheck.com/solutions/chronic-care-management): Daily patient touchpoints supporting CCM documentation and care plan follow-up.
  - [CCM FAQ](https://positivecheck.com/solutions/chronic-care-management/faq): CPT 99490/99439/99487/99489 billing, 2-chronic-conditions rule, 20-minute threshold, documentation, HIPAA.
  - [AI-powered CCM vs. in-house care coordinators](https://positivecheck.com/solutions/chronic-care-management/vs-in-house-care-coordinators): Category-level comparison with six-dimension tradeoff table.
```

Keep the RPM and TCM bullets unchanged.

- [ ] **Step 3: Build + runtime verification**

```bash
npm run build 2>&1 | tail -10

npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c 'chronic-care-management'
# Expected: 3 (pillar + faq + vs-in-house page)

curl -s http://localhost:3000/llms.txt | grep -c 'chronic-care-management/faq'
# Expected: 1

curl -s http://localhost:3000/llms.txt | grep -c 'vs-in-house-care-coordinators'
# Expected: 1

pkill -f "next dev"
```

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "$(cat <<'EOF'
Register CCM FAQ and comparison page in sitemap + llms.txt

Two new URLs added to the dynamic sitemap with image entries. llms.txt
CCM bullet now has two nested sub-bullets making them discoverable to
AI answer engines.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Final Phase 3A verification

**Files:** none (verification only)

- [ ] **Step 1: Tests + build**

Run: `npm test 2>&1 | tail -30`
Expected: schema tests pass; pre-existing failures unchanged; no new failures.

Run: `npm run build 2>&1 | tail -60`
Expected: successful. Route list shows:
- `/solutions/chronic-care-management` (enhanced pillar)
- `/solutions/chronic-care-management/faq` (new, static `○`)
- `/solutions/chronic-care-management/vs-in-house-care-coordinators` (new, static `○`)

- [ ] **Step 2: Schema integrity on all 3 CCM pages**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

echo "=== CCM PILLAR ==="
for t in BreadcrumbList Service FAQPage HowTo; do
  count=$(curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c "\"@type\":\"$t\"")
  echo "  $t: $count (expected 1)"
done

echo "=== CCM FAQ ==="
curl -s http://localhost:3000/solutions/chronic-care-management/faq | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 12

echo "=== CCM COMPARE ==="
for t in Article BreadcrumbList FAQPage; do
  count=$(curl -s http://localhost:3000/solutions/chronic-care-management/vs-in-house-care-coordinators | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c "\"@type\":\"$t\"")
  echo "  $t: $count (expected 1)"
done

pkill -f "next dev"
```

Expected:
- CCM PILLAR BreadcrumbList: 1, Service: 1, FAQPage: 1, HowTo: 1
- CCM FAQ Question count: 12
- CCM COMPARE Article: 1, BreadcrumbList: 1, FAQPage: 1

- [ ] **Step 3: Link integrity smoke test**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
for p in /solutions/chronic-care-management /solutions/chronic-care-management/faq /solutions/chronic-care-management/vs-in-house-care-coordinators ; do
  code=$(curl -sI "http://localhost:3000$p" | head -1 | tr -d '\r')
  echo "$p -> $code"
done
pkill -f "next dev"
```
Expected: all return `HTTP/1.1 200 OK`. (Three Further Reading cluster-post links on the pillar will 404 until Phase 3B ships — that's expected.)

- [ ] **Step 4: Legal name + CPT code presence**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/solutions/chronic-care-management | grep -o '"legalName":"[^"]*"' | sort -u
# Expected: "legalName":"Positive Check LLC"

curl -s http://localhost:3000/solutions/chronic-care-management | grep -c '99489'
# Expected: 1+ (in CPT table; may also appear in Service schema description)

pkill -f "next dev"
```

- [ ] **Step 5: Tag Phase 3A complete**

```bash
git tag seo-phase-3a-complete -m "Phase 3A: CCM pillar full anatomy + pillar FAQ + comparison page"
```

Do NOT push.

- [ ] **Step 6: Summary log**

Run: `git log --oneline seo-phase-2c-complete..seo-phase-3a-complete`

Expected: approximately 6 commits:
1. Migrate CCM pillar schemas to typed builders + add 99489 row
2. Add 6-question FAQ section + FAQPage schema to CCM pillar
3. Add HowTo schema, Further Reading, and Last Reviewed footer
4. Add CCM pillar FAQ page with 12 questions
5. Add CCM vs. in-house care coordinators comparison page
6. Register CCM FAQ and comparison page in sitemap + llms.txt

---

## Self-review

**Spec coverage (Phase 3 items from spec Section 9 that are in scope for 3A):**
- ✅ `/solutions/chronic-care-management` migrated to full pillar anatomy — Tasks 1–3
- ✅ Pillar FAQ page — Task 4
- ✅ Category comparison page — Task 5
- ✅ Sitemap + llms.txt registration — Task 6
- ⏭️ 3 cluster posts (cpt-99490-billing-guide, 2-chronic-conditions-requirement, 20-minutes-monthly-requirement) — Phase 3B
- ⏭️ 5 glossary entries + linking audit — Phase 3C

**Additional scope this plan includes:**
- ✅ Adds CPT 99489 row to the pillar CPT table (closes a minor gap with `/resources/billing-guide` and pre-stages Phase 3C glossary coverage)

**Type consistency:**
- `ccmPillarFaqs` (shape `{ question, answer }[]`) matches the `FAQItem[]` type consumed by `buildFAQSchema`.
- `buildServiceSchema` input matches the `ServiceInput` interface; omits `audienceType` to use the default `"Healthcare Providers"`.
- `buildArticleSchema` input includes all required fields from `ArticleInput`.
- CPT code references consistent throughout: 99490, 99439, 99487, 99489 across pillar page, FAQ page, comparison page, and Further Reading links.
- StructuredData ids follow pattern: `ccm-pillar-*`, `ccm-faq-*`, `ccm-compare-*`.

**Placeholder scan:** No TBDs. Every task has complete metadata, schema, and content. The 3 Further Reading links that target unbuilt Phase 3B cluster posts are documented as "will 404 until Phase 3B ships" — matches the Phase 1A/2A pattern.

**Constraint compliance:**
- ✅ Authorship: Organization only (no named authors) — no author fields set anywhere
- ✅ Competitor names: none (CCM comparison is vs. in-house care coordinators, a role category, not a vendor)
- ✅ Price claims: approximate Medicare rates in body prose only; no `offers` in Service schema
- ✅ Legal entity: "Positive Check LLC" carried via `buildPublisherOrgNode()`; confirmed in Task 7 Step 4
- ✅ Unicode escapes: all em-dashes (`\u2014`), en-dashes (`\u2013`), tildes (`\u007e`), and curly apostrophes (`\u2019`) used in code strings
- ✅ In-house content: no external reviewer or byline references
- ✅ Last Reviewed footer: present on all 3 CCM pages, citing CMS MLN CCM Booklet (MLN 909188)

**Factual verification:**
- CCM CPT code set (99490, 99439, 99487, 99489) matches the CMS MLN 909188 fact sheet.
- CPT 99491 (physician-personally-furnished alternative to 99490) intentionally omitted from pillar — out of scope for 3A.
- 2-chronic-conditions rule, 20-minute/month threshold, and SNF/hospice exclusions all match CMS guidance.
- Approximate rates ($66 for 99490, $48 for 99439, $144 for 99487, $72 for 99489) are 2026 Medicare national averages; body prose qualifies them as approximate.
