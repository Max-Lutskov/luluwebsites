<script setup lang="ts">
import { works } from '~/data/site'
</script>

<template>
  <section id="work" class="section work on-night" aria-labelledby="work-title">
    <div class="wrap">
      <div class="work__head">
        <h2 id="work-title">Recent work</h2>
        <p class="lead">Real sites you can open and try on your phone. Scroll, and each one scrolls with you.</p>
      </div>

      <ul class="work__list">
        <li v-for="work in works" :key="work.slug" class="project">
          <div class="project__text">
            <span class="chip project__kind">{{ work.kind }}</span>
            <h3>{{ work.name }}</h3>
            <p class="project__place">{{ work.place }}</p>
            <p>{{ work.text }}</p>
            <p class="project__link">
              <a :href="work.url" target="_blank" rel="noopener">Open {{ work.host }}</a>
            </p>
          </div>
          <div class="project__shots">
            <ScrollShot
              :slug="work.slug"
              view="desktop-tall"
              :host="work.host"
              :alt="`${work.name} homepage on a desktop screen`"
              sizes="(min-width: 960px) 680px, 92vw"
            />
            <ScrollShot
              class="project__phone"
              :slug="work.slug"
              view="phone"
              :alt="`${work.name} on a phone`"
              sizes="150px"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.work__head {
  display: grid;
  gap: 0 4rem;
  align-items: end;
}

.work__head .lead {
  margin-top: 1rem;
}

.work__list {
  display: grid;
  gap: clamp(5rem, 10vw, 8rem);
  margin: clamp(3rem, 7vw, 5rem) 0 0;
  padding: 0;
  list-style: none;
}

.project {
  display: grid;
  gap: 2.25rem;
  align-items: center;
}

.project__text {
  display: grid;
  gap: 0.6rem;
  max-width: 28rem;
}

.project__text h3 {
  font-size: clamp(1.875rem, 3.6vw, 2.5rem);
}

.project__kind {
  justify-self: start;
  margin-bottom: 0.25rem;
  color: var(--signal);
}

.project__place {
  color: var(--fg-muted);
  font-size: 1rem;
}

.project__link {
  margin-top: 0.5rem;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.project__shots {
  position: relative;
  padding-right: 2.75rem;
  padding-bottom: 2.25rem;
}

.project__phone {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 26%;
  max-width: 150px;
}

@media (min-width: 960px) {
  .work__head {
    grid-template-columns: 1fr 1.6fr;
  }

  .project {
    grid-template-columns: 1fr 1.75fr;
    gap: 4.5rem;
  }

  /* Every other project mirrors, so the page doesn't read as a list of identical rows */
  .project:nth-child(even) .project__text {
    order: 2;
  }

  .project:nth-child(even) .project__shots {
    padding-right: 0;
    padding-left: 2.75rem;
  }

  .project:nth-child(even) .project__phone {
    right: auto;
    left: 0;
  }

  .project:nth-child(even) {
    grid-template-columns: 1.75fr 1fr;
  }
}
</style>
