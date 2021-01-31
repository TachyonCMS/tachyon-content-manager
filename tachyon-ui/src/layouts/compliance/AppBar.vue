<template>
  <v-app-bar app>
    <v-toolbar-title>Compliance Register - TachyonCMS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// Utilities
import { sync } from "vuex-pathify";

//import { API } from "aws-amplify";

//import { getCompliance } from "@/graphql/queries";

export default {
  name: "ComplianceAppBar",
  computed: {
    drawer: sync("app/complianceDrawer")
  },
  async created() {

  },
  methods: {

  },
};
</script>
