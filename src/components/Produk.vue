<template>
	<div class="my-10">
		<!-- input -->
		<div class="flex justify-center items-center gap-2 md:gap-4 font-lora">
			<input type="text" class="form-control w-44 md:w-72 lg:w-96 text-sm md:text-base px-3 py-1.5 block border-2 border-oren tracking-wider font-normal text-oren bg-transparent shadow-xl rounded transition-all duration-500 outline-none focus:text-oren focus:ring-2 focus:border-oren focus:ring-oren" placeholder="Cari produk" @keypress.enter="keyword" v-model="key" />
			<a data-mdb-ripple="true" data-mdb-ripple-color="light" href="#produk" class="py-2 px-3 text-xs md:text-sm lg:text-base bg-oren rounded-lg tracking-wider border-2 border-oren shadow-xl text-white active:bg-transparent active:text-oren lg:hover:bg-transparent lg:hover:text-oren transition-all lg:duration-300" @click="keyword">CARI</a>
		</div>

		<!-- kategori -->
		<div class="mx-5 mt-10 lg:mt-5 font-roboto">
			<p class="md:text-xl lg:text-2xl mb-3 text-gray-500 font-lora font-semibold w-fit uppercase">Kategori</p>
			<div class="px-5 py-2 md:p-5 flex flex-row gap-x-9 lg:gap-x-5 overflow-scroll lg:overflow-auto lg:grid lg:grid-cols-10 lg:justify-items-center lg:content-center lg:gap-5 border-b-2 border-gray-300 hover:border-oren transition-all lg:duration-300 bg-gray-100">
				<div class="border-b-2 border-transparent active:border-oren active:text-oren active:scale-95 lg:hover:border-oren lg:hover:text-oren lg:hover:scale-95 cursor-pointer transition-all duration-300" v-for="item in kategoriProduk" :key="item.nama" @click="kategori(item.nama)">
					<!-- kate.item -->
					<div class="p-2 flex flex-col justify-center items-center gap-y-2 w-[50px] md:w-[90px] lg:w-[117px]">
						<img :src="item.image" alt="" class="w-[66px]" />
						<p class="text-xs md:text-sm lg:text-base text-center">{{ item.nama }}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- category tag -->
		<div class="mx-5 pt-10 text-sm md:text-lg lg:text-xl flex flex-row items-center gap-x-2 font-roboto" v-show="desCategory">
			<p class="text-gray-500">Filter :</p>
			<p class="py-1 px-2 bg-oren rounded-md text-white">{{ desCategoryName }}</p>
			<img src="../assets/delete.png" alt="" class="w-[30px] md:w-[40px] cursor-pointer transition-all duration-75 active:scale-90" @click="hapusKategori" />
		</div>

		<!-- display card -->
		<div class="py-10 lg:py-16 px-2 md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2 gap-y-4 md:gap-5 lg:gap-10 select-none">
			<div class="" v-for="item in dataProduk" :key="item.id" id="produk">
				<div class="shadow-2xl transition-all duration-300 border-2 border-gray-300 rounded-lg md:hover:scale-95 md:hover:shadow-none active:scale-95 active:shadow-none w-[160px] md:w-[200px] lg:w-[300px] cursor-pointer">
					<!-- image -->
					<router-link :to="'/home/' + user + '/detailproduct/' + item.id" @click="idSelect(item.id)">
						<a data-mdb-ripple="true" data-mdb-ripple-color="light" class="relative">
							<img class="w-full h-[120px] md:h-[200px] lg:h-[270px] rounded-t-lg" :src="item.images[0]" alt="" />
						</a>
					</router-link>

					<!-- discount -->
					<router-link :to="'/home/' + user + '/detailproduct/' + item.id" @click="idSelect(item.id)">
						<div class="w-fit px-1 text-xs md:text-sm relative bottom-[120px] md:bottom-[200px] lg:bottom-[270px] left-[0px] flex flex-col justify-center items-center rounded-tl-md rounded-br-md bg-oren2 text-white shadow-lg font-roboto">
							<p class="text-red-500">{{ Math.round(item.discountPercentage) }}%</p>
							<p class="">OFF</p>
						</div>
					</router-link>

					<!-- description -->
					<div class="p-2 pt-0 lg:p-4 md:pt-0 lg:pt-0 h-[130px] md:h-[160px] lg:h-[185px] flex flex-col justify-between rounded-b-lg">
						<!-- des.title -->
						<router-link :to="'/home/' + user + '/detailproduct/' + item.id" @click="idSelect(item.id)">
							<div class="relative bottom-[30px]">
								<p class="h-[33px] md:h-[44px] lg:h-[61px] text-xs md:text-sm lg:text-lg text-gray-900 font-lora font-semibold leading-tight overflow-hidden">{{ item.title }}</p>
							</div>
						</router-link>

						<!-- des.freeOngkir -->
						<router-link :to="'/home/' + user + '/detailproduct/' + item.id" @click="idSelect(item.id)">
							<div class="relative bottom-[98px] md:bottom-[130px] lg:bottom-[139px] right-[9px] lg:right-[18px]" v-if="Math.round(item.discountPercentage) >= 15">
								<img src="../assets/gratisOngkir2.png" alt="" class="w-[60px] md:w-[70px]" />
							</div>
						</router-link>

						<div class="flex flex-col items-start gap-2 font-lora">
							<!-- des.promo -->
							<router-link :to="'/home/' + user + '/detailproduct/' + item.id" @click="idSelect(item.id)">
								<div class="flex flex-col lg:flex-row gap-1 lg:gap-2">
									<p class="px-1 md:px-2 py-[2px] md:py-1 text-xs lg:text-sm bg-oren text-white w-fit" v-if="Math.round(item.discountPercentage) >= 10">Best Sale</p>
									<p class="px-1 md:px-2 py-[2px] md:py-1 text-xs lg:text-sm border border-red-600 text-red-600 w-fit" v-if="Math.round(item.discountPercentage) < 10">Murah Lebay</p>
								</div>
							</router-link>

							<!-- des.footer -->
							<div class="w-full flex flex-row justify-between items-center">
								<!-- price -->
								<p class="text-xs md:text-sm lg:text-base font-bold tracking-wider text-oren">Rp {{ prettyPrice(item.price * 15500) }}</p>
								<!-- keranjang -->
								<img src="../assets/cartCard.png" alt="" class="w-[30px] md:w-[30px] lg:w-[40px]" @click="produk(item.title, item.price, item.images[0])" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- error massage -->
		<div class="flex justify-center">
			{{ errorMassage }}
		</div>

		<!-- alert -->
		<Transition name="alert">
			<Alert v-if="alertStatus" :alertValue="alertValue" />
		</Transition>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import Alert from "../components/Alert.vue";

	export default {
		name: "Produk",

		setup() {
			useStore().$subscribe((mutation, state) => {
				localStorage.setItem("cart", JSON.stringify(state));
			});
		},

		components: {
			Alert,
			Notification,
		},

		data() {
			return {
				key: "",
				dataProduk: null,
				errorMassage: "",
				alertStatus: false,
				alertValue: "",
				desCategory: false,
				desCategoryName: "",
				kategoriProduk: [
					{ nama: "Smartphone", image: require("../assets/kateSmartphones.png") },
					{ nama: "Laptop", image: require("../assets/kateLaptop.png") },
					{ nama: "Minyak Wangi", image: require("../assets/katefragrances.png") },
					{ nama: "Skincare", image: require("../assets/kateskincare.png") },
					{ nama: "Bahan Makanan", image: require("../assets/kateGroceries.png") },
					{ nama: "Dekorasi Rumah", image: require("../assets/kateHomeDecoration.png") },
					{ nama: "Atasan", image: require("../assets/kateTops.png") },
					{ nama: "Gaun Wanita", image: require("../assets/kateWomenDresses.png") },
					{ nama: "Sepatu Wanita", image: require("../assets/kateWomenShoes.png") },
					{ nama: "Kaos Pria", image: require("../assets/kateMensTshirt.png") },
					{ nama: "Mabel", image: require("../assets/kateFurniture.png") },
					{ nama: "Sepatu Pria", image: require("../assets/kateMensShoes.png") },
					{ nama: "Jam Pria", image: require("../assets/kateMensWatches.png") },
					{ nama: "Jam Wanita", image: require("../assets/kateWomenWatches.png") },
					{ nama: "Tas Wanita", image: require("../assets/kateWomenBags.png") },
					{ nama: "Perhiasan Wanita", image: require("../assets/kateWomenJewellery.png") },
					{ nama: "Kacamata", image: require("../assets/kateSunglasses.png") },
					{ nama: "Otomotif", image: require("../assets/kateAutomotive.png") },
					{ nama: "Sepeda Motor", image: require("../assets/kateMotorcycle.png") },
					{ nama: "Pencahayaan", image: require("../assets/kateLighting.png") },
				],
			};
		},

		mounted() {
			this.getAllProducts();
		},

		computed: {
			...mapState(useStore, ["user", "keranjangTotal", "keranjangValue"]),
		},

		methods: {
			...mapActions(useStore, ["apiDataAll", "apiDataSearch", "apiDataCatSmartphones", "apiDataCatLaptops", "apiDataCatFragrances", "apiDataCatSkincare", "apiDataCatGroceries", "apiDataCatHomeDecoration", "apiDataCatFurniture", "apiDataCatTops", "apiDataCatWomensDresses", "apiDataCatWomensShoes", "apiDataCatMensShirts", "apiDataCatMensShoes", "apiDataCatMenWatches", "apiDataCatWomenWatches", "apiDataCatWomenBags", "apiDataCatWomensJawellery", "apiDataCatSunglasses", "apiDataCatAutomotive", "apiDataCatMotorcycle", "apiDataCatLighting"]),

			tambahKeranjang() {
				const store = useStore();
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
					this.desCategory = false;
					if (this.key === "") {
						this.dataProduk = await this.apiDataAll();
					} else {
						this.dataProduk = await this.loopingData();
					}
				} catch (error) {
					this.dataProduk = null;
					this.desCategory = false;
					this.errorMassage = error;
				}
			},

			produk(productName, productPrice, productImage) {
				this.tambahKeranjang();
				this.alert(productName);
				const price = productPrice * 15500;
				const id = Math.random();
				const store = useStore();
				store.$patch({
					// like making a todolist
					keranjangValue: [{ id: id, nama: productName, harga: price, gambar: productImage }, ...this.keranjangValue],
				});
			},

			idSelect(id) {
				const store = useStore();
				store.$patch({
					idProduk: (store.idProduk = id),
				});
			},

			async kategori(nama) {
				this.dataProduk = null;
				this.errorMassage = null;
				this.desCategory = true;
				this.desCategoryName = nama;
				if (nama === `Smartphone`) {
					this.dataProduk = await this.apiDataCatSmartphones();
				} else if (nama === `Laptop`) {
					this.dataProduk = await this.apiDataCatLaptops();
				} else if (nama === `Minyak Wangi`) {
					this.dataProduk = await this.apiDataCatFragrances();
				} else if (nama === `Skincare`) {
					this.dataProduk = await this.apiDataCatSkincare();
				} else if (nama === `Bahan Makanan`) {
					this.dataProduk = await this.apiDataCatGroceries();
				} else if (nama === `Dekorasi Rumah`) {
					this.dataProduk = await this.apiDataCatHomeDecoration();
				} else if (nama === `Atasan`) {
					this.dataProduk = await this.apiDataCatTops();
				} else if (nama === `Gaun Wanita`) {
					this.dataProduk = await this.apiDataCatWomensDresses();
				} else if (nama === `Sepatu Wanita`) {
					this.dataProduk = await this.apiDataCatWomensShoes();
				} else if (nama === `Kaos Pria`) {
					this.dataProduk = await this.apiDataCatMensShirts();
				} else if (nama === `Mabel`) {
					this.dataProduk = await this.apiDataCatFurniture();
				} else if (nama === `Sepatu Pria`) {
					this.dataProduk = await this.apiDataCatMensShoes();
				} else if (nama === `Jam Pria`) {
					this.dataProduk = await this.apiDataCatMenWatches();
				} else if (nama === `Jam Wanita`) {
					this.dataProduk = await this.apiDataCatWomenWatches();
				} else if (nama === `Tas Wanita`) {
					this.dataProduk = await this.apiDataCatWomenBags();
				} else if (nama === `Perhiasan Wanita`) {
					this.dataProduk = await this.apiDataCatWomensJawellery();
				} else if (nama === `Kacamata`) {
					this.dataProduk = await this.apiDataCatSunglasses();
				} else if (nama === `Otomotif`) {
					this.dataProduk = await this.apiDataCatAutomotive();
				} else if (nama === `Sepeda Motor`) {
					this.dataProduk = await this.apiDataCatMotorcycle();
				} else if (nama === `Pencahayaan`) {
					this.dataProduk = await this.apiDataCatLighting();
				}
			},

			hapusKategori() {
				this.desCategory = false;
				this.dataProduk = null;
				this.getAllProducts();
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

			alert(id) {
				this.alertValue = `${id} ditambah ke dalam keranjang !`;
				this.alertStatus = true;
				setTimeout(() => {
					this.alertStatus = false;
				}, 1000);
			},
		},
	};
</script>

<style>
	.alert-enter-active {
		transition: all 0.5s ease;
	}

	.alert-leave-active {
		transition: all 0.5s ease;
	}

	.alert-enter-from,
	.alert-leave-to {
		transform: translateY(-100px);
		opacity: 0;
	}
</style>
