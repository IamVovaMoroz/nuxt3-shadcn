<script setup>

const loading = ref(false)
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
			<Tabs default-value="account" class="w-[400px]">
				<TabsList>
					<TabsTrigger value="account">
						Account
					</TabsTrigger>
					<TabsTrigger value="password">
						Password
					</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					Make changes to your account here.
				</TabsContent>
				<TabsContent value="password">
					Change your password here.
				</TabsContent>
			</Tabs>
		</main>

		<footer>
			<div class="flex items-center gap-4">
				<div v-for="(item, index) in 3" :key="index" class="w-full h-[260px] bg-neutral-200"></div>
			</div>
			<!-- I will have 3 different cards -->
		</footer>
	</div>


</template>