import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import type { Metadata } from 'next'
import { TechnologyInSeniorCarePost } from "@/components/blog-posts/role-of-technology-in-senior-care"
export const metadata: Metadata = {
  title: 'Role Of Technology In Senior Care | Positive Check Blog',
  description: 'Learn about role of technology in senior care and how it impacts senior care and wellness.',
  alternates: {
    canonical: '/blog/role-of-technology-in-senior-care',
  },
}


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