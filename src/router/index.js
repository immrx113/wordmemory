import Vue from "vue";
import VueRouter from "vue-router";
import wordHome from "../pages/wordHome.vue";
import wordBook from "../pages/wordBook.vue";
import wordUsers from "../pages/wordUsers.vue";
import wordTest from "../pages/wordTest.vue"
import wordBookChoose from "../pages/wordBookChoose.vue"
import wordMemory from "../pages/wordMemory.vue"
import wordTestIng from "../pages/wordTestIng.vue"

Vue.use(VueRouter);
const routes = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'Home',
            component: wordHome,
        },
        {
            path:'/book',
            name:'Book',
            component: wordBook
        },
        {
            path:"/test",
            name:"Test",
            component:wordTest
        },
        {
            path:"/users",
            name:"Users",
            component:wordUsers,
        },
        {
            path:"/bookchoose",
            name:"BookChoose",
            component:wordBookChoose
        },
        {
            path:"/wordmemory",
            name:"WordMemory",
            component:wordMemory
        },
        {
            path:"/wordtest",
            name:"wordTest",
            component:wordTestIng,
        }
    ]
});

export default routes;