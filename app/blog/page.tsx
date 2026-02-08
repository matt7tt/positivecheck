import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"

export default function BlogPage() {
  const featuredArticle = {
    title: "Can AI Companions Help Seniors and Caregivers?",
    excerpt: "Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.",
    slug: "ai-companions-for-senior-loneliness-and-caregiver-stress",
    date: "July 5, 2025",
    readTime: "8 min read",
    image: "/images/ai-companion-senior-wellness.png",
  }

  const articles = [
    {
      title: "Why Sleep Quality Is Critical for Senior Safety & Health",
      excerpt:
        "Poor sleep increases fall risk by 30% in seniors. Learn why quality sleep matters for aging adults and how daily wellness monitoring can help prevent issues.",
      slug: "senior-sleep-health-fall-prevention-wellness-monitoring",
      date: "June 27, 2025",
      readTime: "8 min read",
      image: "/images/senior-sleep-safety-bedroom.png",
    },
    {
      title: "The Importance of Checking In: Ensuring Seniors in Care Communities Receive Proper Attention",
      excerpt:
        "While care communities strive to provide quality service, regular check-ins are crucial for ensuring seniors receive consistent, individualized attention and maintaining their well-being.",
      slug: "importance-of-checking-in-care-communities",
      date: "March 17, 2025",
      readTime: "8 min read",
      image: "/images/senior-care-family-visit.png",
    },
    {
      title: "Maintaining Social Connections in Senior Years",
      excerpt:
        "Social connections play a vital role in maintaining mental and physical health as we age. Learn effective strategies to help seniors stay socially active and engaged.",
      slug: "maintaining-social-connections",
      date: "March 10, 2025",
      readTime: "8 min read",
      image: "/images/senior-social-connections.png",
    },
    {
      title: "7 Ways Phone Check-ins Help Senior Mental Health",
      excerpt:
        "Discover how regular phone check-ins improve senior mental health and safety, providing proven benefits for aging in place and caregiver peace of mind.",
      slug: "senior-phone-check-ins-mental-health-safety-benefits",
      date: "January 25, 2025",
      readTime: "8 min read",
      image: "/images/senior-phone-check-in.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://positivecheck.com" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://positivecheck.com/blog" }
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
                alt={featuredArticle.title}
                width={1200}
                height={630}
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
                    alt={article.title}
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
