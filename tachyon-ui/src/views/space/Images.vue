<template>
  <div>
    <v-tabs v-model="tab" fixed-tabs>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item key="Files">
        <Uploader
          instructions="Choose image files"
          uploadPath="upload/photo/"
          :meta="meta"
        />
      </v-tab-item>
      <v-tab-item key="Camera">
        <Camera
          instructions="Take a snapshot"
          uploadPath="upload/photo/"
          :meta="meta"
        />
      </v-tab-item>
      <v-tab-item key="Screen">
        <Screenshot
          instructions="Enable screensharing"
          uploadPath="upload/photo/"
          :meta="meta"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Uploader from "@/components/S3FileUploader.vue";
import Camera from "@/components/S3CameraUploader.vue";
import Screenshot from "@/components/S3ScreenshotUploader.vue";

import { Auth } from "aws-amplify";

export default {
  name: "ImagesView",
  components: {
    Uploader,
    Camera,
    Screenshot,
  },
  async created() {
    const space = this.$store.get("app/space");
    const user = await Auth.currentAuthenticatedUser();
    const meta = {};
    meta.spaceid = space.id;
    meta.ownerid = user.attributes.sub;
    meta.owner = user.username;
    this.meta = meta;
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "Files", component: "Uploader" },
        { tab: "Camera", component: "Camera" },
        { tab: "Screen", component: "Screenshot" },
      ],
      meta: null,
    };
  },
};
</script>
