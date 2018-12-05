<!-- 电话征信 - 住址电话 历史 -->
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
                <span> {{mobileData.custName}}</span>
              </li>
              <li>
                <label class="label_width_166">电话类型：</label>
                <span> {{mobileData.phoneTypeDes}}</span>
              </li>
              <li>
                <label class="label_width_166">电话号码：</label>
                <span> {{mobileData.phoneNum}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_166">来源：</label>
              <span> {{mobileData.sourceDes}}</span>
            </li>
            <li>
              <label class="label_width_166">接听情况：</label>
              <span> {{mobileData.answerDes}}</span>
            </li>
            <li>
              <label class="label_width_166">调查情况：</label>
              <span> {{mobileData.checkStageDes}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">录入住址电话调查信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li class="text_area_li">
                <label class="label_width_166">第三方查询信息：</label>
                <span class="text_area_span text_area_span_minus170"> {{mobileData.thirdResult}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">三方查询是否异常：</label>
                <span> {{mobileData.threeQueriesdes}}</span>
              </li>
              <li v-show="mobileData.expenses=='00'" class="text_area_li">
                <label class="label_width_110">异常说明：</label>
                <span class="text_area_span text_area_span_minus115"> {{mobileData.exceptionState}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">与家庭联系人是否相同：</label>
                <span> {{mobileData.issameFamDes}}</span>
              </li>
              <li v-show="mobileData.issameFam=='0'" class="text_area_li margin_top_5">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.issameFamtxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">与借款人关系：</label>
                <span> {{mobileData.relBorrowerDes}}</span>
              </li>
              <li class="text_area_li" v-show="mobileData.relBorrower=='03'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.relBorrowertxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对工作情况：</label>
                <span> {{mobileData.checkWorkDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.checkWork=='01'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.checkWorktxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对婚姻情况：</label>
                <span> {{mobileData.maritalStatusDes}}</span>
              </li>
              <li>
                <label class="label_width_110">核对子女情况：</label>
                <span> {{mobileData.maritalStatustxtDes}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对地址：</label>
                <span> {{mobileData.checkAddrtxt}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.checkAddr=='01'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.checkAddrtxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对房产：</label>
                <span> {{mobileData.checkEstateDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.checkEstate=='00'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.checkEstatetxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">其他收入：</label>
                <span> {{mobileData.otherIncomeDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.otherIncome=='00'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.otherIncometxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">近期大项开销：</label>
                <span> {{mobileData.recentLargespendDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.recentLargespend=='00'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.recentlArgespendInfo}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">父母：</label>
                <span> {{mobileData.parentsDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.parents=='01'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.parentsInfo}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">兄弟姐妹：</label>
                <span> {{mobileData.brotherDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.brother=='00'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.brothertxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">支付家庭生活费用：</label>
                <span> {{mobileData.expensesDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.expenses=='00'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.expensestxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核对家庭固话：</label>
                <span> {{mobileData.checkHometelDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="mobileData.checkHometel=='01'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap"> {{mobileData.checkHometeltxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="text_area_li clearFloat ">
                <label class="label_width_166">借款人爱好和品行：</label>
                <span class="text_area_span text_area_span_minus170 pre_wrap"> {{mobileData.hobbyandBehave}}</span>
              </li>
            </div>
             <div class="clearFix CreditForm_div_border">
               <li class="text_area_li">
              <label class="label_width_166">其他说明：</label>
              <span class="text_area_span text_area_span_minus170 pre_wrap"> {{mobileData.remark}}</span>
            </li>
            </div>
            <li class="text_area_li clearFloat margin_top_5">
              <label class="label_width_166">调查结果：</label>
              <span class="text_area_span text_area_span_minus170 pre_wrap"> {{mobileData.conclusion}}</span>
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
        activeName: ['1', '2']
      }
    },
    props: ['mobileData'],//, 'isFull'
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
      //   if (val == true) { // 全屏
      //     $(".textarea-class").css("minWidth", "500px");
      //     $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
      //   } else if (val == false) { // 分屏
      //     $(".textarea-class").css("minWidth", "300px");
      //     $(".item-column1 .el-form-item__content").css("width", "300px");
      //   }
      // }
    }
  }

</script>
