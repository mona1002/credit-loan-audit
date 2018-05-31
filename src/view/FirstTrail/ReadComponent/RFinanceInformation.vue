<!-- 账务信息 -->
<template>
  <div class="FinanceInformation">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="账务信息" name="1">
        <template slot="title">
            <div class="left">
                <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
                <span class="headFont">账务信息</span>
              </div>
            </template>
        <div class="containDiv">
            <el-table
              :data="FinanceInf"
              style="width: 100%"
              height="744"
              highlight-current-row
              border
              @current-change="handleCurrentChange">
                <el-table-column
                  type="index"
                  :index="1"
                  label="序号" 
                  min-width="50"
                  >
                </el-table-column>
                <el-table-column
                  label="进件编号" 
                  prop="applySubNo"
                  min-width="160">
                </el-table-column>
                <el-table-column
                  prop="custName"
                  label="客户姓名"
                  min-width="100">
                </el-table-column>
                <el-table-column
                  prop="proName" 
                  label="产品名称"
                  min-width="100">
                </el-table-column>
                <el-table-column
                  prop="loanDate"
                  label="放款日期"
                  min-width="140">
                </el-table-column>
                <el-table-column
                  prop="loanReceiptPayAmt"
                  label="放款金额[元]"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="loanTerm"
                  label="借款期限[月]"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="eachTermAmt"
                  label="每期还款额[元]"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="returnedTerm"
                  label="已还期数"
                  show-overflow-tooltip
                  min-width="100">
                </el-table-column>
                <el-table-column
                  prop="accountStateTxt"
                  label="账户状态"
                  min-width="100">
                </el-table-column>
                <el-table-column
                  prop="overDueDayNum"
                  label="当前逾期天数"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="currArrTerm"
                  label="当前拖欠期数"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="arrTermSum"
                  label="累计拖欠期数"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="maxArrTerm"
                  label="最高拖欠期数"
                  min-width="120">
                </el-table-column>
                <el-table-column
                  prop="payOffFlagTxt"
                  label="结清标志"
                  min-width="100">
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
        loanReceiptPayAmt:'',
      }
    },
    mounted() {
      this.MatchFlag = JSON.parse(localStorage.getItem("MatchFlag")) 
      if (this.MatchFlag.MatchFlag == 'internal') {
        this.MatchInf = JSON.parse(localStorage.getItem("internalObj")); //初审-匹配查看
      } else if (this.MatchFlag.MatchFlag == 'Query') {
        this.MatchInf = JSON.parse(localStorage.getItem("Query")) //初审-匹配查看
      }else if (this.MatchFlag.MatchFlag == 'QT') {
        this.MatchInf = JSON.parse(localStorage.getItem("QT")) //综合查询
      }
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
      this.post("/creAccountInfo/getAccountByApplyId", {
        //applyId: this.MatchInf.matchApplyId,
        applyId: "24667563-2ca2-4da6-8e02-4bf7d7c839b6",
      }).then(res => {
        if (res.statusCode == 200) {
          this.FinanceInf = res.data;
          if(this.FinanceInf){
            var reg=/\./g;
            for(var i=0;i<this.FinanceInf.length;i++){
              if(reg.test(this.FinanceInf[i].loanReceiptPayAmt)){
                this.FinanceInf[i].loanReceiptPayAmt = Number(this.FinanceInf[i].loanReceiptPayAmt).toLocaleString();//放款金额
              }else{
                this.FinanceInf[i].loanReceiptPayAmt = Number(this.FinanceInf[i].loanReceiptPayAmt).toLocaleString() + '.00';//放款金额
              };
              if(reg.test(this.FinanceInf[i].eachTermAmt)){
                this.FinanceInf[i].eachTermAmt = Number(this.FinanceInf[i].eachTermAmt).toLocaleString();//放款金额
              }else{
                this.FinanceInf[i].eachTermAmt = Number(this.FinanceInf[i].eachTermAmt).toLocaleString() + '.00';
              }
              
              
            }
            
          }
          
        } else {
          //this.$message.error(res.msg);
          this.$message({
            message:"该进件暂无账务信息数据！",
            type: 'error'
          })
        }
      });
    },
    methods:{
      handleCurrentChange(){

      },
    }
  }

</script>
<style type="text/css" scoped>
  .FinanceInformation{
    width: 100%;
    height: 100%;
    background-color: #fafbfc;
    font-size: 14px;
    min-width: 1750px;
    /* overflow: hidden; */
  }
  /* 折叠面板头部背景色 */
  .icon_hat{
    padding: 9px 10px 10px 13px;
    vertical-align: middle;
  }
  .headFont{
    font-size: 16px;
  }
</style>
