<template>
	<div class="Keranjang">
		<!-- loadingScreen -->
		<Loading v-if="loading" />

		<div class="p-5 min-h-screen" v-else>
			<p class="mb-5 text-4xl font-lora">Keranjang</p>
			<p class="">Kamu memiliki {{ keranjangTotal }} Produk di dalam keranjang !</p>
			<router-link :to="'/home/' + user">Kembali</router-link>
		</div>
	</div>
</template>
<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import Loading from "../components/Loading.vue";
	export default {
		name: "Keranjang",

		data() {
			return {
				loading: true,
			};
		},

		components: {
			Loading,
		},

		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);
		},

		computed: {
			...mapState(useStore, ["user", "keranjangTotal"]),
		},

		methods: {
			// loadingPage() {
			// 	const head = document.querySelector("#head");
			// 	const load = document.querySelector("#loadingDisplay");
			// 	setTimeout(() => {
			// 		load.classList.add(`hidden`);
			// 		head.classList.remove(`hidden`);
			// 	}, 1000);
			// },
		},
	};
</script>
<style></style>
