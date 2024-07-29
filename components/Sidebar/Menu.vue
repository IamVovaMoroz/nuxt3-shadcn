<script setup>

const items = ref([
	{
		title: "Overview",
		path: '/',
		icon: 'tdesign:dashboard-1'

	},
	{
		title: "Transactions",
		path: '/transactions',
		icon: 'tdesign:undertake-transaction'
	},
	{
		title: "Account",
		path: '/account',
		icon: 'ri:account-circle-line'
	},
	{
		title: "Contacts",
		path: '/contacts',
		icon: 'fluent-mdl2:connect-contacts'
	},
	{
		title: "Settings",
		path: '/settings',
		icon: 'clarity:settings-line'
	}
])
</script>

<template>

	<div>
		<header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
			<Logo />
			<p class="font-bold text-black">Nuxt-Finance</p>
		</header>
		<div class="px-4 grow">
			<div class="grid gap-2">
				<NuxtLink :href="item.path" v-for="(item, index) in items" v-bind:key="index" class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100">
					<Icon size="20px" v-bind:name="item.icon" color="black"/>
					<span>{{ item.title }}</span>
				</NuxtLink>
			</div>
		</div>
	</div>

</template>
<!-- 
<script setup>
import { ref } from 'vue';

const items = ref([
  {
    title: "Overview",
    path: '/overview',
    icon: 'tdesign:dashboard-1'
  },
  {
    title: "Transactions",
    path: '/transactions',
    // icon: 'tdesign:transactions' // Added an icon
  },
  {
    title: "Account",
    path: '/account',
    // icon: 'tdesign:account' // Added an icon
  },
  {
    title: "Contacts",
    path: '/contacts',
    // icon: 'tdesign:contacts' // Added an icon
  },
  {
    title: "Settings",
    path: '/settings',
    // icon: 'tdesign:settings' // Added an icon
  }
]);
</script>

<template>
  <div>
    <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
      <Logo />
      <p class="font-bold">Nuxt-Finance</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <Icon
            size="20px"
            :name="item.icon || 'tdesign:default-icon'"
            color="black"
          />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template> -->
