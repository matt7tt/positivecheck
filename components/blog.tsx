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
    title: "The Importance of Checking In: Ensuring Seniors in Care Communities Receive Proper Attention",
    date: "March 17, 2025",
    excerpt: "While care communities strive to provide quality service, regular family check-ins are crucial for ensuring seniors receive consistent, individualized attention and maintaining their well-being.",
    image: "/images/seniors-in-community.webp",
    slug: "importance-of-checking-in-care-communities"
  },
  {
    title: "How Many Adults Live Far From Aging Parents?",
    date: "September 15, 2024",
    excerpt: "Studies show that about 45% of American adults live more than an hour's drive away from their aging parents. This distance can make regular in-person check-ins challenging.",
    image: "/images/grandma-with-son-and-grandson.webp",
    slug: "how-many-adults-live-far-from-aging-parents"
  },
  {
    title: "Maintaining Social Connections in Senior Years",
    date: "March 10, 2025",
    excerpt: "Social connections play a vital role in maintaining mental and physical health as we age. Learn effective strategies to help seniors stay socially active and engaged.",
    image: "/images/happy-seniors.webp",
    slug: "maintaining-social-connections"
  },
  {
    title: "When Should Families Check-In on Aging Loved Ones?",
    date: "February 10, 2025",
    excerpt: "Regular check-ins with aging family members are crucial for ensuring their health, safety, and overall well-being. These interactions help monitor health changes and reduce isolation.",
    image: "/images/happy-senior.webp",
    slug: "when-should-families-check-in"
  },
  {
    title: "Understanding and Preventing Caregiver Burnout",
    date: "January 8, 2025",
    excerpt: "Caring for an aging loved one is rewarding but can be emotionally and physically demanding. Learn to recognize the signs of burnout and discover effective prevention strategies.",
    image: "/images/happy-senior-and-caregiver.webp",
    slug: "understanding-caregiver-burnout"
  },
  {
    title: "Essential Tips for Long-Distance Caregiving",
    date: "December 5, 2024",
    excerpt: "Managing care from afar presents unique challenges. Discover effective strategies and tools to provide the best possible care for your loved ones despite the distance.",
    image: "/images/senior-on-the-phone.webp",
    slug: "tips-for-long-distance-caregiving"
  },
  {
    title: "10 Signs Your Loved One Could Benefit from a Caregiver's Check-In Service",
    date: "October 8, 2024",
    excerpt: "As our loved ones age, ensuring their well-being becomes a priority. Learn the key signs that indicate when extra support through a check-in service could be beneficial.",
    image: "/images/happy-senior-2.webp",
    slug: "signs-loved-one-needs-caregiver-check-in"
  },
  {
    title: "The Importance of Checking In on Seniors Living Alone",
    date: "November 2, 2024",
    excerpt: "Regular check-ins are vital for seniors living independently. Learn why these visits matter and how they contribute to better health outcomes and quality of life.",
    image: "/images/happy_senior_headphones.webp",
    slug: "checking-in-on-seniors"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
        
        <h1 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642] mb-8`} id="blog-heading">
          Blog
        </h1>
        
        {/* Featured Posts Section */}
        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                <Link href="/blog/caregiver-relief" className="text-blue-600 hover:text-blue-800 underline">
                  Essential Caregiver Relief Through Wellness Calls
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">Learn how daily check-ins can reduce caregiver stress and improve family relationships.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                <Link href="/blog/understanding-caregiver-burnout" className="text-blue-600 hover:text-blue-800 underline">
                  Preventing Caregiver Burnout
                </Link>
              </h3>
              <p className="text-gray-600 text-sm">Recognize warning signs and discover effective prevention strategies for overwhelmed caregivers.</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/blog/senior-phone-check-ins-mental-health-safety-benefits" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/senior-phone-check-in-mental-health.webp"
                  alt="Senior person enjoying a phone conversation, representing the mental health benefits of regular check-ins"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642] mb-2 group-hover:text-[#2a3752]`}>
                  7 Ways Phone Check-ins Help Senior Mental Health
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how regular phone check-ins improve senior mental health and safety, providing proven benefits for aging in place and caregiver peace of mind.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime="2025-01-25">January 25, 2025</time>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blog/caregiver-relief" className="group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/caregiver-and-loved-one.webp"
                  alt="Illustration of a caregiver and an aging loved one"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642] mb-2 group-hover:text-[#2a3752]`}>
                  Essential Caregiver Relief Through Wellness Calls
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how daily check-ins can reduce caregiver stress and improve family relationships.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime="2025-04-05">April 5, 2025</time>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
              </CardContent>
            </Card>
          </Link>

          {BLOG_POSTS.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`}
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              aria-labelledby={`post-title-${index}`}
            >
              <article>
                <div className="relative h-56" role="img" aria-label={post.title}>
                  <Image
                    src={post.image}
                    alt={`Illustration for ${post.title}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-700" dateTime={post.date}>
                    {post.date}
                  </time>
                  <h2 
                    id={`post-title-${index}`}
                    className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-2 mb-3`}
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-700">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  )
} 