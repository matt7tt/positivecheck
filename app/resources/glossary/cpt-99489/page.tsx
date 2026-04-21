import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99489: Definition and Complex CCM Add-On Billing | Positive Check Glossary',
  description:
    'CPT 99489 reimburses each additional 30 minutes of complex Chronic Care Management beyond CPT 99487. Definition, how it stacks with 99487, and per-block reimbursement.',
  alternates: { canonical: '/resources/glossary/cpt-99489' },
  openGraph: {
    title: 'CPT 99489: Definition and Complex CCM Add-On Billing',
    description: 'Medicare add-on code for each additional 30 minutes of complex CCM beyond CPT 99487.',
    url: '/resources/glossary/cpt-99489',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99489: Definition and Complex CCM Add-On Billing',
    description: 'Medicare add-on code for each additional 30 minutes of complex CCM.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99489', url: 'https://positivecheck.com/resources/glossary/cpt-99489' },
])

const termSchema = buildCPTCodeSchema({
  code: '99489',
  name: 'Complex chronic care management services, each additional 30 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month (List separately in addition to code for primary procedure)',
  description:
    'CPT 99489 is the Medicare billing code for each additional 30 minutes of clinical staff time spent on complex Chronic Care Management beyond the first 60 minutes covered by CPT 99487, reimbursed at approximately $72 per 30-minute block.',
  category: 'Chronic Care Management',
})

export default function CPT99489GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99489-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99489-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99489
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99489 is the Medicare billing code for each additional 30 minutes of clinical
                staff time spent on complex Chronic Care Management beyond the first 60 minutes
                covered by CPT 99487, reimbursed at approximately $72 per 30-minute block.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99489 is the Medicare billing code for each additional 30 minutes of clinical
                staff time spent on complex Chronic Care Management beyond the first 60 minutes
                covered by CPT 99487, reimbursed at approximately $72 per 30-minute block. It is an
                add-on code that ONLY applies when CPT 99487 is also billed for the same patient in
                the same calendar month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 30-minute block is shorter than the non-complex 99439{'\u2014'}which uses
                20-minute add-on blocks. CMS designed it this way because complex-CCM coordination
                tends to scale in longer increments, reflecting the greater depth of planning and
                documentation involved at the complex level. The 2026 Medicare national average
                reimbursement is approximately $72 per 30-minute block. There is no documented
                per-month cap on 99489 units, but billings beyond two or three blocks should be
                supported by extensive documentation demonstrating the time and complexity of care.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99489 is established under the CMS Medicare Physician Fee Schedule as an add-on
                to CPT 99487. It is not combinable with the non-complex CCM codes (99490/99439){'\u2014'}
                providers must choose either the complex track (99487 + 99489) or the non-complex
                track (99490 + 99439) for a given patient in a given month. Each 30-minute block
                billed under 99489 must meet the same complexity-of-medical-decision-making standard
                as the base 99487 service. The authoritative guidance is the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN 909188 Chronic Care Management Services booklet
                </a>
                , which details documentation requirements, time-tracking rules, and the relationship
                between 99487 and its add-on 99489.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Same provider types as CPT 99487: physicians, non-physician practitioners (NPs,
                  PAs, CNSs, CNMs), and clinical staff under general supervision
                </li>
                <li>
                  Patients with active complex CCM enrollment whose monthly care management time
                  exceeds the 60-minute threshold already covered by CPT 99487
                </li>
                <li>
                  Billable for each additional 30 minutes of qualifying clinical staff time within
                  the same calendar month
                </li>
                <li>
                  Requires CPT 99487 to also be billed for the same patient in the same calendar
                  month{'\u2014'}99489 cannot stand alone
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99487"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99487
                  </Link>{' '}
                  {'\u2014'} the base complex CCM code that 99489 adds onto; must be billed in the
                  same month
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99490"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99490
                  </Link>{' '}
                  {'\u2014'} alternative non-complex CCM track, not combinable with 99487 or 99489
                </li>
                <li>
                  <Link
                    href="/resources/glossary/chronic-care-management"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Chronic Care Management
                  </Link>{' '}
                  {'\u2014'} the broader care model CPT 99489 operationalizes at the complex level
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                For high-complexity patients enrolled in complex CCM, Positive Check{'\u2019'}s daily
                wellness calls generate the documentation density that supports stacked 99489
                billings{'\u2014'}particularly for patients with frequent care-plan revisions or
                escalation events. See the{' '}
                <Link
                  href="/solutions/chronic-care-management"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  Chronic Care Management solution
                </Link>{' '}
                for the full workflow, or the{' '}
                <Link
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CPT 99490 billing guide
                </Link>{' '}
                for documentation and time-tracking requirements.
              </p>

              <div className="text-center mt-12 mb-8">
                <Link
                  href="/resources/glossary"
                  className="text-purple-700 underline hover:text-purple-900 text-sm"
                >
                  &larr; Back to Glossary
                </Link>
              </div>

            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN CCM Booklet
                </a>
                . Last updated 2026-04-20.
              </p>
            </div>
          </section>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
