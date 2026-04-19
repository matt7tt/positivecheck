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
              <strong>CMS billing codes</strong> &mdash; CPT codes used for Remote Patient
              Monitoring (RPM), Chronic Care Management (CCM), and Transitional Care
              Management (TCM) programs.
            </li>
            <li>
              <strong>Care program terms</strong> &mdash; Definitions of RPM, CCM, TCM,
              Principal Care Management, and Annual Wellness Visit.
            </li>
            <li>
              <strong>Compliance terms</strong> &mdash; HIPAA, Business Associate Agreement
              (BAA), ePHI, HITECH Act.
            </li>
            <li>
              <strong>Clinical &amp; operational terms</strong> &mdash; 30-day readmission,
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
