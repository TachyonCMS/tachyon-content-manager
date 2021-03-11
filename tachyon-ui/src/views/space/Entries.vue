<template>
  <v-container>
    <v-row align="center">
     <div v-for="entry in entries" :key="entry.id">

         {{ entry}}
    </div>
    </v-row>
  </v-container>
</template>

<script>
import { API } from "aws-amplify";

import { listEntrysBySpace } from "@/graphql/queries";

export default {
  name: "Entries",
  props: [ "instructions"],
  async created() {
    const space = this.$store.get("app/space");
    await this.getSpaceEntries(space.id);
  },
  components: {
   
  },
  data() {
    return {
      entries: {}
    }
  },
  watch: {
    
  },
  methods: {
    async getSpaceEntries(spaceId) {
      const entries = await API.graphql({
        query: listEntrysBySpace,
        variables: { spaceId: spaceId }
      });
      this.entries = entries.data.listEntrysBySpace.items;
    }
  },
};
</script>
