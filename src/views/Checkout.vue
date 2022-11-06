<template>
	<div class="">
		<!-- loadingScreen -->
		<Loading v-if="loading" />

		<!-- Checkout Page -->
		<div class="Checkout p-5 min-h-screen font-roboto" v-else>
			<!-- header -->
			<div class="flex justify-start">
				<p class="font-fredoka text-5xl text-oren tracking-wide">Shepie <span class="text-white">Checkout</span></p>
			</div>
			<!-- product & payment section -->
			<div class="mt-10 flex flex-row gap-10">
				<!-- product -->
				<div class="basis-2/3 select-none">
					<!-- product selection -->
					<div class="p-2 flex flex-row justify-between items-center gap-3 bg-gradient-to-r from-oren to-oren2 rounded-lg shadow-2xl">
						<div class="flex flex-row items-center gap-3">
							<!-- image -->
							<img :src="currentProduct.images[0]" alt="" class="w-[100px] h-[100px] border-2 border-gray-400 rounded-lg" />
							<!-- title -->
							<p class="w-[350px] truncate font-lora text-xl font-semibold">{{ currentProduct.title }}</p>
						</div>
						<!-- quatity -->
						<div class="mx-5 flex flex-row justify-center items-center gap-3">
							<button @click="decrementQuantity" class="p-1 bg-white font-semibold rounded-lg w-[30px]">-</button>
							<p class="text-lg font-semibold font-lora">{{ quantityProduct }}</p>
							<button @click="incrementQuantity" class="p-1 bg-white font-semibold rounded-lg w-[30px]">+</button>
						</div>
						<!-- total price -->
						<div class="">
							<p class="text-xl w-full font-lora font-semibold tracking-wide"><span class="text-lg">Rp</span>{{ totalPriceDisplay }}</p>
						</div>
					</div>

					<!-- product in cart -->
					<div class="mt-10 p-2 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg font-lora font-medium shadow-2xl">
						<p class="mb-5 text-2xl tracking-wide text-white">Produk dalam keranjang :</p>
						<div class="flex flex-col gap-3">
							<div class="flex flex-row justify-between items-center gap-3" v-for="product in cartProductList" :key="product.id">
								<div class="flex flex-row items-center gap-3">
									<!-- image -->
									<img :src="product.gambar" alt="" class="w-[100px] h-[100px] border-2 border-gray-700 rounded-lg" />
									<!-- title -->
									<p class="w-[350px] truncate text-xl text-white">{{ product.nama }}</p>
								</div>
								<div class="">
									<!-- price -->
									<p class="w-full text-xl text-white tracking-wide"><span class="text-lg">Rp</span>{{ prettyPrice(product.harga) }}</p>
								</div>
							</div>
						</div>

						<!-- option payment with cart -->
						<div class="flex justify-end" v-show="!cartProductListUndefined">
							<button class="p-2 mt-5 text-xs md:text-sm lg:text-base bg-white rounded-lg tracking-wider border-2 border-white shadow-xl text-gray-500 active:bg-transparent active:text-white lg:hover:bg-transparent lg:hover:text-white transition-all lg:duration-300" @click="buyWithCart">{{ stringBuyWithCart }}</button>
						</div>

						<!-- undefined data massage -->
						<div class="flex justify-center" v-show="cartProductListUndefined">
							<p class="text-base text-white tracking-wide">Anda tidak memiliki produk didalam keranjang !</p>
						</div>
					</div>
				</div>

				<!-- payment section -->
				<div class="basis-1/3">
					<div class="p-2 bg-gradient-to-r from-gray-100 to-gray-500 flex flex-col justify-between gap-5 rounded-lg font-lora shadow-2xl">
						<p class="text-2xl font-semibold text-center tracking-wide">Pembayaran</p>
						<div class="text-lg font-medium tracking-wide flex flex-col gap-2">
							<!-- profil user -->
							<div class="py-2 flex flex-col gap-2 border-b-2 border-white">
								<div class="">
									<p class="ml-4 italic font-bold text-left">- Data Pembeli</p>
								</div>
								<!-- full name -->
								<div class="flex flex-row justify-between items-start w-full">
									<p class="w-[200px]">Nama lengkap :</p>
									<p class="w-[200px] font-bold text-right truncate" v-if="profilUser.fullName">{{ profilUser.fullName }}</p>
									<p class="w-[200px] font-bold text-right truncate" v-else><router-link :to="'/home/' + user + '/profile'">Tambabakan disini</router-link></p>
								</div>
								<!-- address -->
								<div class="flex flex-row justify-between items-start w-full">
									<p class="w-[200px]">Alamat :</p>
									<p class="w-[200px] font-bold text-right truncate" v-if="profilUser.address">{{ profilUser.address }}</p>
									<p class="w-[200px] font-bold text-right truncate" v-else><router-link :to="'/home/' + user + '/profile'">Tambabakan disini</router-link></p>
								</div>
								<!-- phoneNumber -->
								<div class="flex flex-row justify-between items-start w-full">
									<p class="w-[200px]">Nomor telepon :</p>
									<p class="w-[200px] font-bold text-right truncate" v-if="profilUser.phoneNumber">{{ profilUser.phoneNumber }}</p>
									<p class="w-[200px] font-bold text-right truncate" v-else><router-link :to="'/home/' + user + '/profile'">Tambabakan disini</router-link></p>
								</div>
							</div>

							<!-- payment method -->
							<div class="py-2 flex flex-col gap-2 border-b-2 border-white">
								<p class="ml-4 italic font-bold text-left">- Metode Pembayaran</p>
								<!-- select -->
								<select class="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm text-gray-700 bg-white bg-clip-padding bg-no-repeat tracking-wide font-semibold border border-solid border-gray-300 rounded transition-all duration-300 m-0 focus:text-gray-700 focus:bg-white focus:border-oren outline-none focus:ring-1 focus:ring-oren" aria-label=".form-select-sm example">
									<option selected disabled>Pilih metode pembayaran</option>
									<option value="bca" class="tracking-wide font-medium">Bank BCA</option>
									<option value="mandiri" class="tracking-wide font-medium">Bank Mandiri</option>
									<option value="bni" class="tracking-wide font-medium">Bank BNI</option>
									<option value="bsi" class="tracking-wide font-medium">Bank BSI</option>
								</select>
							</div>

							<!-- payment details -->
							<div class="">
								<p class="ml-4 italic font-bold text-left">- Rincian Pembayaran</p>
							</div>
							<!-- quantity -->
							<div class="flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Jumlah barang :</p>
								<p class="font-bold" v-if="!buyWithCartOptions">{{ quantityProduct }}</p>
								<p class="font-bold" v-else>{{ quantityProduct + keranjangValue.length }}</p>
							</div>
							<!-- price -->
							<div class="flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Harga :</p>
								<p class="font-bold"><span class="text-base">Rp</span>{{ totalPriceDisplay }}</p>
							</div>
							<!-- discount -->
							<div class="flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Diskon :</p>
								<p class="font-bold">{{ currentProduct.discountPercentage }}<span class="text-base">%</span> ( <span class="text-base">Rp</span>{{ cumulativeDiscountDisplay }} )</p>
							</div>
							<!-- ship -->
							<div class="flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Ongkos Kirim :</p>
								<p class="font-bold"><span class="text-base">Rp</span>{{ shipDisplay }}</p>
							</div>
							<!-- price product in cart -->
							<div class="flex flex-row justify-between items-end w-full" v-show="buyWithCartOptions">
								<p class="w-[200px]">Harga Produk dalam keranjang* :</p>
								<p class="font-bold"><span class="text-base">Rp</span>{{ totalPriceCartDisplay }}</p>
							</div>
							<!-- cumulative -->
							<div class="mt-5 p-2 flex flex-row justify-between items-end w-full bg-gradient-to-r from-oren to-oren2 rounded-lg shadow-lg">
								<p class="w-[200px]">Total Bayar :</p>
								<p class="font-bold"><span class="text-base">Rp</span>{{ totalPriceCumulativeDisplay }}</p>
							</div>
							<!-- buy now -->
							<div class="mt-3 flex justify-end w-full">
								<button class="p-2 mt-5 text-xs md:text-sm lg:text-base bg-oren rounded-lg tracking-wider border-2 border-oren shadow-xl text-white active:bg-transparent active:text-oren lg:hover:bg-transparent lg:hover:text-oren transition-all lg:duration-300">Buat Pesanan</button>
							</div>
						</div>
					</div>
					<!-- note cart -->
					<p class="mt-2 text-white tracking-wider text-sm" v-show="buyWithCartOptions">*Harga sudah termasuk diskon dan ongkos kirim (jika ada), dari setiap produk.</p>
				</div>
			</div>

			<!-- back -->
			<div class="mt-20">
				<router-link :to="'/home/' + user + '/detailproduct/' + idProduk" class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300">KEMBALI</router-link>
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
		name: "Checkout",

		data() {
			return {
				loading: true,
				alertStatus: false,
				alertValue: "",
				currentProduct: {},
				quantityProduct: 1,
				totalPriceDisplay: null,
				totalPriceCumulativeDisplay: null,
				cumulativeDiscountDisplay: null,
				shipDisplay: null,
				cartProductList: null,
				totalPriceCartDisplay: null,
				cartProductListUndefined: false,
				buyWithCartOptions: false,
				stringBuyWithCart: "Masukan dalam pembayaran",
			};
		},

		components: {
			Loading,
			Alert,
		},

		created() {
			this.profilUser;
		},

		async mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);

			await this.main();
			this.totalPriceCumulative();
			this.cartProduct();
		},

		computed: {
			...mapState(useStore, ["user", "idProduk", "keranjangValue", "profilUser"]),
		},

		methods: {
			...mapActions(useStore, ["apiDataId"]),

			async main() {
				const x = await this.apiDataId();

				const priceEdit = () => this.prettyPrice(x.price * 15500);
				const discountEdit = () => Math.round(x.discountPercentage);

				this.totalPriceDisplay = priceEdit();

				this.currentProduct = {
					id: x.id,
					title: x.title,
					price: priceEdit(),
					discountPercentage: discountEdit(),
					images: x.images,
					normalPrice: x.price,
				};
			},

			totalPrice() {
				const currentProduct = this.currentProduct;
				let x = this.quantityProduct * (currentProduct.normalPrice * 15500);
				const pretty = this.prettyPrice(x);
				return (this.totalPriceDisplay = pretty);
			},

			totalPriceCumulative() {
				const currentProduct = this.currentProduct;
				// price
				const price = this.quantityProduct * (currentProduct.normalPrice * 15500);
				// discountPrice
				const discount = (currentProduct.discountPercentage * price) / 100;
				const cumulativeDiscountPretty = this.prettyPrice(discount);
				// ship
				const ship = () => {
					if (currentProduct.discountPercentage >= 15) {
						return 0;
					} else {
						return 150000;
					}
				};
				const shipPretty = this.prettyPrice(ship());

				// cumulative
				if (this.buyWithCartOptions) {
					const cumulative = price - discount + ship() + this.cartProduct();
					const cumulativePretty = this.prettyPrice(cumulative);
					this.totalPriceCumulativeDisplay = cumulativePretty;
				} else {
					const cumulative = price - discount + ship();
					const cumulativePretty = this.prettyPrice(cumulative);
					this.totalPriceCumulativeDisplay = cumulativePretty;
				}

				this.shipDisplay = shipPretty;
				this.cumulativeDiscountDisplay = cumulativeDiscountPretty;
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

			incrementQuantity() {
				this.quantityProduct++;
				this.totalPrice();
				this.totalPriceCumulative();
			},

			decrementQuantity() {
				if (this.quantityProduct > 1) {
					this.quantityProduct--;
					this.totalPrice();
					this.totalPriceCumulative();
				} else if (this.quantityProduct === 1) {
					this.alert(`Maaf, Anda telah mencapai jumlah produk minimal !`);
				}
			},

			cartProduct() {
				const product = this.keranjangValue;
				if (product.length === 0) {
					this.cartProductListUndefined = true;
				} else {
					this.cartProductList = product;
				}

				// mathematics
				let allPrice = [];
				for (const x of product) {
					// disct
					const discount = (x.discount * x.harga) / 100;
					// ship
					const ship = () => {
						if (x.discount >= 15) {
							return 0;
						} else {
							return 150000;
						}
					};
					// cumulative
					const cumulative = x.harga - discount + ship();
					allPrice.push(cumulative);
				}

				// totalPrice
				let totalPriceCart = allPrice.reduce((a, b) => {
					return a + b;
				});
				this.totalPriceCartDisplay = this.prettyPrice(totalPriceCart);

				return totalPriceCart;
			},

			buyWithCart() {
				if (!this.buyWithCartOptions) {
					this.stringBuyWithCart = "Hapus dari pembayaran";
					this.buyWithCartOptions = true;
					this.totalPriceCumulative();
					this.alert(`Produk keranjang ditambakhan dalam pembayaran !`);
				} else {
					this.stringBuyWithCart = "Masukan dalam pembayaran";
					this.buyWithCartOptions = false;
					this.totalPriceCumulative();
					this.alert(`Produk keranjang dihapus dari pembayaran !`);
				}
			},

			alert(text) {
				this.alertStatus = true;
				this.alertValue = text;
				setTimeout(() => {
					this.alertStatus = false;
				}, 2000);
			},
		},
	};
</script>

<style>
	.Checkout {
		background-image: url("../assets/checkoutBG.png");
		background-position: center;
		background-size: cover;
		background-repeat: repeat;
	}
</style>
