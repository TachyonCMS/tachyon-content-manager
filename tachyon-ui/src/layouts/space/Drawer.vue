<template>
  <v-navigation-drawer
    v-model="spaceDrawer"
    app
    v-bind:mini-variant="true"
    expand-on-hover
    v-bind:permanent="true"
  >
    <!-- -->
    <v-list-item link :to="{ name: 'SpacesHome' }">
      <v-list-item-content>
        <v-list-item-title class="title">
          <v-icon>mdi-arrow-left-bold</v-icon> Back to Spaces
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
        @click="spaceDrawer = false"
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
  name: "SpaceDrawer",
  computed: { spaceDrawer: sync("app/spaceDrawer") },
  data() {
    return {
      items: [
        { title: "Entries", icon: "mdi-text-box", route: { name: "SpaceEntries" } },
        { title: "Models", icon: "mdi-widgets", route: { name: "SpaceModels" } },
        { title: "Recorder", icon: "mdi-file-video", route: { name: "SpaceRecorder" } },
        { title: "Images", icon: "mdi-file-image", route: { name: "SpaceImages" } },
        { title: "Files", icon: "mdi-file-multiple", route: { name: "SpaceFiles" } },
        { title: "Locales", icon: "mdi-web", route: { name: "SpaceLocales" } },
        { title: "Environments", icon: "mdi-cog", route: { name: "SpaceEnvironments" } },
        { title: "Import", icon: "mdi-upload", route: { name: "SpaceImport" } },
      ],
    };
  },
};
</script>
