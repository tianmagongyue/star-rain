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
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            grade: '4分'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            grade: '4分'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            grade: '4分'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            grade: '4分'
          }]
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
