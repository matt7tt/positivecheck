'use client'

import Link from "next/link"
import Script from 'next/script'
import { Space_Grotesk } from 'next/font/google'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone, Mail, Clock, Shield } from 'lucide-react'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export function HowItWorksComponent() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="how-it-works-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Positive Check Senior Wellness Service Works",
            "description": "Complete step-by-step guide to using Positive Check's daily wellness check-in calls for seniors",
            "image": "https://www.positivecheck.com/images/how-it-works-guide.jpg",
            "totalTime": "PT5M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "20"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Phone (landline or mobile)"
              },
              {
                "@type": "HowToSupply", 
                "name": "Internet connection for family dashboard"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Quick 5-Minute Setup",
                "text": "Sign up online and provide basic information: your contact details, your loved one's phone number, preferred call times, and choose from our wellness questions.",
                "url": "https://www.positivecheck.com/onboarding-wizard"
              },
              {
                "@type": "HowToStep",
                "name": "Daily Wellness Calls Begin",
                "text": "Lola calls your loved one at the scheduled time every day, engaging them in a friendly 3-5 minute conversation with personalized wellness questions."
              },
              {
                "@type": "HowToStep",
                "name": "Daily Reports and Insights",
                "text": "Receive daily email notifications with detailed wellness insights, trend analysis, and immediate alerts for any concerning changes."
              }
            ]
          }
        `}
      </Script>
      <PublicHeader currentPage="how-it-works" />

      <main>
        {/* Hero Section */}
        <section className="w-full py-12 bg-[#F598FF]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className={`${spaceGrotesk.className} text-4xl lg:text-6xl font-bold text-[#1a2642] mb-6`}>
                How Positive Check Works
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Complete step-by-step guide to our daily wellness check-in service for seniors. 
                From 5-minute setup to daily reports and insights.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-8`}>
                Service Overview
              </h2>
              <div className="bg-blue-50 p-8 rounded-lg mb-12">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Positive Check provides daily wellness check-in calls for seniors through our AI companion Lola.</strong> 
                  Here's exactly how our service works from signup to daily reports.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="bg-[#1a2642] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-[#1a2642]">5-Minute Setup</h3>
                    <p className="text-sm text-gray-600">Quick online registration</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1a2642] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-[#1a2642]">Daily Calls</h3>
                    <p className="text-sm text-gray-600">Friendly wellness check-ins</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#1a2642] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-[#1a2642]">Daily Reports</h3>
                    <p className="text-sm text-gray-600">Insights and alerts</p>
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
              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-12 text-center`}>
                The Complete Process
              </h2>

              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a2642] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                      Quick Setup (5-10 minutes)
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Sign up online and provide basic information to get started with our service.
                    </p>
                    
                    <h4 className="font-semibold text-[#1a2642] mb-3">Setup Requirements:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Your contact details (name, email, phone)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Senior's name and phone number</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Preferred call times and frequency</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Emergency contact information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Wellness questions selection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Payment setup ($20/month)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a2642] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                      Service Activation (24-48 hours)
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Our team activates your account and schedules the first wellness call.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#1a2642] mb-3">What Happens:</h4>
                        <ul className="space-y-2">
                          <li>• Account verification and setup completion</li>
                          <li>• First call scheduling within 24-48 hours</li>
                          <li>• Welcome email with dashboard access</li>
                          <li>• Preparation guidance for the senior</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a2642] mb-3">You'll Receive:</h4>
                        <ul className="space-y-2">
                          <li>• Dashboard login credentials</li>
                          <li>• Service overview and tips</li>
                          <li>• Contact information for support</li>
                          <li>• First call confirmation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a2642] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                      Daily Wellness Calls
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Lola calls at the scheduled time every day for a friendly 3-5 minute wellness conversation.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#1a2642] mb-3">Call Details:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-[#1a2642]" />
                            <span>Calls from 866-605-8571</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#1a2642]" />
                            <span>Consistent daily time</span>
                          </li>
                          <li>• Duration: 3-5 minutes</li>
                          <li>• Natural, friendly conversation</li>
                          <li>• Automatic retry if missed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a2642] mb-3">Typical Questions:</h4>
                        <ul className="space-y-2">
                          <li>• "How are you feeling today?"</li>
                          <li>• "Did you sleep well last night?"</li>
                          <li>• "Have you taken your medications?"</li>
                          <li>• "Have you eaten today?"</li>
                          <li>• Custom questions you selected</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a2642] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                      Daily Reports and Insights
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">
                      Receive comprehensive daily reports with insights, trends, and immediate alerts.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#1a2642] mb-3">Daily Reports Include:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-[#1a2642]" />
                            <span>Email summary with key insights</span>
                          </li>
                          <li>• Detailed call transcript</li>
                          <li>• Wellness score and trends</li>
                          <li>• Mood and health indicators</li>
                          <li>• Medication and meal tracking</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a2642] mb-3">Dashboard Features:</h4>
                        <ul className="space-y-2">
                          <li>• Weekly and monthly trend analysis</li>
                          <li>• Historical data and patterns</li>
                          <li>• Emergency alert system</li>
                          <li>• Customizable notifications</li>
                          <li>• Family sharing options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What If Scenarios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-12 text-center`}>
                What Happens If...
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Senior Doesn't Answer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Automatic retry after 30 minutes</li>
                    <li>• Second attempt if first call missed</li>
                    <li>• Family notification if both unsuccessful</li>
                    <li>• Detailed missed call report in dashboard</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Concerning Response</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Immediate family notification via email/text</li>
                    <li>• Detailed report of specific concerns</li>
                    <li>• Recommended actions provided</li>
                    <li>• Follow-up tracking in subsequent calls</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Technical Issues</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 24/7 customer support available</li>
                    <li>• Backup calling systems ensure reliability</li>
                    <li>• Service credits for missed calls</li>
                    <li>• Alternative contact methods if needed</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1a2642] mb-4">Emergency Situations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Immediate family and emergency contact alerts</li>
                    <li>• Detailed incident report</li>
                    <li>• Guidance on next steps</li>
                    <li>• Follow-up support and monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-[#f8f9ff]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-12 text-center`}>
                Service Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a2642] mb-6">For Seniors</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>No Technology Required</strong>
                        <p className="text-gray-600">Uses existing home or mobile phone</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Familiar Routine</strong>
                        <p className="text-gray-600">Same friendly voice at the same time daily</p>
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
                  <h3 className="text-2xl font-bold text-[#1a2642] mb-6">For Families</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Daily Peace of Mind</strong>
                        <p className="text-gray-600">Regular updates and trend analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Emergency Alerts</strong>
                        <p className="text-gray-600">Immediate notifications for urgent situations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Easy Access</strong>
                        <p className="text-gray-600">Dashboard available from any device</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and Getting Started */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-[#1a2642] mb-8`}>
                Pricing and Plans
              </h2>
              
              <div className="bg-[#F598FF] p-8 rounded-lg mb-12">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <h3 className="font-bold text-[#1a2642] mb-2">Monthly Cost</h3>
                    <p className="text-2xl font-bold text-[#1a2642]">$20/month</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2642] mb-2">Free Trial</h3>
                    <p className="text-2xl font-bold text-[#1a2642]">7 days</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2642] mb-2">Setup Fees</h3>
                    <p className="text-2xl font-bold text-[#1a2642]">$0</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2642] mb-2">Contracts</h3>
                    <p className="text-2xl font-bold text-[#1a2642]">None</p>
                  </div>
                </div>
              </div>

              <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-6`}>
                Getting Started
              </h3>
              
              <div className="grid md:grid-cols-5 gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-[#1a2642] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                  <p className="text-sm">Visit onboarding wizard</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#1a2642] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                  <p className="text-sm">Complete 5-minute setup</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#1a2642] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                  <p className="text-sm">Receive confirmation</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#1a2642] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
                  <p className="text-sm">First call scheduled</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#1a2642] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">5</div>
                  <p className="text-sm">Daily reports begin</p>
                </div>
              </div>

              <Link href="/onboarding-wizard">
                <Button className="bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md">
                  Start Your 7-Day Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
} 