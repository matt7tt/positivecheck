import Link from 'next/link'
import { alertPriorityLevels, flaggedTopics, monthlyOperationalStats, operationalStatsSource } from '@/lib/operational-stats'

export function MonthlyOutreachStats() {
  return <div>
    <dl aria-label="Reported monthly outreach" className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-gray-200 pt-6">
      {monthlyOperationalStats.map(stat => <div key={stat.label} className="flex flex-col">
        <dt className="order-2 text-xs text-gray-600 sm:text-sm">{stat.label}</dt>
        <dd className="order-1 mb-1 text-2xl font-bold text-gray-900 sm:text-3xl">{stat.value}</dd>
      </div>)}
    </dl>
    <p className="mt-4 text-xs leading-relaxed text-gray-500">{operationalStatsSource} <a href="#operational-reporting-notes" className="text-purple-700 underline">Reporting notes</a>.</p>
  </div>
}

export function OperationalAlertProof() {
  return <section aria-labelledby="operational-alert-heading" className="bg-white px-6 py-16">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-700">From outreach to staff follow-up</p>
      <h2 id="operational-alert-heading" className="mb-4 text-3xl font-bold text-gray-900">What Lola flags for care teams</h2>
      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-600">Conversations can surface symptoms, medication problems and practical requests—including concerns patients raise beyond the standard questions. Your care team reviews the flagged information and decides what action to take.</p>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-6">
          <h3 className="mb-5 text-xl font-semibold text-gray-900">Selected topics flagged</h3>
          <dl className="space-y-5">{flaggedTopics.map(topic => <div key={topic.label} className="flex items-start justify-between gap-5">
            <dt className="text-gray-700">{topic.label}{'detail' in topic && <span className="mt-1 block text-sm text-gray-500">{topic.detail}</span>}</dt>
            <dd className="shrink-0 text-2xl font-bold text-purple-800">{topic.percent}%</dd>
          </div>)}</dl>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">Selected reported categories, not a complete breakdown. Percentages are shown as supplied and are not normalized to 100%.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Four levels of alert priority</h3>
          <p className="mb-5 leading-relaxed text-gray-600">Alerts are triaged into four levels so care teams can focus on the most urgent patients first.</p>
          <dl className="grid grid-cols-2 gap-5">{alertPriorityLevels.map(level => <div key={level.label} className="rounded-lg bg-gray-50 p-4">
            <dt className="font-semibold text-gray-700">{level.label}</dt>
            <dd className="mt-1 text-2xl font-bold text-gray-900">{level.percent}%</dd>
            {level.detail && <dd className="mt-1 text-sm text-gray-600">{level.detail}</dd>}
          </div>)}</dl>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">Priority levels describe flagged alerts—not diagnoses, confirmed emergencies or completed clinical interventions. Clinical decisions and follow-up remain with your team.</p>
        </div>
      </div>
      <div id="operational-reporting-notes" className="mt-8 scroll-mt-24 border-t pt-6 text-sm leading-relaxed text-gray-600">
        <h3 className="mb-2 font-semibold text-gray-900">Reporting notes</h3>
        <p>{operationalStatsSource} These first-party figures describe reported outreach and alert activity, not independently audited clinical outcomes or guaranteed results for an individual practice. The supply date is not a measurement period; cohort, observation dates and detailed counting methodology are not specified here. Topic percentages and priority levels are separate views and should not be combined into patient counts.</p>
        <p className="mt-3">For a separate, earlier dataset, <Link href="/case-studies/scaling-patient-engagement" className="text-purple-700 underline">read the July 2025–February 2026 implementation study and its reporting limitations</Link>. That study is not the source of the monthly figures above.</p>
      </div>
    </div>
  </section>
}
