<template>
  <!-- 社保报告 -->
  <div class="SocialSecurity">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div>
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_one_row">
                <label class="label_width_166">通讯地址：</label>
                <span>{{socReport.address}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_half_two_rows">
                <label class="label_width_166">单位名称：</label>
                <span>{{socReport.company}}</span>
              </li>
              <li class="li_half_two_rows">
                <label class="label_width_166">社保机构名称：</label>
                <span>{{socReport.social_security_name}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
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
            </div>
            <div>
              <li class="li_one_row">
                <label class="label_width_166">累计缴纳月数：</label>
                <span>{{socReport.payment_months}}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">险种信息</span>
        </template>
        <div class="height_auto">
          <el-table :data="insurances" style="width:100%;" highlight-current-row border>
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
          </el-table>
        </div>
        <!-- <div class="table" style="padding-left: 0px">
          <h5 class="h5">险种信息</h5>
          <div class="tabbox">
            <table id="t_1">
              <thead>
                <tr>
                  <th>账户ID</th>
                  <th>险种名称</th>
                  <th>缴费基数[元]</th>
                  <th>参保状态</th>
                  <th>缴费状态</th>
                  <th>个人缴费比例(%)</th>
                  <th>单位缴费比例(%)</th>
                  <th>参保单位</th>
                  <th>本次参保年月</th>
                  <th>首次参保年月</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div> -->
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本医疗保险</span>
        </template>
        <div class="height_auto">
          <el-table :data="medicareFlow" style="width:100%;" highlight-current-row border>
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
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本养老保险</span>
        </template>
        <div class="height_auto">
          <el-table :data="pensionFlow" style="width:100%;" highlight-current-row border>
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
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">失业保险</span>
        </template>
        <div class="height_auto">
          <el-table :data="unemploymentFlow" style="width:100%;" highlight-current-row border>
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
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">工伤保险</span>
        </template>
        <div class="height_auto">
          <el-table :data="injuryFlow" style="width:100%;" highlight-current-row border>
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
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="8">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">生育保险</span>
        </template>
        <div class="height_auto">
          <el-table :data="maternityFlow" style="width:100%;" highlight-current-row border>
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
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">消费明细</span>
        </template>
        <div class="height_auto">
          <el-table :data="consumption" style="width:100%;" highlight-current-row border>
            <el-table-column prop="trade_time" label="时间" width="120">
            </el-table-column>
            <el-table-column prop="trade_type" label="消费类型" width="120">
            </el-table-column>
            <el-table-column prop="trade_place" label="医院名称" width="120">
            </el-table-column>
            <el-table-column prop="trade_amount" label="总费用[元]" width="100">
            </el-table-column>
            <el-table-column prop="person_out" label="个人账号支出[元]" width="130">
            </el-table-column>
            <el-table-column prop="pool_out" label="统筹账号支出[元]" width="130">
            </el-table-column>
            <el-table-column prop="medicare_out" label="医保支付[元]" width="130">
            </el-table-column>
            <el-table-column prop="own_expense" label="自费[元]" width="130">
            </el-table-column>
            <el-table-column prop="pay_cash" label="现金支付[元]" width="130">
            </el-table-column>
            <el-table-column prop="pay_big" label="大额支付[元]" width="130">
            </el-table-column>
            <el-table-column prop="claims_amount" label="报销金额[元]" min-width="130">
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
        socReport: null,
        socRawReport: null,
        insurances: [], //
        medicareFlow: [],
        pensionFlow: [],
        unemploymentFlow: [],
        injuryFlow: [],
        maternityFlow: [],
        consumption: []
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
        this.post(baseurl.DataUrl + '/channel/threeDataAction!notSession_getSocialInsurReport.action', {
          applySubNo: this.applySubNo
        }).then(res => {
          // var socReport;
          // var socRawReport
          if (!res.success) {
            this.$messag1e.error('查询数据失败！');
            return;
          }
          if ("" != res.obj.rpt) {
            var result = $.parseJSON(res.obj.rpt);
            if (result && result.result && result.result['10126'] && result.result['10126'].bizInfo && result.result[
                '10126'].bizInfo.data &&
              result.result['10126'].bizInfo.data.report && result.result['10126'].bizInfo.data.report.length > 0) {
              this.socReport = result.result['10126'].bizInfo.data.report[0].data; //报告
            }
          }
          if ("" != res.obj.rawRpt) {
            var rawResult = $.parseJSON(res.obj.rawRpt);
            if (rawResult && rawResult.result && rawResult.result['10125'] && rawResult.result['10125'].bizInfo) {
              this.socRawReport = rawResult.result['10125'].bizInfo.data; //原始数据
            }
          }
          // ---------------------------
          if (this.socReport) {
            // 基本信息2
            // this.fen_to_yuan(this.socReport, ['medicare_balance', 'pension_balance', 'yj_month_income', 'max_base',
            //   'average_base', 'current_base'
            // ]);
            // $('#div_socInsu #f_1').form('load', this.socReport);
            // 基本医疗保险
            this.socReport.medicareFlow && this.socReport.medicareFlow.length > 0 ? this.medicareFlow = this.socReport
              .medicareFlow : '';
            // if (this.socReport.medicareFlow && this.socReport.medicareFlow.length > 0) {
            //   $.each(this.socReport.medicareFlow, (i, eh) => {
            //     this.fen_to_yuan(eh, ['payment_base', 'company_amount', 'person_amount']);
            //     //this.addRow($('#div_socInsu #t_2 tbody'),['period','payment_base','company_amount','person_amount','company'],eh);
            //     this.addRow($('#div_socInsu #t_2 tbody'), ['period', 'payment_base', 'company_amount',
            //       'person_amount', 'origin_name'
            //     ], eh);
            //   });
            // }
            // 基本养老保险
            this.socReport.pensionFlow && this.socReport.pensionFlow.length > 0 ? this.pensionFlow = this.socReport
              .pensionFlow : '';
            // if (this.socReport.pensionFlow && this.socReport.pensionFlow.length > 0) {
            //   $.each(this.socReport.pensionFlow, (i, eh) => {
            //     this.fen_to_yuan(eh, ['payment_base', 'company_amount', 'person_amount']);
            //     //this.addRow($('#div_socInsu #t_3 tbody'),['period','payment_base','company_amount','person_amount','company'],eh);
            //     this.addRow($('#div_socInsu #t_3 tbody'), ['period', 'payment_base', 'company_amount',
            //       'person_amount', 'origin_name'
            //     ], eh);
            //   });
            // }
            // 失业保险
            this.socReport.unemploymentFlow && this.socReport.unemploymentFlow.length > 0 ? this.unemploymentFlow =
              this.socReport.unemploymentFlow : '';
            // if (this.socReport.unemploymentFlow && this.socReport.unemploymentFlow.length > 0) {
            //   $.each(this.socReport.unemploymentFlow, (i, eh) => {
            //     this.fen_to_yuan(eh, ['payment_base', 'company_amount', 'person_amount']);
            //     this.addRow($('#div_socInsu #t_4 tbody'), ['period', 'payment_base', 'company_amount',
            //       'person_amount', 'origin_name'
            //     ], eh);
            //   });
            // }
            // 
            // 工伤保险
            this.socReport.injuryFlow && this.socReport.injuryFlow.length > 0 ? this.injuryFlow = this.socReport.injuryFlow :
              '';
            console.log(5, this.socReport)
            // if (this.socReport.injuryFlow && this.socReport.injuryFlow.length > 0) {
            //   $.each(this.socReport.injuryFlow, (i, eh) => {
            //     this.fen_to_yuan(eh, ['payment_base', 'company_amount', 'person_amount']);
            //     this.addRow($('#div_socInsu #t_5 tbody'), ['period', 'payment_base', 'company_amount',
            //       'person_amount', 'origin_name'
            //     ], eh);
            //   });
            // }
            // 生育保险
            this.socReport.maternityFlow && this.socReport.maternityFlow.length > 0 ? this.maternityFlow = this.socReport
              .maternityFlow : '';
            // console.log( )
            // if (this.socReport.maternityFlow && this.socReport.maternityFlow.length > 0) {
            //   $.each(this.socReport.maternityFlow, (i, eh) => {
            //     this.fen_to_yuan(eh, ['payment_base', 'company_amount', 'person_amount']);
            //     this.addRow($('#div_socInsu #t_6 tbody'), ['period', 'payment_base', 'company_amount',
            //       'person_amount', 'origin_name'
            //     ], eh);
            //   });
            // }
          }
          // ---------------------------------
          if (this.socRawReport) { //基本信息1
            // if (this.socRawReport.accounts && this.socRawReport.accounts.length > 0) {
            //   var formObj = $('#div_socInsu #d_account form').clone();
            //   $.each(this.socRawReport.accounts, (i, eh) => {
            //     eh.monthly_income = utils.formatMoney(eh.monthly_income);
            //     this.fen_to_yuan(eh, ['medicare_balance', 'pension_balance']);
            //     formObj.appendTo($('#div_socInsu #d_account'));
            //     $('<br>').appendTo($('#div_socInsu #div_account'));
            //     // $('#div_socInsu #d_account form:last').form('load', eh);
            //   });
            //   $('#div_socInsu #d_account form:first').remove();
            // }
            // 险种信息
            this.socRawReport.insurances && this.socRawReport.insurances.length > 0 ? this.insurances = this.socRawReport
              .insurances : this.insurances;
            // if (this.socRawReport.insurances && this.socRawReport.insurances.length > 0) {
            //   $.each(this.socRawReport.insurances, (i, eh) => {
            //     this.fen_to_yuan(eh, ['base']);
            //     this.addRow($('#div_socInsu #t_1 tbody'), ['account_id', 'standard_name', 'base',
            //       'insured_status', 'payment_status', 'person_rate', 'company_rate', 'company',
            //       'current_insured_month', 'first_insured_month'
            //     ], eh);
            //   });
            // }
            console.log(3, this.socRawReport)
            // 消费明细
            this.socRawReport.consumption && this.socRawReport.consumption.length > 0 ? this.consumption = this.socRawReport
              .consumption : '';
            // if (this.socRawReport.consumption && this.socRawReport.consumption.length > 0) {
            //   $.each(this.socRawReport.consumption, (i, eh) => {
            //     this.fen_to_yuan(eh, ['trade_amount', 'person_out', 'pool_out', 'medicare_out', 'own_expense',
            //       'pay_cash', 'pay_big', 'claims_amount'
            //     ]);
            //     this.addRow($('#div_socInsu #t_7 tbody'), ['trade_time', 'trade_type', 'trade_place',
            //       'trade_amount', 'person_out', 'pool_out', 'medicare_out', 'own_expense', 'pay_cash',
            //       'pay_big', 'claims_amount'
            //     ], eh);
            //   });
            // }
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
