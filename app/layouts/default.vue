<script setup>
</script>

<template>
  <div class="page">
    <img class="body-bg" src="/images/bg.svg" alt="" width="1920" height="10264">
    <div class="top">
      <Header />
    </div>
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background: var(--background-gradient, linear-gradient(357deg, #EB1380 -30.04%, #CC137A -14.78%, #661368 41.18%, #25135D 79.33%, #0C1359 97.13%));
  overflow: hidden;
}

.body-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
}

// Ensure content pushes footer down
main {
  flex: 1;
}

.top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 9.2rem;
  background-color: $magenta;
}
</style>
