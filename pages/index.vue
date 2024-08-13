<script setup>

const loading = ref(false)

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const TabsToday = resolveComponent('TabsToday')

const list = [
	{
		"title": "Today",
		"component": TabsToday
	},
	{
		"title": "Week",
		"component": "<div>Week</div>"
	},
	{
		"title": "Mouth",
		"component": "<div>Mouth</div>"
	},
	{
		"title": "Year",
		"component": "<div>Year</div>"
	}

]

let data = ref([
	16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
	22.0, 17.8
])

let categories = ref({
	today: [
		"00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
		"07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
		"14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
		"21:00", "22:00", "23:00"
	],
	week: [
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	month: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
		"Oct", "Nov", "Dec"
	],
	year: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
		"Oct", "Nov", "Dec"
	]
});

let currentCategory = ref(['today'
	// 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	// 'Oct', 'Nov', 'Dec'
])

const options = {
	chart: {
		type: 'line',
		animation: {
			enable: false
		}
	},
	legend: { enable: false },
	title: {
		text: ''
	},

	xAxis: {
    gridLineColor: 'transparent',
    categories: categories.value[currentCategory.value]
  },
	yAxis: {
		gridLineColor: 'transparent',
		title: {
			text: ''
		}
	},
	plotOptions: {
		line: {
			marker: {
				enabled: false
			},
			dataLabels: {
				enabled: false
			},
			enableMouseTracking: true
		}
	},
	series: [{  //Data
		name: 'line',
		lineWidth: '4px',
		color: {
			linearGradient: {},
			// colors from 0 to 1 distance
			stops: [
				[0, 'rgba(9252, 176, 69, 1)'],
				[0.33, 'rgba(253, 29, 29, 1)'],
				[0.66, 'rgba(131, 58, 180, 1)'],
				[1, 'rgba(29, 217, 83, 1)']
			],

		},
		data: data.value
	}]
}

const setCategory = (e) => {
  const v = e.target.innerText.toLowerCase()
  currentCategory.value = v
  switch (v) {
    case 'today':
      data.value = generateRandomData(24)
      break
    case 'week':
      data.value = generateRandomData(7)
      break
    case 'month':
      data.value = generateRandomData(31)
      break
    case 'year':
      data.value = generateRandomData(365)
      break
    default:
      data.value = generateRandomData(24)
      break
  }
}

function generateRandomData(numPoints = 12, min = -10, max = 40) {
	const newData = [];
	for (let i = 0; i < numPoints; i++) {
		newData.push(Math.random() * (max - min) + min);
	}
	return newData;
}

onMounted(() => {
	data.value = generateRandomData();
	options.series[0].data = data.value;
});

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
			<Tabs default-value="Today">
				<TabsList class="max-w-[400px]" @click="setCategory">
					<TabsTrigger v-for="item, index in list" :key="index" :value="item.title">
						{{ item.title }}
					</TabsTrigger>
					<!-- <TabsTrigger value="today">
						Today
					</TabsTrigger>
					<TabsTrigger value="week">
						This week
					</TabsTrigger>
					<TabsTrigger value="month">
						This month
					</TabsTrigger>
					<TabsTrigger value="year">
						This year
					</TabsTrigger> -->
				</TabsList>

				<TabsContent v-for="item, index in list" :key="index" :value="item.title">
					<highchart :options="options" />

					<!-- <component :is="item.component"></component> -->
					<!-- {{ item.component }} -->
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