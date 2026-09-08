<script setup>
</script>

<template>
  <div class="project helios">
    <header class="site-header">
      <div class="header-row">
        <a href="/" class="brand" aria-label="Zero Labs">
          <span class="brand-mark">z0</span>
          <span class="brand-name">Zero Labs</span>
        </a>
        <nav class="nav" aria-label="Main Navigation">
          <a href="/#projects">Projects</a>
          <a href="/#news">News</a>
          <a href="/helios">Helios</a>
        </nav>
      </div>
    </header>

    <main>
      <h1>Helios</h1>
      <p class="status">In design phase.</p>
      <p class="description">
        A serious scientific visualization tool — not a game. Fully data-driven architecture: no hardcoded object types, hierarchical spatial resolution, designed for massive astronomical datasets on ordinary hardware.
      </p>
      <p class="placeholder-note">Details coming. No timeline commitments.</p>
      <a href="/" class="back">← Back to Zero Labs</a>
    </main>
  </div>
</template>

<style scoped>
.project { min-height: 100vh; display: flex; flex-direction: column; }

.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  height: 4rem;
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
  justify-content: space-between;
}
.brand { display: flex; align-items: center; gap: 0.6rem; color: var(--fg); }
.brand-mark {
  font-weight: 700;
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.75rem; height: 1.75rem;
  border: 1.5px solid currentColor;
  border-radius: 0.55rem;
}
.brand-name { font-size: 1rem; font-weight: 600; letter-spacing: -0.01em; }
.nav { display: flex; gap: 1.5rem; }
.nav a { color: var(--fg-muted); font-size: 0.95rem; transition: color 0.15s; }
.nav a:hover { color: var(--fg); }

main {
  flex: 1;
  max-width: 72ch;
  padding: 9rem 2rem 3rem;
}
h1 { font-size: clamp(3rem, 7vw, 5rem); line-height: 1; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
.status { font-family: var(--font-sans); font-size: 0.9rem; color: var(--fg-muted); margin-bottom: 2rem; }
.description { color: var(--fg-muted); line-height: 1.7; }
.placeholder-note { font-family: var(--font-sans); font-size: 0.85rem; color: var(--fg-muted); margin-top: 2rem; }
.back { display: inline-block; margin-top: 3rem; font-family: var(--font-sans); font-size: 0.85rem; border-bottom: 1px solid var(--fg-muted); padding-bottom: 0.15rem; }
</style>
