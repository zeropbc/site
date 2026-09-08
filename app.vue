<template>
  <div class="site-wrapper">
    <div class="bg-static" aria-hidden="true"></div>
    <NuxtPage />
  </div>
</template>

<style scoped>
.site-wrapper { position: relative; min-height: 100vh; overflow: hidden; }
.bg-static {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: var(--bg);
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: -1;
  pointer-events: none;
}
</style>
