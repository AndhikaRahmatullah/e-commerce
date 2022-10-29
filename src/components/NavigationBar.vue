<template>
	<!-- laptop -->
	<div id="head" class="px-2 py-5 md:flex flex-row justify-between items-center font-roboto bg-gradient-to-br from-oren to-oren2 text-white shadow-2xl hidden">
		<div class="">
			<p class="text-3xl font-fredoka tracking-wider">Shepie</p>
		</div>
		<div class="flex items-center gap-10">
			<div class="flex items-center gap-1">
				<Keranjang />
				<p class="">+{{ keranjangTotal }}</p>
			</div>
			<div class="flex items-center mr-5">
				<img src="../assets/userMan.png" alt="" class="w-[40px]" />
				<div class="flex justify-center">
					<div>
						<div class="dropdown relative">
							<button class="dropdown-toggle flex items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								{{ user }}
								<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
									<path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
								</svg>
							</button>
							<ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
								<li>
									<a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Profil</a>
								</li>
								<li>
									<router-link to="/" @click="logout" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">Keluar</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<Transition name="sideBar">
		<!-- side-bar phone -->
		<aside class="md:hidden w-full h-screen bg-oren shadow-2xl font-roboto flex flex-col justify-start" aria-label="Sidebar" v-if="sideBar">
			<div class="pt-20 overflow-y-auto py-4 px-3 rounded">
				<ul class="space-y-2 text-white">
					<li class="flex gap-x-2 items-center">
						<img src="../assets/userMan.png" class="w-[50px]" alt="" />
						<p class="">{{ user }}</p>
					</li>
					<li class="flex gap-x-2 items-center">
						<img src="../assets/cart.png" class="w-[50px]" alt="" />
						<p class="">Keranjang +{{ keranjangTotal }}</p>
					</li>
					<li class="">
						<router-link to="/" class="flex gap-x-3 items-center" @click="logout">
							<img src="../assets/logout.png" class="w-[44px]" alt="" />
							<p class="">Keluar</p>
						</router-link>
					</li>
				</ul>
			</div>
		</aside>
	</Transition>

	<!-- phone -->
	<div class="flex">
		<div class="md:hidden w-full hamburger bg-gradient-to-b from-oren2 to-oren border-b-2 border-white transition-all duration-[1000ms] absolute top-0 left-0 p-2 flex justify-between items-center">
			<label for="check">
				<input type="checkbox" id="check" @click="hamburger" />
				<span class="bg-white"></span>
				<span class="bg-white"></span>
				<span class="bg-white"></span>
			</label>
			<p class="text-3xl text-white font-fredoka tracking-wider">Shepie</p>
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import Keranjang from "./Keranjang.vue";
	export default {
		name: "NavigatorBar",

		data() {
			return {
				sideBar: false,
			};
		},

		components: {
			Keranjang,
		},

		mounted() {},

		computed: {
			...mapState(useStore, ["user", "keranjangTotal"]),
		},

		methods: {
			logout() {
				const store = useStore();
				store.$patch({
					loginFalse: false,
					loginTrue: true,
				});
			},

			hamburger() {
				const logo = document.querySelector(`#check`);
				const hamburger = document.querySelector(`.hamburger`);

				if (logo.checked) {
					this.sideBar = true;
					hamburger.classList.add(`bg-transparent`);
					hamburger.classList.remove(`bg-oren`);
				} else {
					this.sideBar = false;
					hamburger.classList.add(`bg-oren`);
					hamburger.classList.remove(`bg-transparent`);
				}
			},
		},
	};
</script>

<style>
	.sideBar-enter-active {
		transition: all 0.5s ease-out;
	}
	.sideBar-leave-active {
		transition: all 0.8s ease;
	}
	.sideBar-enter-from,
	.sideBar-leave-to {
		transform: translateY(-1000px);
		opacity: 0;
	}

	.hamburger {
		display: grid;
		margin: 0;
		padding: 0;
	}

	label {
		/* background: #ea9615; */
		display: flex;
		flex-direction: column;
		width: 70px;
		cursor: pointer;
	}

	label span {
		/* background: red; */
		border-radius: 10px;
		height: 7px;
		margin: 7px 0;
		transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	span:nth-of-type(1) {
		width: 50%;
	}

	span:nth-of-type(2) {
		width: 100%;
	}

	span:nth-of-type(3) {
		width: 75%;
	}

	input[type="checkbox"] {
		display: none;
	}

	input[type="checkbox"]:checked ~ span:nth-of-type(1) {
		transform-origin: bottom;
		transform: rotatez(45deg) translate(8px, 0px);
		background: white;
	}

	input[type="checkbox"]:checked ~ span:nth-of-type(2) {
		transform-origin: top;
		transform: rotatez(-45deg);
		background: white;
	}

	input[type="checkbox"]:checked ~ span:nth-of-type(3) {
		transform-origin: bottom;
		width: 50%;
		transform: translate(30px, -11px) rotatez(45deg);
		background: white;
	}
</style>
