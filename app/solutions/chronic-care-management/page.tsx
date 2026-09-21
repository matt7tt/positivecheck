import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { Button } from '@/components/ui/button'
import { StructuredData, buildBreadcrumbSchema, buildServiceSchema, buildFAQSchema } from '@/components/structured-data'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, HeartPulse, ClipboardList, Users, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chronic Care Management (CCM) Solution | Positive Check',
  description: 'Support CCM patient outreach with AI wellness calls, care-team summaries and alerts. Explore retained clinical responsibilities, workflow fit and pilot evaluation.',
  alternates: { canonical: '/solutions/chronic-care-management' },
  openGraph: {
    title: 'Chronic Care Management (CCM) Solution',
    description: 'Automate CCM patient engagement with AI wellness calls. Support CPT 99490, 99439, 99487, and 99489 billing requirements.',
    url: '/solutions/chronic-care-management',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check CCM dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chronic Care Management Solution | Positive Check',
    description: 'Automate CCM patient engagement with AI wellness calls. Support CPT 99490, 99439, 99487, and 99489 billing.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const ccmPillarFaqs = [
  {
    question: 'What does Lola do within a CCM program?',
    answer: 'Lola supports routine patient outreach through scheduled wellness calls, structured responses and call summaries for the care team. Providers can use that information to identify follow-up needs and review concerns. The service supports patient engagement; it does not replace a comprehensive care plan, clinical judgment or the provider’s responsibility to deliver and document qualifying care.',
  },
  {
    question: 'What work remains with clinical staff?',
    answer: 'Clinical staff remain responsible for reviewing relevant information, assessing concerns, coordinating care and documenting their work under the provider’s supervision. Automated call duration is not clinical staff time. The billing team must verify qualifying activities and all applicable requirements; an AI summary does not independently make a patient eligible for reimbursement or establish a billable service.',
  },
  {
    question: 'How are concerning patient responses handled?',
    answer: 'Positive Check surfaces concerning responses for care-team review through its alert workflow. Before launch, agree the escalation rules, responsible staff, coverage hours and process for failed handoffs. Do not assume that an automated alert guarantees an immediate clinical response. Patient instructions should explain the service’s limits and the appropriate route for urgent or emergency care.',
  },
  {
    question: 'When is staff-led outreach a better fit?',
    answer: 'Staff-led outreach can be the better fit when patients need complex conversations, established relationships or support that a structured call cannot provide. It may also be sufficient when the existing team reliably meets patient needs. Compare patient experience and staff workload before changing the process; automation should address a measured operational need, not an assumed staffing shortage.',
  },
  {
    question: 'What should we prepare before launching a CCM pilot?',
    answer: 'Choose a defined cohort and workflow, then identify clinical, operations and technical owners. Review patient eligibility and consent, data-transfer requirements, call preferences and escalation coverage before sharing production records. Confirm the implementation scope with Positive Check and test with synthetic data first. Public contact and demo forms should not contain patient health information.',
  },
  {
    question: 'How should we evaluate the first pilot?',
    answer: 'Compare the pilot with a documented starting point for the same workflow. Track attempted and completed contacts, staff review time, alert response times and patient opt-outs using agreed definitions and reporting periods. Include software and retained staffing costs. Review unsuccessful calls and handoffs before expanding; enrollment growth alone does not establish clinical benefit or a financial return.',
  },
]
export default function ChronicCareManagementPage() {
  return (
    <>
      <StructuredData
        id="ccm-pillar-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://www.positivecheck.com' },
          { name: 'Solutions', url: 'https://www.positivecheck.com/solutions' },
          { name: 'Chronic Care Management', url: 'https://www.positivecheck.com/solutions/chronic-care-management' },
        ])}
      />
      <StructuredData
        id="ccm-pillar-service"
        data={buildServiceSchema({
          name: 'Chronic Care Management (CCM) with AI Wellness Calls',
          serviceType: 'Chronic Care Management',
          description:
            'Daily AI wellness calls for CCM patients \u2014 medication adherence checks, care plan follow-up, and documentation ready for CPT 99490, 99439, 99487, and 99489 billing.',
          category: 'Chronic Care Management',
        })}
      />
      <StructuredData
        id="ccm-pillar-faq"
        data={buildFAQSchema(ccmPillarFaqs)}
      />
      <StructuredData
        id="ccm-pillar-howto"
        data={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How Positive Check Supports Chronic Care Management',
          description:
            'Automate CCM patient engagement in four steps: medication adherence checks, care plan follow-up, alert-triggered escalation, and support for complex patients.',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Medication Adherence Checks',
              text:
                'Daily calls include medication check-ins, asking patients about doses taken, side effects, and refill needs \u2014 key documentation for CCM.',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Care Plan Follow-Up',
              text:
                "Structured wellness questions align to each patient's care plan, generating documented follow-up touchpoints for CCM billing.",
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Alert-Triggered Callbacks',
              text:
                'When a call flags a concern, care teams receive immediate alerts \u2014 generating additional documented care coordination time for CPT 99439.',
            },
            {
              '@type': 'HowToStep',
              position: 4,
              name: 'Complex Patient Support',
              text:
                'For patients with multiple chronic conditions, daily monitoring with escalation protocols supports the higher documentation bar for CPT 99487 and 99489.',
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
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">CCM Solution</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                Chronic Care Management at Scale
              </h1>
              <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Daily AI wellness calls give your CCM patients consistent touchpoints, medication
                adherence checks, and care plan follow-up — all documented and ready for billing.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { value: '$66', label: 'Non-Complex CCM / Mo' },
                  { value: '$144', label: 'Complex CCM / Mo' },
                  { value: '99490', label: 'First 20 Min — $66' },
                  { value: '99487', label: 'Complex 60 Min — $144' },
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

          {/* What is CCM */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Chronic Care Management?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">Chronic Care Management (CCM)</Link> is a Medicare program that reimburses providers for
                  non-face-to-face care coordination services for patients with two or more chronic
                  conditions. Services include care plan development, medication management, and
                  ongoing patient communication.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  CMS requires at least 20 minutes of clinical staff time per patient per month for
                  standard CCM (99490), with additional codes for more complex patients (99487) and
                  additional time blocks (99439). The challenge is documenting this time and maintaining
                  consistent patient contact across large populations.
                </p>
              </div>
            </div>
          </section>

          {/* How PC Supports CCM */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How Positive Check Supports CCM</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Structured daily calls provide the consistent patient touchpoints your CCM program needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: HeartPulse, title: 'Medication Adherence', desc: 'Daily calls include medication check-ins, asking patients about doses taken, side effects, and refill needs — key documentation for CCM.' },
                  { icon: ClipboardList, title: 'Care Plan Follow-Up', desc: 'Structured wellness questions align to each patient\'s care plan, generating documented follow-up touchpoints for CCM billing.' },
                  { icon: Bell, title: 'Alert-Triggered Callbacks', desc: 'When a call flags a concern, care teams receive immediate alerts — generating additional documented care coordination time for CPT 99439.' },
                  { icon: Users, title: 'Complex Patient Support', desc: 'For patients with multiple chronic conditions, daily monitoring with escalation protocols supports the higher documentation bar for CPT 99487 and 99489.' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">CCM Billing Codes</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  2026 Medicare national average reimbursement rates for Chronic Care Management.
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
                        {[
                          { code: '99490', desc: 'CCM \u2014 first 20 min non-complex chronic care management', rate: '$66' },
                          { code: '99439', desc: 'CCM \u2014 each additional 20 min non-complex CCM (up to 2x/month)', rate: '$48' },
                          { code: '99487', desc: 'Complex CCM \u2014 first 60 min for patients with multiple chronic conditions', rate: '$144' },
                          { code: '99489', desc: 'Complex CCM \u2014 each additional 30 min beyond the 99487 threshold', rate: '$72' },
                        ].map((row) => (
                          <tr key={row.code} className="border-b last:border-b-0">
                            <td className="py-3 px-4 font-medium text-purple-700">{row.code}</td>
                            <td className="py-3 px-4 text-gray-700">{row.desc}</td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-900">{row.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Providers Choose Positive Check for CCM</h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Consistent daily patient touchpoints without manual outreach',
                    'Medication adherence tracking built into every call',
                    'Documented care coordination time supports 99490 and 99439 billing',
                    'Escalation protocols for complex patients meet 99487 requirements',
                    'Real-time alerts when patients report changes or concerns',
                    'Works alongside your existing care management workflows',
                    'Combine with RPM for $159-$237/patient/month in revenue',
                    'HIPAA-compliant with full audit trail',
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
                {ccmPillarFaqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/solutions/chronic-care-management/faq"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  See all Chronic Care Management questions
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
                  href="/solutions/chronic-care-management/cpt-99490-billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Billing guide</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CPT 99490 Billing Guide
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Eligibility, the 20-minute requirement, documentation, and the separate non-complex and complex CCM pathways.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/2-chronic-conditions-requirement"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Eligibility</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The 2-Chronic-Conditions Requirement
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Which combinations qualify, documentation expectations, and the line between CCM and PCM.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/20-minutes-monthly-requirement"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Workflow</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    The 20-Minute Monthly Requirement
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    How time is tracked, what counts as clinical staff time, and common documentation pitfalls.
                  </p>
                </Link>
                <Link
                  href="/solutions/chronic-care-management/vs-in-house-care-coordinators"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Comparison</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Calls vs. In-House Care Coordinators
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Category-level comparison of automated engagement versus staffing an in-house CCM team.
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Scale Your CCM Program?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                See how Positive Check can automate your CCM patient engagement and maximize
                reimbursable revenue across your chronic care population.
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
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Related glossary entries:{' '}
                <Link href="/resources/glossary/cpt-99490" className="text-purple-700 underline hover:text-purple-900">CPT 99490</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99439" className="text-purple-700 underline hover:text-purple-900">CPT 99439</Link>
                {', '}
                <Link href="/resources/glossary/cpt-99487" className="text-purple-700 underline hover:text-purple-900">CPT 99487</Link>
                .
              </p>
            </div>
          </section>

          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Billing reference:{' '}
                <a
                  href="https://www.cms.gov/files/document/mln909188-chronic-care-management-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  CMS MLN CCM Booklet
                </a>
                . Published by Positive Check. Content updated September 13, 2026.
              </p>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
