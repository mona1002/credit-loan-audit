<template>
  <div>
    <!-- <div> -->
    <!-- <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
			       	信用卡报告
			   </h3> -->
    <!-- </div> -->
    <!-- {{totalVal}} -->
    <!-- {{reportInf}} -->
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
                <span>{{reportInf.name}}</span>
              </li>
              <li>
                <label class="label_width_166">用户填写姓名：</label>
                <span>{{reportInf.user_name}}</span>
              </li>
              <li>
                <label class="label_width_166">用户填写身份证：</label>
                <span>{{reportInf.user_idcard}}</span>
              </li>
              <li>
                <label class="label_width_166">用户填写手机号：</label>
                <span>{{reportInf.user_phone}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">

              <li>
                <label class="label_width_166">姓名是否一致：</label>
                <span>{{reportInf.name_match}}</span>
              </li>
              <li>
                <label class="label_width_166">身份证是否一致：</label>
                <span>{{reportInf.idcard_match}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">账户ID：</label>
                <span>{{reportInf.account_id}}</span>
              </li>
              <li>
                <label class="label_width_166">卡号：</label>
                <span>{{reportInf.card}}</span>
              </li>
              <li>
                <label class="label_width_166">银行名称：</label>
                <span>{{reportInf.bank}}</span>
              </li>
              <li>
                <label class="label_width_166">消费额度[元]：</label>
                <span> {{parseInt(reportInf.consume_limit)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class="CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">可用消费额度[元]：</label>
                <span> {{parseInt(reportInf.usable_consume_limit)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">外币消费总笔数(6期)：</label>
                <span>{{reportInf.foreign_consume_count}}</span>
              </li>
              <li>
                <label class="label_width_166">逾期期数(6期)：</label>
                <span>{{reportInf.overdue_count}}</span>
              </li>
              <li>
                <label class="label_width_166">逾期金额总和[元](6期)：</label>
                 <span> {{parseInt(reportInf.overdue_amount)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class=" clearFix">
              <li>
                <label class="label_width_166">最大连续逾期期数(12期)：</label>
                 <span> {{parseInt(reportInf.max_series_overdue_count)/ 100 | formatMoney }}</span>
              </li>
              <li class="li_four_3rows">
                <label class="label_width_166">逾期状态列表(12期)：</label>
                <span>{{reportInf.overdue_status|overduemMulti}}</span>
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
                <label class="label_width_166">账户ID：</label>
                <span>{{accountInf.id}}</span>
              </li>
              <li>
                <label class="label_width_166">账户类型：</label>
                <span>{{accountInf.type}}</span>
              </li>
              <li>
                <label class="label_width_166">卡号：</label>
                <span>{{accountInf.card}}</span>
              </li>
              <li>
                <label class="label_width_166">主副卡标志：</label>
                <span>{{accountInf.main_vice_flag}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">银行名称：</label>
                <span>{{accountInf.bank}}</span>
              </li>
              <li>
                <label class="label_width_166">持卡人姓名：</label>
                <span>{{accountInf.holder}}</span>
              </li>
              <li>
                <label class="label_width_166">证件号码：</label>
                <span>{{accountInf.idcard}}</span>
              </li>
              <li>
                <label class="label_width_166">状态：</label>
                <span>{{accountInf.status}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">开卡时间：</label>
                <span>{{accountInf.open_date}}</span>
              </li>
              <li>
                <label class="label_width_166">卡产品名称：</label>
                <span>{{accountInf.card_name}}</span>
              </li>
              <li>
                <label class="label_width_166">积分：</label>
                <span> {{accountInf.points }}</span>
              </li>
              <li>
                <label class="label_width_166">当前余额[元]：</label>
                <span> {{parseInt(accountInf.balance)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">账单日：</label>
                <span>{{accountInf.bill_day}}</span>
              </li>
              <li>
                <label class="label_width_166">还款日：</label>
                <span>{{accountInf.repay_day}}</span>
              </li>
              <li>
                <label class="label_width_166">当前剩余欠款[元]：</label>
                <span> {{parseInt(accountInf.current_arrears)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">本期已还[元]：</label>
                <span> {{parseInt(accountInf.current_payed_amount)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class="  clearFix">
              <li>
                <label class="label_width_166">未出账单已入账金额[元]：</label>
                <span> {{parseInt(accountInf.current_credited_amount)/ 100 | formatMoney }}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">信用卡额度</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.data.month_summaries" style="width:100%;" highlight-current-row border>
            <el-table-column prop="month" label="账户ID" width="100">
            </el-table-column>
            <el-table-column prop="outflow_count" label="币种" width="160">
            </el-table-column>
            <el-table-column label="消费额度[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.outflow_sum_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="可用消费额度[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.outflow_max_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="inflow_count" label="取现额度[元]" width="140">
            </el-table-column>
            <el-table-column label="流入总金额[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.inflow_sum_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="可用取现额度[元]" min-width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.inflow_max_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="预借现金额度[元]" min-width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.inflow_max_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账单</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.data.bills" style="width:100%;" highlight-current-row border>
            <el-table-column prop="bill_date" label="账单日期">
            </el-table-column>
            <el-table-column label="账单金额[元]">
              <template slot-scope="scope">
                {{parseInt(scope.row.amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="limit_rate" label="额度使用率">
            </el-table-column>
            <el-table-column label="实际还款金额[元]">
              <template slot-scope="scope">
                {{parseInt(scope.row.repayment)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="repayment_rate" label="还款率">
            </el-table-column>
            <el-table-column prop="consume_count" label="消费笔数">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">流水详情</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.flows" style="width:100%;" highlight-current-row border>
            <el-table-column prop="account_id" label="账户ID" width='120'>
            </el-table-column>
            <el-table-column prop="settle_time" label="交易时间" width='100'>
            </el-table-column>
            <el-table-column label="交易金额[元]" width='100'>
              <template slot-scope="scope">
                {{parseInt(scope.row.settle_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="settle_currency" label="交易币种" width='80'>
            </el-table-column>
            <el-table-column label="余额[元]" width='140'>
              <template slot-scope="scope">
                {{parseInt(scope.row.balance)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="account_no" label="交易账号卡号" width='170'>
            </el-table-column>
            <el-table-column prop="trade_description" label="交易描述" width='180'>
            </el-table-column>
            <el-table-column prop="trade_nation" label="交易国家" width='80'>
            </el-table-column>
            <el-table-column prop="trade_place" label="交易地点" width='180'>
            </el-table-column>
            <el-table-column prop="trade_channel" label="交易渠道" width='180'>
            </el-table-column>
            <el-table-column prop="oppesite_name" label="对方账户名" width='180'>
            </el-table-column>
            <el-table-column prop="oppesite_bank" label="对方开户行" width='180'>
            </el-table-column>
            <el-table-column prop="oppesite_account" label="对方账号" width='200'>
            </el-table-column>
            <el-table-column prop="summary" label="摘要" width='140'>
            </el-table-column>
            <el-table-column prop="postscript" label="附言" width='180'>
            </el-table-column>
            <el-table-column prop="cash_remit" label="现钞/现汇" width='180'>
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
        activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '2'],
        accountInf: this.totalVal.accounts,
        reportInf: this.totalVal.data

      }
    },
    props: {
      totalVal: {
        default: function () {
          return {};
        },
        type: Object
      },
      month_summaries: {
        default: function () {
          return [];
        },
        // type: Array
      },
    },
    mounted() {

    }

  }

</script>
