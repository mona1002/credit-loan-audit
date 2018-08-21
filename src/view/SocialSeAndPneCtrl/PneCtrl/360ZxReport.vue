<template>
  <!-- 网查征信报告 -->
  <div class="SocialSecurity ZxReport">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">1.1 基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">登录名：</label>
                <span>{{zxReport.loginName}}</span>
              </li>
              <li>
                <label class="label_width_166">报告时间：</label>
                <span>{{zxReport.reportTime}}</span>
              </li>
              <li>
                <label class="label_width_166">查询时间：</label>
                <span>{{zxReport.queryTime}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">姓名：</label>
                <span>{{zxReport.name}}</span>
              </li>
              <li>
                <label class="label_width_166">证件类型：</label>
                <span>{{zxReport.idType}}</span>
              </li>
              <li>
                <label class="label_width_166">证件号：</label>
                <span>{{zxReport.idCard}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_166">婚姻状况：</label>
                <span>{{zxReport.marriage}}</span>
              </li>
              <li>
                <label class="label_width_166">得分对应评级：</label>
                <span>{{zxReport.grade}}</span>
              </li>
              <li>
                <label class="label_width_166">模型评估得分：</label>
                <span>{{zxReport.score}}</span>
              </li>
            </div>
          </ul>
        </div>
          
        <h6 class="sort">信用卡</h6>
        <table id="t_1_1" style="width:100%;">
          <tbody>
          </tbody>
        </table>
        <h6 class="sort">房贷记录</h6>
        <table id="t_1_2" style="width:100%;">
          <tbody>
          </tbody>
        </table>
        <h6 class="sort">其他贷款</h6>
        <table id="t_1_3" style="width:100%;">
          <tbody>
          </tbody>
        </table>
        <h6 class="sort">为他人担保</h6>
        <table id="t_1_4" style="width:100%;">
          <tbody>
          </tbody>
        </table>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">2.1 信息摘要</span>
        </template>
        <table id="t_2" style="width:100%">
          <thead>
            <tr>
              <th class="table_th">类别</th>
              <th class="table_th">账户数</th>
              <th class="table_th">未结清/未销户账户数</th>
              <th class="table_th">发生过逾期的账户数</th>
              <th class="table_th">发生过90天以上逾期的账户数</th>
              <th class="table_th">为他人担保笔数</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <!-- <div class="height_auto">
          <el-table :data="behaviorCheck" style="width:100%;" highlight-current-row border>
            <el-table-column prop="check_point_cn" label="检查项" min-width="180">
            </el-table-column>
            <el-table-column prop="result" label="结果" min-width="160">
            </el-table-column>
            <el-table-column prop="evidence" label="依据" min-width="180">
            </el-table-column>
          </el-table>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">2.2 信用卡记录明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="creditCardDetail" style="width:100%;" highlight-current-row border>
            <el-table-column prop="bank" label="发行银行" width="140">
            </el-table-column>
            <el-table-column prop="release_date" label="发行日期" width="90">
            </el-table-column>
            <el-table-column prop="card_type" label="卡类型" min-width="100">
            </el-table-column>
            <el-table-column prop="account_type" label="账户类型" width="140">
            </el-table-column>
            <el-table-column prop="due_date" label="截止日期" width="100">
            </el-table-column>
            <el-table-column prop="credit_amt" label="信用额度" width="100">
            </el-table-column>
            <el-table-column prop="used_amt" label="已使用额度" width="120">
            </el-table-column>
            <el-table-column prop="over_due_amount" label="逾期额度" width="100">
            </el-table-column>
            <el-table-column prop="is_delq" label="是否逾期" width="80">
            </el-table-column>
            <el-table-column prop="is_active" label="是否激活" width="80">
            </el-table-column>
            <el-table-column prop="balance" label="余额" width="100">
            </el-table-column>
            <el-table-column prop="is_overdraft" label="是否透支" width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">2.3 房贷记录明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="houseLoanDetail" style="width:100%;" highlight-current-row border>
            <el-table-column prop="bank" label="发卡银行" width="140">
            </el-table-column>
            <el-table-column prop="release_date" label="发卡日期" width="90">
            </el-table-column>
            <el-table-column prop="release_count" label="发放金额" width="80">
            </el-table-column>
            <el-table-column prop="account_type" label="账户类型" width="80">
            </el-table-column>
            <el-table-column prop="loan_type" label="贷款类型" width="80">
            </el-table-column>
            <el-table-column prop="deadline" label="到期日期" width="90">
            </el-table-column>
            <el-table-column prop="due_date" label="截至日期" width="90">
            </el-table-column>
            <el-table-column prop="is_delq" label="是否逾期" width="80">
            </el-table-column>
            <el-table-column prop="balance" label="余额" width="120">
            </el-table-column>
            <el-table-column prop="overdue_amount" label="逾期金额" width="120">
            </el-table-column>
            <el-table-column prop="delq_l5y_amt" label="近五年内逾期数" width="120">
            </el-table-column>
            <el-table-column prop="delq_l5y_90day_amt" label="近五年内逾期超过90天数" width="180">
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="120">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">2.4 其他贷款记录明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="otherloanDetail" style="width:100%;" highlight-current-row border>
            <el-table-column prop="releaser" label="发放机构" min-width="220">
            </el-table-column>
            <el-table-column prop="release_date" label="发放日期" width="160">
            </el-table-column>
            <el-table-column prop="release_count" label="发放金额" width="100">
            </el-table-column>
            <el-table-column prop="account_type" label="账户类型" min-width="100">
            </el-table-column>
            <el-table-column prop="loan_type" label="贷款类型" width="100">
            </el-table-column>
            <el-table-column prop="is_delq" label="是否逾期" width="100">
            </el-table-column>
            <el-table-column prop="settle_date" label="结清日期" width="160">
            </el-table-column>
            <el-table-column prop="overdue_amount" label="逾期金额" width="100">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="100">
            </el-table-column>
            <el-table-column prop="sts_happen_date" label="状态发生时间" width="160">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">2.5 为他人担保记录明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="guaranteeForOthers" style="width:100%;" highlight-current-row border>
            <el-table-column prop="guarantor" label="为谁担保" width="120">
            </el-table-column>
            <el-table-column prop="guarantee_date" label="担保日期" width="160">
            </el-table-column>
            <el-table-column prop="guarantee_place" label="担保地址" min-width="180">
            </el-table-column>
            <el-table-column prop="card_type" label="证件类型" width="80">
            </el-table-column>
            <el-table-column prop="card_num" label="证件号" width="180">
            </el-table-column>
            <el-table-column prop="loan_type" label="贷款类型" width="100">
            </el-table-column>
            <el-table-column prop="loan_count" label="贷款额" width="120">
            </el-table-column>
            <el-table-column prop="guarantee_count" label="担保额" width="120">
            </el-table-column>
            <el-table-column prop="due_date" label="截至日期" width="90">
            </el-table-column>
            <el-table-column prop="balance" label="余额" width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">3.1强制执行记录</span>
        </template>
        <div class="height_auto">
          <el-table :data="compulsoryExecutionRecords" style="width:100%;" highlight-current-row border>
            <el-table-column prop="applicationExecution" label="申请执行标的" min-width="180">
            </el-table-column>
            <el-table-column prop="applicationExecutionAmount" label="申请执行标的金额" width="140">
            </el-table-column>
            <el-table-column prop="caseNo" label="案号" width="180">
            </el-table-column>
            <el-table-column prop="caseStatus" label="案件状态" width="140">
            </el-table-column>
            <el-table-column prop="formatedClosedTime" label="创建时间" width="160">
            </el-table-column>
            <el-table-column prop="closedWay" label="结案方式" width="140">
            </el-table-column>
            <el-table-column prop="executed" label="已执行标的" width="180">
            </el-table-column>
            <el-table-column prop="executed_amt" label="已执行标的金额" width="140">
            </el-table-column>
            <el-table-column prop="executiveCourt" label="执行法院" width="180">
            </el-table-column>
            <el-table-column prop="exe_reason" label="执行案由" width="180">
            </el-table-column>
            <el-table-column prop="formatedFilingTime" label="立案时间" width="140">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">4.1 机构查询记录</span>
        </template>
        <div class="height_auto">
          <el-table :data="orgnizationQueryRecords" style="width:100%;" highlight-current-row border>
            <el-table-column prop="queryID" label="查询编号" width="80">
            </el-table-column>
            <el-table-column prop="queryOperator" label="查询操作员" min-width="300">
            </el-table-column>
            <el-table-column prop="queryReason" label="查询原因" min-width="180">
            </el-table-column>
            <el-table-column prop="queryTime" label="查询时间" width="160">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name='10'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">4.2 个人查询记录</span>
        </template>
        <div class="height_auto">
          <el-table :data="personalQueryRecords" style="width:100%;" highlight-current-row border>
            <el-table-column prop="queryID" label="查询编号" width="80">
            </el-table-column>
            <el-table-column prop="queryOperator" label="查询操作员" min-width="300">
            </el-table-column>
            <el-table-column prop="queryReason" label="查询原因" min-width="180">
            </el-table-column>
            <el-table-column prop="queryTime" label="查询时间" width="160">
            </el-table-column>
          </el-table>
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
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        zxReport: {},
        creditCardDetail: [],
        houseLoanDetail: [],
        otherloanDetail: [],
        guaranteeForOthers: [],
        compulsoryExecutionRecords: [],
        orgnizationQueryRecords: [],
        personalQueryRecords: [],
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
      getInf() {
        this.post(baseurl.DataUrl + '/channel/threeDataAction!notSession_getZxReport.action', {
          applySubNo: this.applySubNo
          //   applySubNo : 'PHDX6409598026121216'
        }).then(res => {
          // if (!res.success) {
          //   this.$messager.error("查询数据失败！");
          //   return;
          // }
          if ("" != res.obj.rpt) {
            var result = $.parseJSON(res.obj.rpt);
            if (result && result.result && result.result['10120'] && result.result['10120'].bizInfo) {
              this.zxReport = result.result['10120'].bizInfo.crawler_api_zx_viewReport_response; //code暂时未知
            }
            console.log(result);
            console.log(this.zxReport);
          }
          if (!this.zxReport) return;
          //   信用卡
          if (this.zxReport.creditCards) {
            if (this.zxReport.creditCards.unOverdue && this.zxReport.creditCards.unOverdue.length > 0) {
              this.addTdRowSpan($(' #t_1_1 tbody'), '未逾期', this.zxReport.creditCards.unOverdue.length, this.zxReport
                .creditCards.unOverdue);
            }
            if (this.zxReport.creditCards.overdue && this.zxReport.creditCards.overdue.length > 0) {
              this.addTdRowSpan($(' #t_1_1 tbody'), '逾期', this.zxReport.creditCards.overdue.length, this.zxReport
                .creditCards.overdue);
            }
            if (this.zxReport.creditCards.overdraft && this.zxReport.creditCards.overdraft.length > 0) {
              this.addTdRowSpan($(' #t_1_1 tbody'), '透支超过60天的准贷记卡', this.zxReport.creditCards.overdraft.length,
                this.zxReport.creditCards.overdraft);
            }
          };
          // 房贷记录          
          if (this.zxReport.houseLoans) {
            if (this.zxReport.houseLoans.unOverdue && this.zxReport.houseLoans.unOverdue.length > 0) {
              this.addTdRowSpan($(' #t_1_2 tbody'), '未逾期', this.zxReport.houseLoans.unOverdue.length, this.zxReport
                .houseLoans.unOverdue);
            }
            if (this.zxReport.houseLoans.overdue && this.zxReport.houseLoans.overdue.length > 0) {
              this.addTdRowSpan($(' #t_1_2 tbody'), '逾期', this.zxReport.houseLoans.overdue.length, this.zxReport
                .houseLoans.overdue);
            }
          };
          //  其他贷款
          if (this.zxReport.otherLoans) {
            if (this.zxReport.otherLoans.unOverdue && this.zxReport.otherLoans.unOverdue.length > 0) {
              this.addTdRowSpan($(' #t_1_3 tbody'), '未逾期', this.zxReport.otherLoans.unOverdue.length, this.zxReport
                .otherLoans
                .unOverdue);
            }
            if (this.zxReport.otherLoans.overdue && this.zxReport.otherLoans.overdue.length > 0) {
              this.addTdRowSpan($(' #t_1_3 tbody'), '逾期', this.zxReport.otherLoans.overdue.length, this.zxReport.otherLoans
                .overdue);
            }
          };
          // 为他人担保
          if (this.zxReport.guaranteeOthers && this.zxReport.guaranteeOthers.length > 0) {
            $.each(this.zxReport.guaranteeOthers, function (i, eh) {
              $(' #t_1_4 tbody').append('<tr><td>' + eh + '</td></tr>');
            });
          };
          //   2.1 信息摘要
          if (this.zxReport.informatonAbstract) {
            $.each(this.zxReport.informatonAbstract, (name, value) => {
              if ('creditCard' == name) {
                value['type'] = '信用卡';
              } else if ('houseLoan' == name) {
                value['type'] = '房贷记录';
              } else if ('otherLoan' == name) {
                value['type'] = '其它贷款';
              }
              this.addRow($(' #t_2 tbody'), ['type', 'A', 'B', 'D', 'E', 'C'], value);
            });
          };
          this.zxReport.credit_card_detail && this.zxReport.credit_card_detail.length > 0 ? this.creditCardDetail =
            this.zxReport.credit_card_detail : '';
          //   if (this.zxReport.credit_card_detail && this.zxReport.credit_card_detail.length > 0) {
          //     $.each(this.zxReport.credit_card_detail, (i, eh) => {
          //       this.addRow($(' #t_3 tbody'), ['bank', 'release_date', 'card_type', 'account_type',
          //         'due_date', 'credit_amt', 'used_amt', 'over_due_amount', 'is_delq', 'is_active', 'balance',
          //         'is_overdraft'
          //       ], eh);
          //     });
          //   };
          this.zxReport.house_loan_detail && this.zxReport.house_loan_detail.length > 0 ? this.houseLoanDetail =
            this.zxReport.house_loan_detail : '';
          if (this.zxReport.house_loan_detail && this.zxReport.house_loan_detail.length > 0) {
            // $.each(this.zxReport.house_loan_detail, (i, eh) => {
            //   this.addRow($('#div_zxCard #t_4 tbody'), ['bank', 'release_date', 'release_count', 'account_type',
            //     'loan_type', 'deadline', 'due_date', 'is_delq', 'balance', 'overdue_amount', 'delq_l5y_amt',
            //     'delq_l5y_90day_amt', 'status'
            //   ], eh);
            // });
          };
          this.zxReport.other_loan_detail && this.zxReport.other_loan_detail.length > 0 ? this.otherloanDetail =
            this.zxReport.other_loan_detail : '';
          //   if (this.zxReport.other_loan_detail && this.zxReport.other_loan_detail.length > 0) {
          //     $.each(this.zxReport.other_loan_detail, (i, eh) => {
          //       this.addRow($('#div_zxCard #t_5 tbody'), ['releaser', 'release_date', 'release_count',
          //         'account_type', 'loan_type', 'is_delq', 'settle_date', 'overdue_amount', 'status',
          //         'sts_happen_date'
          //       ], eh);
          //     });
          //   };
          this.zxReport.guarantee_for_others && this.zxReport.guarantee_for_others.length > 0 ? this.guaranteeForOthers =
            this.zxReport.guarantee_for_others : '';
          //   if (this.zxReport.guarantee_for_others && this.zxReport.guarantee_for_others.length > 0) {
          //     $.each(this.zxReport.guarantee_for_others, (i, eh) => {
          //       this.addRow($('#div_zxCard #t_7 tbody'), ['guarantor', 'guarantee_date', 'guarantee_place',
          //         'card_type', 'card_num', 'loan_type', 'loan_count', 'guarantee_count', 'due_date',
          //         'balance'
          //       ], eh);
          //     });
          //   }
          this.zxReport.publiCrecords && this.zxReport.publiCrecords.compulsoryExecutionRecords && this.zxReport.publiCrecords
            .compulsoryExecutionRecords.length > 0 ? this.compulsoryExecutionRecords = this.zxReport.publiCrecords.compulsoryExecutionRecords :
            '';
          //   if (this.zxReport.publiCrecords && this.zxReport.publiCrecords.compulsoryExecutionRecords && this.zxReport
          //     .publiCrecords.compulsoryExecutionRecords.length > 0) {
          //     $.each(this.zxReport.publiCrecords.compulsoryExecutionRecords, (i, eh) => {
          //       this.addRow($('#div_zxCard #t_8 tbody'), ['applicationExecution', 'applicationExecutionAmount',
          //         'caseNo', 'caseStatus', 'formatedClosedTime', 'closedWay', 'executed', 'executed_amt',
          //         'executiveCourt', 'exe_reason', 'formatedFilingTime'
          //       ], eh);
          //     });
          //   };
          this.zxReport.orgnizationQueryRecords && this.zxReport.orgnizationQueryRecords.length > 0 ? this.orgnizationQueryRecords =
            this.zxReport.orgnizationQueryRecords : '';
          //   if (this.zxReport.orgnizationQueryRecords && this.zxReport.orgnizationQueryRecords.length > 0) {
          //     $.each(this.zxReport.orgnizationQueryRecords, (i, eh) => {
          //       this.addRow($('#div_zxCard #t_9 tbody'), ['queryID', 'queryOperator', 'queryReason', 'queryTime'],
          //         eh);
          //     });
          //   }
          this.zxReport.personalQueryRecords && this.zxReport.personalQueryRecords.length > 0 ? this.personalQueryRecords =
            this.zxReport.personalQueryRecords : '';
          if (this.zxReport.personalQueryRecords && this.zxReport.personalQueryRecords.length > 0) {
            $.each(this.zxReport.personalQueryRecords, (i, eh) => {
              this.addRow($('#div_zxCard #t_10 tbody'), ['queryID', 'queryOperator', 'queryReason', 'queryTime'],
                eh);
            });
          }
        });
      },
      addRow($table, rfields, rdata) {
        var row = '<tr>';
        $.each(rfields, function (index, val) {
          if (rdata[val] != undefined) {
            row += '<td  style="text-align: center;border: 1px solid #d8dce5;">' + rdata[val] + '</td>';
          } else {
            row += '<td  style="text-align: center;border: 1px solid #d8dce5;">' + '' + '</td>';
          }
        });
        row += '</tr>';
        $table.append(row);
      },
      addTdRowSpan($table, fName, rowSpan, rowData) {
        $.each(rowData, function (i, val) {
          if (i == 0) {
            var row = '<tr><td rowspan="' + rowSpan +
              '" style="text-align: center;vertical-align: middle;width: 15%; border: 1px solid #d8dce5;">' +
              fName + '</td><td  style="border: 1px solid #d8dce5;">' + rowData[i] + '</td></tr>';
            $table.append(row);
          } else {
            $table.append('<tr><td style="border: 1px solid #d8dce5;">' + rowData[i] + '</td></tr>')
          }
        });
      }

    },
    mounted() {
      this.getInf();
    }
  }

</script>
<style scoped>
  #t_2 th {
    text-align: left;
  }

</style>
