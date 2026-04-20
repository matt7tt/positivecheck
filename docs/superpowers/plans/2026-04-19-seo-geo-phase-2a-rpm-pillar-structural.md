# SEO/GEO Phase 2A — RPM Pillar Structural Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the RPM pillar to full pillar anatomy (matching what Phase 1A did for TCM) AND fix a pre-existing factual error: the site currently lists **CPT 99470** as an RPM device-supply code, but **99470 is a pediatric critical care code** — the correct device-supply code for Medicare RPM is **CPT 99454**.

**Architecture:** Task 0 corrects `99470 → 99454` across 4 code files before any new content ships. Tasks 1-5 then mirror the Phase 1A TCM structural work for RPM: migrate pillar schemas to typed builders, add FAQ section with `FAQPage` schema, add `HowTo` + Further Reading + Last Reviewed, create a 12-question pillar FAQ page, and create the first category-level comparison (RPM vs device-only monitoring). Task 6 registers the 2 new URLs in sitemap + llms.txt. Task 7 is final verification.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, Phase 0 typed builders from `lib/schema.ts`.

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` — Section 3 (pillar anatomy), Section 5 (comparison anatomy), Section 9 Phase 2.

**CPT code reference (correct RPM code set per Medicare fee schedule):**
- **CPT 99453** — Remote monitoring setup and patient education (one-time, ~$19)
- **CPT 99454** — Device(s) supply with daily recordings or programmed alert transmission, each 30 days (~$47–56)
- **CPT 99457** — First 20 minutes of interactive communication per calendar month (~$48–52)
- **CPT 99458** — Each additional 20 minutes of interactive communication per calendar month (~$38–41)
- **CPT 99091** — Clinician collection/interpretation of physiologic data, ~$54 per month (legacy code, still valid but superseded for most cases by 99457/99458)

**Phase 2B and 2C (not this plan):**
- **2B:** 3 long-form RPM cluster posts (CPT 99457 billing guide, interactive communication requirements, RPM patient selection)
- **2C:** 5 glossary entries (CPT 99453, CPT 99454, CPT 99457, CPT 99458, remote-patient-monitoring) + internal linking audit across the RPM cluster

---

## File structure (Phase 2A scope)

**Modified (Task 0 — CPT correction)**
- `app/solutions/remote-patient-monitoring/page.tsx` — 7 occurrences of 99470
- `app/solutions/page.tsx` — 2 occurrences (solutions index card for RPM)
- `app/resources/billing-guide/page.tsx` — 1 occurrence (RPM CPT list)
- `components/roi-calculator.tsx` — 1 occurrence (rate table)

**Modified (Tasks 1-3 — RPM pillar enhancements)**
- `app/solutions/remote-patient-monitoring/page.tsx` — migrate schemas, add FAQ section + FAQPage schema, add HowTo + Further Reading + Last Reviewed

**Created**
- `app/solutions/remote-patient-monitoring/faq/page.tsx` — 12-question pillar FAQ
- `app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx` — category comparison

**Modified (Task 6)**
- `app/sitemap.ts` — 2 new URLs
- `public/llms.txt` — nest new entries under the RPM bullet

---

## Task 0: Correct CPT 99470 → CPT 99454 across the live site

**Files:**
- Modify: `app/solutions/remote-patient-monitoring/page.tsx`
- Modify: `app/solutions/page.tsx`
- Modify: `app/resources/billing-guide/page.tsx`
- Modify: `components/roi-calculator.tsx`

CPT 99470 is a neonatal/pediatric critical care code (part of the 99468–99476 range), NOT an RPM code. The correct Medicare RPM device-supply code is **CPT 99454** (Remote monitoring of physiologic parameter(s); device(s) supply with daily recording(s) or programmed alert(s) transmission, each 30 days).

### Step 1: Swap in `app/solutions/remote-patient-monitoring/page.tsx`

All 7 occurrences. Use Edit with exact strings:

**Edit 1** (metadata description, line 12):
- Find: `for CPT 99457, 99458, and 99470 —`
- Replace: `for CPT 99457, 99458, and 99454 —`

**Edit 2** (OG description, line 16):
- Find: `Support CPT 99457, 99458, and 99470 billing requirements.`
- Replace: `Support CPT 99457, 99458, and 99454 billing requirements.`

**Edit 3** (Twitter description, line 26):
- Find: `Support CPT 99457, 99458, and 99470 billing.`
- Replace: `Support CPT 99457, 99458, and 99454 billing.`

**Edit 4** (Service schema description, line 56):
- Find: `Supports CPT 99457, 99458, and 99470 billing.`
- Replace: `Supports CPT 99457, 99458, and 99454 billing.`

**Edit 5** (hero stat card, line 88):
- Find: `{ value: '99470', label: 'Device Supply — $56' },`
- Replace: `{ value: '99454', label: 'Device Supply — $56' },`

**Edit 6** (What is RPM prose, line ~109):
- Find: `reimburses providers for RPM services under CPT codes 99457, 99458, and 99470 when clinical`
- Replace: `reimburses providers for RPM services under CPT codes 99457, 99458, and 99454 when clinical`

**Edit 7** (CPT code table, line ~179):
- Find: `{ code: '99470', desc: 'RPM — device supply and data transmission (practice expense)', rate: '$56' },`
- Replace: `{ code: '99454', desc: 'RPM — device(s) supply with daily recordings or alert transmission, each 30 days', rate: '$56' },`

### Step 2: Swap in `app/solutions/page.tsx`

**Edit 1** (description text, line 37):
- Find: `Supports CPT 99457, 99458, and 99470 — generating $93+/patient/month.`
- Replace: `Supports CPT 99457, 99458, and 99454 — generating $93+/patient/month.`

**Edit 2** (cpts array, line 38):
- Find: `cpts: ['CPT 99457', 'CPT 99458', 'CPT 99470'],`
- Replace: `cpts: ['CPT 99457', 'CPT 99458', 'CPT 99454'],`

### Step 3: Swap in `app/resources/billing-guide/page.tsx`

**Edit 1** (RPM bullet, line 58):
- Find: `&mdash; CPT 99453, 99454, 99457, 99458, 99470`
- Replace: `&mdash; CPT 99453, 99454, 99457, 99458`

(The billing guide currently listed all 5 codes including the incorrect 99470. Removing 99470 leaves the correct 4-code set.)

### Step 4: Swap in `components/roi-calculator.tsx`

**Edit 1** (rate table entry, line 72):
- Find: `{ code: '99470', description: 'RPM — device supply & data transmission (practice expense)', rate: 56, pcSupport: 'Positive Check serves as the patient-facing data collection layer, transmitting structured responses to the provider dashboard.' },`
- Replace: `{ code: '99454', description: 'RPM — device(s) supply with daily recordings or alert transmission, each 30 days', rate: 56, pcSupport: 'Positive Check serves as the patient-facing data collection layer, transmitting structured responses to the provider dashboard.' },`

### Step 5: Verify no stray 99470 remains in code

Run: `grep -rn '99470' app/ components/ public/ lib/`
Expected: no matches in the `app/`, `components/`, `public/`, or `lib/` directories. (Matches in `docs/superpowers/plans/` and `docs/superpowers/specs/` are OK — plan/spec docs remain as historical record.)

### Step 6: Build + runtime sanity

```bash
npm run build 2>&1 | tail -20
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -c '99470'
# Expected: 0
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -c '99454'
# Expected: 4+ (appears in metadata, schema, hero stat, body prose, CPT table)
pkill -f "next dev"
```

### Step 7: Commit

```bash
git add app/solutions/remote-patient-monitoring/page.tsx app/solutions/page.tsx app/resources/billing-guide/page.tsx components/roi-calculator.tsx
git commit -m "Correct CPT 99470 to CPT 99454 across RPM content

CPT 99470 is a neonatal/pediatric critical care code, not an RPM code.
The correct Medicare RPM device-supply code is CPT 99454 (device
supply with daily recordings or alert transmission, each 30 days).
This was a pre-existing factual error across the RPM pillar page,
solutions index, billing guide hub, and ROI calculator. All four
surfaces now reference the correct code set: 99453 (setup), 99454
(device supply), 99457 (first 20 min interactive), 99458 (additional
20 min). Rates unchanged — \$56 is within the 2026 Medicare national
average range for 99454.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 1: Migrate RPM pillar schemas to typed builders

**Files:**
- Modify: `app/solutions/remote-patient-monitoring/page.tsx`

Mirrors Phase 1A Task 1. Replace the two inline JSON-LD `<script>` blocks with typed-builder calls.

### Step 1: Add imports

In `app/solutions/remote-patient-monitoring/page.tsx`, add this import after the existing `import { Button } from '@/components/ui/button'` line:

```typescript
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema } from '@/components/structured-data'
```

### Step 2: Replace the two inline script blocks

Find the two `<script type="application/ld+json">` blocks (BreadcrumbList + Service) that appear between `return (` and `<div className="min-h-screen bg-white">`. Replace both with:

```jsx
      <StructuredData
        id="rpm-pillar-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://positivecheck.com' },
          { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
          { name: 'Remote Patient Monitoring', url: 'https://positivecheck.com/solutions/remote-patient-monitoring' },
        ])}
      />
      <StructuredData
        id="rpm-pillar-service"
        data={buildServiceSchema({
          name: 'Remote Patient Monitoring (RPM) with AI Wellness Calls',
          serviceType: 'Remote Patient Monitoring',
          description:
            'AI-powered daily patient engagement that satisfies CMS interactive communication requirements for RPM programs. Supports CPT 99457, 99458, and 99454 billing.',
          category: 'Remote Patient Monitoring',
        })}
      />
```

### Step 3: Build + runtime verification

```bash
npm run build 2>&1 | tail -20

npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -o '"legalName":"[^"]*"' | sort -u
# Expected: "legalName":"Positive Check LLC"

curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u
# Expected types include: BreadcrumbList, Service

pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/solutions/remote-patient-monitoring/page.tsx
git commit -m "Migrate RPM pillar schemas to typed builders

Replaces two inline JSON-LD script blocks with <StructuredData>
components backed by buildBreadcrumbSchema and buildServiceSchema.
Service schema now carries legalName 'Positive Check LLC' via
buildPublisherOrgNode.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Add FAQ section + FAQPage schema to RPM pillar

**Files:**
- Modify: `app/solutions/remote-patient-monitoring/page.tsx`

### Step 1: Extend import

Update the `@/components/structured-data` import to include `buildFAQSchema`:

```typescript
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/components/structured-data'
```

### Step 2: Define the FAQ data at module scope

Add this constant AFTER the `metadata` export and BEFORE `export default function RemotePatientMonitoringPage()`:

```typescript
const rpmPillarFaqs = [
  {
    question: 'What is Remote Patient Monitoring (RPM)?',
    answer:
      "Remote Patient Monitoring is a Medicare-reimbursed care program where clinical staff review physiologic data (blood pressure, glucose, weight, SpO2, etc.) transmitted from a patient\u2019s connected device and conduct interactive communication with the patient at least monthly. CMS reimburses four codes: CPT 99453 (setup), 99454 (device supply), 99457 (first 20 minutes of interactive communication per calendar month), and 99458 (each additional 20 minutes).",
  },
  {
    question: 'What does the CMS interactive communication requirement mean?',
    answer:
      'CMS requires that clinical staff (or the physician) have at least one interactive communication with the patient or caregiver each calendar month in which CPT 99457 or 99458 is billed. The interaction can be telephonic, secure messaging, or video \u2014 and it must be real-time, two-way engagement that discusses the patient\u2019s physiologic data, symptoms, or care plan. A one-way notification or unresponded message does not satisfy the requirement.',
  },
  {
    question: 'Can AI-powered wellness calls satisfy the interactive communication requirement?',
    answer:
      'Yes, when the call includes real-time two-way engagement, captures structured clinical content, and supports human escalation. CMS defines "interactive communication" by its content and two-way nature, not by who initiates it. An AI call that asks about symptoms, captures responses, and flags concerns to clinical staff meets the requirement as long as the interaction is documented.',
  },
  {
    question: "What\u2019s the typical monthly revenue from an RPM patient?",
    answer:
      'Combined, CPT 99457 (\u007e$52 for first 20 minutes) and 99458 (\u007e$41 for each additional 20 minutes) generate roughly $93 per patient per month in the typical case. Adding CPT 99454 for device supply ($47\u2013$56/month) brings the total per-patient monthly revenue to approximately $140\u2013$150 for a full RPM episode. CPT 99453 is a one-time \u007e$19 setup fee. Rates vary by locality and update annually.',
  },
  {
    question: 'Which patients are eligible for RPM?',
    answer:
      'Medicare covers RPM for patients with one or more chronic conditions whose physiologic data informs ongoing care decisions \u2014 hypertension, diabetes, heart failure, COPD, and post-surgical monitoring are the most common. The patient must have a connected device capable of transmitting data to the provider, and the provider must document a clinical rationale for monitoring.',
  },
  {
    question: 'Does HIPAA permit AI-powered RPM wellness calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
];
```

### Step 3: Render the FAQPage schema

AFTER the `<StructuredData id="rpm-pillar-service" ... />` block, insert:

```jsx
      <StructuredData
        id="rpm-pillar-faq"
        data={buildFAQSchema(rpmPillarFaqs)}
      />
```

### Step 4: Add the FAQ JSX section

Find the existing `{/* CTA */}` section (near the end, containing "Ready to Scale Your RPM Program?"). Insert a new `<section>` IMMEDIATELY BEFORE it:

```jsx
          {/* FAQ */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {rpmPillarFaqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/solutions/remote-patient-monitoring/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  See all Remote Patient Monitoring questions
                </Link>
              </div>
            </div>
          </section>
```

### Step 5: Build + runtime check

```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"FAQPage"'
# Expected: 1
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 6
pkill -f "next dev"
```

### Step 6: Commit

```bash
git add app/solutions/remote-patient-monitoring/page.tsx
git commit -m "Add 6-question FAQ section + FAQPage schema to RPM pillar

Adds 6 RPM-specific FAQs inline on the pillar page covering the
interactive communication rule, monthly revenue, patient eligibility,
AI call validity, and HIPAA. Links to full /faq page (created in
Task 4).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Add HowTo schema + Further Reading + Last Reviewed footer

**Files:**
- Modify: `app/solutions/remote-patient-monitoring/page.tsx`

### Step 1: Add HowTo StructuredData block

After `<StructuredData id="rpm-pillar-faq" ... />`, add:

```jsx
      <StructuredData
        id="rpm-pillar-howto"
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How Positive Check Supports Remote Patient Monitoring',
          description:
            'Automate CMS-compliant RPM patient engagement in four steps: daily wellness calls, structured summaries, consistent cadence, and HIPAA-compliant data handling.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Daily Wellness Calls',
              text:
                'Automated voice calls collect vitals, symptoms, and wellness data \u2014 satisfying the interactive communication requirement for CPT 99457.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Structured Summaries',
              text:
                'Call results are organized into trend reports that reduce clinical review time, making the additional 20 minutes for CPT 99458 highly productive.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Consistent Cadence',
              text:
                'Every enrolled patient receives regular outreach without gaps \u2014 ensuring your practice meets the monthly engagement threshold.',
            },
            {
              '@type': 'HowToStep',
              position: 4,
              name: 'HIPAA-Compliant Data Handling',
              text:
                'All calls, transcripts, and data transmissions meet HIPAA standards. Business Associate Agreements are available for all provider partners.',
            },
          ],
        }}
      />
```

### Step 2: Add Further Reading section

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
                  href="/solutions/remote-patient-monitoring/cpt-99457-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Billing guide</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CPT 99457 Billing Guide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Interactive communication requirement, 20-minute threshold, documentation, and common errors.
                  </p>
                </Link>
                <Link
                  href="/solutions/remote-patient-monitoring/interactive-communication-requirement"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">CMS rule</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CMS Interactive Communication Requirement
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    What "interactive communication" means for CPT 99457/99458 and how AI calls satisfy it.
                  </p>
                </Link>
                <Link
                  href="/solutions/remote-patient-monitoring/patient-selection"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Program design</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    RPM Patient Selection
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Which chronic conditions, demographics, and clinical scenarios drive the best RPM outcomes.
                  </p>
                </Link>
                <Link
                  href="/solutions/remote-patient-monitoring/vs-device-only-monitoring"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Comparison</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Engagement vs. Device-Only Monitoring
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Why devices alone leave Medicare revenue on the table, and what the interactive layer adds.
                  </p>
                </Link>
              </div>
            </div>
          </section>
```

Note: 3 of the 4 Further Reading links target pages that don't exist yet (Phase 2B cluster posts). They will 404 until Phase 2B ships. This matches the Phase 1A pattern (which had 3 Further Reading 404s resolved by Phase 1B).

### Step 3: Add Last Reviewed footer

Inside `<main>`, AFTER the CTA section and BEFORE `</main>`, add:

```jsx
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                . Last updated 2026-04-19.
              </p>
            </div>
          </section>
```

### Step 4: Build + runtime

```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"HowTo"'
# Expected: 1
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"HowToStep"' | wc -l
# Expected: 4
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -c 'Reviewed against current CMS'
# Expected: 1

pkill -f "next dev"
```

### Step 5: Commit

```bash
git add app/solutions/remote-patient-monitoring/page.tsx
git commit -m "Add HowTo schema, Further Reading, and Last Reviewed footer to RPM pillar

HowTo schema formalizes the 4-step 'How Positive Check Supports RPM'
section with HowToStep entries. Further Reading links to the three
Phase 2B cluster posts and the Phase 2A comparison page. Last Reviewed
footer cites the Medicare Physician Fee Schedule.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Create RPM pillar FAQ page (12 questions)

**Files:**
- Create: `app/solutions/remote-patient-monitoring/faq/page.tsx`

### Step 1: Create directory

Run: `mkdir -p app/solutions/remote-patient-monitoring/faq`

### Step 2: Create the file

Use the same structural pattern as `app/solutions/post-discharge-follow-up/faq/page.tsx` (12-question RPM FAQ, hero, body, back-link, Last Reviewed footer). Exact content:

**Metadata:**
```typescript
export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM) FAQ | Positive Check',
  description:
    'Answers about Remote Patient Monitoring: CPT 99453/99454/99457/99458 billing, interactive communication requirement, patient eligibility, documentation, HIPAA, and how AI-powered wellness calls satisfy CMS rules.',
  alternates: { canonical: '/solutions/remote-patient-monitoring/faq' },
  openGraph: {
    title: 'Remote Patient Monitoring (RPM) FAQ | Positive Check',
    description:
      'Answers about RPM billing, interactive communication, patient eligibility, documentation, HIPAA, and AI wellness calls.',
    url: '/solutions/remote-patient-monitoring/faq',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check RPM FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Patient Monitoring (RPM) FAQ | Positive Check',
    description:
      'Answers about RPM billing, interactive communication, patient eligibility, documentation, HIPAA, and AI wellness calls.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}
```

**Breadcrumb:** Home → Solutions → Remote Patient Monitoring → FAQ.

**Hero eyebrow:** `"RPM FAQ"`

**H1:** `"Remote Patient Monitoring Questions"`

**Hero subtitle:** `"CPT 99453/99454/99457/99458 billing, the interactive communication rule, patient eligibility, documentation, and how AI-powered engagement fits the regulations."`

**12 questions in the `faqs` constant** — include the 6 from Task 2 verbatim, then 6 additional RPM-specific questions:

```typescript
const faqs = [
  // First 6 — same as rpmPillarFaqs in Task 2 (copy verbatim)
  // ... all 6 from Task 2 ...

  // Additional 6:
  {
    question: "What\u2019s the difference between CPT 99457 and 99458?",
    answer:
      'CPT 99457 covers the first 20 minutes of interactive communication per calendar month; CPT 99458 covers each additional 20 minutes in the same month. Both require the same content \u2014 real-time two-way patient engagement discussing physiologic data, symptoms, or the care plan. 99458 can be billed up to twice per patient per month (covering minutes 21\u201340 and 41\u201360), giving typical combined monthly revenue of roughly $93 per patient.',
  },
  {
    question: 'Can I bill CPT 99457 if my clinical staff only spend 10 minutes this month?',
    answer:
      'No. CPT 99457 requires a minimum of 20 minutes of interactive communication in a calendar month. If the time threshold is not met, the service is not billable. Providers should track cumulative interactive-communication time per patient per month and bill 99457 only when the 20-minute threshold is reached.',
  },
  {
    question: 'Who can perform the interactive communication \u2014 physicians, clinical staff, or AI?',
    answer:
      'CMS permits physicians, non-physician practitioners (NPs, PAs, CNSs, CNMs), or clinical staff under general supervision to perform the interactive communication. The communication must be real-time and two-way. AI-powered calls can satisfy the requirement when structured to capture clinical content and escalate concerns to human staff, since CMS defines the requirement by content and interaction type, not staff role.',
  },
  {
    question: 'Do I need a specific type of device for RPM billing?',
    answer:
      'The device must be a medical device as defined by the FDA, and it must automatically transmit physiologic data (not just allow manual entry). Common examples include connected blood pressure cuffs, glucose monitors, scales, pulse oximeters, and ECG devices. CPT 99454 reimburses device supply and data transmission, and the patient must record or have the device transmit data at least 16 of 30 days for 99454 billing each 30-day period.',
  },
  {
    question: 'Can RPM be billed alongside CCM or TCM for the same patient?',
    answer:
      'Yes. CMS permits RPM to be billed concurrently with Chronic Care Management (CCM), Transitional Care Management (TCM), and Principal Care Management (PCM) for the same patient, as long as the services are distinct and documented separately. Many providers use TCM during the 30-day post-discharge window, then transition stable patients into ongoing RPM.',
  },
  {
    question: 'What documentation does CMS expect for RPM services?',
    answer:
      'Documentation must include: patient consent to receive RPM (verbal or written, documented in the chart), the device type and data transmitted, cumulative interactive-communication time for the month, dates and content of the interactive communications, and any care plan changes or escalations. Positive Check generates a structured summary of each interactive communication that maps to these documentation elements.',
  },
];
```

(In the actual file, paste the first 6 from `rpmPillarFaqs` verbatim — the implementer should copy them exactly from the pillar page.)

**Structure:** same overall file structure as `app/solutions/post-discharge-follow-up/faq/page.tsx` — hero section with gradient, main body mapping over `faqs`, return-to-pillar link section, Last Reviewed footer section. Update all URLs to point at `remote-patient-monitoring` instead of `post-discharge-follow-up`. StructuredData ids: `rpm-faq-breadcrumb`, `rpm-faq-schema`.

The Last Reviewed footer uses the Medicare Physician Fee Schedule URL (same as the pillar page's footer):
```
Medicare Physician Fee Schedule: https://www.cms.gov/medicare/payment/fee-schedules/physician
```

### Step 3: Build + runtime

```bash
npm run build 2>&1 | tail -20
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -sI http://localhost:3000/solutions/remote-patient-monitoring/faq | head -1
# Expected: HTTP/1.1 200 OK
curl -s http://localhost:3000/solutions/remote-patient-monitoring/faq | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 12
pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/solutions/remote-patient-monitoring/faq/page.tsx
git commit -m "Add RPM pillar FAQ page with 12 questions

Expands the pillar-inline FAQ (6 questions) to a full 12-question
FAQPage, covering CPT 99457/99458 distinctions, the 20-minute
threshold, staff eligibility, device requirements, billing RPM
alongside CCM/TCM, and documentation expectations.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Create RPM vs device-only monitoring comparison page

**Files:**
- Create: `app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx`

Category-level comparison (NO competitor names). Contrasts AI-powered patient-engagement RPM programs against device-only RPM programs that bill 99454 only (device supply) without the interactive communication needed to bill 99457/99458.

### Content spec

**Metadata:**

```typescript
const PAGE_URL = 'https://positivecheck.com/solutions/remote-patient-monitoring/vs-device-only-monitoring'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'AI-Powered RPM vs. Device-Only Monitoring | Positive Check',
  description:
    'Category-level comparison of AI-powered interactive RPM versus device-only Remote Patient Monitoring. Why devices alone miss CPT 99457/99458 revenue and what the interactive engagement layer adds clinically and financially.',
  alternates: { canonical: '/solutions/remote-patient-monitoring/vs-device-only-monitoring' },
  openGraph: {
    title: 'AI-Powered RPM vs. Device-Only Monitoring',
    description:
      'Why devices alone leave Medicare revenue on the table, and what the interactive engagement layer adds clinically and financially.',
    url: '/solutions/remote-patient-monitoring/vs-device-only-monitoring',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'AI-powered RPM vs device-only monitoring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered RPM vs. Device-Only Monitoring',
    description:
      'Category-level comparison of AI-powered interactive RPM versus device-only monitoring.',
    images: [HERO_IMAGE],
  },
}
```

**Hero:** eyebrow "Comparison", H1 "AI-Powered RPM vs. Device-Only Monitoring", subtitle "A category-level look at how engagement-driven RPM programs compare to device-only RPM programs on billing, clinical impact, and patient adherence."

**TL;DR box (5 bullets):**
1. Device-only RPM bills CPT 99454 (\u007e$56/month) but misses CPT 99457/99458 (\u007e$93/month combined), leaving roughly two-thirds of available revenue untapped.
2. 99457/99458 require interactive communication \u2014 not just device transmissions \u2014 so device-only programs are ineligible.
3. Adherence is lower without patient engagement: device transmission rates drop when patients don\u2019t have regular clinical contact.
4. Escalation is reactive in device-only models \u2014 engagement-driven RPM catches concerns the device never captures (medication changes, psychosocial issues, symptoms).
5. Hybrid approach: device supply (99454) + interactive AI calls (99457/99458) = full RPM revenue and full clinical visibility.

**Comparison table (6 dimensions, semantic `<table>`):**

| Dimension | AI-powered interactive RPM | Device-only RPM |
|---|---|---|
| CPT codes billable | 99453 + 99454 + 99457 + 99458 (full code set) | 99453 + 99454 only (device codes) |
| Approximate monthly revenue per patient | \u007e$140\u2013$150 (device + interactive) | \u007e$47\u2013$56 (device only) |
| CMS interactive communication requirement | Satisfied through structured AI calls with escalation | Not attempted \u2014 99457/99458 not billable |
| Patient adherence (device transmission rate) | Higher \u2014 regular engagement reinforces device use | Lower \u2014 patients disengage without contact |
| Clinical insight beyond physiologic data | Captured (symptoms, medication, psychosocial) | Limited to device-transmitted metrics |
| Escalation speed | Real-time alerts triggered by AI-detected concerns | Delayed \u2014 relies on scheduled data review |

**When AI-powered RPM wins:**
- Programs targeting full RPM revenue capture
- Patients with fluctuating symptoms or medication changes
- Populations with low baseline engagement (elderly, dual-eligible, SDOH-challenged)
- Scale: hundreds to thousands of patients where manual engagement is impractical

**When device-only RPM is enough:**
- Research-only scenarios where billing is not the goal
- Short-term post-procedure tracking where interaction isn't clinically needed
- Programs without clinical staff bandwidth for even AI-supervised escalation

**The hybrid reality most providers land on:** A short paragraph recommending: device supply (99454) + AI-powered interactive engagement (99457/99458) + clinical staff handling escalations only. This captures full revenue while keeping clinical workload manageable.

**3-question FAQ for the comparison page:**

```typescript
const comparisonFaqs = [
  {
    question: 'Can a device-only RPM program legally bill CPT 99457?',
    answer:
      'No. CPT 99457 requires real-time interactive communication with the patient for at least 20 minutes in a calendar month \u2014 it is explicitly a clinical time code, not a device code. A program that only supplies devices and reviews data asynchronously does not satisfy the interactive communication requirement and cannot bill 99457 or 99458.',
  },
  {
    question: 'What percentage of possible RPM revenue does device-only capture?',
    answer:
      'Roughly 30\u201340%. Device supply (CPT 99454, \u007e$56/month) plus setup (CPT 99453, \u007e$19 one-time) captures the device economics but omits the interactive-communication codes that typically generate \u007e$93/patient/month combined. Over a 12-month patient enrollment, device-only leaves roughly $1,100 per patient on the table.',
  },
  {
    question: 'Is the interactive communication requirement purely about billing, or does it change outcomes?',
    answer:
      'Both. CMS built the 99457/99458 codes into the RPM framework specifically because interactive communication drives adherence, catches issues between data transmissions, and personalizes care plan adjustments. Device-only programs show lower patient adherence rates and fewer early escalations compared to programs with structured interactive engagement.',
  },
]
```

**Key takeaways (4 bullets):**
- Device-only RPM captures \u007e30\u201340% of available revenue; AI-powered interactive RPM captures the full set.
- CPT 99457/99458 require interactive communication by CMS definition \u2014 devices alone cannot satisfy this.
- Clinical outcomes follow the revenue: engagement-driven programs show better adherence and faster escalation.
- The hybrid model (device + AI-powered interactive + human escalation) is the efficient frontier.

**StructuredData ids:** `rpm-compare-breadcrumb`, `rpm-compare-article`, `rpm-compare-faq`.

**Schemas:** `buildBreadcrumbSchema`, `buildArticleSchema`, `buildFAQSchema`.

**Internal links:** ≥3 to `/solutions/remote-patient-monitoring` (pillar), 1 to `/solutions/remote-patient-monitoring/faq`, 1 to `/case-studies/scaling-patient-engagement`.

**Last Reviewed footer:** Medicare Physician Fee Schedule URL.

### Steps

- [ ] **Step 1:** `mkdir -p app/solutions/remote-patient-monitoring/vs-device-only-monitoring`
- [ ] **Step 2:** Create the file using the TCM comparison page (`app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx`) as a structural template. Same hero/TL;DR/table/when-each-wins/hybrid/FAQ/takeaways/back-link/footer pattern. Fill with RPM content above.
- [ ] **Step 3:** `npm run build` — expect `/solutions/remote-patient-monitoring/vs-device-only-monitoring` as static `○`.
- [ ] **Step 4:** Runtime verify — 200 OK, Article + BreadcrumbList + FAQPage schemas, table element present, no competitor names.
- [ ] **Step 5:** Commit:

```bash
git add app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx
git commit -m "Add RPM vs device-only monitoring comparison page

Category-level comparison \u2014 never names a specific vendor.
Six-dimension comparison table, when-each-wins sections, hybrid-model
recommendation, and 3-question FAQ with FAQPage schema. Article +
BreadcrumbList + FAQPage schemas.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Register new URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

### Step 1: Sitemap

Find the entry `{ path: "/solutions/remote-patient-monitoring", ... }` in `app/sitemap.ts` and insert 2 new entries IMMEDIATELY AFTER it:

```typescript
  { path: "/solutions/remote-patient-monitoring/faq", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/remote-patient-monitoring/vs-device-only-monitoring", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8,
    images: ["/images/admin-console-dashboard-new.png"] },
```

### Step 2: llms.txt

Under `## Care program solutions`, find the RPM bullet (currently single line: `- [Remote Patient Monitoring](https://positivecheck.com/solutions/remote-patient-monitoring): AI wellness calls that satisfy CMS interactive communication requirements for RPM programs.`). Replace with:

```
- [Remote Patient Monitoring](https://positivecheck.com/solutions/remote-patient-monitoring): AI wellness calls that satisfy CMS interactive communication requirements for RPM programs.
  - [RPM FAQ](https://positivecheck.com/solutions/remote-patient-monitoring/faq): CPT 99453/99454/99457/99458 billing, interactive communication rule, eligibility, documentation.
  - [AI-powered RPM vs. device-only monitoring](https://positivecheck.com/solutions/remote-patient-monitoring/vs-device-only-monitoring): Category-level comparison with six-dimension tradeoff table.
```

Keep the TCM and CCM bullets unchanged.

### Step 3: Build + runtime verification

```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c 'remote-patient-monitoring'
# Expected: 3 (pillar + faq + vs-device-only)

curl -s http://localhost:3000/llms.txt | grep -c 'remote-patient-monitoring/faq'
# Expected: 1
curl -s http://localhost:3000/llms.txt | grep -c 'vs-device-only-monitoring'
# Expected: 1

pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "Register RPM FAQ and comparison page in sitemap + llms.txt

Two new URLs added to the dynamic sitemap with image entries. llms.txt
RPM bullet now has two nested sub-bullets making them discoverable to
AI answer engines.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Final Phase 2A verification

**Files:** none (verification only)

### Step 1: Tests + build

Run: `npm test 2>&1 | tail -30`
Expected: schema tests pass. Pre-existing failures unchanged. No new failures.

Run: `npm run build 2>&1 | tail -60`
Expected: successful with 51 static routes total (49 from Phase 1C + 2 new). Routes include:
- `/solutions/remote-patient-monitoring` (enhanced pillar)
- `/solutions/remote-patient-monitoring/faq` (new, static `○`)
- `/solutions/remote-patient-monitoring/vs-device-only-monitoring` (new, static `○`)

### Step 2: CPT correction verification

```bash
grep -rn '99470' app/ components/ public/ lib/ 2>/dev/null
# Expected: no matches (historical references in docs/superpowers/ are OK)

npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -c '99470'
# Expected: 0
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -c '99454'
# Expected: 4+

curl -s http://localhost:3000/resources/billing-guide | grep -c '99470'
# Expected: 0

curl -s http://localhost:3000/solutions | grep -c '99470'
# Expected: 0

pkill -f "next dev"
```

### Step 3: Schema integrity on all 3 RPM pages

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

echo "=== RPM PILLAR ==="
for t in BreadcrumbList Service FAQPage HowTo; do
  count=$(curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c "\"@type\":\"$t\"")
  echo "  $t: $count (expected 1)"
done

echo "=== RPM FAQ ==="
curl -s http://localhost:3000/solutions/remote-patient-monitoring/faq | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"Question"' | wc -l
# Expected: 12

echo "=== RPM COMPARE ==="
for t in Article BreadcrumbList FAQPage; do
  count=$(curl -s http://localhost:3000/solutions/remote-patient-monitoring/vs-device-only-monitoring | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c "\"@type\":\"$t\"")
  echo "  $t: $count (expected 1)"
done

pkill -f "next dev"
```

### Step 4: Link integrity

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
for p in /solutions/remote-patient-monitoring /solutions/remote-patient-monitoring/faq /solutions/remote-patient-monitoring/vs-device-only-monitoring ; do
  code=$(curl -sI "http://localhost:3000$p" | head -1 | tr -d '\r')
  echo "$p -> $code"
done
pkill -f "next dev"
```
Expected: all return `HTTP/1.1 200 OK`.

### Step 5: Tag Phase 2A complete

```bash
git tag seo-phase-2a-complete -m "Phase 2A: RPM pillar full anatomy + pillar FAQ + comparison page (with CPT 99470 to 99454 correction)"
```

### Step 6: Summary log

Run: `git log --oneline seo-phase-1c-complete..seo-phase-2a-complete`

Expected: approximately 8 commits (CPT correction + plan + 6 task commits).

---

## Self-review

**Spec coverage (Phase 2 items from spec Section 9 that are in scope for 2A):**
- ✅ `/solutions/remote-patient-monitoring` rewritten to full pillar anatomy — Tasks 1–3
- ✅ Pillar FAQ page — Task 4
- ✅ Category comparison — Task 5
- ✅ Sitemap + llms.txt — Task 6
- ⏭️ 3 cluster posts — Phase 2B
- ⏭️ 5 glossary entries + linking audit — Phase 2C

**Additional scope this plan includes:**
- ✅ Correcting the pre-existing CPT 99470 → 99454 factual error (Task 0) — blocks Phase 2B/2C from propagating the wrong code

**Type consistency:**
- `rpmPillarFaqs` (shape `{ question, answer }[]`) matches `FAQItem[]` expected by `buildFAQSchema`.
- `buildServiceSchema` input matches the `ServiceInput` interface with default `audienceType` ("Healthcare Providers").
- CPT code constants are consistent across all 4 edited files.
- StructuredData ids follow pattern: `rpm-pillar-*`, `rpm-faq-*`, `rpm-compare-*`.

**Placeholder scan:** No TBDs. Every task has complete metadata/schema/content. The 3 Further Reading links that target unbuilt Phase 2B cluster posts are documented as "will 404 until Phase 2B ships" — matches the Phase 1A/1B pattern.

**Factual verification:** The RPM CPT code set (99453, 99454, 99457, 99458) is the standard Medicare Remote Patient Monitoring code set. CPT 99470 is in the 99468–99476 neonatal/pediatric critical care range and is NOT used for RPM. The Medicare Physician Fee Schedule URL (`https://www.cms.gov/medicare/payment/fee-schedules/physician`) is the authoritative reference for current rates.
