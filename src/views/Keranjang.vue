<template>
	<div class="Keranjang">
		<!-- loadingScreen -->
		<Loading v-if="loading" />
		<!-- keranjangBody -->
		<div class="p-5 min-h-screen text-white" v-else>
			<div class="mb-5 flex justify-start bg-gradient-to-br from-oren to-oren2 rounded-lg shadow-2xl select-none">
				<p class="p-2 text-xl md:text-2xl lg:text-4xl font-lora font-bold tracking-wide">
					Keranjang <span class="text-xs md:text-sm lg:text-lg">( {{ keranjangTotal }} )</span>
				</p>
			</div>
			<!-- produk -->
			<div class="p-2 mb-3 bg-oren font-roboto rounded-lg shadow-2xl select-none">
				<div class="flex flex-col gap-2" v-if="keranjangTotal >= 1">
					<div class="px-1 flex flex-row items-center justify-between lg:hover:bg-gray-500 active:bg-gray-500 transition-all lg:duration-300 group rounded-lg" v-for="item in keranjangValue" :key="item.id">
						<div class="flex flex-row items-center justify-center gap-2">
							<img :src="item.gambar" alt="" class="w-[30px] md:w-[40px] lg:w-[50px] h-[30px] md:h-[40px] lg:h-[50px] rounded-md border-2 border-gray-400" />
							<p class="w-[150px] md:w-[500px] lg:w-[700px] text-xs md:text-sm lg:text-base truncate">{{ item.nama }}</p>
						</div>
						<div class="flex flex-row items-center">
							<p class="text-xs md:text-sm lg:text-base text-red-600 lg:group-hover:text-white group-active:text-white transition-all lg:duration-300"><span class="text-xs">Rp</span>{{ prettyPrice(item.harga) }}</p>
							<img src="../assets/delete.png" alt="" class="w-[30px] md:w-[40px] cursor-pointer" @click="localHapusProdukKeranjang(item.nama, item.id)" />
						</div>
					</div>
				</div>
				<div class="mx-10" v-else>
					<p class="text-xs md:text-base lg:text-lg text-center font-lora italic tracking-wide">Anda masih belum memiliki produk di dalam keranjang !</p>
				</div>
			</div>
			<!-- totalHarga -->
			<div class="px-5 py-2 mb-10 text-base md:text-lg lg:text-xl bg-transparent border-2 border-oren rounded-lg flex flex-row items-center justify-between font-lora tracking-wide">
				<p class="italic">Total</p>
				<p class="italic">Rp{{ totalHarga() }}</p>
			</div>
			<!-- keluar -->
			<div class="flex justify-end gap-x-2">
				<router-link :to="'/home/' + user" class="p-2 text-xs lg:text-base bg-blue-600 rounded-lg font-roboto tracking-wide lg:hover:bg-gray-500 active:bg-gray-500 transition-all lg:duration-300 shadow-2xl">Checkout</router-link>
				<router-link :to="'/home/' + user" class="p-2 text-xs lg:text-base bg-gray-600 rounded-lg font-roboto tracking-wide shadow-2xl">Kembali</router-link>
			</div>
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
		name: "Keranjang",

		setup() {
			useStore().$subscribe((mutation, state) => {
				localStorage.setItem("cart", JSON.stringify(state));
			});
		},

		data() {
			return {
				loading: true,
				alertStatus: false,
				alertValue: "",
			};
		},

		components: {
			Loading,
			Alert,
		},

		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);

			// this.totalHarga();
		},

		computed: {
			...mapState(useStore, ["user", "keranjangTotal", "keranjangValue"]),
		},

		methods: {
			...mapActions(useStore, ["hapusProdukKeranjang"]),

			localHapusProdukKeranjang(nama, id) {
				this.hapusProdukKeranjang(id);
				this.kurangKeranjang();
				this.alert(`${nama} dihapus dari keranjang !`);
			},

			kurangKeranjang() {
				const store = useStore();
				store.$patch({
					keranjangTotal: store.keranjangTotal - 1,
				});
			},

			totalHarga() {
				if (this.keranjangTotal >= 1) {
					let arr = [];
					for (const x of this.keranjangValue) {
						arr.push(x.harga);
					}
					let sum = arr.reduce((a, b) => {
						return a + b;
					});
					return this.prettyPrice(sum);
				} else {
					return `0`;
				}
			},

			alert(text) {
				this.alertStatus = true;
				this.alertValue = text;
				setTimeout(() => {
					this.alertStatus = false;
				}, 2000);
			},

			prettyPrice(priceItem) {
				const price = priceItem;
				const x = price.toString();

				if (x.length === 9) {
					let text3 = x.slice(x.length - 3),
						text2 = x.slice(3, x.length - 3),
						text1 = x.slice(0, 3),
						result1 = text1.concat(".", text2),
						result = result1.concat(".", text3);
					return result;
				} else if (x.length === 8) {
					let text3 = x.slice(x.length - 3),
						text2 = x.slice(2, x.length - 3),
						text1 = x.slice(0, 2),
						result1 = text1.concat(".", text2),
						result = result1.concat(".", text3);
					return result;
				} else if (x.length === 7) {
					let text3 = x.slice(x.length - 3),
						text2 = x.slice(1, x.length - 3),
						text1 = x.slice(0, 1),
						result1 = text1.concat(".", text2),
						result = result1.concat(".", text3);
					return result;
				} else {
					let text3 = x.slice(x.length - 3),
						text2 = x.slice(0, x.length - 3),
						result = text2.concat(".", text3);
					return result;
				}
			},
		},
	};
</script>

<style>
	.Keranjang {
		background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/keranjangBG.png");
		background-position: center;
		background-size: cover;
	}
</style>
