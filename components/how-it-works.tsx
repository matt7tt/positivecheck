'use client'

import Link from "next/link"
import Script from 'next/script'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { RequestDemoModal } from '@/components/request-demo-modal'

export function HowItWorksComponent() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="how-it-works-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How AI-Powered Patient Check-In Calls Work",
            "description": "Simple setup and implementation process for healthcare providers: configure call schedules, customize prompts, and receive real-time patient insights.",
            "image": "https://www.positivecheck.com/images/how-it-works-guide.webp",
            "totalTime": "PT15M",
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Patient phone number (landline or mobile)"
              },
              {
                "@type": "HowToSupply",
                "name": "Internet connection for admin console"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Set the Cadence",
                "text": "Choose how often patients receive check-ins. Daily, weekly, bi-weekly, or a fully custom schedule can be supported."
              },
              {
                "@type": "HowToStep",
                "name": "Engineer the Call Prompts",
                "text": "Positive Check will work with your team to design the right set of questions. We make sure each call captures the information your program needs."
              },
              {
                "@type": "HowToStep",
                "name": "Engage with Patients",
                "text": "Lola makes the calls, asks the chosen questions, and if needed triggers escalation questions to dig deeper into patient concerns."
              },
              {
                "@type": "HowToStep",
                "name": "Get Alerts and Insights",
                "text": "Providers receive timely notifications and can review results anytime in the secure HIPAA-compliant dashboard."
              }
            ]
          }
        `}
      </Script>
      <PublicHeader currentPage="how-it-works" />

      <main>
        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How Positive Check Works
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Simple setup and implementation that integrates seamlessly with your existing
              care workflow. From configuration to real-time patient insights.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Service Overview
              </h2>
              <div className="bg-purple-50 p-8 rounded-lg mb-12">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Positive Check provides AI-powered check-in calls for patients through our virtual assistant Lola.</strong> Here's exactly how providers set up and use the service to strengthen their RPM, CCM, and post-discharge follow-up programs.
                </p>
                <div className="grid md:grid-cols-4 gap-6 mt-6">
                  <div className="text-center">
                    <div className="bg-[#e879f9] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Set the Cadence</h3>
                    <p className="text-sm text-gray-600">Choose call frequency</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#e879f9] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Engineer Prompts</h3>
                    <p className="text-sm text-gray-600">Customize questions</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#e879f9] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Engage Patients</h3>
                    <p className="text-sm text-gray-600">Lola makes the calls</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#e879f9] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Get Insights</h3>
                    <p className="text-sm text-gray-600">Alerts and reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Steps */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                The Complete Process
              </h2>

              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e879f9] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-4`}>
                      Set the Cadence
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Choose how often patients receive check-ins. Daily, weekly, bi-weekly, or a fully custom schedule can be supported.
                    </p>

                    <h4 className="font-semibold text-gray-900 mb-3">Configuration Options:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Daily, weekly, or custom schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Patient phone number (landline or mobile)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Preferred call times</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Program type (RPM, CCM, post-discharge)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Alert and escalation preferences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>No apps or special devices required</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e879f9] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-4`}>
                      Engineer the Call Prompts
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Positive Check will work with your team to design the right set of questions. We make sure each call captures the information your program needs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Prompt Design:</h4>
                        <ul className="space-y-2">
                          <li>&#8226; Fully customizable wellness questions</li>
                          <li>&#8226; Escalation questions for concerning responses</li>
                          <li>&#8226; Program-specific question sets</li>
                          <li>&#8226; Natural, friendly conversation flow</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Typical Questions:</h4>
                        <ul className="space-y-2">
                          <li>&#8226; &quot;How are you feeling today?&quot;</li>
                          <li>&#8226; &quot;Did you sleep well last night?&quot;</li>
                          <li>&#8226; &quot;Have you taken your medications?&quot;</li>
                          <li>&#8226; &quot;Have you eaten today?&quot;</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e879f9] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-4`}>
                      Engage with Patients
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Lola makes the calls, asks the chosen questions, and if needed triggers escalation questions to dig deeper into patient concerns.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Call Details:</h4>
                        <ul className="space-y-2">
                          <li>&#8226; Calls from 866-605-8571</li>
                          <li>&#8226; Consistent scheduled time</li>
                          <li>&#8226; Natural, friendly conversation</li>
                          <li>&#8226; Automatic retry if missed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Escalation Protocol:</h4>
                        <ul className="space-y-2">
                          <li>&#8226; Follow-up questions for concerning responses</li>
                          <li>&#8226; Multiple retry attempts if unanswered</li>
                          <li>&#8226; Care team notification for missed calls</li>
                          <li>&#8226; Detailed call records in dashboard</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-[#e879f9] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-4`}>
                      Get Alerts and Insights
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Providers receive timely notifications and can review results anytime in the secure HIPAA-compliant dashboard.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Real-Time Alerts:</h4>
                        <ul className="space-y-2">
                          <li>&#8226; Immediate notification for concerning responses</li>
                          <li>&#8226; Missed call alerts</li>
                          <li>&#8226; Medication non-adherence flags</li>
                          <li>&#8226; Symptom change detection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Dashboard Features:</h4>
                        <ul className="space-y-2">
                          <li>&#8226; Population wellness trends</li>
                          <li>&#8226; Historical data and patterns</li>
                          <li>&#8226; Compliance reporting</li>
                          <li>&#8226; Call logs and audit trail</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Service Features
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Patients</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>No Technology Required</strong>
                        <p className="text-gray-600">Uses existing home or mobile phone</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Familiar Routine</strong>
                        <p className="text-gray-600">Same friendly voice at the same time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Respectful Approach</strong>
                        <p className="text-gray-600">Supportive, not intrusive or controlling</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">For Providers</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Real-Time Alerts</strong>
                        <p className="text-gray-600">Immediate notification when patients need attention</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>HIPAA-Compliant Dashboard</strong>
                        <p className="text-gray-600">Secure admin console accessible from any device</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Schedule a demo today and discover how Positive Check can support your patients and your staff.
            </p>

            <RequestDemoModal>
              <Button className="bg-white text-[#d946ef] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Request Demo
              </Button>
            </RequestDemoModal>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
