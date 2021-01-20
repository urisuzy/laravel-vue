import './bootstrap'
import Vue from 'vue'
import App from './layouts/Default.vue'
import router from "./router";

const vm = new Vue({
    router,
    el: '#app',
    render: h => h(App)
})