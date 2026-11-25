# Positive Check / Hyro comparison publication review

## Decision

Draft PR only. The requested production checks were completed read-only on November 25, 2026. They do not support the original universal claims. The website draft now uses narrower wording, and the requested second-pass-review claim has been removed because the named feature is not enabled. No production services or data were modified.

## Implementation

- Page: `/compare/positive-check-vs-hyro`; vendor index: `/compare`.
- Resources hub card, sitemap entries, canonical and social metadata, breadcrumbs, eight visible FAQs with matching FAQ schema, source links, and the existing demo CTA.
- `/resources/compare` and its “approaches, not vendors” positioning remain unchanged.
- Source: the user's supplied DOCX in `.context/attachments/pV9m1h/`. Internal review notes and AI visibility research were not included in the public page.
- Applied the audience and small-practice edits, English-only Positive Check language, email channel, exact Hyro Care programs cell, and Hyro's original Proactive Px source.
- Scoped device-free language to check-in calls. Fixed the draft's nonexistent `/solutions/front-office` link to `/solutions#front-office`.
- Hyro's post-discharge capability is acknowledged beside the care-program comparison.

## Live evidence

Inspected revisions receiving 100% of normal service traffic, not merely latest-ready revisions:

| Service | Serving revision | Image digest |
| --- | --- | --- |
| Analysis | `mw-analysis-worker-prod-inoptout-1123` | `sha256:66e1586081333149603e5181cea8f0cd71220298293316b2818d05ea83f2aa9b` |
| Calls | `mw-call-worker-prod-00150-jig` | `sha256:aeeac9c63ac28eb4a3aaec737ef155cdac8b1ba7b213ad9f689b6e7665fa1a21` |
| Backend | `mw-web-backend-service-prod-dobfix-1125` | `sha256:b154d891ec3d1b4f36078fcce22dd98dcd6567da33a7fc924b2044c5c8350f1b` |

The application files were read from those immutable container images. Database checks used a local Cloud SQL proxy with read-only transactions and a statement timeout. Only aggregate counts and schema metadata were returned; no patient records, transcripts or audio were retrieved.

| Claim | Production finding | Page wording |
| --- | --- | --- |
| BP, glucose and oxygen alerts even if AI misses them | Deployed analysis invokes `apply_threshold_safety_net`; the deployed implementation reads `analysis_json.recent_vitals` and can insert an omitted alert. It cannot recover readings never extracted into analysis. | Rules-based checks on qualifying readings captured in call analysis. No guarantee of catching all missed readings. |
| Automated second-pass review of every call outcome | `/daily-call-validation` exists and the production scheduler is enabled daily at 23:00 in its configured timezone. It selects only customers with `call_validation` enabled and eligible calls with transcripts. There are **zero** `call_validation` flag rows and **zero** validation findings in the last seven days. | Removed the claim entirely. Deployed code and a scheduled job are not evidence of an enabled review feature. |
| A recording kept for every call | `RECORD_CALLS=true`; all six customer rows have recording enabled. The serving call worker still gates recording per customer and relies on the recording callback. Of 1,052 call records in the preceding seven days, 79 are marked Contact Made; only 22 have a nonempty recording URL. No audio/storage retrieval was attempted. Missing URLs do not establish that provider recordings are absent, but universal retention cannot be confirmed. | Recordings where enabled and retained. No “every call” claim. |
| Encryption at rest | Confirmed the production Cloud SQL instance. Google-managed encryption is the service default. Twilio documents default at-rest encryption for recordings stored in its cloud; actual recording retention and external-storage settings were not audited. | Scope the security statement to Google Cloud SQL encryption at rest; request recording-storage documentation. |
| Role-based access | Serving backend contains staff-role and tenant authorization checks, including `_ensure_tenant_access` and `_authorize_legacy_user_edit`. No live authorization penetration test was performed. | Role-based access controls; no claim that every route was exhaustively tested. |
| MFA | Serving login code honors MFA enrollment and requires it for selected internal roles. Of ten role-1 administrator records, eight have MFA enabled and eight have the admin-required flag. Counts are across those records, not an assertion about recent account activity. | Configurable MFA, explicitly not required for every account. |
| Audit logging | Serving backend writes sign-in/security and administrative audit events. Production contains 997 administrative audit events and 33 security events in the preceding seven days. | Audit logging for sign-ins and administrative actions, not a claim of comprehensive coverage of every operation. |

## Sources

- Hyro original Proactive Px announcement: https://www.hyro.ai/blog/introducing-proactive-px-armr/
- Google Cloud SQL default encryption: https://docs.cloud.google.com/sql/docs/postgres/cmek
- Google Cloud shared responsibility: https://docs.cloud.google.com/sql/docs/shared-responsibility
- Twilio recording defaults: https://www.twilio.com/docs/voice/recording-settings
- Tanner bilingual deployment: the supplied CXM article was retrieved through indexed search and corroborated by Tanner's May 29, 2026 Business Wire announcement.

## Publication requirements

Review the narrowed copy before merging. In particular, the approved “automated second-pass review of every call outcome” wording cannot be published as an active capability based on the production findings. Enabling or repairing platform features is outside this website change; no settings were changed to make the claims true.

## Validation

The final `npm run build` passed: lint (0 errors, 35 existing warnings), type checking, static generation and SEO validation (85 indexable routes, 3,573 internal links, 158 image references, 381 JSON-LD blocks). Built HTML checks confirmed one H1, eight matching visible/schema FAQs, the requested Hyro wording and explicit MFA scope; unsupported universal recording and second-pass claims are absent. Three synthetic omitted-alert cases (BP, glucose and SpO2) passed against the code and shared clinical patterns extracted from the serving image. These were local pure-function checks, not live calls or end-to-end notification tests. Browser host access was unavailable, so there is no visual screenshot review. See the PR for final build results.
