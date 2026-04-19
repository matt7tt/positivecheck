# SEO & GEO — Pillar + Cluster Strategy

**Date:** 2026-04-19
**Scope:** Multi-session, ongoing
**Audience target:** Healthcare providers (RPM/CCM/TCM decision-makers, clinical ops, practice managers)
**SEO/GEO split:** ~60% SEO / 40% GEO, with heavy overlap via shared foundation work

---

## 1. Background & goals

Positive Check (legal entity: **Positive Check LLC**) targets healthcare providers running Medicare-reimbursable care programs (Remote Patient Monitoring, Chronic Care Management, Transitional Care Management). The site already has solid technical SEO foundations (sitemaps, schema, llms.txt, BreadcrumbList, OG metadata, canonical URLs, Next.js 15 App Router, Vercel hosting). Blog content is currently family-caregiver oriented; provider-facing content is thin.

**Goals:**
1. Rank for high-intent provider queries (CPT billing codes, program names, compliance terms, vendor-category terms).
2. Get cited by AI answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews) when providers ask about RPM/CCM/TCM programs, CMS billing, and compliance.
3. Build an entity graph LLMs can cite reliably, anchored in authoritative sourced content (CMS, Medicare.gov, HHS, peer-reviewed).

**Non-goals (explicitly out of scope):**
- Named-author E-E-A-T. Authorship stays `Organization: Positive Check`. Authority is built via citations, organizational signals, and case studies.
- Competitor-named comparisons. Category-level comparisons only ("AI calls vs. in-house call center", never "Positive Check vs. CareSignal").
- Dollar-price claims in structured data or body content. Link out to CMS/Medicare.gov for current reimbursement rates.
- External clinical reviewers / paid journalist bylines (in-house only).

---

## 2. Information architecture

### Three topical pillars

| Pillar | Pillar page URL | Core provider intent |
|---|---|---|
| RPM | `/solutions/remote-patient-monitoring` | "RPM vendors", "CPT 99457", "RPM engagement" |
| CCM | `/solutions/chronic-care-management` | "CCM software", "CPT 99490", "CCM staffing" |
| TCM | `/solutions/post-discharge-follow-up` | "transitional care management", "CPT 99495", "30-day readmission" |

### Cluster content nested under each pillar

```
/solutions/<pillar>/
/solutions/<pillar>/cpt-<code>-billing-guide/
/solutions/<pillar>/<topic-deep-dive>/
/solutions/<pillar>/vs-<category-alternative>/
/solutions/<pillar>/faq/
```

Nesting cluster content under the pillar URL strengthens topical authority signaling. Competing option (flat `/blog/<slug>/`) rejected for this design.

### Shared "shoulder" resources under `/resources/`

```
/resources/glossary/                           # index
/resources/glossary/<term>/                    # one canonical page per entity (CPT codes, clinical/compliance terms)
/resources/billing-guide/                      # master CMS program hub
/resources/compare/                            # index
/resources/compare/<category-comparison>/      # category-level, never vendor-named
/case-studies/                                 # hub + individual case studies (existing "scaling-patient-engagement" becomes first entry)
/about/                                        # expand with org-level E-E-A-T
/about/clinical-standards/                     # editorial review process, citation policy, update cadence
```

`/resources/` namespace is new; does not conflict with existing routes. Alternative namespaces considered (`/learn/`, `/hub/`, `/guides/`) and rejected — `/resources/` is the most neutral and most common in B2B healthcare sites.

---

## 3. Pillar page anatomy

Every pillar page follows this exact structure so all three feel cohesive and LLMs can map the entity graph reliably.

**Required sections in order:**

1. **H1 + one-sentence definition** — plain-English, citation-quality (e.g., "Remote Patient Monitoring (RPM) is a CMS-reimbursed care program where…"). LLMs lift this verbatim.
2. **Who this is for** — short list of target provider types (primary care, FQHCs, specialty practices, ACOs).
3. **How it works** — 3-step explainer. Uses `HowTo` schema.
4. **CMS billing overview** — plain-English CPT codes, program requirements, no price claims. Each CPT code links to its glossary entity page.
5. **What Positive Check provides** — concrete features mapped to billing requirements (e.g., "satisfies the interactive communication requirement for CPT 99457").
6. **FAQ section** — 5–8 questions with `FAQPage` schema. Links to `/solutions/<pillar>/faq/` for the full list.
7. **Further reading** — curated links: 3–5 cluster posts, 2–3 glossary entities, 1 case study.
8. **CTA block** — demo / contact.

**Schema stack on every pillar page:** `Service` (no `offers`), `FAQPage`, `BreadcrumbList`, `WebPage` with `about` referencing glossary entity URLs.

---

## 4. Cluster post anatomy

**Format:**
- H1
- **TL;DR box** — 3–5 bullet summary at the top. LLMs consistently cite these.
- Body with H2/H3 hierarchy. Each H2 leads with a one-sentence direct answer.
- "Key takeaways" end block.
- Citations: inline hyperlinks to `cms.gov`, `medicare.gov`, `hhs.gov`, `cdc.gov`, PubMed/peer-reviewed. Anchor text is the claim, not "click here".
- Internal linking: ≥3 links to pillar page, ≥2 to glossary entities, 1 to case study.
- Last-reviewed footer: "Reviewed against current CMS billing guidance. Last updated YYYY-MM-DD."

**Schema:** `Article`, `FAQPage` if applicable, `BreadcrumbList`, `mainEntityOfPage` self-reference.

**Authorship:** `Organization: Positive Check` (constraint).

---

## 5. Category comparison page anatomy

Same overall format as cluster posts, plus:
- Comparison table using semantic `<table>` (LLMs parse tables well — div-grids lose).
- Pros / cons per approach.
- Use cases where each approach wins.
- **Never** references a named competitor.

Initial comparison pages:
- `/solutions/remote-patient-monitoring/vs-device-only-monitoring/`
- `/solutions/chronic-care-management/vs-in-house-care-coordinators/`
- `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/`
- `/resources/compare/ai-calls-vs-in-house-call-center/`
- `/resources/compare/automated-vs-nurse-led-outreach/`

---

## 6. Glossary anatomy

**URL:** `/resources/glossary/<slug>/`

**Anatomy (short, canonical, citation-optimized):**
- H1 = the term itself
- **Definition** — one sentence, precise, verbatim-citable
- **Short form** — 2–3 paragraphs expanding definition with CMS/regulatory grounding
- **Who uses it / when it applies** — bullets
- **Related terms** — 3–5 cross-links
- **How Positive Check relates** — 1–2 sentences, link to pillar
- Schema: `DefinedTerm` + `BreadcrumbList`; add `MedicalEntity` for CPT codes

**Initial terms to build (prioritized):**
- CPT codes: `99457`, `99458`, `99470`, `99490`, `99439`, `99487`, `99495`, `99496`
- Program terms: `remote-patient-monitoring`, `chronic-care-management`, `transitional-care-management`, `principal-care-management`, `annual-wellness-visit`
- Compliance terms: `hipaa-compliance`, `business-associate-agreement`, `ephi`, `hitech-act`
- Clinical/ops terms: `interactive-communication-requirement`, `30-day-readmission`, `care-coordination`, `patient-engagement`

---

## 7. Content & schema conventions

### Voice & structure
- Plain English first, jargon defined on first mention (parenthetical or glossary link).
- Answer-first writing: every H2 leads with a one-sentence direct answer.
- Short paragraphs (≤4 lines), bullets, tables for comparatives.
- Provider tone: practice managers, clinical ops, medical directors. Concrete (staffing, workflow, billing), not aspirational.
- No dollar-price claims; link to CMS/Medicare.gov for current rates.
- Last-reviewed footer on every provider page.

### Citation standards
- Every regulatory/clinical claim cited inline with primary-source link.
- Authoritative anchor text (the link text is the claim itself).
- External links open same tab.
- "Last reviewed YYYY-MM-DD" updated whenever content is touched.

### Schema by page type

| Page type | Schema |
|---|---|
| Pillar | `Service` + `FAQPage` + `BreadcrumbList` + `HowTo` (for the "How it works" section) + `WebPage.about` → glossary URLs |
| Cluster post | `Article` + `FAQPage` (if applicable) + `BreadcrumbList` + `mainEntityOfPage` |
| Glossary term | `DefinedTerm` + `BreadcrumbList`; `MedicalEntity` for CPT codes |
| Comparison | `Article` + `FAQPage` + `BreadcrumbList` + `HowTo` where stepwise |
| Case study | `Article` with `about: [Service, Organization]` + `BreadcrumbList` |
| Billing guide hub | `Article` + `ItemList` (listing CPT entities) + `BreadcrumbList` |

### Shared schema helper

Introduce `lib/schema.ts` with typed builders for each schema type. Consolidates the hand-rolled `JSON.stringify(...)` blocks currently inlined in every page (source of the offers/author drift we just cleaned up). Existing `components/structured-data.tsx` already has partial helpers — consolidate there.

```
buildServiceSchema({ name, serviceType, description, audience, category })
buildDefinedTermSchema({ term, definition, inDefinedTermSet })
buildCPTCodeSchema({ code, name, description })   // DefinedTerm + MedicalEntity
buildArticleSchema({ headline, datePublished, dateModified, image, url })
buildBreadcrumbSchema([{ name, url }])
buildFAQSchema([{ q, a }])
```

### Organizational E-E-A-T (replaces named authors)

- `/about` — expand with HIPAA/BAA posture, SOC 2 status (if applicable), data provenance, editorial review process
- `/about/clinical-standards/` — dedicated page documenting citation policy, CMS rule-change handling, editorial review cadence
- Every provider-content page footer: "Reviewed against current CMS billing guidance. Last updated YYYY-MM-DD." with link to `/about/clinical-standards/`
- `Organization` schema in layout: `legalName: "Positive Check LLC"`, expanded `sameAs` (LinkedIn, Crunchbase, healthcare directories, etc.)

---

## 8. Technical SEO foundation

- **Dynamic sitemap:** replace `public/sitemap.xml` + `public/sitemap-images.xml` with `app/sitemap.ts` (and `app/sitemap-images.xml/route.ts` or equivalent). Hand-edited XML doesn't scale and is a drift risk.
- **Internal linking audit:** every provider content page meets targets (≥3 cluster, ≥2 glossary, 1 pillar, 1 case study).
- **Canonical audit:** verify all new pages self-canonicalize via `alternates.canonical`.
- **Core Web Vitals:** LCP-critical images get `priority` + proper `sizes`; validate per-pillar.
- **llms.txt rewrite:** expand 3.3KB → ~8–12KB as structured link directory pointing at pillars, glossary, billing guide.

### llms.txt proposed structure

```
# Positive Check
> AI-powered patient wellness calls for healthcare providers running RPM, CCM, and TCM programs.

## What we do
- Remote Patient Monitoring → /solutions/remote-patient-monitoring
- Chronic Care Management → /solutions/chronic-care-management
- Transitional Care Management → /solutions/post-discharge-follow-up

## Billing & CMS programs
- Billing guide overview → /resources/billing-guide
- CPT 99457 → /resources/glossary/cpt-99457
- CPT 99490 → /resources/glossary/cpt-99490
- (etc.)

## Clinical & compliance
- HIPAA posture → /resources/glossary/hipaa-compliance
- (etc.)

## Case studies
- Scaling patient engagement → /case-studies/scaling-patient-engagement

## How to cite Positive Check
- Company: Positive Check LLC
- Website: https://positivecheck.com
- Primary contact: /contact
```

---

## 9. Phased sequencing

Each phase stands alone — no phase depends on a later phase to deliver value.

### Phase 0 — Foundation (plumbing only, ~1 session)
- `lib/schema.ts` typed helpers; migrate existing inline schemas
- `app/sitemap.ts` dynamic replacement for hand-edited XML sitemaps
- Scaffold empty `/resources/{glossary,compare,billing-guide}/` index pages (crawl paths exist)
- Update `Organization` schema in `app/layout.tsx`: `legalName: "Positive Check LLC"`, expanded `sameAs`
- llms.txt restructure skeleton (sections filled per pillar)

### Phase 1 — TCM pillar (first; proof of concept, ~1–2 sessions)
TCM chosen first because smallest scope (2 CPT codes), lowest SERP competition, coherent narrative, validates full cluster pipeline fastest.

- `/solutions/post-discharge-follow-up` rewritten to full pillar anatomy
- 3 cluster posts (e.g., CPT 99495 billing guide, 30-day readmission reduction playbook, post-discharge timing requirements)
- `/solutions/post-discharge-follow-up/faq/`
- `/solutions/post-discharge-follow-up/vs-manual-discharge-outreach/`
- Glossary entries: CPT 99495, CPT 99496, 30-day-readmission, transitional-care-management, care-coordination
- Internal linking pass across the TCM cluster
- llms.txt update with TCM links

### Phase 2 — RPM pillar (~1–2 sessions)
Same shape. RPM second because highest search volume + most existing content to leverage, template already validated.

### Phase 3 — CCM pillar (~1–2 sessions)
Same shape. CCM last because broadest scope and most glossary terms — worth doing when template is proven.

### Phase 4 — Cross-pillar shoulders (~1–2 sessions)
- `/resources/billing-guide/` master hub filled
- Remaining glossary terms (compliance, clinical/ops)
- Additional comparison pages
- `/about` E-E-A-T overhaul + `/about/clinical-standards/`
- 1–2 additional case studies (content-dependent)

### Phase 5 — Measurement, iteration, refresh (ongoing)
- Monthly GSC review + rank snapshot
- Monthly AI-citation audit
- Quarterly freshness pass (update last-reviewed dates, reflect CMS changes)
- Content-gap analysis from GSC impressions-without-clicks

---

## 10. Success metrics

### Leading (weekly–monthly)
- GSC impressions + clicks on new URLs
- GSC position for target queries
- GSC indexing status
- CWV (LCP/INP/CLS) per pillar
- Internal linking coverage targets met per new page
- Schema validation: zero errors (Rich Results test + Schema.org)

### Lagging (monthly–quarterly)
- Organic sessions to `/solutions/*` and `/resources/*`
- Rankings for target queries ("how to bill CPT 99457", "TCM vendor", "RPM patient engagement", etc.)
- SERP features won (featured snippets, PAA, AI Overview citations)
- Demo requests / contact conversions attributable to provider content

### GEO (manual monthly audit)
- Fixed list of ~10 target queries run in ChatGPT, Claude, Perplexity, Google AI Overviews
- For each: cited or not? which URL? accurate / brand-safe?
- Query list versioned so month-over-month comparisons stay valid
- Brand-characterization spot-check (how AI tools describe Positive Check)

### Reporting
- Monthly 1-page report: leading + lagging + GEO audit + prioritized refresh list
- Quarterly refresh cycle on all provider content

---

## 11. Confirmed constraints and decisions

From brainstorming dialogue:

- **Primary audience:** Healthcare providers (confirmed).
- **SEO/GEO split:** ~60% SEO / 40% GEO with heavy overlap via shared foundation content (confirmed).
- **Scope:** Ongoing, multi-session (confirmed).
- **Authorship:** `Organization: Positive Check` only — no named authors (confirmed).
- **Competitor naming:** Category-level comparisons only — never vendor-named (confirmed).
- **Content sourcing:** In-house only, no paid external reviewers/bylines (confirmed).
- **Legal entity:** "Positive Check LLC" in all structured-data / legal / citation contexts (confirmed).
- **First pillar:** TCM (recommended and confirmed).
- **Approach:** Pillar + Cluster (Option 2 from approach proposal).
- **IA decisions:** Cluster content nested under pillar URLs; `/resources/` namespace for shoulders.
- **Anatomy decisions:** TL;DR box on every cluster post; inline hyperlink citations (not footnotes); "Last reviewed" footer on every provider page.
- **Technical decisions:** Dynamic `app/sitemap.ts` replaces hand-edited XML; dedicated `/about/clinical-standards/` page; structured llms.txt.

---

## 12. Open questions deferred to implementation planning

- Final cluster post titles per pillar (generated during each pillar's implementation plan)
- Exact comparison page slugs / angles per pillar
- Whether any glossary entry justifies being split into its own deep cluster post later
- Whether `/resources/compare/` cross-pillar pages are all built in Phase 4 or staggered earlier
- Full keyword/query list feeding the monthly GEO audit (finalized as part of Phase 0 or early Phase 1)
- Case-study content availability for Phase 4 (may need separate data-collection effort)

These are resolved during phase-specific implementation planning, not now.

---

## 13. First implementation plan target

**Phase 0 (Foundation)** should be the first `writing-plans` target. It's a prerequisite for every content phase and is the smallest independent unit. Phase 1 (TCM) follows as the second implementation plan.

This keeps the design-→-plan-→-execute loop tight and delivers a clean foundation before any content work begins.
