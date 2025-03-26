'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function SignsLovedOneNeedsCaregiverPost() {
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
          10 Signs Your Loved One Could Benefit from a Caregiver's Check-In Service
        </h1>

        <img
          src="/images/happy-senior-2.jpg"
          alt="Happy senior person smiling"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <p className="lead-paragraph">
          As our loved ones age, ensuring their well-being becomes a priority. However, recognizing when extra support is needed can be challenging, especially if they seem mostly independent. A caregiver's check-in service, like Positive Check, can provide the perfect balance of care and independence. Here are ten signs that your loved one could benefit from this type of support:
        </p>

        <ol className="list-decimal space-y-6">
          <li>
            <strong>Increased Forgetfulness</strong> - Do they frequently forget appointments, tasks, or take longer to recall information? Memory lapses are common with aging, but if forgetfulness is impacting their daily life, regular check-ins can help monitor and remind them of essential activities.
          </li>
          <li>
            <strong>Signs of Loneliness or Isolation</strong> - Social connections are vital for emotional health. If your loved one appears withdrawn, mentions feeling lonely, or has reduced social interactions, check-ins can provide meaningful communication and combat feelings of isolation.
          </li>
          <li>
            <strong>Difficulty Managing Daily Tasks</strong> - Struggles with routine activities, such as cooking, cleaning, or paying bills, may indicate the need for added support. Regular check-ins can help identify challenges and provide guidance or reminders.
          </li>
          <li>
            <strong>Decline in Physical Health</strong> - Frequent illnesses, unexplained weight loss, or decreased mobility could be red flags. A caregiver's check-in service can monitor health changes and alert family members to seek medical attention when necessary.
          </li>
          <li>
            <strong>Neglected Personal Hygiene</strong> - Pay attention to signs like unwashed clothes, body odor, or a lack of grooming. These may indicate that daily tasks have become overwhelming, and gentle, regular prompts can help.
          </li>
          <li>
            <strong>Missed Medication or Improper Usage</strong> - Taking medications on time and in the correct dosage is critical. If you notice pills left untouched or hear confusion about prescriptions, a check-in service can help ensure medications are taken as prescribed.
          </li>
          <li>
            <strong>Concerns About Safety at Home</strong> - Are they forgetting to lock doors, leaving the stove on, or having more frequent falls? Safety concerns can escalate quickly, and a caregiver's check-in can help assess and mitigate risks.
          </li>
          <li>
            <strong>Increased Dependence on Family</strong> - If they rely more heavily on you or other family members for errands, reminders, or companionship, it may indicate that a structured service can help lighten the load while maintaining their independence.
          </li>
          <li>
            <strong>Behavioral or Emotional Changes</strong> - Mood swings, increased irritability, or signs of depression can be indicators of underlying issues. Regular, compassionate communication can provide comfort and help detect deeper concerns.
          </li>
          <li>
            <strong>Long-Distance Caregiving Challenges</strong> - If you live far away and struggle to stay connected consistently, a check-in service can bridge the gap. It provides you with peace of mind knowing someone is regularly monitoring their well-being.
          </li>
        </ol>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Why Choose a Caregiver's Check-In Service?
        </h2>

        <p>
          Services like Positive Check go beyond simple wellness calls. They provide personalized check-ins to help ensure your loved ones are healthy, engaged, and supported, while also giving caregivers valuable updates.
        </p>

        <p>
          Early recognition of these signs can make a significant difference in your loved one's quality of life. A check-in service offers the perfect blend of companionship, oversight, and support. This helps them thrive while keeping you informed every step of the way.
        </p>

        <Link
          href="/onboarding-wizard"
          className="inline-block bg-[#1a2642] text-white px-8 py-4 rounded-lg font-semibold mt-8 hover:bg-[#2a3752] transition-colors"
        >
          GET STARTED TODAY
        </Link>
      </article>
    </div>
  )
} 