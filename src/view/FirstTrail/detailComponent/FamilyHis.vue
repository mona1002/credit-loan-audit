<!-- 电话征信 - 家庭联系人 历史 -->
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
                <span> {{familyData.custName}}</span>
              </li>
              <li>
                <label class="label_width_166">电话类型：</label>
                <span> {{familyData.phoneTypeDes}}</span>
              </li>
              <li>
                <label class="label_width_166">电话号码：</label>
                <span> {{familyData.phoneNum}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_166">来源：</label>
              <span> {{familyData.sourceDes}}</span>
            </li>
            <li>
              <label class="label_width_166">接听情况：</label>
              <span> {{familyData.answerDes}}</span>
            </li>
            <li>
              <label class="label_width_166">调查情况：</label>
              <span> {{familyData.checkStageDes}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">录入家庭联系人电话调查信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li class="text_area_li">
                <label class="label_width_166">第三方查询信息：</label>
                <span class="text_area_span text_area_span_minus170"> {{familyData.thirdResult}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat">
                <label class="label_width_166">三方查询是否异常：</label>
                <span> {{familyData.threeQueriesDes}}</span>
              </li>
              <li v-show="familyData.threeQueries=='1'" class="text_area_li">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.threeQueriestxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat">
                <label class="label_width_166">微信/支付宝是否异常：</label>
                <span> {{familyData.mobilepaymentDes}}</span>
              </li>
              <li v-show="familyData.mobilepayment=='1'" class="text_area_li margin_top_5">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.mobilepaymenttxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat label_height_48">
                <label class="label_width_166">是否与家庭联系人为同一接听人：</label>
                <span> {{familyData.issameFamDes}}</span>
              </li>
              <li class="text_area_li" v-show="familyData.issameFam=='0'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.issameFamtxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat">
                <label class="label_width_166">与借款人关系：</label>
                <span> {{familyData.relBorrowerDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="familyData.relBorrower=='03'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.relBorrowertxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat">
                <label class="label_width_166">核对工作情况：</label>
                <span> {{familyData.checkWorkDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="familyData.checkWork=='01'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.checkWorktxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat">
                <label class="label_width_166">核对婚姻情况：</label>
                <span> {{familyData.maritalStatusDes}}</span>
              </li>
              <li>
                <label class="label_width_110">核对子女情况：</label>
                <span> {{familyData.maritalStatustxtDes}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_166">核实居住地址：</label>
                <span> {{familyData.checkAddrDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="familyData.checkAddr=='01'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.checkAddrtxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat">
                <label class="label_width_166">核对房产：</label>
                <span> {{familyData.checkEstateDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="familyData.checkEstate=='00'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.checkEstatetxt}}</span>
              </li>
            </div>
            <div class=" CreditForm_div_border clearFix">
              <li class="clearFloat">
                <label class="label_width_166">其他收入：</label>
                <span> {{familyData.otherIncomeDes}}</span>
              </li>
              <li class="text_area_li margin_top_5" v-show="familyData.otherIncome=='00'">
                <label class="label_width_110">说明：</label>
                <span class="text_area_span text_area_span_minus115 pre_wrap  "> {{familyData.otherIncometxt}}</span>
              </li>
            </div>
            <li class="text_area_li clearFloat">
              <label class="label_width_166">调查结果：</label>
              <span class="text_area_span text_area_span_minus170 pre_wrap"> {{familyData.conclusion}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <el-form ref="form" label-width="150px"> -->
    <!-- <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">新增调查日志</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="电话名称：" class="item-column3">
          {{familyData.custName}}
        </el-form-item>
        <el-form-item label="电话类型：" class="item-column3">
          {{familyData.phoneTypeDes}}
        </el-form-item>
        <el-form-item label="电话号码：" class="item-column3">
          {{familyData.phoneNum}}
        </el-form-item>
        <el-form-item label="来源：" class="item-column3">
          {{familyData.sourceDes}}
        </el-form-item>
        <el-form-item label="接听情况：" class="item-column3">
          {{familyData.answerDes}}
        </el-form-item>
        <el-form-item label="调查情况：" class="item-column3">
          {{familyData.checkStageDes}}
        </el-form-item>
        <el-form-item label="其它来源情况说明：" class="item-column1" v-show="familyData.source=='02'">
          {{familyData.sourceDesc}}
        </el-form-item>
      </div> -->
    <!-- <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">录入家庭联系人电话调查信息</span>
      </div> -->
    <!-- <div style="margin-left:30px;">
        <el-form-item label="第三方查询信息：" class="item-column1">
          {{familyData.thirdResult}}
        </el-form-item>
        <el-form-item label="三方查询是否异常：" class="item-column3">
          {{familyData.threeQueriesDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.threeQueriestxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.threeQueries=='1'">
            {{familyData.threeQueriestxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.threeQueries!='1'">
        </el-form-item>
        <el-form-item label="微信/支付宝是否异常：" class="item-column3 line2-class">
          {{familyData.mobilepaymentDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.mobilepaymenttxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.mobilepayment=='1'">
            {{familyData.mobilepaymenttxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.mobilepayment!='1'">
        </el-form-item>
        <el-form-item label="是否与家庭联系人为同一接听人：" class="item-column3 line2-class">
          {{familyData.issameFamDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.issameFamtxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.issameFam=='0'">
            {{familyData.issameFamtxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.issameFam!='0'">
        </el-form-item>
        <el-form-item label="与借款人关系：" class="item-column3">
          {{familyData.relBorrowerDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.relBorrowertxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.relBorrower=='03'">
            {{familyData.relBorrowertxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.relBorrower!='03'">
        </el-form-item>
        <el-form-item label="核对工作情况：" class="item-column3">
          {{familyData.checkWorkDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.checkWorktxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.checkWork=='01'">
            {{familyData.checkWorktxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.checkWork!='01'">
        </el-form-item>
        <el-form-item label="核对婚姻情况：" class="item-column3">
          {{familyData.maritalStatusDes}}
        </el-form-item>
        <el-form-item label="核对子女情况：" class="item-column3">
          {{familyData.maritalStatustxtDes}}
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null">
        </el-form-item>
        <el-form-item label="核实居住地址：" class="item-column3">
          {{familyData.checkAddrDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.checkAddrtxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.checkAddr=='01'">
            {{familyData.checkAddrtxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.checkAddr!='01'">
        </el-form-item>
        <el-form-item label="核对房产：" class="item-column3">
          {{familyData.checkEstateDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.checkEstatetxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.checkEstate=='00'">
            {{familyData.checkEstatetxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.checkEstate!='00'">
        </el-form-item>
        <el-form-item label="其他收入：" class="item-column3">
          {{familyData.otherIncomeDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="familyData.otherIncometxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="familyData.otherIncome=='00'">
            {{familyData.otherIncometxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="familyData.otherIncome!='00'">
        </el-form-item>
        <el-form-item label="调查结果：" class="item-column1 ">
          <div style="white-space: pre-wrap;"> {{familyData.conclusion}} </div>
        </el-form-item>
      </div> -->
    <!-- </el-form> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: ['1', '2']
      }
    },
    props: ['familyData', 'isFull'],
    mounted() {
      if (this.isFull == true) { // 全屏
        console.log('全屏');
        $(".textarea-class").css("minWidth", "500px");
        $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
      } else if (this.isFull == false) { // 分屏
        console.log("分屏");
        $(".textarea-class").css("minWidth", "300px");
        $(".item-column1 .el-form-item__content").css("width", "300px");
      }
    },
    watch: {
      // 判断全屏 , 更改样式
      isFull: function (val) {
        if (val == true) { // 全屏
          console.log('全屏');
          $(".textarea-class").css("minWidth", "500px");
          $(".item-column1 .el-form-item__content").css("width", "calc( 66% - 290px");
        } else if (val == false) { // 分屏
          console.log("分屏");
          $(".textarea-class").css("minWidth", "300px");
          $(".item-column1 .el-form-item__content").css("width", "300px");
        }
      }
    }
  }

</script>
