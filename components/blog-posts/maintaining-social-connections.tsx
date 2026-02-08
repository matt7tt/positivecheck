'use client'

import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
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

        <Image
          src="/images/happy-seniors.webp"
          alt="Group of senior friends enjoying social time together"
          width={800}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-md border border-gray-200"
        />

        <p className="lead-paragraph">
          Maintaining social connections is essential for seniors, significantly impacting their mental, emotional, and physical well-being. Engaging in regular social activities can prevent feelings of isolation and enhance overall quality of life.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          1. Mental Health Benefits
        </h2>
        <p className="mb-6">
          Active social engagement helps prevent depression and anxiety, while also maintaining cognitive functions. Strong social ties have been linked to improved mental health and a reduced risk of cognitive decline.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          2. Physical Health Impact
        </h2>
        <p className="mb-6">
          Seniors with robust social networks often experience better physical health. Social interactions can lead to increased physical activity and encourage healthier lifestyles, contributing to overall well-being.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          3. Emotional Well-being
        </h2>
        <p className="mb-6">
          Having a supportive social circle provides emotional support and a sense of belonging. These connections can boost self-esteem and foster a positive outlook on life.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          4. Quality of Life
        </h2>
        <p className="mb-6">
          Engaged seniors often report higher life satisfaction and a stronger sense of purpose. Participating in social activities can lead to more fulfilling and enjoyable experiences.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Ways to Stay Socially Connected
        </h2>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Community Involvement
        </h3>
        <p className="mb-4">
          Participating in local senior centers, religious organizations, or community groups offers opportunities to meet new people and engage in meaningful activities.
        </p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Technology Adoption
        </h3>
        <p className="mb-4">
          Utilizing video calls, social media, and messaging apps can help maintain connections with family and friends, especially when in-person meetings are not possible.
        </p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Hobby Groups
        </h3>
        <p className="mb-4">
          Joining clubs or groups focused on shared interests, such as gardening, knitting, reading, or crafts, provides both social interaction and personal enjoyment.
        </p>

        <h3 className={`${spaceGrotesk.className} text-xl font-bold text-[#1a2642] mt-6 mb-3`}>
          Volunteer Work
        </h3>
        <p className="mb-6">
          Engaging in volunteer activities allows seniors to give back to the community while meeting new people and staying active.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Overcoming Social Barriers
        </h2>

        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>Transportation:</strong> Utilize senior transportation services or ride-sharing apps to attend social events.</li>
          <li><strong>Technology Challenges:</strong> Seek training or assistance with digital tools to stay connected online.</li>
          <li><strong>Health Limitations:</strong> Find activities that accommodate physical capabilities, ensuring participation without strain.</li>
          <li><strong>Location Constraints:</strong> Explore virtual social opportunities and online communities to maintain connections regardless of location.</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Supports Social Connection
        </h2>

        <p className="mb-4">
          At Positive Check, we understand the importance of social connections and provide services that help seniors stay engaged:
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-8">
          <li><strong>Regular Friendly Check-ins:</strong> Our caring staff conducts consistent check-ins to ensure well-being and provide companionship.</li>
          <li><strong>Family Updates:</strong> We keep families informed about their loved one's social activities and well-being, fostering stronger connections.</li>
          <li><strong>Activity Recommendations:</strong> We suggest social activities and groups that align with individual preferences, encouraging active participation.</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Let Positive Check assist your loved one in maintaining meaningful social connections while ensuring their safety and well-being.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1a2642] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a3752] transition-colors"
          >
            Get Started Today
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-6`}>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/senior-phone-check-ins-mental-health-safety-benefits"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-[#1a2642] mb-1">7 Ways Phone Check-ins Help Senior Mental Health</h3>
              <p className="text-sm text-gray-600">How regular phone check-ins improve senior mental health.</p>
            </Link>
            <Link
              href="/blog/role-of-technology-in-senior-care"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-[#1a2642] mb-1">The Role of Technology in Modern Senior Care</h3>
              <p className="text-sm text-gray-600">How technology is transforming modern senior care delivery.</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}