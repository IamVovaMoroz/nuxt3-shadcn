<script setup>

const open = ref(true)
</script>

<template>

	<div class="">
		<div class="flex z-50 items-center justify-between w-full h-full p-4 lg:hidden">
			<!--	layouts/default.vue -  <div class="grid items-start">! -->
			<Logo />
			<Icon class="z-50 cursor-pointer left-2 top-2" :size="30" :name="'iconamoon:menu-burger-horizontal'"
				@click="open = true" />

			<div v-if="open" class="fixed top-0 left-0 z-[999] w-full h-full h-screen bg-white">
				<Icon class="absolute z-50 right-4 top-4 cursor-pointer" :size="30" :name="'mingcute:close-line'"
					@click="open = false" />
				<SidebarMenu />
			</div>
		</div>
		<div class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r">
			<SidebarMenu />
		</div>
		<div>
			UserItem
		</div>

	</div>

</template>