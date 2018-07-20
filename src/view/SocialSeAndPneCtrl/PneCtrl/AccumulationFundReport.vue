<template>
  <!-- 公积金报告 -->
  <div class="SocialSecurity">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">报告信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_four clearFix">
          <!-- <ul>
            <li>
              <label class="label_width_166">姓名：</label>
              <span>{{socReport.name}}</span>
            </li>
            <li>
              <label class="label_width_166">性别：</label>
              <span>{{socReport.gender}}</span>
            </li>
            <li>
              <label class="label_width_166">生日：</label>
              <span>{{socReport.birth}}</span>
            </li>
            <li>
              <label class="label_width_166">学历：</label>
              <span>{{socReport.education}}</span>
            </li>
            <li>
              <label class="label_width_166">证件类型：</label>
              <span>{{socReport.idcard_type}}</span>
            </li>
            <li>
              <label class="label_width_166">证件号码：</label>
              <span>{{socReport.idcard}}</span>
            </li>
            <li>
              <label class="label_width_166">联系电话：</label>
              <span>{{socReport.phone}}</span>
            </li>
            <li>
              <label class="label_width_166">预计月收入：</label>
              <span>{{socReport.pension_balance}}</span>
            </li>
            <li>
              <label class="label_width_166">开始参保时间：</label>
              <span>{{socReport.insured_begin_date}}</span>
            </li>
            <li>
              <label class="label_width_166">终止参保时间：</label>
              <span>{{socReport.end_date}}</span>
            </li>
            <li>
              <label class="label_width_166">参保状态：</label>
              <span>{{socReport.insured_status}}</span>
            </li>
            <li>
              <label class="label_width_166">最近社保机构名称：</label>
              <span>{{socReport.social_security_name}}</span>
            </li>
            <li>
              <label class="label_width_166">最近参保单位：</label>
              <span>{{socReport.company}}</span>
            </li>
            <li>
              <label class="label_width_166">最近缴纳时间：</label>
              <span>{{socReport.period}}</span>
            </li>
            <li>
              <label class="label_width_166">最近单位缴纳月数：</label>
              <span>{{socReport.current_payment_months}}</span>
            </li>
            <li>
              <label class="label_width_166">最近缴纳基数[元]：</label>
              <span>{{socReport.current_base}}</span>
            </li>
            <li>
              <label class="label_width_166">累计缴纳月数：</label>
              <span>{{socReport.payment_months}}</span>
            </li>
            <li>
              <label class="label_width_166">历史连续缴纳最大月数：</label>
              <span>{{socReport.continuous_payment_max_months}}</span>
            </li>
            <li>
              <label class="label_width_166">历史最大缴纳基数[元]：</label>
              <span>{{socReport.max_base}}</span>
            </li>
            <li>
              <label class="label_width_166">平均缴纳基数[元]：</label>
              <span>{{socReport.average_base}}</span>
            </li>
            <li>
              <label class="label_width_166">医疗账户余额[元]：</label>
              <span>{{socReport.medicare_balance}}</span>
            </li>
            <li>
              <label class="label_width_166">养老账户余额[元]：</label>
              <span>{{socReport.pension_balance}}</span>
            </li>
            <li class="li_half_two_rows">
              <label class="label_width_166">通讯地址：</label>
              <span>{{socReport.address}}</span>
            </li>
          </ul> -->
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账户信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_four clearFix">
          <!-- <ul>
            <li>
              <label class="label_width_166">个人编号：</label>
              <span>{{socReport.customer}}</span>
            </li>
            <li>
              <label class="label_width_166">姓名：</label>
              <span>{{socReport.name}}</span>
            </li>
            <li>
              <label class="label_width_166">证件类型：</label>
              <span>{{socReport.idcard_type}}</span>
            </li>
            <li>
              <label class="label_width_166">证件号码：</label>
              <span>{{socReport.idcard}}</span>
            </li>
            <li>
              <label class="label_width_166">性别：</label>
              <span>{{socReport.gender}}</span>
            </li>
            <li>
              <label class="label_width_166">出生日期：</label>
              <span>{{socReport.birth}}</span>
            </li>
            <li>
              <label class="label_width_166">民族：</label>
              <span>{{socReport.nation}}</span>
            </li>
            <li>
              <label class="label_width_166">文化程度：</label>
              <span>{{socReport.education}}</span>
            </li>
            <li>
              <label class="label_width_166">联系电话：</label>
              <span>{{socReport.phone}}</span>
            </li>
            <li>
              <label class="label_width_166">户口性质：</label>
              <span>{{socReport.account_property}}</span>
            </li>
            <li class="li_half_two_rows">
              <label class="label_width_166">户口所在地：</label>
              <span>{{socReport.domicile_place}}</span>
            </li>
            <li class="li_one_row">
              <label class="label_width_166">通讯地址：</label>
              <span>{{socReport.address}}</span>
            </li>
            <li>
              <label class="label_width_166">开始参保时间：</label>
              <span>{{socReport.insured_begin_date}}</span>
            </li>
            <li>
              <label class="label_width_166">参保人员类别：</label>
              <span>{{socReport.insured_person_type}}</span>
            </li>
            <li>
              <label class="label_width_166">参保状态：</label>
              <span>{{socReport.insured_status}}</span>
            </li>
            <li>
              <label class="label_width_166">终止年月：</label>
              <span>{{socReport.end_date}}</span>
            </li>
            <li class="li_half_two_rows">
              <label class="label_width_166">单位名称：</label>
              <span>{{socReport.company}}</span>
            </li>
            <li class="li_half_two_rows">
              <label class="label_width_166">社保机构名称：</label>
              <span>{{socReport.social_security_name}}</span>
            </li>
            <li>
              <label class="label_width_166">缴费人员类别：</label>
              <span>{{socReport.payment_person_type}}</span>
            </li>
            <li>
              <label class="label_width_166">申报月收入[元]：</label>
              <span>{{socReport.monthly_income}}</span>
            </li>
            <li>
              <label class="label_width_166">医疗账户月[元]：</label>
              <span>{{socReport.medicare_balance}}</span>
            </li>
            <li>
              <label class="label_width_166">养老账户余额[元]：</label>
              <span>{{socReport.pension_balance}}</span>
            </li>
            <li class="li_one_row">
              <label class="label_width_166">累计缴纳月数：</label>
              <span>{{socReport.payment_months}}</span>
            </li>
          </ul> -->
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">工作信息</span>
        </template>
        <div class="height_auto">
          <!-- <el-table :data="insurances" style="width:100%;" highlight-current-row border>
            <el-table-column prop="account_id" label="账户ID" width="120">
            </el-table-column>
            <el-table-column prop="standard_name" label="险种名称" width="100">
            </el-table-column>
            <el-table-column prop="base" label="缴费基数[元]" width="100">
            </el-table-column>
            <el-table-column prop="insured_status" label="参保状态" width="130">
            </el-table-column>
            <el-table-column prop="payment_status" label="缴费状态" width="120">
            </el-table-column>
            <el-table-column prop="person_rate" label="个人缴费比例(%)" width="120">
            </el-table-column>
            <el-table-column prop="company_rate" label="单位缴费比例(%)" width="120">
            </el-table-column>
            <el-table-column prop="company" label="参保单位" min-width="190">
            </el-table-column>
            <el-table-column prop="current_insured_month" label="本次参保年月" width="120">
            </el-table-column>
            <el-table-column prop="first_insured_month" label="首次参保年月" width="120">
            </el-table-column>
          </el-table> -->
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账户流水</span>
        </template>
        <div class="height_auto">
          <!-- <el-table :data="medicareFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column prop="payment_base" label="缴纳基数[元]" width="100">
            </el-table-column>
            <el-table-column prop="company_amount" label="单位缴纳[元]" width="100">
            </el-table-column>
            <el-table-column prop="person_amount" label="个人缴纳[元]" width="130">
            </el-table-column>
            <el-table-column prop="origin_name" label="原始保险名称" min-width="190">
            </el-table-column>
          </el-table> -->
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">贷款明细</span>
        </template>
        <div class="height_auto">
          <!-- <el-table :data="pensionFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column prop="payment_base" label="缴纳基数[元]" width="100">
            </el-table-column>
            <el-table-column prop="company_amount" label="单位缴纳[元]" width="100">
            </el-table-column>
            <el-table-column prop="person_amount" label="个人缴纳[元]" width="130">
            </el-table-column>
            <el-table-column prop="origin_name" label="原始保险名称" min-width="190">
            </el-table-column>
          </el-table> -->
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">贷款还款流水</span>
        </template>
        <div class="height_auto">
          <!-- <el-table :data="unemploymentFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column prop="payment_base" label="缴纳基数[元]" width="100">
            </el-table-column>
            <el-table-column prop="company_amount" label="单位缴纳[元]" width="100">
            </el-table-column>
            <el-table-column prop="person_amount" label="个人缴纳[元]" width="130">
            </el-table-column>
            <el-table-column prop="origin_name" label="原始保险名称" min-width="190">
            </el-table-column>
          </el-table> -->
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
        consumption: []
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path == '/SocialSecurityReport') {
          this.getInf();
        }
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
            console.log(1,this.fundReport);
          }
          if ("" != res.obj.rawRpt) {
            var rawResult = $.parseJSON(res.obj.rawRpt);
            if (rawResult && rawResult.result && rawResult.result['10060'] && rawResult.result['10060'].bizInfo) {
              this.fundRawReport = rawResult.result['10060'].bizInfo.data;
            }
          }
            console.log(2,this.fundRawReport);
          
          // ---------------------------
          if (this.fundReport) {
            this.fen_to_yuan(this.fundReport, ['deposit_amount', 'balance', 'loan_repay_amount', 'monthly_income', '']);
            // $('#div_fund #f_1').form('load', this.fundReport);

            if (this.fundReport.companys && this.fundReport.companys.length > 0) {
              $.each(this.fundReport.companys, function (i, eh) {
                this.addRow($('#div_fund #t_2 tbody'), ['name', 'type', 'begin_date', 'end_date'], eh);
              });
            }

            if (this.fundReport.flows && this.fundReport.flows.length > 0) {
              //$('#div_fund #d_3').attr('style','height:500px');
              $.each(this.fundReport.flows, function (i, eh) {
                this.fen_to_yuan(eh, ['amount', 'balance']);
                this.addRow($('#div_fund #t_3 tbody'), ['company', 'operation_date', 'operation_type',
                  'record_month', 'amount', 'balance'
                ], eh)

                /* if(eh.record_month!=""){
                	eh.record_month = eh.record_month.substr(0,4)+'-'+eh.record_month.substr(4);
                }
                this.addRow($('#div_fund #t_3 tbody'),['company','operation_date','operation_type','record_month','amount','balance'],eh); */
              });
            }

            if (this.fundReport.loans && this.fundReport.loans.length > 0) {
              $.each(this.fundReport.loans, function (i, eh) {
                this.fen_to_yuan(eh, ['limit', 'balance']);
                this.addRow($('#div_fund #t_4 tbody'), ['contract_no', 'name', 'id_card', 'phone', 'bank', 'status',
                  'limit', 'balance', 'period', 'begin_date', 'end_date', 'loan_rate'
                ], eh);
              });
            }
          }
          // ---------------------------------
          if (this.fundRawReport) {
            if (this.fundRawReport.accounts && this.fundRawReport.accounts.length > 0) {
              var formObj = $('#div_fund #div_account form').clone();
              $.each(this.this.fundRawReport.accounts, function (i, eh) {
                this.fen_to_yuan(eh, ['balance', 'deposit_amount', 'deposit_base', 'housing_supplement_base',
                  'housing_supplement_balance', 'once_balance'
                ]);
                formObj.appendTo($('#div_fund #div_account'));
                $('<br>').appendTo($('#div_fund #div_account'));
                // $('#div_fund #div_account form:last').form('load', eh);
              });
              $('#div_fund #div_account form:first').remove();
            }
            if (this.fundRawReport.loan_flows && this.fundRawReport.loan_flows.length > 0) {
              $.each(this.fundRawReport.loan_flows, function (i, eh) {
                this.fen_to_yuan(eh, ['repay_principle', 'repay_interest', 'repay_amount', 'principle_balance']);
                this.addRow($('#div_fund #t_5 tbody'), ['account_id', 'contract_no', 'type', 'record_date',
                  'record_month', 'repay_principle', 'repay_interest', 'repay_amount', 'principle_balance',
                  'deduct_date'
                ], eh);
              });
            }
          }
        });
      },
      addRow($table, rfields, rdata) {
        var row = '<tr>';
        $.each(rfields, (index, val) => {
          if (rdata[val] != undefined) {
            //row += '<td>' + utils.formatMoney(rdata[val]) + '</td>';
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
        $.each(fieldsArr, function (i, eh) {
          if (jsonObj[eh]) {
            jsonObj[eh] = utils.formatMoney(parseInt(jsonObj[eh]) / 100);
          }
        });
      }
    },
    mounted() {
      this.getInf();
    }
  }

</script>
