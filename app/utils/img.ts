// Screenshots of the work: scripts/optimize-images.mjs makes <slug>-<view>-<width>.webp.
// The widths here must match WIDTHS in that script.

export const shotWidths = {
  'desktop': [480, 720, 960, 1440],
  'phone': [240, 390, 780],
  'desktop-tall': [720, 1080]
} as const

/** Pixel size of the originals (for width/height, so the layout doesn't shift).
 *  Tall shots are cut at TALL_HEIGHT in scripts/screenshots.py */
export const shotSize = {
  'desktop': { width: 1440, height: 900 },
  'phone': { width: 780, height: 1688 },
  'desktop-tall': { width: 1440, height: 2400 }
} as const

export type ShotView = keyof typeof shotWidths

export const shotSrc = (slug: string, view: ShotView, width: number) =>
  `/images/work/${slug}-${view}-${width}.webp`

export const shotSrcset = (slug: string, view: ShotView) =>
  shotWidths[view].map((w) => `${shotSrc(slug, view, w)} ${w}w`).join(', ')
