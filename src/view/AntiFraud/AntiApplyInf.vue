<!-- 反欺诈申请 - - 详情页面 -->
<template>
  <div date="AntiApplyInf" class="anti-apply-info-class">
    <!-- 反欺诈申请信息=========================默认显示1-条？分页？ -->
    <div class="address-title">
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">基本信息</span>
    </div>
    <div class="header-area">
      <li class="item-column3">
        <div class="left-title">
          进件编号：
        </div>
        <div class="item-content">
          212121
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          客户名称：
        </div>
        <div class="item-content">
          212121
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          证件类型：
        </div>
        <div class="item-content">
          212121
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          证件号码：
        </div>
        <div class="item-content">
          212121
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
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">反欺诈申请信息</span>
    </div>
    <!-- 反欺诈神效信息 表单 -->
    <ul style="padding-left:20px;">
      <li class="item-column3">
        <div class="left-title left-title2">
          反欺诈申请类型主原因：
        </div>
        <div>
          <el-select v-model="mainReason">
            <el-option label="信审黑名单" value="00"></el-option>
            <el-option label="信审灰名单" value="01"></el-option>
            <el-option label="外部黑名单" value="02"></el-option>
            <el-option label="外部灰名单" value="03"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          子原因：
        </div>
        <div>
          <el-select v-model="secondReason">
            <el-option label="无人接" value="00"></el-option>
            <el-option label="拒接" value="01"></el-option>
            <el-option label="停机" value="02"></el-option>
            <el-option label="空号" value="03"></el-option>
            <el-option label="接通" value="04"></el-option>
          </el-select>
        </div>
      </li>
      <li class="item-column1">
        <div class="left-title"><span class="require-icon" style="left:60px;">*</span>调查结论：</div>
        <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
          <div class="textarea-class">
            <el-input v-model="conclusion" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
          </div>
        </el-tooltip>
      </li>
      <li class="item-column3">
        <div class="left-title">反欺诈申请人：</div>
        <div class="item-content">
          {{}}xxx
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title ">反欺诈申请日期：</div>
        <div class="item-content">
          {{}}2017-2-13
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title ">反欺诈申请机构：</div>
        <div class="item-content">
          {{}}021
        </div>
      </li>
      <li class="item-column1 submit-class">
        <el-button type="primary" @click="">关闭</el-button>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {

      // isFull: true, // 全屏
    }
  },
  mounted() {
    this.phoneType = '01'; // 住址电话
    if (this.isFull == true) { // 全屏
      console.log('全屏');
      // $(".item-column1 .textarea-class").css("width", "calc(66% - 290px)")
      // 提交按钮
      // $('.submit-class').css("margin-left", "calc( 66% - 140px)");

    } 
  },
}

</script>
<style>
/* 一列 */

.anti-apply-info-class .item-column1 {
  width: 100%;
  min-width: 1366px;
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
  min-width: 350px;
  float: left;
  margin: 0;
  margin-bottom: 10px;
  /*border: 1px solid;*/
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
  width: 130px;
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
  width: calc( 100% - 130px);
  height: 30px;
  line-height: 30px;
  text-align: left;
}

.anti-apply-info-class li .textarea-class {
  height: auto;
  float: left;
  /*width: 795px;*/
  /*min-width: 300px;*/
  /*min-width: 500px;*/
  padding-bottom: 10px;
  width:calc(66% - 290px);
}

/* 必填 * */

.anti-apply-info-class .require-icon {
  color: #ff0000;
  display: inline-block;
  width: 0px;
  float: left;
  position: absolute;
  left: 38px;
  line-height: 35px;
}
/* 提交按钮 */
.anti-apply-info-class .submit-class{
  margin-top: 50px;
  margin-left: calc( 66% - 140px);
}

</style>
