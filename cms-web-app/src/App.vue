<template>
<div id="app" class="container">
    <div id="nav">
        <Navbar />
        <router-view></router-view>
        <div class='sign-out'>
            <amplify-sign-out v-if="signedIn"></amplify-sign-out>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import {
    Auth,
    Hub
} from 'aws-amplify'

export default {
    name: 'app',
    components: {
        Navbar
    },
    data() {
        return {
            signedIn: false
        }
    },
    beforeCreate() {
        Hub.listen('auth', data => {
            console.log('data:', data)
            const {
                payload
            } = data
            if (payload.event === 'signIn') {
                this.signedIn = true
                this.$router.push('/profile')
            }
            if (payload.event === 'signOut') {
                this.$router.push('/auth')
                this.signedIn = false
            }
        })
        Auth.currentAuthenticatedUser()
            .then(() => {
                this.signedIn = true
            })
            .catch(() => this.signedIn = false)
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
