import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import CommunityView from '../views/CommunityView.vue'
import LoginView from '../views/LoginView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'vue-school-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/details/:productId',
      name: 'detail',
      component: DetailView
    },
  ]
})

export default router
