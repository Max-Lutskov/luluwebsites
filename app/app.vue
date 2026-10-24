<script setup lang="ts">
// Imported here rather than in nuxt.config `css`, so Nuxt inlines it into the HTML
// and the browser doesn't wait for a separate CSS file before the first paint
import '~/assets/css/main.css'
</script>

<template>
  <SiteHeader />
  <main>
    <NuxtPage />
  </main>
  <SiteFooter />
</template>
