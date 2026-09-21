import { BillingReferenceGuide, billingReferenceMetadata } from '@/components/billing-reference-guide'
import { tcmBillingGuide } from '@/lib/billing-reference-content'

export const metadata = billingReferenceMetadata(tcmBillingGuide)

export default function CPT99495BillingGuidePage() {
  return <BillingReferenceGuide guide={tcmBillingGuide} />
}
