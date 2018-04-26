<!-- 反欺诈申请 - - 详情编辑页面 初审/终审 发起反欺诈-->
<template>
  <div date="AntiApplyInf" class="anti-apply-edit-class">
    <myHead class="top"></myHead>
    <div>
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
            {{mobile}}
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
              <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
              </el-option>
            </el-select>
          </div>
        </li>
        <li class="item-column3">
          <div class="left-title">
            子原因：
          </div>
          <el-select @change="secondselectChange" v-model="secondReason">
            <el-option v-for="item in secondReasons" :key="item.id" :label="item.reasonName" :value="item">
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
  import myHead from "../header.vue"
  export default {
    components: {
      myHead
    },
    data() {
      return {

        // isFull: true, // 全屏
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
        mainId: '', // 欺诈主原因id
        secondId: '', // 欺诈子原因id
        applyDesc: '', // 反欺诈申请描述
        mainReason: '', // 欺诈主原因名称
        secondReason: '', // 欺诈子原因名称
        appOrgId: '', // 申请机构id
        appSuborgId: '', // 申请机构科室id
        appSuborgCode: '', // 申请机构科室code
        appSuborgName: '', // 申请机构科室名称
        proId: '', // 产品id
        proCode: '', // 产品code
        applyCustId: '', // 客户id
        applyCustName: '', // 客户姓名
        applyCustNo: '', // 客户编号
        channel: '00', // 渠道
        certCode: '', // 证件号码
        proName: '', // 产品名称
        mobile: '', // 移动电话
        dealroperDate: '', // 反欺诈申请日期
        certTypeTxt: '', // 证件类型
        mainReasons: [],
        secondReasons: [],
        antiFlag: '', // 标志
        busiState: '', // 状态
        currentTemplateId: '', // 复议模版id
        taskName: '',
        routeId: '',
        routeFlag: '',
        routeBusiState: ''
      }
    },
    mounted() {
      // console.log(this.showFqz);
      // 经办人 登录用户名
      var userInfo = JSON.parse(localStorage.getItem('userInf'));
      this.userCode = userInfo.userCode;
      this.orgCode = userInfo.orgCode;
      // 先判断是 初审 终审  /  专员  主管
      var judgeFlag = JSON.parse(localStorage.getItem('judge'));
      this.antiFlag = judgeFlag.flag;

      // 初审 终审 取 applyId
      // if (this.antiFlag == '01' || this.antiFlag == '02') {
      //   // 先取到 id , 请求 反欺诈 页面信息
      //   // var taskInWaitting = JSON.parse(localStorage.getItem('taskInWaitting'));
      //   // this.id = taskInWaitting.applyId;
      //   this.id = this.$route.params.id;
      //   console.log(this.$route.params.id)
      //   // 查询反欺诈信息
      //   this.getFraudApplyInfo();
console.log(  this.antiFlag  )
      if (this.antiFlag == '01') {
        // taskInWaitting
        this.creditappTaskid = JSON.parse(localStorage.getItem('taskInWaitting')).taskId;
        this.taskName = JSON.parse(localStorage.getItem('taskInWaitting')).taskName;
      } else if (this.antiFlag == '02') {
        // FtaskInWaitting
        this.creditappTaskid = JSON.parse(localStorage.getItem('FtaskInWaitting')).taskId;
        this.taskName = JSON.parse(localStorage.getItem('FtaskInWaitting')).taskName;
      }
      // }
      // 专员/主管 不跳  反欺诈 编辑页面
      // else if (this.antiFlag == '03' || this.antiFlag == '04') { // 其他取 列表id
      //   console.log(' 主管/专员 ');
      //   this.id = this.$route.params.id;
      if (this.antiFlag == '03') {
        // AntitaskInWaitting
        this.creditappTaskid = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskId;
        this.taskName = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskName;
        console.log('creditappTaskid===', this.creditappTaskid)
      } else if (this.antiFlag == '04') {
        // AntiManagertaskInWaitting
        this.creditappTaskid = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).taskId;
        this.taskName = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).taskName;
      }

      // 05 复议专员  06 复议主管
      if (this.antiFlag == '05') {
        console.log('复议专员取值')
        
        this.creditappTaskid = JSON.parse(localStorage.getItem('RtaskInWaitting')).taskId;
        this.taskName = JSON.parse(localStorage.getItem('RtaskInWaitting')).taskName;
        this.currentTemplateId = 'reconsiderApp';
      } if ( this.antiFlag == '06') {
        console.log('复议经理取值')
        this.creditappTaskid = JSON.parse(localStorage.getItem('RManagertaskInWaitting')).taskId;
        this.taskName = JSON.parse(localStorage.getItem('RManagertaskInWaitting')).taskName;
        this.currentTemplateId = 'reconsiderApp';
      }

      //   this.getFraudApplyInfoWithOpinionById();
      // }
      // var stateParms = JSON.parse(localStorage.getItem('antiApplyFlag')).split(';');
      // for (var i = 0; i < stateParms.length; i++) {
      //   stateParms[i] = stateParms[i].split('=');
      // }
      // this.routeId = stateParms[0][1];
      // this.routeFlag = stateParms[1][1];
      // this.routeBusiState = stateParms[2][1];

      //  JSON.stringify($scope.addalerts);
      // 获取到 id
      this.id = this.$route.params.id || this.routeId;
      console.log(this.$route.params.id)
      /* 标志  
       start 发起反欺诈
       edit  编辑
       add   添加 
       */
      this.flag = this.$route.params.flag || this.routeFlag;
      // console.log(this.flag);
      // 拿到状态
      this.busiState = this.$route.params.busiState || this.routeBusiState;

      if (this.flag == 'start' || this.flag == 'fuyi') {
        this.getFraudApplyInfo();
      }
      //  else if (this.flag == 'edit' || this.flag == 'add') {
      //   this.getFraudApplyInfoWithOpinionById();
      // }

      // 请求系统时间
      this.getSystemDate();

      // 请求主原因
      this.firstNodeReason();




    },
    methods: {
      // 请求系统时间
      getSystemDate() {
        // 获取系统时间
        this.get('system/getSystemDate?'+Math.random()).then(res => {
          console.log('回退', res)
          // 请求系统时间
          this.dealroperDate = res.data;
          console.log('this.', this.dealroperDate);
        })
      },
      // 反欺诈申请 获取 主原因子原因
      firstNodeReason() {
        this.get('/credit/firstNodeReason?reasonType=' + '08,09'+'&'+Math.random()).then(res => {
          console.log(res);
          this.mainReasons = res.data;
        })
      },
      // 查询 反欺诈信息  , 发起反欺诈 , 根据 applyId 查询 , 编辑页面根据 row.id
      getFraudApplyInfo() {
        // 测试 id
        // this.id = 'ed353288-758d-4699-bec7-094bd6444556';
console.log( '入参id'+ this.id)
        this.post('/fraudApplyInfoController/getFraudApplyInfo', {
            applyId: this.id
            // applyId:'201506260173032182'
          })
          .then(res => {
            console.log(res.data.applyInfoPool);
            if (res.statusCode == 200) {
              // 任务id
              // this.creditappTaskid = res.data.applyInfoPool.id;
              // 进件编号
              this.applySubno = res.data.applyInfoPool.applySubno;
              // 申请人code
              this.applyCode = res.data.applyInfoPool.applyCode;
              // 申请人姓名
              this.applyPersonName = res.data.applyInfoPool.applyPersonName;
              // 申请机构 code
              this.appOrgCode = res.data.applyInfoPool.appOrgCode;
              // 申请机构名称
              this.appOrgName = res.data.applyInfoPool.appOrgName;
              // 申请机构 id
              this.appOrgId = res.data.applyInfoPool.appOrgId;
              // 申请机构科室id
              this.appSuborgId = res.data.applyInfoPool.appSuborgId;
              // 申请机构科室code
              this.appSuborgCode = res.data.applyInfoPool.appSuborgCode;
              // 申请机构科室名称
              this.appSuborgName = res.data.applyInfoPool.appSuborgName;
              // 产品 id
              this.proId = res.data.applyInfoPool.proId;
              // 产品 code
              this.proCode = res.data.applyInfoPool.proCode;
              // 客户id
              this.applyCustId = res.data.applyInfoPool.applyCustId;
              // 客户姓名
              this.applyCustName = res.data.applyInfoPool.custName;
              // 客户编号
              this.applyCustNo = res.data.applyInfoPool.applyCustNo;
              // 渠道
              // this.channel = res.data.applyInfoPool.channel;
              // 证件号码
              this.certCode = res.data.applyInfoPool.certCode;
              // 证件类型
              this.certTypeTxt = res.data.applyInfoPool.certTypeTxt;
              // 移动电话
              this.mobile = res.data.applyInfoPool.mobile;
              // 产品名称
              this.proName = res.data.applyInfoPool.proName;
            }
          })
      },
      // 查询 反欺诈信息  , 从列表过来 , 根据列表 id 查询
      // getFraudApplyInfoWithOpinionById() {
      //   this.post('/fraudApplyInfoController/getFraudApplyInfoWithOpinionById', {
      //     // id: this.id
      //     // id:'201506260173032182'
      //   }).then(res => {
      //     console.log(res);

      //   })
      // },
      submitForm() {
        console.log('提交反欺诈')
        var taskNodeName,nodeName,RoutePath,routeParams;
        if (!this.mainId || !this.mainReason) {
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
                    // applyId:'201506260173032182',
                    applySubno: this.applySubno, // 进件编号
                    // applyCode: this.applyCode, // 申请人code
                    // applyPersonName: this.applyPersonName, // 申请人姓名
                    // appOrgCode: this.appOrgCode, // 申请机构code
                    // appOrgName: this.appOrgName, // 申请机构名称
                    mainreasonId: this.mainId, // 欺诈主原因id
                    subreasonId: this.secondId, // 欺诈子原因id
                    applyDesc: this.applyDesc, // 反欺诈申请描述
                    mainreaName: this.mainReason, // 欺诈主原因名称
                    subreaName: this.secondReason, // 欺诈子原因名称
                    // appOrgId: this.appOrgId, // 申请机构id
                    // appSuborgId: this.appSuborgId, // 申请机构科室id
                    // appSuborgCode: this.appSuborgCode, // 申请机构科室code
                    // appSuborgName: this.appSuborgName, // 申请机构科室名称
                    proId: this.proId, // 产品id
                    proCode: this.proCode, // 产品code
                    applyCustId: this.applyCustId, // 客户id
                    applyCustName: this.applyCustName, // 客户姓名
                    applyCustNo: this.applyCustNo, // 客户编号
                    channel: this.channel, // 渠道
                    certCode: this.certCode, // 证件号码
                    proName: this.proName, // 产品名称
                    busiState: this.busiState, // 状态
                  },
                  currentTemplateId: this.currentTemplateId, // 流程模版id
                })
                .then(res => {
                  if (res.statusCode == '200') {
                    // 更加标志来 选择跳转
                    // 初审/终审 发起反欺诈 提交  -> 代办任务列表
                    this.resMsg = res.msg;
                    done();
                    if (this.antiFlag == '01') {
                      this.$router.push('/taskInWaitting');
                      // RoutePath = '/taskInWaitting';
                      // nodeName = '初审审批';
                    } else if (this.antiFlag == '02') {
                      this.$router.push('/FtaskInWaitting');
                      // if (this.taskName == "creditApp_finalTrial_one") {
                      //   nodeName = '终审一级审批';
                      // } else if (this.taskName == "creditApp_finalTrial_two") {
                      //   nodeName = '终审二级审批'
                      // } else if (this.taskName == "creditApp_finalTrial_three") {
                      //   nodeName = '信审经理审批';
                      // } else if (this.taskName == "creditApp_finalTrial_four") {
                      //   nodeName = '信审高级经理审批'
                      // } else if (this.taskName == "creditApp_finalTrial_five") {
                      //   nodeName = '信审总监审批审批'
                      // }
                      // RoutePath = '/FtaskInWaitting';
                    } else if (this.antiFlag == '03') {
                      this.$router.push('/AntiFraud');
                      // RoutePath = '/AntiFraud';
                      // nodeName = '反欺诈专员审批';
                    } else if (this.antiFlag == '04') {
                      // RoutePath = '/AntiFraud';
                      // nodeName = '反欺诈主管审批';
                      this.$router.push('/AntiFraud');
                    } else if (this.antiFlag == '05') {
                      // RoutePath = '/reconsiderList';
                      // nodeName = '复议专员审批';
                      this.$router.push('/reconsiderList');
                    } else if (this.antiFlag == '06') {
                      // RoutePath = '/reconsiderList';
                      // nodeName = '复议经理审批';
                      this.$router.push('/reconsiderList');
                    }
                    // routeParams = '?taskNodeName=' + this.taskName
                    // this.$router.push({
                    //   path: RoutePath + routeParams,
                    // });
                    // this.$store.dispatch('addVisitedViews', {
                    //   name: nodeName,
                    //   path: RoutePath,
                    //   flag: this.antiFlag,
                    //   params: routeParams,
                    //   StatefullPath: RoutePath + routeParams
                    // })
                  } else {
                    if (res.msg) {
                      this.$message({
                        type: 'warning',
                        message: res.msg
                      });
                    } else {
                      this.$message({
                        type: 'warning',
                        message: '您无此操作权限！'
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
        // 主原因改变 清空子原因
        this.secondReason = '';
        this.secondId = '';
        this.mainReason = val.reasonName;
        this.mainId = val.id;
        // 请求子原因
        this.findNodeFirstChildren();
      },
      // 获取子原因
      findNodeFirstChildren(val) {
        // 请求子原因
        this.get('/credit/findNodeFirstChildren?id=' + this.mainId+'&'+Math.random()).then(res => {
          console.log(res);
          if (res.statusCode == '200') {
            this.secondReasons = res.data;
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
    /*width: 100%;*/
    min-width: 1366px;
    float: left;
    /*max-width: 1366px;*/
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
    /*border: 1px solid;*/
    /*min-width: 300px;*/
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
    width: calc( 100% - 130px);
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
  }

  .anti-apply-edit-class li .textarea-class {
    height: auto;
    float: left;
    /*width: 795px;*/
    /*min-width: 300px;*/
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
    /*margin-left: calc( 66% - 140px);*/
    width: calc(66% - 500px);
    text-align: right;
  }





















  /*.anti-apply-edit-class .el-input{
  width: 100%;
}*/

</style>
