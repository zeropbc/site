<template>
  <header class="site-header">
    <div class="header-row">
      <a href="/" class="brand" aria-label="Zero Labs">
        <img
          src="/cdn/SVG/Logo Dark BG-less.svg"
          alt="Zero Labs"
          class="brand-logo brand-logo--dark"
          width="24"
          height="27"
        />
        <img
          src="/cdn/SVG/Logo Light BG-less.svg"
          alt="Zero Labs"
          class="brand-logo brand-logo--light"
          width="24"
          height="27"
        />
      </a>
      <nav class="nav" aria-label="Main Navigation">
        <a href="/#projects">Projects</a>
        <a href="/#news">News</a>
        <a href="/helios">Helios</a>
        <a href="/#more">More</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
.header-row {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
}
.brand { display: flex; align-items: center; }
.brand-logo {
  height: 1.25rem;
  width: auto;
  display: none;
}

/* Dark mode (default): show dark logo (white fill) */
.brand-logo--dark { display: block; }

/* Light mode: swap logos */
@media (prefers-color-scheme: light) {
  .brand-logo--dark { display: none; }
  .brand-logo--light { display: block; }
}

.nav { display: flex; align-items: center; gap: 1.25rem; }
.nav a { color: var(--fg-muted); font-size: 0.9rem; transition: color 0.15s; }
.nav a:hover { color: var(--fg); }
</style>