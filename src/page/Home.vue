<template>
<div>
    <nav id="home">
        <b-navbar id="navigation" fixed="top" toggleable="md" v-bind:class="scrolled_toolbar">
            <b-navbar-brand class="navbar-brand" href="/#home">
                <img src="../assets/logo.png" class="brand-logo" alt="Diann Logo"/>
                <img src="../assets/name.png" class="brand-name" alt="Diann"/>
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
                    <div class="border">
                        <b-nav-item class="nav-item nav-primary pr-1 pl-1" href="/#contact">
                            <a class="nav-link nav-primary-link">Let's Chat</a>
                        </b-nav-item>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </nav>
    <About id="about"></About>
    <Services id="services"></Services>
    <Contact id="contact"></Contact>
</div>
</template>

<script>
    import About from '../components/About.vue'
    import Services from '../components/Services.vue'
    import Contact from '../components/Contact.vue'

    export default {
        components: {
            About,
            Services,
            Contact
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

<style>
    html {
        scroll-behavior: smooth !important;
    }

    h1 {
        font-family: Montserrat, sans-serif;
        letter-spacing: -2.5px;
        color: black;
    }

    h2 {
        font-family: Montserrat, sans-serif;
        letter-spacing: -2.5px;
        color: black;
    }

    h3 {
        font-family: Montserrat, sans-serif;
        letter-spacing: -1.5px;
        color: black;
    }

    p {
        font-family: Open-Sans, sans-serif;
        font-weight: lighter;
        color: black;
    }

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

    div.border {
        border: 2px solid #000000 !important;
        border-radius: .3rem !important;
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
    }

    @media screen and (max-width: 767px) {
        #navigation {
            padding: 5px 30px 5px 30px;
        }
    }
</style>