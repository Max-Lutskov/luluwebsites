// Fixes to the <head> of the prerendered pages that Nuxt has no option for.
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('render:html', (html, { event }) => {
    // With noScripts, Nuxt adds a <script type="speculationrules"> that lists every route of the
    // site, /labs/ included. /labs/ must not be mentioned on the homepage or /uk/ (see CLAUDE.md),
    // and the pages promise "no scripts", so the tag is cut out.
    html.head = html.head.map((chunk) =>
      chunk.replace(/<script type="speculationrules">[\s\S]*?<\/script>/g, '')
    )

    // @nuxt/fonts preloads Bricolage Grotesque and Instrument Sans on every page. /uk/ renders in
    // Onest (the other two have no Cyrillic), so there the preloads fetch two fonts nobody sees
    // and the headline font comes late. Swap them for the Onest files.
    if (event.path.startsWith('/uk')) {
      const onest = new Set<string>()
      for (const m of html.head.join('').matchAll(/@font-face\{font-family:Onest;[^}]*?url\(([^)]+\.woff2)\)/g)) {
        if (m[1]) onest.add(m[1])
      }
      if (onest.size) {
        html.head = html.head.map((chunk) => chunk.replace(/<link rel="preload" as="font"[^>]*>/g, ''))
        html.head.push(
          [...onest].map((url) => `<link rel="preload" as="font" type="font/woff2" crossorigin href="${url}">`).join('')
        )
      }
    }
  })
})
