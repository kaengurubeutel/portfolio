<script setup lang="ts">
import ProjectOverviews from '@/Components/ProjectOverviews.vue'
</script>

<template>
  <section class="projects">
    <h2 id="projects-header">
    My Projects
  </h2>
    <ProjectOverviews></ProjectOverviews>
  </section>

</template>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;
.projects {
  display:flex;
  flex-direction: column;
  gap: 40px;
  padding: $space-side-mobile $space-side-mobile 0;
  z-index: 3;
  background: white;
  width: calc(100% - 2 * $space-side-mobile);
  overflow: hidden;
  position: absolute;
  top: 80px;
  padding-bottom: 60px;
}

#projects-header {
  @include font-style(700, clamp(2rem, 1.3398rem + 2.1127vw, 3.875rem));
  margin:0;
  color: #1d1a03;
}


</style>
