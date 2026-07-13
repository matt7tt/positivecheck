'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { RequestDemoModal } from '@/components/request-demo-modal'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { Calculator, ArrowRight } from 'lucide-react'

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

// Approximate 2026 Medicare non-facility national averages. Editable in the UI;
// verify locality-specific amounts in the CMS PFS Look-Up Tool.
const DEFAULT_RATES = {
  '99453': 19,
  '99454': 50,
  '99445': 50,
  '99457': 52,
  '99458': 41,
  '99470': 26,
} as const

type RpmCode = keyof typeof DEFAULT_RATES

const CODE_INFO: Record<RpmCode, { label: string; glossary: string }> = {
  '99453': { label: 'Setup and patient education (one-time, new enrollments)', glossary: '/resources/glossary/cpt-99453' },
  '99454': { label: 'Device supply — 16–30 transmission days per 30-day period', glossary: '/resources/glossary/cpt-99454' },
  '99445': { label: 'Device supply — 2–15 transmission days per 30-day period (new 2026)', glossary: '/resources/glossary/cpt-99445' },
  '99457': { label: 'Treatment management — first 20 min per month', glossary: '/resources/glossary/cpt-99457' },
  '99458': { label: 'Treatment management — each additional 20 min (add-on)', glossary: '/resources/glossary/cpt-99458' },
  '99470': { label: 'Treatment management — first 10 min per month (new 2026)', glossary: '/resources/glossary/cpt-99470' },
}

const formatCurrency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function RpmCptCalculator() {
  const [patients, setPatients] = useState(100)
  const [newEnrollments, setNewEnrollments] = useState(10)
  // Device-supply mix (mutually exclusive tiers; together ≤ 100%)
  const [pct99454, setPct99454] = useState(60)
  const [pct99445, setPct99445] = useState(25)
  // Treatment-management mix (mutually exclusive tiers; together ≤ 100%)
  const [pct99457, setPct99457] = useState(55)
  const [pct99470, setPct99470] = useState(20)
  // Share of 99457 patients whose month also reaches 40+ minutes (one 99458 unit)
  const [pct99458, setPct99458] = useState(30)
  const [rates, setRates] = useState<Record<RpmCode, number>>({ ...DEFAULT_RATES })

  const setRate = (code: RpmCode, value: string) => {
    const n = Number(value)
    setRates((prev) => ({ ...prev, [code]: Number.isFinite(n) && n >= 0 ? n : 0 }))
  }

  const results = useMemo(() => {
    const units: Record<RpmCode, number> = {
      '99453': newEnrollments,
      '99454': Math.round(patients * (pct99454 / 100)),
      '99445': Math.round(patients * (pct99445 / 100)),
      '99457': Math.round(patients * (pct99457 / 100)),
      '99458': Math.round(patients * (pct99457 / 100) * (pct99458 / 100)),
      '99470': Math.round(patients * (pct99470 / 100)),
    }
    const rows = (Object.keys(units) as RpmCode[]).map((code) => ({
      code,
      units: units[code],
      rate: rates[code],
      subtotal: units[code] * rates[code],
    }))
    const monthly = rows.reduce((sum, r) => sum + r.subtotal, 0)
    return {
      rows,
      monthly,
      annual: monthly * 12,
      perPatient: patients > 0 ? monthly / patients : 0,
    }
  }, [patients, newEnrollments, pct99454, pct99445, pct99457, pct99470, pct99458, rates])

  const chartData = useMemo(
    () => results.rows
      .filter((r) => r.subtotal > 0)
      .map((r) => ({ name: r.code, Revenue: Math.round(r.subtotal) })),
    [results],
  )

  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="platform" />

      <main>
        {/* Hero */}
        <section className="px-6 py-16 md:py-20 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm mb-6">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              2026 RPM CPT Calculator
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Estimate monthly Medicare Remote Patient Monitoring reimbursement across CPT 99453,
              99454, 99445, 99457, 99458, and 99470 — including the two new 2026 codes for
              shorter transmission and treatment-management periods.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Your Program Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Enrolled RPM patients</Label>
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                      {patients.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[patients]}
                    onValueChange={(v) => setPatients(v[0])}
                    min={10} max={5000} step={10}
                    className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>10</span><span>5,000</span></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>New enrollments this month (99453)</Label>
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                      {newEnrollments.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[newEnrollments]}
                    onValueChange={(v) => setNewEnrollments(v[0])}
                    min={0} max={500} step={5}
                    className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400"><span>0</span><span>500</span></div>
                </div>

                <div className="border-t pt-6 space-y-6">
                  <p className="text-sm font-semibold text-gray-700">
                    Device supply — transmission days per 30-day period
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-normal">% of patients at 16+ days (99454)</Label>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                        {pct99454}%
                      </span>
                    </div>
                    <Slider
                      value={[pct99454]}
                      onValueChange={(v) => {
                        setPct99454(v[0])
                        setPct99445((prev) => Math.min(prev, 100 - v[0]))
                      }}
                      min={0} max={100} step={1}
                      className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-normal">% of patients at 2–15 days (99445)</Label>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                        {pct99445}%
                      </span>
                    </div>
                    <Slider
                      value={[pct99445]}
                      onValueChange={(v) => setPct99445(Math.min(v[0], 100 - pct99454))}
                      min={0} max={100} step={1}
                      className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                    />
                    <p className="text-xs text-gray-400">
                      Only one device-supply code applies per patient per 30-day period. The remaining{' '}
                      {Math.max(0, 100 - pct99454 - pct99445)}% (fewer than 2 transmission days) is not billable.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-6">
                  <p className="text-sm font-semibold text-gray-700">
                    Treatment management — qualifying time per calendar month
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-normal">% of patients at 20+ min (99457)</Label>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                        {pct99457}%
                      </span>
                    </div>
                    <Slider
                      value={[pct99457]}
                      onValueChange={(v) => {
                        setPct99457(v[0])
                        setPct99470((prev) => Math.min(prev, 100 - v[0]))
                      }}
                      min={0} max={100} step={1}
                      className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-normal">% of patients at 10–19 min (99470)</Label>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                        {pct99470}%
                      </span>
                    </div>
                    <Slider
                      value={[pct99470]}
                      onValueChange={(v) => setPct99470(Math.min(v[0], 100 - pct99457))}
                      min={0} max={100} step={1}
                      className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                    />
                    <p className="text-xs text-gray-400">
                      Only one treatment-management code applies per patient per month, and both require at
                      least one real-time interactive communication.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="font-normal">% of 99457 patients reaching 40+ min (one 99458 unit)</Label>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                        {pct99458}%
                      </span>
                    </div>
                    <Slider
                      value={[pct99458]}
                      onValueChange={(v) => setPct99458(v[0])}
                      min={0} max={100} step={1}
                      className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                    />
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <p className="text-sm font-semibold text-gray-700">Rates (editable)</p>
                  <p className="text-xs text-gray-400">
                    Defaults are approximate 2026 Medicare non-facility national averages. Verify your
                    locality-specific amounts in the CMS Physician Fee Schedule Look-Up Tool.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(Object.keys(rates) as RpmCode[]).map((code) => (
                      <div key={code} className="space-y-1">
                        <Label htmlFor={`rate-${code}`} className="text-xs font-medium text-gray-600">{code}</Label>
                        <Input
                          id={`rate-${code}`}
                          type="number"
                          min={0}
                          value={rates[code]}
                          onChange={(e) => setRate(code, e.target.value)}
                          className="h-9"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-gray-200 lg:sticky lg:top-20 self-start">
              <CardHeader>
                <CardTitle className="text-xl">Estimated Reimbursement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">Estimated Monthly Total</p>
                  <p className="text-5xl font-bold text-purple-600">{formatCurrency(results.monthly)}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatCurrency(results.perPatient)} average per enrolled patient
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Monthly</p>
                    <p className="text-lg font-bold text-green-700">{formatCurrency(results.monthly)}</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Annualized</p>
                    <p className="text-lg font-bold text-purple-700">{formatCurrency(results.annual)}</p>
                  </div>
                </div>

                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis type="number" tick={{ fontSize: 12 }} stroke="#9ca3af" tickFormatter={(v: number) => formatCurrency(v)} />
                      <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} stroke="#9ca3af" width={55} />
                      <Tooltip
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                        formatter={(value: number) => formatCurrency(value)}
                      />
                      <Bar dataKey="Revenue" fill="#d946ef" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left py-2 px-3 font-semibold text-gray-700">Code</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Units / mo</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Rate</th>
                        <th className="text-right py-2 px-3 font-semibold text-gray-700">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.rows.map((row) => (
                        <tr key={row.code} className="border-b last:border-b-0">
                          <td className="py-2 px-3 font-medium text-purple-700 whitespace-nowrap">
                            <Link href={CODE_INFO[row.code].glossary} className="hover:underline" title={CODE_INFO[row.code].label}>
                              {row.code}
                            </Link>
                          </td>
                          <td className="py-2 px-3 text-right text-gray-600">{row.units.toLocaleString()}</td>
                          <td className="py-2 px-3 text-right text-gray-600">{formatCurrency(row.rate)}</td>
                          <td className="py-2 px-3 text-right font-semibold text-gray-900">{formatCurrency(row.subtotal)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-purple-50">
                        <td colSpan={3} className="py-2 px-3 font-semibold text-purple-700">Estimated Monthly Total</td>
                        <td className="py-2 px-3 text-right font-bold text-purple-700">{formatCurrency(results.monthly)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <p className="text-xs text-gray-400">
                  Code names link to plain-English definitions in our glossary.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How the estimate works */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How this estimate works</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The CY 2026 Physician Fee Schedule final rule added two RPM codes. CPT 99445 covers device
                supply with 2–15 transmission days per 30-day period (below the 16-day threshold that CPT
                99454 requires), and CPT 99470 covers the first 10 minutes of monthly treatment-management
                time (below the 20-minute threshold that CPT 99457 requires). Engagement that previously
                fell short of the all-or-nothing thresholds now has a billable pathway — which is why this
                calculator asks for your patient mix across both tiers of each requirement.
              </p>
              <p>
                Each patient can qualify for at most one device-supply code per 30-day period and at most
                one treatment-management code per calendar month, and treatment-management codes require at
                least one real-time interactive communication with the patient or caregiver during the
                month. The calculator enforces the mutually-exclusive tiers; your billing team must verify
                that each claimed patient actually met the thresholds from logged dates and itemized time.
              </p>
              <p>
                For the full requirements — transmission-day counting, interactive communication, stacking
                RPM with CCM and TCM, and a documentation checklist — see our{' '}
                <Link href="/blog/2026-rpm-cpt-codes" className="text-[#d946ef] hover:underline">
                  2026 RPM billing guide
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Important Disclaimers</h2>
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
              <p>
                Estimates use approximate 2026 Medicare non-facility national average rates and your
                inputs; they are illustrative only and should not be used to forecast claims revenue.
                Actual reimbursement varies by geographic locality, setting, payer, MAC, and applicable
                Medicare payment rules. Verify current amounts in the CMS Physician Fee Schedule Look-Up
                Tool.
              </p>
              <p>
                This calculator does not constitute billing, legal, or clinical advice. Billing requires
                that all coverage, device, consent, transmission-day, treatment-time, interactive
                communication, and documentation requirements are independently met for each patient and
                period. Consult a qualified medical coder or your Medicare Administrative Contractor for
                your practice&apos;s specific billing questions.
              </p>
              <p>
                CPT is a registered trademark of the American Medical Association. CPT codes and
                descriptions are used here for informational purposes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Turn these estimates into a running program
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Positive Check helps RPM, CCM, and TCM teams automate structured patient outreach, organize
              documentation, and surface the patients who need human follow-up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestDemoModal>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-[#e879f9] hover:from-purple-600 hover:to-purple-500 text-white px-8"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </RequestDemoModal>
              <Link href="/blog/2026-rpm-cpt-codes">
                <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8">
                  Read the 2026 RPM Billing Guide
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
