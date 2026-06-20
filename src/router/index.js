import Vue from "vue";
import VueRouter from "vue-router";
import wordHome from "../pages/wordHome.vue";
import wordBook from "../pages/wordBook.vue";
import wordUsers from "../pages/wordUsers.vue";
import wordTest from "../pages/wordTest.vue"
import wordBookChoose from "../pages/wordBookChoose.vue"
import wordMemory from "../pages/wordMemory.vue"
import wordTestIng from "../pages/wordTestIng.vue"
import authLayout from "../pages/authLayout.vue"
import logIn from "../pages/logIn.vue"
import wordRegister from "../pages/wordRegister.vue"
import mainLayout from "../pages/mainLayout.vue"
import wordTestResult from "../pages/wordTestResult.vue"
Vue.use(VueRouter);
const routes = new VueRouter({
    routes: [
        //无导航栏的登录注册
        {
            path: '/',
            component:authLayout,
            children:[
                {
                    path:"",
                    redirect:"/login",
                },
                {
                    path:"/login",
                    name:"login",
                    component:logIn,

                },
                {
                    path:"/register",
                    name:"register",
                    component:wordRegister,
                },

            ]
        },
        {
            path:"/main",
            name:"main",
            component:mainLayout,
            children:[
            {
                path: 'home',
                name: 'Home',
                component: wordHome,
            },
            {
                path:'book',
                name:'Book',
                component: wordBook
            },
            {
                path:"test",
                name:"Test",
                component:wordTest
            },
            {
                path:"users",
                name:"Users",
                component:wordUsers,
            },
            {
                path:"bookchoose",
                name:"BookChoose",
                component:wordBookChoose
            },
            {
                path:"wordmemory",
                name:"WordMemory",
                component:wordMemory
            },
            {
                path:"wordtest",
                name:"wordTest",
                component:wordTestIng,
            },
            {
                path:"examresult",
                name:"examresult",
                component:wordTestResult,
            }
            ]
    }   
    ]
});

export default routes;