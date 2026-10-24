<script setup lang="ts">
import { offer } from '~/data/site'
</script>

<template>
  <section class="section offer" aria-labelledby="offer-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="offer-title">What every site gets</h2>
      </div>
      <!-- 1px dividers: the cells sit on a border-coloured background with a 1px gap -->
      <ul class="offer__grid">
        <li v-for="item in offer" :key="item.title">
          <span class="offer__icon"><AppIcon :name="item.icon" :size="22" /></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.offer {
  padding-bottom: 0;
}

.offer__grid {
  display: grid;
  gap: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--r-card);
  background: var(--border);
  list-style: none;
}

.offer__grid li {
  display: grid;
  align-content: start;
  gap: 0.6rem;
  padding: clamp(24px, 3vw, 36px);
  background: var(--card);
}

.offer__icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-bottom: 0.6rem;
  border-radius: 12px;
  background: var(--navy);
  color: var(--accent);
}

.offer__grid h3 {
  font-size: 24px;
}

.offer__grid p {
  color: var(--muted);
}

@media (min-width: 640px) {
  .offer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .offer__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
