import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import type { Metadata } from 'next'
import { MaintainingSocialConnectionsPost } from "@/components/blog-posts/maintaining-social-connections"
export const metadata: Metadata = {
  title: 'Maintaining Social Connections | Positive Check Blog',
  description: 'Learn about maintaining social connections and how it impacts senior care and wellness.',
  alternates: {
    canonical: '/blog/maintaining-social-connections',
  },
}


export default function MaintainingSocialConnectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader currentPage="blog" />
      <main className="container mx-auto px-4 py-8">
        <MaintainingSocialConnectionsPost />
      </main>
      <PublicFooter />
    </div>
  )
} 