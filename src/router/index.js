import CartComp from '../components/CartComp.vue'
import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path:"/",
        name : "Home",
        component : CartComp
    },
    // {
    //     path:"/cart",
    //     name : "CartApp",
    //     component : CartApp
    // }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
