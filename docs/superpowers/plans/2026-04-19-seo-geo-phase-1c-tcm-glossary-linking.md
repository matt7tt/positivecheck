# SEO/GEO Phase 1C — TCM Glossary + Internal Linking Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish 5 glossary entries that canonicalize the key TCM entities (CPT 99495, CPT 99496, 30-day readmission, Transitional Care Management, Care Coordination), expand the `/resources/glossary/` index to list them, and run an internal linking audit across the TCM cluster so every pillar/cluster/FAQ/comparison page links to ≥2 glossary entities per the design spec.

**Architecture:** Each glossary entry is a short, citation-ready canonical definition page at `/resources/glossary/<slug>/` following the anatomy in spec Section 6. Two kinds of entries: **CPT codes** use `buildCPTCodeSchema` (returns `[DefinedTerm, MedicalEntity]` array) for medical coding representation; **conceptual terms** use `buildDefinedTermSchema` (single `DefinedTerm`). All entries carry `BreadcrumbList`. The glossary index lists the entries with short descriptions. The TCM cluster pages get inline `<Link>` additions to satisfy the ≥2 glossary links per page minimum from the design spec.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui, Phase 0 typed builders (`buildBreadcrumbSchema`, `buildDefinedTermSchema`, `buildCPTCodeSchema`).

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` Section 6 (glossary anatomy) + Section 4 (cluster post linking requirements).

---

## File structure (Phase 1C scope)

**Created**
- `app/resources/glossary/cpt-99495/page.tsx`
- `app/resources/glossary/cpt-99496/page.tsx`
- `app/resources/glossary/30-day-readmission/page.tsx`
- `app/resources/glossary/transitional-care-management/page.tsx`
- `app/resources/glossary/care-coordination/page.tsx`

**Modified**
- `app/resources/glossary/page.tsx` — expand the intro to list the 5 new entries
- `app/solutions/post-discharge-follow-up/page.tsx` — add glossary links
- `app/solutions/post-discharge-follow-up/faq/page.tsx` — add glossary links
- `app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx` — add glossary links
- `app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx` — add glossary links
- `app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx` — add glossary links
- `app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx` — add glossary links
- `app/sitemap.ts` — 5 new URLs
- `public/llms.txt` — populate the Glossary section with the 5 entries

---

## Shared anatomy for all 5 glossary entries

Every entry follows the same page structure:

### Required imports

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildDefinedTermSchema, buildCPTCodeSchema } from '@/components/structured-data'
```

(CPT code entries use `buildCPTCodeSchema`; conceptual entries use `buildDefinedTermSchema`. Keep both imported on every page for consistency and to reduce review surface area — unused imports flagged by the TypeScript compiler are acceptable here since `buildCPTCodeSchema` is referenced in 2 of 5 files and `buildDefinedTermSchema` in 3 of 5. Actually — don't do that; only import what the file uses to keep diffs clean. Each task specifies which one to import.)

### Page structure (JSX)

```jsx
<>
  <StructuredData id="<slug>-breadcrumb" data={breadcrumb} />
  <StructuredData id="<slug>-term" data={term} />  {/* or data={termArray} for CPT codes */}
  <div className="min-h-screen bg-white">
    <PublicHeader currentPage="platform" />
    <main>
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Glossary</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {/* H1 = the term itself */}
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            {/* One-sentence definition, citation-ready */}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
          {/* 1-2 short paragraphs restating and slightly expanding the hero definition */}

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Regulatory basis</h2>
          {/* 1-2 paragraphs grounding the term in CMS / HHS / peer-reviewed sources, with inline citation */}

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who uses it and when it applies</h2>
          {/* Bulleted list */}

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Related terms</h2>
          {/* Bulleted list of 3-5 cross-links to sibling glossary entries */}

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Positive Check relates</h2>
          {/* 1-2 sentences with a link to the TCM pillar */}

          {/* Back to glossary link */}
          <div className="mt-12 text-center">
            <Link
              href="/resources/glossary"
              className="text-purple-700 underline hover:text-purple-900"
            >
              Back to the glossary
            </Link>
          </div>
        </div>
      </section>

      {/* Last Reviewed footer */}
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
```

### Related terms — cross-link map

Each entry cross-links to some subset of the other 4 (and `/solutions/post-discharge-follow-up`). At least 3 cross-links per entry.

| Entry | Related cross-links |
|---|---|
| CPT 99495 | CPT 99496, Transitional Care Management, 30-day readmission, Care coordination |
| CPT 99496 | CPT 99495, Transitional Care Management, 30-day readmission |
| 30-day readmission | Transitional Care Management, CPT 99495, Care coordination |
| Transitional Care Management | CPT 99495, CPT 99496, 30-day readmission, Care coordination |
| Care coordination | Transitional Care Management, 30-day readmission, CPT 99495 |

### Unicode convention

Use `\u2014` (em-dash), `\u2013` (en-dash), `\u2019` (curly apostrophe). No raw non-ASCII in source.

---

## Task 1: Create `/resources/glossary/cpt-99495/` entry

**Files:**
- Create: `app/resources/glossary/cpt-99495/page.tsx`

### Content specifics

**H1:** `"CPT 99495"`

**Hero subtitle / one-sentence citation-ready definition (used as both hero `<p>` and schema `description`):**

`"CPT 99495 is a Medicare billing code for Transitional Care Management services with moderate medical decision-making complexity, requiring a direct patient contact within two business days of discharge and a face-to-face visit within 14 calendar days."`

**Metadata:**

```typescript
export const metadata: Metadata = {
  title: 'CPT 99495: Definition and Billing Requirements | Positive Check Glossary',
  description:
    'CPT 99495 is the Medicare billing code for Transitional Care Management services with moderate medical decision-making complexity. Definition, requirements, and how it relates to RPM and CCM.',
  alternates: { canonical: '/resources/glossary/cpt-99495' },
  openGraph: {
    title: 'CPT 99495: Definition and Billing Requirements',
    description:
      'Medicare billing code for Transitional Care Management with moderate complexity. Definition and requirements.',
    url: '/resources/glossary/cpt-99495',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99495: Definition and Billing Requirements',
    description: 'Medicare billing code for Transitional Care Management with moderate complexity.',
  },
}
```

**Schema:**

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99495', url: 'https://positivecheck.com/resources/glossary/cpt-99495' },
])

const termSchema = buildCPTCodeSchema({
  code: '99495',
  name: 'Transitional Care Management services with moderate medical decision-making complexity',
  description:
    'CPT 99495 is a Medicare billing code for Transitional Care Management services with moderate medical decision-making complexity, requiring a direct patient contact within two business days of discharge and a face-to-face visit within 14 calendar days.',
  category: 'Transitional Care Management',
})
```

StructuredData ids: `cpt-99495-breadcrumb`, `cpt-99495-term`.

**H2: Definition** (1-2 paragraphs)

Talking points: restate the one-sentence definition in the first sentence, then add 1-2 sentences on what the code reimburses — the 30-day post-discharge care episode including initial contact, documentation, and the face-to-face visit. Note the 2026 Medicare national average reimbursement of approximately $178 per patient per discharge (caveat: rates change annually).

**H2: Regulatory basis** (1-2 paragraphs)

Talking points: Established by CMS under the Affordable Care Act / Medicare Physician Fee Schedule. Formally documented in the CMS Medicare Learning Network (MLN) Transitional Care Management fact sheet — cite `https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf` inline. Note that CMS defines "moderate" medical decision-making complexity per standard E/M guidelines.

**H2: Who uses it and when it applies** (bulleted list with `<ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">`)

Bullets:
- Physicians and qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs) billing for TCM services
- Patients discharged from inpatient hospital stays (acute, psychiatric, rehab), observation, or partial hospitalization
- Patients discharged to a community setting (home, assisted living, domiciliary) — NOT to SNF, LTAC, or inpatient rehab
- Cases where medical decision-making complexity is moderate (most common post-discharge scenario)

**H2: Related terms** (bulleted list of 4 links)

```jsx
<ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
  <li><Link href="/resources/glossary/cpt-99496" className="text-purple-700 underline hover:text-purple-900">CPT 99496</Link> \u2014 the high-complexity TCM code (7-day face-to-face window)</li>
  <li><Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">Transitional Care Management (TCM)</Link> \u2014 the CMS care model CPT 99495 bills</li>
  <li><Link href="/resources/glossary/30-day-readmission" className="text-purple-700 underline hover:text-purple-900">30-day readmission</Link> \u2014 the clinical outcome TCM aims to reduce</li>
  <li><Link href="/resources/glossary/care-coordination" className="text-purple-700 underline hover:text-purple-900">Care coordination</Link> \u2014 the broader function TCM operationalizes</li>
</ul>
```

**H2: How Positive Check relates** (1-2 sentences)

```jsx
<p className="text-gray-700 leading-relaxed">
  Positive Check automates the 2-business-day patient contact required for CPT 99495 billing,
  generates structured documentation, and escalates concerns to clinical staff in real time. See
  the{' '}
  <Link href="/solutions/post-discharge-follow-up" className="text-purple-700 underline hover:text-purple-900">
    Post-Discharge Follow-Up solution
  </Link>{' '}
  for the full workflow, or the{' '}
  <Link href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide" className="text-purple-700 underline hover:text-purple-900">
    CPT 99495 billing guide
  </Link>{' '}
  for eligibility and documentation details.
</p>
```

### Steps

- [ ] **Step 1: Create directory**

Run: `mkdir -p app/resources/glossary/cpt-99495`

- [ ] **Step 2: Create the file**

Write the file using the shared anatomy + the content specifics above. Import only `buildBreadcrumbSchema` and `buildCPTCodeSchema` (not `buildDefinedTermSchema`).

- [ ] **Step 3: Build check**

Run: `npm run build 2>&1 | tail -20`
Expected: `/resources/glossary/cpt-99495` appears as static `○`.

- [ ] **Step 4: Runtime verification**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -sI http://localhost:3000/resources/glossary/cpt-99495 | head -1
# Expected: HTTP/1.1 200 OK

# DefinedTerm + MedicalEntity both present (array from buildCPTCodeSchema)
curl -s http://localhost:3000/resources/glossary/cpt-99495 | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u | grep -E '(DefinedTerm|MedicalEntity)'
# Expected: both DefinedTerm and MedicalEntity present

# BreadcrumbList present
curl -s http://localhost:3000/resources/glossary/cpt-99495 | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -c '"@type":"BreadcrumbList"'
# Expected: 1

# 4 cross-links to other glossary entries
for slug in cpt-99496 transitional-care-management 30-day-readmission care-coordination; do
  count=$(curl -s http://localhost:3000/resources/glossary/cpt-99495 | grep -c "/resources/glossary/$slug")
  echo "  $slug: $count (expect >= 1)"
done

pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/resources/glossary/cpt-99495/page.tsx
git commit -m "Add CPT 99495 glossary entry

First glossary entry in Phase 1C. DefinedTerm + MedicalEntity schema
via buildCPTCodeSchema. Canonical one-sentence definition in hero,
regulatory basis citing CMS MLN TCM booklet, eligibility criteria,
4 related-terms cross-links, and a link to the TCM pillar.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Create `/resources/glossary/cpt-99496/` entry

**Files:**
- Create: `app/resources/glossary/cpt-99496/page.tsx`

### Content specifics

**H1:** `"CPT 99496"`

**Hero subtitle / one-sentence definition:**

`"CPT 99496 is a Medicare billing code for Transitional Care Management services with high medical decision-making complexity, requiring a direct patient contact within two business days of discharge and a face-to-face visit within 7 calendar days."`

**Metadata:**

```typescript
export const metadata: Metadata = {
  title: 'CPT 99496: Definition and Billing Requirements | Positive Check Glossary',
  description:
    'CPT 99496 is the Medicare billing code for Transitional Care Management services with high medical decision-making complexity. Definition, 7-day face-to-face requirement, and how it differs from 99495.',
  alternates: { canonical: '/resources/glossary/cpt-99496' },
  openGraph: {
    title: 'CPT 99496: Definition and Billing Requirements',
    description:
      'Medicare billing code for Transitional Care Management with high complexity. 7-day face-to-face requirement and how it differs from 99495.',
    url: '/resources/glossary/cpt-99496',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99496: Definition and Billing Requirements',
    description: 'Medicare billing code for Transitional Care Management with high complexity.',
  },
}
```

**Schema:**

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99496', url: 'https://positivecheck.com/resources/glossary/cpt-99496' },
])

const termSchema = buildCPTCodeSchema({
  code: '99496',
  name: 'Transitional Care Management services with high medical decision-making complexity',
  description:
    'CPT 99496 is a Medicare billing code for Transitional Care Management services with high medical decision-making complexity, requiring a direct patient contact within two business days of discharge and a face-to-face visit within 7 calendar days.',
  category: 'Transitional Care Management',
})
```

StructuredData ids: `cpt-99496-breadcrumb`, `cpt-99496-term`.

**H2: Definition**

Talking points: restate the hero sentence. Add: CPT 99496 reimburses the 30-day post-discharge care episode for patients requiring high-complexity clinical decision-making — typically multi-condition patients with active medication changes, recent exacerbations, or significant readmission risk factors. 2026 Medicare reimbursement exceeds the 99495 rate (caveat: rates updated annually).

**H2: Regulatory basis**

Same CMS MLN citation as 99495. Note: "high complexity" is assessed per standard Evaluation & Management (E/M) guidelines. Factors: number/complexity of problems, data complexity reviewed, risk of complications.

**H2: Who uses it and when it applies** (bullets)

- Physicians and qualifying NPPs billing for TCM in high-complexity scenarios
- Patients discharged with multiple active diagnoses, medication changes requiring close monitoring, or high readmission risk
- 7-day face-to-face window (shorter than 99495's 14-day window) demands timely in-person assessment
- Same community-setting discharge eligibility as 99495

**H2: Related terms** (3 cross-links)

- CPT 99495 — the moderate-complexity TCM code (14-day face-to-face window)
- Transitional Care Management (TCM) — the CMS care model both codes bill
- 30-day readmission — the clinical outcome TCM aims to reduce

**H2: How Positive Check relates**

Same pattern as CPT 99495: automates the 2-business-day contact, generates documentation, escalates concerns. Links to Post-Discharge Follow-Up solution + CPT 99495 billing guide (since the guide covers both codes).

### Steps

Same 5-step pattern as Task 1. Directory: `app/resources/glossary/cpt-99496`. Import only `buildBreadcrumbSchema` and `buildCPTCodeSchema`.

Runtime verification same as Task 1 (but substitute `cpt-99496` path). Cross-link check:
```bash
for slug in cpt-99495 transitional-care-management 30-day-readmission; do
  count=$(curl -s http://localhost:3000/resources/glossary/cpt-99496 | grep -c "/resources/glossary/$slug")
  echo "  $slug: $count (expect >= 1)"
done
```

Commit message: "Add CPT 99496 glossary entry" with description noting 7-day face-to-face window and high-complexity criteria.

---

## Task 3: Create `/resources/glossary/30-day-readmission/` entry

**Files:**
- Create: `app/resources/glossary/30-day-readmission/page.tsx`

### Content specifics

**H1:** `"30-day readmission"`

**Hero subtitle / one-sentence definition:**

`"A 30-day readmission is an unplanned hospital admission occurring within 30 days of a prior inpatient discharge \u2014 a key clinical quality and financial metric tracked by CMS under the Hospital Readmissions Reduction Program (HRRP)."`

**Metadata:**

```typescript
export const metadata: Metadata = {
  title: '30-Day Readmission: Definition and HRRP Context | Positive Check Glossary',
  description:
    'A 30-day readmission is an unplanned inpatient admission within 30 days of a prior discharge. Definition, HRRP penalty context, and which conditions CMS tracks.',
  alternates: { canonical: '/resources/glossary/30-day-readmission' },
  openGraph: {
    title: '30-Day Readmission: Definition and HRRP Context',
    description:
      'Definition, HRRP penalty context, and which conditions CMS tracks for readmission penalties.',
    url: '/resources/glossary/30-day-readmission',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: '30-Day Readmission: Definition and HRRP Context',
    description: 'Definition and HRRP penalty context for 30-day hospital readmissions.',
  },
}
```

**Schema:**

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: '30-day readmission', url: 'https://positivecheck.com/resources/glossary/30-day-readmission' },
])

const termSchema = buildDefinedTermSchema({
  term: '30-day readmission',
  definition:
    'A 30-day readmission is an unplanned hospital admission occurring within 30 days of a prior inpatient discharge \u2014 a key clinical quality and financial metric tracked by CMS under the Hospital Readmissions Reduction Program (HRRP).',
  slug: '30-day-readmission',
  inDefinedTermSet: 'Clinical outcomes',
})
```

StructuredData ids: `readmission-breadcrumb`, `readmission-term`.

**H2: Definition**

Talking points: restate the hero sentence. The 30-day window starts the day of discharge. Readmission to the same hospital or any other acute-care hospital counts. Planned readmissions (e.g., chemotherapy) are excluded from HRRP measures. National Medicare FFS 30-day all-cause readmission rate is approximately 15%; condition-specific rates vary widely (heart failure ~22%).

**H2: Regulatory basis**

Talking points: The Hospital Readmissions Reduction Program (HRRP) was established by the Affordable Care Act (2010), implemented FY2013. CMS assesses hospitals against an excess readmission ratio across six target conditions: heart attack (AMI), heart failure (HF), pneumonia (PN), COPD, CABG, and elective hip/knee arthroplasty (THA/TKA). Cite `https://www.cms.gov/medicare/quality/value-based-programs/hospital-readmissions` inline with the full program name as anchor text.

**H2: Who uses it and when it applies** (bullets)

- Hospital quality and financial leadership tracking HRRP penalty exposure (up to 3% of Medicare DRG payments)
- Clinical leadership measuring post-discharge outcomes across service lines
- Care transition teams evaluating TCM, RPM, and CCM programs
- Regulators and payers (CMS, commercial insurers adopting similar measures)

**H2: Related terms** (3 cross-links)

- Transitional Care Management (TCM) — the CMS-reimbursed framework for 30-day readmission reduction
- CPT 99495 — the moderate-complexity TCM code
- Care coordination — the broader function that spans the 30-day window

**H2: How Positive Check relates**

Talking points: Positive Check's automated post-discharge wellness calls target the 30-day window — especially the highest-risk first 7 days. Link to `/solutions/post-discharge-follow-up` and `/solutions/post-discharge-follow-up/30-day-readmission-reduction`.

### Steps

Same 5-step pattern. Directory: `app/resources/glossary/30-day-readmission`. Import `buildBreadcrumbSchema` and `buildDefinedTermSchema`.

Runtime check — `DefinedTerm` schema type present (no MedicalEntity since this is a conceptual term, not a CPT code).

Commit: "Add 30-day readmission glossary entry".

---

## Task 4: Create `/resources/glossary/transitional-care-management/` entry

**Files:**
- Create: `app/resources/glossary/transitional-care-management/page.tsx`

### Content specifics

**H1:** `"Transitional Care Management (TCM)"`

**Hero subtitle / one-sentence definition:**

`"Transitional Care Management (TCM) is a CMS-reimbursed care model for patients transitioning from an inpatient stay back to a community setting, comprising an initial direct patient contact within two business days of discharge and a face-to-face visit within 7 or 14 days depending on complexity."`

**Metadata:**

```typescript
export const metadata: Metadata = {
  title: 'Transitional Care Management (TCM): Definition and Requirements | Positive Check Glossary',
  description:
    'Transitional Care Management (TCM) is a CMS-reimbursed care model for patients transitioning from inpatient to community settings. Definition, CPT codes, and requirements.',
  alternates: { canonical: '/resources/glossary/transitional-care-management' },
  openGraph: {
    title: 'Transitional Care Management (TCM): Definition and Requirements',
    description:
      'CMS-reimbursed care model for post-discharge care transitions. Definition, CPT codes (99495/99496), and requirements.',
    url: '/resources/glossary/transitional-care-management',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Transitional Care Management (TCM): Definition and Requirements',
    description: 'CMS-reimbursed care model for post-discharge care transitions.',
  },
}
```

**Schema:**

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Transitional Care Management', url: 'https://positivecheck.com/resources/glossary/transitional-care-management' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Transitional Care Management (TCM)',
  definition:
    'Transitional Care Management (TCM) is a CMS-reimbursed care model for patients transitioning from an inpatient stay back to a community setting, comprising an initial direct patient contact within two business days of discharge and a face-to-face visit within 7 or 14 days depending on complexity.',
  slug: 'transitional-care-management',
  inDefinedTermSet: 'CMS care programs',
})
```

StructuredData ids: `tcm-breadcrumb`, `tcm-term`.

**H2: Definition**

Talking points: restate hero sentence. Add: TCM covers the 30-day post-discharge care episode with defined documentation and contact requirements. Two billing codes represent the program: CPT 99495 (moderate complexity, 14-day face-to-face) and CPT 99496 (high complexity, 7-day face-to-face).

**H2: Regulatory basis**

Talking points: Established by CMS under the Medicare Physician Fee Schedule. Formally defined in the CMS MLN TCM booklet — cite inline. Requires coordination between inpatient discharge planning and outpatient primary/specialty care.

**H2: Who uses it and when it applies** (bullets)

- Physicians and qualifying non-physician practitioners billing for post-discharge care
- Patients discharged from inpatient stays (acute, psychiatric, rehab), observation, or partial hospitalization
- Patients discharged to community settings (home, assisted living) — not SNF, LTAC, or inpatient rehab
- Care coordinators and clinical staff performing non-face-to-face contact under general supervision

**H2: Related terms** (4 cross-links)

- CPT 99495 — the moderate-complexity TCM billing code
- CPT 99496 — the high-complexity TCM billing code
- 30-day readmission — the clinical outcome TCM aims to reduce
- Care coordination — the broader function TCM operationalizes

**H2: How Positive Check relates**

Talking points: Positive Check operationalizes the 2-business-day contact requirement for TCM at scale via automated wellness calls. Link to `/solutions/post-discharge-follow-up` (multiple times — pillar and billing guide).

### Steps

Same pattern. Directory: `app/resources/glossary/transitional-care-management`. Imports: `buildBreadcrumbSchema`, `buildDefinedTermSchema`.

---

## Task 5: Create `/resources/glossary/care-coordination/` entry

**Files:**
- Create: `app/resources/glossary/care-coordination/page.tsx`

### Content specifics

**H1:** `"Care coordination"`

**Hero subtitle / one-sentence definition:**

`"Care coordination is the deliberate organization of patient care activities between two or more participants (including the patient) to facilitate appropriate delivery of health care services, often measured and reimbursed through CMS programs like Transitional Care Management, Chronic Care Management, and Principal Care Management."`

**Metadata:**

```typescript
export const metadata: Metadata = {
  title: 'Care Coordination: Definition and CMS Context | Positive Check Glossary',
  description:
    'Care coordination is the deliberate organization of patient care activities. Definition, CMS context (TCM, CCM, PCM), and measurement.',
  alternates: { canonical: '/resources/glossary/care-coordination' },
  openGraph: {
    title: 'Care Coordination: Definition and CMS Context',
    description:
      'Definition and CMS context for care coordination, including TCM, CCM, and PCM.',
    url: '/resources/glossary/care-coordination',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Care Coordination: Definition and CMS Context',
    description: 'Definition and CMS context for care coordination.',
  },
}
```

**Schema:**

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Care coordination', url: 'https://positivecheck.com/resources/glossary/care-coordination' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Care coordination',
  definition:
    'Care coordination is the deliberate organization of patient care activities between two or more participants (including the patient) to facilitate appropriate delivery of health care services, often measured and reimbursed through CMS programs like Transitional Care Management, Chronic Care Management, and Principal Care Management.',
  slug: 'care-coordination',
  inDefinedTermSet: 'Clinical operations',
})
```

StructuredData ids: `care-coordination-breadcrumb`, `care-coordination-term`.

**H2: Definition**

Talking points: restate hero sentence. Attribution: the definition commonly used in US healthcare policy is the Agency for Healthcare Research and Quality (AHRQ) definition. Add: care coordination spans inpatient-to-outpatient transitions, ongoing chronic care management, medication reconciliation, appointment scheduling, and cross-specialty communication.

**H2: Regulatory basis**

Talking points: AHRQ Care Coordination Quality Measure cite (`https://www.ahrq.gov/ncepcr/care/coordination.html` if that URL is appropriate — otherwise reference AHRQ generally). CMS reimburses specific care coordination programs: TCM (post-discharge), CCM (chronic condition management), PCM (principal condition management). Cite CMS MLN TCM booklet for TCM-specific reimbursement.

**H2: Who uses it and when it applies** (bullets)

- Primary care physicians and specialist groups managing patients with chronic conditions or recent discharges
- Accountable Care Organizations (ACOs) whose shared savings depend on reducing fragmented care
- Care coordinators, care managers, and clinical staff performing non-face-to-face work
- Quality leadership measuring patient experience and care transition metrics

**H2: Related terms** (3 cross-links)

- Transitional Care Management (TCM) — the CMS-reimbursed post-discharge coordination program
- 30-day readmission — a clinical outcome care coordination aims to reduce
- CPT 99495 — a billing code enabling reimbursed care coordination

**H2: How Positive Check relates**

Talking points: Positive Check automates the patient-engagement layer of care coordination — consistent daily or weekly wellness check-ins, structured data capture, and real-time escalation to clinical staff. Link to `/solutions/post-discharge-follow-up`.

### Steps

Same pattern. Directory: `app/resources/glossary/care-coordination`. Imports: `buildBreadcrumbSchema`, `buildDefinedTermSchema`.

---

## Task 6: Expand `/resources/glossary/` index to list the 5 entries

**Files:**
- Modify: `app/resources/glossary/page.tsx`

### Current state

The existing `/resources/glossary/page.tsx` has intro content describing what the glossary will cover but no actual entries listed. Task 6 adds a "Current entries" section listing the 5 Phase 1C entries.

### Change

After the existing "What this section covers" H2 + bullet list, INSERT a new H2 section "Current entries" with a list of cards linking to each of the 5 glossary pages.

Find the existing `</ul>` that closes the "What this section covers" bulleted list. After that `</ul>`, but BEFORE the closing `<p>` that mentions "Entries are added on an ongoing basis…", insert:

```jsx
          <h2 className="text-2xl font-bold text-[#1a2642] mt-12 mb-4">
            Current entries
          </h2>
          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <Link
              href="/resources/glossary/cpt-99495"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99495</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare TCM code for moderate-complexity post-discharge care.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99496"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99496</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare TCM code for high-complexity post-discharge care.
              </p>
            </Link>
            <Link
              href="/resources/glossary/transitional-care-management"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Transitional Care Management (TCM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CMS-reimbursed care model for post-discharge transitions.
              </p>
            </Link>
            <Link
              href="/resources/glossary/30-day-readmission"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Clinical outcome</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">30-day readmission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unplanned inpatient admission within 30 days of prior discharge; HRRP context.
              </p>
            </Link>
            <Link
              href="/resources/glossary/care-coordination"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors md:col-span-2"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Clinical operations</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Care coordination</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deliberate organization of patient care activities across participants.
              </p>
            </Link>
          </div>
```

Note: the 5th card uses `md:col-span-2` to span both columns on its own row (5 cards don't fit cleanly in 2 columns). Alternative: 3 columns → but 2-column pattern matches the site elsewhere.

### Steps

- [ ] **Step 1: Read current file**

Run: `sed -n '60,100p' app/resources/glossary/page.tsx`

Identify the `</ul>` closing the "What this section covers" list and the paragraph after it.

- [ ] **Step 2: Apply the edit**

Insert the new H2 section between the list and the closing paragraph.

- [ ] **Step 3: Build**

Run: `npm run build 2>&1 | tail -20`
Expected: clean build.

- [ ] **Step 4: Runtime verification**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
for slug in cpt-99495 cpt-99496 transitional-care-management 30-day-readmission care-coordination; do
  count=$(curl -s http://localhost:3000/resources/glossary | grep -c "/resources/glossary/$slug")
  echo "  $slug on index: $count (expect >= 1)"
done
pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add app/resources/glossary/page.tsx
git commit -m "List 5 TCM glossary entries on glossary index

Expands /resources/glossary/ to show the 5 Phase 1C entries as card
links (CPT 99495, CPT 99496, TCM, 30-day readmission, care
coordination). Pattern matches the Further Reading cards on the TCM
pillar.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Internal linking audit — add glossary links to TCM cluster

**Files:**
- Modify: `app/solutions/post-discharge-follow-up/page.tsx`
- Modify: `app/solutions/post-discharge-follow-up/faq/page.tsx`
- Modify: `app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx`
- Modify: `app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx`
- Modify: `app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx`
- Modify: `app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx`

### Strategy

Each page gets 2+ glossary entity links added inline. To minimize review surface area, the implementer finds the FIRST occurrence of each target anchor text on each page and wraps it in a `<Link>`. If the phrase appears in FAQ answer strings (which are JSON-LD source material), wrap it ONLY in the JSX display version, NOT in the FAQ data array — that would break the FAQPage schema's plaintext expectation.

### Exact insertions per file

**`app/solutions/post-discharge-follow-up/page.tsx` (pillar)**

Find the first occurrence in the JSX body (NOT in the `tcmPillarFaqs` array) of:

1. "Transitional Care Management (TCM)" → wrap in `<Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">`
2. "CPT 99495" → wrap the first JSX occurrence in `<Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">`

Example pattern:
```jsx
<p>… ensuring patients receive timely follow-up after discharge.
  <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">CPT 99495</Link>
  requires that a clinical staff member contacts the patient within two business days of discharge. …</p>
```

Verify after: `grep -c '/resources/glossary' app/solutions/post-discharge-follow-up/page.tsx` returns >= 2.

**`app/solutions/post-discharge-follow-up/faq/page.tsx`**

This file's FAQ answers are in a JSON data array. Don't modify the array. Instead, find the JSX hero section or the "return to the TCM pillar" section and add a short "Related concepts" paragraph above the back-to-pillar link:

Insert before the existing `<section className="px-6 py-12 bg-gray-50">` that contains the back-to-pillar link:

```jsx
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Related glossary entries:{' '}
                <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">CPT 99495</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99496" className="text-purple-700 underline hover:text-purple-900">CPT 99496</Link>
                {', '}
                <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">Transitional Care Management</Link>
                .
              </p>
            </div>
          </section>
```

Verify: `grep -c '/resources/glossary' app/solutions/post-discharge-follow-up/faq/page.tsx` returns >= 3.

**`app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx`**

Find the first JSX occurrences of:
1. "CPT 99495" → wrap in `<Link href="/resources/glossary/cpt-99495" ...>`
2. "Transitional Care Management" OR "TCM" → wrap in `<Link href="/resources/glossary/transitional-care-management" ...>`

Skip the `comparisonFaqs` array (JSON-LD source).

Verify: `grep -c '/resources/glossary' app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx` returns >= 2.

**`app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx`**

Already a CPT 99495 deep-dive. Add links to sibling entries:
1. "CPT 99496" → wrap first JSX occurrence in `<Link href="/resources/glossary/cpt-99496" ...>`
2. "Transitional Care Management" → wrap first JSX occurrence in `<Link href="/resources/glossary/transitional-care-management" ...>`

Skip the `faqs` array.

Verify: `grep -c '/resources/glossary' app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx` returns >= 2.

**`app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx`**

1. "30-day readmission" (the term itself, first JSX occurrence) → wrap in `<Link href="/resources/glossary/30-day-readmission" ...>`
2. "Transitional Care Management" (first JSX occurrence) → wrap in `<Link href="/resources/glossary/transitional-care-management" ...>`

Skip the `faqs` array.

Verify: `grep -c '/resources/glossary' app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx` returns >= 2.

**`app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx`**

1. "Transitional Care Management" (first JSX occurrence) → wrap in `<Link href="/resources/glossary/transitional-care-management" ...>`
2. "CPT 99495" (first JSX occurrence) → wrap in `<Link href="/resources/glossary/cpt-99495" ...>`

Skip the `faqs` array.

Verify: `grep -c '/resources/glossary' app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx` returns >= 2.

### Steps

- [ ] **Step 1: Apply all 6 edits**

For each file, locate the FIRST occurrence of the target phrase in JSX (NOT in a `faqs`/`comparisonFaqs`/`tcmPillarFaqs` array), and wrap only that first occurrence in a `<Link>`. Later occurrences stay as plain text — linking every occurrence would be over-linking and is not required by the spec.

Use the exact class pattern: `className="text-purple-700 underline hover:text-purple-900"` to match the site's internal link style.

- [ ] **Step 2: Build check**

Run: `npm run build 2>&1 | tail -10`
Expected: clean build.

- [ ] **Step 3: Verify glossary link counts per page**

```bash
for f in \
  app/solutions/post-discharge-follow-up/page.tsx \
  app/solutions/post-discharge-follow-up/faq/page.tsx \
  app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx \
  app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx \
  app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx \
  app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx ; do
  count=$(grep -c '/resources/glossary' "$f")
  echo "  $f: $count"
done
```
Expected: each file shows >= 2.

- [ ] **Step 4: Runtime smoke test**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
# Verify the pillar page serves glossary links
curl -s http://localhost:3000/solutions/post-discharge-follow-up | grep -oE 'href="/resources/glossary/[a-z0-9-]+"' | sort -u
# Expected: at least 2 unique glossary paths
pkill -f "next dev"
```

- [ ] **Step 5: Commit**

```bash
git add \
  app/solutions/post-discharge-follow-up/page.tsx \
  app/solutions/post-discharge-follow-up/faq/page.tsx \
  app/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/page.tsx \
  app/solutions/post-discharge-follow-up/cpt-99495-billing-guide/page.tsx \
  app/solutions/post-discharge-follow-up/30-day-readmission-reduction/page.tsx \
  app/solutions/post-discharge-follow-up/post-discharge-contact-timing/page.tsx
git commit -m "Internal linking audit: add glossary links across TCM cluster

Satisfies the design spec's 'cluster post links to >=2 glossary
entities' requirement. Each of the 6 TCM pages (pillar, faq, compare,
3 cluster posts) now has >=2 inline Link elements to /resources/
glossary/* pages. FAQ answer arrays left untouched to preserve
FAQPage schema plaintext.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Register 5 glossary URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

### Step 1: Sitemap

In `app/sitemap.ts`, find the entry `{ path: "/resources/glossary", ... }` and insert 5 new entries IMMEDIATELY AFTER it:

```typescript
  { path: "/resources/glossary/cpt-99495", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/cpt-99496", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/transitional-care-management", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/30-day-readmission", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/care-coordination", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
```

Note: glossary entries don't have images (they're text-first reference pages). Priority 0.7 is lower than pillar (0.9) and cluster posts (0.8), matching typical glossary weighting.

### Step 2: llms.txt

In `public/llms.txt`, find the existing `## Glossary` section (currently a single bullet pointing to `/resources/glossary`). Replace that section with:

```
## Glossary

- [Healthcare billing & care program glossary](https://positivecheck.com/resources/glossary): Plain-English definitions of CMS billing codes, care programs, and compliance terms.
  - [CPT 99495](https://positivecheck.com/resources/glossary/cpt-99495): Medicare TCM code for moderate-complexity post-discharge care.
  - [CPT 99496](https://positivecheck.com/resources/glossary/cpt-99496): Medicare TCM code for high-complexity post-discharge care (7-day face-to-face).
  - [Transitional Care Management (TCM)](https://positivecheck.com/resources/glossary/transitional-care-management): CMS care model for post-discharge transitions.
  - [30-day readmission](https://positivecheck.com/resources/glossary/30-day-readmission): Unplanned inpatient admission within 30 days of discharge; HRRP context.
  - [Care coordination](https://positivecheck.com/resources/glossary/care-coordination): Deliberate organization of patient care activities across participants.
```

Keep all other sections unchanged.

### Step 3: Build + runtime verification

```bash
npm run build 2>&1 | tail -10

npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 6 (index + 5 entries)

for slug in cpt-99495 cpt-99496 transitional-care-management 30-day-readmission care-coordination; do
  count=$(curl -s http://localhost:3000/llms.txt | grep -c "/resources/glossary/$slug")
  echo "  llms.txt $slug: $count (expect 1)"
done

pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "Register 5 TCM glossary entries in sitemap + llms.txt

Adds cpt-99495, cpt-99496, transitional-care-management,
30-day-readmission, and care-coordination to the dynamic sitemap at
priority 0.7. llms.txt Glossary section now has 5 nested sub-bullets
making each canonical entity discoverable to AI answer engines.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Final Phase 1C verification

**Files:** none (verification only)

- [ ] **Step 1: Tests + build**

Run: `npm test 2>&1 | tail -30`
Expected: schema tests (11+) pass. Pre-existing failures unchanged. No new failures.

Run: `npm run build 2>&1 | tail -60`
Expected: successful with 48 static routes total (43 from Phase 1B + 5 glossary). All 5 glossary routes `○` static.

- [ ] **Step 2: Glossary pages schema + content**

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

for slug in cpt-99495 cpt-99496 transitional-care-management 30-day-readmission care-coordination; do
  echo "=== /resources/glossary/$slug ==="
  status=$(curl -sI "http://localhost:3000/resources/glossary/$slug" | head -1 | tr -d '\r')
  echo "  HTTP: $status"
  types=$(curl -s "http://localhost:3000/resources/glossary/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u | tr '\n' ',')
  echo "  types: $types"
  # For CPT codes: both DefinedTerm AND MedicalEntity expected. For conceptual: just DefinedTerm.
done
```

Expected:
- All 5 return `HTTP/1.1 200 OK`
- cpt-99495, cpt-99496: types include BOTH `DefinedTerm` AND `MedicalEntity`
- transitional-care-management, 30-day-readmission, care-coordination: types include `DefinedTerm` (no MedicalEntity)
- All 5: types include `BreadcrumbList`

- [ ] **Step 3: Internal linking audit verification**

```bash
# Each TCM cluster page has >=2 glossary links in served HTML
for p in \
  /solutions/post-discharge-follow-up \
  /solutions/post-discharge-follow-up/faq \
  /solutions/post-discharge-follow-up/vs-manual-discharge-outreach \
  /solutions/post-discharge-follow-up/cpt-99495-billing-guide \
  /solutions/post-discharge-follow-up/30-day-readmission-reduction \
  /solutions/post-discharge-follow-up/post-discharge-contact-timing ; do
  count=$(curl -s "http://localhost:3000$p" | grep -oE 'href="/resources/glossary/[a-z0-9-]+"' | sort -u | wc -l | tr -d ' ')
  echo "  $p: $count unique glossary links (expect >= 2)"
done
```

Expected: all 6 pages show >= 2 unique glossary links.

- [ ] **Step 4: Sitemap + llms.txt final check**

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 6 (index + 5 entries)

curl -s http://localhost:3000/llms.txt | grep -oE '/resources/glossary/[a-z0-9-]+' | sort -u | wc -l
# Expected: 5 (5 entry paths in the llms.txt glossary section)

pkill -f "next dev"
```

- [ ] **Step 5: Tag Phase 1C complete**

```bash
git tag seo-phase-1c-complete -m "Phase 1C: 5 TCM glossary entries + internal linking audit"
```

Do NOT push.

- [ ] **Step 6: Summary log**

Run: `git log --oneline seo-phase-1b-complete..HEAD`
Expected: 9 commits (the plan commit + 5 glossary entry commits + 1 index update + 1 linking audit + 1 sitemap/llms.txt).

---

## Self-review

**Spec coverage** (Phase 1 items from design spec Section 9 that relate to 1C):
- ✅ 5 glossary entries (Tasks 1-5)
- ✅ Glossary index listing (Task 6)
- ✅ Internal linking audit across TCM cluster (Task 7)
- ✅ Sitemap + llms.txt registration (Task 8)

**Cluster post linking minimum** (design spec Section 4: "Internal links: ≥2 to glossary entities"):
- ✅ Task 7 ensures each TCM page hits ≥2 glossary links

**Type consistency:**
- All 5 entries use `buildBreadcrumbSchema` consistently (4-item breadcrumb)
- CPT entries use `buildCPTCodeSchema` (returns array); conceptual entries use `buildDefinedTermSchema` (returns object). `StructuredData` handles both.
- StructuredData id convention: `<slug>-breadcrumb`, `<slug>-term` across all 5 entries.
- Glossary URL pattern: `/resources/glossary/<slug>/` matches `buildDefinedTermSchema` and `buildCPTCodeSchema` URL construction (they append `SITE_URL + /resources/glossary/ + slug`).

**Placeholder scan:** All content specifics are provided: metadata verbatim, schema calls verbatim, definition sentences verbatim, bullet list content specified, cross-links named. Body prose has 2-3 sentence "talking points" for implementer expansion — same pattern Phase 1B used successfully.

**Non-code concerns:**
- The `care-coordination` entry references AHRQ. The existing `buildDefinedTermSchema` helper doesn't produce an AHRQ-specific schema — that's fine, AHRQ just appears as an inline citation in prose.
- Glossary entries don't have `FAQPage` schema because they're reference pages, not long-form articles. This matches spec Section 6 (which doesn't prescribe FAQPage for glossary).
- The glossary index update in Task 6 uses `not-prose` className — this class is from the `@tailwindcss/typography` plugin (if installed) to override prose styles inside a `.prose` parent. If that plugin isn't in use, `not-prose` is harmless (unknown classes are ignored). The existing `/resources/glossary/page.tsx` doesn't appear to use `prose` wrappers, so `not-prose` is defensive only.
