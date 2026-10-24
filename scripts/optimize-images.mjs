// Turns the PNG screenshots in screenshots/ into WebP variants for srcset:
// screenshots/ohio-desktop.png → public/images/work/ohio-desktop-480.webp etc.
// Run after scripts/screenshots.py: `npm run images`. Commit the .webp files.
// The widths must match shotWidths in app/utils/img.ts.
import { mkdir, readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'

const SRC = 'screenshots'
const OUT = 'public/images/work'

const WIDTHS = {
  desktop: [480, 720, 960, 1440],
  phone: [240, 390, 780]
}

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

let made = 0
for (const name of await readdir(SRC)) {
  const match = name.match(/^(.+?)-(desktop|phone)\.png$/)
  if (!match) continue
  const [, slug, view] = match
  for (const w of WIDTHS[view]) {
    await sharp(join(SRC, name))
      .resize({ width: w })
      .webp({ quality: 72, effort: 6 })
      .toFile(join(OUT, `${slug}-${view}-${w}.webp`))
    made++
  }
}
console.log(`WebP: ${made} files`)
