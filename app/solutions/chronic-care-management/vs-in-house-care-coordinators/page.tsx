import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema, buildArticleSchema, buildFAQSchema } from '@/components/structured-data'

const PAGE_URL = 'https://www.positivecheck.com/solutions/chronic-care-management/vs-in-house-care-coordinators'
const title = 'AI-Powered CCM vs. In-House Care Coordinators'
const description = 'Compare staff-led, hybrid, purchased and custom-built CCM outreach. Evaluate clinical staffing, total cost, implementation effort and pilot evidence without assuming a universal staffing ratio.'

export const metadata: Metadata = {
  title: `${title} | Positive Check`,
  description,
  alternates: { canonical: '/solutions/chronic-care-management/vs-in-house-care-coordinators' },
  openGraph: { title, description, url: PAGE_URL, type: 'article', siteName: 'Positive Check' },
  twitter: { card: 'summary', title, description },
}

const comparisonFaqs = [
  {
    question: 'Does AI outreach replace a care coordinator?',
    answer: 'No. Automated outreach can collect routine patient responses and create summaries, but the care team remains responsible for clinical judgment, follow-up and care-plan decisions. Evaluate the work remaining after automation: reviewing calls, handling exceptions, supporting patients who prefer a person, and maintaining documentation. A useful pilot measures that workload rather than assuming a reduction in headcount.',
  },
  {
    question: 'How many patients can one coordinator manage with automation?',
    answer: 'There is no staffing ratio established by the evidence on this page. Capacity depends on patient complexity, required clinical work, contact success, alert volume and staff coverage. Measure review and follow-up time in your own cohort before expanding enrollment. Faster information gathering does not eliminate the time or personnel needed to deliver appropriate clinical care.',
  },
  {
    question: 'How should we compare the cost of staff-led and automated outreach?',
    answer: 'Compare total delivery cost for the same patient cohort and care requirements. Include loaded staff costs, software, integration, onboarding, devices where relevant, and ongoing support. In the automated option, retain the cost of clinical review and escalation. Use measured pilot results to estimate time changes; do not treat every automated call as a staff hour saved.',
  },
  {
    question: 'When is staying with our existing team a reasonable choice?',
    answer: 'Staff-led outreach is a reasonable choice when your team can reliably deliver the required care and patients benefit from established relationships. Before buying software, check whether scheduling or documentation changes address the bottleneck. Automation is worth evaluating when repetitive outreach is the constraint, but it should be judged against the current workflow on patient experience, workload and total cost.',
  },
  {
    question: 'Should we buy a platform or build our own outreach workflow?',
    answer: 'Buying a platform is worth evaluating when you want an existing outreach and review workflow. Building may suit organizations with specific requirements and dedicated engineering, security and operational support. Compare integration effort, monitoring, maintenance, escalation handling and exit options in both cases. An API alone is not proof that a system will fit your EHR or care process.',
  },
  {
    question: 'What should we prove before expanding a hybrid pilot?',
    answer: 'Set a baseline and decision criteria before launch. Track eligible patients, attempted and completed contacts, staff review minutes, escalation response times and patient opt-outs using consistent definitions. Review missed contacts and handoff failures as well as successes. Expand only after clinical and operations owners agree that the workflow is supportable, with enough staff coverage for the resulting follow-up.',
  },
]

const choices = [
  ['Keep staff-led outreach', 'Your team meets patient needs and has sufficient capacity.', 'Scheduling, documentation and workload distribution may need improvement before another tool.'],
  ['Pilot a hybrid workflow', 'Repeated outreach and information gathering consume staff time.', 'Clinical review, exception handling and patient choice still need staff coverage.'],
  ['Buy an outreach platform', 'An existing workflow fits your requirements after evaluation.', 'Confirm total cost, integration scope, data access and exit terms in writing.'],
  ['Build internally', 'You have specific requirements and a team to own the system.', 'Budget for ongoing engineering, security, monitoring and clinical workflow support.'],
]

export default function CCMVsInHouseCoordinatorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData id="ccm-compare-breadcrumb" data={buildBreadcrumbSchema([
        { name: 'Home', url: 'https://www.positivecheck.com' },
        { name: 'Chronic Care Management', url: 'https://www.positivecheck.com/solutions/chronic-care-management' },
        { name: 'vs. In-House Care Coordinators', url: PAGE_URL },
      ])} />
      <StructuredData id="ccm-compare-article" data={buildArticleSchema({
        headline: title, description, url: PAGE_URL,
        image: 'https://www.positivecheck.com/images/admin-console-dashboard-new.png',
        datePublished: '2026-04-20', dateModified: '2026-09-13',
      })} />
      <StructuredData id="ccm-compare-faq" data={buildFAQSchema(comparisonFaqs)} />
      <PublicHeader currentPage="platform" />
      <main>
        <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-widest mb-4">Workflow comparison</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl leading-relaxed">AI outreach can support a care team; it does not remove the need for clinical staff. Choose a workflow based on patient needs, retained workload and total delivery cost—not an assumed patients-per-coordinator ratio.</p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Which approach fits your practice?</h2>
          <p className="text-gray-700 mb-6">This is Positive Check’s operational comparison, not an independent vendor study. The options overlap: a hybrid clinical workflow can use either purchased or internally built software.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">Outreach choices, potential fit and tradeoffs</caption>
              <thead><tr>{['Approach', 'When to consider it', 'What to verify'].map(label => <th key={label} scope="col" className="border bg-gray-50 p-4 text-left">{label}</th>)}</tr></thead>
              <tbody>{choices.map(([approach, fit, verify]) => (
                <tr key={approach}>
                  <th scope="row" className="border p-4 text-left font-semibold">{approach}</th>
                  <td className="border p-4 text-gray-700">{fit}</td>
                  <td className="border p-4 text-gray-700">{verify}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-4">Keep clinical work separate from automated outreach</h2>
          <p className="text-gray-700 leading-relaxed">Automated call duration is not clinical staff time. CPT 99490 requires at least 20 minutes of qualifying clinical staff time per calendar month, together with other applicable requirements. Clinicians and billing professionals must determine which documented activities qualify; a call summary or a time total does not independently establish billing eligibility.</p>
          <p className="text-sm text-gray-600 mt-4">Source: <a className="underline text-purple-700" href="https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/chroniccaremanagement.pdf">CMS Chronic Care Management Services</a>. The CMS reference supports billing context, not staffing ratios, salary estimates or product outcomes.</p>
          <h2 className="text-2xl font-bold mt-12 mb-4">Compare costs using your own baseline</h2>
          <p className="text-gray-700 leading-relaxed">Record current outreach, documentation and clinical follow-up time for a defined cohort. Compare that baseline with pilot workload and an approved software quote. Include onboarding and integration costs, and distinguish one-time costs from ongoing expenses. There is no universal enrollment threshold at which automation becomes cheaper.</p>
          <p className="mt-4 text-gray-700">The <Link href="/roi-calculator" className="text-purple-700 underline">reimbursement calculator</Link> models revenue and software cost, not full practice profit. Use the <Link href="/resources/implementation-guide" className="text-purple-700 underline">implementation guide</Link> to scope the pilot and review the <Link href="/case-studies/scaling-patient-engagement" className="text-purple-700 underline">case study’s reporting limitations</Link> before applying its figures to your population.</p>
          <h2 className="text-2xl font-bold mt-12 mb-6">Questions to resolve before choosing a workflow</h2>
          <div className="space-y-6">{comparisonFaqs.map(faq => (
            <div key={faq.question}>
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}</div>
          <p className="mt-10 text-sm text-gray-500">Published by Positive Check. Content updated September 13, 2026.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-5">
            <Link href="/demo" className="text-purple-700 font-semibold underline">Discuss your workflow</Link>
            <Link href="/solutions/chronic-care-management" className="text-purple-700 underline">Back to the CCM overview</Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
