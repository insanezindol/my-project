import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Main from '@/components/Main.vue'
import About from '@/components/About.vue'
import AppAxiosTest from '@/components/AppAxiosTest.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/axios',
    name: 'axios',
    component: AppAxiosTest
  }
  ]
})
