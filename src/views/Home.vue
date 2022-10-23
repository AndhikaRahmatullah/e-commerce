<template>
	<div class="Home">
		<NavigationBar />
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import NavigationBar from "../components/NavigationBar.vue";

	export default {
		name: "Home",
		components: {
			NavigationBar,
		},
	};
</script>
