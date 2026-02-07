'use client'

import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function TechnologyInSeniorCarePost() {
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
          The Role of Technology in Modern Senior Care
        </h1>

        <img
          src="/images/senior-tech.webp"
          alt="Senior person using technology for health monitoring"
          className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-md border border-gray-200"
        />

        <p className="lead-paragraph">
          Technology is revolutionizing how we care for our aging loved ones, offering new ways to ensure safety, maintain independence, and provide peace of mind for families. Discover how modern solutions are transforming senior care and improving quality of life.
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Key Technologies in Senior Care
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Health Monitoring Systems</strong>
            <p>Smart devices that track vital signs, medication adherence, and daily activities</p>
          </li>
          <li>
            <strong>Safety and Security Solutions</strong>
            <p>Emergency response systems, fall detection devices, and home monitoring cameras</p>
          </li>
          <li>
            <strong>Communication Tools</strong>
            <p>Video chat platforms and social connectivity apps designed for seniors</p>
          </li>
          <li>
            <strong>Smart Home Automation</strong>
            <p>Voice-controlled devices, automated lighting, and temperature control systems</p>
          </li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Benefits of Technology in Senior Care
        </h2>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Enhanced Independence</strong>
            <p>Technology enables seniors to maintain their autonomy while staying safe</p>
          </li>
          <li>
            <strong>Improved Health Management</strong>
            <p>Regular monitoring and early detection of potential health issues</p>
          </li>
          <li>
            <strong>Better Communication</strong>
            <p>Easier ways to stay connected with family, friends, and healthcare providers</p>
          </li>
          <li>
            <strong>Increased Safety</strong>
            <p>24/7 monitoring and quick response to emergencies</p>
          </li>
        </ol>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          Implementing Technology Solutions
        </h2>

        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Start Small:</strong> Begin with one or two essential technologies</li>
          <li><strong>Consider Usability:</strong> Choose solutions that are senior-friendly and easy to use</li>
          <li><strong>Ensure Reliability:</strong> Select proven technologies with good support systems</li>
          <li><strong>Maintain Privacy:</strong> Balance monitoring needs with personal privacy</li>
        </ul>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mt-8 mb-4`}>
          How Positive Check Integrates Technology
        </h2>

        <p>
          At Positive Check, we combine human care with innovative technology to provide comprehensive senior care solutions:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Regular check-ins enhanced by smart monitoring systems</li>
          <li>Real-time updates and notifications for family members</li>
          <li>Integration with emergency response services</li>
          <li>User-friendly communication platforms</li>
          <li>Customizable monitoring solutions</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p className="font-medium text-lg mb-4">
            Experience how Positive Check's technology-enhanced care services can help your loved one maintain independence while ensuring their safety and well-being.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1a2642] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2a3752] transition-colors"
          >
            GET STARTED TODAY
          </Link>
        </div>
      </article>
    </div>
  )
} 