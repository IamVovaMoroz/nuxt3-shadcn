<script setup>

const loading = ref(false)
</script>

<template>
	<div class="grid h-screen gap-4">
		<header class="flex items-start justify-between">
			<div class="grow">
				<h1>Dashboard</h1>
				<p>Hi, welcome back Volodymyr Moroz!</p>
			</div>
			<div class="w-[120px] h-[36px] bg-neutral-200"></div>
		</header>
		<main class="grid gap-4">
			<div class="flex items-center gap-4">
				<div v-for="(item, index) in 3" :key="index" class="w-[120px] h-[36px] bg-neutral-200"></div>
				<!-- <div>Tabs: Today This week This month This year</div> -->
			</div>

			<section>
				<!-- Chart -->
				 <div class="w-full h-[360px]  bg-neutral-200"></div>
			</section>
		</main>

		<footer>
			<div class="flex items-center gap-4">
				<div v-for="(item, index) in 3" :key="index" class="w-full h-[260px] bg-neutral-200"></div>
			</div>
			<!-- I will have 3 different cards -->
		</footer>
	</div>


</template>