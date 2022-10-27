<template>
	<div class="my-10">
		<!-- input -->
		<div class="flex justify-center items-center gap-2 md:gap-4">
			<input type="text" class="form-control w-44 md:w-72 lg:w-96 text-sm md:text-base px-3 py-1.5 block border-2 border-oren tracking-wider font-normal text-oren bg-transparent shadow-xl rounded transition-all duration-500 outline-none focus:text-oren focus:ring-2 focus:border-oren focus:ring-oren font-lora" placeholder="Cari produk" @keypress.enter="keyword" v-model="key" />
			<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-4 md:px-6 py-2.5 text-xs md:text-sm border-2 border-oren bg-oren text-white font-medium tracking-wider leading-tight uppercase rounded shadow-xl hover:scale-95 hover:shadow-none transition-all duration-300 font-roboto" @click="keyword">Cari</button>
		</div>
		<!-- display card -->
		<div class="py-16 px-2 md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2 md:gap-5 lg:gap-10">
			<div class="" v-for="item in dataProduk" :key="item.id" @click="produk(item.id)">
				<div class="shadow-2xl transition-all duration-300 border-2 rounded-lg md:hover:scale-95 md:hover:shadow-none active:scale-95 active:shadow-none w-[160px] md:w-[200px] lg:w-[300px] cursor-pointer">
					<!-- image -->
					<a data-mdb-ripple="true" data-mdb-ripple-color="light">
						<img class="w-full h-[120px] md:h-[200px] lg:h-[200px] rounded-t-lg" :src="item.images[0]" alt="" />
					</a>
					<!-- discount -->
					<p class="px-1 text-xs md:text-sm relative bottom-[110px] md:bottom-[190px] left-[0px] rounded-r-lg w-fit bg-oren text-white shadow-lg font-roboto">Diskon {{ Math.round(item.discountPercentage) }}%</p>
					<!-- description -->
					<div class="p-2 md:p-4 h-[100px] md:h-[150px] lg:h-[170px] flex flex-col justify-between rounded-b-lg">
						<div class="">
							<p class="text-xs md:text-sm lg:text-lg text-gray-900 font-lora font-semibold leading-tight overflow-hidden">{{ item.title }}</p>
						</div>
						<div class="flex flex-row justify-between items-center font-lora">
							<p class="text-xs md:text-sm lg:text-base font-bold tracking-wider text-oren">Rp. {{ item.price * 15500 }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- error massage -->
		<div class="flex justify-center">
			{{ errorMassage }}
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	export default {
		name: "Produk",

		setup() {
			useStore().$subscribe((mutation, state) => {
				localStorage.setItem("cart", JSON.stringify(state));
			});
		},

		data() {
			return {
				key: "",
				dataProduk: null,
				errorMassage: "",
			};
		},

		mounted() {
			// this.keyword();
			this.getAllProducts();
		},

		computed: {
			...mapState(useStore, ["keranjangTotal"]),
		},

		methods: {
			...mapActions(useStore, ["apiDataAll", "apiDataSearch"]),

			tambahKeranjang(title) {
				const store = useStore();
				alert(title);
				store.$patch({
					keranjangTotal: store.keranjangTotal + 1,
				});
			},

			async getAllProducts() {
				this.dataProduk = await this.apiDataAll();
			},

			async loopingData() {
				let arrayData = [];
				const data = await this.apiDataSearch(this.key);
				for (const x of data) {
					arrayData.push(x);
				}
				return arrayData;
			},

			async keyword() {
				try {
					this.errorMassage = null;
					this.dataProduk = await this.loopingData();
				} catch (error) {
					this.dataProduk = null;
					this.errorMassage = error;
				}
			},

			produk(id) {
				alert(id);
			},
		},
	};
</script>
<style></style>
