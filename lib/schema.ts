// lib/schema.ts
// Pure-function builders for schema.org JSON-LD. All builders return plain objects;
// wrap with <StructuredData data={...} /> to render.

export const SITE_URL = "https://positivecheck.com";
export const LOGO_URL = `${SITE_URL}/images/positive-logo-dark-blue.png`;
export const ORG_NAME_SHORT = "Positive Check";
export const ORG_NAME_LEGAL = "Positive Check LLC";
export const ORG_PHONE = "+1-858-522-9524";
export const ORG_EMAIL = "info@positivecheck.com";

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

// Internal helper — the Organization shape used when referenced from another schema
// (publisher, provider, author). Not exported; use buildOrganizationSchema for the
// full top-level Organization node.
function buildPublisherOrgNode() {
  return {
    "@type": "Organization" as const,
    name: ORG_NAME_SHORT,
    legalName: ORG_NAME_LEGAL,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject" as const,
      url: LOGO_URL,
    },
  };
}

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
      telephone: ORG_PHONE,
      contactType: "Customer Service",
      email: ORG_EMAIL,
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
    publisher: buildPublisherOrgNode(),
  } as const;
}

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
