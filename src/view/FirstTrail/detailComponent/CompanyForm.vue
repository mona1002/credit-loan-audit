<!-- 电话征信 - 单位电话 -->
<template>
  <div class="company-form">
    <div class="address-title">
      <i class="collapse_title_icon"></i>
      <span class="collapse_title_text">新增调查日志</span>
    </div>
    <ul class="content-ul" style="margin-left:15px;">
      <li class="item-column3">
        <div class="left-title">电话名称：</div>
        <div class="dis-input">
          <el-input v-model="custName" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话类型：</div>
        <div>
          <el-select v-model="phoneType" :disabled="true">
            <el-option label="单位电话" value="02"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">电话号码：</div>
        <div>
          <el-input v-model="phoneNum" :disabled="true"></el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          <span class="require-icon" style="left:80px;">* </span>来源：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="DanWsource" @change="changes('DanWsource')">
            <el-option label="申请表" value="00"></el-option>
            <el-option label="第三方查询" value="01"></el-option>
            <el-option label="其他" value="02"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column3">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">* </span>接听情况：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="DanWanswer">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column3 Phone_credit_Form_search_bottom">
        <div class="left-title">
          <span class="require-icon" style="left:50px;">* </span>调查阶段：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <el-select v-model="DanWcheckStage">
            <el-option label="正在调查" value="00"></el-option>
            <el-option label="完成调查" value="01"></el-option>
            <el-option label="调查失败" value="02"></el-option>
            <el-option label="未调查" value="03"></el-option>
          </el-select>
        </el-tooltip>
      </li>
      <li class="item-column1" v-show="DanWsource=='02'">
        <div class="left-title">其他来源说明：</div>
        <div class="textarea-class">
          <el-input v-model="DanWsourceDesc" type="textarea" :rows="3" resize=none :maxlength="100"></el-input>
        </div>
      </li>
    </ul>
    <div class="address-title">
      <i class="collapse_title_icon"></i>
      <span class="collapse_title_text">录入单位电话调查信息</span>
    </div>
    <ul style="margin-left:15px;">
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title">第三方查询信息：</div>
          <div class="textarea-class">
            <el-input type="textarea" v-model="DanWthirdResult" :rows="3" resize=none :maxlength="500"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">拨打电话：</div>
          <div>
            <el-select v-model="DanWphone" @change="changes('DanWphone')">
              <el-option label="借款人提供" value="00"></el-option>
              <el-option label="拨打以下号码" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="DanWphone=='01'">
            <span class="require-icon" style="left:80px;">* </span>说明：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class2" v-show="DanWphone=='01'">
              <el-input v-model="DanWphonetxt" type="textarea" :rows="2" resize=none :maxlength="100"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">接电话人身份：</div>
          <div>
            <el-select v-model="DanWanswerIdentity" @change="changes('answerIdentity')">
              <el-option label="同事" value="00"></el-option>
              <el-option label="本人" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="DanWanswerIdentity == '00'">说明：</div>
          <div class="textarea-class2" v-show="DanWanswerIdentity == '00'">
            <el-input type="textarea" v-model="DanWanswertxt" :row="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title left-title2">核对单位及工作信息：</div>
          <div>
            <el-select v-model="DanWcompany" @change="changes('DanWcompany')">
              <el-option label="一致" value="00"></el-option>
              <el-option label="基本一致" value="01"></el-option>
              <el-option label="不一致" value="02"></el-option>
              <el-option label="被调查人不清楚" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="DanWcompany=='01'">说明：</div>
          <div class="textarea-class2" v-show="DanWcompany=='01'">
            <el-input type="textarea" v-model="DanWcompanytxt" :row="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对工作时间：</div>
          <div>
            <el-select v-model="DanWcheckTime" @change="changes('DanWcheckTime')">
              <el-option label="知晓" value="00"></el-option>
              <el-option label="被调查人不清楚" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="DanWcheckTime=='00'">说明：</div>
          <div class="textarea-class2" v-show="DanWcheckTime=='00'">
            <el-input type="textarea" v-model="DanWcheckTimetxt" :row="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对收入：</div>
          <div>
            <el-select v-model="DanWcheckIncome" @change="changes('DanWcheckIncome')">
              <el-option label="知晓" value="00"></el-option>
              <el-option label="被调查人不清楚" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="DanWcheckIncome=='00'">说明：</div>
          <div class="textarea-class2" v-show="DanWcheckIncome=='00'">
            <el-input type="textarea" v-model="DanWcheckIncometxt" :row="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">用工方式：</div>
          <div>
            <el-select v-model="DanWemploymentmode">
              <el-option label="正式" value="00"></el-option>
              <el-option label="外派" value="01"></el-option>
              <el-option label="兼职" value="03"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="false">说明：</div>
          <div class="textarea-class2" v-show="false">
            <el-input type="textarea" v-model="DanWcheckIncometxt" :row="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">工资发放情况：</div>
          <div>
            <el-select v-model="DanWpayrollSituation" @change="changes('DanWpayrollSituation')">
              <el-option label="打卡" value="00"></el-option>
              <el-option label="不打卡" value="01"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column2 item-column3-2">
          <div class="left-title" v-show="DanWpayrollSituation=='00'">说明：</div>
          <div class="textarea-class2" v-show="DanWpayrollSituation=='00'">
            <el-input type="textarea" v-model="DanWpayrollSituationtxt" :row="2" resize=none :maxlength="100"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">是否缴纳养老保险：</div>
          <div>
            <el-select v-model="DanWpensionInsurance">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title left-title2">是否缴纳住房公积金：</div>
          <div>
            <el-select v-model="DanWhousingFund">
              <el-option label="否" value="0"></el-option>
              <el-option label="是" value="1"></el-option>
            </el-select>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column3">
          <div class="left-title">核对工作证明人1：</div>
          <div>
            <el-input v-model="DanWjobref1" :maxlength="20"></el-input>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">核对工作证明人2：</div>
          <div>
            <el-input v-model="DanWjobref2" :maxlength="20"></el-input>
          </div>
        </li>
      </div>
      <div class="content-ul">
        <li class="item-column1">
          <div class="left-title">
            <span class="require-icon" style="left:50px;">* </span>调查结果：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class">
              <el-input type="textarea" v-model="DanWconclusion" :rows="5" resize=none :maxlength="500"></el-input>
            </div>
          </el-tooltip>
        </li>
      </div>
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
        phoneType: '02',
        DanWsource: this.danweiList.source,
        DanWanswer: this.danweiList.answer,
        DanWcheckStage: this.danweiList.checkStage,
        DanWsourceDesc: this.danweiList.sourceDesc,
        DanWthirdResult: this.danweiList.thirdResult,
        DanWphone: this.danweiList.phone,
        DanWphonetxt: this.danweiList.phonetxt,
        DanWanswerIdentity: this.danweiList.answerIdentity,
        DanWanswertxt: this.danweiList.answertxt,
        DanWcompany: this.danweiList.company,
        DanWcompanytxt: this.danweiList.companytxt,
        DanWcheckTime: this.danweiList.checkTime,
        DanWcheckTimetxt: this.danweiList.checkTimetxt,
        DanWcheckIncome: this.danweiList.checkIncome,
        DanWcheckIncometxt: this.danweiList.checkIncometxt,
        DanWpayrollSituation: this.danweiList.payrollSituation,
        DanWpayrollSituationtxt: this.danweiList.payrollSituationtxt,
        DanWpensionInsurance: this.danweiList.pensionInsurance,
        DanWemploymentmode: this.danweiList.employmentmode,
        DanWemploymentmodetxt: this.danweiList.employmentmodetxt,
        DanWhousingFund: this.danweiList.housingFund,
        DanWjobref1: this.danweiList.jobref1,
        DanWjobref2: this.danweiList.jobref2,
        DanWconclusion: this.danweiList.conclusion,
        phoneId: '',
      }
    },
    props: ['custName', 'phoneNum', 'applyId', 'formId', 'danweiList'], //, 'isFull'
    mounted() {
      this.phoneType = '02'; // 单位电话
      // if (this.isFull == true) { // 全屏
      //   $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      //   $('.item-column1 textarea').css("width", "100%")
      //   $('.item-column1 textarea').css("width", "100%")
      //   // 提交按钮
      //   $('.submit-class').css("margin-left", "calc( 66% - 140px)")
      //   // 显示 column2
      //   $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
      //   $('.item-column2 textarea').css("width", "100%");
      // } else if (this.isFull == false) { // 分屏
      //   // 提交按钮
      //   $('.submit-class').css("margin-left", "370px")

      //   $('.item-column3').css({
      //     "min-height": "0px",
      //     "margin-bottom": "10px"
      //   })
      //   $('.item-column1 textarea').css("width", "300px")
      //   $('.item-column2 textarea').css("width", "300px")
      // }
    },
    methods: {
      submitForm() {
        if (!this.DanWsource || !this.DanWanswer || !this.DanWcheckStage || (this.DanWphone == '01' && !this.DanWphonetxt) ||
          !this.DanWconclusion) {
          this.$message({
            message: '请输入必填项!',
            type: 'warning'
          });
          return;
        }
        this.$confirm('您确定操作？', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          cancelButtonText: '取消',
          showCancelButton: true
        }).then(() => {
          this.open();
        }).catch(() => {});
      },
      //  提交
      open() {
        this.post('/creTelResearchHis/addComTelLog', {
          cretelinvest: {
            custName: this.custName,
            phoneType: this.phoneType,
            phoneNum: this.phoneNum,
            source: this.DanWsource,
            answer: this.DanWanswer,
            checkStage: this.DanWcheckStage,
            sourceDesc: this.DanWsourceDesc, // 其他来源说明
            applyId: this.applyId,
            id: this.phoneId
          },
          cretelcompany: {
            applyId: this.applyId,
            id: this.phoneId,
            thirdResult: this.DanWthirdResult,
            phone: this.DanWphone,
            phonetxt: this.DanWphonetxt,
            answer: this.DanWanswerIdentity,
            answertxt: this.DanWanswertxt,
            company: this.DanWcompany,
            companytxt: this.DanWcompanytxt,
            checkTime: this.DanWcheckTime,
            checkTimetxt: this.DanWcheckTimetxt,
            checkIncome: this.DanWcheckIncome,
            checkIncometxt: this.DanWcheckIncometxt,
            payrollSituation: this.DanWpayrollSituation,
            payrollSituationtxt: this.DanWpayrollSituationtxt,
            pensionInsurance: this.DanWpensionInsurance,
            employmentmodetxt: this.DanWemploymentmodetxt,
            employmentmode: this.DanWemploymentmode,
            housingFund: this.DanWhousingFund,
            jobref1: this.DanWjobref1,
            jobref2: this.DanWjobref2,
            conclusion: this.DanWconclusion
          }
        }).then(res => {
          if (res.statusCode == '200') {
            this.phoneId = '';
            // 提交数据成功,广播事件 重新刷新列表
            this.$emit('updateList');
            this.$emit('updateTree');
            this.$message({
              type: 'success',
              message:'提交成功'
            });
          } else {
            this.$message.error(res.msg)
          }
        });
      },
      changes(flage) {
        switch (flage) {
          case 'DanWsource':
            if (this.DanWsource != '02') {
              this.DanWsourceDesc = '';
            }
            break;
          case 'DanWphone':
            if (this.DanWphone == '00') {
              this.DanWphonetxt = '';
            }
            break;
          case 'DanWcompany':
            if (this.DanWcompany != '01') {
              this.DanWcompanytxt = '';
            }
            break;
          case 'DanWanswerIdentity':
            if (this.DanWanswerIdentity == '01') {
              this.DanWanswertxt = '';
            }
            break;
          case 'DanWcheckTime':
            if (this.DanWcheckTime == '01') {
              this.DanWcheckTimetxt = '';
            }
            break;
          case 'DanWcheckIncome':
            if (this.DanWcheckIncome == '01') {
              this.DanWcheckIncometxt = '';
            }
            break;
          case 'DanWpayrollSituation':
            if (this.DanWpayrollSituation == '01') {
              this.DanWpayrollSituationtxt = '';
            }
            break;
        }
      },
    },
    watch: {
      danweiList(val) {
        this.DanWsource = val.source;
        this.DanWanswer = val.answer;
        this.DanWcheckStage = val.checkStage;
        this.DanWsourceDesc = val.sourceDesc;
        this.DanWthirdResult = val.thirdResult;
        this.DanWphone = val.phone;
        this.DanWphonetxt = val.phonetxt;
        this.DanWanswerIdentity = val.answerIdentity;
        this.DanWanswertxt = val.answertxt;
        this.DanWcompany = val.company;
        this.DanWcompanytxt = val.companytxt;
        this.DanWcheckTime = val.checkTime;
        this.DanWcheckTimetxt = val.checkTimetxt;
        this.DanWcheckIncome = val.checkIncome;
        this.DanWcheckIncometxt = val.checkIncometxt;
        this.DanWpayrollSituation = val.payrollSituation;
        this.DanWpayrollSituationtxt = val.payrollSituationtxt;
        this.DanWpensionInsurance = val.pensionInsurance;
        this.DanWemploymentmode = val.employmentmode;
        this.DanWemploymentmodetxt = val.employmentmodetxt;
        this.DanWhousingFund = val.housingFund;
        this.DanWjobref1 = val.jobref1;
        this.DanWjobref2 = val.jobref2;
        this.DanWconclusion = val.conclusion;
      },
      // 判断全屏 , 更改样式
      // 判断全屏 , 更改样式
      // isFull: function (val) {
      //   if (val == true) { // 全屏
      //     $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      //     $('.item-column1 textarea').css("width", "100%")
      //     // 提交按钮
      //     $('.submit-class').css("margin-left", "calc( 66% - 140px)")
      //     // 显示 column2
      //     $('.item-column3-2 .textarea-class2').css("width", "calc( 100% - 211px )");
      //     $('.item-column2 textarea').css("width", "100%");
      //   } else if (val == false) { // 分屏
      //     // 提交按钮
      //     $('.submit-class').css("margin-left", "370px")
      //     $('.item-column3').css({
      //       "min-height": "0px",
      //       "margin-bottom": "10px"
      //     })
      //     $('.item-column1 textarea').css("width", "300px")
      //     $('.item-column2 textarea').css("width", "300px")
      //   }
      // }
    }
  }

</script>
