<!-- 反欺诈申请 - - 详情编辑页面  菜单进入 -->
<template>
  <div date="AntiApplyInf" class="anti-apply-edit-class">
    <div>
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
            {{data.applyInfoPool.applySubno}}
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">
            客户名称：
          </div>
          <div class="item-content">
            {{data.applyInfoPool.custName}}
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">
            证件类型：
          </div>
          <div class="item-content">
            {{data.applyInfoPool.certTypeTxt}}
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">
            证件号码：
          </div>
          <div class="item-content">
            {{data.applyInfoPool.certCode}}
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">
            移动电话：
          </div>
          <div class="item-content">
            {{data.applyInfoPool.mobile}}
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
            <span class="require-icon" style="left:0px;top:-5px;">*</span> 反欺诈申请类型主原因：
          </div>
          <div>
            <el-select @change="mainselectChange" v-model="mainReason">
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">
            子原因：
          </div>
          <el-select @change="secondselectChange" v-model="secondReason">
            <el-option v-for="item in secondReasons" :key="item.id" :label="item.reasonName" :value="item.id">
            </el-option>
          </el-select>
        </li>
        <li class="item-column1">
          <div class="left-title">
            <span class="require-icon" style="left:15px;">*</span>欺诈上报描述：</div>
          <el-tooltip class="item" effect="dark" content="该输入项为必填项" placement="right-end">
            <div class="textarea-class">
              <el-input v-model="applyDesc" type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
            </div>
          </el-tooltip>
        </li>
        <li class="item-column3">
          <div class="left-title ">反欺诈申请人：</div>
          <div class="item-content">
            {{userCode}}
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title ">反欺诈申请日期：</div>
          <div class="item-content">
            {{dealroperDate | dateFilter}}
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title ">反欺诈申请机构：</div>
          <div class="item-content">
            {{orgCode}}
          </div>
        </li>
        <li class="item-column1 submit-class">
          <el-button plain @click="backRoute()">取消</el-button>
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        creditappTaskid: '', // 任务id
        userCode: '', // 用户编号
        orgCode: '', // 机构编号
        applyId: '', // 申请单ID
        id: '', // 主管/专员 用 列表id
        applySubno: '', // 进件编号
        applyCode: '', // 申请人code
        applyPersonName: '', // 申请人姓名
        appOrgCode: '', // 申请机构code
        appDate: '', // 申请日期
        appOrgName: '', // 申请机构名称
        applyDesc: '', // 反欺诈申请描述
        mainReason: '', // 欺诈主原因id
        mainReasonName: '', // 主原因 name
        secondReason: '', // 欺诈子原因id
        secondReasonName: '', // 子原因name
        appOrgId: '', // 申请机构id
        appSuborgId: '', // 申请机构科室id
        appSuborgCode: '', // 申请机构科室code
        appSuborgName: '', // 申请机构科室名称
        proId: '', // 产品id
        proCode: '', // 产品code
        applyCustId: '', // 客户id
        applyCustName: '', // 客户姓名
        applyCustNo: '', // 客户编号
        channel: '', // 渠道
        certCode: '', // 证件号码
        proName: '', // 产品名称
        mobile: '', // 移动电话
        dealroperDate: '', // 反欺诈申请日期
        certTypeTxt: '', // 证件类型
        mainReasons: [],
        secondReasons: [],
        antiFlag: '', // 标志
        data: '', //请求回来的数据
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/AntiApplyEdit') {
          this.mountedInf();
        }
      }
    },
    mounted() {
      this.mountedInf();
    },
    methods: {
      mountedInf() {
        // 经办人 登录用户名
        var userInfo = JSON.parse(localStorage.getItem('userInf'));
        this.userCode = userInfo.userCode;
        this.orgCode = userInfo.orgCode;
        var stateParms = JSON.parse(localStorage.getItem('antiApplyFlagEdit')).split(';');
        for (var i = 0; i < stateParms.length; i++) {
          stateParms[i] = stateParms[i].split('=');
        }
        this.routeId = stateParms[0][1];
        this.routeFlag = stateParms[1][1];
        // 获取到 id
        this.id = this.$route.params.id || this.routeId;
        /* 标志  
         start 发起反欺诈
         edit  编辑
         add   添加 
         */
        this.flag = this.$route.params.flag || this.routeFlag;
        // 获取到 id
        this.applyId = this.$route.params.id || this.routeId;
        if (this.flag == 'start') {
          this.getFraudApplyInfo();
        } else if (this.flag == 'edit') {
          this.getFraudApplyInfoWithOpinionById();
        }
        // 请求系统时间
        this.getSystemDate();
        // 请求主原因
        this.firstNodeReason();
      },
      // 请求系统时间
      getSystemDate() {
        // 获取系统时间
        this.get('system/getSystemDate?' + Math.random()).then(res => {
          // 请求系统时间
          this.dealroperDate = res.data;
        })
      },
      // 反欺诈申请 获取 主原因子原因
      firstNodeReason() {
        this.get('/credit/firstNodeReason?reasonType=' + '08,09' + '&' + Math.random()).then(res => {
          this.mainReasons = res.data;
          // 请求回来的 赋值
          this.mainReason = this.mainReasonT;
        })
      },
      // 查询 反欺诈信息  , 从列表过来 , 根据列表 id 查询
      getFraudApplyInfoWithOpinionById() {
        this.post('/fraudApplyInfoController/getFraudApplyInfoWithOpinionById', {
          id: this.applyId
        }).then(res => {
          this.data = res.data;
          // 主原因
          this.mainReasonT = this.data.fraudAuditOpinion.mainreasonId;
          if (this.mainReasonT) {
            this.firstNodeReason();
          }
          // 子原因
          this.secondReasonT = this.data.fraudAuditOpinion.subreasonId;
          if (this.secondReasonT) {
            this.findNodeFirstChildren(this.secondReasonT);
          }
          // 欺诈上报描述
          this.applyDesc = this.data.fraudAuditOpinion.auditDesc;
        })
      },
      submitForm() {
        var nodeName, RoutePath, routeParams;
        if (!this.mainReason) {
          this.$message({
            message: "提示：请选择主原因!",
            type: 'warning'
          });
          return;
        }
        if (!this.applyDesc) {
          this.$message({
            message: "提示：请填写欺诈上报描述!",
            type: 'warning'
          });
          return;
        }
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '确定操作? '),
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          modal: false,
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';

              this.post('/fraudApplyInfoController/startAntiFraudApply', {
                  userCode: this.userCode, // 用户编号
                  orgCode: this.orgCode, // 机构编号
                  fraudApplyInfo: {
                    creditappTaskid: this.creditappTaskid, // 任务id
                    applyId: this.id, // 申请单ID
                    applySubno: this.applySubno, // 进件编号
                    mainreasonId: this.mainReason, // 欺诈主原因id
                    mainreaName: this.mainReasonName, // 欺诈主原因名称
                    subreasonId: this.secondReason, // 欺诈子原因id
                    subreaName: this.secondReasonName, // 欺诈子原因名称
                    applyDesc: this.applyDesc, // 反欺诈申请描述
                    proId: this.proId, // 产品id
                    proCode: this.proCode, // 产品code
                    applyCustId: this.applyCustId, // 客户id
                    applyCustName: this.applyCustName, // 客户姓名
                    applyCustNo: this.applyCustNo, // 客户编号
                    channel: this.channel, // 渠道
                    certCode: this.certCode, // 证件号码
                    proName: this.proName, // 产品名称
                  }
                })
                .then(res => {
                  if (res.statusCode == '200') {
                    this.resMsg = res.msg;
                    done();
                    if (this.antiFlag == '01') {
                      this.$router.push('/taskInWaitting');
                    } else if (this.antiFlag == '02') {
                      this.$router.push('/FtaskInWaitting');
                    } else if (this.antiFlag == '03' || this.antiFlag == '04') {
                      this.$router.push('/AntiFraud');
                    } else if (this.antiFlag == '05' || this.antiFlag == '06') {
                      this.$router.push('/reconsiderList');
                    }
                    //终审加判断，反欺诈复议待确认打开页签个数
                  } else {
                    if (res.msg) {
                      this.$message({
                        type: 'warning',
                        message: res.msg
                      });
                    } else {
                      this.$message({
                        type: 'warning',
                        message: '网络异常,请重试!'
                      });
                    }
                    instance.confirmButtonText = '';
                  }
                  instance.confirmButtonLoading = false;
                })
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'success',
            message: this.resMsg
          });

        });
      },
      // 返回  上级路由
      backRoute() {
        window.history.go(-1);
      },
      // 主原因改变
      mainselectChange(val) {
        // 请求子原因
        this.findNodeFirstChildren(val);
      },
      // 获取子原因
      findNodeFirstChildren(val) {
        // 请求子原因
        this.get('/credit/findNodeFirstChildren?id=' + val + '&' + Math.random()).then(res => {
          if (res.statusCode == '200') {
            this.secondReasons = res.data;
            // 赋值
            this.secondReason = this.secondReasonT;
          }
        })
      },
      // 子原因改变
      secondselectChange(val) {
        this.secondReason = val.reasonName;
        this.secondId = val.id
      }
    }
  }

</script>
<style>
  .anti-apply-edit-class {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  /* 一列 */

  .anti-apply-edit-class .item-column1 {
    min-width: 1366px;
    float: left;
  }

  /* 两列 */

  .anti-apply-edit-class .item-column2 {
    width: 50%;
    min-width: 450px;
    float: left;
    margin: 0;
    min-height: 50px;
    margin-bottom: 10px;
  }

  /* 三列 */

  .anti-apply-edit-class .item-column3 {
    width: 33%;
    min-width: 350px;
    float: left;
    margin: 0;
    margin-bottom: 10px;
  }

  /* 折叠面板头部背景色和icon */

  .anti-apply-edit-class .icon_hat {
    padding: 10px 10px 10px 13px;
    vertical-align: middle;
  }

  .anti-apply-edit-class .headFont {
    font-size: 16px;
  }

  .anti-apply-edit-class .address-title {
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

  .anti-apply-edit-class .header-area {
    width: 100%;
    height: auto;
  }

  .anti-apply-edit-class .left-title {
    float: left;
    width: 130px;
    line-height: 30px;
    min-height: 30px;
    padding-right: 10px;
    text-align: right;
    font-size: 14px;
  }

  .anti-apply-edit-class .left-title2 {
    line-height: 20px;
  }

  .anti-apply-edit-class .item-content {
    float: left;
    width: calc(100% - 130px);
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
  }

  .anti-apply-edit-class li .textarea-class {
    height: auto;
    float: left;
    min-width: 400px;
    padding-bottom: 10px;
    width: calc(66% - 195px);
  }

  /* 必填 * */

  .anti-apply-edit-class .require-icon {
    color: #ff0000;
    display: inline-block;
    width: 0px;
    float: left;
    left: 38px;
    line-height: 35px;
    position: relative;
  }

  /* 提交按钮 */

  .anti-apply-edit-class .submit-class {
    margin-top: 50px;
    width: calc(66% - 500px);
    text-align: right;
  }

</style>
