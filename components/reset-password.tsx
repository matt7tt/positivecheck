'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useEffect, Suspense } from 'react'
import { PublicHeader } from "@/components/shared/public-header"
import toast, { Toaster } from 'react-hot-toast'
import { useSearchParams } from 'next/navigation'

// Separate component that uses useSearchParams
function ResetPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get token from URL
    if (searchParams) {
      const urlToken = searchParams.get('token')
      if (urlToken) {
        setToken(urlToken)
      }
    }
  }, [searchParams])

  return (
    <div className="max-w-md mx-auto">
      {!token ? (
        <Card className="shadow-[0_0_30px_rgba(245,152,255,0.3)]">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Invalid or Expired Link</h2>
            <p className="text-gray-700">
              This password reset link is invalid or has expired. Please request a new password reset.
            </p>
            <div className="mt-6">
              <Link 
                href="/forgot-password" 
                className="text-[#1a2642] hover:text-[#2a3752] font-medium"
              >
                Request a new password reset
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : isSubmitted ? (
        <Card className="shadow-[0_0_30px_rgba(245,152,255,0.3)]">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Password Reset Complete</h2>
            <p className="text-gray-700">
              Your password has been successfully reset. You may now use your new password to sign in.
            </p>
            <div className="mt-6">
              <Link 
                href="/sign-in" 
                className="text-[#1a2642] hover:text-[#2a3752] font-medium"
              >
                Go to sign in
              </Link>
            </div>
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
                setPasswordError('')
                
                try {
                  const formData = new FormData(e.currentTarget)
                  const password = formData.get('password') as string
                  const confirmPassword = formData.get('confirmPassword') as string
                  
                  // Validate passwords match
                  if (password !== confirmPassword) {
                    setPasswordError('Passwords do not match')
                    setIsSubmitting(false)
                    return
                  }
                  
                  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/reset-password`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
                    },
                    body: JSON.stringify({
                      token: token,
                      password: password
                    }),
                  })

                  if (!response.ok) {
                    throw new Error('Failed to reset password')
                  }

                  setIsSubmitted(true)
                  toast.success("Your password has been successfully reset.")
                } catch (error) {
                  console.error('Error:', error)
                  toast.error("Sorry, there was an error resetting your password. Please try again.", {
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
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New Password <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required
                  aria-required="true"
                  autoComplete="new-password"
                  className={passwordError ? "border-red-500" : ""}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="confirmPassword" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <Input 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  type="password" 
                  required
                  aria-required="true"
                  autoComplete="new-password"
                  className={passwordError ? "border-red-500" : ""}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white focus:ring-2 focus:ring-offset-2 focus:ring-[#1a2642]"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? 'Updating Password...' : 'Reset Password'}
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
  )
}

// Fallback component to show while loading
function ResetPasswordFallback() {
  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-[0_0_30px_rgba(245,152,255,0.3)]">
        <CardContent className="p-12 text-center">
          <h2 className="text-2xl font-bold text-[#1a2642] mb-4">Loading...</h2>
          <p className="text-gray-700">
            Please wait while we load the password reset form.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export function ResetPasswordComponent() {
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
                Enter your new password below to complete the password reset process.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="form-heading">
          <div className="container mx-auto px-4">
            <Suspense fallback={<ResetPasswordFallback />}>
              <ResetPasswordForm />
            </Suspense>
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