'use client'

import { useRef, useCallback } from 'react'
import Link from 'next/link'
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
  Users, Bell, Clock, Download, ArrowRight, CheckCircle
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const enrollmentData = [
  { month: "Jul '25", patients: 1 },
  { month: "Aug '25", patients: 12 },
  { month: "Sep '25", patients: 198 },
  { month: "Oct '25", patients: 883 },
  { month: "Nov '25", patients: 1042 },
  { month: "Dec '25", patients: 1191 },
  { month: "Jan '26", patients: 1302 },
  { month: "Feb '26", patients: 1509 },
]

const engagementData = [
  { month: 'Sep', rate: 40.0 },
  { month: 'Oct', rate: 32.2 },
  { month: 'Nov', rate: 49.8 },
  { month: 'Dec', rate: 54.5 },
  { month: 'Jan', rate: 49.4 },
  { month: 'Feb', rate: 46.3 },
]

const alertsData = [
  { month: 'Oct', alerts: 43 },
  { month: 'Nov', alerts: 64 },
  { month: 'Dec', alerts: 81 },
  { month: 'Jan', alerts: 191 },
  { month: 'Feb', alerts: 106 },
]

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
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('Positive-Check-Case-Study.pdf')
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
              Scaling Patient Engagement to 1,500+ Patients in 6&nbsp;Months
            </h1>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              How a healthcare partner used Positive Check to automate daily wellness calls,
              catch 485&nbsp;clinical alerts, and reach ~50% of enrolled patients every&nbsp;month.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: '1,509', label: 'Patients Enrolled' },
                { value: '~50%', label: 'Monthly Engagement' },
                { value: '485', label: 'Alerts Caught' },
                { value: '100%', label: 'Alerts Resolved' },
              ].map((m) => (
                <Card key={m.label} className="bg-white/15 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-5 text-center">
                    <p className="text-3xl md:text-4xl font-bold text-white">{m.value}</p>
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
                Within six months the program scaled from a single pilot patient to over 1,500
                enrolled — with measurable clinical and operational impact.
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
                  <p className="text-sm text-gray-500 mb-4">Percentage of enrolled patients reached each month</p>
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
                  <p className="text-sm text-gray-500 mb-4">Escalations flagged for care team review</p>
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
                  <p className="text-sm text-gray-500 mb-4">Distribution of completed calls across hours</p>
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
                  'Scaled from 1 to 1,509 patients in under 6 months',
                  '~50% monthly engagement rate across the population',
                  '485 clinical alerts identified and escalated',
                  '100% alert resolution rate',
                  'Peak engagement window: 2 PM – 9 PM',
                  'Consistent engagement even as enrollment tripled',
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
        {/* Customer Quote */}
        {/* ---------------------------------------------------------------- */}
        <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-6 text-white/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
              &ldquo;Positive Check lets us reach every patient, every day — something that
              simply wasn&rsquo;t possible with our team alone.&rdquo;
            </blockquote>
            <p className="text-purple-100 font-medium">
              — Clinical Operations Lead, [Healthcare Partner]
            </p>
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
                Building on six months of proven results, the program is expanding its reach and
                deepening clinical impact.
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
              Ready to See Similar Results?
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
            <h1 className="text-2xl font-bold text-gray-900">Positive Check</h1>
            <p className="text-sm text-gray-500">Case Study — Patient Engagement at Scale</p>
          </div>
          <p className="text-sm text-gray-400">positivecheck.com</p>
        </div>

        {/* PDF Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Scaling Patient Engagement to 1,500+ Patients in 6 Months
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          A healthcare partner deployed Positive Check to automate daily wellness calls — achieving
          ~50% monthly engagement and catching 485 clinical alerts with a 100% resolution rate.
        </p>

        {/* PDF Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { value: '1,509', label: 'Patients Enrolled' },
            { value: '~50%', label: 'Monthly Engagement' },
            { value: '485', label: 'Alerts Caught' },
            { value: '100%', label: 'Alerts Resolved' },
          ].map((m) => (
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
            <li>• Scaled from 1 to 1,509 patients in under 6 months</li>
            <li>• ~50% of enrolled patients engaged each month</li>
            <li>• 485 clinical alerts caught and escalated</li>
            <li>• 100% alert resolution rate</li>
            <li>• Peak engagement window: 2 PM – 9 PM</li>
          </ul>
        </div>

        {/* PDF Quote */}
        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <p className="text-sm italic text-gray-800">
            &ldquo;Positive Check lets us reach every patient, every day — something that simply
            wasn&rsquo;t possible with our team alone.&rdquo;
          </p>
          <p className="text-xs text-gray-500 mt-1">— Clinical Operations Lead, [Healthcare Partner]</p>
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
