<!-- 电话征信 - 工作证明 历史 -->
<template>
  <div>
    <el-collapse  v-model="activeName">
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
                <span> {{workData.custName}}</span>
              </li>
              <li>
                <label class="label_width_166">电话类型：</label>
                <span> {{workData.phoneTypeDes}}</span>
              </li>
              <li>
                <label class="label_width_166">电话号码：</label>
                <span> {{workData.phoneNum}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_166">来源：</label>
              <span> {{workData.sourceDes}}</span>
            </li>
            <li>
              <label class="label_width_166">接听情况：</label>
              <span> {{workData.answerDes}}</span>
            </li>
            <li>
              <label class="label_width_166">调查情况：</label>
              <span> {{workData.checkStageDes}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">录入工作证明人调查信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>   <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">微信/支付宝是否异常：</label>
              <span> {{workData.mobilepaymentDes}}</span>
            </li>
            <li class="text_area_li" v-show="workData.mobilepayment=='1'">
              <label class="label_width_110">异常项说明：</label>
              <span class="text_area_span text_area_span_minus115 pre_wrap"> {{workData.mobilepaymenttxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">接电话人身份：</label>
              <span> {{workData.answerIdentityDes}}</span>
            </li>
            <li class="text_area_li margin_top_5" v-show="workData.answerIdentity=='00'">
              <label class="label_width_110">说明：</label>
              <span class="text_area_span text_area_span_minus115 pre_wrap"> {{workData.answertxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">核对单位工作情况：</label>
              <span> {{workData.checkJobDes}}</span>
            </li>
            <li class="text_area_li margin_top_5" v-show="workData.checkJob=='01'">
              <label class="label_width_110">说明：</label>
              <span class="text_area_span text_area_span_minus115 pre_wrap"> {{workData.checkJobtxt}}</span>
            </li> </div> 
            <li class="text_area_li">
              <label class="label_width_166">调查结果：</label>
              <span class="text_area_span text_area_span_minus170 pre_wrap"> {{workData.conclusion}}</span>
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
      }
    },
    props: ['workData', 'isFull'],
    mounted() {
      if (this.isFull == true) { // 全屏
        $(".item-column1 .el-form-item__content").css("minWidth", "500px")
      } else if (this.isFull == false) { // 分屏
        $(".item-column1 .el-form-item__content").css("minWidth", "300px")
      }
    },
    watch: {
      // 判断全屏 , 更改样式
      isFull: function (val) {
        if (val == true) { // 全屏
          $(".item-column1 .el-form-item__content").css("minWidth", "500px")
        } else if (val == false) { // 分屏
          $(".item-column1 .el-form-item__content").css("minWidth", "300px")

        }
      }
    }
  }

</script>
