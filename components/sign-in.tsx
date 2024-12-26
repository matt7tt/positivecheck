'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
// import Image from 'next/image'
import { PublicHeader } from '@/components/shared/public-header'

export function SignInComponent() {
  const router = useRouter()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
    </Suspense>
  )
}

function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnUrl = searchParams.get('return') || '/my-account'
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Enter your email and password to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="loading loading-spinner loading-sm mr-2"></span>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Sign in
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
                <Link href="/sign-up" className="text-sm text-blue-600 hover:text-blue-500">
                  Don&apos;t have an account? Sign up
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}