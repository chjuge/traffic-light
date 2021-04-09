import Vue from 'vue'
import Router from 'vue-router'
import Green from './components/Green.vue'
import Red from './components/Red.vue'
import Yellow from './components/Yellow.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/red',
            component: Red,
            props: true,
        },
        {
            path: '/yellow',
            component: Yellow,
            props: true,
        },
        {
            path: '/green',
            component: Green,
            props: true,
        }
    ]
})