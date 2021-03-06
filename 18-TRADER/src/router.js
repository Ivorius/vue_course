import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/portfolio/Portfolio'),
      children: [
        {name:'portfolio-stock', path:'stock/:id', component: () => import('./components/portfolio/Stock')}
      ]
    },
    {
      path: '/stocks',
      name: 'stocks',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/stocks/Stocks'),
      children: [
        {name:'stocks-stock', path:'stock/:id', component: () => import('./components/stocks/Stock')}
      ]
    }
  ]
})
