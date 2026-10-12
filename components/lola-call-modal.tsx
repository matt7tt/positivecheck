"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import Link from 'next/link'

interface LolaCallModalProps {
  children: React.ReactNode
  source?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Formats a US phone number for display while typing: (415) 555-1234.
// If the user starts with "+", we leave it untouched so they can type any
// international number directly in E.164.
function formatPhoneInput(raw: string): string {
  if (raw.startsWith("+")) {
    return "+" + raw.slice(1).replace(/[^\d]/g, "")
  }
  const digits = raw.replace(/[^\d]/g, "").slice(0, 10)
  if (digits.length === 0) return ""
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

// Converts the display value to E.164 for submission. Returns null when the
// number doesn't look valid.
function toE164(display: string): string | null {
  if (display.startsWith("+")) {
    const digits = display.slice(1).replace(/[^\d]/g, "")
    if (digits.length < 8 || digits.length > 15 || digits.startsWith("0")) return null
    return "+" + digits
  }
  const digits = display.replace(/[^\d]/g, "")
  if (digits.length === 10) return "+1" + digits
  if (digits.length === 11 && digits.startsWith("1")) return "+" + digits
  return null
}

export function LolaCallModal({ children, source = "site_cta" }: LolaCallModalProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)
  const hasStarted = useRef(false)
  const submitting = useRef(false)

  const trackStart = () => {
    if (hasStarted.current) return
    hasStarted.current = true
    trackEvent('lead_form_start', { form_name: 'lola_call', cta_location: source })
  }

  const reset = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setConsent(false)
    setError("")
    setIsSuccess(false)
    setSubmittedEmail("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting.current) return
    trackStart()
    setError("")

    const cleanFirst = firstName.trim()
    const cleanLast = lastName.trim()
    const cleanEmail = email.trim()

    if (cleanFirst.length < 1 || cleanLast.length < 1) {
      trackEvent("form_error", { form_name: "lola_call", cta_location: source, error_type: "invalid_name" })
      setError("Please enter your first and last name.")
      return
    }
    if (!EMAIL_RE.test(cleanEmail)) {
      trackEvent("form_error", { form_name: "lola_call", cta_location: source, error_type: "invalid_email" })
      setError("Please enter a valid email address.")
      return
    }
    const e164 = toE164(phone)
    if (!e164) {
      trackEvent("form_error", { form_name: "lola_call", cta_location: source, error_type: "invalid_phone" })
      setError("Please enter a valid phone number (US numbers can be entered as 415-555-1234; international numbers need a + prefix).")
      return
    }
    if (!consent) {
      trackEvent("form_error", { form_name: "lola_call", cta_location: source, error_type: "missing_consent" })
      setError("Please agree to receive an automated call before continuing.")
      return
    }

    submitting.current = true
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/lola-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: cleanFirst,
          lastName: cleanLast,
          email: cleanEmail,
          phone: e164,
          consent: true,
        }),
      })

      const body = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(body.error || "Failed to submit request")
      }

      setSubmittedEmail(cleanEmail)
      trackEvent("generate_lead", { lead_type: "lola_call", form_name: "lola_call", cta_location: source })
      trackEvent("form_submit", { form_name: "lola_call", cta_location: source })
      trackEvent("lola_call_requested", { cta_location: source })
      setIsSuccess(true)
    } catch (err) {
      trackEvent("form_error", { form_name: "lola_call", cta_location: source, error_type: "submission_failed" })
      setError(err instanceof Error ? err.message : "Failed to submit request. Please try again.")
    } finally {
      submitting.current = false
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => {
      if (submitting.current) return
      setOpen(o)
      if (o && !open) {
        trackEvent("cta_click", { cta_name: "lola_call", cta_location: source })
        trackEvent("lola_call_open", { cta_location: source })
      }
      if (!o) {
        hasStarted.current = false
        reset()
      }
    }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a call from Lola</DialogTitle>
          <DialogDescription>
            Lola is our AI voice agent. Submit your details, then use the confirmation link sent by email to request your demo call. Please use your own phone number, not a patient’s.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div role="status" className="py-6 text-center space-y-4">
            <div className="text-green-600 text-3xl" aria-hidden="true">&#x2713;</div>
            <p className="text-lg font-semibold">Check your inbox</p>
            <p className="text-gray-600">
              Your request was accepted. Look for a confirmation email at <span className="font-medium">{submittedEmail}</span>, then follow its instructions. A submitted request does not confirm that a call connected.
            </p>
            <p className="text-xs text-gray-500">Check your spam folder. If the email or call does not arrive, <Link href="/contact" className="underline text-purple-700">contact our team</Link> rather than submitting repeated requests.</p>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => { setOpen(false); hasStarted.current = false; reset() }}
            >
              Close
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            onChangeCapture={trackStart}
            className="space-y-4"
            noValidate
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="lola-firstName">First name</Label>
                <Input
                  id="lola-firstName"
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lola-lastName">Last name</Label>
                <Input
                  id="lola-lastName"
                  type="text"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lola-email">Email address</Label>
              <Input
                id="lola-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lola-phone">Phone number</Label>
              <Input
                id="lola-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(415) 555-1234"
                value={phone}
                onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                required
                disabled={isSubmitting}
              />
              <p className="text-xs text-gray-500">Outside the US? Start with a + and country code, e.g. +44 20 7946 0958.</p>
            </div>
            <div className="flex items-start gap-2 pt-1">
              <Checkbox
                id="lola-consent"
                checked={consent}
                onCheckedChange={(v) => { trackStart(); setConsent(v === true) }}
                disabled={isSubmitting}
                className="mt-0.5"
              />
              <Label htmlFor="lola-consent" className="text-xs text-gray-600 font-normal leading-snug cursor-pointer">
                I agree to receive a one-time automated demo call from Positive Check at the number above. Message and data rates may apply. Consent is not a condition of purchase.
              </Label>
            </div>
            {error && (
              <p className="text-sm text-red-600" role="alert" aria-live="polite">{error} <Link href="/contact" className="underline">Contact our team for help</Link>.</p>
            )}
            <Button
              type="submit"
              className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                "Get my call from Lola"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
