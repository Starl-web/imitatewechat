import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import './assets/css/basic.scss'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/css/my-mint.scss'

Vue.use(Mint);

import Chats from './components/Chats.vue'
import Contacts from './components/Contacts.vue'
import Discover from './components/Discover.vue'
import Me from './components/Me.vue'

const routes = [
	{path: '/chats', component: Chats},
	{path: '/contacts', component: Contacts},
	{path: '/discover', component: Discover},
	{path: '/me', component: Me},
	{path: '*', redirect: '/chats'}
]

const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
