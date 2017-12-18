<!-- 电话征信 - 单位电话 -->
<template>
  <div class="company-form">
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">新增调查日志</span>
    </div>
    <ul>
      <li class="item-column3">
        <div class="left-title">客户名称:</div>
        <div class="dis-input">
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型:</div>
        <div>
          <el-select v-model="phoneType" disabled>
            <el-option label="单位电话" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话号码:</div>
        <div>
          <el-input v-model="phoneNum" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:80px;">*</span>来源:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="source">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span>接听情况:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="answer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3">
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span>调查阶段:</div>
        <!-- <div> -->
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="checkStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </el-tooltip>
        <!-- </div> -->
      </li>
      <li class="item-column3" v-show="source=='02'">
        <div class="left-title">其他来源说明:</div>
        <div class="textarea-class">
          <el-input v-model="sourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">录入单位电话调查信息</span>
    </div>
    <ul>
      <li class="item-column2">
        <div class="left-title">拨打电话:</div>
        <div>
          <el-select v-model="phone">
            <el-option label="借款人提供" value="00"></el-option>
            <el-option label="拨打以下号码" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="phone=='01'"><span class="require-icon" style="left:80px;">*</span>说明:</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class2" v-show="phone=='01'">
            <el-input v-model="phonetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
          </div>
        </el-tooltip>
      </li>
      <li class="item-column2">
        <div class="left-title">接电话人身份:</div>
        <div>
          <el-select v-model="answerIdentity">
            <el-option label="工作证明人同事" value="00"></el-option>
            <el-option label="工作证明人本人" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="answerIdentity == '00'">说明:</div>
        <div class="textarea-class2" v-show="answerIdentity == '00'">
          <el-input type="textarea" v-model="answertxt" :row="2" resize=none :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title left-title2">核对单位及工作信息:</div>
        <div>
          <el-select v-model="company">
            <el-option label="一致" value="00"></el-option>
            <el-option label="基本一致" value="01"></el-option>
            <el-option label="不一致" value="02"></el-option>
            <el-option label="被调查人不清楚" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="company=='01'">说明:</div>
        <div class="textarea-class2" v-show="company=='01'">
          <el-input type="textarea" v-model="companytxt" :row="2" :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作时间:</div>
        <div>
          <el-select v-model="checkTime">
            <el-option label="知晓" value="00"></el-option>
            <el-option label="被调查人不清楚" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="checkTime=='00'">说明:</div>
        <div class="textarea-class2" v-show="checkTime=='00'">
          <el-input type="textarea" v-model="checkTimetxt" :row="2" :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对收入:</div>
        <div class="left-title">
          <el-select v-model="checkIncome">
            <el-option label="知晓" value="00"></el-option>
            <el-option label="被调查人不清楚" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="checkIncome=='00'">说明:</div>
        <div class="textarea-class2" v-show="checkIncome=='00'">
          <el-input type="textarea" v-model="checkIncometxt" :row="2" :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">用工方式:</div>
        <div>
          <el-select v-model="employmentmode">
            <el-option label="正式" value="00"></el-option>
            <el-option label="外派" value="01"></el-option>
            <el-option label="兼职" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="false">说明:</div>
        <div class="textarea-class2" v-show="false">
          <el-input type="textarea" v-model="checkIncometxt" :row="2" :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">工资发放情况:</div>
        <div>
          <el-select v-model="payrollSituation">
            <el-option label="打卡" value="00"></el-option>
            <el-option label="不打卡" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title" v-show="payrollSituation=='00'">说明:</div>
        <div class="textarea-class2" v-show="payrollSituation=='00'">
          <el-input type="textarea" v-model="payrollSituationtxt" :row="2" :maxlength="100"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">是否缴纳养老保险:</div>
        <div>
          <el-select v-model="pensionInsurance">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title left-title2">是否缴纳住房公积金:</div>
        <div>
          <el-select v-model="housingFund">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作证明人1:</div>
        <div>
          <el-input v-model="jobref1"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作证明人2:</div>
        <div>
          <el-input v-model="jobref2"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title"><span class="require-icon" style="left:50px;">*</span>调查结论:</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
        <div class="textarea-class">
          <el-input type="textarea" v-model="conclusion" :row="2" resize=none :maxlength="500"></el-input>
        </div>
      </el-tooltip>
      </li>
      <li class="item-column1 submit-class">
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // custName: '',
      phoneType: '02',
      // phoneNum: '',
      source: '',
      answer: '',
      checkStage: '',
      sourceDesc: '',
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
      employmentmode: '',
      employmentmodetxt: '',
      housingFund: '',
      jobref1: '',
      jobref2: '',
      conclusion: '',
      phoneId: ''
    }
  },
  props: ['custName', 'phoneNum', 'applyId', 'formId'],
  mounted() {
    this.phoneType = '02'; // 单位电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
      if (!this.source || !this.answer || !this.checkStage || (this.phone == '01' && !this.phonetxt) || !this.conclusion) {
        this.$message({
          message: '请输入必填项!',
          type: 'warning'
        });
        return;
      }
      this.post('/creTelResearchHis/addComTelLog', {
          cretelinvest: {
            custName: this.custName,
            phoneType: this.phoneType,
            phoneNum: this.phoneNum,
            source: this.source,
            answer: this.answer,
            checkStage: this.checkStage,
            sourceDesc: this.sourceDesc, // 其他来源说明
            applyId: this.applyId,
            id: this.phoneId
          },
          cretelcompany: {
            applyId: this.applyId,
            id: this.phoneId,
            thirdResult: this.thirdResult,
            phone: this.phone,
            phonetxt: this.phonetxt,
            answerIdentity: this.answerIdentity,
            answertxt: this.answertxt,
            company: this.company,
            companytxt: this.companytxt,
            checkTime: this.checkTime,
            checkTimetxt: this.checkTimetxt,
            checkIncome: this.checkIncome,
            checkIncometxt: this.checkIncometxt,
            payrollSituation: this.payrollSituation,
            payrollSituationtxt: this.payrollSituationtxt,
            pensionInsurance: this.pensionInsurance,
            employmentmodetxt: this.employmentmodetxt,
            employmentmode: this.employmentmode,
            housingFund: this.housingFund,
            jobref1: this.jobref1,
            jobref2: this.jobref2,
            conclusion: this.conclusion
          }
        })
        .then(res => {
          console.log(res);
          if (res.statusCode == '200') {

            this.phoneId = res.data.id;


            this.source = '';
            this.answer = '';
            this.checkStage = '';
            this.sourceDesc = '';
            this.thirdResult = '';
            this.phone = '';
            this.phonetxt = '';
            this.answerIdentity = '';
            this.answertxt = '';
            this.company = '';
            this.companytxt = '';
            this.checkTime = '';
            this.checkTimetxt = '';
            this.checkIncome = '';
            this.checkIncometxt = '';
            this.payrollSituation = '';
            this.payrollSituationtxt = '';
            this.pensionInsurance = '';
            this.employmentmodetxt = '';
            this.employmentmode = '';
            this.housingFund = '';
            this.jobref1 = '';
            this.jobref2 = '';
            this.conclusion = '';


            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');

            this.$message({
              message: res.data.msg,
              type: 'success'
            });
          }else{
            this.$message({
              message: res.data.msg,
              type: 'warning'
            });
          }
        })
    },
    showMessage(value) {
      this.$message({
        message: '输入长度不能超出' + value,
        type: 'warning'
      });
      return;
    }
  },
  watch: {
    source: function() {
      this.sourceDesc = '';
    },
    phone: function() {
      this.phonetxt = '';
    },
    answerIdentity: function() {
      this.answertxt = '';
    },
    company: function() {
      this.companytxt = '';
    },
    checkTime: function() {
      this.checkTimetxt = '';
    },
    checkIncome: function() {
      this.checkIncometxt = '';
    },
    payrollSituation: function() {
      this.payrollSituationtxt = '';
    }
  }
}

</script>
