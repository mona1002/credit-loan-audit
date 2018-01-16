<!-- 反欺诈申请 - - 详情查看页面 -->
<template>
  <div date="AntiApplyInf" class="anti-apply-info-class">
    <!-- 反欺诈申请信息=========================默认显示1-条？分页？ -->
    <div class="address-title">
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">基本信息</span>
    </div>
    <div class="header-area" style="padding-left:20px;">
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
      <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
      <span class="headFont">反欺诈申请信息</span>
    </div>
    <!-- 反欺诈神效信息 表单 -->
    <ul style="padding-left:20px;">
      <li class="item-column3">
        <div class="left-title left-title2">
          反欺诈申请类型主原因：
        </div>
        <div class="item-content">
          反欺诈申请类型主原因：
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title">
          子原因：
        </div>
        <div class="item-content">
          子原因：
        </div>
      </li>
      <li class="item-column1">
        <!-- <span class="require-icon" style="left:30px;">*</span> -->
        <div class="left-title">欺诈上报描述：</div>
        <div class="textarea-class">
          <el-input v-model="applyDesc" type="textarea" :rows="5" resize=none :maxlength="500" :disabled="true">
          </el-input>
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title ">反欺诈申请人：</div>
        <div class="item-content">
          {{applyPersonName}}
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title ">反欺诈申请日期：</div>
        <div class="item-content">
          {{appDate}}
        </div>
      </li>
      <li class="item-column3">
        <div class="left-title ">反欺诈申请机构：</div>
        <div class="item-content">
          {{appSuborgName}}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {


      applyId: '', // 申请单ID
      // id: '', // 主管/专员 用 列表id

      antiFlag: '', // 标志
    }
  },
  mounted() {
    console.log(this.showFqz);
    // 先判断是 初审 终审  /  专员  主管
    var judgeFlag = JSON.parse(localStorage.getItem('judge'));
    this.antiFlag = judgeFlag.flag;

    // // 初审 终审 取 applyId
    // if (this.antiFlag == '01' || this.antiFlag == '02') {
    //   // 先取到 id , 请求 反欺诈 页面信息
    //   // var taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
    //   this.id = JSON.parse(localStorage.getItem('taskInWaitting')).applyId;
    // } else if (this.antiFlag == '02') {
    //   // FtaskInWaitting
    //   // var FtaskInWaitting = JSON.parse(localStorage.getItem('FtaskInWaitting'));
    //   this.id = JSON.parse(localStorage.getItem('FtaskInWaitting')).applyId;
    // } else if (this.antiFlag == '03') { // 其他取 列表id 取本地
    //   console.log(' 专员 ');

    //   this.id = JSON.parse(localStorage.getItem('AntitaskInWaitting')).applyId;
    // } else if (this.antiFlag == '04') {
    //   console.log(' 主管 ');
    //   this.id = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).applyId;
    // }

    // 查询页面全部 用列表的 id
    this.id = this.$route.params.id;

    // 经办人 登录用户名
    var userInfo = JSON.parse(localStorage.getItem('userInf'));
    this.userCode = userInfo.userCode;
    this.orgCode = userInfo.orgCode;

    // 查询反欺诈信息
    this.getFraudApplyInfo();

  },
  methods: {
    // 查询 反欺诈信息
    getFraudApplyInfo() {
      // 测试 id
      // this.id = 'ed353288-758d-4699-bec7-094bd6444556';

      this.post('/fraudApplyInfoController/getFraudApplyInfoWithOpinionById', {
          applyId: this.id
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
  min-width: 1366px;
  float: left;
  /*max-width: 1366px;*/
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
  /*min-width: 300px;*/
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
  font-size: 14px;
}

.anti-apply-info-class li .textarea-class {
  height: auto;
  float: left;
  min-width: 400px;
  padding-bottom: 10px;
  width: calc(66% - 195px);
}



/* 右侧显示内容 */

.anti-apply-info-class .right-title {
  width: calc( 100% - 130px);
  line-height: 40px;
  font-size: 14px;
  float: left;
}

</style>
