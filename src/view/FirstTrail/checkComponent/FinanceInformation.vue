<template>
  <div class="FinanceInformation">
    <!-- 账务信息 -->
    <el-table :data="FinanceInf" style="width: 100%">
      <el-table-column prop="fhReceiptNo" label="单据编号" >
      </el-table-column>
      <el-table-column prop="loanAcNo" label="借款账号" >
      </el-table-column>
      <el-table-column prop="custName" label="客户姓名" width="100">
      </el-table-column>
      <el-table-column prop="certCode" label="证件号码" width="180">
      </el-table-column>
      <el-table-column prop="proName" label="产品名称">
      </el-table-column>
      <el-table-column prop="preLoanDate" label="预放款日期">
      </el-table-column>
      <el-table-column prop="loanDate" label="放款日期">
      </el-table-column>
      <el-table-column prop="loanReceiptPayAmt" label="放款金额">
      </el-table-column>
      <el-table-column prop="bankCityCode" label="开户行所在城市代码" width="150">
      </el-table-column>
      <el-table-column prop="bankCityCode" label="开户行代码">
      </el-table-column>
      <el-table-column prop="bankCityCode" label="开户行名称">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        FinanceInf:[],
      }
    },
    mounted(){
         this.post("/creAccountInfo/getAccountInfo", {
        applyId: "24667563-2ca2-4da6-8e02-4bf7d7c839b6",
      }).then(res => {
        console.log(res);
        // console.log(res.data)
        this.FinanceInf=res.data
      });
    }
  }

</script>

<style scoped>


</style>
