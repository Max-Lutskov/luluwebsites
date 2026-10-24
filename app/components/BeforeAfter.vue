<script setup lang="ts">
import { shotSize, shotSrc, shotSrcset } from '~/utils/img'
</script>

<!-- The one load animation on the site (CSS only): a broken old homepage, drawn in HTML and not any real
     company's, gets swept by the yellow line and turns into the real Ohio concept; then a phone slides in.
     prefers-reduced-motion shows the end state straight away. -->
<template>
  <figure class="ba">
    <div class="ba__window">
      <div class="ba__bar" aria-hidden="true">
        <span class="ba__dots"><i /><i /><i /></span>
        <span class="ba__host">
          <span class="ba__host-old">your-business.com</span>
          <span class="ba__host-new">max-lutskov.github.io/Ohio-Demo</span>
        </span>
      </div>

      <div class="ba__screen">
        <div class="ba__before" aria-hidden="true">
          <div class="old__nav">
            <span class="old__logo" />
            <span class="old__links"><i /><i /><i /><i /></span>
          </div>
          <div class="old__hero">
            <span class="old__broken">
              <span class="old__icon" />
              Image not found
            </span>
          </div>
          <div class="old__text">
            <i /><i /><i class="old__short" />
          </div>
          <span class="ba__tag ba__tag--before">Before</span>
        </div>

        <div class="ba__after">
          <img
            :src="shotSrc('ohio', 'desktop', 960)"
            :srcset="shotSrcset('ohio', 'desktop')"
            sizes="(min-width: 960px) 600px, 92vw"
            :width="shotSize.desktop.width"
            :height="shotSize.desktop.height"
            alt="Concept homepage for Ohio Transit Company"
            fetchpriority="high"
          >
          <span class="ba__tag ba__tag--after">After</span>
        </div>

        <span class="ba__line" aria-hidden="true" />
      </div>
    </div>

    <div class="ba__phone">
      <img
        :src="shotSrc('protskov', 'phone', 390)"
        :srcset="shotSrcset('protskov', 'phone')"
        sizes="150px"
        :width="shotSize.phone.width"
        :height="shotSize.phone.height"
        alt="The Protskov Bud site on a phone"
      >
    </div>

    <figcaption class="ba__caption">
      A typical broken homepage (illustration), then the concept I built for Ohio Transit Company.
    </figcaption>
  </figure>
</template>

<style scoped>
.ba {
  --t-start: 0.9s;
  --t-sweep: 1.5s;
  position: relative;
  margin: 0;
  padding-right: 2.75rem;
  padding-bottom: 2.25rem;
}

.ba__window {
  overflow: hidden;
  border: 1px solid var(--night-rule);
  border-radius: var(--radius);
  background: var(--night-raised);
  box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.6);
}

.ba__bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--night-rule);
}

.ba__dots {
  display: flex;
  gap: 5px;
}

.ba__dots i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgb(255 255 255 / 0.22);
}

.ba__host {
  display: grid;
  overflow: hidden;
  min-width: 0;
  padding: 0.1rem 0.75rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.08);
  color: var(--night-muted);
  font-size: 0.8125rem;
  white-space: nowrap;
}

.ba__host > span {
  grid-area: 1 / 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ba__host-new {
  opacity: 0;
  animation: fade-in 0.3s calc(var(--t-start) + var(--t-sweep) * 0.6) both;
}

.ba__host-old {
  animation: fade-out 0.3s calc(var(--t-start) + var(--t-sweep) * 0.6) both;
}

.ba__screen {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

/* Before: a dated, half-broken homepage */
.ba__before {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 5%;
  padding: 4% 6%;
  background: #e4e2dc;
}

.old__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.old__logo {
  width: 18%;
  aspect-ratio: 5 / 1;
  background: #b9b6ae;
}

.old__links {
  display: flex;
  gap: 0.6rem;
  width: 40%;
}

.old__links i,
.old__text i {
  flex: 1;
  height: 0.45rem;
  background: #c8c5bd;
}

.old__hero {
  display: grid;
  place-items: center;
  border: 2px dashed #b9b6ae;
  background: #d8d5ce;
}

.old__broken {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #8f8b82;
  font: 400 clamp(0.75rem, 1.6vw, 0.95rem) / 1 'Times New Roman', serif;
}

.old__icon {
  position: relative;
  width: 1.1rem;
  height: 1.1rem;
  border: 1.5px solid #a19d94;
  background: linear-gradient(135deg, transparent 45%, #c0392b 45% 55%, transparent 55%);
}

.old__text {
  display: grid;
  gap: 0.5rem;
}

.old__text i {
  display: block;
}

.old__text .old__short {
  width: 60%;
}

/* After: the real concept, revealed left to right behind the line */
.ba__after {
  position: absolute;
  inset: 0;
  clip-path: inset(0 100% 0 0);
  animation: reveal var(--t-sweep) cubic-bezier(0.65, 0, 0.35, 1) var(--t-start) forwards;
}

.ba__after img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.ba__line {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transform: translateX(0);
  opacity: 0;
  animation: sweep var(--t-sweep) cubic-bezier(0.65, 0, 0.35, 1) var(--t-start) forwards;
}

.ba__line::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -2px;
  width: 4px;
  background: var(--signal);
  box-shadow: 0 0 18px 4px rgb(255 210 63 / 0.65);
  content: '';
}

.ba__tag {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  padding: 0.1rem 0.6rem;
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 600;
}

.ba__tag--before {
  background: #8f8b82;
  color: #fff;
}

.ba__tag--after {
  background: var(--signal);
  color: var(--ink);
}

.ba__phone {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 27%;
  max-width: 150px;
  overflow: hidden;
  border: 5px solid #05091a;
  border-radius: 24px;
  background: #05091a;
  box-shadow: 0 24px 40px -18px rgb(0 0 0 / 0.7);
  animation: phone-in 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) calc(var(--t-start) + var(--t-sweep) + 0.1s) both;
}

.ba__caption {
  /* Leave room for the phone in the corner */
  max-width: min(32rem, 70%);
  margin-top: 1rem;
  color: var(--night-muted);
  font-size: 0.875rem;
}

@keyframes reveal {
  to { clip-path: inset(0 0 0 0); }
}

@keyframes sweep {
  0% { transform: translateX(0); opacity: 1; }
  90% { transform: translateX(100%); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}

@keyframes phone-in {
  from { transform: translateY(30%); opacity: 0; }
}

@keyframes fade-in {
  to { opacity: 1; }
}

@keyframes fade-out {
  to { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ba__after,
  .ba__line,
  .ba__phone,
  .ba__host > span {
    animation: none;
  }

  .ba__after { clip-path: none; }
  .ba__host-old { opacity: 0; }
  .ba__host-new { opacity: 1; }
}
</style>
