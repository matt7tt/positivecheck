"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Stethoscope } from "lucide-react"
import Link from "next/link"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="sign-in" />

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Sign In</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access your admin console to manage patient care programs.
          </p>
        </div>
      </section>

      {/* Sign In */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-white shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Stethoscope className="w-8 h-8 text-[#e879f9]" />
                <CardTitle className="text-2xl font-bold text-gray-900">Provider Sign In</CardTitle>
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
                <Link href="/forgot-password" className="text-[#e879f9] hover:underline text-sm">
                  Forgot your password?
                </Link>
                <p className="text-gray-600 text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/contact" className="text-[#e879f9] hover:underline font-semibold">
                    Request Demo
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you&apos;re having trouble signing in or need assistance with your account, we&apos;re here to help.
          </p>
          <Button className="bg-[#e879f9] hover:bg-[#d946ef] text-white px-8 py-3 text-lg font-semibold">
            <Link href="/contact">CONTACT SUPPORT</Link>
          </Button>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
