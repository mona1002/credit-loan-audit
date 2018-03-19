<template>
  <div class="ApprovalConclusion">
    <!-- 信审审批结论轨迹====反欺诈分屏 -->
    <!-- 信审审批结论轨迹 -->
    <el-table :data="ConclutionInf" border>
      <el-table-column prop="verIncome" label="核实收入[元]" min-width="35" align="right">
      </el-table-column>
      <el-table-column prop="proCode" label="批准产品" min-width="30"  align="center">
      </el-table-column>
      <el-table-column prop="ploanAmt" label="批准金额[元]" min-width="38" align="right">
      </el-table-column>
      <el-table-column prop="ploanTerm" label="批准期限[月]" min-width="38"  align="right">
      </el-table-column>
      <el-table-column prop="appmult" label="审批倍数" min-width="30" align="right">
      </el-table-column>
      <el-table-column prop="eachTermamt" label="每月还款额[元]" min-width="45" align="right">
      </el-table-column>
      <el-table-column prop="inteDebitrate" label="内部负债率" min-width="35" align="right">
      </el-table-column>
      <el-table-column prop="creditDebitRate" label="信用总负债率" min-width="40" align="right">
      </el-table-column>
      <el-table-column prop="totalRate" label="总负债率" min-width="30" align="right">
      </el-table-column>
      <el-table-column prop="applyConclusion" label="审批结论" min-width="30" align="center">
      </el-table-column>
      <el-table-column prop="auditDate" label="审批时间" min-width="40"  align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tastwaitingPass: [],
        ConclutionInf: [],
      }
    },
    mounted() {
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '03') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("AntitaskInWaitting")); //反欺诈专员-列表
      } else if (this.judgeFlag.flag == '04') {
        this.tastwaitingPass = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")); //反欺诈主管-列表
      }
      this.post("/creauditOpinion/queryByPage", {
        applyId: this.tastwaitingPass.applyId,
      }).then(res => {
        if (res.statusCode == 200) {
          this.ConclutionInf = res.data.recordList;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
  }

</script>
<style scoped>
  .ApprovalConclusion {
    min-width: 987px;
  }

</style>
