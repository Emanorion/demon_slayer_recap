import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EntertaimentDistrict from '@/views/EntertaimentDistrict.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/entertainment_district',
    name: 'season3',
    component: EntertaimentDistrict
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
