<template>
  <v-app>
    <default-app-bar />

    <space-drawer />

    <default-view />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  components: {
    DefaultAppBar: () => import('./AppBar'),
    SpaceDrawer: () => import('./Drawer'),
    DefaultView: () => import('./View')
  }
}
</script>
