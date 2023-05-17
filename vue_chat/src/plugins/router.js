import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path:'',name:'home',props: true, component: ()=> import('@/views/home.vue')},
    {path:'/room',name:'room', props: true,  meta: {
        auth: true
    }, component: ()=> import('@/views/room.vue')}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})
export default router