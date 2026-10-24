<script setup lang="ts">
import { computed } from 'vue'
import { shotSize, shotSrc, shotSrcset } from '~/utils/img'

const props = defineProps<{
  slug: string
  /** desktop-tall scrolls with the page; phone is a still first screen in a phone frame */
  view: 'desktop-tall' | 'phone'
  alt: string
  host?: string
  sizes: string
}>()

const size = shotSize[props.view]
// Frame aspect: desktop 16:10; the phone frame fits its (first-screen) image exactly
const frame = props.view === 'desktop-tall' ? 10 / 16 : size.height / size.width
// How far the tall image moves up, as a share of its own height, so its bottom meets the frame's bottom
const shift = computed(() => {
  const ratio = size.height / size.width
  return `${(-(ratio - frame) / ratio * 100).toFixed(2)}%`
})
</script>

<!-- A whole page in a frame that scrolls as the visitor scrolls past it (CSS scroll-driven animation).
     Browsers without it, and prefers-reduced-motion, show the top of the page. -->
<template>
  <figure class="scroll-shot" :class="view === 'desktop-tall' ? 'is-desktop' : 'is-phone'">
    <div v-if="view === 'desktop-tall'" class="scroll-shot__bar" aria-hidden="true">
      <span class="scroll-shot__dots"><i /><i /><i /></span>
      <span class="scroll-shot__host">{{ host }}</span>
    </div>
    <div class="scroll-shot__screen" :style="{ aspectRatio: `1 / ${frame}` }">
      <img
        :src="shotSrc(slug, view, view === 'desktop-tall' ? 720 : 390)"
        :srcset="shotSrcset(slug, view)"
        :sizes="sizes"
        :width="size.width"
        :height="size.height"
        :alt="alt"
        :style="{ '--shift': shift }"
        loading="lazy"
        decoding="async"
      >
    </div>
  </figure>
</template>

<style scoped>
.scroll-shot {
  margin: 0;
  view-timeline: --shot block;
}

.is-desktop {
  overflow: hidden;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  background: var(--night-raised);
  box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.6);
}

.is-phone {
  overflow: hidden;
  border: 5px solid #05091a;
  border-radius: 24px;
  background: #05091a;
  box-shadow: 0 24px 40px -18px rgb(0 0 0 / 0.7);
}

.scroll-shot__bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid var(--rule);
}

.scroll-shot__dots {
  display: flex;
  gap: 5px;
}

.scroll-shot__dots i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgb(255 255 255 / 0.22);
}

.scroll-shot__host {
  overflow: hidden;
  min-width: 0;
  padding: 0.1rem 0.75rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 0.08);
  color: var(--night-muted);
  font-size: 0.8125rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* clip, not hidden: overflow:hidden would make the screen its own scroll container for the timeline */
.scroll-shot__screen {
  overflow: clip;
  /* Otherwise the tall image stretches the box past its aspect-ratio (automatic minimum size) */
  min-height: 0;
  background: #fff;
}

.scroll-shot__screen img {
  width: 100%;
}

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .is-desktop .scroll-shot__screen img {
      animation: page-scroll linear both;
      animation-timeline: --shot;
      animation-range: contain 0% contain 100%;
    }
  }
}

@keyframes page-scroll {
  from { transform: translateY(0); }
  to { transform: translateY(var(--shift)); }
}
</style>
