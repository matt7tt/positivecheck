import type { Metadata } from 'next'
import { ApcmBilling2026Post, APCM_FAQ } from '@/components/blog-posts/apcm-billing-2026'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { APCM_BILLING_POST as post } from '@/lib/blog-posts'
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from '@/lib/schema'

const path = `/blog/${post.slug}`
const url = `${SITE_URL}${path}`

export const metadata: Metadata = {
  title: 'APCM Billing 2026: G0556, G0557 & G0558 Guide | Positive Check',
  description: post.description,
  alternates: { canonical: path },
  openGraph: {
    title: post.title,
    description: post.description,
    url: path,
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    images: [{ url: post.image, width: 1672, height: 941, alt: 'Three healthcare professionals reviewing a tablet together in a primary care office' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.description,
    images: [post.image],
  },
}

export default function ApcmBilling2026Page() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: post.title, url },
    ]),
    buildArticleSchema({
      type: 'BlogPosting',
      headline: post.title,
      description: post.description,
      url,
      image: `${SITE_URL}${post.image}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      articleSection: post.articleSection,
      keywords: post.keywords,
    }),
    buildFAQSchema(APCM_FAQ),
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      ))}
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <ApcmBilling2026Post />
      </main>
      <PublicFooter />
    </div>
  )
}
