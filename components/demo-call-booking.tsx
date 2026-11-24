"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ZONE_LABEL: Record<string, string> = {
  "America/New_York": "Eastern",
  "America/Chicago": "Central",
  "America/Denver": "Mountain",
  "America/Phoenix": "Arizona",
  "America/Los_Angeles": "Pacific",
  "America/Anchorage": "Alaska",
  "Pacific/Honolulu": "Hawaii",
}

export interface DemoCallOptions {
  enabled: boolean
  consent_text: string
  zones: string[]
}

/** The public "Have Lola call me" form: the prospect picks a time, and Lola calls them then with the demo. The
 *  consent checkbox is required; its exact text comes from the backend, which records it with the booking. */
export function DemoCallBooking({ options }: { options: DemoCallOptions | null }) {
  const [form, setForm] = useState({ name: "", practice: "", phone: "", timezone: "", local_time: "" })
  const [code, setCode] = useState("")
  const [codeSent, setCodeSent] = useState(false)
  const [consent, setConsent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [booked, setBooked] = useState<string | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    { setForm((f) => ({ ...f, [k]: e.target.value })); if (k === "phone") { setCode(""); setCodeSent(false) } }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!options) return
    setBusy(true)
    setError(null)
    try {
      const r = await fetch(`/api/demo-call/${codeSent ? "book" : "verify"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent, consent_text: options.consent_text, verification_code: code }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) {
        setError(typeof d.detail === "string" ? d.detail : "That did not work. Please check the form and try again.")
        return
      }
      if (!codeSent) { setCodeSent(true); return }
      setBooked(d.local_when ?? "the time you picked")
    } catch {
      setError("That did not work. Please try again.")
    } finally {
      setBusy(false)
    }
  }

  if (booked) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-900">You are booked</h2>
        <p className="mt-2 text-zinc-700">
          Lola will call you on {booked} ({ZONE_LABEL[form.timezone] ?? form.timezone} time). If she asks who you
          are, use our test patient: Jose Flores, date of birth December 31, 1999.
        </p>
      </div>
    )
  }
  if (!options) {
    return <p className="text-zinc-600">Booking a demo call is not available right now. Please try again later.</p>
  }

  const ready = !!(form.name && form.practice && form.phone && form.timezone && form.local_time && consent)
  return (
    <form onSubmit={submit} className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6">
      {!options.enabled && <p className="text-zinc-600">Booking a demo call is not available right now.
        You can try Lola by calling (279) 888-9728.</p>}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <Label htmlFor="dc-name">Your name</Label>
          <Input id="dc-name" value={form.name} onChange={set("name")} required maxLength={120} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="dc-practice">Practice</Label>
          <Input id="dc-practice" value={form.practice} onChange={set("practice")} required maxLength={200} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="dc-phone">Phone number</Label>
          <Input id="dc-phone" type="tel" value={form.phone} onChange={set("phone")} required />
        </div>
        <div className="space-y-1">
          <Label htmlFor="dc-zone">Time zone</Label>
          <select id="dc-zone" value={form.timezone} onChange={set("timezone")} required
            className="h-10 w-full rounded-md border border-zinc-200 bg-white px-2 text-sm">
            <option value="">Pick your time zone</option>
            {options.zones.map((z) => <option key={z} value={z}>{ZONE_LABEL[z] ?? z}</option>)}
          </select>
        </div>
        <div className="space-y-1 sm:col-span-2">
          <Label htmlFor="dc-when">Date and time (8 AM to 8 PM your time)</Label>
          <Input id="dc-when" type="datetime-local" value={form.local_time} onChange={set("local_time")} required />
        </div>
      </div>
      <label className="flex items-start gap-2 text-sm text-zinc-700">
        <input type="checkbox" className="mt-0.5" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
        <span>{options.consent_text}</span>
      </label>
      <p className="text-sm"><a href="/privacy" className="underline">Privacy Policy</a>{" and "}
        <a href="/terms" className="underline">Terms</a></p>
      {codeSent && <div className="space-y-1">
        <Label htmlFor="dc-code">Verification code sent to your phone</Label>
        <Input id="dc-code" inputMode="numeric" autoComplete="one-time-code" value={code}
          onChange={(e) => setCode(e.target.value)} required maxLength={10} />
        <Button type="button" variant="outline" disabled={busy}
          onClick={() => { setCode(""); setCodeSent(false) }}>Request a new code</Button>
      </div>}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" disabled={busy || !options.enabled || !ready || (codeSent && !code)}>{codeSent ? "Book my demo call" : "Send verification code"}</Button>
    </form>
  )
}
