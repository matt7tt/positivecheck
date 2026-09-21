import { BillingReferenceGuide, billingReferenceMetadata } from '@/components/billing-reference-guide'
import { rpmBillingGuide } from '@/lib/billing-reference-content'

export const metadata = billingReferenceMetadata(rpmBillingGuide)

export default function CPT99457BillingGuidePage() {
  return <BillingReferenceGuide guide={rpmBillingGuide} />
}
