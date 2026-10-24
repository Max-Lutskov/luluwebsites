# CLAUDE.md — lulustudio.dev (studio website)

The site of **LuLu Studio**, a small web team run by Max Lutskov (Vinnytsia, Ukraine). Readers are owners of small US
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
- **A small team, not "just me"** (Max, 2026-10-24): "we" for the studio's work, "I" only for Max himself
  (the emails come from him, he is the client's contact). Don't invent team size, names or roles.
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

## Design (Max's spec, 2026-10-24; replaced the dark "Before → After" version)

- Tokens in `main.css`: navy #0d1530 (text, dark blocks, primary buttons), page #f3f2ee, cards #fff, borders
  #dedbd2 / #cfcbc0, text-2 #3b4260, muted #5a6178, on-navy #c9cee0, accent #ffb23f. **Accent only as a fill**
  (highlight behind "phone ring.", tags, contact block, "Tap to call"), never as text on a light background.
- Fonts: Bricolage Grotesque 700/800 (headings, -0.035em), Instrument Sans 400/500/600 (17px body),
  JetBrains Mono 500 (13px uppercase labels). Radii: cards 28, inputs 12, buttons pills. Touch targets ≥ 44px.
- Sections: header → hero (+ `PhoneIllustration.vue`, aria-hidden placeholder site) → facts strip → `#email` navy card
  → `#work` cards → "What every site gets" 3×2 → `#how` 01/02/03 → `#about` → `#contact` accent block → navy footer.
- **No photo of Max** (his choice): `#about` has a navy 4:5 monogram card in the photo slot.
- Icons: `AppIcon.vue`, inline Lucide shapes, stroke 1.75. No emoji.
- Motion: only the "New quote request" card fades in once; off with `prefers-reduced-motion`.
- Honeypot `fax` sits off-screen (`left: -9999px`), aria-hidden, tabindex -1.

## Later (not in v1)

- Demos on `demo.lulustudio.dev` instead of GitHub Pages (LeadForge `deploy.py`).
- `lulustudio.dev` in LeadForge's email signature (mind the one-link rule).
- Case studies as real US clients come in, with their permission.
