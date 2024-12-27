'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function BlogPostComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader currentPage="blog" />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose max-w-none">
          <h1 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642] mb-4`}>
            How Many Adults Live Far From Aging Parents?
          </h1>
          <div className="text-gray-500 mb-8">March 15, 2024</div>

          <div className="my-8">
            <img
              src="/images/grandma-with-son-and-grandson.jpg"
              alt="A heartwarming family photo showing three generations - grandmother, son, and grandson - standing together on their front porch"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Family connections matter, no matter the distance
            </p>
          </div>

          <p className="text-lg mb-8">
            It's not uncommon for families to live far apart. Studies show that about 45% of American adults live more than an hour's drive away from their aging parents, and a significant portion of these live over two hours away. This distance can make regular in-person check-ins challenging, leaving many feeling disconnected or worried about their loved ones. Knowing you're not alone in facing this challenge highlights the importance of solutions like Positive Check.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
            The Importance of Checking in on Aging Parents
          </h2>
          <p>
            As our loved ones grow older, ensuring their safety, health, and well-being becomes an increasingly significant priority. Life often gets busy, but making time to check in on aging parents regularly is not just a kind gesture—it's a vital part of supporting their physical and emotional health.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
            Why Regular Check-ins Matter
          </h2>
          <p>
            Aging parents often face challenges that they may not openly share, such as health concerns, loneliness, or difficulty managing daily tasks. Regular communication can:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Ensure Their Health and Safety:</strong> Many seniors are reluctant to share signs of declining health. A regular check-in allows you to notice changes in behavior, appearance, or mood that could indicate underlying issues.</li>
            <li><strong>Reduce Loneliness:</strong> According to the CDC, social isolation significantly increases the risk of premature death, a risk that rivals smoking, obesity, and physical inactivity. Regular calls provide emotional connection, offering reassurance and companionship.</li>
            <li><strong>Build Trust and Confidence:</strong> Knowing they have someone who consistently cares for and checks on them boosts seniors' sense of security and trust, especially if emergencies arise.</li>
            <li><strong>Help Manage Daily Tasks:</strong> Aging parents may struggle with tasks such as grocery shopping, scheduling doctor's appointments, or remembering medications. Regular communication ensures these needs don't go unmet.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
            How Positive Check Makes a Difference
          </h2>
          <p>
            Positive Check was designed with these challenges in mind. Our care calls provide a reliable, proactive solution to ensure your loved ones are always heard, even when life gets busy. Here's how Positive Check helps:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li><strong>Daily Check-Ins:</strong> We call seniors to see how they are doing 7 days a week (configurable). These regular conversations not only monitor their well-being but also provide a friendly and familiar voice.</li>
            <li><strong>Daily Reports:</strong> Caregivers receive a detailed daily report summarizing how their loved one is doing. This transparency helps you stay informed and take action if necessary.</li>
            <li><strong>Connection:</strong> Beyond practical care calls, Positive Check offers a listening ear. These care calls reduce feelings of isolation and loneliness.</li>
            <li><strong>Affordable:</strong> Positive Check is an affordable solution for any family or caregiver.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
            When Life Gets Busy, We're Here to Help
          </h2>
          <p>
            It's natural to feel stretched thin between work, family, and other commitments. Positive Check gives you the peace of mind that your aging parent receives care calls, even when you can't be there yourself. Knowing that Positive Check is consistently checking in can provide immense relief for families and ensure seniors feel valued and cared for.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
            Start Supporting Your Loved Ones Today
          </h2>
          <p>
            Every senior deserves the assurance that someone is looking out for them. Regular check-ins are more than just a phone call—they're a lifeline. Positive Check makes it easy to provide that care and connection.
          </p>
          <p>
            <Link href="/onboarding-wizard" className="text-[#1a2642] font-medium hover:text-[#2a3752]">
              Visit Positive Check
            </Link> to learn more about how we can help you support your aging parents. Together, we can ensure your loved ones lead happy, healthy, and connected lives.
          </p>
        </article>
      </main>

      <PublicFooter />
    </div>
  )
} 