import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ClipboardList, Code2, Database, LayoutDashboard, ShieldCheck, Webhook } from 'lucide-react'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { Button } from '@/components/ui/button'
import { StructuredData, buildBreadcrumbSchema } from '@/components/structured-data'

const title = 'Integration & Implementation Guide | Positive Check'
const description = 'Plan your Positive Check rollout: explore patient imports, REST API access and webhooks, prepare your care team, and define a focused patient outreach pilot.'
const pageUrl = 'https://www.positivecheck.com/resources/implementation-guide'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/resources/implementation-guide' },
  openGraph: { title, description, url: pageUrl, type: 'website', siteName: 'Positive Check' },
  twitter: { card: 'summary', title, description },
}

const connectionOptions = [
  {
    title: 'Start with the provider dashboard',
    icon: LayoutDashboard,
    description: 'Manage patients, schedules, call records and alerts in the provider console. Discuss a dashboard-led pilot if you want to evaluate the workflow before scoping a custom connection.',
    prepare: 'Identify who will enroll patients, review results and respond to alerts.',
  },
  {
    title: 'Plan a bulk patient import',
    icon: Database,
    description: 'Bulk patient import is available in the platform. Agree the import format and field mapping with the team before preparing a production roster.',
    prepare: 'Confirm patient identifiers, contact details, preferred language and call windows with your implementation contact.',
  },
  {
    title: 'Connect through the REST API',
    icon: Code2,
    description: 'The platform offers API access to patients, call records and transcripts, conversations, alerts and analytics, with API-key authentication and per-key rate limits.',
    prepare: 'Request the current OpenAPI documentation and agree access, field mappings and the data your workflow needs.',
  },
  {
    title: 'Scope incoming events and exports',
    icon: Webhook,
    description: 'The platform supports signed webhooks to receive events from your systems, plus structured report exports with de-identified options for sharing.',
    prepare: 'Agree supported events, signature verification, delivery handling and report fields before implementation.',
  },
]

const rolloutSteps = [
  {
    title: 'Define one workflow',
    text: 'Choose a care program and a focused patient cohort. Agree what a successful pilot would show, such as contact completion, time spent reviewing calls or alert response time.',
    owner: 'Provider operations lead and Positive Check',
  },
  {
    title: 'Agree data access and responsibilities',
    text: 'Review the Business Associate Agreement and security requirements before exchanging patient information. Identify your clinical escalation owner, access roles and approved data-transfer method.',
    owner: 'Provider clinical, IT and security leads with Positive Check',
  },
  {
    title: 'Configure and test the workflow',
    text: 'Review call questions, cadence, languages, call windows and escalation rules. Start with test records; check imports or API mappings, summaries, notifications and handoffs before enrolling the pilot cohort.',
    owner: 'Positive Check with provider clinical and integration leads',
  },
  {
    title: 'Prepare staff and patients',
    text: 'Agree staff training and patient introduction materials. Make sure the care team knows how to review calls, respond to alerts and handle a missed check-in, and that patients know what to expect from Lola.',
    owner: 'Provider care team with Positive Check',
  },
  {
    title: 'Launch, review and expand',
    text: 'Set a pilot review date and compare results with your starting point. Adjust scripts, call windows and escalation routing before agreeing a wider rollout.',
    owner: 'Provider program owner and Positive Check',
  },
]

export default function ImplementationGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData
        id="implementation-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', url: 'https://www.positivecheck.com' },
          { name: 'Resources', url: 'https://www.positivecheck.com/resources' },
          { name: 'Integration & Implementation Guide', url: pageUrl },
        ])}
      />
      <PublicHeader currentPage="resources" />
      <main>
        <section className="bg-[#1a2642] px-6 py-16 md:py-20 text-white">
          <div className="max-w-5xl mx-auto">
            <Link href="/resources" className="text-sm text-purple-200 underline underline-offset-4">Back to resources</Link>
            <p className="mt-8 mb-4 text-sm font-semibold uppercase tracking-widest text-purple-200">From evaluation to launch</p>
            <h1 className="max-w-4xl text-4xl md:text-5xl font-bold leading-tight">Integration & Implementation Guide</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-200">
              Build a patient outreach workflow your team can use with confidence.
              Explore connection options, prepare the right people and data, and plan a focused pilot with Positive Check.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <RequestDemoModal source="implementation_guide_hero">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white min-h-[44px] px-6">Discuss your implementation <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </RequestDemoModal>
              <a href="#rollout" className="inline-flex min-h-[44px] items-center text-white underline underline-offset-4">See the rollout checklist</a>
            </div>
          </div>
        </section>

        <section aria-labelledby="connection-heading" className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <h2 id="connection-heading" className="text-3xl font-bold text-[#1a2642]">Choose how your team connects</h2>
          <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
            Start with the platform workflow that fits your team. For an EHR or another external system,
            confirm compatibility and the scope of any custom work during your technical review.
            API availability does not mean a prebuilt connector exists for every system.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {connectionOptions.map(({ title: optionTitle, icon: Icon, description: optionDescription, prepare }) => (
              <article key={optionTitle} className="rounded-xl border border-gray-200 p-6">
                <Icon aria-hidden="true" className="h-7 w-7 text-purple-700 mb-4" />
                <h3 className="text-xl font-bold text-[#1a2642]">{optionTitle}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{optionDescription}</p>
                <p className="mt-4 border-t pt-4 text-sm text-gray-600 leading-relaxed"><strong className="text-[#1a2642]">Prepare:</strong> {prepare}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            <Link href="/platform" className="text-purple-700 underline underline-offset-4">Explore the platform capabilities</Link>
            {' '}or <Link href="/contact" className="text-purple-700 underline underline-offset-4">request API documentation and an integration review</Link>.
          </p>
        </section>

        <section id="rollout" aria-labelledby="rollout-heading" className="bg-gray-50 px-6 py-14 md:py-20 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <h2 id="rollout-heading" className="text-3xl font-bold text-[#1a2642]">A practical rollout checklist</h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">Use these steps to plan your launch together. Timing depends on your data readiness, security review and integration scope; agree milestones during scoping.</p>
            <ol className="mt-8 space-y-5">
              {rolloutSteps.map((step, index) => (
                <li key={step.title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4 md:gap-6">
                  <span aria-hidden="true" className="shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2642]">{step.title}</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">{step.text}</p>
                    <p className="mt-3 text-sm text-gray-600"><strong>People to involve:</strong> {step.owner}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="prepare-heading" className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <ClipboardList aria-hidden="true" className="h-8 w-8 text-purple-700 mb-4" />
              <h2 id="prepare-heading" className="text-2xl font-bold text-[#1a2642]">Bring these details to your first conversation</h2>
              <ul className="mt-5 list-disc pl-5 space-y-3 text-gray-700">
                <li>Your care program, approximate cohort size and current outreach process.</li>
                <li>The systems you use and where you want call results to appear.</li>
                <li>Your preferred languages, contact cadence and staff coverage.</li>
                <li>Your clinical escalation contact and IT or security contact.</li>
                <li>Your target launch window and the measures that matter to your team.</li>
              </ul>
            </div>
            <aside className="rounded-xl bg-purple-50 border border-purple-100 p-6 md:p-8">
              <ShieldCheck aria-hidden="true" className="h-8 w-8 text-purple-700 mb-4" />
              <h2 className="text-2xl font-bold text-[#1a2642]">Agree the safeguards before launch</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">Review access controls, patient data handling and clinical escalation responsibilities with your team. Use sample data for early scoping, and agree a secure transfer process before sharing patient records.</p>
              <p className="mt-4 text-gray-700 leading-relaxed">Please keep patient information out of public demo and contact forms.</p>
              <Link href="/about/clinical-standards" className="inline-block mt-5 font-semibold text-purple-800 underline underline-offset-4">Read our Security & Clinical Standards</Link>
            </aside>
          </div>
        </section>

        <section className="bg-[#1a2642] px-6 py-14 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Plan your first patient outreach workflow</h2>
            <p className="mt-4 text-gray-200 leading-relaxed">Walk through the platform with us and discuss the setup, integration questions and pilot goals that matter to your organization.</p>
            <RequestDemoModal source="implementation_guide_footer">
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white min-h-[44px] px-6">Request a workflow demo</Button>
            </RequestDemoModal>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
