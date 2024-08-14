<script setup>
import { ref, onMounted, resolveComponent } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const loading = ref(false);

const TabsToday = resolveComponent('TabsToday');

const list = [
  {
    title: 'Today',
    component: TabsToday,
  },
  {
    title: 'Week',
    component: '<div>Week</div>',
  },
  {
    title: 'Month',
    component: '<div>Month</div>',
  },
  {
    title: 'Year',
    component: '<div>Year</div>',
  },
];

let data = ref([
  16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8,
]);

let categories = ref({
  today: [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ],
  week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
});

let currentCategory = ref('today');

const options = ref({
  chart: {
    type: 'line',
    animation: {
      enable: false,
    },
  },
  legend: { enable: false },
  title: {
    text: '',
  },
  xAxis: {
    gridLineColor: 'transparent',
    categories: categories.value[currentCategory.value],
  },
  yAxis: {
    gridLineColor: 'transparent',
    title: {
      text: '',
    },
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: 'line',
      lineWidth: '4px',
      color: {
        linearGradient: {},
        stops: [
          [0, 'rgba(9252, 176, 69, 1)'],
          [0.33, 'rgba(253, 29, 29, 1)'],
          [0.66, 'rgba(131, 58, 180, 1)'],
          [1, 'rgba(29, 217, 83, 1)'],
        ],
      },
      data: data.value,
    },
  ],
});

const setCategory = (e) => {
  const v = e.target.innerText.toLowerCase();
  currentCategory.value = v;
  data.value = generateRandomData(categories.value[v].length);
  options.value.series[0].data = data.value;
  options.value.xAxis.categories = categories.value[v];
};

function generateRandomData(numPoints = 12, min = -10, max = 40) {
  const newData = [];
  for (let i = 0; i < numPoints; i++) {
    newData.push(Math.random() * (max - min) + min);
  }
  return newData;
}

onMounted(() => {
  data.value = generateRandomData();
  options.value.series[0].data = data.value;
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
          <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>

        <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
          <highchart :options="options" />
        </TabsContent>
      </Tabs>
    </main>

    <footer>
      <div class="flex items-center gap-4">
        <div v-for="(item, index) in 3" :key="index" class="w-full h-[260px] bg-neutral-200"></div>
      </div>
    </footer>
  </div>
</template>
