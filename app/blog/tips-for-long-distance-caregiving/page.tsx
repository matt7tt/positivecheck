'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader currentPage="blog" />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <Link 
          href="/blog"
          className="text-[#1a2642] hover:text-[#2a3752] mb-6 inline-block"
          aria-label="Back to blog"
        >
          ← Back to Blog
        </Link>

        <article className="prose lg:prose-lg max-w-none">
          <h1 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642] mb-4`}>
            Tips for Long-Distance Caregiving
          </h1>

          <img
            src="/images/senior-talking-on-the-phone.jpg"
            alt="Senior talking on the phone"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="lead-paragraph">
            Practical strategies for managing care when you live far away from your aging loved ones.
          </p>

          {/* Add the full blog post content here */}
        </article>
      </main>

      <PublicFooter />
    </div>
  )
} 