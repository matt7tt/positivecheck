import type { Metadata } from 'next'
import { AiPatientOutreachGlp1Post, GLP1_OUTREACH_FAQ, GLP1_OUTREACH_IMAGE_ALT } from '@/components/blog-posts/ai-patient-outreach-glp-1-clinics'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { GLP1_OUTREACH_POST as post } from '@/lib/blog-posts'
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from '@/lib/schema'
import { pageTitle } from '@/lib/page-title'

const path = `/blog/${post.slug}`
const url = `${SITE_URL}${path}`
const seoTitle = 'AI Patient Outreach for GLP-1 Clinics'

export const metadata: Metadata = {
  title: pageTitle(seoTitle),
  description: post.description,
  alternates: { canonical: path },
  openGraph: {
    title: seoTitle,
    description: post.description,
    url: path,
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    images: [{ url: post.image, width: 1280, height: 720, alt: GLP1_OUTREACH_IMAGE_ALT }],
  },
  twitter: { card: 'summary_large_image', title: seoTitle, description: post.description, images: [post.image] },
}

export default function AiPatientOutreachGlp1Page() {
  const schemas = [
    buildBreadcrumbSchema([{ name: 'Home', url: SITE_URL }, { name: 'Blog', url: `${SITE_URL}/blog` }, { name: post.title, url }]),
    buildArticleSchema({ type: 'BlogPosting', headline: post.title, description: post.description, url, image: `${SITE_URL}${post.image}`, datePublished: post.datePublished, dateModified: post.dateModified, articleSection: post.articleSection, keywords: post.keywords }),
    buildFAQSchema(GLP1_OUTREACH_FAQ),
  ]
  return <div className="min-h-screen bg-white">
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />)}
    <PublicHeader currentPage="blog" />
    <main className="mx-auto max-w-4xl px-6 py-14"><AiPatientOutreachGlp1Post /></main>
    <PublicFooter />
  </div>
}
