import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projects', component: import('@/Views/ProjectsView.vue') },
    { path: '/project/:slug', component: import('@/Views/ProjectDetailView.vue') }
  ],

})

export default router
