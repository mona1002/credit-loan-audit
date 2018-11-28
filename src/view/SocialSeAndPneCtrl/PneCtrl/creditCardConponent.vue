<template>
  <div>
    <!-- 信用卡报告 -->
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
                <span>{{totalVal.name}}</span>
              </li>
              <li>
                <label class="label_width_166">用户填写姓名：</label>
                <span>{{totalVal.user_name}}</span>
              </li>
              <li>
                <label class="label_width_166">用户填写身份证：</label>
                <span>{{totalVal.user_idcard}}</span>
              </li>
              <li>
                <label class="label_width_166">用户填写手机号：</label>
                <span>{{totalVal.user_phone}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">姓名是否一致：</label>
                <span>{{totalVal.name_match}}</span>
              </li>
              <li>
                <label class="label_width_166">身份证是否一致：</label>
                <span>{{totalVal.idcard_match}}</span>
              </li>
              <li>
                <label class="label_width_166">账户ID：</label>
                <span>{{totalVal.account_id}}</span>
              </li>
              <li>
                <label class="label_width_166">卡号：</label>
                <span>{{totalVal.card}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">银行名称：</label>
                <span>{{totalVal.bank}}</span>
              </li>
              <li>
                <label class="label_width_166">消费额度[元]：</label>
                <span> {{parseInt(totalVal.consume_limit)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">可用消费额度[元]：</label>
                <span> {{parseInt(totalVal.usable_consume_limit)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">外币消费总笔数(6期)：</label>
                <span>{{totalVal.foreign_consume_count}}</span>
              </li>
            </div>
            <div class="CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">逾期期数(6期)：</label>
                <span>{{totalVal.overdue_count}}</span>
              </li>
              <li>
                <label class="label_width_166">逾期金额总和[元](6期)：</label>
                <span> {{parseInt(totalVal.overdue_amount)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">最大连续逾期期数(12期)：</label>
                <span> {{parseInt(totalVal.max_series_overdue_count)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class="clearFix">
              <li class="li_four_3rows">
                <label class="label_width_166">逾期状态列表(12期)：</label>
                <span>{{totalVal.overdue_status|overduemMulti}}</span>
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
                <span>{{rawData.id}}</span>
              </li>
              <li>
                <label class="label_width_166">账户类型：</label>
                <span>{{rawData.type}}</span>
              </li>
              <li>
                <label class="label_width_166">卡号：</label>
                <span>{{rawData.card}}</span>
              </li>
              <li>
                <label class="label_width_166">主副卡标志：</label>
                <span>{{rawData.main_vice_flag}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">银行名称：</label>
                <span>{{rawData.bank}}</span>
              </li>
              <li>
                <label class="label_width_166">持卡人姓名：</label>
                <span>{{rawData.holder}}</span>
              </li>
              <li>
                <label class="label_width_166">证件号码：</label>
                <span>{{rawData.idcard}}</span>
              </li>
              <li>
                <label class="label_width_166">状态：</label>
                <span>{{rawData.status}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">开卡时间：</label>
                <span>{{rawData.open_date}}</span>
              </li>
              <li>
                <label class="label_width_166">卡产品名称：</label>
                <span>{{rawData.card_name}}</span>
              </li>
              <li>
                <label class="label_width_166">积分：</label>
                <span> {{rawData.points }}</span>
              </li>
              <li>
                <label class="label_width_166">当前余额[元]：</label>
                <span> {{parseInt(rawData.balance)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">账单日：</label>
                <span>{{rawData.bill_day}}</span>
              </li>
              <li>
                <label class="label_width_166">还款日：</label>
                <span>{{rawData.repay_day}}</span>
              </li>
              <li>
                <label class="label_width_166">当前剩余欠款[元]：</label>
                <span> {{parseInt(rawData.current_arrears)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_166">本期已还[元]：</label>
                <span> {{parseInt(rawData.current_payed_amount)/ 100 | formatMoney }}</span>
              </li>
            </div>
            <div class="  clearFix">
              <li>
                <label class="label_width_166">未出账单已入账金额[元]：</label>
                <span> {{parseInt(rawData.current_credited_amount)/ 100 | formatMoney }}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">账单</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.bills" style="width:100%;" highlight-current-row border>
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
      <el-collapse-item name="4">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">流水详情</span>
        </template>
        <div class="height_auto">
          <el-table :data="rawData.flows" style="width:100%;" highlight-current-row border>
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
        activeNames: ['1', '2', '3', '4'],
      }
    },
    props: {
      totalVal: {
        default: function () {
          return {};
        },
        type: Object
      },
        rawData: {
        default: function () {
          return {};
        },
        type: Object
      },
    },
  }

</script>
