// First-party program figures for September to November 2026 (approved for website use 2026-11-14).
// The outreach-call count was not resupplied and is unchanged from the 2026-10-11 set.
// Keep these separate from the historical implementation-study dataset.
export const operationalStatsSource = 'First-party program figures, September to November 2026.'

export const monthlyOperationalStats = [
  { value: '75%+', label: 'of patients reached every month by call or text' },
  { value: '6,000+', label: 'outreach calls a month' },
  { value: '1,400+', label: 'two-way conversations a month' },
  { value: '250+', label: 'alerts routed to care teams monthly' },
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
