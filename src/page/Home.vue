<template>
    <main id="home">
        <b-navbar id="navigation" fixed="top" toggleable="md" v-bind:class="scrolled_toolbar">
            <b-navbar-brand class="navbar-brand" href="/#home">
                <img src="../assets/logo.svg" class="brand-logo" width="40" height="40" alt="Diann Logo"/>
                <img src="../assets/name.svg" class="brand-name" height="30" width="100" alt="Diann"/>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" id="navbar-toggler"></b-navbar-toggle>
            <b-collapse class="navbar-items" id="nav-collapse" is-nav>
                <b-navbar-nav class="navbar-nav ml-auto">
                    <b-nav-item class="nav-item nav-secondary ml-3 mr-3 pr-1 pl-1" href="/#about">
                        <a class="nav-link nav-secondary-link">About Me</a>
                    </b-nav-item>
                    <b-nav-item class="nav-item nav-secondary ml-3 mr-4 pr-1 pl-1" href="/#services">
                        <a class="nav-link nav-secondary-link">Services</a>
                    </b-nav-item>
                    <b-nav-item href="/#contact">
                        <div id="border">
                            <div class="nav-item nav-primary pr-1 pl-1">
                                <a class="nav-link nav-primary-link">Let's Chat</a>
                            </div>
                        </div>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <About id="about"></About>
        <Services id="services"></Services>
        <Contact id="contact"></Contact>
    </main>
</template>

<script>
    import {BNavbar} from 'bootstrap-vue/src/components/navbar/navbar'
    import {BNavbarBrand} from 'bootstrap-vue/src/components/navbar/navbar-brand'
    import {BNavbarNav} from 'bootstrap-vue/src/components/navbar/navbar-nav'
    import {BNavbarToggle} from 'bootstrap-vue/src/components/navbar/navbar-toggle'
    import {BNavItem} from 'bootstrap-vue/src/components/nav/nav-item'
    import {BCollapse} from 'bootstrap-vue/src/components/collapse/collapse';

    const About = () => import(/* webpackPreload: true */ '../components/About.vue');
    const Services = () => import(/* webpackPreload: true */ '../components/Services.vue');
    const Contact = () => import(/* webpackPreload: true */ '../components/Contact.vue');

    export default {
        components: {
            About,
            Services,
            Contact,
            BNavbar,
            BNavbarBrand,
            BNavbarNav,
            BNavbarToggle,
            BNavItem,
            BCollapse
        },
        data() {
            return {
                scrolled_toolbar: '',
            }
        },

        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.onScroll);
        },

        methods: {
            onScroll() {
                if (window.pageYOffset > 60) {
                    this.scrolled_toolbar = 'toolbar-scrolled';
                } else {
                    this.scrolled_toolbar = '#navigation';
                }
            },
        },
    }
</script>

<style scoped>
    /* NAVIGATION */
    #navigation {
        background: #ffe01b;
        padding: 15px 40px 15px 40px !important;
    }

    .toolbar-scrolled {
        background: #ffe01b;
        padding: 15px 40px 15px 40px;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .25);
    }

    .nav-link {
        text-decoration: none;
        height: 60px;
        align-items: center !important;
        justify-content: center !important;
        display: flex !important;
    }

    .nav-secondary-link {
        color: #000000 !important;
    }

    .nav-secondary:hover {
        transform: translateY(-.25rem);
        transition: transform .2s;
        transition-timing-function: ease;
        transition-timing-function: ease-in-out;
    }

    .nav-primary-link {
        color: white !important;
    }

    .nav-primary {
        background-color: #000000;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .25);
        border-radius: .125rem;
        transition: transform .2s;
        transition-timing-function: ease;
    }

    .nav-primary:hover {
        transform: translate(-.5rem, .5rem);
    }

    #border {
        border: 2px solid #000000 !important;
        border-radius: .3rem !important;
        min-width: 130px;
    }

    #navbar-toggler {
        border: none;
    }

    .brand-logo {
        width: 40px;
        height: 40px;
        margin: 0 10px 0 10px;
    }

    .brand-name {
        height: 30px;
        width: 100px;
    }

    @media screen and (max-width: 767px) {
        #navigation {
            padding: 5px 30px 5px 30px;
        }
    }
</style>