# ApexStack organic-growth brief

Confirmed 2026-09-30 from the project repository, production origin, existing automation and the owner's 2026-09-30 growth instruction. This file contains no credentials. The existing `apexstack-daily-seo-geo-lead-growth` heartbeat and its memory remain the scheduler and operational history; do not create a second writer for this site.

| Setting | Confirmed value or current boundary |
| --- | --- |
| Brand and canonical origin | ApexStack; `https://apexstack.dev` |
| Repository and deployment | This repository; GitHub `main` auto-deploys to Vercel |
| Primary buyer | Funded AI/SaaS teams needing product engineering; then non-technical MVP founders; selective business automation buyers |
| Markets and language | Approximately 60% US, 20% UK, 20% Canada; British English |
| Primary service landing page | `https://apexstack.dev/services/ai-development` (provisional focus for the primary buyer; not a claim that it receives the most traffic) |
| Primary conversion | Successful `/contact` service enquiry; qualification, booking, proposal and revenue require separate evidence |
| Public entry offers | Product Blueprint from US$1,000; Launch Sprint from US$2,500, subject to written scope |
| Project timezone | Asia/Kolkata, based on the owner's current workspace context |
| Content source and validation | `src/data/`; `npm run check` |
| Search Console property | `sc-domain:apexstack.dev` is the intended property; current API access remains blocked by quota-project permission according to the 2026-09-29 automation record |
| Schedule | Reuse the active ApexStack daily heartbeat; do not create a duplicate daily/weekly/monthly writer |
| Optional AI text files | Do not create `llms.txt`, `llms-full.txt` or `ai.txt` without a demonstrated consumer/use case, per the owner's 2026-09-30 instruction |

## Capability inventory

| Capability | State | Evidence and next action |
| --- | --- | --- |
| Repository, Node dependencies and production build | verified | Clean `main` at start; lockfile present; `npm run check` passed 2026-09-30 |
| Canonical, robots and sitemap routes | verified | Generated `/contact` self-canonical; live `/contact`, `/pricing`, `/robots.txt` and `/sitemap.xml` returned HTTP 200 before this change |
| GitHub-to-Vercel deployment | verified previously | Established `main` route and live success in prior automation records; verify this run's commit separately |
| Contact form integration | partial | Resend and Turnstile code present; provider-accepted notification returns success, optional visitor confirmation can fail; recent inbox delivery is not verified. Do not submit a real enquiry as a test. |
| Analytics events | partial | `Blog CTA Click` and `Contact Enquiry Sent` are wired in code; observed production event totals and deduplication are unavailable |
| Search Console | needs_owner_action | Prior read returned HTTP 403 for quota-project permission; no fresh 28-day comparison is claimed |
| Bing and IndexNow | missing | No verified existing credentials or key/integration; do not submit URLs |
| DreamLaunch source check | unavailable | Built-in Browser Use denies the origin despite the visible default permission; do not use an alternate route until normal access is restored |

## First work item

`AS-GROWTH-2026-09-30-CONTACT-TRUST`: Correct unsupported contact-process promises and the inaccurate confirmation-email success claim on the existing `/contact` URL. Expected mechanism: more accurate buyer expectations and fewer misleading post-submit messages. Primary future measure: submitted service-aligned enquiries from organic journeys, with originating page where available. Guardrail: contact error events and form availability. Review after a complete 28-day observation window, not from a same-day ranking movement. Roll back only if the contact route, form, metadata or conversion path regresses.

## Next queue

1. Obtain recent real enquiry-delivery evidence and provider debug-mode event evidence; do not infer qualified leads from code wiring.
2. Resolve Search Console quota-project access and compare complete 28-day query/page/country windows.
3. Review unsupported capabilities and delivery guarantees on service/contact pages against actual ApexStack evidence.
4. Audit historical blog cost and supplier claims independently of DreamLaunch.
5. Resume DreamLaunch only after normal browser access is explicitly restored; a source post can justify only a distinct new ApexStack article that passes all publication gates.
