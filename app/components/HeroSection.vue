<script setup lang="ts">
import { facts, site } from '~/data/site'
</script>

<template>
  <section class="hero">
    <div class="wrap hero__grid">
      <div class="hero__text">
        <p class="label hero__label">One-person web studio · New sites &amp; redesigns</p>
        <h1>Websites that make your <mark>phone ring.</mark></h1>
        <p class="lead hero__lead">
          I’m {{ site.owner }}, and LuLu Studio is my one-person web studio.
          I build new sites from scratch and redesign old ones.
        </p>
        <div class="hero__actions">
          <a href="#contact" class="button">Get in touch</a>
          <a href="#work" class="button button--outline">See my work</a>
        </div>
        <p class="hero__email">
          <span class="hero__dot" aria-hidden="true" />
          <a href="#email">Got an email from me? Here’s what it was about <AppIcon name="arrow-right" :size="16" /></a>
        </p>
      </div>

      <PhoneIllustration />
    </div>
  </section>

  <section class="facts" aria-label="In short">
    <dl class="wrap facts__grid">
      <div v-for="fact in facts" :key="fact.value" class="facts__item">
        <dt>{{ fact.value }}</dt>
        <dd>{{ fact.label }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(48px, 7vw, 96px) clamp(56px, 7vw, 96px);
}

.hero__grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

.hero__label {
  margin-bottom: 1.5rem;
  color: var(--muted);
}

h1 {
  max-width: 11ch;
}

/* Accent as a fill behind the words, never as text colour */
mark {
  padding: 0 0.08em;
  border-radius: 0.12em;
  background: linear-gradient(transparent 52%, var(--accent) 52%, var(--accent) 94%, transparent 94%);
  color: inherit;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.hero__lead {
  margin-top: 1.75rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
}

.hero__email {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.75rem;
}

.hero__email a {
  padding-block: 0.6rem;
  font-weight: 600;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--accent);
}

.hero__email .icon {
  display: inline;
  margin-left: 0.2rem;
  vertical-align: -0.15em;
}

.hero__dot {
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgb(255 178 63 / 0.3);
}

.facts {
  border-block: 1px solid var(--border);
  background: var(--card);
}

.facts__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-block: 0;
}

.facts__item {
  display: grid;
  gap: 0.3rem;
  padding: 1.75rem 0;
}

.facts dt {
  font: 800 30px/1 var(--font-display);
  letter-spacing: -0.03em;
}

.facts dd {
  margin: 0;
  color: var(--muted);
}

@media (min-width: 960px) {
  .hero__grid {
    grid-template-columns: 1.25fr 1fr;
  }

  .facts__item + .facts__item {
    padding-left: 1.75rem;
    border-left: 1px solid var(--border);
  }
}
</style>
