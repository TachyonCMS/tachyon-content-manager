<template>
  <v-container>
    <v-dialog
      v-model="dialog"
      scrollable
    >
      <template v-slot:activator="">
       <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>{{instructions}}</v-card-title>
          <v-img  class="img-fluid">
          <video ref="video" id="video" autoplay class="img-fluid"></video>
          </v-img>
           <v-card-actions class="justify-center">
            <v-btn class="mr-4" text @click="onStart">Enable Sharing</v-btn>
            <v-btn class="mr-4" text @click="onClip">Save Screen</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
      </template>

      <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>{{instructions}}</v-card-title>
         <v-img :src="img" class="img-fluid">
          </v-img>
          
           <v-card-actions class="justify-center">
            <v-btn class="mr-4" text @click="uploadFilesToS3">Upload</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    </v-dialog>
  </v-container>
</template>

<script>

import { Auth, Storage } from "aws-amplify"

export default {
  name: "S3ScreenshotUploader",
  props: ['uploadPath', 'instructions'],
   data() {
    return {
      files: [],
      video: null,
      dialog: false,
      img: null,
      scrollable: null
    };
  },
  methods: {
    onCapture() {
            console.log('made it')
            //this.img = this.$refs.webcam.capture()
            //this.modal = true
            //console.log(this.img)
            //this.uploadToS3 (this.img)
        },
        onStarted(stream) {
            console.log("On Started Event", stream)
        },
        onStopped(stream) {
            console.log("On Stopped Event", stream)
        },
        onStop() {
            this.cameraOn = false
            this.$refs.webcam.stop()
        },
        async onStart(displayMediaOptions) {
            console.log('Starting screen capture')

            let mediaStream = null

            try {
                mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)

            } catch(err) {
                console.error("Error: " + err)
            }
            //const video = document.body.getElementById('video')
            const video = this.$refs.video
            video.srcObject = mediaStream

            //await this.onClip()

        },
        async onClip() {
            console.log('Capturing Image')

            this.dialog = true

            const video = this.$refs.video

            //const canvas = this.$refs.canvas
            const canvas = document.createElement("canvas");

            canvas.width = video.offsetWidth
            canvas.height = video.offsetHeight
            const context = canvas.getContext("2d");

            context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
            this.img = canvas.toDataURL("image/png");

            console.log(this.img)
        },
        async onSave() {
            await this.uploadToS3(this.img)
            this.modal = false
        },
    async uploadFilesToS3() {
      const files = this.files;
      console.log("Selected files: ");
      console.table(files);
      if (Array.isArray(files)) {
        files.forEach((file) => {
          this.uploadToS3(file)
        })
      } else {
        this.uploadToS3(files)
      }
    },
    async uploadToS3(file, progress, error, options) {
      const user = await Auth.currentAuthenticatedUser()
      console.log(user)
      console.log("made it" + file + progress + error + options)



      const metadata = {
        owner: user.username,
      };

      console.log(metadata);

      const fileName = this.uploadPath + file.name

      await Storage.vault
        .put(fileName, file, {
          progressCallback(progress) {
            console.log(`Uploading: ${progress.loaded}/${progress.total}`)
          },
          metadata: metadata,
        })
        .then((result) => {
          console.log(result)
          this.$refs.form. reset() 
        })
        .catch((err) => {
          console.log(err);
          error("Unable to upload to S3")
        });
    },
  }
}
</script>