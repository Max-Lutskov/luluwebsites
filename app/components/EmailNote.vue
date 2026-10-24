<template>
  <section id="email" class="section email" aria-labelledby="email-title">
    <div class="wrap">
      <div class="email__card">
        <div class="email__text">
          <p class="label email__label">Got an email from me?</p>
          <h2 id="email-title">I made you a homepage. It’s yours to look at — free.</h2>
          <p>
            I look at small business websites. When something on one is broken or slow,
            I build a free concept of a better homepage from the business’s own photos and text
            and send it to the owner. That’s the link in my email. If you like it, reply to my email.
          </p>
        </div>
        <ul class="email__points">
          <li><span class="email__check"><AppIcon name="check" /></span>Costs nothing.</li>
          <li><span class="email__check"><AppIcon name="check" /></span>Nothing to sign.</li>
          <li><span class="email__check"><AppIcon name="check" /></span>Reply “no thanks” and you won’t hear from me again.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.email {
  padding-bottom: 0;
}

.email__card {
  display: grid;
  gap: 2.5rem 4rem;
  padding: clamp(28px, 5vw, 64px);
  border-radius: var(--r-card);
  background: var(--navy);
  color: #fff;
}

.email__text {
  display: grid;
  gap: 1.25rem;
}

.email__label {
  justify-self: start;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: var(--accent);
  color: var(--navy);
}

.email__text p:not(.label) {
  max-width: 36rem;
  color: var(--on-navy);
}

.email__points {
  display: grid;
  align-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.email__points li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-block: 1.1rem;
  font-size: 19px;
  font-weight: 600;
}

.email__points li + li {
  border-top: 1px solid rgb(255 255 255 / 0.14);
}

.email__check {
  display: grid;
  place-items: center;
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid var(--accent);
  color: var(--accent);
}

@media (min-width: 960px) {
  .email__card {
    grid-template-columns: 1.4fr 1fr;
  }
}
</style>
