import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import './plugins/swiper'
import './mock/mockServer'
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
