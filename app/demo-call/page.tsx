import type { Metadata } from "next"
import { DemoCallBooking, type DemoCallOptions } from "@/components/demo-call-booking"
import { PublicHeader } from "@/components/shared/public-header"
import { PublicFooter } from "@/components/shared/public-footer"
import { demoRequest } from "@/lib/server/demo-booking"

export const dynamic = "force-dynamic"
export const metadata: Metadata = {
  title: "Have Lola call you | Positive Check",
  description: "Pick a time to try a check-in call with Lola, Positive Check's AI assistant.",
  alternates: { canonical: "/demo-call" },
  robots: { index: false, follow: false },
}
export default async function DemoCallPage() {
  let options: DemoCallOptions | null = null
  try {
    const response = await demoRequest("options")
    if (response.ok) options = await response.json()
  } catch { /* Show the unavailable state without exposing service details. */ }
  return <div className="min-h-screen bg-white">
    <PublicHeader currentPage="demo" />
    <main className="mx-auto max-w-2xl space-y-6 px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900">Have Lola call you</h1>
      <p className="text-zinc-600">Pick a time to hear a demo check-in call with Lola, our AI assistant.
        This demonstration uses a fictional patient. Please do not share real patient information.</p>
      <DemoCallBooking options={options} />
    </main>
    <PublicFooter />
  </div>
}
