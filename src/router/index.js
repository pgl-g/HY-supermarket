import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Fenlei = () => import('../views/fenlei/Fenlei.vue')
const Shop = () => import('../views/shop/Shop.vue')
const Mine = () => import('../views/mine/Mine.vue')
const Detel = () => import('../views/detel/Detel.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/fenlei',
    component:Fenlei
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    path:'/detel/:iid',
    component:Detel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
