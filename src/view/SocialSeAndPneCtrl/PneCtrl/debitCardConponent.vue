<template>
  <div>
    <!-- 储蓄卡报告 -->
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">报告信息</span>
          <!-- 工资稳定性水平：字段缺失 -->
        </template>
        <div class="checkedInf checkedInf_li_width_four clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_145">姓名：</label>
                <span>{{totalVal.name}}</span>
              </li>
              <li>
                <label class="label_width_145">用户填写姓名：</label>
                <span>{{totalVal.user_name}}</span>
              </li>
              <li>
                <label class="label_width_145">用户填写身份证：</label>
                <span>{{totalVal.user_idcard}}</span>
              </li>
              <li>
                <label class="label_width_145">用户填写手机号：</label>
                <span>{{totalVal.user_phone}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">

              <li>
                <label class="label_width_145">姓名是否一致：</label>
                <span>{{totalVal.name_match}}</span>
              </li>
              <li>
                <label class="label_width_145">身份证是否一致：</label>
                <span>{{totalVal.idcard_match}}</span>
              </li>
              <li>
                <label class="label_width_145">账户ID：</label>
                <span>{{totalVal.account_id}}</span>
              </li>
              <li>
                <label class="label_width_145">卡号：</label>
                <span>{{totalVal.card}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_145">银行名称：</label>
                <span>{{totalVal.bank}}</span>
              </li>
              <li>
                <label class="label_width_145">开卡时间：</label>
                <span>{{totalVal.open_date}}</span>
              </li>
              <li>
                <label class="label_width_145">平均工资：</label>
                <span> {{parseInt(totalVal.average_salary)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <!-- 字段缺失 -->
                <label class="label_width_145">工资稳定性水平：</label>
                <span>{{totalVal.salary_stability}}</span>
              </li>
            </div>
            <div class="clearFix">
              <li>
                <label class="label_width_145">月均还款额：</label>
                <span> {{parseInt(totalVal.average_repayment_permonth)/ 100 | formatMoney }}</span>
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
                <label class="label_width_145">账户ID：</label>
                <span>{{rawData.id}}</span>
              </li>
              <li>
                <label class="label_width_145">账户类型：</label>
                <span>{{rawData.type}}</span>
              </li>
              <li>
                <label class="label_width_145">卡号：</label>
                <span>{{rawData.card}}</span>
              </li>
              <li>
                <label class="label_width_145">主副卡标志：</label>
                <span>{{rawData.main_vice_flag}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_145">银行名称：</label>
                <span>{{rawData.bank}}</span>
              </li>
              <li>
                <label class="label_width_145">持卡人姓名：</label>
                <span>{{rawData.holder}}</span>
              </li>
              <li>
                <label class="label_width_145">证件号码：</label>
                <span>{{rawData.idcard}}</span>
              </li>
              <li>
                <label class="label_width_145">状态：</label>
                <span>{{rawData.status}}</span>
              </li>
            </div>
            <div class="clearFix">
              <li>
                <label class="label_width_145">开卡时间：</label>
                <span>{{rawData.open_date}}</span>
              </li>
              <li>
                <label class="label_width_145">当前余额[元]：</label>
                <span> {{parseInt(rawData.balance)/ 100 | formatMoney }}</span>
              </li>
              <li>
                <label class="label_width_145">卡产品名称：</label>
                <span>{{rawData.card_name}}</span>
              </li>
              <li>
                <label class="label_width_145">当前剩余欠款[元]：</label>
                <span> {{parseInt(rawData.current_arrears)/ 100 | formatMoney }}</span>
              </li>
            </div>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">每月汇总列表</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.month_summaries" style="width:100%;" highlight-current-row border>
            <el-table-column prop="month" label="月数" width="100">
            </el-table-column>
            <el-table-column prop="outflow_count" label="流出总笔数" width="160">
            </el-table-column>
            <el-table-column label="流出总金额[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.outflow_sum_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="最大单笔流出金额[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.outflow_max_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="inflow_count" label="流入总笔数" width="140">
            </el-table-column>
            <el-table-column label="流入总金额[元]" width="160">
              <template slot-scope="scope">
                {{parseInt(scope.row.inflow_sum_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column label="最大单笔流入金额[元]" min-width="160">
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
          <span class="collapse_title_text">结息情况</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.interests" style="width:100%;" highlight-current-row border>
            <el-table-column prop="date" label="日期">
            </el-table-column>
            <el-table-column label="余额[元]">
              <template slot-scope="scope">
                {{parseInt(scope.row.amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">工资</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.salaries" style="width:100%;" highlight-current-row border>
            <el-table-column prop="date" label="日期">
            </el-table-column>
            <el-table-column label="余额[元]">
              <template slot-scope="scope">
                {{parseInt(scope.row.amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">第三方借贷</span>
        </template>
        <div class="height_auto">
          <el-table :data="totalVal.loans" style="width:100%;" highlight-current-row border>
            <el-table-column prop="organization" label="机构名称">
            </el-table-column>
            <!-- date、amount  可能是嵌套到 repayments字段里，待确认-->
            <el-table-column prop="date" label="还款日期">
            </el-table-column>
            <el-table-column label="还款金额[元]">
              <template slot-scope="scope">
                {{parseInt(scope.row.amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <!-- =======================此代码块内========================== -->
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item name="7">
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">流水详情</span>
        </template>
        <div class="height_auto">
          <el-table :data="rawData.flows" style="width:100%;" highlight-current-row border>
            <el-table-column prop="account_id" label="账户ID" width='120'>
            </el-table-column>
            <el-table-column prop="settle_time" label="入账时间" width='100'>
            </el-table-column>
            <el-table-column label="入账金额[元]" width='100'>
              <template slot-scope="scope">
                {{parseInt(scope.row.settle_amount)/ 100 | formatMoney }}
              </template>
            </el-table-column>
            <el-table-column prop="settle_currency" label="入账币种" width='80'>
            </el-table-column>
            <el-table-column label="余额" width='100'>
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
        activeNames: ['1', '2', '3', '4', '5', '6', '7'],
      }
    },
    props: {
      totalVal: {
        default: function () {
          return {}
        },
        type: Object
      },
      rawData: {
        default: function () {
          return {};
        },
        type: Object
      },
    }
  }

</script>
