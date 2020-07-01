<template>
    <main class="error">
        <section class="error-content">
            <img src="../assets/error.svg" class="error-image"/>
            <h1 class="error-text">Error! The page you requested is not found.</h1>
            <a href="/" class="error-description">Back To Home</a>
        </section>
    </main>
</template>

<style>
    .error {
        background: white;
        height: 100vh;
        max-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error-image {
        height: 60vh;
        padding-bottom: 30px;
    }

    .error-text {
        /*font-weight: bold;*/
        text-decoration: none;
    }

    .error-description {
        color: black;
        font-weight: bold;
        font-size: 2rem;
        display: inline-block;
        position: relative;
        z-index: 2;
    }

    .error-description:after {
        background: #ffe01b;
        bottom: .325rem;
        content: "";
        height: .75rem;
        left: -.375rem;
        position: absolute;
        width: calc(100% + .375rem);
        z-index: -1;
    }

    .error-description:hover {
        color: black;
        text-decoration: none;
    }
</style>