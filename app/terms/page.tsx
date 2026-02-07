import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-2 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <img
                src="/images/positive-logo-dark-blue.png"
                alt="Positive Check - AI-powered senior wellness monitoring service"
                className="h-14 w-auto -mt-1"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/providers" className="text-gray-600 hover:text-gray-900">
              For Providers
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      {/* Terms Content */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions for Positive Check</h1>
          <p className="text-gray-600 mb-8">Effective Date: August 31, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using the Positive Check website, mobile applications, or services ("Services"), you
                agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with
                these Terms, please do not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check provides an AI-driven caregiver support service that contacts seniors to monitor their
                well-being and provide daily check-in calls. The Services include reporting, alerts, and access to a
                secure account login. Personally identifiable information (PII) and protected health information (PHI)
                are safeguarded in compliance with applicable privacy and data protection laws, including the Health
                Insurance Portability and Accountability Act (HIPAA).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Types</h2>
              <p className="text-gray-700 leading-relaxed mb-4">There are two categories of users of the Services:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">
                  <strong>Family Users:</strong> Individuals subscribing to Positive Check on behalf of themselves or
                  their loved ones for personal use.
                </li>
                <li className="mb-2">
                  <strong>Provider Users:</strong> Healthcare organizations, senior living communities, agencies, or
                  other entities that use Positive Check to manage multiple clients, patients, or residents.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms apply to both Family Users and Provider Users unless otherwise specified.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our Services, you must be at least 18 years old and capable of forming a binding contract.
                Providers must ensure that only authorized staff access the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Registration:</strong> To access certain features, you must create an account by providing
                accurate and complete information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login
                credentials. Families are responsible for their own accounts. Providers are responsible for ensuring
                that staff accounts are properly assigned, managed, and deactivated when no longer needed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Unauthorized Use:</strong> You agree to notify Positive Check immediately if you suspect
                unauthorized access to your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your use of the Services is governed by our Privacy Policy, which describes how we collect, use, and
                protect your information. By using the Services, you consent to these practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. HIPAA Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check is committed to protecting PHI in accordance with HIPAA regulations. Our practices
                include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Administrative, technical, and physical safeguards to protect PHI.</li>
                <li className="mb-2">Limiting disclosures of PHI to the minimum necessary.</li>
                <li className="mb-2">
                  Entering into a Business Associate Agreement (BAA) with Providers when legally required.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Providers remain responsible for compliance with HIPAA within their organizations and for how their
                staff use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">By using the Services, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Provide accurate and up-to-date information.</li>
                <li className="mb-2">Use the Services in compliance with all applicable laws and regulations.</li>
                <li className="mb-2">
                  Not rely on the Services as a substitute for emergency medical care or 911 services.
                </li>
                <li className="mb-2">
                  For Providers: Ensure staff are properly trained in how to use the Services and respond to alerts.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Ownership and Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Family Users and Providers retain ownership of their data, including PHI. Positive Check may use
                de-identified and aggregated data to improve services, analytics, and reporting. Positive Check will not
                sell or share identifiable user data without consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Notifications and Reporting</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Families and Providers will receive notifications via email and dashboards. For Families, after each
                call you will receive an email confirming whether the call was completed successfully or if Positive
                Check was unable to make contact after three attempts. Providers will have access to dashboards, alerts,
                and reports for managing multiple clients. Positive Check cannot guarantee delivery of emails due to
                reliance on third-party systems such as internet providers or email services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check strives to provide reliable service but does not guarantee uninterrupted or error-free
                operation. The Services are designed to support care, not replace caregivers or emergency response.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Fees and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Family Users pay a subscription fee of $20 per month per account. Provider fees are based on
                organizational agreements and invoicing terms. Failure to pay may result in suspension or termination of
                Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, trademarks, software, and data on the Positive Check platform are the property of Positive
                Check or its licensors and are protected by intellectual property laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, Positive Check shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or related to your use of the Services. For
                Family Users, liability is limited to the total subscription fees paid during the three months preceding
                the claim. For Providers, liability is limited to the amounts paid under the applicable subscription or
                contract during the three months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold harmless Positive Check, its affiliates, officers, and employees from
                any claims, damages, or expenses arising out of your misuse of the Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update these Terms from time to time. Significant changes will be posted on our website with an
                updated effective date. Continued use of the Services constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check may suspend or terminate access to the Services at its discretion, without notice, for
                conduct that violates these Terms or is harmful to other users or the company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or concerns about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Positive Check</strong>
                </p>
                <p className="text-gray-700 mb-2">info@positivecheck.com</p>
                <p className="text-gray-700 mb-2">+1 858-522-9524</p>
              </div>
            </section>

            {/* Final acknowledgment statement */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 italic text-center">
                By using our Services, you acknowledge that you have read, understood, and agree to be bound by these
                Terms and Conditions.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="text-[#e879f9] hover:text-purple-600 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src="/images/positive-logo-dark-blue-alt.png"
            alt="Positive Check - AI-powered senior wellness monitoring service"
            className="h-16 mx-auto mb-4"
          />
          <div className="grid md:grid-cols-3 gap-8 justify-center mb-8">
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/providers" className="text-gray-600 hover:text-gray-900">
                    For Providers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            © Positive Check 2025 |{" "}
            <Link href="/terms" className="hover:text-gray-900">
              Terms
            </Link>{" "}
            |{" "}
            <Link href="/privacy" className="hover:text-gray-900">
              Privacy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
