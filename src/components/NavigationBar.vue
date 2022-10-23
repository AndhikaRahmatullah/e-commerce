<template>
	<div id="head" class="px-2 py-5 flex flex-row justify-between items-center bg-gray-900 text-white">
		<div class="">
			<p class="text-3xl">Shapee</p>
		</div>
		<div class="flex items-center gap-10">
			<div class="flex items-center gap-3 mr-5">
				<router-link to="/">Keluar</router-link>
				<Keranjang />
			</div>
			<div class="flex items-center gap-3 mr-5">
				<img src="../assets/userMan.png" alt="" class="w-[40px]" />
				<p class="">{{ user }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import Keranjang from "./Keranjang.vue";
	export default {
		name: "NavigatorBar",
		components: {
			Keranjang,
		},
		computed: {
			...mapState(useStore, ["user"]),
		},
	};
</script>
<style></style>
