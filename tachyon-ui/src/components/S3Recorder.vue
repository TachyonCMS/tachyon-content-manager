<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="12">
        <v-card v-show="mediaSelectionView" flat>
          <v-card-title>{{ instructions }}</v-card-title>
          <v-card-actions class="justify-center">
            <v-btn class="mr-4" @click="onStart" color="primary">Enable Sharing</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Recorder",
  props: {
    acceptTypes: {
      type: String,
      default: "video/*",
    },
  },
  mounted() {
    this.initMedia();
    console.log(this.meta)
  },
  beforeCreate() {

  },
  components: {},
  data() {
    return {
      img: null,
      mediaSelectionView: false,
    };
  },
  watch: {},
  methods: {
    async initMedia() {
      this.mediaSelectionView = true;
    },
    hasGetUserMedia() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    },
    upload() {
        
    }
  },
};
</script>
