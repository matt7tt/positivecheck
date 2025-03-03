'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function UnderstandingCaregiverBurnoutPost() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-sm">
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
          src="/images/caregiver-stress.jpg"
          alt="A person showing signs of stress while caregiving"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <p className="lead-paragraph">
          Caring for an aging loved one is a noble and rewarding responsibility, but it can also be emotionally and physically demanding. Caregiver burnout is a state of physical, emotional, and mental exhaustion that can occur when caregivers don't get the help they need or try to do more than they're able. Understanding the signs and taking preventive measures is crucial for both the caregiver and their loved one.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Signs of Caregiver Burnout
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Physical Exhaustion:</strong> Feeling constantly tired, having trouble sleeping, or experiencing changes in appetite</li>
          <li><strong>Emotional Changes:</strong> Increased irritability, anxiety, depression, or mood swings</li>
          <li><strong>Social Withdrawal:</strong> Losing interest in activities once enjoyed or avoiding friends and family</li>
          <li><strong>Health Issues:</strong> Weakened immune system, frequent headaches, or other physical ailments</li>
          <li><strong>Cognitive Problems:</strong> Difficulty concentrating or making decisions</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Prevention Strategies
        </h2>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Set Realistic Expectations</strong>
            <p>Understand that you can't do everything alone. It's okay to ask for help and set boundaries.</p>
          </li>
          <li>
            <strong>Practice Self-Care</strong>
            <p>Make time for yourself, exercise regularly, eat well, and get enough sleep.</p>
          </li>
          <li>
            <strong>Build a Support Network</strong>
            <p>Connect with other caregivers, join support groups, and maintain relationships with friends and family.</p>
          </li>
          <li>
            <strong>Use Available Resources</strong>
            <p>Take advantage of respite care, adult day care centers, and other support services.</p>
          </li>
          <li>
            <strong>Stay Organized</strong>
            <p>Keep a calendar, make to-do lists, and establish routines to reduce stress and anxiety.</p>
          </li>
        </ol>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Can Help
        </h2>

        <p>
          One effective way to prevent caregiver burnout is to share the responsibility of checking in on your loved one. Positive Check's daily check-in service can provide:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Regular wellness checks to ensure your loved one is safe and well</li>
          <li>Peace of mind knowing someone is monitoring their well-being</li>
          <li>Time for you to focus on self-care and other responsibilities</li>
          <li>Professional support in maintaining your loved one's independence</li>
          <li>Regular updates about your loved one's condition and needs</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Don't wait until you're experiencing burnout to seek help. Contact Positive Check today to learn how we can support you in caring for your loved one.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-[#1a2642] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a3752] transition-colors"
          >
            GET STARTED TODAY
          </Link>
        </div>
      </article>
    </div>
  )
} 