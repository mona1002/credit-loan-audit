<!-- 电话征信 - 工作证明 历史 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
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
      <el-form-item label="其他来源说明:" class="item-column3">
        {{workData.sourceDesc}}
      </el-form-item>
      <div class="address-title">
        录入工作证明人调查信息
      </div>
      <el-form-item label="微信/支付宝是否异常:" class="item-column2">
        {{workData.mobilepaymentDes}}
      </el-form-item>
      <el-form-item label="异常项说明:" class="item-column2">
        {{workData.mobilepaymenttxt}}
      </el-form-item>
      <el-form-item label="接电话人身份:" class="item-column2">
        {{workData.answerIdentityDes}}
      </el-form-item>
      <el-form-item label="说明:" class="item-column2">
        {{workData.answertxt}}
      </el-form-item>
      <el-form-item label="核对单位工作情况:" class="item-column2">
        {{workData.checkJobDes}}
      </el-form-item>
      <el-form-item label="说明:" class="item-column2">
        {{workData.checkJobtxt}}
      </el-form-item>
      <el-form-item label="调查结果:" class="item-column1">
        {{workData.conclusion}}
      </el-form-item>
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
