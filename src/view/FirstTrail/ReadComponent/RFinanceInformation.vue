<!-- 账务信息  -->
<template>
  <div class="common_component_height">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="账务信息" name="1">
        <template slot="title">
       <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账务信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="FinanceInf" style="width: 100%"  highlight-current-row border >
            <el-table-column type="index" :index="1" label="序号" min-width="50">
            </el-table-column>
            <el-table-column label="进件编号" prop="applySubNo" min-width="160">
            </el-table-column>
            <el-table-column prop="custName" label="客户姓名" min-width="100">
            </el-table-column>
            <el-table-column prop="proName" label="产品名称" min-width="100">
            </el-table-column>
            <el-table-column prop="loanDate" label="放款日期" min-width="140">
            </el-table-column>
            <el-table-column prop="loanReceiptPayAmt" label="放款金额[元]" min-width="120">
            </el-table-column>
            <el-table-column prop="loanTerm" label="借款期限[月]" min-width="120">
            </el-table-column>
            <el-table-column prop="eachTermAmt" label="每期还款额[元]" min-width="120">
            </el-table-column>
            <el-table-column prop="returnedTerm" label="已还期数" show-overflow-tooltip min-width="100">
            </el-table-column>
            <el-table-column prop="accountStateTxt" label="账户状态" min-width="100">
            </el-table-column>
            <el-table-column prop="overDueDayNum" label="当前逾期天数" min-width="120">
            </el-table-column>
            <el-table-column prop="currArrTerm" label="当前拖欠期数" min-width="120">
            </el-table-column>
            <el-table-column prop="arrTermSum" label="累计拖欠期数" min-width="120">
            </el-table-column>
            <el-table-column prop="maxArrTerm" label="最高拖欠期数" min-width="120">
            </el-table-column>
            <el-table-column prop="payOffFlagTxt" label="结清标志" min-width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        FinanceInf: [],
        MatchInf: '',
        judgeFlag: '',
        activeNames: ['1'],
        loanReceiptPayAmt: '',
      }
    },
    mounted() {
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag"))
      if (this.MatchFlag.MatchFlag == 'internal') {
        this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //初审-匹配查看
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.MatchInf = JSON.parse(localStorage.getItem("Query")) //综合查询
      } else if (this.MatchFlag.MatchFlag == 'QT') {
        this.MatchInf = JSON.parse(localStorage.getItem("QT")) //质检
      }
      this.post("/creAccountInfo/getAccountByApplyId", {
        applyId: this.MatchInf.matchApplyId,
      }).then(res => {
        if (res.statusCode == 200) {
          this.FinanceInf = res.data;
          if (this.FinanceInf) {
            var reg = /\./g;
            for (var i = 0; i < this.FinanceInf.length; i++) {
              if (reg.test(this.FinanceInf[i].loanReceiptPayAmt)) {
                this.FinanceInf[i].loanReceiptPayAmt = Number(this.FinanceInf[i].loanReceiptPayAmt).toLocaleString(); //放款金额
              } else {
                this.FinanceInf[i].loanReceiptPayAmt = Number(this.FinanceInf[i].loanReceiptPayAmt).toLocaleString() +
                  '.00'; //放款金额
              };
              if (reg.test(this.FinanceInf[i].eachTermAmt)) {
                this.FinanceInf[i].eachTermAmt = Number(this.FinanceInf[i].eachTermAmt).toLocaleString(); //放款金额
              } else {
                this.FinanceInf[i].eachTermAmt = Number(this.FinanceInf[i].eachTermAmt).toLocaleString() + '.00';
              }
            }
          }
        }
      });
    },
  }
</script>
