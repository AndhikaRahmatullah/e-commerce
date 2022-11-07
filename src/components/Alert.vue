<template>
	<div class="fixed top-4 w-full">
		<div class="mx-5 py-3 md:py-4 lg:py-5 px-6 text-sm md:text-base lg:text-lg bg-gradient-to-r from-[#233ADC] via-[#2396DC] to-[#23DCC5] rounded-lg font-roboto shadow-2xl text-white tracking-wide" role="alert">{{ alertValue }}</div>
	</div>
</template>

<script>
	export default {
		name: "Alert",
		props: ["alertValue"],
	};
</script>

<style></style>
