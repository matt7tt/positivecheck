// Published aggregate series, not independently audited patient-level outcomes.
export const enrollmentData = [
  { month: "Jul '25", patients: 1 },
  { month: "Aug '25", patients: 12 },
  { month: "Sep '25", patients: 198 },
  { month: "Oct '25", patients: 883 },
  { month: "Nov '25", patients: 1042 },
  { month: "Dec '25", patients: 1191 },
  { month: "Jan '26", patients: 1302 },
  { month: "Feb '26", patients: 1509 },
]
export const engagementData = [
  { month: 'Sep', rate: 40.0 }, { month: 'Oct', rate: 32.2 },
  { month: 'Nov', rate: 49.8 }, { month: 'Dec', rate: 54.5 },
  { month: 'Jan', rate: 49.4 }, { month: 'Feb', rate: 46.3 },
]
export const alertsData = [
  { month: 'Oct', alerts: 43 }, { month: 'Nov', alerts: 64 },
  { month: 'Dec', alerts: 81 }, { month: 'Jan', alerts: 191 },
  { month: 'Feb', alerts: 106 },
]
export const caseStudyTitle = 'Scaling Patient Engagement to 1,500+ Patients'
export const caseStudyDescription = 'Reported enrollment grew from 1 to 1,509 between July 2025 and February 2026. Explore the engagement and alert series, reporting periods and limitations.'
export const caseStudyMetrics = [
  { value: enrollmentData.at(-1)!.patients.toLocaleString('en-US'), label: 'Reported Enrollment · Feb 2026' },
  { value: `${Math.min(...engagementData.map(d => d.rate))}–${Math.max(...engagementData.map(d => d.rate))}%`, label: 'Monthly Engagement Range · Sep–Feb' },
  { value: String(alertsData.reduce((sum, d) => sum + d.alerts, 0)), label: 'Reported Alerts · Oct–Feb' },
  { value: 'Jul–Feb', label: 'Enrollment Series · 2025–26' },
]
export const caseStudyLimitations = 'This is a descriptive account of one unnamed healthcare partner, not an independently audited or controlled clinical study. The published aggregates do not include patient-level denominators, cohort inclusion rules, a definition of successful contact, or alert closure criteria and response times. Enrollment is presented as cumulative in the chart; it should not be treated as an active or billable patient count. Alert counts are not counts of unique patients or proof of clinical resolution. These data do not establish reduced readmissions, clinical benefit, staffing savings or results for another provider.'
