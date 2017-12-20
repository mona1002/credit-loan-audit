<!-- 电话征信 - 家庭联系人 历史 -->
<template>
  <div>
    <el-form ref="form" label-width="150px">
      <!--       <div class="address-title">
        新增调查日志
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">新增调查日志</span>
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        {{familyData.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        {{familyData.phoneTypeDes}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{familyData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{familyData.sourceDes}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{familyData.answerDes}}
      </el-form-item>
      <el-form-item label="调查情况:" class="item-column3">
        {{familyData.checkStageDes}}
      </el-form-item>
      <el-form-item label="其他来源说明:" class="item-column3" v-show="familyData.source=='02'">
        {{familyData.sourceDesc}}
      </el-form-item>
      <!-- <div class="address-title">
        录入家庭联系人电话调查信息
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">录入家庭联系人电话调查信息</span>
      </div>
      <div style="padding-left:30px;">
        <el-form-item label="第三方查询信息" class="item-column1">
          {{familyData.thirdResult}}
        </el-form-item>
        <el-form-item label="三方查询是否异常:" class="item-column2">
          {{familyData.threeQueriesDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="familyData.threeQueries=='1'">
          {{familyData.threeQueriestxt}}
        </el-form-item>
        <el-form-item label="微信/支付宝是否异常:" class="item-column2">
          {{familyData.mobilepaymentDes}}
        </el-form-item>
        <el-form-item label="异常项说明:" class="item-column2" v-show="familyData.mobilepayment=='1'">
          {{familyData.mobilepaymenttxt}}
        </el-form-item>
        <!-- 是否与家庭联系人为同一接听人 -->
        <el-form-item label="是否与家庭联系人为同一接听人:" class="item-column2 line2-class">
          {{familyData.issameFamDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="familyData.issameFam=='0'">
          {{familyData.issameFamtxt}}
        </el-form-item>
        <el-form-item label="与借款人关系:" class="item-column2">
          {{familyData.relBorrowerDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="familyData.relBorrower=='03'">
          {{familyData.relBorrowertxt}}
        </el-form-item>
        <el-form-item label="核对工作情况:" class="item-column2">
          {{familyData.checkWorkDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="familyData.checkWork=='01'">
          {{familyData.checkWorktxt}}
        </el-form-item>
        <el-form-item label="核对婚姻情况:" class="item-column2">
          {{familyData.maritalStatusDes}}
        </el-form-item>
        <el-form-item label="核对子女情况:" class="item-column2">
          {{familyData.maritalStatustxtDes}}
        </el-form-item>
        <el-form-item label="核实居住地址:" class="item-column2">
          {{familyData.checkAddrDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="familyData.checkAddr=='01'">
          {{familyData.checkAddrtxt}}
        </el-form-item>
        <el-form-item label="核对房产:" class="item-column2">
          {{familyData.checkEstateDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="familyData.checkEstate=='00'">
          {{familyData.checkEstatetxt}}
        </el-form-item>
        <el-form-item label="其他收入:" class="item-column2">
          {{familyData.otherIncomeDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="familyData.otherIncome=='00'">
          {{familyData.otherIncometxt}}
        </el-form-item>
        <el-form-item label="调查结果:" class="item-column1">
          {{familyData.conclusion}}
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // id:'',  // 住宅电话调查日志记录 id
      // phoneType:'', // 电话类型
      familyData: '' // 请求返回的数据
    }
  },
  props: ['familyData', 'isFull'],
  // mounted() {
  //   this.queryTelfContract();
  // },
  // methods: {
  //   queryTelfContract(){
  //     this.post('/creTelResearchHis/queryTelfContract',{
  //       id:this.id,
  //       phoneType:this.phoneType
  //     }).then( res => {
  //       console.log(res);
  //       this.mobileData = res.data;
  //     })
  //   }
  // }
  mounted() {
    if (this.isFull == true) { // 全屏
      console.log('全屏');
      $(".textarea-class").css("minWidth", "500px")
    } else if (this.isFull == false) { // 分屏
      console.log("分屏");
      $(".textarea-class").css("minWidth", "300px")
    }
  },
  watch: {
    // 判断全屏 , 更改样式
    isFull: function(val) {
      if (val == true) { // 全屏
        console.log('全屏');
        $(".textarea-class").css("minWidth", "500px")
      } else if (val == false) { // 分屏
        console.log("分屏");
        $(".textarea-class").css("minWidth", "300px")

      }
    }
  }
}

</script>
