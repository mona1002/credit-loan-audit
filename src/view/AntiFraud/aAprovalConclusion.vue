<template>
  <div date="ApprovalConclusion">
    <!-- 信审审批结论轨迹=========================默认显示1-条？分页？ -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="incom" label="核实收入[元]" width="180">
      </el-table-column>
      <el-table-column prop="productName" label="批准产品" width="180">
      </el-table-column>
      <el-table-column prop="num" label="批准金额[元]">
      </el-table-column>
      <el-table-column prop="date" label="批准期限[月]">
      </el-table-column>
      <el-table-column prop="multiple" label="审批倍数">
      </el-table-column>
      <el-table-column prop="payBack" label="每月还款额[元]">
      </el-table-column>
      <el-table-column prop="loan" label="内部负债率">
      </el-table-column>
      <el-table-column prop="creditLoan" label="信用总负债率">
      </el-table-column>
      <el-table-column prop="sunLoan" label="总负债率">
      </el-table-column>
      <el-table-column prop="result" label="审批结论">
      </el-table-column>
      <el-table-column prop="rdate" label="审批时间">
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
