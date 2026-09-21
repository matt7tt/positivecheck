import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { StructuredData, buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'

export interface GuideLink { label: string; href: string }
export interface GuideSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  table?: { caption: string; headings: string[]; rows: string[][] }
  links?: GuideLink[]
}
export interface BillingReference {
  id: string
  path: string
  title: string
  seoTitle: string
  description: string
  published: string
  updated: string
  parent: GuideLink
  comparison?: boolean
  summary: string
  sections: GuideSection[]
  faqs: { question: string; answer: string }[]
  sources: GuideLink[]
  related: GuideLink[]
}

const SITE = 'https://www.positivecheck.com'
const IMAGE = `${SITE}/images/admin-console-dashboard-new.png`

export function billingReferenceMetadata(guide: BillingReference): Metadata {
  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical: guide.path },
    openGraph: {
      title: guide.title, description: guide.description, url: guide.path,
      siteName: 'Positive Check', locale: 'en_US', type: 'article',
      images: [{ url: IMAGE, width: 1200, height: 630, alt: guide.title }],
    },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: [IMAGE] },
  }
}

function GuideLinks({ links }: { links: GuideLink[] }) {
  return <ul className="mt-4 space-y-2">{links.map(link => (
    <li key={link.href}><Link href={link.href} className="text-purple-700 underline hover:text-purple-900">{link.label}</Link></li>
  ))}</ul>
}

export function BillingReferenceGuide({ guide }: { guide: BillingReference }) {
  const breadcrumb = [
    { name: 'Home', url: SITE },
    { name: guide.comparison ? 'Resources' : 'Solutions', url: `${SITE}/${guide.comparison ? 'resources' : 'solutions'}` },
    { name: guide.parent.label, url: SITE + guide.parent.href },
    { name: guide.title, url: SITE + guide.path },
  ]
  return (
    <>
      <StructuredData id={`${guide.id}-breadcrumb`} data={buildBreadcrumbSchema(breadcrumb)} />
      <StructuredData id={`${guide.id}-article`} data={buildArticleSchema({
        headline: guide.title, description: guide.description, url: SITE + guide.path,
        image: IMAGE, datePublished: guide.published, dateModified: guide.updated,
      })} />
      <StructuredData id={`${guide.id}-faq`} data={buildFAQSchema(guide.faqs)} />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage={guide.comparison ? 'resources' : 'platform'} />
        <main>
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">{guide.comparison ? 'Comparison' : 'Billing Guide'}</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{guide.title}</h1>
              <p className="text-xl text-purple-100 leading-relaxed">{guide.description}</p>
            </div>
          </section>
          <article className="max-w-3xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">
            <p className="text-sm mb-6">By Positive Check · Updated <time dateTime={guide.updated}>{guide.updated}</time></p>
            <aside className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
              <p>{guide.summary}</p>
            </aside>
            <p className="text-sm mb-8">Educational reference for Medicare fee-for-service workflows, not a claim-level billing determination. Confirm current CPT instructions, payer and Medicare Administrative Contractor (MAC) requirements, setting-specific rules, and applicable edits before billing. Examples below are synthetic, not patient records or payment guarantees.</p>
            <nav aria-label="On this page" className="border-y border-gray-200 py-4 mb-10">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-purple-700 underline">
                {guide.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}
                <li><a href="#common-questions">Common questions</a></li>
              </ul>
            </nav>
            {guide.sections.map(section => (
              <section key={section.id} aria-labelledby={section.id} className="mt-10">
                <h2 id={section.id} className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">{section.title}</h2>
                {section.paragraphs.map(text => <p key={text} className="mb-4">{text}</p>)}
                {section.bullets && <ul className="list-disc pl-6 space-y-2">{section.bullets.map(text => <li key={text}>{text}</li>)}</ul>}
                {section.table && <div className="overflow-x-auto my-5">
                  <table className="w-full text-left border-collapse text-sm">
                    <caption className="text-left font-medium mb-3">{section.table.caption}</caption>
                    <thead className="bg-purple-50"><tr>{section.table.headings.map(text => <th key={text} scope="col" className="p-3 border border-gray-200">{text}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map(row => <tr key={row[0]}>{row.map((text, i) => i === 0
                      ? <th key={i} scope="row" className="p-3 border border-gray-200 font-medium">{text}</th>
                      : <td key={i} className="p-3 border border-gray-200">{text}</td>)}</tr>)}</tbody>
                  </table>
                </div>}
                {section.links && <GuideLinks links={section.links} />}
              </section>
            ))}
            <ContentConversionCta source={`${guide.id.replaceAll('-', '_')}_summary`} title="Review the workflow behind the billing record" description="Bring your eligibility checks, activity logs, and handoff questions. Explore how Positive Check can support outreach while your practice retains clinical and billing responsibility." />
            <section aria-labelledby="common-questions">
              <h2 id="common-questions" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-24">Common questions</h2>
              <div className="space-y-6">{guide.faqs.map(faq => <section key={faq.question}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p>{faq.answer}</p>
              </section>)}</div>
            </section>
            <section aria-labelledby="sources" className="mt-10 border-t border-gray-200 pt-6">
              <h2 id="sources" className="text-xl font-bold text-gray-900">Sources and review scope</h2>
              <p className="mt-3">Source-checked on {guide.updated}. This is an editorial source check, not independent clinical or coding-review sign-off. Published payment amounts must be verified for the service year, locality, setting, and payer; this guide does not promise a national reimbursement amount.</p>
              <GuideLinks links={guide.sources} />
            </section>
            <section aria-labelledby="related-guides" className="mt-10">
              <h2 id="related-guides" className="text-xl font-bold text-gray-900">Related guides and next steps</h2>
              <GuideLinks links={guide.related} />
            </section>
          </article>
        </main>
        <PublicFooter />
      </div>
    </>
  )
}
