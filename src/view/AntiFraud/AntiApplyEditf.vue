<!-- 反欺诈申请 - - 详情编辑页面 初审/终审 发起反欺诈-->
<template>
  <div date="AntiApplyInf">
    <el-collapse v-model="activeName">
      <el-collapse-item name='1'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <div class=" CreditForm_div_border clearFix">
              <li>
                <label class="label_width_190">进件编号：</label>
                <span>{{applySubno}}</span>
              </li>
              <li>
                <label class="label_width_190">客户名称：</label>
                <span>{{applyCustName}}</span>
              </li>
              <li>
                <label class="label_width_190">证件类型：</label>
                <span>{{certTypeTxt}}</span>
              </li>
            </div>
            <li>
              <label class="label_width_190">证件号码：</label>
              <span>{{certCode}}</span>
            </li>
            <li>
              <label class="label_width_190">移动电话：</label>
              <span>{{mobile}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item name='2'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">反欺诈申请信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <!-- <div class=" CreditForm_div_border clearFix"> -->
              <li class="inputInf">
                <label class="label_width_190">
                  <i class="required_Red">* </i>反欺诈申请类型主原因：</label>
                <span>
                  <el-select @change="mainselectChange" v-model="mainReason">
                    <el-option v-for="item in mainReasons" :key="item.id" :label="item.reasonName" :value="item">
                    </el-option>
                  </el-select>
                </span>
              </li>
              <li class="inputInf">
                <label class="label_width_190">子原因：</label>
                <span>
                  <el-select @change="secondselectChange" v-model="secondReason">
                    <el-option v-for="item in secondReasons" :key="item.id" :label="item.reasonName" :value="item">
                    </el-option>
                  </el-select>
                </span>
              </li>
            <!-- </div> -->
            <!-- <div class=" CreditForm_div_border clearFix"> -->
              <li class="text_area_li_5rows triplet_textarea_width" style="margin-top:5px;">
                <label class="label_width_190">
                  <i class="required_Red">* </i>欺诈上报描述：</label>
                <span>
                  <el-input v-model="applyDesc" style='width:calc( 50% + 170px);' type="textarea" :rows="5" resize=none
                    :maxlength="500"></el-input>
                </span>
              </li>
            <!-- </div> -->
            <li class='clearFloat'>
              <label class="label_width_190">反欺诈申请人：</label>
              <span>{{userCode}}</span>
            </li>
            <li>
              <label class="label_width_190">反欺诈申请日期：</label>
              <span> {{dealroperDate | dateFilter}}</span>
            </li>
            <li>
              <label class="label_width_190">反欺诈申请机构：</label>
              <span> {{orgCode}}</span>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="submitPage_button">
      <el-button plain @click="backRoute()">取消</el-button>
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: ['1', '2'],
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
        channel: '', // 渠道
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
        AntiApplyParams: ''
      }
    },
    mounted() {
      this.mountedInf();
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/AntiApplyEditf') {
          this.mountedInf();
          //编辑部分清空
          this.mainReason = '';
          this.secondReason = '';
          this.applyDesc = '';
        }
      }
    },
    methods: {
      mountedInf() {
        // 经办人 登录用户名
        var userInfo = JSON.parse(localStorage.getItem('userInf'));
        this.userCode = userInfo.userCode;
        this.orgCode = userInfo.orgCode;
        // 先判断是 初审 终审  /  专员  主管
        var judgeFlag = JSON.parse(localStorage.getItem('judge'));
        this.antiFlag = judgeFlag.flag;
        this.AntiApplyParams = JSON.parse(localStorage.getItem('AntiApplyParams'));
        // 获取到 id
        this.id = this.AntiApplyParams.id;
        this.flag = this.AntiApplyParams.flag;
        this.channel = this.AntiApplyParams.channel;
        this.busiState = this.AntiApplyParams.busiState;
        if (this.flag == 'start' || this.flag == 'fuyi' || this.flag == 'zhijian') {
          this.getFraudApplyInfo();
        }
        if (this.antiFlag == '01') {
          this.creditappTaskid = JSON.parse(localStorage.getItem('taskInWaitting')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('taskInWaitting')).taskName;
        } else if (this.antiFlag == '02') {
          this.creditappTaskid = JSON.parse(localStorage.getItem('FtaskInWaitting')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('FtaskInWaitting')).taskName;
        }
        if (this.antiFlag == '03' || this.antiFlag == '04') {
          this.creditappTaskid = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskName;
        }
        // 05 复议专员  06 复议主管
        if (this.antiFlag == '05' || this.antiFlag == '06') {
          this.creditappTaskid = JSON.parse(localStorage.getItem('RtaskInWaitting')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('RtaskInWaitting')).taskName;
          this.currentTemplateId = 'reconsiderApp';
        }
        // 质检各角色
        if (this.antiFlag == '07') { // 专员
          this.creditappTaskid = JSON.parse(localStorage.getItem('QTTaskWait')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('QTTaskWait')).taskName;
          this.currentTemplateId = 'checkApp';
        }
        if (this.antiFlag == '08') { // 主管
          this.creditappTaskid = JSON.parse(localStorage.getItem('QTManagerTW')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('QTManagerTW')).taskName;
          this.currentTemplateId = 'checkApp';
        }
        if (this.antiFlag == '10') { // 初终审主管
          this.creditappTaskid = JSON.parse(localStorage.getItem('QTTrialManagerTW')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('QTTrialManagerTW')).taskName;
          this.currentTemplateId = 'checkApp';
        }
        if (this.antiFlag == '11') { // 质检主管复议（首次）
          this.creditappTaskid = JSON.parse(localStorage.getItem('QTReManagerTW')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('QTReManagerTW')).taskName;
          this.currentTemplateId = 'checkApp';
        }
        if (this.antiFlag == '12') { // 区域
          this.creditappTaskid = JSON.parse(localStorage.getItem('QTAreaTW')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('QTAreaTW')).taskName;
          this.currentTemplateId = 'checkApp';
        }
        if (this.antiFlag == '13') { // 合规
          this.creditappTaskid = JSON.parse(localStorage.getItem('QTComplianceTW')).taskId;
          this.taskName = JSON.parse(localStorage.getItem('QTComplianceTW')).taskName;
          this.currentTemplateId = 'checkApp';
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
        })
      },
      // 查询 反欺诈信息  , 发起反欺诈 , 根据 applyId 查询 , 编辑页面根据 row.id
      getFraudApplyInfo() {
        // 测试 id
        this.post('/fraudApplyInfoController/getFraudApplyInfo', {
            applyId: this.id
          })
          .then(res => {
            if (res.statusCode == 200) {
              let resp = res.data.applyInfoPool;
              let respFra = res.data.fraudApplyInfo
              this.applyDesc = respFra && respFra.applyDesc ? respFra.applyDesc : '';
              // 进件编号
              this.applySubno = resp.applySubno;
              // 申请人code
              this.applyCode = resp.applyCode;
              // 申请人姓名
              this.applyPersonName = resp.applyPersonName;
              // 申请机构 code
              this.appOrgCode = resp.appOrgCode;
              // 申请机构名称
              this.appOrgName = resp.appOrgName;
              // 申请机构 id
              this.appOrgId = resp.appOrgId;
              // 申请机构科室id
              this.appSuborgId = resp.appSuborgId;
              // 申请机构科室code
              this.appSuborgCode = resp.appSuborgCode;
              // 申请机构科室名称
              this.appSuborgName = resp.appSuborgName;
              // 产品 id
              this.proId = resp.proId;
              // 产品 code
              this.proCode = resp.proCode;
              // 客户id
              this.applyCustId = resp.applyCustId;
              // 客户姓名
              this.applyCustName = resp.custName;
              // 客户编号
              this.applyCustNo = resp.applyCustNo;
              // 证件号码
              this.certCode = resp.certCode;
              // 证件类型
              this.certTypeTxt = resp.certTypeTxt;
              // 移动电话
              this.mobile = resp.mobile;
              // 产品名称
              this.proName = resp.proName;
            }
          })
      },
      submitForm() {
        var taskNodeName, nodeName, RoutePath, routeParams;
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
        this.$confirm('确定操作？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          showCancelButton: true
        }).then(() => {
          this.post('/fraudApplyInfoController/startAntiFraudApply', {
              userCode: this.userCode, // 用户编号
              orgCode: this.orgCode, // 机构编号
              fraudApplyInfo: {
                creditappTaskid: this.creditappTaskid, // 任务id
                applyId: this.id, // 申请单ID
                applySubno: this.applySubno, // 进件编号
                mainreasonId: this.mainId, // 欺诈主原因id
                subreasonId: this.secondId, // 欺诈子原因id
                applyDesc: this.applyDesc, // 反欺诈申请描述
                mainreaName: this.mainReason, // 欺诈主原因名称
                subreaName: this.secondReason, // 欺诈子原因名称
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
                this.$message({
                  type: 'success',
                  message: '提交成功'
                });
                if (this.antiFlag == '01') {
                  this.$router.push('/taskInWaitting');
                  this.del('初审详情');
                } else if (this.antiFlag == '02') {
                  this.$router.push('/FtaskInWaitting');
                  this.del('终审详情');
                } else if (this.antiFlag == '03') {
                  this.$router.push('/AntiFraud');
                  this.del('反欺诈详情');
                } else if (this.antiFlag == '04') {
                  this.$router.push('/AntiFraud');
                  this.del('反欺诈详情');
                } else if (this.antiFlag == '05') {
                  this.$router.push('/reconsiderList');
                  this.del('复议详情');
                } else if (this.antiFlag == '06') {
                  this.$router.push('/reconsiderList');
                  this.del('复议详情');
                } else if (this.antiFlag == '07' || this.antiFlag == '08' || this.antiFlag == '10' || this.antiFlag ==
                  '11' || this.antiFlag == '12' || this.antiFlag == '13') {
                  this.del('质检详情');
                }
                this.del('反欺诈申请-编辑');
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
              }
            })
        }).catch(() => {});
      },
      // 返回  上级路由
      backRoute() {
        window.history.go(-1);
        this.del('反欺诈申请-编辑');
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
        this.get('/credit/findNodeFirstChildren?id=' + this.mainId + '&' + Math.random()).then(res => {
          if (res.statusCode == '200') {
            this.secondReasons = res.data;
          }
        })
      },
      // 子原因改变
      secondselectChange(val) {
        this.secondReason = val.reasonName;
        this.secondId = val.id
      },
      del(delname) {
        this.$store.dispatch('delVisitedViews', {
          name: delname
        }).then((views) => {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.StatefullPath);
          } else {
            this.$router.push('/')
          }
        })
      }
    }
  }

</script>
