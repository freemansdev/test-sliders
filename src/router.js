import Vue from 'vue'
import Router from 'vue-router'
import Siema from './components/siema.vue'
import Glide from './components/glide.vue'
import Slick from './components/slick.vue'

Vue.use(Router)

export const router = new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/siema',
            name: 'Siema',
            component: Siema
        },
        {
            path: '/glide',
            name: 'Glide',
            component: Glide
        },
        {
            path: '/slick',
            name: 'Slick',
            component: Slick
        },
    ]
})
