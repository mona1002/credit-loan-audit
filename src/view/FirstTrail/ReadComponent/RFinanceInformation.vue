<template>
  <div class="FinanceInformation">
    <!-- 账务信息 -->
    <el-table :data="FinanceInf" border height="790">
      <el-table-column prop="fhReceiptNo" label="单据编号" min-width="120">
      </el-table-column>
      <el-table-column prop="loanAcNo" label="借款账号" min-width="130">
      </el-table-column>
      <el-table-column prop="custName" label="客户姓名" min-width="80">
      </el-table-column>
      <el-table-column prop="certCode" label="证件号码" min-width="160">
      </el-table-column>
      <el-table-column prop="proName" label="产品名称" min-width="80">
      </el-table-column>
      <el-table-column prop="preLoanDate" label="预放款日期" min-width="120" align="center">
      </el-table-column>
      <el-table-column prop="loanDate" label="放款日期" min-width="120" align="center">
      </el-table-column>
      <el-table-column prop="loanReceiptPayAmt" label="放款金额" min-width="80" align="right">
      </el-table-column>
      <el-table-column prop="bankCityCode" label="开户行所在城市代码" min-width="140">
      </el-table-column>
      <el-table-column prop="bankCityCode" label="开户行代码" min-width="90">
      </el-table-column>
      <el-table-column prop="bankCityCode" label="开户行名称" min-width="90">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        FinanceInf: [],
        MatchInf: '',
        judgeFlag: ''
      }
    },
    mounted() {
      this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //初审-匹配查看
      // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      // if (this.judgeFlag.flag == '01') {
      //  this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //初审-匹配查看
      // } else if (this.judgeFlag.flag == '02') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("FinalinternalObj")); //终审-匹配查看
      // } else if (this.judgeFlag.flag == '02') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiinternalObj")); //反欺诈专员-匹配查看
      // } else if (this.judgeFlag.flag == '02') {
      //   this.MatchInf = JSON.parse(localStorage.getItem("AntiManagerinternalObj")); //反欺诈主管-匹配查看
      // }
      this.post("/creAccountInf·o/getAccountInfo", {
        applyId: this.MatchInf.matchApplyId,
        // applyId: "24667563-2ca2-4da6-8e02-4bf7d7c839b6",
      }).then(res => {
        if (res.statusCode == 200) {
          this.FinanceInf = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }

</script>

<style scoped>
  .FinanceInformation {
    /* overflow: hidden; */
    height: 100%;
    /* background: #000; */
  }

</style>
