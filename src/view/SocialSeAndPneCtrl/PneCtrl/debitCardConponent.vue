<template>
  <div>
    <div id="dTab" title="储蓄卡1">
      <!-- <div> -->
      <!-- <h3 style="padding-left: 0px;font-size: 25px;text-align: center">
			       	储蓄卡报告
			   </h3> -->
      <!-- </div> -->

      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <i class="collapse_title_icon"></i>
            <span class="collapse_title_text">报告信息</span>
          </template>
          {{reportInf}}
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
             <div class=" CreditForm_div_border clearFix">
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
      </el-collapse>
      <div class="table" style="padding-left: 0px">
        <h5 class="h5">报告信息</h5>
        <form id="f_1">
          <table>
            <tbody>
              <tr>
                <td>姓名：
                  <input name="name" type="text" readonly/>
                </td>
                <td>用户填写姓名:
                  <input name="user_name" type="text" readonly/>
                </td>
                <td>用户填写身份证：
                  <input name="user_idcard" type="text" readonly/>
                </td>
                <td>用户填写手机号：
                  <input name="user_phone" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>姓名是否一致：
                  <input name="name_match" type="text" readonly/>
                </td>
                <td>身份证是否一致：
                  <input name="idcard_match" type="text" readonly/>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>账户ID:
                  <input name="account_id" type="text" readonly/>
                </td>
                <td>卡号：
                  <input name="card" type="text" readonly/>
                </td>
                <td>银行名称：
                  <input name="bank" type="text" readonly/>
                </td>
                <td>开卡时间：
                  <input name="open_date" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>平均工资：
                  <input name="average_salary" type="text" readonly/>
                </td>
                <td>工资稳定性水平：
                  <input name="salary_stability" type="text" readonly/>
                </td>
                <td>月均还款额：
                  <input name="average_repayment_permonth" type="text" readonly/>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>


      <div class="table" style="padding-left: 0px">
        <h5 class="h5">账户信息</h5>
        <form id="f_2">
          <table>
            <tbody>
              <tr>
                <td>账户ID：
                  <input name="id" type="text" readonly/>
                </td>
                <td>账户类型：
                  <input name="type" type="text" readonly/>
                </td>
                <td>卡号：
                  <input name="card" type="text" readonly/>
                </td>
                <td>主副卡标志：
                  <input name="main_vice_flag" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>银行名称:
                  <input name="bank" type="text" readonly/>
                </td>
                <td>持卡人姓名：
                  <input name="holder" type="text" readonly/>
                </td>
                <td>证件号码：
                  <input name="idcard" type="text" readonly/>
                </td>
                <td>状态：
                  <input name="status" type="text" readonly/>
                </td>
              </tr>
              <tr>
                <td>开卡时间：
                  <input name="open_date" type="text" readonly/>
                </td>
                <td>当前余额[元]：
                  <input name="balance" type="text" readonly/>
                </td>
                <td>卡产品名称：
                  <input name="card_name" type="text" readonly/>
                </td>
                <td>当前剩余欠款[元]：
                  <input name="current_arrears" type="text" readonly/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div class="table" style="padding-left: 0px">
        <h5 class="h5">每月汇总列表</h5>
        <div id="d_2" class="tabbox_x">
          <table id="t_2">
            <thead>
              <tr>
                <th>月数</th>
                <th>流出总笔数</th>
                <th>流出总金额[元]</th>
                <th>最大单笔流出金额[元]</th>
                <th>流入总笔数</th>
                <th>流入总金额[元]</th>
                <th>最大单笔流入金额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div class="height_auto">
          <el-table :data="monthSummaries" style="width:100%;" highlight-current-row border>
            <el-table-column prop="month" label="月数" width="100">
            </el-table-column>
            <el-table-column prop="outflow_count" label="流出总笔数" width="160">
            </el-table-column>
            <el-table-column prop="outflow_sum_amount" label="流出总金额" width="140">
            </el-table-column>
            <el-table-column prop="outflow_max_amount" label="最大单笔流出金额" width="140">
            </el-table-column>
            <el-table-column prop="inflow_count" label="流入总笔数" width="140">
            </el-table-column>
            <el-table-column prop="inflow_sum_amount" label="流入总金额" width="140">
            </el-table-column>

          </el-table>
        </div>
      </div>

      <div class="table" style="padding-left: 0px">
        <h5 class="h5">结息情况</h5>
        <div class="tabbox">
          <table id="t_3">
            <thead>
              <tr>
                <th>日期</th>
                <th>余额[元]</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>

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
        activeNames: ['1'],
        // accountInf: JSON.stringify(this.accountObj) == "{}" ? {} : this.accountObj,
        reportInf: this.reportObj

      }
    },
    // props:
    props: {
      //   totalVal,
      monthSummaries: {
        default: function () {
          return []
        },
        type: Array
      },
      reportObj: {
        default: function () {
          return {
            name: ''
          }
        },
        type: Object
      },
      // //   accountObj: {
      // //     default: {
      // //       name: ''
      // //     },
      //     // type: Object
      // //   }
    },
    mounted() {

    }

  }

</script>
