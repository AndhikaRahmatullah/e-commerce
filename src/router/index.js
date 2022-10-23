import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

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
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
