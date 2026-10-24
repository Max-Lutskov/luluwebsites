// All site copy and contact details. Everything here is prospect-facing English.
// No invented social proof: only facts Max has confirmed (see CLAUDE.md).

export const site = {
  name: 'LuLu Studio',
  url: 'https://lulustudio.dev',
  owner: 'Max Lutskov',
  email: 'max@lulustudio.dev',
  city: 'Vinnytsia',
  country: 'Ukraine',
  github: 'https://github.com/Max-Lutskov',
  title: 'LuLu Studio: websites for small businesses',
  description:
    'Max Lutskov builds fast, phone-friendly websites for small businesses: new sites and redesigns. If you got an email from max@lulustudio.dev, this is who sent it.'
}

/** The strip under the hero. Each one is a fact Max confirmed (2026-10-24) */
export const facts: { value: string; label: string }[] = [
  { value: '6 years', label: 'building websites' },
  { value: 'Free', label: 'concept homepage first' },
  // "Fixed price before work starts": Max accepted this wording on 2026-10-24
  { value: 'Fixed price', label: 'agreed before work starts' },
  { value: 'In English', label: '7 hours ahead of New York' }
]

export interface Work {
  slug: string
  name: string
  /** Honest label: "Concept" = nobody commissioned it */
  kind: string
  niche: string
  location: string
  text: string
  url: string
  /** Address as shown in the browser bar */
  host: string
}

export const works: Work[] = [
  {
    slug: 'ohio',
    name: 'Ohio Transit Company',
    kind: 'Concept',
    niche: 'Trucking',
    location: 'Columbus, Ohio',
    text: 'A concept homepage built from the company’s own photos and text. It’s the kind of concept I send with my emails. The company didn’t commission it.',
    url: 'https://max-lutskov.github.io/Ohio-Demo/',
    host: 'max-lutskov.github.io/Ohio-Demo'
  },
  {
    slug: 'protskov',
    name: 'Protskov Bud',
    kind: 'Client site',
    niche: 'Building materials and equipment rental',
    location: 'Vinnytsia, Ukraine',
    text: 'Prices, machines and photos straight from the owner. A big phone number to tap, and a request form that goes to his phone. The site is in Ukrainian.',
    url: 'https://protskovbud.vn.ua/',
    host: 'protskovbud.vn.ua'
  },
  {
    slug: 'sadovi',
    name: 'Sadovi Mrii',
    kind: 'Redesign',
    niche: 'Landscaping',
    location: 'Kyiv, Ukraine',
    text: 'A rebuild of the company’s old site: their own project photos, the full price list in the open and a quick request form. The site is in Ukrainian.',
    url: 'https://sadovi-mrii.com.ua/',
    host: 'sadovi-mrii.com.ua'
  }
]

export const offer: { icon: IconName; title: string; text: string }[] = [
  { icon: 'zap', title: 'Fast on a phone', text: 'Built to load quickly on mobile data, not only on office Wi-Fi.' },
  { icon: 'phone', title: 'Easy to call you', text: 'Your phone number is one tap away on every screen.' },
  { icon: 'form', title: 'Quote and request forms', text: 'Short forms that send the request straight to you.' },
  { icon: 'camera', title: 'Your photos, your words', text: 'Real trucks, real jobs, real people. No stock photos.' },
  { icon: 'search', title: 'Ready for Google', text: 'Page titles, descriptions and your business details set up properly.' },
  { icon: 'refresh', title: 'New site or redesign', text: 'A site from scratch, or a rebuild of the one you have.' }
]

export const steps: { title: string; text: string }[] = [
  { title: 'I look at your current site', text: 'What’s broken, slow or hard to use on a phone.' },
  { title: 'I build a free concept', text: 'A new homepage made from your own photos and text, so you see the result before you spend anything.' },
  { title: 'You decide', text: 'If you want the full site, I send you a fixed price before any work starts. If not, that’s the end of it.' }
]

export type IconName =
  | 'zap' | 'phone' | 'form' | 'camera' | 'search' | 'refresh'
  | 'check' | 'pin' | 'arrow-up-right' | 'arrow-right' | 'mail' | 'github'
