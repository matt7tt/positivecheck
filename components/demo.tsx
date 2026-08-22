'use client'

import { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import toast, { Toaster } from 'react-hot-toast'
import { Space_Grotesk } from 'next/font/google'
import { getAttributionContext, trackEvent } from '@/lib/analytics'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function DemoComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const hasStarted = useRef(false)
  const bookingUrl = process.env.NEXT_PUBLIC_DEMO_BOOKING_URL

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Toaster position="bottom-center" containerStyle={{ bottom: 100 }} />
        <PublicHeader currentPage="contact" />
        <main className="flex-1 flex items-center justify-center bg-gray-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your demo request has been submitted successfully.
              </p>
              {bookingUrl && (
                <Button asChild className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white mb-3">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('booking_link_click', { form_name: 'demo_page' })}
                  >
                    Choose a demo time
                  </a>
                </Button>
              )}
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-[#1a2642] hover:bg-[#2a3752] text-white"
              >
                Submit Another
              </Button>
            </CardContent>
          </Card>
        </main>
        <PublicFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="bottom-center" containerStyle={{ bottom: 100 }} />
      <PublicHeader currentPage="contact" />
      
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className={`${spaceGrotesk.className} text-2xl font-bold text-[#1a2642] text-center`}>
              Demo Request
            </CardTitle>
            <p className="text-gray-600 text-center">
              Share your contact details, then choose a convenient time.
            </p>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-6"
              onFocusCapture={() => {
                if (hasStarted.current) return
                hasStarted.current = true
                trackEvent('form_start', { form_name: 'demo_page' })
              }}
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                setIsSubmitting(true)
                
                try {
                  const formData = new FormData(form)
                  const response = await fetch('/api/request-demo', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: formData.get('name'),
                      email: formData.get('email'),
                      organization: formData.get('organization'),
                      attribution: getAttributionContext(),
                    }),
                  })

                  if (!response.ok) {
                    throw new Error('Failed to submit demo request')
                  }

                  toast.success("Demo request submitted successfully!", {
                    duration: 3000,
                    style: {
                      background: "#10B981",
                      color: "#FFFFFF",
                    },
                  })
                  trackEvent('form_submit', { form_name: 'demo_page' })
                  trackEvent('generate_lead', { lead_type: 'demo_request', form_name: 'demo_page' })
                  form.reset()
                  setIsSubmitted(true)
                } catch (error) {
                  console.error('Error submitting demo request:', error)
                  trackEvent('form_error', { form_name: 'demo_page', error_type: 'submission_failed' })
                  toast.error("Sorry, there was an error submitting your request. Please try again.", {
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
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full name (required)
                </label>
                <Input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work email (required)
                </label>
                <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@healthcare.org" />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization (optional)
                </label>
                <Input id="organization" name="organization" type="text" autoComplete="organization" />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white py-4 min-h-[44px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : bookingUrl ? 'Continue to scheduling' : 'Request Demo'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      
      <PublicFooter />
    </div>
  )
}
