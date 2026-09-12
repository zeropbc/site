<script setup>
</script>

<template>
  <div class="project helios">
    <SiteHeader />

    <main>
      <h1>Helios</h1>
      <p class="status">In development.</p>
      <p class="description">
        A serious scientific visualization tool — not a game. A browser-based solar-system visualizer built on real-time J2000 orbital mechanics, physical body dimensions, and data-driven astronomy records. Fully data-driven architecture: no hardcoded object types, hierarchical spatial resolution, designed for massive astronomical datasets on ordinary hardware.
      </p>
      <ul class="features">
        <li>Live date-based Kepler propagation from J2000 ecliptic elements</li>
        <li>Three-dimensional orbital planes with real inclinations and ascending nodes</li>
        <li>Data-driven records for planets, dwarf planets, centaurs, moons, and satellites</li>
        <li>Instanced rendering for very large minor-body catalogs</li>
        <li>No-build static deployment — a plain web server is enough to run it</li>
      </ul>
      <p class="placeholder-note">Actively in development. No timeline commitments.</p>
      <p><a href="https://zeropbc.github.io/Helios/" class="launch" target="_blank" rel="noopener">Launch Helios Engine →</a></p>
      <a href="/" class="back">← Back to Zero Labs</a>
    </main>
  </div>
</template>

<style scoped>
.project { min-height: 100vh; display: flex; flex-direction: column; }

main {
  flex: 1;
  max-width: 72ch;
  padding: 9rem 2rem 3rem;
}
h1 { font-size: clamp(3rem, 7vw, 5rem); line-height: 1; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
.status { font-family: var(--font-sans); font-size: 0.9rem; color: var(--fg-muted); margin-bottom: 2rem; }
.description { color: var(--fg-muted); line-height: 1.7; }
.features {
  list-style: none;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.features li {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--fg-muted);
  padding-left: 1.15rem;
  position: relative;
}
.features li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--border);
}
.placeholder-note { font-family: var(--font-sans); font-size: 0.85rem; color: var(--fg-muted); margin-top: 2rem; }
.launch { display: inline-block; margin-top: 1.5rem; font-family: var(--font-sans); font-size: 0.95rem; color: var(--fg); border: 1px solid var(--fg-muted); border-radius: 0.5rem; padding: 0.5rem 1rem; }
.back { display: inline-block; margin-top: 3rem; font-family: var(--font-sans); font-size: 0.85rem; border-bottom: 1px solid var(--fg-muted); padding-bottom: 0.15rem; }
</style>
