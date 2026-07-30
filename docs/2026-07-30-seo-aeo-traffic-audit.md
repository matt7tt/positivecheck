# Positive Check SEO, AEO, and Organic Traffic Audit

**Audit date:** July 30, 2026

**Site:** https://www.positivecheck.com

**Scope:** Current repository, live production endpoints, search visibility, mobile Lighthouse, and current Google/CMS guidance

## Executive summary

Positive Check already has a strong technical and content foundation:

- 72 public, indexable URLs in a generated XML sitemap
- Static server-rendered content for every public marketing and resource page
- Canonical URLs, page-specific metadata, Open Graph data, and index controls
- Organization, WebSite, Service, Article, FAQ, DefinedTerm, MedicalEntity, and breadcrumb structured data
- Three topic clusters covering RPM, CCM, and post-discharge/TCM
- CPT and compliance glossaries, comparison pages, calculators, a case study, RSS, IndexNow, `llms.txt`, and `llms-full.txt`
- Primary-source links to CMS and HHS throughout provider-facing regulatory content

The next material organic growth is more likely to come from better page experience,
original evidence, expert trust signals, current regulatory coverage, and stronger
commercial-intent pages than from publishing additional generic glossary entries or
adding more schema.

## Audit evidence

### Production and crawlability

- `positivecheck.com` permanently redirects to the canonical `www` host.
- The homepage, sitemap, robots file, RSS feed, and AI text files return HTTP 200.
- Search results show that Google is discovering the homepage, billing guide, solution
  pages, comparisons, calculators, blog posts, and glossary pages.
- The production build completed successfully with 86 generated routes.

### Mobile Lighthouse lab results

Tests were run on July 30, 2026. These are lab measurements and should be compared with
field data in Search Console and the Chrome UX Report.

| Page | Performance | Accessibility | SEO | LCP |
| --- | ---: | ---: | ---: | ---: |
| Homepage | 68 | 85 | 100 | 8.2 s |
| RPM solution | 70 | 94 | 100 | 7.5 s |
| CMS billing guide | 71 | 94 | 100 | 7.6 s |

Google's good LCP threshold is 2.5 seconds or less. The tests also found approximately
177 KiB of unused third-party JavaScript from GTM, standalone Google Analytics, and the
Facebook Pixel.

### Metadata inventory

- No duplicate public page titles or meta descriptions were found.
- 41 rendered titles were longer than 65 characters.
- 49 rendered descriptions were longer than 165 characters.

These are not hard ranking limits. Compact alternatives should be tested first on
high-impression, low-CTR pages identified in Search Console instead of rewriting every
page mechanically.

## Priority 1: crawl, discovery, and validation

### Findings

- `robots.txt` blocks `/_next/`, which may prevent crawlers from fetching Next.js CSS
  and JavaScript used for rendering.
- `/blog/role-of-technology-in-senior-care` references two nonexistent images:
  `/images/senior-tech.webp` in visible content and
  `/images/senior-technology-care.png` in metadata, structured data, the blog registry,
  and the sitemap.
- The existing link checker has a hand-maintained route allowlist that predates most
  of the current site. It produces hundreds of false positives and cannot serve as a
  reliable CI check.
- Sitemap images and JSON-LD URLs are not validated during builds.

### Actions

- [x] Allow `/_next/` resources to be crawled.
- [x] Repair or retire the broken senior-technology article and make all image
  references consistent.
- [x] Replace the route allowlist with discovery from the rendered production build.
- [x] Validate internal links, public images, sitemap entries, canonicals, and JSON-LD
  URLs in an automated SEO check.
- [x] Run the SEO check as part of the production build workflow.

## Priority 2: page experience and performance

### Findings

- The homepage H1 rotates among RPM, CCM, and post-discharge text every 2.5 seconds.
  Lighthouse identified the H1 as the LCP element, with most of its LCP time attributed
  to render delay.
- The rotating initial value also makes the homepage appear RPM-specific even though
  the metadata describes the broader patient-engagement platform. This overlaps with
  the dedicated RPM solution page.
- GTM, standalone `gtag.js`, and Facebook Pixel all load site-wide. If GA4 is also
  configured inside GTM, analytics may be duplicated.
- Several static pages inherit client-side header, modal, analytics, and monitoring
  code even when their main content is server-rendered.
- Successful demo requests, Lola calls, calculator completions, and downloads do not
  consistently emit GA4 conversion events.

### Actions

- [x] Use a stable, broad homepage H1 and link the three programs to dedicated pillars.
- [x] Remove the rotating headline timer and its hydration work.
- [x] Remove unused global image preloads and client-side preload injection.
- [x] Defer nonessential third-party analytics without losing measurement coverage.
- [x] Add lead and engagement conversion events.
- [ ] Isolate interactive islands over time so static content does not require
  unnecessary client JavaScript.
- [x] Re-run Lighthouse and compare against the audit baseline.

## Priority 3: current regulatory content

### Opportunity

CMS issued the CY 2027 Physician Fee Schedule proposed rule on July 14, 2026. The
proposal includes potentially material changes to RPM and RTM:

- a separately reportable initiating visit associated with the start of RPM or RTM;
- payment for RPM and RTM services only when performed by clinical staff employed by
  the billing practice, rather than contractor personnel;
- possible future changes to the structure and valuation of RPM/RTM codes.

These provisions are proposed, not final. A timely, carefully qualified explanation is
both useful to provider buyers and a strong near-term search opportunity.

### Actions

- [x] Publish an answer-first article distinguishing current rules from proposals.
- [x] Cite the CMS fact sheet and proposed rule directly.
- [x] Explain the implications by operating model without providing legal or billing
  advice.
- [x] Add FAQ and Article structured data that matches visible content.
- [x] Add the article to the blog registry, blog listing, RSS feed, sitemap,
  `llms.txt`, and related-content links.
- [ ] Update the article when CMS publishes the final rule.

## Implementation results

Completed on July 30, 2026:

- The production build generated 87 routes.
- The new build-time SEO validator passed across 73 indexable routes, 2,606 internal
  links, 137 image references, and 325 JSON-LD blocks.
- The validator also found and prompted repairs to missing `/privacy` and `/terms`
  canonicals and a case-study breadcrumb that pointed to a nonexistent route.
- A local production mobile Lighthouse run improved the homepage performance score
  from 68 to 79 and LCP from 8.2 seconds to 5.3 seconds. Accessibility improved from
  85 to 90; SEO remained 100.
- The new 2027 RPM proposed-rule article scored 81 for performance, 96 for
  accessibility, and 100 for SEO, with zero measured layout shift.

Lighthouse results are lab measurements and can vary between runs. Production field
data in Search Console and the Chrome UX Report remains the source of truth after
deployment.

## Next growth priorities after this implementation

### Trust and authorship

- Add named authors and biography pages.
- Add qualified clinical and billing-compliance reviewers.
- Publish reviewer credentials, review dates, methodology, and disclosures.
- Add named customer case studies where contracts permit.

### Original, citeable research

Publish a de-identified annual patient-outreach benchmark report using product data,
with a documented methodology, sample size, definitions, and limitations. Candidate
metrics include:

- voice versus SMS completion rates;
- best contact times;
- missed-call recovery rates;
- engagement by program and cadence;
- escalation frequency and categories;
- multilingual engagement.

### Commercial-intent coverage

Potential pages, subject to product-fit confirmation:

- AI patient outreach software
- Healthcare outbound voice AI
- Automated post-discharge follow-up calls
- Multilingual patient engagement
- RPM adherence and missed-reading recovery
- AI outreach versus healthcare call centers
- AI patient engagement versus generic AI receptionists
- CCM software versus outsourced CCM services
- Advanced Primary Care Management workflows

### Measurement

Connect Search Console query/page data to qualified lead events. Track at minimum:

- `request_demo_open`
- `generate_lead`
- `lola_call_requested`
- `calculator_completed`
- `pdf_download`
- `cms_source_click`
- `case_study_view`

Use Search Console to identify:

- high-impression, low-CTR pages for title/description testing;
- pages competing for the same query;
- content that should be consolidated, redirected, refreshed, or removed;
- traffic and citations from Google's generative AI features.

## Low-priority or unsupported tactics

- Do not invest heavily in `llms.txt` for Google visibility. Google states that it
  ignores the file for Search and its generative AI features.
- Do not rewrite pages solely into small "AI-friendly chunks."
- Do not add structured data solely for AEO. Structured data remains useful when it
  accurately represents visible content and supports an eligible search feature.
- Do not expect FAQ schema to produce rich results automatically; Google limits FAQ
  rich results primarily to authoritative government and health sites.
- Avoid generic, high-volume articles that do not add first-party evidence or expert
  analysis.

## Primary guidance

- [Google: Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google: Structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [CMS: CY 2027 Physician Fee Schedule proposed rule fact sheet](https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-proposed-rule)
- [CMS: CY 2027 proposed rule files](https://www.cms.gov/medicare/payment/fee-schedules/physician/federal-regulation-notices/cms-1848-p)
- [CMS: Telehealth and remote monitoring](https://www.cms.gov/files/document/mln901705-telehealth-remote-patient-monitoring.pdf)
- [CMS: Chronic Care Management services](https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/ChronicCareManagement.pdf)
