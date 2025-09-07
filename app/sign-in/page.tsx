"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Stethoscope } from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-2 border-b">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <img
                src="/images/positive-logo-dark-blue.png"
                alt="Positive Check - AI-powered senior wellness monitoring service"
                className="h-14 w-auto -mt-1"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/families" className="text-gray-600 hover:text-gray-900">
              For Families
            </Link>
            <Link href="/providers" className="text-gray-600 hover:text-gray-900">
              For Providers
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/sign-in" className="text-[#e879f9] font-semibold">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Sign In</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access your secure dashboard if you are a family member, or your admin console if you are a provider.
          </p>
        </div>
      </section>

      {/* Sign In Options */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Families Sign In */}
            <Card className="p-8 bg-white shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-[#e879f9]" />
                  <CardTitle className="text-2xl font-bold text-gray-900">For Families</CardTitle>
                </div>
                <p className="text-gray-600">Access your dashboard to monitor your loved one's wellness</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="family-email">Email Address</Label>
                  <Input id="family-email" type="email" placeholder="Enter your email" className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="family-password">Password</Label>
                  <Input id="family-password" type="password" placeholder="Enter your password" className="w-full" />
                </div>
                <Button className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white py-3 text-lg font-semibold">
                  SIGN IN TO FAMILY DASHBOARD
                </Button>
                <div className="text-center space-y-2">
                  <Link href="#" className="text-[#e879f9] hover:underline text-sm">
                    Forgot your password?
                  </Link>
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link href="#" className="text-[#e879f9] hover:underline font-semibold">
                      Start Free Trial
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* For Providers Sign In */}
            <Card className="p-8 bg-white shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Stethoscope className="w-8 h-8 text-[#e879f9]" />
                  <CardTitle className="text-2xl font-bold text-gray-900">For Providers</CardTitle>
                </div>
                <p className="text-gray-600">Access your admin console to manage patient care programs</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="provider-email">Email Address</Label>
                  <Input id="provider-email" type="email" placeholder="Enter your email" className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provider-password">Password</Label>
                  <Input id="provider-password" type="password" placeholder="Enter your password" className="w-full" />
                </div>
                <Button className="w-full bg-[#e879f9] hover:bg-[#d946ef] text-white py-3 text-lg font-semibold">
                  SIGN IN TO ADMIN CONSOLE
                </Button>
                <div className="text-center space-y-2">
                  <Link href="#" className="text-[#e879f9] hover:underline text-sm">
                    Forgot your password?
                  </Link>
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link href="/contact" className="text-[#e879f9] hover:underline font-semibold">
                      Request Demo
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you're having trouble signing in or need assistance with your account, we're here to help.
          </p>
          <Button className="bg-[#e879f9] hover:bg-[#d946ef] text-white px-8 py-3 text-lg font-semibold">
            <Link href="/contact">CONTACT SUPPORT</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="/images/positive-logo-dark-blue-alt.png"
              alt="Positive Check - AI-powered senior wellness monitoring service"
              className="h-16"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/families" className="text-gray-600 hover:text-gray-900">
                    For Families
                  </Link>
                </li>
                <li>
                  <Link href="/providers" className="text-gray-600 hover:text-gray-900">
                    For Providers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © Positive Check 2025 |{" "}
              <Link href="#" className="hover:text-gray-900">
                Terms
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-gray-900">
                Privacy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
