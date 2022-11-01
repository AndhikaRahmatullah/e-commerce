import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Keranjang from '../views/Keranjang.vue'
import Profile from '../views/Profile.vue'

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/home/:user',
		name: 'home',
		component: Home
	},
	{
		path: '/home/:user/keranjang',
		name: 'keranjang',
		component: Keranjang
	},
	{
		path: '/home/:user/profile',
		name: 'profile',
		component: Profile
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
