import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { Button } from '@/components/ui/button'
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/components/structured-data'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, PhoneCall, Timer, AlertTriangle, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Post-Discharge Follow-Up (TCM) Solution | Positive Check',
  description: 'Automate post-discharge patient follow-up calls within 2 business days. Support CPT 99495 billing and reduce 30-day readmissions with AI-powered outreach.',
  alternates: { canonical: '/solutions/post-discharge-follow-up' },
  openGraph: {
    title: 'Post-Discharge Follow-Up (TCM) Solution',
    description: 'Automate post-discharge follow-up calls within 2 business days. Support CPT 99495 billing and reduce readmissions.',
    url: '/solutions/post-discharge-follow-up',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check post-discharge dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Post-Discharge Follow-Up Solution | Positive Check',
    description: 'Automate post-discharge follow-up calls within 2 business days. Support CPT 99495 billing.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const tcmPillarFaqs = [
  {
    question: 'What is Transitional Care Management (TCM)?',
    answer:
      "Transitional Care Management is a Medicare-reimbursed care model designed to reduce hospital readmissions by ensuring patients receive structured follow-up after discharge. CMS pays providers for delivering two things within a 30-day window: an initial patient contact within two business days of discharge, and a face-to-face visit within 7\u201314 days depending on complexity. The billing codes are CPT 99495 (moderate complexity) and 99496 (high complexity).",
  },
  {
    question: 'Can an AI-powered phone call satisfy the TCM contact requirement?',
    answer:
      'Yes. CMS specifies that the initial contact within two business days must be a "direct contact" that addresses the patient\u2019s discharge care plan \u2014 it can be telephonic, electronic, or face-to-face. An AI wellness call that captures medication understanding, symptom changes, follow-up appointment awareness, and home safety meets the contact requirement as long as the call is documented, escalates concerns to clinical staff, and occurs within the 2-business-day window.',
  },
  {
    question: 'How quickly must post-discharge contact happen?',
    answer:
      'Within two business days of discharge for both CPT 99495 and 99496. Weekends and federal holidays do not count. A patient discharged on a Friday must be contacted by end of business Tuesday. Positive Check schedules calls automatically based on the discharge timestamp from your EHR or discharge list import.',
  },
  {
    question: "What\u2019s the difference between CPT 99495 and 99496?",
    answer:
      'Both require contact within two business days of discharge. CPT 99495 requires moderate medical decision-making complexity and a face-to-face visit within 14 calendar days \u2014 2026 Medicare reimburses it at roughly $178. CPT 99496 requires high medical decision-making complexity and a face-to-face visit within 7 calendar days, reimbursed at a higher rate. See the CMS MLN booklet for current rates.',
  },
  {
    question: 'How does TCM relate to the Hospital Readmissions Reduction Program (HRRP)?',
    answer:
      'HRRP penalizes hospitals for higher-than-expected 30-day readmission rates across six conditions. TCM is the CMS-recognized intervention for reducing avoidable readmissions in the critical 30-day post-discharge window. Effective TCM programs reduce readmissions, which directly reduces HRRP penalty exposure.',
  },
  {
    question: 'Does HIPAA permit automated discharge follow-up calls?',
    answer:
      'Yes, when the vendor operates under a signed Business Associate Agreement (BAA) and the platform implements HIPAA technical safeguards \u2014 encryption in transit and at rest, role-based access, audit logging, and minimum-necessary data handling. Positive Check operates under a BAA for all provider engagements.',
  },
];

export default function PostDischargeFollowUpPage() {
  return (
    <>
      <StructuredData
        id="tcm-pillar-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://positivecheck.com' },
          { name: 'Solutions', url: 'https://positivecheck.com/solutions' },
          { name: 'Post-Discharge Follow-Up', url: 'https://positivecheck.com/solutions/post-discharge-follow-up' },
        ])}
      />
      <StructuredData
        id="tcm-pillar-service"
        data={buildServiceSchema({
          name: 'Post-Discharge Follow-Up (TCM) with AI Calls',
          serviceType: 'Transitional Care Management',
          description:
            'Automated post-discharge patient outreach within 24-48 hours. Satisfies CMS Transitional Care Management requirements, supports CPT 99495 billing, and reduces 30-day readmissions.',
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
          description:
            'Automate CMS-compliant post-discharge outreach in four steps: auto-trigger within 48 hours, conduct a structured check-in, escalate concerns, and document for CPT 99495 billing.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Automated 48-Hour Contact',
              text:
                'Patients are contacted within 24-48 hours of discharge, satisfying the initial patient contact requirement for CPT 99495 without manual scheduling.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Structured Check-In Calls',
              text:
                'Calls assess medication understanding, follow-up appointment awareness, symptom changes, and home safety \u2014 the key areas that prevent readmissions.',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Immediate Escalation',
              text:
                'If a patient reports confusion about medications, new symptoms, or missed follow-ups, care teams are alerted immediately for same-day intervention.',
            },
            {
              '@type': 'HowToStep',
              position: 4,
              name: 'Readmission Risk Reduction',
              text:
                'Consistent post-discharge engagement catches complications early, reducing 30-day readmission rates and HRRP penalty exposure.',
            },
          ],
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
                Positive Check contacts patients within 24-48 hours of discharge — satisfying
                Transitional Care Management requirements and catching complications before they
                become readmissions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { value: '$178', label: 'Revenue / Patient' },
                  { value: '99495', label: 'TCM Within 2 Days' },
                  { value: '24-48h', label: 'Contact Window' },
                  { value: '~20%', label: 'Readmission Risk Reduced' },
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
                  Transitional Care Management (TCM) is a Medicare-reimbursed service designed to reduce
                  hospital readmissions by ensuring patients receive timely follow-up after discharge.
                  CPT 99495 requires that a clinical staff member contacts the patient within two
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
                  Automated calls within the critical 48-hour window, every time.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: Timer, title: 'Automated 48-Hour Contact', desc: 'Patients are contacted within 24-48 hours of discharge — satisfying the initial patient contact requirement for CPT 99495 without manual scheduling.' },
                  { icon: PhoneCall, title: 'Structured Check-In Calls', desc: 'Calls assess medication understanding, follow-up appointment awareness, symptom changes, and home safety — the key areas that prevent readmissions.' },
                  { icon: AlertTriangle, title: 'Immediate Escalation', desc: 'If a patient reports confusion about medications, new symptoms, or missed follow-ups, care teams are alerted immediately for same-day intervention.' },
                  { icon: TrendingDown, title: 'Readmission Risk Reduction', desc: 'Consistent post-discharge engagement catches complications early, reducing 30-day readmission rates and HRRP penalty exposure.' },
                ].map((feature) => {
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
                  2026 Medicare national average reimbursement rate for Transitional Care Management.
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
                          <th className="text-right py-3 px-4 font-semibold text-gray-700">2026 Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium text-purple-700">99495</td>
                          <td className="py-3 px-4 text-gray-700">TCM — post-discharge follow-up contact within 2 business days, moderate medical decision complexity</td>
                          <td className="py-3 px-4 text-right font-bold text-gray-900">$178</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  TCM is billed once per patient per discharge event during the 30-day post-discharge period.
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
                    'Guaranteed patient contact within the 48-hour CMS window',
                    'No staffing bottlenecks during high-discharge periods',
                    'Structured calls assess medication, symptoms, and follow-up plans',
                    'Immediate alerts for patients at risk of complications',
                    '$178/patient revenue for a single post-discharge call sequence',
                    'Reduces 30-day readmission rates and HRRP penalty exposure',
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
                See how Positive Check ensures every discharged patient receives timely follow-up —
                reducing readmissions while generating reimbursable revenue.
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
                  CMS MLN TCM Booklet
                </a>
                . Last updated 2026-04-19.
              </p>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
