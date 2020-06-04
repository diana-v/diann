<template>
    <div class="portfolio">
        <h2 class="portfolio-header">My Work</h2>
    </div>
</template>
<script>
    export default {
        name: 'Portfolio'
    }
</script>

<style>
    .portfolio {
        background-color: #f6f6f4;
        /*height: 100vh;*/
    }

    .portfolio-header {
        padding-top: 60px;
        margin-bottom: 60px;
        display: inline-block;
        position: relative;
        z-index: 2;
        font-size: 3.125rem;
        font-weight: bold;
    }

    .portfolio-header:after {
        background: #ffe01b;
        bottom: .325rem;
        content: "";
        height: .75rem;
        left: -.375rem;
        position: absolute;
        width: calc(100% + .375rem);
        z-index: -1;
    }

    @media screen and (max-width: 600px) {
        .portfolio-header {
            font-size: 2.5rem;
        }
    }
</style>