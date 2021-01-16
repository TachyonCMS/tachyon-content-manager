<template>

<mdb-navbar color="indigo" dark class="navbar navbar-expand-lg navbar-dark align-top fixed-top" hamburger expand="xl">
    <mdb-navbar-toggler>
        <mdb-navbar-nav>
            <mdb-nav-item>
                <router-link :to="{ name: 'Home' }">Home</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Profile' }">Profile</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Spaces' }">Spaces</router-link>
            </mdb-nav-item>
            <mdb-dropdown tag="li" class="nav-item" v-bind:class="{disabled: isDisabled}">
                <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" >Settings</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                    <mdb-dropdown-item router :to="{ name: 'Locales', params: {spaceId: this.spaceId }}">Locales</mdb-dropdown-item>
                    <mdb-dropdown-item router :to="{ name: 'Models', params: {spaceId: this.spaceId }}">Models</mdb-dropdown-item>
               </mdb-dropdown-menu>
            </mdb-dropdown>
            <mdb-dropdown tag="li" :class="{disabled: isDisabled}" class="nav-item">
                <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" >Content</mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                    <mdb-dropdown-item router :to="{ name: 'Entries', params: {spaceId: this.spaceId }}">Entries</mdb-dropdown-item>
                    <mdb-dropdown-item router :to="{ name: 'Photos', params: {spaceId: this.spaceId }}">Photos</mdb-dropdown-item>
                    <mdb-dropdown-item router :to="{ name: 'Files', params: {spaceId: this.spaceId }}">Files</mdb-dropdown-item>
                    <mdb-dropdown-item router :to="{ name: 'Videos', params: {spaceId: this.spaceId }}">Videos</mdb-dropdown-item>
                </mdb-dropdown-menu>
            </mdb-dropdown>
            <mdb-nav-item>
                <router-link :to="{ name: 'Import' }" v-bind:class="{disabled: isDisabled}">Import</router-link>
            </mdb-nav-item>
        </mdb-navbar-nav>
    </mdb-navbar-toggler>
</mdb-navbar>

</template>

<script>
import {
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem

} from 'mdbvue'

export default {
    name: 'Navbar',
    components: {
        mdbNavbar,
        mdbNavbarToggler,
        mdbNavbarNav,
        mdbNavItem,
        mdbDropdown,
        mdbDropdownMenu,
        mdbDropdownToggle,
        mdbDropdownItem
    },
    data() {
        return {
            isDisabled: true,
            spaceId: '/'
        };
    },
    watch: {
    $route(to, from) {
        console.log(from)
        if('spaceId' in to.params) {
            this.spaceId = to.params.spaceId
            this.isDisabled = false
        } else {
            this.isDisabled = true
        }
    }
  }
}
</script>

<style scoped>
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>

