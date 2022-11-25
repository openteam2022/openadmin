<template>
    <div class="charts">
        <div class="charts-left">
            <div class="charts-left-wrapper">
                <div class="charts-left-wrapper-title">
                    数据概览
                </div>
                <div class="charts-left-wrapper-content">
                    <div class="clwc-charts" ref="charts">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="charts-right">
            <div class="charts-right-wrapper">
                <div class="charts-right-wrapper-title">
                    效果报告
                </div>
                <div class="charts-right-wrapper-content">
                    <div class="crwc-charts" ref="data"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref,onMounted } from 'vue'
    import type{ Ref } from 'vue'
    import * as echarts from 'echarts';
    const charts = ref(null)
    const data = ref(null)
    onMounted(()=>{
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(charts.value);
        const option = {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        // 绘制图表
        myChart.setOption(option);

        // 基于准备好的dom，初始化echarts实例
        var dataChart = echarts.init(data.value);
        const dataOption = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ]
            }
          ]
        };
        dataChart.setOption(dataOption)
    })

</script>

<style scoped>
    .charts{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }
    .charts-left{
        width: 75%;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .charts-left-wrapper,.charts-right-wrapper{
        background: var(--bg-color-white);
        border-radius: 4px;
    }
    .charts-right{
        width: 25%;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .charts-left-wrapper-title,.charts-right-wrapper-title{
        font-size: 0.85rem;
        color: var(--font-color-deep);
        box-sizing: border-box;
        padding: 12px;
        border-bottom: 1px var(--border-color) solid;
    }
    .charts-left-wrapper-content,.charts-right-wrapper-content{
        padding: 12px;
    }
    .clwc-charts{
        width: 100%;
        height: 400px;
        box-sizing: border-box;
        padding: 20px 0;
    }
    .crwc-charts{
        width: 100%;
        height: 400px;
        box-sizing: border-box;
        padding: 40px 0;
    }
     @media (max-width: 959px){
        .charts-left{
            width: 100%;
            margin-bottom: 12px;
        }
        .charts-right{
            width: 100%;
            margin-bottom: 12px;
        }
    }
</style>