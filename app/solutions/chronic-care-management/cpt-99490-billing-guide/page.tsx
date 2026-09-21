import { BillingReferenceGuide, billingReferenceMetadata } from '@/components/billing-reference-guide'
import { ccmBillingGuide } from '@/lib/billing-reference-content'

export const metadata = billingReferenceMetadata(ccmBillingGuide)

export default function CPT99490BillingGuidePage() {
  return <BillingReferenceGuide guide={ccmBillingGuide} />
}
