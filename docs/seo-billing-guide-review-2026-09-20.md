# Billing-guide SEO review — September 20, 2026

## Scope and status

Release prepared September 20 at the user's instruction, including consistency corrections. Improve four existing unindexed reference pages for practice operations teams evaluating RPM/CCM outreach, provisionally a 100–500-patient cohort. Conversion remains a qualified workflow demo. Keep existing URLs and search titles stable. No new landing pages, reviewer attribution, external outreach, or provider-app changes. One labelled production demo test using matt@positivecheck.com was explicitly approved; execution and results must be recorded after deployment.

The GEO conversation map below is **hypothesis-only**. No live multi-turn assistant tests or citation baseline have been collected. GSC visibility does not establish assistant citations or causality.

## Conversation map

| Turn | Buyer prompt | Intent | Who gets cited now | Covering asset | Verdict before this batch |
|---|---|---|---|---|---|
| 1 | Do we need RPM, CCM, or both? | Orientation | Not tested | RPM vs. CCM comparison | Weak: revenue framing outweighed program fit |
| 2 | How do these compare with our existing staff-led process? | Compare alternatives | Not tested | Comparison and in-house coordination guide | Weak: responsibilities needed to be explicit |
| 3 | Which minutes count, and can our team document both programs? | Qualification | Not tested | 99457 and 99490 guides | Weak: incorrect time and complex-CCM claims |
| 3 | Does our post-discharge workflow satisfy the TCM requirements? | Qualification | Not tested | 99495 guide | Weak: discharge, supervision, and payment assertions |
| 4 | What evidence should we inspect before changing software? | Decision and risk | Not tested | Guide checklists, implementation guide, case-study limitations | Weak: needed concrete sample records and retained responsibilities |

## Prioritized gaps and implementation

1. **Accuracy before distribution:** replace the four long-form bodies with distinct source-checked references. Correct total RPM management time versus live-call time, separate complex/non-complex CCM, qualifying TCM discharge settings and role boundaries, and independent concurrent-service requirements. Remove unsupported flat payment and automatic claim-eligibility assurances from these four pages.
2. **Qualification evidence:** add synthetic RPM and CCM activity logs, a discharge-to-claim TCM checklist, and a comparison register that prevents shared time buckets. Examples are not patient records, clinical recommendations, or claim approvals.
3. **Adjacent-turn coverage:** six self-contained 40–80-word FAQs per page, matching visible text and FAQPage data. Connect comparison → code requirements → workflow review. No promise of FAQ rich results or AI citations.
4. **Technical continuity:** preserve canonicals and SEO titles, keep server-rendered content, update sitemap dates only for changed pages, link all four guides from the billing hub, and regenerate the full-text companion from the local production build.
5. **Trust:** show editorial source-check scope, not invented clinical review. A qualified reviewer must approve the content and attribution before any reviewed-by claim is added.

## Source checks and review checklist

- [CMS CCM booklet, June 2025](https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnproducts/downloads/chroniccaremanagement.pdf): eligibility, initiation, consent, service elements, and distinct non-complex/complex/practitioner-time pathways.
- [CMS RPM time clarification](https://www.cms.gov/newsroom/fact-sheets/final-policy-payment-and-quality-provisions-changes-medicare-physician-fee-schedule-calendar-year-1): the 2021 policy clarification includes qualifying management work plus required interactive communication in the 20-minute total. Do not use its historical device-day paragraph as the complete 2026 rule.
- [CMS remote-monitoring booklet, December 2025](https://www.cms.gov/files/document/mln901705-telehealth-remote-patient-monitoring.pdf): current device versus treatment-management distinction, relationship/consent, and no duplicated time or effort.
- [Noridian 2026 update](https://med.noridianmedicare.com/web/jeb/article-detail/-/view/10525/remote-physiologic-monitoring-rpm-2026-evaluation-and-management-em-updates): shorter-time and device-day pathways; not automatic eligibility for any particular claim.
- [CMS TCM booklet, August 2025](https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf): eligible transitions, contact-attempt exception, visit timing, decision-making, medication reconciliation, and non-face-to-face clinical staff roles.

Reviewer should check current CPT reporting instructions and edits, Medicare/MAC and setting-specific requirements, qualifications/supervision, overlap restrictions, and whether synthetic examples reflect the intended operational workflow. The source check does not validate every billing claim elsewhere on the website.

### Consistency corrections completed for release

Corrected the RPM communication companion; CPT 99457, 99458 and 99470 definitions; related glossary entries/index; RPM pillar/FAQ/patient-selection copy; CCM links and staff-time examples; TCM manual-outreach and readmission passages; and the clinical-standards call-duration claim. Shared glossary definitions keep visible text and structured data aligned. The billing hub now requires RPM consent, distinguishes acute/chronic RPM eligibility, removes unsupported flat rates/revenue scenarios and blanket facility exclusions, and treats complex CCM as a separate pathway. Removed known AI-only qualification and blanket secure-chat assertions. A source-level regression test checks the specific contradicted claims across published TS/TSX content.

This is a targeted consistency pass, not independent clinical/coding certification of every statement or rate elsewhere on the site. Older outcome claims and other payment illustrations still require the evidence/reviewer process in the GEO plan; do not infer approval or a guaranteed claim from editorial checks.

## September 20 search baseline

Read-only GSC inspection: latest indexing update September 17, 45 indexed and 44 not indexed, versus 43/47 at the previous check. Exclusions comprise 6 redirects, 2 noindex, 2 not found, 2 robots-blocked, 15 crawled-not-indexed, and 17 discovered-not-indexed. These are all known domain URLs, not the marketing sitemap denominator.

All four priority guides appear in crawled-not-indexed examples: RPM/CCM comparison last crawled July 22, 99490 June 21, 99457 June 20, and 99495 May 15. All four current live pages returned 200 with self-canonicals and index/follow. The 99495 URL inspection specifically showed successful fetch, crawling and indexing allowed, and matching canonical. This supports improving content and requesting a targeted recrawl after deployment, not blanket robots changes.

GSC Web August 22–September 18: 2 clicks, approximately 1.21K impressions, 0.2% CTR, average position 20.8. Only five complete post-September-13-deployment days are present. Do not attribute the aggregate change to that deployment. GSC links showed 10 external links, all to the homepage; the report is not an exhaustive backlink census.

GA4 property remains Positive Check Marketing, 552721603, measurement ID G-EZQ4F5Q7FG. No fresh September 20 GA report was collected; retain the separately dated September 13 baseline rather than relabelling it as current.

## Release and measurement sequence

1. Obtain an actual reviewer name, credentials, scope, and approval before adding reviewer attribution. No named-reviewer claim is included. The later explicit deployment instruction authorizes publishing the editorial corrections; the separate affirmative test response authorizes one labelled production form submission.
2. On deployment instruction, publish and verify all changed URLs return 200, contain expected text, and retain canonicals. Then inspect the four priority URLs in GSC and request indexing only for warranted missing URLs. Log submission dates separately from actual indexing outcomes; recrawling/indexing is not guaranteed.
3. Compare equal 28-day post-release windows at page/query/device level. Keep low click volume and query-mix changes explicit. Track qualified demos, not just impressions.
4. If separately approved, send one labelled synthetic production demo request and verify delivery plus the marketing property's generate_lead event. Local mocked tests are not proof of production delivery.
5. Provider-app owner must resolve the separately hosted indexable root. Confirm intended redirect destination or crawlable noindex in that repository/deployment; keep authentication intact. No evidence of private record exposure was found from the public shell.
6. Off-site evidence experiment: prepare a customer/partner implementation account using approved cohort definitions, outcome limitations, attribution and permission. Consider partner resources, a relevant practice-operations publication, or a professional community with transparent affiliation. No outreach or publication until the evidence pack and recipients are approved; do not buy links or manufacture testimonials.
7. Establish a fixed multi-turn prompt baseline across available assistants, recording model/date/locale, citations and brand mentions per turn. Rerun monthly and review the full map quarterly; report known AI referrals and qualified leads separately from citation coverage.

## Verification

- 93 tests pass, including six revised guide/hub FAQ-schema checks, three glossary definition/schema checks, and a repository-wide regression check for the identified wording errors.
- Production build passes; 36 pre-existing lint warnings, zero lint errors.
- Rendered SEO validation: 74 indexable routes, 2,711 internal links, 137 image references, 330 JSON-LD blocks.
- Local browser inspection checks the shared guide layout, worked example, section navigation, and demo entry point. No form was submitted.
