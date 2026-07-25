import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { ImportanceOfCheckingInPost } from "@/components/blog-posts/importance-of-checking-in-care-communities"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'Senior Care Community Check-Ins | Positive Check',
  description: 'Regular check-ins are crucial for ensuring seniors in care communities receive consistent, individualized attention. Learn how automated wellness calls help.',
  alternates: {
    canonical: '/blog/importance-of-checking-in-care-communities',
  },
  openGraph: {
    title: 'Ensuring Seniors in Care Communities Receive Proper Attention',
    description: 'Regular check-ins are crucial for ensuring seniors in care communities receive consistent, individualized attention.',
    url: '/blog/importance-of-checking-in-care-communities',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/senior-care-family-visit.png', width: 1200, height: 630, alt: 'Family visiting senior in care community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ensuring Seniors in Care Communities Receive Proper Attention',
    description: 'Regular check-ins are crucial for ensuring seniors in care communities receive consistent, individualized attention.',
    images: ['/images/senior-care-family-visit.png'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "Why should families check in on seniors living in care communities?",
    answer: "Even the best facilities can fall short in providing consistent, individualized attention. Staff shortages, high patient-to-caregiver ratios, and administrative oversight can lead to gaps in care. Regular family check-ins help monitor physical health, confirm medications are administered correctly, assess emotional and mental well-being, hold care facilities accountable, and catch red flags early.",
  },
  {
    question: "How often should you check in on a loved one in assisted living?",
    answer: "Daily check-ins are ideal, and they don't have to be complicated or time-consuming. A quick five-minute phone or video call can provide insight into a senior's mood, health, and any concerns they might have. In-person visits at different times of the day, when possible, give a clearer picture of their care and environment.",
  },
  {
    question: "What warning signs can regular check-ins help families catch?",
    answer: "Frequent check-ins allow family members to notice signs of potential issues such as unexplained weight loss, bruising, or increased fatigue, which could indicate neglect or medical conditions requiring attention. They also help identify medication errors, loneliness and depression, and early warning signs of neglect, abuse, or poor living conditions before a situation worsens.",
  },
  {
    question: "Can daily check-ins be automated for families who live far away?",
    answer: "Yes. Services like Positive Check can provide daily wellness calls that alert families if their loved one is unwell or in distress. This lets families take an active role in a senior loved one's well-being even from a distance, complementing in-person visits and communication with facility staff.",
  },
]

const POST_URL = `${SITE_URL}/blog/importance-of-checking-in-care-communities`

export default function ImportanceOfCheckingInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "Ensuring Seniors in Care Communities Receive Proper Attention", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "Ensuring Seniors in Care Communities Receive Proper Attention",
            description: "Regular check-ins are crucial for ensuring seniors in care communities receive consistent, individualized attention.",
            url: POST_URL,
            image: `${SITE_URL}/images/senior-care-family-visit.png`,
            datePublished: "2025-03-17",
            dateModified: "2025-03-17",
            articleSection: "Senior Care",
            keywords: [
              "senior care communities",
              "checking in on seniors",
              "assisted living care quality",
            ],
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFAQSchema(FAQ_ITEMS)),
        }}
      />
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <ImportanceOfCheckingInPost faqs={FAQ_ITEMS} />
      </main>
      <PublicFooter />
    </div>
  )
}
