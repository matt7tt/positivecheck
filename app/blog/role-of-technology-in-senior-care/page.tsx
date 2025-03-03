'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { TechnologyInSeniorCarePost } from "@/components/blog-posts/role-of-technology-in-senior-care"

export default function TechnologyInSeniorCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <TechnologyInSeniorCarePost />
      </main>
      <PublicFooter />
    </div>
  )
} 