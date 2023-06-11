import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/user/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/user/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue')
    }
  ]
})

export default router
