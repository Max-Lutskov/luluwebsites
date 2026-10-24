// Cloudflare Pages Function: POST /api/contact.
// The contact form posts here as a plain HTML form (no JS on the site). The message goes to Max's
// Telegram, then the visitor is redirected to /thanks/ or /not-sent/.
// Secrets (Pages → Settings → Variables and Secrets): TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
// Locally: put them in .dev.vars and run `npm run generate && npm run preview`.

interface Env {
  TELEGRAM_BOT_TOKEN?: string
  TELEGRAM_CHAT_ID?: string
}

const clean = (value: FormDataEntryValue | null, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const redirect = (request: Request, path: string) =>
  Response.redirect(new URL(path, request.url).toString(), 303)

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return redirect(request, '/not-sent/')
  }

  // A bot filled in the hidden field: pretend it worked and send nothing
  if (clean(form.get('fax'), 200)) return redirect(request, '/thanks/')

  const name = clean(form.get('name'), 100)
  const email = clean(form.get('email'), 200)
  const website = clean(form.get('website'), 200)
  const message = clean(form.get('message'), 3000)

  // The browser checks these too (required, type=email); this only stops hand-made requests
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return redirect(request, '/not-sent/')
  }

  const country = (request as Request & { cf?: { country?: string } }).cf?.country
  const lines = ['<b>New message from lulustudio.dev</b>', `Name: ${escapeHtml(name)}`, `Email: ${escapeHtml(email)}`]
  if (website) lines.push(`Website: ${escapeHtml(website)}`)
  if (country) lines.push(`Country: ${country}`)
  lines.push('', escapeHtml(message))
  const text = lines.join('\n')

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    console.error('[contact] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set, message:\n' + text)
    return redirect(request, '/not-sent/')
  }

  const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
      link_preview_options: { is_disabled: true }
    })
  }).catch((error: unknown) => {
    console.error('[contact] Telegram request failed', error)
    return null
  })

  if (!res?.ok) {
    if (res) console.error('[contact] Telegram answered', res.status, await res.text())
    return redirect(request, '/not-sent/')
  }
  return redirect(request, '/thanks/')
}
