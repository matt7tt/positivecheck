import type { Metadata } from 'next'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { featuredPost, gridPosts, type BlogPost } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: 'Blog — Senior Care & Provider Insights | Positive Check',
  description: 'Tips, research, and resources on AI-powered patient check-in calls, remote patient monitoring, senior wellness, and healthcare best practices.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Positive Check Blog',
    description: 'Insights, tips, and resources for healthcare providers and care teams supporting patient wellness.',
    url: '/blog',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/ai-companion-senior-wellness.png', width: 1200, height: 630, alt: 'Positive Check blog — senior wellness insights' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Positive Check Blog',
    description: 'Insights, tips, and resources for healthcare providers and care teams supporting patient wellness.',
    images: ['/images/ai-companion-senior-wellness.png'],
  },
}

export default function BlogPage() {
  const toCard = (p: BlogPost) => ({
    title: p.title,
    excerpt: p.description,
    slug: p.slug,
    date: p.displayDate,
    readTime: p.readTime,
    image: p.image,
  })
  const featuredArticle = toCard(featuredPost)
  const articles = gridPosts.map(toCard)

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.positivecheck.com/blog" }
            ]
          })
        }}
      />
      <PublicHeader currentPage="blog" />

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Positive Check Blog</h1>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Insights, tips, and resources for healthcare providers and care teams supporting patient wellness.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Article</h2>
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-video overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={`Featured article: ${featuredArticle.title} — ${featuredArticle.excerpt}`}
                width={1200}
                height={630}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{featuredArticle.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredArticle.excerpt}</p>
              <Link href={`/blog/${featuredArticle.slug}`}>
                <Button className="bg-[#e879f9] hover:bg-[#d946ef] text-white px-6 py-2 font-semibold">READ MORE</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={`${article.title} — ${article.excerpt}`}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`} className="w-full">
                    <Button className="bg-[#e879f9] hover:bg-[#d946ef] text-white px-6 py-2 font-semibold w-full mt-auto">
                      READ MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
