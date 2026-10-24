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

## Deploy (Cloudflare Pages, project `lulustudio`)

The project was created with wrangler (direct upload), so Cloudflare does **not** build on git push. Deploy from this machine:

```powershell
npm.cmd run deploy     # generate + wrangler pages deploy → https://lulustudio.pages.dev
```

`.env` (git-ignored) holds `CLOUDFLARE_API_TOKEN` (Account → Cloudflare Pages: Edit) and `CLOUDFLARE_ACCOUNT_ID`;
wrangler reads them from the environment, so load them first (PowerShell):

```powershell
Get-Content .env | Where-Object { $_ -match '^[A-Z_]+=' } | ForEach-Object { $k, $v = $_ -split '=', 2; Set-Item "env:$k" $v }
```

### One-time setup in the Cloudflare dashboard

1. **Workers & Pages → lulustudio → Custom domains → Set up a custom domain**: `lulustudio.dev`, then `www.lulustudio.dev`.
   Cloudflare adds the CNAME records itself. **Don't touch the mail records** (MX `mx.zoho.eu`/`mx2`/`mx3`,
   SPF TXT, `zmail._domainkey`, `_dmarc`, `zoho-verification`); cancel if it offers to delete MX or TXT.
2. Zone `lulustudio.dev` → **Rules → Redirect Rules → Create from template "Redirect from WWW to root"** (301).
3. **lulustudio → Settings → Variables and Secrets** (Production), both as *Secret*, then run `npm.cmd run deploy` again:
   - `TELEGRAM_BOT_TOKEN`: from @BotFather
   - `TELEGRAM_CHAT_ID`: write to the bot, then open `https://api.telegram.org/bot<TOKEN>/getUpdates` and take `chat.id`
4. **lulustudio → Metrics → Web Analytics → Enable** (cookieless, the privacy note in the footer counts on it).
5. Check: `https://lulustudio.dev/` opens, `www` redirects, a test form message arrives in Telegram,
   and mail still works (send to max@lulustudio.dev and reply).
