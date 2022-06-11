require('./bootstrap');

window.Vue = require('vue').default;
import router from './router'

import swal from 'sweetalert';

import VueTippy, { TippyComponent } from "vue-tippy";
Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";


Vue.component('navbar-component', require('./components/Navbar.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// navbar behavior on scrolled
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const app = new Vue({
    el: '#app',
    router
});