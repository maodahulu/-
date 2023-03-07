import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
//异步
const Checked = () => import('../views/navs/Checked.vue')
const Area = () => import('../views/navs/Area.vue')
const Resource = () => import('../views/navs/Resource.vue')
const Citys = () => import('../views/Map/Citys.vue')
const Travel = () => import('../views/navs/Travel.vue')
const SelectCitys = () => import('../views/Citys/Citys.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Checked',
    name: 'Checked',
    component: Checked
  },
  {
    path: '/Area',
    name: 'Area',
    component: Area
  },
  {
    path: '/Resource',
    name: 'Resource',
    component: Resource
  },
  {
    path: '/Citys/:cityname',
    name: 'Citys',
    component: Citys,
    props: true
  },
  {
    path: '/Travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/SelectCitys',
    name: 'SelectCitys',
    component: SelectCitys
  }
]

const router = new VueRouter({
  routes
})

export default router
