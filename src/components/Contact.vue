<template>
    <div class="contact">
        <h2 class="contact-header">There's no time to waste, get in touch!</h2>
        <div class="container-xl contact-container">
            <div class="row">
                <div class="col-xl-7 contact-form">
                    <div>
                        <b-form @submit="onSubmit">
                            <b-form-group id="input-group-1" label-for="input-1">
                                <b-form-input
                                        id="input-1"
                                        v-model="form.name"
                                        required
                                        placeholder="Name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                    class="form-label"
                                    id="input-group-2"
                                    label-for="input-2"
                            >
                                <b-form-input
                                        id="input-2"
                                        v-model="form.email"
                                        type="email"
                                        required
                                        placeholder="Email"
                                ></b-form-input>
                            </b-form-group>


                            <b-form-group id="input-group-3" label-for="input-3">
                                <b-form-textarea
                                        id="textarea"
                                        v-model="form.text"
                                        placeholder="Type your message..."
                                        rows="3"
                                        no-resize
                                ></b-form-textarea>
                            </b-form-group>
                            <div class="container">
                                <div class="row">
                                    <div class="col button-submit">
                                        <div class="border">
                                            <b-button type="submit" class="contact-primary contact-button">Submit
                                            </b-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-form>
                    </div>
                </div>
                <div class="col-xl-5">
                    <img class="contact-image" src="../assets/contact-time.svg" alt="Girl with an hourglass"/>
                </div>
            </div>
        </div>
        <div class="social-container">
            <a href="https://github.com/diana-v" target=”_blank”><font-awesome-icon :icon="['fab', 'github']" class="icon" alt="Github"/></a>
            <a href="https://www.linkedin.com/in/diana-valaityte/" target=”_blank”><font-awesome-icon :icon="['fab', 'linkedin']" class="icon" alt="LinkedIn"/></a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Contact',
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    text: ''
                },
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.form))
            },
        }
    }
</script>

<style>
    .contact {
        background-color: #ffe01b;
    }

    .contact-image {
        max-width: 100%;
    }

    .contact-header {
        font-weight: bold;
        padding: 60px 0 30px 0;
        text-align: center;
        font-size: 2.5rem;
    }

    /* FORM */
    .contact-form {
        padding-top: 30px;
    }

    /* BUTTONS */
    .button-submit {
        align-content: center;
        display: grid;
        justify-content: center;
    }

    .contact-primary {
        background-color: #000000 !important;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .25) !important;
        border-radius: .125rem !important;
        transition: transform .2s !important;
        transition-timing-function: ease !important;
        color: white !important;
        border-color: transparent !important;
    }

    .contact-primary:hover {
        transform: translate(-.5rem, .5rem);
    }

    div.border {
        border: 2px solid #000000 !important;
        border-radius: .3rem !important;
        width: auto;
    }

    /* SOCIAL */
    .social-container {
        background-color: black;
        height: 60px;
    }

    .icon {
        color: #ffe01b;
        font-size: 60px;
        padding: 10px 20px;
    }

    .svg-inline--fa.fa-w-16 {
        width: 2em !important;
    }
    .svg-inline--fa.fa-w-14 {
        width: 2em !important;
    }
</style>