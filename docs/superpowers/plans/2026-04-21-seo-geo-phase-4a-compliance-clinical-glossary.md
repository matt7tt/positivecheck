# SEO/GEO Phase 4A — Compliance & Clinical Glossary Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish 8 conceptual glossary entries completing the entity graph the design spec (Section 6) identified: 4 compliance terms (HIPAA compliance, BAA, ePHI, HITECH Act), 2 CMS program terms (Principal Care Management, Annual Wellness Visit), 1 clinical/ops term (interactive communication requirement), and 1 broader concept (patient engagement).

**Architecture:** Mirrors Phases 1C/2C/3C exactly, with one simplification — ALL 8 entries are conceptual terms (not CPT codes), so all 8 use `buildDefinedTermSchema` (NOT `buildCPTCodeSchema`). Schema output: DefinedTerm + BreadcrumbList only, no MedicalEntity.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, Phase 0 typed builders (`buildBreadcrumbSchema`, `buildDefinedTermSchema`).

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` Section 6 (glossary anatomy) + Section 9 Phase 4.

**Reference plan (pattern source):** `docs/superpowers/plans/2026-04-20-seo-geo-phase-3c-ccm-glossary-linking.md` — Task 5 (`chronic-care-management`) is the closest conceptual-term template; every Phase 4A entry follows the same structure.

**Primary citation sources:**
- HIPAA topics: `https://www.hhs.gov/hipaa/index.html` (HHS HIPAA for Professionals)
- BAA specifically: `https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html`
- HITECH Act: `https://www.hhs.gov/hipaa/for-professionals/special-topics/hitech-act-enforcement-interim-final-rule/index.html`
- PCM: `https://www.cms.gov/medicare/payment/fee-schedules/physician` (Medicare PFS — PCM codes 99424-99427)
- AWV: `https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/awv_chart_icn905706.pdf` (CMS MLN AWV chart)
- Interactive communication: `https://www.cms.gov/medicare/payment/fee-schedules/physician`
- Patient engagement: HHS resources + general healthcare literature

---

## File structure (Phase 4A scope)

**Created**
- `app/resources/glossary/hipaa-compliance/page.tsx`
- `app/resources/glossary/business-associate-agreement/page.tsx`
- `app/resources/glossary/ephi/page.tsx`
- `app/resources/glossary/hitech-act/page.tsx`
- `app/resources/glossary/principal-care-management/page.tsx`
- `app/resources/glossary/annual-wellness-visit/page.tsx`
- `app/resources/glossary/interactive-communication-requirement/page.tsx`
- `app/resources/glossary/patient-engagement/page.tsx`

**Modified**
- `app/resources/glossary/page.tsx` — add 8 new card links (bringing index from 15 to 23 total)
- `app/sitemap.ts` — 8 new URLs at priority 0.7
- `public/llms.txt` — expand Glossary section from 15 to 23 nested sub-bullets

---

## Shared glossary entry anatomy (all conceptual, all use buildDefinedTermSchema)

Pattern matches Phase 3C Task 5 exactly:

- Imports: `Metadata`, `Link`, `PublicHeader`, `PublicFooter`, `StructuredData`, `buildBreadcrumbSchema`, `buildDefinedTermSchema` (NOT `buildCPTCodeSchema` for any of these 8)
- `metadata` export (title, description, canonical, OG type:article, Twitter card:summary)
- `breadcrumb` via `buildBreadcrumbSchema` (4 items: Home → Resources → Glossary → Term)
- `termSchema` via `buildDefinedTermSchema` (object)
- Default export: 2 `<StructuredData>` blocks (ids `<slug>-breadcrumb`, `<slug>-term`), `<PublicHeader currentPage="platform" />`, gradient hero (`from-[#e879f9] to-[#d946ef]`), 5 H2 sections, centered back-to-glossary link, Last Reviewed footer, `<PublicFooter />`

5 H2 sections per entry:
1. **Definition** — restate hero sentence + 1-2 paragraphs expanding
2. **Regulatory basis** — cite primary source inline with anchor text = the claim
3. **Who uses it and when it applies** — bullets
4. **Related terms** — cross-links (3-5 per entry, mix of new Phase 4A + existing Phase 1C/2C/3C entries)
5. **How Positive Check relates** — 1-2 sentences, link to relevant pillar(s)

Unicode escape discipline:
- JS string literals (metadata, schema, prose that gets inlined into strings): bare `\u2014` works
- JSX text content: use `{'\u2014'}` (learned from Phase 3A Task 5 — bare `\u2014` in JSX text renders as literal "u2014")

Internal link class: `className="text-purple-700 underline hover:text-purple-900"`.

Last Reviewed footer: separate `<section>`, cite the most relevant primary source for that entry, "Last updated 2026-04-21."

---

## Task 1: Create `/resources/glossary/hipaa-compliance/`

**Files:**
- Create: `app/resources/glossary/hipaa-compliance/page.tsx`

### Content

**H1:** `"HIPAA Compliance"`

**Hero subtitle / schema definition:**

`"HIPAA compliance is adherence to the Health Insurance Portability and Accountability Act of 1996 and its subsequent regulations (Privacy Rule, Security Rule, Breach Notification Rule, Enforcement Rule), which together govern how covered entities and their business associates handle protected health information (PHI)."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'HIPAA Compliance: Definition and Scope | Positive Check Glossary',
  description:
    'HIPAA compliance is adherence to the Health Insurance Portability and Accountability Act and its regulations governing Protected Health Information. Definition, who must comply, key rules, and penalties.',
  alternates: { canonical: '/resources/glossary/hipaa-compliance' },
  openGraph: {
    title: 'HIPAA Compliance: Definition and Scope',
    description:
      'What HIPAA compliance means, who must comply, and the key rules governing PHI handling.',
    url: '/resources/glossary/hipaa-compliance',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'HIPAA Compliance: Definition and Scope',
    description: 'HIPAA compliance is adherence to HIPAA rules governing PHI handling.',
  },
}
```

### Schema

```typescript
const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'HIPAA Compliance', url: 'https://positivecheck.com/resources/glossary/hipaa-compliance' },
])

const termSchema = buildDefinedTermSchema({
  term: 'HIPAA Compliance',
  definition:
    'HIPAA compliance is adherence to the Health Insurance Portability and Accountability Act of 1996 and its subsequent regulations (Privacy Rule, Security Rule, Breach Notification Rule, Enforcement Rule), which together govern how covered entities and their business associates handle protected health information (PHI).',
  slug: 'hipaa-compliance',
  inDefinedTermSet: 'Healthcare compliance',
})
```

StructuredData ids: `hipaa-compliance-breadcrumb`, `hipaa-compliance-term`.

### H2 talking points (1-2 paragraphs each, substantive prose)

**H2: Definition** — Restate hero. Add: HIPAA applies nationwide in the U.S. and is enforced by HHS Office for Civil Rights. Four principal rules: Privacy Rule (use/disclosure of PHI), Security Rule (administrative/physical/technical safeguards for ePHI), Breach Notification Rule (notification after a breach), Enforcement Rule (penalties and investigations).

**H2: Regulatory basis** — Enacted 1996, expanded significantly by HITECH Act (2009) and Omnibus Rule (2013). Enforced by the Department of Health and Human Services (HHS) Office for Civil Rights (OCR). Cite HHS HIPAA for Professionals:
```jsx
<a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">HHS HIPAA for Professionals</a>
```

**H2: Who uses it and when it applies** — Bullets:
- Covered entities: health plans, healthcare clearinghouses, and healthcare providers that transmit PHI electronically
- Business associates: third parties that create, receive, maintain, or transmit PHI on behalf of a covered entity (requires a BAA)
- Applies to PHI in any form: paper, electronic (ePHI), oral
- Penalties: civil monetary penalties up to $2M+ per violation category per year, plus potential criminal charges

**H2: Related terms** — 5 cross-links:
- Business Associate Agreement — the contract required between covered entities and business associates (`/resources/glossary/business-associate-agreement`)
- ePHI — the electronic subset of PHI covered by the Security Rule (`/resources/glossary/ephi`)
- HITECH Act — the 2009 law expanding HIPAA penalties and breach notification (`/resources/glossary/hitech-act`)
- Care coordination — a common workflow that requires HIPAA-compliant PHI handling (`/resources/glossary/care-coordination`)
- Patient engagement — digital engagement programs that must operate within HIPAA constraints (`/resources/glossary/patient-engagement`)

(Some of these will 404 until later Phase 4A tasks ship — that's expected.)

**H2: How Positive Check relates** — 1-2 sentences. Positive Check operates as a HIPAA-compliant business associate: all provider engagements include a signed Business Associate Agreement, and the platform implements the technical, administrative, and physical safeguards required by the Security Rule. Link to `/platform` (or `/solutions/chronic-care-management` if `/platform` doesn't exist; check and use the best-fit pillar).

### Last Reviewed footer

Separate `<section>`, citing `https://www.hhs.gov/hipaa/index.html` with anchor text "HHS HIPAA for Professionals", "Last updated 2026-04-21."

### Steps

- [ ] **Step 1:** `mkdir -p app/resources/glossary/hipaa-compliance`
- [ ] **Step 2:** Read `app/resources/glossary/chronic-care-management/page.tsx` (the conceptual-entry pattern from Phase 3C). Create new file following same structure; imports: `buildDefinedTermSchema` (not `buildCPTCodeSchema`).
- [ ] **Step 3:** Build check (`npm run build 2>&1 | tail -10`).
- [ ] **Step 4:** Runtime:
```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/resources/glossary/hipaa-compliance
# Expected: 200
curl -s http://localhost:3000/resources/glossary/hipaa-compliance | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"(DefinedTerm|MedicalEntity|BreadcrumbList)"' | sort -u
# Expected: DefinedTerm + BreadcrumbList (NO MedicalEntity — this is a concept term, not a CPT code)
curl -s http://localhost:3000/resources/glossary/hipaa-compliance | grep -oE 'u2014|u2013|u007e|u2019' | wc -l
# Expected: 0
pkill -f "next dev"
```
- [ ] **Step 5:** Commit:
```bash
git add app/resources/glossary/hipaa-compliance/page.tsx
git commit -m "$(cat <<'EOF'
Add HIPAA Compliance glossary entry

Conceptual glossary entry via buildDefinedTermSchema (DefinedTerm +
BreadcrumbList only, no MedicalEntity). Cites HHS HIPAA for
Professionals. Cross-links to business-associate-agreement, ephi,
hitech-act, care-coordination, patient-engagement.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Create `/resources/glossary/business-associate-agreement/`

**Files:**
- Create: `app/resources/glossary/business-associate-agreement/page.tsx`

### Content

**H1:** `"Business Associate Agreement (BAA)"`

**Hero subtitle / schema definition:**

`"A Business Associate Agreement (BAA) is a HIPAA-required contract between a covered entity (healthcare provider, health plan, or clearinghouse) and a business associate (vendor that creates, receives, maintains, or transmits Protected Health Information on behalf of the covered entity) that specifies the business associate's obligations for safeguarding PHI."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Business Associate Agreement (BAA): Definition and Requirements | Positive Check Glossary',
  description:
    'A Business Associate Agreement (BAA) is the HIPAA-required contract between covered entities and vendors handling Protected Health Information. Definition, required provisions, and when it applies.',
  alternates: { canonical: '/resources/glossary/business-associate-agreement' },
  openGraph: {
    title: 'Business Associate Agreement (BAA): Definition and Requirements',
    description:
      'The HIPAA-required contract between covered entities and vendors handling PHI.',
    url: '/resources/glossary/business-associate-agreement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Business Associate Agreement (BAA): Definition and Requirements',
    description: 'HIPAA-required contract for vendors handling PHI on behalf of covered entities.',
  },
}
```

### Schema

```typescript
const termSchema = buildDefinedTermSchema({
  term: 'Business Associate Agreement (BAA)',
  definition:
    "A Business Associate Agreement (BAA) is a HIPAA-required contract between a covered entity (healthcare provider, health plan, or clearinghouse) and a business associate (vendor that creates, receives, maintains, or transmits Protected Health Information on behalf of the covered entity) that specifies the business associate's obligations for safeguarding PHI.",
  slug: 'business-associate-agreement',
  inDefinedTermSet: 'Healthcare compliance',
})
```

Breadcrumb 4 levels ending at "Business Associate Agreement". StructuredData ids: `business-associate-agreement-breadcrumb`, `business-associate-agreement-term`.

### H2 talking points

**H2: Definition** — Restate hero. Add: Without a signed BAA, a covered entity cannot lawfully disclose PHI to a business associate under HIPAA's Privacy Rule. The BAA is a core compliance artifact that every healthcare provider should execute with any cloud software, call platform, EHR integration partner, medical transcription service, or other vendor that handles PHI.

**H2: Regulatory basis** — Required by 45 CFR 164.502(e) and 164.504(e) of the HIPAA Privacy Rule, with Security Rule obligations per 45 CFR 164.308(b). HHS publishes sample provisions that providers can use as a starting point. Cite HHS sample BAA provisions inline.

**H2: Who uses it and when it applies** — Bullets:
- Required between any covered entity and any business associate before PHI is disclosed
- Business associates include: EHR vendors, billing services, transcription services, cloud storage providers, AI/call platforms handling PHI, analytics vendors, consultants with PHI access
- Subcontractor BAAs: business associates must also execute BAAs with their own subcontractors that handle PHI
- Required provisions: permitted uses/disclosures, safeguards commitment, breach notification obligations, subcontractor requirements, termination conditions, return/destruction of PHI at termination

**H2: Related terms** — 4 cross-links:
- HIPAA Compliance — the broader regulatory framework (`/resources/glossary/hipaa-compliance`)
- ePHI — the electronic PHI most commonly in scope (`/resources/glossary/ephi`)
- HITECH Act — the law that extended direct liability to business associates (`/resources/glossary/hitech-act`)
- Patient engagement — programs that typically require vendor BAAs (`/resources/glossary/patient-engagement`)

**H2: How Positive Check relates** — Positive Check executes a Business Associate Agreement with every provider partner before any PHI is handled. The BAA covers our Security Rule safeguards, breach notification SLAs, subcontractor provisions, and PHI destruction at termination. Link to `/platform` or the primary solutions hub.

### Last Reviewed footer

Cite `https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html` with anchor "HHS sample BAA provisions", "Last updated 2026-04-21."

### Steps

Same 5-step pattern as Task 1. Verification: HTTP 200, schemas include DefinedTerm + BreadcrumbList (no MedicalEntity), 0 broken escapes.

Commit message: "Add Business Associate Agreement glossary entry" with HIPAA contract context summary.

---

## Task 3: Create `/resources/glossary/ephi/`

**Files:**
- Create: `app/resources/glossary/ephi/page.tsx`

### Content

**H1:** `"Electronic Protected Health Information (ePHI)"`

**Hero subtitle / schema definition:**

`"Electronic Protected Health Information (ePHI) is Protected Health Information (PHI) that is created, stored, transmitted, or received in electronic form \u2014 the subset of PHI specifically covered by the HIPAA Security Rule, which mandates administrative, physical, and technical safeguards."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Electronic Protected Health Information (ePHI): Definition | Positive Check Glossary',
  description:
    'Electronic Protected Health Information (ePHI) is the subset of PHI in electronic form, governed by the HIPAA Security Rule. Definition, what counts, and required safeguards.',
  alternates: { canonical: '/resources/glossary/ephi' },
  openGraph: {
    title: 'Electronic Protected Health Information (ePHI): Definition',
    description:
      'The subset of PHI in electronic form, governed by the HIPAA Security Rule.',
    url: '/resources/glossary/ephi',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Electronic Protected Health Information (ePHI): Definition',
    description: 'Electronic PHI governed by the HIPAA Security Rule.',
  },
}
```

### Schema

Breadcrumb ends at "Electronic Protected Health Information (ePHI)". `buildDefinedTermSchema` with term "Electronic Protected Health Information (ePHI)", slug "ephi", inDefinedTermSet "Healthcare compliance". StructuredData ids: `ephi-breadcrumb`, `ephi-term`.

### H2 talking points

**H2: Definition** — Restate hero. Add: ePHI includes any of the 18 HIPAA identifiers (names, dates, addresses, MRNs, etc.) when in electronic form combined with health-related information. Examples: EHR records, secure messages, voice recordings of clinical calls, cloud-stored test results, billing transactions with diagnoses.

**H2: Regulatory basis** — Covered specifically by the HIPAA Security Rule (45 CFR 164.302-318). The Security Rule requires three categories of safeguards: administrative (policies, training, access management), physical (facility and workstation security), and technical (access controls, audit logs, transmission security, encryption where addressable). Cite HHS HIPAA Security Rule page.

**H2: Who uses it and when it applies** — Bullets:
- Applies to all covered entities and business associates handling PHI in any electronic form
- Includes data at rest (storage) and data in transit (network transmission)
- Encryption is "addressable" rather than strictly required — but de-facto expected and strongly recommended for any ePHI at rest or in transit
- Loss, theft, or unauthorized access to ePHI triggers Breach Notification Rule obligations

**H2: Related terms** — 4 cross-links:
- HIPAA Compliance — the broader regulatory framework (`/resources/glossary/hipaa-compliance`)
- Business Associate Agreement — the contract framework for vendor handling of ePHI (`/resources/glossary/business-associate-agreement`)
- HITECH Act — the law that tightened ePHI breach notification (`/resources/glossary/hitech-act`)
- Care coordination — a workflow that routinely generates and transmits ePHI (`/resources/glossary/care-coordination`)

**H2: How Positive Check relates** — 1-2 sentences. Positive Check handles ePHI end-to-end: call transcripts, structured summaries, patient identifiers, and clinical flag data. The platform implements Security Rule safeguards \u2014 encryption in transit (TLS) and at rest, role-based access, comprehensive audit logging, and minimum-necessary data handling. Link to `/platform` or appropriate pillar.

### Last Reviewed footer

Cite `https://www.hhs.gov/hipaa/for-professionals/security/index.html` with anchor "HHS HIPAA Security Rule", "Last updated 2026-04-21."

### Steps

Same 5-step pattern. Commit: "Add ePHI glossary entry" with Security Rule context.

---

## Task 4: Create `/resources/glossary/hitech-act/`

**Files:**
- Create: `app/resources/glossary/hitech-act/page.tsx`

### Content

**H1:** `"HITECH Act"`

**Hero subtitle / schema definition:**

`"The Health Information Technology for Economic and Clinical Health (HITECH) Act, enacted in 2009, expanded HIPAA enforcement by establishing tiered civil monetary penalties up to $1.5M per violation category per year, extending direct liability to business associates, creating mandatory breach notification requirements, and funding the adoption of electronic health records."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'HITECH Act: Definition, Scope, and HIPAA Expansion | Positive Check Glossary',
  description:
    'The HITECH Act (2009) expanded HIPAA enforcement, created breach notification requirements, extended direct liability to business associates, and funded EHR adoption.',
  alternates: { canonical: '/resources/glossary/hitech-act' },
  openGraph: {
    title: 'HITECH Act: Definition, Scope, and HIPAA Expansion',
    description:
      'The 2009 law that expanded HIPAA enforcement and created breach notification requirements.',
    url: '/resources/glossary/hitech-act',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'HITECH Act: Definition, Scope, and HIPAA Expansion',
    description: '2009 law expanding HIPAA enforcement and breach notification.',
  },
}
```

### Schema

Breadcrumb ends at "HITECH Act". Term "HITECH Act", slug "hitech-act", inDefinedTermSet "Healthcare compliance". StructuredData ids: `hitech-act-breadcrumb`, `hitech-act-term`.

### H2 talking points

**H2: Definition** — Restate hero. Add: HITECH was enacted as part of the American Recovery and Reinvestment Act of 2009. It fundamentally changed healthcare technology compliance by tying federal funding to EHR adoption (Meaningful Use), increasing HIPAA enforcement rigor, and giving patients new rights around electronic access to their records.

**H2: Regulatory basis** — HITECH Act of 2009 (Public Law 111-5 Division A, Title XIII and Division B, Title IV). Implemented primarily through the HHS Omnibus Rule of 2013. Enforced by HHS Office for Civil Rights. Cite HHS HITECH enforcement page.

**H2: Who uses it and when it applies** — Bullets:
- All covered entities and business associates under HIPAA are now directly subject to HITECH's expanded enforcement
- Breach Notification: breaches affecting 500+ individuals must be reported to HHS and the media within 60 days; smaller breaches logged annually
- Business associate direct liability: BAs are now directly accountable to HHS for Security Rule compliance (pre-HITECH, only covered entities faced direct enforcement)
- EHR incentives: HITECH established the Meaningful Use program (now Promoting Interoperability) tying Medicare/Medicaid payments to certified EHR use

**H2: Related terms** — 4 cross-links:
- HIPAA Compliance — the broader framework HITECH expanded (`/resources/glossary/hipaa-compliance`)
- Business Associate Agreement — the contract vehicle HITECH made directly enforceable (`/resources/glossary/business-associate-agreement`)
- ePHI — the electronic subset whose protection HITECH strengthened (`/resources/glossary/ephi`)
- Care coordination — a workflow HITECH's EHR incentives accelerated (`/resources/glossary/care-coordination`)

**H2: How Positive Check relates** — HITECH makes Positive Check, as a business associate, directly liable to HHS for Security Rule compliance. The platform's audit logging, access controls, and breach notification workflow are designed to meet HITECH's post-2009 enforcement standards. Link to `/platform` or appropriate pillar.

### Last Reviewed footer

Cite `https://www.hhs.gov/hipaa/for-professionals/special-topics/hitech-act-enforcement-interim-final-rule/index.html` with anchor "HHS HITECH Act enforcement", "Last updated 2026-04-21."

### Steps

Same 5-step pattern. Commit: "Add HITECH Act glossary entry" with enforcement-expansion context.

---

## Task 5: Create `/resources/glossary/principal-care-management/`

**Files:**
- Create: `app/resources/glossary/principal-care-management/page.tsx`

### Content

**H1:** `"Principal Care Management (PCM)"`

**Hero subtitle / schema definition:**

`"Principal Care Management (PCM) is a Medicare-reimbursed care management program specifically for patients with a single high-risk chronic condition requiring ongoing clinical focus, supported by CPT codes 99424-99427 and distinguished from Chronic Care Management (CCM, which requires two or more chronic conditions)."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Principal Care Management (PCM): Definition and Requirements | Positive Check Glossary',
  description:
    'Principal Care Management (PCM) is a Medicare-reimbursed care management program for patients with a single high-risk chronic condition. CPT 99424-99427, eligibility, and contrast with CCM.',
  alternates: { canonical: '/resources/glossary/principal-care-management' },
  openGraph: {
    title: 'Principal Care Management (PCM): Definition and Requirements',
    description:
      'Medicare-reimbursed care management for a single high-risk chronic condition.',
    url: '/resources/glossary/principal-care-management',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Principal Care Management (PCM): Definition and Requirements',
    description: 'Medicare-reimbursed care management for a single high-risk chronic condition.',
  },
}
```

### Schema

Breadcrumb ends at "Principal Care Management". Term "Principal Care Management (PCM)", slug "principal-care-management", inDefinedTermSet "CMS care programs". StructuredData ids: `principal-care-management-breadcrumb`, `principal-care-management-term`.

### H2 talking points

**H2: Definition** — Restate hero. Add: PCM is CMS's third care-management program alongside CCM (multi-condition) and TCM (post-discharge transition). Four billing codes: 99424 (physician, 30 min), 99425 (physician, each additional 30 min), 99426 (clinical staff, 30 min), 99427 (clinical staff, each additional 30 min). 2026 Medicare rates vary.

**H2: Regulatory basis** — Established by CMS under the Medicare Physician Fee Schedule (finalized in the CY 2022 PFS rule). Distinct from CCM in that only ONE qualifying chronic condition is required, but that condition must place the patient at significant risk of hospitalization or decompensation over the next 3-12 months. Cite Medicare PFS.

**H2: Who uses it and when it applies** — Bullets:
- Patients with a single complex, high-risk chronic condition (e.g., newly diagnosed cancer in active treatment, heart failure with recent decompensation, severe uncontrolled diabetes)
- Physicians and qualifying non-physician practitioners (NPs, PAs, CNSs, CNMs) for 99424/99425
- Clinical staff under general supervision for 99426/99427
- Billed once per calendar month per patient when cumulative time thresholds are met
- Generally mutually exclusive with CCM for the same patient in the same month (PCM focuses on one condition; CCM manages multiple)

**H2: Related terms** — 5 cross-links:
- Chronic Care Management — the multi-condition analog (`/resources/glossary/chronic-care-management`)
- Transitional Care Management — the 30-day post-discharge program (`/resources/glossary/transitional-care-management`)
- Remote Patient Monitoring — the device-based monitoring program often layered with PCM (`/resources/glossary/remote-patient-monitoring`)
- Care coordination — the function PCM operationalizes (`/resources/glossary/care-coordination`)
- Patient engagement — the engagement layer that supports PCM outcomes (`/resources/glossary/patient-engagement`)

**H2: How Positive Check relates** — Positive Check's daily wellness calls support PCM programs by providing structured touchpoints focused on the single qualifying condition, generating documentation that clinical staff can review efficiently to meet the 30-minute monthly threshold. Link to `/solutions/chronic-care-management` (the closest sibling pillar) or the general solutions hub.

### Last Reviewed footer

Cite `https://www.cms.gov/medicare/payment/fee-schedules/physician` with anchor "Medicare Physician Fee Schedule", "Last updated 2026-04-21."

### Steps

Same 5-step pattern. Commit: "Add Principal Care Management glossary entry" with single-condition-focus context.

---

## Task 6: Create `/resources/glossary/annual-wellness-visit/`

**Files:**
- Create: `app/resources/glossary/annual-wellness-visit/page.tsx`

### Content

**H1:** `"Annual Wellness Visit (AWV)"`

**Hero subtitle / schema definition:**

`"The Annual Wellness Visit (AWV) is a Medicare-covered yearly preventive visit that develops or updates a personalized prevention plan for beneficiaries, distinct from the Initial Preventive Physical Examination (IPPE) and from annual physical exams; billed under HCPCS G0438 (initial AWV) and G0439 (subsequent AWV)."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Annual Wellness Visit (AWV): Definition and Medicare Coverage | Positive Check Glossary',
  description:
    'The Annual Wellness Visit (AWV) is a Medicare-covered yearly preventive visit that develops a personalized prevention plan. Definition, HCPCS G0438/G0439 codes, and how it differs from IPPE and annual physicals.',
  alternates: { canonical: '/resources/glossary/annual-wellness-visit' },
  openGraph: {
    title: 'Annual Wellness Visit (AWV): Definition and Medicare Coverage',
    description:
      'Medicare-covered yearly preventive visit for personalized prevention planning.',
    url: '/resources/glossary/annual-wellness-visit',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Annual Wellness Visit (AWV): Definition and Medicare Coverage',
    description: 'Medicare-covered yearly preventive visit for prevention planning.',
  },
}
```

### Schema

Breadcrumb ends at "Annual Wellness Visit". Term "Annual Wellness Visit (AWV)", slug "annual-wellness-visit", inDefinedTermSet "CMS care programs". StructuredData ids: `annual-wellness-visit-breadcrumb`, `annual-wellness-visit-term`.

### H2 talking points

**H2: Definition** — Restate hero. Add: The AWV is a face-to-face encounter focused on prevention, not problem-based care. Required elements include health risk assessment, list of current providers, review of medical/family history, cognitive impairment screening, depression screening, functional ability review, and personalized prevention plan with recommended screenings. Covered at no cost to the beneficiary when the provider accepts Medicare assignment.

**H2: Regulatory basis** — Established by Affordable Care Act of 2010 (section 4103), covered under Medicare Part B. HCPCS codes G0438 (initial AWV — first time after 12+ months of Part B enrollment, approximately once per lifetime for that provider) and G0439 (subsequent AWV — every 12 months thereafter). Cite CMS MLN AWV chart.

**H2: Who uses it and when it applies** — Bullets:
- Medicare Part B beneficiaries who have been enrolled for 12+ months (IPPE covers the first 12 months)
- Physicians and qualifying non-physician practitioners performing or directing the AWV
- Patient can receive ONE AWV per year (rolling 12 months since previous AWV)
- Not the same as a routine annual physical exam — Medicare does NOT cover traditional annual physicals, only the AWV preventive framework

**H2: Related terms** — 4 cross-links:
- Chronic Care Management — often billed alongside AWV for patients with multi-condition management needs (`/resources/glossary/chronic-care-management`)
- Transitional Care Management — a post-discharge program distinct from AWV (`/resources/glossary/transitional-care-management`)
- Care coordination — the broader function the AWV prevention plan supports (`/resources/glossary/care-coordination`)
- Patient engagement — the engagement framework that makes AWV's prevention plan actionable (`/resources/glossary/patient-engagement`)

**H2: How Positive Check relates** — Positive Check supports post-AWV prevention-plan execution: daily wellness calls can reinforce the screenings, lifestyle changes, and follow-up appointments documented in the AWV's personalized prevention plan, keeping patients engaged year-round rather than only at the annual visit. Link to `/solutions/chronic-care-management` or general solutions.

### Last Reviewed footer

Cite `https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/awv_chart_icn905706.pdf` with anchor "CMS MLN AWV chart", "Last updated 2026-04-21."

### Steps

Same 5-step pattern. Commit: "Add Annual Wellness Visit glossary entry" with AWV vs IPPE vs annual-physical disambiguation context.

---

## Task 7: Create `/resources/glossary/interactive-communication-requirement/`

**Files:**
- Create: `app/resources/glossary/interactive-communication-requirement/page.tsx`

### Content

**H1:** `"Interactive Communication Requirement"`

**Hero subtitle / schema definition:**

`"The interactive communication requirement is a CMS rule under the Medicare Physician Fee Schedule that defines the content and structure of billable clinical engagement for Remote Patient Monitoring (CPT 99457/99458) and related programs \u2014 specifically, real-time two-way engagement between clinical staff and the patient or caregiver discussing physiologic data, symptoms, or the care plan."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Interactive Communication Requirement: CMS Definition | Positive Check Glossary',
  description:
    'The interactive communication requirement is a CMS rule defining real-time two-way clinical engagement for Remote Patient Monitoring billing. Definition, what counts, and what doesn\u2019t.',
  alternates: { canonical: '/resources/glossary/interactive-communication-requirement' },
  openGraph: {
    title: 'Interactive Communication Requirement: CMS Definition',
    description:
      'CMS rule defining real-time two-way clinical engagement for RPM billing.',
    url: '/resources/glossary/interactive-communication-requirement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Interactive Communication Requirement: CMS Definition',
    description: 'CMS rule defining real-time two-way engagement for RPM billing.',
  },
}
```

### Schema

Breadcrumb ends at "Interactive Communication Requirement". Term "Interactive Communication Requirement", slug "interactive-communication-requirement", inDefinedTermSet "CMS clinical requirements". StructuredData ids: `interactive-communication-requirement-breadcrumb`, `interactive-communication-requirement-term`.

### H2 talking points

**H2: Definition** — Restate hero. Add: The phrase appears in the CMS Medicare Physician Fee Schedule for CPT 99457/99458 (RPM) but describes a general interaction standard increasingly applied across Medicare remote-care codes. The definition is intentionally technology-agnostic \u2014 telephone, live video, live secure messaging all qualify if the exchange is real-time and clinically substantive.

**H2: Regulatory basis** — Established by CMS Medicare Physician Fee Schedule. The requirement distinguishes asynchronous data review (not billable under 99457/99458 \u2014 billable separately under 99091) from synchronous two-way exchange that discusses the patient's data, symptoms, or care plan. Cite Medicare PFS.

**H2: What counts as interactive communication** — Bullets:
- Live telephone call with patient or authorized caregiver responding
- Live video visit (including telehealth platforms)
- Secure messaging with real-time two-way exchange
- AI-powered calls with structured clinical content and human escalation
- NOT counted alone: voicemail without response, one-way alerts/reminders, asynchronous email, asynchronous data review

**H2: Related terms** — 5 cross-links:
- Remote Patient Monitoring — the care model interactive communication underpins (`/resources/glossary/remote-patient-monitoring`)
- CPT 99457 — the first 20 minutes of interactive communication per month (`/resources/glossary/cpt-99457`)
- CPT 99458 — each additional 20 minutes of interactive communication (`/resources/glossary/cpt-99458`)
- Care coordination — the function interactive communication operationalizes (`/resources/glossary/care-coordination`)
- Patient engagement — the broader engagement concept (`/resources/glossary/patient-engagement`)

**H2: How Positive Check relates** — Positive Check's daily wellness calls satisfy the interactive communication requirement by capturing real-time two-way patient responses about physiologic data, symptoms, and care-plan adherence, with human escalation for concerning responses. For an RPM-specific deep-dive, see our cluster post at `/solutions/remote-patient-monitoring/interactive-communication-requirement`. Link to `/solutions/remote-patient-monitoring` and the RPM-specific cluster post.

### Last Reviewed footer

Cite `https://www.cms.gov/medicare/payment/fee-schedules/physician` with anchor "Medicare Physician Fee Schedule", "Last updated 2026-04-21."

### Steps

Same 5-step pattern. Commit: "Add interactive communication requirement glossary entry" with RPM/99457 billing context.

---

## Task 8: Create `/resources/glossary/patient-engagement/`

**Files:**
- Create: `app/resources/glossary/patient-engagement/page.tsx`

### Content

**H1:** `"Patient Engagement"`

**Hero subtitle / schema definition:**

`"Patient engagement is the active, structured involvement of patients in their own care \u2014 including understanding their conditions, participating in decisions, adhering to care plans, and communicating with the care team \u2014 a core quality and outcomes lever in chronic care management, remote patient monitoring, and transitional care programs."`

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Patient Engagement: Definition and Why It Matters | Positive Check Glossary',
  description:
    'Patient engagement is the active involvement of patients in their own care. Definition, why it drives outcomes in CCM/RPM/TCM, and how care teams operationalize it.',
  alternates: { canonical: '/resources/glossary/patient-engagement' },
  openGraph: {
    title: 'Patient Engagement: Definition and Why It Matters',
    description:
      'The active involvement of patients in their own care, across CCM, RPM, and TCM programs.',
    url: '/resources/glossary/patient-engagement',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Patient Engagement: Definition and Why It Matters',
    description: 'Active involvement of patients in their own care.',
  },
}
```

### Schema

Breadcrumb ends at "Patient Engagement". Term "Patient Engagement", slug "patient-engagement", inDefinedTermSet "Clinical operations". StructuredData ids: `patient-engagement-breadcrumb`, `patient-engagement-term`.

### H2 talking points

**H2: Definition** — Restate hero. Add: Patient engagement is not a single activity but a set of behaviors and systems that keep patients connected to their care between visits. It spans medication adherence, symptom reporting, lifestyle modifications, appointment attendance, and bidirectional communication with the clinical team.

**H2: Why it matters (regulatory and outcomes basis)** — Embedded implicitly in CMS programs (CCM, RPM, TCM, PCM all reimburse sustained engagement, not episodic care). Correlated in peer-reviewed literature with reduced hospitalizations, better medication adherence, higher patient satisfaction, and reduced per-capita cost of care. Not a single CMS "rule" \u2014 but most CMS care-management codes are structured around engagement frequency and content requirements.

**H2: Who uses it and when it applies** — Bullets:
- Healthcare providers running chronic care, post-discharge, or remote-monitoring programs
- Care coordinators, population-health managers, and clinical-operations teams measuring engagement-to-outcome relationships
- Quality-improvement initiatives tracking patient-reported outcomes (PROs) and engagement metrics
- Health systems under value-based care contracts (ACO, bundled payment, capitated arrangements) where engagement directly affects financial performance

**H2: Related terms** — 5 cross-links:
- Care coordination — the broader function patient engagement supports (`/resources/glossary/care-coordination`)
- Chronic Care Management — a CMS program engagement is core to (`/resources/glossary/chronic-care-management`)
- Remote Patient Monitoring — another engagement-intensive program (`/resources/glossary/remote-patient-monitoring`)
- Transitional Care Management — the 30-day post-discharge engagement window (`/resources/glossary/transitional-care-management`)
- Interactive communication requirement — the CMS definition of billable engagement for RPM (`/resources/glossary/interactive-communication-requirement`)

**H2: How Positive Check relates** — Positive Check operationalizes patient engagement at scale through automated daily wellness calls that maintain consistent clinical touchpoints without adding staffing overhead. Structured summaries and real-time escalation mean engagement translates directly into care-plan action, closing the engagement-to-outcome loop. Link to `/platform` or the primary solutions hub.

### Last Reviewed footer

Cite `https://www.hhs.gov/about/news/index.html` OR use the CMS Quality Payment Program URL `https://qpp.cms.gov/` with anchor "CMS Quality Payment Program", "Last updated 2026-04-21."

(Use judgment — patient engagement doesn't have a single canonical regulatory source like HIPAA or specific CPT codes. The CMS QPP page is reasonable if you need something authoritative; otherwise cite HHS generally.)

### Steps

Same 5-step pattern. Commit: "Add Patient Engagement glossary entry" with CMS-program-adjacency context.

---

## Task 9: Update glossary index with 8 new entries

**Files:**
- Modify: `app/resources/glossary/page.tsx`

### Strategy

After Phase 3C the index has 15 cards in a 2-column grid. The "Chronic Care Management" card currently has `md:col-span-2` as the final wide card.

Task 9 adds 8 new cards. Remove `md:col-span-2` from the CCM card (no longer the last). Add 8 new cards. The final new card ("Patient Engagement") gets `md:col-span-2`.

Grid ordering (15 existing + 8 new = 23 cards total):
- Keep existing 15 as-is (CPT codes + 3 program terms + care-coordination + 30-day-readmission)
- Append 4 compliance terms: hipaa-compliance, business-associate-agreement, ephi, hitech-act
- Append 2 CMS program terms: principal-care-management, annual-wellness-visit
- Append 1 clinical requirement: interactive-communication-requirement
- Append 1 engagement concept: patient-engagement (as final `md:col-span-2`)

### Change

Find the existing `/resources/glossary/chronic-care-management` Link; remove `md:col-span-2` from its className.

Inside the grid's `</div>`, append 8 new `<Link>` cards following the established card pattern. For each, use appropriate eyebrow text:
- hipaa-compliance: "Compliance"
- business-associate-agreement: "Compliance"
- ephi: "Compliance"
- hitech-act: "Compliance"
- principal-care-management: "Care program"
- annual-wellness-visit: "Care program"
- interactive-communication-requirement: "CMS requirement"
- patient-engagement: "Clinical operations" (final card, add `md:col-span-2`)

Each card: same classes as existing cards: `block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors`. Final patient-engagement card adds `md:col-span-2`.

Card descriptions (one-line each):
- hipaa-compliance: `"Adherence to HIPAA rules governing how covered entities and business associates handle Protected Health Information."`
- business-associate-agreement: `"HIPAA-required contract between covered entities and vendors handling PHI on their behalf."`
- ephi: `"Electronic Protected Health Information \u2014 the subset of PHI covered by the HIPAA Security Rule."`
- hitech-act: `"2009 law that expanded HIPAA enforcement, created breach notification, and funded EHR adoption."`
- principal-care-management: `"Medicare-reimbursed care management for a single high-risk chronic condition (CPT 99424\u201399427)."`
- annual-wellness-visit: `"Medicare-covered yearly preventive visit establishing a personalized prevention plan (HCPCS G0438/G0439)."`
- interactive-communication-requirement: `"CMS rule defining real-time two-way clinical engagement for RPM and related code billing."`
- patient-engagement: `"Active, structured involvement of patients in their own care \u2014 core to CCM, RPM, TCM, and PCM outcomes."`

Use `{'\u2014'}` / `{'\u2013'}` JSX-expression form in all 8 card descriptions (they're rendered as JSX text).

### Steps

- [ ] **Step 1:** Read `app/resources/glossary/page.tsx`.
- [ ] **Step 2:** Edit CCM card to remove `md:col-span-2`. Append 8 new cards before grid's closing `</div>`, with patient-engagement (final) having `md:col-span-2`.
- [ ] **Step 3:** Build:
```bash
npm run build 2>&1 | tail -10
```
- [ ] **Step 4:** Runtime:
```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6
for slug in hipaa-compliance business-associate-agreement ephi hitech-act principal-care-management annual-wellness-visit interactive-communication-requirement patient-engagement; do
  count=$(curl -s http://localhost:3000/resources/glossary | grep -c "/resources/glossary/$slug")
  echo "  $slug on index: $count (expect >= 1)"
done
curl -s http://localhost:3000/resources/glossary | grep -oE 'u2014|u2013|u007e|u2019' | wc -l
# Expected: 0 (no broken JSX escapes in new card descriptions)
pkill -f "next dev"
```
- [ ] **Step 5:** Commit:
```bash
git add app/resources/glossary/page.tsx
git commit -m "$(cat <<'EOF'
List 8 Phase 4A glossary entries on glossary index

Expands /resources/glossary/ to show 4 compliance entries (HIPAA,
BAA, ePHI, HITECH), 2 CMS programs (PCM, AWV), 1 clinical requirement
(interactive communication), and 1 engagement concept. Removes
md:col-span-2 from the chronic-care-management card since it's no
longer the final card. Patient Engagement card becomes the final
2-col-span card.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 10: Register 8 glossary URLs in sitemap + llms.txt

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `public/llms.txt`

### Step 1: Sitemap

Find the last existing glossary entry (`/resources/glossary/chronic-care-management` from Phase 3C). Insert 8 new entries IMMEDIATELY AFTER it:

```typescript
  { path: "/resources/glossary/hipaa-compliance", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/business-associate-agreement", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/ephi", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/hitech-act", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/principal-care-management", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/annual-wellness-visit", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/interactive-communication-requirement", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
  { path: "/resources/glossary/patient-engagement", lastmod: "2026-04-21", changefreq: "monthly", priority: 0.7 },
```

### Step 2: llms.txt

Under `## Glossary`, after the 15 existing sub-bullets, APPEND 8 new sub-bullets:

```
  - [HIPAA Compliance](https://positivecheck.com/resources/glossary/hipaa-compliance): Adherence to HIPAA rules governing covered entities and business associates handling PHI.
  - [Business Associate Agreement (BAA)](https://positivecheck.com/resources/glossary/business-associate-agreement): HIPAA-required contract between covered entities and PHI-handling vendors.
  - [ePHI](https://positivecheck.com/resources/glossary/ephi): Electronic Protected Health Information covered by the HIPAA Security Rule.
  - [HITECH Act](https://positivecheck.com/resources/glossary/hitech-act): 2009 law expanding HIPAA enforcement and creating breach notification.
  - [Principal Care Management (PCM)](https://positivecheck.com/resources/glossary/principal-care-management): Medicare-reimbursed single-condition care management (CPT 99424-99427).
  - [Annual Wellness Visit (AWV)](https://positivecheck.com/resources/glossary/annual-wellness-visit): Medicare preventive yearly visit (HCPCS G0438/G0439).
  - [Interactive communication requirement](https://positivecheck.com/resources/glossary/interactive-communication-requirement): CMS rule defining real-time two-way clinical engagement for RPM billing.
  - [Patient engagement](https://positivecheck.com/resources/glossary/patient-engagement): Active involvement of patients in their own care; core to CCM/RPM/TCM/PCM outcomes.
```

Keep all other sections unchanged. Result: 23 total glossary sub-bullets.

### Step 3: Build + runtime

```bash
npm run build 2>&1 | tail -10
npm run dev > /tmp/d.log 2>&1 &
sleep 6

curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 24 (index + 23 entries)

for slug in hipaa-compliance business-associate-agreement ephi hitech-act principal-care-management annual-wellness-visit interactive-communication-requirement patient-engagement; do
  count=$(curl -s http://localhost:3000/llms.txt | grep -c "/resources/glossary/$slug")
  echo "  llms.txt $slug: $count (expect 1)"
done

pkill -f "next dev"
```

### Step 4: Commit

```bash
git add app/sitemap.ts public/llms.txt
git commit -m "$(cat <<'EOF'
Register 8 Phase 4A glossary entries in sitemap + llms.txt

Adds 4 compliance entries (hipaa-compliance, business-associate-
agreement, ephi, hitech-act), 2 CMS programs (principal-care-
management, annual-wellness-visit), 1 clinical requirement
(interactive-communication-requirement), and patient-engagement to
the dynamic sitemap at priority 0.7. llms.txt Glossary section now
has 23 nested sub-bullets.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 11: Final Phase 4A verification + tag

**Files:** none (verification only)

### Step 1: Tests + build

```bash
npm test 2>&1 | tail -10
npm run build 2>&1 | tail -60
```

Expected: 8 new static glossary routes (`○`); schema tests pass; pre-existing test failures unchanged.

### Step 2: Glossary schema verification

```bash
npm run dev > /tmp/d.log 2>&1 &
sleep 6

for slug in hipaa-compliance business-associate-agreement ephi hitech-act principal-care-management annual-wellness-visit interactive-communication-requirement patient-engagement; do
  echo "=== /resources/glossary/$slug ==="
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/resources/glossary/$slug")
  echo "  HTTP: $code"
  types=$(curl -s "http://localhost:3000/resources/glossary/$slug" | grep -oE '<script[^>]*type="application/ld\+json"[^>]*>[^<]*' | grep -oE '"@type":"(DefinedTerm|MedicalEntity|BreadcrumbList)"' | sort -u | tr '\n' ',')
  echo "  types: $types"
  broken=$(curl -s "http://localhost:3000/resources/glossary/$slug" | grep -oE 'u2014|u2013|u007e|u2019' | wc -l | tr -d ' ')
  echo "  Broken JSX escapes: $broken (expect 0)"
done
```

Expected:
- All 8 return HTTP 200
- Each includes DefinedTerm + BreadcrumbList
- None include MedicalEntity (all conceptual terms, not CPT codes)
- All return 0 broken escapes

### Step 3: Sitemap + llms.txt final count

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c '/resources/glossary'
# Expected: 24

curl -s http://localhost:3000/llms.txt | grep -oE '/resources/glossary/[a-z0-9-]+' | sort -u | wc -l
# Expected: 23
```

### Step 4: Tag

```bash
git tag seo-phase-4a-complete -m "Phase 4A: 8 compliance/clinical glossary entries (HIPAA, BAA, ePHI, HITECH, PCM, AWV, interactive communication, patient engagement)"
```

### Step 5: Commit log summary

```bash
git log --oneline seo-phase-3c-complete..HEAD
```

Expected: ~10 commits (8 glossary entries + index + sitemap/llms.txt).

---

## Self-review

**Spec coverage (Section 6 + Phase 4):**
- ✅ Compliance terms: hipaa-compliance, business-associate-agreement, ephi, hitech-act — Tasks 1-4
- ✅ CMS program terms: principal-care-management, annual-wellness-visit — Tasks 5-6
- ✅ Clinical/ops: interactive-communication-requirement, patient-engagement — Tasks 7-8
- ✅ Index update — Task 9
- ✅ Sitemap + llms.txt — Task 10
- ✅ Verification + tag — Task 11

**Type consistency:**
- All 8 entries use `buildDefinedTermSchema` (NOT `buildCPTCodeSchema`) because none are CPT codes — all conceptual.
- Schema output: DefinedTerm + BreadcrumbList only; no MedicalEntity.
- StructuredData id pattern: `<slug>-breadcrumb`, `<slug>-term`.
- Date strings consistent: `'2026-04-21'`.
- Card index: patient-engagement gets `md:col-span-2` (new final); chronic-care-management loses it.

**Placeholder scan:** Every task has exact metadata, schema, definition, cross-link map, and H2 talking points. Implementer writes 1-2 paragraphs of substantive prose per H2 (same pattern as Phase 1C/2C/3C).

**JSX escape discipline:** Plan specifies `{'\uXXXX'}` form for JSX text, bare `\uXXXX` for JS strings. Each task has a runtime check for broken escapes (should be 0).

**Constraint compliance:**
- Authorship: Organization only (no named authors)
- Competitor names: none
- Price claims: approximate Medicare rates for PCM and AWV in prose only; no `offers` in schema
- Legal entity: "Positive Check LLC" inherited via shared `buildPublisherOrgNode()` where it applies
- Unicode escapes: `\u2014` / `\u2013` / `\u2019` / `\u007e` throughout
- In-house content: no external reviewer bylines
- Last Reviewed footer: present on every entry, citing the most relevant primary source

**Deferred to later phases:**
- Internal linking audit (existing pillar pages don't yet link to the 8 new glossary entries). Can be done in a lightweight follow-up commit or as part of Phase 4B.
- `/resources/billing-guide/` master hub expansion (Phase 4B candidate).
- `/about` E-E-A-T overhaul (Phase 4C candidate).
