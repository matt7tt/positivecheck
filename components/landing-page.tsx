'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { CheckCircle, Phone, Calendar, Clock, Shield } from 'lucide-react'

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-semibold tracking-tight text-[#1a2642]"
          >
            positivecheck.com
          </Link>
          <nav>
            <Link 
              href="/contact" 
              className="text-base font-medium text-gray-600 hover:text-[#1a2642]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-24">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#1a2642] leading-tight">
                  Daily Wellness Check-In Calls for Seniors
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600">
                  Affordable, reliable wellness check-ins for just $10 per month. Cancel anytime.
                </p>
              </div>
              <Link href="/onboarding-wizard">
                <Button 
                  className="bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-6 text-lg rounded-md"
                >
                  SIGN UP
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  alt="A senior person enjoying a phone conversation in a cozy setting with warm lighting"
                  className="object-cover w-full h-full"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Senior%20Talking%20on%20the%20Phone%201-OvPlmeVE1KZiBQgSfQRkYrit6WZxcd.jpeg"
                />
              </div>
            </div>
          </div>
          <div className="text-center py-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2642] mb-4">Stay Connected, Stay Informed</h2>
            <p className="text-xl text-gray-600">Because You Can't Always Be There</p>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    alt="Healthcare professional in pink scrubs working at a computer with a headset"
                    className="object-cover w-full h-full"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lola%20from%20Positive%20Check-pnC2gD800U421MGI5gplhEFRJk6i7d.jpeg"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2642]">Meet Lola</h2>
                <p className="text-lg text-gray-600">
                  Caring for aging loved ones while managing life's responsibilities can be overwhelming. 
                </p>
                <p className="text-lg text-gray-600">
                  That's where Lola comes in. Lola is our caring AI companion that makes regular check-in calls to seniors, asking simple but important questions about their well-being.
                </p>
                <h3 className="text-2xl font-bold text-[#1a2642]">How Lola Helps:</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-gray-600">Provides peace of mind for busy families.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-gray-600">Supports seniors in maintaining their independence.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                    <span className="text-gray-600">Delivers daily wellness updates with meaningful trend analysis.</span>
                  </li>
                </ul>
                <Link href="/onboarding-wizard">
                  <Button 
                    className="bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2642] mb-12 text-center">Good morning! This is Lola calling…</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person looking content and well"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Senior%20Watching%20TV-J4cncwneBhZcCUZbHMfg6JXWGDOa5N.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#1a2642] mb-2">
                    How are you feeling today?
                  </h3>
                  <p className="text-gray-600">
                    Stay informed about emotional and physical well-being.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person drinking coffee and relaxing"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Senior%20Drinking%20Coffee-YDU6Xb04Kn1ZRC6Y5vf4HOjS4dQdnl.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#1a2642] mb-2">
                    Did you sleep well last night?
                  </h3>
                  <p className="text-gray-600">
                    Identify sleep patterns that may affect their health.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person managing medications"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Senior%20Checking%20Medications-tb3XpL0OwoAk94vTx7P6vvnAqLjRRw.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#1a2642] mb-2">
                    Have you taken your medicine?
                  </h3>
                  <p className="text-gray-600">
                    Support medication adherence with gentle reminders.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <div className="relative h-48">
                  <img
                    alt="Senior person enjoying a healthy meal"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Senior%20Eating%20Lunch-zjdT6UMMrtnkuDABiozygX2EiMIt1o.jpeg"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#1a2642] mb-2">
                    Have you eaten today?
                  </h3>
                  <p className="text-gray-600">
                    Ensure proper nutrition and meal regularity for better health.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Link href="/onboarding-wizard">
                <Button 
                  className="bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2642] mb-12 text-center">How does it work?</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[400px] lg:h-[500px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    alt="Senior woman smiling while talking on a mobile phone, sitting comfortably by a window"
                    className="object-cover w-full h-full"
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Senior%20Talking%20on%20the%20Phone-7e1oF9Q9WzjCLGKK9Zvh0sN1P61Sg1.jpeg"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#1a2642]">Step 1: Personalized Scheduling</h3>
                  <p className="text-gray-600">Set up convenient call times and customize the questions you want Lola to ask.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#1a2642]">Step 2: Friendly Check-Ins</h3>
                  <p className="text-gray-600">Lola makes daily calls to your loved one's existing phone number, engaging them in natural, conversational wellness check-ins.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#1a2642]">Step 3: Insights Delivered to You</h3>
                  <p className="text-gray-600">Receive a daily email report summarizing their responses, including helpful trend analysis to track changes over time.</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#1a2642] mb-6">Why Families Choose Us:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-600">Easy setup: no smartphones, apps, or equipment needed.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-600">Affordable and flexible: $10 per month, no hidden fees, and cancel anytime.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#1a2642] h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-600">Reliable and adaptable: adjust settings as needs evolve.</span>
                </li>
              </ul>
            </div>
            <div className="text-center mt-12">
              <Link href="/onboarding-wizard">
                <Button 
                  className="bg-[#1a2642] hover:bg-[#2a3752] text-white px-8 py-4 text-lg rounded-md"
                >
                  SIGN UP
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2642] mb-12 text-center">FAQs</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-[#1a2642] mb-2">Why should I choose Positive Check?</h3>
                <p className="text-gray-600">Answer to be provided</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a2642] mb-2">How does Positive Check support seniors' independence?</h3>
                <p className="text-gray-600">Answer to be provided</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a2642] mb-2">Is Positive Check secure?</h3>
                <p className="text-gray-600">Answer to be provided</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a2642] mb-2">What if my loved one is hard of hearing?</h3>
                <p className="text-gray-600">Answer to be provided</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a2642] mb-2">What if my loved one feels nervous about AI?</h3>
                <p className="text-gray-600">Answer to be provided</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a2642] mb-2">Does Lola replace human caregivers?</h3>
                <p className="text-gray-600">Answer to be provided</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <blockquote className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-4">
                "My son calls when he can but lives far away and is busy with his family. Lola gives me peace of mind because she checks-in with me everyday and let's my son know that I am okay, even when we can't talk on the phone. He will call and help me if something is not right."
              </p>
              <footer className="text-lg font-semibold text-[#1a2642]">F.B, Long Beach, California</footer>
            </blockquote>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2642] mb-6 text-center">A Personal Note to Families</h2>
              <p className="text-lg text-gray-600 mb-8">
                We know you want the very best for your aging loved ones. Whether they live across the country or just around the corner, Lola bridges the gap, keeping you informed and connected with regular updates.
              </p>
              <h3 className="text-2xl font-bold text-[#1a2642] mb-4">The Gift of Connection</h3>
              <p className="text-lg text-gray-600 mb-8">
                Daily check-ins aren't just about health—they're about showing you care. Lola ensures seniors feel valued and supported, creating a sense of connection that enhances their overall well-being.
              </p>
              <h3 className="text-2xl font-bold text-[#1a2642] mb-4">Helping Seniors Age in Place</h3>
              <p className="text-lg text-gray-600 mb-8">
                At $10 per month, Positive Check is an affordable solution that empowers seniors to maintain their independence at home. It's care that feels personal, at a price that makes sense.
              </p>
              <p className="text-xl font-semibold text-[#1a2642] text-center">
                Let's help everyone age with dignity and connection.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9ff] py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2642] mb-12 text-center">Contact Us</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name (required)</label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input id="lastName" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email (required)</label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <Input id="phone" type="tel" />
                </div>
                <div>
                  <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                  <Select id="hearAboutUs">
                    <option value="">Select an option</option>
                    {/* Add more options here */}
                  </Select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (required)</label>
                  <Textarea id="message" required />
                </div>
                <div className="flex items-center">
                  <input id="newsletter" type="checkbox" className="h-4 w-4 text-[#1a2642] focus:ring-[#1a2642] border-gray-300 rounded" />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                    Sign up for news and updates
                  </label>
                </div>
                <Button type="submit" className="w-full bg-[#1a2642] hover:bg-[#2a3752] text-white">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
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