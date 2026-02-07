import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

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
      {/* Header */}
      <header className="px-6 py-2 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <img
                src="/images/positive-logo-dark-blue.png"
                alt="Positive Check - AI-powered patient check-in calls"
                className="h-14 w-auto -mt-1"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/blog" className="text-[#e879f9] font-semibold">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

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
              <img
                src={featuredArticle.image || "/placeholder.svg"}
                alt={featuredArticle.title}
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
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
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

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center">
              <img
                src="/images/positive-logo-dark-blue-alt.png"
                alt="Positive Check - AI-powered patient check-in calls"
                className="h-16"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              &copy; Positive Check 2025 |{" "}
              <Link href="/terms" className="hover:text-gray-900">
                Terms
              </Link>{" "}
              |{" "}
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
