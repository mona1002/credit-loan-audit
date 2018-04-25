<template>
  <div class="ApprovalConclusion">
    <!-- 审批 结论轨迹=========================默认显示1-条？分页？ -->
    <el-table :data="ConclutionInf" border>
      <el-table-column prop="verIncome" label="核实收入[元]" min-width="35" align="right">
      </el-table-column>
      <el-table-column prop="proName" label="批准产品" min-width="30">
      </el-table-column>
      <el-table-column prop="ploanAmt" label="批准金额[元]" min-width="38" align="right">
      </el-table-column>
      <el-table-column prop="ploanTerm" label="批准期限[月]" min-width="38">
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
      <el-table-column prop="appConclusion" label="审批结论" min-width="30">
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
        ConclutionInf: [],
        MatchInf: '',
      }
    },
    mounted() {
        this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag")) //初审-匹配查看
      if (this.MatchFlag.MatchFlag == 'internal') {
        this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //初审-匹配查看
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.MatchInf = JSON.parse(localStorage.getItem("Query")) //初审-匹配查看
      }
      // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      // if (this.judgeFlag.flag == '01') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //初审-匹配查看
      // } else if (this.judgeFlag.flag == '02') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("FinalinternalObj")); //终审-匹配查看
      // }else if (this.judgeFlag.flag == '03') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiinternalObj")); //反欺诈专员-匹配查看
      // }else if (this.judgeFlag.flag == '04') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiManagerinternalObj")); //反欺诈主管-匹配查看
      // }
      this.post("/creauditOpinion/queryByPage", {
        applyId: this.MatchInf.matchApplyId,
        // applyId: "00542",
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
