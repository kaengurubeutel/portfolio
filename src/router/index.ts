import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Views/HomeView.vue'
import ProjectsView from '@/Views/ProjectsView.vue'
import ProjectDetailView from '@/Views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/project/:slug', component: ProjectDetailView }
  ]
})

export default router
