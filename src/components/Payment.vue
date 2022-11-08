<template>
	<div>
		<!-- Button trigger modal -->
		<button type="button" class="p-2 mt-5 text-xs md:text-sm lg:text-base bg-oren rounded-lg tracking-wider border-2 border-oren shadow-xl text-white active:bg-transparent active:text-oren lg:hover:bg-transparent lg:hover:text-oren transition-all lg:duration-300" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Buat Pesanan</button>

		<!-- Modal -->
		<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<!--  -->
			<div class="modal-dialog relative w-auto pointer-events-none">
				<div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
					<!-- header -->
					<div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
						<!-- title -->
						<h5 class="text-lg md:text-xl lg:text-2xl leading-normal tracking-wide text-gray-800 font-semibold" id="exampleModalLabel">Buat pesanan</h5>
						<!-- button exit -->
						<button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>

					<!-- body -->
					<div class="modal-body relative p-4 select-none">
						<!-- before send -->
						<div class="flex flex-col items-start gap-3" v-if="beforeSend">
							<!-- greeting -->
							<div class="">
								<p class="text-xs md:text-sm lg:text-base">Halo {{ nameUser }}, untuk melanjutkan pesanan harap masukan kode dibawah : <span class="text-red-500">( berlaku 10 menit )</span></p>
							</div>

							<!-- code -->
							<div class="">
								<p class="text-xs md:text-sm lg:text-base font-semibold">
									Kode : <span class="select-all font-medium">{{ code }}</span>
								</p>
							</div>

							<!-- bank -->
							<div class="">
								<p class="text-xs md:text-sm lg:text-base font-semibold">
									Bank : <span class="font-medium">{{ atmUser }}</span>
								</p>
							</div>

							<!-- input code -->
							<div class="w-full">
								<input type="text" class="form-control block w-full px-3 py-1.5 text-xs md:text-sm lg:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition-all duration-500 m-0 focus:text-gray-700 focus:bg-white focus:border-oren outline-none focus:ring-1 focus:ring-oren tracking-wide" id="exampleText0" placeholder="Masukan kode disini" v-model="inputCode" />
							</div>
						</div>
						<!-- after send -->
						<div class="" v-else>
							<p class="text-xs md:text-sm lg:text-base">Terimakasih pesanan Anda telah terkirim pada Penjual.</p>
						</div>
					</div>

					<!-- footer -->
					<div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
						<button type="button" class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300 font-lora ml-1 block" @click="sendAll" ref="sendButton">Kirim</button>
						<button type="button" class="p-2 text-xs md:text-sm lg:text-base bg-gray-500 rounded-lg tracking-wider border-2 border-gray-500 shadow-xl text-white active:bg-transparent active:text-gray-500 lg:hover:bg-transparent lg:hover:text-gray-500 transition-all lg:duration-300 font-lora hidden" data-bs-dismiss="modal" aria-label="Close" ref="closeButton" @click="closeAll">Keluar</button>
					</div>
				</div>
			</div>
			<Transition name="alert">
				<Alert v-if="alertStatus" :alertValue="alertValue" />
			</Transition>
		</div>
	</div>
</template>

<script>
	import Alert from "./Alert.vue";
	export default {
		name: "Payment",
		props: ["nameUser", "addressUser", "phoneUser", "atmUser", "totalPrice"],

		data() {
			return {
				code: "",
				inputCode: "",
				beforeSend: true,
				alertStatus: false,
				alertValue: "",
			};
		},

		components: {
			Alert,
		},

		created() {
			this.generateCode();
		},

		mounted() {
			setInterval(() => {
				this.generateCode();
			}, 600000);
		},

		methods: {
			generateCode() {
				let length = 12,
					charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
					result = "";
				for (let i = 0, n = charset.length; i < length; ++i) {
					result += charset.charAt(Math.floor(Math.random() * n));
				}

				this.code = result;
			},

			sendAll() {
				if (this.nameUser && this.addressUser && this.phoneUser && this.atmUser !== "noSelect") {
					if (this.inputCode === this.code) {
						this.alert(`Terimakasih ! Pembayaran berhasil dilakukan. `);
						this.buttonChangeSend();
						this.beforeSend = false;
						this.inputCode = "";
					} else {
						this.alert(`Maaf, kode yang Anda masukan salah ! `);
					}
				} else {
					this.alert(`Mohon isi semua data yang tersedia !`);
				}
			},

			closeAll() {
				this.beforeSend = true;
				this.buttonChangeClose();
			},

			buttonChangeSend() {
				const send = this.$refs.sendButton;
				const close = this.$refs.closeButton;
				send.classList.remove(`block`);
				send.classList.add(`hidden`);
				close.classList.remove(`hidden`);
				close.classList.add(`block`);
			},

			buttonChangeClose() {
				const send = this.$refs.sendButton;
				const close = this.$refs.closeButton;
				send.classList.remove(`hidden`);
				send.classList.add(`block`);
				close.classList.remove(`block`);
				close.classList.add(`hidden`);
			},

			alert(text) {
				this.alertStatus = true;
				this.alertValue = text;
				setTimeout(() => {
					this.alertStatus = false;
				}, 4000);
			},
		},
	};
</script>
<style></style>
