'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const BLOG_POSTS = [
  {
    title: "How Many Adults Live Far From Aging Parents?",
    date: "March 15, 2024",
    excerpt: "Studies show that about 45% of American adults live more than an hour's drive away from their aging parents. This distance can make regular in-person check-ins challenging, leaving many feeling disconnected or worried about their loved ones.",
    image: "/images/grandma-with-son-and-grandson.jpg",
    slug: "how-many-adults-live-far-from-aging-parents"
  },
  {
    title: "Tips for Long-Distance Caregiving",
    date: "March 10, 2024",
    excerpt: "Practical strategies for managing care when you live far away from your aging loved ones.",
    image: "/images/senior-talking-on-the-phone.jpeg",
    slug: "tips-for-long-distance-caregiving"
  },
  {
    title: "Understanding Caregiver Burnout",
    date: "March 5, 2024",
    excerpt: "Recognizing the signs of caregiver burnout and finding ways to maintain your own well-being while caring for others.",
    image: "/images/senior-drinking-coffee.jpeg",
    slug: "understanding-caregiver-burnout"
  }
]

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
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48" role="img" aria-label={post.title}>
                <img
                  src={post.image}
                  alt={`Illustration for ${post.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-700" dateTime={post.date}>
                  {post.date}
                </time>
                <h2 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-2 mb-3`}>
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-[#1a2642] font-medium hover:text-[#2a3752] focus:outline-none focus:ring-2 focus:ring-[#1a2642] focus:ring-offset-2"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  )
} 