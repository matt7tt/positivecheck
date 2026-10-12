const evaluationFaqs = [
  {
    question: 'Does Lola replace our front desk team?',
    answer: 'No. Lola supports repeatable calls and SMS; your staff still own exceptions, complex questions and the patient relationship. Compare the work your team does today with what remains after automation. A pilot should measure review and follow-up effort as well as successful conversations, rather than assume every automated interaction saves a fixed amount of staff time.',
  },
  {
    question: 'What should we confirm about integrations before starting?',
    answer: 'Confirm where contact and appointment data originate, how changes reach the outreach workflow, and which results can be written back. Do not assume a named EHR or calendar integration is included. Ask for a demonstration using synthetic records, including changed appointments, duplicate records and failed updates, and agree which system and staff member own the final outcome.',
  },
  {
    question: 'How should we evaluate a pilot?',
    answer: 'Start with one task and an agreed population, message and human handoff. Record the current baseline, then compare contact success, completed next steps, staff follow-up time, opt-outs and errors using the same definitions. Review failures as well as successes. Expand only when practice operations owners agree that the process and exception workload are supportable.',
  },
]

export const frontOfficeContent = {
  'new-patient-leads': {
    title: 'New Patient Lead Follow-Up Calls & SMS',
    description: 'Follow up on new patient inquiries with AI calls and SMS. Evaluate response timing, appointment handoffs and staff workload with Positive Check.',
    intro: 'Lola helps your front office respond to new patient inquiries by call and SMS, collect the next step the person wants, and route requests to your team. Your practice owns the response policy and any appointment or service commitments.',
    fit: 'For practice managers whose team splits its attention between incoming inquiries, phones and patients at the desk. Start with one inquiry source and one service so you can distinguish a new lead from an existing patient, a duplicate submission or a support request.',
    steps: [
      ['Define eligible inquiries', 'Agree which form or lead source can trigger outreach, how contact permission is recorded, and when a repeat submission should be suppressed. A submitted email address alone is not a phone number or a request for an automated call.'],
      ['Respond with an approved conversation', 'Use practice-approved service information and call or SMS timing. Keep questions focused on the requested next step. Do not ask a prospect to disclose medical history in a marketing demonstration.'],
      ['Make the handoff explicit', 'Separate a request for an appointment from a confirmed booking. Assign staff ownership for unanswered questions, failed contacts and appointments that require manual confirmation.'],
    ],
    measure: 'Track inquiry received → first response attempted → connected or replied → next step requested → appointment confirmed. Report elapsed time to first attempt separately from connection time; a queued message is not a successful conversation.',
    faqs: [
      { question: 'Can Lola call or text people who submit a new patient inquiry?', answer: 'Yes, calls and SMS can support new lead follow-up when the source, contact permission, timing and script are configured for the practice. Agree which inquiries qualify before enabling the workflow. A form submission should not silently turn into permission for every outreach channel, and staff need a fallback when the number is missing or contact fails.' },
      { question: 'Will every inquiry receive an immediate call?', answer: 'Do not promise an immediate connected call. Response timing depends on the approved contact window, valid contact details, delivery availability and whether the person answers. Set an operational target for the first attempt and a fallback for failures. Keep attempted, connected and completed conversations separate when measuring how reliably the workflow responds.' },
      { question: 'Can a lead be marked booked as soon as they request a time?', answer: 'No. A preferred time or positive reply is an appointment request until the scheduling system or authorized staff confirms it. Evaluate how availability is checked, who handles exceptions, and where confirmation is recorded. Reporting should distinguish interest, scheduling requests and confirmed appointments so staff do not overlook a patient who is still waiting.' },
      ...evaluationFaqs,
    ],
  },
  'scheduling-confirmations': {
    title: 'Patient Appointment Scheduling & Confirmation Calls',
    description: 'Support appointment setting and confirmations with AI calls and SMS. Define calendar integration, scheduling rules and staff handoffs before launch.',
    intro: 'Lola supports appointment-setting and confirmation conversations by call and SMS. The workflow needs an agreed source of availability, scheduling rules and a clear distinction between a requested time and a confirmed appointment.',
    fit: 'For practice managers handling scheduling callbacks and confirmation queues. Define the appointment types, locations and providers in scope first; workflows with complex eligibility or preparation requirements may need staff review before a time can be confirmed.',
    steps: [
      ['Establish the scheduling source', 'Decide which system owns availability and appointment status. Verify supported data access and write-back during implementation rather than assuming a universal calendar connection.'],
      ['Handle a request or confirmation', 'Use approved prompts to establish the scheduling need or confirm an existing appointment. Identify changes that require a staff member, rather than treating every response as an automatic calendar update.'],
      ['Reconcile the final status', 'Record requested, confirmed, reschedule requested and unresolved separately. Check the authoritative schedule before communicating a final appointment commitment.'],
    ],
    measure: 'Track confirmed appointments against actual calendar records, unresolved scheduling requests and staff reconciliation time. Include conflicts, cancellations and stale availability in testing—not only a successful appointment request.',
    faqs: [
      { question: 'Can Lola help with appointment setting and confirmations?', answer: 'Yes. Lola supports scheduling and confirmation conversations using calls and SMS. The exact booking action depends on the scheduling system, approved rules and integration scope. During evaluation, distinguish collecting a preferred time from writing a confirmed appointment to the calendar, and agree how staff will handle conflicts, unavailable slots and requests outside the configured workflow.' },
      { question: 'Does a patient saying yes mean an appointment is booked?', answer: 'Not necessarily. A yes may confirm interest, acknowledge a reminder or accept a proposed time. The workflow must interpret the reply in context and reconcile it with the authoritative schedule. Only an actual confirmed appointment should be reported as booked; ambiguous replies and unsuccessful updates need a staff-owned queue rather than a success label.' },
      { question: 'How should rescheduling and cancellations work?', answer: 'Define which changes Lola may support and which require a person. A cancellation request should not be confused with a completed cancellation, and a reschedule request should not leave two appointments active. Test how schedule changes propagate to future messages, and assign staff responsibility for requests that cannot be completed through the configured integration.' },
      ...evaluationFaqs,
    ],
  },
  'appointment-reminders': {
    title: 'Appointment Reminder Calls & SMS for Medical Practices',
    description: 'Use AI calls and SMS for appointment reminders, patient replies and staff follow-up. Evaluate timing, schedule changes and delivery outcomes.',
    intro: 'Lola supports appointment reminder calls and SMS so your practice can reach patients about upcoming visits and identify who needs help. A delivered reminder, a patient reply and an attended appointment are different outcomes.',
    fit: 'For practice managers reviewing reminder queues and patients who need a callback. Begin with a defined appointment type and compare the proposed workflow with your current reminder tool. If simple one-way messages already meet the need, conversational outreach may not add enough value.',
    steps: [
      ['Keep the appointment list current', 'Use the practice’s agreed schedule source and contact preferences. Decide how cancellations, reschedules and duplicate patient records are handled before reminders are sent.'],
      ['Set reminder timing and message scope', 'Approve the call or SMS wording and contact window. Keep messages limited to the operational details appropriate for the channel, and define what happens when someone does not respond.'],
      ['Route replies that need action', 'Separate confirmed attendance intentions, requests for help and changes requiring staff. Make sure a reply is not simply counted and forgotten while the patient waits for a callback.'],
    ],
    measure: 'Measure attempted and delivered messages, replies, help requests resolved and appointment attendance. Compare comparable visit types and time periods; reminder delivery alone does not demonstrate fewer missed appointments.',
    faqs: [
      { question: 'Does Positive Check support both reminder calls and texts?', answer: 'Yes. Calls and SMS can support appointment reminders. Choose channels and timing around the practice’s approved contact policy and patient preferences, and confirm the required sender and integration setup. The evaluation should include missing numbers, unanswered calls, delivery failures and opt-outs, with a clear staff-owned process for patients who need additional help.' },
      { question: 'Can reminders guarantee fewer no-shows?', answer: 'No. An appointment reminder is an outreach activity, not a guarantee that a patient will attend. Transportation, cost, scheduling and other factors can still affect attendance. Compare attendance for comparable appointment groups and report the evaluation period and limitations. Also measure whether reminders create additional staff work through replies, cancellations or requests for assistance.' },
      { question: 'How is conversational outreach different from a basic reminder tool?', answer: 'A basic reminder tool may be sufficient when the task is simply sending a standard message. Evaluate conversational calls or SMS when replies need clarification or a staff handoff. Compare both approaches on schedule accuracy, handling of exceptions, patient preferences and total workload. Do not assume every reminder needs an AI conversation to be effective.' },
      ...evaluationFaqs,
    ],
  },
  'patient-notifications': {
    title: 'Patient Notification Calls & SMS for Practices',
    description: 'Deliver practice-approved patient notifications through calls and SMS. Plan operational updates, reply handling and staff escalation with Positive Check.',
    intro: 'Lola supports calls and SMS for practice-approved patient notifications, such as scheduling updates and operational notices. Your practice decides the audience, wording, timing and human response path; Lola does not make clinical decisions.',
    fit: 'For practice managers coordinating updates that otherwise require repeated manual calls. Separate operational notices from messages that contain sensitive information or need clinical interpretation. Different messages can need different review and delivery processes.',
    steps: [
      ['Choose the audience and purpose', 'Define who needs the notice and why. Review contact records and preferences, and exclude people who should not receive that message rather than treating every list as a broadcast audience.'],
      ['Approve the message for the channel', 'Agree on wording for a live call, voicemail or text. Decide what can be disclosed in each channel and when the recipient should instead contact the practice through an approved route.'],
      ['Own delivery exceptions and replies', 'Track delivery separately from acknowledgement. Assign a team member to questions, failed contacts and requests that fall outside the operational script.'],
    ],
    measure: 'Report delivery attempts, delivery outcomes, replies requiring action and resolved follow-ups. A text marked delivered is not proof that the patient read or understood it, and a call attempt is not an acknowledgement.',
    faqs: [
      { question: 'What kinds of patient notifications fit this workflow?', answer: 'Practice-approved operational notices, including appointment-related updates, are a starting point. Define the exact message and audience during implementation. Do not treat a general notification workflow as permission to send any health information through any channel. Messages that require clinical interpretation, sensitive details or urgent action need their own reviewed process and appropriate human ownership.' },
      { question: 'Can Lola explain a diagnosis or decide what a patient should do?', answer: 'Lola does not make clinical decisions. Front Office notifications should stay within the approved operational message and route clinical questions to the care team. When a recipient asks something outside that scope, the workflow needs a clear handoff rather than an improvised answer. Confirm staffing and response expectations before enabling a message that could prompt clinical questions.' },
      { question: 'Does delivered mean the patient understood the notification?', answer: 'No. Delivery, acknowledgement and understanding are different measures. A text delivery receipt does not show that the message was read, and an answered call may still require follow-up. Decide what evidence the specific notice requires, identify unanswered questions and keep a staff-owned route for people who need the information repeated or explained.' },
      ...evaluationFaqs,
    ],
  },
} as const
