# SEO/GEO Phase 3C — CCM Glossary + Internal Linking Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish 5 glossary entries canonicalizing the CCM entity graph (CPT 99490, CPT 99439, CPT 99487, CPT 99489, Chronic Care Management), expand the `/resources/glossary/` index to list them, and run an internal linking audit across the CCM cluster so every CCM page links to ≥2 glossary entities (design spec Section 4).

**Architecture:** Mirrors Phase 1C (TCM) and Phase 2C (RPM) exactly. CPT entries use `buildCPTCodeSchema` (returns `[DefinedTerm, MedicalEntity]` array); the conceptual "Chronic Care Management" entry uses `buildDefinedTermSchema`. All entries carry `BreadcrumbList`. Glossary index gets 5 new card links. CCM cluster pages each get ≥2 inline `<Link>` additions to glossary entities.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, Phase 0 typed builders (`buildBreadcrumbSchema`, `buildDefinedTermSchema`, `buildCPTCodeSchema`).

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` Section 6 (glossary anatomy) + Section 4 (cluster post linking requirements).

**Reference plan (pattern source):** `docs/superpowers/plans/2026-04-19-seo-geo-phase-2c-rpm-glossary-linking.md` — exact structural template; each Phase 3C task mirrors the equivalent Phase 2C task.

**Primary citation source:** CMS MLN Chronic Care Management Services booklet (MLN 909188) at `https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf`.

---

## File structure (Phase 3C scope)

**Created**
- `app/resources/glossary/cpt-99490/page.tsx`
- `app/resources/glossary/cpt-99439/page.tsx`
- `app/resources/glossary/cpt-99487/page.tsx`
- `app/resources/glossary/cpt-99489/page.tsx`
- `app/resources/glossary/chronic-care-management/page.tsx`

**Modified**
- `app/resources/glossary/page.tsx` — add 5 new card links (bringing index to 15 total)
- `app/solutions/chronic-care-management/page.tsx` — add glossary links
- `app/solutions/chronic-care-management/faq/page.tsx` — add glossary links section
- `app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx` — add glossary links
- `app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx` — add glossary links
- `app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx` — add glossary links
- `app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx` — add glossary links
- `app/sitemap.ts` — 5 new URLs
- `public/llms.txt` — expand Glossary section with 5 new sub-bullets

---

## Shared glossary entry anatomy

Every entry is a page at `app/resources/glossary/<slug>/page.tsx`. Pattern (matches Phase 1C and 2C):

- Imports: `Metadata`, `Link`, `PublicHeader`, `PublicFooter`, `StructuredData` + appropriate schema builder
- `metadata` export (title, description, canonical, OG, Twitter)
- `breadcrumb` via `buildBreadcrumbSchema` (4 items: Home → Resources → Glossary → Term)
- `termSchema` via `buildCPTCodeSchema` (for CPT codes — returns array) OR `buildDefinedTermSchema` (for conceptual terms — returns object)
- Default export rendering:
  - 2 `<StructuredData>` blocks (ids: `<slug>-breadcrumb`, `<slug>-term`)
  - `<PublicHeader currentPage="platform" />`
  - Hero with gradient `from-[#e879f9] to-[#d946ef]`, "Glossary" eyebrow, H1 = term, subtitle = one-sentence citation-ready definition
  - Body: H2 Definition, H2 Regulatory basis, H2 Who uses it and when it applies (bullets), H2 Related terms (cross-links), H2 How Positive Check relates (with pillar link)
  - Centered back-to-glossary link
  - Last Reviewed footer citing CMS MLN CCM Booklet URL, `Last updated 2026-04-20`
  - `<PublicFooter />`

Unicode convention:
- **Inside JS strings** (metadata, schema, faqs): bare `\u2014` works (resolves at JS parse time)
- **Inside JSX text** (between tags): use `{'\u2014'}` JSX-expression form (bare `\u2014` renders as literal "u2014" — bug class flagged from Phase 3A Task 5)

Internal link class: `className="text-purple-700 underline hover:text-purple-900"`.

Last Reviewed footer citation: CMS MLN CCM Booklet (`https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf`), anchor text "CMS MLN CCM Booklet".

### Cross-link map (4-link minimum per entry)

| Entry | Related cross-links |
|---|---|
| CPT 99490 | CPT 99439, CPT 99487, Chronic Care Management, Care coordination |
| CPT 99439 | CPT 99490, CPT 99487, Chronic Care Management, Care coordination |
| CPT 99487 | CPT 99489, CPT 99490, Chronic Care Management, Care coordination |
| CPT 99489 | CPT 99487, CPT 99490, Chronic Care Management |
| Chronic Care Management | CPT 99490, CPT 99439, CPT 99487, CPT 99489, Care coordination, Remote Patient Monitoring (for the eligibility contrast), Transitional Care Management (for the program-pairing context) |

(The `/resources/glossary/care-coordination/`, `/resources/glossary/30-day-readmission/`, `/resources/glossary/transitional-care-management/`, and `/resources/glossary/remote-patient-monitoring/` entries already exist from Phases 1C and 2C — safe to link.)

---

## Task 1: Create `/resources/glossary/cpt-99490/`

**Files:**
- Create: `app/resources/glossary/cpt-99490/page.tsx`

### Content specifics

**H1:** `"CPT 99490"`

**One-sentence citation-ready definition (used in both hero subtitle and schema.description):**

`"CPT 99490 is the Medicare billing code for the first 20 minutes of clinical staff time spent on non-complex Chronic Care Management activities for a patient in a calendar month, reimbursed at approximately $66 and requiring two or more chronic conditions plus documented patient consent."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99490: Definition and CCM Billing Requirements | Positive Check Glossary',
  description:
    'CPT 99490 is the Medicare billing code for the first 20 minutes of non-complex Chronic Care Management clinical staff time per calendar month. Definition, eligibility, documentation, and how 99439/99487/99489 stack on top.',
  alternates: { canonical: '/resources/glossary/cpt-99490' },
  openGraph: {
    title: 'CPT 99490: Definition and CCM Billing Requirements',
    description:
      'Medicare billing code for the first 20 minutes of non-complex CCM clinical staff time per month.',
    url: '/resources/glossary/cpt-99490',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99490: Definition and CCM Billing Requirements',
    description: 'Medicare billing code for the first 20 minutes of non-complex CCM per month.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99490', url: 'https://positivecheck.com/resources/glossary/cpt-99490' },
])

const termSchema = buildCPTCodeSchema({
  code: '99490',
  name: 'Chronic care management services with the following required elements: multiple chronic conditions expected to last at least 12 months; first 20 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month',
  description:
    'CPT 99490 is the Medicare billing code for the first 20 minutes of clinical staff time spent on non-complex Chronic Care Management activities for a patient in a calendar month, reimbursed at approximately $66 and requiring two or more chronic conditions plus documented patient consent.',
  category: 'Chronic Care Management',
})
```

StructuredData ids: `cpt-99490-breadcrumb`, `cpt-99490-term`.

### H2 content (write 1-2 paragraphs per section)

**H2: Definition** — Restate hero sentence. Add: CPT 99490 is the base CCM code billed once per calendar month per patient when at least 20 minutes of clinical staff time on CCM activities have been documented. Time is non-face-to-face (E/M visit minutes don't count). 2026 Medicare national average is approximately $66 per patient per month (caveat: rates update annually).

**H2: Regulatory basis** — Established by CMS under the Medicare Physician Fee Schedule. Part of the CCM code family (99490, 99439, 99487, 99489). Cite CMS MLN 909188 with an inline anchor `<a href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf" target="_blank" rel="noopener noreferrer">CMS MLN Chronic Care Management Services booklet</a>`.

**H2: Who uses it and when it applies** — Bullets:
- Physicians or qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs) billing CCM
- Clinical staff (RNs, LPNs, medical assistants) under general supervision performing CCM activities
- Patients with two or more chronic conditions expected to last at least 12 months and placing the patient at significant risk of death, exacerbation, or functional decline
- Billed once per calendar month per patient when cumulative clinical staff time reaches 20 minutes

**H2: Related terms** — 4 cross-links (use Link element pattern):
- CPT 99439 — each additional 20 minutes of non-complex CCM in the same month
- CPT 99487 — complex CCM 60 minutes (alternative track for higher-complexity patients)
- Chronic Care Management — the broader care model CPT 99490 operationalizes
- Care coordination — the function CCM supports

**H2: How Positive Check relates** — 1-2 sentences. Positive Check supports CCM by generating structured wellness call summaries that make the 20-minute clinical staff review productive — concentrating time on care plan action and documentation rather than data gathering. Link to `/solutions/chronic-care-management` and `/solutions/chronic-care-management/cpt-99490-billing-guide`.

### Steps

- [ ] **Step 1:** `mkdir -p app/resources/glossary/cpt-99490`
- [ ] **Step 2:** Create file (imports `buildBreadcrumbSchema` + `buildCPTCodeSchema` only).
- [ ] **Step 3:** `npm run build 2>&1 | tail -10` — expect static route.
- [ ] **Step 4:** Runtime:
```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -sI http://localhost:3000/resources/glossary/cpt-99490 | head -1
# Expected: HTTP/1.1 200 OK
curl -s http://localhost:3000/resources/glossary/cpt-99490 | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u
# Expected: includes DefinedTerm, MedicalEntity, BreadcrumbList
curl -s http://localhost:3000/resources/glossary/cpt-99490 | grep -oE 'u2014|u2013|u007e|u2019' | wc -l
# Expected: 0
pkill -f "next dev"
```
- [ ] **Step 5:** Commit:
```bash
git add app/resources/glossary/cpt-99490/page.tsx
git commit -m "$(cat <<'EOF'
Add CPT 99490 glossary entry

First CCM glossary entry. DefinedTerm + MedicalEntity schema via
buildCPTCodeSchema. Canonical definition, regulatory basis citing
CMS MLN 909188, eligibility criteria, 4 related-terms cross-links,
and links to the CCM pillar + CPT 99490 billing guide.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Create `/resources/glossary/cpt-99439/`

**Files:**
- Create: `app/resources/glossary/cpt-99439/page.tsx`

### Content specifics

**H1:** `"CPT 99439"`

**One-sentence definition:**

`"CPT 99439 is the Medicare billing code for each additional 20 minutes of clinical staff time spent on non-complex Chronic Care Management beyond the first 20 minutes covered by CPT 99490, reimbursed at approximately $48 and billable up to twice per patient per calendar month."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99439: Definition and CCM Add-On Billing | Positive Check Glossary',
  description:
    'CPT 99439 reimburses each additional 20 minutes of non-complex Chronic Care Management clinical staff time beyond CPT 99490. Definition, billable up to twice per patient per month, and how it stacks with 99490.',
  alternates: { canonical: '/resources/glossary/cpt-99439' },
  openGraph: {
    title: 'CPT 99439: Definition and CCM Add-On Billing',
    description:
      'Medicare billing code for each additional 20 minutes of non-complex CCM clinical staff time.',
    url: '/resources/glossary/cpt-99439',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99439: Definition and CCM Add-On Billing',
    description: 'Medicare add-on code for each additional 20 minutes of non-complex CCM.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99439', url: 'https://positivecheck.com/resources/glossary/cpt-99439' },
])

const termSchema = buildCPTCodeSchema({
  code: '99439',
  name: 'Chronic care management services, each additional 20 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month (List separately in addition to code for primary procedure)',
  description:
    'CPT 99439 is the Medicare billing code for each additional 20 minutes of clinical staff time spent on non-complex Chronic Care Management beyond the first 20 minutes covered by CPT 99490, reimbursed at approximately $48 and billable up to twice per patient per calendar month.',
  category: 'Chronic Care Management',
})
```

StructuredData ids: `cpt-99439-breadcrumb`, `cpt-99439-term`.

### H2 content

**H2: Definition** — Restate hero. Add: 99439 is an add-on code that ONLY applies when CPT 99490 is also billed for the same patient in the same calendar month. It can be billed up to twice — covering minutes 21–40 and 41–60 — bringing total monthly non-complex CCM revenue to roughly $162 per patient (99490 + 2×99439). 2026 Medicare national average approximately $48 per 20-minute block.

**H2: Regulatory basis** — CMS Medicare Physician Fee Schedule. Applies only as an add-on to 99490 (not 99487 — complex CCM has its own add-on, 99489). Each 20-minute block must meet the same documentation standards as the base 99490 service. Cite CMS MLN 909188.

**H2: Who uses it and when it applies** — Bullets:
- Same provider types as 99490 (physicians, NPPs, clinical staff under general supervision)
- Patients with active non-complex CCM enrollment exceeding the 99490 20-minute threshold
- Billable up to TWICE per calendar month (minutes 21–40 and 41–60)
- Requires 99490 to also be billed for the same patient in the same month

**H2: Related terms** — 4 cross-links:
- CPT 99490 — the base non-complex CCM code 99439 adds onto
- CPT 99487 — alternative complex CCM track (not combinable with 99490/99439)
- Chronic Care Management — the broader care model
- Care coordination — the function CCM supports

**H2: How Positive Check relates** — Positive Check's daily wellness calls and structured summaries help clinical staff efficiently exceed the 20-minute threshold each month, unlocking 99439 billings for engaged populations. Link to `/solutions/chronic-care-management` and `/solutions/chronic-care-management/cpt-99490-billing-guide`.

### Steps

Same 5-step pattern. Imports: `buildBreadcrumbSchema`, `buildCPTCodeSchema`. Expected schemas: DefinedTerm + MedicalEntity + BreadcrumbList. Last Reviewed footer cites CMS MLN 909188.

Commit message:
```
Add CPT 99439 glossary entry

CCM non-complex add-on code (each additional 20 minutes beyond 99490,
billable up to 2x/month). DefinedTerm + MedicalEntity schema via
buildCPTCodeSchema. CMS MLN 909188 citation. Cross-links to 99490,
99487, Chronic Care Management, Care coordination.
```

---

## Task 3: Create `/resources/glossary/cpt-99487/`

**Files:**
- Create: `app/resources/glossary/cpt-99487/page.tsx`

### Content specifics

**H1:** `"CPT 99487"`

**One-sentence definition:**

`"CPT 99487 is the Medicare billing code for the first 60 minutes of clinical staff time spent on complex Chronic Care Management for a patient in a calendar month, reimbursed at approximately $144 and requiring substantial care plan revision for patients with moderate-to-high complexity medical decision-making."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99487: Definition and Complex CCM Billing | Positive Check Glossary',
  description:
    'CPT 99487 is the Medicare billing code for the first 60 minutes of complex Chronic Care Management per calendar month. Definition, when complex CCM applies, and how it differs from non-complex (CPT 99490).',
  alternates: { canonical: '/resources/glossary/cpt-99487' },
  openGraph: {
    title: 'CPT 99487: Definition and Complex CCM Billing',
    description:
      'Medicare billing code for the first 60 minutes of complex CCM per month.',
    url: '/resources/glossary/cpt-99487',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99487: Definition and Complex CCM Billing',
    description: 'Medicare billing code for the first 60 minutes of complex CCM per month.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99487', url: 'https://positivecheck.com/resources/glossary/cpt-99487' },
])

const termSchema = buildCPTCodeSchema({
  code: '99487',
  name: 'Complex chronic care management services, with the following required elements: multiple chronic conditions expected to last at least 12 months; moderate or high complexity medical decision making; 60 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month',
  description:
    'CPT 99487 is the Medicare billing code for the first 60 minutes of clinical staff time spent on complex Chronic Care Management for a patient in a calendar month, reimbursed at approximately $144 and requiring substantial care plan revision for patients with moderate-to-high complexity medical decision-making.',
  category: 'Chronic Care Management',
})
```

StructuredData ids: `cpt-99487-breadcrumb`, `cpt-99487-term`.

### H2 content

**H2: Definition** — Restate hero. Add: 99487 is the complex-CCM track, an alternative to non-complex CCM (CPT 99490). Same eligibility (2+ chronic conditions, 12+ month duration, significant risk) but with two additional clinical requirements: moderate-to-high complexity medical decision-making AND substantial care plan revision in the month being billed. Time threshold is 60 minutes (vs 20 for 99490). A patient is billed as non-complex OR complex in a given month — not both. 2026 Medicare national average approximately $144 per patient per month.

**H2: Regulatory basis** — CMS Medicare PFS. Defined in MLN 909188. The "moderate or high complexity medical decision-making" element follows CMS's E/M decision-making framework. Substantial care plan revision should be documented in the chart with specifics (medication changes, new specialist referrals, escalation of monitoring, etc.). Cite CMS MLN 909188.

**H2: Who uses it and when it applies** — Bullets:
- Physicians, NPPs, or clinical staff under general supervision performing complex CCM
- Patients meeting non-complex CCM eligibility AND requiring moderate-to-high complexity medical decision-making (typically: unstable conditions, recent hospitalization, significant care plan changes)
- Billed once per calendar month per patient when cumulative clinical staff time reaches 60 minutes
- A patient can shift between non-complex (99490) and complex (99487) tracks across months as clinical complexity changes

**H2: Related terms** — 4 cross-links:
- CPT 99489 — each additional 30 minutes of complex CCM in the same month
- CPT 99490 — alternative non-complex CCM track (lower-complexity patients, 20 min/month)
- Chronic Care Management — the broader care model
- Care coordination — the function CCM supports

**H2: How Positive Check relates** — Positive Check's structured summaries help clinical staff document the substantial care-plan revisions and complexity-of-decision-making elements that distinguish complex from non-complex CCM, supporting accurate 99487 billing. Link to `/solutions/chronic-care-management` and `/solutions/chronic-care-management/cpt-99490-billing-guide`.

### Steps

Same 5-step pattern. Imports: `buildBreadcrumbSchema`, `buildCPTCodeSchema`. Expected schemas: DefinedTerm + MedicalEntity + BreadcrumbList.

Commit message:
```
Add CPT 99487 glossary entry

Complex CCM base code (60 min/month, ~$144, requires moderate-to-high
complexity decision-making and substantial care plan revision).
DefinedTerm + MedicalEntity schema via buildCPTCodeSchema. CMS MLN
909188 citation. Cross-links to 99489, 99490, Chronic Care Management,
Care coordination.
```

---

## Task 4: Create `/resources/glossary/cpt-99489/`

**Files:**
- Create: `app/resources/glossary/cpt-99489/page.tsx`

### Content specifics

**H1:** `"CPT 99489"`

**One-sentence definition:**

`"CPT 99489 is the Medicare billing code for each additional 30 minutes of clinical staff time spent on complex Chronic Care Management beyond the first 60 minutes covered by CPT 99487, reimbursed at approximately $72 per 30-minute block."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'CPT 99489: Definition and Complex CCM Add-On Billing | Positive Check Glossary',
  description:
    'CPT 99489 reimburses each additional 30 minutes of complex Chronic Care Management beyond CPT 99487. Definition, how it stacks with 99487, and per-block reimbursement.',
  alternates: { canonical: '/resources/glossary/cpt-99489' },
  openGraph: {
    title: 'CPT 99489: Definition and Complex CCM Add-On Billing',
    description:
      'Medicare add-on code for each additional 30 minutes of complex CCM beyond CPT 99487.',
    url: '/resources/glossary/cpt-99489',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99489: Definition and Complex CCM Add-On Billing',
    description: 'Medicare add-on code for each additional 30 minutes of complex CCM.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99489', url: 'https://positivecheck.com/resources/glossary/cpt-99489' },
])

const termSchema = buildCPTCodeSchema({
  code: '99489',
  name: 'Complex chronic care management services, each additional 30 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month (List separately in addition to code for primary procedure)',
  description:
    'CPT 99489 is the Medicare billing code for each additional 30 minutes of clinical staff time spent on complex Chronic Care Management beyond the first 60 minutes covered by CPT 99487, reimbursed at approximately $72 per 30-minute block.',
  category: 'Chronic Care Management',
})
```

StructuredData ids: `cpt-99489-breadcrumb`, `cpt-99489-term`.

### H2 content

**H2: Definition** — Restate hero. Add: 99489 is an add-on code that ONLY applies when CPT 99487 is also billed for the same patient in the same calendar month. The 30-minute block is shorter than the non-complex 99439's 20-minute block (CMS designed it this way because complex-CCM coordination tends to scale in longer increments). 2026 Medicare national average approximately $72 per 30-minute block. There is no documented per-month cap on 99489 units, but billings beyond 2-3 blocks should be supported by extensive documentation.

**H2: Regulatory basis** — CMS Medicare PFS. Add-on to 99487 only — not combinable with 99490/99439. Each 30-minute block must meet the same complexity-of-medical-decision-making standard as the base 99487 service. Cite CMS MLN 909188.

**H2: Who uses it and when it applies** — Bullets:
- Same provider types as 99487 (physicians, NPPs, clinical staff under general supervision)
- Patients with active complex CCM enrollment exceeding the 99487 60-minute threshold
- Billable each additional 30 minutes
- Requires 99487 to also be billed for the same patient in the same month

**H2: Related terms** — 3 cross-links:
- CPT 99487 — the base complex CCM code 99489 adds onto
- CPT 99490 — alternative non-complex CCM track (not combinable with 99487/99489)
- Chronic Care Management — the broader care model

**H2: How Positive Check relates** — For high-complexity patients enrolled in complex CCM, Positive Check's daily wellness calls generate the documentation density that supports stacked 99489 billings — particularly for patients with frequent care-plan revisions or escalation events. Link to `/solutions/chronic-care-management` and `/solutions/chronic-care-management/cpt-99490-billing-guide`.

### Steps

Same 5-step pattern. Expected schemas: DefinedTerm + MedicalEntity + BreadcrumbList.

Commit message:
```
Add CPT 99489 glossary entry

Complex CCM add-on code (each additional 30 minutes beyond 99487,
~$72/block). DefinedTerm + MedicalEntity schema via buildCPTCodeSchema.
CMS MLN 909188 citation. Cross-links to 99487, 99490, Chronic Care
Management.
```

---

## Task 5: Create `/resources/glossary/chronic-care-management/`

**Files:**
- Create: `app/resources/glossary/chronic-care-management/page.tsx`

### Content specifics

**H1:** `"Chronic Care Management (CCM)"`

**One-sentence definition:**

`"Chronic Care Management (CCM) is a Medicare-reimbursed care coordination program where clinical staff deliver non-face-to-face care management for patients with two or more chronic conditions expected to last at least 12 months, supported by CPT codes 99490, 99439, 99487, and 99489."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Chronic Care Management (CCM): Definition and Requirements | Positive Check Glossary',
  description:
    'Chronic Care Management (CCM) is a Medicare-reimbursed care coordination program for patients with 2+ chronic conditions. Definition, CPT codes (99490/99439/99487/99489), and eligibility.',
  alternates: { canonical: '/resources/glossary/chronic-care-management' },
  openGraph: {
    title: 'Chronic Care Management (CCM): Definition and Requirements',
    description:
      'Medicare-reimbursed care coordination program for patients with 2+ chronic conditions.',
    url: '/resources/glossary/chronic-care-management',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Chronic Care Management (CCM): Definition and Requirements',
    description: 'Medicare-reimbursed care coordination for patients with 2+ chronic conditions.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'Chronic Care Management', url: 'https://positivecheck.com/resources/glossary/chronic-care-management' },
])

const termSchema = buildDefinedTermSchema({
  term: 'Chronic Care Management (CCM)',
  definition:
    'Chronic Care Management (CCM) is a Medicare-reimbursed care coordination program where clinical staff deliver non-face-to-face care management for patients with two or more chronic conditions expected to last at least 12 months, supported by CPT codes 99490, 99439, 99487, and 99489.',
  slug: 'chronic-care-management',
  inDefinedTermSet: 'CMS care programs',
})
```

StructuredData ids: `ccm-term-breadcrumb`, `ccm-term-definition`.

### H2 content

**H2: Definition** — Restate hero. Add: CCM covers ongoing monthly care for patients with multiple chronic conditions where care coordination, medication management, and patient communication drive outcomes. Four billing codes: 99490 (first 20 min non-complex), 99439 (each additional 20 min non-complex, up to 2x), 99487 (first 60 min complex), 99489 (each additional 30 min complex). Combined monthly revenue per patient can reach ~$162 for a high-time non-complex CCM month or ~$216+ for a complex CCM month with multiple add-on units.

**H2: Regulatory basis** — Established by CMS under the Medicare Physician Fee Schedule. Patient must have two or more chronic conditions expected to last at least 12 months (or until death) and that place the patient at significant risk of death, exacerbation, or functional decline. Patient consent (verbal or written) must be documented. Only one provider can bill CCM for a given patient per calendar month. Cite CMS MLN 909188.

**H2: Who uses it and when it applies** — Bullets:
- Physicians and qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs) billing for ongoing chronic care coordination
- Patients with two or more chronic conditions (distinct from RPM, which requires only one)
- Clinical staff (RNs, LPNs, certain medical assistants) under general supervision performing CCM activities
- Most common qualifying combinations: hypertension + diabetes, COPD + heart failure, diabetes + CKD, depression + chronic pain, dementia + medical chronic condition

**H2: Related terms** — 7 cross-links:
- CPT 99490 — first 20 minutes of non-complex CCM clinical staff time per month
- CPT 99439 — each additional 20 minutes of non-complex CCM (up to 2x/month)
- CPT 99487 — first 60 minutes of complex CCM
- CPT 99489 — each additional 30 minutes of complex CCM
- Care coordination — the broader function CCM operationalizes
- Remote Patient Monitoring — the analogous CMS program for single-condition patients with device data
- Transitional Care Management — the 30-day post-discharge program that often transitions patients into CCM

**H2: How Positive Check relates** — Positive Check operationalizes CCM at scale through automated daily wellness calls, structured per-call summaries that map to CMS documentation expectations, and real-time escalation to clinical staff. The structured summaries concentrate clinical staff time on care-plan action rather than data gathering, making the 20-minute (or 60-minute complex) threshold easier to hit reliably across an enrolled population. Link to `/solutions/chronic-care-management` and `/solutions/chronic-care-management/cpt-99490-billing-guide`.

### Steps

Same 5-step pattern. Imports: `buildBreadcrumbSchema`, `buildDefinedTermSchema` (NOT `buildCPTCodeSchema` since this is a conceptual term, not a CPT code). Expected schemas: DefinedTerm + BreadcrumbList (no MedicalEntity).

Commit message:
```
Add Chronic Care Management glossary entry

Conceptual CCM glossary entry. DefinedTerm schema via
buildDefinedTermSchema (no MedicalEntity since it's not a CPT code).
CMS MLN 909188 citation. Cross-links to all 4 CCM CPT codes plus
Care coordination, RPM (eligibility contrast), and TCM (program
pairing context).
```

---

## Task 6: Update glossary index with 5 new entries

**Files:**
- Modify: `app/resources/glossary/page.tsx`

### Strategy

The existing index (after Phase 2C) shows 10 cards in a 2-column grid (5 TCM + 5 RPM). The "Remote Patient Monitoring" card currently has `md:col-span-2` as the final wide card.

Task 6 adds 5 new CCM cards to the same grid, bringing the total to 15. The "Remote Patient Monitoring" card LOSES `md:col-span-2` (since it's no longer the last card) and "Chronic Care Management" becomes the final 2-col-span card.

### Change

Find the existing `<div className="grid md:grid-cols-2 gap-6 not-prose">`. Two edits inside it:

1. Remove `md:col-span-2` from the `Link` className for `/resources/glossary/remote-patient-monitoring` (so it becomes a normal-width card).

2. Append 5 new `<Link>` cards after the existing cards and BEFORE the closing `</div>`:

```jsx
            <Link
              href="/resources/glossary/cpt-99490"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99490</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                First 20 minutes of non-complex Chronic Care Management clinical staff time per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99439"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99439</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each additional 20 minutes of non-complex CCM (up to 2x per patient per month).
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99487"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99487</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                First 60 minutes of complex Chronic Care Management per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99489"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99489</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each additional 30 minutes of complex CCM beyond the 99487 threshold.
              </p>
            </Link>
            <Link
              href="/resources/glossary/chronic-care-management"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors md:col-span-2"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Chronic Care Management (CCM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare-reimbursed care coordination program for patients with two or more chronic conditions.
              </p>
            </Link>
```

### Steps

- [ ] **Step 1:** Read current `app/resources/glossary/page.tsx` to locate the grid and the RPM card.
- [ ] **Step 2:** Two edits:
  - Remove `md:col-span-2` from the `/resources/glossary/remote-patient-monitoring` `Link` className
  - Append the 5 new cards before the closing `</div>` of the grid
- [ ] **Step 3:** Build + runtime:
```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6
for slug in cpt-99490 cpt-99439 cpt-99487 cpt-99489 chronic-care-management; do
  count=$(curl -s http://localhost:3000/resources/glossary | grep -c "/resources/glossary/$slug")
  echo "  $slug on index: $count (expect >= 1)"
done
pkill -f "next dev"
```
- [ ] **Step 4:** Commit:
```bash
git add app/resources/glossary/page.tsx
git commit -m "$(cat <<'EOF'
List 5 CCM glossary entries on glossary index

Expands /resources/glossary/ to show the 5 Phase 3C entries as card
links (CPT 99490, CPT 99439, CPT 99487, CPT 99489, CCM). Removes
md:col-span-2 from the remote-patient-monitoring card since it's no
longer the final card. Chronic Care Management card becomes the final
2-col-span card.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Internal linking audit — add glossary links to 6 CCM pages

**Files:**
- Modify: `app/solutions/chronic-care-management/page.tsx`
- Modify: `app/solutions/chronic-care-management/faq/page.tsx`
- Modify: `app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx`
- Modify: `app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx`
- Modify: `app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx`
- Modify: `app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx`

### Strategy (mirrors Phase 1C and 2C Task 7)

For each file, find the FIRST occurrence IN JSX (not in a `faqs`/`ccmPillarFaqs`/`comparisonFaqs` data array) of the target phrase and wrap it in a `<Link>` with class `className="text-purple-700 underline hover:text-purple-900"`.

Do NOT modify any `faqs` array — those feed FAQPage schema and must remain plaintext. For the FAQ page (which has no prose body outside the FAQ array), add a "Related glossary entries" section instead.

### Per-file changes

**`app/solutions/chronic-care-management/page.tsx` (pillar)**

Add 2+ links (first JSX occurrence only):
1. "Chronic Care Management (CCM)" → wrap first JSX occurrence in `<Link href="/resources/glossary/chronic-care-management">`
2. "CPT 99490" → wrap first JSX occurrence in `<Link href="/resources/glossary/cpt-99490">`

Verify: `grep -c '/resources/glossary' app/solutions/chronic-care-management/page.tsx` returns >= 2.

**`app/solutions/chronic-care-management/faq/page.tsx`**

The FAQ array is JSON-LD source material. Don't modify the `faqs` array. Instead, INSERT a new "Related glossary entries" section BEFORE the existing `<section className="px-6 py-12 bg-gray-50">` (the back-to-pillar section):

```jsx
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Related glossary entries:{' '}
                <Link href="/resources/glossary/cpt-99490" className="text-purple-700 underline hover:text-purple-900">CPT 99490</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99487" className="text-purple-700 underline hover:text-purple-900">CPT 99487</Link>
                {', '}
                <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">Chronic Care Management</Link>
                .
              </p>
            </div>
          </section>
```

Verify: `grep -c '/resources/glossary' app/solutions/chronic-care-management/faq/page.tsx` returns >= 3.

**`app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx`**

Add 2+ links (first JSX occurrence only; do NOT touch `comparisonFaqs`):
1. "CPT 99490" → first JSX occurrence → `<Link href="/resources/glossary/cpt-99490">`
2. "Chronic Care Management" → first JSX occurrence → `<Link href="/resources/glossary/chronic-care-management">`

Verify: `grep -c '/resources/glossary' app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx` returns >= 2.

**`app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx`**

Add 2+ links (first JSX occurrence; do NOT touch `faqs`):
1. "CPT 99439" → wrap first JSX occurrence
2. "CPT 99487" → wrap first JSX occurrence

Verify: >= 2 glossary refs.

**`app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx`**

Add 2+ links (first JSX occurrence; do NOT touch `faqs`):
1. "Chronic Care Management" → wrap first JSX occurrence
2. "CPT 99490" → wrap first JSX occurrence

Verify: >= 2 glossary refs.

**`app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx`**

Add 2+ links (first JSX occurrence; do NOT touch `faqs`):
1. "CPT 99490" → wrap first JSX occurrence
2. "Chronic Care Management" → wrap first JSX occurrence

Verify: >= 2 glossary refs.

### Steps

- [ ] **Step 1:** Apply the 6 file edits. Use `Edit` tool with `replace_all: false` (default) so only the first occurrence is replaced.
- [ ] **Step 2:** Build check — `npm run build 2>&1 | tail -10`.
- [ ] **Step 3:** Verify glossary link counts per file:

```bash
for f in \
  app/solutions/chronic-care-management/page.tsx \
  app/solutions/chronic-care-management/faq/page.tsx \
  app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx \
  app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx \
  app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx \
  app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx ; do
  count=$(grep -c '/resources/glossary' "$f")
  echo "  $f: $count"
done
```
Expected: each >= 2.

- [ ] **Step 4:** Runtime:
```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -s http://localhost:3000/solutions/chronic-care-management | grep -oE 'href="/resources/glossary/[a-z0-9-]+"' | sort -u
# Expect at least 2 unique glossary paths
pkill -f "next dev"
```

- [ ] **Step 5:** Commit:
```bash
git add \
  app/solutions/chronic-care-management/page.tsx \
  app/solutions/chronic-care-management/faq/page.tsx \
  app/solutions/chronic-care-management/vs-in-house-care-coordinators/page.tsx \
  app/solutions/chronic-care-management/cpt-99490-billing-guide/page.tsx \
  app/solutions/chronic-care-management/2-chronic-conditions-requirement/page.tsx \
  app/solutions/chronic-care-management/20-minutes-monthly-requirement/page.tsx
git commit -m "$(cat <<'EOF'
Internal linking audit: add glossary links across CCM cluster

Satisfies the design spec's '>= 2 glossary entities per page'
requirement for CCM. Each of the 6 CCM pages (pillar, faq, compare,
3 cluster posts) now has >=2 inline Link elements to
/resources/glossary/* pages. FAQ answer arrays left untouched to
preserve FAQPage schema plaintext; FAQ page gets a 'Related glossary
entries' section instead.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Register 5 glossary URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

### Step 1: Sitemap

In `app/sitemap.ts`, find the existing glossary entries (Phase 1C + 2C added 10 — care-coordination, 30-day-readmission, transitional-care-management, cpt-99495, cpt-99496, cpt-99453, cpt-99454, cpt-99457, cpt-99458, remote-patient-monitoring, plus the index `/resources/glossary` itself). Add 5 new entries immediately after the last existing glossary entry:

```typescript
  { path: "/resources/glossary/cpt-99490", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/cpt-99439", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/cpt-99487", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/cpt-99489", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/chronic-care-management", lastmod: "2026-04-20", changefreq: "monthly", priority: 0.7 },
```

### Step 2: llms.txt

Edit `public/llms.txt`. Find the `## Glossary` section (which currently has the parent + 10 sub-bullets after Phases 1C + 2C). APPEND the 5 new CCM sub-bullets to the same nested list, after the existing sub-bullets:

```
  - [CPT 99490](https://positivecheck.com/resources/glossary/cpt-99490): First 20 minutes of non-complex Chronic Care Management clinical staff time per month.
  - [CPT 99439](https://positivecheck.com/resources/glossary/cpt-99439): Each additional 20 minutes of non-complex CCM (up to 2x per patient per month).
  - [CPT 99487](https://positivecheck.com/resources/glossary/cpt-99487): First 60 minutes of complex Chronic Care Management per month.
  - [CPT 99489](https://positivecheck.com/resources/glossary/cpt-99489): Each additional 30 minutes of complex CCM beyond the 99487 threshold.
  - [Chronic Care Management (CCM)](https://positivecheck.com/resources/glossary/chronic-care-management): Medicare-reimbursed care coordination program for patients with two or more chronic conditions.
```

Keep all other sections unchanged. The result: 15 total glossary sub-bullets (5 from Phase 1C + 5 from Phase 2C + 5 from Phase 3C).

### Step 3: Build + runtime

```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 16 (index + 10 prior entries + 5 new entries)

for slug in cpt-99490 cpt-99439 cpt-99487 cpt-99489 chronic-care-management; do
  count=$(curl -s http://localhost:3000/llms.txt | grep -c "/resources/glossary/$slug")
  echo "  llms.txt $slug: $count (expect 1)"
done

pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "$(cat <<'EOF'
Register 5 CCM glossary entries in sitemap + llms.txt

Adds cpt-99490, cpt-99439, cpt-99487, cpt-99489, and chronic-care-
management to the dynamic sitemap at priority 0.7. llms.txt Glossary
section now has 15 nested sub-bullets (5 TCM from Phase 1C + 5 RPM
from Phase 2C + 5 CCM from Phase 3C).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Final Phase 3C verification

**Files:** none (verification only)

### Step 1: Tests + build

Run: `npm test 2>&1 | tail -30`
Expected: schema tests pass. No new failures (the 3 pre-existing failures in `public-header.test.tsx` and `phoenix-landing-page.test.js` remain — unrelated to the pillar rollout).

Run: `npm run build 2>&1 | tail -60`
Expected: 5 new static glossary routes (`○`):
- `/resources/glossary/cpt-99490`
- `/resources/glossary/cpt-99439`
- `/resources/glossary/cpt-99487`
- `/resources/glossary/cpt-99489`
- `/resources/glossary/chronic-care-management`

### Step 2: Glossary schema verification

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

for slug in cpt-99490 cpt-99439 cpt-99487 cpt-99489 chronic-care-management; do
  echo "=== /resources/glossary/$slug ==="
  status=$(curl -sI "http://localhost:3000/resources/glossary/$slug" | head -1 | tr -d '\r')
  echo "  HTTP: $status"
  types=$(curl -s "http://localhost:3000/resources/glossary/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"[A-Za-z]+"' | sort -u | tr '\n' ',')
  echo "  types: $types"
  broken=$(curl -s "http://localhost:3000/resources/glossary/$slug" | grep -oE 'u2014|u2013|u007e|u2019' | wc -l | tr -d ' ')
  echo "  Broken JSX escapes: $broken (expect 0)"
done
```

Expected:
- All 5 return `HTTP/1.1 200 OK` (or HEAD-quirk 404 followed by GET 200 — verify with GET if HEAD is suspicious)
- cpt-99490, cpt-99439, cpt-99487, cpt-99489: include `DefinedTerm` AND `MedicalEntity`
- chronic-care-management: includes `DefinedTerm` (no MedicalEntity since conceptual)
- All 5 include `BreadcrumbList`
- 0 broken JSX escapes everywhere

### Step 3: CCM cluster linking audit

```bash
for p in \
  /solutions/chronic-care-management \
  /solutions/chronic-care-management/faq \
  /solutions/chronic-care-management/vs-in-house-care-coordinators \
  /solutions/chronic-care-management/cpt-99490-billing-guide \
  /solutions/chronic-care-management/2-chronic-conditions-requirement \
  /solutions/chronic-care-management/20-minutes-monthly-requirement ; do
  count=$(curl -s "http://localhost:3000$p" | grep -oE 'href="/resources/glossary/[a-z0-9-]+"' | sort -u | wc -l | tr -d ' ')
  echo "  $p: $count unique glossary links (expect >= 2)"
done
```

Expected: all 6 pages >= 2.

### Step 4: Sitemap + llms.txt final check

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 16

curl -s http://localhost:3000/llms.txt | grep -oE '/resources/glossary/[a-z0-9-]+' | sort -u | wc -l
# Expected: 15

pkill -f "next dev"
```

### Step 5: Tag

```bash
git tag seo-phase-3c-complete -m "Phase 3C: 5 CCM glossary entries + internal linking audit"
```

### Step 6: Summary

```bash
git log --oneline seo-phase-3b-complete..HEAD
```

Expected: 9 commits (5 entries + index + linking audit + sitemap/llms.txt + verification).

---

## Self-review

**Spec coverage (Phase 3 items):**
- ✅ 5 CCM glossary entries — Tasks 1–5
- ✅ Glossary index expansion — Task 6
- ✅ Internal linking audit across CCM cluster — Task 7
- ✅ Sitemap + llms.txt registration — Task 8
- ✅ Verification + tag — Task 9

**Cluster-post linking minimum** (design spec Section 4: "≥2 glossary entities per page"):
- ✅ Task 7 ensures each CCM page hits ≥2 unique glossary links

**Type consistency:**
- CPT entries use `buildCPTCodeSchema` (returns array of `[DefinedTerm, MedicalEntity]`); conceptual entry uses `buildDefinedTermSchema` (returns object). `StructuredData` component handles both.
- StructuredData id pattern: `<slug>-breadcrumb`, `<slug>-term` across all 5 (with the conceptual entry using `ccm-term-*` instead of `chronic-care-management-term-*` to avoid an unwieldy id).
- Breadcrumb always 4 items: Home → Resources → Glossary → Term.
- Glossary URL pattern consistent: `/resources/glossary/<slug>/`.
- Index card `md:col-span-2` shifts: `remote-patient-monitoring` loses it; `chronic-care-management` gains it.

**Placeholder scan:** Every entry has exact metadata, schema, definition, cross-link map, and bullet content. H2 body prose is specified as "1-2 short paragraphs expanding [talking points]" — same pattern Phases 1C and 2C used successfully.

**JSX escape discipline:** Plan calls out the `{'\uXXXX'}` form for JSX text explicitly (Shared anatomy section + Task 1 Step 4 runtime check for broken escapes + Task 9 Step 2 includes the broken-escape check across all 5 entries).

**Constraint compliance:**
- Authorship: Organization only (no named authors)
- Competitor names: none (CCM glossary entries cite only CMS/Medicare; cross-links stay internal)
- Price claims: approximate Medicare rates in body prose only (~$66, $48, $144, $72); no `offers` nodes in structured data
- Legal entity: "Positive Check LLC" inherited via shared `buildPublisherOrgNode()` where applicable
- Unicode escapes: `\u2014` / `\u2013` / `\u2019` / `\u007e` throughout; no raw non-ASCII; JSX text uses `{'\uXXXX'}` form
- In-house content: no external reviewer or byline references
- Last Reviewed footer: present on all 5 glossary entries, citing CMS MLN 909188

**Non-code concerns:** None. CPT rates quoted are 2026 Medicare national averages with clear caveats that rates update annually. CMS MLN 909188 is the canonical source for all CCM billing claims.
