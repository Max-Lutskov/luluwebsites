<script setup lang="ts">
import { steps } from '~/data/site'
</script>

<template>
  <section id="how" class="section" aria-labelledby="how-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="how-title">How it works</h2>
      </div>
      <ol class="how">
        <li v-for="(step, i) in steps" :key="step.title">
          <span class="how__num" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how {
  display: grid;
  gap: 3rem 2.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.how li {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 3px solid var(--navy);
}

/* The last step is the outcome */
.how li:last-child {
  border-top-color: var(--accent);
}

.how__num {
  margin-bottom: 0.5rem;
  font: 800 72px/0.9 var(--font-display);
  letter-spacing: -0.04em;
}

.how h3 {
  font-size: 26px;
}

.how p {
  max-width: 24rem;
  color: var(--muted);
}

@media (min-width: 860px) {
  .how {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
