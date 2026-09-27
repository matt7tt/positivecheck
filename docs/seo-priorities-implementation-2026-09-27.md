# SEO priorities — implementation and handoff

## Status

Prepared September 27, 2026 after approval of the [SEO review priorities](./seo-performance-review-2026-09-27.md). The baseline remains dated September 27; no new authenticated Search Console, GA4, or Bing data was collected in this implementation turn because the browser connection was unavailable. GSC Wizard was suggested as an optional data connection, but installation/connection is not confirmed. It is not a substitute for Google's manual indexing-request workflow.

Implemented: a specific billing-guide demo offer, consistent form messaging, versioned offer attribution in analytics and lead delivery, and regression coverage. Initially prepared locally; the owner subsequently authorized deployment. The release PR records the production commit and live verification outcome. No indexing submission, live lead submission, reviewer attribution, or outreach is included in this release.

## Audience and conversation coverage

Deployment decision: the owner delegated audience selection and asked to publish without supplying reviewer or customer material. Keep the broad practice-operations RPM/CCM audience; do not impose a 100–500-patient qualification on the public offer. Reviewer attribution, endorsements and customer-example publication are deferred, not prerequisites for releasing this software-demo offer. This approval does not authorize invented credentials, outcomes or outreach.

The GEO conversation-mapping skill is used only to shape the adjacent decision-stage offer and evidence brief. The target remains practice operations teams comparing RPM/CCM outreach software with staff-led outreach; a roughly 100–500-patient cohort is the earlier provisional audience and has been put to the user for confirmation. No cohort-size requirement is added to the public offer. Conversion means a qualified workflow demo, not a click or a guaranteed billing outcome.

This map is **hypothesis-only**. There is no live assistant test or citation result for this work; the user requested SEO execution, not a new AI-visibility study.

| Turn | Buyer prompt | Intent | Who gets cited now | Existing asset | Verdict before this change |
|---|---|---|---|---|---|
| 1 | Which care-management programs fit our practice? | Orientation | Not tested | Billing hub and program guides | Covered |
| 2 | Should we keep staff-led outreach or add software? | Comparison | Not tested | In-house coordinator comparison | Covered |
| 3 | What would enrollment, follow-up and handoffs look like for our team? | Qualification | Not tested | Implementation guide and platform | Covered, but the billing hub's demo offer did not explain what would be discussed |
| 4 | What will a demo help us evaluate, and is it a billing review? | Decision | Not tested | Billing hub → demo modal | Weak: vague offer and no offer-specific boundary |
| 4 | Who reviewed these requirements and what customer evidence can we inspect? | Trust | Not tested | Clinical standards and existing case study | Weak: qualified reviewer approval and evidence permissions remain outstanding |

The priority content gap is the turn-four invitation, not another indexable page or another FAQ block. Existing reference content stays ungated. No new medical, coding, reimbursement, integration, or customer-outcome claims are introduced.

## Local implementation

- Billing hub CTA: “See your RPM/CCM outreach workflow in a 15-minute demo.”
- Three-part agenda: discuss enrollment/follow-up friction; walk through outreach, documentation and exception routing; identify what the team needs to evaluate a pilot.
- CTA and dialog both clarify that this is a software workflow demo, not a clinical or billing-compliance review, and request no patient information.
- Shared allowlisted identifier: `billing_workflow_demo_v1`. Passed as `offer_id` on offer-specific CTA/open/start/error/submission/lead/calendar events, and on the demo API request.
- The server accepts only the known offer identifier. It passes it to the configured CRM lead fields and includes an offer label in the existing internal email notification. Arbitrary submitted offer text is ignored.
- Default demo forms retain their existing wording, scheduling behavior, event names and payload shape when no offer is provided.
- `lead_form_start` remains distinct from GA4 automatic `form_start`; `generate_lead` still fires only after successful API delivery. No contact fields are added to analytics.
- Search titles, canonicals, billing requirements and existing URLs are unchanged. Only the billing hub's content-modified date changes; its editorial source-check date is not relabelled as a new clinical review.

This is one versioned before/after experiment, **not randomized A/B testing**. The version exists to identify exposure after deployment; it does not prove improved conversion.

## Indexing queue: not submitted

All five live URLs were fetched again in this turn. Each returns 200, `index, follow`, a self-canonical, and no X-Robots-Tag noindex. Those checks do not establish actual indexing.

| URL path | Prior authenticated evidence | Next action once access returns | Request status |
|---|---|---|---|
| `/solutions/chronic-care-management/cpt-99490-billing-guide` | Sep 27: not indexed; Jun 21 last crawl; live Google test can index | Reinspect; if still missing and no recent request, request once | Not submitted this turn |
| `/solutions/remote-patient-monitoring/cpt-99457-billing-guide` | Sep 27 exclusions: crawled-not-indexed, Jun 20 last crawl | Fresh URL inspection; request if warranted | Not submitted this turn |
| `/solutions/post-discharge-follow-up/cpt-99495-billing-guide` | Sep 20: crawled-not-indexed, May 15 last crawl | Fresh URL inspection; request if warranted | Not submitted this turn |
| `/resources/compare/rpm-vs-ccm-medicare-billing` | Sep 27 exclusions: crawled-not-indexed, Jul 22 last crawl | Fresh URL inspection; request if warranted | Not submitted this turn |
| `/blog/apcm-billing-2026` | Newly deployed Sep 21; current index status not inspected | Inspect first; no request if already indexed/current | Not submitted this turn |

Repository logs show accepted September 3 requests for the contact-timing and combined-month pages, not confirmed requests for the five URLs above. Missing log entries are not proof that nobody requested them elsewhere. Check the owner's request history before repeating requests. Do not bulk resubmit the successful 75-URL sitemap, use the job-posting/broadcast-event Indexing API for ordinary articles, or equate IndexNow with Google indexing. [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) explains that repeat requests do not accelerate crawling and inclusion is not guaranteed.

## Query investigation and title decision

The earlier authenticated review is enough to avoid a premature title change, but not enough to complete device/intent analysis. Keep the current titles while obtaining the following exports from the same complete periods (Aug 29–Sep 25 versus Aug 1–28):

1. For the CCM article, group visible queries into billing intent (code, reimbursement, requirements, frequency), quoted document/source research (`mln909188`, quoted booklet terms and `laptop`), branded, and other/unknown. Keep raw query counts and anonymized residuals explicit; do not assign every impression to buyers.
2. Compare relevant-query clicks, impressions and positions by desktop/mobile. A zero-impression previous row has no meaningful previous rank. Do not average averages or invent missing query-level metrics.
3. For contact timing, the filtered query table was empty. Treat buyer query intent as unknown, not as established by the page's 5.7 average position. Examine available device/country/page data before writing a new snippet.
4. Inspect actual title/snippet presentation for supported query opportunities. Retain the current direct-question combined-month title unless the data shows a specific mismatch. No keyword-stuffed or guarantee-based titles.

Google's [title-link guidance](https://developers.google.com/search/docs/appearance/title-link) supports concise, descriptive titles; it does not justify changing them on every weekly fluctuation.

## Measurement and release checklist

- Record the production deployment commit/date before starting the post-change window. Prepare local changes for review; do not label them live until deployed and verified.
- Before changing analytics configuration, inspect whether event-scoped dimensions already exist for `cta_location` and `offer_id`. Create missing definitions only once when authorized access is restored; definitions are not a historical backfill. Event collection of the parameters is implemented, but GA4 receipt/reportability is not verified by unit tests.
- Segment session medium `organic`, source engine, landing page `/resources/billing-guide`, and device. Exclude the known `deployment_test / internal_qa` campaign from business outcomes. Do not relabel direct key events as qualified leads without sales verification.
- Compare complete 28-day windows after deployment. The original 27 billing-hub organic sessions are too few for a statistically persuasive A/B result. Report counts and uncertainty, not a promised percentage lift.
- Funnel: relevant organic sessions → `cta_click` with `cta_location=billing_guide_summary` and offer identifier → `lead_form_start` → successful `generate_lead` → sales-verified qualified demo. `form_submit` is diagnostic, not a second lead. `booking_link_click` is not a completed meeting.
- Follow up on verified indexing requests after 7–14 days. Record index status separately from submission status. No scheduled monitor was created.
- Perform browser/mobile QA and a non-submitting modal check when browser access returns. This turn's form tests use mocked transports; do not send another live test lead under the previous one-test authorization.
- Bing follow-up remains pending authenticated Webmaster Tools access. Inspect query/page performance and index status for the same five guides; do not infer Bing rankings from GSC or submit unchanged URLs simply because Bing traffic is stronger.

## Credibility deliverable

The [reviewer and partner evidence brief](./billing-reviewer-partner-brief.md) is ready for the owner. No reviewer identity, endorsement, permissions or outcome data has been invented. Publishing attribution or sending the draft still requires the named reviewer/customer/partner and their specific approval.

## Verification

- 112 tests pass across 18 suites, including the new offer integration, first-start deduplication, success/failure boundaries, scheduling, no contact PII in events, and server offer allowlisting.
- Full production build passes, with 36 pre-existing lint warnings and zero lint errors. Rendered SEO validation passes: 75 indexable routes, 2,742 internal links, 140 image references, and 335 JSON-LD blocks.
- The local production server returns 200 for the billing hub. Its title and canonical match the live page; the new offer/disclaimer are server-rendered and the modified-date schema is present. No forms were submitted.
- Regenerated `public/llms-full.txt` from the local production server; the diff is limited to the billing hub's offer and modified date. Other reference sections are unchanged.
- Local browser visual QA and production analytics receipt: pending browser access/deployment.
