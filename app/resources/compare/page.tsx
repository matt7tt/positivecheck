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
