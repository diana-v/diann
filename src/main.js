import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import Home from './page/Home.vue'
import Error from './page/Error.vue'

Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/*',
        name: 'Error',
        // redirect: '/error',
        component: Error,
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