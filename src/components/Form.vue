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
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getTableData() {
      let answerdata = this.$store.state.answerdata
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
