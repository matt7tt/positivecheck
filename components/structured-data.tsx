export {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildServiceSchema,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildDefinedTermSchema,
  buildCPTCodeSchema,
  SITE_URL,
  LOGO_URL,
  ORG_NAME_SHORT,
  ORG_NAME_LEGAL,
  ORG_PHONE,
  ORG_EMAIL,
} from "@/lib/schema";

import {
  buildOrganizationSchema,
  buildBreadcrumbSchema as buildBreadcrumbSchemaImpl,
  ORG_NAME_SHORT,
} from "@/lib/schema";

interface StructuredDataProps {
  data: Record<string, any> | Array<Record<string, any>>;
  id?: string;
}

export function StructuredData({ data, id }: StructuredDataProps) {
  const first = Array.isArray(data) ? data[0] : data;
  const schemaId = id || `structured-data-${first?.["@type"] || "default"}`;
  return (
    <script
      id={schemaId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Backward-compatible constant exports — some pages import these directly.
export const organizationSchema = buildOrganizationSchema();

// FAQ schema matches the 6 items rendered on the homepage and /faq page.
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

// Backward-compatible function export — existing pages call generateBreadcrumbSchema.
export const generateBreadcrumbSchema = buildBreadcrumbSchemaImpl;
