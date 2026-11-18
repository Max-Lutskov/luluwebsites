<script setup lang="ts">
import { snail as c } from '~/data/labs'
import { site } from '~/data/site'

// Not for the cold-email audience: no link from the homepage, not in the sitemap, noindex
useSeoMeta({
  title: `${c.title}: turn-based artillery game case study | ${site.name}`,
  description: c.lead,
  robots: 'noindex'
})
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
        <div class="hero__actions">
          <a class="button" :href="c.gameUrl" target="_blank" rel="noopener">
            Play the game
            <AppIcon name="arrow-up-right" :size="18" />
          </a>
          <a class="button button--outline" :href="c.codeUrl" target="_blank" rel="noopener">
            <AppIcon name="github" :size="18" />
            Code on GitHub
          </a>
        </div>
        <p class="hero__wake">{{ c.wakeNote }}</p>
        <p class="hero__by">{{ c.byline }}</p>
      </div>
    </section>

    <section class="section about" aria-labelledby="about-title">
      <div class="wrap prose">
        <h2 id="about-title">{{ c.about.title }}</h2>
        <p v-for="p in c.about.text" :key="p">{{ p }}</p>
      </div>
    </section>

    <section class="section" aria-labelledby="built-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="built-title">What is in the game</h2>
        </div>
        <ul class="hard">
          <li v-for="item in c.built" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ul>
        <p class="note">{{ c.numbersNote }}</p>
      </div>
    </section>

    <section class="section shots" aria-labelledby="shots-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="shots-title">The game</h2>
        </div>
        <ul class="shots__grid">
          <li v-for="shot in c.shots" :key="shot.file">
            <figure>
              <div class="browser">
                <div class="browser__bar" aria-hidden="true">
                  <span class="browser__dots"><i /><i /><i /></span>
                </div>
                <img
                  :src="`/images/labs/snail-${shot.file}-720.webp`"
                  :srcset="`/images/labs/snail-${shot.file}-720.webp 720w, /images/labs/snail-${shot.file}-1440.webp 1440w`"
                  sizes="(min-width: 1000px) 380px, 92vw"
                  width="1440"
                  height="900"
                  :alt="`Snail Artillery: ${shot.title}`"
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
        <p class="note">{{ c.shotsNote }}</p>
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

    <section class="section cta-section">
      <div class="wrap">
        <div class="cta">
          <h2>Need something like this built?</h2>
          <p>Tell us what it should do. We’ll reply with how we’d build it.</p>
          <a class="button" :href="`mailto:${site.email}?subject=Snail%20Artillery%20case`">
            <AppIcon name="mail" :size="18" />
            {{ site.email }}
          </a>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* Same blocks as the other cases (leadforge.vue, north-quay-leather.vue) */
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

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero__wake {
  max-width: 44rem;
  color: var(--text-2);
  font-size: 15px;
}

.hero__by {
  color: var(--muted);
}

.about {
  padding-block: 0;
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

.note {
  margin-top: 2rem;
  color: var(--muted);
  font-size: 14px;
}

.shots {
  padding-top: 0;
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
  .hard {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Three screenshots: one row */
@media (min-width: 1000px) {
  .shots__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
