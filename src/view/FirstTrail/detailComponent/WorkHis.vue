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
        {{workData.phoneType}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{workData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{workData.source}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{workData.answer}}
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        {{workData.checkStage}}
      </el-form-item>
      <el-form-item label="其他来源说明:" class="item-column3">
        {{workData.custName}}
      </el-form-item>
      <div class="address-title">
        录入工作证明人调查信息
      </div>
      <el-form-item label="微信/支付宝是否异常:">
        {{workData.mobilepayment}}
      </el-form-item>
      <el-form-item label="异常项说明:">
        {{workData.exceptionremark}}
      </el-form-item>
      <el-form-item label="接电话人身份:">
        {{workData.answerIdentity}}
      </el-form-item>
      <el-form-item label="-" class="item-column3">
        {{workData.custName}}
      </el-form-item>
      <el-form-item label="核对单位工作情况:">
        {{workData.checkJob}}
      </el-form-item>
      <el-form-item label="-" class="item-column3">
        {{workData.custName}}
      </el-form-item>
      <el-form-item label="调查结果:">
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
  props:['workData']
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
}

</script>
