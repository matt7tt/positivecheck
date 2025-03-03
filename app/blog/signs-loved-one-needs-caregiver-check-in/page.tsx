'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { SignsLovedOneNeedsCaregiverPost } from "@/components/blog-posts/signs-loved-one-needs-caregiver-check-in"

export default function SignsLovedOneNeedsCaregiverPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <SignsLovedOneNeedsCaregiverPost />
      </main>
      <PublicFooter />
    </div>
  )
} 