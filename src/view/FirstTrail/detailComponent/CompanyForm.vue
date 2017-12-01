<!-- 电话征信 - 单位电话 -->
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
          <el-option label="单位电话" value="02"></el-option>
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
        录入单位电话调查信息
      </div>
      <el-form-item label="拨打电话:">
        <el-select v-model="form.phone" placeholder="请选择调查情况">
          <el-option label="借款人提供" value="00"></el-option>
          <el-option label="拨打以下号码" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接电话人身份:">
        <el-select v-model="form.answerIdentity" placeholder="请选择调查情况">
          <el-option label="工作证明人同事" value="00"></el-option>
          <el-option label="工作证明人本人" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对单位及工作信息:">
        <el-select v-model="form.company" placeholder="请选择调查情况">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对工作时间:">
        <el-select v-model="form.checkTime" placeholder="请选择调查情况">
          <el-option label="知晓" value="00"></el-option>
          <el-option label="被调查人不清楚" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对收入:">
        <el-select v-model="form.checkIncome" placeholder="请选择调查情况">
          <el-option label="知晓" value="00"></el-option>
          <el-option label="被调查人不清楚" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用工方式:">
        <el-select v-model="form.employmentmode" placeholder="请选择调查情况">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作发放情况:">
        <el-select v-model="form.payrollSituation" placeholder="请选择调查情况">
          <el-option label="打卡" value="00"></el-option>
          <el-option label="不打卡" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否缴纳养老保险:" class="item-column2">
        <el-select v-model="form.pensionInsurance" placeholder="请选择调查情况">
          <el-option label="否" value="shanghai"></el-option>
          <el-option label="是" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否缴纳住房公积金:" class="item-column2">
        <el-select v-model="form.housingFund" placeholder="请选择调查情况">
          <el-option label="否" value="00"></el-option>
          <el-option label="是" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对工作证明人1:" class="item-column2">
        <el-input v-model="form.jobref1"></el-input>
      </el-form-item>
      <el-form-item label="核对工作证明人2:" class="item-column2">
        <el-input v-model="form.jobref2"></el-input>
      </el-form-item>
      <el-form-item label="调查结论">
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
        custName:'', // 姓名
        phoneType:'', // 单位电话
        phoneNum:'', // 电话号码
        source:'', // 来源
        answer:'', // 接听情况
        checkStage:'', // 调查阶段
        phone:'', // 拨打电话
        answerIdentity:'', // 接电话人身份
        company:'', // 核对单位工作信息
        checkTime:'', // 核对工作时间
        checkIncome:'', // 核对收入
        employmentmode:'', // 用工方式
        payrollSituation:'', // 工资发放情况
        pensionInsurance:'', // 是否缴纳养老保险
        housingFund:'', // 是否缴纳住房公积金
        jobref1:'', // 工作证明人1
        jobref2:'', // 工作证明人2
        conclusion:'' // 调查结论
      }
    }
  },
  props: ['custName', 'phoneNum'],
  mounted() {
    this.form.custName = this.custName;
    this.form.phoneNum = this.phoneNum;
    this.form.phoneType = '02'; // 单位电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addComTelLog',this.form)
      .then( res => {
        console.log(res);
      })
    }
  }
}

</script>
