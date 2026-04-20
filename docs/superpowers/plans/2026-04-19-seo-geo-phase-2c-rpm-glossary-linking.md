# SEO/GEO Phase 2C — RPM Glossary + Internal Linking Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish 5 glossary entries canonicalizing the RPM entity graph (CPT 99453, CPT 99454, CPT 99457, CPT 99458, Remote Patient Monitoring), expand the `/resources/glossary/` index to list them, and run an internal linking audit across the RPM cluster so every RPM page links to ≥2 glossary entities (design spec Section 4).

**Architecture:** Mirrors Phase 1C for TCM. CPT entries use `buildCPTCodeSchema` (returns `[DefinedTerm, MedicalEntity]` array); the conceptual "Remote Patient Monitoring" entry uses `buildDefinedTermSchema`. All entries carry `BreadcrumbList`. Glossary index gets 5 new card links. RPM cluster pages each get ≥2 inline `<Link>` additions to glossary entities.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, Phase 0 typed builders (`buildBreadcrumbSchema`, `buildDefinedTermSchema`, `buildCPTCodeSchema`).

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` Section 6 (glossary anatomy) + Section 4 (cluster post linking requirements).

---

## File structure (Phase 2C scope)

**Created**
- `app/resources/glossary/cpt-99453/page.tsx`
- `app/resources/glossary/cpt-99454/page.tsx`
- `app/resources/glossary/cpt-99457/page.tsx`
- `app/resources/glossary/cpt-99458/page.tsx`
- `app/resources/glossary/remote-patient-monitoring/page.tsx`

**Modified**
- `app/resources/glossary/page.tsx` — add 5 new card links (bringing index to 10 total)
- `app/solutions/remote-patient-monitoring/page.tsx` — add glossary links
- `app/solutions/remote-patient-monitoring/faq/page.tsx` — add glossary links
- `app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx` — add glossary links
- `app/solutions/remote-patient-monitoring/cpt-99457-billing-guide/page.tsx` — add glossary links
- `app/solutions/remote-patient-monitoring/interactive-communication-requirement/page.tsx` — add glossary links
- `app/solutions/remote-patient-monitoring/patient-selection/page.tsx` — add glossary links
- `app/sitemap.ts` — 5 new URLs
- `public/llms.txt` — expand Glossary section with 5 new sub-bullets

---

## Shared glossary entry anatomy

Every entry is a page at `app/resources/glossary/<slug>/page.tsx`. Pattern (matches Phase 1C):

- Imports: `Metadata`, `Link`, `PublicHeader`, `PublicFooter`, `StructuredData` + appropriate schema builder
- `metadata` export (title, description, canonical, OG, Twitter)
- `breadcrumb` via `buildBreadcrumbSchema` (4 items: Home → Resources → Glossary → Term)
- `termSchema` via `buildCPTCodeSchema` (for CPT codes — returns array) OR `buildDefinedTermSchema` (for conceptual terms — returns object)
- Default export rendering:
  - 2 `<StructuredData>` blocks (ids: `<slug>-breadcrumb`, `<slug>-term`)
  - `<PublicHeader currentPage="platform" />`
  - Hero with gradient, "Glossary" eyebrow, H1 = term, subtitle = one-sentence citation-ready definition
  - Body: H2 Definition, H2 Regulatory basis, H2 Who uses it and when it applies (bullets), H2 Related terms (cross-links), H2 How Positive Check relates (with pillar link)
  - Centered back-to-glossary link
  - Last Reviewed footer citing Medicare PFS URL, `Last updated 2026-04-19`
  - `<PublicFooter />`

Unicode convention: `\u2014`, `\u2013`, `\u2019`, `\u007e`. No raw non-ASCII in source.
Internal link class: `className="text-purple-700 underline hover:text-purple-900"`.

Last Reviewed footer citation: Medicare Physician Fee Schedule URL (`https://www.cms.gov/medicare/payment/fee-schedules/physician`), anchor text "Medicare Physician Fee Schedule".

### Cross-link map (4-link minimum per entry)

| Entry | Related cross-links |
|---|---|
| CPT 99453 | CPT 99454, CPT 99457, Remote Patient Monitoring, 30-day readmission (if helpful) |
| CPT 99454 | CPT 99453, CPT 99457, Remote Patient Monitoring, Care coordination |
| CPT 99457 | CPT 99458, CPT 99454, Remote Patient Monitoring, Care coordination |
| CPT 99458 | CPT 99457, CPT 99454, Remote Patient Monitoring |
| Remote Patient Monitoring | CPT 99453, CPT 99454, CPT 99457, CPT 99458, Care coordination |

(The `/resources/glossary/care-coordination/` and `/resources/glossary/30-day-readmission/` entries already exist from Phase 1C — they're safe to link.)

---

## Task 1: Create `/resources/glossary/cpt-99453/`

**Files:**
- Create: `app/resources/glossary/cpt-99453/page.tsx`

### Content specifics

**H1:** `"CPT 99453"`

**One-sentence citation-ready definition (used in both hero subtitle and schema.description):**

`"CPT 99453 is the Medicare billing code for the one-time setup and patient education component of a Remote Patient Monitoring program \u2014 reimbursed at approximately $19 per patient when the device is delivered and the patient is trained."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99453: Definition and RPM Setup Requirements | Positive Check Glossary',
  description:
    'CPT 99453 is the Medicare billing code for the one-time Remote Patient Monitoring setup and patient education service. Definition, what it reimburses, and how it relates to 99454/99457.',
  alternates: { canonical: '/resources/glossary/cpt-99453' },
  openGraph: {
    title: 'CPT 99453: Definition and RPM Setup Requirements',
    description:
      'Medicare billing code for Remote Patient Monitoring setup and patient education. Definition and requirements.',
    url: '/resources/glossary/cpt-99453',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99453: Definition and RPM Setup Requirements',
    description: 'Medicare billing code for Remote Patient Monitoring setup and patient education.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99453', url: 'https://positivecheck.com/resources/glossary/cpt-99453' },
])

const termSchema = buildCPTCodeSchema({
  code: '99453',
  name: 'Remote monitoring of physiologic parameter(s); initial set-up and patient education on use of equipment',
  description:
    'CPT 99453 is the Medicare billing code for the one-time setup and patient education component of a Remote Patient Monitoring program, reimbursed at approximately $19 per patient when the device is delivered and the patient is trained.',
  category: 'Remote Patient Monitoring',
})
```

StructuredData ids: `cpt-99453-breadcrumb`, `cpt-99453-term`.

### H2 content (write 1-2 paragraphs per section)

**H2: Definition** — Restate hero sentence. Add: CPT 99453 is billed ONCE per patient per RPM episode \u2014 it covers the initial setup, device fitting, and patient education on how to use the connected device and respond to prompts. 2026 Medicare national average is approximately $19 per patient (caveat: rates update annually).

**H2: Regulatory basis** — Established by CMS under the Medicare Physician Fee Schedule. Part of the RPM code family (99453, 99454, 99457, 99458). Cite Medicare PFS (`https://www.cms.gov/medicare/payment/fee-schedules/physician`).

**H2: Who uses it and when it applies** — Bullets:
- Physicians or qualifying non-physician practitioners enrolling a new RPM patient
- Clinical staff performing device setup and patient education under general supervision
- Billed when the patient receives the device and completes initial training
- Not billable more than once per patient per RPM episode

**H2: Related terms** — 4 cross-links (use the Link element pattern with escape-encoded em-dashes):
- CPT 99454 \u2014 the device supply code billed monthly after setup
- CPT 99457 \u2014 the first 20 minutes of interactive communication per month
- Remote Patient Monitoring \u2014 the broader care model CPT 99453 initiates
- 30-day readmission \u2014 a clinical outcome RPM programs aim to reduce

**H2: How Positive Check relates** — 1-2 sentences. Positive Check supports RPM onboarding by scheduling the first wellness call immediately after setup, creating a predictable start to the engagement cycle. Link to `/solutions/remote-patient-monitoring` and `/solutions/remote-patient-monitoring/cpt-99457-billing-guide`.

### Steps

- [ ] **Step 1:** `mkdir -p app/resources/glossary/cpt-99453`
- [ ] **Step 2:** Create file (imports `buildBreadcrumbSchema` + `buildCPTCodeSchema` only; `buildDefinedTermSchema` not needed).
- [ ] **Step 3:** `npm run build 2>&1 | tail -10` — expect static route.
- [ ] **Step 4:** Runtime:
```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -sI http://localhost:3000/resources/glossary/cpt-99453 | head -1
# Expected: HTTP/1.1 200 OK
curl -s http://localhost:3000/resources/glossary/cpt-99453 | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u
# Expected: includes DefinedTerm, MedicalEntity, BreadcrumbList
pkill -f "next dev"
```
- [ ] **Step 5:** Commit:
```bash
git add app/resources/glossary/cpt-99453/page.tsx
git commit -m "Add CPT 99453 glossary entry

First RPM glossary entry. DefinedTerm + MedicalEntity schema via
buildCPTCodeSchema. Canonical definition, regulatory basis citing
Medicare PFS, eligibility criteria, 4 related-terms cross-links, and
links to the RPM pillar + CPT 99457 billing guide.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Create `/resources/glossary/cpt-99454/`

**Files:**
- Create: `app/resources/glossary/cpt-99454/page.tsx`

### Content specifics

**H1:** `"CPT 99454"`

**One-sentence definition:**

`"CPT 99454 is the Medicare billing code for Remote Patient Monitoring device supply with daily recordings or programmed alert transmissions, billed each 30 days and requiring the patient to transmit data on at least 16 of 30 days."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99454: Definition and RPM Device Supply Requirements | Positive Check Glossary',
  description:
    'CPT 99454 is the Medicare billing code for RPM device supply with daily recordings or programmed alert transmissions. Definition, 16-of-30-day transmission threshold, and how it combines with 99457/99458.',
  alternates: { canonical: '/resources/glossary/cpt-99454' },
  openGraph: {
    title: 'CPT 99454: Definition and RPM Device Supply Requirements',
    description:
      'Medicare billing code for RPM device supply. Definition, 16-of-30-day transmission threshold.',
    url: '/resources/glossary/cpt-99454',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99454: Definition and RPM Device Supply Requirements',
    description: 'Medicare billing code for RPM device supply.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99454', url: 'https://positivecheck.com/resources/glossary/cpt-99454' },
])

const termSchema = buildCPTCodeSchema({
  code: '99454',
  name: 'Remote monitoring of physiologic parameter(s); device(s) supply with daily recording(s) or programmed alert(s) transmission, each 30 days',
  description:
    'CPT 99454 is the Medicare billing code for Remote Patient Monitoring device supply with daily recordings or programmed alert transmissions, billed each 30 days and requiring the patient to transmit data on at least 16 of 30 days.',
  category: 'Remote Patient Monitoring',
})
```

StructuredData ids: `cpt-99454-breadcrumb`, `cpt-99454-term`.

### H2 content

**H2: Definition** — Restate hero. Add: 99454 reimburses the device rental/supply and the data transmission infrastructure. Billed each 30-day period. 2026 Medicare national average approximately $47\u2013$56 (varies by locality; rates update annually).

**H2: Regulatory basis** — CMS Medicare PFS. Key rule: patient must transmit data on at least 16 of 30 days for 99454 to be billable in that period. Cite Medicare PFS.

**H2: Who uses it and when it applies** — Bullets:
- Physicians or qualifying NPPs billing monthly for RPM
- Patients with active FDA-cleared RPM devices that automatically transmit physiologic data
- Billed each 30 days, starting after the initial setup (CPT 99453)
- NOT billable if the 16-of-30-day transmission threshold is missed

**H2: Related terms** — 4 cross-links:
- CPT 99453 \u2014 one-time setup and patient education
- CPT 99457 \u2014 first 20 minutes of interactive communication
- Remote Patient Monitoring \u2014 the care model 99454 supports
- Care coordination \u2014 the broader function RPM supports

**H2: How Positive Check relates** — Positive Check\u2019s daily wellness calls reinforce patient engagement, which maintains the device-transmission adherence required for 99454 billing. Link to `/solutions/remote-patient-monitoring` and `/solutions/remote-patient-monitoring/patient-selection`.

### Steps

Same 5-step pattern. Imports: `buildBreadcrumbSchema`, `buildCPTCodeSchema`. StructuredData types expected: DefinedTerm, MedicalEntity, BreadcrumbList.

Commit: "Add CPT 99454 glossary entry" with device-supply context summary.

---

## Task 3: Create `/resources/glossary/cpt-99457/`

**Files:**
- Create: `app/resources/glossary/cpt-99457/page.tsx`

### Content specifics

**H1:** `"CPT 99457"`

**One-sentence definition:**

`"CPT 99457 is the Medicare billing code for the first 20 minutes of interactive communication between clinical staff and an RPM patient in a calendar month, reimbursed at approximately $52 and requiring real-time two-way engagement discussing physiologic data, symptoms, or care plan."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99457: Definition and RPM Interactive Communication Requirements | Positive Check Glossary',
  description:
    'CPT 99457 reimburses the first 20 minutes of interactive communication per calendar month for Remote Patient Monitoring. Definition, 20-minute threshold, and what counts as interactive communication.',
  alternates: { canonical: '/resources/glossary/cpt-99457' },
  openGraph: {
    title: 'CPT 99457: Definition and RPM Interactive Communication Requirements',
    description:
      'Medicare billing code for the first 20 minutes of RPM interactive communication per month.',
    url: '/resources/glossary/cpt-99457',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99457: Definition and RPM Interactive Communication Requirements',
    description: 'Medicare code for the first 20 minutes of RPM interactive communication per month.',
  },
}
```

### Schema

```typescript
const termSchema = buildCPTCodeSchema({
  code: '99457',
  name: 'Remote physiologic monitoring treatment management; first 20 minutes of interactive communication per calendar month',
  description:
    'CPT 99457 is the Medicare billing code for the first 20 minutes of interactive communication between clinical staff and an RPM patient in a calendar month, reimbursed at approximately $52 and requiring real-time two-way engagement discussing physiologic data, symptoms, or care plan.',
  category: 'Remote Patient Monitoring',
})
```

Breadcrumb with `{ name: 'CPT 99457', url: 'https://positivecheck.com/resources/glossary/cpt-99457' }` as last item.

StructuredData ids: `cpt-99457-breadcrumb`, `cpt-99457-term`.

### H2 content

**H2: Definition** — Restate hero. Add: 99457 is the first tier of the interactive-communication codes. The 20-minute threshold is cumulative across the calendar month \u2014 multiple short interactions can combine. Clinical staff, physicians, NPPs, or AI-powered calls with human escalation can perform the communication. 2026 Medicare national average approximately $52 (rates update annually).

**H2: Regulatory basis** — CMS Medicare PFS. Key rule: cumulative 20 minutes of real-time two-way interactive communication in the calendar month. Data review time (async) does not count. Cite Medicare PFS.

**H2: Who uses it and when it applies** — Bullets:
- Physicians, NPPs, or clinical staff under general supervision performing interactive communication
- Patients active in an RPM program (setup completed under CPT 99453, device supply under CPT 99454)
- Calendar month tracking \u2014 resets on the 1st of each month
- Billed when cumulative interactive-communication minutes reach 20

**H2: Related terms** — 4 cross-links:
- CPT 99458 \u2014 each additional 20 minutes in the same calendar month
- CPT 99454 \u2014 the device supply code billed alongside 99457
- Remote Patient Monitoring \u2014 the broader care model 99457 operationalizes
- Care coordination \u2014 the function interactive communication supports

**H2: How Positive Check relates** — Positive Check structures daily wellness calls so cumulative interactive-communication minutes reliably reach the 20-minute threshold and carry documented clinical content. Link to `/solutions/remote-patient-monitoring` AND `/solutions/remote-patient-monitoring/cpt-99457-billing-guide`.

### Steps

Same pattern. Expected schemas: DefinedTerm + MedicalEntity + BreadcrumbList.

Commit: "Add CPT 99457 glossary entry" summarizing the 20-minute threshold.

---

## Task 4: Create `/resources/glossary/cpt-99458/`

**Files:**
- Create: `app/resources/glossary/cpt-99458/page.tsx`

### Content specifics

**H1:** `"CPT 99458"`

**One-sentence definition:**

`"CPT 99458 is the Medicare billing code for each additional 20 minutes of interactive communication with an RPM patient beyond the first 20 minutes covered by CPT 99457, reimbursed at approximately $41 and billable up to twice per patient per calendar month."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99458: Definition and RPM Additional Interactive Communication | Positive Check Glossary',
  description:
    'CPT 99458 reimburses each additional 20 minutes of interactive communication beyond CPT 99457. Definition, billable up to twice per patient per month, and how it maximizes RPM revenue.',
  alternates: { canonical: '/resources/glossary/cpt-99458' },
  openGraph: {
    title: 'CPT 99458: Definition and RPM Additional Interactive Communication',
    description:
      'Medicare billing code for each additional 20 minutes of RPM interactive communication per month.',
    url: '/resources/glossary/cpt-99458',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99458: Definition and RPM Additional Interactive Communication',
    description: 'Medicare code for each additional 20 minutes of RPM interactive communication.',
  },
}
```

### Schema

```typescript
const termSchema = buildCPTCodeSchema({
  code: '99458',
  name: 'Remote physiologic monitoring treatment management; each additional 20 minutes of interactive communication per calendar month',
  description:
    'CPT 99458 is the Medicare billing code for each additional 20 minutes of interactive communication with an RPM patient beyond the first 20 minutes covered by CPT 99457, reimbursed at approximately $41 and billable up to twice per patient per calendar month.',
  category: 'Remote Patient Monitoring',
})
```

Breadcrumb with `{ name: 'CPT 99458', url: 'https://positivecheck.com/resources/glossary/cpt-99458' }`.

StructuredData ids: `cpt-99458-breadcrumb`, `cpt-99458-term`.

### H2 content

**H2: Definition** — Restate hero. Add: 99458 is an add-on code that ONLY applies when 99457 is also billed for the same patient in the same calendar month. It can be billed twice, covering minutes 21\u201340 and 41\u201360, bringing total monthly interactive-communication revenue to roughly $134 per patient (99457 + 2\u00d799458). 2026 Medicare national average \u007e$41 per 20-minute block.

**H2: Regulatory basis** — CMS Medicare PFS. Applies only as an add-on to 99457. Each 20-minute block must meet the same real-time two-way interactive communication criteria. Cite Medicare PFS.

**H2: Who uses it and when it applies** — Bullets:
- Same provider types as 99457 (physicians, NPPs, clinical staff, AI-powered systems with escalation)
- Patients with active interactive-communication time exceeding the 99457 threshold
- Billable up to TWICE per calendar month (minutes 21\u201340 and 41\u201360)
- Requires 99457 to also be billed for the same patient in the same month

**H2: Related terms** — 3 cross-links:
- CPT 99457 \u2014 the base interactive-communication code 99458 adds onto
- CPT 99454 \u2014 the device supply code billed monthly
- Remote Patient Monitoring \u2014 the broader care model

**H2: How Positive Check relates** — Positive Check\u2019s daily wellness calls naturally exceed 20 minutes cumulative per patient per month for engaged populations, unlocking 99458 billings. Link to `/solutions/remote-patient-monitoring` and `/solutions/remote-patient-monitoring/cpt-99457-billing-guide`.

### Steps

Same pattern. Commit: "Add CPT 99458 glossary entry" summarizing the add-on billing model.

---

## Task 5: Create `/resources/glossary/remote-patient-monitoring/`

**Files:**
- Create: `app/resources/glossary/remote-patient-monitoring/page.tsx`

### Content specifics

**H1:** `"Remote Patient Monitoring (RPM)"`

**One-sentence definition:**

`"Remote Patient Monitoring (RPM) is a Medicare-reimbursed care model where clinical staff review physiologic data (blood pressure, glucose, weight, SpO2, ECG, etc.) transmitted from a patient\u2019s connected medical device and conduct interactive communication with the patient at least monthly, supported by CPT codes 99453, 99454, 99457, and 99458."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM): Definition and Requirements | Positive Check Glossary',
  description:
    'Remote Patient Monitoring (RPM) is a Medicare-reimbursed care model combining connected-device data transmission with monthly interactive communication. Definition, CPT codes, and requirements.',
  alternates: { canonical: '/resources/glossary/remote-patient-monitoring' },
  openGraph: {
    title: 'Remote Patient Monitoring (RPM): Definition and Requirements',
    description:
      'Medicare-reimbursed care model combining device data transmission with monthly interactive communication.',
    url: '/resources/glossary/remote-patient-monitoring',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Remote Patient Monitoring (RPM): Definition and Requirements',
    description: 'Medicare-reimbursed care model for device + interactive communication.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Remote Patient Monitoring', url: 'https://positivecheck.com/resources/glossary/remote-patient-monitoring' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Remote Patient Monitoring (RPM)',
  definition:
    'Remote Patient Monitoring (RPM) is a Medicare-reimbursed care model where clinical staff review physiologic data (blood pressure, glucose, weight, SpO2, ECG, etc.) transmitted from a patient\u2019s connected medical device and conduct interactive communication with the patient at least monthly, supported by CPT codes 99453, 99454, 99457, and 99458.',
  slug: 'remote-patient-monitoring',
  inDefinedTermSet: 'CMS care programs',
})
```

StructuredData ids: `rpm-term-breadcrumb`, `rpm-term-definition`.

### H2 content

**H2: Definition** — Restate hero. Add: RPM covers ongoing monthly care for patients with chronic conditions where physiologic data informs clinical decisions. Four billing codes: 99453 (setup), 99454 (device supply), 99457 (first 20 min interactive comm), 99458 (each additional 20 min). Combined monthly revenue per patient can reach \u007e$140\u2013$150 for a full RPM episode.

**H2: Regulatory basis** — Established by CMS under the Medicare Physician Fee Schedule. Patient must have a chronic condition and an FDA-cleared connected medical device capable of automatic data transmission. Cite Medicare PFS (`https://www.cms.gov/medicare/payment/fee-schedules/physician`).

**H2: Who uses it and when it applies** — Bullets:
- Physicians and qualifying non-physician practitioners billing for ongoing chronic care
- Patients with one or more chronic conditions (no minimum count, unlike CCM)
- Care coordinators, clinical staff, or AI-powered systems performing the monthly interactive communication under general supervision
- Most common conditions: hypertension, diabetes, heart failure, COPD, CKD, post-surgical recovery

**H2: Related terms** — 5 cross-links:
- CPT 99453 \u2014 one-time setup and patient education
- CPT 99454 \u2014 device supply billed each 30 days
- CPT 99457 \u2014 first 20 minutes of interactive communication per month
- CPT 99458 \u2014 each additional 20 minutes per month
- Care coordination \u2014 the broader function RPM operationalizes

**H2: How Positive Check relates** — Positive Check operationalizes the interactive-communication layer of RPM at scale through automated daily wellness calls, structured documentation, and real-time escalation to clinical staff. Link to `/solutions/remote-patient-monitoring` AND `/solutions/remote-patient-monitoring/cpt-99457-billing-guide`.

### Steps

Same 5-step pattern. Imports: `buildBreadcrumbSchema`, `buildDefinedTermSchema` (NOT `buildCPTCodeSchema` since this is a conceptual term, not a CPT code). Expected schemas: DefinedTerm + BreadcrumbList (no MedicalEntity).

Commit: "Add Remote Patient Monitoring glossary entry" summarizing the care model and 4 CPT codes.

---

## Task 6: Update glossary index with 5 new entries

**Files:**
- Modify: `app/resources/glossary/page.tsx`

### Strategy

The existing index (from Phase 1C) has a "Current entries" section with 5 TCM-era cards. Task 6 adds 5 new RPM cards to the same grid, bringing the total to 10.

### Change

Find the existing `<div className="grid md:grid-cols-2 gap-6 not-prose">` that contains the 5 Phase 1C cards (CPT 99495, CPT 99496, TCM, 30-day readmission, care coordination). Inside that same `<div>`, append 5 new `<Link>` cards AFTER the existing ones and BEFORE the closing `</div>`:

```jsx
            <Link
              href="/resources/glossary/cpt-99453"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99453</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare RPM one-time setup and patient education.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99454"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99454</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare RPM device supply with daily recordings, each 30 days.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99457"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99457</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                First 20 minutes of RPM interactive communication per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99458"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99458</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each additional 20 minutes of RPM interactive communication per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/remote-patient-monitoring"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors md:col-span-2"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Remote Patient Monitoring (RPM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare-reimbursed care model combining device data transmission with monthly interactive communication.
              </p>
            </Link>
```

Note: the "Remote Patient Monitoring" card spans both columns with `md:col-span-2` to match the existing "Care coordination" card pattern from Phase 1C (odd number of cards works out to a final 2-col-span card on its own row).

**IMPORTANT:** The existing "Care coordination" card currently has `md:col-span-2`. With 5 new cards added, the total becomes 10 — the layout works best if "care coordination" LOSES `md:col-span-2` (since it's no longer the last card) and "remote-patient-monitoring" becomes the final 2-col-span card. Update the care-coordination card's className to remove `md:col-span-2`.

### Steps

- [ ] **Step 1:** Read current `app/resources/glossary/page.tsx` to locate the grid and the care-coordination card.
- [ ] **Step 2:** Two edits:
  - Remove `md:col-span-2` from the care-coordination `Link` className
  - Append the 5 new cards before the closing `</div>` of the grid
- [ ] **Step 3:** Build + runtime:
```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6
for slug in cpt-99453 cpt-99454 cpt-99457 cpt-99458 remote-patient-monitoring; do
  count=$(curl -s http://localhost:3000/resources/glossary | grep -c "/resources/glossary/$slug")
  echo "  $slug on index: $count (expect >= 1)"
done
pkill -f "next dev"
```
- [ ] **Step 4:** Commit:
```bash
git add app/resources/glossary/page.tsx
git commit -m "List 5 RPM glossary entries on glossary index

Expands /resources/glossary/ to show the 5 Phase 2C entries as card
links (CPT 99453, CPT 99454, CPT 99457, CPT 99458, RPM). Removes
md:col-span-2 from the care-coordination card since it's no longer
the final card. RPM card becomes the final 2-col-span card.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Internal linking audit — add glossary links to 6 RPM pages

**Files:**
- Modify: `app/solutions/remote-patient-monitoring/page.tsx`
- Modify: `app/solutions/remote-patient-monitoring/faq/page.tsx`
- Modify: `app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx`
- Modify: `app/solutions/remote-patient-monitoring/cpt-99457-billing-guide/page.tsx`
- Modify: `app/solutions/remote-patient-monitoring/interactive-communication-requirement/page.tsx`
- Modify: `app/solutions/remote-patient-monitoring/patient-selection/page.tsx`

### Strategy (mirrors Phase 1C Task 7)

For each file, find the FIRST occurrence IN JSX (not in a `faqs`/`rpmPillarFaqs` data array) of the target phrase and wrap it in a `<Link>` with class `className="text-purple-700 underline hover:text-purple-900"`.

Do NOT modify any `faqs` array — those feed FAQPage schema and must remain plaintext. For the FAQ page (which has no prose body outside the FAQ array), add a "Related glossary entries" section instead.

### Per-file changes

**`app/solutions/remote-patient-monitoring/page.tsx` (pillar)**

Add 2+ links (first JSX occurrence only):
1. "Remote Patient Monitoring (RPM)" → wrap first JSX occurrence in `<Link href="/resources/glossary/remote-patient-monitoring">`
2. "CPT 99457" → wrap first JSX occurrence in `<Link href="/resources/glossary/cpt-99457">`

Verify: `grep -c '/resources/glossary' app/solutions/remote-patient-monitoring/page.tsx` returns >= 2.

**`app/solutions/remote-patient-monitoring/faq/page.tsx`**

The FAQ array is JSON-LD source material. Don't modify the `faqs` array. Instead, INSERT a new "Related glossary entries" section BEFORE the existing `<section className="px-6 py-12 bg-gray-50">` (the back-to-pillar section):

```jsx
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Related glossary entries:{' '}
                <Link href="/resources/glossary/cpt-99457" className="text-purple-700 underline hover:text-purple-900">CPT 99457</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99458" className="text-purple-700 underline hover:text-purple-900">CPT 99458</Link>
                {', '}
                <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">Remote Patient Monitoring</Link>
                .
              </p>
            </div>
          </section>
```

Verify: `grep -c '/resources/glossary' app/solutions/remote-patient-monitoring/faq/page.tsx` returns >= 3.

**`app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx`**

Add 2+ links (first JSX occurrence only; do NOT touch `comparisonFaqs`):
1. "CPT 99457" → first JSX occurrence → `<Link href="/resources/glossary/cpt-99457">`
2. "CPT 99454" → first JSX occurrence → `<Link href="/resources/glossary/cpt-99454">`

Verify: `grep -c '/resources/glossary' app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx` returns >= 2.

**`app/solutions/remote-patient-monitoring/cpt-99457-billing-guide/page.tsx`**

Add 2+ links (first JSX occurrence; do NOT touch `faqs`):
1. "CPT 99458" → wrap first JSX occurrence
2. "Remote Patient Monitoring" → wrap first JSX occurrence

Verify: >= 2 glossary refs.

**`app/solutions/remote-patient-monitoring/interactive-communication-requirement/page.tsx`**

Add 2+ links (first JSX occurrence; do NOT touch `faqs`):
1. "CPT 99457" → wrap first JSX occurrence
2. "Remote Patient Monitoring" → wrap first JSX occurrence

Verify: >= 2 glossary refs.

**`app/solutions/remote-patient-monitoring/patient-selection/page.tsx`**

Add 2+ links (first JSX occurrence; do NOT touch `faqs`):
1. "Remote Patient Monitoring" → wrap first JSX occurrence
2. "CPT 99454" → wrap first JSX occurrence

Verify: >= 2 glossary refs.

### Steps

- [ ] **Step 1:** Apply the 6 file edits. Use `Edit` tool with `replace_all: false` (default) so only the first occurrence is replaced.
- [ ] **Step 2:** Build check — `npm run build 2>&1 | tail -10`.
- [ ] **Step 3:** Verify glossary link counts per file:

```bash
for f in \
  app/solutions/remote-patient-monitoring/page.tsx \
  app/solutions/remote-patient-monitoring/faq/page.tsx \
  app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx \
  app/solutions/remote-patient-monitoring/cpt-99457-billing-guide/page.tsx \
  app/solutions/remote-patient-monitoring/interactive-communication-requirement/page.tsx \
  app/solutions/remote-patient-monitoring/patient-selection/page.tsx ; do
  count=$(grep -c '/resources/glossary' "$f")
  echo "  $f: $count"
done
```
Expected: each >= 2.

- [ ] **Step 4:** Runtime:
```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -s http://localhost:3000/solutions/remote-patient-monitoring | grep -oE 'href="/resources/glossary/[a-z0-9-]+"' | sort -u
# Expect at least 2 unique glossary paths
pkill -f "next dev"
```

- [ ] **Step 5:** Commit:
```bash
git add \
  app/solutions/remote-patient-monitoring/page.tsx \
  app/solutions/remote-patient-monitoring/faq/page.tsx \
  app/solutions/remote-patient-monitoring/vs-device-only-monitoring/page.tsx \
  app/solutions/remote-patient-monitoring/cpt-99457-billing-guide/page.tsx \
  app/solutions/remote-patient-monitoring/interactive-communication-requirement/page.tsx \
  app/solutions/remote-patient-monitoring/patient-selection/page.tsx
git commit -m "Internal linking audit: add glossary links across RPM cluster

Satisfies the design spec's 'cluster post links to >=2 glossary
entities' requirement for RPM. Each of the 6 RPM pages (pillar, faq,
compare, 3 cluster posts) now has >=2 inline Link elements to
/resources/glossary/* pages. FAQ answer arrays left untouched to
preserve FAQPage schema plaintext; FAQ page gets a 'Related glossary
entries' section instead.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Register 5 glossary URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

### Step 1: Sitemap

In `app/sitemap.ts`, find the existing RPM/TCM glossary entries (from Phase 1C). Add 5 new entries immediately after the last existing glossary entry (care-coordination or similar):

```typescript
  { path: "/resources/glossary/cpt-99453", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/cpt-99454", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/cpt-99457", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/cpt-99458", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/remote-patient-monitoring", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.7 },
```

### Step 2: llms.txt

Edit `public/llms.txt`. Find the `## Glossary` section (which currently has the Phase 1C glossary parent + 5 TCM-era sub-bullets). APPEND the 5 new RPM sub-bullets to the same nested list, after the existing sub-bullets:

```
  - [CPT 99453](https://positivecheck.com/resources/glossary/cpt-99453): Medicare RPM one-time setup and patient education.
  - [CPT 99454](https://positivecheck.com/resources/glossary/cpt-99454): Medicare RPM device supply with daily recordings, each 30 days.
  - [CPT 99457](https://positivecheck.com/resources/glossary/cpt-99457): First 20 minutes of RPM interactive communication per month.
  - [CPT 99458](https://positivecheck.com/resources/glossary/cpt-99458): Each additional 20 minutes of RPM interactive communication per month.
  - [Remote Patient Monitoring (RPM)](https://positivecheck.com/resources/glossary/remote-patient-monitoring): Medicare-reimbursed care model combining device data transmission with monthly interactive communication.
```

Keep all other sections unchanged. The result: 10 total glossary sub-bullets (5 from Phase 1C + 5 new from Phase 2C).

### Step 3: Build + runtime

```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 11 (index + 5 Phase 1C entries + 5 Phase 2C entries)

for slug in cpt-99453 cpt-99454 cpt-99457 cpt-99458 remote-patient-monitoring; do
  count=$(curl -s http://localhost:3000/llms.txt | grep -c "/resources/glossary/$slug")
  echo "  llms.txt $slug: $count (expect 1)"
done

pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "Register 5 RPM glossary entries in sitemap + llms.txt

Adds cpt-99453, cpt-99454, cpt-99457, cpt-99458, and remote-patient-
monitoring to the dynamic sitemap at priority 0.7. llms.txt Glossary
section now has 10 nested sub-bullets (5 TCM from Phase 1C + 5 RPM
from Phase 2C).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Final Phase 2C verification

**Files:** none (verification only)

### Step 1: Tests + build

Run: `npm test 2>&1 | tail -30`
Expected: schema tests pass. No new failures.

Run: `npm run build 2>&1 | tail -60`
Expected: 59 static routes total (54 from Phase 2B + 5 new glossary). All 5 glossary routes `○` static.

### Step 2: Glossary schema verification

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

for slug in cpt-99453 cpt-99454 cpt-99457 cpt-99458 remote-patient-monitoring; do
  echo "=== /resources/glossary/$slug ==="
  status=$(curl -sI "http://localhost:3000/resources/glossary/$slug" | head -1 | tr -d '\r')
  echo "  HTTP: $status"
  types=$(curl -s "http://localhost:3000/resources/glossary/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u | tr '\n' ',')
  echo "  types: $types"
done
```

Expected:
- All 5 return `HTTP/1.1 200 OK`
- cpt-99453, cpt-99454, cpt-99457, cpt-99458: include `DefinedTerm` AND `MedicalEntity`
- remote-patient-monitoring: includes `DefinedTerm` (no MedicalEntity since conceptual)
- All 5 include `BreadcrumbList`

### Step 3: RPM cluster linking audit

```bash
for p in \
  /solutions/remote-patient-monitoring \
  /solutions/remote-patient-monitoring/faq \
  /solutions/remote-patient-monitoring/vs-device-only-monitoring \
  /solutions/remote-patient-monitoring/cpt-99457-billing-guide \
  /solutions/remote-patient-monitoring/interactive-communication-requirement \
  /solutions/remote-patient-monitoring/patient-selection ; do
  count=$(curl -s "http://localhost:3000$p" | grep -oE 'href="/resources/glossary/[a-z0-9-]+"' | sort -u | wc -l | tr -d ' ')
  echo "  $p: $count unique glossary links (expect >= 2)"
done
```

Expected: all 6 pages >= 2.

### Step 4: Sitemap + llms.txt final check

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 11

curl -s http://localhost:3000/llms.txt | grep -oE '/resources/glossary/[a-z0-9-]+' | sort -u | wc -l
# Expected: 10

pkill -f "next dev"
```

### Step 5: Tag

```bash
git tag seo-phase-2c-complete -m "Phase 2C: 5 RPM glossary entries + internal linking audit"
```

### Step 6: Summary

```bash
git log --oneline seo-phase-2b-complete..HEAD
```

Expected: 9 commits (plan + 5 entries + index + linking audit + sitemap/llms.txt).

---

## Self-review

**Spec coverage (Phase 2 items):**
- ✅ 5 RPM glossary entries — Tasks 1–5
- ✅ Glossary index expansion — Task 6
- ✅ Internal linking audit across RPM cluster — Task 7
- ✅ Sitemap + llms.txt registration — Task 8
- ✅ Verification + tag — Task 9

**Cluster-post linking minimum** (design spec Section 4: "≥2 glossary entities per page"):
- ✅ Task 7 ensures each RPM page hits ≥2 unique glossary links

**Type consistency:**
- CPT entries use `buildCPTCodeSchema` (returns array of `[DefinedTerm, MedicalEntity]`); conceptual entry uses `buildDefinedTermSchema` (returns object). `StructuredData` component handles both.
- StructuredData id pattern: `<slug>-breadcrumb`, `<slug>-term` across all 5.
- Breadcrumb always 4 items: Home → Resources → Glossary → Term.
- Glossary URL pattern consistent: `/resources/glossary/<slug>/`.
- Care-coordination card `md:col-span-2` removal in Task 6 is one-time; RPM card takes the last-card col-span-2 slot.

**Placeholder scan:** Every entry has exact metadata, schema, definition, cross-link map, and bullet content. H2 body prose is specified as "1-2 short paragraphs expanding [talking points]" — same pattern Phase 1C used successfully.

**Non-code concerns:** None. CPT rates quoted are 2026 Medicare national averages with clear caveats that rates update annually. No competitor mentions. No price claims in structured data (only in body prose).
