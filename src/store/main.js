import { defineStore } from "pinia";

export const useStore = defineStore('main', {
	state: () => ({
		keranjangTotal: 0,
		user: '',
		loginFalse: false,
		loginTrue: true,
	}),
	getters: {
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
			return fetch(`https://dummyjson.com/products`)
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

	},
})