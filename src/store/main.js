import { defineStore } from "pinia";

export const useStore = defineStore('main', {
	state: () => ({
		count: 0,
	}),
	getters: {
	},
	actions: {
	},
})

console.log(useStore.state)