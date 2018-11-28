<!-- 电话征信 - 单位电话 历史 -->
<template>
  <div>
    <el-collapse ref="form" v-model="activeName">
      <el-collapse-item name='1'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">新增调查日志</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">电话名称：</label>
                <span> {{comData.custName}}</span>
              </li>
              <li>
                <label class="label_width_166">电话类型：</label>
                <span> {{comData.phoneTypeDes}}</span>
              </li>
              <li>
                <label class="label_width_166">电话号码：</label>
                <span> {{comData.phoneNum}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_166">来源：</label>
              <span> {{comData.sourceDes}}</span>
            </li>
            <li>
              <label class="label_width_166">接听情况：</label>
              <span> {{comData.answerDes}}</span>
            </li>
            <li>
              <label class="label_width_166">调查情况：</label>
              <span> {{comData.checkStageDes}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">录入单位电话调查信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li class="text_area_li">
                <label class="label_width_166">第三方查询信息：</label>
                <span class="text_area_span text_area_span_minus170"> {{comData.thirdResult}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">拨打电话：</label>
                <span> {{comData.phoneDes}}</span>
              </li>
              <li class="text_area_li" v-show="comData.phone=='01'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150 pre_wrap"> {{comData.phonetxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">接电话人身份：</label>
                <span> {{comData.answerIdentityDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.answerIdentity=='00'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150 pre_wrap"> {{comData.answertxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对单位及工作信息：</label>
                <span> {{comData.companyDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.company=='01'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150 pre_wrap"> {{comData.companytxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对工作时间：</label>
                <span> {{comData.checkTimeDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.checkTime=='01'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150 pre_wrap"> {{comData.checkTimetxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对收入：</label>
                <span> {{comData.checkIncomeDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.checkIncome=='00'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150 pre_wrap"> {{comData.checkIncometxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">用工方式：</label>
                <span> {{comData.employmentmodeDes}}</span>
              </li>
              <li>
                <label class="label_width_166">工资发放情况：</label>
                <span> {{comData.payrollSituationDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.payrollSituation=='00'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150 pre_wrap"> {{comData.payrollSituationtxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">是否缴纳养老保险：</label>
                <span> {{comData.pensionInsuranceDes}}</span>
              </li>
              <li>
                <label class="label_width_145">是否缴纳住房公积金：</label>
                <span> {{comData.housingFundDes}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对工作证明人1：</label>
                <span> {{comData.jobref1}}</span>
              </li>
              <li>
                <label class="label_width_145">核对工作证明人2：</label>
                <span> {{comData.jobref2}}</span>
              </li>
            </div>
            <div class="clearFix">
               <li class="text_area_li">
              <label class="label_width_166">其他说明：</label>
              <span class="text_area_span text_area_span_minus170 pre_wrap"> {{comData.remark}}</span>
            </li>
            </div>
            <li class="text_area_li">
              <label class="label_width_166">调查结果：</label>
              <span class="text_area_span text_area_span_minus170 pre_wrap"> {{comData.conclusion}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: ['1', '2'],
        // imageUrl: ''
      }
    },
    props: ['comData'],//, 'isFull'
    mounted() {
      // if (this.isFull == true) { // 全屏
      //   $(".textarea-class").css("minWidth", "500px");
      //   $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
      // } else if (this.isFull == false) { // 分屏
      //   $(".textarea-class").css("minWidth", "300px");
      //   $(".item-column1 .el-form-item__content").css("width", "300px");
      // }
    },
    watch: {
      // 判断全屏 , 更改样式
      // isFull: function (val) {
      //   // if (val == true) { // 全屏
      //   //   $(".textarea-class").css("minWidth", "500px");
      //   //   $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
      //   // } else if (val == false) { // 分屏
      //   //   $(".textarea-class").css("minWidth", "300px");
      //   //   $(".item-column1 .el-form-item__content").css("width", "300px");
      //   // }
      // }
    }
  }

</script>
