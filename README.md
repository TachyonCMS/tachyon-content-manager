# tachyon-content-manager
Manage media from files and the camera

## Install global modules

```bash
npm install -g @aws-amplify/cli
npm install -g @vue/cli
````

## Create a Vue 3 App

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

Material Design Bootstrap might have its limitations but it makes for rapid development of performant sites that behave how people have come to expect sites to behave. I use the free versionm, the paid verison would enable much slicker visual controls. It's important the base works well with free components.

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




