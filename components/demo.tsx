'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import toast, { Toaster } from 'react-hot-toast'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export function DemoComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
              Enter your details to request a demo
            </p>
          </CardHeader>
          <CardContent>
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
                      phone: formData.get('phone'),
                      hearAboutUs: 'demo-page',
                      message: 'Demo request from /demo page',
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
                  form.reset()
                  setIsSubmitted(true)
                } catch (error) {
                  console.error('Error submitting demo request:', error)
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name (required)
                  </label>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    type="text"
                    required 
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name (required)
                  </label>
                  <Input 
                    id="lastName" 
                    name="lastName" 
                    type="text"
                    required 
                    placeholder="Last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (required)
                </label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  placeholder="Enter your phone number"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white py-4 min-h-[44px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Demo'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      
      <PublicFooter />
    </div>
  )
}