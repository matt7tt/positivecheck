import { Metadata } from 'next'
import { SeniorPhoneCheckInsMentalHealthSafetyBenefitsBlogPost } from '@/components/blog/senior-phone-check-ins-mental-health-safety-benefits'
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'Phone Check-Ins & Senior Health | Positive Check',
  description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place and caregiver peace of mind.',
  alternates: {
    canonical: '/blog/senior-phone-check-ins-mental-health-safety-benefits',
  },
  openGraph: {
    title: '7 Ways Phone Check-ins Help Senior Mental Health',
    description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place and caregiver peace of mind.',
    url: '/blog/senior-phone-check-ins-mental-health-safety-benefits',
    type: 'article',
    images: [
      {
        url: '/images/senior-phone-check-in-mental-health.webp',
        width: 1200,
        height: 630,
        alt: 'Senior person enjoying a phone conversation, representing the mental health benefits of regular check-ins',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Ways Phone Check-ins Help Senior Mental Health',
    description: 'Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place.',
    images: ['/images/senior-phone-check-in-mental-health.webp'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "How do regular phone check-ins improve senior mental health?",
    answer: "Regular phone check-ins combat social isolation and loneliness by providing consistent social interaction, which supports emotional wellbeing and cognitive function. The conversations offer cognitive stimulation that helps maintain mental sharpness and communication skills, and the anticipation of a regular call gives seniors structure and purpose in their daily routine.",
  },
  {
    question: "Can phone check-ins help detect health problems early?",
    answer: "Yes. Trained check-in callers can identify subtle changes in speech patterns, mood, or cognitive function that might indicate developing health issues, often before they become obvious to family members during less frequent visits. Regular conversations also allow seniors to report symptoms, medication side effects, or concerns, helping prevent minor issues from becoming major medical emergencies.",
  },
  {
    question: "Do check-in calls help with medication adherence?",
    answer: "They can. Studies show up to 40% of older adults don't take medications as prescribed. Regular check-in calls can include simple questions about whether seniors have taken their medications and how they are feeling, establishing accountability and encouraging seniors to be more mindful of their medication schedules.",
  },
  {
    question: "Are phone check-in services a cost-effective alternative to assisted living?",
    answer: "The cost of phone check-in services is typically a fraction of institutional care costs. By providing support and safety monitoring, these services can help seniors maintain their independence longer and potentially delay or avoid the need for assisted living or nursing home care, and many programs are available at low cost or free through community organizations and government programs.",
  },
]

const POST_URL = `${SITE_URL}/blog/senior-phone-check-ins-mental-health-safety-benefits`

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "7 Ways Phone Check-ins Help Senior Mental Health", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "7 Ways Phone Check-ins Help Senior Mental Health",
            description: "Discover 7 ways regular phone check-ins improve senior mental health and safety. Proven benefits for aging in place and caregiver peace of mind.",
            url: POST_URL,
            image: `${SITE_URL}/images/senior-phone-check-in.png`,
            datePublished: "2025-01-25",
            dateModified: "2025-01-25",
            articleSection: "Senior Wellness",
            keywords: [
              "senior phone check-ins",
              "senior mental health",
              "aging in place",
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
      <SeniorPhoneCheckInsMentalHealthSafetyBenefitsBlogPost faqs={FAQ_ITEMS} />
    </>
  )
}
