<template>
<div class="container">
    <h1>Org Spaces - {{user.username}}</h1>
    <div class="row mb-4">
        <div class="col">
            <form>
                <div class="form-outline mb-4">
                    <input type="name" id="space-name" class="form-control" />
                    <label class="form-label" for="space-name">Name</label>
                </div>
                <div class="form-outline mb-4">
                    <input type="password" id="space-description" class="form-control" />
                    <label class="form-label" for="space-description">Description</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Add Space</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import {
    Auth
} from 'aws-amplify'

export default {
    name: 'Spaces',
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
    }
};
</script>