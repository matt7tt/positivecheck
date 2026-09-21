import { BillingReferenceGuide, billingReferenceMetadata } from '@/components/billing-reference-guide'
import { rpmCommunicationReference } from '@/lib/rpm-communication-reference'

export const metadata = billingReferenceMetadata(rpmCommunicationReference)

export default function InteractiveCommunicationRequirementPage() {
  return <BillingReferenceGuide guide={rpmCommunicationReference} />
}
