<template>
  <v-app>
    <default-app-bar />

    <compliance-drawer />

    <default-view />
  </v-app>
</template>

<script>
export default {
  name: "ComplianceLayout",

  components: {
    DefaultAppBar: () => import("./AppBar"),
    ComplianceDrawer: () => import("./Drawer"),
    DefaultView: () => import("./View"),
  },
};
</script>
