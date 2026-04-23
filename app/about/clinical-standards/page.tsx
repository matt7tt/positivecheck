// app/about/clinical-standards/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { PublicHeader } from '@/components/shared/public-header'
import { PublicFooter } from '@/components/shared/public-footer'
import {
  StructuredData,
  buildBreadcrumbSchema,
  buildArticleSchema,
  buildFAQSchema,
} from '@/components/structured-data'

const PAGE_URL = 'https://positivecheck.com/about/clinical-standards'
const HERO_IMAGE = 'https://positivecheck.com/images/admin-console-dashboard-new.png'

export const metadata: Metadata = {
  title: 'Clinical Standards: Compliance, Security, and Content Review | Positive Check',
  description:
    'Positive Check LLC clinical standards: HIPAA Business Associate Agreement practice, Security Rule safeguards for ePHI, call content review process, escalation protocols to clinical staff, and CMS-aligned documentation standards.',
  alternates: { canonical: '/about/clinical-standards' },
  openGraph: {
    title: 'Clinical Standards: Compliance, Security, and Content Review',
    description:
      'HIPAA compliance posture, Security Rule safeguards, call content review, escalation protocols, and documentation standards.',
    url: '/about/clinical-standards',
    siteName: 'Positive Check',
    locale: 'en_US',
    type: 'article',
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: 'Positive Check clinical standards' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Standards: Compliance, Security, and Content Review',
    description: 'Positive Check clinical and compliance framework.',
    images: [HERO_IMAGE],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://positivecheck.com' },
  { name: 'About', url: 'https://positivecheck.com/about' },
  { name: 'Clinical Standards', url: PAGE_URL },
])

const article = buildArticleSchema({
  headline: 'Clinical Standards: Compliance, Security, and Content Review',
  description:
    'Positive Check LLC clinical standards: HIPAA Business Associate Agreement practice, Security Rule safeguards for ePHI, call content review process, escalation protocols to clinical staff, and CMS-aligned documentation standards.',
  url: PAGE_URL,
  image: HERO_IMAGE,
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
})

const faqs = [
  {
    question: 'Does Positive Check sign a Business Associate Agreement with every provider partner?',
    answer:
      'Yes. Before any Protected Health Information (PHI) is exchanged, we execute a signed Business Associate Agreement (BAA) with the provider. The BAA covers our Security Rule obligations, breach notification SLAs, subcontractor provisions, and PHI return/destruction at termination.',
  },
  {
    question: 'What happens when a call flags a clinical concern?',
    answer:
      "The platform is configured with escalation rules agreed with each provider partner. When a patient response triggers an escalation (e.g., a concerning symptom report, missed-medication pattern, or specific safety keyword), the call is flagged in the provider\u2019s dashboard in real time and, when configured, a notification is sent to the designated clinical contact. Positive Check does not make clinical decisions \u2014 every flagged concern is routed to a qualified clinician for action.",
  },
  {
    question: 'Who designs the call content (questions and response handling)?',
    answer:
      'Call content is designed in-house by the Positive Check team and configured per provider to match the clinical program the patient is enrolled in (RPM, CCM, TCM, or PCM). We do not use external guest writers, commissioned reviewers, or third-party content. Providers can review and approve the exact call script before enrollment begins.',
  },
  {
    question: 'How does Positive Check keep content current with CMS and HIPAA guidance?',
    answer:
      'Every provider-facing page on the Positive Check site carries a Last Reviewed date and cites primary CMS or HHS sources (Medicare Physician Fee Schedule, CMS MLN booklets, HHS HIPAA for Professionals). When CMS publishes updates to care management rules (typically in the annual PFS rule) or HHS updates HIPAA guidance, we review and refresh affected content. The internal rhythm is quarterly at minimum, with accelerated review when rule changes land.',
  },
  {
    question: 'Can AI-powered calls satisfy CMS clinical-engagement requirements?',
    answer:
      'Yes, when the call captures required clinical content, supports real-time two-way patient response, and escalates concerns to a qualified human. CMS defines the interactive communication requirement by content and structure, not by who conducts the call. See our interactive-communication-requirement glossary entry and the /solutions/remote-patient-monitoring/interactive-communication-requirement cluster post for a full deep-dive.',
  },
]

const faqSchema = buildFAQSchema(faqs)

export default function ClinicalStandardsPage() {
  return (
    <>
      <StructuredData data={breadcrumb} id="clinical-standards-breadcrumb" />
      <StructuredData data={article} id="clinical-standards-article" />
      <StructuredData data={faqSchema} id="clinical-standards-faq" />
      <div className="min-h-screen bg-white">
        <PublicHeader currentPage="about" />

        <main>
          {/* Hero */}
          <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#e879f9] to-[#d946ef] text-white">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-100 uppercase tracking-widest text-sm mb-4 font-medium">Clinical Standards</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Clinical Standards: Compliance, Security, and Content Review
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Positive Check LLC{'\u2019'}s clinical, security, and compliance framework{' '}
                {'\u2014'} the commitments behind every patient call and the safeguards around every
                Protected Health Information (PHI) interaction.
              </p>
            </div>
          </section>

          {/* Body */}
          <section className="px-6 py-12 bg-white">
            <div className="max-w-4xl mx-auto">

              {/* TL;DR box */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12">
                <h2 className="text-lg font-semibold text-purple-900 mb-3">In short</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>HIPAA-compliant business associate.</strong> Every provider partner signs a Business Associate
                    Agreement before PHI exchange. We implement the full Security Rule safeguard set for{' '}
                    <Link href="/resources/glossary/ephi" className="text-purple-700 underline hover:text-purple-900">
                      ePHI
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Clinical decisions stay with clinicians.</strong> Positive Check makes no clinical decisions.
                    Every flagged concern routes to a qualified provider-designated clinician in real time.
                  </li>
                  <li>
                    <strong>In-house content, primary-source citations.</strong> Every page cites CMS or HHS primary
                    sources; no commissioned guest posts, no unverified third-party content.
                  </li>
                  <li>
                    <strong>Documented for CMS billing.</strong> Call summaries map directly to the documentation
                    elements CMS auditors expect for{' '}
                    <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                      CCM
                    </Link>
                    ,{' '}
                    <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                      RPM
                    </Link>
                    , and{' '}
                    <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                      TCM
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Last Reviewed dates on every page.</strong> CMS rules update annually (at minimum); we
                    refresh on that cadence and whenever HHS or CMS issues notable guidance.
                  </li>
                </ul>
              </div>

              {/* HIPAA compliance framework */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">HIPAA compliance framework</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Health Insurance Portability and Accountability Act (
                <Link href="/resources/glossary/hipaa-compliance" className="text-purple-700 underline hover:text-purple-900">
                  HIPAA
                </Link>
                ) distinguishes between covered entities{'\u2014'}providers, payers, and clearinghouses that handle
                Protected Health Information{'\u2014'}and business associates, which are vendors and service providers
                that access PHI on a covered entity{'\u2019'}s behalf. Positive Check operates as a business associate.
                That designation is not a label; it carries legally enforceable obligations under the HIPAA Privacy Rule
                and Security Rule, obligations that can only be established through a signed{' '}
                <Link href="/resources/glossary/business-associate-agreement" className="text-purple-700 underline hover:text-purple-900">
                  Business Associate Agreement (BAA)
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before any PHI passes through our platform{'\u2014'}call logs, patient responses, escalation
                records{'\u2014'}we execute a BAA with the provider partner. The agreement specifies the permitted uses
                and disclosures of PHI, our breach notification timeline (within 60 days of discovery, consistent with
                the HIPAA Breach Notification Rule), subcontractor provisions (any subprocessor we use is also bound by
                equivalent obligations), and PHI return or destruction procedures at contract termination. This is not
                optional practice for us; it is the legal prerequisite for operating in the healthcare SaaS space.
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                The{' '}
                <Link href="/resources/glossary/hitech-act" className="text-purple-700 underline hover:text-purple-900">
                  HITECH Act
                </Link>{' '}
                of 2009 strengthened HIPAA by extending direct liability to business associates and increasing
                civil monetary penalties for non-compliance. We design our systems and processes with HITECH in
                view{'\u2014'}not merely the original HIPAA floor. The governing reference for our compliance posture
                is the{' '}
                <a
                  href="https://www.hhs.gov/hipaa/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  HHS HIPAA for Professionals
                </a>{' '}
                resource, which we review on each significant update cycle.
              </p>

              {/* Security Rule safeguards */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security Rule safeguards</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The HIPAA Security Rule governs electronic Protected Health Information (
                <Link href="/resources/glossary/ephi" className="text-purple-700 underline hover:text-purple-900">
                  ePHI
                </Link>
                ) specifically. It requires covered entities and business associates to implement three categories of
                safeguards: administrative, physical, and technical. Our implementation covers all three, as required by
                the{' '}
                <a
                  href="https://www.hhs.gov/hipaa/for-professionals/security/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline hover:text-purple-900"
                >
                  HHS HIPAA Security Rule
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Administrative safeguards</strong> form the policy backbone. These include workforce access
                management (role-based access to ePHI, with least-privilege principles applied at the application
                layer), workforce training on privacy and security obligations, contingency planning covering data
                backup procedures and disaster recovery, and BAA subcontractor requirements ensuring every third-party
                processor of ePHI operates under equivalent security obligations. Policies are reviewed and updated on
                the same cadence as our content review rhythm{'\u2014'}quarterly at baseline, accelerated when HHS
                issues significant guidance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                <strong>Physical safeguards</strong> address the physical environment where ePHI is accessed or
                processed. Since Positive Check operates as a cloud-native platform, physical safeguards primarily
                apply to workstation security policies for team members accessing provider data: screen lock requirements,
                clean-desk practices for remote workers, and device inventory management. Data infrastructure runs on
                cloud providers with their own physical access controls and compliance certifications{'\u2014'}controls
                that are captured in our vendor management process and BAA chain. <strong>Technical safeguards</strong>{' '}
                include access control mechanisms (unique user identifiers, automatic logoff, role-based permissions),
                audit logs that record access and activity on ePHI, transmission security via TLS for all data in
                transit, and encryption at rest for stored ePHI. Audit logs are retained and available for provider
                review on request.
              </p>

              {/* Call content design and review */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Call content design and review</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every call script on the Positive Check platform is designed in-house by the Positive Check team.
                We do not commission external writers, engage third-party clinical advisors who contribute content
                without editorial accountability, or publish guest posts that carry outside authorship. This is a
                deliberate choice: in healthcare content, the authority comes from the organization and its
                institutional relationships with primary sources{'\u2014'}CMS regulations, HHS guidance, peer-reviewed
                evidence{'\u2014'}not from attributed individuals whose credentials cannot be consistently verified
                or maintained. We build credibility through citations, organizational signals, and case-based
                demonstration, not through borrowed authorial authority.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Call content is configured per provider to match the clinical program the patient is enrolled in.
                An RPM engagement call captures different data points than a CCM care coordination touchpoint or a
                TCM post-discharge follow-up call. Providers review and approve the exact call script before any
                patient enrollment begins. If a provider needs script customization{'\u2014'}different symptom
                thresholds, program-specific language, condition-specific response branches{'\u2014'}that customization
                is documented and approved before deployment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                Updates to call content follow the same review process as initial deployment: provider review,
                documented approval, and version-controlled rollout. When CMS updates a program{'\u2019'}s
                requirements (for example, a change to what counts as interactive communication for RPM), we assess
                whether call content needs adjustment and flag affected provider configurations for review. Content
                is not updated silently; providers are notified of material changes that affect their program
                configuration.
              </p>

              {/* Escalation protocols */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Escalation protocols</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Positive Check surfaces clinical concerns; clinicians act on them. This boundary is not a limitation
                of the platform{'\u2014'}it is a design principle. Our role as a business associate is to collect,
                process, and communicate patient response data in a structured, timely, and documented way. The clinical
                judgment about what to do with that information belongs exclusively to the provider and their
                designated clinical staff.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Escalation rules are configured per provider partner before enrollment begins. Not every flagged
                concern triggers the same response level. A provider might configure high-priority escalation{'\u2014'}
                immediate dashboard alert plus SMS notification to a designated on-call clinician{'\u2014'}for responses
                indicating acute distress or safety concerns. Lower-urgency flags{'\u2014'}a missed medication report,
                a gradual trend in blood pressure readings, a patient-reported fall risk{'\u2014'}might route to a
                nightly summary reviewed by the care coordinator at the start of business the following day. The
                thresholds, notification channels, and designated recipients are all provider-defined.
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                Every escalation generates a documentation record: timestamp, triggering patient response content,
                escalation level applied, and notification delivery confirmation. These records are available in the
                provider dashboard and constitute part of the audit trail CMS auditors may review when assessing
                whether the interactive communication requirement for RPM was met or whether CCM care coordination
                activity was documented appropriately. See the{' '}
                <Link href="/resources/billing-guide" className="text-purple-700 underline hover:text-purple-900">
                  CMS Care Program Billing Guide
                </Link>{' '}
                for program-specific documentation elements.
              </p>

              {/* Documentation standards */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Documentation standards (CMS-aligned)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every call Positive Check conducts generates a structured summary designed to map directly to the
                documentation elements CMS auditors expect when reviewing care management claims. The principle is
                straightforward: if the documentation is not there, the service was not rendered{'\u2014'}and our
                call records are built to ensure that is never the auditor{'\u2019'}s conclusion.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Per-call data includes the call date and time, call duration, a summary of patient response content
                (covering the questions asked and responses received), any concerns flagged and the escalation action
                taken, and a system or staff identifier for the activity. For programs with monthly time thresholds
                {'\u2014'}CCM{'\u2019'}s 20-minute non-complex minimum or RPM{'\u2019'}s interactive communication
                tracking{'\u2014'}the platform aggregates per-call durations into monthly summaries that correspond
                directly to the time-threshold arithmetic the billing team needs. This prevents the common audit
                failure mode where time was spent but cannot be reconstructed from fragmented records.
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                Where technically supported, call data integrates with the provider{'\u2019'}s care plan
                infrastructure, allowing the patient{'\u2019'}s care plan to reflect updated information from
                monitoring calls without manual re-entry. Providers retain full access to call records and can
                export structured data for their own EHR documentation or audit preparation. The documentation
                framework covers all four CMS care programs{'\u2014'}
                <Link href="/resources/glossary/remote-patient-monitoring" className="text-purple-700 underline hover:text-purple-900">
                  RPM
                </Link>
                ,{' '}
                <Link href="/resources/glossary/chronic-care-management" className="text-purple-700 underline hover:text-purple-900">
                  CCM
                </Link>
                ,{' '}
                <Link href="/resources/glossary/transitional-care-management" className="text-purple-700 underline hover:text-purple-900">
                  TCM
                </Link>
                , and PCM{'\u2014'}with program-specific data elements layered on the shared base structure.
              </p>

              {/* Content freshness and review cadence */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Content freshness and review cadence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every substantive provider-facing page on the Positive Check site carries a Last Reviewed date.
                This is not decorative. CMS updates care management program rules annually{'\u2014'}typically through
                the Medicare Physician Fee Schedule final rule published each November, effective the following January.
                HHS updates HIPAA guidance on a less predictable schedule but has issued significant omnibus updates
                that changed business associate obligations materially. Content that does not track these changes
                misleads providers about their billing and compliance posture.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our baseline review cadence is quarterly: four scheduled reviews per year in which substantive pages
                are checked against current CMS and HHS primary sources. When either agency publishes notable
                guidance{'\u2014'}a final PFS rule, a significant MLN booklet update, an HHS omnibus change, a CMS
                FAQ that materially clarifies program requirements{'\u2014'}we conduct an accelerated review of
                affected content outside the quarterly rhythm. The goal is that no provider reading a Positive Check
                page is acting on outdated program requirements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-12">
                Patients, providers, and researchers who identify content that appears outdated or inaccurate are
                encouraged to flag it through our{' '}
                <Link href="/contact" className="text-purple-700 underline hover:text-purple-900">
                  contact page
                </Link>
                . We treat substantive corrections as a priority review item, not a quarterly queue item. If a
                specific CPT code rate is wrong or a program eligibility criterion has changed, that gets corrected
                before the next scheduled review.
              </p>

              {/* What we do not do */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What we do not do</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Boundary-setting is as important as capability claims. The following commitments define the
                limits of Positive Check{'\u2019'}s role in a provider{'\u2019'}s clinical program:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-12">
                <li>
                  We do not make clinical decisions or provide medical advice directly to patients. Every clinical
                  judgment{'\u2014'}what a patient{'\u2019'}s flagged response means, what action to take, whether
                  to adjust a care plan{'\u2014'}belongs to the provider and their designated clinical staff.
                </li>
                <li>
                  We do not name competitor platforms in our comparison or marketing content. We describe our
                  capabilities and let providers evaluate fit based on their own program requirements.
                </li>
                <li>
                  We do not publish commissioned guest posts or paid external reviewer pieces. All content is
                  created in-house and reviewed against primary sources.
                </li>
                <li>
                  We do not sell or share PHI beyond what the BAA and treatment, payment, and operations workflow
                  expressly permit. PHI shared with subprocessors is governed by equivalent BAA obligations.
                </li>
                <li>
                  We do not bill CMS directly. We support providers who bill by generating the documentation
                  and engagement records their billing teams need. The billing relationship with CMS remains
                  entirely with the provider.
                </li>
              </ul>

              {/* Common questions / FAQ */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common questions</h2>
              <div className="space-y-8 mb-12">
                {faqs.map((f) => (
                  <div key={f.question}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>

              {/* Key takeaways */}
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key takeaways</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                  <li>
                    BAA-first: no PHI moves before the contract is signed.
                  </li>
                  <li>
                    Clinicians decide, platforms surface. We do not practice medicine.
                  </li>
                  <li>
                    Primary-source citations everywhere. No unverified third-party content.
                  </li>
                  <li>
                    Last Reviewed dates enforce freshness; quarterly baseline, accelerated on rule changes.
                  </li>
                </ul>
              </div>

              {/* Further Reading grid */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Further reading</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Link
                  href="/resources/glossary/hipaa-compliance"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Compliance</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">HIPAA Compliance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Definitions, obligations, and how HIPAA governs business associates in healthcare technology.
                  </p>
                </Link>
                <Link
                  href="/resources/glossary/business-associate-agreement"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Compliance</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Associate Agreement</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    What a BAA covers, why it is required before PHI exchange, and what providers should verify.
                  </p>
                </Link>
                <Link
                  href="/resources/glossary/ephi"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Compliance</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Electronic Protected Health Information (ePHI)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    What qualifies as ePHI, why the Security Rule applies specifically to electronic PHI, and safeguard requirements.
                  </p>
                </Link>
                <Link
                  href="/resources/glossary/hitech-act"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Compliance</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">HITECH Act</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    How HITECH extended HIPAA liability to business associates and increased enforcement penalties.
                  </p>
                </Link>
                <Link
                  href="/resources/billing-guide"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">Reference</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">CMS Care Program Billing Guide</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    CPT codes, eligibility rules, documentation standards, and revenue math for RPM, CCM, TCM, and PCM.
                  </p>
                </Link>
                <Link
                  href="/about"
                  className="block bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-colors"
                >
                  <p className="text-sm text-purple-700 uppercase tracking-wider mb-2">About</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">About Positive Check</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Company overview, mission, and the team behind the Positive Check senior wellness call service.
                  </p>
                </Link>
              </div>

            </div>
          </section>

          {/* Last Reviewed footer */}
          <section className="px-6 py-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-500">
                Reviewed against current CMS and HHS guidance.{' '}
                <a
                  href="https://www.hhs.gov/hipaa/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  HHS HIPAA for Professionals
                </a>
                {'. '}
                <a
                  href="https://www.cms.gov/medicare/payment/fee-schedules/physician"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-700"
                >
                  Medicare Physician Fee Schedule
                </a>
                . Last updated 2026-04-22.
              </p>
            </div>
          </section>
        </main>

        <PublicFooter />
      </div>
    </>
  )
}
