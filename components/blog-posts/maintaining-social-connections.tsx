'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function MaintainingSocialConnectionsPost() {
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
          Maintaining Social Connections in Senior Years
        </h1>

        <img
          src="/images/senior-social.jpg"
          alt="Seniors enjoying social activities together"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <p className="lead-paragraph">
          Social connections play a vital role in maintaining mental and physical health as we age. Discover effective ways to help seniors stay socially active and engaged, preventing isolation and enhancing their quality of life.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          The Importance of Social Connection
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Mental Health Benefits</strong>
            <p>Regular social interaction helps prevent depression and anxiety while maintaining cognitive function</p>
          </li>
          <li>
            <strong>Physical Health Impact</strong>
            <p>Social engagement often leads to increased physical activity and better self-care habits</p>
          </li>
          <li>
            <strong>Emotional Well-being</strong>
            <p>Strong social connections provide emotional support and a sense of belonging</p>
          </li>
          <li>
            <strong>Quality of Life</strong>
            <p>Active social lives contribute to higher life satisfaction and purpose</p>
          </li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Ways to Stay Socially Connected
        </h2>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Community Involvement</strong>
            <p>Participate in local senior centers, religious organizations, or community groups</p>
          </li>
          <li>
            <strong>Technology Adoption</strong>
            <p>Use video calls, social media, and messaging apps to stay in touch with family and friends</p>
          </li>
          <li>
            <strong>Hobby Groups</strong>
            <p>Join clubs or groups focused on shared interests like gardening, reading, or crafts</p>
          </li>
          <li>
            <strong>Volunteer Work</strong>
            <p>Give back to the community while meeting new people and staying active</p>
          </li>
        </ol>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Overcoming Social Barriers
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Transportation:</strong> Utilize senior transportation services or ride-sharing apps</li>
          <li><strong>Technology Challenges:</strong> Seek training or assistance with digital tools</li>
          <li><strong>Health Limitations:</strong> Find activities that accommodate physical capabilities</li>
          <li><strong>Location Constraints:</strong> Explore virtual social opportunities and online communities</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Supports Social Connection
        </h2>

        <p>
          At Positive Check, we understand the importance of social connections and provide services that help seniors stay engaged:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Regular friendly check-ins from caring staff</li>
          <li>Connection to local community resources and activities</li>
          <li>Support in using technology for social engagement</li>
          <li>Family updates to maintain strong connections</li>
          <li>Recommendations for social activities and groups</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Let Positive Check help your loved one maintain meaningful social connections while ensuring their safety and well-being.
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