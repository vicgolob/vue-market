import { createRouter, createWebHistory } from 'vue-router'
import ShowcaseView from '@/views/ShowcaseView.vue'

// lazy loaded pages
const CartView = () => import('@/views/CartView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'showcase'
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: ShowcaseView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

export default router
