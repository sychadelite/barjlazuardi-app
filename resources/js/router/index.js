import axios from 'axios'
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const LandingPage = require('../pages/LandingPage.vue').default
const Portofolio = require('../pages/Portofolio.vue').default
const Features = require('../pages/Features.vue').default
const Profile = require('../pages/Profile.vue').default

import NotFound from '../pages/NotFound.vue'


const routes = [
    {
        name: 'LandingPage',
        path: '/welcome',
        component: LandingPage
    },
    {
        name: 'Portofolio',
        path: '/portofolio',
        component: Portofolio,
        props: true
    },
    {
        name: 'Features',
        path: '/features',
        component: Features,
        props: true
    },
    {
        name: 'Profile',
        path: '/profile',
        component: Profile,
        props: true
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    // linkActiveClass: 'nav-menu-active',
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth) {
//         const authUser = JSON.parse(window.localStorage.getItem('authUser'))
//         if (authUser && authUser.access_token) {
//             next()
//         } else {
//             next({ name: 'welcome' })
//         }
//     }
//     next()
// })

export default router