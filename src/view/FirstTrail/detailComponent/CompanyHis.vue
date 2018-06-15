<!-- 电话征信 - 单位电话 历史 -->
<template>
  <div>
    <el-form ref="form" label-width="150px">
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">新增调查日志</span>
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
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">录入单位电话调查信息</span>
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
            {{comData.conclusion}}
          </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    isFull: function(val) {
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
