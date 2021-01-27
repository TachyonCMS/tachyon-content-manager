<template>
  <div>
    <h1>Available Spaces</h1>
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