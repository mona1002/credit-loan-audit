<template>
  <div class="SSComp">
    <!-- 社保详情 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">输入参数</span>
        </template>
        <div class="lists">
          <ul>
            <li>
              <p>
                <label>姓名：</label>
                <b>{{InputParameter.custName}}</b>
              </p>
              <p>
                <label>身份证号：</label>
                <b>{{InputParameter.certCode}}</b>
              </p>
              <p>
                <label>账号：</label>
                <b>{{InputParameter.account}}</b>
              </p>
            </li>
            <li>
              <p>
                <label>密码：</label>
                <b>{{InputParameter.password}}</b>
              </p>
              <p>
                <label>省市：</label>
                <b>{{InputParameter.area_code}}</b>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">基本信息 </span>
        </template>
        <div class="lists">
          <h4>基本信息 </h4>
          <ul>
            <li>
              <p v-for="(value,name) in base" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <h4>保险费用 </h4>
          <ul>
            <li v-for="(value,index) in insurances" :key="index">
              <p v-for="(item,name) in value" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
          <h4>保险费用记录 </h4>
          <ul>
            <li v-for="(value,index) in insurance_record" :key="index">
              <p v-for="(item,name) in value" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
          <h4>医疗保险记录</h4>
          <ul>
            <li v-for="(value,index) in medical_insurance_record" :key="index">
              <p v-for="(item,name) in value" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="3">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">报告信息</span>
        </template>
        <div class="lists">
          <h4>用户及账户基本信息</h4>
          <ul>
            <li>
              <p v-for="(value,name) in ReportBase" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <h4>用户基本信息校验</h4>
          <ul>
            <li>
              <p v-for="(value,name) in ReportBaseCheck" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <h4>社保信息 </h4>
          <li v-for="(value,index) in ReportSocialSec" :key="index">
            <p v-for="(item,name) in value" :key="name" width:>
              <label>{{name}}</label>
              <b>：</b>
              <span>{{item}}</span>
            </p>
          </li>
          <h4>医疗保险缴存信息 </h4>
          <ul>
            <li v-for="(value,name) in ReportMedInsu" :key="name">
              <div>{{name}}
                <b>：</b>
              </div>
              <div>
                <p v-for="(title,item) in value" :key="title">
                  <label>{{item}}</label>:
                  <span>{{title}}</span>
                </p>
              </div>
            </li>
          </ul>
          <h4>医保消费明细</h4>
          <ul>
            <li v-for="(value,name) in ReportExpenseDet" :key="name">
              <div>{{name}}
                <b>：</b>
              </div>
              <div>
                <p v-for="(title,item) in value" :key="title">
                  <label>{{item}}</label>:
                  <span>{{title}}</span>
                </p>
              </div>
            </li>
          </ul>
          <h4>医保卡消费记录 </h4>
          <ul>
            <li v-for="(value,index) in ReportSecRecord" :key="index">
              <p v-for="(item,name) in value" :key="name" width:>
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn'
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3"],
        userInf: null,
        localInf: null,
        InputParameter: {},
        // InputParameter: {
        // custName: null,
        // certCode: null,
        // account: null,
        // password: null,
        // area_code: null,
        // },
        parameterID: null,
        baseInf: null,
        base: null, //基本信息-基本信息
        insurances: null, //基本信息-保险费用
        insurance_record: null, //基本信息-保险费用记录
        medical_insurance_record: null, //基本信息-医疗保险记录
        reportInf: null,
        ReportBase: null,
        ReportBaseCheck: null,
        ReportMedInsu: null,
        ReportExpenseDet: null,
        ReportSecRecord: null,
        ReportSocialSec: null,
      }
    },
    mounted() {
      this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
      if (this.judgeFlag.flag == '01') {
        this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
      } else if (this.judgeFlag.flag == '02') {
        this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
      } else if (this.judgeFlag.flag == '03') {
        this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
      } else if (this.judgeFlag.flag == '04') {
        this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
      } else if (this.judgeFlag.flag == '05') {
        this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
      } else if (this.judgeFlag.flag == '06') {
        this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议经理
      }
      this.post(baseurl + "/rmMxSecFundQryAction!notSession_getMxSecInfo.action", {
        custName: this.localInf.custName,
        certCode: this.localInf.certCode
      }).then(res => {
        // console.log(res)
        if (res.success) {
          // 输入参数
          this.InputParameter = res.obj.inParam;
          // 基本信息          
          this.baseInf = JSON.parse(res.obj.baseInfo);
          this.base = JSON.parse(this.baseInf.base_info); //基本信息-基本信息
          this.insurances = JSON.parse(this.baseInf.insurances); //基本信息-保险费用
          this.insurance_record = JSON.parse(this.baseInf.insurance_record); //基本信息-医疗保险记录
          this.medical_insurance_record = JSON.parse(this.baseInf.medical_insurance_record); //基本信息-医疗保险记录
          // 报告信息
          this.reportInf = JSON.parse(res.obj.reportInfo);
          this.ReportBase = this.reportInf.basic_info.user_basic_info; //用户及账户基本信息
          this.ReportBaseCheck = this.reportInf.basic_info.user_basic_info_check; //用户基本信息效验
          this.ReportSocialSec = this.reportInf.social_insurance_summary.society_detail //社保信息
          this.ReportMedInsu = this.reportInf.medical_insurance_bill.medical_insurance_pay; //医疗保险缴存信息
          this.ReportExpenseDet = this.reportInf.medical_consumption_details.medical_consumption_basic //医保消费明细
          this.ReportSecRecord = this.reportInf.medical_consumption_details.medical_consumption_record.securities_report; //医保卡消费记录
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }

</script>
<style scoped>
  .SSComp {
    overflow-x: hidden;
    height: 100%;
  }

  .icon_hat {
    position: absolute;
    top: 12px;
    left: 14px;
  }

  .lists {
    padding: 10px 0 0 21px;
  }

  .SSComp h4 {
    clear: both;
    font-weight: bold;
    /* border: 1px solid yellowgreen; */
  }

  .SSComp li {
    /* border: 1px solid blue; */
    clear: both;
  }

  .SSComp p {
    float: left;
    width: 33.3%;
    margin-top: 5px;
    /* border: 1px solid red; */
  }

  .SSComp label {
    display: inline-block;
    width: 180px;
    text-align: right;
    /* border: 1px solid pink; */
  }

  .SSComp li span {
    display: inline-block;
    width: calc( 100% - 215px);
    vertical-align: top;
  }

  .SSComp li b {
    vertical-align: top
  }

</style>
