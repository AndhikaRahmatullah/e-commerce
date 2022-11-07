<template>
	<div class="">
		<!-- loadingScreen -->
		<Loading v-if="loading" />

		<!-- Detail Product page -->
		<div class="DetailProduct py-5 font-lora select-none" v-else>
			<!-- header -->
			<div class="flex justify-start">
				<p class="pl-3 md:pl-5 p-2 font-fredoka text-xl md:text-3xl lg:text-4xl text-white tracking-wide bg-gradient-to-r from-oren to-oren2 rounded-r-2xl shadow-2xl">Detail <span class="text-gray-600">Produk</span></p>
			</div>

			<!-- body -->
			<!-- images -->
			<div class="mt-10 mx-5 flex flex-row justify-around items-center flex-wrap gap-5">
				<div class="" v-for="data in data.images" :key="data">
					<img :src="data" alt="" class="w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] rounded-md border-[3px] border-gray-400 shadow-2xl" />
				</div>
			</div>

			<!-- detailData -->
			<div class="mx-5 mt-10 flex flex-col gap-14 md:gap-20">
				<!-- header -->
				<div class="flex flex-col gap-3">
					<!-- title -->
					<div class="">
						<p class="text-lg md:text-xl lg:text-2xl tracking-wide font-semibold leading-tight italic">{{ data.title }}</p>
					</div>

					<!-- description -->
					<div class="">
						<p class="text-sm md:text-base lg:text-lg tracking-wide leading-tight text-justify">{{ data.description }} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quidem deleniti delectus ex expedita esse, soluta perferendis eveniet necessitatibus minima! Ex quae magnam nulla ullam inventore tempora voluptate officia pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod officiis possimus non? Quidem, pariatur repellat voluptatem animi odio vitae corrupti illum esse quisquam saepe ad ut consequuntur corporis magnam dolore rem nihil deserunt. Architecto, nulla iste, itaque eius deleniti dolorum ipsa natus at dicta ipsam harum rerum dolores impedit.</p>
					</div>
				</div>

				<!-- body -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-5 lg:gap-3 tracking-wider">
					<!-- price -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] active:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.price = !show.price">
						<img src="../assets/detailPrice.png" alt="" v-if="show.price" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-if="show.price">Harga</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-else>Rp{{ data.price }}</p>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] hover:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.price = false" @mouseleave="show.price = true">
						<img src="../assets/detailPrice.png" alt="" v-if="show.price" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#5DBC9D] group-hover:text-white transition-all duration-300" v-if="show.price">Harga</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-white transition-all duration-300" v-else>Rp{{ data.price }}</p>
					</div>

					<!-- discount -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] active:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.discount = !show.discount">
						<img src="../assets/detailDiscount.png" alt="" v-if="show.discount" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ED7899] transition-all duration-300" v-if="show.discount">Diskon</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ED7899] transition-all duration-300" v-else>{{ data.discountPercentage }}%</p>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] hover:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.discount = false" @mouseleave="show.discount = true">
						<img src="../assets/detailDiscount.png" alt="" v-if="show.discount" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ED7899] group-hover:text-white transition-all duration-300" v-if="show.discount">Diskon</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.discountPercentage }}%</p>
					</div>

					<!-- rating -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#F1C40F] active:bg-[#F1C40F] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.rating = !show.rating">
						<img src="../assets/detailRating.png" alt="" v-if="show.rating" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#F1C40F] transition-all duration-300" v-if="show.rating">Penilaian</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#F1C40F] transition-all duration-300" v-else>{{ data.rating }} dari 5</p>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#F1C40F] hover:bg-[#F1C40F] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.rating = false" @mouseleave="show.rating = true">
						<img src="../assets/detailRating.png" alt="" v-if="show.rating" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#F1C40F] group-hover:text-white transition-all duration-300" v-if="show.rating">Penilaian</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.rating }} dari 5</p>
					</div>

					<!-- stock -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#EFD8BE] active:bg-[#EFD8BE] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.stock = !show.stock">
						<img src="../assets/detailStock.png" alt="" v-if="show.stock" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#EFD8BE] transition-all duration-300" v-if="show.stock">Stok</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#EFD8BE] transition-all duration-300" v-else>{{ data.stock }}</p>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#EFD8BE] hover:bg-[#EFD8BE] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.stock = false" @mouseleave="show.stock = true">
						<img src="../assets/detailStock.png" alt="" v-if="show.stock" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#EFD8BE] group-hover:text-white transition-all duration-300" v-if="show.stock">Stok</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.stock }}</p>
					</div>

					<!-- brandName -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] active:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.brandName = !show.brandName">
						<img src="../assets/detailBrand.png" alt="" v-if="show.brandName" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ED7899] transition-all duration-300" v-if="show.brandName">Merek</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ED7899] transition-all duration-300" v-else>{{ data.brand }}</p>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] hover:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.brandName = false" @mouseleave="show.brandName = true">
						<img src="../assets/detailBrand.png" alt="" v-if="show.brandName" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ED7899] group-hover:text-white transition-all duration-300" v-if="show.brandName">Merek</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.brand }}</p>
					</div>

					<!-- category -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] active:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.category = !show.category">
						<img src="../assets/detailCategory.png" alt="" v-if="show.category" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-if="show.category">Kategori</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-else>{{ data.category }}</p>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] hover:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.category = false" @mouseleave="show.category = true">
						<img src="../assets/detailCategory.png" alt="" v-if="show.category" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#5DBC9D] group-hover:text-white transition-all duration-300" v-if="show.category">Kategori</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.category }}</p>
					</div>

					<!-- comments -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#B7ABC8] active:bg-[#B7ABC8] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.comments = !show.comments">
						<img src="../assets/detailComments.png" alt="" v-if="show.comments" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#B7ABC8] transition-all duration-300" v-if="show.comments">Komentar</p>
						<a href="#comments" class="py-1 px-2 text-base md:text-lg lg:text-xl font-semibold text-white bg-[#B7ABC8] rounded-lg transition-all duration-300 shadow-lg active:shadow-none lg:hover:shadow-none" @click="showComment" v-else>{{ stringComment }}</a>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#B7ABC8] hover:bg-[#B7ABC8] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.comments = false" @mouseleave="show.comments = true">
						<img src="../assets/detailComments.png" alt="" v-if="show.comments" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#B7ABC8] group-hover:text-white transition-all duration-300" v-if="show.comments">Komentar</p>
						<button class="py-1 px-2 text-base md:text-lg lg:text-xl font-semibold text-[#B7ABC8] bg-white rounded-lg transition-all duration-300 shadow-lg active:shadow-none lg:hover:shadow-none" @click="showComment" v-else>{{ stringComment }}</button>
					</div>

					<!-- otherPromotions -->
					<!-- sm -->
					<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#ACE3FF] active:bg-[#ACE3FF] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.otherPromotions = !show.otherPromotions">
						<img src="../assets/detailOtherPromotions.png" alt="" v-if="show.otherPromotions" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ACE3FF] transition-all duration-300" v-if="show.otherPromotions">Promo Lainnya</p>
						<p class="text-base md:text-lg lg:text-xl text-center font-semibold text-[#ACE3FF] transition-all duration-300" v-else>{{ data.otherPromotions }}</p>
					</div>
					<!-- lg -->
					<div class="hidden py-8 w-full col-span-2 lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#ACE3FF] hover:bg-[#ACE3FF] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.otherPromotions = false" @mouseleave="show.otherPromotions = true">
						<img src="../assets/detailOtherPromotions.png" alt="" v-if="show.otherPromotions" />
						<p class="text-base md:text-lg lg:text-xl font-semibold text-[#ACE3FF] group-hover:text-white transition-all duration-300" v-if="show.otherPromotions">Promo Lainnya</p>
						<p class="text-base md:text-lg lg:text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.otherPromotions }}</p>
					</div>
				</div>
			</div>

			<!-- comments -->
			<Transition name="comment">
				<div class="Comments mt-10 pt-5 bg-[#B7ABC8] rounded-lg text-white shadow-2xl" v-show="statusComment" id="comments">
					<!-- title -->
					<p class="mb-5 px-4 md:px-7 text-xl md:text-3xl w-fit bg-[#ABC8B7] rounded-r-lg text-white font-lora tracking-wide font-bold italic">Komentar Pembeli</p>

					<!-- card -->
					<div class="flex flex-row justify-center items-start flex-wrap gap-3">
						<div class="w-[280px] h-[120px] md:w-[300px] md:h-[200px] flex flex-col gap-y-0 md:gap-y-3 font-roboto border-2 border-white rounded-lg" v-for="com in dataComments" :key="com.id">
							<!-- user -->
							<div class="py-1 md:py-0 flex flex-row items-center border-b-2 border-white">
								<img src="../assets/userMan.png" alt="" class="w-[30px] md:w-[64px]" />
								<p class="text-xs md:text-base">{{ com.user.username }}</p>
							</div>
							<!-- userComment -->
							<p class="p-2 text-xs md:text-base">{{ com.body }}</p>
						</div>
					</div>

					<!-- backToTop -->
					<div class="mt-5 py-3 text-center bg-[#C8B7AB] text-white border-2 border-[#C8B7AB] shadow-xl active:bg-transparent active:text-[#C8B7AB] lg:hover:bg-transparent lg:hover:text-[#C8B7AB] transition-all lg:duration-300 rounded-lg">
						<a href="#comments" class="text-xs md:text-sm lg:text-base font-bold tracking-widest">KEMBALI KEATAS</a>
					</div>
				</div>
			</Transition>

			<!-- buttonRouter -->
			<div class="mt-20 mx-5 flex flex-row justify-end items-center gap-x-4">
				<!-- buyNow -->
				<div class="">
					<router-link :to="'/home/' + user + '/checkout/' + idProduk" class="p-2 text-xs md:text-sm lg:text-base bg-blue-600 rounded-lg tracking-wider border-2 border-blue-600 shadow-xl text-white active:bg-transparent active:text-blue-600 lg:hover:bg-transparent lg:hover:text-blue-600 transition-all lg:duration-300">Beli Sekarang</router-link>
				</div>

				<!-- back -->
				<div class="">
					<router-link :to="'/home/' + user" class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300">Kembali</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	import Loading from "../components/Loading.vue";
	export default {
		name: "DetailProduct",

		data() {
			return {
				loading: true,
				data: {},
				show: {
					price: true,
					discount: true,
					rating: true,
					stock: true,
					brandName: true,
					category: true,
					comments: true,
					otherPromotions: true,
				},
				dataComments: {},
				statusComment: false,
				stringComment: `Lihat komentar`,
			};
		},

		components: {
			Loading,
		},

		created() {
			this.setComments();
		},

		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);

			this.setData();
		},

		computed: {
			...mapState(useStore, ["user", "idProduk"]),
		},

		methods: {
			...mapActions(useStore, ["apiDataId", "apiComments"]),

			async setData() {
				const x = await this.apiDataId();

				const categoryEdit = () => this.categoryString(x.category);
				const priceEdit = () => this.prettyPrice(x.price * 15500);
				const discountEdit = () => Math.round(x.discountPercentage);
				const otherPromotionsEdit = () => this.otherPromotionsValues(discountEdit());

				this.data = {
					id: x.id,
					title: x.title,
					description: x.description,
					price: priceEdit(),
					discountPercentage: discountEdit(),
					rating: x.rating,
					stock: x.stock,
					brand: x.brand,
					category: categoryEdit(),
					images: x.images,
					otherPromotions: otherPromotionsEdit(),
				};
			},

			otherPromotionsValues(discount) {
				if (discount >= 15) {
					return `Produk Best Sale & Gratis Ongkir `;
				} else if (discount >= 10) {
					return `Produk Best Sale `;
				} else {
					return `Produk Murah Lebay`;
				}
			},

			categoryString(categoryName) {
				const cn = categoryName;

				if (cn === "smartphones") {
					return `Smartphone`;
				} else if (cn === "laptops") {
					return `Laptop`;
				} else if (cn === "fragrances") {
					return `Minyak Wangi`;
				} else if (cn === "skincare") {
					return `Skincare`;
				} else if (cn === "groceries") {
					return `Bahan Makanan`;
				} else if (cn === "home-decoration") {
					return `Dekorasi Rumah`;
				} else if (cn === "furniture") {
					return `Mabel`;
				} else if (cn === "tops") {
					return `Atasan`;
				} else if (cn === "womens-dresses") {
					return `Gaun Wanita`;
				} else if (cn === "womens-shoes") {
					return `Sepatu Wanita`;
				} else if (cn === "mens-shirts") {
					return `Kaos Pria`;
				} else if (cn === "mens-shoes") {
					return `Sepatu Pria`;
				} else if (cn === "mens-watches") {
					return `Jam Pria`;
				} else if (cn === "womens-watches") {
					return `Jam Wanita`;
				} else if (cn === "womens-bags") {
					return `Tas Wanita`;
				} else if (cn === "womens-jewellery") {
					return `Perhiasan Wanita`;
				} else if (cn === "sunglasses") {
					return `Kacamata`;
				} else if (cn === "automotive") {
					return `Otomotif`;
				} else if (cn === "motorcycle") {
					return `Sepeda Motor`;
				} else if (cn === "lighting") {
					return `Pencahayaan`;
				}
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

			async setComments() {
				const comments = await this.apiComments();
				this.dataComments = comments;
			},

			showComment() {
				if (!this.statusComment) {
					this.statusComment = true;
					this.stringComment = `Tutup Komentar`;
				} else {
					this.statusComment = false;
					this.stringComment = `Lihat Komentar`;
				}
			},
		},
	};
</script>

<style>
	.comment-enter-active,
	.comment-leave-active {
		transition: opacity 1s ease;
	}
	.comment-enter-from,
	.comment-leave-to {
		opacity: 0;
	}

	.DetailProduct {
		background-image: url("../assets/detailProdukBG.png");
		min-height: 100vh;
		background-repeat: repeat;
	}
	.Comments {
		background-image: url("../assets/commentBG.png");
		min-height: 100vh;
		background-repeat: repeat;
	}
</style>
