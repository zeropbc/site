<script setup>
import SquircleButton from '~/components/SquircleButton.vue'
</script>

<template>
  <div class="landing">
  <SquircleButton class="corner-logo">Zero Labs</SquircleButton>

    <main>
      <section class="hero">
        <h1>Zero PBC</h1>
        <p class="subtitle">An independent Public Benefit Organization. Linux-first. Open source. No hierarchy.</p>
        <div class="ctas">
          <a href="/silo" class="cta">Explore Silo</a>
          <a href="#projects" class="cta-secondary">Our work</a>
        </div>
      </section>

      <section id="projects" class="projects-preview">
        <h2>Projects</h2>
        <div class="cards">
          <a href="/silo" class="card">
            <h3>Silo <span class="tag">v0.9</span></h3>
            <p>Open-source CLI/TUI agent for the terminal — model-agnostic, local-first, Linux-native.</p>
          </a>
          <a href="/helios" class="card placeholder">
            <h3>Helios</h3>
            <p>Lab-scale astronomical visualization engine. In design phase.</p>
          </a>
        </div>
      </section>
    </main>

    <footer>
      <p>GPLv3-or-later. Code is free; identity is not.</p>
    </footer>
  </div>
</template>

<style scoped>
.landing { min-height: 100vh; display: flex; flex-direction: column; padding: 3.5rem 2rem 3rem; }
.hero { min-height: 85vh; display: flex; flex-direction: column; justify-content: center; }
.hero h1 { font-size: clamp(3rem, 8vw, 6rem); line-height: 1.05; letter-spacing: -0.03em; font-family: var(--font-sans); margin-bottom: 1.5rem; }
.subtitle { font-size: 1.1rem; color: var(--fg-muted); max-width: 42ch; }
.ctas { margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap; }
.cta { background: var(--fg); color: var(--bg); padding: 0.85rem 1.5rem; font-family: var(--font-mono); font-size: 0.95rem; }
.cta-secondary { border: 1px solid var(--fg-muted); color: var(--fg); padding: 0.85rem 1.5rem; font-family: var(--font-mono); font-size: 0.95rem; }

.projects-preview { margin-top: 8rem; }
.projects-preview h2 { font-size: 1.25rem; font-family: var(--font-mono); margin-bottom: 2rem; }
.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr)); gap: 1.5rem; }
.card { border: 1px solid #222; padding: 1.75rem; display: block; transition: border-color 0.2s; }
.card:hover { border-color: #555; }
.card h3 { font-family: var(--font-sans); font-size: 1.1rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
.tag { font-family: var(--font-mono); font-size: 0.7rem; border: 1px solid #333; padding: 0.15rem 0.4rem; }
.card p { color: var(--fg-muted); font-size: 0.95rem; }
.placeholder { opacity: 0.6; }

footer { margin-top: auto; padding-top: 6rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--fg-muted); }
</style>
