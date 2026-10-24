<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="about" class="section on-night" aria-labelledby="about-title">
    <div class="wrap about">
      <h2 id="about-title" class="visually-hidden">About me</h2>
      <p class="about__big">LuLu Studio is just me. The person you email is the person who builds your site.</p>
      <div class="about__text">
        <p>
          I’m {{ site.owner }}, a web developer in {{ site.city }}, {{ site.country }}.
          I’ve been building websites for six years. No salespeople and no account managers:
          you talk to me from the first email to launch day.
        </p>
        <p>
          I work in English. {{ site.country }} is 7 hours ahead of New York,
          so your morning is my afternoon.
        </p>
        <p class="about__links">
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
          <a :href="site.github" target="_blank" rel="noopener">My code on GitHub</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  gap: 2.5rem 4rem;
}

.about__big {
  max-width: 20ch;
  font: 700 clamp(2.25rem, 5.5vw, 3.75rem) / 1.05 var(--font-display);
  letter-spacing: -0.03em;
  text-wrap: balance;
}

.about__text {
  display: grid;
  gap: 1rem;
  align-content: end;
  max-width: 36rem;
  color: var(--fg-muted);
  font-size: 1.1875rem;
}

.about__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.75rem;
  margin-top: 0.5rem;
  font-weight: 600;
}

@media (min-width: 960px) {
  .about {
    grid-template-columns: 1.4fr 1fr;
  }
}
</style>
