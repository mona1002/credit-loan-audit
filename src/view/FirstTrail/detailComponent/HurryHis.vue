<!-- 电话征信 - 紧急联系人 历史 -->
<template>
  <div>
    <el-form ref="form"  label-width="130px">
      <!--       <div class="address-title">
        新增调查日志
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">新增调查日志</span>
      </div>
      <el-form-item label="客户名称：" class="item-column3">
        {{hurryData.custName}}
      </el-form-item>
      <el-form-item label="电话类型：" class="item-column3">
        {{hurryData.phoneTypeDes}}
      </el-form-item>
      <el-form-item label="电话号码：" class="item-column3">
        {{hurryData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源：" class="item-column3">
        {{hurryData.sourceDes}}
      </el-form-item>
      <el-form-item label="接听情况：" class="item-column3">
        {{hurryData.answerDes}}
      </el-form-item>
      <el-form-item label="调查阶段：" class="item-column3">
        {{hurryData.checkStage}}
      </el-form-item>
      <!-- <el-form-item label="其他来源说明：" class="item-column2" v-show="hurryData.source=='02'">
        {{hurryData.sourceDesc}}
      </el-form-item> -->
      <el-tooltip class="item" effect="dark" :content="hurryData.sourceDesc" placement="top">
        <el-form-item label="其它来源情况说明：" class="item-column1" v-show="hurryData.source=='02'">
          {{hurryData.sourceDesc}}
        </el-form-item>
      </el-tooltip>
      <!-- <div class="address-title">
        录入紧急联系人调查信息
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">录入其他联系人调查信息</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="第三方查询信息：" class="item-column1">
          {{hurryData.thirdResult}}
        </el-form-item>
        <el-form-item label="三方查询是否异常：" class="item-column3 line2-class">
          {{hurryData.threeQueriesDes}}
        </el-form-item>
        <!-- <el-form-item label="异常说明：" class="item-column2" v-show="hurryData.threeQueries=='1'">
          {{hurryData.threeQueriestxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="hurryData.threeQueriestxt" placement="top">
          <el-form-item label="异常说明：" class="item-column2 item-column3-2" v-show="hurryData.threeQueries=='1'">
            {{hurryData.threeQueriestxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.threeQueries!='1'">
        </el-form-item>
        <el-form-item label="微信/支付宝是否异常：" class="item-column3 line2-class">
          {{hurryData.mobilepaymentDes}}
        </el-form-item>
        <!-- <el-form-item label="异常项说明：" class="item-column2" v-show="hurryData.mobilepayment=='1'">
          {{hurryData.mobilepaymenttxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="hurryData.mobilepaymenttxt" placement="top">
          <el-form-item label="异常项说明：" class="item-column2 item-column3-2" v-show="hurryData.mobilepayment=='1'">
            {{hurryData.mobilepaymenttxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.mobilepayment!='1'">
        </el-form-item>
        <el-form-item label="与借款人关系：" class="item-column3">
          {{hurryData.relBorrowerDes}}
        </el-form-item>
        <!-- <el-form-item label="说明：" class="item-column2" v-shwo="relBorrower=='03'">
          {{hurryData.relBorrowertxt}}
        </el-form-item> -->
        <!-- v-show="relBorrower=='03'" -->
        <el-tooltip class="item" effect="dark" :content="hurryData.relBorrowertxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="hurryData.relBorrower=='03'">
            {{hurryData.relBorrowertxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.relBorrower!='03'">
        </el-form-item>
        <!-- =========================== -->
        <!--         <el-form-item label="与借款人联系是否频繁：" class="item-column1 line2-class">
          {{hurryData.contactfreDes}}
        </el-form-item> -->
        <!-- =========================== -->
        <!-- <el-form-item label="" class="item-column3 item-column3-null">
          
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null">
          
        </el-form-item> -->
        <el-form-item label="核对工作情况：" class="item-column3">
          {{hurryData.checkWorkDes}}
        </el-form-item>
        <!-- <el-form-item label="说明：" class="item-column2" v-show="hurryData.checkWork=='01'">
          {{hurryData.checkWorktxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="hurryData.checkWorktxt" placement="top">
          <el-form-item label="异常项说明：" class="item-column2 item-column3-2" v-show="hurryData.checkWork=='01'">
            {{hurryData.checkWorktxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.checkWork!='01'">
        </el-form-item>
        <el-form-item label="核对婚姻情况：" class="item-column3">
          {{hurryData.maritalStatusDes}}
        </el-form-item>
        <el-form-item label="核对子女情况：" class="item-column3">
          {{hurryData.maritalStatustxtDes}}
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null">
        </el-form-item>
        <!-- <el-form-item label="调查结果：" class="item-column1">
          {{hurryData.conclusion}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="hurryData.conclusion" placement="top">
          <el-form-item label="调查结果：" class="item-column1">
            {{hurryData.conclusion}}
          </el-form-item>
        </el-tooltip>
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
      // hurryData: '' // 请求返回的数据
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
      $(".textarea-class").css("minWidth", "500px");
      $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
    } else if (this.isFull == false) { // 分屏
      console.log("分屏");
      $(".textarea-class").css("minWidth", "300px");
      $(".item-column1 .el-form-item__content").css("width", "300px");
    }
  },
  watch: {
    // 判断全屏 , 更改样式
    isFull: function(val) {
      if (val == true) { // 全屏
        console.log('全屏');
        $(".textarea-class").css("minWidth", "500px");
        $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
      } else if (val == false) { // 分屏
        console.log("分屏");
        $(".textarea-class").css("minWidth", "300px");
        $(".item-column1 .el-form-item__content").css("width", "300px");
      }
    }
  }
}

</script>
