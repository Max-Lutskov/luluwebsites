<template>
  <header class="header">
    <div class="wrap header__row">
      <a href="/uk/" class="logo">
        <span class="logo__mark" aria-hidden="true">L</span>
        <span>LuLu Studio</span>
      </a>
      <nav class="nav" aria-label="Головне меню">
        <ul>
          <li><a href="/uk/#work">Роботи</a></li>
          <li><a href="/uk/#prices">Ціни</a></li>
          <li><a href="/uk/#how">Як працюємо</a></li>
        </ul>
      </nav>
      <a href="/uk/#contact" class="button header__cta">Написати</a>
    </div>
  </header>
</template>

<style scoped>
/* Same layout as SiteHeader.vue */
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

@media (min-width: 760px) {
  .nav {
    order: 0;
    width: auto;
    margin-left: auto;
  }
}
</style>
