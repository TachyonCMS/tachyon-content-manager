<template>
  <v-navigation-drawer
    v-model="complianceDrawer"
    app
    v-bind:mini-variant="true"
    expand-on-hover
    v-bind:permanent="true"
  >
    <!-- -->
    <v-list-item link :to="{ name: 'Home' }">
      <v-list-item-content>
        <v-list-item-title class="title">
          <v-icon>mdi-arrow-left-bold</v-icon> Home
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
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
import { sync } from "vuex-pathify";

export default {
  name: "ComplianceDrawer",
  computed: { complianceDrawer: sync("app/complianceDrawer") },
  data() {
    return {
      items: [
        {
          title: "Register Event",
          icon: "mdi-plus",
          route: { name: "ComplianceRegister" },
        },
        {
          title: "Search Events",
          icon: "mdi-magnify",
          route: { name: "ComplianceSearch" },
        },
      ],
    };
  },
};
</script>
