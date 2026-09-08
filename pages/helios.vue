<script setup>
import SquircleButton from '~/components/SquircleButton.vue'
</script>

<template>
  <div class="project helios">
    <SquircleButton>Zero Labs</SquircleButton>

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
.project { min-height: 100vh; padding: 6rem 2rem 3rem; max-width: 72ch; }
h1 { font-size: clamp(3rem, 7vw, 5rem); line-height: 1; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
.status { font-family: var(--font-sans); font-size: 0.9rem; color: var(--fg-muted); margin-bottom: 2rem; }
.description { color: #ccc; line-height: 1.7; }
.placeholder-note { font-family: var(--font-sans); font-size: 0.85rem; color: #666; margin-top: 2rem; }
.back { display: inline-block; margin-top: 3rem; font-family: var(--font-sans); font-size: 0.85rem; border-bottom: 1px solid #333; padding-bottom: 0.15rem; }
</style>
