import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { TechnologyInSeniorCarePost } from "@/components/blog-posts/role-of-technology-in-senior-care"
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, SITE_URL } from "@/lib/schema"
import type { PostFAQItem } from "@/components/blog-posts/post-blocks"

export const metadata: Metadata = {
  title: 'Technology in Senior Care | Positive Check',
  description: 'How AI-powered tools and telehealth are transforming senior care delivery, improving patient outcomes, and helping providers scale wellness monitoring.',
  alternates: {
    canonical: '/blog/role-of-technology-in-senior-care',
  },
  openGraph: {
    title: 'Technology in Senior Care',
    description: 'How AI-powered tools and telehealth are transforming senior care delivery and improving patient outcomes.',
    url: '/blog/role-of-technology-in-senior-care',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/senior-talking-on-the-phone1.webp', width: 1200, height: 630, alt: 'Technology improving senior care delivery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology in Senior Care',
    description: 'How AI-powered tools and telehealth are transforming senior care delivery and improving patient outcomes.',
    images: ['/images/senior-talking-on-the-phone1.webp'],
  },
}

const FAQ_ITEMS: PostFAQItem[] = [
  {
    question: "What technologies are used in senior care?",
    answer: "Key technologies include health monitoring systems (smart devices that track vital signs, medication adherence, and daily activities), safety and security solutions (emergency response systems, fall detection devices, and home monitoring cameras), communication tools like video chat platforms and social connectivity apps designed for seniors, and smart home automation such as voice-controlled devices, automated lighting, and temperature control.",
  },
  {
    question: "How does technology help seniors stay independent?",
    answer: "Technology enables seniors to maintain their autonomy while staying safe. Regular monitoring supports early detection of potential health issues, 24/7 monitoring allows quick response to emergencies, and communication tools make it easier to stay connected with family, friends, and healthcare providers.",
  },
  {
    question: "How should families start introducing technology into a senior's care?",
    answer: "Start small with one or two essential technologies, choose solutions that are senior-friendly and easy to use, select proven technologies with good support systems, and balance monitoring needs with personal privacy.",
  },
  {
    question: "How does Positive Check combine technology with senior care?",
    answer: "Positive Check combines human care with innovative technology: regular check-ins enhanced by smart monitoring systems, real-time updates and notifications for family members, integration with emergency response services, user-friendly communication platforms, and customizable monitoring solutions.",
  },
]

const POST_URL = `${SITE_URL}/blog/role-of-technology-in-senior-care`

export default function TechnologyInSeniorCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: "The Role of Technology in Senior Care", url: POST_URL },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleSchema({
            type: "BlogPosting",
            headline: "The Role of Technology in Senior Care",
            description: "How AI-powered tools and telehealth are transforming senior care delivery, improving patient outcomes, and helping providers scale wellness monitoring.",
            url: POST_URL,
            image: `${SITE_URL}/images/senior-technology-care.png`,
            datePublished: "2025-01-25",
            dateModified: "2025-01-25",
            articleSection: "Senior Care",
            keywords: [
              "technology in senior care",
              "telehealth for seniors",
              "AI in elder care",
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
        <TechnologyInSeniorCarePost faqs={FAQ_ITEMS} />
      </main>
      <PublicFooter />
    </div>
  )
}
