# Conversion recovery plan — August 22, 2026

## Diagnosis

- The live site was not sending data to GA4. The prior `G-C6J8097SY5` tag was removed on August 2 as a presumed duplicate, but the public GTM container has no active GA4 property tag.
- GA4 property `properties/490940878` mixed the public site with `provider.positivecheck.com`. In the 90 days ending August 21, provider activity accounted for 1,076 of 1,907 sessions and 9,498 of 10,449 page views, obscuring the marketing funnel. The provider is a separate Cloud Run frontend from the Vercel marketing deployment and still sends to the shared stream.
- Funnel measurement was incomplete: the homepage contact form had no success event, form starts and errors were not captured, and attribution was not included with leads.
- Demo requests required four fields and led to a delayed scheduling promise instead of an immediate booking option.
- Contact forms required up to seven fields and opted visitors into the newsletter by default.
- Demo and contact leads were delivered only by email, with no CRM delivery path.
- CMS billing language was contradictory across RPM/TCM pages. Several pages claimed automated calls independently satisfied billing requirements while the 2026 rule analysis correctly said CMS had not established that conclusion.

## Implemented in this pass

- Restored direct GA4 collection to the existing property, with an environment override.
- Restricted direct GA4 collection in the marketing deployment to `positivecheck.com` and `www.positivecheck.com`, preventing preview and local copies of that deployment from entering GA4.
- Added client-side page-view tracking for App Router navigation.
- Standardized `cta_click`, `form_start`, `form_error`, `form_submit`, `generate_lead`, and `booking_link_click` events.
- Added first-touch UTM, click-ID, landing-page, referrer, page, and device context to analytics events and lead submissions.
- Reduced the demo form to name, work email, and optional organization.
- Reduced homepage/contact forms to name and email as the only required fields and changed newsletter signup to explicit opt-in.
- Added an immediate calendar step when `NEXT_PUBLIC_DEMO_BOOKING_URL` is configured.
- Added normalized lead IDs and an optional authenticated CRM webhook (`LEAD_WEBHOOK_URL`).
- Escaped form content before inserting it into notification email HTML.
- Reworked the homepage hero around an operational outcome, product screenshot, one primary CTA, and implementation proof.
- Harmonized RPM and TCM language so automation is described as supporting practice-owned workflows, not independently creating billable time or satisfying every requirement.
- Used Search Console opportunity data to rewrite titles and descriptions for four high-impression TCM/readmission pages.
- Added contextual, tracked workflow-demo CTAs immediately after the answer summaries on those pages.

## Production configuration still required

### October 6 implementation handoff

- The current change adds a labelled synthetic call → summary → alert → staff-follow-up example beside the unchanged `billing_workflow_demo_v1` offer. Voice and dashboard previews are optional and explicitly distinguished from the scenario and customer evidence.
- RPM, CCM and the staff-led comparison have tracked evaluation CTAs. `cta_location` now travels with demo requests to notification email and the existing CRM webhook, alongside the lead ID and attribution.
- Scheduling URLs must use HTTPS without embedded credentials. The success screen explicitly distinguishes a request from a confirmed booking; calendar links do not include visitor contact details.
- **Still pending:** an approved calendar URL, named follow-up owner and CRM/provider details. No calendar, recipient, response-time promise or booked/attended/qualified integration has been configured by this change.
- Record requested → booked → attended → qualified as separate outcomes. Use the existing lead ID to reconcile CRM records; only the calendar's confirmed appointment event establishes booked, and staff/CRM outcomes establish attended and qualified. Deduplicate provider callbacks by their event/appointment IDs and account for reschedules/cancellations when implementing the provider integration. Do not infer these outcomes from `booking_link_click`, `form_submit` or an audio preview.
- Compare qualified requests and attended demos by landing page and CTA location after release. Keep the billing offer stable while evaluating the new example and commercial links. This is an experiment, not a promise of search or AI citations.

1. Set `NEXT_PUBLIC_DEMO_BOOKING_URL` to the team calendar.
2. Set `LEAD_WEBHOOK_URL` and, if needed, `LEAD_WEBHOOK_SECRET` to the CRM ingestion endpoint.
3. Completed September 3: created dedicated GA4 property `Positive Check Marketing Website` (`properties/552721603`) and web stream `15714166114` for `https://www.positivecheck.com/`. The marketing site now sends to `G-EZQ4F5Q7FG`; the provider frontend can retain `G-C6J8097SY5`.
4. Completed September 3: granted `g-force-service-account-v@advance-block-464601-c0.iam.gserviceaccount.com` Viewer access to the new GA4 property. Full Search Console access is complete.
5. Completed September 3: registered `generate_lead` as the primary key event in the new GA4 property. `form_submit` remains diagnostic.
6. Configure the scheduling service to send a server-side `meeting_booked` event or webhook after an appointment is actually booked; a calendar click is not the same as a completed meeting.

Completed September 3: created and verified the `https://www.positivecheck.com/` URL-prefix Search Console property, then linked it to the dedicated GA4 web stream. The existing domain property remains the historical source of truth; the hostname-specific property supplies future Search Console data to GA4 without requiring a DNS change.

## Funnel report

Report weekly by source/medium, landing page, device, and program:

`session → cta_click → lead_form_start → form_submit/generate_lead → booking_link_click → meeting_booked → qualified opportunity`

September 21, 2026 tracking correction: custom starts on all six marketing forms now use `lead_form_start`, retaining their existing first-focus guard and `form_name`/CTA attribution. GA4 enhanced measurement keeps its automatic `form_start` event. Use only `lead_form_start` for the custom lead funnel going forward; do not add it to automatic `form_start` counts. Before this deployment, `form_start` mixed automatic and custom events and could double-count a single start, so historical counts are not directly comparable. Update any saved custom-funnel reports or GTM triggers that relied on the old custom name. No GA4 settings were changed. `generate_lead` remains the primary key event and still fires only after a successful submission.

The first four stages are instrumented in the site. The final two require calendar and CRM production configuration.

## GA4 baseline retrieved August 22, 2026

The comparable period below ends August 1 to avoid the August 2–21 measurement gap:

- Public-site sessions fell from 2,263 to 1,135 across sequential 90-day periods, a 49.8% decline.
- Public-site engagement rate fell from 24.5% to 11.7%.
- U.S. sessions fell from 1,738 to 501, a 71.2% decline; U.S. engagement fell from 30.0% to 17.0%.
- The 90 days ending August 21 contained 826 measured public-site sessions, 113 engaged sessions, seven form starts, and zero recorded key events.
- Singapore produced 358 of those 826 sessions with 4.5% engagement, indicating likely automated or low-value traffic.
- Organic search produced only 109 sessions. The billing guide was the strongest organic landing page, with 21 sessions and 81% engagement; most other organic landings produced little or no engagement.
- The homepage generated 411 landing sessions at 12.2% engagement. Contact generated seven landing sessions; pricing generated six with no engaged session.

### Immediate operating priorities

1. Establish the clean baseline after the dedicated marketing property and stream are live. Continue using a `www.positivecheck.com` hostname filter for historical analysis in the shared property.
2. Mark `generate_lead` as the primary GA4 key event and validate a real form submission end to end.
3. Grant Search Console read access, then identify lost queries/pages and indexing or CTR opportunities.
4. Build distribution and conversion paths around the billing guide and other high-intent reimbursement content.
5. Review the homepage-to-demo journey weekly by U.S. traffic, source, landing page, device, and lead type.

## Search Console baseline retrieved August 23, 2026

- The 90 days ending August 21 produced 1 click from 1,875 Google Search impressions: 0.05% CTR at average position 48.6.
- The preceding 90 days produced 1 click from 106 impressions. Google is discovering substantially more content, but most pages do not yet rank high enough to earn traffic.
- The latest 28 days produced 579 impressions, zero clicks, and average position 33.3, improving from position 43.6 in the prior 28 days.
- The United States represented 1,554 of 1,875 impressions. Desktop represented 1,771 impressions.
- Near-term page opportunities were post-discharge contact timing (229 impressions, position 5.8), TCM + CCM combined billing (127, position 12.1), 30-day readmission reduction (84, position 10.6), and the CPT 99495 guide (14, position 7.9). All recorded zero clicks.
- High-volume glossary visibility is mostly on pages 6–10. For example, the business associate agreement glossary page generated 309 impressions at position 81.2; this is discovery, not a near-term traffic opportunity.
- GA4's reported Google-organic sessions are inconsistent with Search Console's single verified click, reinforcing that GA traffic should not be treated as qualified search traffic until the dedicated marketing property is live.
- The Search Console sitemap record was last downloaded May 27 with 68 URLs; the live sitemap now contains 73 indexable routes. Full permission was granted and the refreshed sitemap was accepted for processing on August 23 with zero warnings or errors.
- URL Inspection reports the homepage, billing guide, post-discharge contact timing, and TCM + CCM comparison as submitted and indexed. The readmission-reduction and CPT 99495 pages were successfully crawled but were not indexed at inspection time; both received substantial title, summary, and conversion-path updates on August 23.

## September 3 deployment follow-up

- Deployed the dedicated marketing stream `G-EZQ4F5Q7FG` and excluded `/admin-new`, API routes, non-production hostnames, and the provider application from marketing-site measurement.
- Added a tracked ROI-calculator action beside the demo action on high-intent content, including the billing guide.
- Tightened the two strongest near-page-one result titles and added `CollectionPage` structured data to the resources hub.
- Resubmitted `https://www.positivecheck.com/sitemap.xml`; Search Console accepted it with 73 discovered pages.
- Requested priority recrawling for the post-discharge contact-timing and TCM/CCM comparison pages. Search Console accepted both requests. The resources hub remains `Discovered - currently not indexed`; its manual request returned a transient Search Console error, but it is included in the accepted sitemap.

## October 9 implementation — unpublished

The user approved the recommended implementation order. This workspace remains unpublished; no real callback, test lead, customer-pilot activation or GTM account change was performed.

1. **Call experience: partial, not a closed POS-229.** The hero now offers a clearly labelled seven-second existing Lola greeting, with native playback, a direct audio link, a fictional written example (not a transcript) and separate callback/demo paths. It is not a full patient conversation. The callback form sends explicit one-time consent, starts tracking on an edit rather than dialog autofocus, suppresses duplicate clicks, and distinguishes request acceptance from a connected call. The proxy validates input, bounds upstream waiting and avoids exposing upstream response bodies. Consent is checked at this boundary but not yet persisted in the backend contract. Production confirmation-email delivery and call completion still need verification.
2. **Solutions structure: implemented locally.** Front Office / Care Management groups are shared across the Solutions hub, desktop/mobile navigation, footer and homepage/contact options. Four task-specific Front Office pages and a category comparison are linked in the sitemap. Existing Care Management URLs remain unchanged. Homepage and How It Works show both sides of the patient journey, with Care Management first.
3. **Proof: partially corrected.** Homepage labels now distinguish reported enrollment and alerts; the unsupported 100% resolved claim is removed. The user-confirmed 70% contact rate is not yet published because cohort, period and successful-contact definition remain outstanding. The approximately 40% industry comparator needs an attributable, like-for-like source. No assumption has been made that contact rate equals the case study’s monthly engagement rate. Existing testimonials still require approval/evidence review; this is not a complete claims audit.
4. **Automatic lead response: not activated.** The website currently delivers lead notifications through its existing channels. A service found in the platform repository belongs to a separate customer pilot and must not be reused as the Positive Check configuration. Need the approved Positive Check endpoint/tenant, caller/sender identity, consent wording and record, contact windows, deduplication, opt-out/failure handling and staff owner before enabling call/SMS follow-up. Do not convert ordinary demo or contact submissions into automated calls implicitly. Calendar/CRM choice remains deferred by the user.
5. **Tracking: code-side preparation, user owns GTM.** Third-party marketing loaders are now gated by the public marketing hostname; the unconditional GTM noscript iframe was removed. Direct GA4 event delivery remains active. Do not publish GTM GA4 tags for these same events into the same property without an explicit cutover, or they will be duplicated. The separate provider deployment has not been inspected or changed.
6. **Content: implemented locally.** Added a provider-oriented TCM workflow post with a linked CMS source and explicit automation/clinical boundaries, plus the Front Office comparison. The GEO hypothesis map informed distinct task pages and adjacent evaluation FAQs, not a guarantee of AI citations. Earlier 2025 consumer articles remain accessible and indexed at their existing URLs but appear in a separate archive section, preserving links while the main blog focuses on providers. The user's proposed Front Office blog post is still theirs to supply.

### GTM handoff: event meanings

| Event | Meaning | Conversion treatment |
| --- | --- | --- |
| `cta_click` / `lola_call_open` | A visitor opened a CTA or callback form | Intent only; not a lead |
| `sample_audio_play` / `sample_audio_complete` | The existing greeting started / reached its end | Content engagement; not a lead or a complete patient-call demo |
| `sample_audio_error` | The player reported a load/playback error | Diagnostic |
| `lead_form_start` | Custom form start; Lola now requires an edit or submit attempt | Keep separate from GA4 automatic `form_start` |
| `generate_lead` | The submission endpoint accepted delivery | Primary lead event; does not prove email receipt, a connected call or qualification |
| `form_submit` / `lola_call_requested` | Accepted submission diagnostics | Do not add these to `generate_lead` counts |
| `calculator_used` | First ROI input or scenario change per mounted calculator | Calculator interaction, not a reimbursement result |
| `calculator_completed` | Existing ROI PDF-export action | Legacy name; not all calculator use |
| `booking_link_click` | An optional configured booking link was clicked | Not a confirmed booking |

Never send names, email addresses, phone numbers or free-text form content as analytics parameters. Use `cta_location`, `form_name` and `sample_id` for event breakdowns. Confirmed bookings, attended demos, qualified leads and actual callback outcomes must come from their systems of record, with stable IDs for deduplication.

### Remaining release gates

- POS-229 link and production backend/project access; the current Vercel CLI account cannot access the Positive Check project.
- Recipient and explicit authorization for one labelled callback test, including confirmation email and completed call checks. No prior one-off deployment test approval is being reused.
- An approved full scripted fictional-patient recording if the hero is to promise “Hear a patient call” again.
- Superseded October 11: the user approved replacement first-party operational figures below; publish those with first-party attribution and limitations, not an industry comparison. No approximately 40% comparator is approved.
- Positive Check-specific automatic response setup and human follow-up ownership before activation.
- User GTM coordination and production DebugView/lead-delivery checks after an approved release. Paid ads remain on hold. G2/Capterra profiles, cold-email changes and partner outreach have not been created or sent.

### Local verification

- Production build, TypeScript and SEO validation pass: 81 indexable routes, no broken internal links or missing image references. Existing lint warnings remain; no lint errors.
- Automated tests cover callback input/consent/failure behavior and single-request handling, preview event deduplication, the shared solution taxonomy, content/schema consistency, tracking host guards and ROI usage.
- Browser checks: the existing 7.12-second greeting starts and plays to completion without a media error; nested callback dialog opens/closes without submission; desktop two-category menu works; 390px mobile navigation reaches a task page and closes; task/comparison pages have no document-wide horizontal overflow; the voice-preview controls and next-step buttons fit the phone viewport.
- Search reference content regenerated from the local production build, not the unchanged live site. No analytics lead event, email or phone call was generated by browser QA.

## October 11 approved operational proof — unpublished

The user explicitly approved these replacement figures for website use: 70%+ of patients reached every month by call or text; 6,000+ outreach calls a month; 500+ text check-in conversations a month; 100+ urgent alerts flagged every month. The homepage hero now uses this set rather than the older implementation-study counts. The historical case study remains unchanged and linked separately.

The homepage's new alert section shows selected topics exactly as supplied: 26% symptoms and health concerns; 23% medication problems; 16% patient requests (refills, equipment, scheduling); 16% concerns raised by patients beyond the standard questions. These sum to 81%; they are not presented as exhaustive or necessarily mutually exclusive, normalized, or completed with an invented 19% category.

The separate priority breakdown is 3% critical (escalated in real time), 47% high, 20% medium and 30% low. Do not interpret these as a distribution of the monthly urgent-alert count or derive patient counts by multiplying the percentages. No clinical outcomes or staff response times are inferred.

Source attribution is Positive Check operational reporting, supplied October 11, 2026. That date is approval/provenance, not a measurement window. No cohort, observation dates, detailed counting methodology, external audit or approximately 40% industry comparator has been invented. Reporting notes make these limitations explicit. This follows the existing GEO decision-stage proof gap on the homepage; no new page or new claim of AI-search visibility was added.

Linear recheck: the plugin directory reports Linear as not installed in this session, with no Linear tools exposed. Browser sign-in through the existing matt7t@gmail.com Google session reaches “Create a workspace,” not the Positive Check workspace. No workspace was created and POS-229 was not read, edited or closed. Correct-account/workspace access remains necessary. No live callback recipient or new test-call authorization was supplied.

Validation: 180 tests pass across 30 suites; production build and SEO checks pass for 81 indexable routes. Existing lint warnings remain, with no lint errors. Changes remain unpublished.
