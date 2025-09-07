import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/images/positive-logo-dark-blue.png"
                alt="Positive"
                className="h-11"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/families" className="text-gray-600 hover:text-gray-900">
              For Families
            </Link>
            <Link href="/providers" className="text-gray-600 hover:text-gray-900">
              For Providers
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            {/* Sign In dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                Sign In
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/sign-in/families">For Families</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sign-in/providers">For Providers</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>

      {/* Privacy Policy Content */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy for Positive Check</h1>
          <p className="text-gray-600 mb-8">Effective Date: August 31, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check ("we," "our," or "us") is committed to protecting the privacy and security of all users'
                personal information. This Privacy Policy describes how we collect, use, and safeguard information when
                families and healthcare providers use our caregiver support services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our practices comply with the Health Insurance Portability and Accountability Act (HIPAA) to ensure the
                confidentiality and security of Protected Health Information (PHI). For families, this includes
                information about loved ones receiving daily wellness calls. For providers, this includes information
                about multiple clients or patients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because Positive Check integrates with OpenAI's ChatGPT platform to support AI-driven conversations, we
                also incorporate OpenAI's privacy practices as relevant to our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following categories of information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">
                  <strong>Personal Identification Information (PII):</strong> Names, addresses, email address, phone
                  number, and other identifiers that can be used to contact or identify you.
                </li>
                <li className="mb-2">
                  <strong>Protected Health Information (PHI):</strong> Health information provided by you or generated
                  through our services, such as daily check-in responses, health status updates, or caregiver notes.
                </li>
                <li className="mb-2">
                  <strong>Usage Data:</strong> Information about how you interact with our services, including login
                  times, dashboard access, and feature usage.
                </li>
                <li className="mb-2">
                  <strong>Provider Data:</strong> For healthcare providers, account details and PHI related to multiple
                  clients or patients as submitted through the Admin Console.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We use the information collected to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Provide and maintain our wellness check-in and caregiver support services.</li>
                <li className="mb-2">Communicate with you regarding your account, service updates, and alerts.</li>
                <li className="mb-2">Deliver email notifications confirming call status and alerts as alerts.</li>
                <li className="mb-2">
                  Provide dashboards and reports for ongoing monitoring of wellness and activity.
                </li>
                <li className="mb-2">Ensure compliance with legal and regulatory requirements.</li>
                <li className="mb-2">Improve, personalize, and enhance your experience with our services.</li>
                <li className="mb-2">
                  Generate de-identified, aggregated data for analytics, service improvement, and quality reporting.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Ownership</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Families and Providers retain ownership of their data, including PHI.</li>
                <li className="mb-2">Positive Check processes data solely to provide the contracted services.</li>
                <li className="mb-2">
                  We may use de-identified or aggregated data to improve services and reporting but will never sell
                  identifiable user data without consent.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention and Deletion</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">
                  We retain PHI and account information only as long as necessary to provide services and meet
                  regulatory requirements.
                </li>
                <li className="mb-2">Families may request deletion of their account and data at any time.</li>
                <li className="mb-2">
                  Providers may request deletion of client data, subject to applicable healthcare record retention laws.
                </li>
                <li className="mb-2">
                  Backup copies may persist for a limited period as part of our disaster recovery procedures.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. HIPAA Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check is committed to maintaining the confidentiality, integrity, and security of PHI in
                compliance with HIPAA. Our safeguards include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li className="mb-2">Encryption of data in transit and at rest.</li>
                <li className="mb-2">Role-based access controls and user authentication.</li>
                <li className="mb-2">Audit logging and monitoring of system access.</li>
                <li className="mb-2">Business Associate Agreements (BAA) with Providers where required by law.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Providers remain responsible for HIPAA compliance within their organizations, including proper
                management of staff access to the Admin Console.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security Measures</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard administrative, technical, and physical safeguards to protect
                information. These measures include encryption, firewalls, secure hosting, restricted access, and
                ongoing monitoring. While we strive for robust protection, no system is completely immune to risk, and
                users must remain vigilant.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Access Controls for Providers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Providers are responsible for managing staff access within their organization. This includes assigning
                appropriate roles, terminating access for former staff, and ensuring that employees only use the
                Services for authorized purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Use of OpenAI's ChatGPT Platform</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check utilizes OpenAI's ChatGPT platform to facilitate AI-driven conversations. OpenAI may
                process limited interaction data in order to enable these conversations. OpenAI does not retain PHI
                beyond the immediate processing session. Positive Check takes additional steps to ensure HIPAA
                compliance and alignment with our own data protection standards.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For details about OpenAI's privacy practices, please review{" "}
                <a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e879f9] hover:text-purple-600 underline"
                >
                  OpenAI's Privacy Policy
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check is not intended for children under the age of 18. We do not knowingly collect or maintain
                information about individuals under 18.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At present, Positive Check services are only available to users located in the United States.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
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
                By using our Services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
                Updates or changes to this Privacy Policy will be posted on our website.
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
            alt="Positive"
            className="h-16 mx-auto mb-4"
          />
          <div className="grid md:grid-cols-3 gap-8 justify-center mb-8">
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/families" className="text-gray-600 hover:text-gray-900">
                    For Families
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
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                        Sign In
                        <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center">
                        <DropdownMenuItem asChild>
                          <Link href="/sign-in/families">For Families</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/sign-in/providers">For Providers</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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
