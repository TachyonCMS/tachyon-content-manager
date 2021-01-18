<template>
  <v-navigation-drawer

    v-model="drawer"
    app

    mini-variant=true
    expand-on-hover
  >
    <!-- -->
        <v-list-item
          link
          :to="{name:'ListSpaces'}">
          <v-list-item-content>
            <v-list-item-title class="title">
              <v-icon>mdi-arrow-left-bold</v-icon>  Back to Spaces
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

  </v-navigation-drawer>
</template>

<script>
// Utilities
import { sync } from 'vuex-pathify'

export default {
  name: 'DefaultDrawer',
  computed: { drawer: sync('app/drawer') },
  data () {
    return {
      items: [
          { title: 'Entries', icon: 'mdi-text-box-outline', route: {name: 'SpaceEntries'} },
          { title: 'Files', icon: 'mdi-file-multiple', route: {name: 'SpaceFiles'} },
          { title: 'Images', icon: 'mdi-file-image', route: {name: 'SpaceImages'} },
          { title: 'Locales', icon: 'mdi-web', route: {name: 'SpaceLocales'} },
          { title: 'Environments', icon: 'mdi-cog-box', route: {name: 'SpaceEnvironments'} }
        ]
    }

  }
}
</script>
