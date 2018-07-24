<!-- 电话征信 - 工作证明 历史 -->
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
              <span class="text_area_span text_area_span_minus115"> {{workData.mobilepaymenttxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">接电话人身份：</label>
              <span> {{workData.answerIdentityDes}}</span>
            </li>
            <li class="text_area_li margin_top_5" v-show="workData.answerIdentity=='00'">
              <label class="label_width_110">说明：</label>
              <span class="text_area_span text_area_span_minus115"> {{workData.answertxt}}</span>
            </li> </div>  <div class=" CreditForm_div_border clearFix">
            <li>
              <label class="label_width_166">核对单位工作情况：</label>
              <span> {{workData.checkJobDes}}</span>
            </li>
            <li class="text_area_li margin_top_5" v-show="workData.checkJob=='01'">
              <label class="label_width_110">说明：</label>
              <span class="text_area_span text_area_span_minus115"> {{workData.checkJobtxt}}</span>
            </li> </div> 
            <li class="text_area_li">
              <label class="label_width_166">调查结果：</label>
              <span class="text_area_span text_area_span_minus170"> {{workData.conclusion}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <el-form ref="form" label-width="130px"> -->
    <!-- <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">新增调查日志</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="电话名称：" class="item-column3">
          {{workData.custName}}
        </el-form-item>
        <el-form-item label="电话类型：" class="item-column3">
          {{workData.phoneTypeDes}}
        </el-form-item>
        <el-form-item label="电话号码：" class="item-column3">
          {{workData.phoneNum}}
        </el-form-item>
        <el-form-item label="来源：" class="item-column3">
          {{workData.sourceDes}}
        </el-form-item>
        <el-form-item label="接听情况：" class="item-column3">
          {{workData.answerDes}}
        </el-form-item>
        <el-form-item label="调查阶段：" class="item-column3">
          {{workData.checkStageDes}}
        </el-form-item>
        <el-form-item label="其他来源说明：" class="item-column1" v-show="workData.source=='02'">
          {{workData.sourceDesc}}
        </el-form-item>
      </div> -->
    <!-- <div class="address-title">
        <i class="collapse_title_icon"></i>
        <span class="collapse_title_text">录入工作证明人调查信息</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="微信/支付宝是否异常：" class="item-column3 line2-class">
          {{workData.mobilepaymentDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="workData.mobilepaymenttxt" placement="top">
          <el-form-item label="异常项说明：" class="item-column2 item-column3-2" v-show="workData.mobilepayment=='1'">
            {{workData.mobilepaymenttxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="workData.mobilepayment!='1'">
        </el-form-item>
        <el-form-item label="接电话人身份：" class="item-column3">
          {{workData.answerIdentityDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="workData.answertxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="workData.answerIdentity=='00'">
            {{workData.answertxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="workData.answerIdentity!='00'">
        </el-form-item>
        <el-form-item label="核对单位工作情况：" class="item-column3 line2-class">
          {{workData.checkJobDes}}
        </el-form-item>
        <el-tooltip class="item" effect="dark" :content="workData.checkJobtxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="workData.checkJob=='01'">
            {{workData.checkJobtxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="workData.checkJob!='01'">
        </el-form-item>
        <el-form-item label="调查结果：" class="item-column1">
          <div style="white-space: pre-wrap;"> {{workData.conclusion}} </div>
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
        form: {}
      }
    },
    props: ['workData', 'isFull'],
    // created() {
    //   this.queryTelJobRef();
    // },
    // methods: {
    //   queryTelJobRef() {
    //     this.post('/creTelResearchHis/queryTelJobRef', {
    //       id: this.id,
    //       phoneType: this.phoneType
    //     }).then(res => {
    //       console.log(res);
    //       this.workData = res.data;
    //     })
    //   }
    // }
    mounted() {
      if (this.isFull == true) { // 全屏
        console.log('全屏');
        $(".item-column1 .el-form-item__content").css("minWidth", "500px")
      } else if (this.isFull == false) { // 分屏
        console.log("分屏");
        $(".item-column1 .el-form-item__content").css("minWidth", "300px")
      }
    },
    watch: {
      // 判断全屏 , 更改样式
      isFull: function (val) {
        if (val == true) { // 全屏
          console.log('全屏');
          $(".item-column1 .el-form-item__content").css("minWidth", "500px")
        } else if (val == false) { // 分屏
          console.log("分屏");
          $(".item-column1 .el-form-item__content").css("minWidth", "300px")

        }
      }
    }
  }

</script>
