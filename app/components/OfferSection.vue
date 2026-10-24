<script setup lang="ts">
import { offer, steps } from '~/data/site'
</script>

<template>
  <section class="section on-paper" aria-labelledby="offer-title">
    <div class="wrap offer">
      <h2 id="offer-title" class="offer__title">What you get</h2>
      <ul class="offer__list">
        <li v-for="item in offer" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section id="how" class="section on-white" aria-labelledby="how-title">
    <div class="wrap">
      <h2 id="how-title">How it works</h2>
      <ol class="how">
        <li v-for="(step, i) in steps" :key="step.title">
          <span class="how__num" aria-hidden="true">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.offer {
  display: grid;
  gap: 2.5rem 4rem;
}

.offer__list {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.offer__list li {
  display: grid;
  gap: 0.25rem 2rem;
  padding-block: 1.4rem;
  border-top: 1px solid var(--rule);
}

.offer__list li:last-child {
  border-bottom: 1px solid var(--rule);
}

.offer__list p,
.how p {
  color: var(--fg-muted);
}

.how {
  position: relative;
  display: grid;
  gap: 2.75rem;
  margin: 3rem 0 0;
  padding: 0;
  list-style: none;
}

.how li {
  position: relative;
  display: grid;
  gap: 0.5rem;
  max-width: 24rem;
}

.how__num {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  margin-bottom: 0.75rem;
  border-radius: 50%;
  background: var(--signal);
  color: var(--ink);
  font: 700 1.5rem/1 var(--font-display);
}

@media (min-width: 760px) {
  .offer__list li {
    grid-template-columns: 15rem 1fr;
    align-items: baseline;
  }
}

@media (min-width: 960px) {
  .offer {
    grid-template-columns: 1fr 1.75fr;
    align-items: start;
  }

  /* The heading stays in view while the list scrolls past */
  .offer__title {
    position: sticky;
    top: 2rem;
  }

  .how {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  /* The three steps sit on one line: it's a sequence */
  .how::before {
    position: absolute;
    top: 1.625rem;
    right: 10%;
    left: 1.625rem;
    height: 2px;
    background: var(--ink);
    content: '';
  }
}
</style>
