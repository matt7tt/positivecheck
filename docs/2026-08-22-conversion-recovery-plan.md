# Conversion recovery plan — August 22, 2026

## Diagnosis

- The live site was not sending data to GA4. The prior `G-C6J8097SY5` tag was removed on August 2 as a presumed duplicate, but the public GTM container has no active GA4 property tag.
- Funnel measurement was incomplete: the homepage contact form had no success event, form starts and errors were not captured, and attribution was not included with leads.
- Demo requests required four fields and led to a delayed scheduling promise instead of an immediate booking option.
- Contact forms required up to seven fields and opted visitors into the newsletter by default.
- Demo and contact leads were delivered only by email, with no CRM delivery path.
- CMS billing language was contradictory across RPM/TCM pages. Several pages claimed automated calls independently satisfied billing requirements while the 2026 rule analysis correctly said CMS had not established that conclusion.

## Implemented in this pass

- Restored direct GA4 collection to the existing property, with an environment override.
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

## Production configuration still required

1. Set `NEXT_PUBLIC_DEMO_BOOKING_URL` to the team calendar.
2. Set `LEAD_WEBHOOK_URL` and, if needed, `LEAD_WEBHOOK_SECRET` to the CRM ingestion endpoint.
3. Confirm `matt@positivecheck.com` has Viewer access to GA4 property `G-C6J8097SY5` and Owner/Full access to the `https://www.positivecheck.com/` Search Console property.
4. In GA4, mark `generate_lead` as a key event. Treat `form_submit` as diagnostic unless the business wants it as a second key event.
5. Configure the scheduling service to send a server-side `meeting_booked` event or webhook after an appointment is actually booked; a calendar click is not the same as a completed meeting.

## Funnel report

Report weekly by source/medium, landing page, device, and program:

`session → cta_click → form_start → form_submit/generate_lead → booking_link_click → meeting_booked → qualified opportunity`

The first four stages are instrumented in the site. The final two require calendar and CRM production configuration.
