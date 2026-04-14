"use client"

import { useState } from "react"
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
import { Loader2 } from "lucide-react"

interface LolaCallModalProps {
  children: React.ReactNode
}

const E164_RE = /^\+[1-9]\d{7,14}$/

export function LolaCallModal({ children }: LolaCallModalProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)

  const reset = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setError("")
    setIsSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!E164_RE.test(phone)) {
      setError("Phone must be in E.164 format, e.g. +14155551234")
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch("/api/lola-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone }),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body.error || "Failed to submit request")
      }

      setIsSuccess(true)
      setTimeout(() => {
        setOpen(false)
        reset()
      }, 4000)
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
            Lola is our AI voice agent. Tell us where to reach you and we&apos;ll send a confirmation email — click the link and Lola calls you instantly.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="text-green-600 mb-2 text-2xl">✓</div>
            <p className="text-lg font-semibold">Check your inbox</p>
            <p className="text-gray-600">We sent a confirmation email to {email}. Click the button inside and Lola will call you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="lola-firstName">First name</Label>
                <Input
                  id="lola-firstName"
                  type="text"
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
                placeholder="+14155551234"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <p className="text-xs text-gray-500">Include country code, e.g. +1 for US.</p>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
