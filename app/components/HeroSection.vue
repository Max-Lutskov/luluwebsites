<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="hero on-night">
    <div class="wrap hero__grid">
      <div class="hero__text">
        <!-- Trailing spaces sit inside the spans: Vue drops whitespace between elements on separate lines -->
        <h1>
          <span>Websites for </span><span>small businesses </span><span>that bring in calls </span><span>and quote requests.</span>
        </h1>
        <p class="hero__who">
          I’m {{ site.owner }}, and LuLu Studio is my one-person web studio.
          I build new sites from scratch and redesign old ones.
        </p>
        <div class="hero__actions">
          <a href="#contact" class="button">Get in touch</a>
          <a href="#work" class="button button--plain">See my work</a>
        </div>
        <p class="hero__email">
          Got an email from {{ site.email }}? <a href="#email">Here’s what it was about.</a>
        </p>
      </div>

      <BeforeAfter class="hero__visual" />
    </div>
  </section>

  <section id="email" class="note" aria-labelledby="note-title">
    <div class="wrap note__grid">
      <h2 id="note-title" class="note__title">Got an email from me?</h2>
      <div class="note__body">
        <p>
          I look at small business websites. When something on one is broken or slow,
          I build a free concept of a better homepage from the business’s own photos and text
          and send it to the owner. That’s the link in my email.
        </p>
        <p>
          The concept costs you nothing and there’s nothing to sign. If you like it, reply to my email.
          If not, reply “no thanks” and I won’t write again.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(2.5rem, 7vw, 5.5rem) clamp(3.5rem, 8vw, 6rem);
}

.hero__grid {
  display: grid;
  gap: 3.5rem;
  align-items: center;
}

h1 {
  max-width: 18ch;
  font-size: clamp(2.6rem, 6.6vw, 4.5rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
  text-wrap: pretty;
}

/* On wide screens one phrase per line; on phones the text just wraps */
@media (min-width: 960px) {
  .hero__text {
    container-type: inline-size;
  }

  /* The longest phrase ("and quote requests.") is ~9.1 em wide: size the type to the column */
  h1 {
    max-width: none;
    font-size: min(4.75rem, 10.8cqi);
  }

  h1 span {
    display: block;
    white-space: nowrap;
  }
}

.hero__who {
  max-width: 33rem;
  margin-top: 1.75rem;
  color: var(--fg-muted);
  font-size: 1.1875rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
}

.hero__email {
  margin-top: 1.5rem;
  color: var(--fg-muted);
  font-size: 1rem;
  overflow-wrap: anywhere;
}

.note {
  padding-block: clamp(2.5rem, 6vw, 4rem);
  background: var(--signal);
  color: var(--ink);
  --link: var(--ink);
}

.note__grid {
  display: grid;
  gap: 1rem 4rem;
}

.note__title {
  font-size: clamp(1.875rem, 4vw, 2.75rem);
}

.note__body {
  display: grid;
  gap: 0.85rem;
  max-width: 44rem;
  font-size: 1.125rem;
}

@media (min-width: 960px) {
  .hero__grid {
    grid-template-columns: 1.15fr 1fr;
  }

  .note__grid {
    grid-template-columns: 1fr 1.6fr;
  }
}
</style>
