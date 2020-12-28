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
  beforeCreate () {
    // 1) 创建或指定事件总线对象, 保存到Vue的原型上
    Vue.prototype.$bus = this
  },
  el:'#app',
  render: h => h(App),
  router,
  store
})
