<template>
  <div class="site-wrapper">
    <video ref="videoEl" class="bg-video" autoplay muted playsinline>
      <source src="/assets/moonlooping.mp4" type="video/mp4" />
    </video>
    <NuxtPage />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoEl = ref(null);

function onEnded() {
  if (!videoEl.value) return;
  videoEl.value.playbackRate = -1;
  videoEl.value.play();
}

function onTimeUpdate() {
  if (!videoEl.value) return;
  if (videoEl.value.playbackRate < 0 && videoEl.value.currentTime <= 0.1) {
    videoEl.value.currentTime = 0;
    videoEl.value.playbackRate = 1;
    videoEl.value.play();
  }
}

onMounted(() => {
  if (!videoEl.value) return;
  videoEl.value.addEventListener('ended', onEnded);
  videoEl.value.addEventListener('timeupdate', onTimeUpdate);
});
</script>

<style scoped>
.site-wrapper { position: relative; min-height: 100vh; overflow: hidden; }
.bg-video {
  position: fixed;
  top: 50%; left: 50%;
  min-width: 100vw; min-height: 100vh;
  width: auto; height: auto;
  transform: translate(-50%, -50%) scale(1.1);
  filter: blur(24px) brightness(0.35);
  -webkit-filter: blur(24px) brightness(0.35);
  z-index: -1;
  object-fit: cover;
  opacity: 0.7;
  pointer-events: none;
}
</style>
