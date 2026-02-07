'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, Mail, ArrowRight } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
// import Image from 'next/image'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from "@/components/shared/public-footer"

export function SignInComponent() {
  const router = useRouter()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
      <PublicFooter />
    </Suspense>
  )
}

function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnUrl = searchParams?.get('return') || '/my-account'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setIsAuthenticated } = useAuth()

  const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const formData = new URLSearchParams()
      formData.append('username', email)
      formData.append('password', password)
      formData.append('grant_type', 'password')
      
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        body: formData.toString()
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Invalid credentials')
      }

      const result = await response.json()
      console.log('Login response:', result)
      
      // Store token in both localStorage and cookie
      const token = result.access_token
      console.log('Received token:', token ? 'Present' : 'Not present')
      
      // Store token in localStorage
      localStorage.setItem('auth_token', token)
      
      // Set cookie with proper attributes
      document.cookie = `auth_token=${token}; path=/; max-age=3600; SameSite=Lax; secure`
      
      console.log('Token stored in localStorage:', localStorage.getItem('auth_token') ? 'Present' : 'Not present')
      console.log('Cookies after setting:', document.cookie)
      
      // Update auth context state
      setIsAuthenticated(true)
      
      // Force a small delay to ensure storage is complete
      await new Promise(resolve => setTimeout(resolve, 200))
      
      // Use router.push for the redirect
      router.push(returnUrl)
    } catch (error) {
      console.error('Login error:', error)
      setError(error instanceof Error ? error.message : 'Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <PublicHeader currentPage="sign-in" />

        <div className="flex-grow flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#1a2642]">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Access your personalized dashboard and preferences
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <Card className="border border-gray-200 rounded-xl shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#1a2642]">Welcome back</CardTitle>
                <CardDescription className="text-gray-500">Enter your email and password to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-white border-gray-200 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 bg-white border-gray-200 focus:ring-blue-500 focus:border-blue-500 rounded-md"
                      />
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive" className="border border-red-200 bg-red-50 text-red-800 rounded-lg">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white py-2.5 rounded-md transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing in...
                      </>
                    ) : (
                      <div className="flex items-center justify-center">
                        Sign in
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between border-t border-gray-100 pt-4 pb-4 px-6 bg-gray-50 rounded-b-xl">
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 transition-colors mb-2 sm:mb-0">
                  Forgot your password?
                </Link>
                <Link href="/contact" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  Don&apos;t have an account? <span className="font-medium">Sign up</span>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}