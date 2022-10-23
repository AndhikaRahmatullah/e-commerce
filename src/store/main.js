import { defineStore } from "pinia";

export const useStore = defineStore('main', {
	state: () => ({
		count: 0,
		user: '',
		loginGreeting: false,
		loginForm: true,
		loginButtonActions: false,
	}),
	getters: {
	},
	actions: {
		login(userBaru) {
			this.user = userBaru
			if (this.user === '') {
				alert(`Mohon masukan username`)
			} else {
				this.loginGreeting = true
				this.loginForm = false
				this.loginButtonActions = true
			}
		}
	},
})