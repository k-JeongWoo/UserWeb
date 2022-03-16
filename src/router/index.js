import Vue from 'vue'
import AppMain from './appMain'
import Router from 'vue-router'
// import sample from './sample'

Vue.use(Router)

const routes = [
  ...AppMain
]

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
//  base: process.env.BASE_URL
})
