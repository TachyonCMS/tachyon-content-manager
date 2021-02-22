<template>
  <div class="about">
    <h1>Space files</h1>
    <S3FileUploader
      :uploadPath="uploadPath"
      instructions="Choose your files"
    />
  </div>
</template>

<script>
import S3FileUploader from "@/components/S3FileUploader.vue";

export default {
  name: "SpaceImport",
  components: {
    S3FileUploader,
  },
  data() {
    return {
      uploadPath: "",
    };
  },
  async created() {
    const space = this.$store.get("app/space");
    this.uploadPath = "upload/file/" + space.id + "/";
  },
};
</script>