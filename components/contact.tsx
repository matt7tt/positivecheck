'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
// import Link from "next/link"
// import Image from 'next/image'
import { useState } from 'react'
import { PublicHeader } from "@/components/shared/public-header"
import toast, { Toaster } from 'react-hot-toast'

export function ContactComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-center" containerStyle={{ bottom: 100 }} />
      <PublicHeader currentPage="contact" />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <Card>
              <CardContent className="p-12 text-center">
                <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Thank You!</h2>
                <p className="text-gray-600">
                  Thanks for your message. We will be in touch soon.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold text-[#1a2642] mb-6">Contact Us</h1>
                <form 
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setIsSubmitting(true)
                    
                    try {
                      const formData = new FormData(e.currentTarget)
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
                          hearAboutUs: formData.get('hearAboutUs'),
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
                      e.currentTarget.reset()
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
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name (required)</label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <Input id="lastName" name="lastName" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (required)</label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                    <Select name="hearAboutUs">
                      <SelectTrigger id="hearAboutUs">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="friend">Friend or Family</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (required)</label>
                    <Textarea id="message" name="message" required />
                  </div>
                  <div className="flex items-center">
                    <input id="newsletter" name="newsletter" type="checkbox" className="h-4 w-4 text-[#1a2642] focus:ring-[#1a2642] border-gray-300 rounded" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      Sign up for news and updates
                    </label>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 text-sm">
            © Positive Check 2025
          </div>
        </div>
      </footer>
    </div>
  )
} 