<template>
<div>
  <div v-for="space in spaces" :key="space.id">
      <router-link :to="{ name: 'SpaceHome', params: { spaceId: space.id } }">{{
        space.name
      }}</router-link>
  </div>
</div>
</template>

<script>
import { API} from "aws-amplify";

import { listSpaces } from "@/graphql/queries";

export default {
  name: "SpacesList",
  async created() {
    this.getSpaces();
  },
  data() {
    return {
      spaces: {}
    };
  },
  methods: {
    async getSpaces() {
      const spaces = await API.graphql({
        query: listSpaces,
      });
      this.spaces = spaces.data.listSpaces.items;
    }
  },
};
</script>
