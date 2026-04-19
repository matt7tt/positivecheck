# SEO/GEO Phase 0 — Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lay the plumbing for the multi-phase SEO/GEO pillar+cluster rollout: typed schema builders, dynamic sitemap, `/resources/` namespace scaffolding, correct `Organization` schema with legal entity name, and a restructured `llms.txt`.

**Architecture:** Introduce `lib/schema.ts` with pure-function typed builders for every schema type used on the site. Migrate `components/structured-data.tsx` to import from the new builders (keep the `<StructuredData>` React component there). Replace hand-edited `public/sitemap.xml` + `public/sitemap-images.xml` with a single dynamic `app/sitemap.ts`. Scaffold `/resources/{glossary,compare,billing-guide}/` index pages with substantive intro content (not thin placeholders). Rewrite `llms.txt` to a directory-style format pointing to the pillar + shoulder structure.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Jest + React Testing Library, Tailwind, shadcn/ui. Test runner: `npm test`. Build: `npm run build`.

**Reference spec:** `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md`

**Branch strategy:** Work on `main`. Do not push — user controls push timing.

---

## File structure (Phase 0 scope)

**Created**
- `lib/schema.ts` — typed schema builders
- `lib/__tests__/schema.test.ts` — unit tests for builders
- `app/sitemap.ts` — dynamic sitemap (URLs + images, one file)
- `app/resources/glossary/page.tsx`
- `app/resources/compare/page.tsx`
- `app/resources/billing-guide/page.tsx`

**Modified**
- `components/structured-data.tsx` — re-export builders; update `organizationSchema` to include `legalName` + expanded `sameAs`
- `app/layout.tsx` — render `<StructuredData>` for `organizationSchema`; replace inline `WebSite` JSON with typed builder output
- `components/shared/public-footer.tsx` — add `/resources/glossary`, `/resources/compare`, `/resources/billing-guide` links
- `public/robots.txt` — single `Sitemap:` line (remove `sitemap-images.xml`)
- `public/llms.txt` — full rewrite to directory format

**Deleted**
- `public/sitemap.xml`
- `public/sitemap-images.xml`

---

## Task 1: Create `lib/schema.ts` with TypeScript types (skeleton)

**Files:**
- Create: `lib/schema.ts`

- [ ] **Step 1: Create the file with shared types and the organization/website builders only**

```typescript
// lib/schema.ts
// Pure-function builders for schema.org JSON-LD. All builders return plain objects;
// wrap with <StructuredData data={...} /> to render.

export const SITE_URL = "https://positivecheck.com";
export const LOGO_URL = `${SITE_URL}/images/positive-logo-dark-blue.png`;
export const ORG_NAME_SHORT = "Positive Check";
export const ORG_NAME_LEGAL = "Positive Check LLC";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CPTCodeInput {
  code: string;              // e.g. "99457"
  name: string;              // e.g. "Remote physiologic monitoring treatment, initial 20 min"
  description: string;       // 1-2 sentence plain-English definition
  category?: string;         // e.g. "Remote Patient Monitoring"
}

export interface DefinedTermInput {
  term: string;
  definition: string;
  slug: string;              // glossary URL slug
  inDefinedTermSet?: string; // optional parent set URL
}

export interface ServiceInput {
  name: string;
  serviceType: string;
  description: string;
  category: string;
  audienceType?: string;
}

export interface ArticleInput {
  headline: string;
  description: string;
  url: string;               // absolute URL
  image: string;             // absolute URL
  datePublished: string;     // YYYY-MM-DD
  dateModified: string;      // YYYY-MM-DD
}
```

- [ ] **Step 2: Commit skeleton**

```bash
git add lib/schema.ts
git commit -m "Add lib/schema.ts skeleton with shared types

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Add `buildOrganizationSchema` and `buildWebSiteSchema` (TDD)

**Files:**
- Create: `lib/__tests__/schema.test.ts`
- Modify: `lib/schema.ts`

- [ ] **Step 1: Write failing test for `buildOrganizationSchema`**

```typescript
// lib/__tests__/schema.test.ts
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  ORG_NAME_LEGAL,
  SITE_URL,
} from "@/lib/schema";

describe("buildOrganizationSchema", () => {
  it("returns an Organization schema with legalName and required fields", () => {
    const schema = buildOrganizationSchema();
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Organization");
    expect(schema.legalName).toBe(ORG_NAME_LEGAL);
    expect(schema.url).toBe(SITE_URL);
    expect(schema.logo).toContain("positive-logo-dark-blue.png");
    expect(schema.contactPoint["@type"]).toBe("ContactPoint");
  });

  it("includes sameAs with at least LinkedIn and Facebook", () => {
    const schema = buildOrganizationSchema();
    expect(Array.isArray(schema.sameAs)).toBe(true);
    expect(schema.sameAs.some((u: string) => u.includes("linkedin"))).toBe(true);
    expect(schema.sameAs.some((u: string) => u.includes("facebook"))).toBe(true);
  });
});

describe("buildWebSiteSchema", () => {
  it("returns a WebSite schema referencing the organization as publisher", () => {
    const schema = buildWebSiteSchema();
    expect(schema["@type"]).toBe("WebSite");
    expect(schema.url).toBe(SITE_URL);
    expect(schema.publisher["@type"]).toBe("Organization");
    expect(schema.publisher.legalName).toBe(ORG_NAME_LEGAL);
  });
});
```

- [ ] **Step 2: Run test — expect failure**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: FAIL (builders don't exist yet).

- [ ] **Step 3: Implement builders in `lib/schema.ts`**

Append to `lib/schema.ts`:

```typescript
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME_SHORT,
    legalName: ORG_NAME_LEGAL,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "AI-powered patient check-in calls and remote patient monitoring for healthcare providers",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-858-522-9524",
      contactType: "Customer Service",
      email: "info@positivecheck.com",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/positivecheck",
      "https://www.facebook.com/positivecheck",
    ],
  } as const;
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ORG_NAME_SHORT,
    url: SITE_URL,
    description:
      "AI-powered patient check-in calls supporting RPM, CCM, and post-discharge follow-up programs for healthcare providers.",
    publisher: {
      "@type": "Organization",
      name: ORG_NAME_SHORT,
      legalName: ORG_NAME_LEGAL,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  } as const;
}
```

- [ ] **Step 4: Run test — expect pass**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add lib/schema.ts lib/__tests__/schema.test.ts
git commit -m "Add buildOrganizationSchema and buildWebSiteSchema builders

Organization schema now includes legalName 'Positive Check LLC'.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Add `buildBreadcrumbSchema` and `buildFAQSchema` (TDD)

**Files:**
- Modify: `lib/schema.ts`
- Modify: `lib/__tests__/schema.test.ts`

- [ ] **Step 1: Write failing tests**

Append to `lib/__tests__/schema.test.ts`:

```typescript
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";

describe("buildBreadcrumbSchema", () => {
  it("maps items to ListItem elements with 1-based position", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", url: "https://positivecheck.com" },
      { name: "Solutions", url: "https://positivecheck.com/solutions" },
    ]);
    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0]).toEqual({
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://positivecheck.com",
    });
    expect(schema.itemListElement[1].position).toBe(2);
  });
});

describe("buildFAQSchema", () => {
  it("maps question/answer pairs to FAQPage schema", () => {
    const schema = buildFAQSchema([
      { question: "Q1?", answer: "A1." },
      { question: "Q2?", answer: "A2." },
    ]);
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(2);
    expect(schema.mainEntity[0]).toEqual({
      "@type": "Question",
      name: "Q1?",
      acceptedAnswer: { "@type": "Answer", text: "A1." },
    });
  });
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: FAIL (builders not yet defined).

- [ ] **Step 3: Implement builders**

Append to `lib/schema.ts`:

```typescript
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: PASS (4 tests total).

- [ ] **Step 5: Commit**

```bash
git add lib/schema.ts lib/__tests__/schema.test.ts
git commit -m "Add buildBreadcrumbSchema and buildFAQSchema builders

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Add `buildServiceSchema` and `buildArticleSchema` (TDD)

**Files:**
- Modify: `lib/schema.ts`
- Modify: `lib/__tests__/schema.test.ts`

- [ ] **Step 1: Write failing tests**

Append to `lib/__tests__/schema.test.ts`:

```typescript
import { buildServiceSchema, buildArticleSchema } from "@/lib/schema";

describe("buildServiceSchema", () => {
  it("returns a Service schema without offers (pricing is never claimed)", () => {
    const schema = buildServiceSchema({
      name: "RPM with AI Calls",
      serviceType: "Remote Patient Monitoring",
      description: "Daily AI wellness calls",
      category: "Remote Patient Monitoring",
      audienceType: "Healthcare Providers",
    });
    expect(schema["@type"]).toBe("Service");
    expect(schema.name).toBe("RPM with AI Calls");
    expect(schema.provider["@type"]).toBe("Organization");
    expect(schema.provider.legalName).toBe("Positive Check LLC");
    expect(schema.audience.audienceType).toBe("Healthcare Providers");
    expect((schema as any).offers).toBeUndefined();
  });
});

describe("buildArticleSchema", () => {
  it("returns an Article with Organization author and publisher", () => {
    const schema = buildArticleSchema({
      headline: "Test Article",
      description: "Test description",
      url: "https://positivecheck.com/blog/test",
      image: "https://positivecheck.com/images/test.png",
      datePublished: "2026-04-19",
      dateModified: "2026-04-19",
    });
    expect(schema["@type"]).toBe("Article");
    expect(schema.author["@type"]).toBe("Organization");
    expect(schema.author.name).toBe("Positive Check");
    expect(schema.publisher["@type"]).toBe("Organization");
    expect(schema.mainEntityOfPage["@id"]).toBe("https://positivecheck.com/blog/test");
  });
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement builders**

Append to `lib/schema.ts`:

```typescript
export function buildServiceSchema(input: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    category: input.category,
    provider: {
      "@type": "Organization",
      name: ORG_NAME_SHORT,
      legalName: ORG_NAME_LEGAL,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    audience: {
      "@type": "Audience",
      audienceType: input.audienceType ?? "Healthcare Providers",
    },
  };
}

export function buildArticleSchema(input: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: input.image,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: {
      "@type": "Organization",
      name: ORG_NAME_SHORT,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME_SHORT,
      legalName: ORG_NAME_LEGAL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: PASS (6 tests total).

- [ ] **Step 5: Commit**

```bash
git add lib/schema.ts lib/__tests__/schema.test.ts
git commit -m "Add buildServiceSchema and buildArticleSchema builders

Service schema deliberately omits 'offers' to avoid misleading-pricing
signals for CMS reimbursement rates. Article authorship is Organization.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Add `buildDefinedTermSchema` and `buildCPTCodeSchema` (TDD)

**Files:**
- Modify: `lib/schema.ts`
- Modify: `lib/__tests__/schema.test.ts`

- [ ] **Step 1: Write failing tests**

Append to `lib/__tests__/schema.test.ts`:

```typescript
import { buildDefinedTermSchema, buildCPTCodeSchema } from "@/lib/schema";

describe("buildDefinedTermSchema", () => {
  it("returns a DefinedTerm pointing at the canonical glossary URL", () => {
    const schema = buildDefinedTermSchema({
      term: "HIPAA Compliance",
      definition: "A definition.",
      slug: "hipaa-compliance",
    });
    expect(schema["@type"]).toBe("DefinedTerm");
    expect(schema.name).toBe("HIPAA Compliance");
    expect(schema.url).toBe("https://positivecheck.com/resources/glossary/hipaa-compliance");
    expect(schema.description).toBe("A definition.");
  });
});

describe("buildCPTCodeSchema", () => {
  it("returns an array with DefinedTerm + MedicalEntity for a CPT code", () => {
    const schemas = buildCPTCodeSchema({
      code: "99457",
      name: "Remote physiologic monitoring treatment, initial 20 min",
      description: "CMS-reimbursed RPM interactive communication code.",
      category: "Remote Patient Monitoring",
    });
    expect(Array.isArray(schemas)).toBe(true);
    expect(schemas).toHaveLength(2);
    expect(schemas[0]["@type"]).toBe("DefinedTerm");
    expect(schemas[0].name).toBe("CPT 99457");
    expect(schemas[0].url).toBe("https://positivecheck.com/resources/glossary/cpt-99457");
    expect(schemas[1]["@type"]).toBe("MedicalEntity");
    expect(schemas[1].code.codeValue).toBe("99457");
    expect(schemas[1].code.codingSystem).toBe("CPT");
  });
});
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement builders**

Append to `lib/schema.ts`:

```typescript
export function buildDefinedTermSchema(input: DefinedTermInput) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: input.term,
    description: input.definition,
    url: `${SITE_URL}/resources/glossary/${input.slug}`,
    ...(input.inDefinedTermSet
      ? { inDefinedTermSet: input.inDefinedTermSet }
      : {}),
  };
}

export function buildCPTCodeSchema(input: CPTCodeInput) {
  const slug = `cpt-${input.code}`;
  const glossaryUrl = `${SITE_URL}/resources/glossary/${slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: `CPT ${input.code}`,
      description: input.description,
      url: glossaryUrl,
      ...(input.category ? { inDefinedTermSet: input.category } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalEntity",
      name: input.name,
      description: input.description,
      code: {
        "@type": "MedicalCode",
        codeValue: input.code,
        codingSystem: "CPT",
      },
      url: glossaryUrl,
    },
  ];
}
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm test -- lib/__tests__/schema.test.ts`
Expected: PASS (8 tests total).

- [ ] **Step 5: Commit**

```bash
git add lib/schema.ts lib/__tests__/schema.test.ts
git commit -m "Add buildDefinedTermSchema and buildCPTCodeSchema builders

CPT codes emit a DefinedTerm + MedicalEntity pair so both glossary
entity graph and medical coding system are represented.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Migrate `components/structured-data.tsx` to use builders

**Files:**
- Modify: `components/structured-data.tsx`

- [ ] **Step 1: Replace `organizationSchema` and add re-exports**

Replace the entire contents of `components/structured-data.tsx` with:

```typescript
import Script from "next/script";
import {
  buildOrganizationSchema,
  buildBreadcrumbSchema as buildBreadcrumbSchemaImpl,
  buildFAQSchema,
  SITE_URL,
  LOGO_URL,
  ORG_NAME_SHORT,
  ORG_NAME_LEGAL,
} from "@/lib/schema";

export {
  buildOrganizationSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildDefinedTermSchema,
  buildCPTCodeSchema,
  buildWebSiteSchema,
  SITE_URL,
  LOGO_URL,
  ORG_NAME_SHORT,
  ORG_NAME_LEGAL,
} from "@/lib/schema";

interface StructuredDataProps {
  data: Record<string, any> | Array<Record<string, any>>;
  id?: string;
}

export function StructuredData({ data, id }: StructuredDataProps) {
  const first = Array.isArray(data) ? data[0] : data;
  const schemaId = id || `structured-data-${first?.["@type"] || "default"}`;
  return (
    <Script
      id={schemaId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Backward-compatible object exports (some pages import these directly).
export const organizationSchema = buildOrganizationSchema();

// Kept as static object — matches the FAQ rendered on the homepage + /faq page.
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the Positive Check Admin Console provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Admin Console gives providers a centralized view of wellness check-ins, client status, and call performance. Dashboards summarize key metrics such as active alerts, intervention rates, and engagement levels. This makes it easy for care teams to monitor overall program effectiveness and quickly identify where human attention is needed.",
      },
    },
    {
      "@type": "Question",
      name: "How can providers use alerts and reporting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alerts immediately notify staff when follow-up is required, ensuring that no client is overlooked. Reports provide detailed insights into call outcomes, wellness trends, and the frequency of human interventions. This data allows providers to make more informed decisions, improve operational efficiency, and demonstrate measurable results to leadership or regulatory bodies.",
      },
    },
    {
      "@type": "Question",
      name: "How does Positive Check reduce workload for staff?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Positive Check automates routine daily check-ins, capturing essential information and flagging only those cases that require human intervention. This reduces the time staff spend on repetitive tasks and allows them to focus on higher-value care activities. As a result, organizations gain efficiency, reduce staff burnout, and optimize resources across their operations.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is Positive Check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Positive Check is designed with strong safeguards to protect sensitive client information. All data is encrypted in transit and at rest, and administrative controls are available to ensure only authorized users can access reports and client records. Security and privacy are treated as foundational elements of the platform.",
      },
    },
    {
      "@type": "Question",
      name: "Can Positive Check scale with our organization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Admin Console supports multiple users with role-based permissions and centralized oversight. Whether a provider manages a single location or multiple facilities, the platform can adapt to the organization's scale while maintaining consistency and visibility across all sites.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Positive Check different from traditional wellness calls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional wellness calls often depend on call center staff or individual caregivers, which can be inconsistent, costly, and difficult to scale. Positive Check provides a reliable, AI-powered system that ensures every patient receives consistent attention. The platform also produces objective data, real-time alerts, and clear reporting that providers can use to improve outcomes, demonstrate compliance, and achieve a stronger return on investment.",
      },
    },
  ],
} as const;

export const medicalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: ORG_NAME_SHORT,
  description:
    "AI-powered patient check-in calls for RPM, CCM, and post-discharge follow-up programs",
  medicalSpecialty: [
    "Geriatrics",
    "RemotePatientMonitoring",
    "ChronicCareManagement",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Automated Patient Check-In Calls",
      description:
        "AI-powered check-in calls with virtual assistant Lola for patient wellness monitoring",
    },
    {
      "@type": "MedicalProcedure",
      name: "Remote Patient Monitoring",
      description: "Healthcare provider dashboard for monitoring multiple patients",
    },
    {
      "@type": "MedicalProcedure",
      name: "Medication Adherence Monitoring",
      description: "Daily reminders and tracking for medication compliance",
    },
  ],
} as const;

export const productSchemaProviders = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Positive Check for Healthcare Providers",
  description: "Scalable remote patient monitoring and wellness check-ins",
  brand: {
    "@type": "Brand",
    name: ORG_NAME_SHORT,
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "Contact for pricing",
      priceCurrency: "USD",
    },
    availability: "https://schema.org/InStock",
  },
} as const;

// Backward-compatible function export (existing pages call generateBreadcrumbSchema).
export const generateBreadcrumbSchema = buildBreadcrumbSchemaImpl;

// Suppress unused-import warnings for helpers used only for side-effect re-export above.
void [buildOrganizationSchema, buildFAQSchema, SITE_URL, LOGO_URL];
```

- [ ] **Step 2: Verify existing callers still work — type-check + tests**

Run: `npx tsc --noEmit`
Expected: PASS (no type errors).

Run: `npm test`
Expected: PASS (all existing tests + new schema tests).

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: successful build, 33+ pages.

- [ ] **Step 4: Commit**

```bash
git add components/structured-data.tsx
git commit -m "Route components/structured-data.tsx through lib/schema.ts builders

organizationSchema now includes legalName 'Positive Check LLC'.
Existing consumers (app/page.tsx, app/faq/page.tsx, app/about/page.tsx,
app/contact/page.tsx) continue to work via re-exports.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Render Organization schema in root layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace inline WebSite script with typed builder output**

In `app/layout.tsx`, replace the existing site-wide `<script type="application/ld+json">` block (the one with `"@type": "WebSite"` currently at lines ~76–96) with two `<script>` blocks using the builders. Replace this section:

```jsx
        {/* Site-wide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Positive Check",
              "url": "https://positivecheck.com",
              "description": "AI-powered patient check-in calls supporting RPM, CCM, and post-discharge follow-up programs for healthcare providers.",
              "publisher": {
                "@type": "Organization",
                "name": "Positive Check",
                "url": "https://positivecheck.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://positivecheck.com/images/positive-logo-dark-blue.png"
                }
              }
            })
          }}
        />
```

with:

```jsx
        {/* Site-wide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebSiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationSchema()),
          }}
        />
```

Also add the import at the top of the file (next to existing imports):

```typescript
import { buildOrganizationSchema, buildWebSiteSchema } from "@/lib/schema";
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: successful build.

- [ ] **Step 3: Runtime check — view page source**

Run: `npm run dev` in one terminal.
In another, run: `curl -s http://localhost:3000 | grep -A 2 'application/ld+json' | head -20`
Expected: two JSON-LD blocks visible in source, one with `"@type":"WebSite"` and one with `"@type":"Organization"` including `"legalName":"Positive Check LLC"`.

Stop dev server (`Ctrl+C`).

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "Render Organization + WebSite schema site-wide via typed builders

Replaces inline JSON-LD in app/layout.tsx. Organization schema now
includes legalName 'Positive Check LLC' on every page.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Create dynamic `app/sitemap.ts`

**Files:**
- Create: `app/sitemap.ts`

- [ ] **Step 1: Create `app/sitemap.ts` with the full URL list**

Create `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";

const SITE = "https://positivecheck.com";

type Priority = 0.3 | 0.7 | 0.8 | 0.9 | 1.0;
type Freq = "weekly" | "monthly" | "yearly";

interface Entry {
  path: string;
  lastmod: string;
  changefreq: Freq;
  priority: Priority;
  images?: string[];
}

const entries: Entry[] = [
  { path: "/", lastmod: "2026-04-19", changefreq: "weekly", priority: 1.0,
    images: ["/images/senior-talking-on-the-phone1.webp"] },
  { path: "/about", lastmod: "2026-02-06", changefreq: "monthly", priority: 0.8 },
  { path: "/how-it-works", lastmod: "2026-02-06", changefreq: "monthly", priority: 0.9,
    images: ["/images/senior-talking-on-the-phone1.webp"] },
  { path: "/platform", lastmod: "2026-02-13", changefreq: "monthly", priority: 0.9,
    images: ["/images/admin-console-dashboard-new.png", "/images/wellness-dash-2.png"] },
  { path: "/roi-calculator", lastmod: "2026-02-22", changefreq: "monthly", priority: 0.9,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/contact", lastmod: "2026-02-06", changefreq: "monthly", priority: 0.7,
    images: ["/images/healthcare-care-coordinator.png"] },
  { path: "/blog", lastmod: "2025-07-05", changefreq: "weekly", priority: 0.8 },
  { path: "/blog/ai-companions-for-senior-loneliness-and-caregiver-stress", lastmod: "2025-07-05", changefreq: "monthly", priority: 0.7 },
  { path: "/blog/senior-sleep-health-fall-prevention-wellness-monitoring", lastmod: "2025-06-27", changefreq: "monthly", priority: 0.7 },
  { path: "/blog/importance-of-checking-in-care-communities", lastmod: "2025-03-17", changefreq: "monthly", priority: 0.7 },
  { path: "/blog/maintaining-social-connections", lastmod: "2025-03-10", changefreq: "monthly", priority: 0.7 },
  { path: "/blog/senior-phone-check-ins-mental-health-safety-benefits", lastmod: "2025-01-25", changefreq: "monthly", priority: 0.7 },
  { path: "/blog/role-of-technology-in-senior-care", lastmod: "2025-01-25", changefreq: "monthly", priority: 0.7 },
  { path: "/privacy", lastmod: "2026-03-18", changefreq: "yearly", priority: 0.3 },
  { path: "/terms", lastmod: "2026-03-18", changefreq: "yearly", priority: 0.3 },
  { path: "/case-studies/scaling-patient-engagement", lastmod: "2026-02-22", changefreq: "monthly", priority: 0.8,
    images: ["/images/healthcare-care-coordinator.png"] },
  { path: "/solutions", lastmod: "2026-04-14", changefreq: "monthly", priority: 0.9,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/faq", lastmod: "2026-04-14", changefreq: "monthly", priority: 0.7 },
  { path: "/solutions/remote-patient-monitoring", lastmod: "2026-02-24", changefreq: "monthly", priority: 0.9,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/chronic-care-management", lastmod: "2026-02-24", changefreq: "monthly", priority: 0.9,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/solutions/post-discharge-follow-up", lastmod: "2026-02-24", changefreq: "monthly", priority: 0.9,
    images: ["/images/admin-console-dashboard-new.png"] },
  { path: "/resources/glossary", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8 },
  { path: "/resources/compare", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8 },
  { path: "/resources/billing-guide", lastmod: "2026-04-19", changefreq: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((e) => ({
    url: `${SITE}${e.path}`,
    lastModified: new Date(e.lastmod),
    changeFrequency: e.changefreq,
    priority: e.priority,
    ...(e.images?.length
      ? { images: e.images.map((img) => `${SITE}${img}`) }
      : {}),
  }));
}
```

- [ ] **Step 2: Delete static XML sitemaps**

Run:
```bash
git rm public/sitemap.xml public/sitemap-images.xml
```

- [ ] **Step 3: Update `public/robots.txt`**

Replace lines 30–32 of `public/robots.txt`:

From:
```
# Sitemap locations
Sitemap: https://positivecheck.com/sitemap.xml
Sitemap: https://positivecheck.com/sitemap-images.xml
```

To:
```
# Sitemap location
Sitemap: https://positivecheck.com/sitemap.xml
```

- [ ] **Step 4: Build check**

Run: `npm run build`
Expected: build completes; look for `● /sitemap.xml` in the static route list (Next.js 15 compiles `app/sitemap.ts` into `/sitemap.xml`).

- [ ] **Step 5: Runtime check — fetch generated sitemap**

Run: `npm run dev` in one terminal.
In another: `curl -s http://localhost:3000/sitemap.xml | head -40`
Expected: valid `<urlset>` XML with entries, images under `<image:image>` nodes for entries that have them. Verify `/resources/glossary`, `/resources/compare`, `/resources/billing-guide` are present.

Stop dev server.

- [ ] **Step 6: Commit**

```bash
git add app/sitemap.ts public/robots.txt
git commit -m "Replace hand-edited sitemap XML with dynamic app/sitemap.ts

Consolidates page sitemap and image sitemap into a single Next.js
MetadataRoute sitemap. Adds /resources/{glossary,compare,billing-guide}
as crawl targets ahead of Phase 1 content. Reduces drift risk from
hand-edited XML.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Scaffold `/resources/glossary/` index page

**Files:**
- Create: `app/resources/glossary/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
// app/resources/glossary/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/shared/public-header";
import { PublicFooter } from "@/components/shared/public-footer";
import { StructuredData, buildBreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Healthcare Billing & Care Program Glossary | Positive Check",
  description:
    "Plain-English definitions of CMS billing codes, care programs (RPM, CCM, TCM), and compliance terms referenced across Positive Check's provider resources.",
  alternates: { canonical: "/resources/glossary" },
  openGraph: {
    title: "Healthcare Billing & Care Program Glossary | Positive Check",
    description:
      "CMS billing codes, care programs, and compliance terms for healthcare providers.",
    url: "/resources/glossary",
    siteName: "Positive Check",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Billing & Care Program Glossary | Positive Check",
    description:
      "CMS billing codes, care programs, and compliance terms for healthcare providers.",
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "https://positivecheck.com" },
  { name: "Resources", url: "https://positivecheck.com/resources" },
  { name: "Glossary", url: "https://positivecheck.com/resources/glossary" },
]);

export default function GlossaryIndexPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="glossary-breadcrumb" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2642] mb-6 leading-tight">
            Healthcare Billing & Care Program Glossary
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Plain-English definitions of the CMS billing codes, care programs, and
            compliance terms referenced across Positive Check&apos;s provider resources.
            Each entry links to its primary CMS source.
          </p>
          <h2 className="text-2xl font-bold text-[#1a2642] mt-12 mb-4">
            What this section covers
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>CMS billing codes</strong> — CPT codes used for Remote Patient
              Monitoring (RPM), Chronic Care Management (CCM), and Transitional Care
              Management (TCM) programs.
            </li>
            <li>
              <strong>Care program terms</strong> — Definitions of RPM, CCM, TCM,
              Principal Care Management, and Annual Wellness Visit.
            </li>
            <li>
              <strong>Compliance terms</strong> — HIPAA, Business Associate Agreement
              (BAA), ePHI, HITECH Act.
            </li>
            <li>
              <strong>Clinical & operational terms</strong> — 30-day readmission,
              interactive communication requirement, care coordination, patient
              engagement.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-8">
            Entries are added on an ongoing basis as Positive Check publishes new
            provider-facing content. For questions about a term not yet listed,{" "}
            <Link href="/contact" className="text-[#1a2642] underline">
              contact our team
            </Link>
            .
          </p>
        </main>
        <PublicFooter />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: `/resources/glossary` shows up in the route list.

- [ ] **Step 3: Commit**

```bash
git add app/resources/glossary/page.tsx
git commit -m "Scaffold /resources/glossary/ index with intro content

Phase 0 crawl-path scaffold. Content expands per pillar phase
(TCM terms land in Phase 1, RPM in Phase 2, CCM in Phase 3).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 10: Scaffold `/resources/compare/` index page

**Files:**
- Create: `app/resources/compare/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
// app/resources/compare/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/shared/public-header";
import { PublicFooter } from "@/components/shared/public-footer";
import { StructuredData, buildBreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Care Outreach Approach Comparisons | Positive Check",
  description:
    "Category-level comparisons of patient outreach approaches: AI-powered wellness calls versus in-house call centers, manual care coordinators, and device-only monitoring.",
  alternates: { canonical: "/resources/compare" },
  openGraph: {
    title: "Care Outreach Approach Comparisons | Positive Check",
    description:
      "Category-level comparisons of how healthcare providers can scale patient outreach.",
    url: "/resources/compare",
    siteName: "Positive Check",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Care Outreach Approach Comparisons | Positive Check",
    description:
      "Category-level comparisons of how healthcare providers scale patient outreach.",
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "https://positivecheck.com" },
  { name: "Resources", url: "https://positivecheck.com/resources" },
  { name: "Compare", url: "https://positivecheck.com/resources/compare" },
]);

export default function CompareIndexPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="compare-breadcrumb" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2642] mb-6 leading-tight">
            Care Outreach Approach Comparisons
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Category-level comparisons of how healthcare providers can scale patient
            outreach across RPM, CCM, and TCM programs. Comparisons focus on
            approaches and workflows &mdash; not specific vendors.
          </p>
          <h2 className="text-2xl font-bold text-[#1a2642] mt-12 mb-4">
            What this section covers
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>AI-powered wellness calls vs. in-house call center staffing</li>
            <li>AI-powered engagement vs. device-only remote patient monitoring</li>
            <li>Automated outreach vs. nurse-led telephonic care coordination</li>
            <li>Post-discharge follow-up calls vs. manual care-coordinator outreach</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-8">
            Individual comparison pages are added on an ongoing basis. For a walk-through
            of how Positive Check compares to your current approach,{" "}
            <Link href="/contact" className="text-[#1a2642] underline">
              request a demo
            </Link>
            .
          </p>
        </main>
        <PublicFooter />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: `/resources/compare` in route list.

- [ ] **Step 3: Commit**

```bash
git add app/resources/compare/page.tsx
git commit -m "Scaffold /resources/compare/ index with intro content

Phase 0 crawl-path scaffold for category-level comparisons.
Individual comparison pages added per pillar phase.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 11: Scaffold `/resources/billing-guide/` index page

**Files:**
- Create: `app/resources/billing-guide/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
// app/resources/billing-guide/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/shared/public-header";
import { PublicFooter } from "@/components/shared/public-footer";
import { StructuredData, buildBreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "CMS Care Program Billing Guide | Positive Check",
  description:
    "Overview of CMS-reimbursed care programs: Remote Patient Monitoring (RPM), Chronic Care Management (CCM), Transitional Care Management (TCM), and the CPT codes that support them.",
  alternates: { canonical: "/resources/billing-guide" },
  openGraph: {
    title: "CMS Care Program Billing Guide | Positive Check",
    description:
      "Overview of CMS-reimbursed care programs and the CPT codes that support them.",
    url: "/resources/billing-guide",
    siteName: "Positive Check",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMS Care Program Billing Guide | Positive Check",
    description:
      "Overview of CMS-reimbursed care programs and the CPT codes that support them.",
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "https://positivecheck.com" },
  { name: "Resources", url: "https://positivecheck.com/resources" },
  { name: "Billing Guide", url: "https://positivecheck.com/resources/billing-guide" },
]);

export default function BillingGuideIndexPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="billing-guide-breadcrumb" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2642] mb-6 leading-tight">
            CMS Care Program Billing Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            An overview of the CMS-reimbursed care programs that Positive Check supports,
            and the CPT codes that define their billing mechanics. Reimbursement rates
            change annually &mdash; current figures are maintained on CMS.gov and
            Medicare.gov.
          </p>
          <h2 className="text-2xl font-bold text-[#1a2642] mt-12 mb-4">Programs covered</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <Link href="/solutions/remote-patient-monitoring" className="text-[#1a2642] underline">
                Remote Patient Monitoring (RPM)
              </Link>{" "}
              &mdash; CPT 99453, 99454, 99457, 99458, 99470
            </li>
            <li>
              <Link href="/solutions/chronic-care-management" className="text-[#1a2642] underline">
                Chronic Care Management (CCM)
              </Link>{" "}
              &mdash; CPT 99490, 99439, 99487, 99489
            </li>
            <li>
              <Link href="/solutions/post-discharge-follow-up" className="text-[#1a2642] underline">
                Transitional Care Management (TCM)
              </Link>{" "}
              &mdash; CPT 99495, 99496
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-[#1a2642] mt-12 mb-4">What you&apos;ll find here</h2>
          <p className="text-gray-700 leading-relaxed">
            Program-by-program breakdowns of eligibility, documentation requirements,
            and how AI-powered wellness calls can satisfy interactive communication
            requirements. Individual CPT code definitions live in the{" "}
            <Link href="/resources/glossary" className="text-[#1a2642] underline">
              glossary
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mt-8">
            Detailed program pages are added on an ongoing basis.
          </p>
        </main>
        <PublicFooter />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Build check**

Run: `npm run build`
Expected: `/resources/billing-guide` in route list.

- [ ] **Step 3: Commit**

```bash
git add app/resources/billing-guide/page.tsx
git commit -m "Scaffold /resources/billing-guide/ index with program overview

Phase 0 crawl-path scaffold. Links to existing pillar pages + glossary.
Program-specific deep-dive content lands in pillar phases.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 12: Surface `/resources/` in footer navigation

**Files:**
- Modify: `components/shared/public-footer.tsx`

- [ ] **Step 1: Read current footer**

Run: `cat components/shared/public-footer.tsx`
Note the current structure of the "Company" / "Resources" column.

- [ ] **Step 2: Add resources links**

In `components/shared/public-footer.tsx`, find the "Company" column (which currently contains "Blog", "How It Works", "FAQ", "Case Studies" links) and add three new `<li>` entries below the existing ones, immediately before the closing `</ul>`:

```tsx
              <li><Link href="/resources/glossary" className="text-gray-600 hover:text-[#1a2642]">Glossary</Link></li>
              <li><Link href="/resources/billing-guide" className="text-gray-600 hover:text-[#1a2642]">Billing Guide</Link></li>
              <li><Link href="/resources/compare" className="text-gray-600 hover:text-[#1a2642]">Comparisons</Link></li>
```

- [ ] **Step 3: Build check**

Run: `npm run build`
Expected: success.

- [ ] **Step 4: Visual check**

Run: `npm run dev` in one terminal.
Open http://localhost:3000 and scroll to the footer. Verify the three new links appear in the Company column and each navigates to the correct page.

Stop dev server.

- [ ] **Step 5: Commit**

```bash
git add components/shared/public-footer.tsx
git commit -m "Surface /resources/ hub links in footer

Adds Glossary, Billing Guide, Comparisons links to the Company column
so crawlers discover the new /resources/ namespace ahead of Phase 1.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 13: Rewrite `public/llms.txt` to directory format

**Files:**
- Modify: `public/llms.txt`

- [ ] **Step 1: Replace entire file contents**

Replace `public/llms.txt` with:

```
# Positive Check

> Positive Check (legal entity: Positive Check LLC) is an AI-powered patient wellness call platform for healthcare providers running CMS-reimbursed care programs: Remote Patient Monitoring (RPM), Chronic Care Management (CCM), and Transitional Care Management (TCM). The platform's AI companion, Lola, conducts daily wellness calls covering medication adherence, sleep quality, mood, mobility, appetite, cognitive health, and symptom tracking, and surfaces actionable insights to care teams through a secure HIPAA-compliant dashboard.

## Care program solutions

- [Remote Patient Monitoring](https://positivecheck.com/solutions/remote-patient-monitoring): AI wellness calls that satisfy CMS interactive communication requirements for RPM programs.
- [Chronic Care Management](https://positivecheck.com/solutions/chronic-care-management): Daily patient touchpoints supporting CCM documentation and care plan follow-up.
- [Transitional Care Management](https://positivecheck.com/solutions/post-discharge-follow-up): Post-discharge patient outreach within 24-48 hours to reduce 30-day readmissions.

## Billing & CMS programs

- [Billing guide overview](https://positivecheck.com/resources/billing-guide): CMS care programs, CPT codes, and documentation requirements.

## Glossary

- [Healthcare billing & care program glossary](https://positivecheck.com/resources/glossary): Plain-English definitions of CMS billing codes, care programs, and compliance terms.

## Comparisons

- [Care outreach approach comparisons](https://positivecheck.com/resources/compare): Category-level comparisons of AI-powered wellness calls versus alternatives.

## Case studies

- [Scaling patient engagement](https://positivecheck.com/case-studies/scaling-patient-engagement): How Positive Check helps provider teams scale outreach without adding headcount.

## Platform & product

- [How it works](https://positivecheck.com/how-it-works): Call cadence, prompt engineering, patient engagement, alerts.
- [Platform overview](https://positivecheck.com/platform): Admin Console, dashboards, role-based access.
- [ROI calculator](https://positivecheck.com/roi-calculator): Estimate reimbursement opportunity across RPM / CCM / TCM programs.

## Company

- [About Positive Check](https://positivecheck.com/about)
- [Frequently asked questions](https://positivecheck.com/faq)
- [Contact](https://positivecheck.com/contact)

## Blog

- [AI companions for senior loneliness and caregiver stress](https://positivecheck.com/blog/ai-companions-for-senior-loneliness-and-caregiver-stress)
- [Senior sleep health, fall prevention, and wellness monitoring](https://positivecheck.com/blog/senior-sleep-health-fall-prevention-wellness-monitoring)
- [Importance of checking in on seniors in care communities](https://positivecheck.com/blog/importance-of-checking-in-care-communities)
- [Maintaining social connections](https://positivecheck.com/blog/maintaining-social-connections)
- [Senior phone check-ins: mental health and safety benefits](https://positivecheck.com/blog/senior-phone-check-ins-mental-health-safety-benefits)
- [The role of technology in senior care](https://positivecheck.com/blog/role-of-technology-in-senior-care)

## How to cite Positive Check

- Company: Positive Check LLC
- Short name: Positive Check
- Website: https://positivecheck.com
- Primary contact: https://positivecheck.com/contact
- Email: info@positivecheck.com
- Phone: 858-522-9524
```

- [ ] **Step 2: Verify served over HTTP**

Run: `npm run dev` in one terminal.
Run: `curl -s http://localhost:3000/llms.txt | head -5`
Expected: starts with `# Positive Check` and `> Positive Check (legal entity: Positive Check LLC)...`

Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add public/llms.txt
git commit -m "Rewrite llms.txt to directory format

Restructures as a link directory pointing at the pillar and shoulder
architecture. 'How to cite' section names 'Positive Check LLC' as the
legal entity for AI answer engines. Expands from 60 lines of narrative
to structured navigation matching the Phase 0 site map.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 14: Final verification

**Files:** none (verification only)

- [ ] **Step 1: Full test run**

Run: `npm test`
Expected: all tests pass (existing auth-context + 8 new schema tests).

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected:
- Successful compilation
- `/sitemap.xml` appears in route list as a static route (`● /sitemap.xml`)
- `/resources/glossary`, `/resources/compare`, `/resources/billing-guide` all prerendered as static (`○`)

- [ ] **Step 3: Runtime smoke test — sitemap and llms.txt**

Run: `npm run dev` in one terminal.

Run these one at a time, checking output:

```bash
curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"
# Expected: 24 (21 original + 3 new /resources/* entries)

curl -s http://localhost:3000/sitemap.xml | grep -c "<image:image>"
# Expected: at least 10 (entries that declared images)

curl -s http://localhost:3000/robots.txt | grep Sitemap
# Expected: only one line: "Sitemap: https://positivecheck.com/sitemap.xml"

curl -s http://localhost:3000/llms.txt | grep "Positive Check LLC"
# Expected: two occurrences (intro + "How to cite")
```

- [ ] **Step 4: Runtime smoke test — schema on layout**

Run: `curl -s http://localhost:3000 | grep -o '"legalName":"[^"]*"' | sort -u`
Expected: `"legalName":"Positive Check LLC"` (present in the rendered Organization JSON-LD).

- [ ] **Step 5: Runtime smoke test — each new page renders**

```bash
for p in /resources/glossary /resources/compare /resources/billing-guide; do
  echo "=== $p ==="
  curl -sI "http://localhost:3000$p" | head -1
done
```
Expected: each returns `HTTP/1.1 200 OK`.

Stop dev server.

- [ ] **Step 6: Rich Results schema validation (manual, record findings)**

Open https://search.google.com/test/rich-results in a browser.
For each of these URLs (use the local dev server with a tunnel such as `ngrok http 3000`, OR queue these as post-deploy verification tasks):
- `https://positivecheck.com` (after deploy) — expect Organization + WebSite detected
- `https://positivecheck.com/solutions/remote-patient-monitoring` (existing, unchanged) — expect Service + BreadcrumbList + FAQPage
- `https://positivecheck.com/resources/glossary` (new) — expect BreadcrumbList

Record any validation errors. If errors exist in the new code (not pre-existing), fix before considering Phase 0 complete. If errors exist in pre-existing code that we didn't touch, log them for a later cleanup pass but don't block Phase 0.

- [ ] **Step 7: Diff summary + Phase 0 completion commit marker**

Run: `git log --oneline main..HEAD`
Expected: 13 commits (Tasks 1–13) visible.

Create a Phase 0 completion tag (lightweight — not a release):

```bash
git tag seo-phase-0-complete -m "Phase 0 foundation: schema helpers, dynamic sitemap, /resources/ scaffolding, llms.txt rewrite"
```

Do NOT push. User controls push timing.

---

## Self-review notes

**Spec coverage check (against `docs/superpowers/specs/2026-04-19-seo-geo-pillar-cluster-design.md` Section 9 Phase 0):**
- ✅ `lib/schema.ts` typed helpers — Tasks 1–5
- ✅ Migrate existing inline schemas — Task 6 (migrates `components/structured-data.tsx`); other 27 files keep inline schemas and migrate naturally during their pillar phases (bounded-scope decision)
- ✅ `app/sitemap.ts` dynamic replacement — Task 8
- ✅ Scaffold `/resources/{glossary,compare,billing-guide}/` — Tasks 9–11
- ✅ Update Organization schema with `legalName: "Positive Check LLC"` and expanded `sameAs` — Task 2 + Task 6 + Task 7
- ✅ llms.txt restructure — Task 13
- ✅ Footer linking (implicit prerequisite) — Task 12
- ✅ Verification — Task 14

**Type consistency check:**
- `buildBreadcrumbSchema` signature matches existing `generateBreadcrumbSchema` callers (same input shape `{ name, url }[]`) — alias exported for backward compat.
- `buildFAQSchema` takes `{ question, answer }[]` — NOT the raw schema.org shape. This differs from the existing `faqSchema` constant (which is hand-authored in the schema.org shape). That's intentional: builders accept ergonomic input, constants stay as-is for migration safety.
- `BreadcrumbItem.url` is an absolute URL in both the builder contract and all callers in the plan.

**Placeholder scan:** No TBDs, no "add appropriate error handling", every code block is complete.
