<template>
  <v-app>
    <default-app-bar />

    <commerce-drawer />

    <default-view />
  </v-app>
</template>

<script>
export default {
  name: "CommerceLayout",

  components: {
    DefaultAppBar: () => import("./AppBar"),
    CommerceDrawer: () => import("./Drawer"),
    DefaultView: () => import("./View"),
  },
};
</script>
