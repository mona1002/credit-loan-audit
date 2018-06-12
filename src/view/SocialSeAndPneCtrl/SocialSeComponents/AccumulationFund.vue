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
          <span class="headFont">基本信息</span>
        </template>
        <div class="lists">
          <div id="responseBaseInfoParams" class="easyui-panel" data-options="title:'基本信息',border:false,collapsible:true">
            <table id="t_01" class="table">
              <tr>
                <th style="width:15%;text-align:left">基本信息</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_02" class="table">
              <tr>
                <th style="width:10%;text-align:left">账单记录</th>
                <td style="width:18%">
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
                  <th style="width:8%"></th>
                  <td style="width:8%;"></td>
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
              </tr>
            </table>
            <table id="t_03" class="table">
              <tr>
                <th style="width:10%;text-align:left">贷款信息</th>
                <td style="width:18%">
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
              </tr>
            </table>
            <table id="t_04" class="table">
              <tr>
                <th style="width:10%;text-align:left">还款记录</th>
                <td style="width:18%"></td>
                <th style="width:8%"></th>
                <td style="width:8%"></td>
                <th style="width:8%"></th>
                <td style="width:8%"></td>
                <th style="width:8%"></th>
                <td style="width:8%"></td>
                <th style="width:8%"></th>
                <td style="width:8%"></td>
              </tr>
            </table>
          </div>
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
          <div id="responseParams" class="easyui-panel" data-options="title:'报告信息',border:false,collapsible:true">
            <table id="t_1" class="table">
              <tr>
                <!-- th style:  padding:10px 19px; -->
                <th style="width:15%;text-align:left;">用户及账户基本信息</th>
                <td style="width:15%"></td>
                <th style="width:20%"></th>
                <td style="width:12%"></td>
                <th style="width:20%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_2" class="table">
              <tr>
                <!-- th style:  padding:10px 19px; -->
                <th style="width:15%;text-align:left;">用户基本信息效验</th>
                <td style="width:15%"></td>
                <th style="width:20%"></th>
                <td style="width:12%"></td>
                <th style="width:20%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_3" class="table">
              <tr>
                <!-- th style:  padding:10px 19px; -->
                <th style="width:15%;text-align:left;">账户基本信息</th>
                <td style="width:15%"></td>
                <th style="width:20%"></th>
                <td style="width:12%"></td>
                <th style="width:20%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_4" class="table">
              <tr>
                <!-- th style:  padding:10px 19px; -->
                <th style="text-align:left;width:15%;">缴纳信息</th>
                <td style="width:15%"></td>
                <th style="width:20%"></th>
                <td style="width:12%"></td>
                <th style="width:20%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_5" class="table">
              <tr>
                <!-- th style:  padding:10px 19px; -->
                <th style="text-align:left;width:15%;">还款信息</th>
                <td style="width:15%"></td>
                <th style="width:20%"></th>
                <td style="width:12%"></td>
                <th style="width:20%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
          </div>
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
      formatMoney(val, row) {
        var t = "";
        var i;
        if (!$.isNumeric(val)) {
          return val;
        }
        //if(val!=null && val!=undefined){
        var n = 2;
        val = parseFloat((val + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = val.split(".")[0].split("").reverse(),
          r = val.split(".")[1];

        for (i = 0; i < l.length; i++) {
          t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
        //}
      },
      addTrThTd(jsonObj, $table, rownum, isAllFormat) {
        var i = 1;
        $.each(jsonObj, (name, value) => {
          if (name.indexOf('Id') != -1) return;
          if (value == null) value = '';
          //金额字符串格式化
          if (isAllFormat) {
            if (!isNaN(value)) {
              value = this.formatMoney(value / 100);
            }
          } else {
            if (name.match(/\[元\]$/)) {
              if (!isNaN(value)) {
                value = this.formatMoney(value / 100);
              }
            }
          }
          var index = i % rownum;
          var tr;
          if (index == 1) {
            $table.append("<tr style='border-bottom:1px solid #ebeef5;'><th style='text-align:right'>" + name +
              "：</th><td style='text-align:left;padding:0 0 0 10px;'>" + value + '</td></tr>');
          } else {
            $table.find('tr:last').append("<th style='text-align:right'>" + name + '：</th><td>' + value +
              '</td></tr>');
          }
          i++;
        });
        //补全一行
        var n = (i - 1) % rownum;
        if (n == 0) return;
        for (var m = 0; m < rownum - n; m++) {
          $table.find('tr:last').append("<th></th><td></td>");
        }
      },
      addTd(jsonObj, $tr, isAllFormat) {
        $.each(jsonObj, (name, value) => {
          if (name.indexOf('Id') != -1) return;
          if (value == null) value = '';
          //金额字符串格式化
          if (isAllFormat) {
            if (!isNaN(value)) {
              value = this.formatMoney(value / 100);
            }
          } else {
            if (name.match(/\[元\]$/)) {
              if (!isNaN(value)) {
                value = this.formatMoney(value / 100);
              }
            }
          }
          $tr.append("<td>" + name + '：' + value + '</td>');
        });
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
      } else if (this.judgeFlag.flag == '03' ||this.judgeFlag.flag == '04') {
        this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
      }
      //  else if (this.judgeFlag.flag == '04') {
      //   this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
      // }
       else if (this.judgeFlag.flag == '05'||this.judgeFlag.flag == '06') {
        this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
      } 
      // else if (this.judgeFlag.flag == '06') {
      //   this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议经理
      // }
      this.post(baseurl.BaseUrl + "/rmMxSecFundQryAction!notSession_getMxFundInfo.action", {
        custName: this.localInf.custName,
        certCode: this.localInf.certCode
      }).then(res => {
        if (res.success) {
          // 输入参数
          this.InputParameter = res.obj.inParam;
          // 基本信息
          if (res.obj.baseInfo != "") {
            this.baseInf = JSON.parse(res.obj.baseInfo);
            this.base = JSON.parse(this.baseInf.user_info); //	基本信息
            this.bills = JSON.parse(this.baseInf.bill_record); //账单记录
            this.loan = JSON.parse(this.baseInf.loan_info); //贷款信息
            this.repay = JSON.parse(this.baseInf.loan_repay_record); //还款记录 
            //基本信息
            if (this.base) {
              this.addTrThTd(this.base, $('#responseBaseInfoParams #t_01'), 3);
            }
            //账单记录
            if (this.bills) {
              $.each(this.bills, (index, each) => {
                this.addTrThTd(each, $('#responseBaseInfoParams #t_02'), 5);
              });
            }
            //贷款信息
            if (this.loan) {
              $.each(this.loan, (index, each) => {
                this.addTrThTd(each, $('#responseBaseInfoParams #t_03'), 5);
              });
            }
            //还款记录
            if (this.repay) {
              $.each(this.repay, (index, each) => {
                this.addTrThTd(each, $('#responseBaseInfoParams #t_04'), 5);
              });
            }
            this.delBase();
          }
          // 报告信息
          if (res.obj.reportInfo != "") {
            this.reportInf = JSON.parse(res.obj.reportInfo);
            this.ReportBase = this.reportInf.user_basic_info; //		用户及账户基本信息
            this.ReportBaseCheck = this.reportInf.user_basic_info_check; //用户基本信息校验
            this.ReportAccountBase = this.reportInf.fund_basic_info //账户基本信息
            this.Reportpayment = this.reportInf.payment_info //缴纳信息
            this.ReportRepay = this.reportInf.repay_info //还款信息
            //用户及账户基本信息
            if (this.ReportBase != undefined) {
              this.addTrThTd(this.ReportBase, $('#responseParams #t_1'), 3);
            }
            //用户基本信息校验
            if (this.ReportBaseCheck != undefined) {
              this.addTrThTd(this.ReportBaseCheck, $('#responseParams #t_2'), 3);
            }
            //账户基本信息
            if (this.ReportAccountBase != undefined) {
              this.addTrThTd(this.ReportAccountBase, $('#responseParams #t_3'), 3);
            }
            //缴纳信息
            if (this.Reportpayment != undefined) {
              this.addTrThTd(this.Reportpayment, $('#responseParams #t_4'), 3);
            }
            //还款信息
            if (this.ReportRepay != undefined) {
              this.addTrThTd(this.ReportRepay, $('#responseParams #t_5'), 3);
            }
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
  }

  .SSComp li {
    clear: both;
  }

  .SSComp p {
    display: inline-block;
    width: 33.3%;
    margin-top: 5px;
  }

  .SSComp label {
    display: inline-block;
    width:180px;
    text-align: right;
    vertical-align: top;
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
    float: left;
  }

  .table {
    width: 100%;
  }
</style>
