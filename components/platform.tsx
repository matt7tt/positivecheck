'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { RequestDemoModal } from '@/components/request-demo-modal'
import {
  Shield,
  Phone,
  Stethoscope,
  BarChart3,
  CalendarClock,
  AlertTriangle,
  MessageSquare,
  Brain,
  Lock,
  Users,
  Settings,
  CheckCircle,
  FileBarChart,
  Activity,
  Database,
  Clock,
} from 'lucide-react'

const dashboardTabs = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description:
      'See your entire patient population at a glance. Track engagement rates, active alerts, call completion metrics, and wellness trends from a single secure view.',
    image: '/images/admin-console-dashboard-new.png',
    alt: 'Admin console dashboard showing patient wellness analytics and engagement metrics',
  },
  {
    id: 'alerts',
    title: 'Alerts',
    description:
      'Every concerning response is classified by severity and routed to the right person. Review, acknowledge, and document follow-up actions with full audit trail.',
    image: '/images/admin-console-alert-management-new.png',
    alt: 'Alert management console showing clinical alerts prioritized by severity',
  },
  {
    id: 'patients',
    title: 'Patients',
    description:
      'Manage your full patient roster with enrollment status, contact details, call schedules, and individual wellness histories. Bulk import supported.',
    image: '/images/admin-console-client-management.png',
    alt: 'Patient management view with roster details and enrollment status',
  },
  {
    id: 'call-logs',
    title: 'Call Logs',
    description:
      'Review detailed records of every check-in: patient responses, AI-generated summaries, escalation triggers, call duration, and outcome classification.',
    image: '/images/admin-console-call-logs.png',
    alt: 'Call logs showing detailed interaction records and AI-generated summaries',
  },
]

const capabilities = [
  {
    icon: CalendarClock,
    title: 'Reach Every Patient, Every Time',
    problem: 'Staff can only make so many calls in a day. Patients fall through the cracks.',
    solution:
      'Automated scheduling handles thousands of check-ins daily while your team focuses on patients who need human attention. Set cadence per patient or cohort — daily, weekly, or custom — and let the platform do the rest.',
    bullets: [
      'Enterprise scheduling: 4,000+ calls per day',
      'Configurable per-patient cadence and time windows',
      'Automatic retry logic for missed calls',
      'Bulk patient import and enrollment',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Never Miss a Warning Sign',
    problem: 'Critical changes in patient condition go undetected between office visits.',
    solution:
      'AI-powered alert classification analyzes every response in real time. Concerning answers trigger immediate escalation to the right care team member, with severity levels and recommended actions.',
    bullets: [
      'Clinical alert classification with severity levels',
      'Configurable escalation thresholds',
      'Immediate notifications via dashboard and email',
      'Full audit trail for compliance documentation',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Meet Patients Where They Are',
    problem: 'Many patients — especially seniors — don\'t use apps or patient portals.',
    solution:
      'Positive Check works on any phone, landline or mobile. No downloads, no logins, no devices. Patients just answer a call and have a natural conversation with Lola, our AI care companion.',
    bullets: [
      'Voice calls to any phone number',
      'SMS follow-up and reminders',
      'No apps, portals, or special devices required',
      'Works with landlines — critical for senior populations',
    ],
  },
  {
    icon: Brain,
    title: 'Turn Conversations into Clinical Intelligence',
    problem: 'Valuable patient data is locked in unstructured phone conversations.',
    solution:
      'Every call produces structured clinical data: medication adherence tracking, mood and cognitive assessments, symptom monitoring, and longitudinal trend analysis across your population.',
    bullets: [
      'AI-powered response analysis and summarization',
      'Medication adherence tracking over time',
      'Cognitive health monitoring and trend detection',
      'Population-level analytics and exportable reports',
    ],
  },
]

export function PlatformComponent() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="platform" />

      <main>
        {/* Section 1: Hero */}
        <section className="px-6 py-20 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              The Patient Engagement Platform That Pays for Itself
            </h1>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Reduce readmissions, close care gaps, and scale patient outreach — without adding staff.
              AI-powered check-in calls that deliver clinical intelligence your team can act on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <RequestDemoModal>
                <Button className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                  REQUEST DEMO
                </Button>
              </RequestDemoModal>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold">
                <Link href="/how-it-works">HOW IT WORKS</Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-purple-100 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>No Apps or Devices Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>Built for Healthcare</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Real-Time Alerts & Analytics</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The AI Difference */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Conversations That Feel Human, Powered by AI That Thinks Like a Clinician
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Forget rigid IVR menus and robocalls. Lola uses real-time voice AI to have natural, adaptive conversations
                that patients actually enjoy. She remembers context from previous calls, follows clinically structured
                question flows, and knows when to dig deeper.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Natural voice conversations</strong>
                    <p className="text-gray-600">Real-time AI voice — not pre-recorded scripts or touch-tone menus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Context-aware follow-ups</strong>
                    <p className="text-gray-600">Remembers previous responses and adapts questions accordingly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Structured clinical flow</strong>
                    <p className="text-gray-600">Designed with healthcare providers to capture the data that matters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Works on any phone</strong>
                    <p className="text-gray-600">Landline or mobile — no apps, no devices, no barriers</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/care-companion-lola-calling.webp"
                alt="Lola, the AI care companion, making a natural wellness check-in call"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Core Capabilities */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Everything Your Care Team Needs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Four core capabilities that work together to keep patients engaged, staff informed, and your programs performing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((cap) => {
                const Icon = cap.icon
                return (
                  <div key={cap.title} className="bg-white rounded-lg p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-[#d946ef]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{cap.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 italic mb-3">{cap.problem}</p>
                    <p className="text-gray-700 mb-4">{cap.solution}</p>
                    <ul className="space-y-2">
                      {cap.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#e879f9] mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Dashboard Showcase */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your Command Center for Patient Wellness
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A secure, HIPAA-compliant admin console that gives your care team real-time visibility
                into every patient interaction.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {dashboardTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#e879f9] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.title.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              {dashboardTabs.map((tab) => (
                <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                  <div className="text-center mb-8">
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={tab.image}
                      alt={tab.alt}
                      width={1200}
                      height={600}
                      className="rounded-lg shadow-xl w-full max-w-6xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Analytics & Insights */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/admin-console-dashboard-new.png"
                alt="Analytics dashboard showing population health trends and reporting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                From Data to Decisions in Minutes, Not Days
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every call generates structured clinical data. The platform turns raw patient conversations
                into actionable intelligence your team can use immediately.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Contact rate and engagement metrics</strong>
                    <p className="text-sm text-gray-600">Track call completion, response rates, and patient engagement over time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileBarChart className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Medication adherence reports</strong>
                    <p className="text-sm text-gray-600">Identify non-adherence patterns before they become emergencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Population health trends</strong>
                    <p className="text-sm text-gray-600">Spot emerging concerns across patient cohorts and care programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Cognitive health monitoring</strong>
                    <p className="text-sm text-gray-600">Track conversational markers and flag cognitive changes longitudinally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-[#e879f9] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Exportable reports</strong>
                    <p className="text-sm text-gray-600">Download compliance documentation and program performance data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Enterprise-Ready */}
        <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Built for Healthcare. Built for Scale.
              </h2>
              <p className="text-lg text-purple-100 max-w-3xl mx-auto">
                Enterprise-grade infrastructure designed from day one for the security, compliance,
                and customization that healthcare organizations demand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Compliance & Security */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white">Compliance & Security</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Full HIPAA compliance with BAA</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">End-to-end encryption for data in transit and at rest</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Multi-factor authentication (MFA)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Role-based access control (RBAC)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Complete audit logging for every action</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">TCPA-compliant call handling</span>
                  </div>
                </div>
              </div>

              {/* Customization & Scale */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white">Customization & Scale</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Fully customizable question sets per program</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Configurable call schedules and time windows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Adjustable alert thresholds and escalation rules</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Bulk patient import via CSV</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Enterprise throughput: 4,000+ calls per day</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-100">Multi-location and multi-team support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Final CTA */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Patient Engagement?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              See how Positive Check can help your team reach more patients, catch problems earlier,
              and deliver measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <RequestDemoModal>
                <Button className="bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white px-8 py-4 text-lg font-bold">
                  REQUEST DEMO
                </Button>
              </RequestDemoModal>
              <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-bold">
                <Link href="/contact">CONTACT US</Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#e879f9]" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e879f9]" />
                <span>No Apps or Devices Needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#e879f9]" />
                <span>Built for Healthcare</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#e879f9]" />
                <span>Real-Time Alerts & Analytics</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
