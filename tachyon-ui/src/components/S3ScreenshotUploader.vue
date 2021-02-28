<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-card v-show="startMedia" flat>
          <v-card-title>{{ instructions }}</v-card-title>
          <v-card-actions class="justify-center">
            <v-btn class="mr-4" @click="onStart" color="primary">Enable Sharing</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-show="captureImage" flat>
          <v-card-title>Take a snapshot</v-card-title>
          <video width="100%" ref="video" id="video" autoplay />
          <v-card-actions class="justify-center">
            <v-btn class="mr-4" @click="onVideoClose" elevation="1">Stop Sharing</v-btn>
            <v-btn class="mr-4" @click="onSnapshot" color="primary">Snapshot</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-show="imageOptions">
          <v-card-title>Upload or Discard</v-card-title>

          <v-img :src="img" class="img-fit"> </v-img>

          <v-card-actions class="justify-center">
            <v-btn class="mr-4" @click="onImageClose" elevation="1">Discard</v-btn>
            <v-btn class="mr-4" @click="uploadToS3" color="primary">Upload</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth, Storage } from "aws-amplify"

import { v4 as uuidv4 } from 'uuid'

export default {
  name: "S3ScreenshotUploader",
  props: ["uploadPath", "instructions", "meta"],
  mounted() {
    this.initStartMedia();
    console.log(this.meta)
  },
  data() {
    return {
      files: [],
      video: null,
      img: null,
      currentInstructions: null,
      imageOptions: false,
      captureImage: false,
      startMedia: false,
      currentView: null
    };
  },
  methods: {
    async initStartMedia() {
      this.captureImage = false;
      this.imageOptions = false;
      this.startMedia = true;
    },
    async initCaptureImage() {
      this.startMedia = false;
      this.imageOptions = false;
      this.captureImage = true;
    },
    async initImageOptions() {
      this.startMedia = false;
      this.captureImage = false;
      this.imageOptions = true;
    },
    async onStart(displayMediaOptions) {
      console.log("Starting live screen capture");

      let mediaStream = null;

      try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      } catch (err) {
        console.error("Error: " + err);
      }

      const video = this.$refs.video;
      video.srcObject = mediaStream;

      this.initCaptureImage();
    },
    async onVideoClose() {
      const video = this.$refs.video;

      const tracks = video.srcObject.getTracks();
      console.log(tracks);

      tracks.forEach((track) => track.stop());
      video.srcObject = null;

      this.initStartMedia();
    },
    async onImageClose() {
      this.initCaptureImage();
    },
    async onSnapshot() {
      console.log("Capturing Image");

      this.initImageOptions();

      const video = this.$refs.video;

      //const canvas = this.$refs.canvas
      const canvas = document.createElement("canvas");

      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;
      const context = canvas.getContext("2d");

      context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
      this.img = canvas.toDataURL("image/png");

      console.log(this.img);
    },
    async onSave() {
      await this.uploadToS3(this.img);
      this.initCaptureImage();
    },
    async uploadFilesToS3() {
      const files = this.files;
      console.log("Selected files: ")
      console.table(files);
      if (Array.isArray(files)) {
        files.forEach((file) => {
          this.uploadToS3(file)
        });
      } else {
        this.uploadToS3(files)
      }
    },
    async uploadToS3() {
      const user = await Auth.currentAuthenticatedUser()

      const metadata = {
        owner: user.username,
      };

      console.log(metadata)
      console.log(this.meta)

      const uid = await uuidv4()

      const fileName = this.uploadPath + uid + '.png'

      console.log(fileName);

      const image = await this.dataURItoBlob(this.img)

      await Storage.vault
        .put(fileName, image, {
          progressCallback(progress) {
            console.log(`Uploading: ${progress.loaded}/${progress.total}`)
          },
          metadata: this.meta,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });

      this.initCaptureImage();  
    },
    async dataURItoBlob(dataURI) {
      // convert base64/URLEncoded data component to raw binary data held in a string
      var byteString;
      if (dataURI.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(dataURI.split(",")[1]);
      else byteString = unescape(dataURI.split(",")[1]);

      // separate out the mime component
      var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

      // write the bytes of the string to a typed array
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], { type: mimeString });
    },
  },
};
</script>
