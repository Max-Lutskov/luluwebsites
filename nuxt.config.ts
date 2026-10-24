// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts'],

  typescript: {
    strict: true
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'theme-color', content: '#0d1530' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },

  // Every page is plain HTML + CSS with no JavaScript at all: the site has nothing interactive,
  // and the contact form is a normal POST to functions/api/contact.ts (Cloudflare Pages Function).
  // A zero-JS page is also the best proof for the "your site is slow" emails.
  routeRules: {
    '/**': { noScripts: true }
  },

  // Static output for Cloudflare Pages (build command `npm run generate`, output `.output/public`).
  // The preset is pinned so a build on Pages doesn't switch to cloudflare-pages-static and write
  // its own _headers/_redirects over ours in public/
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/thanks/', '/not-sent/', '/not-found/'],
      crawlLinks: false
    }
  },

  fonts: {
    defaults: {
      subsets: ['latin'],
      styles: ['normal']
    },
    // Preloaded: the headline is the largest thing on the first screen (LCP), don't wait for the CSS to find it
    families: [
      { name: 'Bricolage Grotesque', provider: 'google', weights: [700], preload: true },
      { name: 'Public Sans', provider: 'google', weights: [400, 600], preload: true }
    ]
  }
})
