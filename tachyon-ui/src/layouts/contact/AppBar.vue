<template>
  <v-app-bar app>
    <v-toolbar-title>Contacts - TachyonCMS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// Utilities
import { sync } from "vuex-pathify";

//import { API } from "aws-amplify";

//import { getContact } from "@/graphql/queries";

export default {
  name: "ContactAppBar",
  computed: {
    drawer: sync("app/contactDrawer"),
  },
  async created() {

  },
  methods: {
  }

}
</script>
