import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spaces',
    name: 'Spaces',
    // route level code-splitting
    // this generates a separate chunk (spaces.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "spaces" */ '../views/Spaces.vue')
  },
  {
    path: '/entries',
    name: 'Entries',
    // route level code-splitting
    // this generates a separate chunk (entries.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "entries" */ '../views/Entries.vue')
  },
  {
    path: '/media',
    name: 'Media',
    // route level code-splitting
    // this generates a separate chunk (media.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "media" */ '../views/Media.vue')
  },
  {
    path: '/models',
    name: 'Models',
    // route level code-splitting
    // this generates a separate chunk (models.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "models" */ '../views/Models.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
