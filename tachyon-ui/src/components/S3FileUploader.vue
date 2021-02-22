<template>
      <v-container>
        <v-row>
          <v-col class="align-center justify-center">
            <v-card flat>
              <v-card-title>{{ instructions }}</v-card-title>
              <v-card-text>
                <v-file-input
                  chips
                  truncate-length="35"
                  ref="uploadfile"
                  v-model="files"
                  show-size
                  counter
                  multiple
                ></v-file-input>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  class="mr-4"
                  @click="uploadFilesToS3"
                  color="primary"
                  :disabled="uploadDisabled"
                >
                  Upload
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
//import S3Uploader from '@/components/app/S3AmplifyUploader.vue'
import { Auth, Storage } from "aws-amplify";

export default {
  name: "SpaceImportForm",
  components: {
    //S3Uploader
  },
  computed: {
    uploadDisabled: function () {
      return this.files.length < 1;
    },
  },
  props: ["uploadPath", "instructions", "acceptString"],
  data() {
    return {
      files: [],
    };
  },
  methods: {
    async uploadFilesToS3() {
      const files = this.files;
      console.log("Selected files: ");
      console.table(files);
      if (Array.isArray(files)) {
        files.forEach((file) => {
          this.uploadToS3(file);
        });
      } else {
        this.uploadToS3(files);
      }
    },
    async uploadToS3(file, error) {
      const user = await Auth.currentAuthenticatedUser();

      const metadata = {
        owner: user.username,
      };

      console.log(metadata);

      const fileName = this.uploadPath + file.name;

      await Storage.vault
        .put(fileName, file, {
          progressCallback(progress) {
            console.log(`Uploading: ${progress.loaded}/${progress.total}`);
          },
          metadata: metadata,
        })
        .then((result) => {
          console.log(result);
          this.$refs.form.reset();
        })
        .catch((err) => {
          console.log(err);
          error("Unable to upload to S3");
        });
    },
  },
};
</script>
