<template>
  <div class="data-container">
    <div class="content">
      <template v-for="item in questionnaire.answer">
        <p style="margin-bottom:1rem;font-size:2rem;font-weight:bold;margin-left:7rem">{{item.type}}</p>
        <div class="content-item" v-for="sitem in item.content">
          <div class="item-left">
            <p>{{sitem.tittle}}</p>
          </div>
          <div class="item-right">
            <span>选择：{{sitem[1]}}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>

export default ({
  name:'person',
  data() {
    return {
      questionnaire: this.$route.params.questionnaire,
    }
  },
  mounted(){
    console.log(this.questionnaire,'11')
  }
})
</script>

<style lang="scss" scoped>
@import '../../../style/qperson';
</style>
