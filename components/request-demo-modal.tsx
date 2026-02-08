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

interface RequestDemoModalProps {
  children: React.ReactNode
}

export function RequestDemoModal({ children }: RequestDemoModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [role, setRole] = useState("")
  const [patientVolume, setPatientVolume] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)

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
          role,
          patientVolume: patientVolume || undefined,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit request")
      }

      setIsSuccess(true)
      setTimeout(() => {
        setOpen(false)
        setIsSuccess(false)
        setName("")
        setEmail("")
        setOrganization("")
        setRole("")
        setPatientVolume("")
      }, 2000)
    } catch (err) {
      setError("Failed to submit request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a Demo</DialogTitle>
          <DialogDescription>
            Tell us about your organization and we&apos;ll schedule a personalized demo within 1 business day.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="text-green-600 mb-2">✓</div>
            <p className="text-lg font-semibold">Thank you!</p>
            <p className="text-gray-600">We&apos;ll reach out within 1 business day to schedule your personalized demo.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                type="text"
                placeholder="Sunrise Senior Living"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role / Title</Label>
              <Input
                id="role"
                type="text"
                placeholder="Director of Patient Services"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientVolume">Approximate Patient Population</Label>
              <select
                id="patientVolume"
                value={patientVolume}
                onChange={(e) => setPatientVolume(e.target.value)}
                disabled={isSubmitting}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select (optional)</option>
                <option value="Under 100">Under 100</option>
                <option value="100-500">100-500</option>
                <option value="500-1,000">500-1,000</option>
                <option value="1,000-5,000">1,000-5,000</option>
                <option value="5,000+">5,000+</option>
              </select>
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
                "Request Demo"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}