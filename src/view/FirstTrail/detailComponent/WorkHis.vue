<!-- 电话征信 - 工作证明 历史 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="130px">
      <!-- <div class="address-title">
        新增调查日志
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">新增调查日志</span>
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        {{workData.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        {{workData.phoneTypeDes}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{workData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{workData.sourceDes}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{workData.answerDes}}
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        {{workData.checkStageDes}}
      </el-form-item>
      <el-form-item label="其他来源说明:" class="item-column3" v-show="workData.source=='02'">
        {{workData.sourceDesc}}
      </el-form-item>
      <!--  <div class="address-title">
        录入工作证明人调查信息
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">录入工作证明人调查信息</span>
      </div>
      <div style="padding-left:30px;">
        <el-form-item label="微信/支付宝是否异常:" class="item-column2 line2-class">
          {{workData.mobilepaymentDes}}
        </el-form-item>
        <el-form-item label="异常项说明:" class="item-column2" v-show="workData.mobilepayment=='1'">
          {{workData.mobilepaymenttxt}}
        </el-form-item>
        <el-form-item label="接电话人身份:" class="item-column2">
          {{workData.answerIdentityDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="workData.answerIdentity=='00'">
          {{workData.answertxt}}
        </el-form-item>
        <el-form-item label="核对单位工作情况:" class="item-column2">
          {{workData.checkJobDes}}
        </el-form-item>
        <el-form-item label="说明:" class="item-column2" v-show="workData.checkJob=='01'">
          {{workData.checkJobtxt}}
        </el-form-item>
        <el-form-item label="调查结果:" class="item-column1">
          {{workData.conclusion}}
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        // id: '', // 住宅电话调查日志记录 id
        // phoneType: '', // 电话类型
        workData: '' // 返回的数据
      }
    }
  },
  props: ['workData', 'isFull'],
  // created() {
  //   this.queryTelJobRef();
  // },
  // methods: {
  //   queryTelJobRef() {
  //     this.post('/creTelResearchHis/queryTelJobRef', {
  //       id: this.id,
  //       phoneType: this.phoneType
  //     }).then(res => {
  //       console.log(res);
  //       this.workData = res.data;
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
