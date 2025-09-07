import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { WhenShouldFamiliesCheckInComponent } from '@/components/blog-posts/when-should-families-check-in'

export const metadata: Metadata = {
  title: 'When Should Families Check In | Positive Check Blog',
  description: 'Learn about when should families check in and how it impacts senior care and wellness.',
  alternates: {
    canonical: '/blog/when-should-families-check-in',
  },
}

export default function WhenShouldFamiliesCheckInPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <WhenShouldFamiliesCheckInComponent />
      </main>
      <PublicFooter />
    </div>
  )
}