<template>
  <SpaceForm />
</template>

<script>

import SpaceForm from '@/views/space/forms/SpaceForm.vue'

import {
    Auth
} from 'aws-amplify'

export default {
  name: 'CreateSpace',
  components: {
    SpaceForm
  },
    async beforeCreate() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.user = user
            })
            .catch(() => console.log('not signed in...'))
    }
}
</script>