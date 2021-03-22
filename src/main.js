import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router.js'

import './assets/styles/style.css'
import './assets/styles/style.scss'
import './assets/styles/bootstrap.css'

import 'material-design-icons-iconfont'

Vue.config.productionTip = false

const MY_BASE_URL = 'https://full-stack-shop-api.herokuapp.com/'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

export default MY_BASE_URL
