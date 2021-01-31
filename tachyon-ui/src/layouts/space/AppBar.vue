<template>
  <v-app-bar app>
    <v-toolbar-title>{{ space.name }} - TachyonCMS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// Utilities
import { sync } from "vuex-pathify";

import { API } from "aws-amplify";

import { getSpace } from "@/graphql/queries";

export default {
  name: "SpaceAppBar",
  computed: {
    drawer: sync("app/spaceDrawer"),
    space() {
      let space = this.$store.get("app/space");
      return space;
    },
  },
  async created() {
    const spaceId = this.$route.params.spaceId;
    const loadedSpace = this.$store.get("app/space");
    console.log(loadedSpace);
    if (loadedSpace && loadedSpace.id != spaceId) {
      this.getSpace(spaceId);
    }
  },
  methods: {
    async getSpace(spaceId) {
      const space = await API.graphql({
        query: getSpace,
        variables: { id: spaceId },
      });
      const data = space.data.getSpace;
      this.$store.set("app/space", data);
    },
  },
};
</script>
