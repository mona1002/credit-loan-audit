<template>
  <div class="ApprovalConclusion">
    <!-- 审批 结论轨迹=========================默认显示1-条？分页？ -->
    <el-table :data="ConclutionInf" border>
      <el-table-column prop="verIncome" label="核实收入[元]" min-width="35" align="right">
      </el-table-column>
      <el-table-column prop="proCode" label="批准产品" min-width="30">
      </el-table-column>
      <el-table-column prop="ploanAmt" label="批准金额[元]" min-width="38" align="right">
      </el-table-column>
      <el-table-column prop="ploanTerm" label="批准期限[月]"min-width="38">
      </el-table-column>
      <el-table-column prop="appmult" label="审批倍数" min-width="30">
      </el-table-column>
      <el-table-column prop="eachTermamt" label="每月还款额[元]" min-width="45" align="right">
      </el-table-column>
      <el-table-column prop="inteDebitrate" label="内部负债率" min-width="35">
      </el-table-column>
      <el-table-column prop="creditDebitRate" label="信用总负债率" min-width="40">
      </el-table-column>
      <el-table-column prop="totalRate" label="总负债率" min-width="30">
      </el-table-column>
      <el-table-column prop="applyConclusion" label="审批结论" min-width="30">
      </el-table-column>
      <el-table-column prop="auditDate" label="审批时间" min-width="40">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ConclutionInf:[],
      }
    },
    mounted() {
      // this.localInf = JSON.parse(localStorage.getItem("taskInWaitting"))


  this.post("/creauditOpinion/queryByPage", {
        // applyId:"62fecf51-4839-4639-afe0-9b7cde722a5e",
        applyId:"00542",
      }).then(res => {
        console.log(res.data)
        this.ConclutionInf=res.data.recordList;
      });
    },
  }

</script>
<style scoped>
.ApprovalConclusion{
  min-width: 987px;
}

</style>
