// Runs after `nuxt generate` (see package.json "generate").
// Nuxt writes 404.html and 200.html as empty SPA shells that need JavaScript, and the site ships none.
// Cloudflare Pages serves 404.html for unknown addresses, so it becomes the prerendered /not-found/ page.
import { copyFile, rm } from 'node:fs/promises'

const OUT = '.output/public'

await copyFile(`${OUT}/not-found/index.html`, `${OUT}/404.html`)
await rm(`${OUT}/200.html`, { force: true })
console.log('404.html ← /not-found/')
