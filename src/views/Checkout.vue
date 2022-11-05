<template>
	<div class="">
		<!-- loadingScreen -->
		<Loading v-if="loading" />

		<!-- Checkout Page -->
		<div class="Checkout p-5 bg-gray-100 min-h-screen" v-else>
			<!-- product & payment section -->
			<div class="flex flex-row gap-10">
				<!-- product -->
				<div class="basis-2/3 select-none">
					<!-- product selection -->
					<div class="flex flex-row justify-between items-center gap-3">
						<div class="flex flex-row items-center gap-3">
							<img :src="currentProduct.images[0]" alt="" class="w-[100px] h-[100px] border-2 border-gray-400 rounded-lg" />
							<p class="w-[350px] truncate">{{ currentProduct.title }}</p>
						</div>
						<!-- quatity -->
						<div class="mx-5 flex flex-row justify-center items-center gap-3">
							<button @click="decrementQuantity">-</button>
							<p class="">{{ quantityProduct }}</p>
							<button @click="incrementQuantity">+</button>
						</div>
						<!-- total price -->
						<div class="">
							<p class="w-full">Rp{{ totalPriceDisplay }}</p>
						</div>
					</div>

					<!-- product in cart -->
					<div class="mt-10">
						<p class="mb-5">Produk dalam keranjang :</p>
						<div class="flex flex-col gap-3">
							<div class="flex flex-row justify-between items-center gap-3" v-for="product in cartProductList" :key="product.id">
								<div class="flex flex-row items-center gap-3">
									<!-- image -->
									<img :src="product.gambar" alt="" class="w-[100px] h-[100px] border-2 border-gray-400 rounded-lg" />
									<!-- title -->
									<p class="w-[350px] truncate">{{ product.nama }}</p>
								</div>
								<div class="">
									<!-- price -->
									<p class="w-full">Rp{{ prettyPrice(product.harga) }}</p>
								</div>
							</div>
						</div>

						<!-- option payment with cart -->
						<button class="p-1 mt-5 border-2 border-oren" @click="buyWithCart">{{ stringBuyWithCart }}</button>

						<!-- undefined data massage -->
						<div class="" v-show="cartProductListUndefined">
							<p class="">Anda tidak memiliki produk didalam keranjang !</p>
						</div>
					</div>
				</div>

				<!-- payment section -->
				<div class="basis-1/3">
					<div class="p-2 bg-white flex flex-col justify-between gap-5">
						<p class="text-center">Pembayaran</p>
						<!-- cahs -->
						<div class="flex flex-col gap-2">
							<!-- price -->
							<div class="flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Harga :</p>
								<p class="">Rp{{ totalPriceDisplay }}</p>
							</div>
							<!-- discount -->
							<div class="flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Diskon :</p>
								<p class="">{{ currentProduct.discountPercentage }}% ( Rp{{ cumulativeDiscountDisplay }} )</p>
							</div>
							<!-- ship -->
							<div class="flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Ongkos Kirim :</p>
								<p class="">Rp{{ shipDisplay }}</p>
							</div>
							<!-- price product in cart -->
							<div class="flex flex-row justify-between items-end w-full" v-show="buyWithCartOptions">
								<p class="w-[200px]">Harga Produk dalam keranjang* :</p>
								<p class="">Rp{{ totalPriceCartDisplay }}</p>
							</div>
							<!-- cumulative -->
							<div class="mt-5 flex flex-row justify-between items-end w-full">
								<p class="w-[200px]">Total Bayar :</p>
								<p class="">Rp{{ totalPriceCumulativeDisplay }}</p>
							</div>
						</div>
					</div>
					<!-- note cart -->
					<p class="mt-2" v-show="buyWithCartOptions">*Harga sudah termasuk diskon dan ongkos kirim (jika ada), dari setiap produk.</p>
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

		async mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);

			await this.main();
			this.totalPriceCumulative();
			this.cartProduct();
		},

		computed: {
			...mapState(useStore, ["user", "idProduk", "keranjangValue"]),
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
					this.stringBuyWithCart = "Hapus dalam pembayaran";
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

<style></style>
