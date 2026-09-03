"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, BarChart3, Shield, Stethoscope, Users, AlertTriangle } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { RequestDemoModal } from "@/components/request-demo-modal"
import { LolaCallModal } from "@/components/lola-call-modal"
import { PublicFooter } from "@/components/shared/public-footer"
import { PublicHeader } from "@/components/shared/public-header"
import { StructuredData, medicalServiceSchema, faqSchema, generateBreadcrumbSchema } from "@/components/structured-data"
import toast, { Toaster } from 'react-hot-toast'
import { getAttributionContext, trackEvent } from "@/lib/analytics"

export default function HomePage() {
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
        "Measure patient coverage, call volume, alert activity, and contact completion in real time. Identify trends, track performance goals, and maintain visibility into program compliance.",
      image: "/images/admin-console-dashboard-new.png",
      alt: "Admin console dashboard showing comprehensive analytics, patient metrics, and care workflow data",
    },
    {
      id: "client-management",
      title: "Patient Management",
      description:
        "Streamline enrollment, manage participation, and maintain accurate records across your patient population. Keep outreach aligned with program requirements and reporting needs.",
      image: "/images/admin-console-client-management.png",
      alt: "Admin console client management showing patient roster with contact details and status indicators",
    },
    {
      id: "alert-management",
      title: "Alert Management",
      description:
        "Prioritize and resolve clinical and operational alerts quickly through structured workflows. Reduce response time and ensure timely follow-up on meaningful changes.",
      image: "/images/admin-console-alert-management-new.png",
      alt: "Admin console alert management showing critical patient alerts and real-time notifications",
    },
    {
      id: "call-logs",
      title: "Call Logs",
      description:
        "Maintain complete outreach records with timestamps, duration, and outcomes. Support documentation, quality oversight, and audit readiness across your programs.",
      image: "/images/admin-console-call-logs.png",
      alt: "Admin console call logs showing detailed call history and patient interaction records",
    },
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const contactFormStarted = useRef(false)
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      {/* Organization schema is emitted site-wide by app/layout.tsx */}
      <StructuredData data={medicalServiceSchema} id="schema-medical-service" />
      <StructuredData data={faqSchema} id="schema-faq" />
      <StructuredData data={generateBreadcrumbSchema([{name: "Home", url: "https://www.positivecheck.com"}])} id="schema-breadcrumb" />
      <PublicHeader currentPage="home" />

      {/* Hero Section */}
      <section className="px-6 py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-center lg:text-left min-w-0">
            <p className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-4">AI voice and SMS for care teams</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Reach every RPM and CCM patient—without adding call-center headcount
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Automate routine outreach, turn patient responses into structured documentation, and route urgent concerns to the right care-team member in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-8">
              <RequestDemoModal source="homepage_hero">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-[#d946ef] text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold min-h-12 whitespace-normal">
                  BOOK A 15-MINUTE DEMO
                </Button>
              </RequestDemoModal>
              <LolaCallModal source="homepage_hero">
                <Button variant="outline" className="w-full sm:w-auto border-[#a21caf] text-[#a21caf] hover:bg-purple-50 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold min-h-12 whitespace-normal">
                  HEAR A PATIENT CALL
                </Button>
              </LolaCallModal>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-gray-200 pt-6">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">1,509</p>
                <p className="text-xs sm:text-sm text-gray-600">patients reached</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">485</p>
                <p className="text-xs sm:text-sm text-gray-600">alerts surfaced</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">100%</p>
                <p className="text-xs sm:text-sm text-gray-600">alerts resolved</p>
              </div>
            </div>
            <Link
              href="/case-studies/scaling-patient-engagement"
              prefetch={false}
              className="inline-block mt-3 text-sm font-medium text-purple-700 hover:text-purple-900 underline underline-offset-4"
            >
              Read the six-month implementation study
            </Link>
          </div>
          <div className="relative min-w-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-3xl -z-10" />
            <Image
              src="/images/admin-console-dashboard-new.png"
              alt="Positive Check dashboard showing patient outreach, alerts, and engagement results"
              width={1200}
              height={760}
              priority
              sizes="(min-width: 1280px) 612px, (min-width: 1024px) 48vw, calc(100vw - 48px)"
              className="w-full h-auto rounded-2xl border border-gray-200 shadow-xl"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10">
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-600 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#e879f9]" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#e879f9]" />
              <span>No Apps or Devices Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#e879f9]" />
              <span>Built for Healthcare Providers</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#e879f9]" />
              <span>Real-Time Alerts & Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Value Proposition */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Reliable Patient Outreach</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Positive Check automates structured voice and SMS check-ins for RPM, CCM, and post-discharge care in any language. Increase contact completion, identify issues earlier, and scale patient engagement without increasing headcount.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-600">HIPAA-compliant conversations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-600">Real-time reporting and documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-600">Automated alerting and escalation</span>
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
              sizes="(min-width: 1280px) 592px, (min-width: 1024px) 48vw, calc(100vw - 48px)"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scale Patient Engagement Without Scaling Staff</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Positive Check automates structured voice and SMS outreach while capturing documentation, engagement data, and actionable alerts in one unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Check-Ins</h3>
                <p className="text-gray-600">
                  Structured calls and SMS outreach that meets program requirements and increases patient contact completion.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <BarChart3 className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Insights</h3>
                <p className="text-gray-600">
                  Track outreach performance, monitor patient responses, and receive real-time alerts for clinical and operational issues.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliant</h3>
                <p className="text-gray-600">
                  Enterprise-grade HIPAA-compliant infrastructure with secure data handling, audit-ready records, and role-based access controls.
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
              sizes="(min-width: 1280px) 592px, (min-width: 1024px) 48vw, calc(100vw - 48px)"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Meet Lola</h2>
            <p className="text-lg text-purple-100 mb-8">
              Lola is our HIPAA-compliant virtual assistant for structured patient outreach. She conducts voice and SMS check-ins, captures program-aligned data, and escalates meaningful changes in real time. Check-ins can be configured for RPM, CCM, post-discharge, or any care program requiring consistent, documented engagement. Lola speaks virtually any language, enabling scalable outreach across diverse populations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">Program-aligned data capture</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">
                  Early identification of risk signals
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-200 mt-1" />
                <span className="text-purple-100">
                  Automated escalation workflows
                </span>
              </div>
            </div>

            <RequestDemoModal>
              <Button className="bg-white text-[#a21caf] hover:bg-purple-50 px-6 py-3 font-bold">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How does it work?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Step 1: Personalized Scheduling</h3>
                <p className="text-gray-600">
                  Set up convenient call times at any cadence (daily, weekly, or custom) and select the questions you want Lola to ask for your patients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Step 2: Automated Voice and SMS Check-Ins</h3>
                <p className="text-gray-600">
                  Lola contacts patients on their existing phone numbers, conducts structured conversations, and adapts follow-up prompts based on patient responses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Step 3: Real-Time Documentation and Alerts</h3>
                <p className="text-gray-600">
                  Care teams receive structured data, compliance reporting, and automated alerts through a secure management console.
                </p>
              </div>
            </div>

            {/* Why Providers Choose Positive Check */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Providers Choose Positive Check:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm text-gray-600">
                    Simple to Deploy: No apps or additional equipment required.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#e879f9] flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Built to Scale: From dozens to thousands of patients without added staff.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#e879f9] flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Flexible by Design: Adjust cadence, scripts, languages, and alerts as needs evolve.
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
              sizes="(min-width: 1280px) 592px, (min-width: 1024px) 48vw, calc(100vw - 48px)"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Real-Time Alerts and Notifications Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/pc-concerned-senior.png"
              alt="Concerned senior during a wellness check-in call"
              width={600}
              height={400}
              sizes="(min-width: 1280px) 592px, (min-width: 1024px) 48vw, calc(100vw - 48px)"
              className="rounded-lg shadow-xl w-full object-cover"
              style={{ height: "400px", objectPosition: "center center" }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Alerts and Escalation</h2>
            <p className="text-lg text-gray-600 mb-8">
              Positive Check detects meaningful changes and triggers immediate alerts to your care team. Structured escalation workflows support faster intervention and reduce avoidable risk.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Configurable alert thresholds</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Automated escalation paths</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9]" />
                <span className="text-gray-700">Audit-ready documentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Console Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Admin Console</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your operational command center for patient outreach and program oversight.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id ? "bg-[#a21caf] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                    sizes="(min-width: 1280px) 1152px, calc(100vw - 48px)"
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
              Drive measurable improvements in patient engagement, program performance, and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Expand Coverage</h3>
                <p className="text-gray-600">Increase patient reach without increasing staff workload.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <BarChart3 className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Protect Reimbursement</h3>
                <p className="text-gray-600">Improve RPM and CCM compliance with consistent, documented outreach.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Improve Patient Experience</h3>
                <p className="text-gray-600">Deliver reliable check-ins that support engagement and satisfaction.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <AlertTriangle className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reduce Avoidable Risk</h3>
                <p className="text-gray-600">Identify meaningful changes earlier to lower downstream costs of care.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-[#e879f9] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Scale with Flexibility</h3>
                <p className="text-gray-600">
                  Deliver structured check-ins at any cadence, across any care program.
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
              Positive Check is built on enterprise-grade, HIPAA-compliant infrastructure designed to protect patient data and support secure program operations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Full HIPAA compliance and secure data handling</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Role-based access controls for authorized teams</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Encrypted data storage and transmission</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/daily-checkin-calls.webp"
              alt="Senior patient receiving automated wellness check-in call from healthcare provider"
              width={600}
              height={320}
              sizes="(min-width: 1280px) 592px, (min-width: 1024px) 48vw, calc(100vw - 48px)"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Healthcare Providers</h2>
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
                  sizes="80px"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm font-medium text-[#a21caf] uppercase">Healthcare Provider</span>
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
                  className="w-6 h-6 inline-flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a21caf]"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonialIndex ? "bg-[#a21caf]" : "bg-gray-400"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Talk through your workflow</h2>
            <p className="text-gray-600">Share the challenge you are trying to solve. Only your name and work email are required.</p>
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
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        firstName: formData.get('firstName'),
                        lastName: formData.get('lastName'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        customerType: formData.get('customerType'),
                        hearAboutUs: formData.get('hearAbout'),
                        message: formData.get('message'),
                        newsletter: formData.get('newsletter') === 'on',
                        attribution: getAttributionContext(),
                      }),
                    })

                    if (!response.ok) {
                      const errData = await response.json().catch(() => ({}))
                      throw new Error(errData.error || 'Failed to submit form')
                    }

                    toast.success("Thank you for your message. We will be in touch soon!", {
                      duration: 3000,
                      style: {
                        background: "#10B981",
                        color: "#FFFFFF",
                      },
                    })
                    trackEvent("form_submit", { form_name: "homepage_contact" })
                    trackEvent("generate_lead", { lead_type: "contact", form_name: "homepage_contact" })
                    form.reset()
                    setIsSubmitted(true)
                  } catch (error) {
                    console.error('Error submitting form:', error)
                    trackEvent("form_error", { form_name: "homepage_contact", error_type: "submission_failed" })
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
                onFocusCapture={() => {
                  if (contactFormStarted.current) return
                  contactFormStarted.current = true
                  trackEvent("form_start", { form_name: "homepage_contact" })
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
                      Last Name <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
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
                    Phone <span className="text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="customerType" className="block text-sm font-medium text-gray-700 mb-2">
                    I am interested in <span className="text-gray-500">(optional)</span>
                  </label>
                  <select
                    id="customerType"
                    name="customerType"
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
                    How did you hear about us? <span className="text-gray-500">(optional)</span>
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
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
                    Message <span className="text-gray-500">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e879f9] resize-vertical"
                    placeholder="Please share your questions or how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
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
      <PublicFooter />
    </div>
  )
}
