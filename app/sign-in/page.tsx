import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope } from "lucide-react"
import Link from "next/link"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="sign-in" />
      <main>
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
          <Card className="p-4 sm:p-8 bg-white shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Stethoscope className="w-8 h-8 text-[#e879f9]" />
                <CardTitle className="text-2xl font-bold text-gray-900">Provider Sign In</CardTitle>
              </div>
              <p className="text-gray-600">Access your admin console to manage patient care programs</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 text-center">
                Continue to the secure provider portal to sign in with your organization account.
              </p>
              <Button asChild className="w-full h-auto min-h-[44px] whitespace-normal bg-[#e879f9] hover:bg-[#d946ef] text-white px-3 py-3 text-base text-center font-semibold">
                <a href="https://provider.positivecheck.com/admin-new/login">
                  Sign in to admin console
                </a>
              </Button>
              <div className="text-center space-y-2">
                <Link href="/contact" className="text-purple-700 hover:underline text-sm">
                  Need help with your password? Contact support
                </Link>
                <p className="text-gray-600 text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/demo" className="text-purple-700 hover:underline font-semibold">
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
          <Button asChild className="bg-[#e879f9] hover:bg-[#d946ef] text-white px-8 py-3 text-lg font-semibold">
            <Link href="/contact">CONTACT SUPPORT</Link>
          </Button>
        </div>
      </section>

      </main>
      <PublicFooter />
    </div>
  )
}
