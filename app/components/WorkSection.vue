<script setup lang="ts">
import { works } from '~/data/site'
import { shotSize, shotSrc, shotSrcset } from '~/utils/img'
</script>

<template>
  <section id="work" class="section" aria-labelledby="work-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="work-title">Recent work</h2>
        <p class="lead">Real sites you can open and try on your phone.</p>
      </div>

      <ul class="work__list">
        <li v-for="work in works" :key="work.slug" class="card project">
          <div class="project__visual">
            <figure class="browser">
              <div class="browser__bar" aria-hidden="true">
                <span class="browser__dots"><i /><i /><i /></span>
                <span class="browser__host">{{ work.host }}</span>
              </div>
              <img
                :src="shotSrc(work.slug, 'desktop', 960)"
                :srcset="shotSrcset(work.slug, 'desktop')"
                sizes="(min-width: 1000px) 640px, 90vw"
                :width="shotSize.desktop.width"
                :height="shotSize.desktop.height"
                :alt="`${work.name} homepage on a desktop screen`"
                loading="lazy"
                decoding="async"
              >
            </figure>
            <div class="phone-frame project__phone">
              <img
                :src="shotSrc(work.slug, 'phone', 390)"
                :srcset="shotSrcset(work.slug, 'phone')"
                sizes="150px"
                :width="shotSize.phone.width"
                :height="shotSize.phone.height"
                :alt="`${work.name} on a phone`"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>

          <div class="project__text">
            <p class="project__tags">
              <span class="pill pill--accent">{{ work.kind }}</span>
              <span class="pill">{{ work.niche }}</span>
            </p>
            <h3>{{ work.name }}</h3>
            <p class="project__location">
              <AppIcon name="pin" :size="18" />
              {{ work.location }}
            </p>
            <p class="project__desc">{{ work.text }}</p>
            <a class="project__link" :href="work.url" target="_blank" rel="noopener">
              Open {{ work.host }}
              <AppIcon name="arrow-up-right" :size="18" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.work__list {
  display: grid;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project {
  display: grid;
  gap: 2rem 3.5rem;
  align-items: center;
  padding: clamp(16px, 3vw, 36px);
}

.project__visual {
  position: relative;
  padding: 0 2.5rem 2.5rem 0;
}

.browser {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--page);
}

.browser__bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.8rem;
  border-bottom: 1px solid var(--border);
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

.browser__host {
  overflow: hidden;
  min-width: 0;
  padding: 0.1rem 0.8rem;
  border-radius: 999px;
  background: var(--card);
  color: var(--muted);
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.browser img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
}

.project__phone {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 26%;
  max-width: 150px;
  border-width: 5px;
  border-radius: 22px;
}

.project__phone img {
  width: 100%;
  aspect-ratio: 9 / 19;
  object-fit: cover;
  object-position: top;
}

.project__text {
  display: grid;
  gap: 0.9rem;
  justify-items: start;
}

.project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project__text h3 {
  font-size: 34px;
}

.project__location {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--muted);
}

.project__desc {
  color: var(--text-2);
}

.project__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 44px;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  overflow-wrap: anywhere;
}

@media (min-width: 1000px) {
  .project {
    grid-template-columns: 1.35fr 1fr;
  }
}
</style>
