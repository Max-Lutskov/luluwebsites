# CLAUDE.md — lulustudio.dev (studio website)

The site of **LuLu Studio**, Max Lutskov's one-person web studio (Vinnytsia, Ukraine). Readers are owners of small US
businesses who got a cold email from `max@lulustudio.dev` (sent by LeadForge, `D:\LuLu-websites`, see its CLAUDE.md)
and typed the domain to check who wrote. In 10 seconds they must see a real person doing real, good work, and know
what to do next (reply to the email, or use the form).

The original brief: `D:\LuLu-websites\docs\lulustudio-site-brief.md`.

Talk to Max in **Ukrainian**. Code, comments, commits and all site copy are in **English**.

## Stack

- Nuxt 4 + Vue 3 + TypeScript (strict), `nuxt generate`, plain CSS with tokens (`app/assets/css/main.css`). No UI kit.
- **Zero JavaScript on the pages** (`routeRules: { '/**': { noScripts: true } }`). Keep it that way; it's part of the pitch.
  The form is a plain POST to `functions/api/contact.ts` (Cloudflare Pages Function → Telegram) → redirect to `/thanks/` or `/not-sent/`.
- Fonts via `@nuxt/fonts` (self-hosted): Bricolage Grotesque 700 (headings), Public Sans 400/600 (text).
- `scripts/after-generate.mjs` copies `/not-found/` to `404.html` and removes the SPA `200.html`.
- Hosting: Cloudflare Pages project `lulustudio` (direct upload, no git builds): `npm run deploy` with `.env` loaded. Dashboard steps in README.
- Skills in `.claude/skills/` (copied from Max's other projects). Use them.
- Windows: `npm.cmd` / `npx.cmd` in PowerShell.

## Content (confirmed by Max, 2026-10-24)

All in `app/data/site.ts`.
- Name: LuLu Studio. Email shown: `max@lulustudio.dev` (outreach replies go there too). No photo of Max (his choice).
- Services: new sites from scratch and redesigns. 6 years building websites. Don't mention his SaaS job.
- Work, exactly these three, labelled honestly:
  - Ohio Transit Company: **Concept** (not commissioned), https://max-lutskov.github.io/Ohio-Demo/
  - Protskov Bud: **Client site**, https://protskovbud.vn.ua/ (repo `D:\Projects`)
  - Sadovi Mrii: **Redesign**, https://sadovi-mrii.com.ua/ (repo `D:\sadovi-mrii`; the client left, Max hosts it himself)
- No testimonials: Max has Ukrainian ones only, nothing relevant for US owners.
- **MOCK / not confirmed:** step 3 "fixed price before any work starts" (how Max talks about prices); legal entity
  (none in the footer until Max says).

## Hard rules

- **No invented social proof**: no fake testimonials, logos, "100+ projects", ratings, response-time promises.
- **Don't show LeadForge demo concepts of other real companies** (Gem City, Silvan...) without that company's OK.
- **Performance is the pitch**: Lighthouse mobile 95+ on all four, under 300 KB first load, WebP with width/height,
  no layout shift. Numbers in Design.
- Mobile first, 16px+ text, no horizontal scroll at 375px.
- Privacy: no Google Analytics, no cookies, no banner. Only Cloudflare Web Analytics (cookieless).
- The site is indexable (rank for "LuLu Studio"); `/thanks/`, `/not-sent/`, `/not-found/` are noindex.
- **Never touch the mail DNS records** on Cloudflare: MX `mx.zoho.eu`/`mx2`/`mx3`, SPF `v=spf1 include:zohomail.eu ~all`,
  DKIM `zmail._domainkey`, DMARC `_dmarc`, `zoho-verification` TXT. Only root + `www` records for the site.
- Secrets only in `.dev.vars` (git-ignored) and Pages settings. The repo may be public.

## Design ("Before → After", chosen by Max 2026-10-24; the first light/blue version looked like a template)

- Colours in `main.css`: `night` #0d1530 (dark sections), `signal` #ffd23f (the one accent: buttons, sweep line,
  "Got an email" band), `paper` #f4f5f8 / white for light sections. Sections set a theme with `.on-night` /
  `.on-paper` / `.on-white`; components use `--bg/--fg/--fg-muted/--rule`.
- Fonts: Bricolage Grotesque 700 (headings), Public Sans 400/600 (text), both preloaded.
- Motion, CSS only, all off with `prefers-reduced-motion`:
  - the one load animation, `BeforeAfter.vue`: a drawn broken homepage (an illustration, not a real company) is swept
    by the yellow line into the Ohio concept, then the phone slides in. Don't add other load animations;
  - `ScrollShot.vue`: in "Recent work" each desktop frame scrolls its site with the page (scroll-driven animation,
    `overflow: clip` + `min-height: 0` on the screen are required). Browsers without it show the top of the page.
- Numbers only in "How it works" (a real sequence). No ALL-CAPS labels.
- Performance now: Lighthouse mobile 99/100/100/100, CLS 0. Lighthouse counts 376 KB because it pulls the lazy work
  screenshots early; the first screen itself is ~125 KB (HTML, CSS, two fonts, two hero images).

## Later (not in v1)

- Demos on `demo.lulustudio.dev` instead of GitHub Pages (LeadForge `deploy.py`).
- `lulustudio.dev` in LeadForge's email signature (mind the one-link rule).
- Case studies as real US clients come in, with their permission.
