import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { LongDistanceCaregivingTipsPost } from "@/components/blog-posts/tips-for-long-distance-caregiving"

export const metadata: Metadata = {
  title: 'Long-Distance Caregiving Tips | Positive Check Blog',
  description: 'Caring for parents from afar? Essential strategies: daily check-in calls, local support networks, technology tools, and emergency planning for remote caregivers.',
  alternates: {
    canonical: '/blog/tips-for-long-distance-caregiving',
  },
}

export default function LongDistanceCaregivingTipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <LongDistanceCaregivingTipsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 