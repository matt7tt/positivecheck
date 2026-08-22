"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarDays, Loader2 } from "lucide-react"
import { getAttributionContext, trackEvent } from "@/lib/analytics"

interface RequestDemoModalProps {
  children: React.ReactNode
  source?: string
}

export function RequestDemoModal({ children, source = "site_cta" }: RequestDemoModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)
  const hasStarted = useRef(false)
  const bookingUrl = process.env.NEXT_PUBLIC_DEMO_BOOKING_URL

  const trackFormStart = () => {
    if (hasStarted.current) return
    hasStarted.current = true
    trackEvent("form_start", {
      form_name: "demo_request",
      cta_location: source,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/request-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          organization,
          attribution: getAttributionContext(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit request")
      }

      trackEvent("generate_lead", {
        lead_type: "demo_request",
        form_name: "demo_request",
        cta_location: source,
      })
      trackEvent("form_submit", {
        form_name: "demo_request",
        cta_location: source,
      })
      setIsSuccess(true)
    } catch (err) {
      trackEvent("form_error", {
        form_name: "demo_request",
        cta_location: source,
        error_type: "submission_failed",
      })
      setError("Failed to submit request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (nextOpen && !open) {
          trackEvent("cta_click", {
            cta_name: "request_demo",
            cta_location: source,
          })
          trackEvent("request_demo_open", { cta_location: source })
        }
        if (!nextOpen) {
          hasStarted.current = false
          setIsSuccess(false)
          setError("")
        }
      }}
    >
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a 15-minute workflow demo</DialogTitle>
          <DialogDescription>
            Share your contact details, then choose a time that works for you.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="text-green-600 mb-2">✓</div>
            <p className="text-lg font-semibold">Your request is in.</p>
            {bookingUrl ? (
              <>
                <p className="text-gray-600">Choose a convenient time to complete your booking.</p>
                <Button asChild className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("booking_link_click", {
                      form_name: "demo_request",
                      cta_location: source,
                    })}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    Choose a demo time
                  </a>
                </Button>
              </>
            ) : (
              <p className="text-gray-600">We&apos;ll reach out shortly to schedule your personalized demo.</p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} onFocusCapture={trackFormStart} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@healthcare.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Organization <span className="text-gray-500 font-normal">(optional)</span></Label>
              <Input
                id="organization"
                type="text"
                placeholder="Sunrise Senior Living"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                bookingUrl ? "Continue to scheduling" : "Request demo"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
