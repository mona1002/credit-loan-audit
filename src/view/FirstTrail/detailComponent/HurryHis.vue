<!-- 电话征信 - 紧急联系人 历史 -->
<template>
  <div>
    <el-collapse ref="form" v-model="activeName">
      <el-collapse-item name='1'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">新增调查日志</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">电话名称：</label>
              <span> {{hurryData.custName}}</span>
            </li>
            <li>
              <label class="label_width_166">电话类型：</label>
              <span> {{hurryData.phoneTypeDes}}</span>
            </li>
            <li>
              <label class="label_width_166">电话号码：</label>
              <span> {{hurryData.phoneNum}}</span>
            </li>
            </div>
            <li>
              <label class="label_width_166">来源：</label>
              <span> {{hurryData.sourceDes}}</span>
            </li>
            <li>
              <label class="label_width_166">接听情况：</label>
              <span> {{hurryData.answerDes}}</span>
            </li>
            <li>
              <label class="label_width_166">调查情况：</label>
              <span> {{hurryData.checkStageDes}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">录入其他联系人调查信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_half clearFix">
          <ul>  <div class=" CreditForm_div_border clearFix">
            <li class="text_area_li">
              <label class="label_width_166">第三方查询信息：</label>
              <span class="text_area_span text_area_span_minus170"> {{hurryData.thirdResult}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">三方查询是否异常：</label>
              <span> {{hurryData.threeQueriesDes}}</span>
            </li>
            <li v-show="hurryData.threeQueries=='1'" class="text_area_li">
              <label class="label_width_110">异常说明：</label>
              <span class="text_area_span text_area_span_minus115"> {{hurryData.threeQueriestxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">微信/支付宝是否异常：</label>
              <span> {{hurryData.mobilepaymentDes}}</span>
            </li>
            <li v-show="hurryData.mobilepayment=='1'" class="text_area_li margin_top_5">
              <label class="label_width_110">异常项说明：</label>
              <span class="text_area_span text_area_span_minus115"> {{hurryData.mobilepaymenttxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li class="clearFloat label_height_48">
              <label class="label_width_166">是否与家庭联系人为同一接听人：</label>
              <span> {{hurryData.issameFamDes}}</span>
            </li>
            <li class="text_area_li" v-show="hurryData.issameFam=='0'">
              <label class="label_width_110">说明：</label>
              <span class="text_area_span text_area_span_minus115"> {{hurryData.issameFamtxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">与借款人关系：</label>
              <span> {{hurryData.relBorrowerDes}}</span>
            </li>
            <li class="text_area_li margin_top_5" v-show="hurryData.relBorrower=='03'">
              <label class="label_width_110">说明：</label>
              <span class="text_area_span text_area_span_minus115"> {{hurryData.relBorrowertxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">核对工作情况：</label>
              <span> {{hurryData.checkWorkDes}}</span>
            </li>
            <li class="text_area_li margin_top_5" v-show="hurryData.checkWork=='01'">
              <label class="label_width_110">异常项说明：</label>
              <span class="text_area_span text_area_span_minus115"> {{hurryData.checkWorktxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">核对婚姻情况：</label>
              <span> {{hurryData.maritalStatusDes}}</span>
            </li>
            <li>
              <label class="label_width_110">核对子女情况：</label>
              <span> {{hurryData.maritalStatustxtDes}}</span>
            </li> </div>
            <li class="text_area_li">
              <label class="label_width_166">调查结果：</label>
              <span class="text_area_span text_area_span_minus170"> {{hurryData.conclusion}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <el-form ref="form" label-width="130px"> -->
    <!-- <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">新增调查日志</span>
      </div> -->
    <!-- <el-form-item label="电话名称：" class="item-column3">
        {{hurryData.custName}}
      </el-form-item>
      <el-form-item label="电话类型：" class="item-column3">
        {{hurryData.phoneTypeDes}}
      </el-form-item>
      <el-form-item label="电话号码：" class="item-column3">
        {{hurryData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源：" class="item-column3">
        {{hurryData.sourceDes}}
      </el-form-item>
      <el-form-item label="接听情况：" class="item-column3">
        {{hurryData.answerDes}}
      </el-form-item>
      <el-form-item label="调查阶段：" class="item-column3">
        {{hurryData.checkStage}}
      </el-form-item>
      <el-form-item label="其它来源情况说明：" class="item-column1" v-show="hurryData.source=='02'">
        {{hurryData.sourceDesc}}
      </el-form-item> -->
    <!-- <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">录入其他联系人调查信息</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="第三方查询信息：" class="item-column1">
          {{hurryData.thirdResult}}
        </el-form-item>
        <el-form-item label="三方查询是否异常：" class="item-column3 line2-class">
          {{hurryData.threeQueriesDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="hurryData.threeQueriestxt" placement="top">
          <el-form-item label="异常说明：" class="item-column2 item-column3-2" v-show="hurryData.threeQueries=='1'">
            {{hurryData.threeQueriestxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.threeQueries!='1'">
        </el-form-item>
        <el-form-item label="微信/支付宝是否异常：" class="item-column3 line2-class">
          {{hurryData.mobilepaymentDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="hurryData.mobilepaymenttxt" placement="top">
          <el-form-item label="异常项说明：" class="item-column2 item-column3-2" v-show="hurryData.mobilepayment=='1'">
            {{hurryData.mobilepaymenttxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.mobilepayment!='1'">
        </el-form-item>
        <el-form-item label="与借款人关系：" class="item-column3">
          {{hurryData.relBorrowerDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="hurryData.relBorrowertxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="hurryData.relBorrower=='03'">
            {{hurryData.relBorrowertxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.relBorrower!='03'">
        </el-form-item>
        <el-form-item label="核对工作情况：" class="item-column3">
          {{hurryData.checkWorkDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="hurryData.checkWorktxt" placement="top">
          <el-form-item label="异常项说明：" class="item-column2 item-column3-2" v-show="hurryData.checkWork=='01'">
            {{hurryData.checkWorktxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="hurryData.checkWork!='01'">
        </el-form-item>
        <el-form-item label="核对婚姻情况：" class="item-column3">
          {{hurryData.maritalStatusDes}}
        </el-form-item>
        <el-form-item label="核对子女情况：" class="item-column3">
          {{hurryData.maritalStatustxtDes}}
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null">
        </el-form-item>
        <el-form-item label="调查结果：" class="item-column1">
          <div style="white-space: pre-wrap;"> {{hurryData.conclusion}}</div>
        </el-form-item> -->
    <!-- </div> -->
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
    props: ['hurryData', 'isFull'],
    // mounted() {
    //   this.queryTeleContract();
    // },
    // methods: {
    //   queryTeleContract() {
    //     console.log('submit!');
    //     this.post('/creTelResearchHis/queryTeleContract',{
    //       id:this.id,
    //       phoneType:this.phoneType
    //     }).then( res => {
    //       console.log(res);
    //       this.hurryData = res.data;
    //     })
    //   }
    // }
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
