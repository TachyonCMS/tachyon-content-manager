<template>
  <v-app>
    <default-app-bar />

    <contact-drawer />

    <default-view />
  </v-app>
</template>

<script>
export default {
  name: 'ContactLayout',

  components: {
    DefaultAppBar: () => import('./AppBar'),
    ContactDrawer: () => import('./Drawer'),
    DefaultView: () => import('./View')
  }
}
</script>
