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

1. Set `NEXT_PUBLIC_DEMO_BOOKING_URL` to the team calendar.
2. Set `LEAD_WEBHOOK_URL` and, if needed, `LEAD_WEBHOOK_SECRET` to the CRM ingestion endpoint.
3. Completed September 3: created dedicated GA4 property `Positive Check Marketing Website` (`properties/552721603`) and web stream `15714166114` for `https://www.positivecheck.com/`. The marketing site now sends to `G-EZQ4F5Q7FG`; the provider frontend can retain `G-C6J8097SY5`.
4. Completed September 3: granted `g-force-service-account-v@advance-block-464601-c0.iam.gserviceaccount.com` Viewer access to the new GA4 property. Full Search Console access is complete.
5. Completed September 3: registered `generate_lead` as the primary key event in the new GA4 property. `form_submit` remains diagnostic.
6. Configure the scheduling service to send a server-side `meeting_booked` event or webhook after an appointment is actually booked; a calendar click is not the same as a completed meeting.

Search Console cannot yet be linked inside GA4 because the signed-in Google account has Full Search Console access but is not a verified owner of the `positivecheck.com` domain property. A verified owner must complete that one-time link.

## Funnel report

Report weekly by source/medium, landing page, device, and program:

`session → cta_click → form_start → form_submit/generate_lead → booking_link_click → meeting_booked → qualified opportunity`

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
