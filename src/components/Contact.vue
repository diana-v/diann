<template>
    <div class="contact">
        <h2 class="contact-header">There's no time to waste, get in touch!</h2>
        <main class="container-xl contact-container">
            <div class="row">
                <section class="col-xl-7">
                    <b-form @submit.stop.prevent="onSubmit">
                        <b-form-group
                                class="form-label"
                                id="input-group-1"
                                label-for="input-1"
                                label="Name:"
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="$v.form.name.$model"
                                    :state="validateState('name')"
                                    aria-describedby="input-1-live-feedback"
                                    placeholder="First name"
                            ></b-form-input>
                            <b-form-invalid-feedback
                                    id="input-1-live-feedback"
                            >This is a required field and must be at least 3 characters.
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group
                                id="input-group-2"
                                class="form-label"
                                label-for="input-2"
                                label="Email:"
                        >
                            <b-form-input
                                    id="input-2"
                                    v-model="$v.form.email.$model"
                                    :state="validateState('email')"
                                    type="email"
                                    aria-describedby="input-2-live-feedback"
                                    placeholder="example@example.com"
                            ></b-form-input>
                            <b-form-invalid-feedback id="input-2-live-feedback">Email address provided seems to be
                                invalid.
                            </b-form-invalid-feedback>
                        </b-form-group>


                        <b-form-group
                                id="input-group-3"
                                class="form-label"
                                label-for="input-3"
                                label="Message:"
                        >
                            <b-form-textarea
                                    id="input-3"
                                    v-model="$v.form.message.$model"
                                    :state="validateState('message')"
                                    aria-describedby="input-3-live-feedback"
                                    placeholder="Please type your message here..."
                                    rows="3"
                                    no-resize
                            ></b-form-textarea>
                            <b-form-invalid-feedback id="input-3-live-feedback">This is a required field and must be at
                                least 10 characters long.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <div class="button-submit">
                            <div class="border">
                                <b-button type="submit" class="contact-primary contact-button">Submit
                                </b-button>
                                <b-modal id="modal-submit" text-center ok-only centered hide-header
                                         ok-variant="dark" footer-border-variant="0">
                                    <p class="my-3 text-center">{{modal_message}}</p>
                                </b-modal>
                            </div>
                        </div>
                    </b-form>
                </section>
                <figure class="col-xl-5">
                    <img class="contact-image" src="../assets/contact-time.svg" alt="Girl with an hourglass"/>
                </figure>
            </div>
        </main>

        <footer class="social-container">
            <figure>
                <a href="https://github.com/diana-v" target=”_blank”>
                    <font-awesome-icon :icon="['fab', 'github']" class="icon" alt="Github"/>
                    <figcaption class="icon-label">Github</figcaption>
                </a>
            </figure>
            <figure>
                <a href="https://www.linkedin.com/in/diana-valaityte/" target=”_blank”>
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" alt="LinkedIn"/>
                    <figcaption class="icon-label">LinkedIn</figcaption>
                </a>
            </figure>
        </footer>
    </div>
</template>
<script>
    import {validationMixin} from "vuelidate";
    import {required, minLength, email} from "vuelidate/lib/validators";
    import {BForm} from 'bootstrap-vue/src/components/form/form';
    import {BFormInvalidFeedback} from 'bootstrap-vue/src/components/form/form-invalid-feedback';
    import {BFormTextarea} from 'bootstrap-vue/src/components/form-textarea/form-textarea';
    import {BFormGroup} from 'bootstrap-vue/src/components/form-group/form-group';
    import {BFormInput} from 'bootstrap-vue/src/components/form-input/form-input';
    import {BModal} from 'bootstrap-vue/src/components/modal/modal';
    import {BButton} from 'bootstrap-vue/src/components/button/button';
    import {ModalPlugin} from 'bootstrap-vue/esm/components/modal/index';

    export default {
        use: {
            ModalPlugin
        },
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BFormTextarea,
            BFormInvalidFeedback,
            BButton,
            BModal
        },
        name: 'Contact',
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    message: ''
                },
                modal_message: "Message Received! I'll respond within 24h"
            }
        },
        validations: {
            form: {
                email: {
                    required,
                    email
                },
                name: {
                    required,
                    minLength: minLength(3)
                },
                message: {
                    required,
                    minLength: minLength(10)
                }
            }
        },
        methods: {
            validateState(name) {
                const {$dirty, $error} = this.$v.form[name];
                return $dirty ? !$error : null;
            },

            onSubmit() {
                this.$v.form.$touch();
                if (this.$v.form.$anyError) {
                    return;
                }
                this.$http.post(this.$contact_url, {
                    name: this.form.name,
                    email: this.form.email,
                    message: this.form.message
                })
                    .then(() => {
                        this.modal_message = "Message Received! I'll respond within 24h"
                        this.$bvModal.show("modal-submit")
                    })
                    .catch(() => {
                        this.modal_message = "An error occurred. Please try again later."
                        this.$bvModal.show("modal-submit")
                    })
            }
        }
    }
</script>

<style>
    a {
        text-decoration: none !important;
    }

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
    .form-label > label {
        text-align: start;
        padding-left: 0.3rem;
        margin-bottom: 0.3rem;
    }

    /* BUTTONS */
    .button-submit {
        align-content: center;
        display: grid;
        justify-content: center;
        padding-bottom: 20px;
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
        height: 90px;
        justify-content: center;
        display: flex;
    }

    .icon {
        color: #ffe01b;
        font-size: 60px;
        padding: 10px 20px 5px 20px;
    }

    .icon-label {
        color: #ffe01b;
        font-size: 14px;
    }

    .svg-inline--fa.fa-w-16 {
        width: 2em !important;
    }

    .svg-inline--fa.fa-w-14 {
        width: 2em !important;
    }

    /* MODAL */
    .modal-body {
        padding: 1rem 1rem 0 1rem !important;
    }

    .modal-footer {
        padding: 0 0.75rem 0.75rem 0.75rem !important;
        justify-content: center;
    }

    .btn-dark {
        background-color: black !important;
        border-color: black !important;
        color: white;
        box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .25);
    }

    .btn-dark:hover {
        background-color: #f4d406 !important;
        border-color: #f4d406 !important;
        color: black;
    }

</style>