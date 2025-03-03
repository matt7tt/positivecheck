'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function ImpactOfAIOnSeniorCarePost() {
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
          The Impact of AI on Modern Senior Care
        </h1>

        <img
          src="/images/ai-senior-care.jpg"
          alt="Modern technology being used in senior care settings"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <p className="lead-paragraph">
          Artificial Intelligence is revolutionizing senior care, offering innovative solutions for better monitoring, improved safety, and enhanced quality of life. Discover how AI technology is transforming the way we care for our aging loved ones.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Key Applications of AI in Senior Care
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Health Monitoring</strong>
            <p>AI-powered systems that track vital signs, detect changes in behavior patterns, and predict potential health issues</p>
          </li>
          <li>
            <strong>Fall Prevention and Detection</strong>
            <p>Advanced algorithms that analyze movement patterns and environmental factors to prevent falls and provide immediate alerts when falls occur</p>
          </li>
          <li>
            <strong>Medication Management</strong>
            <p>Smart systems that ensure proper medication adherence and alert caregivers of missed doses</p>
          </li>
          <li>
            <strong>Virtual Assistance</strong>
            <p>AI-powered companions that provide reminders, engage in conversation, and assist with daily tasks</p>
          </li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Benefits of AI Integration
        </h2>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Enhanced Safety</strong>
            <p>24/7 monitoring and rapid response to potential emergencies</p>
          </li>
          <li>
            <strong>Improved Independence</strong>
            <p>Enabling seniors to live autonomously while maintaining safety and connection</p>
          </li>
          <li>
            <strong>Better Health Outcomes</strong>
            <p>Early detection of health issues and improved preventive care</p>
          </li>
          <li>
            <strong>Reduced Caregiver Burden</strong>
            <p>Automation of routine tasks and enhanced monitoring capabilities</p>
          </li>
        </ol>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Addressing Common Concerns
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Privacy Protection:</strong> Implementing robust security measures to protect sensitive data</li>
          <li><strong>Human Touch:</strong> Balancing AI assistance with personal human care</li>
          <li><strong>Technology Adoption:</strong> Making AI solutions user-friendly for seniors</li>
          <li><strong>Reliability:</strong> Ensuring consistent and accurate performance of AI systems</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Leverages AI
        </h2>

        <p>
          At Positive Check, we combine AI technology with human care to provide comprehensive senior monitoring:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Smart monitoring systems that learn and adapt to individual patterns</li>
          <li>AI-enhanced communication tools for better family connectivity</li>
          <li>Predictive analytics to identify potential health concerns early</li>
          <li>Automated alerts and notifications for caregivers</li>
          <li>Integration with emergency response systems</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Experience how Positive Check's AI-enhanced care services can provide better support and peace of mind for you and your loved ones.
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