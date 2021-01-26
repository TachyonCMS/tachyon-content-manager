<template>
  <v-app>
    <default-app-bar />

    <space-drawer />

    <default-view />
  </v-app>
</template>

<script>
export default {
  name: 'SpaceLayout',

  components: {
    DefaultAppBar: () => import('./AppBar'),
    SpaceDrawer: () => import('./Drawer'),
    DefaultView: () => import('./View')
  }
}
</script>
