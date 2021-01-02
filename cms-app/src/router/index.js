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
    path: '/spaces/:spaceId',
    name: 'Space',
    // route level code-splitting
    // this generates a separate chunk (space.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "space" */ '../views/Space.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/locales',
    name: 'Locales',
    component: () => import(/* webpackChunkName: "locales" */ '../views/Locales.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/models',
    name: 'Models',
    component: () => import(/* webpackChunkName: "models" */ '../views/Models.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/entries',
    name: 'Entries',
    component: () => import(/* webpackChunkName: "contentList" */ '../views/Entries.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/photos',
    name: 'Photos',
    component: () => import(/* webpackChunkName: "photos" */ '../views/Photos.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/files',
    name: 'Files',
    component: () => import(/* webpackChunkName: "files" */ '../views/Files.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/videos',
    name: 'Videos',
    component: () => import(/* webpackChunkName: "videos" */ '../views/Videos.vue'),
    meta: { requiresAuth: true}
  },

  {
    path: '/spaces/:spaceId/locales/:localeId',
    name: 'Locale',
    component: () => import(/* webpackChunkName: "locales" */ '../views/Locale.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/models/:modelId',
    name: 'Model',
    component: () => import(/* webpackChunkName: "model" */ '../views/Model.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/entries/:entryId',
    component: () => import(/* webpackChunkName: "entry" */ '../views/Entry.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/photos/:photoId',
    name: 'Photo',
    component: () => import(/* webpackChunkName: "photo" */ '../views/Photo.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/files/:fileId',
    name: 'File',
    component: () => import(/* webpackChunkName: "file" */ '../views/File.vue'),
    meta: { requiresAuth: true}
  },
  {
    path: '/spaces/:spaceId/videos/:videoId',
    name: 'Video',
    component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue'),
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