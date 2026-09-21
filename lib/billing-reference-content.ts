import type { BillingReference } from '@/components/billing-reference-guide'

const ccmSource = { label: 'CMS: Chronic Care Management Services (June 2025)', href: 'https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/chroniccaremanagement.pdf' }
const rpmSource = { label: 'CMS: Telehealth & Remote Monitoring (December 2025)', href: 'https://www.cms.gov/files/document/mln901705-telehealth-remote-patient-monitoring.pdf' }
const rpmTimeSource = { label: 'CMS: Physician Fee Schedule clarification of RPM treatment-management time', href: 'https://www.cms.gov/newsroom/fact-sheets/final-policy-payment-and-quality-provisions-changes-medicare-physician-fee-schedule-calendar-year-1' }
const rpm2026Source = { label: 'Noridian Medicare: 2026 RPM code updates', href: 'https://med.noridianmedicare.com/web/jeb/article-detail/-/view/10525/remote-physiologic-monitoring-rpm-2026-evaluation-and-management-em-updates' }
const tcmSource = { label: 'CMS: Transitional Care Management Services (August 2025)', href: 'https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf' }
const ccmLink = { label: 'CPT 99490: CCM eligibility and monthly documentation', href: '/solutions/chronic-care-management/cpt-99490-billing-guide' }
const rpmLink = { label: 'CPT 99457: RPM time and communication documentation', href: '/solutions/remote-patient-monitoring/cpt-99457-billing-guide' }
const tcmLink = { label: 'CPT 99495: TCM episode checklist', href: '/solutions/post-discharge-follow-up/cpt-99495-billing-guide' }
const compareLink = { label: 'RPM versus CCM: program fit and separate time records', href: '/resources/compare/rpm-vs-ccm-medicare-billing' }
const implementationLink = { label: 'Implementation: responsibilities, workflow, and rollout questions', href: '/resources/implementation-guide' }

export const ccmBillingGuide: BillingReference = {
  id: 'cpt-99490', path: ccmLink.href,
  title: 'CPT 99490 Billing Guide: Chronic Care Management Requirements',
  seoTitle: 'CPT 99490 Billing Guide: Chronic Care Management Requirements | Positive Check',
  description: 'Check CPT 99490 eligibility, consent, qualifying monthly time, and care-plan documentation. Compare non-complex and complex CCM with a sample activity log.',
  published: '2026-04-20', updated: '2026-09-20',
  parent: { label: 'Chronic Care Management', href: '/solutions/chronic-care-management' },
  summary: 'CPT 99490 requires at least 20 minutes of qualifying clinical staff CCM time in a calendar month, directed by an eligible practitioner. Time alone is insufficient: patient eligibility, consent, the care plan, service elements, and billing restrictions must also be satisfied. Complex CCM is a separate pathway, not an add-on to 99490.',
  sections: [
    { id: 'eligibility', title: 'Check eligibility before tracking minutes', paragraphs: [
      'CCM addresses two or more chronic conditions expected to last at least 12 months, or until death, that create significant risk of death, acute exacerbation or decompensation, or functional decline. A diagnosis count alone does not establish eligibility; document the conditions and why longitudinal management is needed.',
      'For a new patient, or one not seen within the preceding year, CMS requires an initiating visit through an eligible comprehensive evaluation and management service, annual wellness visit, or initial preventive physical examination. Discuss CCM at that visit and document the discussion.',
    ], bullets: ['Record patient consent, including potential cost sharing, the one-practitioner-per-month rule, and the right to stop services.', 'Establish and maintain a comprehensive care plan; give the patient or caregiver a copy.', 'Arrange the required access, continuity, electronic care information, and coordination processes.', 'Check payer, practitioner, setting, and overlapping-service restrictions before enrollment and claim submission.'], links: [ccmSource] },
    { id: 'time-record', title: 'Build an activity record, not just a timer', paragraphs: [
      'The 20-minute threshold concerns qualifying care-management work, not simply elapsed outreach or software time. Identify the staff member, date, clinical purpose, action, duration, and connection to the care plan. Exclude time already counted toward another service.',
      'This synthetic monthly record illustrates how a practice could make its work traceable. It is not a claim approval: the actual activities, staff qualifications, supervision, and all CCM requirements must be checked.',
    ], table: { caption: 'Synthetic CCM activity log — 20 minutes total', headings: ['Activity', 'Minutes', 'Evidence to retain'], rows: [
      ['Care-plan review and update', '8', 'Staff identity, conditions addressed, and changes made'],
      ['Medication-related care coordination', '7', 'Issue assessed, coordination performed, and follow-up owner'],
      ['Coordination with another treating team', '5', 'Clinical purpose, information exchanged, and resulting action'],
    ] }, bullets: ['Do not count a 10-minute automated call as 10 minutes of clinical staff work.', 'Do not count the same medication-review minutes toward both CCM and RPM.', 'At 19 qualifying minutes, the time requirement for 99490 has not been met.'], links: [compareLink] },
    { id: 'code-pathways', title: 'Keep non-complex and complex CCM separate', paragraphs: [
      '99439 extends the clinical staff time pathway that begins with 99490. Complex CCM starts with 99487 instead; it requires its own time and medical decision-making criteria. Do not report non-complex and complex CCM for the same patient in the same calendar month.',
    ], table: { caption: 'CCM pathways to check against current coding instructions', headings: ['Pathway', 'Initial threshold', 'Additional time'], rows: [
      ['99490: non-complex clinical staff CCM', '20 qualifying minutes per calendar month', '99439: each additional 20 minutes, subject to reporting limits'],
      ['99487: complex clinical staff CCM', '60 qualifying minutes, moderate or high complexity decision-making, and care-plan establishment or substantial revision', '99489: each additional 30 minutes'],
      ['99491: practitioner-personally furnished CCM', '30 qualifying practitioner minutes per calendar month', '99437: each additional 30 minutes'],
    ] }, links: [ccmSource] },
    { id: 'workflow-review', title: 'What to review before adopting outreach software', paragraphs: [
      'Ask who performs the qualifying clinical work, who supervises it, and how records distinguish software activity from staff activity. An outreach transcript can support a handoff, but does not independently establish eligibility, medical necessity, consent, or billable staff time.',
      'Positive Check can be evaluated as an outreach workflow tool while the practice retains clinical and billing responsibility. Before rollout, review sample exports, escalation ownership, access controls, and how the team reconciles records with its existing care plan and billing process.',
    ], links: [implementationLink] },
  ],
  faqs: [
    { question: 'What does CPT 99490 cover?', answer: 'CPT 99490 is a non-complex chronic care management pathway requiring at least 20 minutes of qualifying clinical staff time in a calendar month under an eligible practitioner’s direction. The patient must also meet CCM eligibility requirements, and the practice must satisfy consent, care-plan, access, documentation, and billing rules.' },
    { question: 'Does reaching 20 minutes make a CCM claim billable?', answer: 'No. Twenty qualifying minutes satisfy only the time component of 99490. The practice must also establish patient eligibility, consent, the required care plan and service elements, and eligible staff and supervision. Review overlapping services and payer rules before submitting a claim; a timer or transcript alone is insufficient evidence.' },
    { question: 'Can 99487 be added to 99490 for a complex patient?', answer: 'No. Complex CCM is a separate coding pathway, not an add-on to 99490. CMS does not allow non-complex and complex CCM for the same patient in the same calendar month. Evaluate 99487 and its requirements separately; additional non-complex clinical staff time instead uses the 99439 pathway when its conditions are met.' },
    { question: 'Can a patient receive both CCM and RPM?', answer: 'Yes, concurrent CCM and RPM may be appropriate when each service is medically necessary and independently meets its billing requirements. Do not count the same staff time or effort twice. Keep activity-level records showing which program each task supports, then review current payer and coding restrictions before claiming either service.' },
    { question: 'Does an automated outreach call count toward CCM time?', answer: 'An automated call’s duration does not by itself establish qualifying clinical staff CCM time. Separately document any eligible staff work that follows, including its clinical purpose, duration, care-plan connection, and supervision. Software may support outreach and handoffs, but it does not replace the practice’s eligibility, care-management, and billing responsibilities.' },
    { question: 'What should a practice check before switching CCM workflows?', answer: 'Check whether the new workflow preserves consent, care plans, activity-level time records, escalation ownership, and continuity of care. Ask to see an example export and how overlapping services are reconciled. Evaluate staff training and clinical coverage alongside software cost; projected reimbursement is not evidence that a particular claim qualifies.' },
  ],
  sources: [ccmSource, rpmSource], related: [compareLink, rpmLink, tcmLink, implementationLink],
}

export const rpmBillingGuide: BillingReference = {
  id: 'cpt-99457', path: rpmLink.href,
  title: 'CPT 99457 Billing Guide: RPM Interactive Communication Requirements',
  seoTitle: 'CPT 99457 Billing Guide: RPM Interactive Communication Requirements | Positive Check',
  description: 'Understand CPT 99457’s 20-minute total treatment-management threshold, required live communication, device rules, and documentation with a worked activity log.',
  published: '2026-04-19', updated: '2026-09-20',
  parent: { label: 'Remote Patient Monitoring', href: '/solutions/remote-patient-monitoring' },
  summary: 'CPT 99457 requires at least 20 minutes of qualifying RPM treatment-management time in a calendar month, including required interactive communication with the patient or caregiver. It does not require all 20 minutes to be a live conversation. Device data collection and treatment-management time have separate requirements.',
  sections: [
    { id: 'time-and-communication', title: 'Separate total treatment time from live communication', paragraphs: [
      'CMS clarified that the 20 minutes for 99457 can include both care-management work and interactive communication. The required communication is a real-time, two-way conversation with the patient or caregiver; the total is not limited to the duration of that conversation.',
      'Qualifying staff review and management of physiologic data may contribute when furnished as part of the covered service. Passive data collection, scheduling, an unanswered call, or an automated transcript does not by itself demonstrate that the required treatment-management service and live communication occurred.',
    ], links: [rpmTimeSource] },
    { id: 'worked-example', title: 'Worked example: 20 total minutes, not a 20-minute call', paragraphs: [
      'This synthetic record shows 20 total minutes that include a seven-minute live conversation. It illustrates the distinction between time categories, not a guaranteed billable encounter. Each activity must qualify, and the patient, practitioner, supervision, device, consent, and other service requirements must also be satisfied.',
    ], table: { caption: 'Synthetic monthly RPM treatment-management record — 20 minutes total', headings: ['Activity', 'Minutes', 'Record'], rows: [
      ['Qualifying review of transmitted physiologic readings', '8', 'Staff member, data reviewed, and management purpose'],
      ['Live two-way patient or caregiver conversation', '7', 'Participants, clinical discussion, and resulting plan'],
      ['Qualifying treatment-management follow-through', '5', 'Action taken, responsible practitioner, and next step'],
    ] }, bullets: ['Retain dated activity entries and the monthly total.', 'Identify the live conversation separately rather than inferring it from total minutes.', 'Exclude time used for another billed service and automated system runtime.'] },
    { id: 'device-and-2026', title: 'Check device requirements and the 2026 code pathway', paragraphs: [
      'RPM can support an acute or chronic condition, with an established patient relationship and documented consent. The device must meet the applicable medical-device definition and automatically collect and transmit physiologic data; a wellness conversation alone is not a substitute for physiologic monitoring.',
      'Do not apply a universal 16-day data rule to 99457. CMS distinguishes device collection periods from treatment-management requirements. In 2026, device codes address different collection-day ranges, while the collection-day requirement does not apply to management codes 99457 and 99458.',
      'Noridian’s 2026 update describes 99470 for a shorter treatment-management time pathway beginning at 10 minutes and below 20 minutes. Check all of that code’s requirements and reporting instructions independently; do not round a short month up to 99457 or assume a new code makes automated outreach billable.',
    ], links: [rpmSource, rpm2026Source] },
    { id: 'program-boundaries', title: 'Keep RPM, CCM, and software activity distinguishable', paragraphs: [
      'RPM management and CCM can coexist when each is necessary and independently qualifies, but the same time or effort cannot be billed twice. Give each activity a clinical purpose and service assignment, and reconcile the logs before claims are released.',
      'When evaluating Positive Check or another outreach tool, ask how staff review, live patient communication, escalation, and software-only activity appear in the record. A vendor’s call count or engagement rate cannot establish that a practice has met an RPM billing requirement.',
    ], links: [compareLink, implementationLink] },
  ],
  faqs: [
    { question: 'Does CPT 99457 require a 20-minute live call?', answer: 'No. CMS clarified that the 20-minute threshold includes qualifying RPM care-management time as well as the required interactive communication. The patient or caregiver must participate in a real-time, two-way conversation, but every minute does not have to be conversational. Document the activities and the live communication separately.' },
    { question: 'Can reviewing RPM data count toward the monthly total?', answer: 'Qualifying review and management of physiologic data can contribute to RPM treatment-management time when performed as part of the covered service by eligible personnel. Passive data collection alone is not treatment management. Record who performed the work, its clinical purpose, duration, and resulting action, alongside the required live communication.' },
    { question: 'Does 99457 always require 16 days of readings?', answer: 'No. CMS separates device data-collection requirements from treatment-management requirements and states that the collection-day requirement does not apply to 99457 or 99458. That does not remove the underlying RPM service requirements. Review the device code and management code independently, using the current service-year instructions rather than a universal 16-day rule.' },
    { question: 'What if there are fewer than 20 qualifying RPM minutes?', answer: 'Do not round the total up to bill 99457. For 2026, assess whether the shorter 99470 treatment-management pathway applies, including its own time, communication, and other requirements. A month below the 99457 threshold is not automatically billable under another code; review the actual service and current reporting instructions.' },
    { question: 'Can the same patient have RPM and CCM in one month?', answer: 'Yes, when both services are medically necessary and each independently satisfies its requirements. Keep the work and time attributable to each program, and never count the same minutes twice. Device monitoring alone does not establish CCM eligibility, just as CCM enrollment does not establish a qualifying RPM service.' },
    { question: 'Can AI outreach replace the required RPM communication?', answer: 'Do not assume an automated conversation satisfies the required practitioner or clinical staff interaction, or that software runtime is qualifying staff time. Review the actual human involvement and covered service requirements. An outreach tool may support follow-up and escalation, but the practice must verify and document the qualifying clinical work.' },
  ],
  sources: [rpmSource, rpmTimeSource, rpm2026Source], related: [compareLink, ccmLink, implementationLink],
}

export const tcmBillingGuide: BillingReference = {
  id: 'cpt-99495', path: tcmLink.href,
  title: 'CPT 99495 Requirements: 2026 TCM Billing Guide',
  seoTitle: 'CPT 99495 Requirements | 2026 TCM Billing Guide',
  description: 'Check CPT 99495 discharge eligibility, two-business-day contact, the 14-day visit, decision-making, medication reconciliation, and unsuccessful outreach documentation.',
  published: '2026-04-19', updated: '2026-09-20',
  parent: { label: 'Post-Discharge Follow-Up', href: '/solutions/post-discharge-follow-up' },
  summary: 'CPT 99495 is a transitional care management service for an eligible discharge to a community setting. It requires timely interactive contact, at least moderate-complexity medical decision-making, and a face-to-face visit within 14 calendar days. The episode spans the discharge date and the next 29 days; completing a call alone does not establish eligibility.',
  sections: [
    { id: 'discharge-and-code', title: 'Confirm the discharge and the correct TCM pathway', paragraphs: [
      'Qualifying discharges can originate from settings including an inpatient hospital, skilled nursing facility, inpatient rehabilitation facility, or hospital observation. The transition must be to an eligible community setting. Do not confuse an eligible discharge from a skilled nursing facility with a blanket exclusion of those discharges.',
      '99495 requires at least moderate-complexity medical decision-making and a face-to-face visit within 14 calendar days. 99496 requires high-complexity decision-making and a visit within seven calendar days. An earlier visit alone does not establish the higher-complexity code.',
    ], links: [tcmSource] },
    { id: 'episode-checklist', title: 'Use a discharge-to-claim checklist', paragraphs: [
      'Assign ownership at discharge so contact, visit scheduling, medication reconciliation, and the remaining transition work are tracked together. The following operational checklist is a synthetic template, not a substitute for the complete CMS requirements or clinical judgment.',
    ], table: { caption: 'TCM record fields and checkpoints', headings: ['Checkpoint', 'What to verify', 'Evidence to retain'], rows: [
      ['Discharge', 'Eligible originating and destination settings; episode dates', 'Discharge record, receiving practitioner, and assigned owner'],
      ['Within two business days', 'Interactive contact with patient or caregiver, or applicable unsuccessful-attempt exception', 'Contact date, participants, needs assessed, and attempts'],
      ['By the qualifying visit', '99495 visit within 14 calendar days; medication reconciliation completed on or before visit', 'Visit date, medication record, and decision-making documentation'],
      ['Through the 30-day episode', 'Required non-face-to-face transition work and follow-through', 'Coordination, referrals, outstanding needs, and actions'],
      ['Before claim release', 'Code, timing, completeness, duplicate-service and payer checks', 'Reviewer, exceptions resolved, and claim decision'],
    ] }, links: [{ label: 'Contact timing: business days, attempts, and handoffs', href: '/solutions/post-discharge-follow-up/post-discharge-contact-timing' }] },
    { id: 'unsuccessful-contact', title: 'Document failed contact without inventing a completed call', paragraphs: [
      'CMS allows reporting when two or more separate, timely contact attempts are unsuccessful if the other TCM requirements are met, including the timely face-to-face visit. Continue trying to reach the patient or caregiver until contact succeeds. An unanswered automated call is not a completed interactive assessment.',
      'Record each attempt’s date, method, recipient, and outcome, then assign the next action. A scheduling-only exchange is not the same as addressing the patient’s post-discharge status and needs. Have the billing team review an exception rather than automatically treating every failed-contact episode as either eligible or ineligible.',
    ], links: [tcmSource] },
    { id: 'responsibility-and-overlap', title: 'Keep clinical responsibility and overlapping services clear', paragraphs: [
      'Eligible clinical staff may furnish the non-face-to-face components under the applicable incident-to, supervision, and state scope-of-practice rules. Do not apply that allowance to the face-to-face visit indiscriminately. Identify the responsible billing practitioner and who will handle clinical escalation.',
      'Do not separately bill the face-to-face visit bundled into TCM. Concurrent care-management services require independent eligibility and no duplicated time or effort. A readmission or another discharge needs review of the episode and services actually completed; it is not an automatic new payable claim.',
      'Positive Check can support an outreach workflow, but a transcript or completed call does not replace the practitioner’s decision-making, qualifying visit, medication reconciliation, or billing review. Before rollout, test how the team identifies overdue tasks and hands off unresolved needs.',
    ], links: [{ label: 'TCM and CCM in the same month: separate service requirements', href: '/resources/compare/tcm-and-ccm-combined-month-billing' }, implementationLink] },
  ],
  faqs: [
    { question: 'What are the main requirements for CPT 99495?', answer: 'CPT 99495 requires an eligible discharge to a community setting, timely interactive contact, at least moderate-complexity medical decision-making, and a face-to-face visit within 14 calendar days. Medication reconciliation and the required transition services must also be completed. The service covers the discharge date and the following 29 days.' },
    { question: 'Can a discharge from a skilled nursing facility qualify?', answer: 'Yes. CMS includes skilled nursing facilities among eligible originating settings for a transition to a qualifying community setting. Confirm both the discharge setting and destination, then check the contact, visit, decision-making, and other TCM requirements. A facility label alone neither approves the claim nor excludes every transition involving that facility.' },
    { question: 'What if the patient cannot be reached within two business days?', answer: 'CMS permits reporting after two or more separate, timely unsuccessful contact attempts when the other TCM requirements are met, including the timely visit. Continue attempts until successful and retain the dates, methods, and outcomes. Do not record failed outreach as completed interactive contact or assume the exception waives other requirements.' },
    { question: 'How is 99495 different from 99496?', answer: '99495 requires at least moderate-complexity medical decision-making and a face-to-face visit within 14 calendar days. 99496 requires high-complexity decision-making and a visit within seven calendar days. Both require the other TCM service elements. Choose the code supported by the actual episode, not simply the earliest appointment or highest possible payment.' },
    { question: 'Can clinical staff perform all parts of TCM?', answer: 'No. Eligible clinical staff may perform non-face-to-face components under applicable supervision, incident-to, and state scope-of-practice rules. The responsible practitioner must still ensure the qualifying visit, decision-making, and other service elements are met. A staff outreach log or automated call does not establish that the entire TCM service was furnished.' },
    { question: 'What should a TCM outreach workflow demonstrate before rollout?', answer: 'It should demonstrate discharge intake, deadline tracking, documented contact attempts, escalation ownership, visit handoffs, and medication-reconciliation checkpoints. Ask how unresolved tasks remain visible and how records reach the clinical team. Evaluate these responsibilities before projecting revenue; neither an outreach completion rate nor a vendor transcript guarantees a qualifying TCM claim.' },
  ],
  sources: [tcmSource], related: [ccmLink, compareLink, implementationLink],
}

export const rpmCcmComparison: BillingReference = {
  id: 'rpm-vs-ccm', path: compareLink.href,
  title: 'RPM vs. CCM: Medicare Billing Comparison',
  seoTitle: 'RPM vs. CCM: Medicare Billing Comparison | Positive Check',
  description: 'Compare RPM and CCM by patient need, device requirements, clinical work, monthly time, and documentation. Use separate activity logs when both programs apply.',
  published: '2026-05-17', updated: '2026-09-20', comparison: true,
  parent: { label: 'Comparisons', href: '/resources/compare' },
  summary: 'RPM manages a patient using remotely collected physiologic data; CCM coordinates longitudinal care for eligible patients with multiple chronic conditions. They can be complementary, but neither enrollment nor software usage makes the other service billable. Choose around clinical need and staff capacity, then verify each program’s requirements separately.',
  sections: [
    { id: 'program-fit', title: 'Choose the program around the clinical job', paragraphs: [
      'Start with the problem the care team needs to solve. If transmitted physiologic measurements will inform treatment management, assess RPM. If the patient needs sustained coordination across multiple chronic conditions, assess CCM. Keeping the existing workflow, or building a staff-led process, remains an option when it can meet the patient’s needs and program requirements.',
    ], table: { caption: 'Program fit and operational differences', headings: ['Question', 'RPM', 'CCM'], rows: [
      ['What patient need does it address?', 'Management informed by physiologic measurements for an acute or chronic condition', 'Longitudinal management of two or more qualifying chronic conditions'],
      ['Is a monitoring device required?', 'A qualifying device automatically collects and transmits physiologic data', 'No RPM device requirement; comprehensive care-plan and service requirements apply'],
      ['What is the work?', 'Reviewing and managing physiologic data, with required communication', 'Care planning, coordination, access, and ongoing chronic care management'],
      ['What does the common staff-time pathway require?', '99457: at least 20 total qualifying management minutes including required live communication', '99490: at least 20 qualifying clinical staff CCM minutes per calendar month'],
      ['What alternatives need a separate check?', '2026 shorter-time and device collection-day pathways', 'Additional non-complex time, complex CCM, or practitioner-personal time pathways'],
    ] }, links: [rpmLink, ccmLink] },
    { id: 'separate-logs', title: 'If both apply, use separate activity-level records', paragraphs: [
      'Concurrent RPM and CCM can be appropriate when each is medically necessary and independently satisfies its requirements. Do not bill the same time or effort twice. A program label on a patient record is not enough; each logged activity needs a purpose and service assignment.',
      'Synthetic example: a month contains 15 qualifying RPM management minutes and 15 distinct qualifying CCM minutes. Adding them into a 30-minute combined bucket does not meet either the 99457 or 99490 threshold. Check any shorter RPM pathway independently; it does not supply missing CCM minutes or waive other service requirements.',
    ], table: { caption: 'Fields for a combined-program activity register', headings: ['Field', 'Why it matters'], rows: [
      ['Date, staff identity, and duration', 'Makes the activity traceable to the person who performed it'],
      ['Clinical purpose and action', 'Explains what care was furnished rather than only recording elapsed time'],
      ['Program assignment', 'Separates RPM management from CCM care coordination'],
      ['Overlap check', 'Flags any time already used for another billed service'],
      ['Communication and follow-up', 'Records participants, resulting action, and outstanding responsibilities'],
    ] }, links: [rpmSource, ccmSource] },
    { id: 'implementation-choice', title: 'Compare in-house work and software on responsibilities', paragraphs: [
      'An in-house team needs reliable clinical coverage, documentation, outreach, and escalation processes. Software can assist those processes, but does not independently supply eligible clinical staff, establish medical necessity, or make an automated call billable. Identify the responsibilities that remain with the practice before comparing vendors.',
      'Ask for a walkthrough using synthetic records: one patient with readings needing review, one unreachable patient, and one patient enrolled in both programs. Check whether the team can identify who acts next, distinguish human clinical work from automation, and export evidence for its billing review.',
    ], links: [{ label: 'Software-assisted CCM versus in-house care coordination', href: '/solutions/chronic-care-management/vs-in-house-care-coordinators' }, implementationLink] },
    { id: 'cost-and-proof', title: 'Evaluate cost and evidence without guaranteed revenue', paragraphs: [
      'Compare staffing, devices and connectivity where applicable, software, training, and ongoing quality review. Use the applicable payer, locality, setting, service year, and actual eligible service volume for revenue estimates. A national rate or a per-patient revenue target cannot determine whether an individual claim qualifies.',
      'For Positive Check, use a workflow demonstration to evaluate outreach support and handoffs. Ask for evidence relevant to your patient population and staffing model, including study limitations. Do not treat a vendor’s engagement results as proof of billing compliance or a guaranteed clinical outcome.',
    ], links: [{ label: 'Case study: results and limitations', href: '/case-studies/scaling-patient-engagement' }] },
  ],
  faqs: [
    { question: 'What is the main difference between RPM and CCM?', answer: 'RPM uses remotely collected physiologic data to inform patient management, while CCM supports longitudinal coordination for patients with multiple qualifying chronic conditions. The programs have different eligibility and service requirements. Choose based on the clinical work needed, rather than assuming that one enrollment or software subscription establishes eligibility for both.' },
    { question: 'Does CCM require an RPM monitoring device?', answer: 'No. CCM does not require an RPM device, but it does require its own eligibility, consent, care-plan, access, and service elements. RPM has separate physiologic monitoring and device requirements. A practice may need either program or both, depending on the patient’s clinical needs and the services actually furnished.' },
    { question: 'Can RPM and CCM both be billed for one patient?', answer: 'Yes, when both services are medically necessary and independently meet their requirements, with no duplicated time or effort. Maintain activity-level records that distinguish the work for each program. Review current payer and reporting restrictions before claims are submitted; enrolling a patient in both programs is not sufficient by itself.' },
    { question: 'Can 15 RPM minutes and 15 CCM minutes be combined?', answer: 'No. Those separate totals do not become a shared 30-minute allowance for 99457 or 99490. Each code must meet its own threshold and other requirements. For 2026, a shorter RPM pathway may warrant assessment, but it does not fill a CCM time shortfall or permit double-counting the same activity.' },
    { question: 'Should a practice use software or an in-house team?', answer: 'Compare the responsibilities each approach can reliably cover: clinical work, patient outreach, documentation, escalation, and billing review. Software may support the team but does not replace eligible clinical personnel or practitioner accountability. Test representative workflows and exports, then compare total operating cost, training needs, and continuity risks against the current process.' },
    { question: 'What evidence should buyers ask an RPM or CCM vendor for?', answer: 'Ask for a workflow demonstration, sample records, clear staffing boundaries, and evidence relevant to your patient population. Review the limitations behind outcome claims and check how human clinical time is distinguished from automation. Neither call volume nor a revenue projection proves that a service is clinically appropriate or independently billable.' },
  ],
  sources: [rpmSource, rpmTimeSource, rpm2026Source, ccmSource], related: [rpmLink, ccmLink, tcmLink, implementationLink],
}

export const billingReferences = [ccmBillingGuide, rpmBillingGuide, tcmBillingGuide, rpmCcmComparison]
