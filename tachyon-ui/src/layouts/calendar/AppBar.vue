<template>
  <v-app-bar app>
    <v-toolbar-title>Calendar- TachyonCMS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// Utilities
import { sync } from "vuex-pathify";

//import { API } from "aws-amplify";

//import { getCalendar } from "@/graphql/queries";

export default {
  name: "CalendarAppBar",
  computed: {
    drawer: sync("app/calendarDrawer")
  },
  async created() {

  },
  methods: {

  },
};
</script>
