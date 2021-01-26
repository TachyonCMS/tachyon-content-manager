<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
    <!-- -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              TachyonCMS
            </v-list-item-title>
            <v-list-item-subtitle>
              Manage Spaces
            </v-list-item-subtitle>
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
          { title: 'Recent', icon: 'mdi-history', route: '/spaces/activity'},
          { title: 'Create', icon: 'mdi-plus', route: '/spaces/create' },
          { title: 'Search', icon: 'mdi-magnify', route: "/spaces/search"},
        ]
    }

  }
}
</script>
