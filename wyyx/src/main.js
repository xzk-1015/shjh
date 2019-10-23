import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import resource from 'vue-resource'
import HelloWorld from './components/HelloWorld.vue'
import store from './components/store'
import vuex from 'vuex'

Vue.use(vuex)
Vue.use(resource)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: [{
    path: '/',
    name:'index',
    component: HelloWorld
  }]
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
