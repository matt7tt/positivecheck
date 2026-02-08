"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, BarChart3, Shield, Stethoscope, Users, AlertTriangle, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"
import { StructuredData, organizationSchema, medicalServiceSchema, faqSchema, generateBreadcrumbSchema } from "@/components/structured-data"
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
    "Symptom Tracking",
    "Remote Patient Management",
    "Chronic Care Management",
    "Post-Discharge Follow-Up",
  ]

  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("dashboard")

  const testimonials = [
    {
      quote:
        "With 1,500 patients on chronic care plans, we needed a scalable way to stay in touch. Positive Check handles the routine calls so our nurses can focus on the ones who need immediate attention.",
      author: "Care Coordinator",
      location: "Community Clinic",
      image: "/images/healthcare-care-coordinator.png",
    },
    {
      quote:
        "We've cut down on unnecessary readmissions by using Positive Check for post-discharge follow-ups. Patients feel supported, and our staff isn't overwhelmed with phone calls.",
      author: "Director of Population Health",
      location: "Regional Health System",
      image: "/images/healthcare-director-woman.png",
    },
    {
      quote:
        "The dashboard makes it easy to see which patients might be struggling with medications or new symptoms. It's become an essential part of our RPM program.",
      author: "Nurse Manager",
      location: "Primary Care Group",
      image: "/images/nurse-manager-healthcare.png",
    },
  ]

  const tabs = [
    {
      id: "dashboard",
      title: "Dashboard",
      description:
        "Get a quick overview of patient wellness across your population. Spot trends, review alerts, and track program performance in one secure view.",
      image: "/images/admin-console-dashboard-new.png",
      alt: "Admin console dashboard showing comprehensive analytics, patient metrics, and care workflow data",
    },
    {
      id: "client-management",
      title: "Client Management",
      description:
        "Easily enroll patients, update contact details, and manage program participation. Keep all client information organized and accessible.",
      image: "/images/admin-console-client-management.png",
      alt: "Admin console client management showing patient roster with contact details and status indicators",
    },
    {
      id: "alert-management",
      title: "Alert Management",
      description:
        "Review and prioritize wellness alerts in real time. Focus staff attention where it is needed most and document follow-up actions for compliance.",
      image: "/images/admin-console-alert-management-new.png",
      alt: "Admin console alert management showing critical patient alerts and real-time notifications",
    },
    {
      id: "call-logs",
      title: "Call Logs",
      description:
        "View detailed records of every check-in call, including patient responses and escalation questions. Ensure accountability and maintain a clear audit trail.",
      image: "/images/admin-console-call-logs.png",
      alt: "Admin console call logs showing detailed call history and patient interaction records",
    },
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [headlines.length])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      <StructuredData data={organizationSchema} id="schema-organization" />
      <StructuredData data={medicalServiceSchema} id="schema-medical-service" />
      <StructuredData data={faqSchema} id="schema-faq" />
      <StructuredData data={generateBreadcrumbSchema([{name: "Home", url: "https://positivecheck.com"}])} id="schema-breadcrumb" />
      {/* Header */}
      <header className="px-6 py-2 border-b relative">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/positive-logo-dark-blue.png"
                alt="Positive Check - AI-powered patient check-in calls logo"
                width={210}
                height={56}
                className="h-14 w-auto -mt-1"
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
          </div>
        </nav>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white border-b shadow-lg z-50">
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/"
                className="block text-gray-900 font-medium hover:text-[#e879f9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-[#e879f9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block text-gray-600 hover:text-[#e879f9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-[#e879f9]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t pt-4">
                <Link
                  href="/sign-in"
                  className="block text-gray-600 hover:text-[#e879f9]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
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
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Engage patients. Improve outcomes. Save time. Our AI-powered calls handle routine check-ins and surface
            important changes, helping providers strengthen their RPM, CCM, and post-discharge follow-up programs.
          </p>
          <RequestDemoModal>
            <Button className="bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white px-8 py-4 text-lg font-bold">
              REQUEST DEMO
            </Button>
          </RequestDemoModal>
        </div>
      </section>

      {/* Provider Value Proposition */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Stethoscope className="w-8 h-8 text-[#e879f9]" />
              <h2 className="text-3xl font-bold text-gray-900">RPM, CCM, and Post-Discharge Follow-Up Outreach</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Positive Check helps providers stay connected with patients through friendly calls and timely alerts. Our
              AI-powered service supports Remote Patient Monitoring (RPM), Chronic Care Management (CCM), and
              post-discharge follow-ups with structured check-ins. All without adding staff workload.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-600">HIPAA-compliant AI conversations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-600">Management console with insights</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-600">Real-time alerts and escalation for urgent patient needs</span>
              </div>
            </div>

            <RequestDemoModal>
              <Button className="bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white px-6 py-3 font-bold">
                REQUEST DEMO
              </Button>
            </RequestDemoModal>
          </div>
          <div>
            <Image
              src="/images/new-administrator-admin-console.webp"
              alt="Healthcare provider using Positive Check admin dashboard to monitor patient wellness"
              width={800}
              height={400}
              className="rounded-lg shadow-xl w-full object-cover"
              style={{
                height: "400px",
                objectPosition: "center center",
                imageRendering: "auto",
                filter: "contrast(1.1) saturate(1.05)",
              }}
            />
          </div>
        </div>
      </section>

      {/* B2B Features Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Transform care at home with AI</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered calls handle routine check-ins and surface important changes, helping providers strengthen
              their RPM, CCM, and post-discharge follow-up programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Automated Check-Ins</h4>
                <p className="text-gray-600">
                  Conduct wellness calls, medication reminders, and follow-ups automatically, saving time for care
                  teams.
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
            <Image
              src="/images/care-companion-lola-calling.webp"
              alt="Healthcare professional conducting daily wellness check-in calls for senior patients"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Meet Lola</h3>
            <p className="text-lg text-purple-100 mb-8">
              Lola is our friendly, HIPAA-compliant AI companion. She makes check-in calls that ask about well-being,
              medication, mood, and daily life. Responses are recorded, tracked, and escalated if needed so providers
              can capture the data that matters for RPM and CCM programs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">Delivers proactive insights for care teams</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">
                  Supports patients in maintaining independence and safety
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">
                  Delivers wellness updates with meaningful trend analysis and timely alerts
                </span>
              </div>
            </div>

            <RequestDemoModal>
              <Button className="bg-white text-[#e879f9] hover:bg-purple-50 px-6 py-3 font-bold">
                REQUEST DEMO
              </Button>
            </RequestDemoModal>
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
                  want Lola to ask for your patients.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Step 2: Friendly Check-Ins</h4>
                <p className="text-gray-600">
                  Lola makes the calls to the patient's regular phone number, asking customized prompts and follow-up
                  questions if responses raise concern.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">Step 3: Insights Delivered to You</h4>
                <p className="text-gray-600">
                  Care teams receive wellness updates and alerts, and can view population trends and
                  compliance reports in a secure dashboard.
                </p>
              </div>
            </div>

            {/* Why Providers Choose Positive Check */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Why Providers Choose Positive Check:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm text-gray-600">
                    Easy setup: No smartphones, apps, or extra equipment needed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm text-gray-600">
                    Scalable: From a handful of patients to thousands
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm text-gray-600">
                    Reliable and adaptable: Adjust settings, questions, and frequency as needs change
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <RequestDemoModal>
                <Button className="bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white px-6 py-3 font-bold">
                  REQUEST DEMO
                </Button>
              </RequestDemoModal>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/happy-senior-talking-to-lola-2.webp"
              alt="Senior citizen engaged in friendly wellness conversation with AI companion Lola"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Admin Console Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Console</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All patient check-ins are organized in a secure, HIPAA-compliant admin console with comprehensive features
              for managing your patient population.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id ? "bg-[#e879f9] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.title.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {tabs.map((tab) => (
              <div key={tab.id} className={`${activeTab === tab.id ? "block" : "hidden"}`}>
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{tab.description}</p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={tab.image}
                    alt={tab.alt}
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-xl w-full max-w-6xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits for Providers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your patient care delivery with consistent outreach and early intervention capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Expand Outreach</h4>
                <p className="text-gray-600">Expand outreach without increasing staff burden</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <BarChart3 className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Strengthen Programs</h4>
                <p className="text-gray-600">Strengthen RPM and CCM program compliance and reimbursement</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Improve Satisfaction</h4>
                <p className="text-gray-600">Improve patient satisfaction and engagement</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <AlertTriangle className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Spot Risks Earlier</h4>
                <p className="text-gray-600">Spot risks earlier to reduce avoidable costs of care</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Consistent Check-ins</h4>
                <p className="text-gray-600">
                  Deliver consistent check-ins at scale with total flexibility in scheduling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HIPAA Compliant and Secure</h2>
            <p className="text-lg text-gray-600 mb-8">
              Positive Check is fully HIPAA compliant. Patient data is always private, secure, and accessible only to
              authorized care teams.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Full HIPAA compliance</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Private and secure patient data</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Accessible only to authorized care teams</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/daily-checkin-calls.webp"
              alt="Senior patient receiving automated wellness check-in call from healthcare provider"
              width={600}
              height={320}
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Healthcare Providers</h3>
            <p className="text-lg text-gray-600">
              Real stories from providers who use Positive Check every day.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto min-h-[280px]">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[currentTestimonialIndex].image}
                  alt={`${testimonials[currentTestimonialIndex].author} from ${testimonials[currentTestimonialIndex].location}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm font-medium text-[#e879f9] uppercase">Healthcare Provider</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                  &ldquo;{testimonials[currentTestimonialIndex].quote}&rdquo;
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

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h3>
          </div>

          <div className="space-y-4">
            <details className="group border border-gray-200 rounded-lg bg-white">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                What does the Positive Check Admin Console provide?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                The Admin Console gives providers a centralized view of wellness check-ins, client status, and call
                performance. Dashboards summarize key metrics such as active alerts, intervention rates, and engagement
                levels. This makes it easy for care teams to monitor overall program effectiveness and quickly identify
                where human attention is needed.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg bg-white">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                How can providers use alerts and reporting?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Alerts immediately notify staff when follow-up is required, ensuring that no client is overlooked.
                Reports provide detailed insights into call outcomes, wellness trends, and the frequency of human
                interventions. This data allows providers to make more informed decisions, improve operational
                efficiency, and demonstrate measurable results to leadership or regulatory bodies.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg bg-white">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                How does Positive Check reduce workload for staff?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Positive Check automates routine daily check-ins, capturing essential information and flagging only
                those cases that require human intervention. This reduces the time staff spend on repetitive tasks and
                allows them to focus on higher-value care activities. As a result, organizations gain efficiency, reduce
                staff burnout, and optimize resources across their operations.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg bg-white">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                How secure is Positive Check?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Positive Check is designed with strong safeguards to protect sensitive client information. All data is
                encrypted in transit and at rest, and administrative controls are available to ensure only authorized
                users can access reports and client records. Security and privacy are treated as foundational elements
                of the platform.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg bg-white">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                Can Positive Check scale with our organization?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes. The Admin Console supports multiple users with role-based permissions and centralized oversight.
                Whether a provider manages a single location or multiple facilities, the platform can adapt to the
                organization's scale while maintaining consistency and visibility across all sites.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg bg-white">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                What makes Positive Check different from traditional wellness calls?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Traditional wellness calls often depend on call center staff or individual caregivers, which can be
                inconsistent, costly, and difficult to scale. Positive Check provides a reliable, AI-powered system that
                ensures every patient receives consistent attention. The platform also produces objective data, real-time
                alerts, and clear reporting that providers can use to improve outcomes, demonstrate compliance, and
                achieve a stronger return on investment.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-16 bg-white">
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
                        customerType: formData.get('customerType'),
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
                    <option value="">Select a program</option>
                    <option value="rpm">RPM Program</option>
                    <option value="ccm">CCM Program</option>
                    <option value="post-discharge">Post-Discharge Follow-Up</option>
                    <option value="other">Other</option>
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
                    <option value="colleague">Colleague or Peer</option>
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
            <Image
              src="/images/positive-logo-dark-blue-alt.png"
              alt="Positive"
              width={240}
              height={64}
              className="h-16 w-auto"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
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
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
                    How It Works
                  </Link>
                </li>
                <li>
                  <RequestDemoModal>
                    <button className="text-gray-600 hover:text-gray-900">
                      Request Demo
                    </button>
                  </RequestDemoModal>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              &copy; Positive Check 2025 |{" "}
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
