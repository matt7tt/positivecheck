'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const BLOG_POSTS = [
  {
    title: "How Many Adults Live Far From Aging Parents?",
    date: "January 15, 2025",
    excerpt: "Studies show that about 45% of American adults live more than an hour's drive away from their aging parents. This distance can make regular in-person check-ins challenging.",
    image: "../images/grandma-with-son-and-grandson.jpg",
    slug: "how-many-adults-live-far-from-aging-parents"
  },
  {
    title: "Maintaining Social Connections in Senior Years",
    date: "March 12, 2024",
    excerpt: "Social connections play a vital role in maintaining mental and physical health as we age. Learn effective strategies to help seniors stay socially active and engaged.",
    image: "../images/senior_social.jpg",
    slug: "maintaining-social-connections"
  },
  {
    title: "When Should Families Check-In on Aging Loved Ones?",
    date: "March 10, 2024",
    excerpt: "Regular check-ins with aging family members are crucial for ensuring their health, safety, and overall well-being. These interactions help monitor health changes and reduce isolation.",
    image: "../images/happy-senior.jpg",
    slug: "when-should-families-check-in"
  },
  {
    title: "Understanding and Preventing Caregiver Burnout",
    date: "March 8, 2024",
    excerpt: "Caring for an aging loved one is rewarding but can be emotionally and physically demanding. Learn to recognize the signs of burnout and discover effective prevention strategies.",
    image: "../images/caregiver_stress.jpg",
    slug: "understanding-caregiver-burnout"
  },
  {
    title: "Essential Tips for Long-Distance Caregiving",
    date: "March 5, 2024",
    excerpt: "Managing care from afar presents unique challenges. Discover effective strategies and tools to provide the best possible care for your loved ones despite the distance.",
    image: "../images/long_distance_care.jpg",
    slug: "tips-for-long-distance-caregiving"
  },
  {
    title: "10 Signs Your Loved One Could Benefit from a Caregiver's Check-In Service",
    date: "February 8, 2025",
    excerpt: "As our loved ones age, ensuring their well-being becomes a priority. Learn the key signs that indicate when extra support through a check-in service could be beneficial.",
    image: "../images/happy-senior-2.jpg",
    slug: "signs-loved-one-needs-caregiver-check-in"
  },
  {
    title: "The Importance of Checking In on Seniors Living Alone",
    date: "March 2, 2025",
    excerpt: "Regular check-ins are vital for seniors living independently. Learn why these visits matter and how they contribute to better health outcomes and quality of life.",
    image: "../images/happy_senior_headphones.jpg",
    slug: "checking-in-on-seniors"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function BlogComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader currentPage="blog" />

      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>

      <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
        <h1 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642] mb-8`} id="blog-heading">
          Blog
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="feed" aria-labelledby="blog-heading">
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