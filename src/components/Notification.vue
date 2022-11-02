<template>
	<div class="flex justify-center items-center h-screen w-full">
		<div class="mx-5 h-[600px] md:h-[450px] lg:h-[600px] bg-gradient-to-br from-[#233ADC] via-[#2396DC] to-[#23DCC5] border-2 border-gray-300 rounded-lg shadow-2xl flex flex-col justify-between select-none" role="alert">
			<!-- body -->
			<div class="mt-[100px] md:mt-[60px] lg:mt-[160px] flex flex-col justify-center items-center">
				<!-- head -->
				<div class="mt-5 px-3 py-2 text-lg md:text-3xl lg:text-4xl font-lora text-white tracking-wide transition-all duration-[2000ms] rounded-lg bg-transparent" ref="shepie">
					<p class="">Selamat Datang di <span class="text-[#2396DC] font-bold">Shepie</span></p>
				</div>
				<!-- description -->
				<div class="">
					<p class="py-3 md:py-4 lg:py-5 px-6 text-base md:text-lg lg:text-xl font-lora text-white text-center tracking-wide leading-tight">Shepie adalah salah satu aplikasi sederhana dengan tema E-Commerce yang saya buat. Aplikasi ini dibuat menggunakan Teknologi <a href="https://vuejs.org/" class="hover:underline active:underline">Vue.js</a> (JavaScript), <a href="https://tailwindcss.com/" class="hover:underline active:underline">TailwindCSS</a> (CSS) dan beberapa plugin lainnya sebagai pendukung.</p>
				</div>
				<!-- footer -->
				<div class="">
					<a href="https://www.instagram.com/andhikarhmt_/" target="blank" class="text-sm md:text-base lg:text-lg text-gray-700 hover:text-white active:text-white transition-all lg:duration-300 italic tracking-wider font-lora">- Andhika Rahmatullah</a>
				</div>
			</div>
			<!-- closeButton -->
			<div class="text-right">
				<button @click="$emit('closeNotif')" class="mr-5 mb-5 px-2 py-1 text-sm md:text-base rounded-lg w-fit bg-[#233ADC] hover:bg-gray-500 active:bg-gray-500 transition-all duration-300 text-white shadow-lg tracking-wider">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Notification",

		mounted() {
			setTimeout(() => {
				this.animasi();
			}, 1000);
		},

		methods: {
			submit() {
				this.$emit("closeNotif");
			},

			animasi() {
				const shepie = this.$refs.shepie;
				const play = () => {
					setTimeout(() => {
						shepie.classList.add(`bg-red-600`);
					}, 2000);
					setTimeout(() => {
						shepie.classList.remove(`bg-red-600`);
						shepie.classList.add(`bg-green-600`);
					}, 4000);
					setTimeout(() => {
						shepie.classList.remove(`bg-green-600`);
						shepie.classList.add(`bg-violet-600`);
					}, 6000);
					setTimeout(() => {
						shepie.classList.remove(`bg-violet-600`);
						shepie.classList.add(`bg-amber-600`);
					}, 8000);
					setTimeout(() => {
						shepie.classList.remove(`bg-amber-600`);
					}, 10000);
				};
				play();
				setInterval(() => {
					play();
				}, 10000);
			},
		},
	};
</script>

<style></style>
