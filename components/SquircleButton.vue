<template>
  <a
    href="/"
    class="squircle-button"
    :class="{ collapsed: isCollapsed }"
    aria-label="Zero Labs"
  >
    <span class="inner">
      <slot name="icon">
        <svg v-if="!$slots.icon" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="24" height="24" rx="10" stroke="currentColor" stroke-width="2.5" />
          <text x="14" y="19" text-anchor="middle" font-family="monospace" font-size="16" font-weight="700" fill="currentColor">z0</text>
        </svg>
      </slot>
      <span class="label" :class="{ hidden: isCollapsed }">
        <slot>Zero Labs</slot>
      </span>
    </span>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isCollapsed = ref(false);

function onScroll() {
  const y = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
  isCollapsed.value = y > 5;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.squircle-button {
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.1rem;
  border-radius: 22px; /* squircle: rounded square, not pill */
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(45px) saturate(180%);
  -webkit-backdrop-filter: blur(45px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--fg);
  font-family: var(--font-sans);
  text-decoration: none;
  transition: width 0.35s ease, padding 0.35s ease, border-color 0.2s ease;
  overflow: hidden;
  white-space: nowrap;
}

.squircle-button:hover {
  border-color: rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.1);
}

.inner {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}

.label {
  opacity: 1;
  transition: opacity 0.25s ease, max-width 0.35s ease, margin 0.35s ease;
  max-width: 200px;
  overflow: hidden;
}

.label.hidden {
  display: none;
}

.squircle-button.collapsed {
  padding: 0.55rem;
}

.squircle-button.collapsed .inner {
  gap: 0;
}
</style>
