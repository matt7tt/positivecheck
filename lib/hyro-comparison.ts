// Prepared from the approved draft. Publication remains on hold; see docs/content-reviews/2026-11-25-hyro-comparison.md.
export const comparisonIntro = [
  "The short answer: Hyro and Positive Check both use AI voice and text agents in healthcare, but they are built for different jobs. Hyro is built for large health systems' patient access call centers, where AI agents answer inbound calls and chats for scheduling, prescription refills and billing, with an outbound product for reminders and referrals. Positive Check is built for practices and care management teams that need recurring outbound wellness check-ins, such as Remote Patient Monitoring (RPM), Chronic Care Management (CCM) and post-discharge follow-up, with Lola, its AI care companion, turning each call into structured notes and clinical alerts for staff review.",
  "If your main problem is call volume into a hospital contact center, Hyro is designed for that. If your main problem is reaching enrolled patients every week and documenting what they said, Positive Check is designed for that.",
  "A Positive Check-authored comparison based on each company's public materials as of November 2026, not an independent benchmark. Features change and vary by configuration; confirm details with each vendor."
];

export const comparisonAudience = [
  "Hyro describes its core customers as health systems and hospitals. Named customers in its own releases and press coverage include Intermountain Health, Sutter Health, Baptist Health, Hackensack Meridian Health, Inova Health and Tanner Health. Its agents sit in front of patient access call centers, websites, apps and SMS, and hand complex calls to live agents with context.",
  "Positive Check is built for physician practices, accountable care organizations, health systems and care management teams running recurring patient outreach, including RPM, CCM and post-discharge follow-up. It also handles front office tasks: new patient lead response, scheduling and confirmations, appointment reminders and patient notifications. For check-in calls, patients need only a phone, landline or mobile, with no app or portal. An RPM program may separately require a monitoring device."
];

export const comparisonDifferences = [
  "Direction of the work: Hyro started as an inbound call-center product, describing itself as a drop-in replacement for traditional IVR. Its outbound product, Proactive Px, launched in September 2025 for reminders, referrals, billing support and prescription management. Positive Check was built outbound-first: scheduled calls and texts to enrolled patients, with inbound callback and live transfer added on top.",
  "What a call produces: Hyro's agents aim to resolve a request, such as booking or a refill, or route it to a live agent. Positive Check's wellness calls aim to document how a patient is doing: medication adherence, mood, symptoms and readings, with AI summaries and transcripts for staff review. Call recording depends on configuration; confirm availability and retention for your workflow.",
  "Clinical safety net: Positive Check uses rule-based checks for qualifying blood pressure, glucose and oxygen readings captured in call analysis, to support staff review. The threshold checks can catch a missing alert when a reading was extracted; they do not guarantee detection of readings missing from the analysis. Alerts support clinical review; your care team stays responsible for decisions.",
  "Integrations: Hyro highlights Epic, Salesforce and Cisco contact-center integrations. Positive Check offers a REST API, signed webhooks and bulk CSV import, and does not claim a prebuilt EHR connector; integration scope is agreed in a technical review.",
  "Care management programs: Positive Check publishes workflows for RPM, CCM and post-discharge follow-up. Recurring RPM and CCM check-ins are not a focus of Hyro’s public materials reviewed in November 2026. Hyro also describes post-discharge outreach; this comparison does not imply it lacks that capability.",
  "Languages: Positive Check supports English. Hyro reports English and Spanish in its Tanner Health voice-agent deployment."
];

export const comparisonRows = [
  [
    "Built for",
    "Practices, ACOs, health systems and care management teams",
    "Health systems and hospitals"
  ],
  [
    "Main use",
    "Recurring outbound wellness check-ins and front office outreach",
    "Inbound patient access calls and chat, plus outbound reminders"
  ],
  [
    "Channels",
    "Voice to landline or mobile, two-way SMS, email, inbound callback",
    "Voice, SMS, web chat, mobile apps"
  ],
  [
    "Care programs",
    "RPM, CCM and post-discharge follow-up",
    "Not a focus of its public materials (Nov 2026)"
  ],
  [
    "Front office tasks",
    "New patient leads, scheduling and confirmations, reminders, notifications",
    "Scheduling, rescheduling, prescription refills, billing and coverage questions, call routing"
  ],
  [
    "Clinical alerts",
    "Severity-graded alerts; rules-based checks on extracted BP, glucose and oxygen readings; live transfer to care team",
    "Hand-off to live agents with context"
  ],
  [
    "Call record",
    "AI summaries and transcripts; recordings where enabled and retained",
    "Conversational intelligence analytics"
  ],
  [
    "Integrations",
    "REST API, signed webhooks, CSV import; EHR connections scoped per project",
    "Epic, Salesforce, Cisco Webex Contact Center"
  ],
  [
    "HIPAA",
    "BAA signed with customers",
    "Describes its agents as HIPAA-compliant"
  ],
  [
    "Languages",
    "English",
    "English and Spanish (Tanner Health deployment)"
  ],
  [
    "Published pricing",
    "None; written quote per volume and scope",
    "None found in the materials reviewed"
  ]
];

export const comparisonFaqs = [
  {
    "question": "What is the difference between Positive Check and Hyro?",
    "answer": "Hyro builds AI agents that answer inbound patient calls and chats for large health systems, covering scheduling, prescription refills and billing, with an outbound product for reminders and referrals. Positive Check runs recurring outbound AI wellness calls and texts for care management programs such as RPM, CCM and post-discharge follow-up, and turns each call into a summary, transcript and clinical alerts for staff review."
  },
  {
    "question": "Is Positive Check an alternative to Hyro?",
    "answer": "For some workflows, yes. Both handle front office tasks such as scheduling, confirmations and reminders by voice and SMS. Positive Check is the closer fit when the work is regular check-ins with enrolled patients and documenting their responses. Hyro is the closer fit when the work is answering high inbound call volume in a hospital contact center."
  },
  {
    "question": "Which is better for a small primary care practice?",
    "answer": "It depends on the task. Hyro's published customers are health systems and hospitals. Positive Check is built for practices as well as larger groups, needs no app or additional device for check-in calls, and can start with one workflow such as appointment reminders or RPM check-ins. Test your own task, including unexpected replies and staff hand-offs, before choosing either."
  },
  {
    "question": "Which is better for remote patient monitoring and chronic care management outreach?",
    "answer": "Positive Check is designed for RPM and CCM outreach: scheduled wellness calls on any phone, medication and symptom questions set per program, rule-based checks for qualifying blood pressure, glucose and oxygen readings captured in call analysis, and a record of each interaction. RPM and CCM check-in programs are not a focus of Hyro’s public materials reviewed in November 2026; confirm current capabilities with the vendor."
  },
  {
    "question": "Can AI check-in calls help document care for CMS-reimbursed programs?",
    "answer": "Positive Check provides call summaries, transcripts and alert history for staff review, with recordings where enabled and retained. These records can support program documentation; they do not by themselves establish billable services. Your clinical staff remain responsible for review, required clinical contact, interactive communication requirements and billing decisions."
  },
  {
    "question": "Are Positive Check and Hyro HIPAA compliant?",
    "answer": "Positive Check signs a Business Associate Agreement with customers. Its production platform uses Google Cloud SQL encryption at rest, role-based access controls, configurable multi-factor authentication and audit logging for sign-ins and administrative actions. MFA is not required for every account. Ask for security documentation covering your deployment, recording storage and retention, and the scope of audit logging. Hyro describes its AI agents as HIPAA-compliant in its press releases. A BAA and a review of the actual configuration are part of evaluating either vendor."
  },
  {
    "question": "Does Positive Check integrate with Epic or other EHRs?",
    "answer": "Positive Check offers a REST API, signed webhooks and bulk CSV import. It does not claim a prebuilt EHR connector; the data flow is agreed in a technical review before launch. Hyro highlights Epic, Salesforce and Cisco contact-center integrations."
  },
  {
    "question": "How much do Positive Check and Hyro cost?",
    "answer": "Neither company publishes prices. Positive Check provides written pricing based on patient volume, outreach scope and integration needs. Ask about minimum commitments, onboarding and custom-work charges with any vendor."
  }
];

