<!-- <template>
    <div ref="chartDom" style="width: 100%; height: 400px;"></div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';

const chartDom = ref(null);

onMounted(() => {
    if (chartDom.value) {
        const myChart = echarts.init(chartDom.value);

        let base = +new Date(1968, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let date: string[] = []; // 明確指定 date 為字符串類型的數組
        let data = [Math.random() * 300];

        for (let i = 1; i < 20000; i++) {
            var now = new Date((base += oneDay));
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        const option: EChartsOption = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: 'Large Area Chart'
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 10
                },
                {
                    start: 0,
                    end: 10
                }
            ],
            series: [
                {
                    name: 'Fake Data',
                    type: 'line',
                    symbol: 'none',
                    sampling: 'lttb',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }
                        ])
                    },
                    data: data
                }
            ]
        };

        myChart.setOption(option);
    }
});
</script> -->
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
  
      let base = +new Date(1968, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let date: string[] = [];
      let data = [Math.random() * 300];
  
      for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }
  
      const option: EChartsOption = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: 'Large Area Chart'
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 10
                },
                {
                    start: 0,
                    end: 10
                }
            ],
            series: [
                {
                    name: 'Fake Data',
                    type: 'line',
                    symbol: 'none',
                    sampling: 'lttb',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }
                        ])
                    },
                    data: data
                }
            ]
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
  