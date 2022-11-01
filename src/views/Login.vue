<template>
	<Loading id="loadingDisplay" />
	<div class="Login">
		<div class="px-5 py-5 md:py-0 md:px-14 flex flex-col justify-center gap-y-5 md:gap-y-16 h-screen bg-cover font-roboto hidden" id="head">
			<div class="">
				<!-- greeting -->
				<div class="text-white font-fredoka w-fit">
					<Transition name="slide-fade">
						<p class="text-5xl md:text-5xl lg:text-7xl" v-show="loginTrue" v-if="transition">Shepie</p>
					</Transition>
					<Transition name="slide-fade2">
						<p class="text-4xl md:text-5xl lg:text-7xl absolute bottom-[120px] tracking-wide" v-show="loginFalse">
							{{ greetingByTime }}, <span class="bg-gradient-to-br from-oren to-oren2 text-transparent bg-clip-text">{{ user }}</span>
						</p>
					</Transition>
				</div>
				<!-- slogan -->
				<div class="mt-3 md:w-[500px] lg:w-[700px] text-white tracking-wide">
					<Transition name="shadow">
						<p class="text-lg md:text-2xl font-light" v-show="loginTrue" v-if="transition">Kami berada dalam Bisnis, untuk menyempurnakan gaya kehidupan Anda.</p>
					</Transition>
				</div>
			</div>

			<!-- form -->
			<Transition name="dropDown">
				<div class="flex gap-3 items-center" v-show="loginTrue" v-if="transition">
					<div class="md:w-[400px] lg:w-96">
						<input type="text" class="form-control block w-full text-sm md:text-base px-3 py-1.5 border-2 border-oren md:border-white tracking-wider font-normal text-oren bg-transparent md:bg-white bg-clip-padding rounded transition-all duration-500 outline-none focus:text-oren focus:bg-transparent focus:border-oren focus:ring-0" placeholder="Masukan username" v-model="username" @keypress.enter="localLogin()" />
					</div>
					<button type="button" class="inline-block px-4 md:px-6 py-2.5 bg-transparent md:bg-oren border-2 border-oren text-oren md:text-white font-medium text-xs md:text-sm tracking-wide leading-tight uppercase rounded shadow-md hover:bg-transparent hover:text-oren hover:shadow-lg active:bg-oren active:shadow-lg transition-all duration-300" @click="localLogin()">lanjut</button>
				</div>
			</Transition>

			<!-- button actions -->
			<Transition name="slide-fade2">
				<div class="absolute bottom-[40px]" v-show="loginFalse" v-if="transition">
					<router-link :to="'/home/' + user" class="mr-2 inline-block px-4 md:px-6 py-2.5 bg-transparent md:bg-oren border-2 border-oren text-oren md:text-white font-medium text-xs md:text-sm tracking-wide leading-tight uppercase rounded shadow-md hover:bg-transparent hover:text-oren hover:shadow-lg active:bg-oren active:shadow-lg transition-all duration-300">masuk</router-link>
					<button type="button" class="inline-block px-4 md:px-6 py-2.5 bg-gray-700 border-2 border-gray-700 text-white font-medium text-xs md:text-sm tracking-wide leading-tight uppercase rounded shadow-md hover:bg-white hover:text-gray-700 hover:border-white hover:shadow-lg transition-all duration-300" @click="logout()">keluar dari {{ user }}</button>
				</div>
			</Transition>
		</div>
		<Transition name="alert">
			<Alert v-if="alertStatus" :alertValue="alertValue" />
		</Transition>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import Loading from "../components/Loading.vue";
	import Alert from "../components/Alert.vue";

	export default {
		name: "Login",

		setup() {
			useStore().$subscribe((mutation, state) => {
				localStorage.setItem("cart", JSON.stringify(state));
			});
		},

		data() {
			return {
				username: "",
				transition: false,
				alertStatus: false,
				alertValue: "",
			};
		},

		components: {
			Loading,
			Alert,
		},

		created() {
			this.capitalUser;
		},

		mounted() {
			this.loadingPage();
			this.transitionShow();
		},

		computed: {
			...mapState(useStore, ["user", "loginFalse", "loginTrue", "capitalUser"]),

			greetingByTime() {
				let hour = new Date().getHours();
				let text = "";
				if (hour >= 3 && hour <= 10) {
					return (text = `Selamat Pagi`);
				} else if (hour >= 11 && hour <= 15) {
					return (text = `Selamat Siang`);
				} else if (hour >= 16 && hour <= 19) {
					return (text = `Selamat Sore`);
				} else {
					return (text = `Selamat Malam`);
				}
			},
		},

		methods: {
			...mapActions(useStore, { login: "login", logout: "logout" }),

			logout() {
				this.alert(`Keluar dari ${this.capitalUser}`);
				this.username = "";
				const store = useStore();
				store.$patch({
					loginFalse: false,
					loginTrue: true,
				});
			},

			loadingPage() {
				const head = document.querySelector("#head");
				const load = document.querySelector("#loadingDisplay");

				setTimeout(() => {
					head.classList.remove(`hidden`);
					load.classList.add(`hidden`);
				}, 1000);
			},

			transitionShow() {
				setTimeout(() => {
					this.transition = true;
				}, 1000);
			},

			localLogin() {
				this.login(this.username);
				this.alert(`Masuk sebagai ${this.capitalUser}`);
			},

			alert(text) {
				this.alertStatus = true;
				this.alertValue = text;
				setTimeout(() => {
					this.alertStatus = false;
				}, 2000);
			},
		},
	};
</script>

<style scoped>
	.Login {
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/loginBG.png");
	}

	.slide-fade-enter-active {
		transition: all 1.5s ease-out;
		transition-delay: 1.5s;
	}
	.slide-fade-leave-active {
		transition: all 1s;
	}
	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(-300px);
		opacity: 0;
	}
	/*  */

	.slide-fade2-enter-active {
		transition: all 1s ease-out;
		transition-delay: 1s;
	}
	.slide-fade2-leave-active {
		transition: all 0.5s ease-in-out;
	}
	.slide-fade2-enter-from {
		opacity: 0;
	}
	.slide-fade2-leave-to {
		opacity: 0;
	}
	/*  */

	.shadow-enter-active {
		transition: all 3s ease-out;
		transition-delay: 1.5s;
	}
	.shadow-leave-active {
		transition: all 1s;
	}
	.shadow-enter-from,
	.shadow-leave-to {
		opacity: 0;
	}
	/*  */

	.dropDown-enter-active {
		transition: all 1.5s ease-out;
		transition-delay: 0.5s;
	}
	.dropDown-leave-active {
		transition: all 1s;
	}
	.dropDown-enter-from,
	.dropDown-leave-to {
		transform: translateY(-500px);
		opacity: 0;
	}

	.alert-enter-active {
		transition: all 0.8s ease;
	}
	.alert-leave-active {
		transition: all 0.8s ease;
	}
	.alert-enter-from,
	.alert-leave-to {
		transform: translateY(-100px);
		opacity: 0;
	}
</style>
