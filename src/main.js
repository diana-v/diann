import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

import VueRouter from 'vue-router'

import(/* webpackPreload: true */ "./components/About")
import(/* webpackPreload: true */ "./components/Services")
import(/* webpackPreload: true */ "./components/Contact")

import Vuelidate from 'vuelidate'

import axios from 'axios'

library.add(faLinkedin, faGithub);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.prototype.$http = axios;
Vue.prototype.$contact_url = process.env.VUE_APP_CONTACT_URL;

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackPreload: true */ "./page/Home.vue"),
        meta: {
            title: 'Diann | Web Development',
            metaTags: [
                {
                    name: 'title',
                    content: 'Diann | Web Development'
                },
                {
                    property: 'og:title',
                    content: 'Diann | Web Development'
                },
                {
                    name: 'description',
                    content: 'Turn to Diann for your web development needs. I build custom, clean and responsive websites for businesses and individuals.'
                },
                {
                    property: 'og:description',
                    content: 'Turn to Diann for your web development needs. I build custom, clean and responsive websites for businesses and individuals.'
                }
            ]
        }
    },
    {
        path: '/*',
        name: 'Error',
        component: () => import(/* webpackPreload: true */ "./page/Error.vue"),
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');