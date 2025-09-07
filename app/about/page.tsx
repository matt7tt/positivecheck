"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
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
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">About Positive Check</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            A revolutionary AI-powered caregiver support service dedicated to ensuring the well-being of seniors while
            offering peace of mind to families and helping providers deliver more effective care.
          </p>
        </div>
      </section>

      {/* Combined Sections with Single Image and Restructured Layout */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <img
              src="/images/family-gathering-dinner.png"
              alt="Happy family gathering around dinner table with elderly woman laughing"
              className="rounded-lg shadow-xl w-full h-80 object-cover object-top"
            />
          </div>

          {/* Our Mission */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to enhance the quality of life for seniors and patients by making daily wellness check-ins
              simple, reliable, and compassionate. Positive Check helps people age in place longer, supports recovery
              after hospital stays, and empowers caregivers with actionable insights. Families benefit from knowing
              their loved ones are safe and connected. Providers benefit from improved outcomes, fewer preventable
              emergency visits, and reduced hospital re-admissions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The caregiving shortage is one of the greatest challenges facing humanity and will only grow in the future.
            Positive Check is redefining caregiving by combining AI with a human touch to bridge this gap. Our vision is
            to partner with healthcare providers and integrate with trusted services such as Amazon Fresh, Uber, and
            Express Scripts to simplify daily living needs. From groceries and medication delivery to transportation and
            appointment scheduling, our AI caregiver Lola will help coordinate these essentials. Seniors gain
            independence and dignity, while caregivers focus on higher-value care.
          </p>
        </div>
      </section>

      {/* Why Choose Positive Check */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Positive Check?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Because every moment matters. Families deserve reassurance that loved ones are supported every day.
            Providers need scalable tools to extend care, reduce strain on staff, and improve patient outcomes.
          </p>
        </div>
      </section>

      {/* For Families and Providers */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* For Families */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">For Families</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate AI Check-ins</h3>
                <p className="text-gray-700">Personalized calls designed to ensure seniors feel heard and cared for.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily Family Reports</h3>
                <p className="text-gray-700">
                  Clear updates on well-being, allowing families to stay informed and respond with confidence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Peace of Mind</h3>
                <p className="text-gray-700">
                  Families know their loved ones are safe, connected, and never overlooked.
                </p>
              </div>
            </div>
          </div>

          {/* For Providers */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">For Providers</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Care Support</h3>
                <p className="text-gray-700">
                  Automated check-ins across large populations without overwhelming staff.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinical and Operational Insights</h3>
                <p className="text-gray-700">
                  Actionable reports that help reduce risks, avoid unnecessary ER visits, and lower re-admission rates.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Improved Efficiency</h3>
                <p className="text-gray-700">
                  Staff are freed from repetitive tasks so they can focus on higher-value interactions with patients and
                  residents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Closing Section with Two Buttons */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-8 text-purple-100 leading-relaxed">
            At Positive Check, we are more than just a service. We are a trusted partner in creating a better life for
            seniors, peace of mind for families, and stronger results for healthcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Link href="/families">FAMILIES - LEARN MORE</Link>
            </Button>
            <Button asChild className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Link href="/providers">PROVIDERS - LEARN MORE</Link>
            </Button>
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
