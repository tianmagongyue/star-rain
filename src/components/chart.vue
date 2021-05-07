<template>
  <div id="myChart" :style="{width: '800px', height: '300px',margin:'10px auto'}"></div>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    questionnaire:Object,
  },
  data () {
    return{
      a:1,
      xAxisData:[],
      seriesData:[]
    }
  },
  mounted(){
    console.log('执行了',this.xAxisData);
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
      let answer = this.questionnaire.answer;
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