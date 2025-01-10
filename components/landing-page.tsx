'use client'

import Link from "next/link"
// import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { CheckCircle, ChevronDown } from 'lucide-react'
// import { Phone, Calendar, Clock, Shield } from 'lucide-react'
import { Space_Grotesk, Raleway } from 'next/font/google'
import { useState } from 'react'
import { PublicHeader } from "@/components/shared/public-header"
import toast, { Toaster } from 'react-hot-toast'
import { PublicFooter } from "@/components/shared/public-footer"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

export function LandingPageComponent() {
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="bottom-center" containerStyle={{ bottom: 100 }} />
      <PublicHeader currentPage="home" />

      <main>
        <section className="container mx-auto px-4" aria-labelledby="hero-heading">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-2 lg:py-4">
            <div className="space-y-12 ml-4">
              <div className="space-y-4">
                <h1 id="hero-heading" className={`${spaceGrotesk.className} text-4xl lg:text-6xl font-bold text-[#1a2642] leading-tight`}>
                  Daily Wellness Check-In Calls for Seniors
                </h1>
                <p className={`${raleway.className} text-xl lg:text-2xl text-gray-600`}>
                  Affordable, reliable wellness check-ins for just $15 per month. Cancel anytime.
                </p>
                <p className={`${raleway.className} text-xl lg:text-2xl text-gray-600`}>&nbsp;</p>
              </div>
              <Link 
                href="/onboarding-wizard"
                aria-label="Start your sign up process"
                className={`${spaceGrotesk.className} inline-block bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md`}
              >
                SIGN UP
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px]" role="img" aria-label="A senior person enjoying a phone conversation in a cozy setting">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  alt="A senior person enjoying a phone conversation in a cozy setting with warm lighting"
                  className="object-cover w-full h-full"
                  src="/images/senior-talking-on-the-phone1.jpeg"
                />
              </div>
            </div>
          </div>
          <div className="text-center py-12">
            <h2 className={`${spaceGrotesk.className} text-5xl lg:text-6xl font-bold text-[#1a2642] mb-6`}>
              Stay Connected, Stay Informed
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600">Because You Can't Always Be There</p>
          </div>
        </section>

        <section className="bg-[#F598FF] py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] ml-4">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    alt="Healthcare professional in pink scrubs working at a computer with a headset"
                    className="object-cover w-full h-full"
                    src="/images/lola-from-positive-check.jpeg"
                  />
                </div>
              </div>
              <div className="space-y-6 bg-[#F598FF] p-12 rounded-2xl ml-4">
                <h2 className={`${spaceGrotesk.className} text-5xl font-bold text-[#1a2642]`}>
                  Meet Lola
                </h2>
                <p className="text-lg text-[#1a2642]">
                  Caring for aging loved ones while managing life's responsibilities can be overwhelming.
                </p>
                <p className="text-lg text-[#1a2642]">
                  That's where Lola comes in. Lola is our caring AI companion that makes regular check-in calls to seniors, asking simple but important questions about their well-being.
                </p>
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] pt-4`}>
                  How Lola Helps
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-[#1a2642]">Provides peace of mind for busy families.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-[#1a2642]">Supports seniors in maintaining their independence.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-[#1a2642]">Delivers daily wellness updates with meaningful trend analysis.</span>
                  </li>
                </ul>
                <p className={`${raleway.className} text-lg text-gray-600`}>&nbsp;</p>
                <Link href="/onboarding-wizard">
                  <Button 
                    className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md mt-4`}
                  >
                    SIGN UP
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-3xl lg:text-4xl font-bold text-[#1a2642] mb-12 text-center`}>
              Good morning! This is Lola calling…
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person looking content and well"
                    src="/images/senior-watching-tv.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642] mb-2`}>
                    How are you feeling today?
                  </h3>
                  <p className="text-gray-600">
                    Stay informed about emotional and physical well-being.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person drinking coffee and relaxing"
                    src="/images/senior-drinking-coffee.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642] mb-2`}>
                    Did you sleep well last night?
                  </h3>
                  <p className="text-gray-600">
                    Identify sleep patterns that may affect their health.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person managing medications"
                    src="/images/senior-checking-medications.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642] mb-2`}>
                    Have you taken your medicine?
                  </h3>
                  <p className="text-gray-600">
                    Support medication adherence with gentle reminders.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person enjoying a healthy meal"
                    src="/images/senior-eating-lunch.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642] mb-2`}>
                    Have you eaten today?
                  </h3>
                  <p className="text-gray-600">
                    Ensure proper nutrition and meal regularity for better health.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Link href="/onboarding-wizard">
                <Button 
                  className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md`}
                >
                  SIGN UP
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F598FF] py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-5xl font-bold text-[#1a2642] mb-12 ml-4`}>
              How does it work?
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8 ml-4">
                <div className="space-y-2">
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642]`}>
                    Step 1: Personalized Scheduling
                  </h3>
                  <p className="text-lg text-[#1a2642]">
                    Set up convenient call times and customize the questions you want Lola to ask.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642]`}>
                    Step 2: Friendly Check-Ins
                  </h3>
                  <p className="text-lg text-[#1a2642]">
                    Lola makes daily calls to your loved one's existing phone number, engaging them in natural, conversational wellness check-ins.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642]`}>
                    Step 3: Insights Delivered to You
                  </h3>
                  <p className="text-lg text-[#1a2642]">
                    Receive a daily email report summarizing their responses, including helpful trend analysis to track changes over time.
                  </p>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642]`}>
                    Why Families Choose Us
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-lg text-[#1a2642]">
                      • Easy setup: no smartphones, apps, or equipment needed.
                    </li>
                    <li className="text-lg text-[#1a2642]">
                      • Affordable and flexible: $15 per month, no hidden fees, and cancel anytime.
                    </li>
                    <li className="text-lg text-[#1a2642]">
                      • Reliable and adaptable: adjust settings as needs evolve.
                    </li>
                  </ul>
                </div>
                <p className={`${raleway.className} text-lg text-gray-600`}>&nbsp;</p>

                <Link href="/onboarding-wizard">
                  <Button 
                    className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md`}
                  >
                    SIGN UP
                  </Button>
                </Link>
              </div>

              <div className="relative h-[600px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    alt="Senior woman smiling while talking on a mobile phone"
                    className="object-cover w-full h-full"
                    src="/images/senior-talking-on-the-phone.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-3xl lg:text-4xl font-bold text-[#1a2642] mb-8 text-center`}>
              FAQs
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  question: "Why should I choose Positive Check?",
                  answer: "Positive Check combines cutting-edge AI with a human touch, offering consistent, reliable wellness check-ins that give families the reassurance they need. It's an affordable solution designed to make aging in place safer and more sustainable."
                },
                {
                  question: "How does Positive Check support seniors' independence?",
                  answer: "By checking in daily, Lola helps seniors feel connected while promoting healthy habits like regular meals, sleep, and medication adherence. This proactive care allows them to stay in their homes longer, with confidence and dignity."
                },
                {
                  question: "Is Positive Check secure?",
                  answer: "Yes. Privacy and security are our top priorities. All calls and reports are handled with the utmost care to protect sensitive information."
                },
                {
                  question: "What if my loved one is hard of hearing?",
                  answer: "Lola speaks clear and concise language during calls and can repeat questions if needed. Volume adjustments can also be customized for optimal clarity."
                },
                {
                  question: "What if my loved one feels nervous about AI?",
                  answer: "Lola is designed to feel personal and approachable. We recommend introducing Lola as a helpful \"virtual assistant\" focused on care and connection."
                },
                {
                  question: "Does Lola replace human caregivers?",
                  answer: "Not at all. Lola is a supportive tool that complements caregiving by offering daily insights and reminders. It helps families and caregivers stay informed and respond proactively to changes in well-being."
                },
                {
                  question: "What makes Positive Check unique?",
                  answer: "Positive Check leverages AI to deliver consistent, reliable, and objective care while maintaining affordability and scalability. Unlike services with human caregivers, Positive Check is available 24/7, never experiences fatigue, and provides instant reporting with complete transparency."
                },
                {
                  question: "Is Positive Check personalized for each user?",
                  answer: "Yes! Positive Check's AI adapts to each senior's preferences, history, and needs, creating a highly personalized experience. This ensures that every interaction feels tailored and meaningful."
                },
                {
                  question: "Can Positive Check help with caregiver burnout?",
                  answer: "Yes! Positive Check reduces the workload of human caregivers by handling routine check-ins and monitoring. This allows caregivers to focus on more complex needs, reducing stress and preventing burnout."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="flex items-center justify-between w-full p-6 cursor-pointer bg-white hover:bg-gray-50"
                    onClick={() => {
                      const newExpanded = new Set(expandedFaqs)
                      if (newExpanded.has(index)) {
                        newExpanded.delete(index)
                      } else {
                        newExpanded.add(index)
                      }
                      setExpandedFaqs(newExpanded)
                    }}
                    aria-expanded={expandedFaqs.has(index)}
                    aria-controls={`faq-content-${index}`}
                  >
                    <h3 className={`${spaceGrotesk.className} text-xl font-semibold text-[#1a2642]`}>
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-[#1a2642] transition-transform ${
                        expandedFaqs.has(index) ? 'transform rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {expandedFaqs.has(index) && (
                    <div 
                      id={`faq-content-${index}`}
                      className="px-6 pb-6 text-gray-600"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-3xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden">
                  <img
                    alt="Senior woman smiling at the beach"
                    src="/images/senior-at-the-beach.jpeg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl text-gray-600 mb-4">
                    "My son calls when he can but lives far away and is busy with his family. Lola gives me peace of mind because she checks-in with me everyday and let's my son know that I am okay, even when we can't talk on the phone. He will call and help me if something is not right."
                  </p>
                  <footer className="text-lg font-semibold text-[#1a2642]">F.B, Long Beach, California</footer>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="bg-[#F598FF] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-5xl font-bold text-[#1a2642] mb-8`}>
                A Personal Note to Families
              </h2>
              
              <div className="mb-16">
                <p className="text-xl text-[#1a2642]">
                  We know you want the very best for your aging loved ones. Whether they live across the country or just around the corner, Lola bridges the gap, keeping you informed and connected with regular updates.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h3 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642]`}>
                    The Gift of Connection
                  </h3>
                  <p className="text-xl text-[#1a2642]">
                    Daily check-ins aren't just about health—they're about showing you care. Lola ensures seniors feel valued and supported, creating a sense of connection that enhances their overall well-being.
                  </p>
                </div>
                <div className="space-y-8">
                  <h3 className={`${spaceGrotesk.className} text-4xl font-bold text-[#1a2642]`}>
                    Helping Seniors Age in Place
                  </h3>
                  <p className="text-xl text-[#1a2642]">
                    At $15 per month, Positive Check is an affordable solution that empowers seniors to maintain their independence at home. It's care that feels personal, at a price that makes sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-3xl lg:text-4xl font-bold text-[#1a2642] mb-12 text-center`}>Contact Us</h2>
              {isSubmitted ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Thank You!</h2>
                    <p className="text-gray-600">
                      Thanks for your message. We will be in touch soon.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form 
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setIsSubmitting(true)
                    
                    try {
                      const formData = new FormData(e.currentTarget)
                      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
                        },
                        body: JSON.stringify({
                          firstName: formData.get('firstName'),
                          lastName: formData.get('lastName'),
                          email: formData.get('email'),
                          phone: formData.get('phone'),
                          hearAboutUs: formData.get('hearAboutUs'),
                          message: formData.get('message'),
                          newsletter: formData.get('newsletter') === 'on'
                        }),
                      })

                      if (!response.ok) {
                        throw new Error('Failed to submit form')
                      }

                      toast.success("Thank you for your message. We will be in touch soon!", {
                        duration: 3000,
                        style: {
                          background: "#10B981",
                          color: "#FFFFFF",
                        },
                      })
                      e.currentTarget.reset()
                      setIsSubmitted(true)
                    } catch (error) {
                      console.error('Error submitting form:', error)
                      toast.error("Sorry, there was an error submitting the form. Please try again.", {
                        duration: 5000,
                        style: {
                          background: "#EF4444",
                          color: "#FFFFFF",
                        },
                      })
                    } finally {
                      setIsSubmitting(false)
                    }
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name (required)</label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <Input id="lastName" name="lastName" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (required)</label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                    <Select name="hearAboutUs">
                      <SelectTrigger id="hearAboutUs">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="friend">Friend or Family</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (required)</label>
                    <Textarea id="message" name="message" required />
                  </div>
                  <div className="flex items-center">
                    <input id="newsletter" name="newsletter" type="checkbox" className="h-4 w-4 text-[#1a2642] focus:ring-[#1a2642] border-gray-300 rounded" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      Sign up for news and updates
                    </label>
                  </div>
                  <Button type="submit" className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white">
                    Submit
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />

      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>
    </div>
  )
}