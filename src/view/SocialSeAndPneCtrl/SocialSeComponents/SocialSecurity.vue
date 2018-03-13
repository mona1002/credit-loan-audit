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
              <p style="marginBottom:15px;">
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
          <hr>
          <h4>基本信息 </h4>
          <hr>
          <ul>
            <li>
              <p v-for="(value,name) in base" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <hr>
          <h4>保险费用 </h4>
          <hr>
          <ul>
            <li v-for="(value,index) in insurances" :key="index">
              <p v-for="(item,name) in value" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
          <hr>
          <h4>保险费用记录 </h4>
          <hr>
          <ul>
            <li v-for="(value,index) in insurance_record" :key="index">
              <p v-for="(item,name) in value" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
          <hr>
          <h4>医疗保险记录</h4>
          <hr>
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
          <hr>
          <h4>用户及账户基本信息</h4>
          <hr>
          <ul>
            <li>
              <p v-for="(value,name) in ReportBase" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <hr>
          <h4>用户基本信息校验</h4>
          <hr>
          <ul>
            <li>
              <p v-for="(value,name) in ReportBaseCheck" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <hr>
          <h4>社保信息 </h4>
          <hr>
          <li v-for="(value,index) in ReportSocialSec" :key="index">
            <p v-for="(item,name) in value" :key="name" width:>
              <label>{{name}}</label>
              <b>：</b>
              <span>{{item}}</span>
            </p>
          </li>
          <hr>
          <h4>医疗保险缴存信息 </h4>
          <hr>
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
          <hr>
          <h4>医保消费明细</h4>
          <hr>
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
          <hr>
          <h4>医保卡消费记录 </h4>
          <hr>
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
        ccc: {
          "保险名称": {
            'name': "askdf",
            age: 989
          },
          "缴存基数": {
            'name': "askdf",
            age: 989
          },
          "单位缴存金额": {
            'name': "askdf",
            age: 989
          },
          "个人缴存金额": {
            'name': "askdf",
            age: 989
          },
          "缴存状态标记": {
            'name': "askdf",
            age: 989
          },
        }
      }
    },
    methods: {
      formatNumber(num, cent, isThousand) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num)) {
          num = "0";
        }
        let sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * Math.pow(10, cent) + 0.50000000001);
        let cents = num % Math.pow(10, cent);
        num = Math.floor(num / Math.pow(10, cent)).toString();
        cents = cents.toString();
        while (cents.length < cent)
          cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
          num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        }
        if (cent > 0) {
          return (((sign) ? '' : '-') + num + '.' + cents);
        } else {
          return (((sign) ? '' : '-') + num);
        }
      },
      FOREACH(item) {
        for (var k in item) {
          // console.log(k)
          //  if (k.indexOf("用户信息Id") != -1) {
          //   //  console.log(item[k])
          // console.log(k)
          //    delete item.k;
          //   //  k=null;
          //   //  item[k]=null;
          //   //  console.log(item[k])
          // }

          if (k.indexOf("[元]") != -1) {
            item[k] = this.formatNumber(item[k] / 100, 2, 0)
          }
        }
      },
      FOREACHarray(item) {
        for (var i = 0; i < item.length; i++) {
          for (var k in item[i]) {
            if (k.indexOf("[元]") != -1) {
              item[i][k] = this.formatNumber(item[i][k] / 100, 2, 0)
            }
          }
        }
      },
      FOREACHobj(item) {
        for (var k in item) {
          if (k.indexOf("[元]") != -1) {
            for (var j in item[k]) {
              item[k][j] != '-' ? item[k][j] = this.formatNumber(item[k][j] / 100, 2, 0) : item[k][j]
            }
          }
        }
      },
      delBase() {
        this.base['用户信息Id'] ? delete this.base['用户信息Id'] : this.base;
        this.base['保险Id(险种)'] ? delete this.base['保险Id(险种)'] : this.base;
        this.delArray(this.insurances)
        this.delArray(this.insurance_record)
        this.delArray(this.medical_insurance_record)
      },
      delReport() {
        this.ReportBase['用户信息Id'] ? delete this.ReportBase['用户信息Id'] : this.ReportBase;
        this.ReportBase['保险Id(险种)'] ? delete this.ReportBase['保险Id(险种)'] : this.ReportBase;
        this.ReportBaseCheck['用户信息Id'] ? delete this.ReportBaseCheck['用户信息Id'] : this.ReportBaseCheck;
        this.ReportBaseCheck['保险Id(险种)'] ? delete this.ReportBaseCheck['保险Id(险种)'] : this.ReportBaseCheck;
        this.delArray(this.ReportSocialSec)
        this.delArray(this.ReportSecRecord)
        this.delObj(this.ReportMedInsu)
        this.delObj(this.ReportExpenseDet)
      },
      delArray(item) {
        if (item) {
          for (var i = 0; i < item.length; i++) {
            item[i]['用户信息Id'] ? delete item[i]['用户信息Id'] : item[i];
            item[i]['保险Id(险种)'] ? delete item[i]['保险Id(险种)'] : item[i];
          }
        }
      },
      delObj(item) {
        if (item) {
          for (var k in item) {
            item[k]['用户信息Id'] ? delete item[k]['用户信息Id'] : item[k];
            item[k]['保险Id(险种)'] ? delete item[k]['保险Id(险种)'] : item[k];
          }
        }
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
        if (res.success) {
          // 输入参数
          this.InputParameter = res.obj.inParam;
          // 基本信息 
          if (res.obj.baseInfo != '') {
            this.baseInf = JSON.parse(res.obj.baseInfo);
            this.base = JSON.parse(this.baseInf.base_info); //基本信息-基本信息
            this.insurances = JSON.parse(this.baseInf.insurances); //基本信息-保险费用
            this.insurance_record = JSON.parse(this.baseInf.insurance_record); //基本信息-医疗保险记录
            this.medical_insurance_record = JSON.parse(this.baseInf.medical_insurance_record); //基本信息-医疗保险记录
            this.base ? this.FOREACH(this.base) : this.base;
            this.insurances ? this.FOREACHarray(this.insurances) : this.insurances;
            this.insurance_record ? this.FOREACHarray(this.insurance_record) : this.insurance_record;
            this.medical_insurance_record ? this.FOREACHarray(this.medical_insurance_record) : this.medical_insurance_record;
            this.delBase();
          }
          // 报告信息
          if (res.obj.reportInfo != '') {
            this.reportInf = JSON.parse(res.obj.reportInfo);
            this.ReportBase = this.reportInf.basic_info.user_basic_info; //用户及账户基本信息
            this.ReportBaseCheck = this.reportInf.basic_info.user_basic_info_check; //用户基本信息效验
            this.ReportSocialSec = this.reportInf.social_insurance_summary.society_detail //社保信息
            this.ReportMedInsu = this.reportInf.medical_insurance_bill.medical_insurance_pay; //医疗保险缴存信息
            this.ReportExpenseDet = this.reportInf.medical_consumption_details.medical_consumption_basic //医保消费明细
            this.ReportSecRecord = this.reportInf.medical_consumption_details.medical_consumption_record.securities_report; //医保卡消费记录
            this.ReportBase ? this.FOREACH(this.ReportBase) : this.ReportBase;
            this.ReportBaseCheck ? this.FOREACH(this.ReportBaseCheckCheck) : this.ReportBase;
            this.ReportSocialSec ? this.FOREACHarray(this.ReportSocialSec) : this.ReportSocialSec;
            this.ReportMedInsu ? this.FOREACHobj(this.ReportMedInsu) : this.ReportMedInsu;
            this.ReportExpenseDet ? this.FOREACHobj(this.ReportExpenseDet) : this.ReportExpenseDet;
            this.ReportSecRecord ? this.FOREACHarray(this.ReportSecRecord) : this.ReportSecRecord;
            this.delReport();
          }
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

  hr {
    clear: both;
  }

</style>
