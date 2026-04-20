import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Phone, BarChart3, Clock, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Remote Patient Monitoring (RPM) Solution | Positive Check',
  description: 'Support RPM billing with AI-powered daily wellness calls. Positive Check automates patient engagement for CPT 99457, 99458, and 99454 — generating $93+/patient/month in Medicare revenue.',
  alternates: { canonical: '/solutions/remote-patient-monitoring' },
  openGraph: {
    title: 'Remote Patient Monitoring (RPM) Solution',
    description: 'Automate RPM patient engagement with AI wellness calls. Support CPT 99457, 99458, and 99454 billing requirements.',
    url: '/solutions/remote-patient-monitoring',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check RPM dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Patient Monitoring Solution | Positive Check',
    description: 'Automate RPM patient engagement with AI wellness calls. Support CPT 99457, 99458, and 99454 billing.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

export default function RemotePatientMonitoringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://positivecheck.com/solutions" },
              { "@type": "ListItem", "position": 3, "name": "Remote Patient Monitoring", "item": "https://positivecheck.com/solutions/remote-patient-monitoring" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Remote Patient Monitoring",
            "name": "Remote Patient Monitoring (RPM) with AI Wellness Calls",
            "description": "AI-powered daily patient engagement that satisfies CMS interactive communication requirements for RPM programs. Supports CPT 99457, 99458, and 99454 billing.",
            "provider": {
              "@type": "Organization",
              "name": "Positive Check",
              "url": "https://positivecheck.com"
            },
            "areaServed": { "@type": "Country", "name": "United States" },
            "audience": { "@type": "Audience", "audienceType": "Healthcare Providers" },
            "category": "Remote Patient Monitoring"
          })
        }}
      />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />

        <main>
          {/* Hero */}
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">RPM Solution</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                Remote Patient Monitoring Made Simple
              </h1>
              <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Positive Check automates the daily patient engagement your RPM program needs — satisfying
                CMS interactive communication requirements while generating reimbursable revenue.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { value: '$93', label: 'Revenue / Patient / Mo' },
                  { value: '99457', label: 'First 20 Min — $52' },
                  { value: '99458', label: 'Add\'l 20 Min — $41' },
                  { value: '99454', label: 'Device Supply — $56' },
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

          {/* What is RPM */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Remote Patient Monitoring?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Remote Patient Monitoring (RPM) allows healthcare providers to track patient health data
                  between office visits using connected devices and structured communication. Medicare
                  reimburses providers for RPM services under CPT codes 99457, 99458, and 99454 when clinical
                  staff spend time reviewing data and interacting with patients.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The challenge: CMS requires documented interactive communication with each patient — phone
                  calls, secure messages, or video — at least once per billing period. For practices managing
                  hundreds or thousands of RPM patients, this is operationally demanding.
                </p>
              </div>
            </div>
          </section>

          {/* How PC Supports RPM */}
          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How Positive Check Supports RPM</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our AI-powered daily calls handle the patient engagement your RPM program requires.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { icon: Phone, title: 'Daily Wellness Calls', desc: 'Automated voice calls collect vitals, symptoms, and wellness data — satisfying the interactive communication requirement for CPT 99457.' },
                  { icon: BarChart3, title: 'Structured Summaries', desc: 'Call results are organized into trend reports that reduce clinical review time, making the additional 20 minutes for CPT 99458 highly productive.' },
                  { icon: Clock, title: 'Consistent Cadence', desc: 'Every enrolled patient receives regular outreach without gaps — ensuring your practice meets the monthly engagement threshold.' },
                  { icon: ShieldCheck, title: 'HIPAA-Compliant', desc: 'All calls, transcripts, and data transmissions meet HIPAA standards. Business Associate Agreements available for all provider partners.' },
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">RPM Billing Codes</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  2026 Medicare national average reimbursement rates for Remote Patient Monitoring.
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
                          { code: '99457', desc: 'RPM — first 20 min clinical staff time per month', rate: '$52' },
                          { code: '99458', desc: 'RPM — each additional 20 min clinical staff time per month', rate: '$41' },
                          { code: '99454', desc: 'RPM — device(s) supply with daily recordings or alert transmission, each 30 days', rate: '$56' },
                        ].map((row) => (
                          <tr key={row.code} className="border-b last:border-b-0">
                            <td className="py-3 px-4 font-medium text-purple-700">{row.code}</td>
                            <td className="py-3 px-4 text-gray-700">{row.desc}</td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-900">{row.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-purple-50">
                          <td colSpan={2} className="py-3 px-4 font-semibold text-purple-700">Combined Monthly Revenue (99457 + 99458)</td>
                          <td className="py-3 px-4 text-right font-bold text-purple-700">$93/patient</td>
                        </tr>
                      </tfoot>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Providers Choose Positive Check for RPM</h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Scale RPM to thousands of patients without adding staff',
                    'Automated daily calls satisfy CMS interactive communication requirements',
                    'Structured call summaries reduce clinical review time',
                    'Real-time alerts flag patients who need immediate attention',
                    'HIPAA-compliant platform with BAA support',
                    'Integrates with existing EHR and billing workflows',
                    '$8-$16/patient/month — a fraction of the reimbursement generated',
                    'Launch in days, not months',
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

          {/* CTA */}
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Scale Your RPM Program?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                See how Positive Check can automate your RPM patient engagement and generate reimbursable
                revenue at scale.
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
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
