import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { SeniorSleepHealthFallPreventionWellnessMonitoringPost } from "@/components/blog-posts/senior-sleep-health-fall-prevention-wellness-monitoring"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'Sleep Quality & Senior Safety | Positive Check',
  description: 'Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters for aging adults and how daily wellness monitoring can help prevent issues.',
  alternates: {
    canonical: '/blog/senior-sleep-health-fall-prevention-wellness-monitoring',
  },
  openGraph: {
    title: 'Why Sleep Quality Is Critical for Senior Safety & Health',
    description: 'Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters and how daily wellness monitoring helps prevent issues.',
    url: '/blog/senior-sleep-health-fall-prevention-wellness-monitoring',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/senior-sleep-safety-bedroom.png', width: 1200, height: 630, alt: 'Senior sleeping safely in well-designed bedroom' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Sleep Quality Is Critical for Senior Safety & Health',
    description: 'Poor sleep increases fall risk by 30% in seniors. Learn how daily wellness monitoring helps prevent issues.',
    images: ['/images/senior-sleep-safety-bedroom.png'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "How does poor sleep affect fall risk in seniors?",
    answer: "Studies indicate that poor sleep quality increases fall risk by 30% among seniors, while also raising the likelihood of adverse health outcomes by 15%. Inadequate sleep affects balance, reaction time, and cognitive function — and falls can lead to serious injuries including hip fractures, head trauma, and complications that may require hospitalization or long-term care.",
  },
  {
    question: "How do sleep patterns change as people age?",
    answer: "Seniors often experience earlier bedtimes and wake times as the circadian rhythm shifts (what sleep experts call advanced sleep phase syndrome), more fragmented sleep with frequent nighttime awakenings, reduced deep sleep, and increased sensitivity to light, noise, and temperature. These changes don't mean poor sleep is inevitable, but they do require attention and often adjustments to sleep habits and environments.",
  },
  {
    question: "What are the warning signs of sleep problems in seniors?",
    answer: "Family members and caregivers should watch for frequent complaints of fatigue during the day, difficulty staying awake during normal activities, increased irritability or mood changes, reports of lying awake at night or frequent awakening, noticeable changes in balance or coordination, memory problems or confusion that seem worse than usual, and an increased frequency of minor accidents or close calls.",
  },
  {
    question: "When should a senior see a doctor about sleep problems?",
    answer: "Persistent sleep problems warrant medical attention. Seniors should consult a healthcare provider for chronic insomnia lasting more than a few weeks, loud snoring or breathing interruptions during sleep (possible sleep apnea), restless leg syndrome or other movement disorders, significant changes in sleep patterns, or daytime sleepiness that interferes with daily activities.",
  },
]

const POST_URL = `${SITE_URL}/blog/senior-sleep-health-fall-prevention-wellness-monitoring`

export default function SeniorSleepHealthFallPreventionWellnessMonitoringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "Why Sleep Quality Is Critical for Senior Safety & Health", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "Why Sleep Quality Is Critical for Senior Safety & Health",
            description: "Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters for aging adults and how daily wellness monitoring can help prevent issues.",
            url: POST_URL,
            image: `${SITE_URL}/images/senior-sleep-safety-bedroom.png`,
            datePublished: "2025-06-27",
            dateModified: "2025-06-27",
            articleSection: "Senior Wellness",
            keywords: [
              "senior sleep health",
              "fall prevention",
              "wellness monitoring",
              "elderly sleep quality",
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
        <SeniorSleepHealthFallPreventionWellnessMonitoringPost faqs={FAQ_ITEMS} />
      </main>
      <PublicFooter />
    </div>
  )
}
