<!-- 电话征信 - 单位电话 历史 -->
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <div class="address-title">
        新增调查日志
      </div>
      <el-form-item label="客户名称:" class="item-column3">
        {{comData.custName}}
      </el-form-item>
      <el-form-item label="电话类型:" class="item-column3">
        {{comData.phoneType}}
      </el-form-item>
      <el-form-item label="电话号码:" class="item-column3">
        {{comData.phoneNum}}
      </el-form-item>
      <el-form-item label="来源:" class="item-column3">
        {{comData.source}}
      </el-form-item>
      <el-form-item label="接听情况:" class="item-column3">
        {{comData.answer}}
      </el-form-item>
      <el-form-item label="调查阶段:" class="item-column3">
        {{comData.checkStage}}
      </el-form-item>
      <div class="address-title">
        录入单位电话调查信息
      </div>
      <el-form-item label="拨打电话:">
        {{comData.phonetxt}}
      </el-form-item>
      <el-form-item label="接电话人身份:">
        {{comData.answertxt}}
      </el-form-item>
      <el-form-item label="核对单位及工作信息:">
        {{comData.companytxt}}
      </el-form-item>
      <el-form-item label="核对工作时间:">
        {{comData.checkTimetxt}}
      </el-form-item>
      <el-form-item label="核对收入:">
        {{comData.checkIncometxt}}
      </el-form-item>
      <el-form-item label="用工方式:">
        {{comData.employmentmodetxt}}
      </el-form-item>
      <el-form-item label="工作发放情况:">
        {{comData.payrollSituationtxt}}
      </el-form-item>
      <el-form-item label="是否缴纳养老保险:" class="item-column2">
        {{comData.pensionInsurance}}
      </el-form-item>
      <el-form-item label="是否缴纳住房公积金:" class="item-column2">
        {{comData.housingFund}}
      </el-form-item>
      <el-form-item label="核对工作证明人1:" class="item-column2">
        {{comData.jobref1}}
      </el-form-item>
      <el-form-item label="核对工作证明人2:" class="item-column2">
        {{comData.jobref2}}
      </el-form-item>
      <el-form-item label="调查结论">
        {{comData.conclusion}}
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
      comData:'' // 请求返回的数据
    }
  },
  mounted() {
        console.log('id='+this.id);
    console.log('phoneType='+this.phoneType);
    // 测试数据
    this.queryComTelLog();
  },
  props:['id','phoneType'],
  methods: {
    queryComTelLog(){
      this.post('/creTelResearchHis/queryComTelLog',{
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
