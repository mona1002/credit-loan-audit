<template>
  <!--  储蓄卡   -->
  <div class="SocialSecurity carrierReport">
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="(item, index) in TabItems" :key="item.name" :label="item.title" :name="item.name">
        {{item.content}}
      </el-tab-pane>
    </el-tabs>
    <!-- <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs> -->
    <div id="dTab" title="储蓄卡1">
      <div>
        <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
          储蓄卡报告
        </h3>
      </div>
      <div class="table" style="padding-left: 0px">
        <h5 class="h5">报告信息</h5>
        <form id="f_1">
          <table>
            <tbody>
              <tr>
                <td>姓名：
                  <input name="name" type="text" readonly/>
                </td>
                <td>用户填写姓名:
                  <input name="user_name" type="text" readonly/>
                </td>
                <td>用户填写身份证：
                  <input name="user_idcard" type="text" readonly/>
                </td>
                <td>用户填写手机号：
                  <input name="user_phone" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>姓名是否一致：
                  <input name="name_match" type="text" readonly/>
                </td>
                <td>身份证是否一致：
                  <input name="idcard_match" type="text" readonly/>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>账户ID:
                  <input name="account_id" type="text" readonly/>
                </td>
                <td>卡号：
                  <input name="card" type="text" readonly/>
                </td>
                <td>银行名称：
                  <input name="bank" type="text" readonly/>
                </td>
                <td>开卡时间：
                  <input name="open_date" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>平均工资：
                  <input name="average_salary" type="text" readonly/>
                </td>
                <td>工资稳定性水平：
                  <input name="salary_stability" type="text" readonly/>
                </td>
                <td>月均还款额：
                  <input name="average_repayment_permonth" type="text" readonly/>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>


      <div class="table" style="padding-left: 0px">
        <h5 class="h5">账户信息</h5>
        <form id="f_2">
          <table>
            <tbody>
              <tr>
                <td>账户ID：
                  <input name="id" type="text" readonly/>
                </td>
                <td>账户类型：
                  <input name="type" type="text" readonly/>
                </td>
                <td>卡号：
                  <input name="card" type="text" readonly/>
                </td>
                <td>主副卡标志：
                  <input name="main_vice_flag" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>银行名称:
                  <input name="bank" type="text" readonly/>
                </td>
                <td>持卡人姓名：
                  <input name="holder" type="text" readonly/>
                </td>
                <td>证件号码：
                  <input name="idcard" type="text" readonly/>
                </td>
                <td>状态：
                  <input name="status" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>开卡时间：
                  <input name="open_date" type="text" readonly/>
                </td>
                <td>当前余额[元]：
                  <input name="balance" type="text" readonly/>
                </td>
                <td>卡产品名称：
                  <input name="card_name" type="text" readonly/>
                </td>
                <td>当前剩余欠款[元]：
                  <input name="current_arrears" type="text" readonly/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div class="table" style="padding-left: 0px">
        <h5 class="h5">每月汇总列表</h5>
        <div id="d_2" class="tabbox_x">
          <table id="t_2">
            <thead>
              <tr>
                <th>月数</th>
                <th>流出总笔数</th>
                <th>流出总金额[元]</th>
                <th>最大单笔流出金额[元]</th>
                <th>流入总笔数</th>
                <th>流入总金额[元]</th>
                <th>最大单笔流入金额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>

      <div class="table" style="padding-left: 0px">
        <h5 class="h5">结息情况</h5>
        <div class="tabbox">
          <table id="t_3">
            <thead>
              <tr>
                <th>日期</th>
                <th>余额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 没有该字段 -->
      <div class="table" style="padding-left: 0px">
        <h5 class="h5">工资</h5>
        <div id="d_4" class="tabbox_x">
          <table id="t_4">
            <thead>
              <tr>
                <th>日期</th>
                <th>金额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 没有该字段 -->
      <div class="table" style="padding-left: 0px">
        <h5 class="h5">第三方借贷</h5>
        <div class="tabbox_x">
          <table id="t_5">
            <thead>
              <tr>
                <th>机构名称</th>
                <th>还款日期</th>
                <th>还款金额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>

      <div class="table" style="padding-left: 0px">
        <h5 class="h5">流水详情</h5>
        <div class="tabbox_x">
          <table id="t_6">
            <thead>
              <tr>
                <th>账户ID</th>
                <th>入账时间</th>
                <th>入账金额[元]</th>
                <th>入账币种</th>
                <th>余额[元]</th>
                <th>交易账号卡号</th>
                <th>交易描述</th>
                <th>交易国家</th>
                <th>交易地点</th>
                <th>交易渠道</th>
                <th>对方账户名</th>
                <th>对方开户行</th>
                <th>对方账号</th>
                <th>摘要</th>
                <th>附言</th>
                <th>现钞/现汇</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import baseurl from '../../../util/ConstantSocialAndPn';
  import utils from '../../../util/utils';
  export default {
    data() {
      return {
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
        TabItems: [],
        editableTabsValue:'1',
        tabIndex: 0
      }
    },
    props: {
      applySubNo: {
        default: '',
        type: String,
        required: true
      }
    },
    methods: {
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
            $.messager.alert("提示", "查询数据失败！", "error");
            return;
          }
          if ("" != res.obj.rpt) {
            var result = $.parseJSON(res.obj.rpt);
            if (result && result.result && result.result['10061'] && result.result['10061'].bizInfo && result.result[
                '10061'].bizInfo.data) {
              var report = result.result['10061'].bizInfo.data.report;
              if (report.length > 0) {
                var dAccountIds = [];
                $.each(report, (i, eh) => {
                  if ('储蓄卡' == eh.type && eh.data.length > 0) {
                    this.addTab(dTabs, $('#cardTabs #dTab').html(), eh.data.length - 1, "储蓄卡");
                    $.each(eh.data, (n, v) => {
                      dAccountIds.push(v.account_id); //没有该字段
                      //dAccountIds.push(v.card);
                      loadReport(dTabs.tabs('getTab', n), v);
                    });
                  }
                });

                $.each(report, function (i, eh) {
                  if ('信用卡' == eh.type && eh.data.length > 0) {
                    if (dAccountIds.length == 0) { //没有储蓄卡时，关闭出卡页签
                      dTabs.tabs('close', '储蓄卡1');
                    }
                    this.addTab(dTabs, $('#cTemplate').html(), eh.data.length, "信用卡");
                    $.each(eh.data, function (n, v) {
                      dAccountIds.push(v.account_id); //没有该字段
                      //dAccountIds.push(v.card);
                      loadReport_c(dTabs.tabs('getTab', dAccountIds.length - 1), v);
                    });
                  }
                });
              }
            }
          }
          if ("" != res.obj.rawRpt) {
            var dCardRawReport;
            var rawResult = $.parseJSON(res.obj.rawRpt);
            if (rawResult && rawResult.result && rawResult.result['10063'] && rawResult.result['10063'].bizInfo) {
              dCardRawReport = rawResult.result['10063'].bizInfo.data;
              loadRawReport(dTabs, dCardRawReport, dAccountIds);
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
              jsonObj[eh] = formatMoney(parseInt(jsonObj[eh]) / 100);
            }
          }
        });
      },

      addTab($tab, content, tabNum, title) {
        if (tabNum == 0) return;
        for (i = 0; i < tabNum; i++) {
          var tname = title;
          if (title == '储蓄卡') {
            tname += (i + 2);
          } else if (title == '信用卡') {
            tname += (i + 1);
          }
          //   this.TabItems.push(tname)
          //   $tab.tabs('add', {
          //     title: tname,
          //     content: content
          //   }); 
          let newTabName = ++this.tabIndex + '';
          this.TabItems.push({
            title: tname,
            name: newTabName,
            content: content
          });
          this.editableTabsValue = newTabName;
        }




      },

      loadReport($dTab, reportData) {
        if (!reportData) return;
        fen_to_yuan(reportData, ['average_salary', 'average_repayment_permonth']);
        $dTab.find('#f_1').form('load', reportData);
        if (reportData.month_summaries && reportData.month_summaries.length > 0) {
          //$('#div_dCard #d_2').attr('style','height:700px');
          $.each(reportData.month_summaries, (i, eh) => {
            fen_to_yuan(eh, ['outflow_max_amount', 'outflow_sum_amount', 'inflow_max_amount', 'inflow_sum_amount']);
            addRow($dTab.find('#t_2 tbody'), ['month', 'outflow_count', 'outflow_sum_amount', 'outflow_max_amount',
              'inflow_count', 'inflow_sum_amount', 'inflow_max_amount'
            ], eh);
          });
        }
        if (reportData.interests && reportData.interests.length > 0) {
          $.each(reportData.interests, (i, eh) => {
            fen_to_yuan(eh, ['amount']);
            addRow($dTab.find('#t_3 tbody'), ['date', 'amount'], eh);
          });
        }
        if (reportData.salaries && reportData.salaries.length > 0) {
          $.each(reportData.salaries, (i, eh) => {
            fen_to_yuan(eh, ['amount']);
            addRow($dTab.find('#t_4 tbody'), ['date', 'amount'], eh);
          });
        }
        if (reportData.loans && reportData.loans.length > 0) {
          $.each(reportData.loans, (i, eh) => {
            $.each(eh.repayments, (n, val) => {
              var rd = val;
              val.amount = formatMoney(parseInt(val.amount) / 100);
              val.organization = eh.organization;
              addRow($dTab.find('#t_5 tbody'), ['organization', 'date', 'amount'], val);
            });
          });
        }
      },

      loadReport_c($cTab, reportData) {
        if (!reportData) return;
        fen_to_yuan(reportData, ['consume_limit', 'usable_consume_limit', 'cash_limit', 'usable_cash_limit']);
        reportData.overdue_status_txt = reportData.overdue_status.toString().replace(/[0]/g, '未逾期').replace(/[1]/g,
          '逾期');
        $cTab.find('#f_1').form('load', reportData);
        if (reportData.bills && reportData.bills.length > 0) {
          $.each(reportData.bills, (i, eh) => {
            fen_to_yuan(eh, ['amount', 'repayment']);
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
              fen_to_yuan(eh, ['balance', 'current_arrears']);
              $dTabs.tabs('getTab', index).find('#f_2').form('load', eh);
            }
          });
        }
        if (rawReportData.flows && rawReportData.flows.length > 0) {
          $.each(rawReportData.flows, (i, eh) => {
            var index = accountIds.indexOf(eh.account_id);
            //var index = accountIds.indexOf(eh.account_no);
            if (index != -1) {
              fen_to_yuan(eh, ['settle_amount', 'balance']);
              addRow($dTabs.tabs('getTab', index).find('#t_6 tbody'), ['account_id', 'settle_time', 'settle_amount',
                'settle_currency', 'balance', 'account_no', 'trade_description', 'trade_nation', 'trade_place',
                'trade_channel', 'oppesite_name', 'oppesite_bank', 'oppesite_account', 'summary', 'postscript',
                'cash_remit'
              ], eh);
            }
          });
        }
      }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
<style scoped>
  #t_1 td,
  #t_2_1 td,
  #t_2_2 td,
  #t_6_2 td,
  #t_6_2 th {
    border: 1px solid #d8dce5;
    /* border: 1px solid red; */
    padding-left: 5px;
  }

</style>
