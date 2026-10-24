<!-- Hero illustration: a small-business site on a phone, plus the quote request it produces.
     Purely decorative (aria-hidden): the texts are placeholders, not a real business. -->
<template>
  <div class="illo" aria-hidden="true">
    <div class="phone-frame illo__phone">
      <div class="mini">
        <div class="mini__bar">
          <span class="mini__logo" />
          <span class="mini__menu"><i /><i /><i /></span>
        </div>
        <div class="mini__photo">
          <span class="mini__sun" />
          <span class="mini__hill mini__hill--back" />
          <span class="mini__hill" />
          <span class="mini__house" />
        </div>
        <div class="mini__body">
          <p class="mini__title">Your business name</p>
          <p class="mini__lines"><i /><i class="short" /></p>
          <div class="mini__form">
            <p class="mini__form-title">Get a free quote</p>
            <span class="mini__input" />
            <span class="mini__input" />
            <span class="mini__send">Send request</span>
          </div>
        </div>
        <div class="mini__call">
          <AppIcon name="phone" :size="15" />
          Tap to call
        </div>
      </div>
    </div>

    <div class="card illo__toast">
      <span class="illo__check"><AppIcon name="check" :size="18" /></span>
      <span>
        <strong>New quote request</strong>
        <small>sent to your inbox</small>
      </span>
    </div>
  </div>
</template>

<style scoped>
.illo {
  position: relative;
  display: grid;
  justify-items: center;
  padding: 0 2rem 2.5rem;
}

.illo__phone {
  width: min(290px, 78vw);
  aspect-ratio: 9 / 19;
}

.mini {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 23px;
  background: var(--card);
  overflow: hidden;
}

.mini__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px 10px;
}

.mini__logo {
  width: 56px;
  height: 12px;
  border-radius: 4px;
  background: var(--navy);
}

.mini__menu {
  display: grid;
  gap: 3px;
}

.mini__menu i {
  width: 16px;
  height: 2px;
  background: var(--navy);
}

.mini__photo {
  position: relative;
  height: 32%;
  margin: 0 12px;
  border-radius: 14px;
  background: linear-gradient(180deg, #9fb4dd 0%, #c9d6ee 100%);
  overflow: hidden;
}

.mini__sun {
  position: absolute;
  top: 18%;
  right: 16%;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--accent);
}

.mini__hill {
  position: absolute;
  bottom: -40%;
  left: -10%;
  width: 90%;
  height: 80%;
  border-radius: 50%;
  background: #3e5a8f;
}

.mini__hill--back {
  left: 35%;
  width: 90%;
  bottom: -45%;
  background: #5f79ad;
}

.mini__house {
  position: absolute;
  bottom: 14%;
  left: 22%;
  width: 34px;
  height: 24px;
  background: var(--card);
  box-shadow: 0 -12px 0 -4px var(--navy);
}

.mini__body {
  flex: 1;
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 14px 16px;
}

.mini__title {
  font: 800 19px/1.05 var(--font-display);
  letter-spacing: -0.03em;
}

.mini__lines {
  display: grid;
  gap: 5px;
}

.mini__lines i {
  height: 6px;
  border-radius: 3px;
  background: var(--border);
}

.mini__lines .short {
  width: 65%;
}

.mini__form {
  display: grid;
  gap: 6px;
  margin-top: 4px;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 12px;
}

.mini__form-title {
  font-size: 12px;
  font-weight: 600;
}

.mini__input {
  height: 18px;
  border: 1px solid var(--border-strong);
  border-radius: 6px;
}

.mini__send {
  padding: 5px;
  border-radius: 999px;
  background: var(--navy);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
}

.mini__call {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  background: var(--accent);
  font-size: 14px;
  font-weight: 600;
}

.illo__toast {
  position: absolute;
  bottom: 18%;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  border-radius: 18px;
  box-shadow: 0 18px 40px -20px rgb(13 21 48 / 0.35);
  animation: toast-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) 0.9s both;
}

.illo__toast strong,
.illo__toast small {
  display: block;
}

.illo__toast strong {
  font-size: 15px;
}

.illo__toast small {
  color: var(--muted);
  font-size: 13px;
}

.illo__check {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent);
}

@keyframes toast-in {
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
}

@media (prefers-reduced-motion: reduce) {
  .illo__toast { animation: none; }
}

@media (min-width: 640px) {
  .illo__toast { left: 2%; }
}
</style>
