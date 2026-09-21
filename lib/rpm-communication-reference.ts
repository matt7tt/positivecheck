import type { BillingReference } from '@/components/billing-reference-guide'
import { rpmBillingGuide } from '@/lib/billing-reference-content'

export const rpmCommunicationReference: BillingReference = {
  id: 'interactive-comm',
  path: '/solutions/remote-patient-monitoring/interactive-communication-requirement',
  title: 'CMS Interactive Communication Requirement for RPM: What Counts and What Doesn’t',
  seoTitle: 'CMS Interactive Communication Requirement for RPM: What Counts and What Doesn’t | Positive Check',
  description: 'Separate required live RPM communication from total treatment-management time. Check data review, outreach attempts, AI support, and clinical documentation boundaries.',
  published: '2026-04-19', updated: '2026-09-20', parent: rpmBillingGuide.parent,
  summary: 'RPM treatment-management codes require real-time, two-way communication with the patient or caregiver. That communication is one component of the service: qualifying care-management work can also contribute to the total time. Neither an unanswered message nor automated call duration independently establishes the required clinical service.',
  sections: [
    { id: 'communication-versus-time', title: 'Communication and total time are different checks', paragraphs: [
      'CMS defines the required interaction as a synchronous, two-way conversation. A live clinical telephone conversation can meet that communication component; video or other data may enhance it. Do not infer that every text chat, automated call, or portal interaction qualifies merely because it receives a response. Verify current CPT, CMS, MAC, and payer requirements for the actual service.',
      'CMS clarified that time for 99457 and 99458 may include qualifying care-management work as well as the required communication. Reviewing and managing transmitted physiologic data can contribute when performed as part of the covered service. It does not replace the required conversation, and passive device transmission is not staff treatment-management time.',
    ], links: [rpmBillingGuide.sources[1]] },
    { id: 'activity-boundaries', title: 'Classify the activity before counting it', paragraphs: [
      'Use separate fields for the clinical activity, the person performing it, its duration, and any patient or caregiver conversation. These examples describe evidence to assess, not automatic claim eligibility.',
    ], table: { caption: 'RPM communication and time boundaries', headings: ['Activity', 'Communication component', 'Time-record consideration'], rows: [
      ['Live clinical phone conversation with patient or caregiver', 'Can satisfy the required conversation when the service and personnel qualify', 'Record participants, duration, clinical content, and next action'],
      ['Qualifying staff review and management of transmitted readings', 'Does not by itself satisfy the live conversation', 'Can contribute to total qualifying management time; document purpose and action'],
      ['Voicemail, unanswered call, or one-way reminder', 'Does not establish completed two-way communication', 'Record as an attempt, not a completed clinical conversation'],
      ['Automated call or generated transcript', 'Do not assume it substitutes for qualifying human interaction', 'Separate software runtime from actual eligible staff work'],
      ['Work already included in another billed service', 'Do not treat it as a second independently furnished service', 'Exclude duplicated time and effort'],
    ] } },
    { id: 'documentation-handoff', title: 'Document clinical work and handoffs separately', paragraphs: [
      'A useful activity record identifies the date, staff member and role, duration, data reviewed, clinical purpose, communication participants, resulting action, and follow-up owner. Reconcile the monthly total with the activities actually performed. A detailed transcript alone does not establish the complete service, consent, medical necessity, or eligible personnel.',
      'For an unreachable patient, retain the attempt outcome and assign the next action. Do not silently convert failed attempts into completed conversations or assume more automated calls create qualifying clinical time. The billing team must verify whether the actual month supports the code selected.',
    ], links: [{ label: '99457 worked example: total management time versus live-call time', href: rpmBillingGuide.path }] },
    { id: 'software-review', title: 'Evaluate AI outreach as support for the clinical team', paragraphs: [
      'Positive Check can support outreach, structured responses, and escalation workflows. The practice retains responsibility for qualifying clinical interactions and treatment management. Agree who reviews responses, how urgent needs reach staff, and how unresolved tasks remain visible before rollout.',
      'Ask for a synthetic example export that distinguishes automated activity, human review, and completed clinical communication. Review outcome evidence with its limitations. Neither a vendor demonstration nor engagement statistics prove that an individual RPM claim qualifies.',
    ], links: [{ label: 'Implementation guide: ownership, integrations, and rollout questions', href: '/resources/implementation-guide' }] },
  ],
  faqs: [
    { question: 'Is reviewing device data the same as interactive communication?', answer: 'No. Data review alone is not a real-time conversation with the patient or caregiver. However, qualifying review and management can contribute to total RPM treatment-management time alongside the required communication. Keep the two activity types distinguishable and verify that the actual work and personnel meet the applicable service requirements.' },
    { question: 'Does voicemail satisfy the RPM communication requirement?', answer: 'No. Leaving a voicemail without a real-time exchange does not establish the required two-way conversation. Record it as an outreach attempt and identify the next follow-up action. A detailed message or long call duration does not change an unsuccessful attempt into completed interactive communication with the patient or caregiver.' },
    { question: 'Does every live text chat count as RPM communication?', answer: 'Do not assume that a responsive text chat satisfies the required interaction. CMS describes a real-time, synchronous two-way conversation that may be enhanced with video or other data. Have qualified clinical and billing personnel check the actual modality and current CPT, CMS, MAC, and payer requirements before relying on it.' },
    { question: 'Does all 99457 time have to be spent on the phone?', answer: 'No. The 99457 threshold concerns total qualifying treatment-management time, including required interactive communication, rather than a minimum 20-minute telephone call. Qualifying care-management work may also contribute. Record the live conversation and other activities separately, and exclude automated runtime or any time already counted toward another billed service.' },
    { question: 'Can AI calls replace clinical staff communication?', answer: 'Do not assume that a fully automated call replaces the required clinical interaction or supplies qualifying staff time. AI can support outreach, capture responses, and help route concerns, but the practice must verify the human clinical work actually performed. Document that work independently of the automated conversation and its transcript.' },
    { question: 'What should we test before changing our outreach process?', answer: 'Test a completed clinical interaction, an unanswered call, and a response needing escalation using synthetic records. Confirm that ownership, human work, automated activity, and follow-up are distinguishable in the export. Review the evidence with the clinical and billing teams; software completion metrics alone cannot establish eligibility or a compliant claim.' },
  ],
  sources: rpmBillingGuide.sources,
  related: [{ label: 'CPT 99457 billing guide', href: rpmBillingGuide.path }, { label: 'RPM versus CCM: separate program records', href: '/resources/compare/rpm-vs-ccm-medicare-billing' }],
}
