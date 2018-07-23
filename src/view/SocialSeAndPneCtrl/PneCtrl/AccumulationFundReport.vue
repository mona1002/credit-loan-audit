<template>
  <!-- 公积金报告 -->
  <div class="SocialSecurity min_width_1550">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">报告信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_four clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">姓名：</label>
                <span>{{fundReport.name}}</span>
              </li>
              <li>
                <label class="label_width_195">身份证号：</label>
                <span>{{fundReport.idcard}}</span>
              </li>
              <li>
                <label class="label_width_195">用户填写姓名：</label>
                <span>{{fundReport.user_name}}</span>
              </li>
              <li>
                <label class="label_width_195">用户填写身份证号：</label>
                <span>{{fundReport.user_idcard}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">用户填写手机号：</label>
                <span>{{fundReport.user_phone}}</span>
              </li>
              <li>
                <label class="label_width_195">姓名是否一致：</label>
                <span>{{fundReport.name_match}}</span>
              </li>
              <li>
                <label class="label_width_195">身份证是否一致：</label>
                <span>{{fundReport.idcard_match}}</span>
              </li>
              <li>
                <label class="label_width_195">预估月收入[元]：</label>
                <span>{{fundReport.monthly_income}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">公积金账号：</label>
                <span>{{fundReport.customer_id}}</span>
              </li>
              <li>
                <label class="label_width_195">机构类型：</label>
                <span>{{fundReport.organization_type}}</span>
              </li>
              <li>
                <label class="label_width_195">账户状态：</label>
                <span>{{fundReport.status}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">当前缴存单位：</label>
                <span>{{fundReport.company}}</span>
              </li>
              <li>
                <label class="label_width_195">缴存单位规模：</label>
                <span>{{fundReport.corp_scale}}</span>
              </li>
              <li>
                <label class="label_width_195">缴存单位性质：</label>
                <span>{{fundReport.corp_type}}</span>
              </li>
              <li>
                <label class="label_width_195">当前缴存比例(%)：</label>
                <span>{{fundReport.deposit_rate}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">当前月缴存金额[元]：</label>
                <span>{{fundReport.deposit_amount}}</span>
              </li>
              <li>
                <label class="label_width_195">当前账户余额[元]：</label>
                <span>{{fundReport.balance}}</span>
              </li>
              <li>
                <label class="label_width_195">当前公司连续缴存月份(预估)：</label>
                <span>{{fundReport.current_corp_continuous_deposit_month}}</span>
              </li>
              <li>
                <label class="label_width_195">最近一次缴存时间：</label>
                <span>{{fundReport.last_record_date}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_195">最长连续缴存月份：</label>
                <span>{{fundReport.continuous_deposit_month}}</span>
              </li>
              <li>
                <label class="label_width_195">最近连续缴存月份：</label>
                <span>{{fundReport.last_deposit_month}}</span>
              </li>
              <li>
                <label class="label_width_195">公积金贷款笔数：</label>
                <span>{{fundReport.loan_count}}</span>
              </li>
              <li>
                <label class="label_width_195">公积金贷款月还款额[元]：</label>
                <span>{{fundReport.loan_repay_amount}}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账户信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_four clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">账户ID：</label>
                <span>{{fundRawReport.id}}</span>
              </li>
              <li>
                <label class="label_width_195">客户号：</label>
                <span>{{fundRawReport.customer}}</span>
              </li>
              <li>
                <label class="label_width_195">姓名：</label>
                <span>{{fundRawReport.name}}</span>
              </li>
              <li>
                <label class="label_width_195">身份证号：</label>
                <span>{{fundRawReport.idcard}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">当前账户状态：</label>
                <span>{{fundRawReport.status}}</span>
              </li>
              <li>
                <label class="label_width_195">当前账户余额[元]：</label>
                <span>{{fundRawReport.balance}}</span>
              </li>
              <li>
                <label class="label_width_195">最近一次缴存日期：</label>
                <span>{{fundRawReport.last_record_date}}</span>
              </li>
              <li>
                <label class="label_width_195">当前缴存公司名称：</label>
                <span>{{fundRawReport.company}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_195">月缴存金额[元]：</label>
                <span>{{fundRawReport.deposit_amount}}</span>
              </li>
              <li>
                <label class="label_width_195">月缴存基数[元]：</label>
                <span>{{fundRawReport.deposit_base}}</span>
              </li>
              <li>
                <label class="label_width_195">公司缴存比例(%)：</label>
                <span>{{fundRawReport.company_rate}}</span>
              </li>
              <li>
                <label class="label_width_195">个人缴存比例(%)：</label>
                <span>{{fundRawReport.person_rate}}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_195">房补缴存金额[元]：</label>
                <span>{{fundRawReport.housing_supplement_base}}</span>
              </li>
              <li>
                <label class="label_width_195">房补余额[元]：</label>
                <span>{{fundRawReport.housing_supplement_balance}}</span>
              </li>
              <li>
                <label class="label_width_195">开户日期：</label>
                <span>{{fundRawReport.init_date}}</span>
              </li>
              <li>
                <label class="label_width_195">一次性补贴余额[元]：</label>
                <span>{{fundRawReport.once_balance}}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">工作信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="companys" style="width:100%;" highlight-current-row border>
            <el-table-column prop="name" label="单位名称" width="160">
            </el-table-column>
            <el-table-column prop="type" label="单位性质" width="100">
            </el-table-column>
            <el-table-column prop="begin_date" label="开始时间" min-width="180">
            </el-table-column>
            <el-table-column prop="end_date" label="结束时间" min-width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账户流水</span>
        </template>
        <div class="height_auto">
          <el-table :data="flows" style="width:100%;" highlight-current-row border>
            <el-table-column prop="company" label="公司名称" width="120">
            </el-table-column>
            <el-table-column prop="operation_date" label="操作日期" width="180">
            </el-table-column>
            <el-table-column prop="operation_type" label="操作类型" width="100">
            </el-table-column>
            <el-table-column prop="record_month" label="缴纳月份" width="130">
            </el-table-column>
            <el-table-column prop="amount" label="金额[元]" width="190">
            </el-table-column>
            <el-table-column prop="balance" label="余额[元]">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">贷款明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="loans" style="width:100%;" highlight-current-row border>
            <el-table-column prop="contract_no" label="合同号" width="120">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="id_card" label="身份证号" width="160">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" width="160">
            </el-table-column>
            <el-table-column prop="bank" label="贷款银行" width="160">
            </el-table-column>
            <el-table-column prop="status" label="贷款状态" width="160">
            </el-table-column>
            <el-table-column prop="limit" label="贷款额度[元]" width="160">
            </el-table-column>
            <el-table-column prop="balance" label="贷款余额[元]" width="160">
            </el-table-column>
            <el-table-column prop="period" label="贷款期限" width="160">
            </el-table-column>
            <el-table-column prop="begin_date" label="贷款开始时间" width="160">
            </el-table-column>
            <el-table-column prop="end_date" label="贷款结束时间" width="160">
            </el-table-column>
            <el-table-column prop="loan_rate" label="贷款利率(%)" width="160">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">贷款还款流水</span>
        </template>
        <div class="height_auto">
          <el-table :data="loanFlows" style="width:100%;" highlight-current-row border>
            <el-table-column prop="account_id" label="账户ID" width="180">
            </el-table-column>
            <el-table-column prop="contract_no" label="合同号" width="180">
            </el-table-column>
            <el-table-column prop="type" label="流水类型" width="100">
            </el-table-column>
            <el-table-column prop="record_date" label="记录日期" width="180">
            </el-table-column>
            <el-table-column prop="record_month" label="所属月份" width="100">
            </el-table-column>
            <el-table-column prop="repay_principle" label="还本金额[元]" width="100">
            </el-table-column>
            <el-table-column prop="repay_interest" label="还息金额[元]" width="130">
            </el-table-column>
            <el-table-column prop="repay_amount" label="还款总金额[元]" width="130">
            </el-table-column>
            <el-table-column prop="principle_balance" label="本金余额[元]" width="130">
            </el-table-column>
            <el-table-column prop="deduct_date" label="银行扣款日期" min-width="190">
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
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        fundReport: null,
        fundRawReport: null,
        insurances: [], //
        medicareFlow: [],
        pensionFlow: [],
        unemploymentFlow: [],
        injuryFlow: [],
        maternityFlow: [],
        consumption: [],
        companys: [],
        flows: [],
        loans: [],
        loanFlows:[]
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
        this.post(baseurl.DataUrl + '/channel/threeDataAction!notSession_getFundReport.action', {
          applySubNo: this.applySubNo
          //   applySubNo : 'PHDX6409598026121216'
        }).then(res => {
          console.log(res)
          if (!res.success) {
            this.$message.error("查询数据失败！");
            return;
          }
          if ("" != res.obj.rpt) {
            var result = $.parseJSON(res.obj.rpt);
            if (result && result.result && result.result['10059'] && result.result['10059'].bizInfo && result.result[
                '10059'].bizInfo.data &&
              result.result['10059'].bizInfo.data.report && result.result['10059'].bizInfo.data.report[0] &&
              result.result['10059'].bizInfo.data.report[0].data) {
              this.fundReport = result.result['10059'].bizInfo.data.report[0].data[0];
            }
            console.log(1, this.fundReport);
          }
          if ("" != res.obj.rawRpt) {
            var rawResult = $.parseJSON(res.obj.rawRpt);
            if (rawResult && rawResult.result && rawResult.result['10060'] && rawResult.result['10060'].bizInfo) {
              this.fundRawReport = rawResult.result['10060'].bizInfo.data;
            }
          }
          console.log(2, this.fundRawReport);

          // ---------------------------
          if (this.fundReport) {
            //     this.fen_to_yuan(this.fundReport, ['deposit_amount', 'balance', 'loan_repay_amount', 'monthly_income', '']);
            //     // $('#div_fund #f_1').form('load', this.fundReport);
            this.fundReport.companys && this.fundReport.companys.length > 0 ? this.companys = this.fundReport.companys :
              '';
            //     if (this.fundReport.companys && this.fundReport.companys.length > 0) {
            //       $.each(this.fundReport.companys, function (i, eh) {
            //         this.addRow($('#div_fund #t_2 tbody'), ['name', 'type', 'begin_date', 'end_date'], eh);
            //       });
            //     }
            this.fundReport.flows && this.fundReport.flows.length > 0 ? this.flows = this.fundReport.flows : '';
            //     if (this.fundReport.flows && this.fundReport.flows.length > 0) {
            //       //$('#div_fund #d_3').attr('style','height:500px');
            //       $.each(this.fundReport.flows, function (i, eh) {
            //         this.fen_to_yuan(eh, ['amount', 'balance']);
            //         this.addRow($('#div_fund #t_3 tbody'), ['company', 'operation_date', 'operation_type',
            //           'record_month', 'amount', 'balance'
            //         ], eh)

            //         /* if(eh.record_month!=""){
            //         	eh.record_month = eh.record_month.substr(0,4)+'-'+eh.record_month.substr(4);
            //         }
            //         this.addRow($('#div_fund #t_3 tbody'),['company','operation_date','operation_type','record_month','amount','balance'],eh); */
            //       });
            //     }
            this.fundReport.loans && this.fundReport.loans.length > 0 ? this.loans = this.fundReport.loans : '';
            //     if (this.fundReport.loans && this.fundReport.loans.length > 0) {
            //       $.each(this.fundReport.loans, function (i, eh) {
            //         this.fen_to_yuan(eh, ['limit', 'balance']);
            //         this.addRow($('#div_fund #t_4 tbody'), ['contract_no', 'name', 'id_card', 'phone', 'bank', 'status',
            //           'limit', 'balance', 'period', 'begin_date', 'end_date', 'loan_rate'
            //         ], eh);
            //       });
            //     }
          }
          // ---------------------------------
            if (this.fundRawReport) {
          //     if (this.fundRawReport.accounts && this.fundRawReport.accounts.length > 0) {
          //       var formObj = $('#div_fund #div_account form').clone();
          //       $.each(this.this.fundRawReport.accounts, function (i, eh) {
          //         this.fen_to_yuan(eh, ['balance', 'deposit_amount', 'deposit_base', 'housing_supplement_base',
          //           'housing_supplement_balance', 'once_balance'
          //         ]);
          //         formObj.appendTo($('#div_fund #div_account'));
          //         $('<br>').appendTo($('#div_fund #div_account'));
          //         // $('#div_fund #div_account form:last').form('load', eh);
          //       });
          //       $('#div_fund #div_account form:first').remove();
          //     }
         this.fundRawReport.loan_flows && this.fundRawReport.loan_flows.length > 0?this.loanFlows=this.fundRawReport.loan_flows: this.loanFlows='';
          //     if (this.fundRawReport.loan_flows && this.fundRawReport.loan_flows.length > 0) {
          //       $.each(this.fundRawReport.loan_flows, function (i, eh) {
          //         this.fen_to_yuan(eh, ['repay_principle', 'repay_interest', 'repay_amount', 'principle_balance']);
          //         this.addRow($('#div_fund #t_5 tbody'), ['account_id', 'contract_no', 'type', 'record_date',
          //           'record_month', 'repay_principle', 'repay_interest', 'repay_amount', 'principle_balance',
          //           'deduct_date'
          //         ], eh);
          //       });
          //     }
            }
        });
      },
      //   addRow($table, rfields, rdata) {
      //     var row = '<tr>';
      //     $.each(rfields, (index, val) => {
      //       if (rdata[val] != undefined) {
      //         //row += '<td>' + utils.formatMoney(rdata[val]) + '</td>';
      //         row += '<td>' + rdata[val] + '</td>';
      //       } else {
      //         row += '<td>' + '' + '</td>';
      //       }
      //     });
      //     row += '</tr>';
      //     $table.append(row);
      //   },
      //   addTdRowSpan($table, fName, rowSpan, rowData) {
      //     $.each(rowData, (i, val) => {
      //       if (i == 0) {
      //         var row = '<tr><td rowspan="' + rowSpan +
      //           '" style="text-align: center;vertical-align: middle;width: 15%">' +
      //           fName + '</td><td>' + rowData[i] + '</td></tr>';
      //         $table.append(row);
      //       } else {
      //         $table.append('<tr><td>' + rowData[i] + '</td></tr>')
      //       }
      //     });
      //   },
      //   fen_to_yuan(jsonObj, fieldsArr) {
      //     $.each(fieldsArr, function (i, eh) {
      //       if (jsonObj[eh]) {
      //         jsonObj[eh] = utils.formatMoney(parseInt(jsonObj[eh]) / 100);
      //       }
      //     });
      //   }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
