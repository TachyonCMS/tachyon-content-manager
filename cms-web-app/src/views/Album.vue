<template>
<div class="container">
    <h1>Album {{album.name}}</h1>
    <div id="album">
    
        <FormulateInput
            type="image"
            name="uploadImage"
            label="Select an image to upload"
            help="Select a png, jpg or gif to upload."
            validation="mime:image/jpeg,image/png,image/gif"
            :uploader="uploadToS3"
        />
    </div>
    <div>
        <router-link :to="{ name: 'AlbumCamera', params: { id: this.$route.params.id } }">Camera</router-link>
    </div>
</div>
</template>

<script>
import Amplify, { API, Auth, Storage } from 'aws-amplify'
import awsconfig from '@/aws-exports';
Amplify.configure(awsconfig);

import { getAlbum } from '@/graphql/queries'
import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'Album',
    async created() {
        console.log(this.$route.params.id)
        const albumId = this.$route.params.id
        this.albumId = albumId
        this.getAlbum(albumId)
    },
    data() {
        return {
            user: {},
            album: {}
        }
    },
    methods: {
        async getAlbum(albumId) {
            const album = await API.graphql({
                query: getAlbum,
                variables: { id: albumId },
            });
            console.log(album.data.getAlbum)
            this.album = album.data.getAlbum
        },    
        async uploadToS3 (file, progress, error, options) {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user)
            console.log('made it' + file + progress + error + options)
            const uid = await uuidv4()
            console.log(uid)

            const metadata = {
                    albumId: this.albumId,
                    owner: user.username
                }

            console.log(metadata)

            const fileName = '/upload/photo/' + uid 

            await Storage.vault.put(fileName, file, {

                metadata: metadata
            })
            .then (result => {
                progress(100)
                console.log(result)
                //return result.json
            })
            .catch(err => {
                console.log(err) 
                error('Unable to upload to S3')
            });
        }
    }
};
</script>