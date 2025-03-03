'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function AdultsLivingFarFromParentsPost() {
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
          How Many Adults Live Far from Their Aging Parents?
        </h1>

        <img
          src="../images/grandma-with-son-and-grandson.jpg"
          alt="Family members connecting virtually across distances"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <p className="lead-paragraph">
          In today's mobile society, more adults than ever are living far from their aging parents. Understanding this growing trend and its implications is crucial for developing effective long-distance caregiving strategies.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Current Statistics
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Geographic Distance</strong>
            <p>Over 40% of adults live more than 20 miles from their parents, with 15% living more than 500 miles away</p>
          </li>
          <li>
            <strong>Growing Trend</strong>
            <p>The number of families living apart has increased by 30% in the past two decades</p>
          </li>
          <li>
            <strong>Urban vs. Rural</strong>
            <p>Urban adults are more likely to live farther from their parents than those in rural areas</p>
          </li>
          <li>
            <strong>Age Demographics</strong>
            <p>Adults aged 30-45 are most likely to live at a significant distance from their aging parents</p>
          </li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Reasons for Geographic Separation
        </h2>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Career Opportunities</strong>
            <p>Professional advancement often requires relocation to different cities or states</p>
          </li>
          <li>
            <strong>Educational Pursuits</strong>
            <p>Higher education and specialized training frequently lead to permanent moves</p>
          </li>
          <li>
            <strong>Cost of Living</strong>
            <p>Economic factors may necessitate moving to more affordable areas</p>
          </li>
          <li>
            <strong>Personal Preferences</strong>
            <p>Lifestyle choices and climate preferences influence living locations</p>
          </li>
        </ol>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Challenges of Long-Distance Caregiving
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Limited Physical Presence:</strong> Inability to provide immediate hands-on assistance</li>
          <li><strong>Communication Barriers:</strong> Difficulty in assessing situations from afar</li>
          <li><strong>Coordination Complexities:</strong> Managing care services and appointments remotely</li>
          <li><strong>Emotional Stress:</strong> Worry and guilt about not being physically present</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Bridges the Distance
        </h2>

        <p>
          Understanding the challenges of long-distance caregiving, Positive Check offers solutions to help families stay connected and ensure proper care:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Regular wellness checks and detailed reporting</li>
          <li>Real-time updates and notifications</li>
          <li>Coordination with local care providers</li>
          <li>Emergency response protocols</li>
          <li>Technology-enabled monitoring and communication</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Don't let distance prevent you from ensuring your parents receive the care they need. Let Positive Check be your trusted partner in long-distance caregiving.
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