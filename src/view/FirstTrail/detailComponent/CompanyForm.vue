<!-- 电话征信 - 单位电话 -->
<template>
  <div class="company-form">
    <div class="address-title">
      新增调查日志
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
          <el-select v-model="phoneType">
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
        <div class="left-title">来源:</div>
        <div>
          <el-select v-model="source">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">接听情况:</div>
        <div>
          <el-select v-model="answer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">调查阶段:</div>
        <div>
          <el-select v-model="checkStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3" v-show="source=='02'">
        <div class="left-title">其他来源说明</div>
        <div>
          <el-input type="input" v-model="sourceDesc"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      录入单位电话调查信息
    </div>
    <ul>
      <li class="item-column2">
        <div class="left-title">拨打电话</div>
        <div>
          <el-select v-model="phone">
            <el-option label="借款人提供" value="00"></el-option>
            <el-option label="拨打以下号码" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="phone=='01'">
          <el-input type="input" v-model="phonetxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">接电话人身份</div>
        <div>
          <el-select v-model="answerIdentity">
            <el-option label="工作证明人同事" value="00"></el-option>
            <el-option label="工作证明人本人" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="answerIdentity == '00'">
          <el-input type="input" v-model="answertxt" :row="2" resize=none></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对单位及工作信息</div>
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
        <div class="left-title"></div>
        <div v-show="company=='01'">
          <el-input type="input" v-model="companytxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作时间</div>
        <div>
          <el-select v-model="checkTime">
            <el-option label="知晓" value="00"></el-option>
            <el-option label="被调查人不清楚" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkTime=='00'">
          <el-input type="input" v-model="checkTimetxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对收入</div>
        <div class="left-title">
          <el-select v-model="checkIncome">
            <el-option label="知晓" value="00"></el-option>
            <el-option label="被调查人不清楚" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="checkIncome=='00'">
          <el-input type="input" v-model="checkIncometxt"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">用工方式</div>
        <div>
          <el-select v-model="employmentmode">
            <el-option label="正式" value="00"></el-option>
            <el-option label="外派" value="01"></el-option>
            <el-option label="兼职" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">工资发放情况</div>
        <div>
          <el-select v-model="payrollSituation">
            <el-option label="打卡" value="00"></el-option>
            <el-option label="不打卡" value="01"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title"></div>
        <div v-show="payrollSituation=='00'">
          <el-input type="input" v-model="payrollSituationtxt"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">是否缴纳养老保险</div>
        <div>
          <el-select v-model="pensionInsurance">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">是否缴纳住房公积金</div>
        <div>
          <el-select v-model="housingFund">
            <el-option label="否" value="0"></el-option>
            <el-option label="是" value="1"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作证明人1</div>
        <div>
          <el-input v-model="jobref1"></el-input>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">核对工作证明人2</div>
        <div>
          <el-input v-model="jobref2"></el-input>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title">调查结论</div>
        <div>
          <el-input type="textarea" v-model="conclusion" :row="2" resize=none></el-input>
        </div>
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
      phoneType: '',
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
  props: ['custName', 'phoneNum', 'applyId'],
  mounted() {
    this.phoneType = '02'; // 单位电话
  },
  methods: {
    submitForm() {
      console.log('submit!');
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
            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
          }
        })
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
