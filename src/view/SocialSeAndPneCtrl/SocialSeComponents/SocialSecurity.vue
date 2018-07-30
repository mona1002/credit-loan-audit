<template>
  <div class="SSComp">
    <!-- 社保详情 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">输入参数</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_166">姓名：</label>
              <span>{{InputParameter.custName}}</span>
            </li>
            <li>
              <label class="label_width_166">身份证号：</label>
              <span>{{InputParameter.certCode}}</span>
            </li>
            <li>
              <label class="label_width_166">账号：</label>
              <span>{{InputParameter.account}}</span>
            </li>
            <li>
              <label class="label_width_166">密码：</label>
              <span>{{InputParameter.password}}</span>
            </li>
            <li>
              <label class="label_width_166">省市：</label>
              <span>{{InputParameter.area_code}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="lists">
          <div id="sec_responseBaseInfoParams" class="easyui-panel" data-options="title:'基本信息',border:false,collapsible:true">
            <table id="t_01" class="table">
              <tr>
                <th class="font_weight_800" style="width:15%;text-align:left">基本信息</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_02" class="table">
              <tr>
                <th class="font_weight_800" style="width:15%;text-align:left">保险费用</th>
                <td style="width:15%;text-align:right;bgcolor:#ebeef5;"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_03" class="table">
              <tr>
                <th class="font_weight_800" style="width:10%;text-align:left">保险费用记录</th>
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
                <th class="font_weight_800" style="width:10%;text-align:left">医疗保险记录</th>
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
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">报告信息</span>
        </template>
        <div class="lists">
          <div id="sec_responseParams" class="easyui-panel" data-options="title:'报告信息',border:false,collapsible:true">
            <table id="t_1" class="table">
              <tr>
                <th class="font_weight_800" style="width:15%;text-align:left">用户及账户基本信息</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_2" class="table">
              <tr>
                <th class="font_weight_800" style="width:15%;text-align:left">用户基本信息效验</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_3" class="table">
              <tr>
                <th class="font_weight_800" style="width:15%;text-align:left">社保信息</th>
                <td style="width:15%"></td>
                <th style="width:25%"></th>
                <td style="width:12%"></td>
                <th style="width:18%"></th>
                <td style="width:15%"></td>
              </tr>
            </table>
            <table id="t_4" class="table">
              <tr style="text-align:left">
                <th class="font_weight_800" style="text-align:left;">医疗保险缴存信息</th>
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
                <th class="font_weight_800" style="text-align:left">医保消费明细</th>
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
                <th class="font_weight_800" style="text-align:left;width:12%">医保卡消费记录</th>
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
  import utils from '../../../util/utils';
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
        count:1
      }
    },
    // props: ['custName', 'certCode'],
    props: {
      custName: {
        type: String,
        default: '',
        required: true
      },
      certCode: {
        type: String,
        default: '',
        required: true
      }
    },
    watch: {
      // '$route' (to, from) {
      //   if (to.path == '/SocialSe') {
      //     // this.custname=Math.random()
      //   //   console.log("组件方法")
      //   //   this.getflag();
      //   // this.getInf()
      //   //   console.log("组件方法")
      //   console.log('传入值:'+this.custName)

      //   }},
      '$route' (to, from) {
        if (to.path === '/SocialSe') {
          // this.custname=Math.random()
          this.getInf()
          this.count=1;
          console.log('社保详情')
        }
      },
      // custName: function (newQuestion, oldQuestion) {
      //   newQuestion !== oldQuestion ? this.getInf() : this.getInf();
      //   console.log(this.custName)
      //   console.log('custName')
      // },
      // certCode: function (newQuestion, oldQuestion) {
      //   newQuestion !== oldQuestion ? this.getInf() : this.getInf();
      //   console.log(this.certCode)

      //   console.log('custName')

      // }
    },
    methods: {
      getflag() {
        this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        if (this.judgeFlag.flag == '01') {
          this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
        } else if (this.judgeFlag.flag == '02') {
          this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
        } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
          this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
        }
        // else if (this.judgeFlag.flag == '04') {
        //   this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
        // }
        else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
          this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting"))
        } else if (this.judgeFlag.flag == '07' || this.judgeFlag.flag == '08' || this.judgeFlag.flag == '09' || this.judgeFlag
          .flag == '10' || this.judgeFlag.flag == '11' || this.judgeFlag.flag == '13') {
          this.localInf = JSON.parse(localStorage.getItem("FGQTTaskWait")) //质检 专员
        }
        // this.custName = this.localInf.custName
        // this.certCode = this.localInf.certCode
      },
      getInf() {
        console.log('掉方法')
        this.getflag();
        // this.judgeFlag = JSON.parse(localStorage.getItem("judge"));
        // if (this.judgeFlag.flag == '01') {
        //   this.localInf = JSON.parse(localStorage.getItem("taskInWaitting")) //初审
        // } else if (this.judgeFlag.flag == '02') {
        //   this.localInf = JSON.parse(localStorage.getItem("FtaskInWaitting")) //终审
        // } else if (this.judgeFlag.flag == '03' || this.judgeFlag.flag == '04') {
        //   this.localInf = JSON.parse(localStorage.getItem("AntitaskInWaitting")) //反欺诈专员
        // }
        // // else if (this.judgeFlag.flag == '04') {
        // //   this.localInf = JSON.parse(localStorage.getItem("AntiManagertaskInWaitting")) //反欺诈主管
        // // }
        // else if (this.judgeFlag.flag == '05' || this.judgeFlag.flag == '06') {
        //   this.localInf = JSON.parse(localStorage.getItem("RtaskInWaitting"))
        // } else if (this.judgeFlag.flag == '07' || this.judgeFlag.flag == '08' || this.judgeFlag.flag == '09' || this.judgeFlag
        //   .flag == '10' || this.judgeFlag.flag == '11' || this.judgeFlag.flag == '13') {
        //   this.localInf = JSON.parse(localStorage.getItem("FGQTTaskWait")) //质检 专员
        // }


        //  else if (this.judgeFlag.flag == '08') {
        //   this.localInf = JSON.parse(localStorage.getItem("FGQTManagerTW")) //质检 主管
        // } else if (this.judgeFlag.flag == '09') {
        //   this.localInf = JSON.parse(localStorage.getItem("FGQTSelfTW")) //质检 初终审本人任务列表 
        // } else if (this.judgeFlag.flag == '10') {
        //   this.localInf = JSON.parse(localStorage.getItem("QTTrialManagerTW")) //质检 初终审主管
        // } else if (this.judgeFlag.flag == '11') {
        //   this.localInf = JSON.parse(localStorage.getItem("FGQTReManagerTW")) //质检 复议任务列表（首次） ---区域无社保公积金按钮
        // } else if (this.judgeFlag.flag == '13') {
        //   this.localInf = JSON.parse(localStorage.getItem("QTComplianceTW")) //质检 合规经理任务列表 
        // }       
        // this.InputParameter= {};
        //     this.baseInf =null;
        //     this.base =null; //基本信息-基本信息
        //     this.insurances = null; //基本信息-保险费用
        //     this.insurance_record = null; //基本信息-保险费用记录
        //     this.medical_insurance_record = null;
        console.log(',,,,,,,')
        console.log(this.localInf)
        console.log(this.localInf.custName)
        console.log(this.localInf.certCode)
        this.post(baseurl.BaseUrl + "/rmMxSecFundQryAction!notSession_getMxSecInfo.action", {
          custName: this.localInf.custName,
          certCode: this.localInf.certCode
          // custName: this.custName,
          // certCode: this.certCode
          // custName: '乔义星',
          // certCode: '37142519720311977X'
        }).then(res => {
          if (res.success) {
            var sel=this;
            // 输入参数
            this.InputParameter = res.obj.inParam;
            console.log('mmmmmmmmmmmmmmmmmmmm')
            // 基本信息 
            if (res.obj.baseInfo != '') {
              sel.baseInf = JSON.parse(res.obj.baseInfo);
              sel.base = JSON.parse(sel.baseInf.base_info); //基本信息-基本信息
              sel.insurances = JSON.parse(sel.baseInf.insurances); //基本信息-保险费用
              sel.insurance_record = JSON.parse(sel.baseInf.insurance_record); //基本信息-保险费用记录
              sel.medical_insurance_record = JSON.parse(sel.baseInf.medical_insurance_record); //基本信息-医疗保险记录
              sel.delBase();
              if (sel.base != undefined) { //基本信息-基本信息
                sel.addTrThTd(sel.base, $('#sec_responseBaseInfoParams #t_01'), 3);
              };
              if (sel.insurances) { //基本信息-保险费用
                $.each(sel.insurances, (index, each) => {
                  sel.addTrThTd(each, $('#sec_responseBaseInfoParams #t_02'), 3);
                });
              }
              if (sel.insurance_record) { //基本信息-保险费用记录
                $.each(sel.insurance_record, (index, each) => {
                  sel.addTrThTd(each, $('#sec_responseBaseInfoParams #t_03'), 6);
                });
              }
              if (sel.medical_insurance_record) { //基本信息-医疗保险记录
                $.each(sel.medical_insurance_record, (index, each) => {
                  sel.addTrThTd(each, $('#sec_responseBaseInfoParams #t_04'), 4);
                });
              }
            }
            // 报告信息
            if (res.obj.reportInfo != '') {
              sel.reportInf = JSON.parse(res.obj.reportInfo);
              sel.ReportBase = sel.reportInf.basic_info.user_basic_info; //用户及账户基本信息
              sel.ReportBaseCheck = sel.reportInf.basic_info.user_basic_info_check; //用户基本信息效验
              sel.ReportSocialSec = sel.reportInf.social_insurance_summary.society_detail //社保信息
              sel.ReportMedInsu = sel.reportInf.medical_insurance_bill.medical_insurance_pay; //医疗保险缴存信息
              sel.ReportExpenseDet = sel.reportInf.medical_consumption_details.medical_consumption_basic //医保消费明细
              sel.ReportSecRecord = sel.reportInf.medical_consumption_details.medical_consumption_record.securities_report; //医保卡消费记录
              //用户及账户基本信息
              if (sel.ReportBase != undefined) {
                sel.addTrThTd(sel.ReportBase, $('#sec_responseParams #t_1'), 3);
              }
              //用户基本信息效验
              if (sel.ReportBaseCheck != undefined) {
                sel.addTrThTd(sel.ReportBaseCheck, $('#sec_responseParams #t_2'), 3);
              }
              //社保保险信息摘要
              if (sel.ReportSocialSec != undefined) {
                $.each(sel.ReportSocialSec, (index, each) => {
                  if (each == undefined) return;
                  sel.addTrThTd(each, $('#sec_responseParams #t_3'), 3);
                });
              }
              //医疗保险缴存信息
              if (sel.ReportMedInsu.保险名称 != undefined) {
                $('#sec_responseParams #t_4').append(
                  "<tr style='border-bottom:1px solid #ebeef5'><th>保险名称</th></tr>");
                sel.addTd(sel.ReportMedInsu.保险名称, $('#sec_responseParams #t_4').find('tr:last'), true);
                // sel.addTrThTd(sel.ReportMedInsu.保险名称, $('#sec_responseParams #t_4'), 3, true);
              }
              if (sel.ReportMedInsu['缴存基数[元]'] != undefined) {
                $('#sec_responseParams #t_4').append(
                  "<tr style='border-bottom:1px solid #ebeef5'><th>缴存基数</th></tr>");
                sel.addTd(sel.ReportMedInsu['缴存基数[元]'], $('#sec_responseParams #t_4').find('tr:last'), true);
                // sel.addTrThTd(sel.ReportMedInsu['缴存基数[元]'], $('#sec_responseParams #t_4'), 3, true);
              }
              if (sel.ReportMedInsu['单位缴存金额[元]']) {
                $('#sec_responseParams #t_4').append(
                  "<tr style='border-bottom:1px solid #ebeef5'><th>单位缴存金额</th></tr>");
                sel.addTd(sel.ReportMedInsu['单位缴存金额[元]'], $('#sec_responseParams #t_4').find('tr:last'), true);
                // sel.addTrThTd(sel.ReportMedInsu['单位缴存金额[元]'], $('#sec_responseParams #t_4'), 3, true);
              }
              if (sel.ReportMedInsu['个人缴存金额[元]']) {
                $('#sec_responseParams #t_4').append(
                  "<tr style='border-bottom:1px solid #ebeef5'><th>个人缴存金额</th></tr>");
                sel.addTd(sel.ReportMedInsu['个人缴存金额[元]'], $('#sec_responseParams #t_4').find('tr:last'), true);
                // sel.addTrThTd(sel.ReportMedInsu['个人缴存金额[元]'], $('#sec_responseParams #t_4'), 3, true);
              }
              if (sel.ReportMedInsu.缴存状态标记) {
                $('#sec_responseParams #t_4').append(
                  "<tr  style='border-bottom:1px solid #ebeef5'><th>缴存状态标记</th></tr>");
                sel.addTd(sel.ReportMedInsu.缴存状态标记, $('#sec_responseParams #t_4').find('tr:last'), true);
                // sel.addTrThTd(sel.ReportMedInsu.缴存状态标记, $('#sec_responseParams #t_4'), 3, true);
              }
              //医保消费明细
              if (sel.ReportExpenseDet["消费金额[元]"] != undefined) {
                $('#sec_responseParams #t_5').append(
                  "<tr style='border-bottom:1px solid #ebeef5'><th>消费金额</th></tr>");
                sel.addTd(sel.ReportExpenseDet["消费金额[元]"], $('#sec_responseParams #t_5').find('tr:last'), true);
                // sel.addTrThTd(sel.ReportExpenseDet["消费金额[元]"], $('#sec_responseParams #t_5'), 3, true);
              }
              if (sel.ReportExpenseDet.消费次数 != undefined) {
                $('#sec_responseParams #t_5').append(
                  "<tr style='border-bottom:1px solid #ebeef5'><th>消费次数</th></tr>");
                sel.addTd(sel.ReportExpenseDet.消费次数, $('#sec_responseParams #t_5').find('tr:last'), true);
                // sel.addTrThTd(sel.ReportExpenseDet.消费次数, $('#sec_responseParams #t_5'), 3, true);
              }
              if (sel.ReportExpenseDet['每月最大单笔消费[元]'] != undefined) {
                $('#sec_responseParams #t_5').append(
                  "<tr style='border-bottom:1px solid #ebeef5'><th>每月最大单笔消费</th></tr>");
                sel.addTd(sel.ReportExpenseDet['每月最大单笔消费[元]'], $('#sec_responseParams #t_5').find('tr:last'),
                  true);
                // sel.addTrThTd(sel.ReportExpenseDet['每月最大单笔消费[元]'], $('#sec_responseParams #t_5'), 3, true);
              }
              //医保卡消费记录
              if (sel.ReportSecRecord != undefined) {
                $.each(sel.ReportSecRecord, (index, each) => {
                  if (each == undefined) return;
                  sel.addTrThTd(each, $('#sec_responseParams #t_6'), 4);
                });
              }
              sel.delReport();
            }
          } else {
            sel.$message.error(res.msg);
          }
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
      },
      addTrThTd(jsonObj, $table, rownum, isAllFormat) {
        var i = 1;
        $.each(jsonObj, (name, value) => {
          if (name.indexOf('Id') != -1) return;
          if (value == null) value = '';
          //金额字符串格式化
          if (isAllFormat) {
            if (!isNaN(value)) {
              value = utils.formatMoney(value / 100);
            }
          } else {
            if (name.match(/\[元\]$/)) {
              if (!isNaN(value)) {
                value = utils.formatMoney(value / 100);
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
              value = utils.formatMoney(value / 100);
            }
          } else {
            if (name.match(/\[元\]$/)) {
              if (!isNaN(value)) {
                value = utils.formatMoney(value / 100);
              }
            }
          }
          $tr.append("<td>" + name + '：' + value + '</td>');
        });
      },

    },
    updated() {
      console.log('ccccc')
      if(this.count===1){

      }
      this.count++;
      // this.getInf();
//   sel.$nextTick(function () {
//     sel.getInf();
//     // Code that will run only after the
//     // entire view has been re-rendered
//   })
// },
    //     activated(){
    //          console.log('activated')
    //  sel.getInf();
        },
    mounted() {
      this.getInf();
      console.log('mounted')
    }
  }

</script>
<style scoped>
  .SSComp {
    overflow-x: hidden;
    height: 100%;
  }

  .lists {
    padding: 4px 0 4px 21px;
  }

  .table {
    width: 100%;
  }

</style>
