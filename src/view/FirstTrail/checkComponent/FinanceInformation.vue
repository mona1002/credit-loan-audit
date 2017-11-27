<template>
  <div id="FinanceInformation">
    <!-- 财务信息 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="num" label="单据编号" width="180">
      </el-table-column>
      <el-table-column prop="account" label="借款账号" width="180">
      </el-table-column>
      <el-table-column prop="userName" label="客户姓名">
      </el-table-column>
      <el-table-column prop="id" label="证件号码">
      </el-table-column>
      <el-table-column prop="productName" label="产品名称">
      </el-table-column>
      <el-table-column prop="preLoanD" label="预放款日期">
      </el-table-column>
      <el-table-column prop="loanD" label="放款日期">
      </el-table-column>
      <el-table-column prop="sum" label="放款金额">
      </el-table-column>
      <el-table-column prop="city" label="开户行所在城市代码">
      </el-table-column>
      <el-table-column prop="bank" label="开户行代码">
      </el-table-column>
      <el-table-column prop="bankName" label="开户行名称">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          num: '86575765',
          account: '564346',
          userName: 'nick',
          id:"08e88893798233423",
          productName:'NuoYuan',
          preLoanD:'2091',
          loanD:'2014',
          sum:'375056',
          city:'航海',
          bank:'code工行',
          bankName:'工行',
        }]
      }
    },
    mounted(){
    //      this.post("/productArchive/getProductArchiveChildList", {
    //     applyId: "e0b51098-b24d-4211-8ae4-f08f657d7886",
    //     pid: "9c3a2556-4111-42c4-aa78-0034866cf041"
    //   }).then(res => {
    //     console.log(res);
    //     // console.log(res.data)
    //     // this.ListParent=res.data
    //   });
    }
  }

</script>

<style scope>


</style>
