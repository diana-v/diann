<template>
    <div id="app">
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        text-rendering: optimizeLegibility;
    }

    /*html {*/
    /*    scroll-behavior: smooth !important;*/
    /*}*/

    /*h1 {*/
    /*    font-family: Montserrat, sans-serif;*/
    /*    letter-spacing: -2.5px;*/
    /*    color: black;*/
    /*}*/

    /*h2 {*/
    /*    font-family: Montserrat, sans-serif;*/
    /*    letter-spacing: -2.5px;*/
    /*    color: black;*/
    /*}*/

    /*h3 {*/
    /*    font-family: Montserrat, sans-serif;*/
    /*    letter-spacing: -1.5px;*/
    /*    color: black;*/
    /*}*/

    /*p {*/
    /*    font-family: Open-Sans, sans-serif;*/
    /*    font-weight: lighter;*/
    /*    color: black;*/
    /*}*/
</style>
