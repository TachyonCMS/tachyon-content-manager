<template>
  <div class="about">
    <h1>Create new space</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="spaceName"
              :rules="nameRules"
              label="Space name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="spaceDescription"
              label="Description of space"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
          <v-btn
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>


  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    spaceName: '',
    nameRules: [
      v => !!v || 'Name is required',
    ]
  })
}
</script>