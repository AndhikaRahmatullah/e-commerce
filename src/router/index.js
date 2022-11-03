import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Keranjang from '../views/Keranjang.vue'
import Profile from '../views/Profile.vue'
import DetailProduct from '../views/DetailProduct.vue'

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/home',
		name: 'homeOnly',
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
	{
		path: '/home/:user/detailproduct',
		name: 'detailProductOnly',
		component: Login
	},
	{
		path: '/home/:user/detailproduct/:id',
		name: 'detailProduct',
		component: DetailProduct
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
