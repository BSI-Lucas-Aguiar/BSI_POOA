import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Embarcacoes from '../components/Embarcacoes'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/embarcacoes',
    component: Embarcacoes
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
