<script setup lang="ts">
import { cases } from '~/data/labs'
import { site } from '~/data/site'

// Not for the cold-email audience: no link from the homepage, not in the sitemap, noindex
useSeoMeta({
  title: `Labs | ${site.name}`,
  description: 'Products and tools built at LuLu Studio, beyond marketing websites.',
  robots: 'noindex'
})
</script>

<template>
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <p class="label">Labs</p>
        <h1>Products and tools</h1>
        <p class="lead">
          Beyond marketing websites: the software we build to run our own work, and demo projects.
          Each case says what it does, what was hard and how it was solved.
        </p>
      </div>

      <ul class="cases">
        <li v-for="item in cases" :key="item.slug" class="card case">
          <p><span class="pill pill--accent">{{ item.kind }}</span></p>
          <h2>{{ item.name }}</h2>
          <p class="case__summary">{{ item.summary }}</p>
          <ul class="case__stack" aria-label="Stack">
            <li v-for="tech in item.stack" :key="tech" class="pill">{{ tech }}</li>
          </ul>
          <div class="case__actions">
            <a class="button" :href="`/labs/${item.slug}/`">
              Read the case
              <AppIcon name="arrow-right" :size="18" />
            </a>
            <a
              v-for="link in item.links"
              :key="link.url"
              class="button button--outline"
              :href="link.url"
              target="_blank"
              rel="noopener"
            >
              <AppIcon :name="link.icon" :size="18" />
              {{ link.label }}
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: clamp(40px, 5.5vw, 72px);
}

.cases {
  display: grid;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.case {
  display: grid;
  gap: 1rem;
  justify-items: start;
  padding: clamp(20px, 3vw, 40px);
}

.case h2 {
  font-size: clamp(32px, 4vw, 48px);
}

.case__summary {
  max-width: 44rem;
  color: var(--text-2);
  font-size: 19px;
}

.case__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 0.5rem;
  padding: 0;
  list-style: none;
}

.case__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
