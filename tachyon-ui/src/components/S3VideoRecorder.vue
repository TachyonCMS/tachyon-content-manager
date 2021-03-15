<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="12">
        <v-card v-show="deviceView" flat>
          <v-card-actions class="justify-center">
            <v-card flat>
              <v-row align="center">
                <v-col class="align-center justify-center">
                  <v-select
                    class="mr-4"
                    v-model="deviceId"
                    :items="cameras"
                    item-text="label"
                    item-value="deviceId"
                    label="Select camera"
                    dense
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-card-actions>
          <video width="100%" ref="video" id="video" autoplay />
          <v-card-actions class="justify-center">
            <v-card flat>
              <v-row align="center">
                <v-col class="d-flex align-center justify-center">
                  <v-switch v-model="cameraOn"></v-switch>
                </v-col>
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onRecord" color="primary">Record</v-btn>
                </v-col>
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onSnapshot" color="primary">Snapshot</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card-actions>
        </v-card>

        <v-card v-show="persistenceView">
          <v-card-title>Upload or Discard</v-card-title>

          <v-img :src="img" class="img-fit"> </v-img>

          <v-card-actions class="justify-center">
            <v-btn class="mr-4" @click="onDiscard" elevation="1">Discard</v-btn>
            <v-btn class="mr-4" @click="uploadToS3" color="primary">Upload</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth, Storage } from "aws-amplify";

import { v4 as uuidv4 } from "uuid";

export default {
  name: "VideoRecorder",
  props: ["uploadPath", "instructions", "meta"],
  mounted() {
    this.showDeviceOptions()
    this.initMedia()
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.user = user;
      })
      .catch(() => console.log("not signed in..."));
  },
  components: {},
  data() {
    return {
      deviceView: null,
      persistenceView: false,
      cameras: [],
      deviceId: null,
      img: null,
      user: {},

      cameraOn: true,
      autoplay: false,

    };
  },
  watch: {
    deviceId: function (id) {
      this.changeCamera(id);
    },
    devices: function () {
      // Once we have a list select the first one
      const [first, ...tail] = this.devices;
      console.log(tail);
      if (first) {
        //this.camera = first.deviceId
        this.deviceId = first.deviceId;
      }
    },
    cameraOn: function (newValue) {
      //called whenever switch1 changes
      newValue === false ? this.onStop() : this.onStart();
    },
  },
  methods: {
    async showDeviceOptions() {
      this.persistenceView = false;
      this.deviceView = true;
    },
    async showPersistenceOptions() {
      this.deviceView = false;
      this.persistenceView = true;
    },
    async initMedia() {
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = this.legacyGetUserMediaSupport();
      }
      this.testMediaAccess();
    },
    testMediaAccess() {
      let constraints = { video: true };
      if (this.resolution) {
        constraints.video = {};
        constraints.video.height = this.resolution.height;
        constraints.video.width = this.resolution.width;
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          //Make sure to stop this MediaStream
          let tracks = stream.getTracks();
          tracks.forEach((track) => {
            track.stop();
          });
          this.loadCameras();
        })
        .catch((error) => this.$emit("error", error));
    },
    legacyGetUserMediaSupport() {
      return (constraints) => {
        // First get ahold of the legacy getUserMedia, if present
        let getUserMedia =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia ||
          navigator.oGetUserMedia;
        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(
            new Error("getUserMedia is not implemented in this browser")
          );
        }
        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    },
    loadCameras() {
      navigator.mediaDevices
        .enumerateDevices()
        .then(deviceInfos => {
          for (let i = 0; i !== deviceInfos.length; ++i) {
            let deviceInfo = deviceInfos[i];
            if (deviceInfo.kind === "videoinput") {
              this.cameras.push(deviceInfo);
            }
          }
        })
        .then(() => {
          if (!this.camerasListEmitted) {
            if (this.selectFirstDevice && this.cameras.length > 0) {
              this.deviceId = this.cameras[0].deviceId;
            }
            this.$emit("cameras", this.cameras);
            this.camerasListEmitted = true;
          }
        })
        .catch(error => this.$emit("notsupported", error));
    },
    changeCamera(deviceId) {
      this.stop();
      this.$emit("camera-change", deviceId);
      this.loadCamera(deviceId);
    },
    stop() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.stopStreamedVideo(this.$refs.video);
      }
    },
    loadCamera(device) {
      let constraints = { video: { deviceId: { exact: device } } };
      if (this.resolution) {
        constraints.video.height = this.resolution.height;
        constraints.video.width = this.resolution.width;
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => this.loadSrcStream(stream))
        .catch(error => this.$emit("error", error));
    },
    loadSrcStream(stream) {
      if ("srcObject" in this.$refs.video) {
        // new browsers api
        this.$refs.video.srcObject = stream;
      } else {
        // old broswers
        this.source = window.HTMLMediaElement.srcObject(stream);
      }
      // Emit video start/live event
      this.$refs.video.onloadedmetadata = () => {
        this.$emit("video-live", stream);
      };
      this.$emit("started", stream);
    },
    onSnapshot() {
      this.img = this.capture();

      this.showPersistenceOptions();

      console.log(this.img);

    },
    capture() {
      return this.getCanvas().toDataURL(this.screenshotFormat);
    },
    getCanvas() {
      let video = this.$refs.video;
      if (!this.ctx) {
        let canvas = document.createElement("canvas");
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
      }
      const { ctx, canvas } = this;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas;
    },
    onDiscard() {
      this.showDeviceOptions()
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

    onError(error) {
      console.log("On Error Event", error);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      //this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
    },
    onImageClose() {
      this.showCamera();
    },
    async onSave() {
      this.uploadToS3(this.img);
      this.modal = false;
    },
    async onRecord() {},
    async uploadToS3() {
      const uid = await uuidv4();
      const image = await this.dataURItoBlob(this.img);
      const fileName = this.uploadPath + uid + ".jpg";
      const metadata = this.meta;

      console.log(metadata);

      await Storage.vault
        .put(fileName, image, {
          progressCallback(progress) {
            console.log(`Uploading: ${progress.loaded}/${progress.total}`);
          },
          metadata: metadata,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));

      this.showCamera();
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
