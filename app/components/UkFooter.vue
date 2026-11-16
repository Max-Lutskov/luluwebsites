<script setup lang="ts">
import { uk } from '~/data/uk'
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__grid">
      <p>
        <strong>LuLu Studio</strong>, сайти для малого бізнесу.<br>
        Вінниця, Україна.<br>
        Telegram: <a :href="uk.telegramUrl" rel="noopener">@{{ uk.telegram }}</a>
      </p>
      <div class="footer__right">
        <p>
          Приватність: форма надсилає нам ваше ім’я, email, адресу сайту і повідомлення. Ми
          використовуємо їх лише для відповіді. Сайт не ставить cookies і не має рекламних
          трекерів. Відвідування рахує Cloudflare Web Analytics без cookies.
        </p>
        <p>© 2026 LuLu Studio</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Same layout as SiteFooter.vue */
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
