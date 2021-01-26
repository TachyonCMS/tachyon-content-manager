<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title>{{ space.name }} - TachyonCMS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// Utilities
import { sync } from 'vuex-pathify'

export default {
  name: 'SpaceAppBar',
  computed: { 
    drawer: sync('app/drawer'),
    space () {
      let space = this.$store.get('app/space')

      return space
    }
  }
}
</script>
