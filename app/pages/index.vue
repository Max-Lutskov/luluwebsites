<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: site.title,
  description: site.description,
  ogTitle: site.title,
  ogDescription: site.description,
  ogType: 'website',
  ogUrl: `${site.url}/`,
  ogImage: `${site.url}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image'
})

useHead({
  // The same pages also answer on *.pages.dev: point search engines at the real domain
  link: [{ rel: 'canonical', href: `${site.url}/` }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: site.name,
      url: `${site.url}/`,
      email: site.email,
      description: site.description,
      image: `${site.url}/og.png`,
      address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'UA' },
      areaServed: 'US',
      founder: { '@type': 'Person', name: site.owner, sameAs: [site.github] }
    })
  }]
})
</script>

<template>
  <HeroSection />
  <WorkSection />
  <OfferSection />
  <AboutSection />
  <ContactSection />
</template>
