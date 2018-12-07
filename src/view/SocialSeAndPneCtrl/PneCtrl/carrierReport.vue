<template>
  <!--  运营商报告   -->
  <div class="SocialSecurity debitCardReport">
    <el-tabs type="border-card">
      <el-tab-pane label="立木">
        <carrierReport2 :Inf.sync='LM'> </carrierReport2>
      </el-tab-pane>
      <el-tab-pane label="聚信立">
        <carrierReport1 :applySubNo='applySubNo' :Inf.sync='JLX'> </carrierReport1>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import carrierReport1 from './carrierReport1.vue';
  import carrierReport2 from './carrierReport2.vue';
  export default {
    data() {
      return {
        caReport: {},
        JLX: {},
        LM: {}
      }
    },
    methods: {
      formatRatePercentage100(val, row) {
        if (!$.isNumeric(val)) {
          return val;
        }
        if (val == 0) {
          return "0.00%";
        }
        var n = 2;
        if (val != '' && val != undefined) {
          return parseFloat((val + "").replace(/[^\d\.-]/g, "") * 100).toFixed(n) + "%";
        }
      },
      getInf() {
        // this.get('http://10.1.26.130:20716/riskManagement/tripartiteData/queryReport', {
        this.get('/tripartiteData/queryReport', {
          applySubNo: this.applySubNo,
          // applySubNo: '201801080512013502',
          category: '02'
        }).then(res => {
          if (res.statusCode == 200) {
            if (res.data) {
              let resp = res.data;
              let report = res.data.reportData ? JSON.parse(resp.reportData) : {}; //报告数据
              let rawreport = res.data.rawData ? JSON.parse(resp.rawData) : {}; //原始数据
              let reportData = {};
              //  判断是聚立信还是立木
              if (resp.orgType == "jxl") { //聚立信
                let jlx = {};
                let sinfo = {};
                let binfo = {};
                let _cellBehavior = [];
                report.report_data ? reportData = report.report_data : '';
                if (reportData) {
                  if (reportData.application_check && reportData.application_check.length > 0) {
                    var contactNum = 0; //联系人个数
                    $.each(reportData.application_check, function (i, eh) {
                      let cps = eh.check_points;
                      let info = '';
                      if (eh.app_point == 'user_name') {
                        jlx.user_name = cps.key_value; //姓名
                      } else if (eh.app_point == 'id_card') {
                        info += cps.key_value;
                        if (cps.court_blacklist && cps.court_blacklist.arised == true) info += '	在法院黑名单';
                        if (cps.financial_blacklist && cps.financial_blacklist.arised == true) info +=
                          '	在金融机构黑名单';
                        info += '	' + cps.gender + ' | ' + cps.age + '	' + cps.province + cps.city + cps.region;
                        jlx.id_card = info; //身份证
                      } else if (eh.app_point == 'cell_phone') {
                        info += cps.website + ' | ' + cps.reliability + '：' + cps.reg_time + '    ' + cps.key_value;
                        if (cps.court_blacklist && cps.court_blacklist.arised == true) info += '	在法院黑名单';
                        if (cps.financial_blacklist && cps.financial_blacklist.arised == true) info +=
                          '	在金融机构黑名单';
                        jlx.cell_phone1 = info;
                        jlx.cell_phone2 = cps.check_name; //手机号
                        jlx.cell_phone3 = cps.check_idcard
                        jlx.cell_phone4 = cps.check_ebusiness;
                      } else if (eh.app_point == 'home_addr') {
                        jlx.home_addr1 = cps.key_value;
                        cps.check_addr ? jlx.home_addr2 = cps.check_addr : jlx.home_addr2 = '';
                        cps.check_ebusiness ? jlx.home_addr3 = cps.check_ebusiness : jlx.home_addr3 = '';
                      } else if (eh.app_point == 'home_phone') {
                        jlx.home_phone = cps.key_value + '	' + cps.check_mobile;
                      } else if (eh.app_point == 'contact') {
                        jlx.contact1 = cps.relationship + ' | ' + cps.contact_name + ' | ' + cps.key_value +
                          '	' +
                          cps.check_xiaohao;
                        jlx.contact2 = cps.check_mobile;
                        // if (contactNum == 0) $(' #t_1 toboday tr[id="ct_tr"]').remove();?????????
                        // $(' #t_1 tobody tr').eq(-2).before('<tr><td>联系人：</td><td>' + info + '</td></tr>');?????????//
                        contactNum = contactNum + 1;
                      } else if (eh.app_point == 'jingdong') {
                        jlx.jingdong = cps.key_value + '	' + cps.reliability + '		' + cps.reg_time;
                      }
                    });
                  }
                  //用户信息检测
                  if (reportData.user_info_check) {
                    //联系人数据
                    if (reportData.user_info_check.check_search_info) {
                      sinfo = reportData.user_info_check.check_search_info;
                      for (let key in sinfo) {
                        sinfo[key] = sinfo[key].toString();
                      }
                    }
                    //黑名单
                    if (reportData.user_info_check.check_black_info) {
                      binfo = reportData.user_info_check.check_black_info;
                      // Object.assign(jlx, binfo);
                    }
                    //用户行为检测
                    jlx.behavior_check = reportData.behavior_check ? reportData.behavior_check : [];
                    //运营商数据
                    if (reportData.cell_behavior && reportData.cell_behavior.length > 0) {
                      // let _cellBehavior = [];
                      reportData.cell_behavior.forEach((eh, i) => {
                        _cellBehavior = _cellBehavior.concat(eh.behavior)
                      });
                    }
                    //联系人区域汇总
                    jlx.contact_region = reportData.contact_region ? reportData.contact_region : [];
                    //运营商数据分析——联系人通话详情
                    jlx.contact_list = reportData.contact_list ? reportData.contact_list : [];
                    //运营商数据分析——常用服务
                    if (reportData.main_service && reportData.main_service.length > 0) {
                      reportData.main_service.forEach((eh, i) => {
                        let fieldsArr = [{
                          label: '服务企业类型',
                          value: eh.company_type
                        }, {
                          label: '企业名称',
                          value: eh.company_name
                        }, {
                          label: '总互动次数',
                          value: eh.company_name
                        }];
                        let arr = [];
                        eh.service_details.forEach((val, ind) => {
                          let obj = {
                            label: val.interact_mth,
                            value: val.interact_cnt
                          }
                          arr.push(obj);
                        })
                        jlx.main_service.push(fieldsArr.concat(arr));
                      });
                    } else {
                      jlx.main_service = [];
                    }
                    //电商地址分析
                    jlx.deliver_address = reportData.deliver_address ? reportData.deliver_address : [];
                    //电商月消费分析
                    jlx.ebusiness_expense = reportData.ebusiness_expense ? reportData.ebusiness_expense : [];
                    //联系人名单
                    jlx.collection_contact = reportData.collection_contact ? reportData.collection_contact : [];
                    //出行分析
                    jlx.trip_info = reportData.trip_info ? reportData.trip_info : [];
                  }
                  jlx.cell_behavior = _cellBehavior;
                  Object.assign(jlx, sinfo, binfo);
                }
                this.JLX = jlx;
              } else if (resp.orgType == "lm") { //立木
                let lm = {},
                  personas = {};
                reportData = report.data ? report.data : {};
                let rawInf = rawreport.data ? rawreport.data : {};
                if (reportData) {
                  lm.stati = rawInf.stati ? rawInf.stati : []; // 前10通话次数记录
                  lm.callRecordInfo = rawInf.callRecordInfo ? rawInf.callRecordInfo : []; //近6个月通话记录详单
                  lm.bill = rawInf.bill ? rawInf.bill : []; //近6个月账单信息
                  lm.smsInfo = rawInf.smsInfo ? rawInf.smsInfo : []; //近6个月短信信息
                  lm.netInfo = rawInf.netInfo ? rawInf.netInfo : []; //近6个月上网信息
                  lm.businessInfo = rawInf.businessInfo ? rawInf.businessInfo : []; //近6个月办理业务信息
                  //用户画像
                  let _personas = reportData.personas ? reportData.personas : {};
                  personas.riskCallCnt = _personas.riskProfile ? _personas.riskProfile.riskCallCnt : '';
                  //  社交概况:socialContactProfile   通话概况:callProfile   消费概况:consumptionProfile
                  Object.assign(personas, _personas.socialContactProfile, _personas.callProfile, _personas.consumptionProfile)
                  //风险通话检测
                  // personas.riskCallCheck = _personas.riskCallCheck ? _personas.riskCallCheck:[];
                  lm.riskCallCheck = reportData.riskCallCheck ? reportData.riskCallCheck : [];
                  //通话概况 
                  lm.callAnalysis = reportData.callAnalysis ? [reportData.callAnalysis] : [];
                  //活跃情况
                  lm.activeCallAnalysis = reportData.activeCallAnalysis ? reportData.activeCallAnalysis : [];
                  // 静默情况
                  lm.silenceAnalysis = reportData.silenceAnalysis ? [reportData.silenceAnalysis] : [];
                  //通话时间段分析
                  lm.callDurationAnalysis = reportData.callDurationAnalysis ? reportData.callDurationAnalysis : [];
                  // 消费能力分析
                  lm.consumptionAnalysis = reportData.consumptionAnalysis ? reportData.consumptionAnalysis : [];
                  //出行信息
                  lm.tripAnalysis = reportData.tripAnalysis ? reportData.tripAnalysis : [];
                  // 社交关系概况
                  lm.socialContactAnalysis = reportData.socialContactAnalysis ? reportData.socialContactAnalysis : [];
                  //通话区域分析 
                  lm.callAreaAnalysis = reportData.callAreaAnalysis ? reportData.callAreaAnalysis : [];
                  //通话联系人分析
                  lm.contactAnalysis = reportData.contactAnalysis ? reportData.contactAnalysis : [];
                  Object.assign(lm, rawInf.basicInfo, reportData.basicInfo, personas); //basicInfo:   基本信息
                }
                this.LM = lm;
              }
            }
          }
        });
      },
    },
    components: {
      carrierReport1,
      carrierReport2
    },
    props: {
      applySubNo: {
        default: '',
        type: String,
        required: true
      }
    },
    created() {
      this.getInf();
    }
  }

</script>
