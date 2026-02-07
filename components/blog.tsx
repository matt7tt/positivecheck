'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumb, BreadcrumbSchema } from '@/components/shared/breadcrumb'
import { Card, CardContent } from '@/components/ui/card'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const BLOG_POSTS = [
  {
    title: "Can AI Companions Help Seniors and Caregivers?",
    date: "July 5, 2025",
    excerpt: "Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.",
    image: "/images/ai-companion-reduce-senior-isolation-and-caregiver-stress.webp",
    slug: "ai-companions-for-senior-loneliness-and-caregiver-stress"
  },
  {
    title: "Why Sleep Quality Is Critical for Senior Safety & Health",
    date: "June 27, 2025",
    excerpt: "Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters for aging adults and how daily wellness monitoring can help prevent issues.",
    image: "/images/critical-importance-of-sleep-for-senior-health.webp",
    slug: "senior-sleep-health-fall-prevention-wellness-monitoring"
  },
  {
    title: "The Importance of Checking In: Ensuring Seniors in Care Communities Receive Proper Attention",
    date: "March 17, 2025",
    excerpt: "While care communities strive to provide quality service, regular check-ins are crucial for ensuring seniors receive consistent, individualized attention and maintaining their well-being.",
    image: "/images/seniors-in-community.webp",
    slug: "importance-of-checking-in-care-communities"
  },
  {
    title: "Maintaining Social Connections in Senior Years",
    date: "March 10, 2025",
    excerpt: "Social connections play a vital role in maintaining mental and physical health as we age. Learn effective strategies to help seniors stay socially active and engaged.",
    image: "/images/happy-seniors.webp",
    slug: "maintaining-social-connections"
  },
  {
    title: "7 Ways Phone Check-ins Help Senior Mental Health",
    date: "January 25, 2025",
    excerpt: "Discover how regular phone check-ins improve senior mental health and safety, providing proven benefits for aging in place and caregiver peace of mind.",
    image: "/images/senior-phone-check-in-mental-health.webp",
    slug: "senior-phone-check-ins-mental-health-safety-benefits"
  }
]

export function BlogComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema items={[{ label: 'Blog' }]} />
      <PublicHeader currentPage="blog" />

      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>

      <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={index}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={`Illustration for ${post.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642] mb-2 group-hover:text-[#2a3752]`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={post.date.replace(/\s/g, '-')}>{post.date}</time>
                    <span className="mx-2">&bull;</span>
                    <span>8 min read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
