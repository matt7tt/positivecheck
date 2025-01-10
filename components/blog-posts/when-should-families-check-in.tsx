'use client'

import Link from "next/link"
import { Space_Grotesk } from 'next/font/google'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from "@/components/shared/public-footer"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export function WhenShouldFamiliesCheckInComponent() {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="blog" />

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642] mb-6`}>
            When Should Families Check-In on Aging Loved Ones?
          </h1>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Regular check-ins with aging family members are crucial for ensuring their health, safety, and overall well-being. These interactions help monitor health changes, reduce isolation, and provide timely assistance when needed. However, balancing these responsibilities with daily life can be challenging. Positive Check offers an innovative solution to support families in this endeavor.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <img
                src="/images/happy-senior.jpg"
                alt="A happy senior person celebrating with raised arms while holding a phone"
                className="w-full h-auto object-cover"
              />
            </div>

            <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
              Why Are Regular Check-Ins Important?
            </h2>
            <p className="text-gray-700 mb-4">
              As seniors age, they face increased risks related to health issues, medication management, and accidents. Regular check-ins allow families to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Monitor Health: Stay informed about any changes in physical or emotional well-being.</li>
              <li>Ensure Safety: Identify potential hazards or concerns in their daily environment.</li>
              <li>Provide Social Interaction: Combat feelings of loneliness and isolation.</li>
            </ul>

            <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
              Introducing Positive Check's Daily Wellness Calls
            </h2>
            <p className="text-gray-700 mb-8">
              Positive Check offers a service that provides daily wellness check-in calls for seniors, helping families have peace of mind knowing their loved ones are regularly monitored.
            </p>

            <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
              How Does It Work?
            </h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Personalized Scheduling: Set up convenient call times and customize the questions you want Lola, the AI companion, to ask.</li>
              <li>Friendly Check-Ins: Lola makes daily calls to your loved one's existing phone number, engaging them in natural, conversational wellness check-ins.</li>
              <li>Insights Delivered to You: Receive a daily email report summarizing their responses, including helpful trend analysis to track changes over time.</li>
            </ul>

            <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
              Benefits of Using Positive Check
            </h2>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Ease of Use: No need for smartphones, apps, or additional equipment.</li>
              <li>Affordability: At $15 per month, it's a cost-effective solution without hidden fees.</li>
              <li>Flexibility: Adjust settings as your loved one's needs evolve over time.</li>
              <li>Support for Independence: Helps seniors age in place at home where they want to be.</li>
            </ul>

            <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
              Why Choose Positive Check?
            </h2>
            <p className="text-gray-700 mb-8">
              Positive Check's service is designed to complement the care provided by families and caregivers, not replace it. It offers an additional layer of support, ensuring that seniors receive consistent check-ins, even when family members are unavailable. This service helps in identifying potential issues early, allowing for timely interventions by family or professional caregivers.
            </p>

            <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
              Conclusion
            </h2>
            <p className="text-gray-700 mb-8">
              Regular check-ins are vital for the well-being of seniors. Positive Check provides an affordable and reliable solution to ensure these check-ins occur consistently, offering peace of mind to families and support to seniors. By incorporating Positive Check into your care routine, you can help your loved ones maintain their independence while staying connected and informed about their well-being.
            </p>

            <div className="mt-8 text-center">
              <Link 
                href="/onboarding-wizard"
                className="inline-block bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 rounded-md font-medium text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </article>
      </main>

      <PublicFooter />
    </div>
  )
} 