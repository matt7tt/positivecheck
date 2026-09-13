// app/resources/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/shared/public-header";
import { PublicFooter } from "@/components/shared/public-footer";
import { StructuredData, buildBreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Resources for Healthcare Providers | Positive Check",
  description:
    "Provider resources from Positive Check: integration and implementation planning, CMS billing guides, calculators, care program glossary, and outreach comparisons.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources for Healthcare Providers | Positive Check",
    description:
      "Billing guides, glossary, and outreach approach comparisons for healthcare providers.",
    url: "/resources",
    siteName: "Positive Check",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources for Healthcare Providers | Positive Check",
    description:
      "Billing guides, glossary, and outreach approach comparisons for healthcare providers.",
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", url: "https://www.positivecheck.com" },
  { name: "Resources", url: "https://www.positivecheck.com/resources" },
]);

const sections = [
  {
    href: "/solutions/post-discharge-follow-up/post-discharge-contact-timing",
    title: "TCM Contact Timing & Attempt Checklist",
    description:
      "Work through two-business-day deadlines, unsuccessful contact attempts, and documentation handoffs for post-discharge follow-up.",
  },
  {
    href: "/blog/ccm-billing-2026-cpt-codes-guide",
    title: "2026 CCM Billing & CPT Code Guide",
    description:
      "Compare non-complex and complex CCM codes, review monthly time requirements, and prepare documentation for billing review.",
  },
  {
    href: "/resources/compare/tcm-and-ccm-combined-month-billing",
    title: "TCM and CCM in the Same Month",
    description:
      "Understand overlapping service periods and keep TCM and CCM activities separate without double-counting time.",
  },
  {
    href: "/resources/implementation-guide",
    title: "Integration & Implementation Guide",
    description:
      "Plan patient imports, API access and webhooks, prepare your care team, and define a focused outreach pilot with Positive Check.",
  },
  {
    href: "/resources/billing-guide",
    title: "CMS Care Program Billing Guide",
    description:
      "Overview of Remote Patient Monitoring (RPM), Chronic Care Management (CCM), and Transitional Care Management (TCM) programs and the CPT codes that support them.",
  },
  {
    href: "/resources/rpm-cpt-calculator",
    title: "2026 RPM CPT Calculator",
    description:
      "Estimate monthly Medicare Remote Patient Monitoring reimbursement across CPT 99453, 99454, 99445, 99457, 99458, and 99470 based on your patient mix, including the two new 2026 codes.",
  },
  {
    href: "/resources/glossary",
    title: "Healthcare Billing & Care Program Glossary",
    description:
      "Plain-English definitions of CMS billing codes, care programs, and compliance terms referenced across our provider content.",
  },
  {
    href: "/resources/compare",
    title: "Care Outreach Approach Comparisons",
    description:
      "Category-level comparisons of how healthcare providers can scale patient outreach — AI-powered wellness calls, in-house call centers, nurse-led coordination, and more.",
  },
];

export default function ResourcesIndexPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="resources-breadcrumb" />
      <StructuredData
        id="resources-collection"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Positive Check Resources for Healthcare Providers",
          url: "https://www.positivecheck.com/resources",
          description:
            "CMS billing guides, calculators, comparisons, and healthcare compliance references for provider teams.",
          hasPart: sections.map((section) => ({
            "@type": "CreativeWork",
            name: section.title,
            url: `https://www.positivecheck.com${section.href}`,
            description: section.description,
          })),
        }}
      />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="resources" />
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2642] mb-6 leading-tight">
            Resources for Healthcare Providers
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Practical references for clinical and operational teams running CMS-reimbursed
            care programs. Explore implementation planning alongside billing and compliance
            references grounded in primary CMS and HHS sources.
          </p>
          <div className="space-y-10">
            {sections.map((s) => (
              <article key={s.href}>
                <h2 className="text-2xl font-bold text-[#1a2642] mb-2">
                  <Link href={s.href} className="hover:underline">
                    {s.title}
                  </Link>
                </h2>
                <p className="text-gray-700 leading-relaxed">{s.description}</p>
              </article>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-12">
            Questions about a topic you don&apos;t see here?{" "}
            <Link href="/contact" className="text-[#1a2642] underline">
              Contact our team
            </Link>
            .
          </p>
        </main>
        <PublicFooter />
      </div>
    </>
  );
}
