<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="12">
        <v-card v-show="recorderView" flat>

          <v-card-actions class="justify-center">
            <v-card flat>
              <v-row align="center">
                <audio-recorder
                  upload-url="YOUR_API_URL"
                  :attempts="3"
                  :time="2"
                  :before-recording="callback"
                  :pause-recording="callback"
                  :after-recording="callback"
                  :select-record="callback"
                  :before-upload="callback"
                  :successful-upload="callback"
                  :failed-upload="callback"/>
              </v-row>
            </v-card>
          </v-card-actions>
        </v-card>

        <v-card v-show="storageOptionsView">
          <v-card-title>Save Recording</v-card-title>

          <v-card-actions class="justify-center">
            <v-btn class="mr-4" @click="discard" elevation="1">Discard</v-btn>
            <v-btn class="mr-4" @click="upload" color="primary">Upload</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Auth } from "aws-amplify" // Storage

import Vue from 'vue' 
import AudioRecorder from 'vue-audio-recorder'
Vue.use(AudioRecorder)

//import { v4 as uuidv4 } from "uuid";

export default {
  name: "S3AudioRecorder",
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.user = user;
      })
      .catch(() => console.log("not signed in..."));
  },
  components: {
    
  },
  data() {
    return {
      recorderView: true,
      storageOptionsView: false
    };
  },
  watch: {

  },
  mounted() {

  },
  beforeDestroy() {
    //this.stop();
  },
  methods: {
    discard () {

    },
    upload () {

    },
    callback (data) {
      console.debug(data)
    }
  }

};
</script>
