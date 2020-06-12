import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Home from '../views/Home'
import News from '../views/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path:'/', name: '', component: Home},
        { path: '/news',name:'news', component: News}
      ]
    }
  ]
})
