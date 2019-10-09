import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import hello from './components/HelloWorld.vue'
import activity from './components/activity.vue'
import book from './components/book.vue'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
  routes: [
      {
          path:'/',
          component:hello
      },
      {
        path:'/book',
        component:book
      },
      {
        path:'/activity',
        component:activity
      },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
