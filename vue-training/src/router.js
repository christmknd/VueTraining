import * as  VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Math from '@/views/Math.vue';
import Todolist from '@/views/Todolist.vue';
//import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/math', 
        name: 'Math',
        component: Math
    }, 
    {
        path: '/todo',
        name: 'Todolist',
        component: Todolist
    }, 
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router;