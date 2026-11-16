<script setup lang="ts">
useSeoMeta({ title: 'Повідомлення надіслано | LuLu Studio', robots: 'noindex' })
useHead({ htmlAttrs: { lang: 'uk' } })
</script>

<template>
  <section class="section">
    <div class="wrap status">
      <h1>Повідомлення надіслано</h1>
      <p>Дякуємо. Відповімо на email, який ви вказали.</p>
      <a href="/uk/" class="button">На головну</a>
    </div>
  </section>
</template>

<style scoped>
.status {
  display: grid;
  gap: 1.25rem;
  justify-items: start;
  align-content: center;
  min-height: 50vh;
}

h1 {
  font-size: clamp(2.25rem, 6vw, 3.5rem);
}

p {
  max-width: 36rem;
  color: var(--muted);
  font-size: 1.1875rem;
}
</style>
