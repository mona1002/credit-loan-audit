<template>
  <!--  储蓄卡   -->
  <div class="SocialSecurity carrierReport">
    <!-- <div class="Right_tab_ul_wrap">
              <ul ref="right_tab_ul" style="left:0;right:0;">
                <li class="tab2Default" ref="tabTwo" v-for="(val,index) in item" :key="index" @mousedown="tab2($event,index,val)"
                  :class="{tab2Act:tab2Index==index}">
                  {{val}}</li>
              </ul>
            </div>
              <div class="tab2_Content" id="creditcontent">
          </div> -->




    <el-tabs v-model="editableTabsValue" type="card">
      <!-- <el-tab-pane v-for="(item,index) in editableTabs" :key="item.name" :label="item.title" :name="item.name"> -->
      <!-- <debitCardConponent :monthSummaries='aaa'> </debitCardConponent> -->
      <!-- {{item}}
      </el-tab-pane> -->
      <el-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.type" :name="index+''">
        <!-- {{typeof(item)}} -->
        <!-- {{index}}  -->
        <div v-for="(val,ind) in item.data" :key="ind">
          <!-- {{ val.accounts}} -->
          {{typeof(val)}}
          <debitCardConponent :monthSummaries='val.month_summaries' :reportObj='val' :accountObj='val.accounts' :totalVal='val'> </debitCardConponent>

          <!-- {{val.account_id}}
  {{val.month_summaries}} -->
        </div>

        <!-- {{typeof(item.data)}} -->
        <!-- {{item.month_summaries}} -->
        <!-- <debitCardConponent :monthSummaries='item.data.month_summaries'> </debitCardConponent> -->
      </el-tab-pane>
    </el-tabs>
    <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs> -->

  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  import utils from '../../../util/utils';
  import debitCardConponent from './debitCardConponent.vue';

  export default {
    data() {
      return {
        tab2Index: 0,
        item: [],
        aaa: [],

        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        caReport: {},
        behaviorCheck: [],
        contactRegion: [],
        contactList: [],
        cellBehavior: [],
        deliverAddress: [],
        ebusinessExpense: [],
        collectionContact: [],
        triInfo: [],
        activeName: 'first',
        editableTabs: [
          //   {
          //   title: 'Tab 1',
          //   name: '1',
          //   content: 'Tab 1 content'
          // }, 
        ],
        editableTabsValue: '0',
        tabIndex: 0,
        defaultPart: false,
      }
    },
    components: {
      debitCardConponent
    },
    props: {
      applySubNo: {
        default: '',
        type: String,
        required: true
      }
    },
    methods: {
      tab2() {

      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //   addTab(targetName) {
      //     let newTabName = ++this.tabIndex + '';
      //     this.editableTabs2.push({
      //       title: 'New Tab',
      //       name: newTabName,
      //       content: 'New Tab content'
      //     });
      //     this.editableTabsValue2 = newTabName;
      //   },
      getInf() {
        this.post(baseurl.DataUrl + '/channel/threeDataAction!notSession_getdCardReport.action', {
          applySubNo: this.applySubNo
          //   applySubNo : 'PHDX6409598026121216'
        }).then(res => {
          console.log(3, res)
          if (!res.success) {
            return;
          }
          if ("" != res.obj.rpt) {
            var result = $.parseJSON(res.obj.rpt);
            if (result && result.result && result.result['10061'] && result.result['10061'].bizInfo && result.result[
                '10061'].bizInfo.data) {
              var report = result.result['10061'].bizInfo.data.report;
              var arr = [];
              console.log('result:', result)
              console.log('report:', report)
              // this.editableTabs = arr.concat(report);
              console.log('editableTabs', this.editableTabs)
              if (report.length > 0) {
                $.each(report, (i, eh) => {
                  console.log(i, eh)
                  if (eh.data.length > 0) {
                    this.editableTabs.push(eh)
                  }
                  //   if ('储蓄卡' == eh.type && eh.data.length > 0) {
                  //     // addTab(dTabs, $('#cardTabs #dTab').html(), eh.data.length - 1, "储蓄卡");
                  //     $.each(eh.data,  (n, v) =>{
                  //       dAccountIds.push(v.account_id); //没有该字段
                  //       //dAccountIds.push(v.card);
                  //       loadReport(dTabs.tabs('getTab', n), v);
                  //     });
                  //   }
                });

                // $.each(report,  (i, eh) =>{
                //   if ('信用卡' == eh.type && eh.data.length > 0) {
                //     if (dAccountIds.length == 0) { //没有储蓄卡时，关闭出卡页签
                //       dTabs.tabs('close', '储蓄卡1');
                //     }
                //     addTab(dTabs, $('#cTemplate').html(), eh.data.length, "信用卡");
                //     $.each(eh.data,  (n, v) =>{
                //       dAccountIds.push(v.account_id); //没有该字段
                //       //dAccountIds.push(v.card);
                //       loadReport_c(dTabs.tabs('getTab', dAccountIds.length - 1), v);
                //     });
                //   }
                // });
              }
              console.log('editableTabs.push::::::', this.editableTabs)
            }
          }
          if ("" != res.obj.rawRpt) {
            var rawResult = $.parseJSON(res.obj.rawRpt);
            console.log('rawResult:', rawResult)
            var dCardRawReport;
            if (rawResult && rawResult.result && rawResult.result['10063'] && rawResult.result['10063'].bizInfo) {
              dCardRawReport = rawResult.result['10063'].bizInfo.data;
              console.log('bizInfo:', dCardRawReport)
              console.log(typeof (dCardRawReport))
              $.each(dCardRawReport.accounts, (i, eh) => {
                var obj = {
                  accounts: eh
                }
                console.log(111, eh)
                console.log(1222, i)
                console.log('我要添加进去', this.editableTabs)

                //  this.editableTabs[i].data[i].push(obj)
                Object.assign(this.editableTabs[i].data[i], obj)
                //  this.editableTabs[i].data[i].push(obj)

                // if(eh.data.length>0){

                // }
              })
              //   this.loadRawReport(dTabs, dCardRawReport, dAccountIds);
              console.log('已经添加进去：', this.editableTabs)
            }
          }
        });
      },
      addRow($table, rfields, rdata) {
        var row = '<tr>';
        $.each(rfields, (index, val) => {
          if (rdata[val] != undefined) {
            row += '<td>' + rdata[val] + '</td>';
          } else {
            row += '<td>' + '' + '</td>';
          }
        });
        row += '</tr>';
        $table.append(row);
      },

      addTdRowSpan($table, fName, rowSpan, rowData) {
        $.each(rowData, (i, val) => {
          if (i == 0) {
            var row = '<tr><td rowspan="' + rowSpan +
              '" style="text-align: center;vertical-align: middle;width: 15%">' +
              fName + '</td><td>' + rowData[i] + '</td></tr>';
            $table.append(row);
          } else {
            $table.append('<tr><td>' + rowData[i] + '</td></tr>')
          }
        });
      },

      fen_to_yuan(jsonObj, fieldsArr) {
        $.each(fieldsArr, (i, eh) => {
          if (jsonObj[eh]) {
            if (jsonObj[eh]) {
              jsonObj[eh] = this.formatMoney(parseInt(jsonObj[eh]) / 100);
            }
          }
        });
      },
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
      addTab(targetName, content, tabNum, title) {
        console.log('targetName', targetName)
        console.log('content', content)
        console.log('tabNum', tabNum)
        console.log('title', title)
        if (tabNum == 0) return;
        let newTabName;
        for (var i = 0; i < tabNum; i++) {
          var tname = title;
          if (title == '储蓄卡') {
            tname += (i + 2);
          } else if (title == '信用卡') {
            tname += (i + 1);
          }
          newTabName = ++this.tabIndex + '';
          targetName.push({
            title: tname,
            name: newTabName,
            content: content,
            // content:``
          });
        }
        this.editableTabsValue = newTabName;
      },
      // addTab($tab, content, tabNum, title) {
      //   if (tabNum == 0) return;
      //   for (i = 0; i < tabNum; i++) {
      //     var tname = title;
      //     if (title == '储蓄卡') {
      //       tname += (i + 2);
      //     } else if (title == '信用卡') {
      //       tname += (i + 1);
      //     }
      //     //   this.editableTabs.push(tname)
      //     //   $tab.tabs('add', {
      //     //     title: tname,
      //     //     content: content
      //     //   }); 
      //     let newTabName = ++this.tabIndex + '';
      //     this.editableTabs.push({
      //       title: tname,
      //       name: newTabName,
      //       content: content
      //     });
      //     this.editableTabsValue = newTabName;
      //   }
      // },
      loadReport($dTab, reportData) {
        if (!reportData) return;
        this.fen_to_yuan(reportData, ['average_salary', 'average_repayment_permonth']);
        $dTab.find('#f_1').form('load', reportData);
        if (reportData.month_summaries && reportData.month_summaries.length > 0) {
          //$('#div_dCard #d_2').attr('style','height:700px');
          $.each(reportData.month_summaries, (i, eh) => {
            this.fen_to_yuan(eh, ['outflow_max_amount', 'outflow_sum_amount', 'inflow_max_amount',
              'inflow_sum_amount'
            ]);
            this.addRow($dTab.find('#t_2 tbody'), ['month', 'outflow_count', 'outflow_sum_amount',
              'outflow_max_amount',
              'inflow_count', 'inflow_sum_amount', 'inflow_max_amount'
            ], eh);
          });
        }
        if (reportData.interests && reportData.interests.length > 0) {
          $.each(reportData.interests, (i, eh) => {
            this.fen_to_yuan(eh, ['amount']);
            this.addRow($dTab.find('#t_3 tbody'), ['date', 'amount'], eh);
          });
        }
        if (reportData.salaries && reportData.salaries.length > 0) {
          $.each(reportData.salaries, (i, eh) => {
            this.fen_to_yuan(eh, ['amount']);
            this.addRow($dTab.find('#t_4 tbody'), ['date', 'amount'], eh);
          });
        }
        if (reportData.loans && reportData.loans.length > 0) {
          $.each(reportData.loans, (i, eh) => {
            $.each(eh.repayments, (n, val) => {
              var rd = val;
              val.amount = this.formatMoney(parseInt(val.amount) / 100);
              val.organization = eh.organization;
              this.addRow($dTab.find('#t_5 tbody'), ['organization', 'date', 'amount'], val);
            });
          });
        }
      },

      loadReport_c($cTab, reportData) {
        if (!reportData) return;
        this.fen_to_yuan(reportData, ['consume_limit', 'usable_consume_limit', 'cash_limit', 'usable_cash_limit']);
        reportData.overdue_status_txt = reportData.overdue_status.toString().replace(/[0]/g, '未逾期').replace(/[1]/g,
          '逾期');
        $cTab.find('#f_1').form('load', reportData);
        if (reportData.bills && reportData.bills.length > 0) {
          $.each(reportData.bills, (i, eh) => {
            this.fen_to_yuan(eh, ['amount', 'repayment']);
            addRow($cTab.find('#t_2 tbody'), ['bill_date', 'amount', 'limit_rate', 'repayment', 'repayment_rate',
              'consume_count'
            ], eh);
          });
        }
      },
      loadRawReport($dTabs, rawReportData, accountIds) {
        if (!rawReportData) return;
        if (rawReportData.accounts && rawReportData.accounts.length > 0) {
          $.each(rawReportData.accounts, (i, eh) => {
            var index = accountIds.indexOf(eh.id);
            //var index = accountIds.indexOf(eh.card);
            if (index != -1) {
              this.fen_to_yuan(eh, ['balance', 'current_arrears']);
              $dTabs.tabs('getTab', index).find('#f_2').form('load', eh);
            }
          });
        }
        if (rawReportData.flows && rawReportData.flows.length > 0) {
          $.each(rawReportData.flows, (i, eh) => {
            var index = accountIds.indexOf(eh.account_id);
            //var index = accountIds.indexOf(eh.account_no);
            if (index != -1) {
              this.fen_to_yuan(eh, ['settle_amount', 'balance']);
              addRow($dTabs.tabs('getTab', index).find('#t_6 tbody'), ['account_id', 'settle_time', 'settle_amount',
                'settle_currency', 'balance', 'account_no', 'trade_description', 'trade_nation', 'trade_place',
                'trade_channel', 'oppesite_name', 'oppesite_bank', 'oppesite_account', 'summary', 'postscript',
                'cash_remit'
              ], eh);
            }
          });
        }
      },
      //       fen_to_yuan(jsonObj, fieldsArr) {
      //   $.each(fieldsArr, function (i, eh) {
      //     if (jsonObj[eh]) {
      //       jsonObj[eh] = utils.formatMoney(parseInt(jsonObj[eh]) / 100);
      //     }
      //   });
      // }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
<style scoped>
  #t_1 td,
  #f_1 td,
  #f_2 td,
  #t_2 td,
  #t_3 td,
  #t_4 td,
  #t_5 td,
  #t_6 td {
    border: 1px solid #d8dce5;
    /* border: 1px solid red; */
    padding-left: 5px;
  }

</style>
