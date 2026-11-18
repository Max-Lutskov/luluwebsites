# CLAUDE.md — lulustudio.dev (studio website)

The site of **LuLu Studio**, a small web team run by Max Lutskov (Vinnytsia, Ukraine).

**Three audiences, three parts of the site. They don't share copy, and a rule for one doesn't apply to the others:**

| Part | Reader | Language | Indexed | Linked from |
|---|---|---|---|---|
| `/` (homepage) | Owners of small US businesses who got a cold email | English | yes | the emails |
| `/uk/` | Ukrainian small-business owners (Threads, word of mouth) | Ukrainian | yes | Max sends the link himself |
| `/labs/` | People who hire developers | English | **noindex** | nothing on the site |

The homepage reader got a cold email from `max@lulustudio.dev` (sent by LeadForge, `D:\LuLu-websites`, see its
CLAUDE.md) and typed the domain to check who wrote. In 10 seconds they must see a real person doing real, good work,
and know what to do next (reply to the email, or use the form). Everything below that isn't under "/uk/" or "/labs/"
describes the homepage.

The original brief: `D:\LuLu-websites\docs\lulustudio-site-brief.md`.

Talk to Max in **Ukrainian**. Code, comments and commits are in **English**. Site copy is in English, except `/uk/`,
which is in Ukrainian.

## Stack

- Nuxt 4 + Vue 3 + TypeScript (strict), `nuxt generate`, plain CSS with tokens (`app/assets/css/main.css`). No UI kit.
- **Zero JavaScript on the pages** (`routeRules: { '/**': { noScripts: true } }`). Keep it that way; it's part of the pitch.
  The form is a plain POST to `functions/api/contact.ts` (Cloudflare Pages Function → Telegram) → redirect to `/thanks/` or `/not-sent/`.
- Fonts via `@nuxt/fonts` (self-hosted), families listed in `nuxt.config.ts`. See Design; `/uk/` uses another font.
- Pages are prerendered from an explicit list (`nitro.prerender.routes`, `crawlLinks: false`). **A new page that isn't
  added to that list doesn't get built.**
- `scripts/after-generate.mjs` copies `/not-found/` to `404.html` and removes the SPA `200.html`.
- Hosting: Cloudflare Pages project `lulustudio` (direct upload, no git builds): `npm run deploy` with `.env` loaded. Dashboard steps in README.
- Skills in `.claude/skills/` (copied from Max's other projects). Use them.
- Windows: `npm.cmd` / `npx.cmd` in PowerShell.

## Content of the homepage (confirmed by Max, 2026-10-24)

All in `app/data/site.ts`.
- Name: LuLu Studio. Email shown: `max@lulustudio.dev` (outreach replies go there too). No photo of Max (his choice).
- Services: new sites from scratch and redesigns. 6 years building websites. Don't mention his SaaS job.
- **A small team, not "just me"** (Max, 2026-10-24): "we" for the studio's work, "I" only for Max himself
  (the emails come from him, he is the client's contact). Don't invent team size, names or roles.
- Work on the homepage, exactly these three, labelled honestly (`/uk/` has its own list, see below):
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

## /uk/: the Ukrainian page (Max, 2026-11-17)

Not a translation of the homepage. A separate page for a separate reader: a Ukrainian small-business owner who asked
Max for a portfolio in Threads or heard about him from someone. They didn't get a cold email, so there is no `#email`
block, no phone illustration and no "who wrote to me" framing. They want to see working sites, a price and how to write.

- Files: copy in `app/data/uk.ts`, page `app/pages/uk/index.vue`, `uk/thanks.vue`, `uk/not-sent.vue`,
  `UkHeader.vue`, `UkFooter.vue`. `app.vue` switches header, footer and the `.uk` class by `path.startsWith('/uk')`.
  The page sets `lang="uk"` and its own canonical.
- **Don't write «лендінг»** (in copy, titles, meta, alt). The offer is one thing: «сайт до 7 сторінок» for $200.
  Max used to call it "landing page $200" and dropped it on purpose: he does up to 7 pages for that price and sells it
  as one offer, not split into "landing" and "multi-page". The word also puts him next to the "landing for free, pay
  only for hosting" offers that he can't and doesn't want to beat on price. Say «сайт» or «сайт для бізнесу».
- **No price in the `h1`.** The headline is the position (a site made for your business, not a subscription
  template), the price comes after it. Competitors in Ukraine are much cheaper, so a headline that leads with a number
  starts a price comparison that Max loses. The price is not hidden: it stays in the facts strip, the `#prices` block
  and the meta description. Don't remove it from those, and don't move it up into the headline or the hero lead.
- Prices (Max, 2026-11-17): site up to 7 pages $200; online shop «від $600», exact price after a talk, fixed before
  work starts. Don't add packages, discounts or a subscription.
- **Font: Onest** for both headings and text. Bricolage Grotesque and Instrument Sans have no Cyrillic, so with
  them Ukrainian text falls back to a system font. The `.uk` class in `main.css` overrides `--font-display` and
  `--font-text`; Onest is loaded with the `cyrillic` subset in `nuxt.config.ts`. Don't "unify" the fonts with the
  homepage, and don't add a font to `/uk/` without checking it has Cyrillic.
- Work on `/uk/`: Процков Буд, Солодкі букети (solodki-buketi.vn.ua), Садові Мрії. **No Ohio Transit concept here**
  (Max's choice). Screenshots are shared with the homepage by slug (`utils/img.ts`).
- The last card is **North Quay Leather, «Демо-магазин»** (slug `nql`): a demo shop with an invented brand, not a
  client. Never label it «Сайт клієнта»; the text says the brand is invented and nothing is sold. It has no
  `location` (the field is optional). The link goes to the Ukrainian version of the live demo, not to `/labs/`.
- Contact: Telegram `@Lutskov` first, the form second. The form is the same POST to `/api/contact` with a hidden
  `lang=uk`, which makes the function redirect to `/uk/thanks/` or `/uk/not-sent/`. Don't drop that field.
- "We" for the studio, same as the homepage. Domains: Max registers them and hands them over to the client's account
  («Сайт і домен ваші»). Don't promise more than that.
- All hard rules apply: zero JavaScript, no invented social proof, no testimonials, performance numbers.

## /labs/: developer portfolio (Max, 2026-11-17)

Case studies of products and tools, for people who hire developers (a job search, a contract). It shows engineering,
not marketing sites. The homepage reader must not land here: a cold-email recipient who sees "Python, FastAPI,
outreach pipeline" learns that the email was automated.

- **noindex, not in the sitemap, no link from `/` or `/uk/`** (header, footer, anywhere). Max sends the link himself.
  Every new labs page needs `robots: 'noindex'` in `useSeoMeta`.
- English. "I"/"Max" is allowed here («Designed and built by Max»): the reader hires a person, not a studio.
- Files: `app/data/labs.ts` (cards and case copy), `app/pages/labs/index.vue`, one page per case in
  `app/pages/labs/`. A new case = an entry in `cases` + a page + a line in `nitro.prerender.routes`.
- **Every number comes from the real database or code**, with the source and date in `numbersNote`. Recount before
  changing one. No rounding up, no "about 400".
- Screenshots of LeadForge: company names, addresses and emails replaced with placeholders. The rule about not
  showing demo concepts of real companies applies here too.
- Cases: LeadForge (`leadforge.vue`) and North Quay Leather (`north-quay-leather.vue`, a headless Shopify demo shop,
  repo `C:\Users\maksl\Desktop\otl-demo\web`). The shop is a demo with an invented brand: say so, no client names,
  no results ("sales", "conversion"). Facts come from that repo's CLAUDE.md and plan.
- Case media live in `public/images/labs/` (`<case>-<name>-720.webp` / `-1440.webp` from 1440×900 screenshots; the
  checkout recording `nql-checkout.mp4` + poster). Video: native `controls`, no JavaScript, with width/height.
- Don't mention Max's day job or employer.
- Same design tokens and components as the homepage, and the same zero-JavaScript rule.

## Later (not in v1)

- Demos on `demo.lulustudio.dev` instead of GitHub Pages (LeadForge `deploy.py`).
- `lulustudio.dev` in LeadForge's email signature (mind the one-link rule).
- Case studies as real US clients come in, with their permission.
