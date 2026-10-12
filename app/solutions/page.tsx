import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, HeartPulse, Activity, PhoneCall } from 'lucide-react'
import { frontOfficeSolutions } from '@/lib/solution-catalog'

export const metadata: Metadata = {
  title: 'Solutions for Healthcare Providers | Positive Check',
  description: 'AI calls and SMS for Front Office and Care Management: new patient leads, appointments, reminders, notifications, RPM, CCM and post-discharge follow-up.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions for Healthcare Providers | Positive Check',
    description: 'Explore Front Office and Care Management workflows with AI calls and SMS.',
    url: '/solutions',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check solutions dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions for Healthcare Providers | Positive Check',
    description: 'Explore Front Office and Care Management workflows with AI calls and SMS.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const solutions = [
  {
    slug: 'remote-patient-monitoring',
    icon: Activity,
    eyebrow: 'RPM',
    title: 'Remote Patient Monitoring',
    description:
      'Support practice-owned RPM outreach, documentation, and escalation workflows for CPT 99457, 99458, and 99454.',
    cpts: ['CPT 99457', 'CPT 99458', 'CPT 99454'],
  },
  {
    slug: 'chronic-care-management',
    icon: HeartPulse,
    eyebrow: 'CCM',
    title: 'Chronic Care Management',
    description:
      'Support CCM patient check-ins, care-plan follow-up and staff review. Clinical and billing teams determine which services and documentation qualify.',
    cpts: ['CPT 99490', 'CPT 99439', 'CPT 99487'],
  },
  {
    slug: 'post-discharge-follow-up',
    icon: PhoneCall,
    eyebrow: 'TCM',
    title: 'Post-Discharge Follow-Up',
    description:
      'Support practice-owned post-discharge outreach and care-team handoffs. Your team retains clinical decisions, required follow-up and billing review.',
    cpts: ['CPT 99495'],
  },
]

export default function SolutionsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.positivecheck.com' },
              { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.positivecheck.com/solutions' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Positive Check Solutions for Healthcare Providers',
            url: 'https://www.positivecheck.com/solutions',
            description:
              'AI calls and SMS for Front Office and Care Management workflows.',
            hasPart: [...solutions.map((s) => ({
              '@type': 'Service',
              name: s.title,
              url: `https://www.positivecheck.com/solutions/${s.slug}`,
              description: s.description,
            })), ...frontOfficeSolutions.map(s => ({ '@type': 'Service', name: s.name, url: `https://www.positivecheck.com/solutions/front-office/${s.slug}`, description: s.description }))],
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="solutions" />

        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Solutions</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Front Office and Care Management, One Platform
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
                Support ongoing RPM, CCM and post-discharge outreach—and the front office conversations
                that bring patients into your practice. Lola handles calls and SMS; your team owns decisions and follow-up.
              </p>
            </div>
          </section>

          <section id="care-management" className="scroll-mt-20 px-6 py-16 md:py-24 bg-gray-50">
            <div className="mx-auto mb-8 max-w-6xl"><h2 className="mb-3 text-3xl font-bold">Care Management</h2><p className="text-gray-700">For care managers and clinical directors supporting routine outreach, review and patient follow-up. Lola does not make clinical decisions.</p></div>
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
              {solutions.map((s) => {
                const Icon = s.icon
                return (
                  <Card key={s.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 text-[#d946ef] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-sm uppercase tracking-widest text-[#d946ef] font-semibold mb-2">
                        {s.eyebrow}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                      <p className="text-gray-600 mb-5 leading-relaxed flex-1">{s.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {s.cpts.map((c) => (
                          <span
                            key={c}
                            className="text-xs px-2 py-1 rounded bg-purple-50 text-[#d946ef] font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <Link href={`/solutions/${s.slug}`} className="mt-auto">
                        <Button className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white font-semibold">
                          Learn more <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          <section id="front-office" className="scroll-mt-20 px-6 py-16 bg-white">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-3 text-3xl font-bold">Front Office</h2>
              <p className="mb-8 text-gray-700">For practice managers handling new inquiries, appointments and operational communication. Start with the task your team needs help with.</p>
              <div className="grid gap-6 md:grid-cols-2">{frontOfficeSolutions.map(s => <article key={s.slug} className="rounded-xl border p-6"><h3 className="mb-3 text-2xl font-semibold">{s.name}</h3><p className="mb-5 leading-relaxed text-gray-700">{s.description}</p><Link href={`/solutions/front-office/${s.slug}`} className="font-semibold text-purple-700 underline">Explore {s.name.toLowerCase()}</Link></article>)}</div>
              <p className="mt-6"><Link href="/solutions/front-office/compare" className="text-purple-700 underline">Compare AI outreach, front desk staff and basic reminder tools</Link></p>
            </div>
          </section>
          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Not sure which fits your program?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Bring your front office or care management workflow. We can discuss fit, integration scope and what your team would need to evaluate a pilot.
              </p>
              <Link href="/contact">
                <Button className="bg-[#e879f9] hover:bg-[#d946ef] text-white px-8 py-6 text-lg font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
