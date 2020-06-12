import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
