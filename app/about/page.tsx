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
            Positive Check delivers AI-driven patient outreach that helps healthcare providers scale Remote Patient Monitoring, Chronic Care Management, and post-discharge programs with structured, documented engagement.
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
              To help healthcare providers improve outcomes through consistent, scalable patient engagement. Positive Check enables care teams to monitor wellness at scale, identify meaningful changes earlier, and reduce avoidable emergency visits and readmissions, all without increasing staff workload.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Healthcare systems worldwide are facing a growing imbalance between aging populations and available care professionals. As demand for continuous, proactive monitoring increases, providers need scalable tools to stay connected with patients between visits. Positive Check is designed to help close that gap by enabling structured, multilingual outreach, early risk detection, and program-aligned documentation at scale.
          </p>
        </div>
      </section>

      {/* Why Choose Positive Check */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Positive Check?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Healthcare providers need scalable, compliant systems to extend care beyond clinical settings while maintaining performance and control.
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
                Structured voice and SMS outreach across large populations without increasing headcount.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinical and Operational Visibility</h3>
              <p className="text-gray-700">
                Real-time alerts and actionable reporting that support earlier intervention and reduce avoidable utilization.
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
