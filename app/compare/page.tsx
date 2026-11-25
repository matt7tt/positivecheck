import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { StructuredData, buildBreadcrumbSchema } from '@/components/structured-data'
import { pageTitle } from '@/lib/page-title'

const title = 'AI Patient Outreach Vendor Comparisons'
const description = 'Compare Positive Check with other AI patient outreach platforms by workflow, care programs, channels and integration needs.'
export const metadata: Metadata = {
  title: pageTitle(title), description, alternates: { canonical: '/compare' },
  openGraph: { title: pageTitle(title), description, url: '/compare', type: 'website' },
  twitter: { card: 'summary_large_image', title: pageTitle(title), description, images: ['/images/admin-console-dashboard-new.png'] },
}

export default function VendorComparisonsPage() {
  return <>
    <StructuredData id="vendor-comparisons-breadcrumb" data={buildBreadcrumbSchema([
      { name: 'Home', url: 'https://www.positivecheck.com' },
      { name: 'Vendor comparisons', url: 'https://www.positivecheck.com/compare' },
    ])} />
    <PublicHeader currentPage="platform" />
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <Link href="/resources" className="font-semibold text-purple-700 underline">Provider resources</Link>
      <h1 className="my-6 text-4xl font-bold leading-tight text-pc-navy md:text-5xl">{title}</h1>
      <p className="text-lg leading-relaxed text-gray-700">Compare platforms around the work your team needs to do: recurring care check-ins, patient access, front office outreach and staff handoffs.</p>
      <p className="mt-5 text-sm leading-relaxed text-gray-600">These are Positive Check-authored comparisons based on public materials, not independent benchmarks. Features change and vary by configuration; confirm details with each vendor.</p>
      <Link href="/compare/positive-check-vs-hyro" className="mt-8 block rounded-lg border border-gray-200 p-6 transition-colors hover:border-purple-400">
        <h2 className="mb-3 text-2xl font-semibold text-pc-navy">Positive Check vs Hyro</h2>
        <p className="leading-relaxed text-gray-700">Compare recurring wellness outreach and patient access workflows, including channels, documentation, care programs and integrations.</p>
        <span className="mt-4 block font-semibold text-purple-700">Read the comparison →</span>
      </Link>
      <p className="mt-8 leading-relaxed text-gray-700">Evaluating how to organize outreach? Explore our <Link href="/resources/compare" className="text-purple-700 underline">care outreach approach comparisons</Link> for program and staffing choices.</p>
    </main>
    <PublicFooter />
  </>
}
