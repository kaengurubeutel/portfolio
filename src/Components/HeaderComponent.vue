<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li v-if="router.currentRoute.value.path !== '/'">
          <button class="nav-btn" @click="router.back()">back</button>
        </li>
        <li v-if="router.currentRoute.value.path !== '/'">
          <button class="nav-btn" @click="router.push('/')">Home</button>
        </li>
        <li>
          <button class="nav-btn" @click="router.push('/projects')">Projects</button>
        </li>


      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;

.header {
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
}

.nav {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;

  .nav-list {
    display: flex;
    gap: $space-standard;
    padding: $space-standard;
    list-style: none;
    background-color: $clr-font-main;
    border-radius: $radius-outer;

    li {
      display: flex;
    }

    .nav-btn {
      // Apply our Global Design System
      @include font-style(500);
      @include button-interactive;

      // Layout & Sizing
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      height: 36px;
      padding: 4px 24px;

      // Theming
      color: $clr-font-main;
      background-color: $clr-off-white;
      border-radius: $radius-inner;

      // Reset default button styles
      border: none;
      text-align: center;
      white-space: nowrap;
      appearance: none;
    }
  }
}
</style>
