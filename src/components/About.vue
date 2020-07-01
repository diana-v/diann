<template>
    <section class="about about-content">
        <h1 class="about-header">Design Inspiring Websites</h1>
        <p class="about-paragraph">
            Your idea is not based on a template, so why should your website be? I design custom websites for
            businesses and individuals who wish to promote their products or services, build their brand and have an
            unforgettable digital presence.</p>
        <figure class="vector-layout vector-container">
            <img src="../assets/about-vector.svg" class="about-vector" alt="Girl painting a website"/>
        </figure>
    </section>
</template>
<script>
    export default {
        name: 'About'
    }
</script>

<style scoped>
    .about {
        padding-top: 15vh;
        background: linear-gradient(#ffe01b 77%, #ffffff 23%);
    }

    /* CONTENT*/
    .about-header {
        padding: 0 5%;
        font-size: 4rem;
        font-weight: bold;
    }

    .about-paragraph {
        padding: 10px 10% 0 10%;
        color: black;
        font-size: 1.375rem;
    }

    .vector-layout {
        box-sizing: border-box;
        margin-left: auto;
        margin-right: auto;
        max-width: 100em;
        padding-left: 5rem;
        padding-right: 5rem;
        width: 100%;
    }

    .vector-container {
        transition-property: opacity, transform, -webkit-transform;
        transition-timing-function: ease-in-out;
        opacity: 1;
        transform: translate(0);
        transition-duration: .4s;
        animation: none;
        margin-left: auto;
        margin-right: auto;
    }

    .about-vector {
        height: auto;
        max-width: 100%;
    }

    @media screen and (max-width: 600px) {
        .about-header {
            font-size: 3.125rem;
        }

        .about-paragraph {
            font-size: 1.25rem;
            font-weight: normal;
        }

        .vector-layout {
            display: none;
        }

        .about {
            background: #ffe01b;
            padding-bottom: 60px;
            margin-bottom: 60px;
        }
    }
</style>