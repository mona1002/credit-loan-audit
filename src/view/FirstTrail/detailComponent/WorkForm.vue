<!-- 电话征信 - 工作证明人 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        {{form.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-select v-model="form.phoneType" placeholder="请选择电话类型">
          <el-option label="工作证明人" value="05"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{form.phoneNum}}
      </el-form-item>
      <!-- <el-form-item label="电话号码" class="item-column3">
        <el-form-item label="13103582965"></el-form-item>
      </el-form-item> -->
      <el-form-item label="来源:" class="item-column3">
        <el-select v-model="form.source" placeholder="请选择来源">
          <el-option label="申请表" value="00"></el-option>
          <el-option label="第三方查询" value="01"></el-option>
          <el-option label="其他" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        <el-select v-model="form.answer" placeholder="请选择接听情况">
          <el-option label="无人接" value="00"></el-option>
          <el-option label="拒接" value="01"></el-option>
          <el-option label="停机" value="02"></el-option>
          <el-option label="空号" value="03"></el-option>
          <el-option label="接通" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        <el-select v-model="form.checkStage" placeholder="请选择调查阶段">
          <el-option label="正在调查" value="00"></el-option>
          <el-option label="完成调查" value="01"></el-option>
          <el-option label="调查失败" value="02"></el-option>
          <el-option label="未调查" value="03"></el-option>
        </el-select>
      </el-form-item>
      <div class="address-title">
        录入工作证明人调查信息
      </div>
      <el-form-item label="微信/支付宝是否异常:">
        <el-select v-model="form.mobilepayment" placeholder="请选择调查情况">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="异常项说明:">
        <el-input v-model="form.exceptionremark"></el-input>
      </el-form-item>
      <el-form-item label="接电话人身份:">
        <el-select v-model="form.answerIdentity" placeholder="请选择调查情况">
          <el-option label="同事" value="00"></el-option>
          <el-option label="本人" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对单位工作情况:">
        <el-select v-model="form.checkJob" placeholder="请选择调查情况">
          <el-option label="一致" value="00"></el-option>
          <el-option label="不一致" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查结论:">
        <el-input type="textarea" v-model="form.conclusion"></el-input>
      </el-form-item>
      <el-form-item class="address-submit">
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        custName: '', // 客户姓名
        phoneType: '', // 电话类型
        phoneNum: '', // 电话号码
        source: '', // 来源
        answer: '', // 接听情况
        checkStage: '', // 调查阶段
        mobilepayment: '', // 微信/支付宝是否异常
        exceptionremark: '', // 异常项说明
        answerIdentity: '', // 接电话人身份
        checkJob: '', // 核对单位工作情况
        conclusion: '' // 调查结论
      }
    }
  },
  created() {
    this.form.custName = '';
    this.form.phoneNum = '';
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addTeljobref', this.form)
        .then(res => {
          console.log(res);
        })
    }
  }
}

</script>
<style>
.address-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background: #ededed;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
}












/* */

.el-form-item__label {
  width: 150px !important;
}

.el-form-item {
  margin-bottom: 0;
}











/* 三列 */

.item-column3 {
  width: 33%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}











/* 两列 */

.item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}







/* 表单提交 */

.address-submit {
  margin: 0;
  padding: 0;
  float: right;
  margin: 20px;
}

</style>
