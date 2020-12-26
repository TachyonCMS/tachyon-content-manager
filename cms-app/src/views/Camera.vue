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
        <div>
            <div class="border">
                <vue-web-cam
                    ref="webcam"
                    :device-id="deviceId"
                    width="100%"
                    autoplay="autoplay"
                    @started="onStarted"
                    @stopped="onStopped"
                    @error="onError"
                    @cameras="onCameras"
                    @camera-change="onCameraChange"
                />
            </div>

            <div >
                <div>
                    <select v-model="camera">
                        <option>-- Select Device --</option>
                        <option
                            v-for="device in devices"
                            :key="device.deviceId"
                            :value="device.deviceId"
                        >{{ device.label }}</option>
                    </select>
                </div>
                <!-- Default switch -->
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="cameraToggle" checked="true" @change="onToggle" >
                    <label class="custom-control-label" for="cameraToggle">ON</label>   
                    <button type="button" class="btn btn-primary" @click="onCapture">Snap</button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <router-link :to="{ name: 'Album', params: { id: this.$route.params.id } }">Files</router-link>
        |
        <router-link :to="{ name: 'AlbumScreen', params: { id: this.$route.params.id } }">Screen</router-link>
    </div>
</div>
</template>

<script>
import Amplify, { Auth, Storage } from 'aws-amplify'
import awsconfig from '@/aws-exports'
Amplify.configure(awsconfig)

import { WebCam } from "vue-web-cam"

import { v4 as uuidv4 } from 'uuid'

import {
    mdbModal,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn

} from 'mdbvue';

export default {
    name: 'Camera',
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
        'vue-web-cam': WebCam,
        mdbModal,
        mdbModalBody,
        mdbModalFooter,
        mdbBtn
    },
    data() {
        return {
            img: null,
            camera: null,
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
            this.img = this.$refs.webcam.capture()
            this.modal = true
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
        onStart() {
            this.cameraOn = true
            this.$refs.webcam.start()
        },
        onError(error) {
            console.log("On Error Event", error)
        },
        onCameras(cameras) {
            this.devices = cameras;
            console.log("On Cameras Event", cameras)
        },
        onCameraChange(deviceId) {
            this.deviceId = deviceId;
            this.camera = deviceId;
            console.log("On Camera Change Event", deviceId)
        },
        onToggle() {
            console.log(this.cameraOn)
            this.cameraOn === true ?  this.onStop() : this.onStart()
        },
        async onSave() {
            this.uploadToS3 (this.img)
            this.modal = false
        },
        async uploadToS3 (file) {
            const user = await Auth.currentAuthenticatedUser()
            const uid = await uuidv4()
            const image = await this.dataURItoBlob(file)
            const fileName = 'upload/photo/' + uid + '.jpg'

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
