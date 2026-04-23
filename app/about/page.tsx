import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import {
  StructuredData,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'About Positive Check: AI Wellness Calls for CMS Care Programs',
  description:
    'Positive Check LLC operates an AI-powered patient wellness call platform for healthcare providers running Remote Patient Monitoring, Chronic Care Management, and Transitional Care Management programs. HIPAA-compliant, BAA-ready, CMS-aligned documentation.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Positive Check: AI Wellness Calls for CMS Care Programs',
    description:
      'Positive Check LLC: AI-powered patient wellness calls for CMS RPM, CCM, and TCM programs. HIPAA-compliant, BAA-ready, CMS-aligned.',
    url: '/about',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Positive Check',
    description: 'AI-powered patient wellness calls for CMS care programs.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData
        id="about-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://positivecheck.com' },
          { name: 'About', url: 'https://positivecheck.com/about' },
        ])}
      />
      <StructuredData
        id="about-organization"
        data={buildOrganizationSchema()}
      />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="about" />

        {/* Hero */}
        <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">About</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              About Positive Check
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Positive Check LLC operates an AI-powered patient wellness call platform for healthcare
              providers running Medicare-reimbursed care programs {'\u2014'} Remote Patient Monitoring,
              Chronic Care Management, and Transitional Care Management.
            </p>
          </div>
        </section>

        <main>
          {/* Our Mission */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <Image
                  src="/images/family-gathering-dinner.png"
                  alt="Happy family gathering around dinner table with elderly woman laughing"
                  width={1200}
                  height={320}
                  className="rounded-lg shadow-xl w-full h-80 object-cover object-top"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To help healthcare providers improve outcomes through consistent, scalable patient
                engagement. Positive Check enables care teams to monitor wellness at scale, identify
                meaningful changes earlier, and reduce avoidable emergency visits and readmissions,
                all without increasing staff workload.
              </p>
            </div>
          </section>

          {/* Who We Serve */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who we serve</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Positive Check partners with physician practices, accountable care organizations
                (ACOs), health systems, and care management teams running CMS-reimbursed programs.
                Our core programs include{' '}
                <Link
                  href="/solutions/remote-patient-monitoring"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Remote Patient Monitoring
                </Link>
                ,{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management
                </Link>
                , and{' '}
                <Link
                  href="/solutions/post-discharge-follow-up"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Transitional Care Management
                </Link>
                . We serve U.S.-based providers subject to HIPAA and CMS billing rules.
              </p>
            </div>
          </section>

          {/* How We Operate (Compliance) */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How we operate</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Positive Check operates as a HIPAA-compliant business associate for every provider
                engagement. Before any Protected Health Information (PHI) is exchanged, we execute
                a signed{' '}
                <Link
                  href="/resources/glossary/business-associate-agreement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Business Associate Agreement
                </Link>
                . The platform implements the administrative, physical, and technical safeguards
                required by the HIPAA Security Rule, with particular attention to how{' '}
                <Link
                  href="/resources/glossary/ephi"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  ePHI
                </Link>{' '}
                is transmitted, stored, and accessed.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>Encryption in transit (TLS) and at rest for all PHI</li>
                <li>Role-based access with audit logging for every PHI interaction</li>
                <li>Minimum-necessary data handling: we capture only what the call workflow requires</li>
                <li>
                  Breach notification workflow aligned to the{' '}
                  <Link
                    href="/resources/glossary/hitech-act"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    HITECH Act
                  </Link>{' '}
                  60-day timeline
                </li>
                <li>Signed subcontractor BAAs with any third party that touches PHI on our behalf</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-6">
                For the full clinical and compliance framework, see our{' '}
                <Link
                  href="/about/clinical-standards"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  clinical standards
                </Link>{' '}
                page.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What we do</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center mb-10">
                Positive Check LLC delivers structured AI-powered wellness calls that map to CMS
                care management program requirements and generate documentation aligned to billing
                rules.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Remote Patient Monitoring
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Daily wellness calls supporting CPT 99457/99458 interactive-communication
                    billing for RPM programs.
                  </p>
                  <Link
                    href="/solutions/remote-patient-monitoring"
                    className="text-purple-700 underline hover:text-purple-900 text-sm font-medium"
                  >
                    Learn about RPM {'\u2192'}
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Chronic Care Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Structured touchpoints supporting CPT 99490/99439/99487/99489 non-complex and
                    complex CCM billing.
                  </p>
                  <Link
                    href="/solutions/chronic-care-management"
                    className="text-purple-700 underline hover:text-purple-900 text-sm font-medium"
                  >
                    Learn about CCM {'\u2192'}
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Transitional Care Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Post-discharge contact within the 2-business-day window supporting CPT
                    99495/99496.
                  </p>
                  <Link
                    href="/solutions/post-discharge-follow-up"
                    className="text-purple-700 underline hover:text-purple-900 text-sm font-medium"
                  >
                    Learn about TCM {'\u2192'}
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-center mt-10">
                For a full reference on CMS care program billing, see our{' '}
                <Link
                  href="/resources/billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS Care Program Billing Guide
                </Link>
                .
              </p>
            </div>
          </section>

          {/* How It Works in Practice */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How it works in practice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Provider partners integrate Positive Check with their patient list for an enrolled
                population {'\u2014'} typically patients in one or more of the CMS care management
                programs above. The platform runs structured daily calls, captures patient responses,
                surfaces flagged concerns to clinical staff in real time, and generates documentation
                that maps to CMS billing requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For a detailed look at how this works at scale, see our{' '}
                <Link
                  href="/case-studies/scaling-patient-engagement"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  case study on scaling patient engagement
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Our Standards */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our standards</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center mb-10">
                Positive Check LLC holds itself to editorial and clinical standards that reflect
                the trust healthcare providers place in the platform.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Category-level comparisons
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We never name competitor platforms. Our comparison pages focus on approaches
                    (AI engagement vs. in-house staffing, interactive calls vs. device-only
                    monitoring) rather than vendors.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Primary-source citations
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every regulatory claim on this site is cited inline to the CMS Medicare
                    Physician Fee Schedule, MLN program booklets, or HHS HIPAA guidance.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    In-house content
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All content is authored by the Positive Check team. We don{'\u2019'}t publish
                    guest posts, commissioned reviewer pieces, or unverified third-party content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Legal entity + area served */}
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center text-sm text-gray-500 space-y-1">
              <p>Positive Check LLC {'\u2014'} United States</p>
              <p>
                Legal entity: Positive Check LLC. Area served: United States. Subject to HIPAA and
                CMS billing rules. For compliance inquiries, see our{' '}
                <Link
                  href="/about/clinical-standards"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  clinical standards
                </Link>{' '}
                or{' '}
                <Link
                  href="/contact"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Ready to scale your CMS care program with structured AI-powered engagement? Request
                a demo or see how it works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  <Link href="/contact">REQUEST DEMO</Link>
                </Button>
                <Button asChild className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  <Link href="/how-it-works">HOW IT WORKS</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
