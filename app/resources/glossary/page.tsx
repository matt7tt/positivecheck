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
          <h2 className="text-2xl font-bold text-[#1a2642] mt-12 mb-4">
            Current entries
          </h2>
          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <Link
              href="/resources/glossary/cpt-99495"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99495</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare TCM code for moderate-complexity post-discharge care.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99496"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99496</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare TCM code for high-complexity post-discharge care.
              </p>
            </Link>
            <Link
              href="/resources/glossary/transitional-care-management"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Transitional Care Management (TCM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CMS-reimbursed care model for post-discharge transitions.
              </p>
            </Link>
            <Link
              href="/resources/glossary/30-day-readmission"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Clinical outcome</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">30-day readmission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unplanned inpatient admission within 30 days of prior discharge; HRRP context.
              </p>
            </Link>
            <Link
              href="/resources/glossary/care-coordination"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Clinical operations</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Care coordination</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deliberate organization of patient care activities across participants.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99453"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99453</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare RPM one-time setup and patient education.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99454"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99454</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare RPM device supply with daily recordings, each 30 days.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99457"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99457</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                First 20 minutes of RPM interactive communication per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99458"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99458</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each additional 20 minutes of RPM interactive communication per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/remote-patient-monitoring"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Remote Patient Monitoring (RPM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare-reimbursed care model combining device data transmission with monthly interactive communication.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99490"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99490</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                First 20 minutes of non-complex Chronic Care Management clinical staff time per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99439"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99439</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each additional 20 minutes of non-complex CCM (up to 2x per patient per month).
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99487"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99487</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                First 60 minutes of complex Chronic Care Management per month.
              </p>
            </Link>
            <Link
              href="/resources/glossary/cpt-99489"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS billing code</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">CPT 99489</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each additional 30 minutes of complex CCM beyond the 99487 threshold.
              </p>
            </Link>
            <Link
              href="/resources/glossary/chronic-care-management"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Chronic Care Management (CCM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare-reimbursed care coordination program for patients with two or more chronic conditions.
              </p>
            </Link>
            <Link
              href="/resources/glossary/hipaa-compliance"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Compliance</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">HIPAA Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adherence to HIPAA rules governing how covered entities and business associates handle Protected Health Information.
              </p>
            </Link>
            <Link
              href="/resources/glossary/business-associate-agreement"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Compliance</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Associate Agreement (BAA)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                HIPAA-required contract between covered entities and vendors handling PHI on their behalf.
              </p>
            </Link>
            <Link
              href="/resources/glossary/ephi"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Compliance</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">ePHI</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Electronic Protected Health Information {'\u2014'} the subset of PHI covered by the HIPAA Security Rule.
              </p>
            </Link>
            <Link
              href="/resources/glossary/hitech-act"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Compliance</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">HITECH Act</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                2009 law that expanded HIPAA enforcement, created breach notification, and funded EHR adoption.
              </p>
            </Link>
            <Link
              href="/resources/glossary/principal-care-management"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Principal Care Management (PCM)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare-reimbursed care management for a single high-risk chronic condition (CPT 99424{'\u2013'}99427).
              </p>
            </Link>
            <Link
              href="/resources/glossary/annual-wellness-visit"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Care program</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Annual Wellness Visit (AWV)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Medicare-covered yearly preventive visit establishing a personalized prevention plan (HCPCS G0438/G0439).
              </p>
            </Link>
            <Link
              href="/resources/glossary/interactive-communication-requirement"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">CMS requirement</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Interactive communication requirement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CMS rule defining real-time two-way clinical engagement for RPM and related code billing.
              </p>
            </Link>
            <Link
              href="/resources/glossary/patient-engagement"
              className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors md:col-span-2"
            >
              <p className="text-sm text-purple-700 uppercase tracking-wider mb-1">Clinical operations</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Patient engagement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Active, structured involvement of patients in their own care {'\u2014'} core to CCM, RPM, TCM, and PCM outcomes.
              </p>
            </Link>
          </div>
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
