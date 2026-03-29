<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <header class="header">
    <nav class="nav">
      <button class="nav-btn icon" @click="router.push('/')">Home</button>
      <ul class="nav-list">
        <li v-if="router.currentRoute.value.path !== '/' && router.currentRoute.value.path !== '/projects'">
          <button class="nav-btn" @click="router.back()">back</button>
        </li>
        <li>
          <a href="https://github.com/kaengurubeutel" target="_blank">
            <button class="nav-btn">My Github</button>
          </a>
        </li>
        <li v-if="router.currentRoute.value.path === '/'">
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
  top: 10px;
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
  margin: $space-side-mobile;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $space-standard;
  background-color: $clr-font-main;
  border-radius: $radius-outer;

  .nav-list {
    display: flex;
    gap: $space-standard;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
    }

    a {
      all: unset;
      text-decoration: none;
    }
  }

  .nav-btn {
    @include font-style(500);
    @include button-interactive;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    padding: 4px 24px;
    color: $clr-font-main;
    background-color: $clr-off-white;
    border-radius: $radius-inner;
    border: none;
    text-align: center;
    white-space: nowrap;
    appearance: none;
    cursor: pointer;
  }

  .icon {
    width: fit-content;
  }
}
</style>