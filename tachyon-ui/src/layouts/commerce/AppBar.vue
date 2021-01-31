<template>
  <v-app-bar app>
    <v-toolbar-title>Commerce- TachyonCMS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// Utilities
import { sync } from "vuex-pathify";

//import { API } from "aws-amplify";

//import { getCommerce } from "@/graphql/queries";

export default {
  name: "CommerceAppBar",
  computed: {
    drawer: sync("app/commerceDrawer")
  },
  async created() {

  },
  methods: {

  },
};
</script>
