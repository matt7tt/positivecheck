"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, BarChart3, Shield, Heart, Stethoscope, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { RequestDemoModal } from "@/components/request-demo-modal"
import { StructuredData, organizationSchema, medicalServiceSchema } from "@/components/structured-data"
import toast, { Toaster } from 'react-hot-toast'

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

export default function HomePage() {
  const headlines = [
    "Wellness",
    "Medicine Adherence",
    "Sleep Quality",
    "Mood & Well-Being",
    "Mobility & Fall Risk",
    "Cognitive Health",
    "Appetite & Nutrition",
    "Symptom Tracking", // Changed from "Symptom Change" to be shorter
    "Remote Patient Management",
    "Chronic Care Management",
    "Post-Discharge Follow-Up",
  ]

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)

  const testimonials = [
    {
      type: "family",
      quote:
        "I live across the country from my mom, and Lola's daily calls give me peace of mind. If something's wrong, I know right away.",
      author: "Daughter",
      location: "Long Beach, CA",
      image: "/images/middle-aged-woman-daughter.png",
    },
    {
      type: "provider",
      quote:
        "With 1,500 patients on chronic care plans, we needed a scalable way to stay in touch. Positive Check handles the routine calls so our nurses can focus on the ones who need immediate attention.",
      author: "Care Coordinator",
      location: "Community Clinic",
      image: "/images/healthcare-care-coordinator.png",
    },
    {
      type: "family",
      quote:
        "My dad loves hearing from Lola each morning. It's simple, friendly, and helps him feel more connected without needing a smartphone.",
      author: "Son",
      location: "Denver, CO",
      image: "/images/middle-aged-man-son.png",
    },
    {
      type: "provider",
      quote:
        "We've cut down on unnecessary readmissions by using Positive Check for post-discharge follow-ups. Patients feel supported, and our staff isn't overwhelmed with phone calls.",
      author: "Director of Population Health",
      location: "Regional Health System",
      image: "/images/healthcare-director-woman.png",
    },
    {
      type: "family",
      quote:
        "Positive Check has become part of our family routine. I can focus on work knowing my grandmother is being checked on every day.",
      author: "Grandson",
      location: "Austin, TX",
      image: "/images/young-man-grandson.png",
    },
    {
      type: "provider",
      quote:
        "The dashboard makes it easy to see which patients might be struggling with medications or new symptoms. It's become an essential part of our RPM program.",
      author: "Nurse Manager",
      location: "Primary Care Group",
      image: "/images/nurse-manager-healthcare.png",
    },
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 3000) // Change headline every 3 seconds

    return () => clearInterval(interval)
  }, [headlines.length])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000) // Slowed down testimonial rotation from 7 seconds to 8 seconds

    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <StructuredData data={organizationSchema} />
      <StructuredData data={medicalServiceSchema} />
      {/* Header */}
      <header className="px-6 py-2 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <img
                src="/images/positive-logo-dark-blue.png"
                alt="Positive Check - Daily wellness calls for seniors logo"
                className="h-14 w-auto -mt-1"
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
                  <Link href="/sign-in/families" className="w-full">
                    For Families
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sign-in/providers" className="w-full">
                    For Providers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>

      {/* Hero Section - Introduction */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <div className="h-[120px] lg:h-[140px] flex flex-col justify-center items-center">
              <div className="flex flex-wrap justify-center items-baseline gap-x-2 max-w-5xl">
                <span className="whitespace-nowrap">AI-Powered</span>
                <span className="text-[#e879f9] font-bold min-w-0 flex-shrink-0 transition-opacity duration-500 ease-in-out">
                  {headlines[currentHeadlineIndex]}
                </span>
              </div>
              <div className="mt-2">
                <span>Check-In Calls</span>
              </div>
            </div>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our AI-powered calls handle routine check-ins and surface important changes, helping families stay connected
            and helping providers strengthen their RPM, CCM, post-discharge follow-up programs.
          </p>
        </div>
      </section>

      {/* For Families Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Families Section */}
            <Card className="p-8 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Heart className="w-8 h-8 text-white" />
                    <h2 className="text-3xl font-bold text-white">For Families</h2>
                  </div>
                  <Link href="/families">
                    <Button
                      variant="outline"
                      className="bg-white border-white text-[#e879f9] hover:bg-purple-50 hover:text-[#e879f9] px-4 py-2 text-sm font-bold"
                    >
                      LEARN MORE
                    </Button>
                  </Link>
                </div>

                <div className="mb-6">
                  <img
                    src="/images/happy-senior-talking-to-lola-5.webp"
                    alt="Elderly woman smiling while receiving daily wellness check-in call from Positive Check"
                    className="rounded-lg shadow-md w-full mb-6 object-cover"
                    style={{
                      height: "288px", // Set explicit height instead of h-72 class to prevent scaling issues
                      objectPosition: "center -60px", // Moved image up by additional 20px (from -40px to -60px) so man's hair touches the top frame
                      imageRendering: "auto",
                      filter: "contrast(1.1) saturate(1.05)",
                    }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">Daily Wellness Check-Ins for Aging Parents</h3>
                <p className="text-purple-100 mb-6">
                  Lola is our caring AI companion who makes regular check-in calls to seniors at home or in communities.
                  She asks simple, important questions about health, mood, and daily life. Families receive timely
                  alerts when something changes and can track trends in a secure dashboard.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">No smartphones or apps needed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Daily wellness reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Starts at $20/month</span>
                  </div>
                </div>

                <Link href="/onboarding-wizard">
                  <Button className="w-full bg-white text-[#e879f9] hover:bg-purple-50 py-3 font-bold">
                    START FREE TRIAL
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* For Providers Section */}
            <Card className="p-8 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="w-8 h-8 text-white" />
                    <h2 className="text-3xl font-bold text-white">For Providers</h2>
                  </div>
                  <Link href="/providers">
                    <Button
                      variant="outline"
                      className="bg-white border-white text-[#e879f9] hover:bg-purple-50 hover:text-[#e879f9] px-4 py-2 text-sm font-bold"
                    >
                      LEARN MORE
                    </Button>
                  </Link>
                </div>

                <div className="mb-6">
                  <img
                    src="/images/new-administrator-admin-console.webp"
                    alt="Healthcare provider using Positive Check admin dashboard to monitor patient wellness"
                    className="rounded-lg shadow-md w-full mb-6 object-cover"
                    style={{
                      height: "288px", // Set explicit height instead of h-72 class to prevent scaling issues
                      objectPosition: "center center", // Updated to use new high-quality provider image
                      imageRendering: "auto",
                      filter: "contrast(1.1) saturate(1.05)",
                    }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  RPM, CCM, and Post Discharge Follow-Up Outreach
                </h3>
                <p className="text-purple-100 mb-6">
                  Lola makes scheduled check-in calls to patients at home, gathering key information about symptoms,
                  medication, and well-being. Providers can customize prompts, receive real-time alerts when concerns
                  arise, and view population trends in a HIPAA-compliant dashboard.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">HIPAA-compliant AI conversations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Management console with insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-200" />
                    <span className="text-purple-100">Real-time alerts and escalation for urgent patient needs</span>
                  </div>
                </div>

                <RequestDemoModal>
                  <Button className="w-full bg-white text-[#e879f9] hover:bg-purple-50 py-3 font-bold">
                    REQUEST DEMO
                  </Button>
                </RequestDemoModal>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* B2B Features Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Transform care at home with AI</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered calls handle routine check-ins and surface important changes, helping families stay
              connected and helping providers strengthen their RPM, CCM, post-discharge follow-up programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Automated Check-Ins</h4>
                <p className="text-gray-600">
                  Conduct wellness calls, medication reminders, and follow-ups automatically, saving time for families
                  and care teams.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <BarChart3 className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Smart Analytics</h4>
                <p className="text-gray-600">
                  View call history, track engagement trends, and spot potential issues early with real-time alerts and
                  easy-to-read dashboards.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliant</h4>
                <p className="text-gray-600">
                  Enterprise-grade security with full HIPAA compliance to keep every conversation and record safe and
                  confidential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Lola Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-purple-500 to-[#e879f9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/care-companion-lola-calling.webp"
              alt="Healthcare professional conducting daily wellness check-in calls for senior patients"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Meet Lola</h3>
            <p className="text-lg text-purple-100 mb-8">
              Lola is our friendly, HIPAA-compliant AI companion. She makes check-in calls that ask about well-being,
              medication, mood, and daily life. Responses are recorded, tracked, and escalated if needed so families
              have peace of mind and providers can capture the data that matters for RPM and CCM programs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">Provides peace of mind for busy families and care teams</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">
                  Supports seniors and patients in maintaining independence and safety
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">
                  Delivers wellness updates with meaningful trend analysis and timely alerts
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/families" className="flex-1">
                <Button className="w-full bg-white text-[#e879f9] hover:bg-purple-50 px-6 py-3 font-bold">
                  FAMILIES - LEARN MORE
                </Button>
              </Link>
              <Link href="/providers" className="flex-1">
                <Button className="w-full bg-white text-[#e879f9] hover:bg-purple-50 px-6 py-3 font-bold">
                  PROVIDERS - LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">How does it work?</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Step 1: Personalized Scheduling</h4>
                <p className="text-gray-600">
                  Set up convenient call times at any cadence (daily, weekly, or custom) and select the questions you
                  want Lola to ask, whether for a loved one or a panel of patients.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Step 2: Friendly Check-Ins</h4>
                <p className="text-gray-600">
                  Lola makes the calls to the recipient's regular phone number, asking customized prompts and follow-up
                  questions if responses raise concern.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Step 3: Insights Delivered to You</h4>
                <p className="text-gray-600">
                  Families receive wellness updates and alerts, while providers can view population trends and
                  compliance reports in a secure dashboard.
                </p>
              </div>
            </div>

            {/* Why People Choose Positive Check */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Why People Choose Positive Check:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#e879f9]" />
                  <span className="text-sm text-gray-600">
                    Easy setup: No smartphones, apps, or extra equipment needed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#e879f9]" />
                  <span className="text-sm text-gray-600">
                    Affordable and flexible: Simple pricing with no hidden fees, cancel anytime
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#e879f9]" />
                  <span className="text-sm text-gray-600">
                    Reliable and adaptable: Adjust settings, questions, and frequency as needs change
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/families" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white px-6 py-3 font-bold">
                  FAMILIES - LEARN MORE
                </Button>
              </Link>
              <Link href="/providers" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white px-6 py-3 font-bold">
                  PROVIDERS - LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/happy-senior-talking-to-lola-2.webp"
              alt="Senior citizen engaged in friendly wellness conversation with AI companion Lola"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Families and Providers</h3>
            <p className="text-lg text-gray-600">
              Real stories from families and providers who use Positive Check every day.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto min-h-[280px]">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonialIndex].image || "/placeholder.svg"}
                  alt={`${testimonials[currentTestimonialIndex].author} from ${testimonials[currentTestimonialIndex].location}`}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {testimonials[currentTestimonialIndex].type === "family" ? (
                    <Heart className="w-5 h-5 text-[#e879f9]" />
                  ) : (
                    <Stethoscope className="w-5 h-5 text-[#e879f9]" />
                  )}
                  <span className="text-sm font-medium text-[#e879f9] uppercase">
                    For {testimonials[currentTestimonialIndex].type === "family" ? "Families" : "Providers"}
                  </span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonials[currentTestimonialIndex].quote}"
                </blockquote>
                <cite className="text-gray-900 font-semibold">
                  — {testimonials[currentTestimonialIndex].author}, {testimonials[currentTestimonialIndex].location}
                </cite>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
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

      {/* Contact Form Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
          </div>

          <Card className="p-8 bg-white shadow-lg">
            <CardContent className="p-0">
              {isSubmitted ? (
                <div className="p-12 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                  <p className="text-gray-600">
                    Thanks for your message. We will be in touch soon.
                  </p>
                </div>
              ) : (
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault()
                  const form = e.currentTarget as HTMLFormElement
                  setIsSubmitting(true)

                  try {
                    const formData = new FormData(form)
                    const response = await fetch(`${API_BASE_URL}/api/contact`, {
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
                        hearAboutUs: formData.get('hearAbout'),
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
                    form.reset()
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
                }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="customerType" className="block text-sm font-medium text-gray-700 mb-2">
                    I am interested in <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="customerType"
                    name="customerType"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] focus:border-transparent"
                  >
                    <option value="">Select customer type</option>
                    <option value="families">For Families</option>
                    <option value="providers">For Providers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="online-search">Online Search (Google, Bing, etc.)</option>
                    <option value="social-media">Social Media (Facebook, Instagram, LinkedIn, etc.)</option>
                    <option value="friend-family">Friend or Family</option>
                    <option value="professional-referral">
                      Professional Referral (Doctor, Social Worker, Care Manager)
                    </option>
                    <option value="healthcare-provider">Healthcare Provider or Senior Living Community</option>
                    <option value="event-conference">Event or Conference</option>
                    <option value="news-article">News, Article, or Podcast</option>
                    <option value="email-newsletter">Email or Newsletter</option>
                    <option value="advertisement">Advertisement (Online or Print)</option>
                    <option value="partnership-program">Partnership Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] resize-vertical"
                    placeholder="Please share your questions or how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    defaultChecked
                    className="w-4 h-4 text-[#e879f9] border-gray-300 rounded focus:ring-[#e879f9]"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Sign up for news and updates
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white py-3 font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </Button>
              </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="/images/positive-logo-dark-blue-alt.png"
              alt="Positive"
              className="h-16"
            />
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
                          <Link href="/sign-in/families" className="w-full">
                            For Families
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/sign-in/providers" className="w-full">
                            For Providers
                          </Link>
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
