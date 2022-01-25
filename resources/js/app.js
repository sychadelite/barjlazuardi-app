require('./bootstrap');

window.Vue = require('vue').default;
import router from './router'

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