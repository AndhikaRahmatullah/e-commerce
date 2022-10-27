<template>
	<div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
		<div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
			<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
		</div>
		<div class="carousel-inner relative w-full overflow-hidden">
			<div class="carousel-item active float-left w-full">
				<img src="https://images.unsplash.com/photo-1565728769075-dcbcb8f7f5ac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY2OTgyNTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="hidden md:block w-full" alt="1" />
				<img src="https://images.unsplash.com/photo-1572611932849-7f0f116fb2f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY3MDAyNTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=812" class="block md:hidden w-full" alt="1" />
			</div>
			<div class="carousel-item float-left w-full">
				<img src="https://images.unsplash.com/photo-1615497419017-50b4adab1b8c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY2OTgzMjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="hidden md:block w-full" alt="2" />
				<img src="https://images.unsplash.com/photo-1545007805-a44ee83438fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY3MDAzNTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=812" class="block md:hidden w-full" alt="2" />
			</div>
			<div class="carousel-item float-left w-full">
				<img src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY2OTgzNDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="hidden md:block w-full" alt="3" />
				<img src="https://images.unsplash.com/photo-1574318714425-eea78e8bb92d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY3MDA0MTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=812" class="block md:hidden w-full" alt="3" />
			</div>
			<div class="carousel-item float-left w-full">
				<img src="https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY2OTgzNTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="hidden md:block w-full" alt="4" />
				<img src="https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY3MDA0NDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=812" class="block md:hidden w-full" alt="4" />
			</div>
			<div class="carousel-item float-left w-full">
				<img src="https://images.unsplash.com/photo-1608545050668-88ef381d0595?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY2OTgzNjk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" class="hidden md:block w-full" alt="5" />
				<img src="https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHx8fHx8fDE2NjY3MDA0NTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=812" class="block md:hidden w-full" alt="5" />
			</div>
		</div>
		<button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
			<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
			<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</template>
<script>
	export default {
		name: "Carousel",
	};
</script>
<style></style>
