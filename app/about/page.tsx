"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { StructuredData, generateBreadcrumbSchema } from "@/components/structured-data"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={generateBreadcrumbSchema([{name: "Home", url: "https://positivecheck.com"}, {name: "About", url: "https://positivecheck.com/about"}])} id="schema-breadcrumb" />
      <PublicHeader currentPage="about" />

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">About Positive Check</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            AI-powered patient check-in technology helping healthcare providers deliver proactive, scalable care through RPM, CCM, and post-discharge programs.
          </p>
        </div>
      </section>

      {/* Combined Sections with Single Image and Restructured Layout */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <Image
              src="/images/family-gathering-dinner.png"
              alt="Happy family gathering around dinner table with elderly woman laughing"
              width={1200}
              height={320}
              className="rounded-lg shadow-xl w-full h-80 object-cover object-top"
            />
          </div>

          {/* Our Mission */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to help healthcare providers deliver better outcomes through consistent, AI-powered patient engagement. Positive Check enables care teams to monitor patient wellness at scale, catch emerging issues early, and reduce preventable emergency visits and hospital readmissions — all without adding to staff workload.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Healthcare is shifting toward proactive, value-based care — but providers lack the tools to stay connected with patients between visits. Positive Check bridges that gap. Our vision is to become the standard for automated patient engagement, giving every provider the ability to monitor wellness, detect issues early, and intervene before problems escalate. By combining conversational AI with clinical-grade reporting, we help care teams scale their reach without scaling their workload.
          </p>
        </div>
      </section>

      {/* Why Choose Positive Check */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Positive Check?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Because every moment matters. Healthcare providers need scalable tools to extend care beyond
            clinical settings, reduce strain on staff, and improve patient outcomes across their entire population.
          </p>
        </div>
      </section>

      {/* For Providers */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
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
      </section>

      {/* Updated Closing Section with Two Buttons */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl mb-8 text-purple-100 leading-relaxed">
            At Positive Check, we are more than just a service. We are a trusted partner in creating a better life for
            seniors and stronger results for healthcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Link href="/contact">REQUEST DEMO</Link>
            </Button>
            <Button asChild className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Link href="/how-it-works">HOW IT WORKS</Link>
            </Button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
