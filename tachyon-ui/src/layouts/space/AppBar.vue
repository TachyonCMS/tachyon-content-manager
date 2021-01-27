<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title>{{ space.name }} - TachyonCMS</v-toolbar-title>
  </v-app-bar>
</template>

<script>
// Utilities
import { sync } from 'vuex-pathify'

import {
    API
} from 'aws-amplify'

import { getSpace } from '@/graphql/queries'

export default {
  name: 'SpaceAppBar',
  computed: { 
    drawer: sync('app/drawer')
  },
  async created() {
        const spaceId = this.$route.params.spaceId
        this.getSpace(spaceId)
    },
    data() {
        return {
            space: {}
        }
    },
    methods: {
        async getSpace(spaceId) {
            const space = await API.graphql({
                query: getSpace,
                variables: { id: spaceId }
            });
            const data = space.data.getSpace
            this.space = data
            // this.$store.set('app/space', data)
        }
    }
}
</script>
