import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildCPTCodeSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'CPT 99439: Definition and CCM Add-On Billing | Positive Check Glossary',
  description:
    'CPT 99439 reimburses each additional 20 minutes of non-complex Chronic Care Management clinical staff time beyond CPT 99490. Definition, billable up to twice per patient per month, and how it stacks with 99490.',
  alternates: { canonical: '/resources/glossary/cpt-99439' },
  openGraph: {
    title: 'CPT 99439: Definition and CCM Add-On Billing',
    description:
      'Medicare billing code for each additional 20 minutes of non-complex CCM clinical staff time.',
    url: '/resources/glossary/cpt-99439',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'CPT 99439: Definition and CCM Add-On Billing',
    description: 'Medicare add-on code for each additional 20 minutes of non-complex CCM.',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'Resources', url: 'https://positivecheck.com/resources' },
  { name: 'Glossary', url: 'https://positivecheck.com/resources/glossary' },
  { name: 'CPT 99439', url: 'https://positivecheck.com/resources/glossary/cpt-99439' },
])

const termSchema = buildCPTCodeSchema({
  code: '99439',
  name: 'Chronic care management services, each additional 20 minutes of clinical staff time directed by a physician or other qualified health care professional, per calendar month (List separately in addition to code for primary procedure)',
  description:
    'CPT 99439 is the Medicare billing code for each additional 20 minutes of clinical staff time spent on non-complex Chronic Care Management beyond the first 20 minutes covered by CPT 99490, reimbursed at approximately $48 and billable up to twice per patient per calendar month.',
  category: 'Chronic Care Management',
})

export default function CPT99439GlossaryPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="cpt-99439-breadcrumb" />
      <StructuredData data={termSchema} id="cpt-99439-term" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
                Glossary
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                CPT 99439
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                CPT 99439 is the Medicare billing code for each additional 20 minutes of clinical
                staff time spent on non-complex Chronic Care Management beyond the first 20 minutes
                covered by CPT 99490, reimbursed at approximately $48 and billable up to twice per
                patient per calendar month.
              </p>
            </div>
          </section>

          <section className="px-6 py-12 bg-white">
            <div className="max-w-3xl mx-auto">

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definition</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99439 is the Medicare billing code for each additional 20 minutes of clinical
                staff time spent on non-complex Chronic Care Management beyond the first 20 minutes
                covered by CPT 99490, reimbursed at approximately $48 and billable up to twice per
                patient per calendar month. It is an add-on code that ONLY applies when CPT 99490 is
                also billed for the same patient in the same calendar month.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99439 can be billed up to twice per calendar month {'\u2014'} covering minutes
                21{'\u2013'}40 and 41{'\u2013'}60 of cumulative clinical staff time. Stacking 99490
                with two units of 99439 brings total monthly non-complex CCM revenue to roughly $162
                per patient. The 2026 Medicare national average reimbursement is approximately $48
                per 20-minute block; rates are updated annually and providers should verify current
                figures on CMS.gov before projecting program revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Regulatory basis</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CPT 99439 was established by CMS under the Medicare Physician Fee Schedule as an
                add-on to the base non-complex CCM code 99490. It applies only as an add-on to 99490
                {'\u2014'} the complex CCM track (99487) has its own distinct add-on code, 99489, and
                the two tracks cannot be combined. Each additional 20-minute block billed under 99439
                must meet the same documentation standards as the base 99490 service, including
                time-tracking entries and care plan updates. The authoritative guidance is the{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  CMS MLN Chronic Care Management Services booklet
                </a>
                , which details documentation requirements, consent standards, and time-tracking
                rules.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Annual updates to CCM billing policy are published in the Medicare Physician Fee
                Schedule final rule. Providers should confirm the current unit limit and reimbursement
                rate for 99439 each plan year before projecting program revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who uses it and when it applies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  Same provider types as 99490: physicians, NPPs (NPs, PAs, CNSs, CNMs), and
                  clinical staff under general supervision performing CCM activities
                </li>
                <li>
                  Patients with active non-complex CCM enrollment who have already exceeded the
                  99490 20-minute threshold in a given calendar month
                </li>
                <li>
                  Billable up to twice per calendar month {'\u2014'} one unit for minutes 21{'\u2013'}40
                  and a second unit for minutes 41{'\u2013'}60 of documented clinical staff time
                </li>
                <li>
                  Requires CPT 99490 to also be billed for the same patient in the same calendar
                  month; 99439 cannot stand alone
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Related terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <Link
                    href="/resources/glossary/cpt-99490"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99490
                  </Link>{' '}
                  {'\u2014'} the base non-complex CCM code that 99439 adds onto
                </li>
                <li>
                  <Link
                    href="/resources/glossary/cpt-99487"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    CPT 99487
                  </Link>{' '}
                  {'\u2014'} alternative complex CCM track, not combinable with 99490/99439
                </li>
                <li>
                  <Link
                    href="/resources/glossary/chronic-care-management"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Chronic Care Management
                  </Link>{' '}
                  {'\u2014'} the broader care model CPT 99439 helps operationalize
                </li>
                <li>
                  <Link
                    href="/resources/glossary/care-coordination"
                    className="text-purple-700 underline hover:text-purple-900"
                  >
                    Care coordination
                  </Link>{' '}
                  {'\u2014'} the function CCM supports through structured patient outreach and
                  care-plan management
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Positive Check relates</h2>
              <p className="text-gray-700 leading-relaxed">
                Positive Check{'\u2019'}s daily wellness calls and structured summaries help clinical
                staff efficiently exceed the 20-minute threshold each month, unlocking 99439 billings
                for engaged populations. See the{' '}
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
