<template>
  <div class="form">
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-card>
              <v-card-title>{{instructions}}</v-card-title>
              <v-card-text>
                <v-file-input
                  chips
                  truncate-length="35"
                  ref="uploadfile"
                  v-model="files"
                ></v-file-input>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn class="mr-4" text @click="uploadFilesToS3"> submit </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
//import S3Uploader from '@/components/app/S3AmplifyUploader.vue'
import { Auth, Storage } from "aws-amplify"

export default {
  name: "SpaceImportForm",
  components: {
    //S3Uploader
  },
  props: ['uploadPath', 'instructions'],
  data() {
    return {
      files: []
    };
  },
  methods: {
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
  },
};
</script>