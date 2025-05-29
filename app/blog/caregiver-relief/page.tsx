import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { CaregiverReliefPost } from "@/components/blog-posts/caregiver-relief"

export const metadata: Metadata = {
  title: 'Caregiver Relief Through Wellness Calls | Positive Check',
  description: 'Overwhelmed caring for aging parents? Daily wellness calls provide essential caregiver relief, reduce stress, and ensure seniors get consistent check-ins.',
}

export default function CaregiverReliefPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <CaregiverReliefPost />
      </main>
      <PublicFooter />
    </div>
  )
} 