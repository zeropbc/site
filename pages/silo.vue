<script setup>
import SquircleButton from '~/components/SquircleButton.vue'
</script>

<template>
  <div class="project silo">
    <SquircleButton>Zero Labs</SquircleButton>

    <main>
      <div class="badge">Primary active product</div>
      <h1>Silo <span class="version">v0.9.x</span></h1>
      <p class="tagline">An open source agent for general intelligence, in your terminal.</p>

      <section class="details">
        <h2>What it is</h2>
        <p>
          Silo (S1L0) is a model-agnostic CLI/TUI agent built natively for Linux. Not a chatbot wrapper — a serious terminal tool that treats AI as a first-class capability: configurable providers, MCP support, agent skills, structured contexts, and full local storage.
        </p>

        <ul class="features">
          <li>Multi-provider: Anthropic, OpenAI, Google, OpenRouter, OpenCode</li>
          <li>Local-first: SQLite storage, TOML config, nothing leaves the machine except model API calls</li>
          <li>Full chat management: sidebar navigation, rename/delete, search, tagging, export</li>
          <li>Web search via DuckDuckGo Lite — keyless, no proprietary dependency</li>
          <li>MCP integration; AGENTS.md / SKILLS.md support</li>
          <li>Built-in filesystem tool with hard-coded protections</li>
          <li>Built on OpenTUI; distributed via self-hosted Verdaccio registry</li>
        </ul>
      </section>

      <div class="actions">
        <a href="#" class="btn">Source (GPLv3)</a>
        <a href="#" class="btn-secondary">Docs</a>
        <a href="#" class="btn-secondary">@zeropbc/silo</a>
      </div>
    </main>
  </div>
</template>

<style scoped>
.project { min-height: 100vh; padding: 6rem 2rem 3rem; max-width: 72ch; }
.badge { font-family: var(--font-mono); font-size: 0.75rem; border: 1px solid #333; padding: 0.25rem 0.6rem; display: inline-block; margin-bottom: 1rem; }
h1 { font-size: clamp(3rem, 7vw, 5rem); line-height: 1; letter-spacing: -0.03em; margin-bottom: 1rem; }
.version { font-family: var(--font-mono); font-size: 0.5em; color: var(--fg-muted); margin-left: 0.5rem; vertical-align: super; }
.tagline { font-size: 1.15rem; color: var(--fg-muted); margin-bottom: 3rem; }
.details h2 { font-family: var(--font-mono); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem; }
.details p { color: #ccc; margin-bottom: 1.5rem; line-height: 1.7; }
.features { list-style: none; padding: 0; }
.features li { padding: 0.35rem 0; border-bottom: 1px solid #181818; font-family: var(--font-mono); font-size: 0.85rem; color: #ccc; }
.actions { margin-top: 3rem; display: flex; gap: 1rem; flex-wrap: wrap; }
.btn { background: var(--fg); color: var(--bg); padding: 0.85rem 1.5rem; font-family: var(--font-mono); font-size: 0.9rem; }
.btn-secondary { border: 1px solid #333; color: var(--fg); padding: 0.85rem 1.5rem; font-family: var(--font-mono); font-size: 0.9rem; }
</style>
