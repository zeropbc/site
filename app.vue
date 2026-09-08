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
  top: 50%; left: 50%;
  width: 110vw; height: 110vh;
  transform: translate(-50%, -50%);
  background-image: url('/cdn/Helios.png');
  background-size: cover;
  background-position: center;
  filter: blur(18px) brightness(0.25);
  -webkit-filter: blur(18px) brightness(0.25);
  z-index: -1;
  opacity: 0.8;
  pointer-events: none;
}
</style>
