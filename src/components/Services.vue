<template>
    <div class="services">
        <h2 class="service-header">What can I do for you?</h2>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="../assets/services-plan.svg" class="service-image"/>
                    <h3 class="service-title">1. Refine ideas</h3>
                    <p class="service-description">Together we will transform your ideas into realistic plans with a concrete roadmap of how we'll get there.</p>
                </div>
                <div class="col-md-4">
                    <img src="../assets/services-development.svg" class="service-image"/>
                    <h3 class="service-title">2. Web Development</h3>
                    <p class="service-description">Custom designed solutions for mobile-friendly websites that are
                        functional and engaging to your end-user, as well as effective at conveying your business
                        purpose.
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="../assets/services-seo.svg" class="service-image"/>
                    <h3 class="service-title">3. SEO Optimisation</h3>
                    <p class="service-description">Keeping the latest SEO tools and requirements in mind, your website
                        will be optimised to ensure it is visible to who matters most.</p>
                </div>
            </div>
        </div>
        <h3 class="service-slogan">Let's design something you and
            <br>
            your clients will fall in &#x1F49B; with.</h3>
    </div>
</template>
<script>
    export default {
        name: 'Services'
    }
</script>

<style>
    .services {
        /*height: 70vh;*/
        background-color: white;
        position: inherit;
    }

    .service-header {
        margin-bottom: 60px;
        display: inline-block;
        position: relative;
        z-index: 2;
        font-size: 3.125rem;
        font-weight: bold;
    }

    .service-header:after {
        background: #ffe01b;
        bottom: .325rem;
        content: "";
        height: .75rem;
        left: -.375rem;
        position: absolute;
        width: calc(100% + .375rem);
        z-index: -1;
    }

    .service-slogan {
        font-weight: bold;
        margin: 70px 10px 60px 10px;
    }

    .service-image {
        width: 70%;
        height: auto;
        padding-bottom: 20px;
    }

    .service-title {
        text-align: start;
        font-weight: bold;
    }

    .service-description {
        text-align: start;
    }

    @media screen and (max-width: 600px) {
        .service-header {
            font-size: 2.5rem;
        }

        .service-title {
            text-align: center;
        }

        .service-description {
            text-align: center;
        }
    }

</style>