<!-- 电话征信 - 紧急联系人 历史 -->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        <!-- <el-label v-model="form.name">531531</el-label> -->
        {{hurryData.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        {{hurryData.phoneType}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{hurryData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{hurryData.source}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{hurryData.answer}}
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        {{hurryData.checkStage}}
      </el-form-item>
      <div class="address-title">
        录入紧急联系人调查信息
      </div>
      <el-form-item label="第三方查询信息:">
        {{hurryData.threeQueriestxt}}
      </el-form-item>
      <el-form-item label="三方查询是否异常:">
        {{hurryData.threeQueries}}
      </el-form-item>
      <el-form-item label="微信/支付宝是否异常:">
        {{hurryData.mobilepayment}}
      </el-form-item>
      <el-form-item label="异常项说明:">
        {{hurryData.exceptionState}}
      </el-form-item>
      <el-form-item label="与借款人关系:">
        {{hurryData.relBorrower}}
      </el-form-item>
      <el-form-item label="与借款人联系是否频繁:">
        {{hurryData.contactfre}}
      </el-form-item>
      <el-form-item label="核对工作情况:">
        {{hurryData.checkWork}}
      </el-form-item>
      <el-form-item label="核对婚姻情况:">
        {{hurryData.maritalStatus}}
      </el-form-item>
      <el-form-item label="调查结果:">
        {{hurryData.conclusion}}
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
      hurryData:'' // 请求返回的数据
    }
  },
  created() {
    this.queryTeleContract();
  },
  methods: {
    queryTeleContract() {
      console.log('submit!');
      this.post('/creTelResearchHis/queryTeleContract',{
        id:this.id,
        phoneType:this.phoneType
      }).then( res => {
        console.log(res);
        this.hurryData = res.data;
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
