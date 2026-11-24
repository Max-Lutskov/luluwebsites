<script setup lang="ts">
import { nql as c } from '~/data/labs'
import { site } from '~/data/site'

// Not for the cold-email audience: no link from the homepage, not in the sitemap, noindex
useSeoMeta({
  title: `${c.title}: headless Shopify demo store case study | ${site.name}`,
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
        <!-- The recording first: the live checkout sits behind a Shopify store password -->
        <div class="hero__actions">
          <a class="button" href="#checkout">
            Watch the checkout
            <AppIcon name="arrow-right" :size="18" />
          </a>
          <a class="button button--outline" :href="c.demoUrl" target="_blank" rel="noopener">
            Open the live demo
            <AppIcon name="arrow-up-right" :size="18" />
          </a>
          <a class="button button--outline" :href="c.codeUrl" target="_blank" rel="noopener">
            <AppIcon name="github" :size="18" />
            Code on GitHub
          </a>
        </div>
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
          <h2 id="built-title">What is built</h2>
        </div>
        <ul class="hard">
          <li v-for="item in c.built" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </li>
        </ul>
        <p class="note">{{ c.numbersNote }}</p>

        <ul class="perf" aria-label="Lighthouse scores, mobile">
          <li v-for="n in c.perf" :key="n.label">
            <strong>{{ n.value }}</strong>
            <span>{{ n.label }}</span>
          </li>
        </ul>
        <p class="note">{{ c.perfNote }}</p>
      </div>
    </section>

    <section id="checkout" class="section video-section" aria-labelledby="video-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="video-title">{{ c.video.title }}</h2>
          <p class="lead">{{ c.video.lead }}</p>
        </div>
        <!-- Native controls, no JavaScript. width/height keep the layout from shifting -->
        <video
          class="video"
          controls
          muted
          playsinline
          preload="metadata"
          poster="/images/labs/nql-checkout-poster.jpg"
          width="1280"
          height="800"
          aria-label="Recording of the demo checkout: product, cart, Shopify Checkout, test payment, Thank you page"
        >
          <source src="/images/labs/nql-checkout.mp4" type="video/mp4">
          <a href="/images/labs/nql-checkout.mp4">Download the recording (MP4)</a>
        </video>
        <p class="video__hint">{{ c.video.hint }}</p>
      </div>
    </section>

    <section class="section shots" aria-labelledby="shots-title">
      <div class="wrap">
        <div class="section-head">
          <h2 id="shots-title">The shop</h2>
        </div>
        <ul class="shots__grid">
          <li v-for="shot in c.shots" :key="shot.file">
            <figure>
              <div class="browser">
                <div class="browser__bar" aria-hidden="true">
                  <span class="browser__dots"><i /><i /><i /></span>
                </div>
                <img
                  :src="`/images/labs/nql-${shot.file}-720.webp`"
                  :srcset="`/images/labs/nql-${shot.file}-720.webp 720w, /images/labs/nql-${shot.file}-1440.webp 1440w`"
                  sizes="(min-width: 900px) 580px, 92vw"
                  width="1440"
                  height="900"
                  :alt="`North Quay Leather demo store: ${shot.title}`"
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
          <h2>Need a shop like this built?</h2>
          <p>Tell us what you sell and where. We’ll reply with how we’d build it.</p>
          <a class="button" :href="`mailto:${site.email}?subject=North%20Quay%20Leather%20case`">
            <AppIcon name="mail" :size="18" />
            {{ site.email }}
          </a>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* Same blocks as the LeadForge case (leadforge.vue), plus the video */
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

.perf {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  margin: 2.5rem 0 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--r-card);
  background: var(--border);
  list-style: none;
}

.perf li {
  display: grid;
  gap: 0.35rem;
  padding: clamp(20px, 3vw, 32px);
  background: var(--card);
}

.perf strong {
  font: 800 clamp(36px, 5vw, 56px) / 1 var(--font-display);
  letter-spacing: -0.035em;
}

.perf span {
  color: var(--text-2);
}

.perf + .note {
  margin-top: 1rem;
}

.video-section {
  padding-top: 0;
}

.video {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1280 / 800;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--navy);
}

.video__hint {
  max-width: 44rem;
  margin-top: 1.25rem;
  color: var(--text-2);
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

  .perf {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 900px) {
  .shots__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
