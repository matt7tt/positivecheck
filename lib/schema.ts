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
