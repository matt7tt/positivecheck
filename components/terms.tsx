'use client'

import { PublicHeader } from "@/components/shared/public-header"
import { Space_Grotesk } from 'next/font/google'
import { PublicFooter } from "@/components/shared/public-footer"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function TermsComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader currentPage="home" />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-4`}>
          Terms and Conditions for Positive Check
        </h1>
        <p className="text-gray-600 mb-8">Effective Date: December 26, 2024</p>

        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">1. Acceptance of Terms</h2>
            <p>By accessing or using the Positive Check website and services ("Services"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please do not use our Services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">2. Description of Services</h2>
            <p>Positive Check provides an AI-driven caregiver service that contacts seniors to monitor their well-being. Our Services include a secure account login where all personally identifiable information (PII) is protected in compliance with the Health Insurance Portability and Accountability Act (HIPAA).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">3. Eligibility</h2>
            <p>To use our Services, you must be at least 18 years old and capable of forming a binding contract. By using the Services, you represent and warrant that you meet these requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">4. User Accounts</h2>
            <p><strong>Registration:</strong> To access certain features, you must create an account by providing accurate and complete information.</p>
            <p><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">5. Privacy and Data Security</h2>
            <p>Your use of the Services is governed by our Privacy Policy, which outlines how we collect, use, and protect your information. By using the Services, you consent to the practices described in the Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">6. HIPAA Compliance</h2>
            <p>We are committed to maintaining the confidentiality, integrity, and security of your health information in accordance with HIPAA regulations. Our practices include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Implementing administrative, technical, and physical safeguards to protect electronic protected health information (e-PHI).</li>
              <li>Ensuring that any disclosures of PHI are permitted by law and limited to the minimum necessary information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">7. User Responsibilities</h2>
            <p>By using our Services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and up-to-date information.</li>
              <li>Use the Services in compliance with all applicable laws and regulations.</li>
              <li>Refrain from using the Services for any unlawful or prohibited activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">8. Intellectual Property</h2>
            <p>All content, trademarks, and data on the Positive Check website are the property of Positive Check or its licensors and are protected by intellectual property laws. Unauthorized use is prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Positive Check shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">10. Modifications to Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of any significant changes by posting the new Terms on our website and updating the effective date. Your continued use of the Services constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">11. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the Services at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">12. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a2642]">13. Contact Information</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at:</p>
            <div className="mt-4">
              <p className="font-semibold">Positive Check</p>
              <p><a href="mailto:info@positivecheck.com" className="text-blue-600 hover:text-blue-800">info@positivecheck.com</a></p>
              <p><a href="tel:+18585229524" className="text-blue-600 hover:text-blue-800">+1 ‪858-522-9524‬</a></p>
            </div>
          </section>

          <section className="mt-8">
            <p className="italic">By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
          </section>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
} 