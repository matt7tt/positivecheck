import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { MaintainingSocialConnectionsPost } from "@/components/blog-posts/maintaining-social-connections"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'Senior Social Connections Guide | Positive Check',
  description: 'Social connections play a vital role in senior mental and physical health. Learn effective strategies to help seniors stay socially active and engaged.',
  alternates: {
    canonical: '/blog/maintaining-social-connections',
  },
  openGraph: {
    title: 'Maintaining Social Connections in Senior Years',
    description: 'Social connections play a vital role in senior mental and physical health. Learn strategies to help seniors stay socially active.',
    url: '/blog/maintaining-social-connections',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/senior-social-connections.png', width: 1200, height: 630, alt: 'Seniors maintaining social connections' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maintaining Social Connections in Senior Years',
    description: 'Social connections play a vital role in senior mental and physical health. Learn strategies to help seniors stay active.',
    images: ['/images/senior-social-connections.png'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "Why are social connections important for seniors?",
    answer: "Social connections significantly impact seniors' mental, emotional, and physical well-being. Active social engagement helps prevent depression and anxiety and maintains cognitive function, while seniors with robust social networks often experience better physical health, higher life satisfaction, and a stronger sense of purpose.",
  },
  {
    question: "How can seniors stay socially connected?",
    answer: "Effective options include participating in local senior centers, religious organizations, or community groups; using video calls, social media, and messaging apps to stay in touch with family and friends; joining hobby groups built around shared interests like gardening, knitting, or reading; and engaging in volunteer work that gives back to the community while meeting new people.",
  },
  {
    question: "What barriers keep seniors from staying social, and how can they be overcome?",
    answer: "Common barriers include transportation, technology challenges, health limitations, and location constraints. These can be addressed with senior transportation services or ride-sharing apps, training or assistance with digital tools, activities that accommodate physical capabilities, and virtual social opportunities and online communities that work regardless of location.",
  },
  {
    question: "How does Positive Check help seniors maintain social connection?",
    answer: "Positive Check provides regular friendly check-ins that ensure well-being and provide companionship, keeps families informed about their loved one's social activities and well-being, and suggests social activities and groups that align with individual preferences to encourage active participation.",
  },
]

const POST_URL = `${SITE_URL}/blog/maintaining-social-connections`

export default function MaintainingSocialConnectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "Maintaining Social Connections in Senior Years", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "Maintaining Social Connections in Senior Years",
            description: "Social connections play a vital role in senior mental and physical health. Learn strategies to help seniors stay socially active and engaged.",
            url: POST_URL,
            image: `${SITE_URL}/images/senior-social-connections.png`,
            datePublished: "2025-03-10",
            dateModified: "2025-03-10",
            articleSection: "Senior Wellness",
            keywords: [
              "senior social connections",
              "senior isolation",
              "aging and mental health",
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
        <MaintainingSocialConnectionsPost faqs={FAQ_ITEMS} />
      </main>
      <PublicFooter />
    </div>
  )
}
