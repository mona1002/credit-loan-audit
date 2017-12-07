<!-- 电话征信 - 住址电话 历史 -->
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
          {{mobileData.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        {{mobileData.phoneTypeDes}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{mobileData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{mobileData.sourceDes}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{mobileData.answerDes}}
      </el-form-item>
      <el-form-item label="调查情况:" class="item-column3">
        {{mobileData.checkStageDes}}
      </el-form-item>
      <!-- v-show=source=='02' -->
      <el-form-item label="其它来源情况说明:" class="item-column3">
        {{mobileData.sourceDesc}}
      </el-form-item>
      <div class="address-title">
        录入住址电话调查信息
      </div>
      <el-form-item label="第三方查询结果" clss="item-column1">
        {{mobileData.thirdResult}}
      </el-form-item>
      <el-form-item label="三方查询是否异常:" class="item-column2">
        {{mobileData.threeQueriesdes}}
      </el-form-item>
      <!-- v-show="mobileData.threeQueries=='1'" -->
      <el-form-item label="异常说明:" class="item-column2" >
        {{mobileData.exceptionState}}
      </el-form-item>
      <!-- 是否与家庭联系人为同一接听人 -->
      <el-form-item label="是否为同一接听人:" class="item-column2">
        {{mobileData.issameFamDes}}
      </el-form-item>
      <!-- v-show="mobileData.issameFam=='0'" -->
      <el-form-item label="-" class="item-column2" >
        {{mobileData.issameFamtxt}}
      </el-form-item>
      <el-form-item label="与借款人关系:" class="item-column1">
        {{mobileData.relBorrowerDes}}
      </el-form-item>
      <!-- v-show="mobileData.relBorrower=='03'" -->
      <el-form-item label="-" class="item-column1" >
        {{mobileData.relBorrowertxt}}
      </el-form-item>
      <el-form-item label="核对工作情况:" class="item-column2">
        {{mobileData.checkWorkDes}}
      </el-form-item>
      <!-- v-show="mobileData.checkWork=='01'" -->
      <el-form-item label="-:" class="item-column2">
        {{mobileData.checkWorktxt}}
      </el-form-item>
      <el-form-item label="核对婚姻情况:" class="item-column2">
        {{mobileData.maritalStatusDes}}
      </el-form-item>
      <el-form-item label="核对子女情况:" class="item-column2">
        {{mobileData.maritalStatustxtDes}}
      </el-form-item>
      <el-form-item label="核对地址:" class="item-column2">
        {{mobileData.checkAddrtxt}}
      </el-form-item>
      <!-- v-show="mobileData.checkAddr=='01'" -->
      <el-form-item label="-:" class="item-column2">
        {{mobileData.checkAddrtxt}}
      </el-form-item>
      <el-form-item label="核对房产:" class="item-column2">
        {{mobileData.checkEstatetxt}}
      </el-form-item>
      <!-- v-show="mobileData.checkEstate=='00'" -->
      <el-form-item label="-" class="item-column2">
        {{mobileData.checkEstatetxt}}
      </el-form-item>
      <el-form-item label="其他收入:" class="item-column2">
        {{mobileData.otherIncomeDes}}
      </el-form-item>
      <!-- v-show="mobileData.otherIncome=='00'" -->
      <el-form-item label="-" class="item-column2">
        {{mobileData.otherIncometxt}}
      </el-form-item>
      <el-form-item label="近期大项开销:" class="item-column2">
        {{mobileData.recentLargespendDes}}
      </el-form-item>
      <!-- v-show="mobileData.recentLargespend=='00'" -->
      <el-form-item label="-" class="item-column2">
        {{mobileData.recentlArgespendInfo}}
      </el-form-item>
      <el-form-item label="父母:" class="item-column2">
        {{mobileData.parentsDes}}
      </el-form-item>
      <!-- v-show="mobileData.parents=='01'" -->
      <el-form-item label="-" class="item-column2">
        {{mobileData.parentsInfo}}
      </el-form-item>
      <el-form-item label="兄弟姐妹:" class="item-column2">
        {{mobileData.brotherDes}}
      </el-form-item>
      <!-- v-show="mobileData.brother=='00'" -->
      <el-form-item label="-" class="item-column2">
        {{mobileData.brothertxt}}
      </el-form-item>
      <el-form-item label="支付家庭生活费用:" class="item-column2">
        {{mobileData.expensesDes}}
      </el-form-item>
      <!-- v-show="mobileData.expenses=='00'" -->
      <el-form-item label="-" class="item-column2">
        {{mobileData.expensestxt}}
      </el-form-item>
      <el-form-item label="核对家庭固话:" class="item-column2">
        {{mobileData.checkHometelDes}}
      </el-form-item>
      <!-- v-show="mobileData.checkHometel=='01'" -->
      <el-form-item label="-" class="item-column2" >
        {{mobileData.checkHometeltxt}}
      </el-form-item>
      <el-form-item label="借款人爱好和品行:" class="item-column1">
        {{mobileData.hobbyandBehave}}
      </el-form-item>
      <el-form-item label="调查结论:" class="item-column1">
        {{mobileData.conclusion}}
      </el-form-item>
    </el-form>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      // id:'',  // 住宅电话调查日志记录 id
      // phoneType:'', // 电话类型
      mobileData:'', // 请求返回的数据
      // queryHis:'' // 监听对象
    }
  },
  // mounted() {
  //   console.log('id='+this.id);
  //   // console.log('phoneType='+this.phoneType);
  //   // 测试数据
  //   // this.id = '07a3c0ac-68f1-4400-9090-3144aff68015'
  //   // this.queryHomeTel();
  //   console.log(this.mobileData);
  // },
  props:['mobileData']
//   props:['id','phoneType','queryHis'],
//   methods: {
//     queryHomeTel(){
//       this.post('creTelResearchHis/queryHomeTel',{
//         id:this.id,
//         phoneType:this.phoneType
//       }).then( res => {
//         console.log(res);
//         this.mobileData = res.data;
//       })
//     }
//   },
//   watch:{
//     queryHis:function(){
//       console.log('id====='+this.id);
//     console.log('phoneType='+this.phoneType);
//       if(this.queryHis){
//         this.queryHomeTel();
//       }
//     }
//   }
}

 </script>
