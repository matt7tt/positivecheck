'use client'

import { useState, useMemo, useRef, useCallback } from 'react'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from '@/components/ui/select'
import { RequestDemoModal } from '@/components/request-demo-modal'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import {
  Calculator, Download, ArrowRight, DollarSign, TrendingUp,
  Users, CheckCircle,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

type ProgramType = 'rpm_only' | 'ccm_only' | 'rpm_ccm' | 'rpm_complex_ccm' | 'post_discharge'

interface CPTCode {
  code: string
  description: string
  rate: number
  pcSupport: string
}

interface ProgramConfig {
  label: string
  codes: string[]
  revenuePerPatient: number
}

const PROGRAM_CONFIGS: Record<ProgramType, ProgramConfig> = {
  rpm_only: {
    label: 'RPM Only',
    codes: ['99457', '99458'],
    revenuePerPatient: 93,
  },
  ccm_only: {
    label: 'CCM Only',
    codes: ['99490'],
    revenuePerPatient: 66,
  },
  rpm_ccm: {
    label: 'RPM + CCM',
    codes: ['99457', '99458', '99490'],
    revenuePerPatient: 159,
  },
  rpm_complex_ccm: {
    label: 'RPM + Complex CCM',
    codes: ['99457', '99458', '99487'],
    revenuePerPatient: 237,
  },
  post_discharge: {
    label: 'Post-Discharge',
    codes: ['99495'],
    revenuePerPatient: 178,
  },
}

const CPT_CODES: CPTCode[] = [
  { code: '99457', description: 'RPM — first 20 min clinical staff time per month', rate: 52, pcSupport: 'Automated daily calls collect vitals, symptoms, and wellness data — satisfying the interactive communication requirement.' },
  { code: '99458', description: 'RPM — each additional 20 min clinical staff time per month', rate: 41, pcSupport: 'Structured call summaries and trend reports reduce clinical review time, making the additional 20 minutes highly productive.' },
  { code: '99454', description: 'RPM — device(s) supply with daily recordings or alert transmission, each 30 days', rate: 56, pcSupport: 'Positive Check serves as the patient-facing data collection layer, transmitting structured responses to the provider dashboard.' },
  { code: '99490', description: 'CCM — first 20 min non-complex chronic care management', rate: 66, pcSupport: 'Daily wellness calls provide documented patient touchpoints, medication adherence checks, and care plan follow-up.' },
  { code: '99439', description: 'CCM — each additional 20 min non-complex CCM', rate: 48, pcSupport: 'Automated follow-ups and alert-triggered callbacks generate additional documented care coordination time.' },
  { code: '99487', description: 'Complex CCM — first 60 min for patients with multiple chronic conditions', rate: 144, pcSupport: 'Daily monitoring with escalation protocols supports the higher documentation bar for complex patients.' },
  { code: '99495', description: 'TCM — post-discharge follow-up contact within 2 business days', rate: 178, pcSupport: 'Automated post-discharge calls within 24-48 hours satisfy the initial patient contact requirement.' },
]

const CPT_RATE_MAP: Record<string, number> = {}
CPT_CODES.forEach((c) => { CPT_RATE_MAP[c.code] = c.rate })

const formatCurrency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ROICalculator() {
  // State
  const [patients, setPatients] = useState(100)
  const [programType, setProgramType] = useState<ProgramType>('rpm_ccm')
  const [pcTier, setPcTier] = useState(12)
  const [billingRate, setBillingRate] = useState(85)

  const calculatorRef = useRef<HTMLDivElement>(null)
  const pdfRef = useRef<HTMLDivElement>(null)

  // Derived calculations
  const results = useMemo(() => {
    const config = PROGRAM_CONFIGS[programType]
    const monthlyRevenue = patients * config.revenuePerPatient * (billingRate / 100)
    const monthlyCost = patients * pcTier
    const monthlyNet = monthlyRevenue - monthlyCost
    const roi = monthlyCost > 0 ? monthlyRevenue / monthlyCost : 0

    return {
      config,
      monthlyRevenue,
      monthlyCost,
      monthlyNet,
      roi,
      annualRevenue: monthlyRevenue * 12,
      annualCost: monthlyCost * 12,
      annualNet: monthlyNet * 12,
    }
  }, [patients, programType, pcTier, billingRate])

  // Billing breakdown rows
  const billingRows = useMemo(() => {
    const config = PROGRAM_CONFIGS[programType]
    return config.codes.map((code) => {
      const rate = CPT_RATE_MAP[code] || 0
      const subtotal = patients * rate * (billingRate / 100)
      return { code, rate, subtotal }
    })
  }, [patients, programType, billingRate])

  // Chart data
  const chartData = useMemo(() => [
    { name: 'Monthly', Revenue: Math.round(results.monthlyRevenue), Cost: Math.round(results.monthlyCost) },
    { name: 'Annual', Revenue: Math.round(results.annualRevenue), Cost: Math.round(results.annualCost) },
  ], [results])

  // Scenario presets
  const applyScenario = useCallback((type: ProgramType) => {
    setPatients(100)
    setProgramType(type)
    setBillingRate(85)
    setPcTier(12)
    setTimeout(() => {
      calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [])

  // PDF download
  const handleDownloadPdf = useCallback(async () => {
    if (!pdfRef.current) return
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf'),
    ])
    const canvas = await html2canvas(pdfRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('Positive-Check-ROI-Summary.pdf')
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <PublicHeader currentPage="platform" />

      <main>
        {/* ================================================================ */}
        {/* Section 1 — Hero */}
        {/* ================================================================ */}
        <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm mb-6">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto leading-tight">
              ROI &amp; Reimbursement Calculator
            </h1>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              See how Positive Check turns a low per-patient cost into significant Medicare
              reimbursement revenue for your practice.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: '$93–$237', label: 'Revenue / Patient / Mo' },
                { value: '$8–$16', label: 'PC Cost / Patient / Mo' },
                { value: '5–15x', label: 'Typical ROI Multiple' },
                { value: '2026', label: 'Medicare Rates' },
              ].map((m) => (
                <Card key={m.label} className="bg-white/15 border-white/20 backdrop-blur-sm">
                  <CardContent className="p-5 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">{m.value}</p>
                    <p className="text-purple-100 text-sm mt-1">{m.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Section 2 — Calculator */}
        {/* ================================================================ */}
        <section ref={calculatorRef} className="px-6 py-16 bg-white scroll-mt-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Adjust the inputs below to see projected revenue, cost, and return based on your
                patient population and program&nbsp;mix.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* ---- Inputs ---- */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">Your Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Patient count */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Patient Count</Label>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                        {patients.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      value={[patients]}
                      onValueChange={(v) => setPatients(v[0])}
                      min={10}
                      max={5000}
                      step={10}
                      className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>10</span>
                      <span>5,000</span>
                    </div>
                  </div>

                  {/* Program type */}
                  <div className="space-y-3">
                    <Label>Program Type</Label>
                    <Select value={programType} onValueChange={(v) => setProgramType(v as ProgramType)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(Object.entries(PROGRAM_CONFIGS) as [ProgramType, ProgramConfig][]).map(
                          ([key, cfg]) => (
                            <SelectItem key={key} value={key}>
                              {cfg.label} — {formatCurrency(cfg.revenuePerPatient)}/pt/mo
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* PC tier */}
                  <div className="space-y-3">
                    <Label>Positive Check Tier</Label>
                    <Select value={String(pcTier)} onValueChange={(v) => setPcTier(Number(v))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">$8 / patient / month</SelectItem>
                        <SelectItem value="12">$12 / patient / month</SelectItem>
                        <SelectItem value="16">$16 / patient / month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Billing compliance */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Billing Compliance Rate</Label>
                      <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-semibold text-purple-700">
                        {billingRate}%
                      </span>
                    </div>
                    <Slider
                      value={[billingRate]}
                      onValueChange={(v) => setBillingRate(v[0])}
                      min={50}
                      max={100}
                      step={1}
                      className="[&_[data-radix-slider-range]]:bg-purple-500 [&_[data-radix-slider-thumb]]:border-purple-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ---- Results ---- */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">Projected Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* ROI headline */}
                  <div className="text-center py-4">
                    <p className="text-sm font-medium text-gray-500 mb-1">Return on Investment</p>
                    <p className="text-5xl font-bold text-purple-600">
                      {results.roi.toFixed(1)}x
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {PROGRAM_CONFIGS[programType].label} &middot; {patients.toLocaleString()} patients
                    </p>
                  </div>

                  {/* Monthly metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Monthly Revenue</p>
                      <p className="text-lg font-bold text-green-700">{formatCurrency(results.monthlyRevenue)}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Monthly Cost</p>
                      <p className="text-lg font-bold text-gray-700">{formatCurrency(results.monthlyCost)}</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Monthly Net</p>
                      <p className="text-lg font-bold text-purple-700">{formatCurrency(results.monthlyNet)}</p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-52">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis type="number" tick={{ fontSize: 12 }} stroke="#9ca3af" tickFormatter={(v: number) => formatCurrency(v)} />
                        <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} stroke="#9ca3af" width={60} />
                        <Tooltip
                          contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                          formatter={(value: number) => formatCurrency(value)}
                        />
                        <Bar dataKey="Revenue" fill="#d946ef" radius={[0, 4, 4, 0]} />
                        <Bar dataKey="Cost" fill="#9ca3af" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Annual projections */}
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-gray-500 mb-3">Annual Projections</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Revenue</p>
                        <p className="text-base font-bold text-green-700">{formatCurrency(results.annualRevenue)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Cost</p>
                        <p className="text-base font-bold text-gray-700">{formatCurrency(results.annualCost)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Net</p>
                        <p className="text-base font-bold text-purple-700">{formatCurrency(results.annualNet)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Section 3 — Billing Breakdown */}
        {/* ================================================================ */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Billing Breakdown</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                How your selected program translates into reimbursable CPT codes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">CPT Code</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700">Patients</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700">Rate</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700">Compliance</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700">Monthly Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {billingRows.map((row) => (
                        <tr key={row.code} className="border-b last:border-b-0">
                          <td className="py-3 px-4 font-medium text-gray-900">{row.code}</td>
                          <td className="py-3 px-4 text-right text-gray-600">{patients.toLocaleString()}</td>
                          <td className="py-3 px-4 text-right text-gray-600">{formatCurrency(row.rate)}</td>
                          <td className="py-3 px-4 text-right text-gray-600">{billingRate}%</td>
                          <td className="py-3 px-4 text-right font-semibold text-gray-900">{formatCurrency(row.subtotal)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-purple-50">
                        <td colSpan={4} className="py-3 px-4 font-semibold text-purple-700">Total Monthly Revenue</td>
                        <td className="py-3 px-4 text-right font-bold text-purple-700">{formatCurrency(results.monthlyRevenue)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Section 4 — Revenue Scenarios */}
        {/* ================================================================ */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Revenue Scenarios</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Compare common program configurations. Click &ldquo;Try This Scenario&rdquo; to load
                the values into the calculator.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {([
                { type: 'rpm_only' as ProgramType, highlight: false },
                { type: 'rpm_ccm' as ProgramType, highlight: true },
                { type: 'rpm_complex_ccm' as ProgramType, highlight: false },
              ]).map(({ type, highlight }) => {
                const cfg = PROGRAM_CONFIGS[type]
                const rev = 100 * cfg.revenuePerPatient * 0.85
                const cost = 100 * 12
                const net = rev - cost
                const scenarioRoi = rev / cost
                return (
                  <Card
                    key={type}
                    className={`border-gray-200 ${highlight ? 'ring-2 ring-purple-400' : ''}`}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{cfg.label}</CardTitle>
                      <p className="text-sm text-gray-500">
                        100 patients &middot; 85% compliance &middot; $12/pt
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Monthly Revenue</span>
                          <span className="font-semibold text-green-700">{formatCurrency(rev)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Monthly Cost</span>
                          <span className="font-semibold text-gray-700">{formatCurrency(cost)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Monthly Net</span>
                          <span className="font-semibold text-purple-700">{formatCurrency(net)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">ROI</span>
                          <span className="font-bold text-purple-600">{scenarioRoi.toFixed(1)}x</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                        onClick={() => applyScenario(type)}
                      >
                        Try This Scenario
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Section 5 — CPT Code Reference */}
        {/* ================================================================ */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">CPT Code Reference</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                2026 Medicare national average reimbursement rates and how Positive Check supports each code.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Code</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                        <th className="text-right py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">2026 Rate</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">How PC Supports</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CPT_CODES.map((cpt) => (
                        <tr key={cpt.code} className="border-b last:border-b-0">
                          <td className="py-3 px-4 font-medium text-purple-700 whitespace-nowrap">{cpt.code}</td>
                          <td className="py-3 px-4 text-gray-700">{cpt.description}</td>
                          <td className="py-3 px-4 text-right font-semibold text-gray-900 whitespace-nowrap">{formatCurrency(cpt.rate)}</td>
                          <td className="py-3 px-4 text-gray-600 text-xs leading-relaxed">{cpt.pcSupport}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Section 6 — Disclaimers */}
        {/* ================================================================ */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Important Disclaimers</h2>
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
              <p>
                Estimates are based on 2026 Medicare national average reimbursement rates. Actual
                reimbursement varies by geographic region (GPCI adjustments), payer mix, and
                individual claim adjudication. These projections are illustrative and should not be
                interpreted as guaranteed revenue.
              </p>
              <p>
                Positive Check supports patient engagement and documentation requirements for
                Remote Patient Monitoring (RPM), Chronic Care Management (CCM), and Transitional
                Care Management (TCM) billing. Providers remain responsible for meeting all CMS
                eligibility criteria, clinical oversight requirements, and proper code selection.
              </p>
              <p>
                This calculator does not constitute billing, legal, or financial advice. Healthcare
                organizations should consult with qualified billing professionals, compliance
                officers, and legal counsel before implementing reimbursement strategies.
              </p>
              <p>
                CPT is a registered trademark of the American Medical Association. CPT codes and
                descriptions are used here for informational purposes in accordance with fair use.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* Section 7 — CTA */}
        {/* ================================================================ */}
        <section className="px-6 py-16 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Unlock New Revenue?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Schedule a demo to see how Positive Check can help your organization generate
              reimbursable revenue while improving patient outcomes.
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
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8"
                onClick={handleDownloadPdf}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF Summary
              </Button>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />

      {/* ================================================================ */}
      {/* Hidden PDF layout — positioned off-screen for html2canvas */}
      {/* ================================================================ */}
      <div
        ref={pdfRef}
        style={{ position: 'absolute', left: '-9999px', top: 0, width: '800px' }}
        className="bg-white p-8"
      >
        {/* PDF Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-purple-500">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Positive Check</h1>
            <p className="text-sm text-gray-500">ROI &amp; Reimbursement Summary</p>
          </div>
          <p className="text-sm text-gray-400">positivecheck.com</p>
        </div>

        {/* PDF Headline */}
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-purple-600 mb-1">{results.roi.toFixed(1)}x ROI</p>
          <p className="text-lg text-gray-700 font-medium">{PROGRAM_CONFIGS[programType].label}</p>
        </div>

        {/* PDF Inputs Summary */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Patients', value: patients.toLocaleString() },
            { label: 'Program', value: PROGRAM_CONFIGS[programType].label },
            { label: 'PC Tier', value: `$${pcTier}/pt/mo` },
            { label: 'Compliance', value: `${billingRate}%` },
          ].map((item) => (
            <div key={item.label} className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="text-sm font-bold text-gray-900">{item.value}</p>
            </div>
          ))}
        </div>

        {/* PDF Billing Breakdown */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Billing Breakdown</h3>
          <table className="w-full text-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-2 px-3 text-xs font-semibold text-gray-600">CPT Code</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-600">Patients</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-600">Rate</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-600">Compliance</th>
                <th className="text-right py-2 px-3 text-xs font-semibold text-gray-600">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {billingRows.map((row) => (
                <tr key={row.code} className="border-b">
                  <td className="py-2 px-3 text-xs">{row.code}</td>
                  <td className="py-2 px-3 text-xs text-right">{patients.toLocaleString()}</td>
                  <td className="py-2 px-3 text-xs text-right">{formatCurrency(row.rate)}</td>
                  <td className="py-2 px-3 text-xs text-right">{billingRate}%</td>
                  <td className="py-2 px-3 text-xs text-right font-semibold">{formatCurrency(row.subtotal)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PDF Monthly / Annual Summary */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="text-xs font-semibold text-purple-700 mb-2">Monthly</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Revenue</span>
                <span className="font-bold text-green-700">{formatCurrency(results.monthlyRevenue)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cost</span>
                <span className="font-bold text-gray-700">{formatCurrency(results.monthlyCost)}</span>
              </div>
              <div className="flex justify-between border-t border-purple-200 pt-1">
                <span className="text-gray-600">Net</span>
                <span className="font-bold text-purple-700">{formatCurrency(results.monthlyNet)}</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="text-xs font-semibold text-green-700 mb-2">Annual</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Revenue</span>
                <span className="font-bold text-green-700">{formatCurrency(results.annualRevenue)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cost</span>
                <span className="font-bold text-gray-700">{formatCurrency(results.annualCost)}</span>
              </div>
              <div className="flex justify-between border-t border-green-200 pt-1">
                <span className="text-gray-600">Net</span>
                <span className="font-bold text-purple-700">{formatCurrency(results.annualNet)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Disclaimers */}
        <div className="mb-6 text-xs text-gray-400 space-y-1">
          <p>Estimates based on 2026 Medicare national average reimbursement rates. Actual reimbursement varies by region and payer.</p>
          <p>This does not constitute billing, legal, or financial advice. Consult qualified professionals.</p>
          <p>CPT is a registered trademark of the American Medical Association.</p>
        </div>

        {/* PDF Footer */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-purple-600">Learn more at positivecheck.com</p>
          <p className="text-xs text-gray-400 mt-1">info@positivecheck.com &middot; (858) 522-9524</p>
        </div>
      </div>
    </div>
  )
}
