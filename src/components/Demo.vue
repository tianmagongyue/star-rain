<template>
  <div class="demo">
    <Form 
    :questionnaire="questionnaire"
    ></Form>
    <Chart 
    :questionnaire="questionnaire"
    ></Chart>
  </div>
</template>

<script>
import Chart from './chart.vue'
import Form from './Form.vue'
export default {
  components: { Chart, Form },
  name: 'Demo',
  data () {
    return {
      questionnaire:this.$route.params.questionnaire,
    }
  },
  methods:{
    getjson(){
      console.log(this.questionnaire,'结束')
    }
  },
  mounted(){
    this.getjson()
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/demo';
</style>