<template>
  <header class="header on-night">
    <div class="wrap header__row">
      <a href="/" class="logo">
        <span class="logo__mark" aria-hidden="true">L</span>
        <span>LuLu <span class="logo__studio">Studio</span></span>
      </a>
      <nav aria-label="Main">
        <ul class="nav">
          <li class="nav__wide"><a href="/#work">Work</a></li>
          <li class="nav__wide"><a href="/#how">How it works</a></li>
          <li class="nav__wide"><a href="/#about">About</a></li>
          <li><a href="/#contact" class="nav__contact">Get in touch</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.5rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--fg);
  font: 700 1.3rem/1 var(--font-display);
  letter-spacing: -0.02em;
  text-decoration: none;
}

.logo__mark {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  background: var(--signal);
  color: var(--ink);
  font-size: 1.2rem;
}

.logo__studio {
  color: var(--fg-muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1rem;
}

.nav a {
  color: var(--fg);
  text-decoration: none;
}

.nav a:hover {
  color: var(--signal);
}

.nav .nav__contact {
  padding: 0.45rem 1rem;
  border: 1.5px solid var(--signal);
  border-radius: 999px;
  color: var(--signal);
  font-weight: 600;
}

.nav .nav__contact:hover {
  background: var(--signal);
  color: var(--ink);
}

.nav__wide {
  display: none;
}

@media (min-width: 760px) {
  .nav__wide {
    display: list-item;
  }
}
</style>
