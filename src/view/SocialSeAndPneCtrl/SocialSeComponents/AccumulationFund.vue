<template>
  <div class="SSComp">
    <!-- 公积金详情 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
          <span class="headFont">输入参数</span>
        </template>
        <div class="lists inputPar">
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
          <span class="headFont">基本信息</span>
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
          <h4>账单记录 </h4>
          <ul>
            <li v-for="(value,index) in bills" :key="index">
              <p v-for="(item,name) in value" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
          <h4>贷款记录 </h4>
          <ul>
            <li v-for="(value,index) in loan" :key="index">
              <p v-for="(item,name) in value" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{item}}</span>
              </p>
            </li>
          </ul>
          <h4>还款记录 </h4>
          <ul>
            <li v-for="(value,index) in repay" :key="index">
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
          <h4>用户及账户基本信息 </h4>
          <ul>
            <li>
              <p v-for="(value,name) in ReportBase" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <h4>用户基本信息校验 </h4>
          <ul>
            <li>
              <p v-for="(value,name) in ReportBaseCheck" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <h4>账户基本信息</h4>
          <ul>
            <li>
              <p v-for="(value,name) in ReportAccountBase" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>
          <h4>缴纳信息</h4>
          <ul>
            <li>
              <p v-for="(value,name) in Reportpayment" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
              </p>
            </li>
          </ul>

          <h4>还款信息</h4>
          <ul>
            <li>
              <p v-for="(value,name) in ReportRepay" :key="name">
                <label>{{name}}</label>
                <b>：</b>
                <span>{{value}}</span>
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
        localInf: {},
        InputParameter: {},
        base: {}, //基本信息-基本信息
        bills: [], //基本信息-保险费用
        loan: [], //基本信息-保险费用记录
        repay: [], //基本信息-医疗保险记录
        reportInf: {},
        ReportBase: {},
        ReportBaseCheck: {},
        ReportAccountBase: {},
        Reportpayment: {},
        ReportSecRecord: {},
        ReportRepay: {},
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
      console.log(baseurl + "/rmMxSecFundQryAction!notSession_getMxFundInfo.action" )
      this.post(baseurl + "/rmMxSecFundQryAction!notSession_getMxFundInfo.action", {
        custName: this.localInf.custName,
        certCode: this.localInf.certCode
      }).then(res => {
        if (res.success) {
          // 输入参数
          this.InputParameter = res.obj.inParam;
          // 基本信息
          this.baseInf = JSON.parse(res.obj.baseInfo);
          this.base = JSON.parse(this.baseInf.user_info); //	基本信息
          this.bills = JSON.parse(this.baseInf.bill_record); //账单记录
          this.loan = JSON.parse(this.baseInf.loan_info); //贷款信息
          this.repay = JSON.parse(this.baseInf.loan_repay_record); ////还款记录 
          // 报告信息
          this.reportInf = JSON.parse(res.obj.reportInfo);
          this.ReportBase = this.reportInf.user_basic_info_check; //		用户及账户基本信息
          this.ReportBaseCheck = this.reportInf.user_basic_info_check; //用户基本信息校验
          this.ReportAccountBase = this.reportInf.fund_basic_info //账户基本信息
          this.Reportpayment = this.reportInf.payment_info //缴纳信息
          this.ReportRepay = this.reportInf.repay_info //还款信息
          console.log(this.ReportRepay)
          this.base ? this.FOREACH(this.base) : this.base;
          this.bills ? this.FOREACHarray(this.bills) : this.bills;
          this.loan ? this.FOREACHarray(this.loan) : this.loan;
          this.repay ? this.FOREACHarray(this.repay) : this.repay;
          this.ReportAccountBase ? this.FOREACH(this.ReportAccountBase) : this.ReportAccountBase;
          this.Reportpayment ? this.FOREACH(this.Reportpayment) : this.Reportpayment; //缴纳信息
          this.ReportRepay ? this.FOREACH(this.ReportRepay) : this.ReportRepay; //还款信息
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
    display: inline-block;
    /* float: left; */
    width: 33.3%;
    margin-top: 5px;
    /* border: 1px solid red; */
  }

  .SSComp label {
    display: inline-block;
    width: 260px;
    text-align: right;
    vertical-align: top;
    /* border: 1px solid pink; */
  }

  .SSComp li span {
    display: inline-block;
    width: calc(100% - 283px);
    vertical-align: top;
  }

  .SSComp li b {
    vertical-align: top
  }

  .inputPar p {
    border: 1px solid;
    float: left;
  }

</style>
