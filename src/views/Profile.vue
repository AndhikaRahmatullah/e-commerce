<template>
	<div class="">
		<!-- loadingScreen -->
		<Loading v-if="loading" />

		<!-- Profile Page -->
		<div class="Profile py-5 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" v-else>
			<!-- header -->
			<div class="mx-3 flex flex-row justify-between items-center gap-1">
				<div class="w-1/2 flex flex-row justify-start items-center">
					<img src="../assets/profileUser.png" class="w-[50px] md:w-[75px] lg:w-[100px]" />
					<p class="text-lg md:text-xl lg:text-2xl text-white font-lora truncate tracking-wide">@{{ user }}</p>
				</div>
				<div class="w-1/2">
					<p class="text-2xl md:text-4xl lg:text-5xl font-fredoka text-oren text-right">Shepie <span class="text-white">Profile</span></p>
				</div>
			</div>

			<!-- body -->
			<div class="flex flex-col items-center lg:items-start lg:flex-row gap-5">
				<!-- display -->
				<div class="mt-10 mx-2 p-2 md:p-0 flex flex-col gap-5 justify-around items-start text-white w-full md:w-2/3 lg:w-1/2">
					<!-- username -->
					<div class="w-full p-2 flex flex-col gap-4 border-b-4 border-oren">
						<p class="text-lg md:text-xl lg:text-2xl font-lora font-semibold tracking-wide">Username</p>
						<p class="mx-3 text-sm md:text-base lg:text-lg font-roboto font-light tracking-wide truncate">{{ profilUser.username }}</p>
					</div>
					<!-- full name -->
					<div class="w-full p-2 flex flex-col gap-4 border-b-4 border-oren">
						<p class="text-lg md:text-xl lg:text-2xl font-lora font-semibold tracking-wide">Nama Lengkap</p>
						<p class="mx-3 text-sm md:text-base lg:text-lg font-roboto font-light tracking-wide">{{ profilUser.fullName }}</p>
					</div>
					<!-- tel number -->
					<div class="w-full p-2 flex flex-col gap-4 border-b-4 border-oren">
						<p class="text-lg md:text-xl lg:text-2xl font-lora font-semibold tracking-wide">Nomor Telepon</p>
						<p class="mx-3 text-sm md:text-base lg:text-lg font-roboto font-light tracking-wide">{{ profilUser.phoneNumber }}</p>
					</div>
					<!-- address -->
					<div class="w-full p-2 flex flex-col gap-4 border-b-4 border-oren">
						<p class="text-lg md:text-xl lg:text-2xl font-lora font-semibold tracking-wide">Alamat</p>
						<p class="mx-3 text-sm md:text-base lg:text-lg font-roboto font-light tracking-wide">{{ profilUser.address }}</p>
					</div>
				</div>

				<!-- form -->
				<Transition name="form">
					<div class="w-full p-2 md:p-0 md:w-2/3 mt-10 mx-2 flex flex-col gap-5 justify-end items-start text-white font-roboto" v-show="editStatus">
						<!-- change datas -->
						<div class="flex justify-center w-full">
							<p class="text-lg md:text-xl lg:text-2xl font-lora font-semibold tracking-wide">Ubah Profil</p>
						</div>
						<!-- username -->
						<div class="form-floating w-full">
							<input type="text" class="form-control block w-full text-sm md:text-base lg:text-lg px-3 py-1.5 border-2 border-oren md:border-white tracking-wide font-normal text-white md:text-gray-900 bg-transparent md:bg-white bg-clip-padding rounded transition-all duration-500 outline-none focus:text-white focus:bg-transparent focus:border-oren focus:ring-0" id="floatingInput" placeholder="Username" v-model="form.username" />
							<label for="floatingInput" class="text-white md:text-gray-700 w-full">Username</label>
						</div>

						<!-- fullName -->
						<div class="form-floating w-full">
							<input type="text" class="form-control block w-full text-sm md:text-base lg:text-lg px-3 py-1.5 border-2 border-oren md:border-white tracking-wide font-normal text-white md:text-gray-900 bg-transparent md:bg-white bg-clip-padding rounded transition-all duration-500 outline-none focus:text-white focus:bg-transparent focus:border-oren focus:ring-0" id="floatingInput" placeholder="NamaLengkap" v-model="form.fullName" />
							<label for="floatingInput" class="text-white md:text-gray-700 w-full">Nama lengkap</label>
						</div>

						<!-- phoneNumber -->
						<div class="form-floating w-full">
							<input type="tel" class="form-control block w-full text-sm md:text-base lg:text-lg px-3 py-1.5 border-2 border-oren md:border-white tracking-wide font-normal text-white md:text-gray-900 bg-transparent md:bg-white bg-clip-padding rounded transition-all duration-500 outline-none focus:text-white focus:bg-transparent focus:border-oren focus:ring-0" id="floatingPassword" placeholder="NomorTelepon" v-model="form.phoneNumber" />
							<label for="floatingPassword" class="text-white md:text-gray-700 w-full">Nomor telepon</label>
						</div>

						<!-- address -->
						<div class="w-full">
							<label for="adress" class="text-sm md:text-base lg:text-lg ml-2 w-full">Alamat lengkap</label>
							<textarea class="form-control block w-full text-sm md:text-base lg:text-lg px-3 py-1.5 border-2 border-oren md:border-white tracking-wide font-normal text-white md:text-gray-900 bg-transparent md:bg-white bg-clip-padding rounded transition-all duration-500 outline-none focus:text-white focus:bg-transparent focus:border-oren focus:ring-0 resize-none" id="address" rows="5" placeholder="" v-model="form.address"></textarea>
						</div>
					</div>
				</Transition>
			</div>

			<!-- button -->
			<div class="mt-5 flex flex-row items-center justify-center gap-x-3 font-lora">
				<button class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300" @click="changeProfile" v-show="!editStatus">Ubah Profil</button>
				<button class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300" @click="resetForm" v-show="editStatus">Reset</button>
				<button class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300" @click="saveForm" v-show="editStatus">Simpan</button>
			</div>

			<!-- routerBack -->
			<div class="mt-24 md:mt-10 mx-5 flex justify-end" v-show="!editStatus">
				<router-link :to="'/home/' + user" class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300 font-lora">Kembali</router-link>
			</div>

			<Transition name="alert">
				<Alert v-if="alertStatus" :alertValue="alertValue" />
			</Transition>
		</div>
	</div>
</template>

<script>
	import { useStore } from "../store/main.js";
	import { mapState, mapActions } from "pinia";
	import Alert from "../components/Alert.vue";
	import Loading from "../components/Loading.vue";
	export default {
		name: "Profile",

		setup() {
			useStore().$subscribe((mutation, state) => {
				localStorage.setItem("cart", JSON.stringify(state));
			});
		},

		components: {
			Alert,
			Loading,
		},

		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);

			this.form.username = this.profilUser.username;
			this.form.fullName = this.profilUser.fullName;
			this.form.phoneNumber = this.profilUser.phoneNumber;
			this.form.address = this.profilUser.address;
		},

		data() {
			return {
				loading: true,
				editStatus: false,
				form: {
					username: "",
					fullName: "",
					phoneNumber: "",
					address: "",
				},
				alertStatus: false,
				alertValue: "",
			};
		},

		computed: {
			...mapState(useStore, ["user", "profilUser"]),
		},

		methods: {
			saveForm() {
				if (!this.form.address || !this.form.phoneNumber || !this.form.fullName || !this.form.username) {
					this.alert(`Harap isi semua formulir yang tersedia !`);
				} else {
					this.editStatus = !this.editStatus;
					let newUsername = this.form.username.replace(/[/]/g, "");
					const store = useStore();
					store.$patch({
						user: newUsername,
						profilUser: {
							username: newUsername,
							fullName: this.form.fullName,
							phoneNumber: this.form.phoneNumber,
							address: this.form.address,
						},
					});
					this.alert(`Perubahan telah disimpan !`);
				}
			},

			resetForm() {
				this.form.username = "";
				this.form.fullName = "";
				this.form.phoneNumber = "";
				this.form.address = "";
			},

			changeProfile() {
				if (this.editStatus) {
					this.editStatus = false;
				} else {
					this.editStatus = true;
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
	.alert-enter-active {
		transition: all 0.8s ease;
	}
	.alert-leave-active {
		transition: all 0.8s ease;
	}
	.alert-enter-from,
	.alert-leave-to {
		transform: translateY(-100px);
		opacity: 0;
	}

	.form-enter-active {
		transition: all 0.8s ease-out;
	}
	.form-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.form-enter-from,
	.form-leave-to {
		transform: translateX(500px);
		opacity: 0;
	}
</style>
