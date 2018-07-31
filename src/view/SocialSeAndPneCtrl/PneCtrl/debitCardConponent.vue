<template>
  <div>
    <div id="dTab" title="储蓄卡1">
      <!-- <div> -->
      <!-- <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
			       	储蓄卡报告
			   </h3> -->
      <!-- </div> -->
      {{totalVal}}
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
                  <label class="label_width_145">姓名：</label>
                  <span>{{reportInf.name}}</span>
                </li>
                <li>
                  <label class="label_width_145">用户填写姓名</label>
                  <span>{{reportInf.user_name}}</span>
                </li>
                <li>
                  <label class="label_width_145">用户填写身份证：</label>
                  <span>{{reportInf.user_idcard}}</span>
                </li>
                <li>
                  <label class="label_width_145">用户填写手机号：</label>
                  <span>{{reportInf.user_phone}}</span>
                </li>
              </div>
              <div class=" CreditForm_div_border clearFix">

                <li>
                  <label class="label_width_145">姓名是否一致：</label>
                  <span>{{reportInf.name_match}}</span>
                </li>
                <li>
                  <label class="label_width_145">身份证是否一致：</label>
                  <span>{{reportInf.idcard_match}}</span>
                </li>
              </div>
              <div class=" CreditForm_div_border clearFix">
                <li>
                  <label class="label_width_145">账户ID</label>
                  <span>{{reportInf.account_id}}</span>
                </li>
                <li>
                  <label class="label_width_145">卡号：</label>
                  <span>{{reportInf.card}}</span>
                </li>
                <li>
                  <label class="label_width_145">银行名称：</label>
                  <span>{{reportInf.bank}}</span>
                </li>
                <li>
                  <label class="label_width_145">开卡时间：</label>
                  <span>{{reportInf.open_date}}</span>
                </li>
              </div>
              <div class="clearFix">
                <li>
                  <label class="label_width_145">平均工资：</label>
                  <span>{{reportInf.average_salary}}</span>
                </li>
                <li>
                  <label class="label_width_145">工资稳定性水平：</label>
                  <span>{{reportInf.salary_stability}}</span>
                </li>
                <li>
                  <label class="label_width_145">月均还款额：</label>
                  <span>{{reportInf.average_repayment_permonth}}</span>
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
                  <span>{{accountInf.id}}</span>
                </li>
                <li>
                  <label class="label_width_145">账户类型：</label>
                  <span>{{accountInf.type}}</span>
                </li>
                <li>
                  <label class="label_width_145">卡号：</label>
                  <span>{{accountInf.card}}</span>
                </li>
                <li>
                  <label class="label_width_145">主副卡标志：</label>
                  <span>{{accountInf.main_vice_flag}}</span>
                </li>
              </div>
              <div class=" CreditForm_div_border clearFix">

                <li>
                  <label class="label_width_145">银行名称：</label>
                  <span>{{accountInf.bank}}</span>
                </li>
                <li>
                  <label class="label_width_145">持卡人姓名：</label>
                  <span>{{accountInf.holder}}</span>
                </li>
                <li>
                  <label class="label_width_145">证件号码：</label>
                  <span>{{accountInf.idcard}}</span>
                </li>
                <li>
                  <label class="label_width_145">状态：</label>
                  <span>{{accountInf.status}}</span>
                </li>
              </div>
              <div class="clearFix">
                <li>
                  <label class="label_width_145">开卡时间：</label>
                  <span>{{accountInf.open_date}}</span>
                </li>
                <li>
                  <label class="label_width_145">当前余额[元]：</label>
                  <span>{{accountInf.balance}}</span>
                </li>
                <li>
                  <label class="label_width_145">卡产品名称：</label>
                  <span>{{accountInf.card_name}}</span>
                </li>
                <li>
                  <label class="label_width_145">当前剩余欠款[元]：</label>
                  <span>{{accountInf.current_arrears}}</span>
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
            <el-table :data="monthSummaries" style="width:100%;" highlight-current-row border>
              <el-table-column prop="month" label="月数" width="100">
              </el-table-column>
              <el-table-column prop="outflow_count" label="流出总笔数" width="160">
              </el-table-column>
              <el-table-column prop="outflow_sum_amount" label="流出总金额[元]" width="160">
              </el-table-column>
              <el-table-column prop="outflow_max_amount" label="最大单笔流出金额[元]" width="160">
              </el-table-column>
              <el-table-column prop="inflow_count" label="流入总笔数" width="140">
              </el-table-column>
              <el-table-column prop="inflow_sum_amount" label="流入总金额[元]" width="160">
              </el-table-column>
              <el-table-column prop="inflow_max_amount" label="最大单笔流入金额[元]" min-width="160">
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
              <el-table-column prop="amount" label="余额[元]">
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
            <el-table :data="totalVal.interests" style="width:100%;" highlight-current-row border>
              <el-table-column prop="date" label="日期">
              </el-table-column>
              <el-table-column prop="amount" label="余额[元]">
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
            <el-table :data="totalVal.interests" style="width:100%;" highlight-current-row border>
              <el-table-column prop="organization" label="机构名称">
              </el-table-column>
              <el-table-column prop="date" label="还款日期">
              </el-table-column>
              <el-table-column prop="amount" label="还款金额[元]">
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
        <el-collapse-item name="7">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">流水详情</span>
          </template>
          <div class="height_auto">
            <el-table :data="totalVal.interests" style="width:100%;" highlight-current-row border>
              <el-table-column prop="account_id" label="账户ID">
              </el-table-column>
              <el-table-column prop="settle_time" label="入账时间">
              </el-table-column>
              <el-table-column prop="settle_amount" label="入账金额[元]">
              </el-table-column>
              <el-table-column prop="settle_currency" label="入账币种">
              </el-table-column>
              <el-table-column prop="balance" label="余额">
              </el-table-column>
              <el-table-column prop="account_no" label="交易账号卡号">
              </el-table-column>
              <el-table-column prop="trade_description" label="交易描述">
              </el-table-column>
              <el-table-column prop="trade_nation" label="交易国家">
              </el-table-column>
              <el-table-column prop="trade_place" label="交易地点">
              </el-table-column>
              <el-table-column prop="trade_channel" label="交易渠道">
              </el-table-column>
              <el-table-column prop="oppesite_name" label="对方账户名">
              </el-table-column>
              <el-table-column prop="oppesite_bank" label="对方开户行">
              </el-table-column>
              <el-table-column prop="oppesite_account" label="对方账号">
              </el-table-column>
              <el-table-column prop="summary" label="摘要">
              </el-table-column>
              <el-table-column prop="postscript" label="附言">
              </el-table-column>
              <el-table-column prop="cash_remit" label="现钞/现汇">
              </el-table-column>
            </el-table>
          </div>
        </el-collapse-item>
      </el-collapse>


      <!-- 没有该字段 -->
      <div class="table" style="padding-left: 0px">
        <h5 class="h5">工资</h5>
        <div id="d_4" class="tabbox_x">
          <table id="t_4">
            <thead>
              <tr>
                <th>日期</th>
                <th>金额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 没有该字段 -->
      <div class="table" style="padding-left: 0px">
        <h5 class="h5">第三方借贷</h5>
        <div class="tabbox_x">
          <table id="t_5">
            <thead>
              <tr>
                <th>机构名称</th>
                <th>还款日期</th>
                <th>还款金额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>

      <div class="table" style="padding-left: 0px">
        <h5 class="h5">流水详情</h5>
        <div class="tabbox_x">
          <table id="t_6">
            <thead>
              <tr>
                <th>账户ID</th>
                <th>入账时间</th>
                <th>入账金额[元]</th>
                <th>入账币种</th>
                <th>余额[元]</th>
                <th>交易账号卡号</th>
                <th>交易描述</th>
                <th>交易国家</th>
                <th>交易地点</th>
                <th>交易渠道</th>
                <th>对方账户名</th>
                <th>对方开户行</th>
                <th>对方账号</th>
                <th>摘要</th>
                <th>附言</th>
                <th>现钞/现汇</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['1', '2'],
        accountInf: this.accountObj,
        reportInf: this.reportObj

      }
    },
    props: {
      totalVal: {
        default: function () {
          return {};
        },
        type: Object
      },
      monthSummaries: {
        default: function () {
          return [];
        },
        type: Array
      },
      reportObj: {
        default: function () {
          return {
            // name: ''
          };
        },
        type: Object
      },
      accountObj: {
        default: function () {
          return {};
        },
        type: Object
      }
    },
    mounted() {

    }

  }

</script>
