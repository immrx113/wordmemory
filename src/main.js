import Vue from 'vue'
import App from './App.vue'
import TDesign from "tdesign-vue"
import 'tdesign-vue/es/style/index.css'
// 引入路由配置
import router from './router/index.js';
//引入store
import store from "./store/index.js"
Vue.config.productionTip = false
Vue.use(TDesign);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
