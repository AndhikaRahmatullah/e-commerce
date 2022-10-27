<template>
	<div class="flex flex-row justify-center items-center gap-2 h-screen bg-gradient-to-br from-oren2 via-oren to-oren2">
		<p class="text-4xl md:text-5xl lg:text-7xl font-fredoka text-white tracking-wider">Tunggu ya</p>
		<p class="text-4xl md:text-5xl lg:text-7xl font-fredoka text-white hidden transition-all duration-500" ref="satu">.</p>
		<p class="text-4xl md:text-5xl lg:text-7xl font-fredoka text-white hidden transition-all duration-500" ref="dua">.</p>
		<p class="text-4xl md:text-5xl lg:text-7xl font-fredoka text-white hidden transition-all duration-500" ref="tiga">.</p>
	</div>
</template>
<script>
	export default {
		name: "Loading",

		// if use this components, add method and mounted on that page !
		// add class hidden in tag with id "head"

		// 	mounted :
		// 	this.loadingPage();

		// methods :
		// loadingPage() {
		// 	const head = document.querySelector("#head");
		// 	const load = document.querySelector("#loadingDisplay");
		// 	setTimeout(() => {
		// 		head.classList.remove(`hidden`);
		// 		load.classList.add(`hidden`);
		// 	}, 1000);
		// },

		mounted() {
			this.animasi();
		},

		methods: {
			animasi() {
				const satu = this.$refs.satu;
				const dua = this.$refs.dua;
				const tiga = this.$refs.tiga;

				setTimeout(() => {
					satu.classList.remove("hidden");
				}, 100);
				setTimeout(() => {
					dua.classList.remove("hidden");
				}, 300);
				setTimeout(() => {
					tiga.classList.remove("hidden");
				}, 500);
			},
		},
	};
</script>
<style></style>
