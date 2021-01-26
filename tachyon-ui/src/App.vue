<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
import { Auth, Hub } from "aws-amplify";

export default {
  name: "App",
  data() {
    return {
      signedIn: false,
    };
  },
  beforeCreate() {
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signIn") {
        this.signedIn = true;
        this.$router.push("/spaces");
      }
      if (payload.event === "signOut") {
        this.signedIn = false;
        this.$router.push("/auth");
      }
    });
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.signedIn = true;
      })
      .catch(() => (this.signedIn = false));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
