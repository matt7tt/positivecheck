import type { Metadata } from 'next'
import { IntroducingAiCareAssistantPost, AI_CARE_ASSISTANT_FAQ, AI_CARE_ASSISTANT_IMAGE_ALT } from '@/components/blog-posts/introducing-ai-care-assistant'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { AI_CARE_ASSISTANT_POST as post } from '@/lib/blog-posts'
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from '@/lib/schema'
import { pageTitle } from '@/lib/page-title'

const path = `/blog/${post.slug}`
const url = `${SITE_URL}${path}`
const seoTitle = 'How to Introduce an AI Care Assistant to Patients'

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
    images: [{ url: post.image, width: 2048, height: 2048, alt: AI_CARE_ASSISTANT_IMAGE_ALT }],
  },
  twitter: { card: 'summary_large_image', title: seoTitle, description: post.description, images: [post.image] },
}

export default function IntroducingAiCareAssistantPage() {
  const schemas = [
    buildBreadcrumbSchema([{ name: 'Home', url: SITE_URL }, { name: 'Blog', url: `${SITE_URL}/blog` }, { name: post.title, url }]),
    buildArticleSchema({ type: 'BlogPosting', headline: post.title, description: post.description, url, image: `${SITE_URL}${post.image}`, datePublished: post.datePublished, dateModified: post.dateModified, articleSection: post.articleSection, keywords: post.keywords }),
    buildFAQSchema(AI_CARE_ASSISTANT_FAQ),
  ]
  return <div className="min-h-screen bg-white">
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />)}
    <PublicHeader currentPage="blog" />
    <main className="mx-auto max-w-4xl px-6 py-14"><IntroducingAiCareAssistantPost /></main>
    <PublicFooter />
  </div>
}
