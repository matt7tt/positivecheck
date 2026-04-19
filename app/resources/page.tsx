// app/resources/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/shared/public-header";
import { PublicFooter } from "@/components/shared/public-footer";
import { StructuredData, buildBreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Resources for Healthcare Providers | Positive Check",
  description:
    "Provider-facing resources from Positive Check: CMS billing guide, glossary of care program and compliance terms, and category-level comparisons of patient outreach approaches.",
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
  { name: "Home", url: "https://positivecheck.com" },
  { name: "Resources", url: "https://positivecheck.com/resources" },
]);

const sections = [
  {
    href: "/resources/billing-guide",
    title: "CMS Care Program Billing Guide",
    description:
      "Overview of Remote Patient Monitoring (RPM), Chronic Care Management (CCM), and Transitional Care Management (TCM) programs and the CPT codes that support them.",
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
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a2642] mb-6 leading-tight">
            Resources for Healthcare Providers
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Practical references for clinical and operational teams running CMS-reimbursed
            care programs. Every entry is grounded in primary CMS and HHS sources.
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
