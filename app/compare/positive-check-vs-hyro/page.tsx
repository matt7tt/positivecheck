import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { ContentConversionCta } from '@/components/content-conversion-cta'
import { StructuredData, buildBreadcrumbSchema, buildFAQSchema } from '@/components/structured-data'
import { pageTitle } from '@/lib/page-title'
import { comparisonIntro, comparisonAudience, comparisonDifferences, comparisonRows, comparisonFaqs } from '@/lib/hyro-comparison'

const title = 'Positive Check vs Hyro: AI Patient Outreach Compared'
const description = 'Compare Positive Check and Hyro for AI patient calls and SMS: outbound care management check-ins, patient access, integrations and staff handoffs.'
const url = 'https://www.positivecheck.com/compare/positive-check-vs-hyro'
export const metadata: Metadata = {
  title: pageTitle(title), description, alternates: { canonical: url },
  openGraph: { title: pageTitle(title), description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title: pageTitle(title), description, images: ['/images/admin-console-dashboard-new.png'] },
}
const related = [
  ['/platform', 'Positive Check platform'],
  ['/solutions/remote-patient-monitoring', 'Remote Patient Monitoring'],
  ['/solutions/chronic-care-management', 'Chronic Care Management'],
  ['/solutions/post-discharge-follow-up', 'Post-discharge follow-up'],
  ['/solutions#front-office', 'Front office outreach'],
  ['/resources/implementation-guide', 'Integration and implementation guide'],
]
const sources = [
  ['https://www.hyro.ai/', 'Hyro homepage — patient access, channels and integrations'],
  ['https://www.hyro.ai/blog/introducing-proactive-px-armr/', 'Hyro original Proactive Px announcement — September 3, 2025'],
  ['https://www.prnewswire.com/news-releases/hyro-transforms-patient-care-with-ai-powered-assistants-and-ciscos-webex-contact-center-302285253.html', 'Hyro announcement — Cisco Webex Contact Center integration'],
  ['https://medcitynews.com/2025/10/conversational-ai-agents/', 'MedCity News — customers and use cases, October 2025'],
  ['https://techcrunch.com/2023/05/31/hyro-secures-30m-for-its-ai-powered-healthcare-focused-conversational-platform', 'TechCrunch — IVR positioning, May 2023'],
  ['https://hitconsultant.net/2025/09/18/sutter-health-to-deploy-hyros-ai-agents-optimizing-patient-experience', 'HIT Consultant — Sutter Health rollout, September 2025'],
  ['https://cxm.world/customer-experience/hyro-deploys-bilingual-voice-ai-at-tanner-health-to-resolve-patient-calls-without-hold-times/', 'CXM — Tanner Health bilingual voice deployment, June 2026'],
]

export default function HyroComparisonPage() {
  return <>
    <StructuredData id="hyro-comparison-breadcrumb" data={buildBreadcrumbSchema([
      { name: 'Home', url: 'https://www.positivecheck.com' },
      { name: 'Vendor comparisons', url: 'https://www.positivecheck.com/compare' },
      { name: 'Positive Check vs Hyro', url },
    ])} />
    <StructuredData id="hyro-comparison-faq" data={buildFAQSchema(comparisonFaqs)} />
    <PublicHeader currentPage="platform" />
    <main className="mx-auto max-w-6xl px-6 py-14 text-gray-900">
      <Link href="/compare" className="font-semibold text-purple-700 underline">Vendor comparisons</Link>
      <h1 className="my-6 text-3xl font-bold leading-tight text-pc-navy md:text-5xl">{title}</h1>
      {comparisonIntro.map((text, i) => <p key={text} className={i === 2 ? 'mt-5 max-w-4xl text-sm leading-relaxed text-gray-600' : 'mt-5 max-w-4xl text-lg leading-relaxed text-gray-700'}>{text}</p>)}
      <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-purple-700 underline">
        <a href="#audience">Who each is for</a><a href="#differences">Key differences</a><a href="#comparison">At a glance</a><a href="#faq">FAQs</a><a href="#sources">Sources</a>
      </nav>
      <section id="audience" className="mt-12 scroll-mt-24">
        <h2 className="mb-5 text-2xl font-bold text-pc-navy">Who each is for</h2>
        {comparisonAudience.map(text => <p key={text} className="mb-4 max-w-4xl leading-relaxed text-gray-700">{text}</p>)}
      </section>
      <section id="differences" className="mt-12 scroll-mt-24">
        <h2 className="mb-5 text-2xl font-bold text-pc-navy">Key differences</h2>
        <div className="grid gap-6 md:grid-cols-2">{comparisonDifferences.map(text => {
          const split = text.indexOf(':')
          return <section key={text} className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-3 text-lg font-semibold">{text.slice(0, split)}</h3>
            <p className="leading-relaxed text-gray-700">{text.slice(split + 2)}</p>
          </section>
        })}</div>
      </section>
      <section id="comparison" className="mt-12 scroll-mt-24">
        <h2 className="mb-5 text-2xl font-bold text-pc-navy">Positive Check vs Hyro at a glance</h2>
        <div className="overflow-x-auto rounded-lg border" role="region" aria-label="Positive Check and Hyro comparison" tabIndex={0}>
          <table className="w-full min-w-[680px] text-left text-sm">
            <caption className="sr-only">Positive Check and Hyro features and positioning, November 2026</caption>
            <thead className="bg-purple-50"><tr>{['Consideration', 'Positive Check', 'Hyro'].map(h => <th key={h} scope="col" className="p-4">{h}</th>)}</tr></thead>
            <tbody>{comparisonRows.map(([label, ...cells]) => <tr key={label} className="border-t even:bg-gray-50"><th scope="row" className="w-1/5 p-4 align-top">{label}</th>{cells.map(text => <td key={text} className="w-2/5 p-4 align-top leading-relaxed text-gray-700">{text}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">Care programs here refers to recurring RPM and CCM check-ins. Hyro also describes post-discharge outreach. Sources: Positive Check product pages and the public materials <a href="#sources" className="text-purple-700 underline">listed below</a>. Confirm current scope and configuration with each vendor.</p>
      </section>
      <ContentConversionCta source="hyro_comparison" title="Compare one real patient outreach workflow" description="Bring your outreach goals, patient volume and integration needs to a demo. Review the call, the documentation and the handoff your staff would use." buttonText="See the workflow" secondaryText="Plan your integration" secondaryHref="/resources/implementation-guide" secondaryCtaName="implementation_guide" />
      <section id="faq" className="mt-12 scroll-mt-24">
        <h2 className="mb-6 text-2xl font-bold text-pc-navy">Frequently asked questions</h2>
        <div className="space-y-6">{comparisonFaqs.map(faq => <section key={faq.question}><h3 className="mb-2 text-lg font-semibold">{faq.question}</h3><p className="max-w-4xl leading-relaxed text-gray-700">{faq.answer}</p></section>)}</div>
      </section>
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-pc-navy">Explore Positive Check</h2>
        <ul className="list-disc space-y-2 pl-5">{related.map(([href, label]) => <li key={href}><Link href={href} className="text-purple-700 underline">{label}</Link></li>)}</ul>
      </section>
      <section id="sources" className="mt-12 scroll-mt-24">
        <h2 className="mb-4 text-2xl font-bold text-pc-navy">Sources and scope</h2>
        <p className="mb-4 max-w-4xl leading-relaxed text-gray-700">Positive Check information is based on the product and implementation pages linked above. Hyro information is drawn from its public materials and the reporting below. This is a comparison of selected workflows, not an exhaustive feature or integration inventory.</p>
        <ul className="list-disc space-y-2 pl-5">{sources.map(([href, label]) => <li key={href}><a href={href} className="text-purple-700 underline">{label}</a></li>)}</ul>
      </section>
      <p className="mt-8 text-sm text-gray-500">Written by Positive Check. Updated November 25, 2026.</p>
    </main>
    <PublicFooter />
  </>
}
