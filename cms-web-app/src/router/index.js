import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Auth } from 'aws-amplify'

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
    component: () => import(/* webpackChunkName: "spaces" */ '../views/Spaces.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:id',
    name: 'Space',
    // route level code-splitting
    // this generates a separate chunk (spaces.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "spaces" */ '../views/Space.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:id/entries',
    name: 'Entries',
    // route level code-splitting
    // this generates a separate chunk (entries.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "entries" */ '../views/Entries.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:id/entries/:id',
    name: 'Entry',
    // route level code-splitting
    // this generates a separate chunk (entries.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "entries" */ '../views/Entry.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/media',
    name: 'Media',
    // route level code-splitting
    // this generates a separate chunk (media.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "media" */ '../views/Media.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/models',
    name: 'Models',
    // route level code-splitting
    // this generates a separate chunk (models.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "models" */ '../views/Models.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (auth.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser().then(() => {
      next()
    }).catch(() => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router
