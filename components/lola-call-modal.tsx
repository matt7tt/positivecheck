"use client"

import { useState } from "react"
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

interface LolaCallModalProps {
  children: React.ReactNode
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

export function LolaCallModal({ children }: LolaCallModalProps) {
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
    setError("")

    const cleanFirst = firstName.trim()
    const cleanLast = lastName.trim()
    const cleanEmail = email.trim()

    if (cleanFirst.length < 1 || cleanLast.length < 1) {
      setError("Please enter your first and last name.")
      return
    }
    if (!EMAIL_RE.test(cleanEmail)) {
      setError("Please enter a valid email address.")
      return
    }
    const e164 = toE164(phone)
    if (!e164) {
      setError("Please enter a valid phone number (US numbers can be entered as 415-555-1234; international numbers need a + prefix).")
      return
    }
    if (!consent) {
      setError("Please agree to receive an automated call before continuing.")
      return
    }

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
        }),
      })

      const body = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(body.error || "Failed to submit request")
      }

      setSubmittedEmail(cleanEmail)
      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) reset() }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get a call from Lola now</DialogTitle>
          <DialogDescription>
            Lola is our AI voice agent. Tell us where to reach you and we&apos;ll send a confirmation email &mdash; click the link and Lola calls you instantly.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="py-6 text-center space-y-4">
            <div className="text-green-600 text-3xl" aria-hidden="true">&#x2713;</div>
            <p className="text-lg font-semibold">Check your inbox</p>
            <p className="text-gray-600">
              We sent a confirmation email to <span className="font-medium">{submittedEmail}</span>. Click the button inside and Lola will call you.
            </p>
            <p className="text-xs text-gray-500">Don&apos;t see it? Check your spam folder, or wait a minute and try again.</p>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => { setOpen(false); reset() }}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                onCheckedChange={(v) => setConsent(v === true)}
                disabled={isSubmitting}
                className="mt-0.5"
              />
              <Label htmlFor="lola-consent" className="text-xs text-gray-600 font-normal leading-snug cursor-pointer">
                I agree to receive a one-time automated demo call from Positive Check at the number above. Message and data rates may apply. Consent is not a condition of purchase.
              </Label>
            </div>
            {error && (
              <p className="text-sm text-red-600" role="alert" aria-live="polite">{error}</p>
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
