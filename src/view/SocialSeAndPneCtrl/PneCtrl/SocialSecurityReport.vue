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
                <span>{{socialS.name}}</span>
              </li>
              <li>
                <label class="label_width_166">性别：</label>
                <span>{{socialS.gender}}</span>
              </li>
              <li>
                <label class="label_width_166">生日：</label>
                <span>{{socialS.birth}}</span>
              </li>
              <li>
                <label class="label_width_166">学历：</label>
                <span>{{socialS.education}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">证件类型：</label>
                <span>{{socialS.idcard_type}}</span>
              </li>
              <li>
                <label class="label_width_166">证件号码：</label>
                <span>{{socialS.idcard}}</span>
              </li>
              <li>
                <label class="label_width_166">联系电话：</label>
                <span>{{socialS.phone}}</span>
              </li>
              <li>
                <label class="label_width_166">预计月收入[元]：</label>
                <span>{{parseInt(socialS.yj_month_income)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">开始参保时间：</label>
                <span>{{socialS.insured_begin_date}}</span>
              </li>
              <li>
                <label class="label_width_166">终止参保时间：</label>
                <span>{{socialS.end_date}}</span>
              </li>
              <li>
                <label class="label_width_166">参保状态：</label>
                <span>{{socialS.insured_status}}</span>
              </li>
              <li>
                <label class="label_width_166">最近社保机构名称：</label>
                <span>{{socialS.social_security_name}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">最近参保单位：</label>
                <span>{{socialS.company}}</span>
              </li>
              <li>
                <label class="label_width_166">最近缴纳时间：</label>
                <span>{{socialS.period}}</span>
              </li>
              <li>
                <label class="label_width_166">最近单位缴纳月数：</label>
                <span>{{socialS.current_payment_months}}</span>
              </li>
              <li>
                <label class="label_width_166">最近缴纳基数[元]：</label>
                <span>{{parseInt(socialS.current_base)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">累计缴纳月数：</label>
                <span>{{socialS.payment_months}}</span>
              </li>
              <li>
                <label class="label_width_166">历史连续缴纳最大月数：</label>
                <span>{{socialS.continuous_payment_max_months}}</span>
              </li>
              <li>
                <label class="label_width_166">历史最大缴纳基数[元]：</label>
                <span>{{parseInt(socialS.max_base)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">平均缴纳基数[元]：</label>
                <span>{{parseInt(socialS.average_base)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div>
              <li>
                <label class="label_width_166">医疗账户余额[元]：</label>
                <span>{{parseInt(socialS.medicare_balance)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">养老账户余额[元]：</label>
                <span>{{parseInt(socialS.pension_balance)/ 100 | formatMoney }}</span>
              </li>
              <li class="li_half_two_rows">
                <label class="label_width_166">通讯地址：</label>
                <span>{{socialS.address}}</span>
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
                <span>{{accountReport.customer}}</span>
              </li>
              <li>
                <label class="label_width_166">姓名：</label>
                <span>{{accountReport.name}}</span>
              </li>
              <li>
                <label class="label_width_166">证件类型：</label>
                <span>{{accountReport.idcard_type}}</span>
              </li>
              <li>
                <label class="label_width_166">证件号码：</label>
                <span>{{accountReport.idcard}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">性别：</label>
                <span>{{accountReport.gender}}</span>
              </li>
              <li>
                <label class="label_width_166">出生日期：</label>
                <span>{{accountReport.birth}}</span>
              </li>
              <li>
                <label class="label_width_166">民族：</label>
                <span>{{accountReport.nation}}</span>
              </li>
              <li>
                <label class="label_width_166">文化程度：</label>
                <span>{{accountReport.education}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">联系电话：</label>
                <span>{{accountReport.phone}}</span>
              </li>
              <li>
                <label class="label_width_166">户口性质：</label>
                <span>{{accountReport.account_property}}</span>
              </li>
              <li class="li_half_two_rows">
                <label class="label_width_166">户口所在地：</label>
                <span>{{accountReport.domicile_place}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_one_row">
                <label class="label_width_166">通讯地址：</label>
                <span>{{accountReport.address}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">开始参保时间：</label>
                <span>{{accountReport.insured_begin_date}}</span>
              </li>
              <li>
                <label class="label_width_166">参保人员类别：</label>
                <span>{{accountReport.insured_person_type}}</span>
              </li>
              <li>
                <label class="label_width_166">参保状态：</label>
                <span>{{accountReport.insured_status}}</span>
              </li>
              <li>
                <label class="label_width_166">终止年月：</label>
                <span>{{accountReport.end_date}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="li_half_two_rows">
                <label class="label_width_166">单位名称：</label>
                <span>{{accountReport.company}}</span>
              </li>
              <li class="li_half_two_rows">
                <label class="label_width_166">社保机构名称：</label>
                <span>{{accountReport.social_security_name}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">缴费人员类别：</label>
                <span>{{accountReport.payment_person_type}}</span>
              </li>
              <li>
                <label class="label_width_166">申报月收入[元]：</label>
                <span>{{parseInt(accountReport.monthly_income)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">医疗账户月[元]：</label>
                <span>{{parseInt(accountReport.medicare_balance)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">养老账户余额[元]：</label>
                <span>{{parseInt(accountReport.pension_balance)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div>
              <li class="li_one_row">
                <label class="label_width_166">累计缴纳月数：</label>
                <span>{{accountReport.payment_months}}</span>
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
            <el-table-column label="缴费基数[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.base)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="insured_status" label="参保状态" width="130">
            </el-table-column>
            <el-table-column prop="payment_status" label="缴费状态" width="120">
            </el-table-column>
            <el-table-column prop="person_rate" label="个人缴费比例(%)" width="135">
            </el-table-column>
            <el-table-column prop="company_rate" label="单位缴费比例(%)" width="135">
            </el-table-column>
            <el-table-column prop="company" label="参保单位" min-width="190">
            </el-table-column>
            <el-table-column prop="current_insured_month" label="本次参保年月" width="120">
            </el-table-column>
            <el-table-column prop="first_insured_month" label="首次参保年月" width="120">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本医疗保险</span>
        </template>
        <div class="height_auto">
          <el-table :data="socialS.medicareFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column label="缴纳基数[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.payment_base)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="单位缴纳[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.company_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="个人缴纳[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.person_amount)/ 100 | formatMoney }}
              </template>
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
          <el-table :data="socialS.pensionFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column label="缴纳基数[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.payment_base)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column p label="单位缴纳[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.company_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="个人缴纳[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.person_amount)/ 100 | formatMoney }}
              </template>
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
          <el-table :data="socialS.unemploymentFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column label="缴纳基数[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.payment_base)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="单位缴纳[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.company_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="个人缴纳[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.person_amount)/ 100 | formatMoney }}
              </template>
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
          <el-table :data="socialS.injuryFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column label="缴纳基数[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.payment_base)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="单位缴纳[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.company_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="个人缴纳[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.person_amount)/ 100 | formatMoney }}
              </template>
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
          <el-table :data="socialS.maternityFlow" style="width:100%;" highlight-current-row border>
            <el-table-column prop="period" label="缴纳时间" width="120">
            </el-table-column>
            <el-table-column label="缴纳基数[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.payment_base)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="单位缴纳[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.company_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="个人缴纳[元]" width="130">
              <template slot-scope="scope">
                {{parseInt(scope.row.person_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="origin_name" label="原始保险名称" min-width="190">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="9">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">消费明细（待确认是否是医疗消费记录） 字段不全</span>
        </template>
        <div class="height_auto">
          <el-table :data="consumption" style="width:100%;" highlight-current-row border>
            <el-table-column prop="trade_time" label="时间" width="120">
            </el-table-column>
            <el-table-column prop="trade_type" label="消费类型" width="120">
            </el-table-column>
            <el-table-column prop="trade_place" label="医院名称" width="120">
            </el-table-column>
            <el-table-column label="总费用[元]" width="100">
              <template slot-scope="scope">
                {{parseInt(scope.row.trade_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="个人账号支出[元]" width="120">
              <template slot-scope="scope">
                {{parseInt(scope.row.person_out)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="统筹账号支出[元]" width="120">
              <template slot-scope="scope">
                {{parseInt(scope.row.pool_out)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="医保支付[元]" width="120">
              <template slot-scope="scope">
                {{parseInt(scope.row.medicare_out)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="自费[元]" width="120">
              <template slot-scope="scope">
                {{parseInt(scope.row.own_expense)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="现金支付[元]" width="120">
              <template slot-scope="scope">
                {{parseInt(scope.row.pay_cash)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="大额支付[元]" width="120">
              <template slot-scope="scope">
                {{parseInt(scope.row.pay_big)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="报销金额[元]" min-width="120">
              <template slot-scope="scope">
                {{parseInt(scope.row.claims_amount)/ 100 | formatMoney }}
              </template>
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
        socialS: {},
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        socReport: {},
        accountReport: {},
        insurances: [], 
        consumption: [],
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
          category: '01'
        }).then(res => {
          if (res.statusCode == 200) {
            let resp = res.data;
            let report = JSON.parse(resp.reportData); //报告数据
            let rawreport = JSON.parse(resp.rawData); //原始数据
            if (report && report.data && report.data.report && report.data.report.length > 0) {
              this.socialS = report.data.report[0].data;
            }
            if (rawreport && rawreport.data) {
              let raw = rawreport.data;
              raw.accounts && raw.accounts.length > 0 ? this.accountReport = raw.accounts[0] : '';
              this.insurances = raw.insurances;
              this.consumption = raw.consumption;
            }
          }
        });
      },
    },
    mounted() {
      this.getInf();
    }
  }

</script>
