<!-- 电话征信 - 紧急联系人 历史 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="130px">
      <!--       <div class="address-title">
        新增调查日志
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">新增调查日志</span>
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        {{hurryData.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        {{hurryData.phoneType}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{hurryData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{hurryData.source}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{hurryData.answer}}
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        {{hurryData.checkStage}}
      </el-form-item>
      <el-form-item label="其他来源说明:" class="item-column2" v-show="hurryData.source=='02'">
        {{hurryData.sourceDesc}}
      </el-form-item>
      <!-- <div class="address-title">
        录入紧急联系人调查信息
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">录入紧急联系人调查信息</span>
      </div>
      <div style="padding-left:30px;">
        <el-form-item label="第三方查询信息:" class="item-column1">
          {{hurryData.thirdResult}}
        </el-form-item>
        <el-form-item label="三方查询是否异常:" class="item-column2">
          {{hurryData.threeQueriesDes}}
        </el-form-item>
        <el-form-item label="异常说明:" class="item-column2" v-show="hurryData.threeQueries=='1'">
          {{hurryData.threeQueriestxt}}
        </el-form-item>
        <el-form-item label="微信/支付宝是否异常:" class="item-column2 line2-class">
          {{hurryData.mobilepaymentDes}}
        </el-form-item>
        <el-form-item label="异常项说明:" class="item-column2" v-show="hurryData.mobilepayment=='1'">
          {{hurryData.mobilepaymenttxt}}
        </el-form-item>
        <el-form-item label="与借款人关系:" class="item-column2">
          {{hurryData.relBorrowerDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-shwo="relBorrower=='03'">
          {{hurryData.relBorrowertxt}}
        </el-form-item>
        <el-form-item label="与借款人联系是否频繁:" class="item-column1 line2-class">
          {{hurryData.contactfreDes}}
        </el-form-item>
        <el-form-item label="核对工作情况:" class="item-column2">
          {{hurryData.checkWorkDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="hurryData.checkWork=='01'">
          {{hurryData.checkWorktxt}}
        </el-form-item>
        <el-form-item label="核对婚姻情况:" class="item-column2">
          {{hurryData.maritalStatusDes}}
        </el-form-item>
        <el-form-item label="核对子女情况:" class="item-column2">
          {{hurryData.maritalStatustxtDes}}
        </el-form-item>
        <el-form-item label="调查结果:" class="item-column1">
          {{hurryData.conclusion}}
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
      hurryData: '' // 请求返回的数据
    }
  },
  props: ['hurryData', 'isFull'],
  // mounted() {
  //   this.queryTeleContract();
  // },
  // methods: {
  //   queryTeleContract() {
  //     console.log('submit!');
  //     this.post('/creTelResearchHis/queryTeleContract',{
  //       id:this.id,
  //       phoneType:this.phoneType
  //     }).then( res => {
  //       console.log(res);
  //       this.hurryData = res.data;
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
