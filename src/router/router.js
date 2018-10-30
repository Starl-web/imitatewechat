import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Chats from '../components/Chats.vue'
import Contacts from '../components/Contacts.vue'
import Discover from '../components/Discover.vue'
import Me from '../components/Me.vue'

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

export default router