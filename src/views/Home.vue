<template>
	<Loading id="loadingDisplay" />
	<div class="Home hidden" id="head">
		<NavigationBar />
		<div class="pt-[80px] md:pt-0">
			<Carousel v-show="showNotif" />
			<Produk />
			<Transition name="notification">
				<Notification @closeNotif="callback" v-show="!showNotif" />
			</Transition>
		</div>
	</div>
</template>

<script>
	import NavigationBar from "../components/NavigationBar.vue";
	import Loading from "../components/Loading.vue";
	import Carousel from "../components/Carousel.vue";
	import Produk from "../components/Produk.vue";
	import Notification from "../components/Notification.vue";

	export default {
		name: "Home",

		data() {
			return {
				showNotif: true,
			};
		},

		components: {
			NavigationBar,
			Loading,
			Carousel,
			Produk,
			Notification,
		},

		mounted() {
			this.loadingPage();

			setTimeout(() => {
				this.showNotif = false;
			}, 2000);
		},

		methods: {
			loadingPage() {
				const head = document.querySelector("#head");
				const load = document.querySelector("#loadingDisplay");
				setTimeout(() => {
					head.classList.remove(`hidden`);
					load.classList.add(`hidden`);
				}, 1000);
			},

			callback() {
				this.showNotif = true;
			},
		},
	};
</script>

<style>
	.notification-enter-active {
		transition: opacity 0.5s ease;
	}
	.notification-leave-active {
		transition: opacity 1s ease;
	}

	.notification-enter-from,
	.notification-leave-to {
		opacity: 0;
	}
</style>
