'use client'

import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { CheckCircle, ChevronDown, Volume2 } from 'lucide-react'
// import { Phone, Calendar, Clock, Shield } from 'lucide-react'
import { Space_Grotesk, Raleway } from 'next/font/google'
import { useState, useEffect } from 'react'
import { PublicHeader } from "@/components/shared/public-header"
import toast, { Toaster } from 'react-hot-toast'
import { PublicFooter } from "@/components/shared/public-footer"
import Script from 'next/script'
import { ContactForm } from '@/components/contact-form'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

// Global analytics function declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface LandingPageProps {
  variant?: string
}

export function LandingPageComponent({ variant = 'A' }: LandingPageProps) {
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [audio] = useState(typeof Audio !== 'undefined' ? new Audio('/audio/Positive_Check_Greeting.mp3') : null)
  const [showCookieConsent, setShowCookieConsent] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setShowCookieConsent(true)
    }
  }, [])

  useEffect(() => {
    // Track A/B test variant in analytics
    const trackVariant = () => {
      // Get variant from cookie
      const cookieVariant = document.cookie
        .split('; ')
        .find(row => row.startsWith('ab_test_variant='))
        ?.split('=')[1] || variant || 'A';

      // Google Analytics 4 tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'ab_test_view', {
          variant: cookieVariant,
          page: 'homepage'
        });

        // Also set as custom parameter for page view
        window.gtag('event', 'page_view', {
          custom_parameters: {
            ab_test_variant: cookieVariant
          }
        });
      }

      // Facebook Pixel tracking
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'ABTestView', {
          variant: cookieVariant,
          page: 'homepage'
        });
      }

      // Console log for debugging
      console.log('A/B Test Variant:', cookieVariant);
    };

    // Track immediately and after a small delay to ensure scripts are loaded
    trackVariant();
    const timeoutId = setTimeout(trackVariant, 1000);

    return () => clearTimeout(timeoutId);
  }, [variant])

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
      <Script id="structured-data" type="application/ld+json">
        {`
          [
            {
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "Positive Check",
              "description": "Daily wellness check-in calls for seniors using AI companion Lola",
              "url": "https://www.positivecheck.com",
              "priceRange": "$20/month",
              "telephone": "866-605-8571",
              "areaServed": "United States",
              "serviceType": "Senior Care Services",
              "offers": {
                "@type": "Offer",
                "price": "20",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "description": "Daily wellness check-in calls for seniors"
              },
              "service": {
                "@type": "Service",
                "serviceType": "Senior Care",
                "provider": {
                  "@type": "Organization",
                  "name": "Positive Check"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why should I choose Positive Check?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Positive Check combines cutting-edge AI with a human touch, offering consistent, reliable wellness check-ins that give families the reassurance they need. It's an affordable solution designed to make aging in place safer and more sustainable."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I prepare for the first call?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Please inform the person receiving the calls you care for their wellbeing and that you signed up for a wellness check-in call service called Positive Check. Lola from Positive Check will be calling and will be asking questions about your wellbeing. If the person receiving the calls has caller ID, incoming calls will be coming from 866-605-8571."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Positive Check support seniors' independence?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By checking in daily, Lola helps seniors feel connected while promoting healthy habits like regular meals, sleep, and medication adherence. This proactive care allows them to stay in their homes longer, with confidence and dignity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Positive Check secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Privacy and security are our top priorities. All calls and reports are handled with the utmost care to protect sensitive information."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if my loved one is hard of hearing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lola speaks clear and concise language during calls and can repeat questions if needed. Volume adjustments can also be customized for optimal clarity."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Lola replace human caregivers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not at all. Lola is a supportive tool that complements caregiving by offering daily insights and reminders. It helps families and caregivers stay informed and respond proactively to changes in well-being."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Positive Check unique?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Positive Check leverages AI to deliver consistent, reliable, and objective care while maintaining affordability and scalability. Unlike services with human caregivers, Positive Check is available 24/7, never experiences fatigue, and provides instant reporting with complete transparency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Positive Check help with caregiver burnout?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Positive Check reduces the workload of human caregivers by handling routine check-ins and monitoring. This allows caregivers to focus on more complex needs, reducing stress and preventing burnout. Learn more about <a href='/blog/understanding-caregiver-burnout' class='text-blue-600 hover:text-blue-800 underline'>preventing caregiver burnout</a> and how <a href='/blog/caregiver-relief' class='text-blue-600 hover:text-blue-800 underline'>wellness calls provide essential relief</a>."
                  }
                }
              ]
            }
          ]
        `}
      </Script>
      <Toaster position="bottom-center" containerStyle={{ bottom: 100 }} />
      <PublicHeader currentPage="home" />

      <main>
        <section className="container mx-auto px-4" aria-labelledby="hero-heading">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-2 lg:py-4 hero-container">
            <div className="space-y-8 md:space-y-12 ml-4">
              <div className="space-y-6">
                <h1 id="hero-heading" className={`${spaceGrotesk.className} text-4xl lg:text-6xl font-bold text-[#1a2642] leading-tight hero-text`}>
                  {variant === 'B' 
                    ? 'Stay Connected Even When Life Get Busy'
                    : 'Wellness Check-In Calls for Aging Parents'
                  }
                </h1>
                <p className={`${raleway.className} text-xl lg:text-2xl text-gray-600 hero-text`}>
                  {variant === 'B' 
                    ? 'A friendly conversation that keeps family informed with daily insights.'
                    : 'A friendly conversation that keeps family informed with daily insights.'
                  }
                  <br />
                  Starts at $20/month · 7-day free trial · Cancel anytime
                </p>
              </div>
              <Link 
                href="/onboarding-wizard"
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

        <section className="bg-[#f8f9ff] py-12 text-center">
          <div className="container mx-auto px-4">
            <h2 className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-bold text-[#1a2642] mb-4`}>
              {variant === 'B' 
                ? 'Never Wonder How Your Parents Are Doing'
                : 'Stay Connected, Stay Informed'
              }
            </h2>
            <p className={`${raleway.className} text-xl lg:text-2xl text-gray-600`}>
              {variant === 'B' 
                ? 'Daily Check-Ins That Bridge the Distance'
                : 'Because You Cannot Always Be There'
              }
            </p>
          </div>
        </section>

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
                    className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
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
                  <Image
                    alt="Senior person looking content and well"
                    src="/images/senior-watching-tv.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover rounded-t-lg"
                    loading="lazy"
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
              <Link href="/onboarding-wizard">
                <Button 
                  className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
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
                    Receive a daily email notification and click through to the dashboard for daily wellness insights and helpful trend analysis. <Link href="/how-it-works" className="text-blue-600 hover:text-blue-800 underline">Learn more about how it works</Link>.
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
                      • Affordable and flexible: $20 per month, no hidden fees, and cancel anytime.
                    </li>
                    <li className="text-lg text-[#1a2642]">
                      • Reliable and adaptable: adjust settings as needs evolve.
                    </li>
                  </ul>
                </div>
                <p className={`${raleway.className} text-lg text-gray-600`}>&nbsp;</p>

                <Link href="/onboarding-wizard">
                  <Button 
                    className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
                  >
                    SIGN UP
                  </Button>
                </Link>
              </div>

              <div className="relative h-[600px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    alt="Senior woman smiling while talking on a mobile phone"
                    src="/images/senior-talking-on-the-phone.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/wellness-dash.webp"
                    alt="Positive Check Wellness Dashboard showing client information, call details, and response trends"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-left-top"
                    priority
                  />
                </div>
                
                <div className="space-y-8">
                  <h2 className={`${spaceGrotesk.className} text-4xl lg:text-5xl font-bold text-[#1a2642]`}>
                    Introducing the Wellness Dashboard
                  </h2>
                  
                  <h3 className={`${spaceGrotesk.className} text-2xl font-semibold text-[#1a2642]`}>
                    Stay Informed with Daily Insights
                  </h3>
                  
                  <p className="text-xl text-gray-700">
                    Our intuitive dashboard provides you with daily wellness updates, allowing you to:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="text-lg text-gray-700">
                      <span className="font-semibold text-[#1a2642]">Track Contacts:</span> See contact rates over time and when last contact attempt was made.
                    </div>
                    <div className="text-lg text-gray-700">
                      <span className="font-semibold text-[#1a2642]">Monitor Trends:</span> Track changes in mood, sleep, medication adherence, and nutrition over time.
                    </div>
                    <div className="text-lg text-gray-700">
                      <span className="font-semibold text-[#1a2642]">Personalize Care:</span> Adjust questions and call times to better suit your loved one's needs.
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Link href="/onboarding-wizard">
                      <Button 
                        className={`${spaceGrotesk.className} bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md min-h-[44px] min-w-[44px]`}
                      >
                        SIGN UP
                      </Button>
                    </Link>
                  </div>
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
                  question: "How do I prepare for the first call?",
                  answer: "Please inform the person receiving the calls you care for their wellbeing and that you signed up for a wellness check-in call service called Positive Check. Lola from Positive Check will be calling and will be asking questions about your wellbeing. If the person receiving the calls has caller ID, incoming calls will be coming from 866-605-8571."
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
                  answer: "Yes! Positive Check reduces the workload of human caregivers by handling routine check-ins and monitoring. This allows caregivers to focus on more complex needs, reducing stress and preventing burnout. Learn more about <a href='/blog/understanding-caregiver-burnout' class='text-blue-600 hover:text-blue-800 underline'>preventing caregiver burnout</a> and how <a href='/blog/caregiver-relief' class='text-blue-600 hover:text-blue-800 underline'>wellness calls provide essential relief</a>."
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
                  We know you want the very best for your aging loved ones. Whether they live across the country or just around the corner, Lola bridges the gap, keeping you informed and connected with regular updates. If you're caring for parents from afar, check out our <Link href="/blog/tips-for-long-distance-caregiving" className="text-blue-600 hover:text-blue-800 underline">essential long-distance caregiving tips</Link>.
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
                <ContactForm />
              )}
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />

      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>

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