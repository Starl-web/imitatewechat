import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import './assets/css/basic.scss'
import './assets/css/my-mint.scss'
import router from './router/router.js'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
