<template>
<div class="container">
    <h1>{{album.name}}</h1>
    <div id="album">
         <amplify-s3-image-picker 
            path="upload/photo/" 
            level="private"
            track="true"
            header-title=""
            header-hint=""
            button-text="Upload"
            />
    <div>
        <router-link :to="{ name: 'AlbumCamera', params: { id: this.$route.params.id } }">Camera</router-link>
        |
        <router-link :to="{ name: 'AlbumScreen', params: { id: this.$route.params.id } }">Screen</router-link>
    </div>
     
    </div>
    
</div>
</template>

<script>
import Amplify, { API, Auth, Storage, I18n } from 'aws-amplify'
import awsconfig from '@/aws-exports';
Amplify.configure(awsconfig);

import { getAlbum } from '@/graphql/queries'
import { v4 as uuidv4 } from 'uuid';

import { Translations } from "@aws-amplify/ui-components";

I18n.putVocabulariesForLanguage("en-US", {
  [Translations.IMAGE_PICKER_TITLE]: "Device image"
});

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

            const fileName = 'upload/photo/' + uid 

            await Storage.vault.put(fileName, file, {
                progressCallback(progress) {
                    console.log(`Uploading: ${progress.loaded}/${progress.total}`)
                },
                metadata: metadata
            })
            .then (result => {
                console.log(result)
                return [{"path": "test"}]
            })
            .catch(err => {
                console.log(err) 
                error('Unable to upload to S3')
            });
        }
    }
};
</script>