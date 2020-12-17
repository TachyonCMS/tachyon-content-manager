# tachyon-content-manager
Manage media from files and the camera

## Install global modules

```bash
npm install -g @aws-amplify/cli
npm install -g @vue/cli
````

## Create a Vue 2 App

```bash
vue create cms-web-app
```

Choose Vue 2

```bash
Vue CLI v4.5.9
? Please pick a preset:
❯ Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  Manually select features
```

## Verify the Vue app starts

```bash
cd cms-web-app
npm run serve
```

You should see something similar to the output below. Visit the URL and ensure things work so far.
You should ignore the note about running `npm run build`, let Amplify handle that.

```bash
  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.0.103:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
  ```

## Install Vue linter

```bash
npm install -D eslint eslint-loader
```

## Install Vue modules to aid rapid development

### Add Vue Router

```bash 
vue add router
```

Choose "No" to use history mode. I may or may not want to setup the server for that.

```bash
? Use history mode for router? (Requires proper server setup for index fallback in production) No
```
### Install MDB Bootstrap

Material Design Bootstrap might have its limitations but it makes for rapid development of performant sites that behave how people have come to expect sites to behave. I use the free version, the paid version would enable much slicker visual controls. It's important the base works well with free components.

```bash
vue add mdb
```

Choose existing application, we created one above.

```bash
? Please choose type of installation:
  New app
❯ Existing app
```

Choose "free" unless you want the advantages of the paid plans.

```bash
? Free or Pro version? (Use arrow keys)
❯ Free 
  Basic 
  Pro 
```

Choose the following options:

```bash
? Select the styling option: Editable in your project (SCSS)
? Add Roboto font? Yes
? Add Font Awesome 5? Yes
```

You'll see a lot of files in a new `/mdb/` directory.
There will also be changes to the App.vue and main.js files.

App.vue

```bash
-<style>
+<style lang="scss">
+@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
+
+$image-path: '~@/../mdb/mdbvue/img';
+@import '~@/../mdb/mdbvue/scss/mdb-free.scss';
```

main.js

```bash
+import '@fortawesome/fontawesome-free/css/all.min.css'
+import 'bootstrap-css-only/css/bootstrap.min.css'
+import 'mdbvue/lib/mdbvue.css'
```

You should see some route links at the top of the page now.

```html
Home | About
```

The "About" link should show new content with the "About" link highlighted.

```bash
http://localhost:8080/#/about
```

## Basic App Layout

We want a simple, easy to use app that doesn't require much instruction.

I won't document all the changes here, I'll just hit the high points.

I use a seprate file in the `/components/` directory for each "page" in the app.
Elements used on multiple pages are broken out into their own components.

These are the pages and sub-views we'll need to provide the full experience. I'll create a top level componet for each page with sub components as needed.

* Spaces
  * List
  * Add
  * Upload exported Contentful Space
  * Manage
    * Deploy
      * List deploy branches
      * Create deploy branch
    * Content Types (Models)
      * List
      * Add
      * Manage
    * Entries
      * List
      * Add
      * Manage
      * Translations
    * Media Assets
      * Albums
      * Album
      * Files
      * Camera

### Create Page View files

Creating these avoids Vue complaining they don't exist when we include.

For now we'll create each with a minalmalist format with enough information we know we are getting to the page. This example format is for the **Spaces** page.

```javascript
<template>
<div class="container">
    <h1>Spaces</h1>
</div>
</template>

<script>
export default {
    name: 'Spaces'
};
</script>
```

```bash
src/views
├── Albums.vue
├── Auth.vue
├── Entries.vue
├── Environments.vue
├── Home.vue
├── Media.vue
├── Models.vue
├── Profile.vue
└── Spaces.vue
```

### Create a Navbar Component

```bash
src/components
└── Navbar.vue
```

```javascript
<template>
<mdb-navbar color="indigo" dark class="navbar navbar-expand-lg navbar-dark align-top fixed-top" hamburger expand="xl">
    <mdb-navbar-toggler>
        <mdb-navbar-nav>
            <mdb-nav-item>
                <router-link :to="{ name: 'Spaces' }">Spaces</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Entries' }">Entries</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Models' }">Models</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Media' }">Media</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Profile' }">Profile</router-link>
            </mdb-nav-item>
        </mdb-navbar-nav>
    </mdb-navbar-toggler>
</mdb-navbar>
</template>

<script>
import {
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,

} from 'mdbvue'
export default {
    name: 'Navbar',
    components: {
        mdbNavbar,
        mdbNavbarToggler,
        mdbNavbarNav,
        mdbNavItem,
    }
}
</script>

<style scoped>
.router-link-exact-active {
    color: white
}

a {
    color: lightblue
}
</style>
```

### Edit Router

We use route level code splitting to help give us the smallest possible initial loads. This may not be as importnat in an internal CMS but I believe writing good code consitsently makes life easier.

**/router/index.js**

```javascript
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
```


### Edit App.vue

#### Replace the template

```javascript
<template>
<div id="app" class="container">
    <div id="nav">
        <Navbar />
        <router-view></router-view>
        <div class='sign-out'>
            <amplify-sign-out v-if="signedIn"></amplify-sign-out>
        </div>
    </div>
</div>
</template>
```

#### Add a script element

```javascript
<script>
import Navbar from '@/components/Navbar.vue'
import {
    Auth,
    Hub
} from 'aws-amplify'

export default {
    name: 'app',
    components: {
        Navbar
    },
    data() {
        return {
            signedIn: false
        }
    },
    beforeCreate() {
        Hub.listen('auth', data => {
            console.log('data:', data)
            const {
                payload
            } = data
            if (payload.event === 'signIn') {
                this.signedIn = true
                this.$router.push('/profile')
            }
            if (payload.event === 'signOut') {
                this.$router.push('/auth')
                this.signedIn = false
            }
        })
        Auth.currentAuthenticatedUser()
            .then(() => {
                this.signedIn = true
            })
            .catch(() => this.signedIn = false)
    }
}
</script>
```

### Update Auth page

```javascript
<template>
<div class="auth">
    <amplify-authenticator></amplify-authenticator>
</div>
</template>

<script>
export default {
    name: 'Auth'
}
</script>

<style>
.auth {
    margin: 0 auto;
    width: 460px;
}
</style>
```