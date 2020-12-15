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

## Install UI modules to aid rapid development

### Install MDB Bootstrap

Material Design Bootstrap might have its limitations but it makes for rapid development of performant sites that behave how people have come to expect sites to behave. I use the free versionm, the paid verison would enable much slicker visual controls. It's important the base works well with free components.

```
vue add mdb
```