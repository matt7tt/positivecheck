'use client'

import { useRef, useCallback, useEffect } from 'react'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RequestDemoModal } from '@/components/request-demo-modal'
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import {
  Phone, ShieldAlert, LayoutDashboard, TrendingUp,
  Users, Bell, Download, ArrowRight, CheckCircle
} from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { fitSummaryToPage } from '@/lib/pdf-layout'
import { enrollmentData, engagementData, alertsData, caseStudyTitle, caseStudyMetrics, caseStudyLimitations } from '@/lib/case-study-data'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const callsByHourData = [
  { hour: '8 AM', calls: 12 },
  { hour: '9 AM', calls: 28 },
  { hour: '10 AM', calls: 45 },
  { hour: '11 AM', calls: 67 },
  { hour: '12 PM', calls: 89 },
  { hour: '1 PM', calls: 134 },
  { hour: '2 PM', calls: 182 },
  { hour: '3 PM', calls: 247 },
  { hour: '4 PM', calls: 304 },
  { hour: '5 PM', calls: 289 },
  { hour: '6 PM', calls: 261 },
  { hour: '7 PM', calls: 234 },
  { hour: '8 PM', calls: 198 },
  { hour: '9 PM', calls: 182 },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function CaseStudyAnchor() {
  const pdfRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    trackEvent('case_study_view', { case_study: 'scaling_patient_engagement' })
  }, [])

  const handleDownloadPdf = useCallback(async () => {
    if (!pdfRef.current) return
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf'),
    ])
    const canvas = await html2canvas(pdfRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const layout = fitSummaryToPage(canvas.width, canvas.height, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())
    pdf.addImage(imgData, 'PNG', layout.x, layout.y, layout.width, layout.height)
    pdf.save('Positive-Check-Case-Study.pdf')
    trackEvent('pdf_download', { document_name: 'scaling_patient_engagement_case_study' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="platform" />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/* Hero */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">
              Case Study
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
              {caseStudyTitle}
            </h1>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Reported enrollment grew from 1 in July 2025 to 1,509 in February 2026.
              See one healthcare partner’s operational results, reporting periods and limitations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {caseStudyMetrics.map((m) => (
                <Card key={m.label} className="bg-white/15 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-5 text-center">
                    <p className="text-xl sm:text-2xl font-bold tracking-tight text-white break-words">{m.value}</p>
                    <p className="text-purple-100 text-sm mt-1">{m.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* The Challenge */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A growing healthcare organization needed to maintain consistent, daily contact
                with a rapidly expanding patient population — without scaling headcount at the
                same rate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: 'Manual Outreach Doesn\'t Scale',
                  desc: 'Staff could only reach a fraction of patients each day, leading to gaps in follow-up and missed warning signs.',
                },
                {
                  title: 'Inconsistent Documentation',
                  desc: 'Phone-based check-ins relied on individual note-taking, making it difficult to track trends or prove compliance.',
                },
                {
                  title: 'Delayed Escalations',
                  desc: 'Without structured triage, clinical concerns surfaced hours or days late, increasing the risk of adverse events.',
                },
                {
                  title: 'Staff Burnout',
                  desc: 'Repetitive wellness calls consumed hours of clinical staff time that could be spent on higher-acuity patients.',
                },
              ].map((item) => (
                <Card key={item.title} className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* The Solution */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Positive Check deployed its AI-powered calling platform, enabling automated
                daily wellness check-ins with real-time clinical escalation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Phone,
                  title: 'AI-Powered Calls',
                  desc: 'Lola, our virtual care assistant, conducts personalized daily calls — asking wellness questions, detecting sentiment changes, and escalating when needed.',
                },
                {
                  icon: ShieldAlert,
                  title: 'Real-Time Alerts',
                  desc: 'Clinical concerns are flagged immediately. Care teams receive actionable alerts so they can intervene the same day — not days later.',
                },
                {
                  icon: LayoutDashboard,
                  title: 'Provider Dashboard',
                  desc: 'A centralized, HIPAA-compliant console gives care teams full visibility into call outcomes, engagement trends, and patient status.',
                },
              ].map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className="border-gray-200 bg-white">
                    <CardContent className="p-6 text-center">
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

        {/* ---------------------------------------------------------------- */}
        {/* The Results */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Results</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The enrollment series runs from July 2025 through February 2026.
                Engagement and alerts cover different periods; these are operational measures,
                not demonstrated clinical outcomes.
              </p>
            </div>

            {/* Charts grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {/* Enrollment Growth */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Enrollment Growth</h3>
                  <p className="text-sm text-gray-500 mb-4">Cumulative patients enrolled over time</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={enrollmentData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                        <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                        <Tooltip
                          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                          formatter={(value: number) => [value.toLocaleString(), 'Patients']}
                        />
                        <Line
                          type="monotone"
                          dataKey="patients"
                          stroke="#d946ef"
                          strokeWidth={3}
                          dot={{ fill: '#d946ef', r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Engagement Rate */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Monthly Engagement Rate</h3>
                  <p className="text-sm text-gray-500 mb-4">Reported rates, September 2025–February 2026; denominator and contact definition are not supplied</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={engagementData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                        <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" domain={[0, 60]} unit="%" />
                        <Tooltip
                          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                          formatter={(value: number) => [`${value}%`, 'Engagement']}
                        />
                        <Bar dataKey="rate" fill="#d946ef" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Clinical Alerts by Month */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Clinical Alerts by Month</h3>
                  <p className="text-sm text-gray-500 mb-4">Reported alerts, October 2025–February 2026; counts do not establish clinical resolution</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={alertsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                        <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                        <Tooltip
                          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                          formatter={(value: number) => [value, 'Alerts']}
                        />
                        <Bar dataKey="alerts" fill="#f472b6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Calls by Time of Day */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Calls by Time of Day</h3>
                  <p className="text-sm text-gray-500 mb-4">Reported call counts by hour; reporting period and time zone are not supplied</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={callsByHourData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="hour" tick={{ fontSize: 11 }} stroke="#9ca3af" interval={1} />
                        <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                        <Tooltip
                          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                          formatter={(value: number) => [value, 'Calls']}
                        />
                        <Bar dataKey="calls" fill="#a855f7" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key results list */}
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Reported enrollment: 1 in July 2025 to 1,509 in February 2026',
                  'Reported monthly engagement: 32.2%–54.5%, September 2025–February 2026',
                  '485 reported alerts in total, October 2025–February 2026',
                  'Alert resolution and clinical outcomes are not established by these aggregates',
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

        {/* ---------------------------------------------------------------- */}
        {/* Reporting context replaces an unverified placeholder testimonial. */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Reporting periods and limitations</h2>
            <p className="text-white leading-relaxed">{caseStudyLimitations}</p>
            <p className="mt-4 text-purple-100">Published by Positive Check. Content updated September 13, 2026; reporting ends February 2026.</p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* What's Next */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What&rsquo;s Next</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Next evaluation priorities include wider outreach and longitudinal outcomes.
                These are future goals, not results established by the charts above.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Users,
                  title: 'Expand to New Populations',
                  desc: 'Roll out Positive Check to additional patient cohorts and care settings within the organization.',
                },
                {
                  icon: Bell,
                  title: 'Enhanced Alert Workflows',
                  desc: 'Integrate alerts directly into EHR systems for seamless clinical handoff and faster response times.',
                },
                {
                  icon: TrendingUp,
                  title: 'Outcomes Reporting',
                  desc: 'Develop longitudinal outcome dashboards to quantify the impact on hospital readmissions and patient satisfaction.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="border-gray-200 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CTA */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Evaluate Your Own Workflow?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Learn how Positive Check can help your organization scale patient engagement,
              catch clinical risks earlier, and free up staff time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestDemoModal>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-purple-500 text-white px-8"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </RequestDemoModal>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8"
                onClick={handleDownloadPdf}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF Summary
              </Button>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />

      {/* ---------------------------------------------------------------- */}
      {/* Hidden PDF layout — positioned off-screen so html2canvas can render */}
      {/* ---------------------------------------------------------------- */}
      <div
        ref={pdfRef}
        style={{ position: 'absolute', left: '-9999px', top: 0, width: '800px' }}
        className="bg-white p-8"
      >
        {/* PDF Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-purple-500">
          <div>
            <p className="text-2xl font-bold text-gray-900">Positive Check</p>
            <p className="text-sm text-gray-500">Case Study — Patient Engagement at Scale</p>
          </div>
          <p className="text-sm text-gray-400">positivecheck.com</p>
        </div>

        {/* PDF Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {caseStudyTitle}
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Reported enrollment grew from 1 in July 2025 to 1,509 in February 2026.
          Engagement and alerts cover separate reporting periods, as shown below.
        </p>

        {/* PDF Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {caseStudyMetrics.map((m) => (
            <div key={m.label} className="text-center p-3 bg-purple-50 rounded-lg">
              <p className="text-xl font-bold text-purple-600">{m.value}</p>
              <p className="text-xs text-gray-600">{m.label}</p>
            </div>
          ))}
        </div>

        {/* PDF Enrollment Chart */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Enrollment Growth</h3>
          <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#9ca3af" />
                <YAxis tick={{ fontSize: 10 }} stroke="#9ca3af" />
                <Line type="monotone" dataKey="patients" stroke="#d946ef" strokeWidth={2} dot={{ fill: '#d946ef', r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PDF Key Results */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Results</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Enrollment series: July 2025–February 2026</li>
            <li>• Engagement series: September 2025–February 2026</li>
            <li>• Alert series: October 2025–February 2026</li>
          </ul>
        </div>

        {/* PDF limitations mirror the web page. */}
        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <h3 className="text-sm font-semibold mb-2">Reporting limitations</h3>
          <p className="text-xs text-gray-800">{caseStudyLimitations}</p>
        </div>

        {/* PDF Footer */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-purple-600">
            Learn more at positivecheck.com
          </p>
          <p className="text-xs text-gray-400 mt-1">info@positivecheck.com · (858) 522-9524</p>
        </div>
      </div>
    </div>
  )
}
