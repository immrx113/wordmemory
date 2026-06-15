import Vue from "vue";
import VueRouter from "vue-router";
import wordHome from "../pages/wordHome.vue";
import wordBook from "../pages/wordBook.vue";
import wordUsers from "../pages/wordUsers.vue";
import wordTest from "../pages/wordTest.vue"

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
        }
    ]
});

export default routes;