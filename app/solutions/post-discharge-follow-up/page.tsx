import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { Button } from '@/components/ui/button'
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/components/structured-data'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, PhoneCall, Timer, AlertTriangle, TrendingDown } from 'lucide-react'

const description = 'Support post-discharge outreach with scheduled calls, summaries and staff follow-up. Evaluate contact timing, escalation ownership and TCM workflow fit.'
const tcmFeatures = [
  { icon: Timer, title: 'Planned Outreach', desc: 'Schedule outreach from an agreed discharge source. Track attempts, successful contacts and unresolved follow-up separately; staff own the contact deadline and fallback.' },
  { icon: PhoneCall, title: 'Structured Check-Ins', desc: 'Practice-approved questions capture patient-reported medication concerns, symptoms and appointment needs for care-team review.' },
  { icon: AlertTriangle, title: 'Care-Team Handoff', desc: 'Flagged responses support staff prioritization. Agree escalation rules, coverage hours and fallback steps; an alert does not guarantee immediate intervention.' },
  { icon: TrendingDown, title: 'Review the Outcome', desc: 'Staff assess concerns, complete appropriate follow-up and record what happened. Evaluate patient contact and follow-up outcomes without assuming a reduction in readmissions.' },
]

export const metadata: Metadata = {
  title: 'Post-Discharge Follow-Up (TCM) Solution | Positive Check',
  description,
  alternates: { canonical: '/solutions/post-discharge-follow-up' },
  openGraph: {
    title: 'Post-Discharge Follow-Up (TCM) Solution',
    description,
    url: '/solutions/post-discharge-follow-up',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check post-discharge dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Discharge Follow-Up Solution | Positive Check',
    description,
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const tcmPillarFaqs = [
  {
    question: 'What is Transitional Care Management (TCM)?',
    answer:
      'TCM supports a patient’s transition from an eligible facility to community care during a 30-day service period. It includes timely interactive contact, an appropriate visit, medication reconciliation and other required services. Outreach software can support the workflow; the practice remains responsible for delivering and documenting qualifying care.',
  },
  {
    question: 'Does an AI-powered phone call independently satisfy the TCM contact requirement?',
    answer:
      'CMS does not expressly establish that a fully automated AI call independently satisfies the requirement. AI outreach can capture structured responses, document attempts, and route patients to clinical staff; the billing practice should determine which contacts meet current CPT, CMS, MAC, and payer requirements.',
  },
  {
    question: 'How quickly must post-discharge contact happen?',
    answer:
      'The TCM interactive-contact requirement is within two business days after discharge, not a universal 48-hour window. Plan for weekends, holidays and unsuccessful attempts. Agree the discharge-data source and staff follow-up process before launch; a scheduled automated call does not demonstrate that qualifying contact occurred.',
  },
  {
    question: "What\u2019s the difference between CPT 99495 and 99496?",
    answer:
      'CPT 99495 requires at least moderate medical decision-making and a visit within 14 calendar days; 99496 requires high complexity and a visit within 7 calendar days. Both have interactive-contact and other service requirements. Verify payment for your year, locality, setting and payer rather than assuming a single national amount.',
  },
  {
    question: 'How does TCM relate to the Hospital Readmissions Reduction Program (HRRP)?',
    answer:
      'HRRP and TCM address related care-transition concerns, but using outreach software does not establish a reduction in readmissions or hospital penalties. Evaluate contact completion and staff follow-up first. Any clinical-outcome claim needs an appropriate population, comparison, measurement period and evidence beyond the number of calls made.',
  },
  {
    question: 'Does HIPAA permit automated discharge follow-up calls?',
    answer:
      'Review the proposed workflow with your privacy and security owners before sharing patient information. Confirm the BAA, access controls, approved message details, identity checks, retention and escalation responsibilities. A BAA alone does not establish that every message, integration or configured process meets all applicable requirements.',
  },
];

export default function PostDischargeFollowUpPage() {
  return (
    <>
      <StructuredData
        id="tcm-pillar-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://www.positivecheck.com' },
          { name: 'Solutions', url: 'https://www.positivecheck.com/solutions' },
          { name: 'Post-Discharge Follow-Up', url: 'https://www.positivecheck.com/solutions/post-discharge-follow-up' },
        ])}
      />
      <StructuredData
        id="tcm-pillar-service"
        data={buildServiceSchema({
          name: 'Post-Discharge Follow-Up (TCM) with AI Calls',
          serviceType: 'Transitional Care Management',
          description,
          category: 'Transitional Care Management',
        })}
      />
      <StructuredData
        id="tcm-pillar-faq"
        data={buildFAQSchema(tcmPillarFaqs)}
      />
      <StructuredData
        id="tcm-pillar-howto"
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How Positive Check Supports Post-Discharge Care',
          description: 'Plan discharge outreach, capture responses, route concerns and review staff follow-up.',
          step: tcmFeatures.map((feature, index) => ({ '@type': 'HowToStep', position: index + 1, name: feature.title, text: feature.desc })),
        }}
      />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />

        <main>
          {/* Hero */}
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">TCM Solution</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                Post-Discharge Follow-Up, Automated
              </h1>
              <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Positive Check supports post-discharge outreach, captures patient responses and
                flags requests for care-team follow-up. Your practice retains clinical review,
                contact deadlines and responsibility for qualifying TCM services.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { value: 'Outreach', label: 'Planned contact attempts' },
                  { value: 'Review', label: 'Patient responses for staff' },
                  { value: 'Handoff', label: 'Care-team ownership' },
                  { value: 'Follow-up', label: 'Practice-recorded outcomes' },
                ].map((m) => (
                  <Card key={m.label} className="bg-white/15 border-white/20 backdrop-blur-sm">
                    <CardContent className="p-5 text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">{m.value}</p>
                      <p className="text-purple-100 text-sm mt-1">{m.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* What is TCM */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Transitional Care Management?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">Transitional Care Management (TCM)</Link> is a Medicare-reimbursed service designed to reduce
                  hospital readmissions by ensuring patients receive timely follow-up after discharge.{' '}
                  <Link href="/resources/glossary/cpt-99495" className="text-purple-700 underline hover:text-purple-900">CPT 99495</Link> requires that a clinical staff member contacts the patient within two
                  business days of discharge.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The 30-day post-discharge window is when patients are most vulnerable to complications,
                  medication errors, and avoidable readmissions. CMS Hospital Readmissions Reduction
                  Program (HRRP) penalties make this a financial imperative as well as a clinical one.
                  The challenge: ensuring every discharged patient gets timely outreach when discharge
                  volumes fluctuate daily.
                </p>
              </div>
            </div>
          </section>

          {/* How PC Supports TCM */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How Positive Check Supports Post-Discharge Care</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Plan outreach timing, staff review and a fallback for unsuccessful contacts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {tcmFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Card key={feature.title} className="border-gray-200 bg-white">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CPT Code Breakdown */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">TCM Billing Code</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  TCM includes clinical services and documentation beyond an outreach call.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <Card className="border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-gray-50">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">CPT Code</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium text-purple-700">99495</td>
                          <td className="py-3 px-4 text-gray-700">TCM — interactive contact within 2 business days, at least moderate medical decision-making and a visit within 14 calendar days, alongside other service requirements</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Verify the full service requirements and applicable payment for the service year, payer, locality and setting. See the <Link href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide" className="text-purple-700 underline">CPT 99495 billing guide</Link>. A call sequence alone does not establish billable TCM.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Providers Choose Positive Check for TCM</h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Scheduled outreach with unsuccessful contacts visible for staff follow-up',
                    'Repeatable outreach alongside practice-owned clinical coverage',
                    'Structured questions capture patient-reported concerns for review',
                    'Flagged responses for the designated care-team owner',
                    'Summaries to reconcile with clinical records and staff actions',
                    'Track contact and follow-up outcomes against a defined baseline',
                    'Works alongside existing discharge planning workflows',
                    'Combine with RPM/CCM for ongoing monitoring after initial TCM contact',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                {tcmPillarFaqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/solutions/post-discharge-follow-up/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  See all Transitional Care Management questions
                </Link>
              </div>
            </div>
          </section>

          {/* Further Reading */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Further Reading
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/solutions/post-discharge-follow-up/cpt-99495-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Billing guide</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CPT 99495 Billing Guide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eligibility, documentation requirements, and how interactive communication is handled.
                  </p>
                </Link>
                <Link
                  href="/solutions/post-discharge-follow-up/30-day-readmission-reduction"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Clinical</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Reducing 30-Day Readmissions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Which discharge scenarios carry the highest readmission risk and where TCM fits.
                  </p>
                </Link>
                <Link
                  href="/solutions/post-discharge-follow-up/post-discharge-contact-timing"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Workflow</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Post-Discharge Contact Timing
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The 2-business-day window, weekend/holiday handling, and documentation.
                  </p>
                </Link>
                <Link
                  href="/solutions/post-discharge-follow-up/vs-manual-discharge-outreach"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Comparison</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Calls vs. Manual Outreach
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Category-level comparison of automated versus manual discharge follow-up workflows.
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Automate Post-Discharge Follow-Up?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Walk through discharge data, outreach timing, staff coverage and unsuccessful-contact
                handling. Define what your team needs to evaluate a supported workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RequestDemoModal>
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-purple-500 text-white px-8">
                    Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </RequestDemoModal>
                <Link href="/roi-calculator">
                  <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8">
                    Calculate Your ROI
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS billing guidance.{' '}
                <a
                  href="https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS TCM service requirements
                </a>
                . Workflow and claims updated November 9, 2026. Editorial source check; not independent coding-review sign-off.
              </p>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
