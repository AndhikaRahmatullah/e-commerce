<template>
	<div class="DetailProduct py-5 font-lora select-none">
		<!-- images -->
		<div class="mx-5 flex flex-row justify-around items-center flex-wrap gap-5">
			<div class="" v-for="data in data.images" :key="data">
				<img :src="data" alt="" class="w-[150px] lg:w-[270px] h-[150px] lg:h-[270px] rounded-md border-[3px] border-gray-400 shadow-2xl" />
			</div>
		</div>

		<!-- detailData -->
		<div class="mx-5 mt-10 flex flex-col gap-20">
			<!-- header -->
			<div class="flex flex-col gap-3">
				<!-- title -->
				<div class="">
					<p class="text-3xl lg:text-4xl tracking-wide font-semibold italic">{{ data.title }}</p>
				</div>

				<!-- description -->
				<div class="">
					<p class="text-sm lg:text-base tracking-wide leading-tight text-justify">{{ data.description }} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quidem deleniti delectus ex expedita esse, soluta perferendis eveniet necessitatibus minima! Ex quae magnam nulla ullam inventore tempora voluptate officia pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quod officiis possimus non? Quidem, pariatur repellat voluptatem animi odio vitae corrupti illum esse quisquam saepe ad ut consequuntur corporis magnam dolore rem nihil deserunt. Architecto, nulla iste, itaque eius deleniti dolorum ipsa natus at dicta ipsam harum rerum dolores impedit.</p>
				</div>
			</div>

			<!-- body -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-5 lg:gap-3 tracking-wider">
				<!-- price -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] active:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.price = !show.price">
					<img src="../assets/detailPrice.png" alt="" v-if="show.price" />
					<p class="text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-if="show.price">Harga</p>
					<p class="text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-else>Rp{{ data.price }}</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] hover:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.price = false" @mouseleave="show.price = true">
					<img src="../assets/detailPrice.png" alt="" v-if="show.price" />
					<p class="text-xl font-semibold text-[#5DBC9D] group-hover:text-white transition-all duration-300" v-if="show.price">Harga</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>Rp{{ data.price }}</p>
				</div>

				<!-- discount -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] active:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.discount = !show.discount">
					<img src="../assets/detailDiscount.png" alt="" v-if="show.discount" />
					<p class="text-xl font-semibold text-[#ED7899] transition-all duration-300" v-if="show.discount">Diskon</p>
					<p class="text-xl font-semibold text-[#ED7899] transition-all duration-300" v-else>{{ data.discountPercentage }}%</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] hover:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.discount = false" @mouseleave="show.discount = true">
					<img src="../assets/detailDiscount.png" alt="" v-if="show.discount" />
					<p class="text-xl font-semibold text-[#ED7899] group-hover:text-white transition-all duration-300" v-if="show.discount">Diskon</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.discountPercentage }}%</p>
				</div>

				<!-- rating -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#F1C40F] active:bg-[#F1C40F] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.rating = !show.rating">
					<img src="../assets/detailRating.png" alt="" v-if="show.rating" />
					<p class="text-xl font-semibold text-[#F1C40F] transition-all duration-300" v-if="show.rating">Penilaian</p>
					<p class="text-xl font-semibold text-[#F1C40F] transition-all duration-300" v-else>{{ data.rating }} dari 5</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#F1C40F] hover:bg-[#F1C40F] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.rating = false" @mouseleave="show.rating = true">
					<img src="../assets/detailRating.png" alt="" v-if="show.rating" />
					<p class="text-xl font-semibold text-[#F1C40F] group-hover:text-white transition-all duration-300" v-if="show.rating">Penilaian</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.rating }} dari 5</p>
				</div>

				<!-- stock -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#EFD8BE] active:bg-[#EFD8BE] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.stock = !show.stock">
					<img src="../assets/detailStock.png" alt="" v-if="show.stock" />
					<p class="text-xl font-semibold text-[#EFD8BE] transition-all duration-300" v-if="show.stock">Stok</p>
					<p class="text-xl font-semibold text-[#EFD8BE] transition-all duration-300" v-else>{{ data.stock }}</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#EFD8BE] hover:bg-[#EFD8BE] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.stock = false" @mouseleave="show.stock = true">
					<img src="../assets/detailStock.png" alt="" v-if="show.stock" />
					<p class="text-xl font-semibold text-[#EFD8BE] group-hover:text-white transition-all duration-300" v-if="show.stock">Stok</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.stock }}</p>
				</div>

				<!-- brandName -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] active:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.brandName = !show.brandName">
					<img src="../assets/detailBrand.png" alt="" v-if="show.brandName" />
					<p class="text-xl font-semibold text-[#ED7899] transition-all duration-300" v-if="show.brandName">Merek</p>
					<p class="text-xl font-semibold text-[#ED7899] transition-all duration-300" v-else>{{ data.brand }}</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#ED7899] hover:bg-[#ED7899] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.brandName = false" @mouseleave="show.brandName = true">
					<img src="../assets/detailBrand.png" alt="" v-if="show.brandName" />
					<p class="text-xl font-semibold text-[#ED7899] group-hover:text-white transition-all duration-300" v-if="show.brandName">Merek</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.brand }}</p>
				</div>

				<!-- category -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] active:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.category = !show.category">
					<img src="../assets/detailCategory.png" alt="" v-if="show.category" />
					<p class="text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-if="show.category">Kategori</p>
					<p class="text-xl font-semibold text-[#5DBC9D] transition-all duration-300" v-else>{{ data.category }}</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#5DBC9D] hover:bg-[#5DBC9D] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.category = false" @mouseleave="show.category = true">
					<img src="../assets/detailCategory.png" alt="" v-if="show.category" />
					<p class="text-xl font-semibold text-[#5DBC9D] group-hover:text-white transition-all duration-300" v-if="show.category">Kategori</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>{{ data.category }}</p>
				</div>

				<!-- comments -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#B7ABC8] active:bg-[#B7ABC8] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.comments = !show.comments">
					<img src="../assets/detailComments.png" alt="" v-if="show.comments" />
					<p class="text-xl font-semibold text-[#B7ABC8] transition-all duration-300" v-if="show.comments">Komentar</p>
					<p class="text-xl font-semibold text-[#B7ABC8] transition-all duration-300" v-else>...</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#B7ABC8] hover:bg-[#B7ABC8] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.comments = false" @mouseleave="show.comments = true">
					<img src="../assets/detailComments.png" alt="" v-if="show.comments" />
					<p class="text-xl font-semibold text-[#B7ABC8] group-hover:text-white transition-all duration-300" v-if="show.comments">Komentar</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>...</p>
				</div>

				<!-- otherPromotions -->
				<!-- sm -->
				<div class="lg:hidden h-[187px] py-8 w-full flex flex-col justify-center items-center gap-3 border-[3px] border-[#ACE3FF] active:bg-[#ACE3FF] transition-all duration-300 rounded-lg bg-transparent shadow-2xl" @click="show.otherPromotions = !show.otherPromotions">
					<img src="../assets/detailOtherPromotions.png" alt="" v-if="show.otherPromotions" />
					<p class="text-xl font-semibold text-[#ACE3FF] transition-all duration-300" v-if="show.otherPromotions">Promo Lainnya</p>
					<p class="text-xl font-semibold text-[#ACE3FF] transition-all duration-300" v-else>...</p>
				</div>
				<!-- lg -->
				<div class="hidden py-8 w-full col-span-2 lg:flex flex-col justify-center items-center gap-3 border-[3px] border-[#ACE3FF] hover:bg-[#ACE3FF] transition-all duration-300 rounded-lg bg-transparent shadow-2xl group" @mouseenter="show.otherPromotions = false" @mouseleave="show.otherPromotions = true">
					<img src="../assets/detailOtherPromotions.png" alt="" v-if="show.otherPromotions" />
					<p class="text-xl font-semibold text-[#ACE3FF] group-hover:text-white transition-all duration-300" v-if="show.otherPromotions">Promo Lainnya</p>
					<p class="text-xl font-semibold text-white transition-all duration-300" v-else>...</p>
				</div>
			</div>
		</div>

		<!-- back -->
		<div class="mt-20 mx-5 text-right">
			<router-link :to="'/home/' + user" class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300">KEMBALI</router-link>
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main";
	import { mapState, mapActions } from "pinia";
	export default {
		name: "DetailProduct",

		data() {
			return {
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
			};
		},

		mounted() {
			this.setData();
		},

		computed: {
			...mapState(useStore, ["user", "idProduk"]),
		},

		methods: {
			...mapActions(useStore, ["apiDataId"]),

			async setData() {
				const x = await this.apiDataId();

				const priceEdit = () => this.prettyPrice(x.price * 15500);
				const discountEdit = () => Math.round(x.discountPercentage);

				this.data = {
					id: x.id,
					title: x.title,
					description: x.description,
					price: priceEdit(),
					discountPercentage: discountEdit(),
					rating: x.rating,
					stock: x.stock,
					brand: x.brand,
					category: x.category,
					images: x.images,
				};
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
	.DetailProduct {
		background-image: url("../assets/detailProdukBG.png");
		min-height: 100vh;
		background-repeat: repeat;
	}
</style>
