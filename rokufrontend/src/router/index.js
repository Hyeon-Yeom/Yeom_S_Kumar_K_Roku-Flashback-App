import { createRouter, createWebHashHistory } from 'vue-router'
import Start from '../views/Starting.vue'
import Movie from '../views/MoviePg.vue'
import All from '../components/All.vue'
import Music from '../components/Music.vue'
import TvShow from '../components/TvShow.vue'
import Register from '../components/Register.vue'
import Subscribe from '../components/Subscribe.vue'
import SubscribeOptions from '../components/SubscribeOptions.vue'
import Posters from '../components/Posters.vue'
import Nav from '../components/Nav.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },

  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/movie',
    name: 'posters',
    component: Posters
  },

  {
    path: '/movie, /music, /all, /tvshow',
    name: 'nav',
    component: Nav
  },

  {
    path: '/music',
    name: 'music',
    component: Music
  },

  {
    path: '/tvshow',
    name: 'tvshow',
    component: TvShow
  },

  {
    path: '/all',
    name: 'all',
    component: All
  },

  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/subscribe',
    name: 'subscribe',
    component: Subscribe
  },

  {
    path: '/subscribeOptions',
    name: 'subscribeOptions',
    component: SubscribeOptions
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
