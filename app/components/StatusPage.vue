<script setup lang="ts">
// Where the contact form lands after functions/api/contact.ts: /thanks/ or /not-sent/
const props = defineProps<{ title: string }>()

useSeoMeta({ title: () => `${props.title} | LuLu Studio`, robots: 'noindex' })
</script>

<template>
  <section class="section">
    <div class="wrap status">
      <h1>{{ title }}</h1>
      <div class="status__body">
        <slot />
      </div>
      <a href="/" class="button button--plain">Back to the homepage</a>
    </div>
  </section>
</template>

<style scoped>
.status {
  display: grid;
  gap: 1.25rem;
  justify-items: start;
  min-height: 50vh;
  align-content: center;
}

h1 {
  font-size: clamp(2.25rem, 6vw, 3.5rem);
}

.status__body {
  display: grid;
  gap: 0.75rem;
  max-width: 36rem;
  margin-bottom: 1rem;
  color: var(--muted);
  font-size: 1.1875rem;
}
</style>
