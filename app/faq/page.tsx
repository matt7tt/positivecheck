import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { faqSchema, generateBreadcrumbSchema, StructuredData } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Positive Check',
  description:
    'Answers about Positive Check: how AI wellness calls work, HIPAA compliance, CPT billing support, patient experience, and how we integrate with your care team.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | Positive Check',
    description:
      'Answers about AI wellness calls, HIPAA compliance, CPT billing support, and patient experience.',
    url: '/faq',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/admin-console-dashboard-new.png', width: 1200, height: 630, alt: 'Positive Check FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Positive Check',
    description: 'Answers about AI wellness calls, HIPAA compliance, and CPT billing support.',
    images: ['/images/admin-console-dashboard-new.png'],
  },
}

const faqs = faqSchema.mainEntity.map((q) => ({
  question: q.name,
  answer: q.acceptedAnswer.text,
}))

const breadcrumb = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'FAQ', url: 'https://positivecheck.com/faq' },
])

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema} id="faq-page-schema" />
      <StructuredData data={breadcrumb} id="faq-breadcrumb-schema" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="platform" />

        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Everything you need to know about Positive Check's AI-powered patient wellness calls.
              </p>
            </div>
          </section>

          <section className="px-6 py-16 md:py-20 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {faqs.map((f, i) => (
                  <article key={i} className="border-b border-gray-200 pb-8 last:border-0">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{f.question}</h2>
                    <p className="text-gray-600 leading-relaxed">{f.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team is happy to walk through how Positive Check can fit your program.
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
