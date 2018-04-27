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
          <div id="sec_responseBaseInfoParams" class="easyui-panel" data-options="title:'基本信息',border:false,collapsible:true">
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
                <th style="width:15%;text-align:left">保险费用</th>
                <td style="width:15%;text-align:right;bgcolor:#ebeef5;"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_03" class="table">
              <tr>
                <th style="width:10%;text-align:left">保险费用记录</th>
                <td style="width:8%;">
                  <th style="width:8%"></th>
                  <td style="width:8%"></td>
                  <th style="width:12%"></th>
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
                <th style="width:10%;text-align:left">医疗保险记录</th>
                <td style="width:10%"></td>
                <th></th>
                <td></td>
                <th></th>
                <td></td>
                <th></th>
                <td></td>
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
          <div id="sec_responseParams" class="easyui-panel" data-options="title:'报告信息',border:false,collapsible:true">
            <table id="t_1" class="table">
              <tr>
                <th style="width:15%;text-align:left">用户及账户基本信息</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_2" class="table">
              <tr>
                <th style="width:15%;text-align:left">用户基本信息效验</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_3" class="table">
              <tr>
                <th style="width:15%;text-align:left">社保信息</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_4" class="table">
              <tr style="text-align:left">
                <th style="text-align:left;">医疗保险缴存信息</th>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_5" class="table">
              <tr>
                <th style="text-align:left">医保消费明细</th>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_6" class="table">
              <tr>
                <th style="text-align:left;width:12%">医保卡消费记录</th>
                <td style="width:15%"></td>
                <th style="width:15%"></th>
                <td style="width:10%"></td>
                <th style="width:8%"></th>
                <td style="width:10%"></td>
                <th style="width:8%"></th>
                <td style="width:10%"></td>
              </tr>
            </table>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  export default {
    data() {
      return {
        activeNames: ['1', "2", "3"],
        userInf: null,
        localInf: null,
        InputParameter: {},
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
      // else if (this.judgeFlag.flag == '04') {
      //   this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
      // }
       else if (this.judgeFlag.flag == '05' ||this.judgeFlag.flag == '06') {
        this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议专员 
      }
      //  else if (this.judgeFlag.flag == '06') {
      //   this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting")) //复议经理
      // }
      this.post(baseurl.BaseUrl + "/rmMxSecFundQryAction!notSession_getMxSecInfo.action", {
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
            this.insurance_record = JSON.parse(this.baseInf.insurance_record); //基本信息-保险费用记录
            this.medical_insurance_record = JSON.parse(this.baseInf.medical_insurance_record); //基本信息-医疗保险记录
            this.delBase();
            if (this.base != undefined) { //基本信息-基本信息
              this.addTrThTd(this.base, $('#sec_responseBaseInfoParams #t_01'), 3);
            };
            if (this.insurances) { //基本信息-保险费用
              $.each(this.insurances, (index, each) => {
                this.addTrThTd(each, $('#sec_responseBaseInfoParams #t_02'), 3);
              });
            }
            if (this.insurance_record) { //基本信息-保险费用记录
              $.each(this.insurance_record, (index, each) => {
                this.addTrThTd(each, $('#sec_responseBaseInfoParams #t_03'), 6);
              });
            }
            if (this.medical_insurance_record) { //基本信息-医疗保险记录
              $.each(this.medical_insurance_record, (index, each) => {
                this.addTrThTd(each, $('#sec_responseBaseInfoParams #t_04'), 4);
              });
            }
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
            //用户及账户基本信息
            if (this.ReportBase != undefined) {
              this.addTrThTd(this.ReportBase, $('#sec_responseParams #t_1'), 3);
            }
            //用户基本信息效验
            if (this.ReportBaseCheck != undefined) {
              this.addTrThTd(this.ReportBaseCheck, $('#sec_responseParams #t_2'), 3);
            }
            //社保保险信息摘要
            if (this.ReportSocialSec != undefined) {
              $.each(this.ReportSocialSec, (index, each) => {
                if (each == undefined) return;
                this.addTrThTd(each, $('#sec_responseParams #t_3'), 3);
              });
            }
            //医疗保险缴存信息
            if (this.ReportMedInsu.保险名称 != undefined) {
              $('#sec_responseParams #t_4').append("<tr style='border-bottom:1px solid #ebeef5'><th>保险名称</th></tr>");
              this.addTd(this.ReportMedInsu.保险名称, $('#sec_responseParams #t_4').find('tr:last'), true);
              // this.addTrThTd(this.ReportMedInsu.保险名称, $('#sec_responseParams #t_4'), 3, true);
            }
            if (this.ReportMedInsu['缴存基数[元]'] != undefined) {
              $('#sec_responseParams #t_4').append("<tr style='border-bottom:1px solid #ebeef5'><th>缴存基数</th></tr>");
              this.addTd(this.ReportMedInsu['缴存基数[元]'], $('#sec_responseParams #t_4').find('tr:last'), true);
              // this.addTrThTd(this.ReportMedInsu['缴存基数[元]'], $('#sec_responseParams #t_4'), 3, true);
            }
            if (this.ReportMedInsu['单位缴存金额[元]']) {
              $('#sec_responseParams #t_4').append(
                "<tr style='border-bottom:1px solid #ebeef5'><th>单位缴存金额</th></tr>");
              this.addTd(this.ReportMedInsu['单位缴存金额[元]'], $('#sec_responseParams #t_4').find('tr:last'), true);
              // this.addTrThTd(this.ReportMedInsu['单位缴存金额[元]'], $('#sec_responseParams #t_4'), 3, true);
            }
            if (this.ReportMedInsu['个人缴存金额[元]']) {
              $('#sec_responseParams #t_4').append(
                "<tr style='border-bottom:1px solid #ebeef5'><th>个人缴存金额</th></tr>");
              this.addTd(this.ReportMedInsu['个人缴存金额[元]'], $('#sec_responseParams #t_4').find('tr:last'), true);
              // this.addTrThTd(this.ReportMedInsu['个人缴存金额[元]'], $('#sec_responseParams #t_4'), 3, true);
            }
            if (this.ReportMedInsu.缴存状态标记) {
              $('#sec_responseParams #t_4').append(
                "<tr  style='border-bottom:1px solid #ebeef5'><th>缴存状态标记</th></tr>");
              this.addTd(this.ReportMedInsu.缴存状态标记, $('#sec_responseParams #t_4').find('tr:last'), true);
              // this.addTrThTd(this.ReportMedInsu.缴存状态标记, $('#sec_responseParams #t_4'), 3, true);
            }
            //医保消费明细
            if (this.ReportExpenseDet["消费金额[元]"] != undefined) {
              $('#sec_responseParams #t_5').append("<tr style='border-bottom:1px solid #ebeef5'><th>消费金额</th></tr>");
              this.addTd(this.ReportExpenseDet["消费金额[元]"], $('#sec_responseParams #t_5').find('tr:last'), true);
              // this.addTrThTd(this.ReportExpenseDet["消费金额[元]"], $('#sec_responseParams #t_5'), 3, true);
            }
            if (this.ReportExpenseDet.消费次数 != undefined) {
              $('#sec_responseParams #t_5').append("<tr style='border-bottom:1px solid #ebeef5'><th>消费次数</th></tr>");
              this.addTd(this.ReportExpenseDet.消费次数, $('#sec_responseParams #t_5').find('tr:last'), true);
              // this.addTrThTd(this.ReportExpenseDet.消费次数, $('#sec_responseParams #t_5'), 3, true);
            }
            if (this.ReportExpenseDet['每月最大单笔消费[元]'] != undefined) {
              $('#sec_responseParams #t_5').append(
                "<tr style='border-bottom:1px solid #ebeef5'><th>每月最大单笔消费</th></tr>");
              this.addTd(this.ReportExpenseDet['每月最大单笔消费[元]'], $('#sec_responseParams #t_5').find('tr:last'), true);
              // this.addTrThTd(this.ReportExpenseDet['每月最大单笔消费[元]'], $('#sec_responseParams #t_5'), 3, true);
            }
            //医保卡消费记录
            if (this.ReportSecRecord != undefined) {
              $.each(this.ReportSecRecord, (index, each) => {
                if (each == undefined) return;
                this.addTrThTd(each, $('#sec_responseParams #t_6'), 4);
              });
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

  /* .bor{
    border-bottom: 1px solid #ebeef5;
} */

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
    float: left;
    width: 33.3%;
    margin-top: 5px;
  }

  .SSComp label {
    display: inline-block;
    width: 180px;
    text-align: right;
  }

  .SSComp li span {
    display: inline-block;
    width: calc( 100% - 215px);
    vertical-align: top;
  }

  .SSComp li b {
    vertical-align: top
  }

  .table {
    width: 100%;
  }

</style>
