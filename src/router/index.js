import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App";

export default router

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: App
    }
  ]
})


