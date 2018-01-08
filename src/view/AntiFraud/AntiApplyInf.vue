<!-- 反欺诈申请 - - 详情页面 -->
<template>
  <div date="AntiApplyInf" class="anti-apply-info-class">
    <!-- 反欺诈申请信息=========================默认显示1-条？分页？ -->
    <div class="address-title">
      <!-- <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat"> -->
      <span class="headFont">基本信息</span>
    </div>
    <div class="header-area">
      <li class="item-column3">
        <div class="left-title">
          进件编号：
        </div>
        <div class="item-content">
          {{applySubno}}
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          客户名称：
        </div>
        <div class="item-content">
          {{applyCustName}}
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          证件类型：
        </div>
        <div class="item-content">
          {{certTypeTxt}}
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          证件号码：
        </div>
        <div class="item-content">
          {{certCode}}
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          移动电话：
        </div>
        <div class="item-content">
          212121
        </div>
      </li>
    </div>
    <div class="address-title">
      <!-- <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat"> -->
      <span class="headFont">反欺诈申请信息</span>
    </div>
    <!-- 反欺诈神效信息 表单 -->
    <!-- style="padding-left:20px;" -->
    <ul>
      <li class="item-column2">
        <div class="left-title left-title2">
          反欺诈申请类型主原因：
        </div>
        <div>
          <el-select @change="mainselectChange" v-model="mainReason">
            <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
            </el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column2">
        <div class="left-title">
          子原因：
        </div>
        <el-select @change="secondselectChange" v-model="secondReason">
          <el-option v-for="item in secondReasons" :key="item.id" :label="item.reasonName" :value="item">
          </el-option>
        </el-select>
      </li>
      <li class="item-column1">
        <div class="left-title"><span class="require-icon" style="left:30px;">*</span>调查结论：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class">
            <el-input v-model="applyDesc" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
          </div>
        </el-tooltip>
      </li>
      <li class="item-column3">
        <div class="left-title left-title2">反欺诈申请人：</div>
        <div class="item-content">
          {{applyPersonName}}
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title left-title2">反欺诈申请日期：</div>
        <div class="item-content">
          {{}}2017-2-13
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title left-title2">反欺诈申请机构：</div>
        <div class="item-content">
          {{appSuborgName}}
        </div>
      </li>
      <li class="item-column1 submit-class">
        <!-- <el-button type="primary" @click="close">关闭</el-button> -->
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id:''
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    // 查询反欺诈信息
    this.getFraudApplyInfo();
  },
  methods: {
    // 查询 反欺诈信息
    getFraudApplyInfo() {
      this.post('/fraudApplyInfoController/getFraudApplyInfo', {
          id: this.id
        })
        .then(res => {
          if (res.statusCode == 200) {
            // 任务id
            this.creditappTaskid = res.data.fraudApplyInfo.creditappTaskid;
            // 进件编号
            this.applySubno = res.data.fraudApplyInfo.applySubno;
            // 申请人code
            this.applyCode = res.data.fraudApplyInfo.applyCode;
            // 申请人姓名
            this.applyPersonName = res.data.fraudApplyInfo.applyPersonName;
            // 申请机构 code
            this.appOrgCode = res.data.fraudApplyInfo.appOrgCode;
            // 申请机构名称
            this.appOrgName = res.data.fraudApplyInfo.appOrgName;
            // 申请机构 id
            this.appOrgId = res.data.fraudApplyInfo.appOrgId;
            // 申请机构科室id
            this.appSuborgId = res.data.fraudApplyInfo.appSuborgId;
            // 申请机构科室code
            this.appSuborgCode = res.data.fraudApplyInfo.appSuborgCode;
            // 申请机构科室名称
            this.appSuborgName = res.data.fraudApplyInfo.appSuborgName;
            // 产品 id
            this.proId = res.data.applyInfoPool.proId;
            // 产品 code
            this.proCode = res.data.applyInfoPool.proCode;
            // 客户id
            this.applyCustId = res.data.fraudApplyInfo.applyCustId;
            // 客户姓名
            this.applyCustName = res.data.fraudApplyInfo.applyCustName;
            // 客户编号
            this.applyCustNo = res.data.fraudApplyInfo.applyCustNo;
            // 渠道
            this.channel = res.data.applyInfoPool.channel;
            // 证件号码
            this.certCode = res.data.applyInfoPool.certCode;
            // 证件类型
            this.certTypeTxt = res.data.applyInfoPool.certTypeTxt
          }
        })
    },
    close() {
      console.log('点击关闭按钮')
      // this.showFlag = 0;
      this.$emit('showFlag', 0)
    },
    submitForm() {
      console.log('提交反欺诈')
      this.post('/fraudApplyInfoController/startAntiFraudApply', {
          creditappTaskid: this.creditappTaskid, // 任务id
          userCode: this.userCode, // 用户编号
          orgCode: this.orgCode, // 机构编号
          applyId: this.applyId, // 申请单ID
          applySubno: this.applySubno, // 进件编号
          applyCode: this.applyCode, // 申请人code
          applyPersonName: this.applyPersonName, // 申请人姓名
          appOrgCode: this.appOrgCode, // 申请机构code
          appOrgName: this.appOrgName, // 申请机构名称
          mainreasonId: this.mainreasonId, // 欺诈主原因id
          subreasonId: this.subreasonId, // 欺诈子原因id
          applyDesc: this.applyDesc, // 反欺诈申请描述
          mainreaName: this.mainreaName, // 欺诈主原因名称
          subreaName: this.subreaName, // 欺诈子原因名称
          appOrgId: this.appOrgId, // 申请机构id
          appSuborgId: this.appSuborgId, // 申请机构科室id
          appSuborgCode: this.appSuborgCode, // 申请机构科室code
          appSuborgName: this.appSuborgName, // 申请机构科室名称
          proId: this.proId, // 产品id
          proCode: this.proCode, // 产品code
          applyCustId: this.applyCustId, // 客户id
          applyCustName: this.applyCustName, // 客户姓名
          applyCustNo: this.applyCustNo, // 客户编号
          channel: this.channel, // 渠道
          certCode: this.certCode, // 证件号码
          proName: this.proName, // 产品名称
        })
        .then(res => {
        
          this.showFlag = 0;
        })
    },
    // 主原因改变
    mainselectChange(val) {
      this.mainReason = val.reasonName;
    },
    // 子原因改变
    secondselectChange(val) {
      this.secondReason = val.reasonName;
    }
  },
  watch: {
    mainReason() {

    }
  }
}

</script>
<style>
.anti-apply-info-class {
  width: 100%;
  height: 100%;
  background: #fff;
}









/* 一列 */

.anti-apply-info-class .item-column1 {
  /*width: 100%;*/
  /*min-width: 1366px;*/
  float: left;
}









/* 两列 */

.anti-apply-info-class .item-column2 {
  width: 50%;
  min-width: 450px;
  float: left;
  margin: 0;
  min-height: 50px;
  margin-bottom: 10px;
}









/* 三列 */

.anti-apply-info-class .item-column3 {
  width: 33%;
  /*min-width: 350px;*/
  float: left;
  margin: 0;
  margin-bottom: 10px;
  /*border: 1px solid;*/
  min-width: 300px;
}









/* 折叠面板头部背景色和icon */

.anti-apply-info-class .icon_hat {
  padding: 10px 10px 10px 13px;
  vertical-align: middle;
}

.anti-apply-info-class .headFont {
  font-size: 16px;
}


.anti-apply-info-class .address-title {
  width: 100%;
  height: 35px;
  font-size: 18px;
  background: #ededed;
  display: block;
  margin-bottom: 10px;
  overflow: hidden;
  background: #eef0f9;
  border: 1px solid #e6eaee;
  height: 38px;
  width: 100%;
  font-size: 16px;
  color: #1f2d3d;
  text-align: left;
  vertical-align: middle;
  line-height: 40px;
}


.anti-apply-info-class .header-area {
  width: 100%;
  height: auto;
}

.anti-apply-info-class .left-title {
  float: left;
  width: 120px;
  line-height: 30px;
  min-height: 30px;
  padding-right: 10px;
  text-align: right;
  font-size: 14px;
}

.anti-apply-info-class .left-title2 {
  line-height: 20px;
}

.anti-apply-info-class .item-content {
  float: left;
  width: calc( 100% - 120px);
  height: 30px;
  line-height: 30px;
  text-align: left;
}

.anti-apply-info-class li .textarea-class {
  height: auto;
  float: left;
  /*width: 795px;*/
  /*min-width: 300px;*/
  /*min-width: 400px;*/
  /*max-width: 400px;*/
  padding-bottom: 10px;
  width: calc(66% - 290px);
  width: 400px;
}









/* 必填 * */

.anti-apply-info-class .require-icon {
  color: #ff0000;
  display: inline-block;
  width: 0px;
  float: left;
  left: 38px;
  line-height: 35px;
  position: relative;
}









/* 提交按钮 */

.anti-apply-info-class .submit-class {
  margin-top: 50px;
  margin-left: calc( 66% - 140px);
  text-align: right;
  width: 300px;
}

.anti-apply-info-class .el-input {
  width: 100%;
}

</style>
