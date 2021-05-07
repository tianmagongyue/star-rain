<template>
  <div class="people">
    <ul v-if="plist.length == 0 ? false : true">
      <li></li>
      <li>姓名</li>
      <li>查看</li>
      <li>导出</li>
    </ul>
    <template v-for="item in plist">
      <ul>
        <li></li>
        <li>{{item.name}}</li>
        <li>
          <button @click="search(item)">查看详细信息</button>
        </li>
        <li>
          <button @click="judge(item)">导出数据</button>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import TestData from "../../../static/mock/data.json";
export default {
  name: 'qPeople',
  data () {
    return {
      plist:[],
    }
  },
  methods: {
    getTableData() {
      TestData.forEach(e => {
        this.plist.push({
          name:e.name,
          num:e.key
        })
      })  
    },
    judge(item) {
      let num = item.num;
      let questionlist = TestData;
      console.log(num,questionlist)
      for(let i=0; i< questionlist.length; i++){
        if(questionlist[i].key == num ){
          console.log('123')
          this.questionnaire = questionlist[i];
        }
      }
      let answerdata = {}
      answerdata['name'] = this.questionnaire['name'];
      answerdata['date'] = this.questionnaire['date'];
      answerdata['answer'] = [];
      this.questionnaire.answer.forEach(e => {
        let count = 0;
        e.content.forEach(item => {
          if(item[1] === '1'){
            count++;
          }else if(item[1] === '0.5') {
            count+=0.5;
          }
        })
        let item = {}
        item['type'] = e['type'];
        item['grade'] = count;
        answerdata['answer'].push(item);
      })
      console.log(answerdata)
      this.$router.push({name: 'answer', params: {num:num,questionnaire: answerdata}})
    },
    search(item){
      let num = item.num;
      let questionlist = TestData;
      console.log(num,questionlist)
      for(let i=0; i< questionlist.length; i++){
        if(questionlist[i].key == num ){
         
          this.questionnaire = questionlist[i]; console.log('123',this.questionnaire)
        }
      }
      this.$router.push({name: 'person', params: {num:num,questionnaire: this.questionnaire}})
    }
  },
  mounted(){
    this.getTableData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../style/qpeople';
</style>