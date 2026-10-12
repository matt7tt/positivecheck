import Link from 'next/link'
import { solutionGroups } from '@/lib/solution-catalog'

export function PatientJourney() {
  return <section aria-labelledby="patient-journey-heading" className="bg-slate-50 px-6 py-14">
    <div className="mx-auto max-w-6xl">
      <h2 id="patient-journey-heading" className="mb-4 text-3xl font-bold text-gray-900">From the first inquiry to ongoing care</h2>
      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-700">Lola supports calls and SMS across two sides of a practice. Your staff own scheduling commitments, patient follow-up and clinical decisions.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {[solutionGroups[1], solutionGroups[0]].map(group => <section key={group.name} className="rounded-xl border bg-white p-6">
          <p className="mb-2 text-sm font-semibold text-purple-700">{group.name === 'Care Management' ? 'For care managers and clinical directors' : 'For practice managers and front office teams'}</p>
          <h3 className="mb-3 text-2xl font-bold">{group.name}</h3>
          <p className="mb-4 leading-relaxed text-gray-700">{group.name === 'Care Management' ? 'Support routine check-ins, summaries and care-team handoffs for RPM, CCM and post-discharge programs.' : 'Respond to new inquiries, support scheduling and confirmations, send reminders and deliver operational notifications.'}</p>
          <ul className="space-y-3">{group.items.map(item => <li key={item.href}><Link href={item.href} className="text-purple-700 underline underline-offset-4">{item.name}</Link></li>)}</ul>
        </section>)}
      </div>
    </div>
  </section>
}
