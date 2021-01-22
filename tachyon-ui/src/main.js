import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins'
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Vue.config.productionTip = false

Amplify.configure(awsconfig)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
