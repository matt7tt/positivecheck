"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Bell, Shield, Heart, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FamiliesPage() {
  const familyTestimonials = [
    {
      quote:
        "I live across the country from my mom, and Lola's daily calls give me peace of mind. If something's wrong, I know right away.",
      author: "Daughter",
      location: "Long Beach, CA",
      image: "/middle-aged-woman-daughter.png",
    },
    {
      quote:
        "My dad loves hearing from Lola each morning. It's simple, friendly, and helps him feel more connected without needing a smartphone.",
      author: "Son",
      location: "Denver, CO",
      image: "/middle-aged-man-son.png",
    },
    {
      quote:
        "Positive Check has become part of our family routine. I can focus on work knowing my grandmother is being checked on every day.",
      author: "Grandson",
      location: "Austin, TX",
      image: "/young-man-grandson.png",
    },
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % familyTestimonials.length)
    }, 8000) // Slowed down testimonial rotation from 7 seconds to 8 seconds

    return () => clearInterval(testimonialInterval)
  }, [familyTestimonials.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Positive_logo_dark%20blue-Ztb3aXsT4kxSrAWQeENDzRzrq4uHRc.png"
                alt="Positive"
                className="h-11"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/families" className="text-[#e879f9] font-semibold">
              For Families
            </Link>
            <Link href="/providers" className="text-gray-600 hover:text-gray-900">
              For Providers
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
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

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-12 h-12 text-white" />
            <h1 className="text-5xl lg:text-6xl font-bold text-white">For Families</h1>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Peace of mind, every day</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Caring for aging parents or loved ones can be stressful when you are not there in person. Positive Check
            helps you stay connected through friendly phone calls, timely alerts, and an easy-to-read dashboard that
            gives you insight into how your loved one is really doing.
          </p>
          <Button className="bg-white text-[#e879f9] hover:bg-purple-50 px-8 py-4 text-lg font-bold">
            START FREE TRIAL
          </Button>
        </div>
      </section>

      {/* Daily Check-In Calls */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Phone className="w-8 h-8 text-[#e879f9]" />
              <h3 className="text-3xl font-bold text-gray-900">Daily Check-In Calls</h3>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our virtual assistant Lola calls your loved one each day at their regular phone number. She asks simple,
              friendly questions that reveal how they are feeling and whether their daily needs are being met.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              You can select the questions that matter most, such as "Have you taken your medication?", "How did you
              sleep last night?", or "Have you eaten?". Questions can be customized over time, so you might focus on
              sleep one week and activity or nutrition the next. This flexibility makes every call more personal and
              meaningful.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">No special equipment is required</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Questions can be tailored to your loved one's needs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Friendly, conversational approach</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/happy-senior-talking-to-lola.webp"
              alt="Happy elderly woman talking on phone"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Wellness Alerts */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/concerned-man-wellness-alerts.webp"
              alt="Concerned man talking on phone"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-8 h-8 text-[#e879f9]" />
              <h3 className="text-3xl font-bold text-gray-900">Wellness Alerts Sent to You</h3>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              If Lola notices concerning answers, such as skipped meals, unusual mood changes, or new aches and pains,
              you will receive a real-time alert. These notifications help you step in quickly and provide support
              before small issues turn into bigger problems.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Real-time wellness alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Early intervention opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Prevent small issues from becoming big problems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple, Private, and Secure */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#e879f9]" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Simple, Private, and Secure</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Positive Check is designed to be as easy and stress-free as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#e879f9]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">No special equipment required</h4>
                <p className="text-gray-600">Works with any phone</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#e879f9]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Questions can be tailored</h4>
                <p className="text-gray-600">To your loved one's needs</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#e879f9]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">All information is kept private</h4>
                <p className="text-gray-600">HIPAA-compliant</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#e879f9]" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Affordable monthly plan</h4>
                <p className="text-gray-600">With the option to cancel anytime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Families Say</h3>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto min-h-[280px]">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={familyTestimonials[currentTestimonialIndex].image || "/placeholder.svg"}
                  alt={`${familyTestimonials[currentTestimonialIndex].author} from ${familyTestimonials[currentTestimonialIndex].location}`}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm font-medium text-[#e879f9] uppercase">For Families</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                  "{familyTestimonials[currentTestimonialIndex].quote}"
                </blockquote>
                <cite className="text-gray-900 font-semibold">
                  — {familyTestimonials[currentTestimonialIndex].author},{" "}
                  {familyTestimonials[currentTestimonialIndex].location}
                </cite>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {familyTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonialIndex ? "bg-[#e879f9]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with Positive Check is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Sign up and customize</h4>
                <p className="text-gray-600">
                  Choose the questions that matter most to your loved one's health and well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Lola starts calling</h4>
                <p className="text-gray-600">
                  Our virtual assistant begins daily check-ins at the time that works best for your loved one.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Get insights and alerts</h4>
                <p className="text-gray-600">
                  View daily summaries and receive notifications when your attention is needed.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Stay connected with confidence</h4>
                <p className="text-gray-600">Feel more at ease knowing your loved one is being checked on every day.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Family-Focused FAQs Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h3>
          </div>

          <div className="space-y-4">
            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                Why should I choose Positive Check?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Positive Check gives families peace of mind by making sure loved ones are checked on every day. With the
                warmth of a friendly voice and the reliability of smart technology, it helps seniors stay safe and
                connected while easing family worries.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                How do I prepare for the first call?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Simply let your loved one know they will be receiving a daily wellness call from Lola at Positive Check.
                Lola will ask a few simple questions about how they are doing. If they have caller ID, the calls will
                come from 866-605-8571. Nothing special is required on their part. They just need to answer the phone.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                How does Positive Check support seniors' independence?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                By checking in every day, Lola helps seniors feel supported while encouraging healthy habits like eating
                meals, getting good sleep, and remembering medications. These small touches make it easier for seniors
                to live independently at home with confidence and dignity.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                Is Positive Check secure?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes. Protecting privacy and security is a top priority. All calls and reports are handled with the
                utmost care, and sensitive information is never shared outside your trusted circle.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                What if my loved one is hard of hearing?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Lola speaks clearly and slowly, and can repeat questions if needed. The call volume can also be
                adjusted, and your loved one can ask Lola to speak louder if necessary.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                What if my loved one feels nervous about AI?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Lola is designed to feel friendly and approachable. We suggest describing her as a helpful companion who
                calls to check in and make sure everything is okay. Many families find that once seniors experience a
                call, they quickly feel at ease.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                Does Lola replace human caregivers?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                No. Lola does not replace caregivers. She simply adds an extra layer of support by checking in every
                day, sharing updates with family, and flagging concerns early. This helps caregivers focus on what
                matters most while knowing nothing slips through the cracks.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                What makes Positive Check unique?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Unlike other services, Positive Check is available every day, never misses a call, and keeps caregivers
                and families informed. Families receive instant updates and can feel confident that their loved one is
                safe and cared for.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                Is Positive Check personalized for each user?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes. Every call is tailored to your loved one's needs. For example, if reminders about medication are
                important, Lola will ask about that. If staying active is a goal, Lola can encourage that too. Each
                interaction feels personal and meaningful.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                Can Positive Check help with caregiver burnout?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes. Positive Check helps reduce stress for families and caregivers by handling daily check-ins and
                keeping everyone informed. This allows you to focus on enjoying quality time with your loved one instead
                of worrying about whether they are okay.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                How much does Positive Check cost?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Positive Check is available for a flat rate of $20 per month. This includes daily check-in calls,
                real-time alerts, and family reporting, all designed to make aging in place safer and more reassuring.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                How do families receive updates and reports?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                After each call, families receive an email letting them know the outcome. If the call was successful,
                the email confirms that and includes a link to the dashboard with full call details. If Positive Check
                is unable to reach your loved one after three attempts, the email will notify you immediately so you can
                follow up. This ensures families always know what is happening in real time.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Start Today</h3>
          <p className="text-xl mb-8 text-purple-100">Stay connected and reduce worry with Positive Check.</p>
          <Button className="bg-white text-[#e879f9] hover:bg-purple-50 px-8 py-4 text-lg font-bold">
            START FREE TRIAL
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <Link href="/">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Positive_logo_dark%20blue-sRimcvcXTqgT2F3AJ3D2DhpkN4AY7C.png"
                alt="Positive"
                className="h-16"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
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
          <div className="border-t mt-8 pt-8 text-center">
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
        </div>
      </footer>
    </div>
  )
}
