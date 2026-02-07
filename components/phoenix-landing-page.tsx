'use client'

import { LandingPageComponent } from './landing-page'
import { useState, useEffect } from 'react'
import { Space_Grotesk, Raleway } from 'next/font/google'
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import { CheckCircle, ChevronDown, Volume2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

export function PhoenixLandingPageComponent() {
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set())
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [audio] = useState(typeof Audio !== 'undefined' ? new Audio('/audio/Positive_Check_Greeting.mp3') : null)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setShowCookieConsent(true)
    }
  }, [])

  const playAudio = () => {
    if (audio) {
      audio.currentTime = 0 // Reset to start
      audio.play().catch(error => {
        console.error('Error playing audio:', error)
      })
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowCookieConsent(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Positive Check Phoenix",
            "description": "Daily wellness check-in calls for seniors in Phoenix, Arizona. Supporting healthcare providers with patient wellness monitoring.",
            "url": "https://www.positivecheck.com/phoenix",
            "priceRange": "$20/month",
            "telephone": "866-605-8571",
            "areaServed": [
              {
                "@type": "City",
                "name": "Phoenix",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              },
              {
                "@type": "City",
                "name": "Scottsdale",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              },
              {
                "@type": "City",
                "name": "Tempe",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              },
              {
                "@type": "City",
                "name": "Mesa",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              },
              {
                "@type": "City",
                "name": "Chandler",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              },
              {
                "@type": "City",
                "name": "Glendale",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Phoenix",
              "addressRegion": "AZ",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.4484",
              "longitude": "-112.0740"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "serviceType": "Senior Care Services",
            "offers": {
              "@type": "Offer",
              "price": "20",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": "Daily wellness check-in calls for seniors in the Greater Phoenix area"
            },
            "service": {
              "@type": "Service",
              "serviceType": "Senior Care",
              "provider": {
                "@type": "Organization",
                "name": "Positive Check",
                "url": "https://www.positivecheck.com"
              }
            },
            "sameAs": [
              "https://www.facebook.com/positivecheck",
              "https://twitter.com/positivecheck"
            ],
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Maria R."
              },
              "reviewBody": "With my busy work schedule, it was difficult to check in with mom as often as I wanted. Lola's daily calls give me peace of mind knowing she's safe and well-cared for."
            }
          }
        `
        }}
      />
      <PublicHeader currentPage="home" />

      <main>
        {/* Phoenix-specific Hero Section */}
        <section className="container mx-auto px-4" aria-labelledby="hero-heading">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-2 lg:py-4 hero-container">
            <div className="space-y-8 md:space-y-12 ml-4">
              <div className="space-y-6">
                <h1 id="hero-heading" className={`${spaceGrotesk.className} text-4xl lg:text-6xl font-bold text-[#1a2642] leading-tight hero-text`}>
                  Senior Wellness Check-In Calls
                </h1>
                <p className={`${raleway.className} text-xl lg:text-2xl text-gray-600 hero-text`}>
                  Helping Phoenix area providers stay connected with patients everyday starting at $20/month. Cancel anytime.
                </p>
              </div>
              <Link 
                href="/contact"
                aria-label="Start your sign up process"
                className={`${spaceGrotesk.className} inline-block bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
              >
                SIGN UP
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px] hero-image" role="img" aria-label="A senior person enjoying a phone conversation in a cozy setting">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  alt="A senior person enjoying a phone conversation in a cozy setting with warm lighting"
                  className="object-cover"
                  src="/images/senior-talking-on-the-phone1.webp"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Phoenix-Specific Section */}
        <section className="bg-[#f8f9ff] py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-bold text-[#1a2642] mb-8 text-center`}>
              Supporting Phoenix Area Seniors Everyday
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                  Peace of Mind for Care Teams
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Know your loved one is doing okay especially in Arizona's extreme conditions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Daily check-ins track how seniors feel and function</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Daily reports highlight any changes in wellbeing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Caregivers stay informed without constant calling</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                Support for Seniors Living Anywhere
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Friendly conversations for seniors living alone or in communities that help ensure wellbeing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>A familiar and caring voice reaching out each day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Seniors feel heard and better cared for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Helps ensure seniors get the help or care they need</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                  Relief for Local and Remote Caregivers
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                Get reliable insights without the stress of daily check-ins for any senior with a phone.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Gathers key wellness info through brief calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Summarizes what is going well and what is not</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Helps care teams respond before issues grow</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] mb-4`}>
                  Proactive, Personalized Care for Phoenix
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                A caring, reliable touchpoint in the face of heat, distance, and aging.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Conversations that go beyond yes/no answers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Tracks trends that may signal concern over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a2642] font-bold">•</span>
                    <span>Builds trust with familiar daily interactions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
              <Link href="/contact">
                <Button 
                  className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
                >
                  SIGN UP
                </Button>
              </Link>
            </div>
        </section>

        {/* Meet Lola Section */}
        <section className="bg-[#F598FF] py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] ml-4">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    alt="Healthcare professional in pink scrubs working at a computer with a headset"
                    className="object-cover"
                    src="/images/lola-from-positive-check.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                  How Lola Helps Providers
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-[#1a2642]">Provides peace of mind for busy Phoenix care teams.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-[#1a2642]">Supports seniors in maintaining their independence in the Valley.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-[#1a2642]">Delivers daily wellness updates with meaningful trend analysis.</span>
                  </li>
                </ul>
                <p className={`${raleway.className} text-lg text-gray-600`}>&nbsp;</p>
                <Link href="/contact">
                  <Button 
                    className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
                  >
                    SIGN UP
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* "Hello there! My name is Lola..." section with cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold text-[#1a2642]`}>
              Hello there! My name is Lola...
            </h2>
            <Button 
              onClick={playAudio}
              className="flex items-center gap-2 bg-[#1a2642] hover:bg-[#2a3752] text-white p-4 min-h-[44px] min-w-[44px]"
            >
              <Volume2 className="h-5 w-5" />
              Click to hear Lola
            </Button>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person looking content and well"
                    src="/images/senior-watching-tv.webp"
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
                  <Image
                    alt="Senior person drinking coffee and relaxing"
                    src="/images/senior-drinking-coffee.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-t-lg"
                    loading="lazy"
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
                  <Image
                    alt="Senior person managing medications"
                    src="/images/senior-checking-medications.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-t-lg"
                    loading="lazy"
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
                  <Image
                    alt="Senior person enjoying a healthy meal"
                    src="/images/senior-eating-lunch.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-t-lg"
                    loading="lazy"
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
              <Link href="/contact">
                <Button 
                  className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
                >
                  SIGN UP
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* "How does it work?" section */}
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
                    Why Phoenix Providers Choose Us
                  </h3>
                  <ul className="space-y-4">
                    <li className="text-lg text-[#1a2642]">
                      • Easy setup: no smartphones, apps, or equipment needed.
                    </li>
                    <li className="text-lg text-[#1a2642]">
                      • Affordable and flexible: $20 per month, no hidden fees, and cancel anytime.
                    </li>
                    <li className="text-lg text-[#1a2642]">
                      • Reliable and adaptable: adjust settings as needs evolve.
                    </li>
                  </ul>
                </div>
                <p className={`${raleway.className} text-lg text-gray-600`}>&nbsp;</p>

                <Link href="/contact">
                  <Button 
                    className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
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
                    src="/images/senior-talking-on-the-phone.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-3xl lg:text-4xl font-bold text-[#1a2642] mb-8 text-center`}>
              FAQs
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  question: "Why should I choose Positive Check?",
                  answer: "Positive Check combines cutting-edge AI with a human touch, offering consistent, reliable wellness check-ins that give Phoenix providers the reassurance they need. It's an affordable solution designed to make aging in place safer and more sustainable, especially during extreme Arizona summers."
                },
                {
                  question: "How do I prepare for the first call?",
                  answer: "Please inform the person receiving the calls you care for their wellbeing and that you signed up for a wellness check-in call service called Positive Check. Lola from Positive Check will be calling and will be asking questions about your wellbeing. If the person receiving the calls has caller ID, incoming calls will be coming from 866-605-8571."
                },
                {
                  question: "How does Positive Check support seniors' independence?",
                  answer: "By checking in daily, Lola helps Phoenix seniors feel connected while promoting healthy habits like regular meals, sleep, and medication adherence. This proactive care allows them to stay in their homes longer, with confidence and dignity, even during challenging weather conditions."
                },
                {
                  question: "How does Positive Check help during Phoenix's extreme heat?",
                  answer: "During Phoenix's hot summers, Lola can check if seniors are staying cool and hydrated, remind them to use air conditioning, and alert care teams if there are concerns about heat-related issues. This is especially important when temperatures exceed 110°F and heat-related illnesses become a serious risk for seniors."
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
                  answer: "Not at all. Lola is a supportive tool that complements caregiving by offering daily insights and reminders. It helps care teams and caregivers stay informed and respond proactively to changes in well-being."
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
                    className="flex items-center justify-between w-full p-6 cursor-pointer bg-white hover:bg-gray-50 min-h-[44px]"
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

        {/* Phoenix-specific Testimonial */}
        <section className="bg-[#f8f9ff] py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-3xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden relative">
                  <Image
                    alt="Senior woman smiling at the beach"
                    src="/images/senior-at-the-beach.webp"
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl text-gray-600 mb-4">
                    "With my busy work schedule, it was difficult to check in with mom as often as I wanted. Lola's daily calls give me peace of mind knowing she's safe and well-cared for, and I get updates even when I can't be there in person."
                  </p>
                  <footer className="text-lg font-semibold text-[#1a2642]">Maria R., Phoenix Area Resident</footer>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        {/* "A Personal Note to Providers" section */}
        <section className="bg-[#F598FF] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-5xl font-bold text-[#1a2642] mb-8`}>
                A Personal Note to Providers
              </h2>
              
              <div className="mb-16">
                <p className="text-xl text-[#1a2642]">
                  We know you want the very best for your patients in Phoenix. Whether they live across the Valley or just around the corner, Lola bridges the gap, keeping you informed and connected with regular updates.
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
                    At $20 per month, Positive Check is an affordable solution that empowers seniors to maintain their independence at home. It's care that feels personal, at a price that makes sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form section */}
        <section className="bg-[#f8f9ff] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className={`${spaceGrotesk.className} text-3xl lg:text-4xl font-bold text-[#1a2642] mb-12 text-center`}>Contact Us</h2>
              <Card>
                <CardContent className="p-12 text-center">
                  <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Get in Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Questions about our senior check-in services? We're here to help Phoenix area providers.
                  </p>
                  <div className="space-y-4 text-left">
                    <div>
                      <h3 className="font-semibold text-[#1a2642]">Phone</h3>
                      <p className="text-gray-600">866-605-8571</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2642]">Email</h3>
                      <p className="text-gray-600">phoenix@positivecheck.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2642]">Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm MST</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a2642]">Service Area</h3>
                      <p className="text-gray-600">Greater Phoenix Metropolitan Area</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/contact">
                      <Button 
                        className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
                      >
                        CONTACT US
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <PublicFooter />

      {showCookieConsent && (
        <div className="fixed bottom-4 right-4 max-w-sm bg-white p-4 rounded-lg shadow-lg border border-gray-200 text-sm z-50 flex items-center gap-4">
          <p className="text-gray-600">We use cookies to improve your experience.</p>
          <button
            onClick={acceptCookies}
            className="bg-[#1a2642] text-white px-4 py-3 rounded-md hover:bg-[#2a3752] text-sm whitespace-nowrap min-h-[44px] min-w-[44px]"
          >
            Got it
          </button>
        </div>
      )}
    </div>
  )
}
