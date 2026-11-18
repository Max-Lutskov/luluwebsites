<script setup lang="ts">
import { uk, ukFacts, ukPrices, ukSteps, ukWorks } from '~/data/uk'
import { shotSize, shotSrc, shotSrcset } from '~/utils/img'

useSeoMeta({
  title: uk.title,
  description: uk.description,
  ogTitle: uk.title,
  ogDescription: uk.description,
  ogType: 'website',
  ogUrl: uk.url,
  ogLocale: 'uk_UA'
})

useHead({
  htmlAttrs: { lang: 'uk' },
  link: [{ rel: 'canonical', href: uk.url }]
})

const pad = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section class="hero">
    <div class="wrap hero__grid">
      <p class="label">Веб-студія · Вінниця</p>
      <h1>Сайт під ваш бізнес, а не шаблон за підписку.</h1>
      <p class="lead hero__lead">
        Робимо сайти для малого бізнесу. Після здачі сайт і домен лишаються у вас.
        Нижче кілька наших сайтів, усі працюють.
      </p>
      <div class="hero__actions">
        <a :href="uk.telegramUrl" class="button" rel="noopener">
          Написати в Telegram
          <AppIcon name="arrow-up-right" :size="18" />
        </a>
        <a href="#work" class="button button--outline">Подивитись роботи</a>
      </div>
    </div>
  </section>

  <section class="facts" aria-label="Коротко">
    <dl class="wrap facts__grid">
      <div v-for="fact in ukFacts" :key="fact.value">
        <dt>{{ fact.value }}</dt>
        <dd>{{ fact.label }}</dd>
      </div>
    </dl>
  </section>

  <section id="work" class="section" aria-labelledby="work-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="work-title">Роботи</h2>
        <p class="lead">Справжні сайти: відкрийте і спробуйте з телефона.</p>
      </div>

      <ul class="work__list">
        <li v-for="work in ukWorks" :key="work.slug" class="card project">
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
                :alt="`Головна сторінка ${work.name} на комп’ютері`"
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
                :alt="`${work.name} на телефоні`"
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
            <p v-if="work.location" class="project__location">
              <AppIcon name="pin" :size="18" />
              {{ work.location }}
            </p>
            <p class="project__desc">{{ work.text }}</p>
            <a class="project__link" :href="work.url" target="_blank" rel="noopener">
              Відкрити {{ work.host }}
              <AppIcon name="arrow-up-right" :size="18" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section id="prices" class="section prices-section" aria-labelledby="prices-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="prices-title">Ціни</h2>
      </div>
      <ul class="prices">
        <li v-for="item in ukPrices" :key="item.name" class="card price">
          <h3>{{ item.name }}</h3>
          <p class="price__value">{{ item.price }}</p>
          <p class="price__text">{{ item.text }}</p>
          <ul class="price__points">
            <li v-for="point in item.points" :key="point">
              <AppIcon name="check" :size="18" />
              {{ point }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>

  <section id="how" class="section" aria-labelledby="how-title">
    <div class="wrap">
      <div class="section-head">
        <h2 id="how-title">Як працюємо</h2>
      </div>
      <ol class="how">
        <li v-for="(step, i) in ukSteps" :key="step.title">
          <span class="how__num" aria-hidden="true">{{ pad(i) }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section id="contact" class="section contact-section" aria-labelledby="contact-title">
    <div class="wrap">
      <div class="contact">
        <div class="contact__intro">
          <h2 id="contact-title">Розкажіть про свій бізнес.</h2>
          <p>І про теперішній сайт, якщо він є. Напишіть у Telegram або через форму.</p>
          <p>
            <a :href="uk.telegramUrl" class="button" rel="noopener">
              Telegram: @{{ uk.telegram }}
              <AppIcon name="arrow-up-right" :size="18" />
            </a>
          </p>
        </div>

        <!-- Plain HTML form, no JavaScript. lang=uk makes functions/api/contact.ts redirect
             to /uk/thanks/ or /uk/not-sent/ -->
        <form class="card form" action="/api/contact" method="post">
          <input type="hidden" name="lang" value="uk">
          <div class="form__row">
            <label class="field">
              <span>Ваше ім’я</span>
              <input name="name" type="text" autocomplete="name" maxlength="100" required>
            </label>
            <label class="field">
              <span>Email</span>
              <input name="email" type="email" autocomplete="email" maxlength="200" required>
            </label>
          </div>
          <label class="field">
            <span>Ваш сайт або Instagram <small>(необов’язково)</small></span>
            <input name="website" type="text" autocomplete="url" maxlength="200">
          </label>
          <label class="field">
            <span>Повідомлення</span>
            <textarea name="message" rows="5" maxlength="3000" required />
          </label>
          <!-- Honeypot: off-screen for people, bots fill it in and the message is dropped -->
          <div class="form__trap" aria-hidden="true">
            <label>Fax <input name="fax" type="text" tabindex="-1" autocomplete="off"></label>
          </div>
          <button type="submit" class="button form__submit">Надіслати</button>
          <p class="form__note">Ці дані потрібні нам лише для відповіді.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* The sections reuse the homepage look (HeroSection, WorkSection, HowSection, ContactSection) */
.hero {
  padding-block: clamp(48px, 7vw, 96px) clamp(48px, 6vw, 80px);
}

.hero__grid {
  display: grid;
  gap: 1.5rem;
  justify-items: start;
}

h1 {
  max-width: 18ch;
}

.hero__lead {
  max-width: 38rem;
  font-size: clamp(19px, 2vw, 22px);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.facts {
  border-block: 1px solid var(--border);
  background: var(--card);
}

.facts__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-block: 0;
  padding-block: 1.75rem;
}

.facts__grid dt {
  font: 800 clamp(22px, 2.6vw, 30px)/1.1 var(--font-display);
  letter-spacing: -0.03em;
}

.facts__grid dd {
  margin: 0.3rem 0 0;
  color: var(--muted);
  font-size: 15px;
}

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

/* Whole screenshot, no crop: the sites have a fixed bar at the bottom of the phone screen */
.project__phone img {
  width: 100%;
  height: auto;
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

.prices-section {
  padding-top: 0;
}

.prices {
  display: grid;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.price {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  padding: clamp(24px, 3vw, 40px);
}

.price h3 {
  font-size: 26px;
}

.price__value {
  font: 800 clamp(44px, 6vw, 68px)/1 var(--font-display);
  letter-spacing: -0.04em;
}

.price__text {
  color: var(--text-2);
  font-size: 19px;
}

.price__points {
  display: grid;
  gap: 0.6rem;
  margin: 0.5rem 0 0;
  padding: 1.25rem 0 0;
  border-top: 1px solid var(--border);
  list-style: none;
}

.price__points li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: var(--text-2);
}

.price__points .icon {
  flex: none;
  margin-top: 0.2em;
}

.how {
  display: grid;
  gap: 3rem 2.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.how li {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 3px solid var(--navy);
}

.how li:last-child {
  border-top-color: var(--accent);
}

.how__num {
  margin-bottom: 0.5rem;
  font: 800 72px/0.9 var(--font-display);
  letter-spacing: -0.04em;
}

.how h3 {
  font-size: 26px;
}

.how p {
  max-width: 24rem;
  color: var(--muted);
}

.contact-section {
  padding-top: 0;
}

.contact {
  display: grid;
  gap: 2.5rem 4rem;
  padding: clamp(24px, 5vw, 64px);
  border-radius: 32px;
  background: var(--accent);
  color: var(--navy);
}

.contact__intro {
  display: grid;
  align-content: start;
  gap: 1.25rem;
  font-size: 19px;
}

.form {
  position: relative;
  display: grid;
  gap: 1.1rem;
  padding: clamp(20px, 3vw, 36px);
  border: 0;
}

.form__row {
  display: grid;
  gap: 1.1rem;
}

.field {
  display: grid;
  gap: 0.4rem;
  font-size: 15px;
  font-weight: 600;
}

.field small {
  color: var(--muted);
  font-weight: 400;
  font-size: inherit;
}

input,
textarea {
  width: 100%;
  min-height: 48px;
  padding: 0.7rem 0.9rem;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--r-input);
  background: var(--card);
  color: var(--navy);
  /* 16px+ so iOS doesn't zoom into the field */
  font: 400 17px/1.4 var(--font-text);
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: var(--navy);
  outline: 2px solid var(--navy);
  outline-offset: 0;
}

.form__trap {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form__submit {
  justify-self: start;
}

.form__note {
  color: var(--muted);
  font-size: 15px;
}

@media (min-width: 640px) {
  .form__row {
    grid-template-columns: 1fr 1fr;
  }

  .prices {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 860px) {
  .facts__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .how {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 960px) {
  .contact {
    grid-template-columns: 1fr 1.25fr;
  }
}

@media (min-width: 1000px) {
  .project {
    grid-template-columns: 1.35fr 1fr;
  }
}
</style>
