'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader currentPage="privacy" />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose lg:prose-lg max-w-none">
          <h1 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642]`}>
            Privacy Policy for Positive Check
          </h1>
          <p className="text-base mb-6">Effective Date: December 26, 2024</p>

          <h2 className="text-xl font-bold mt-8 mb-2">Introduction</h2>
          <p className="mb-6">
            Positive Check ("we," "our," or "us") is committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our AI caregiver service designed to check on the well-being of seniors. Our practices comply with the Health Insurance Portability and Accountability Act (HIPAA) to ensure the confidentiality and security of Protected Health Information (PHI). Additionally, because our service integrates with OpenAI's ChatGPT platform to facilitate AI-driven conversations, we incorporate OpenAI's privacy practices as relevant to our services.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-2">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Personal Identification Information (PII):</strong> Name, address, email address, phone number, and other identifiers that can be used to contact or identify you.</li>
            <li className="mb-2"><strong>Protected Health Information (PHI):</strong> Health-related information provided by you or generated through our services.</li>
            <li className="mb-2"><strong>Usage Data:</strong> Information about your interactions with our service, such as login times and features accessed.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-2">How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide and maintain our AI caregiver services.</li>
            <li>Communicate with you regarding your account and our services.</li>
            <li>Ensure compliance with legal and regulatory requirements.</li>
            <li>Improve and personalize your experience with our services.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-2">Use of OpenAI's ChatGPT Platform</h2>
          <p className="mb-6">
            Positive Check utilizes OpenAI's ChatGPT platform to facilitate AI-driven conversations with seniors. OpenAI may process certain data to enable these interactions. For information about how OpenAI handles data, please refer to <Link href="https://openai.com/privacy" className="text-blue-600 hover:underline">OpenAI's Privacy Policy</Link>. While OpenAI does not retain user data from our interactions beyond the immediate processing session, we take additional steps to ensure compliance with our own data protection policies.
          </p>

          {/* Add remaining sections similarly... */}
          
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <p>
            Positive Check<br />
            info@positivecheck.com<br />
            +1 ‪858-522-9524‬
          </p>

          <p className="mt-8 text-sm text-gray-600">
            By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to our collection, use, and disclosure of your information as described herein.
          </p>
        </article>
      </main>

      <PublicFooter />
    </div>
  )
} 