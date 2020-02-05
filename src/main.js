import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入异步网络请求库axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

//引入全局统一的存储库,使用Vuex状态管理
import store from './store/index.js'
import RGBaster from './util/rgbaster.js'
Vue.use(VueAxios,axios,RGBaster)
Vue.prototype.$store = store;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
