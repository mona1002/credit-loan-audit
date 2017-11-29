<!-- 电话征信 - 家庭联系人 历史 -->
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        {{familyData.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        {{familyData.phoneType}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{familyData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{familyData.source}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{familyData.answer}}
      </el-form-item>
      <el-form-item label="调查情况:" class="item-column3">
        {{familyData.checkStage}}
      </el-form-item>
      <div class="address-title">
        录入家庭联系人电话调查信息
      </div>
      <el-form-item label="第三方查询信息">
        {{familyData.threeQueriestxt}}
      </el-form-item>
      <el-form-item label="三方查询是否异常:">
        {{familyData.threeQueriestxt}}
      </el-form-item>
      <el-form-item label="微信/支付宝是否异常:" class="item-column2">
        {{familyData.mobilepaymenttxt}}
      </el-form-item>
      <el-form-item label="异常项说明:" class="item-column2">
        {{familyData.exceptionremark}}
      </el-form-item>
      <el-form-item label="是否与家庭联系人为同一接听人:">
        {{familyData.issameFamtxt}}
      </el-form-item>
      <el-form-item label="与借款人关系:">
        {{familyData.relBorrower}}
      </el-form-item>
      <el-form-item label="核对工作情况:">
        {{familyData.checkWorktxt}}
      </el-form-item>
      <el-form-item label="核对婚姻情况:" class="item-column2">
        {{familyData.maritalStatustxt}}
      </el-form-item>
      <el-form-item label="核对子女情况:" class="item-column2">
        {{familyData.childrenStatustxt}}
      </el-form-item>
      <el-form-item label="核实居住地址:">
        {{familyData.checkAddrtxt}}
      </el-form-item>
      <el-form-item label="核对房产:">
        {{familyData.checkEstatetxt}}
      </el-form-item>
      <el-form-item label="其他收入:">
        {{familyData.otherIncometxt}}
      </el-form-item>
      <el-form-item label="调查结果:">
        {{familyData.conclusion}}
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id:'',  // 住宅电话调查日志记录 id
      phoneType:'', // 电话类型
      familyData:'' // 请求返回的数据
    }
  },
  created() {
    this.queryTelfContract();
  },
  methods: {
    queryTelfContract(){
      this.post('/creTelResearchHis/queryTelfContract',{
        id:this.id,
        phoneType:this.phoneType
      }).then( res => {
        console.log(res);
        this.mobileData = res.data;
      })
    }
  }
}

</script>
<style>
.address-title {
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  background: #ededed;
  line-height: 40px;
  padding-left: 10px;
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
}



/* */

.el-form-item__label {
  width: 150px !important;
}

.el-form-item {
  margin-bottom: 0;
}



/* 三列 */

.item-column3 {
  width: 33%;
  float: left;
  margin: 0;
  margin-bottom: 10px;
}



/* 两列 */

.item-column2 {
  width: 50%;
  float: left;
  margin: 0;
}



/* 表单提交 */

.address-submit {
  margin: 0;
  padding: 0;
  float: right;
  margin: 20px;
}

</style>
