<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="contact" class="section contact on-paper" aria-labelledby="contact-title">
    <div class="wrap contact__grid">
      <div class="contact__intro">
        <h2 id="contact-title">Get in touch</h2>
        <p class="lead">
          Tell me about your business and your current site, if you have one. I’ll reply by email.
        </p>
        <p class="contact__direct">
          Or email me directly:<br>
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </p>
      </div>

      <!-- Plain HTML form, no JavaScript: functions/api/contact.ts sends it to Max's Telegram
           and redirects to /thanks/ or /not-sent/ -->
      <form class="form" action="/api/contact" method="post">
        <label class="field">
          <span>Your name</span>
          <input name="name" type="text" autocomplete="name" maxlength="100" required>
        </label>
        <label class="field">
          <span>Email</span>
          <input name="email" type="email" autocomplete="email" maxlength="200" required>
        </label>
        <label class="field">
          <span>Your website <small>(optional)</small></span>
          <input name="website" type="text" inputmode="url" autocomplete="url" maxlength="200" placeholder="yourbusiness.com">
        </label>
        <label class="field">
          <span>Message</span>
          <textarea name="message" rows="5" maxlength="3000" required />
        </label>
        <!-- Honeypot: hidden from people, bots fill it in and the message is dropped -->
        <label class="visually-hidden" aria-hidden="true">
          Fax <input name="fax" type="text" tabindex="-1" autocomplete="off">
        </label>
        <button type="submit" class="button">Send message</button>
        <p class="form__note">
          I only use these details to reply to you.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>

.contact__grid {
  display: grid;
  gap: 2.5rem 4rem;
}

.contact__direct {
  margin-top: 1.5rem;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.form {
  display: grid;
  gap: 1.25rem;
  max-width: 36rem;
}

.field {
  display: grid;
  gap: 0.35rem;
  font-weight: 600;
  font-size: 1rem;
}

.field small {
  color: var(--fg-muted);
  font-weight: 400;
  font-size: inherit;
}

input,
textarea {
  width: 100%;
  min-height: 3.25rem;
  padding: 0.7rem 0.9rem;
  border: 1.5px solid #9aa1b5;
  border-radius: 8px;
  background: var(--white);
  color: var(--ink);
  /* 16px+ so iOS doesn't zoom into the field */
  font: 400 1.0625rem/1.4 var(--font-text);
}

textarea {
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: #1f3fd1;
  outline: 2px solid #1f3fd1;
  outline-offset: 0;
}

input::placeholder {
  color: #8a91a5;
}

.form .button {
  justify-self: start;
}

.form__note {
  color: var(--fg-muted);
  font-size: 0.9375rem;
}

@media (min-width: 960px) {
  .contact__grid {
    grid-template-columns: 1fr 1.6fr;
  }
}
</style>
