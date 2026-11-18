<template>
  <header class="header">
    <div class="wrap header__row">
      <a href="/" class="logo">
        <span class="logo__mark" aria-hidden="true">L</span>
        <span>LuLu Studio</span>
      </a>
      <nav class="nav" aria-label="Main">
        <ul>
          <li><a href="/#work">Work</a></li>
          <li><a href="/#how">How it works</a></li>
          <li><a href="/#about">About</a></li>
          <!-- /uk/ is its own page for Ukrainian clients, not a translation: a plain link, no hreflang alternates -->
          <li class="nav__lang"><a href="/uk/" lang="uk" hreflang="uk">Українською</a></li>
        </ul>
      </nav>
      <a href="/#contact" class="button header__cta">Get in touch</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--border);
}

.header__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  padding-block: 0.9rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 44px;
  font: 800 20px/1 var(--font-display);
  letter-spacing: -0.03em;
  text-decoration: none;
}

.logo__mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: var(--navy);
  color: var(--accent);
  font-size: 20px;
}

/* Phones: logo and button on the first line, the links on a second line */
.nav {
  order: 3;
  width: 100%;
}

.nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0 1.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav ul a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--text-2);
  font-weight: 500;
  text-decoration: none;
}

.nav ul a:hover {
  color: var(--navy);
  text-decoration: underline;
}

.header__cta {
  min-height: 44px;
  padding-inline: 1.25rem;
  font-size: 16px;
}

/* Four links don't fit one line on a 375px phone: there the language link is in the footer only */
.nav__lang {
  display: none;
}

@media (min-width: 760px) {
  .nav {
    order: 0;
    width: auto;
    margin-left: auto;
  }
}

@media (min-width: 768px) {
  .nav__lang {
    display: list-item;
  }
}
</style>
