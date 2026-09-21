import { BillingReferenceGuide, billingReferenceMetadata } from '@/components/billing-reference-guide'
import { rpmCcmComparison } from '@/lib/billing-reference-content'

export const metadata = billingReferenceMetadata(rpmCcmComparison)

export default function RPMCCMComparisonPage() {
  return <BillingReferenceGuide guide={rpmCcmComparison} />
}
