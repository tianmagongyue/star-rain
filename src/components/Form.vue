<template>
  <div class="table">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="type"
      label="类别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="分数">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

export default {
  name: 'Form',
  props: {
    questionnaire:Object,
  },
  data () {
    return {
      a:1,
      tableData: [],
    }
  },
  methods: {
    getTableData() {
      console.log(this.questionnaire,'jieshu')
      let answerdata = this.questionnaire;
      answerdata.answer.forEach(e => {
        let item = {};
        item['date'] = answerdata['date'];
        item['type'] = e['type'];
        item['grade'] = e['grade'] + '分';
        this.tableData.push(item);
      })
    }
  },
  mounted(){
    this.getTableData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
