import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'; // createWebHistory
import Home from '@/views/home/home.vue';
import About from '@/views/about/about.vue';
import Login from '@/views/login/login.vue';

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
      },
    {
        path: '/about',
        name: 'About',
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router