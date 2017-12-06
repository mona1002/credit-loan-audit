<!-- 电话征信 - 单位电话 -->
<template>
  <div class="company-form">
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3 dis-input">
        <el-input v-model="custName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        <el-select v-model="form.cretelinvest.phoneType">
          <el-option label="单位电话" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3 dis-input">
        <el-input v-model="phoneNum" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        <el-select v-model="form.cretelinvest.source">
          <el-option label="申请表" value="00"></el-option>
          <el-option label="第三方查询" value="01"></el-option>
          <el-option label="其他" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        <el-select v-model="form.cretelinvest.answer">
          <el-option label="无人接" value="00"></el-option>
          <el-option label="拒接" value="01"></el-option>
          <el-option label="停机" value="02"></el-option>
          <el-option label="空号" value="03"></el-option>
          <el-option label="接通" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        <el-select v-model="form.cretelinvest.checkStage">
          <el-option label="正在调查" value="00"></el-option>
          <el-option label="完成调查" value="01"></el-option>
          <el-option label="调查失败" value="02"></el-option>
          <el-option label="未调查" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其他来源说明" class="item-column1">
        <el-input type="input" v-model="form.cretelinvest.sourceDesc"></el-input>
      </el-form-item>
      <div class="address-title">
        录入单位电话调查信息
      </div>
      <el-form-item label="拨打电话:" class="item-column2">
        <el-select v-model="form.cretelcompany.phone">
          <el-option label="借款人提供" value="00"></el-option>
          <el-option label="拨打以下号码" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input type="input" v-model="form.cretelcompany.phonetxt" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item label="接电话人身份:" class="item-column2">
        <el-select v-model="form.cretelcompany.answerIdentity">
          <el-option label="工作证明人同事" value="00"></el-option>
          <el-option label="工作证明人本人" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input type="input" v-model="form.cretelcompany.answertxt" :row="2" resize=none></el-input>
      </el-form-item>
      <el-form-item label="核对单位及工作信息:" class="item-column2">
        <el-select v-model="form.cretelcompany.company">
          <el-option label="一致" value="00"></el-option>
          <el-option label="基本一致" value="01"></el-option>
          <el-option label="不一致" value="02"></el-option>
          <el-option label="被调查人不清楚" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input type="input" v-model="form.cretelcompany.companytxt"></el-input>
      </el-form-item>
      <el-form-item label="核对工作时间:" class="item-column2">
        <el-select v-model="form.cretelcompany.checkTime">
          <el-option label="知晓" value="00"></el-option>
          <el-option label="被调查人不清楚" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input type="input" v-model="form.cretelcompany.checkTimetxt"></el-input>
      </el-form-item>
      <el-form-item label="核对收入:" class="item-column2">
        <el-select v-model="form.cretelcompany.checkIncome">
          <el-option label="知晓" value="00"></el-option>
          <el-option label="被调查人不清楚" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input type="input" v-model="form.cretelcompany.checkIncometxt"></el-input>
      </el-form-item>
      <el-form-item label="用工方式:" class="item-column1">
        <el-select v-model="form.cretelcompany.employmentmode">
          <el-option label="正式" value="00"></el-option>
          <el-option label="外派" value="01"></el-option>
          <el-option label="兼职" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工资发放情况:" class="item-column2">
        <el-select v-model="form.cretelcompany.payrollSituation">
          <el-option label="打卡" value="00"></el-option>
          <el-option label="不打卡" value="01"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="-" class="item-column2">
        <el-input type="input" v-model="form.cretelcompany.payrollSituationtxt"></el-input>
      </el-form-item>
      <el-form-item label="是否缴纳养老保险:" class="item-column2">
        <el-select v-model="form.cretelcompany.pensionInsurance">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否缴纳住房公积金:" class="item-column2">
        <el-select v-model="form.cretelcompany.housingFund">
          <el-option label="否" value="0"></el-option>
          <el-option label="是" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="核对工作证明人1:" class="item-column2">
        <el-input v-model="form.cretelcompany.jobref1"></el-input>
      </el-form-item>
      <el-form-item label="核对工作证明人2:" class="item-column2">
        <el-input v-model="form.cretelcompany.jobref2"></el-input>
      </el-form-item>
      <el-form-item label="调查结论" class="item-column1">
        <el-input type="textarea" v-model="form.cretelcompany.conclusion" :row="2" resize=none></el-input>
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
        cretelinvest: {
          custName: '',
          phoneType: '',
          phoneNum: '',
          source: '',
          answer: '',
          checkStage: '',
          sourceDesc: '', // 其他来源说明
          applyId: this.applyId
        },
        cretelcompany: {
          applyId: this.applyId,
          thirdResult: '',
          phone: '',
          phonetxt: '',
          answerIdentity: '',
          answertxt: '',
          company: '',
          companytxt: '',
          checkTime: '',
          checkTimetxt: '',
          checkIncome: '',
          checkIncometxt: '',
          payrollSituation: '',
          payrollSituationtxt: '',
          pensionInsurance: '',
          employmentmodetxt: '',
          employmentmode: '',
          housingFund: '',
          jobref1: '',
          jobref2: '',
          conclusion: ''
        }
      }
    }
  },
  props: ['custName', 'phoneNum', 'applyId'],
  mounted() {
    this.form.cretelinvest.custName = this.custName;
    this.form.cretelinvest.phoneNum = this.phoneNum;
    this.form.cretelinvest.phoneType = '02'; // 单位电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
      this.post('/creTelResearchHis/addComTelLog', this.form)
        .then(res => {
          console.log(res);
          if (res.statusCode == '200')
            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
        })
    }
  }
}

</script>
