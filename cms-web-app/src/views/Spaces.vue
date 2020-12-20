<template>
<div class="container">
    <h1>Spaces</h1>
    <div class="row mb-4">
        <div class="col">
            <FormulateForm
                class="form-general"
                name="create-space"
                @submit="createSpace"
                v-model="formValues">

                <FormulateInput
                    name="name"
                    type="text"
                    label="Space Name"
                    placeholder="A short name for the Space."
                    validation="required"
                />
                
                <FormulateInput
                    type="submit"
                    label="Create Space"
                />
            
            </FormulateForm>
        </div>
    </div>
    <div v-for="space in spaces" :key="space.id">
        <h3><router-link :to="{ name: 'Space' ,  params: { id: space.id }}">{{ space.name }}</router-link></h3>
    </div>
</div>
</template>

<script>
import {
    Auth, API, graphqlOperation
} from 'aws-amplify'

import { createSpace } from '@/graphql/mutations'
import { listSpaces } from '@/graphql/queries'
import { onCreateSpace } from '@/graphql/subscriptions';

export default {
    name: 'Spaces',
    async created() {
        this.getSpaces();
        this.subscribe();
    },
    data() {
        return {
            user: {},
            formValues: {},
            spaces: {}
        }
    },
    beforeCreate() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.user = user
            })
            .catch(() => console.log('not signed in...'))
    },
    methods: {
        async createSpace (data) {
            await API.graphql({
                query: createSpace,
                variables: {input: data},
            });
            this.$formulate.reset('create-space')

        },
        async getSpaces() {
            const spaces = await API.graphql({
                query: listSpaces
            });
            console.log(spaces)
            this.spaces = spaces.data.listSpaces.items;
        },
        async subscribe() {
            const owner = await Auth.currentAuthenticatedUser()
            API.graphql(
                graphqlOperation(onCreateSpace,
                    {
                    owner: owner.username
                    }
                )
            )
                .subscribe({
                next: (eventData) => {
                    let space = eventData.value.data.onCreateSpace;
                    if (this.spaces.some(item => item.name === space.name)) return; // remove duplications
                    this.spaces = [...this.spaces, space];
                }
            });
    }
}
};
</script>