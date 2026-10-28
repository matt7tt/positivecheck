import { BillingReferenceGuide, billingReferenceMetadata, type BillingReference } from '@/components/billing-reference-guide'

const guide: BillingReference = {
  id: 'tcm-ccm',
  path: '/resources/compare/tcm-and-ccm-combined-month-billing',
  title: 'Can You Bill TCM and CCM in the Same Month?',
  seoTitle: 'TCM and CCM in the Same Month: Rules & Examples (2026)',
  description: 'Yes, when each service independently qualifies. Compare the TCM 30-day window with CCM calendar months, see a worked example, and check for duplicate time.',
  published: '2026-05-19',
  updated: '2026-10-27',
  parent: { label: 'Compare', href: '/resources/compare' },
  comparison: true,
  summary: 'Yes. Medicare permits CCM during a TCM service period when each service independently meets its requirements. Keep the same staff time and effort out of both records. TCM follows a 30-day discharge episode; CCM follows a calendar month. Overlapping dates alone neither establish nor prohibit payment.',
  conversion: {
    title: 'Review the handoff from discharge outreach to ongoing care',
    description: 'Walk through patient responses, escalation ownership, and the records your team needs to reconcile. Positive Check supports outreach; your practice determines clinical work and billing eligibility.',
    buttonText: 'Request a care-management demo',
  },
  sections: [
    {
      id: 'combined-billing',
      title: 'Check two services independently',
      paragraphs: ['Use the TCM episode checklist and the CCM monthly checklist side by side. Do not infer that a patient qualifies for CCM simply because a discharge occurred, or that completing a CCM record satisfies the TCM episode.'],
      bullets: [
        'TCM review: qualifying transition, timely contact or the applicable unsuccessful-attempt exception, required visit, medication reconciliation, and remaining service criteria.',
        'CCM review: qualifying chronic conditions, consent, care plan, required service elements, and qualifying time for the selected code.',
        'Release each claim only after checking current payer, practitioner, setting, and coding restrictions.',
      ],
      links: [
        { label: 'CMS CCM guidance: concurrent billing', href: 'https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/chroniccaremanagement.pdf' },
        { label: 'CPT 99490 requirements and monthly activity log', href: '/solutions/chronic-care-management/cpt-99490-billing-guide' },
        { label: 'CPT 99495 episode checklist', href: '/solutions/post-discharge-follow-up/cpt-99495-billing-guide' },
      ],
    },
    {
      id: 'timing-windows',
      title: 'A TCM episode can overlap two CCM months',
      paragraphs: ['Count the discharge date as day one of the 30-day TCM episode. CCM records restart with each calendar month. The examples below illustrate dates, not eligibility or guaranteed payment.'],
      table: {
        caption: 'Synthetic discharge dates and separate monthly records',
        headings: ['Discharge date', 'TCM episode: discharge plus 29 days', 'CCM records to review separately'],
        rows: [
          ['January 3, 2026', 'January 3–February 1', 'January and February'],
          ['January 20, 2026', 'January 20–February 18', 'January and February'],
          ['April 1, 2026', 'April 1–April 30', 'April'],
        ],
      },
      bullets: ['A short portion of a month does not reduce a CCM code’s requirements.', 'Do not carry a January CCM time shortfall into February.', 'The TCM contact and visit deadlines remain separate from the episode end date.'],
      links: [{ label: 'Two-business-day TCM contact deadlines, weekends, and holidays', href: '/solutions/post-discharge-follow-up/post-discharge-contact-timing' }],
    },
    {
      id: 'separate-records',
      title: 'Worked example: avoid counting the same work twice',
      paragraphs: [
        'In a synthetic January 20 discharge workflow, a staff member records ten minutes of transition coordination assigned to TCM. That entry is not also added to the January CCM total. A separate CCM entry identifies a different activity, its purpose, staff member, date, and duration.',
        'If the CCM record contains only 15 qualifying minutes, copying five minutes from the TCM entry does not make 99490 eligible. Review the actual work performed and the applicable code requirements. Do not relabel an activity solely to meet a threshold.',
      ],
      table: {
        caption: 'Suggested review fields for the practice’s approved records',
        headings: ['Record', 'What the reviewer needs'],
        rows: [
          ['TCM episode', 'Discharge and deadline dates, contact or attempt history, visit, transition work, and responsible practitioner'],
          ['CCM month', 'Eligibility and consent, care-plan connection, staff activity entries, qualifying durations, and monthly total'],
          ['Overlap review', 'Activity-level reconciliation showing that the same work was not counted twice'],
        ],
      },
    },
    {
      id: 'reimbursement',
      title: 'Estimate payment only after checking eligibility',
      paragraphs: [
        'Do not use a fixed “TCM plus CCM” revenue total as a billing rule. Verify each code’s current allowed amount for the service year, locality, setting, and payer, then distinguish allowed amounts from actual collections.',
        'For planning, keep each service on a separate line with its assumptions and source. Reconcile actual paid claims later; a patient enrolled in two programs does not establish two payable claims.',
      ],
      links: [{ label: 'CMS Physician Fee Schedule lookup', href: 'https://www.cms.gov/medicare/physician-fee-schedule/search/overview' }],
    },
  ],
  faqs: [
    { question: 'Can 99495 and 99490 be billed for the same patient in the same month?', answer: 'Yes, when the TCM episode and the CCM month independently satisfy their requirements and no time or effort is duplicated. Check the records and current payer rules before submitting either claim.' },
    { question: 'Does CCM have to wait until the TCM episode ends?', answer: 'Medicare permits concurrent CCM during the TCM period. This does not waive either service’s requirements or permit counting the same work twice.' },
    { question: 'What happens when the TCM period crosses into another month?', answer: 'The discharge episode continues, while CCM is reviewed separately for each calendar month. For example, a January 20, 2026 discharge has a TCM episode ending February 18; January and February CCM records each need their own review.' },
    { question: 'Does an automated call make both services billable?', answer: 'No. A call log does not independently establish either service’s requirements. Keep software activity distinguishable from qualifying staff work, and have the practice review clinical contact, documentation, and billing eligibility.' },
    { question: 'Can complex and non-complex CCM be combined in one month?', answer: 'No. These are separate CCM pathways. Do not combine 99490/99439 with 99487/99489 for the same patient in the same calendar month. Review the selected pathway and other reporting restrictions with the billing team.' },
  ],
  sources: [
    { label: 'CMS: Chronic Care Management Services, concurrent billing (June 2025)', href: 'https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/chroniccaremanagement.pdf' },
    { label: 'CMS: Transitional Care Management Services (August 2025)', href: 'https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf' },
    { label: 'CMS: Physician Fee Schedule lookup', href: 'https://www.cms.gov/medicare/physician-fee-schedule/search/overview' },
  ],
  related: [
    { label: 'Post-discharge outreach with Positive Check', href: '/solutions/post-discharge-follow-up' },
    { label: 'Ongoing chronic care outreach with Positive Check', href: '/solutions/chronic-care-management' },
    { label: 'Plan workflow ownership and implementation', href: '/resources/implementation-guide' },
  ],
}

export const metadata = billingReferenceMetadata(guide)

export default function TCMandCCMCombinedPage() {
  return <BillingReferenceGuide guide={guide} />
}
