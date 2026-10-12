import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { frontOfficeContent } from '@/lib/front-office-content'
import { frontOfficeSolutions } from '@/lib/solution-catalog'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

type Props = { params: Promise<{ task: string }> }
function getContent(task: string) {
  return Object.hasOwn(frontOfficeContent, task) ? frontOfficeContent[task as keyof typeof frontOfficeContent] : undefined
}
export const dynamicParams = false
export function generateStaticParams() { return frontOfficeSolutions.map(({ slug }) => ({ task: slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { task } = await params
  const content = getContent(task)
  if (!content) return {}
  const url = `/solutions/front-office/${task}`
  return { title: `${content.title} | Positive Check`, description: content.description, alternates: { canonical: url }, openGraph: { title: content.title, description: content.description, url, type: 'website' }, twitter: { card: 'summary_large_image', title: content.title, description: content.description, images: ['/images/admin-console-dashboard-new.png'] } }
}
export default async function FrontOfficeTaskPage({ params }: Props) {
  const { task } = await params
  const content = getContent(task)
  if (!content) notFound()
  const url = `https://www.positivecheck.com/solutions/front-office/${task}`
  return <>
    <StructuredData id="front-office-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', url: 'https://www.positivecheck.com' }, { name: 'Solutions', url: 'https://www.positivecheck.com/solutions' }, { name: content.title, url }])} />
    <StructuredData id="front-office-faq" data={buildFAQSchema([...content.faqs])} />
    <StructuredData id="front-office-service" data={{ '@context': 'https://schema.org', '@type': 'Service', name: content.title, description: content.description, url, provider: { '@type': 'Organization', name: 'Positive Check', url: 'https://www.positivecheck.com' } }} />
    <PublicHeader currentPage="solutions" />
    <main>
      <section className="bg-purple-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/solutions#front-office" className="font-semibold text-purple-700 underline">Front Office · For practice managers</Link>
          <h1 className="my-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{content.title}</h1>
          <p className="text-xl leading-relaxed text-gray-700">{content.intro}</p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-4 text-2xl font-bold">Where this fits your practice</h2>
        <p className="leading-relaxed text-gray-700">{content.fit}</p>
        <ContentConversionCta source={`front_office_${task.replaceAll('-', '_')}`} title="Evaluate the workflow with your front office team" description="Bring one task, your current process and integration questions to a 15-minute demo. Please use synthetic examples and do not share patient information." buttonText="Request a Front Office demo" secondaryText="Compare staff and reminder tools" secondaryHref="/solutions/front-office/compare" secondaryCtaName="compare_front_office" />
        <h2 className="mb-6 text-2xl font-bold">Plan the workflow and handoffs</h2>
        <ol className="space-y-6">{content.steps.map(([title, text], i) => <li key={title} className="rounded-lg border p-6"><h3 className="mb-3 text-xl font-semibold">{i + 1}. {title}</h3><p className="leading-relaxed text-gray-700">{text}</p></li>)}</ol>
        <h2 className="mb-4 mt-10 text-2xl font-bold">Measure outcomes, not just activity</h2>
        <p className="leading-relaxed text-gray-700">{content.measure}</p>
        <h2 className="mb-6 mt-10 text-2xl font-bold">Questions to answer before launch</h2>
        <div className="space-y-6">{content.faqs.map(faq => <section key={faq.question}><h3 className="mb-2 text-lg font-semibold">{faq.question}</h3><p className="leading-relaxed text-gray-700">{faq.answer}</p></section>)}</div>
        <h2 className="mb-4 mt-10 text-2xl font-bold">Related Front Office tasks</h2>
        <ul className="list-disc space-y-2 pl-5">{frontOfficeSolutions.filter(s => s.slug !== task).map(s => <li key={s.slug}><Link href={`/solutions/front-office/${s.slug}`} className="text-purple-700 underline">{s.name}</Link></li>)}</ul>
        <p className="mt-6 text-gray-700">Supporting ongoing care too? Explore <Link href="/solutions#care-management" className="text-purple-700 underline">Care Management for RPM, CCM and post-discharge follow-up</Link>, or review the <Link href="/resources/implementation-guide" className="text-purple-700 underline">implementation guide</Link>.</p>
        <p className="mt-8 text-sm text-gray-500">Published by Positive Check. Workflow content updated October 9, 2026.</p>
      </div>
    </main>
    <PublicFooter />
  </>
}
