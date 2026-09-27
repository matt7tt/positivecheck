# SEO performance review — September 27, 2026

## Scope and conclusion

Read-only review of authenticated Search Console (`sc-domain:positivecheck.com`), GA4 **Positive Check Marketing Website** (property 552721603), the live marketing sitemap, and the existing conversion components. The user clarified that performance means SEO, not page speed. No website, analytics configuration, indexing submissions, or deployment changes were made in this review.

Visibility is improving, but Google has not yet become a meaningful traffic source. Focus on indexing follow-up, query relevance and editorial authority, and conversion from existing organic landings. Another broad technical SEO rewrite is not supported by this audit.

## Google Search: equal 28-day windows

August 29–September 25 versus August 1–28, 2026; Web search, domain property. Dates were verified in the report's comparison dialog.

| Metric | Latest | Previous |
|---|---:|---:|
| Clicks | 1 | 1 |
| Impressions | Approximately 1.17K | 589 |
| CTR (rounded in GSC) | 0.1% | 0.2% |
| Average position | 17.7 | 38.4 |

Impressions roughly doubled, but clicks did not increase. Aggregate position changes reflect a changing query/page mix and do not establish that all target keywords improved. One click is too little to attribute gains or losses to a deployment. Recent September content changes also lack a full post-release window.

| Page | Latest impressions | Latest clicks | Latest average position | Previous impressions / position |
|---|---:|---:|---:|---|
| CCM billing 2026 blog | 307 | 0 | 8.9 | 0 / not meaningful |
| Post-discharge contact timing | 292 | 0 | 5.7 | 109 / 5.9 |
| TCM + CCM combined-month billing | 124 | 0 | 7.9 | 62 / 10.1 |
| Post-discharge solution | 95 | 0 | 16.4 | 83 / 23.6 |
| RPM solution | 75 | 0 | 63.7 | 69 / 71.8 |
| RPM 2026 codes blog | 59 | 1 | 7.0 | 27 / 13.5 |
| Billing hub | 45 | 0 | 23.9 | 45 / 57.9 |

### Important query-level qualification

The CCM article's average position is not its ranking for `99490` or `CCM billing`. Its visible leading queries include highly specific quoted combinations of `chronic care management services`, `mln booklet`, `mln909188`, and `laptop`. These have positions around 2–6. Their origin is unknown; do not assume they are buyers, bots, or our own research.

Visible commercial/code queries remain weak: `99490` has 3 impressions at position 61; `99490 cpt code` 3 at 89.3; `99487 cpt code` 2 at 42.5; `cpt code 99490 reimbursement` 2 at 80.5. These tiny samples are directional, not stable ranking estimates. The contact-timing page's filtered query table returns no data, so exact query intent cannot be inferred from its page average.

GSC also flags a 62% week-over-week impression decline for the CCM article (September 17–23 versus September 10–16). That is not a 62% traffic loss: the article has zero Google clicks in the full latest 28-day window. Investigate query mix before responding with another title rewrite.

## GA4: where organic visits actually come from

August 30–September 26, 2026. This property's collection began September 3, so this is a partial-history baseline, not a clean 28-day pre/post comparison. Sessions use session-scoped source/medium; landing pages are from the Landing page report filtered to Session medium exactly `organic`.

| Organic source | Sessions | Engaged sessions | Engagement rate |
|---|---:|---:|---:|
| Bing | 50 | 28 | 56% |
| Yahoo | 7 | 7 | 100% |
| Google | 1 | 1 | 100% |
| Total | 58 | 36 | 62.07% |

Average engagement time per organic session is 1m 26s. No organic key events were recorded. This is not proof of broken forms or proof that every session is a qualified person.

| Organic landing page | Sessions | Average engagement time/session |
|---|---:|---:|
| Billing hub | 27 | 1m 12s |
| RPM 2026 codes blog | 6 | 58s |
| TCM + CCM combined-month billing | 5 | 1m 13s |
| RPM interactive-communication guide | 4 | 49s |
| CCM 2026 billing blog | 2 | 10s |

The billing hub accounts for 46.55% of organic sessions. It already contains a tracked workflow-demo CTA and ROI-calculator link after the summary; do not recommend adding the same components again. A useful next experiment is making the offer more explicit and relevant to the reader's workflow, after verifying CTA/start tracking by landing page. Do not claim statistical significance from 27 sessions.

Measurement cautions:

- Across all channels: 273 sessions and 5 key events. One is explicitly attributed to `deployment_test / internal_qa`; exclude it from business outcomes. Four direct key events have not been verified as distinct genuine leads in this review.
- The organic landing table includes 5 `(not set)` sessions and 1 `/_next/static/chunks/app` session. Investigate these as measurement/traffic-quality anomalies rather than new SEO landing pages. Their cause was not established.
- The custom funnel uses `lead_form_start` after September 21; historical automatic/custom `form_start` counts are not directly comparable. Do not sum both event names.
- GA4 shows 10 sessions in its AI Assistant channel, but referrals do not establish citation coverage. AI visibility was not the target of this review.

## Indexing and technical checks

- Live read-only crawl of all **75** sitemap URLs: every URL returned HTTP 200, declared a matching canonical (normalizing the root trailing slash), and had no `noindex` in its robots meta or X-Robots-Tag response header.
- GSC sitemap: **Success**, last read **September 22**, **75 discovered pages**. No sitemap resubmission is warranted solely from these results.
- Page-indexing report, last updated **September 20**: **46 indexed / 44 not indexed** across all known domain URLs. This denominator is not the 75-URL marketing sitemap.
- Exclusions: 15 crawled-not-indexed, 17 discovered-not-indexed, 6 redirects, 2 noindex, 2 not found, and 2 robots-blocked. Intentional redirects/private exclusions are not automatically errors.
- Crawled-not-indexed examples still include the RPM/CCM comparison and CPT 99490/99457 guides, with reported crawls in June/July.
- Fresh URL Inspection for `/solutions/chronic-care-management/cpt-99490-billing-guide` confirms **not indexed**, last crawl **June 21**, successful fetch, crawling/indexing allowed, and Google-selected canonical matching the inspected URL. Its per-URL sitemap field says temporary processing error, while the sitemap report itself is successful; do not infer a site-wide sitemap failure.
- Google's completed live test for that CPT 99490 guide reports **URL is available to Google**, **Page can be indexed**, and **1 valid breadcrumb item**. This confirms live indexability, not actual inclusion in the index. No indexing request was submitted in this review.

## Authority signals

GSC currently reports **18 external links**: 17 to the homepage and 1 to the billing hub. The September 20 audit recorded 10, all to the homepage. This is an improvement in reported coverage, not a full backlink census or a measure of link quality. Most substantive guides still have no external links shown at this summary level.

## Prioritized next work

1. **Indexing follow-up for the recently improved references.** Inspect the four September 20 priority guides and the new APCM article individually. Check the prior submission log before requesting another recrawl. Submit only warranted missing/changed pages, record request date separately from index status, and recheck in one to two weeks. Do not mass-submit unchanged URLs or weaken robots/canonical rules.
2. **Treat the billing hub as the main acquisition-to-demo opportunity.** Verify organic CTA clicks → `lead_form_start` → successful `generate_lead`, excluding QA. Prepare one explicit workflow-review offer and compare it over a complete window. Keep the useful reference content ungated. Calendar/CRM configuration still requires confirmed destinations and event ownership.
3. **Strengthen credibility and relevant distribution.** Arrange an actual qualified billing reviewer, record their scope and approval, and only then publish genuine reviewer attribution. Prepare an approved practical implementation example or checklist for relevant partners to reference. Do not invent evidence, buy links, or send outreach without approved recipients/materials. This is a hypothesis for improving usefulness and trust, not a guaranteed ranking mechanism.
4. **Improve existing search-intent coverage before adding more pages.** Prioritize the CCM article, contact-timing guide, and combined-month page. Separate quoted/source-research queries from prospective-buyer queries. Examine device and search-result presentation before changing titles; the September title/content changes need a full measurement window. Do not optimize the CCM article around its misleading aggregate position.
5. **Add a Bing-specific diagnostic pass.** Bing supplies 50 of 58 organic sessions. Review its Webmaster Tools query/indexing data when access is available; GSC cannot explain Bing rankings. No Bing account changes were made here.

Maintain a weekly scorecard of relevant-query impressions/clicks, index status for priority URLs, organic landing sessions by engine, and verified qualified leads. Use equal complete periods and annotate deployments and tests. Do not treat a higher Lighthouse SEO score as evidence of better rankings.

## Sources and verification boundaries

- [GSC performance comparison](https://search.google.com/u/1/search-console/performance/search-analytics?resource_id=sc-domain%3Apositivecheck.com&num_of_days=28&compare_date=PREV) — authenticated account required; relative dates will move.
- [GSC indexing](https://search.google.com/u/1/search-console/index?resource_id=sc-domain%3Apositivecheck.com), [sitemap](https://search.google.com/u/1/search-console/sitemaps?resource_id=sc-domain%3Apositivecheck.com), [links](https://search.google.com/u/1/search-console/links?resource_id=sc-domain%3Apositivecheck.com).
- [GA4 marketing property](https://analytics.google.com/analytics/web/?authuser=matt7t%40gmail.com#/a356615471p552721603/reports/reportinghub) — authenticated account required; use dates and filters stated above.
- [Google: diagnosing search traffic changes](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) — query/page segmentation and allowing time after changes.
- [Google: recrawl requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) — requests do not guarantee indexing; repeated requests do not accelerate crawling.
- [Google: title links](https://developers.google.com/search/docs/appearance/title-link) — descriptive, relevant titles rather than keyword stuffing.

No forms were submitted, external outreach sent, analytics settings changed, or website code deployed. This document records evidence and proposed work, not achieved SEO uplift.
