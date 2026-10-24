<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <footer class="footer on-night">
    <div class="wrap footer__grid">
      <p>
        <strong>{{ site.name }}</strong>, websites for small businesses.<br>
        {{ site.owner }}, {{ site.city }}, {{ site.country }}.<br>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
      </p>
      <p id="privacy" class="footer__privacy">
        Privacy: the contact form sends me your name, email, website and message, and I use them only
        to reply. This site sets no cookies and runs no ad trackers. Visit counts come from
        Cloudflare Web Analytics, which doesn’t use cookies.
      </p>
      <p class="footer__copy">© 2026 {{ site.owner }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 3rem;
  border-top: 1px solid var(--rule);
  color: var(--fg-muted);
  font-size: 0.9375rem;
}

.footer__grid {
  display: grid;
  gap: 1.5rem 4rem;
}

.footer strong {
  color: var(--fg);
}

.footer__privacy {
  max-width: 40rem;
}

@media (min-width: 960px) {
  .footer__grid {
    grid-template-columns: 1fr 1.6fr;
  }
}
</style>
