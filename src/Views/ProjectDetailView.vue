<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import gql from 'graphql-tag';

const route = useRoute();

const projectSlug = ref(route.params.slug as string);


const MY_QUERY = gql`
  query MyQuery($slug: String!) {
    projectPreview(where: { projectSlug: $slug }) {
      projectName
      projectDescription {
        markdown
      }
      skills
      projectSection {
        heading
        images {
          url
        }
        textContent {
          markdown
        }
      }
    }
  }
`;

</script>

<template>

  <ApolloQuery :query="MY_QUERY" :variables="{ slug: projectSlug }">
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading">Loading</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else-if="data" class="project-detail-container">

        <aside class="project-detail">
          <div class="project-detail-content">
            <div class="project-detail-topsection">
              <h2 class="project-detail-header">
                {{ data.projectPreview.projectName }}
              </h2>
              <p class="project-detail-description">
                {{ data.projectPreview.projectDescription.markdown }}
              </p>
            </div>


            <div class="project-detail-skills">

              <ul>
                <li v-for="skill in data.projectPreview.skills" :key="skill">{{ skill }}</li>
              </ul>
            </div>

          </div>


        </aside>

        <main>
          <div v-for="section in data.projectPreview.projectSection" :key="section.heading" class="project-sections">


            <div v-for="image in section.images" :key="image.url">
              <img :src="image.url" alt="Project Image" />
            </div>
            <div class="section-text-wrapper">
              <h2>{{ section.heading }}</h2>
              <p>{{ section.textContent?.markdown }}</p>
            </div>

          </div>
        </main>



      </div>
    </template>
  </ApolloQuery>


</template>

<style lang="scss" scoped>
@use "@/assets/main.scss" as *;

main {
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
}

.project-detail-container {
  position: absolute;
  top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: $space-standard; // mobile
  box-sizing: border-box;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    padding: $space-side-desktop; // desktop
  }
}

.project-detail {

  padding-right: $space-side-desktop;
  min-width: 300px;
  flex-grow: 1;

  @media (min-width: 1024px) {
    border-right: 3px solid #1d1a03;
    position: sticky;
    top: calc(80px - 20px);
    height: calc(100vh - 80px);
    overflow-y: auto;
  }

  .project-detail-content {
    display: flex;
    flex-direction: column;

    .project-detail-topsection {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;

      .project-detail-header {
        @include font-style(700, clamp(2rem, 1.2rem + 1vw, 2.5rem));
        margin: 0;
      }

      .project-detail-description {
        @include font-style(400, clamp(1rem, 0.8rem + 1vw, 1.2rem));
        max-width: 400px;
      }
    }

    .project-detail-skills {

      margin: 0;
      padding: 0;
      margin-bottom: 30px;


      ul {
        display: flex;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        align-items: right;
        gap: 4px;
        list-style: none;
      }

      li {
        @include chips;
        width: fit-content
      }
    }
  }
}

.project-sections {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;



  .section-text-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 40px;
    max-width: 600px;
  }

  h2 {
    @include font-style(700, clamp(1.5rem, 1.2rem + 1vw, 2rem));
    margin: 0;
    margin-bottom: 20px;
  }

  p {
    @include font-style(400, clamp(1rem, 0.8rem + 1vw, 1.2rem));
    width: 100%;
    max-width: 600px;
  }

  img {
    width: 100%;
    margin-bottom: 20px;
  }


}
</style>
