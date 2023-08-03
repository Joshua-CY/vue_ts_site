import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/DetailView.vue')
    },
    {
      path: '/artical',
      name: 'artical',
      component: () => import('@/views/ArticalView.vue')
    },
    {
      path: '/artical/:id',
      name: 'articalDetails',
      component: () => import('@/views/ArticalDetails.vue'),
      props: true
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: () => import('@/views/CreatePost.vue')
    }
  ]
})

export default router
