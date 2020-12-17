<template>
<mdb-navbar color="indigo" dark class="navbar navbar-expand-lg navbar-dark align-top fixed-top" hamburger expand="xl">
    <mdb-navbar-toggler>
        <mdb-navbar-nav>
            <mdb-nav-item>
                <router-link :to="{ name: 'Spaces' }">Spaces</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Entries' }">Entries</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Models' }">Models</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Media' }">Media</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Profile' }">Profile</router-link>
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

} from 'mdbvue'
export default {
    name: 'Navbar',
    components: {
        mdbNavbar,
        mdbNavbarToggler,
        mdbNavbarNav,
        mdbNavItem,
    }
}
</script>

<style scoped>
.router-link-exact-active {
    color: white
}

a {
    color: lightblue
}
</style>
