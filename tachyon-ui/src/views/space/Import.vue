<template>
  <div class="about">
    <h1>Import Contentful Data</h1>
    <SpaceImportForm />
  </div>
</template>

<script>

import SpaceImportForm from '@/views/space/forms/ImportForm.vue'

export default {
  name: "SpaceImport",
  components: {
    SpaceImportForm
  }
};

</script>


