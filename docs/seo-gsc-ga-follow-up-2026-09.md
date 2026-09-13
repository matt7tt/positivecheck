# Search Console and Analytics follow-up — September 13, 2026

## Scope and baseline

Improve the existing TCM/CCM content and the path to a qualified workflow demo for practice operations teams. The existing GEO conversation map remains hypothesis-only; these changes do not establish assistant citation gains.

Sources: authenticated Search Console for `sc-domain:positivecheck.com` and GA4 **Positive Check Marketing**, property **552721603**, accessed through `matt7t@gmail.com`. Do not use the older mixed provider-app GA property as a marketing baseline.

GSC Web comparison: August 15–September 11 versus July 18–August 14, 2026. Clicks: 2 versus 0; impressions: approximately 1.12K versus 608; CTR: 0.2% versus 0%; average position: 26.3 versus 21. Query mix can change the aggregate position; this is not proof that specific pages lost rankings.

| Priority page | Latest 28-day impressions | Clicks | Average position |
|---|---:|---:|---:|
| TCM contact timing | 301 | 0 | 5.9 |
| 2026 CCM billing blog | 151 | 0 | 12.4 |
| TCM + CCM combined-month billing | 127 | 0 | 8.8 |

The timing page’s filtered query table returned no data. No exact query winners were inferred. Its title and the combined-month page’s title changed September 3; keep them stable while collecting a comparable post-change window.

GA4, September 6–12: 61 active users, 71 sessions, 287 events, zero recorded key events. Session source/medium: 39 direct, 23 Bing organic, 1 Google organic, 5 `chatgpt.com / ai-assistant`, and 3 Microsoft-related referrals. Page-view counts are not landing-page counts. The property was created September 3, so it has a short history. Country counts alone do not establish bot activity.

GA4 already has `generate_lead`, `qualify_lead`, `close_convert_lead`, and `purchase` marked as key events; each showed no stream data detected. Do not create duplicate key events or interpret zero events as proof that the forms failed.

GSC’s beta Generative AI features report showed 14 total impressions for June 12–September 11. Page-level values need not sum to the property total. These periods precede the September 13 GEO deployment and cannot assess its effect.

## Implemented locally

- Replace the timing guide’s blanket missed-contact exclusion with CMS’s timely unsuccessful-attempt exception. Distinguish attempts from completed contact, business days from calendar days, and AI support from qualifying clinical work.
- Add a five-part operational documentation checklist, deadline examples, six visible buyer FAQs with matching schema, sources, and a billing-review caveat. Keep the URL and search title stable.
- Correct the same missed-contact claim in the TCM FAQ, 99495 guide, and manual-outreach comparison. Remove the associated unsupported per-miss revenue assertion from those passages.
- Add practical record-separation guidance and contextual links connecting the three priority pages; feature them on the resources hub. Update modified dates for changed content and regenerate `llms-full.txt` from the local production build.
- Initialize GA’s command queue before page interaction while retaining lazy loading of the remote library. The event helper also queues Google-tag commands when `gtag` is unavailable and explicitly targets the marketing property. This addresses an early-event loss risk, not a proven explanation for every missing lead.
- Preserve the initial-page-view deduplication and host/path exclusions. No PII fields were added to analytics. Make the demo description accurate when no scheduling URL is configured.

## Indexing findings

GSC’s last indexing update was September 3: 43 indexed, 47 not indexed. The latter comprises 7 redirects, 4 not found, 2 noindex, 2 robots exclusions, 15 crawled-not-indexed, and 17 discovered-not-indexed. These are **all known domain URLs**, not just the current marketing sitemap. Do not treat every excluded URL as an error.

The sitemap report showed success, last read September 8, with 73 discovered URLs. A live September 13 fetch contained 74 URLs, including the newly added implementation guide. That difference does not establish a sitemap failure.

A read-only live crawl checked all 74 sitemap URLs: all returned HTTP 200, none declared noindex in the HTML or response header, and all had matching canonicals after normalizing the homepage trailing slash. The calculator’s extra raw H1 belongs to its hidden PDF template, not a second visible page heading. No blanket robots/canonical edits or mass indexing submissions were justified by these results.

The visible GSC indexed examples explicitly include the contact-timing guide, combined-month comparison, platform, billing guide, home, about, blog, clinical standards, and RPM-code blog. This does **not** establish the status of every commercial page: URL-level excluded-page exports and inspections remain outstanding.

### Provider app finding — separate owner/repository

GSC also lists `https://provider.positivecheck.com/` as indexed. A live unauthenticated fetch returned HTTP 200, an older senior-wellness marketing title, `index, follow`, a canonical pointing to the non-www marketing root, and “Loading configuration...” body text. Its robots file permits the root. This is evidence of an indexable app shell, not evidence that private records are exposed.

Have the provider-app owner decide whether its public root should redirect to the appropriate landing/login destination or be served with `noindex`. If noindex is selected, leave the URL crawlable so Google can see it; keep authentication protecting private content. Do not remove an entire domain or modify this separate deployment from the marketing repository.

## Verification and outstanding work

- 75 tests pass, including early-tag queueing, property targeting, exclusion behavior, initial page-view deduplication, successful/failed demo submissions, attribution, no lead PII in events, and API success only when a delivery channel accepts the lead.
- Production build and rendered SEO validation pass. Existing unrelated lint warnings remain; no lint errors.
- Local browser inspection confirms the updated guide, deadline table, checklist, FAQs, links, and CTA render.
- Local tests mock email/CRM transport. They do not prove a production email reached an inbox or an event arrived in GA4. No production test request has been sent; permission for one clearly labelled test was requested.
- Billing reviewer approval remains pending. Source-based corrections are not a full certification of every billing/rate claim across the site.
- Changes in this follow-up batch are not deployed yet. After deployment, verify the changed URLs, then use URL inspection for genuinely missing priority pages; request indexing only where warranted. Do not resubmit already indexed pages simply because they have low CTR.

## Measurement procedure after deployment

1. Record the production commit/date. Compare complete, equal-length 28-day windows, noting low click counts and the September 3 title change. Review impressions, clicks, CTR, and position per priority page and device; do not promise uplift from this small baseline.
2. In property 552721603, use session-scoped source/medium for Google organic, Bing organic, known AI referrals, direct, and other referrals. Use landing page plus query string for acquisition analysis; general page views are a separate engagement measure. Missing referrers cannot reliably be assigned to AI.
3. For an approved test, submit one visibly labelled synthetic demo request with the agreed internal email. Confirm a single successful API response and lead ID, verify actual notification/CRM receipt, and check one `generate_lead` for the marketing measurement ID `G-EZQ4F5Q7FG`. Label/exclude the test in the analysis. Do not claim this was done based solely on unit tests or a dataLayer object.
4. Track demo opens → form starts → successful lead submissions → qualified demos. The first three are instrumented; sales must classify the final outcome. Keep programme, approximate cohort size, workflow need, and next step in the approved lead system, not patient details in GA.
5. Existing optional `LEAD_WEBHOOK_URL` support forwards leads but does not itself classify them or implement GA offline conversion import. Confirm the CRM destination, credentials, event ownership, and consent/privacy requirements before configuring qualification or closed-lead imports. Never fabricate qualifying events to populate an empty report.
6. Export GSC’s crawled/discovered-not-indexed and 404 examples, filter to canonical marketing URLs, then inspect priority gaps. Redirect only URLs with a real replacement; keep intentional removals/private routes excluded. Recheck after Google has recrawled.

## Primary references

- [CMS TCM booklet](https://www.cms.gov/files/document/mln908628-transitional-care-management-services.pdf): contact and unsuccessful-attempt provisions, clinical roles, and visit requirements.
- [AAFP TCM guidance](https://www.aafp.org/practice-operations/billing-and-coding/transitional-care-management): business-day definition and workflow context. Use the current CMS booklet for billing rules where older explanations differ.
- [Google tag configuration](https://developers.google.com/tag-platform/gtagjs/configure) and [API reference](https://developers.google.com/tag-platform/gtagjs/reference): command queue and explicit destination parameters.
