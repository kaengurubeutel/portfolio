<script setup lang="ts"></script>

<template>
  <ApolloQuery :query="(gql: any) => gql`
        query MyQuery {
          projectPreviews {
            id
            projectSlug
            projectName
            projectDescription {
              markdown
            }
            skills
            coverImage {
              url
            }
          }
        }
      `
    ">
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading" class="loading">Loading projects...</div>

      <div v-else-if="error" class="error">Error: {{ error.message }}</div>

      <div v-else-if="data && data.projectPreviews" class="project-list">
        <article v-for="project in data.projectPreviews" :key="project.id" class="project-card">

          <div class="card-content">
            <div class="text-top">
              <div class="project-skill-container">
                <span v-for="skill in project.skills" :key="skill" class="project-skill">
                  {{ skill }}
                </span>
              </div>
              <h2 class="project-title">{{ project.projectName }}</h2>

              <p class="project-description">{{ project.projectDescription?.markdown }}</p>

            </div>

            <router-link :to="'/project/' + project.projectSlug" class="project-btn">
              <span>Open Project</span>
            </router-link>
          </div>

          <div class="card-image">
            <img :src="project.coverImage?.url" :alt="project.projectName" />
          </div>

        </article>
      </div>

      <div v-else class="no-data">No projects found.</div>
    </template>
  </ApolloQuery>
</template>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;

.project-list {
  display: flex;
  flex-direction: column;
  gap: 40px;



  .project-card {
    background-color: $clr-background;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    border-radius: $radius-outer;
    border: 1px solid $clr-font-main;
    overflow: hidden;

    @media (min-width: 1024px) {
      flex-direction: row;
      gap: 40px;
      background-color: white;
      border: none;
    }

    .card-content {
      padding: $space-standard;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      min-height: 300px;

      @media (min-width: 1024px) {
        flex: 2;
        border-radius: $radius-outer;
        border: 1px solid $clr-font-main;

      }

      .text-top {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 400px;

        .project-title {
          @include font-style(700, clamp(2rem, 1.2rem + 1vw, 2.5rem));
          margin: 0;
        }

        .project-description {
          @include font-style(400, clamp(1.6rem, 0.8rem + 0.5vw, 1.25rem));
          margin-bottom: 30px;
          max-width: 400px;
        }
      }

      .project-btn {
        @include button-interactive;
        width: calc(100% - 4*$space-standard);
        height: 32px;
        display: flex;
        justify-content: left;
        background-color: $clr-off-white;
        color: $clr-font-main;
        padding: $space-standard;
        align-items: center;
        border: 1px solid $clr-font-main;
        border-radius: $radius-inner;
        text-decoration: none;

        @media (min-width: 1024px) {
          width: calc(100% - 2*$space-standard);
        }
      }

      .project-skill-container {
        display: flex;
        flex-wrap: wrap;
        align-items: right;
        gap: 4px;


        margin-bottom: 30px;
        width: 100%;

        .project-skill {
          @include chips;
        }


      }


    }

    .card-image {
      width: 100%;
      height: 300px;
      overflow: hidden;

      @media (min-width: 1024px) {

        height: auto;
        flex: 3;
        border-radius: $radius-outer;
        border: 1px solid $clr-font-main;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media (min-width: 1024px) {
          scale: 1.1;
        }

      }
    }

  }
}
</style>
