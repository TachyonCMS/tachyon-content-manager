<template>
  <div class="about">
    <h1>Import Contentful Data</h1>
    <S3FileUploader
      uploadPath="upload/contentful/"
      instructions="Find your Contenful export file"
      :meta=meta
    />
  </div>
</template>

<script>
import S3FileUploader from "@/components/S3FileUploader.vue";

import { Auth } from "aws-amplify";

export default {
  name: "SpaceImport",
  async created() {
    const space = this.$store.get("app/space")
    const user = await Auth.currentAuthenticatedUser()
    const meta = {}
    meta.spaceid = space.id
    meta.ownerid = user.attributes.sub
    meta.owner = user.username
    this.meta = meta
  },
  components: {
    S3FileUploader,
  },
  data() {
    return {
      meta: null
    };
  }
};
</script>
