<template>
<div class="container">
    <mdb-modal :show="modal" @close="modal = false" fullHeight  position="top" >
        <mdb-modal-body>
            <figure class="figure">
                <img :src="img" class="img-fluid" />
            </figure>
        </mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="secondary" @click.native="modal = false">Delete</mdb-btn>
            <mdb-btn color="primary"  @click="onSave">Upload</mdb-btn>
        </mdb-modal-footer>
    </mdb-modal>
    <div>
         <div class="custom-control custom-switch">
            <button type="button" class="btn btn-primary" @click="onStart">Capture Screen</button>
            <button type="button" class="btn btn-primary" @click="onClip">Save Screen</button>
            <video ref="video" id="video" autoplay class="img-fluid"></video>
        </div>
        <router-link :to="{ name: 'Album', params: { id: this.$route.params.id } }">Files</router-link>
        |
        <router-link :to="{ name: 'AlbumCamera', params: { id: this.$route.params.id } }">Camera</router-link>
    </div>

</div>
 
</template>

<script>
import Amplify, { Auth, Storage } from 'aws-amplify'
import awsconfig from '@/aws-exports'
Amplify.configure(awsconfig)

import { v4 as uuidv4 } from 'uuid'

import {
    mdbModal,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn

} from 'mdbvue';

export default {
    name: 'ScreenShot',
    beforeCreate() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.user = user
            })
            .catch(() => console.log('not signed in...'))
    },
    async created() {
        console.log(this.$route.params.id)
        const albumId = this.$route.params.id
        this.albumId = albumId
    },
    components: {
        mdbModal,
        mdbModalBody,
        mdbModalFooter,
        mdbBtn
    },
    data() {
        return {
            img: null,
            video: null,
            deviceId: null,
            devices: [],
            user: {},
            cameraOn: true,
            autoplay: false,
            modal: false
        };
    },
    computed: {
        device: function() {
            return this.devices.find(n => n.deviceId === this.deviceId);
        }
    },
    watch: {
        camera: function(id) {
            this.deviceId = id;
        },
        devices: function() {
            // Once we have a list select the first one
            const [first, ...tail] = this.devices;
            console.log(tail)
            if (first) {
                this.camera = first.deviceId;
                this.deviceId = first.deviceId;
            }
        }
    },
    methods: {
        onCapture() {
            console.log('made it')
            //this.img = this.$refs.webcam.capture()
            //this.modal = true
            //console.log(this.img)
            //this.uploadToS3 (this.img)
        },
        onStarted(stream) {
            console.log("On Started Event", stream)
        },
        onStopped(stream) {
            console.log("On Stopped Event", stream)
        },
        onStop() {
            this.cameraOn = false
            this.$refs.webcam.stop()
        },
        async onStart(displayMediaOptions) {
            console.log('Starting screen capture')

            let mediaStream = null

            try {
                mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)

            } catch(err) {
                console.error("Error: " + err)
            }
            //const video = document.body.getElementById('video')
            const video = this.$refs.video
            video.srcObject = mediaStream

            //await this.onClip()

        },
        async onClip() {
            console.log('Capturing Image')

            const video = this.$refs.video

            //const canvas = this.$refs.canvas
            const canvas = document.createElement("canvas");

            canvas.width = video.offsetWidth
            canvas.height = video.offsetHeight
            const context = canvas.getContext("2d");

            context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
            this.img = canvas.toDataURL("image/png");

            this.modal = true

            console.log(this.img)
        },
        async onSave() {
            await this.uploadToS3(this.img)
            this.modal = false
        },
        async uploadToS3 (file) {
            const user = await Auth.currentAuthenticatedUser()
            const uid = await uuidv4()
            const image = await this.dataURItoBlob(file)
            const fileName = 'upload/photo/' + uid + '.png'

            console.log(user)

            const metadata = {
                    albumId: this.albumId,
                    ownerId: user.attributes.sub,
                    owner: user.username
                }

            console.log(metadata)

            await Storage.vault.put(fileName, image, {
                progressCallback(progress) {
                    console.log(`Uploading: ${progress.loaded}/${progress.total}`)
                },
                metadata: metadata
            })
            .then (result => console.log(result))
            .catch(err => console.log(err))
        },
        async dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);
 
            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length)
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i)
            }

            return new Blob([ia], {type:mimeString})
        }
    }
}
</script>
