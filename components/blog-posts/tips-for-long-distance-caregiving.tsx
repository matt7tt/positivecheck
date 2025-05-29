'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function LongDistanceCaregivingTipsPost() {
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
          Essential Tips for Long-Distance Caregiving
        </h1>

        <img
          src="/images/senior-on-the-phone.webp"
          alt="Senior person having a phone conversation"
          className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-md border border-gray-200"
        />

        <p className="lead-paragraph">
          Managing the care of a loved one from afar presents unique challenges, but with the right strategies and support systems, you can provide effective care regardless of the distance. Here are essential tips to help you navigate long-distance caregiving successfully.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          1. Establish a Strong Support Network
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Local Contacts:</strong> Build relationships with neighbors, friends, or community members who can check in regularly.</li>
          <li><strong>Professional Services:</strong> Partner with local care services for regular monitoring and assistance.</li>
          <li><strong>Healthcare Team:</strong> Maintain contact with your loved one's healthcare providers.</li>
          <li><strong>Family Coordination:</strong> Create a shared caregiving schedule with other family members.</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          2. Leverage Technology
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Video Calls:</strong> Schedule regular video chats to maintain face-to-face connection.</li>
          <li><strong>Smart Home Devices:</strong> Install security cameras, medication reminders, or emergency response systems.</li>
          <li><strong>Health Monitoring:</strong> Use apps or devices to track vital signs and medication adherence.</li>
          <li><strong>Digital Calendar:</strong> Share calendars for appointments and medication schedules.</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          3. Stay Organized
        </h2>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Document Management
        </h3>
        <p>Keep important documents organized and easily accessible, including:</p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Medical records and prescriptions</li>
          <li>Insurance information</li>
          <li>Legal documents</li>
          <li>Emergency contacts</li>
        </ul>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Regular Check-ins
        </h3>
        <p className="mb-4">Establish a routine for checking in and monitoring your loved one's well-being.</p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Emergency Plan
        </h3>
        <p className="mb-6">Create a detailed plan for various emergency scenarios.</p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Supports Long-Distance Caregivers
        </h2>

        <p className="mb-4">
          Positive Check's daily check-in service is an ideal solution for long-distance caregivers, providing:
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>Professional Daily Wellness Checks:</strong> Ensuring your loved one's safety and health are monitored regularly.</li>
          <li><strong>Regular Updates:</strong> Keeping you informed about your loved one's condition.</li>
          <li><strong>Immediate Notifications:</strong> Alerting you to any concerns that arise.</li>
          <li><strong>Peace of Mind:</strong> Knowing your loved one is being cared for, even from a distance.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Don't let distance prevent you from ensuring your loved one's well-being. Let Positive Check be your trusted partner in long-distance caregiving.
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