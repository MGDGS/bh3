import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import 'swiper/css/swiper.css'

import axios from 'axios'
 
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
