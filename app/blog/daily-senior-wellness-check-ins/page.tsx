import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { DailySeniorWellnessCheckInsPost } from "@/components/blog-posts/daily-senior-wellness-check-ins"

export const metadata: Metadata = {
  title: 'How Daily Check-Ins Improve Senior Well-Being | Positive Check',
  description: 'Daily engagement check-ins help reduce senior isolation, boost mood, and give families peace of mind. Discover how Positive Check supports aging loved ones with simple, meaningful connection.',
  alternates: {
    canonical: '/blog/daily-senior-wellness-check-ins',
  },
}

export default function DailySeniorWellnessCheckInsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <DailySeniorWellnessCheckInsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 