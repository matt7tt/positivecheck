'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from 'react'
import { PublicHeader } from "@/components/shared/public-header"
import toast, { Toaster } from 'react-hot-toast'

export function ResetPasswordComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-center" containerStyle={{ bottom: 100 }} />
      <PublicHeader currentPage="sign-in" />

      {/* Skip link */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>

      <main id="main-content">
        <section className="w-full py-12 bg-[#F598FF]" aria-labelledby="reset-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 id="reset-heading" className="text-4xl lg:text-6xl font-bold text-[#1a2642] mb-6">
                Reset Password
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="form-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              {isSubmitted ? (
                <Card className="shadow-[0_0_30px_rgba(245,152,255,0.3)]">
                  <CardContent className="p-12 text-center">
                    <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Check Your Email</h2>
                    <p className="text-gray-700">
                      If an account exists for that email address, we've sent password reset instructions.
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
                          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/reset-password`, {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
                            },
                            body: JSON.stringify({
                              email: formData.get('email'),
                            }),
                          })

                          if (!response.ok) {
                            throw new Error('Failed to submit request')
                          }

                          setIsSubmitted(true)
                        } catch (error) {
                          console.error('Error:', error)
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
                      aria-labelledby="form-heading"
                      noValidate
                    >
                      <h2 id="form-heading" className="sr-only">Password Reset Form</h2>
                      
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
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
                          autoComplete="email"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white focus:ring-2 focus:ring-offset-2 focus:ring-[#1a2642]"
                        disabled={isSubmitting}
                        aria-disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Reset Password'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              <p className="mt-4 text-center text-gray-700">
                Remember your password?{' '}
                <Link 
                  href="/sign-in" 
                  className="text-[#1a2642] hover:text-[#2a3752] font-medium focus:outline-none focus:ring-2 focus:ring-[#1a2642] focus:ring-offset-2 rounded"
                >
                  Sign in
                </Link>
              </p>
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