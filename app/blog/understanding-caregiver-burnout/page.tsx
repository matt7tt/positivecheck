import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { UnderstandingCaregiverBurnoutPost } from "@/components/blog-posts/understanding-caregiver-burnout"

export const metadata: Metadata = {
  title: 'Preventing Caregiver Burnout | Positive Check Blog',
  description: 'Recognize caregiver burnout warning signs: exhaustion, resentment, isolation. Learn prevention strategies and how wellness calls provide essential support.',
}

export default function UnderstandingCaregiverBurnoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <UnderstandingCaregiverBurnoutPost />
      </main>
      <PublicFooter />
    </div>
  )
} 