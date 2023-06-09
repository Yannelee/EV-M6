import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Opiniones from '@/views/Opiniones.vue'
import Admin from '@/views/Admin.vue'

const NOTFOUND = ()=> import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/opiniones/:game',
    name: 'game',
    component: Opiniones,
    props: true
  },
  {
    path: '/admin/:game',
    name: 'admin',
    component: Admin,
    props:true
  },
  {
    path: '*',
    name: 'notFound',
    component: NOTFOUND
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
