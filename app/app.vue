<script setup lang="ts">
// Imported here rather than in nuxt.config `css`, so Nuxt inlines it into the HTML
// and the browser doesn't wait for a separate CSS file before the first paint
import '~/assets/css/main.css'

// /uk/ is the Ukrainian page for local clients: its own header, footer and a Cyrillic font
const isUk = computed(() => useRoute().path.startsWith('/uk'))
</script>

<template>
  <div :class="{ uk: isUk }">
    <UkHeader v-if="isUk" />
    <SiteHeader v-else />
    <main>
      <NuxtPage />
    </main>
    <UkFooter v-if="isUk" />
    <SiteFooter v-else />
  </div>
</template>
