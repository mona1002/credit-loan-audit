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
                <span>{{parseInt(fundReport.monthly_income)/ 100 | formatMoney }}</span>
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
                <span>{{parseInt(fundReport.deposit_amount)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_195">当前账户余额[元]：</label>
                <span>{{parseInt(fundReport.balance)/ 100 | formatMoney }}</span>
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
                <span>{{parseInt(fundReport.loan_repay_amount)/ 100 | formatMoney }}</span>
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
                <span>{{parseInt(fundRawReport.balance)/ 100 | formatMoney }}</span>
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
                <span>{{parseInt(fundRawReport.deposit_amount)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_195">月缴存基数[元]：</label>
                <span>{{parseInt(fundRawReport.deposit_base)/ 100 | formatMoney }}</span>
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
                <span>{{parseInt(fundRawReport.housing_supplement_base)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_195">房补余额[元]：</label>
                <span>{{parseInt(fundRawReport.housing_supplement_balance)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_195">开户日期：</label>
                <span>{{fundRawReport.init_date}}</span>
              </li>
              <li>
                <label class="label_width_195">一次性补贴余额[元]：</label>
                <span>{{parseInt(fundRawReport.once_balance)/ 100 | formatMoney }}</span>
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
            <el-table-column label="金额[元]" width="190">
              <template slot-scope="scope">
                {{parseInt(scope.row.amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="余额[元]">
              <template slot-scope="scope">
                {{parseInt(scope.row.balance)/ 100 | formatMoney }}
              </template>
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
            <el-table-column prop="name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="id_card" label="身份证号" width="160">
            </el-table-column>
            <el-table-column prop="phone" label="手机号" width="160">
            </el-table-column>
            <el-table-column prop="bank" label="贷款银行" width="160">
            </el-table-column>
            <el-table-column prop="status" label="贷款状态" width="80">
            </el-table-column>
            <el-table-column label="贷款额度[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.limit)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="贷款余额[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.balance)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="period" label="贷款期限" width="80">
            </el-table-column>
            <el-table-column prop="begin_date" label="贷款开始时间" width="105">
            </el-table-column>
            <el-table-column prop="end_date" label="贷款结束时间" width="105">
            </el-table-column>
            <el-table-column prop="loan_rate" label="贷款利率(%)" min-width="160">
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
            <el-table-column prop="record_date" label="记录日期" width="90">
            </el-table-column>
            <el-table-column prop="record_month" label="所属月份" width="80">
            </el-table-column>
            <el-table-column label="还本金额[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.repay_principle)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="还息金额[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.repay_interest)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="还款总金额[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.repay_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="本金余额[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.principle_balance)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="deduct_date" label="银行扣款日期" min-width="90">
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
        fundReport: {
          // name:'',
          // idcarduser_name:'',
          // user_idcard:'',
          // user_phone:'',
          // name_match:'',
          // idcard_match:'',
          // monthly_income:'',
          // customer_id:'',
          // organization_type:'',
          // status:'',
          // company:'',
          // corp_scale:'',
          // corp_type:'',
          // deposit_rate:'',
          // deposit_amount:'',
          // balance:'',
          // current_corp_continuous_deposit_month:'',
          // last_record_date:'',
          // continuous_deposit_month:'',
          // last_deposit_month:'',
          // loan_count:'',
          // loan_repay_amount:'',
        },
        fundRawReport: {},
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
        loanFlows: []
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
          if (res.obj.rpt) {
            var result = $.parseJSON(res.obj.rpt);
            if (result && result.result && result.result['10059'] && result.result['10059'].bizInfo && result.result[
                '10059'].bizInfo.data &&
              result.result['10059'].bizInfo.data.report && result.result['10059'].bizInfo.data.report[0] &&
              result.result['10059'].bizInfo.data.report[0].data) {
              this.fundReport = result.result['10059'].bizInfo.data.report[0].data[0];
            }
          }
          if (res.obj.rawRpt) {
            var rawResult = $.parseJSON(res.obj.rawRpt);
            var Accounts;
            if (rawResult && rawResult.result && rawResult.result['10060'] && rawResult.result['10060'].bizInfo) {
              Accounts = rawResult.result['10060'].bizInfo.data;
              Accounts && Accounts.accounts && Accounts.accounts.length > 0 ? this.fundRawReport = Accounts.accounts[0] : {};
            }
          }
          if (this.fundReport) {
            this.fundReport.companys && this.fundReport.companys.length > 0 ? this.companys = this.fundReport.companys :
              '';
            this.fundReport.flows && this.fundReport.flows.length > 0 ? this.flows = this.fundReport.flows : '';
            this.fundReport.loans && this.fundReport.loans.length > 0 ? this.loans = this.fundReport.loans : '';
          }
          if (this.fundRawReport) {
            this.fundRawReport.loan_flows && this.fundRawReport.loan_flows.length > 0 ? this.loanFlows = this.fundRawReport
              .loan_flows : '';
          }
        });
      },
    },
    mounted() {
      this.getInf();
    }
  }

</script>
