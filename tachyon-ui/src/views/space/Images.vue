<template>
  <div>
    <v-tabs
        v-model="tab"
        fixed-tabs
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          key="Files"
        >
          <Uploader instructions='Choose image files'  uploadPath='upload/photo/' />
        </v-tab-item>
        <v-tab-item
          key="Camera"
        >
          <Camera instructions='Take a snapshot'/>
        </v-tab-item>
        <v-tab-item
          key="Screen"
        >
          <Screenshot instructions='Enable screensharing'/>
        </v-tab-item>
      </v-tabs-items>
  </div>
</template>

<script>

import Uploader from '@/components/S3FileUploader.vue'
import Camera from '@/components/S3CameraUploader.vue'
import Screenshot from '@/components/S3ScreenshotUploader.vue'

export default {
  name: "ImagesView",
  components: {
    Uploader,
    Camera,
    Screenshot
  },
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Files', component: 'Uploader' },
        { tab: 'Camera', component: 'Camera' },
        { tab: 'Screen', component: 'Screenshot' }
      ]
    }
  },
};
</script>
