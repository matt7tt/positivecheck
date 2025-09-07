"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"
import { CheckCircle, Phone, BarChart3, Shield, Users, AlertTriangle, Stethoscope, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function ProvidersPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const providerTestimonials = [
    {
      quote:
        "With 1,500 patients on chronic care plans, we needed a scalable way to stay in touch. Positive Check handles the routine calls so our nurses can focus on the ones who need immediate attention.",
      author: "Care Coordinator",
      location: "Community Clinic",
      image: "/healthcare-care-coordinator.png",
    },
    {
      quote:
        "We've cut down on unnecessary readmissions by using Positive Check for post-discharge follow-ups. Patients feel supported, and our staff isn't overwhelmed with phone calls.",
      author: "Director of Population Health",
      location: "Regional Health System",
      image: "/healthcare-director-woman.png",
    },
    {
      quote:
        "The dashboard makes it easy to see which patients might be struggling with medications or new symptoms. It's become an essential part of our RPM program.",
      author: "Nurse Manager",
      location: "Primary Care Group",
      image: "/nurse-manager-healthcare.png",
    },
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % providerTestimonials.length)
    }, 8000) // Slowed down testimonial rotation from 7 seconds to 8 seconds

    return () => clearInterval(testimonialInterval)
  }, [providerTestimonials.length])

  const tabs = [
    {
      id: "dashboard",
      title: "Dashboard",
      description:
        "Get a quick overview of patient wellness across your population. Spot trends, review alerts, and track program performance in one secure view.",
      image: "/admin-console-dashboard-new.png",
      alt: "Admin console dashboard showing comprehensive analytics, patient metrics, and care workflow data",
    },
    {
      id: "client-management",
      title: "Client Management",
      description:
        "Easily enroll patients, update contact details, and manage program participation. Keep all client information organized and accessible.",
      image: "/admin-console-client-management.png",
      alt: "Admin console client management showing patient roster with contact details and status indicators",
    },
    {
      id: "alert-management",
      title: "Alert Management",
      description:
        "Review and prioritize wellness alerts in real time. Focus staff attention where it is needed most and document follow-up actions for compliance.",
      image: "/admin-console-alert-management-new.png",
      alt: "Admin console alert management showing critical patient alerts and real-time notifications",
    },
    {
      id: "call-logs",
      title: "Call Logs",
      description:
        "View detailed records of every check-in call, including patient responses and escalation questions. Ensure accountability and maintain a clear audit trail.",
      image: "/admin-console-call-logs.png",
      alt: "Admin console call logs showing detailed call history and patient interaction records",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Positive_logo_dark%20blue-Ztb3aXsT4kxSrAWQeENDzRzrq4uHRc.png"
              alt="Positive"
              className="h-11"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/families" className="text-gray-600 hover:text-gray-900">
              For Families
            </Link>
            <Link href="/providers" className="text-[#e879f9] font-semibold">
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
            <Stethoscope className="w-12 h-12 text-white" />
            <h1 className="text-5xl lg:text-6xl font-bold text-white">For Providers</h1>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Engage patients. Improve outcomes. Save time.
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Positive Check helps providers stay connected with patients through friendly calls and timely alerts. Our
            AI-powered service supports Remote Patient Monitoring (RPM), Chronic Care Management (CCM), and
            post-discharge follow-ups with structured check-ins. All without adding staff workload.
          </p>
          <Button className="bg-white text-[#e879f9] hover:bg-purple-50 px-8 py-4 text-lg font-bold">
            REQUEST DEMO
          </Button>
        </div>
      </section>

      {/* Flexible Automated Check-Ins Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Automated Check-Ins</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our virtual assistant Lola calls patients on their existing phones at the cadence you choose. Calls can be
              scheduled daily, weekly, bi-weekly, or on any other timeline that fits your care model. No apps or special
              devices are required.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Call prompts can be fully customized to match program goals or patient needs. If a patient responds in a
              way that raises concern, Lola will ask follow-up escalation questions to capture more detail for the care
              team.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">No apps or special devices required</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Fully customizable call prompts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Follow-up escalation questions when needed</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/daily-checkin-calls.webp"
              alt="Elderly woman on phone"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Real-Time Alerts Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/concerned-man-phone.webp"
              alt="Concerned man on phone"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Alerts and Notifications</h2>
            <p className="text-lg text-gray-600 mb-8">
              When concerning responses are detected, such as skipped medication, mood changes, or new symptoms, care
              teams receive an immediate alert. These early signals give providers the chance to step in quickly and
              prevent small issues from turning into costly complications.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Immediate alerts for concerning responses</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Early intervention opportunities</span>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#e879f9] mt-1" />
                <span className="text-gray-600">Prevent small issues from becoming costly complications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Console Section */}
      <section className="px-6 py-16 bg-white">
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
                  <img
                    src={tab.image || "/placeholder.svg"}
                    alt={tab.alt}
                    className="rounded-lg shadow-xl w-full max-w-6xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 bg-gray-50">
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
      <section className="px-6 py-16 bg-white">
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
            <img
              src="/new-administrator-admin-console.webp"
              alt="Healthcare administrator at desk with Positive Check dashboard"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Providers Say</h3>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto min-h-[280px]">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={providerTestimonials[currentTestimonialIndex].image || "/placeholder.svg"}
                  alt={`${providerTestimonials[currentTestimonialIndex].author} from ${providerTestimonials[currentTestimonialIndex].location}`}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-[#e879f9]" />
                  <span className="text-sm font-medium text-[#e879f9] uppercase">For Providers</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                  "{providerTestimonials[currentTestimonialIndex].quote}"
                </blockquote>
                <cite className="text-gray-900 font-semibold">
                  — {providerTestimonials[currentTestimonialIndex].author},{" "}
                  {providerTestimonials[currentTestimonialIndex].location}
                </cite>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {providerTestimonials.map((_, index) => (
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
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple setup and implementation that integrates seamlessly with your existing workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Set the cadence</h4>
                <p className="text-gray-600">
                  Choose how often patients receive check-ins. Daily, weekly, bi-weekly, or a fully custom schedule can
                  be supported.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Engineer the call prompts</h4>
                <p className="text-gray-600">
                  Positive Check will work with your team to design the right set of questions. We make sure each call
                  captures the information your program needs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Engage with patients</h4>
                <p className="text-gray-600">
                  Lola makes the calls, asks the chosen questions, and if needed triggers escalation questions to dig
                  deeper into patient concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#e879f9] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Get alerts and insights</h4>
                <p className="text-gray-600">
                  Providers receive timely notifications and can review results anytime in the secure dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-white">
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
                What client management tools are available?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                The Admin Console allows providers to view and manage each client's profile, including call history,
                alert status, and overall wellness patterns. Having this information in one place reduces administrative
                overhead, streamlines coordination among staff, and enables a clearer picture of each client's ongoing
                needs.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-lg bg-white">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50">
                Does Positive Check support call scheduling?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes. Providers can schedule calls based on client preferences and organizational policies. This
                flexibility ensures that wellness check-ins occur consistently and at times that best support the
                client's routine, improving engagement while reducing missed calls and unnecessary rescheduling efforts.
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
                What kind of reporting can providers access today?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Providers can access reporting on call volume, client engagement rates, intervention trends, and
                resolution times for escalated issues. These insights support quality improvement initiatives, provide
                transparency for compliance reviews, and help leadership measure the return on investment in Positive
                Check.
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
                How is staff onboarded to use the Admin Console?
                <span className="ml-6 flex-shrink-0 transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Positive Check provides guided onboarding and support resources to ensure staff quickly become
                comfortable with the platform. The console is designed for intuitive navigation, reducing the learning
                curve and minimizing training costs. Providers can expect staff to be up and running with minimal
                disruption to daily operations.
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
                ensures every client receives consistent attention. The platform also produces objective data, real-time
                alerts, and clear reporting that providers can use to improve outcomes, demonstrate compliance, and
                achieve a stronger return on investment.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">See It in Action</h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule a demo today and discover how Positive Check can support your patients and your staff.
          </p>
          <Button className="bg-white text-[#e879f9] hover:bg-purple-50 px-8 py-4 text-lg font-bold">
            REQUEST DEMO
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Positive_logo_dark%20blue-sRimcvcXTqgT2F3AJ3D2DhpkN4AY7C.png"
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
