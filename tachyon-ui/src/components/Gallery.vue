<template>
  <v-container>
    <v-row align="center">
     <div v-for="photo in photos" :key="photo.thumbnail.key">
         <amplify-s3-image  level="private" :img-key="photo.thumbnail.key.substr(photo.thumbnail.key.indexOf('resized/'))"></amplify-s3-image>
    </div>
    </v-row>
  </v-container>
</template>

<script>
import { API } from "aws-amplify";

import { listPhotosBySpace } from "@/graphql/queries";

export default {
  name: "Gallery",
  props: [ "instructions"],
  async created() {
    const space = this.$store.get("app/space");
    this.getSpacePhotos(space.id);
  },
  components: {
   
  },
  data() {
    return {
      photos: {}
    }
  },
  watch: {
    
  },
  methods: {
    async getSpacePhotos(spaceId) {
      const photos = await API.graphql({
        query: listPhotosBySpace,
        variables: { spaceId: spaceId }
      });
      this.photos = photos.data.listPhotosBySpace.items;
    }
  },
};
</script>
