'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function UnderstandingCaregiverBurnoutPost() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <Script id="article-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Understanding and Preventing Caregiver Burnout",
            "description": "Learn to recognize the signs of caregiver burnout and discover effective prevention strategies. Find out how Positive Check can provide essential support for overwhelmed caregivers.",
            "image": "https://www.positivecheck.com/images/happy-senior-and-caregiver.jpg",
            "author": {
              "@type": "Organization",
              "name": "Positive Check"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Positive Check",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.positivecheck.com/images/positive-logo.png"
              }
            },
            "datePublished": "2025-03-17",
            "dateModified": "2025-03-17",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.positivecheck.com/blog/understanding-caregiver-burnout"
            },
            "articleSection": "Caregiver Support",
            "keywords": ["caregiver burnout", "caregiver stress", "senior care", "caregiver support", "burnout prevention", "caregiver health"],
            "about": [
              {
                "@type": "Thing",
                "name": "Caregiver Burnout"
              },
              {
                "@type": "Thing", 
                "name": "Mental Health"
              },
              {
                "@type": "Thing",
                "name": "Senior Care"
              }
            ]
          }
        `}
      </Script>
      <Link 
        href="/blog"
        className="text-[#1a2642] hover:text-[#2a3752] mb-6 inline-block"
        aria-label="Back to blog"
      >
        ← Back to Blog
      </Link>

      <article className="prose max-w-none">
        <h1 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642] mb-4`}>
          Understanding and Preventing Caregiver Burnout
        </h1>

        <img
          src="/images/happy-senior-and-caregiver.jpg"
          alt="A caregiver and senior woman sharing a happy moment together"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <p className="lead-paragraph">
          Caring for an aging loved one is both rewarding and challenging. However, the demands of caregiving can lead to caregiver burnout which is a state of physical, emotional, and mental exhaustion. Recognizing the signs and implementing preventive measures is crucial for the well-being of both the caregiver and the care recipient.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Signs of Caregiver Burnout
        </h2>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Physical Exhaustion
        </h3>
        <p className="mb-4">Persistent fatigue, sleep disturbances, or changes in appetite.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Emotional Changes
        </h3>
        <p className="mb-4">Increased irritability, anxiety, depression, or mood swings.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Social Withdrawal
        </h3>
        <p className="mb-4">Loss of interest in previously enjoyed activities or avoiding social interactions.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Health Issues
        </h3>
        <p className="mb-4">Frequent illnesses, headaches, or other physical ailments.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Cognitive Problems
        </h3>
        <p className="mb-6">Difficulty concentrating or making decisions.</p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Prevention Strategies
        </h2>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Set Realistic Expectations
        </h3>
        <p className="mb-4">Acknowledge personal limits and seek assistance when necessary.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Practice Self-Care
        </h3>
        <p className="mb-4">Engage in regular exercise, maintain a balanced diet, and ensure adequate rest.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Build a Support Network
        </h3>
        <p className="mb-4">Connect with other caregivers, join support groups, and maintain relationships with friends and family.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Utilize Available Resources
        </h3>
        <p className="mb-4">Explore respite care, adult day care centers, and other support services.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Stay Organized
        </h3>
        <p className="mb-6">Use calendars, to-do lists, and establish routines to manage tasks effectively.</p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Can Help
        </h2>

        <p className="mb-4">
          Positive Check offers services designed to support caregivers and their loved ones:
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>Regular Wellness Checks:</strong> Daily check-ins to ensure the safety and well-being of your loved one.</li>
          <li><strong>Peace of Mind:</strong> Knowing that this reliable service is calling to check-in and monitoring your loved one's wellbeing allowing caregivers to focus on self-care and other responsibilities.</li>
          <li><strong>Timely Updates:</strong> Regular reports on your loved one's wellbeing and needs.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Don't wait until burnout occurs. Contact Positive Check today to learn how we can support you in caring for your loved one.
          </p>
          <Link
            href="/onboarding-wizard"
            className="inline-block bg-[#1a2642] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a3752] transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </article>
    </div>
  )
} 