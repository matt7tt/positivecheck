'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"
import Script from 'next/script'
// import Image from 'next/image'
import { useState } from 'react'
import { PublicHeader } from "@/components/shared/public-header"

export function ContactComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

  return (
    <div className="min-h-screen bg-gray-50">
      <Script id="contact-structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Positive Check",
            "description": "Daily wellness check-in calls for seniors using AI companion Lola. Contact us for questions about our senior wellness call service.",
            "url": "https://www.positivecheck.com",
            "logo": "https://www.positivecheck.com/images/positive-logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "866-605-8571",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              },
              {
                "@type": "ContactPoint",
                "email": "info@positivecheck.com",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "English"
              }
            ],
            "areaServed": "United States",
            "serviceType": "Senior Care Services"
          }
        `}
      </Script>
      <PublicHeader currentPage="contact" />

      {/* Skip link */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>

      <main id="main-content">
        {/* Hero Section - Full Width */}
        <section className="w-full py-12 bg-[#F598FF]" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 id="contact-heading" className="text-4xl lg:text-6xl font-bold text-[#1a2642] mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Have questions or need support? The Positive Check team is here to help! Please fill out the form below, and we will respond promptly to ensure you have the information and support you need.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="form-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <Card className="shadow-[0_0_30px_rgba(245,152,255,0.3)]">
                  <CardContent className="p-12 text-center">
                    <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Thank You!</h2>
                    <p className="text-gray-700">
                      Thanks for your message. We will be in touch soon.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-[0_0_30px_rgba(245,152,255,0.3)]">
                  <CardContent className="p-6">
                    <form 
                      className="space-y-4"
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setIsSubmitting(true)
                        
                        try {
                          const formData = new FormData(e.currentTarget)
                          await fetch(`${API_BASE_URL}/api/contact`, {
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
                          
                          setIsSubmitted(true)
                        } catch (error) {
                          console.error('Error submitting form:', error)
                        } finally {
                          setIsSubmitting(false)
                        }
                      }}
                      aria-labelledby="form-heading"
                      noValidate
                    >
                      <h2 id="form-heading" className="sr-only">Contact Form</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name <span aria-hidden="true">*</span>
                            <span className="sr-only">(required)</span>
                          </label>
                          <Input 
                            id="firstName" 
                            name="firstName" 
                            required 
                            aria-required="true"
                            aria-describedby="firstName-error"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <Input id="lastName" name="lastName" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required
                          aria-required="true"
                          aria-describedby="email-error"
                        />
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
                        <input 
                          id="newsletter" 
                          name="newsletter" 
                          type="checkbox" 
                          className="h-4 w-4 text-[#1a2642] focus:ring-[#1a2642] border-gray-300 rounded"
                          aria-describedby="newsletter-description"
                          defaultChecked
                        />
                        <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                          Sign up for news and updates
                        </label>
                        <span id="newsletter-description" className="sr-only">
                          Check this box to receive updates about Positive Check services
                        </span>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white focus:ring-2 focus:ring-offset-2 focus:ring-[#1a2642]"
                        disabled={isSubmitting}
                        aria-disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50" role="contentinfo">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-700 text-sm">
            © Positive Check 2025 | <Link href="/terms" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#1a2642] focus:ring-offset-2">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 