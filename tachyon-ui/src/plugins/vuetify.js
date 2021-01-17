/**
 * plugins/vuetify.js
 *
 * Vuetify documentation: https://vuetifyjs.com/
 */

// Imports
import Vue from 'vue'
import Vuetify, {
    VRow,
    VCol,
    VTextField,
    VTooltip,
    VCheckbox,
    VSelect,
} from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'
import { Ripple, Intersect, Touch, Resize } from 'vuetify/lib/directives'

import { VFormBase } from 'vuetify-form-base';

Vue.use(Vuetify)

export default new Vuetify({
  // https://vuetifyjs.com/en/features/theme/#theme-generator
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base
      }
    }
  },
  components: { 'v-form-base': VFormBase, VRow, VTooltip, VCol, VTextField, VCheckbox, VSelect },
  directives: { Ripple, Intersect, Touch, Resize }
})
