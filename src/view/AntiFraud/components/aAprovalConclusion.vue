<template>
  <div class="ApprovalConclusion">
    <!-- 信审审批结论轨迹 -->
    <el-table :data="ConclutionInf" border>
      <el-table-column prop="verIncome" label="核实收入[元]" min-width="100">
      </el-table-column>
      <el-table-column prop="proName" label="批准产品" min-width="80">
      </el-table-column>
      <el-table-column prop="ploanAmt" label="批准金额[元]" min-width="100">
      </el-table-column>
      <el-table-column prop="ploanTerm" label="批准期限[月]" min-width="100">
      </el-table-column>
      <el-table-column prop="appmult" label="审批倍数" min-width="80">
      </el-table-column>
      <el-table-column prop="eachTermamt" label="每月还款额[元]" min-width="110">
      </el-table-column>
      <el-table-column prop="inteDebitrate" label="内部负债率" min-width="90">
      </el-table-column>
      <el-table-column prop="creditDebitRate" label="信用总负债率" min-width="100">
      </el-table-column>
      <el-table-column prop="totalRate" label="总负债率" min-width="80">
      </el-table-column>
      <el-table-column prop="appConclusion" label="审批结论" min-width="80">
      </el-table-column>
      <el-table-column prop="auditDate" label="审批时间" min-width="160">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // tastwaitingPass: [],
        ConclutionInf: [],
      }
    },
    props: {
      applyId: {
        default: '',
        type: String,
        required: true
      }
    },
    mounted() {
      // this.tastwaitingPass = JSON.parse(localStorage.getItem("AntitaskInWaitting")); //反欺诈专员+主管
      this.post("/creauditOpinion/queryByPage", {
        // applyId: this.tastwaitingPass.applyId,
        applyId: this.applyId,
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
