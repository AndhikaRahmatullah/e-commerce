<template>
	<Loading id="loadingDisplay" />
	<div class="Home hidden" id="head">
		<NavigationBar />
		<div class="pt-[80px] md:pt-0">
			<Carousel />
			<Produk />
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import NavigationBar from "../components/NavigationBar.vue";
	import Loading from "../components/Loading.vue";
	import Carousel from "../components/Carousel.vue";
	import Produk from "../components/Produk.vue";

	export default {
		name: "Home",
		components: {
			NavigationBar,
			Loading,
			Carousel,
			Produk,
		},

		mounted() {
			this.loadingPage();
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
		},
	};
</script>
