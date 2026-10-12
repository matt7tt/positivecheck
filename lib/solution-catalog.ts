export const frontOfficeSolutions = [
  { slug: 'new-patient-leads', name: 'New Patient Leads', interest: 'new-patient-leads', description: 'Respond to new patient inquiries with calls and SMS, then hand off questions and next steps to your team.' },
  { slug: 'scheduling-confirmations', name: 'Scheduling & Confirmations', interest: 'scheduling-confirmations', description: 'Support appointment setting and confirmation conversations, with scheduling rules and staff ownership agreed in advance.' },
  { slug: 'appointment-reminders', name: 'Appointment Reminders', interest: 'appointment-reminders', description: 'Send appointment reminder calls and SMS, and identify patients who need help or a scheduling follow-up.' },
  { slug: 'patient-notifications', name: 'Patient Notifications', interest: 'patient-notifications', description: 'Deliver practice-approved operational updates by call or SMS, with a clear route for questions and exceptions.' },
] as const

export const careManagementSolutions = [
  { href: '/solutions/remote-patient-monitoring', name: 'Remote Patient Monitoring', interest: 'rpm' },
  { href: '/solutions/chronic-care-management', name: 'Chronic Care Management', interest: 'ccm' },
  { href: '/solutions/post-discharge-follow-up', name: 'Post-Discharge Follow-Up', interest: 'post-discharge' },
] as const

export const solutionGroups = [
  { name: 'Front Office', items: frontOfficeSolutions.map(s => ({ ...s, href: `/solutions/front-office/${s.slug}` })) },
  { name: 'Care Management', items: careManagementSolutions },
] as const
