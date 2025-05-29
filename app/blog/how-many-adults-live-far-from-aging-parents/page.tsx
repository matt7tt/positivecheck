import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { AdultsLivingFarFromParentsPost } from "@/components/blog-posts/adults-living-far-from-aging-parents"

export const metadata: Metadata = {
  title: 'Long-Distance Senior Care Statistics | Positive Check',
  description: '45% of adults live far from aging parents. Learn long-distance caregiving challenges and how daily wellness calls bridge the gap for remote families.',
  alternates: {
    canonical: '/blog/how-many-adults-live-far-from-aging-parents',
  },
}

export default function AdultsLivingFarFromParentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <AdultsLivingFarFromParentsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 