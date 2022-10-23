<template>
	<div class="Login">
		<!-- title -->
		<div class="flex justify-center">
			<p class="mb-10 text-5xl">Shapee</p>
		</div>

		<!-- greeting -->
		<div class="">
			<p class="mb-10" v-show="loginGreeting">Haloo, {{ user }}</p>
		</div>

		<!-- form -->
		<div class="flex gap-3 items-center mb-10" v-show="loginForm">
			<div class="xl:w-96">
				<input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Masukan Username" v-model="username" />
			</div>
			<button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" @click="login(username)">SUBMIT</button>
		</div>

		<!-- button actions -->
		<div class="flex flex-row gap-4" v-show="loginButtonActions">
			<router-link :to="'/home/' + user" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login</router-link>
			<button type="button" class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" @click="logout">keluar dari {{ user }}</button>
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";

	export default {
		name: "Login",
		data() {
			return {
				username: "",
			};
		},
		computed: {
			...mapState(useStore, ["user", "loginGreeting", "loginButtonActions", "loginForm"]),
		},

		methods: {
			...mapActions(useStore, { login: "login" }),

			logout() {
				if (confirm(`Apakah anda yakin ingin keluar ?`) === true) {
					this.username = "";
					const store = useStore();
					store.$reset();
				}
			},
		},
	};
</script>
