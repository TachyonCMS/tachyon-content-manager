<template>
<div class="container">
    <h1>{{space.name}}</h1>
    <h2>Albums</h2>
    <div class="row mb-4">
        <div class="col">
            <FormulateForm
                class="form-general"
                name="create-space-album"
                @submit="createAlbum"
                v-model="formValues">

                <FormulateInput
                    name="name"
                    type="text"
                    label="Album Name"
                    placeholder="A short name for the Album."
                    validation="required"
                />
                
                <FormulateInput
                    type="submit"
                    label="Create Album"
                />
            
            </FormulateForm>
        </div>
    </div>
    <div v-for="album in albums" :key="album.id">
        <h3><router-link :to="{ name: 'Album' ,  params: { id: album.id }}">{{ album.name }}</router-link></h3>
    </div>
</div>
</template>

<script>
import {
    Auth, API, graphqlOperation
} from 'aws-amplify'

import { getSpace } from '@/graphql/queries'
import { listAlbumsBySpace } from '@/graphql/queries'
import { createAlbum } from '@/graphql/mutations'
import { onCreateAlbum } from '@/graphql/subscriptions';

export default {
    name: 'Space',
    async created() {
        this.subscribeAlbums()

        const spaceId = this.$route.params.id
        this.spaceId = spaceId
        this.getSpace(spaceId)

        this.getAlbumsBySpace(spaceId)

    },
    data() {
        return {
            user: {},
            formValues: {},
            space: {},
            models: {},
            albums: {},
            media: {}
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
        async createAlbum (data) {
            data.spaceId = this.spaceId
            await API.graphql({
                query: createAlbum,
                variables: {input: data},
            });
            this.$formulate.reset('create-space-album')

        },
        async getSpace(spaceId) {
            const space = await API.graphql({
                query: getSpace,
                variables: { id: spaceId }
            });
            console.log(space)
            this.space = space.data.getSpace;
        },
        async getAlbumsBySpace(spaceId) {
            const albums = await API.graphql({
                query: listAlbumsBySpace,
                variables: { spaceId: spaceId }
            });
            console.log(albums)
            this.albums = albums.data.listAlbumsBySpace.items;
        },
        async subscribeAlbums() {
            const owner = await Auth.currentAuthenticatedUser()
            API.graphql(
                graphqlOperation(onCreateAlbum,
                    {
                    owner: owner.username
                    }
                )
            )
                .subscribe({
                next: (eventData) => {
                    let album = eventData.value.data.onCreateAlbum;
                    if (this.albums.some(item => item.name === album.name)) return; // remove duplications
                    this.albums = [...this.albums, album];
                }
            });
    }
}
};
</script>