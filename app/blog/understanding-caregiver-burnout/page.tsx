'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { UnderstandingCaregiverBurnoutPost } from "@/components/blog-posts/understanding-caregiver-burnout"

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