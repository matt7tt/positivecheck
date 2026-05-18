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
  { name: "Home", url: "https://www.positivecheck.com" },
  { name: "Resources", url: "https://www.positivecheck.com/resources" },
  { name: "Compare", url: "https://www.positivecheck.com/resources/compare" },
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
            Available comparisons
          </h2>
          <div className="space-y-4">
            <Link
              href="/resources/compare/rpm-vs-ccm-medicare-billing"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Medicare programs</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">RPM vs. CCM Medicare Billing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Side-by-side comparison of Remote Patient Monitoring and Chronic Care
                Management: eligibility, CPT codes, time thresholds, interactive
                communication, and combined-billing rules.
              </p>
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-[#1a2642] mt-12 mb-4">
            Other approach comparisons (program-level)
          </h2>
          <div className="space-y-4">
            <Link
              href="/solutions/remote-patient-monitoring/vs-device-only-monitoring"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Remote Patient Monitoring</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI-Powered RPM vs. Device-Only Monitoring</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Why device-only programs leave Medicare revenue on the table and what
                the interactive engagement layer adds clinically and financially.
              </p>
            </Link>
            <Link
              href="/solutions/chronic-care-management/vs-in-house-care-coordinators"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Chronic Care Management</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI-Powered CCM vs. In-House Care Coordinators</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                How AI-powered CCM engagement compares to in-house care-coordinator
                staffing on cost, scale, and CMS time-tracking compliance.
              </p>
            </Link>
            <Link
              href="/solutions/post-discharge-follow-up/vs-manual-discharge-outreach"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Transitional Care Management</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Calls vs. Manual Discharge Outreach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Why automated TCM outreach reliably hits the 2-business-day contact rule
                that manual workflows often miss.
              </p>
            </Link>
          </div>
          <p className="text-gray-700 leading-relaxed mt-12">
            For a walk-through of how Positive Check compares to your current approach,{" "}
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
