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
        <table id="t_2" style="width:100%;">
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
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">2.2 信用卡记录明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="zxReport.credit_card_detail" style="width:100%;" highlight-current-row border>
            <el-table-column prop="bank" label="发行银行" min-width="150">
            </el-table-column>
            <el-table-column prop="release_date" label="发行日期" width="110">
            </el-table-column>
            <el-table-column prop="card_type" label="卡类型" width="100">
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
          <el-table :data="zxReport.house_loan_detail" style="width:100%;" highlight-current-row border>
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
            <el-table-column prop="balance" label="余额" width="105">
            </el-table-column>
            <el-table-column prop="overdue_amount" label="逾期金额" width="105">
            </el-table-column>
            <el-table-column prop="delq_l5y_amt" label="近五年内逾期数" width="120">
            </el-table-column>
            <el-table-column prop="delq_l5y_90day_amt" label="近五年内逾期超过90天数" width="180">
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="80">
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
          <el-table :data="zxReport.other_loan_detail" style="width:100%;" highlight-current-row border>
            <el-table-column prop="releaser" label="发放机构" width="290">
            </el-table-column>
            <el-table-column prop="release_date" label="发放日期" width="110">
            </el-table-column>
            <el-table-column prop="release_count" label="发放金额" width="100">
            </el-table-column>
            <el-table-column prop="account_type" label="账户类型" width="100">
            </el-table-column>
            <el-table-column prop="loan_type" label="贷款类型" width="120">
            </el-table-column>
            <el-table-column prop="is_delq" label="是否逾期" width="100">
            </el-table-column>
            <el-table-column prop="settle_date" label="结清日期" width="110">
            </el-table-column>
            <el-table-column prop="overdue_amount" label="逾期金额" width="100">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="100">
            </el-table-column>
            <el-table-column prop="sts_happen_date" label="状态发生时间" min-width="110">
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
          <el-table :data="zxReport.guarantee_for_others" style="width:100%;" highlight-current-row border>
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
          <el-table :data="zxReport.orgnizationQueryRecords" style="width:100%;" highlight-current-row border>
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
          <el-table :data="zxReport.personalQueryRecords" style="width:100%;" highlight-current-row border>
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
  export default {
    data() {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        zxReport: {},
        compulsoryExecutionRecords: [],
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
        // this.get('http://10.1.26.130:20716/riskManagement/tripartiteData/queryReport', {
          this.get('/tripartiteData/queryReport', {
          applySubNo: this.applySubNo,
          // applySubNo: '201801080512013502',
          category: '04'
        }).then(res => {
          if (res.statusCode == 200) {
            let resp = res.data;
            let report = res.data.reportData ? JSON.parse(resp.reportData) : {}; //报告数据  无原始数据
            report.crawler_api_zx_viewReport_response ? this.zxReport = report.crawler_api_zx_viewReport_response :
              '';
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
            // 2.1 信息摘要
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
            this.zxReport.publiCrecords && this.zxReport.publiCrecords.compulsoryExecutionRecords ? this.compulsoryExecutionRecords =
              this.zxReport.publiCrecords.compulsoryExecutionRecords : '';
          }
         '';
        });
      },
      addRow($table, rfields, rdata) {
        var row = '<tr>';
        $.each(rfields, function (index, val) {
          if (rdata[val] != undefined) {
            row += '<td  style="text-align: left;padding-left:10px;border: 1px solid #d8dce5;">' + rdata[val] + '</td>';
          } else {
            row += '<td  style="border: 1px solid #d8dce5;">' + '' + '</td>';
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
              fName + '</td><td  style=";padding-left:10px;border: 1px solid #d8dce5;">' + rowData[i] + '</td></tr>';
            $table.append(row);
          } else {
            $table.append('<tr><td style="padding-left:10px;border: 1px solid #d8dce5;">' + rowData[i] + '</td></tr>')
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
  #t_2 th{
    text-align: left;
  }

</style>
