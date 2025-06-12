import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { DailyWellnessCallsSeniorsAgingInPlacePost } from "@/components/blog-posts/daily-wellness-calls-seniors-aging-in-place"

export const metadata: Metadata = {
  title: 'Daily Wellness Calls for Seniors: Supporting Independence at Home | Positive Check',
  description: 'Discover how daily wellness check-ins help seniors age in place safely while giving families peace of mind. Affordable senior care starting at $20/month.',
  alternates: {
    canonical: '/blog/daily-wellness-calls-seniors-aging-in-place',
  },
}

export default function DailyWellnessCallsSeniorsAgingInPlacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <DailyWellnessCallsSeniorsAgingInPlacePost />
      </main>
      <PublicFooter />
    </div>
  )
} 