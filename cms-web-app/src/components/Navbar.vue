<template>
<mdb-navbar color="indigo" dark class="navbar navbar-expand-lg navbar-dark align-top fixed-top" hamburger expand="xl">
    <mdb-navbar-toggler>
        <mdb-navbar-nav>
            <mdb-nav-item>
                <router-link :to="{ name: 'Accounts' }">Account</router-link>
            </mdb-nav-item>
            <mdb-nav-item>
                <router-link :to="{ name: 'Organizations' }">Orgs</router-link>
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

} from 'mdbvue';
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
