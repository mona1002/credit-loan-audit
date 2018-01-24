<!-- 电话征信 - 住址电话 历史 -->
<template>
  <div>
    <el-form ref="form" label-width="150px">
      <!--       <div class="address-title">
        新增调查日志
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">新增调查日志</span>
      </div>
      <div style="margin-left:30px;">
        <el-form-item label="客户名称：" class="item-column3">
          {{mobileData.custName}}
        </el-form-item>
        <el-form-item label="电话类型：" class="item-column3">
          {{mobileData.phoneTypeDes}}
        </el-form-item>
        <el-form-item label="电话号码：" class="item-column3">
          {{mobileData.phoneNum}}
        </el-form-item>
        <el-form-item label="来源：" class="item-column3">
          {{mobileData.sourceDes}}
        </el-form-item>
        <el-form-item label="接听情况：" class="item-column3">
          {{mobileData.answerDes}}
        </el-form-item>
        <el-form-item label="调查情况：" class="item-column3">
          {{mobileData.checkStageDes}}
        </el-form-item>
        <!-- v-show=source=='02' -->
        <el-tooltip class="item" effect="dark" :content="mobileData.sourceDesc" placement="top">
          <el-form-item label="其它来源情况说明：" class="item-column1" v-show="mobileData.source=='02'">
            {{mobileData.sourceDesc}}
          </el-form-item>
        </el-tooltip>
      </div>
      <!-- <div class="address-title">
        录入住址电话调查信息
      </div> -->
      <div class="address-title">
        <img src="../../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">录入住址电话调查信息</span>
      </div>
      <div style="margin-left:30px;">
        <!-- <el-form-item label="第三方查询结果" class="item-column1">
          {{mobileData.thirdResult}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.thirdResult" placement="top">
          <el-form-item label="第三方查询结果：" class="item-column1">
            {{mobileData.thirdResult}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="三方查询是否异常：" class="item-column3">
          {{mobileData.threeQueriesdes}}
        </el-form-item>
        <!-- v-show="mobileData.threeQueries=='1'" -->
        <el-tooltip class="item" effect="dark" :content="mobileData.exceptionState" placement="top">
          <el-form-item label="异常说明：" class="item-column2 item-column3-2" v-show="mobileData.expenses=='00'">
            {{mobileData.exceptionState}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.expenses!='00'">
        </el-form-item>
        <!-- 是否与家庭联系人为同一接听人 -->
        <el-form-item label="是否与家庭联系人为同一人接听：" class="item-column3 line2-class">
          {{mobileData.issameFamDes}}
        </el-form-item>
        <!-- v-show="mobileData.issameFam=='0'" -->
        <!--         <el-form-item label="说明："  class="item-column2 line2-class" v-show="mobileData.issameFam=='0'">
          {{mobileData.issameFamtxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.issameFamtxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.issameFam=='0'">
            {{mobileData.issameFamtxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.issameFam!='0'">
        </el-form-item>
        <el-form-item label="与借款人关系：" class="item-column3">
          {{mobileData.relBorrowerDes}}
        </el-form-item>
        <!-- v-show="mobileData.relBorrower=='03'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.relBorrower=='03'">
          {{mobileData.relBorrowertxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.relBorrowertxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.relBorrower=='03'">
            {{mobileData.relBorrowertxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.relBorrower!='03'">
        </el-form-item>
        <el-form-item label="核对工作情况：" class="item-column3">
          {{mobileData.checkWorkDes}}
        </el-form-item>
        <!-- v-show="mobileData.checkWork=='01'" -->
        <!-- <el-form-item label="说明：" class="item-column" v-show="mobileData.checkWork=='01'">
          {{mobileData.checkWorktxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.checkWorktxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.checkWork=='01'">
            {{mobileData.checkWorktxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.checkWork!='01'">
        </el-form-item>
        <el-form-item label="核对婚姻情况：" class="item-column3">
          {{mobileData.maritalStatusDes}}
        </el-form-item>
        <el-form-item label="核对子女情况：" class="item-column3">
          {{mobileData.maritalStatustxtDes}}
        </el-form-item>
        <el-form-item label="" class="item-column3 item-column3-null">
        </el-form-item>
        <el-form-item label="核对地址：" class="item-column3">
          {{mobileData.checkAddrtxt}}
        </el-form-item>
        <!-- v-show="mobileData.checkAddr=='01'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.checkAddr=='01'">
          {{mobileData.checkAddrtxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.checkAddrtxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.checkAddr=='01'">
            {{mobileData.checkAddrtxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.checkAddr!='01'">
        </el-form-item>
        <el-form-item label="核对房产：" class="item-column3">
          {{mobileData.checkEstateDes}}
        </el-form-item>
        <!-- v-show="mobileData.checkEstate=='00'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.checkEstate=='00'">
          {{mobileData.checkEstatetxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.checkEstatetxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.checkEstate=='00'">
            {{mobileData.checkEstatetxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.checkEstate!='00'">
        </el-form-item>
        <el-form-item label="其他收入：" class="item-column3">
          {{mobileData.otherIncomeDes}}
        </el-form-item>
        <!-- v-show="mobileData.otherIncome=='00'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.otherIncome=='00'">
          {{mobileData.otherIncometxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.otherIncometxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.otherIncome=='00'">
            {{mobileData.otherIncometxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.otherIncome!='00'">
        </el-form-item>
        <el-form-item label="近期大项开销：" class="item-column3">
          {{mobileData.recentLargespendDes}}
        </el-form-item>
        <!-- v-show="mobileData.recentLargespend=='00'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.recentLargespend=='00'">
          {{mobileData.recentlArgespendInfo}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.recentlArgespendInfo" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.recentLargespend=='00'">
            {{mobileData.recentlArgespendInfo}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.recentLargespend!='00'">
        </el-form-item>
        <el-form-item label="父母：" class="item-column3">
          {{mobileData.parentsDes}}
        </el-form-item>
        <!-- v-show="mobileData.parents=='01'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.parents=='01'">
          {{mobileData.parentsInfo}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.parentsInfo" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.parents=='01'">
            {{mobileData.parentsInfo}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.parents!='01'">
        </el-form-item>
        <el-form-item label="兄弟姐妹：" class="item-column3">
          {{mobileData.brotherDes}}
        </el-form-item>
        <!-- v-show="mobileData.brother=='00'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.brother=='00'">
          {{mobileData.brothertxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.brothertxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.brother=='00'">
            {{mobileData.brothertxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.brother!='00'">
        </el-form-item>
        <el-form-item label="支付家庭生活费用：" class="item-column3">
          {{mobileData.expensesDes}}
        </el-form-item>
        <!-- v-show="mobileData.expenses=='00'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.expenses=='00'">
          {{mobileData.expensestxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.expensestxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.expenses=='00'">
            {{mobileData.expensestxt}}
          </el-form-item>
        </el-tooltip>
        <el-form-item label="" class="item-column2 item-column3-2-normal" v-show="mobileData.expenses!='00'">
        </el-form-item>
        <el-form-item label="核对家庭固话：" class="item-column3">
          {{mobileData.checkHometelDes}}
        </el-form-item>
        <!-- v-show="mobileData.checkHometel=='01'" -->
        <!-- <el-form-item label="说明：" class="item-column2" v-show="mobileData.checkHometel=='01'">
          {{mobileData.checkHometeltxt}}
        </el-form-item> -->
        <el-tooltip class="item" effect="dark" :content="mobileData.checkHometeltxt" placement="top">
          <el-form-item label="说明：" class="item-column2 item-column3-2" v-show="mobileData.checkHometel=='01'">
            {{mobileData.checkHometeltxt}}
          </el-form-item>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="mobileData.hobbyandBehave" placement="top">
          <el-form-item label="借款人爱好和品行：" class="item-column1">
            {{mobileData.hobbyandBehave}}
          </el-form-item>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="mobileData.conclusion" placement="top">
          <el-form-item label="调查结果：" class="item-column1">
            {{mobileData.conclusion}}
          </el-form-item>
        </el-tooltip>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // id:'',  // 住宅电话调查日志记录 id
      // phoneType:'', // 电话类型
      // mobileData: '', // 请求返回的数据
      // queryHis:'' // 监听对象
    }
  },
  // mounted() {
  //   console.log('id='+this.id);
  //   // console.log('phoneType='+this.phoneType);
  //   // 测试数据
  //   // this.id = '07a3c0ac-68f1-4400-9090-3144aff68015'
  //   // this.queryHomeTel();
  //   console.log(this.mobileData);
  // },
  props: ['mobileData', 'isFull'],
  //   props:['id','phoneType','queryHis'],
  //   methods: {
  //     queryHomeTel(){
  //       this.post('creTelResearchHis/queryHomeTel',{
  //         id:this.id,
  //         phoneType:this.phoneType
  //       }).then( res => {
  //         console.log(res);
  //         this.mobileData = res.data;
  //       })
  //     }
  //   },
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
    // queryHis:function(){
    //   console.log('id====='+this.id);
    // console.log('phoneType='+this.phoneType);
    //   if(this.queryHis){
    //     this.queryHomeTel();
    //   }
    // }
    // 判断全屏 , 更改样式
    isFull: function(val) {
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
