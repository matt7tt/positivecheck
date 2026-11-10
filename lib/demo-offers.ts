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

export const REMINDER_WORKFLOW_OFFER = {
  id: 'appointment_reminder_demo_v1',
  title: 'Evaluate appointment reminders with your front office team',
  description: 'Bring your current reminder process, monthly appointment volume and scheduling system. Review calls, SMS, staff handoffs and a scoped pilot.',
  points: [
    'Walk through a reminder reply and the staff follow-up it creates.',
    'Confirm appointment data, schedule changes and integration scope.',
    'Discuss pilot measures, total cost and what remains with your team.',
  ],
  buttonText: 'Request a reminder workflow demo',
  modalTitle: 'Request your appointment-reminder demo',
  disclaimer: 'Use fictional examples in the demo. Please do not share patient information.',
} as const

export type DemoOfferId = typeof BILLING_WORKFLOW_OFFER.id | typeof REMINDER_WORKFLOW_OFFER.id

export function getDemoOffer(value: unknown) {
  return value === BILLING_WORKFLOW_OFFER.id ? BILLING_WORKFLOW_OFFER
    : value === REMINDER_WORKFLOW_OFFER.id ? REMINDER_WORKFLOW_OFFER : undefined
}
