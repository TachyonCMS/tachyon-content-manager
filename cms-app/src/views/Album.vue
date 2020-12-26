<template>
<div class="container">
    <h1>{{album.name}}</h1>
     <file-selector
        accept-extensions=".jpg,.gif,.png,.jpeg"
        :multiple="true"
        :max-file-size="5 * 1024 * 1024"
        @validated="this.handleFilesValidated"
        @changed="this.uploadFilesToS3"
        >
         <mdb-btn color="blue">Upload File</mdb-btn>
    </file-selector>
    <div id="album">
         
    <div>
        <router-link :to="{ name: 'AlbumCamera', params: { id: this.$route.params.id } }">Camera</router-link>
        |
        <router-link :to="{ name: 'AlbumScreen', params: { id: this.$route.params.id } }">Screen</router-link>
    </div>
     
    </div>
    
</div>
</template>

<script>
import Amplify, { API, Auth, Storage } from 'aws-amplify'
import awsconfig from '@/aws-exports';
Amplify.configure(awsconfig);

import Vue from 'vue'
import FileSelector from 'vue-file-selector';
Vue.use(FileSelector);

import {

    mdbBtn

} from 'mdbvue';


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
    components: {

        mdbBtn
    },
    data() {
        return {
            user: {},
            album: {}
        }
    },
    methods: {
        fileAdded: function (fileList) {
        console.log('vfp:', fileList)
        },
        handleFilesValidated(result, files) {
            console.log('Validated files: ')
            console.table(files)
            console.log(result)
        },
        async getAlbum(albumId) {
            const album = await API.graphql({
                query: getAlbum,
                variables: { id: albumId },
            });
            console.log(album.data.getAlbum)
            this.album = album.data.getAlbum
        },
        async uploadFilesToS3 (files) {
           
            console.log('Selected files: ')
            console.table(files)
            files.forEach(file => {
                this.uploadToS3(file)
            })
        },
        async uploadToS3 (file, progress, error, options) {
           
            const user = await Auth.currentAuthenticatedUser()
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