<script setup lang="ts">
import { uk } from '~/data/uk'

useSeoMeta({ title: 'Не вдалося надіслати | LuLu Studio', robots: 'noindex' })
useHead({ htmlAttrs: { lang: 'uk' } })
</script>

<template>
  <section class="section">
    <div class="wrap status">
      <h1>Не вдалося надіслати</h1>
      <p>
        Щось пішло не так, і повідомлення до нас не дійшло. Напишіть, будь ласка, у Telegram:
        <a :href="uk.telegramUrl" rel="noopener">@{{ uk.telegram }}</a>.
      </p>
      <a href="/uk/#contact" class="button">Спробувати ще раз</a>
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
