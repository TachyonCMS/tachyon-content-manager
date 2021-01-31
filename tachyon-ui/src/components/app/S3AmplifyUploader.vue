<template>
  <div>
    <v-file-input chips truncate-length="35"></v-file-input>
  </div>
</template>

<script>
import Amplify, { Auth, Storage } from "aws-amplify";
import awsconfig from "@/aws-exports";
Amplify.configure(awsconfig);

import { v4 as uuidv4 } from "uuid";

export default {
  name: "S3AmplifyUploader",

  methods: {
    async uploadFilesToS3(files) {
      console.log("Selected files: ");
      console.table(files);
      files.forEach((file) => {
        this.uploadToS3(file);
      });
    },
    async uploadToS3(file, progress, error, options) {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      console.log("made it" + file + progress + error + options);
      const uid = await uuidv4();
      console.log(uid);

      const metadata = {
        albumId: this.albumId,
        owner: user.username,
      };

      console.log(metadata);

      const fileName = "upload/photo/" + uid;

      await Storage.vault
        .put(fileName, file, {
          progressCallback(progress) {
            console.log(`Uploading: ${progress.loaded}/${progress.total}`);
          },
          metadata: metadata,
        })
        .then((result) => {
          console.log(result);
          return [{ path: "test" }];
        })
        .catch((err) => {
          console.log(err);
          error("Unable to upload to S3");
        });
    },
  },
};
</script>
