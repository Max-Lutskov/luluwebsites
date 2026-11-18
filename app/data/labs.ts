// Copy for /labs/: case studies of products and tools, written for people who hire developers.
// Not linked from the homepage and noindex: the homepage is for small-business owners (see CLAUDE.md).
// Every number here comes from the LeadForge database or code. Recount before changing one:
// source and date are in `leadforge.numbersNote`.
// North Quay Leather: every fact is from the shop's repository (CLAUDE.md, docs/shopify-prototype-plan.md)
// and the live demo. It is a demo with an invented brand: never call it a client site.

export interface LabCase {
  slug: string
  name: string
  kind: string
  summary: string
  stack: string[]
}

/** Cards on /labs/. A new case = a new entry here + a page in app/pages/labs/ */
export const cases: LabCase[] = [
  {
    slug: 'leadforge',
    name: 'LeadForge',
    kind: 'Internal tool',
    summary:
      'An outreach pipeline: it finds small businesses with a broken website, builds each one a concept homepage from its own content, and emails the owner during their working hours.',
    stack: ['Python', 'FastAPI', 'Playwright', 'SQLite', 'Nuxt 4', 'Claude API']
  },
  {
    slug: 'north-quay-leather',
    name: 'North Quay Leather',
    kind: 'Demo store',
    summary:
      'A headless Shopify shop for an invented leather bag brand. The catalogue comes from the Storefront API, the cart works in the browser, and payment runs on Shopify Checkout with a test gateway. Nothing is for sale.',
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Shopify Storefront API', 'GitHub Pages']
  }
]

export const leadforge = {
  title: 'LeadForge',
  kind: 'Case study · Internal tool',
  lead:
    'An outreach pipeline. It finds small businesses with a broken website, builds each one a concept homepage from its own photos and text, and emails the owner during their working hours.',
  byline: 'Designed and built by Max at LuLu Studio.',
  stack: ['Python', 'FastAPI', 'Playwright', 'SQLite', 'Jinja2', 'Nuxt 4', 'TypeScript', 'Claude API'],

  numbers: [
    { value: '385', label: 'businesses found in 7 trades and 4 US states' },
    { value: '316', label: 'websites audited in a real browser' },
    { value: '45', label: 'concept homepages built and published' },
    { value: '193', label: 'automated tests' }
  ],
  numbersNote: 'Counted from the production database and the test suite on November 16, 2026, after four weeks of use.',

  problem: {
    title: 'The problem',
    text: [
      'The first prospect was handled by hand: find what is broken on the site, build a concept homepage from the company’s own content, write the email.',
      'LeadForge turns that into a pipeline where a person only makes two decisions: which trade and region to search, and whether an email is good enough to send.'
    ]
  },

  pipeline: [
    {
      title: 'Find',
      text: 'Google Places search by trade and city. Chains, closed businesses and repeat domains are dropped. A monthly counter keeps the search inside the free quota.'
    },
    {
      title: 'Audit',
      text: 'Chromium loads each site on a desktop and a phone screen. Rule-based checks give a score from 0 to 100: empty first screen, dead files, page weight, load time, no mobile layout, a phone number you can’t tap.'
    },
    {
      title: 'Qualify',
      text: 'A second score says if the business is alive and uses its site: recent reviews, opening hours, analytics, a booking widget. Only companies that pass both scores go further.'
    },
    {
      title: 'Build',
      text: 'The tool reads up to 5 pages of the site, rewrites the text into short marketing copy, converts photos to WebP, takes the brand colour from the logo and fills a template for that trade. The result is published and audited again before anyone sees it.'
    },
    {
      title: 'Write',
      text: 'A 60 to 90 word email built only from the audit findings: the concept link first, one problem, one question. A person reads and approves every email.'
    },
    {
      title: 'Send',
      text: 'One email at a time, on weekdays between 8:00 and 16:00 in the recipient’s time zone. Replies, bounces and opt-outs come back over IMAP and update the lead.'
    }
  ],

  hard: [
    {
      title: 'Generated copy can’t invent facts',
      text: 'Every number in the generated text is checked against the source site. If one is missing from the source, the model rewrites once. If it fails again, the concept is not built. Phone numbers are matched by digits, so a different format still passes.'
    },
    {
      title: 'Two scores, not one',
      text: 'A bad website alone is a weak signal: the business may be closed. Need (how bad the site is) and fit (is the business alive) are scored apart. An unknown signal lowers confidence and never rejects a lead. The weights live in one JSON file.'
    },
    {
      title: 'AI only where rules can’t see',
      text: 'Rules catch what is broken, not what looks dated. A vision model rates screenshots, but only for sites that load and have an email address. Verdicts are reused for 30 days and capped per month. On three real sites the small model gave the same verdicts as the large one at about 1/30 of the price, so the small one is the default.'
    },
    {
      title: 'Email that doesn’t burn the domain',
      text: 'Before a send: MX lookup, then a mailbox check cached for 30 days. Each sender address has its own ramp: it starts at 5 emails a day and the cap grows every week. A domain gets one first email, ever. Bounces and opt-outs go to a do-not-contact list automatically.'
    },
    {
      title: 'A new trade is one small JSON file',
      text: 'Templates share one base: styles, header, forms. A trade adds a preset of about 30 lines with its button text, form fields, colour and hints for the copy. No HTML changes.'
    },
    {
      title: 'Concepts that can’t be mistaken for the real site',
      text: 'Every concept is noindex, carries a “design concept, not the official website” banner, and its forms send nothing. Concepts with no reply are deleted after 60 days, and the public repository keeps no history of them.'
    }
  ],

  shots: [
    {
      file: 'lead',
      title: 'One lead',
      text: 'The audit score with the findings that go into the email, the published concept and the concept’s own audit.'
    },
    {
      file: 'leads',
      title: 'All leads',
      text: 'Every business with its audit score, fit tier, status, page weight and load time. The worst sites are on top.'
    },
    {
      file: 'campaigns',
      title: 'Campaigns',
      text: 'Searches by trade and region. The counters in the corner track paid API calls against the monthly caps.'
    },
    {
      file: 'messages',
      title: 'Sending',
      text: 'The send queue and the mailbox warm-up: today’s cap, the next send time and reply polling.'
    }
  ],
  shotsNote: 'Company names, addresses and emails in the screenshots are replaced with placeholders. The interface is in Ukrainian; its labels are translated to English for these screenshots.',

  testing: {
    title: 'Testing',
    text: 'The audit tests start two local websites, one broken and one healthy, and run the real Chromium audit against them. The scoring, fit and number-check code is pure functions, so they are tested without a network.'
  }
}

export const nql = {
  title: 'North Quay Leather',
  kind: 'Case study · Demo store',
  lead:
    'A demo shop for leather bags on headless Shopify. The brand is invented and nothing is for sale, but the whole path works: catalogue, product, cart and a test payment on Shopify Checkout.',
  byline: 'Designed and built by Max at LuLu Studio.',
  stack: [
    'Nuxt 4',
    'Vue 3',
    'TypeScript',
    'Shopify Storefront API',
    'Shopify Cart API',
    'Shopify Checkout',
    'CSS custom properties',
    'GitHub Pages'
  ],
  demoUrl: 'https://max-lutskov.github.io/north-quay-leather/',
  codeUrl: 'https://github.com/Max-Lutskov/north-quay-leather',

  about: {
    title: 'What it is and why',
    text: [
      'North Quay Leather is not a client site. It is a portfolio demo: the brand is invented, the orders are not real, and a “Demo store” strip on every page says so.',
      'It exists to show a shop that works from the first screen to the paid order. Product data comes from Shopify, the cart talks to the Cart API, and the checkout can be finished with a test card.'
    ]
  },

  built: [
    {
      title: 'Catalogue from Shopify',
      text: 'Products, collections, colour variants, prices and stock come from the Storefront API. There are 8 products. Collection pages sort and filter by colour in the browser, and the choice is kept in the URL.'
    },
    {
      title: 'Product page',
      text: 'A colour picker switches the photos and the variant that goes into the cart. Details and dimensions come from Shopify metafields.'
    },
    {
      title: 'Cart drawer',
      text: 'The Cart API is called straight from the browser. The drawer traps focus and closes on Esc. Every total is the one Shopify returned, nothing is recalculated on the page.'
    },
    {
      title: 'Checkout',
      text: 'The Checkout button hands the cart over to Shopify Checkout. It runs on a development store with a test payment gateway, so no money moves.'
    },
    {
      title: 'Design system',
      text: 'No UI library. Design tokens are CSS custom properties, fonts are self-hosted and photos are served as WebP.'
    },
    {
      title: 'Two languages',
      text: 'The interface is in English and Ukrainian.'
    }
  ],
  // Counted on the live /collections/all page
  numbersNote: 'The product count is from the live catalogue on November 19, 2026.',

  video: {
    title: 'The checkout, recorded',
    lead: 'The whole path in one take: product, cart, Shopify Checkout, test payment and the Thank you page. No sound.',
    hint: 'To go through the checkout yourself, open the live demo and add a bag to the cart. The cart shows the store password and the test card number.'
  },

  hard: [
    {
      title: 'No fake success',
      text: '“Added” shows only after the Cart API confirms the line. Shopify can answer with a warning, for example when a bag is sold out. That counts as a failure: the cart is refreshed to its real state and the button shows the error.'
    },
    {
      title: 'A static site with live data',
      text: 'The site is built with nuxt generate and hosted on GitHub Pages, with no server. The catalogue is read from Shopify at build time. If Shopify is unreachable the build fails, and the previous working version stays online.'
    },
    {
      title: 'A password in front of the checkout',
      text: 'A Shopify development store is always behind a password, and after the password Shopify opens its own home page, not the checkout. The cart explains this and links to the password page, so the next press of Checkout goes to payment.'
    },
    {
      title: 'URL state on prerendered pages',
      text: 'The chosen colour and sort order live in the query string. They are read after the page mounts and written with history.replaceState, because a router navigation during hydration of a static page lost the query.'
    }
  ],

  shots: [
    {
      file: 'home',
      title: 'Home',
      text: 'The first screen, with the “Demo store” strip above the header.'
    },
    {
      file: 'collection',
      title: 'Collection',
      text: 'All bags, with the colour filter and sorting.'
    },
    {
      file: 'product',
      title: 'Product',
      text: 'Colour picker, price and the add to cart button. Details, size and shipping open below.'
    },
    {
      file: 'cart',
      title: 'Cart',
      text: 'The drawer after adding a bag, with the note on how to test the checkout.'
    }
  ],
  shotsNote: 'Screenshots of the live demo, taken on November 19, 2026.'
}
