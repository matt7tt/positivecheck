import type { Metadata } from 'next'
import { AiPatientCallsPost, AI_PATIENT_CALLS_FAQ, AI_PATIENT_CALLS_IMAGE_ALT } from '@/components/blog-posts/ai-patient-calls-sms'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { AI_PATIENT_CALLS_POST as post } from '@/lib/blog-posts'
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from '@/lib/schema'

const path = `/blog/${post.slug}`
const url = `${SITE_URL}${path}`

export const metadata: Metadata = {
  title: `${post.title} | Positive Check`,
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
    images: [{ url: post.image, width: 640, height: 427, alt: AI_PATIENT_CALLS_IMAGE_ALT }],
  },
  twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [post.image] },
}

export default function AiPatientCallsPage() {
  const schemas = [
    buildBreadcrumbSchema([{ name: 'Home', url: SITE_URL }, { name: 'Blog', url: `${SITE_URL}/blog` }, { name: post.title, url }]),
    buildArticleSchema({ type: 'BlogPosting', headline: post.title, description: post.description, url, image: `${SITE_URL}${post.image}`, datePublished: post.datePublished, dateModified: post.dateModified, articleSection: post.articleSection, keywords: post.keywords }),
    buildFAQSchema(AI_PATIENT_CALLS_FAQ),
  ]
  return <div className="min-h-screen bg-white">
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />)}
    <PublicHeader currentPage="blog" />
    <main className="mx-auto max-w-4xl px-6 py-14"><AiPatientCallsPost /></main>
    <PublicFooter />
  </div>
}
