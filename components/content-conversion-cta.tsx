"use client"

import Link from 'next/link'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

interface ContentConversionCtaProps {
  source: string
  title: string
  description: string
  buttonText?: string
  secondaryText?: string
  secondaryHref?: string
}

export function ContentConversionCta({
  source,
  title,
  description,
  buttonText = 'See the workflow',
  secondaryText = 'Estimate program ROI',
  secondaryHref = '/roi-calculator',
}: ContentConversionCtaProps) {
  return (
    <aside className="my-10 rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 md:p-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-700">
        For healthcare operations teams
      </p>
      <h2 className="mb-3 text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mb-6 max-w-2xl leading-relaxed text-gray-700">{description}</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <RequestDemoModal source={source}>
          <Button className="min-h-11 bg-[#1a2642] px-6 text-white hover:bg-[#2a3752]">
            {buttonText}
          </Button>
        </RequestDemoModal>
        <Button asChild variant="outline" className="min-h-11 border-purple-300 bg-white px-6 text-purple-800">
          <Link
            href={secondaryHref}
            onClick={() =>
              trackEvent('cta_click', {
                cta_name: 'estimate_program_roi',
                cta_location: source,
              })
            }
          >
            {secondaryText}
          </Link>
        </Button>
      </div>
    </aside>
  )
}
