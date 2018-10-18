import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'
import Portfolio from './components/pages/Portfolio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/pages/Portfolio.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/pages/Contact.vue')
    }
  ]
})
