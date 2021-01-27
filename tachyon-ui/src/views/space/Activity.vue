<template>
  <div>
    <h1>Recent Spaces</h1>
    <SpacesList />
  </div>
</template>

<script>

import SpacesList from '@/views/space/components/SpacesList.vue'

export default {
  name: "SpacesActivity",
  components: {
    SpacesList
  }
};
</script>
