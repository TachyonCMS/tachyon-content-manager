<template>
  <div>
    <v-tabs v-model="tab" fixed-tabs>
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      
      <v-tab-item key="Audio">
        <S3AudioRecorder
          instructions="Record audio"
          uploadPath="upload/audio/"
          :meta="meta"
        />
      </v-tab-item>
      <v-tab-item key="Video">
        <S3VideoRecorder
          instructions="Record video and audio"
          uploadPath="upload/video/"
          :meta="meta"
        />
      </v-tab-item>
      <v-tab-item key="Gallery">
        <Gallery instructions="Available multimedia" />
      </v-tab-item>
      <v-tab-item key="Upload">
        <Uploader
          instructions="Upload multimedia files"
          uploadPath="upload/photo/"
          :meta="meta"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import Uploader from "@/components/S3FileUploader.vue";
import S3VideoRecorder from "@/components/S3VideoRecorder.vue";
import S3AudioRecorder from "@/components/S3AudioRecorder.vue";

import { Auth } from "aws-amplify";

export default {
  name: "RecorderView",
  components: {
    Uploader,
    S3VideoRecorder,
    S3AudioRecorder,
    Gallery,
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
        
        { tab: "Audio", component: "S3AudioRecorder" },
        { tab: "Video", component: "S3VideoRecorder" },
        { tab: "Gallery", component: "Gallery" },
        { tab: "Upload", component: "Uploader" },
      ],
      meta: null,
    };
  },
};
</script>
