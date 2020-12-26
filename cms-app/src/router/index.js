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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/albums',
    name: 'Albums',
    // route level code-splitting
    // this generates a separate chunk (albums.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "albums" */ '../views/Albums.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/albums/:id',
    name: 'Album',
    // route level code-splitting
    // this generates a separate chunk (album.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "album" */ '../views/Album.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/albums/:id/camera',
    name: 'AlbumCamera',
    component: () => import(/* webpackChunkName: "camera" */ '../views/Camera.vue'),
    meta: { requiresAuth: true} 
  },
  {
    path: '/albums/:id/screen',
    name: 'AlbumScreen',
    component: () => import(/* webpackChunkName: "screenShot" */ '../views/ScreenShot.vue'),
    meta: { requiresAuth: true} 
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
    // this generates a separate chunk (space.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "space" */ '../views/Space.vue'),
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