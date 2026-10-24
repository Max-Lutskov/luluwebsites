<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="about" class="section about-section" aria-labelledby="about-title">
    <div class="wrap about">
      <!-- No photo (Max's choice, 2026-10-24): a monogram card holds the 4:5 slot -->
      <div class="about__portrait" aria-hidden="true">
        <span class="about__mono">M</span>
        <span class="label about__place">{{ site.city }}, {{ site.country }}</span>
      </div>

      <div class="about__text">
        <h2 id="about-title">Hi, I’m Max.</h2>
        <p class="about__big">
          LuLu Studio is just me. The person you email is the person who builds your site.
        </p>
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
          <a class="pill about__pill" :href="`mailto:${site.email}`">
            <AppIcon name="mail" :size="18" />{{ site.email }}
          </a>
          <a class="pill about__pill" :href="site.github" target="_blank" rel="noopener">
            <AppIcon name="github" :size="18" />My code on GitHub
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding-top: 0;
}

.about {
  display: grid;
  gap: 2.5rem 4.5rem;
  align-items: center;
}

.about__portrait {
  position: relative;
  display: grid;
  place-items: center;
  width: min(100%, 420px);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--r-card);
  background: var(--navy);
}

.about__mono {
  font: 800 clamp(160px, 22vw, 260px) / 1 var(--font-display);
  letter-spacing: -0.06em;
  color: var(--accent);
}

.about__place {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: var(--on-navy);
}

.about__text {
  display: grid;
  gap: 1.1rem;
  max-width: 38rem;
  color: var(--text-2);
}

.about__text h2 {
  color: var(--navy);
}

.about__big {
  color: var(--navy);
  font: 700 clamp(22px, 2.4vw, 28px) / 1.25 var(--font-display);
  letter-spacing: -0.02em;
}

.about__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.about__pill {
  min-height: 44px;
  padding-inline: 1rem;
  color: var(--navy);
  font-size: 15px;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.about__pill:hover {
  border-color: var(--navy);
}

@media (min-width: 900px) {
  .about {
    grid-template-columns: 5fr 7fr;
  }
}
</style>
