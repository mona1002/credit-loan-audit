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
                <span class="text_area_span text_area_span_minus150"> {{comData.phonetxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">接电话人身份：</label>
                <span> {{comData.answerIdentityDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.answerIdentity=='00'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150"> {{comData.answertxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对单位及工作信息：</label>
                <span> {{comData.companyDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.company=='01'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150"> {{comData.companytxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对工作时间：</label>
                <span> {{comData.checkTimeDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.checkTime=='01'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150"> {{comData.checkTimetxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对收入：</label>
                <span> {{comData.checkIncomeDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="comData.checkIncome=='00'">
                <label class="label_width_145">说明：</label>
                <span class="text_area_span text_area_span_minus150"> {{comData.checkIncometxt}}</span>
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
                <span class="text_area_span text_area_span_minus150"> {{comData.payrollSituationtxt}}</span>
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
            <li class="text_area_li">
              <label class="label_width_166">调查结果：</label>
              <span class="text_area_span text_area_span_minus170"> {{comData.conclusion}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>


    <!-- <el-form ref="form" label-width="150px">
      <div class="address-title">
       <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">新增调查日志</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="电话名称：" class="item-column3">
          {{comData.custName}}
        </el-form-item>
        <el-form-item label="电话类型：" class="item-column3">
          {{comData.phoneTypeDes}}
        </el-form-item>
        <el-form-item label="电话号码：" class="item-column3">
          {{comData.phoneNum}}
        </el-form-item>
        <el-form-item label="来源：" class="item-column3">
          {{comData.sourceDes}}
        </el-form-item>
        <el-form-item label="接听情况：" class="item-column3">
          {{comData.answerDes}}
        </el-form-item>
        <el-form-item label="调查阶段：" class="item-column3">
          {{comData.checkStageDes}}
        </el-form-item>
        <el-form-item label="其他来源说明：" class="item-column1" v-show="comData.source=='02'">
          {{comData.sourceDesc}}
        </el-form-item>
      </div>
      <div class="address-title">
        <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">录入单位电话调查信息</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="第三方查询信息：" class="item-column1" style="min-width:600px;">
          {{comData.thirdResult}}
        </el-form-item>
        <el-form-item label="拨打电话：" class="item-column3">
          {{comData.phoneDes}}
        </el-form-item>
        <el-form-item label="" class="item-column2" v-show="comData.phone!='01'">
          {{comData.phonetxt}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="comData.phonetxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="comData.phone=='01'">
            {{comData.phonetxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="接电话人身份：" class="item-column3">
          {{comData.answerIdentityDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="comData.answertxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="comData.answerIdentity=='00'">
            {{comData.answertxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column3 item-column3-null" v-show="comData.answerIdentity!='00'">
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null" v-show="comData.answerIdentity!='00'">
        </el-form-item>
        <el-form-item label="核对单位及工作信息：" class="item-column3 line2-class">
          {{comData.companyDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="comData.companytxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="comData.company=='01'">
            {{comData.companytxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column3 item-column3-null" v-show="comData.company!='01'">
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null" v-show="comData.company!='01'">
        </el-form-item>
        <el-form-item label="核对工作时间：" class="item-column3">
          {{comData.checkTimeDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="comData.companytxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="comData.company=='01'">
            {{comData.companytxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column3 item-column3-null" v-show="comData.company!='01'">
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null" v-show="comData.company!='01'">
        </el-form-item>
        <el-form-item label="核对收入：" class="item-column3">
          {{comData.checkIncomeDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="comData.checkIncometxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="comData.checkIncome=='00'">
            {{comData.checkIncometxt}}
          </el-form-item>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="comData.checkIncometxt" placement="top">
          <el-form-item label="" class="item-column2 item-column3-null" v-show="comData.checkIncome!='00'">
            {{comData.checkIncometxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="用工方式：" class="item-column3">
          {{comData.employmentmodeDes}}
        </el-form-item>
        <el-form-item label="" class="item-column3-null item-column2">
        </el-form-item>
        <el-form-item label="工资发放情况：" class="item-column3">
          {{comData.payrollSituationDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="comData.payrollSituationtxt" placement="top">
          <el-form-item label="说明：" class="item-column2 " v-show="comData.payrollSituation=='00'">
            {{comData.payrollSituationtxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column3-null item-column2" v-show="comData.payrollSituation!='00'">
        </el-form-item>
        <el-form-item label="是否缴纳养老保险：" class="item-column3">
          {{comData.pensionInsuranceDes}}
        </el-form-item>
        <el-form-item label="是否缴纳住房公积金：" class="item-column3 line2-class">
          {{comData.housingFundDes}}
        </el-form-item>
        <el-form-item label="" class="item-column3-null item-column3">
        </el-form-item>
        <el-form-item label="核对工作证明人1：" class="item-column3">
          {{comData.jobref1}}
        </el-form-item>
        <el-form-item label="核对工作证明人2：" class="item-column3">
          {{comData.jobref2}}
        </el-form-item>
        <el-form-item label="调查结果：" class="item-column1" style="min-width:600px;">
          <div style="white-space: pre-wrap;"> {{comData.conclusion}} </div>
        </el-form-item>
      </div>
    </el-form> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: ['1', '2'],
        imageUrl: ''
      }
    },
    props: ['comData', 'isFull'],
    mounted() {
      if (this.isFull == true) { // 全屏
        $(".textarea-class").css("minWidth", "500px");
        $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
      } else if (this.isFull == false) { // 分屏
        $(".textarea-class").css("minWidth", "300px");
        $(".item-column1 .el-form-item__content").css("width", "300px");
      }
    },
    watch: {
      // 判断全屏 , 更改样式
      isFull: function (val) {
        if (val == true) { // 全屏
          $(".textarea-class").css("minWidth", "500px");
          $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
        } else if (val == false) { // 分屏
          $(".textarea-class").css("minWidth", "300px");
          $(".item-column1 .el-form-item__content").css("width", "300px");
        }
      }
    }
  }

</script>
