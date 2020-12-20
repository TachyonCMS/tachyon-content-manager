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
                <router-link :to="{ name: 'Home' }">Home</router-link>
            </mdb-nav-item>
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

```

## Amplify your Efforts

### Add the Amplify Vue module

```bash
npm install --save @aws-amplify/ui-vue
```

### Initialize a new Amplify app

```bash
amplify init
```

The choices shown below were used.

```bash
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project cmswebapp
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using vue
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run-script build
? Start Command: npm run-script serve
Using default provider  awscloudformation
...
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use (Use arrow keys)
❯ default 
```

When it is done yuo should see something similar to this:

```bash
Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

It's a great `Pro tip` but even more `Pro tip` is to add auth to start with security. To do that we'll add auth before adding any functionality.

### Add Cognito Authentication to Amplify

```bash
amplify add auth
```

```bash
 Do you want to use the default authentication and security configurat
ion? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added auth resource cmswebapp1580b47c locally
```

#### Push the changes up to AWS

```bash
amplify push
```

#### Add the Amplify config to the Vue app

Edit main.js and add the following:

```javascript
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
```

#### Update the Auth view to use thre default Amplify auth screens.

I'll customize these later.

```javasript
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

#### Secure paths with auth

Add a `meta: { requiresAuth: true}` element to any path that you want to secure.

```javascript
  {
    path: '/spaces',
    name: 'Spaces',
    // route level code-splitting
    // this generates a separate chunk (spaces.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "spaces" */ '../views/Spaces.vue'),
    meta: { requiresAuth: true}
  },
  ```

  ## Publish our secure app to the cloud

  We want to test end-to-end functionality early, let's make sure this works for the public. We'll add hosting and publish it. That should allow us to access the same `dev` backend we use locally from a public web site.

  ```bash
  amplify add hosting
  ```

  S3 and Cloudfront might seem the best choice, but we want to use the console so we can wire up git based deploys to update the Amplify app.

  ```bash
  ? Select the plugin module to execute (Use arrow keys)
❯ Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment) 
  Amazon CloudFront and S3 
```

Choose Continuous deployment as a best practice.

```bash
? Choose a type 
❯ Continuous deployment (Git-based deployments) 
  Manual deployment 
  Learn more 
```

Use the docs here to connect your Git repo to Amplify.
https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html

While it's building the front end you'll see this at the fuure URL:

```bash
Welcome
Your app will appear here once you complete your first deployment.
Deployment didn't work? Here are some options:

Check out our docs
Click the Feedback button in the bottom-left corner of the service page
Quick tips:

Have you checked your build settings? The baseDirectory parameter in the artifacts step of your YAML file should match your build output directory
Building your app should produce an index.html file. Try building your app locally and check a file with that name exists in the artifacts base directory.
```

Back in the console you can continue and and Amplify will spit out something similar to:

```bash
? Continuous deployment is configured in the Amplify Console. Please hit enter once you connect your repo
sitory 
Amplify hosting urls: 
┌──────────────┬────────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                     │
├──────────────┼────────────────────────────────────────────┤
│ main         │ https://main.d2kogb9r476vn4.amplifyapp.com │
└──────────────┴────────────────────────────────────────────┘
```

Relax, grab some coffee this step takes a bit.
When it's done you will be able to visit the URL provided and login using the same users and see thre asme data as you do locally.

## Get some Style

We built basic auth auth and navigation in a few hours, now we can really start building the fun parts. First we'll add some moew styling to our pages.

### Disable invalid nav elements

If we haven't chosen a space then the Entries, Models and Media nav items should be disabled. We'll start with them disabled and programtaically enable them when we have chosen a space.

```javascript
<mdb-nav-item>
    <router-link :to="{ name: 'Entries' }" class="disabled">Entries</router-link>
</mdb-nav-item>
<mdb-nav-item>
    <router-link :to="{ name: 'Models' }" class="disabled">Models</router-link>
</mdb-nav-item>
<mdb-nav-item>
    <router-link :to="{ name: 'Media' }" class="disabled">Media</router-link>
</mdb-nav-item>
```

## Add Amplify GraphQL / AppSync API

### Add API with Amplify CLI

```bash
amplify add api
```

I use the options below:

```bash
? Please select from one of the below mentioned services: GraphQL
? Provide API name: cmswebapp
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Choose a schema template: Objects with fine-grained access control (e.g., a pr
oject management app with owner-based authorization)
```

### Use the Tachyon CMS Schema

```json

```

### Push the API and Schema changes to AWS

```bash
amplify push
```

Acknowledge ytou want to create the new resources.

```bash
Current Environment: dev

| Category | Resource name     | Operation | Provider plugin   |
| -------- | ----------------- | --------- | ----------------- |
| Api      | cmswebapp         | Create    | awscloudformation |
| Auth     | cmswebapp1580b47c | No Change | awscloudformation |
| Hosting  | amplifyhosting    | No Change |                   |
? Are you sure you want to continue? (Y/n) Y
```

I use the choices below. I know, I know... I should switch to Typescript.

```bash
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/
graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queries, mutati
ons and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply ne
sted] 2
```

### Supported Query Patterns

##### Management API

1. Get Spaces by User
2. Get ContentTypes by Space
3. Get Albums by Space
4. Get Entries by ContentType
5. Get Photos by Album
6. Get Entry by Id
7. Get Entry by Id and Locale

##### Accelerator API

1. Get Albums by Space
2. Get Photos by Album
3. Get Entry by Id and Locale
4. Get Entry by Id and Locale, with references populated to _n_ level (max 3)

## Use Vue Formulate for forms

### Install module

```bash
npm install --save @braid/vue-formulate
```

### Integrate Formulate with Vue

Add the following in `main.js`

```javascript
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)
```
