import { defineStore } from "pinia";

export const useStore = defineStore('main', {
	state: () => ({
		keranjangTotal: 0,
		keranjangValue: [],
		user: '',
		loginFalse: false,
		loginTrue: true,
	}),
	getters: {
		capitalUser: (state) => {
			let userBaru = state.user
			userBaru = userBaru.toLowerCase().replace(/\b[a-z]/g, function (letter) {
				return letter.toUpperCase();
			});
			return state.user = userBaru
		}
	},
	actions: {
		login(userBaru) {
			let userBaruKapital = userBaru;
			userBaruKapital = userBaruKapital.toLowerCase().replace(/\b[a-z]/g, function (letter) {
				return letter.toUpperCase();
			});
			let res = userBaruKapital.replace(/[/]/g, "")
			this.user = res
			if (this.user === '') {
				alert(`Mohon masukan username`)
			} else {
				this.loginFalse = true
				this.loginTrue = false
			}
		},

		// APIs

		//  All Products
		apiDataAll() {
			return fetch(`https://dummyjson.com/products?limit=100&skip=0&select=title,price,description,price,discountPercentage,rating,stock,brand,category,images`)
				.then((res) => res.json())
				.then((resu) => resu.products)
		},

		// by Search
		apiDataSearch(key) {
			return fetch(`https://dummyjson.com/products/search?q=${key}`)
				.then((res) => res.json())
				.then((result) => {
					if (result.total === 0) {
						throw new Error(`Produk tidak ditemukan`);
					}
					return result.products;
				});
		},

		// by Category
		async apiDataCatSmartphones() {
			const res = await fetch(`https://dummyjson.com/products/category/smartphones`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatLaptops() {
			const res = await fetch(`https://dummyjson.com/products/category/laptops`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatSkincare() {
			const res = await fetch(`https://dummyjson.com/products/category/skincare`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatHomeDecoration() {
			const res = await fetch(`https://dummyjson.com/products/category/home-decoration`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatFurniture() {
			const res = await fetch(`https://dummyjson.com/products/category/furniture`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatTops() {
			const res = await fetch(`https://dummyjson.com/products/category/tops`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatWomensDresses() {
			const res = await fetch(`https://dummyjson.com/products/category/womens-dresses`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatWomensShoes() {
			const res = await fetch(`https://dummyjson.com/products/category/womens-shoes`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatMensShirts() {
			const res = await fetch(`https://dummyjson.com/products/category/mens-shirts`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatMensShoes() {
			const res = await fetch(`https://dummyjson.com/products/category/mens-shoes`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatFragrances() {
			const res = await fetch(`https://dummyjson.com/products/category/fragrances`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatGroceries() {
			const res = await fetch(`https://dummyjson.com/products/category/groceries`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatMenWatches() {
			const res = await fetch(`https://dummyjson.com/products/category/mens-watches`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatWomenWatches() {
			const res = await fetch(`https://dummyjson.com/products/category/womens-watches`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatWomenBags() {
			const res = await fetch(`https://dummyjson.com/products/category/womens-bags`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatWomensJawellery() {
			const res = await fetch(`https://dummyjson.com/products/category/womens-jewellery`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatSunglasses() {
			const res = await fetch(`https://dummyjson.com/products/category/sunglasses`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatAutomotive() {
			const res = await fetch(`https://dummyjson.com/products/category/automotive`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatMotorcycle() {
			const res = await fetch(`https://dummyjson.com/products/category/motorcycle`);
			const result = await res.json();
			return result.products;
		},

		async apiDataCatLighting() {
			const res = await fetch(`https://dummyjson.com/products/category/lighting`);
			const result = await res.json();
			return result.products;
		},

	},
})