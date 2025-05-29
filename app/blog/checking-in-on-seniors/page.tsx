import type { Metadata } from 'next'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { CheckingInOnSeniorsPost } from "@/components/blog-posts/checking-in-on-seniors"

export const metadata: Metadata = {
  title: 'Why Check-Ins Matter for Seniors Living Alone | Blog',
  description: 'Regular check-ins for seniors living alone improve health outcomes, reduce isolation, and provide early warning signs. Learn why daily contact matters.',
  alternates: {
    canonical: '/blog/checking-in-on-seniors',
  },
}

export default function CheckingInOnSeniorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <CheckingInOnSeniorsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 