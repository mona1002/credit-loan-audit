<template>
  <div date="aAntiConclusionPath">
    <!-- 反欺诈审批结论轨迹=========================默认显示1-条？分页？ -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="incom" label="审批结果" width="180">
      </el-table-column>
      <el-table-column prop="productName" label="主原因" width="180">
      </el-table-column>
      <el-table-column prop="num" label="子原因">
      </el-table-column>
      <el-table-column prop="multiple" label="风险项">
      </el-table-column>
      <el-table-column prop="loan" label="审批描述">
      </el-table-column>
      <el-table-column prop="creditLoan" label="审批时间">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          incom: '86575765',
          productName: '564346',
          num: 'nick',
          date: "08e88893798233423",
          multiple: 'NuoYuan',
          payBack: '2091',
          loan: '2014',
          creditLoan: '375056',
          sunLoan: '航海',
          result: 'code工行',
          rdate: '工行',
        }]
      }
    },
    mounted() {

    },
  }

</script>
<style scoped>

</style>
