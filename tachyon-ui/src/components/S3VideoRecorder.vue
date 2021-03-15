<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="12">
        <v-card v-show="cameraView" flat>
          <v-card-actions class="justify-center">
            <v-card flat>
              <v-row align="center">
                <v-col class=" align-center justify-center">
                  <v-select class="mr-4"
                    v-model="deviceId"
                    :items="devices"
                    item-text="label"
                    item-value="deviceId"
                    label="Select camera"
                    dense
                  />
                </v-col>
              </v-row>
              </v-card>
               </v-card-actions>
          <vue-web-cam
            ref="webcam"
            :device-id="deviceId"
            width="100%"
            height="auto"
            autoplay="autoplay"
            @started="onStarted"
            @stopped="onStopped"
            @error="onError"
            @cameras="onCameras"
            @camera-change="onCameraChange"
          />
          <v-card-actions class="justify-center">
            <v-card flat>
              <v-row align="center">
                <v-col class="d-flex align-center justify-center">
                  <v-switch v-model="cameraOn"></v-switch>
                </v-col>
                <v-col class="d-flex  align-center justify-center">
                  <v-btn class="mr-4" @click="onCapture" color="primary">Snapshot</v-btn>
                </v-col>
              </v-row>
            </v-card>
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
import { Auth, Storage } from "aws-amplify";

import { WebCam } from "vue-web-cam";

import { v4 as uuidv4 } from "uuid";

export default {
  name: "VideoRecorder",
  props: ["uploadPath", "instructions", "meta"],
  mounted() {
    this.showCamera();
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.user = user;
      })
      .catch(() => console.log("not signed in..."));
  },
  components: {
    "vue-web-cam": WebCam,
  },
  data() {
    return {
      img: null,
      cameraView: null,
      deviceId: null,
      devices: [],
      user: {},
      cameraOn: true,
      autoplay: false,
      modal: false,
      imageOptions: false,
    };
  },
  watch: {
    camera: function (id) {
      this.deviceId = id;
    },
    devices: function () {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      console.log(tail);
      if (first) {
        //this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    },
    cameraOn: function (newValue) {
      //called whenever switch1 changes
      newValue === false ? this.onStop() : this.onStart();
    },
  },
  methods: {
    async showCamera() {
      this.imageOptions = false;
      this.cameraView = true;
    },
    async showImageOptions() {
      this.cameraView = false;
      this.imageOptions = true;
    },
    onCapture() {
      this.img = this.$refs.webcam.capture();

      this.showImageOptions()

      //this.modal = true;
      console.log(this.img)
      //this.uploadToS3 (this.img)
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onStopped(stream) {
      console.log("On Stopped Event", stream);
    },
    onStop() {
      this.cameraOn = false;
      this.$refs.webcam.stop();
    },
    onStart() {
      this.cameraOn = true;
      this.$refs.webcam.start()
    },
    onError(error) {
      console.log("On Error Event", error)
    },
    onCameras(cameras) {
      this.devices = cameras
      console.log("On Cameras Event", cameras)
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId
      //this.camera = deviceId;
      console.log("On Camera Change Event", deviceId)
    },
    onImageClose() {
      this.showCamera()
    },
    async onSave() {
      this.uploadToS3(this.img)
      this.modal = false
    },
    async uploadToS3() {
      const uid = await uuidv4();
      const image = await this.dataURItoBlob(this.img)
      const fileName = this.uploadPath + uid + ".jpg"
      const metadata = this.meta

      console.log(metadata);

      await Storage.vault
        .put(fileName, image, {
          progressCallback(progress) {
            console.log(`Uploading: ${progress.loaded}/${progress.total}`);
          },
          metadata: metadata,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err))

      this.showCamera()
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
