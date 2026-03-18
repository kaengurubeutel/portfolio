<script setup lang="ts">
import HeaderComponent from './Components/HeaderComponent.vue'
</script>

<template>
  <div id="app">
    <HeaderComponent />

    <main>
      <router-view />
    </main>


  </div>
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  font-family:
    'Geist' sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
}
</style>
