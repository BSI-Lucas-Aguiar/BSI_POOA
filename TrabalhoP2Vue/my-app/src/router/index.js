import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Embarcacoes from '../components/Embarcacoes'
import TipoEmbarcacao from '../components/TipoEmbarcacao'


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
    
  },
  {
    path: '/tipoembarcacoes',
    component: TipoEmbarcacao
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
