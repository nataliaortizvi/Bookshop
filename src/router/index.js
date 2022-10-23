import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import DetailView from '../views/DetailView.vue'
import AddBookView from '../views/AddBookView.vue'

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
      props: true,
      component: BooksView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/details/:productId',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/addbook',
      name: 'addbook',
      component: AddBookView
    },
  ]
})

export default router
