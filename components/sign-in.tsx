'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from 'react'
import { PublicHeader } from "@/components/shared/public-header"
import toast, { Toaster } from 'react-hot-toast'

export function SignInComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="bottom-center" containerStyle={{ bottom: 100 }} />
      <PublicHeader currentPage="sign-in" />

      {/* Skip link */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
        <a href="#main-content" className="text-[#1a2642]">Skip to main content</a>
      </div>

      <main id="main-content">
        <section className="w-full py-12 bg-[#F598FF]" aria-labelledby="signin-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 id="signin-heading" className="text-4xl lg:text-6xl font-bold text-[#1a2642] mb-6">
                Sign In
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Welcome back! Please sign in to access your account.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="form-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="shadow-[0_0_30px_rgba(245,152,255,0.3)]">
                <CardContent className="p-6">
                  <form 
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setIsSubmitting(true)
                      // Add form submission logic here
                    }}
                    aria-labelledby="form-heading"
                    noValidate
                  >
                    <h2 id="form-heading" className="sr-only">Sign In Form</h2>
                    
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

                    <div>
                      <label 
                        htmlFor="password" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Password <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <Input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required
                        aria-required="true"
                        aria-describedby="password-error"
                        autoComplete="current-password"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input 
                          id="remember" 
                          name="remember" 
                          type="checkbox" 
                          className="h-4 w-4 text-[#1a2642] focus:ring-[#1a2642] border-gray-300 rounded"
                          aria-describedby="remember-description"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                        <span id="remember-description" className="sr-only">
                          Keep me signed in on this device
                        </span>
                      </div>

                      <Link 
                        href="/reset-password" 
                        className="text-sm text-[#1a2642] hover:text-[#2a3752] focus:outline-none focus:ring-2 focus:ring-[#1a2642] focus:ring-offset-2 rounded"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white focus:ring-2 focus:ring-offset-2 focus:ring-[#1a2642]"
                      disabled={isSubmitting}
                      aria-disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Signing in...' : 'Sign in'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <p className="mt-4 text-center text-gray-700">
                Don't have an account?{' '}
                <Link 
                  href="/onboarding-wizard" 
                  className="text-[#1a2642] hover:text-[#2a3752] font-medium focus:outline-none focus:ring-2 focus:ring-[#1a2642] focus:ring-offset-2 rounded"
                >
                  Sign up
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