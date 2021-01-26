<template>
  <div class="form">
    <v-form ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-card>
              <v-card-title>Create new space</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="form['name']"
                  :rules="nameRules"
                  label="Space name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form['description']"
                  label="Description of space"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn class="mr-4" @click="createSpace"> submit </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { Auth, API } from "aws-amplify";

import { createSpace } from "@/graphql/mutations";

export default {
  name: "SpaceForm",

  data: () => ({
    valid: false,
    form: {},
    spaceName: "",
    spaceDescription: "",
    nameRules: [(v) => !!v || "Name is required"],
    user: {},
    spaces: [],
  }),
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.user = user;
      })
      .catch(() => console.log("not signed in..."));
  },
  methods: {
    validate() {
      console.log(this.$refs.form.validate());
    },
    async createSpace() {
      const valid = this.$refs.form.validate();
      if (valid) {
        const response = await API.graphql({
          query: createSpace,
          variables: { input: this.form },
        });

        const space = {};
        space.id = response.data.createSpace.id;
        space.name = response.data.createSpace.name;
        this.$store.set("app/space", space);

        this.$router.push({ name: "SpaceHome", params: { spaceId: space.id } });
      }
    },
  },
};
</script>
