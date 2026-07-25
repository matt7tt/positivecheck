import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { AiCompanionsForSeniorLonelinessAndCaregiverStressPost } from "@/components/blog-posts/ai-companions-for-senior-loneliness-and-caregiver-stress"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'AI Companions for Seniors & Caregivers | Positive Check',
  description: 'Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.',
  alternates: {
    canonical: '/blog/ai-companions-for-senior-loneliness-and-caregiver-stress',
  },
  openGraph: {
    title: 'Can AI Companions Help Seniors and Caregivers? | Positive Check Blog',
    description: 'Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates.',
    url: '/blog/ai-companions-for-senior-loneliness-and-caregiver-stress',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/ai-companion-senior-wellness.png', width: 1200, height: 630, alt: 'AI companion helping reduce senior isolation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can AI Companions Help Seniors and Caregivers?',
    description: 'Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls.',
    images: ['/images/ai-companion-senior-wellness.png'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "What is an AI companion for seniors?",
    answer: "An AI companion is a technology designed to check in, listen, respond, and hold engaging conversations with an older adult. It can take the form of voice-based agents (like Alexa or ElliQ), tablet apps, or phone-based services like Positive Check. These companions reach out regularly with short, friendly conversations — asking how the senior is feeling, playing a quick game or riddle, and offering words of encouragement — with responses tracked and shared with caregivers through a secure dashboard.",
  },
  {
    question: "How do AI companions help reduce senior loneliness?",
    answer: "More than one-third of adults over 65 live alone in the United States, and research links social isolation in older adults to increased risks of depression, cognitive decline, and even heart disease. AI companions help by providing daily interaction that adds structure and emotional connection, mental stimulation through games, trivia, and riddles, safety check-ins that alert caregivers when something seems off, and gentle reminders that support confidence and independence.",
  },
  {
    question: "How do AI companions help family caregivers?",
    answer: "Caregivers gain peace of mind: daily check-in reports when they cannot call or visit in person, time back from making daily calls just to make sure a parent is okay, relief from the guilt of not doing enough, and proactive alerts when something does not sound right. That eases the constant mental load many sandwich-generation caregivers carry.",
  },
  {
    question: "Can an AI companion replace human care and visits?",
    answer: "No. No machine can replace the emotional bond of a loved one's visit. AI companions are an extension of human care, not a substitute for it — they supplement care with consistency, engagement, and oversight when humans cannot be present 24/7. The key is balance: use AI to handle routine support, and save your energy for quality moments together.",
  },
]

const POST_URL = `${SITE_URL}/blog/ai-companions-for-senior-loneliness-and-caregiver-stress`

export default function AiCompanionsForSeniorLonelinessAndCaregiverStressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "Can AI Companions Help Seniors and Caregivers?", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "Can AI Companions Help Seniors and Caregivers?",
            description: "Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.",
            url: POST_URL,
            image: `${SITE_URL}/images/ai-companion-senior-wellness.png`,
            datePublished: "2025-07-05",
            dateModified: "2025-07-05",
            articleSection: "Senior Wellness",
            keywords: [
              "AI companions for seniors",
              "senior loneliness",
              "caregiver stress",
              "AI wellness calls",
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
        <AiCompanionsForSeniorLonelinessAndCaregiverStressPost faqs={FAQ_ITEMS} />
      </main>
      <PublicFooter />
    </div>
  )
}
