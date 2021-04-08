<template>
  <div id="myChart" :style="{width: '1200px', height: '300px'}"></div>
</template>

<script>
export default {
  name: 'Chart',
  data () {
    return{
      xAxisData:[],
      seriesData:[]
    }
  },
  mounted(){
    this.getData();
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: this.xAxisData
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.seriesData,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        });
    },
    getData(){
      let answer = this.$store.state.answerdata.answer;
      answer.forEach(e => {
        this.xAxisData.push(e['type']);
        this.seriesData.push(e['grade']);
      })
    }
  }
}
</script>

<style scoped>

</style>