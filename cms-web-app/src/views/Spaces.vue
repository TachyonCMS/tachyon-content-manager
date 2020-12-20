<template>
<div class="container">
    <h1>Org Spaces - {{user.username}}</h1>
    <div class="row mb-4">
        <div class="col">
            <FormulateForm
                class="login-form"
                name="create-album"
                @submit="submitHandler"
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