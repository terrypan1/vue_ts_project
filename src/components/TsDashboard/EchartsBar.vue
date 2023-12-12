<template>
    <div ref="chartDom" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import * as echarts from 'echarts';
  import type { EChartsOption } from 'echarts';
  
  const chartDom = ref<HTMLDivElement | null>(null);
  let myChart: echarts.ECharts | null = null;
  
  const initChart = () => {
    if (chartDom.value) {
      myChart = echarts.init(chartDom.value);
      const option: EChartsOption = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      };
  
      myChart.setOption(option);
    }
  };
  
  const resizeChart = () => {
    if (myChart) {
      myChart.resize();
    }
  };
  
  onMounted(() => {
    initChart();
    window.addEventListener('resize', resizeChart);
  });
  
  onBeforeUnmount(() => {
    if (myChart != null) {
      myChart.dispose();
    }
    window.removeEventListener('resize', resizeChart);
  });
  </script>
  
  <style lang="scss">
  /* 您的自定義樣式可以放在這裡 */
  </style>
  