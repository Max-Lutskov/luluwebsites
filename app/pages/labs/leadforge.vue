<script setup lang="ts">
import { leadforge as c } from '~/data/labs'
import { site } from '~/data/site'

// Not for the cold-email audience: no link from the homepage, not in the sitemap, noindex
useSeoMeta({
  title: `${c.title}: outreach pipeline case study | ${site.name}`,
  description: c.lead,
  robots: 'noindex'
})

const pad = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <article>
    <section class="section hero">
      <div class="wrap hero__grid">
        <p class="label"><a href="/labs/">Labs</a> / {{ c.kind }}</p>
        <h1>{{ c.title }}</h1>
        <p class="lead hero__lead">{{ c.lead }}</p>
        <ul class="stack" aria-label="Stack">
          <li v-for="tech in c.stack" :key="tech" class="pill">{{ tech }}</li>
        </ul>
        <p class="hero__by">{{ c.byline }}</p>
      </div>
    </section>

    <section class="numbers" aria-label="In numbers">
      <div class="wrap">
        <dl class="numbers__grid">
          <div v-for="n in c.numbers" :key="n.label">
            <dt>{{ n.label }}</dt>
            <dd>{{ n.value }}</dd>
          </div>
        </dl>
        <p class="numbers__note">{{ c.numbersNote }}</p>
      </div>
    </section>

    <section class="section" aria-labelledby="problem-title">
      <div class="wrap prose">
        <h2 id="problem-title">{{ c.problem.title }}</h2>
        <p v-for="p in c.problem.text" :key="p">{{ p }}</p>
      </div>
    </section>

    <section class="section pipeline" aria-labelledby="pipeline-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="pipeline-title">The pipeline</h2>
          <p class="lead">Six stages. Each one writes its result to SQLite, so any stage can be run again on its own.</p>
        </div>
        <ol class="flow">
          <li v-for="(step, i) in c.pipeline" :key="step.title">
            <span class="flow__num" aria-hidden="true">{{ pad(i) }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="section shots" aria-labelledby="shots-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="shots-title">The dashboard</h2>
          <p class="lead">A Nuxt app over the FastAPI backend. Everything the pipeline does is visible and can be re-run from here.</p>
        </div>
        <ul class="shots__grid">
          <li v-for="shot in c.shots" :key="shot.file">
            <figure>
              <div class="browser">
                <div class="browser__bar" aria-hidden="true">
                  <span class="browser__dots"><i /><i /><i /></span>
                </div>
                <img
                  :src="`/images/labs/leadforge-${shot.file}-720.webp`"
                  :srcset="`/images/labs/leadforge-${shot.file}-720.webp 720w, /images/labs/leadforge-${shot.file}-1440.webp 1440w`"
                  sizes="(min-width: 900px) 580px, 92vw"
                  width="1440"
                  height="900"
                  :alt="`LeadForge dashboard: ${shot.title}`"
                  loading="lazy"
                  decoding="async"
                >
              </div>
              <figcaption>
                <strong>{{ shot.title }}.</strong> {{ shot.text }}
              </figcaption>
            </figure>
          </li>
        </ul>
        <p class="shots__note">{{ c.shotsNote }}</p>
      </div>
    </section>

    <section class="section hard-section" aria-labelledby="hard-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="hard-title">What was hard</h2>
        </div>
        <ul class="hard">
          <li v-for="item in c.hard" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section testing" aria-labelledby="testing-title">
      <div class="wrap prose">
        <h2 id="testing-title">{{ c.testing.title }}</h2>
        <p>{{ c.testing.text }}</p>
      </div>
    </section>

    <section class="section cta-section">
      <div class="wrap">
        <div class="cta">
          <h2>Need a tool like this built?</h2>
          <p>Tell us what you do by hand today. We’ll reply with how we’d automate it.</p>
          <a class="button" :href="`mailto:${site.email}?subject=LeadForge%20case`">
            <AppIcon name="mail" :size="18" />
            {{ site.email }}
          </a>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.hero {
  padding-bottom: clamp(40px, 5vw, 64px);
}

.hero__grid {
  display: grid;
  gap: 1.25rem;
  justify-items: start;
}

.hero__lead {
  max-width: 44rem;
  font-size: clamp(19px, 2vw, 22px);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.hero__by {
  color: var(--muted);
}

/* Navy strip with the four figures */
.numbers {
  padding-block: clamp(40px, 5vw, 64px);
  background: var(--navy);
  color: var(--on-navy);
}

.numbers__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 1.5rem;
  margin: 0;
}

.numbers__grid div {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 0.5rem;
}

.numbers__grid dd {
  margin: 0;
  color: #fff;
  font: 800 clamp(44px, 6vw, 76px)/0.95 var(--font-display);
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}

.numbers__grid dt {
  max-width: 14rem;
  font-size: 15px;
}

.numbers__note {
  margin-top: 2rem;
  font-size: 14px;
}

.prose {
  display: grid;
  gap: 1.25rem;
}

.prose p {
  max-width: 44rem;
  color: var(--text-2);
  font-size: 19px;
}

.pipeline {
  padding-block: 0;
}

.flow {
  display: grid;
  gap: 2.5rem 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.flow li {
  display: grid;
  align-content: start;
  gap: 0.6rem;
  padding-top: 1.25rem;
  border-top: 3px solid var(--navy);
}

/* The last stage is the outcome */
.flow li:last-child {
  border-top-color: var(--accent);
}

.flow__num {
  font: 500 13px/1.4 var(--font-mono);
  letter-spacing: 0.08em;
}

.flow h3 {
  font-size: 28px;
}

.flow p {
  color: var(--muted);
}

.shots__grid {
  display: grid;
  gap: 2rem 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.shots figure {
  display: grid;
  gap: 0.9rem;
  margin: 0;
}

.browser {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--card);
}

.browser__bar {
  display: flex;
  padding: 0.55rem 0.8rem;
  border-bottom: 1px solid var(--border);
  background: var(--page);
}

.browser__dots {
  display: flex;
  gap: 5px;
}

.browser__dots i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--border-strong);
}

.browser img {
  width: 100%;
}

.shots figcaption {
  color: var(--text-2);
  font-size: 16px;
}

.shots__note {
  margin-top: 2rem;
  color: var(--muted);
  font-size: 14px;
}

.hard-section {
  padding-top: 0;
}

/* 1px dividers, same trick as "What every site gets" on the homepage */
.hard {
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

.hard li {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  padding: clamp(24px, 3vw, 36px);
  background: var(--card);
}

.hard h3 {
  font-size: 24px;
  line-height: 1.1;
}

.hard p {
  color: var(--text-2);
}

.testing {
  padding-top: 0;
}

.cta-section {
  padding-top: 0;
}

.cta {
  display: grid;
  gap: 1rem;
  justify-items: start;
  padding: clamp(28px, 5vw, 64px);
  border-radius: var(--r-card);
  background: var(--accent);
}

.cta h2 {
  font-size: clamp(32px, 4vw, 52px);
}

.cta p {
  max-width: 32rem;
  font-size: 19px;
}

@media (min-width: 700px) {
  .flow {
    grid-template-columns: repeat(2, 1fr);
  }

  .hard {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .shots__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .numbers__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .flow {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
