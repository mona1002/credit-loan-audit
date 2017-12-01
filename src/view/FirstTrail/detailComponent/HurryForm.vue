<!-- 电话征信 - 紧急联系人 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3 dis-input">
        <el-input v-model="custName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-select v-model="form.phoneType" disabled placeholder="请选择电话类型">
          <el-option label="紧急联系人" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3 dis-input">
        <el-input v-model="phoneNum" :disabled="true"></el-input>
      </el-form-item>
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
          <el-option label="接通" value="4"></el-option>
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
        录入紧急联系人调查信息
      </div>
      <el-form-item label="第三方查询信息:">
        <el-input type="textarea" v-model="form.thirdResult" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item label="三方查询是否异常:">
        <el-select v-model="form.threeQueries" placeholder="请选择调查情况">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="微信/支付宝是否异常:">
        <el-select v-model="form.mobilepayment" placeholder="请选择调查情况">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="异常项说明:">
        <el-input v-model="form.exceptionremark"></el-input>
      </el-form-item>
      <el-form-item label="与借款人关系:">
        <el-select v-model="form.relBorrower" placeholder="请选择调查情况">
          <el-option label="父母" value="00"></el-option>
          <el-option label="爱人" value="01"></el-option>
          <el-option label="子女" value="02"></el-option>
          <el-option label="其他" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="与借款人联系是否频繁:">
        <el-select v-model="form.contactfre" placeholder="请选择调查情况">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对工作情况:">
        <el-select v-model="form.checkWork" placeholder="请选择调查情况">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对婚姻情况:">
        <el-select v-model="form.maritalStatus" placeholder="请选择调查情况">
          <el-option label="未婚" value="00"></el-option>
          <el-option label="已婚" value="01"></el-option>
          <el-option label="离异" value="02"></el-option>
          <el-option label="丧偶" value="03"></el-option>
          <el-option label="准备结婚" value="04"></el-option>
          <el-option label="被调查人不清楚" value="05"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查结果:">
        <el-input type="textarea" v-model="form.conclusion" :row="2" resize=none></el-input>
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
        custName:'', // 客户姓名
        phoneType:'04', // 电话类型
        phoneNum:'', // 电话号码
        source:'', // 来源
        answer:'', // 接听情况
        checkStage:'', // 调查阶段
        thirdResult:'', // 三方查询信息
        threeQueries:'', // 三方查询是否异常
        mobilepayment:'', // 微信/支付宝是否异常
        exceptionremark:'', // 异常项说明
        relBorrower:'', // 与借款人关系
        contactfre:'', // 与借款人联系是否频繁
        checkWork:'', // 核对工作情况
        maritalStatus:'', // 核对婚姻情况
        conclusion:'' // 调查结论
      }
    }
  },
  props: ['custName', 'phoneNum'],
  mounted() {
    this.form.custName = this.custName;
    this.form.phoneNum = this.phoneNum;
    this.form.phoneType = '04'; // 紧急联系人电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addTeleContract',this.form)
      .then( res=>{
        console.log(res);
      })
    }
  }
}

</script>
