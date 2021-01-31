<template>
  <v-app>
    <default-app-bar />

    <calendar-drawer />

    <default-view />
  </v-app>
</template>

<script>
export default {
  name: "CalendarLayout",

  components: {
    DefaultAppBar: () => import("./AppBar"),
    CalendarDrawer: () => import("./Drawer"),
    DefaultView: () => import("./View"),
  },
};
</script>
