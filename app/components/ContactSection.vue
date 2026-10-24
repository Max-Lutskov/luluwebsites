<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section id="contact" class="section contact-section" aria-labelledby="contact-title">
    <div class="wrap">
      <div class="contact">
        <div class="contact__intro">
          <h2 id="contact-title">Tell us about your business.</h2>
          <p>And about your current site, if you have one. We’ll reply by email.</p>
          <p class="contact__direct">
            Or email Max directly:<br>
            <a :href="`mailto:${site.email}`">{{ site.email }}</a>
          </p>
        </div>

        <!-- Plain HTML form, no JavaScript: functions/api/contact.ts sends it to Max's Telegram
             and redirects to /thanks/ or /not-sent/ -->
        <form class="card form" action="/api/contact" method="post">
          <div class="form__row">
            <label class="field">
              <span>Your name</span>
              <input name="name" type="text" autocomplete="name" maxlength="100" required>
            </label>
            <label class="field">
              <span>Email</span>
              <input name="email" type="email" autocomplete="email" maxlength="200" required>
            </label>
          </div>
          <label class="field">
            <span>Your website <small>(optional)</small></span>
            <input name="website" type="text" inputmode="url" autocomplete="url" maxlength="200" placeholder="yourbusiness.com">
          </label>
          <label class="field">
            <span>Message</span>
            <textarea name="message" rows="5" maxlength="3000" required />
          </label>
          <!-- Honeypot: off-screen for people, bots fill it in and the message is dropped -->
          <div class="form__trap" aria-hidden="true">
            <label>Fax <input name="fax" type="text" tabindex="-1" autocomplete="off"></label>
          </div>
          <button type="submit" class="button form__submit">Send message</button>
          <p class="form__note">We only use these details to reply to you.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.contact__direct {
  font-weight: 600;
  overflow-wrap: anywhere;
}

.contact__direct a {
  text-decoration-thickness: 2px;
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

input::placeholder {
  color: #7a8096;
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
}

@media (min-width: 960px) {
  .contact {
    grid-template-columns: 1fr 1.25fr;
  }
}
</style>
