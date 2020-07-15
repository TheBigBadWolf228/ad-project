import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Add from "../components/Ads/Add";
import AddList from "../components/Ads/AddList";
import NewAdd from "../components/Ads/NewAdd";
import Login from "../components/Auth/Login";
import Registration from "../components/Auth/Registration";
import Orders from "../components/User/Orders";



Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: AddList
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAdd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ]
})


