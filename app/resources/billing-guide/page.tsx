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
              &mdash; CPT 99453, 99454, 99457, 99458
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
