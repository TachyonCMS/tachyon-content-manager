<template>
  <div class="about">
    <h1>Define Space</h1>
      <v-container fluid>
        <v-form>
          <v-form-base :model="myModel" :schema="mySchema" @input="handleInput"/>
        </v-form>
      </v-container>   

  </div>
</template>

<script>
import { VFormBase } from 'vuetify-form-base';

export default {
  data () {
    return {
                components: {
            'v-form-base': VFormBase
        },
      myModel: {
        name: 'Jumo',
        password: '123456',
        email: 'base@mail.com',
        checkbox: true,
        select: 'Jobs',
      },   
      mySchema: {
        name: { type: 'text', label: 'Name' },
        password: { type: 'password', label: 'Password' },
        email: { type: 'email', label: 'Email' },
        checkbox: { type: 'checkbox', label: 'Checkbox' },
        select: { type: 'select', label: 'Select', items: ['Tesla', 'Jobs', 'Taleb'] }
      }
    }
  },
  methods:{
    handleInput(val){
      console.log(val) 
    }
  }
}
</script>