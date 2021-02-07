<template>
  <v-navigation-drawer 
    v-model="drawer" 
    app 
    temporary>
    <!-- -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> TachyonCMS </v-list-item-title>
       </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
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
import { sync } from "vuex-pathify";

export default {
  name: "DefaultDrawer",
  computed: { drawer: sync("app/drawer") },
  data() {
    return {
      items: [
        { title: "Content", icon: "mdi-text-box-multiple", route: "/spaces" },
        { title: "Calendar", icon: "mdi-calendar", route: "/calendar" },
        { title: "Contacts", icon: "mdi-contacts", route: "/contacts" },
        { title: "Commerce", icon: "mdi-currency-usd", route: "/commerce" },
        { title: "Compliance", icon: "mdi-security", route: "/compliance" },
      ],
    };
  },
};
</script>
