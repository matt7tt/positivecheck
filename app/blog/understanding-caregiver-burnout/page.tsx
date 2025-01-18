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
            Understanding Caregiver Burnout
          </h1>

          <img
            src="/images/senior-drinking-coffee.jpg"
            alt="Senior drinking coffee"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="lead-paragraph">
            Recognizing the signs of caregiver burnout and finding ways to maintain your own well-being while caring for others.
          </p>

          {/* Add the full blog post content here */}
        </article>
      </main>

      <PublicFooter />
    </div>
  )
} 