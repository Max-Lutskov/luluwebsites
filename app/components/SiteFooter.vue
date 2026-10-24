<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__grid">
      <p>
        <strong>{{ site.name }}</strong>, websites for small businesses.<br>
        {{ site.owner }}, {{ site.city }}, {{ site.country }}.<br>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
      </p>
      <div class="footer__right">
        <p id="privacy">
          Privacy: the contact form sends us your name, email, website and message, and we use them only
          to reply. This site sets no cookies and runs no ad trackers. Visit counts come from
          Cloudflare Web Analytics, which doesn’t use cookies.
        </p>
        <p>© 2026 {{ site.owner }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 3.5rem;
  background: var(--navy);
  color: var(--on-navy);
  font-size: 15px;
}

.footer__grid {
  display: grid;
  gap: 2rem 4rem;
}

.footer strong,
.footer a {
  color: #fff;
}

.footer__right {
  display: grid;
  gap: 1rem;
  max-width: 40rem;
}

@media (min-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1.4fr;
  }
}
</style>
