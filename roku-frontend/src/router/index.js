import { createRouter, createWebHashHistory } from 'vue-router'
import Movie from '../views/Movie.vue'
import SelectBox from '../components/selectBox.vue'

const routes = [
  {
    path: '/',
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
    name: 'selectbox',
    component: SelectBox
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
