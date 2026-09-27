// A versioned, allowlisted offer shared by the page, form, analytics and lead delivery.
// It contains no visitor-provided or patient information.
export const BILLING_WORKFLOW_OFFER = {
  id: 'billing_workflow_demo_v1',
  title: 'See your RPM/CCM outreach workflow in a 15-minute demo',
  description: 'Bring your outreach questions. We’ll discuss how Positive Check could support your practice’s enrollment, follow-up and care-team handoffs.',
  points: [
    'Discuss where enrollment or routine follow-up gets stuck.',
    'Walk through outreach, documentation and exception routing.',
    'Identify what your team would need to evaluate a pilot.',
  ],
  buttonText: 'Request a workflow demo',
  modalTitle: 'Request your RPM/CCM workflow demo',
  disclaimer: 'This is a software workflow demo, not a clinical or billing-compliance review. Please do not share patient information.',
} as const

export type DemoOfferId = typeof BILLING_WORKFLOW_OFFER.id

export function getDemoOffer(value: unknown) {
  return value === BILLING_WORKFLOW_OFFER.id ? BILLING_WORKFLOW_OFFER : undefined
}
