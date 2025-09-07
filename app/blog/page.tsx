import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function BlogPage() {
  const featuredArticle = {
    title: "Essential Caregiver Relief Through Wellness Calls",
    excerpt: "Learn how daily check-ins can reduce caregiver stress and improve family relationships.",
    slug: "caregiver-relief",
    date: "April 5, 2025",
    readTime: "8 min read",
    image: "/images/happy-senior-and-caregiver.webp",
  }

  const articles = [
    {
      title: "Can AI Companions Help Seniors and Caregivers?",
      excerpt:
        "Discover how AI companions like Positive Check reduce senior loneliness and caregiver stress with daily wellness calls and timely updates delivered to you.",
      slug: "ai-companions-for-senior-loneliness-and-caregiver-stress",
      date: "July 5, 2025",
      readTime: "8 min read",
      image: "/images/ai-companion-senior-wellness.png",
    },
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
      title: "How Daily Engagement Check‑Ins Improve Senior Well‑Being: Insights From Real-Life Stories",
      excerpt:
        "Daily engagement check-ins help reduce senior isolation, boost mood, and give families peace of mind. Discover how Positive Check supports aging loved ones with simple, meaningful connection.",
      slug: "daily-senior-wellness-check-ins",
      date: "June 13, 2025",
      readTime: "8 min read",
      image: "/images/senior-check-in-call.png",
    },
    {
      title: "Daily Wellness Calls for Seniors: Supporting Independence at Home",
      excerpt:
        "How daily wellness check-ins help seniors age in place safely while giving families peace of mind. Affordable senior care from $20/month.",
      slug: "daily-wellness-calls-seniors-aging-in-place",
      date: "May 1, 2025",
      readTime: "8 min read",
      image: "/images/senior-wellness-call.png",
    },
    {
      title: "The Importance of Checking In: Ensuring Seniors in Care Communities Receive Proper Attention",
      excerpt:
        "While care communities strive to provide quality service, regular family check-ins are crucial for ensuring seniors receive consistent, individualized attention and maintaining their well-being.",
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
      title: "When Should Families Check-In on Aging Loved Ones?",
      excerpt:
        "Regular check-ins with aging family members are crucial for ensuring their health, safety, and overall well-being. These interactions help monitor health changes and reduce isolation.",
      slug: "when-should-families-check-in",
      date: "February 10, 2025",
      readTime: "8 min read",
      image: "/images/family-checking-on-elderly-care.png",
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
    {
      title: "Essential Tips for Long-Distance Caregiving",
      excerpt:
        "Managing care from afar presents unique challenges. Discover effective strategies and tools to provide the best possible care for your loved ones despite the distance.",
      slug: "tips-for-long-distance-caregiving",
      date: "December 5, 2024",
      readTime: "8 min read",
      image: "/images/long-distance-caregiving-tech.png",
    },
    {
      title: "The Importance of Checking In on Seniors Living Alone",
      excerpt:
        "Regular check-ins are vital for seniors living independently. Learn why these visits matter and how they contribute to better health outcomes and quality of life.",
      slug: "checking-in-on-seniors",
      date: "November 2, 2024",
      readTime: "8 min read",
      image: "/images/senior-living-check-in.png",
    },
    {
      title: "10 Signs Your Loved One Could Benefit from a Caregiver's Check-In Service",
      excerpt:
        "As our loved ones age, ensuring their well-being becomes a priority. Learn the key signs that indicate when extra support through a check-in service could be beneficial.",
      slug: "signs-loved-one-needs-caregiver-check-in",
      date: "October 8, 2024",
      readTime: "8 min read",
      image: "/images/caregiver-check-in-signs.png",
    },
    {
      title: "How Many Adults Live Far From Aging Parents?",
      excerpt:
        "Studies show that about 45% of American adults live more than an hour's drive away from their aging parents. This distance can make regular in-person check-ins challenging.",
      slug: "how-many-adults-live-far-from-aging-parents",
      date: "September 15, 2024",
      readTime: "8 min read",
      image: "/images/distant-family.png",
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
                alt="Positive Check - AI-powered senior wellness monitoring service"
                className="h-14 w-auto -mt-1"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/families" className="text-gray-600 hover:text-gray-900">
              For Families
            </Link>
            <Link href="/providers" className="text-gray-600 hover:text-gray-900">
              For Providers
            </Link>
            <Link href="/blog" className="text-[#e879f9] font-semibold">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                Sign In
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/sign-in/families">For Families</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sign-in/providers">For Providers</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Positive Check Blog</h1>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Insights, tips, and resources for families and healthcare providers caring for aging loved ones and
            patients.
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
                alt="Positive Check - AI-powered senior wellness monitoring service"
                className="h-16"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/families" className="text-gray-600 hover:text-gray-900">
                    For Families
                  </Link>
                </li>
                <li>
                  <Link href="/providers" className="text-gray-600 hover:text-gray-900">
                    For Providers
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
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                        Sign In
                        <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center">
                        <DropdownMenuItem asChild>
                          <Link href="/sign-in/families">For Families</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/sign-in/providers">For Providers</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © Positive Check 2025 |{" "}
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
