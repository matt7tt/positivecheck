// First-party figures supplied and approved for website use on 2026-10-11.
// This is the approval date, not an inferred measurement period or cohort.
// Keep these separate from the historical implementation-study dataset.
export const operationalStatsSource = 'Source: Positive Check operational reporting. Figures supplied October 11, 2026.'

export const monthlyOperationalStats = [
  { value: '70%+', label: 'of patients reached every month by call or text' },
  { value: '6,000+', label: 'outreach calls a month' },
  { value: '500+', label: 'text check-in conversations a month' },
  { value: '100+', label: 'urgent alerts flagged every month' },
] as const

// Selected reported categories, not an exhaustive or mutually exclusive partition.
// Do not normalize these values or invent an "other 19%" category.
export const flaggedTopics = [
  { percent: 26, label: 'Symptoms and health concerns' },
  { percent: 23, label: 'Medication problems' },
  { percent: 16, label: 'Patient requests', detail: 'Refills, equipment, scheduling' },
  { percent: 16, label: 'Concerns patients raised on their own', detail: 'Beyond the standard questions' },
] as const

export const alertPriorityLevels = [
  { percent: 3, label: 'Critical', detail: 'Escalated in real time' },
  { percent: 47, label: 'High', detail: null },
  { percent: 20, label: 'Medium', detail: null },
  { percent: 30, label: 'Low', detail: null },
] as const
