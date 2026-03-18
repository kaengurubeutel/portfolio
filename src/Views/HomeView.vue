<script setup lang="ts">

</script>

<template>
  <div class="start-section">
    <div class="bg-blobs">
      <div class="blob-yellow"></div>
    </div>

    <div class="bg-blobs">
      <div class="blob-yellow"></div>
    </div>

    <div class="content">
      <p id="intro-text">
        Building & Designing<br />
        Apps, Brands and Products<br />
        in the digital Space
      </p>
      <h1>Maximilian <br />Uhlig</h1>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;

.start-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;



  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    left: $space-side-mobile;
    margin-bottom: $space-side-mobile;
    gap: 40px;
    z-index: 2;
  }
}

.bg-blobs {
  position: absolute;
  inset: 0;
  z-index: 1;
  filter: blur(100px);
  pointer-events: none;
}

.blob-yellow {
  position: absolute;
  width: 100vw;
  height: 100vh;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(255, 220, 100, 1) 0%,
    rgba(255, 220, 100, 0) 70%
  );

  top: -10%;
  right: -10%;
  will-change: transform;
  animation: organic-drift 25s infinite alternate ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .yellow-dot {
    animation: none;
    transform: none;
  }
}

@keyframes organic-drift {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {

    transform: translate(-30vw, 10vh) scale(1.1) ;
  }
  66% {

    transform: translate(-50vw, 5vh) scale(1.4);
  }
  100% {

    transform: translate(-20vw, 2vh) scale(1.05);
  }
}
  #projects-header {
    @include font-style(700, clamp(2rem, 1.3398rem + 2.1127vw, 3.875rem));
    margin-bottom: 40px;
    color: #1d1a03;

    padding: $space-standard $space-side-mobile 40px $space-side-mobile;



  }


  #intro-text {

  font-size: clamp(2rem, 1.3398rem + 2.1127vw, 3.875rem);
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: -10px;
  color: 1d1a03;

}

h1 {
  font-size: clamp(4rem, 0.8546rem + 12.5189vw, 14.375rem);
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.04em;
  line-height: 0.9;
  color: #121212;
}

</style>
