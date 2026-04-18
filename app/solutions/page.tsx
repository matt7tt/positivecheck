import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, HeartPulse, Activity, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solutions for Healthcare Providers | Positive Check',
  description: 'Automate RPM, CCM, and post-discharge follow-up with AI-powered patient wellness calls. Support Medicare billing (CPT 99457, 99490, 99495) at scale.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions for Healthcare Providers | Positive Check',
    description: 'Automate RPM, CCM, and post-discharge follow-up with AI-powered patient wellness calls.',
    url: '/solutions',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check solutions dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions for Healthcare Providers | Positive Check',
    description: 'Automate RPM, CCM, and post-discharge follow-up with AI-powered patient wellness calls.',
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
      'Satisfy CMS interactive communication requirements with AI-powered daily wellness calls. Supports CPT 99457, 99458, and 99470 — generating $93+/patient/month.',
    cpts: ['CPT 99457', 'CPT 99458', 'CPT 99470'],
  },
  {
    slug: 'chronic-care-management',
    icon: HeartPulse,
    eyebrow: 'CCM',
    title: 'Chronic Care Management',
    description:
      'Daily touchpoints for CCM patients — medication adherence, care plan follow-up, and documentation ready for CPT 99490, 99439, and 99487 billing ($66–$144/patient/month).',
    cpts: ['CPT 99490', 'CPT 99439', 'CPT 99487'],
  },
  {
    slug: 'post-discharge-follow-up',
    icon: PhoneCall,
    eyebrow: 'TCM',
    title: 'Post-Discharge Follow-Up',
    description:
      'Contact patients within 24–48 hours of discharge to catch complications early. Supports CPT 99495 ($178/patient) and reduces 30-day readmission risk.',
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://positivecheck.com' },
              { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://positivecheck.com/solutions' },
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
            url: 'https://positivecheck.com/solutions',
            description:
              'Three billable programs automated with AI wellness calls: Remote Patient Monitoring, Chronic Care Management, and Post-Discharge Follow-Up.',
            hasPart: solutions.map((s) => ({
              '@type': 'Service',
              name: s.title,
              url: `https://positivecheck.com/solutions/${s.slug}`,
              description: s.description,
            })),
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />

        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Solutions</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Three Billable Programs, One Platform
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
                Positive Check automates the patient engagement your RPM, CCM, and post-discharge
                programs need — so your team can focus on the patients who need hands-on care.
              </p>
            </div>
          </section>

          <section className="px-6 py-16 md:py-24 bg-gray-50">
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
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h2>
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

          <section className="px-6 py-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Not sure which fits your program?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Talk to our team about mapping your patient population to the right billable program —
                or combining all three.
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
