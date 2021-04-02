<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="12">
        <v-card v-show="view == 'devices'" flat>
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
                  <v-btn class="mr-4" @click="onRecord" color="primary"
                    >Record</v-btn
                  >
                </v-col>
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onStopRecording" color="primary"
                    >Stop Recording</v-btn
                  >
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onTimedRecord" color="primary"
                    >Timed</v-btn
                  >
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onPause" color="secondary"
                    >Pause</v-btn
                  >
                </v-col>
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onResume" color="secondary"
                    >Resume</v-btn
                  >
                </v-col>
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onCloseCamera" color="secondary"
                    >Close Camera</v-btn
                  >
                </v-col>
                <v-col class="d-flex align-center justify-center">
                  <v-btn class="mr-4" @click="onSnapshot" color="primary"
                    >Snapshot</v-btn
                  >
                </v-col>
                <v-col class="d-flex align-center justify-center">
                  <v-switch v-model="cameraOn"></v-switch>
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
            <v-btn class="mr-4" @click="uploadToS3" color="primary"
              >Upload</v-btn
            >
          </v-card-actions>
        </v-card>

        <v-card v-show="playerView">
          <v-card-title>Play Recording</v-card-title>

          <video width="100%" ref="recordedClip" id="recordedClip" autoplay />

          <v-card-actions class="justify-center">
            <v-btn class="mr-4" @click="onPlayRecording" color="primary"
              >Play</v-btn
            >
            <v-btn class="mr-4" @click="onPauseRecording" color="primary"
              >Pause</v-btn
            >
            <v-btn class="mr-4" @click="onDeleteViewedRecording" color="primary"
              >Delete</v-btn
            >
            <v-btn class="mr-4" @click="onClosePlayer" color="primary"
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-title>Recordings</v-card-title>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left"></th>
                  <th class="text-left">Name</th>
                  <th class="text-left">Caption</th>
                  <th class="text-left">Size</th>
                  <th class="text-left">Type</th>
                  <th class="text-left">Download</th>
                  <th class="text-left">Upload</th>
                  <th class="text-left">Play</th>
                  <th class="text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in recordings" :key="index">
                  <td class="text-left">{{ index + 1 }}</td>
                  <td class="text-left">{{ item.name }}</td>
                  <td class="text-left">
                    {{ item.caption
                    }}<v-icon @click="editRecordingCaption(index)"
                      >mdi-pencil</v-icon
                    >
                  </td>
                  <td class="text-left">{{ item.size }}</td>
                  <td class="text-left">{{ item.type.slice(0, 5) }}</td>
                  <td class="text-left">
                    <v-btn icon medium @click="onDownloadRecording(index)"
                      ><v-icon medium color="green darken-2"
                        >mdi-download</v-icon
                      ></v-btn
                    >
                  </td>
                  <td class="text-left">
                    <v-icon
                      medium
                      color="green darken-2"
                      @click="onUploadRecording(index)"
                      >mdi-upload</v-icon
                    >
                  </td>
                  <td class="text-left">
                    <v-icon
                      medium
                      color="green darken-2"
                      @click="onLoadRecording(index)"
                      >mdi-play</v-icon
                    >
                  </td>
                  <td class="text-left">
                    <v-icon
                      medium
                      color="red lighten-1"
                      @click="onDeleteRecording(index)"
                      >mdi-delete</v-icon
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <v-dialog v-model="captionDialog" width="500">
            <v-card>
              <v-card-text>
                <v-card-title>Enter text below</v-card-title>
                <v-text-field
                  v-model="newCaption"
                  placeholder="enter a caption"
                  outlined
                ></v-text-field>

                <v-btn color="primary" text @click="updateRecordingCaption">
                  Save
                </v-btn>
                <v-btn
                  color="grey"
                  text
                  class="text-darken-2"
                  @click="captionDialog = false"
                >
                  Cancel
                </v-btn>
              </v-card-text>
            </v-card>
          </v-dialog>
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
    this.showDeviceOptions();
    this.initMedia();
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
      playerView: false,
      cameras: [],
      deviceId: null,
      img: null,
      user: {},
      recorder: null,
      recordings: [],
      recordingPaused: false,
      playerRecording: null,
      captionDialog: false,
      editedCaption: null,
      newCaption: "",
      view: "devices",

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
      newValue === false ? this.onCloseCamera() : this.onStart();
    },
  },
  methods: {
    async showDeviceOptions() {
      this.persistenceView = false;
      this.playerView = false;
      this.deviceView = true;
    },
    async showPersistenceOptions() {
      this.deviceView = false;
      this.playerView = false;
      this.persistenceView = true;
    },
    async showPlayer() {
      this.deviceView = false;
      this.persistenceView = false;
      this.playerView = true;
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
    play(recordingIndex) {
      this.video.src = window.URL.createObjectURL(recordingIndex);
    },
    download(recordingIndex) {
      var blob = this.recordings[recordingIndex];
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "test.webm";
      a.click();
      window.URL.revokeObjectURL(url);
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
        .then((deviceInfos) => {
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
        .catch((error) => this.$emit("notsupported", error));
    },
    changeCamera(deviceId) {
      this.stop();
      this.$emit("camera-change", deviceId);
      this.loadCamera(deviceId);
    },
    loadCamera(device) {
      let constraints = { video: { deviceId: { exact: device } } };
      if (this.resolution) {
        constraints.video.height = this.resolution.height;
        constraints.video.width = this.resolution.width;
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => this.loadSrcStream(stream))
        .catch((error) => this.$emit("error", error));
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
      // console.log(this.img);
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
      this.showDeviceOptions();
    },
    onStarted(stream) {
      console.log("On Started Event", stream);
    },
    onPause() {
      console.log("Recording Paused");
      this.pause();
    },
    onResume() {
      console.log("Recording Resumed");
      this.resume();
    },
    onCloseCamera() {
      console.log("Camera and Recording Stopped");
      //this.cameraOn = false;
      this.stop();
    },
    onStopRecording() {
      console.log("Recording Stopped");
      //this.cameraOn = false;
      this.stopRecording();
    },
    stop() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.stopStreamedVideo(this.$refs.video);
      }
    },
    async stopRecording() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.recorder.stop();
        console.log(this.recordings);
      }
    },
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

      this.showDeviceOptions();
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
    async onRecord() {
      const stream = this.$refs.video.srcObject;
      this.startRecording(stream);
    },
    async onTimedRecord() {
      console.log("Starting Ttimed Recording");
      const stream = this.$refs.video.srcObject;
      this.startTimedRecording(stream, 10000);
    },
    async startTimedRecording(stream, lengthInMS) {
      let recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => this.recordings.push(event.data);
      recorder.start();
      console.log(recorder.state + " for " + lengthInMS / 1000 + " seconds...");

      let stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve;
        recorder.onerror = (event) => reject(event.name);
      });

      let recorded = this.wait(lengthInMS).then(
        () => recorder.state == "recording" && recorder.stop()
      );

      return Promise.all([stopped, recorded]);
    },
    async startRecording(stream) {
      const recorder = new MediaRecorder(stream);
      this.recorder = recorder;

      this.recorder.ondataavailable = (event) => this.pushVideoData(event.data);
      this.recorder.start();
      console.log(this.recorder.state);
    },
    async pushVideoData(data) {
      if (data.size > 0) {
        const uid = await uuidv4();
        data.name = "clip-" + uid + ".webm";
        console.log("pushing video...");
        this.recordings.push(data);
      }
    },
    wait(delayInMS) {
      return new Promise((resolve) => setTimeout(resolve, delayInMS));
    },
    stopStreamedVideo(videoElem) {
      let stream = videoElem.srcObject;
      let tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
        this.$emit("stopped", stream);
        this.$refs.video.srcObject = null;
        this.source = null;
      });
    },
    pause() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.$refs.video.pause();
        this.recorder.pause();
      }
    },
    resume() {
      if (this.$refs.video !== null && this.$refs.video.srcObject) {
        this.$refs.video.play();
        this.recorder.resume();
      }
    },
    onDeleteRecording(index) {
      this.recordings.splice(index, 1);
    },
    onLoadRecording(index) {
      console.log("Loading recording number " + (index + 1));
      this.showPlayer();
      const recording = this.recordings[index];
      this.playerRecording = index;

      const clip = window.URL.createObjectURL(recording);

      this.$refs.recordedClip.src = clip;

      console.log(recording);
    },
    onPlayRecording() {
      this.$refs.recordedClip.play();
    },
    onPauseRecording() {
      console.log("Paused recording replay");
      this.$refs.recordedClip.pause();
    },
    onDeleteViewedRecording() {
      console.log("Deleting video");
      this.onDeleteRecording(this.playerRecording);
      this.onClosePlayer();
    },
    onClosePlayer() {
      console.log("Closing player");
      this.showDeviceOptions();
    },
    editRecordingCaption(recordingIndex) {
      console.log("Editing caption for recording index " + recordingIndex);
      this.editedCaption = recordingIndex;
      this.captionDialog = true;
    },
    async onUploadRecording(recordingIndex) {
      console.log("Upload recording " + recordingIndex + " to S3");

      const recording = this.recordings[recordingIndex];
      console.log(recording);
      const fileName = recording.name;
      const path = "upload/video/";

      const arrayBuffer = await new Response(recording).arrayBuffer();
      const content = new Uint8Array(arrayBuffer);
      const meta = this.meta;
      meta.caption = recording.caption;
      this.upload(fileName, path, content, meta);
    },
    async upload(fileName, path, content, metadata) {
      console.log("Upload " + fileName + " content to S3 " + path);
      console.log(content);

      const uploadFileName = path + fileName;

      await Storage.vault
        .put(uploadFileName, content, {
          progressCallback(progress) {
            console.log(`Uploading: ${progress.loaded}/${progress.total}`);
          },
          metadata: metadata,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    },
    onDownloadRecording(recordingIndex) {
      console.log("Download recording " + recordingIndex + " to local drive");

      const recording = this.recordings[recordingIndex];
      const url = URL.createObjectURL(recording);
      console.log(url);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = recording.name;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
    },
    updateRecordingCaption() {
      const index = this.editedCaption;
      console.log("Updating edited caption for recording index " + index);
      this.recordings[index].caption = this.newCaption;
      this.recordings.push({});
      this.recordings.pop({});
      this.captionDialog = false;
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
      this.showDeviceOptions();
    },
    async onSave() {
      this.uploadToS3(this.img);
      this.modal = false;
    },
  },
};
</script>
