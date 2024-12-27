'use client'

import Link from "next/link"
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import { PublicHeader } from '@/components/shared/public-header'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export function AboutComponent() {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="about" />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#F598FF]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`${spaceGrotesk.className} text-4xl lg:text-6xl font-bold text-[#1a2642] mb-6`}>
                About Positive Check
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A revolutionary AI-powered caregiver service dedicated to ensuring 
                the well-being of seniors while offering peace of mind to families and caregivers.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-6`}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                To enhance the quality of life for seniors and help seniors age in place longer 
                through regular check-ins and empower caregivers with actionable insights, 
                fostering stronger connections and improved care for loved ones.
              </p>

              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-6`}>
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                To redefine caregiving by empowering seniors with personalized support through AI, 
                enabling them to live independently and stay connected. From wellness check-ins and 
                emotional companionship to managing daily tasks like grocery deliveries, medical 
                appointments, and transportation, Positive Check envisions a world where seniors 
                thrive with dignity and caregivers have the insights and tools to provide 
                exceptional care.
              </p>

              {/* Added Image Section */}
              <div className="my-16 text-center">
                <Image
                  src="/images/happy-senior-with-positive-check.jpg"
                  alt="Happy senior using Positive Check"
                  width={800}
                  height={500}
                  className="rounded-lg shadow-lg mx-auto"
                  priority
                />
              </div>

              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-12 text-center`}>
                Why Choose Positive Check?
              </h2>
              <p className="text-xl text-center text-gray-600 mb-12">
                Because every moment counts, and being able to spend more time with aging loved 
                ones is everything.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Compassionate AI Check-ins</h3>
                  <p className="text-gray-600">
                    Personalized calls designed to ensure seniors feel heard and cared for.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Daily Caregiver Reports</h3>
                  <p className="text-gray-600">
                    Comprehensive updates on physical, emotional, and social well-being, helping 
                    caregivers respond proactively.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Peace of Mind</h3>
                  <p className="text-gray-600">
                    Families stay informed, reassured that their loved ones are supported every 
                    step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 italic mb-8">
                At Positive Check, we're more than just a service—we're a trusted partner in 
                creating a better life for seniors and peace of mind for families. Together, 
                we&apos;re building a future where caregiving is not just about meeting needs, but 
                about nurturing independence, connection, and joy.
              </p>
              <Link 
                href="/onboarding-wizard"
                className="inline-block bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 rounded-md font-medium text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600 text-sm">
              © Positive Check 2025 | <Link href="/terms">Terms</Link>
            </div>
          </div>
        </footer>
    </div>
  )
} 