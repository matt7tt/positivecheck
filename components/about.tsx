'use client'

import Link from "next/link"
import Image from 'next/image'
import Script from 'next/script'
import { Space_Grotesk } from 'next/font/google'
import { PublicHeader } from '@/components/shared/public-header'
import { RequestDemoModal } from '@/components/request-demo-modal'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export function AboutComponent() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="about-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Positive Check",
            "description": "An AI-powered patient check-in service dedicated to helping healthcare providers improve outcomes through consistent, scalable wellness monitoring.",
            "url": "https://www.positivecheck.com",
            "logo": "https://www.positivecheck.com/images/positive-logo.png",
            "telephone": "866-605-8571",
            "email": "info@positivecheck.com",
            "foundingDate": "2024",
            "areaServed": "United States",
            "serviceType": "Healthcare Technology Services",
            "mission": "To enhance the quality of life for seniors and patients through regular AI-powered check-ins and empower healthcare providers and care teams with actionable insights for better outcomes.",
            "vision": "To redefine patient engagement by empowering healthcare providers with AI-powered tools that keep patients connected and supported.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Patient Wellness Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI-Powered Patient Check-In Calls",
                    "description": "HIPAA-compliant AI check-ins designed to monitor patient wellness and surface actionable insights"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Provider Admin Console",
                    "description": "Comprehensive dashboard with alerts, trends, and compliance reporting for care teams"
                  }
                }
              ]
            }
          }
        `}
      </Script>
      <PublicHeader currentPage="about" />

      {/* Skip link */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>

      <main id="main-content">
        {/* Hero Section */}
        <section className="w-full py-12 bg-[#F598FF]" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 id="about-heading" className={`${spaceGrotesk.className} text-4xl lg:text-6xl font-bold text-[#1a2642] mb-6`}>
                About Positive Check
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                An AI-powered patient check-in service dedicated to helping healthcare providers
                improve outcomes through consistent, scalable wellness monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-8 bg-white" aria-labelledby="mission-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 id="mission-heading" className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-6`}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-12">
                To enhance the quality of life for seniors and patients through regular AI-powered
                check-ins and empower healthcare providers and care teams with actionable insights
                for better outcomes. Learn more about <Link href="/how-it-works" className="text-blue-600 hover:text-blue-800 underline">how our service works</Link>.
              </p>

              <h2 id="vision-heading" className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-6`}>
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-12">
                To redefine patient engagement by empowering healthcare providers with AI-powered
                tools that keep patients connected and supported.
              </p>

              {/* Image Section */}
              <div className="my-16 text-center" role="img" aria-label="Happy senior enjoying Positive Check services">
                <Image
                  src="/images/happy-senior-with-positive-check.webp"
                  alt="Senior person smiling while using Positive Check service"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg mx-auto"
                  priority
                />
              </div>

              <h2 id="features-heading" className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-12 text-center`}>
                Why Choose Positive Check?
              </h2>
              <p className="text-xl text-center text-gray-700 mb-12">
                Because consistent patient engagement leads to better outcomes,
                and your care team deserves tools that scale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
                <div className="p-6 bg-white rounded-lg shadow-sm" role="listitem">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">HIPAA-Compliant AI Check-ins</h3>
                  <p className="text-gray-700">
                    Personalized calls designed to monitor patient wellness and surface actionable insights.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Real-Time Alerts &amp; Reporting</h3>
                  <p className="text-gray-600">
                    Comprehensive updates on patient health, medication adherence, and wellness trends, helping care teams respond proactively.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Scalable Patient Outreach</h3>
                  <p className="text-gray-600">
                    Expand your RPM and CCM programs without increasing staff burden, keeping every patient engaged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 italic mb-8">
                At Positive Check, we're more than just a service—we're a trusted partner in
                delivering better patient outcomes and supporting care teams at scale.
              </p>
              <RequestDemoModal>
                <button
                  className="inline-block bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 rounded-md font-medium text-lg focus:outline-none focus:ring-2 focus:ring-[#1a2642] focus:ring-offset-2"
                  aria-label="Request a demo of Positive Check"
                >
                  Request Demo
                </button>
              </RequestDemoModal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50" role="contentinfo">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-700 text-sm">
            &copy; Positive Check 2025 | <Link href="/terms" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1a2642] focus:ring-offset-2">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
