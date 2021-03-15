<template>
  <div>
    <v-tabs v-model="tab" fixed-tabs>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item key="Camera">
        <S3VideoRecorder
          instructions="Record from camera"
          uploadPath="upload/camera/"
          :meta="meta"
        />
      </v-tab-item>
      <v-tab-item key="Audio">
        <S3AudioRecorder
          instructions="Record audio"
          uploadPath="upload/audio/"
          :meta="meta"
        />
      </v-tab-item>
      <v-tab-item key="Screen">
        <S3ScreenRecorder
          instructions="Record from screen"
          uploadPath="upload/screen/"
          :meta="meta"
        />
      </v-tab-item>
      <v-tab-item key="Files">
        <Uploader
          instructions="Upload from device"
          uploadPath="upload/file/"
          :meta="meta"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Uploader from "@/components/S3FileUploader.vue";
import S3VideoRecorder from "@/components/S3VideoRecorder.vue";
import S3AudioRecorder from "@/components/S3AudioRecorder.vue";
import S3ScreenRecorder from "@/components/S3ScreenshotUploader.vue";

import { Auth } from "aws-amplify";

export default {
  name: "RecorderView",
  components: {
    Uploader,
    S3VideoRecorder,
    S3AudioRecorder,
    S3ScreenRecorder,
  },
  async created() {
    const space = this.$store.get("app/space");
    const user = await Auth.currentAuthenticatedUser();
    const meta = {};
    meta.space_id = space.id;
    meta.owner_id = user.attributes.sub;
    meta.owner = user.username;
    this.meta = meta;
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "Camera", component: "S3VideoRecorder" },
        { tab: "Audio", component: "S3AudioRecorder" },
        { tab: "Screen", component: "S3ScreenRecorder" },
        { tab: "Upload", component: "Uploader" },
      ],
      meta: null,
    };
  },
};
</script>
