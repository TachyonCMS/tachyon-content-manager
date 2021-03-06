// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { Auth } from 'aws-amplify'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home')
      },
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (auth.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
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
    path: '/commerce',
    component: () => import('@/layouts/commerce'),
    meta: { requiresAuth: true},
    children: [
      {
        path: '',
        name: 'CommerceHome',
        component: () => import('@/views/commerce/Home.vue')
      },
      {
        path: 'reports',
        name: 'CommerceReports',
        component: () => import('@/views/commerce/Reports.vue')
      },
      {
        path: 'config',
        name: 'CommerceConfig',
        component: () => import('@/views/commerce/Configure.vue')
      },
    ]
  },   
  {
    path: '/calendar',
    component: () => import('@/layouts/calendar'),
    meta: { requiresAuth: true},
    children: [
      {
        path: '',
        name: 'CalendarHome',
        component: () => import('@/views/calendar/Home.vue')
      },
      {
        path: 'create',
        name: 'CalendarCreateEvent',
        component: () => import('@/views/calendar/Create.vue')
      },
      {
        path: 'search',
        name: 'CalendarSearch',
        component: () => import('@/views/calendar/Search.vue')
      },
    ]
  },
  {
    path: '/compliance',
    component: () => import('@/layouts/compliance'),
    meta: { requiresAuth: true},
    children: [
      {
        path: '',
        name: 'ComplianceHome',
        component: () => import('@/views/compliance/Home.vue')
      },
      {
        path: 'register',
        name: 'ComplianceRegister',
        component: () => import('@/views/compliance/Create.vue')
      },
      {
        path: 'search',
        name: 'ComplianceSearch',
        component: () => import('@/views/compliance/Search.vue')
      },
    ]
  },
  {
    path: '/contacts',
    component: () => import('@/layouts/contact'),
    meta: { requiresAuth: true},
    children: [
      {
        path: '',
        name: 'ContactsHome',
        component: () => import('@/views/contact/Home.vue')
      },
      {
        path: 'create',
        name: 'ContactCreate',
        component: () => import('@/views/contact/Create.vue')
      },
      {
        path: 'search',
        name: 'ContactSearch',
        component: () => import('@/views/contact/Search.vue')
      },
    ]
  },
  {
    path: '/contacts/:contactId',
    component: () => import('@/layouts/contact'),
    children: [
      {
        path: '',
        name: 'ContactHome',
        component: () => import('@/views/contact/Home')
      }
    ]
  },
  {
    path: '/spaces',
    component: () => import('@/layouts/default'),
    meta: { requiresAuth: true},
    children: [
      {
        path: '',
        name: 'SpacesHome',
        component: () => import('@/views/space/ListSpaces')
      },
      {
        path: 'activity',
        name: 'SpaceActivity',
        component: () => import('@/views/space/Activity')
      },
      {
        path: 'create',
        name: 'SpaceCreate',
        component: () => import('@/views/space/Create')
      },
      {
        path: 'search',
        name: 'SearchSpaces',
        component: () => import('@/views/space/ListSpaces')
      }
    ]
  },
  {
    path: '/spaces/:spaceId',
    component: () => import('@/layouts/space'),
    children: [
      {
        path: '',
        name: 'SpaceHome',
        component: () => import('@/views/space/Home')
      },
      {
        path: 'models',
        name: 'SpaceModels',
        component: () => import('@/views/space/Models')
      },
      {
        path: 'entries',
        name: 'SpaceEntries',
        component: () => import('@/views/space/Entries')
      },
      {
        path: 'files',
        name: 'SpaceFiles',
        component: () => import('@/views/space/Files')
      },
      {
        path: 'images',
        name: 'SpaceImages',
        component: () => import('@/views/space/Images')
      },
      {
        path: 'environment',
        name: 'SpaceEnvironments',
        component: () => import('@/views/space/Environments')
      },
      {
        path: 'locale',
        name: 'SpaceLocales',
        component: () => import('@/views/space/Locales')
      },
      {
        path: 'import',
        name: 'SpaceImport',
        component: () => import('@/views/space/Import')
      }
    ]
  }
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: (to, _, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
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