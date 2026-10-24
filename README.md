# lulustudio.dev

The LuLu Studio website: one page, Nuxt 4, static, zero JavaScript, hosted on Cloudflare Pages.
The contact form is a plain HTML POST to a Pages Function (`functions/api/contact.ts`) that sends the message to Telegram.

## Run

```powershell
npm.cmd install
npm.cmd run dev        # http://localhost:3000 (the form needs the Pages runtime, see preview)
npm.cmd run generate   # static build into .output/public
npm.cmd run preview    # wrangler pages dev: built site + the form function, http://localhost:8788
```

For the form locally: copy `.dev.vars.example` to `.dev.vars` and fill in the bot token and chat id.
Without them the function logs the message and sends the visitor to `/not-sent/`.

## Content

All copy, projects and contacts: `app/data/site.ts`.

New screenshots of the work:

```powershell
D:\LuLu-websites\backend\.venv\Scripts\python.exe scripts\screenshots.py   # PNG into screenshots/ (git-ignored)
npm.cmd run images                                                           # WebP into public/images/work/
```

A new project needs its slug in `SITES` (`scripts/screenshots.py`) and an entry in `works` (`app/data/site.ts`).

The link preview image `public/og.png` comes from `scripts/og.html` (1200x630 screenshot).

## Deploy to Cloudflare Pages (one-time setup)

1. Push this repo to GitHub (e.g. `Max-Lutskov/lulustudio`).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: `npm run generate`
   - Build output directory: `.output/public`
   - Node version comes from `.nvmrc` (22).
4. **Settings → Variables and Secrets** (Production), both as *Secret*:
   - `TELEGRAM_BOT_TOKEN`: from @BotFather
   - `TELEGRAM_CHAT_ID`: write to the bot, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and take `chat.id`

   Then **Deployments → Retry deployment** so the function picks them up.
5. **Custom domains → Set up a custom domain**: `lulustudio.dev`, then again `www.lulustudio.dev`.
   Cloudflare adds the CNAME records itself. **Don't touch the mail records** (MX `mx.zoho.eu`/`mx2`/`mx3`,
   SPF TXT, `zmail._domainkey`, `_dmarc`, `zoho-verification`). If Cloudflare offers to delete conflicting
   records, there must be none for the root and `www`; cancel if it lists MX or TXT.
6. www → root redirect: zone `lulustudio.dev` → **Rules → Redirect Rules → Create from template
   "Redirect from WWW to root"** (301, keep the path and query).
7. Analytics: Pages project → **Metrics → Web Analytics → Enable** (cookieless, the privacy note in the footer counts on it).
8. Check:
   - `https://lulustudio.dev/` opens, `https://www.lulustudio.dev/` redirects to it;
   - send a test message through the form, it arrives in Telegram and the page shows "Message sent";
   - mail still works: send an email to max@lulustudio.dev and reply from it.

After that every push to `main` deploys automatically; other branches get preview URLs.
