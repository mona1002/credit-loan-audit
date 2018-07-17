<!-- 反欺诈申请 - - 详情编辑页面 -->
<template>
  <div date="AntiApplyAdd" class="AntiApplyAdd">
    <el-collapse v-model="activeName">
      <el-collapse-item name='1'>
        <template slot="title">
          <i class="collapse_title_icon"></i>
          <span class="collapse_title_text">基本信息</span>
        </template>
        <div class="checkedInf checkedInf_li_width_triplet clearFix">
          <ul>
            <li>
              <label class="label_width_190">
                <i class="required_Red">* </i>进件编号：</label>
              <span style="display:inline-block;width:160px">{{applySubNo}}</span>
              <el-button icon="el-icon-search" style="width: 30px;height: 30px;" @click="coverFn('shwoList')"></el-button>
            </li>
            <li>
              <label class="label_width_190">客户名称：</label>
              <span>{{applyCustName}}</span>
            </li>
            <li>
              <label class="label_width_190">证件类型：</label>
              <span>{{certTypeTxt}}</span>
            </li>
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
            <li class="text_area_li_5rows triplet_textarea_width" style="margin-top:5px;">
              <label class="label_width_190">
                <i class="required_Red">* </i>欺诈上报描述：</label>
              <span>
                <el-input v-model="applyDesc" style='width:calc( 50% + 170px);' type="textarea" :rows="5" resize=none :maxlength="500"></el-input>
              </span>
            </li>
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
    <!-- 弹窗 -->
    <!-- <el-dialog :visible.sync="coverShow" :modal="false" top="10vh" width='1130px'>
        <div class="detail-list">
          <div class="form-title" style="position:relative;">
            请选择一条信息
            <el-tag closable @close="coverShow=false;" style="position:absolute;"></el-tag>
          </div>
          <div>
            <div class="form-title">
              高级查询
            </div>
            <div>
              <li class="item-column3-list">
                <div class="left-title-list">
                  进件编号：
                </div>
                <div class="item-content-list">
                  <el-input v-model="applySubNos"></el-input>
                </div>
              </li>
              <li class="item-column3-list">
                <div class="left-title-list">
                  客户名称：
                </div>
                <div class="item-content-list">
                  <el-input v-model="custName_la"></el-input>
                </div>
              </li>
              <li class="item-column3-list">
                <div class="left-title-list">
                  证件号码：
                </div>
                <div class="item-content-list">
                  <el-input v-model="subCertCode"></el-input>
                </div>
              </li>
              <li class="item-column1">
              </li>
              <li class="item-column1 submit-class-list">
                <el-button type="primary" @click="request">查询</el-button>
                <el-button type="primary" @click="resetQuery">重置</el-button>
              </li>
            </div>
            <el-table :data="tableData.recordList" height="250" border style="width: 100%" highlight-current-row center @row-click="itemClick">
              <el-table-column type="index" label="序号" width="60">
              </el-table-column>
              <el-table-column prop="applySubno" label="进件编号" width="170">
              </el-table-column>
              <el-table-column prop="appDate" label="申请日期" width="170">
              </el-table-column>
              <el-table-column prop="custName" label="客户名称" width="120">
              </el-table-column>
              <el-table-column prop="certTypeTxt" label="证件类型" width="80">
              </el-table-column>
              <el-table-column prop="certCode" label="证件号码" width="170">
              </el-table-column>
              <el-table-column prop="operOrgName" label="进件机构名称" width="130">
              </el-table-column>
              <el-table-column prop="proName" label="产品名称" width="100">
              </el-table-column>
              <el-table-column prop="operName" label="进件客服" width="120" show-overflow-tooltip>
              </el-table-column>
            </el-table>
            <div class="block tool-bar">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 20, 30]"
                :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalRecord" v-show="tableData.totalRecord">
              </el-pagination>
            </div>
          </div>
          <div class="back-form-li" style="text-align:right;padding:10px;">
            <el-button type="primary" @click="btnClick('sure')">确定</el-button>
            <el-button plain @click="btnClick">取消</el-button>
          </div>
        </div>
      </el-dialog> -->
    <!-- =================================================== -->
    <el-dialog title="请选择一条信息" :visible.sync="coverShow"  width='1130px'>
      <div>
        <div class="taskWinput search-div">
          <el-row class="row row1" type="flex">
            <el-col :sm='7' class="search-item" :offset="0">
              <span class="keywordText_dialog">进件编号： </span>
              <el-input v-model="applySubNos"></el-input>
            </el-col>
            <el-col :sm='7' class="search-item">
              <span class="keywordText_dialog">客户名称：</span>
              <el-input v-model="custName_la"></el-input>
            </el-col>
            <el-col :sm='7' class="search-item">
              <span class="keywordText_dialog">证件号码：</span>
              <el-input v-model="subCertCode"></el-input>
            </el-col>
            <el-col :sm='4' class="search-item">
              <el-button class="btn query" type="primary" @click="request">查询</el-button>
              <el-button class="btn reset" @click="resetQuery">重置</el-button>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-table :data="tableData.recordList" height="250" border style="width: 100%" highlight-current-row center @row-click="itemClick">
            <el-table-column type="index" label="序号" width="60">
            </el-table-column>
            <el-table-column prop="applySubno" label="进件编号" width="170">
            </el-table-column>
            <el-table-column prop="appDate" label="申请日期" width="170">
            </el-table-column>
            <el-table-column prop="custName" label="客户名称" width="120">
            </el-table-column>
            <el-table-column prop="certTypeTxt" label="证件类型" width="80">
            </el-table-column>
            <el-table-column prop="certCode" label="证件号码" width="170">
            </el-table-column>
            <el-table-column prop="operOrgName" label="进件机构名称" width="130">
            </el-table-column>
            <el-table-column prop="proName" label="产品名称" width="100">
            </el-table-column>
            <el-table-column prop="operName" label="进件客服" width="120" show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div class="block tool-bar">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 20, 30]"
              :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalRecord" v-show="tableData.totalRecord">
            </el-pagination>
          </div>
        </div>
        <div class="back-form-li" style="text-align:right;padding:10px;">
          <el-button plain @click="btnClick">取消</el-button>
          <el-button type="primary" @click="btnClick('sure')">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: ['1', '2'],
        // isFull: true, // 全屏
        creditappTaskid: '', // 任务id
        userCode: '', // 用户编号
        orgCode: '', // 机构编号
        applyId: '', // 申请单ID
        // id: '', // 主管/专员 用 列表id
        applySubNo: '', // 进件编号
        applyCode: '', // 申请人code
        applyPersonName: '', // 申请人姓名
        appOrgCode: '', // 申请机构code
        appDate: '', // 申请日期
        //appOrgName: '', // 申请机构名称
        operOrgName: '', // 申请机构名称
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
        coverShow: false, // 弹窗
        tableData: [], // 详情列表数据

        processTemplateId: '',
        taskNodeName: '',
        taskStatus: '',
        userCode: '',
        // orgCode: '',
        pageNum: 1, // 页码
        pageSize: 5, // 每页条数
        applySubno: '',
        custName_la: '',
        certCode: '',
        rowObj: '', // 点击的列表数据
        subCertCode: '', // 弹窗的证件号码
        processInstanceId: '',
        busiState: '', //业务状态
        applySubNos: '', //弹框的案件编号
        flowRoleCodesList: [], //用来判断channel的值
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/AntiApplyAdd' && this.$route.params.newOne) {
          this.mountedInf();
          this.applySubNos = '';
          this.custName_la = '';
          this.subCertCode = '';
          this.applyDesc = '';
          this.mainReason = '';
          this.secondReason = '';
          this.applyDesc = '';
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
        this.flowRoleCodesList = userInfo.flowRoleCodesList;
        if (this.flowRoleCodesList) {
          for (var i = 0; i < this.flowRoleCodesList.length; i++) {
            if (this.flowRoleCodesList[i] == 'BL12' || this.flowRoleCodesList[i] == 'BL108' || this.flowRoleCodesList[i] ==
              'BL07') {
              this.channel = '07';
            } else {
              this.channel = '99';
            }
          }
        }

        // 先判断是 初审 终审  /  专员  主管
        // var judgeFlag = JSON.parse(localStorage.getItem('judge'));
        // this.antiFlag = judgeFlag.flag;

        // 初审 终审 取 applyId   
        // if (this.antiFlag == '01') {
        //   // taskInWaitting
        //   this.creditappTaskid = JSON.parse(localStorage.getItem('taskInWaitting')).taskId;
        //   this.taskNodeName = JSON.parse(localStorage.getItem('taskInWaitting')).taskNodeName;
        //   this.taskStatus = JSON.parse(localStorage.getItem('taskInWaitting')).taskStatus;
        //   this.processTemplateId = JSON.parse(localStorage.getItem('taskInWaitting')).processTemplateId;
        // }
        // if (this.antiFlag == '02') {
        //   // FtaskInWaitting
        //   this.creditappTaskid = JSON.parse(localStorage.getItem('FtaskInWaitting')).taskId;
        //   this.taskNodeName = JSON.parse(localStorage.getItem('FtaskInWaitting')).taskNodeName;
        //   this.taskStatus = JSON.parse(localStorage.getItem('FtaskInWaitting')).taskStatus;
        //   this.processTemplateId = JSON.parse(localStorage.getItem('FtaskInWaitting')).processTemplateId;
        // }
        // if (this.antiFlag == '03') {
        //   this.creditappTaskid = JSON.parse(localStorage.getItem('AntitaskInWaitting')).taskId;
        //   this.processTemplateId = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).processTemplateId;

        //   this.taskNodeName = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).taskNodeName;
        //   this.taskStatus = JSON.parse(localStorage.getItem('AntiWorkbenchPass')).taskStatus;
        // }
        // if (this.antiFlag == '04') {
        //   this.creditappTaskid = JSON.parse(localStorage.getItem('AntiManagertaskInWaitting')).taskId;
        //   this.processTemplateId = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).processTemplateId;

        //   this.taskNodeName = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).taskNodeName;
        //   this.taskStatus = JSON.parse(localStorage.getItem('AntiManagerWorkbenchPass')).taskStatus;
        // }

        // this.request();

        // this.queryList();

        // 获取到 id  反欺诈申请列表
        // this.id = this.$route.params.id;

        // 请求系统时间
        this.getSystemDate();

        // 请求主原因
        this.firstNodeReason();

        // 查询反欺诈信息
        // this.getFraudApplyInfo();
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
      // 查询 反欺诈信息  , 发起反欺诈 , 根据 applyId 查询
      // getFraudApplyInfo() {
      //   // 测试 id
      //   // this.id = 'ed353288-758d-4699-bec7-094bd6444556';

      //   this.post('/fraudApplyInfoController/getFraudApplyInfo', {
      //       applyId: this.id
      //     })
      //     .then(res => {
      //       if (res.statusCode == 200) {
      //         // 任务id
      //         // this.creditappTaskid = res.data.applyInfoPool.id;
      //         // 进件编号
      //         this.applySubno = res.data.applyInfoPool.applySubno;
      //         // 申请人code
      //         this.applyCode = res.data.applyInfoPool.applyCode;
      //         // 申请人姓名
      //         this.applyPersonName = res.data.applyInfoPool.applyPersonName;
      //         // 申请机构 code
      //         this.appOrgCode = res.data.applyInfoPool.appOrgCode;
      //         // 申请机构名称
      //         this.appOrgName = res.data.applyInfoPool.appOrgName;
      //         // 申请机构 id
      //         this.appOrgId = res.data.applyInfoPool.appOrgId;
      //         // 申请机构科室id
      //         this.appSuborgId = res.data.applyInfoPool.appSuborgId;
      //         // 申请机构科室code
      //         this.appSuborgCode = res.data.applyInfoPool.appSuborgCode;
      //         // 申请机构科室名称
      //         this.appSuborgName = res.data.applyInfoPool.appSuborgName;
      //         // 产品 id
      //         this.proId = res.data.applyInfoPool.proId;
      //         // 产品 code
      //         this.proCode = res.data.applyInfoPool.proCode;
      //         // 客户id
      //         this.applyCustId = res.data.applyInfoPool.applyCustId;
      //         // 客户姓名
      //         this.applyCustName = res.data.applyInfoPool.custName;
      //         // 客户编号
      //         this.applyCustNo = res.data.applyInfoPool.applyCustNo;
      //         // 渠道
      //         this.channel = res.data.applyInfoPool.channel;
      //         // 证件号码
      //         this.certCode = res.data.applyInfoPool.certCode;
      //         // 证件类型
      //         this.certTypeTxt = res.data.applyInfoPool.certTypeTxt;
      //         // 移动电话
      //         this.mobile = res.data.applyInfoPool.mobile;
      //         // 产品名称
      //         this.proName = res.data.applyInfoPool.proName;
      //       }
      //     })
      // },
      // // 查询 反欺诈信息  , 从列表过来 , 根据列表 id 查询
      // getFraudApplyInfoWithOpinionById() {
      //   this.post('/fraudApplyInfoController/getFraudApplyInfoWithOpinionById', {
      //     id: this.id
      //   }).then(res => {

      //   })
      // },
      submitForm() {
        // 判断必填
        if (!this.applySubNo) {
          this.$message({
            message: "提示：请选择进件!",
            type: 'warning'
          })
          return;
        }
        if (!this.mainId || !this.mainReason) {
          this.$message({
            message: "提示：请选择主原因！",
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
              //this.post('/fraudApplyInfoController/startAntiFraudApply', {
              this.post('/fraudApplyInfoController/startAntiFraudForFinishedApply', {
                  /*userCode: this.userCode, // 用户编号
                  orgCode: this.orgCode, // 机构编号
                  currentTemplateId: '',
                  fraudApplyInfo: {
                    creditappTaskid: this.creditappTaskid, // 任务id

                    applyId: this.applyId, // 申请单ID

                    applySubno: this.applySubNo, // 进件编号
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
                    processInstanceId: this.processInstanceId*/
                  fraudApplyInfo: {
                    applyCustId: this.applyCustId, // 客户id
                    applyCustName: this.applyCustName, // 客户姓名
                    applyCustNo: this.applyCustNo, // 客户编号
                    applyDesc: this.applyDesc, // 反欺诈申请描述applyId: this.applyId, // 申请单ID
                    applyPersonName: this.applyPersonName, // 申请人姓名
                    applySubno: this.applySubNo, // 进件编号
                    channel: this.channel, // 渠道
                    certCode: this.certCode, // 证件号码
                    mainreasonId: this.mainId, // 欺诈主原因id
                    mainreaName: this.mainReason, // 欺诈主原因名称
                    proId: this.proId, // 产品id
                    proCode: this.proCode, // 产品code
                    proName: this.proName, // 产品名称
                    subreaName: this.secondReason, // 欺诈子原因名称
                    subreasonId: this.secondId, // 欺诈子原因id
                    busiState: this.busiState,
                    applyId: this.applyId
                  }
                })
                .then(res => {
                  if (res.statusCode == '200') {
                    // 更加标志来 选择跳转
                    // 初审/终审 发起反欺诈 提交  -> 代办任务列表
                    // if (this.antiFlag == '01') {
                    //   this.$router.push('/taskInWaitting');
                    // } else if (this.antiFlag == '02') {
                    //   this.$router.push('/FtaskInWaitting');
                    // } else if (this.antiFlag == '03' || this.antiFlag == '04') {
                    this.$router.push('/AntiFraud');
                    this.$store.dispatch('delVisitedViews', {
                      name: '反欺诈申请-添加'
                    }).then((views) => {
                      const latestView = views.slice(-1)[0]
                      if (latestView) {
                        this.$router.push(latestView.StatefullPath);
                      } else {
                        this.$router.push('/')
                      }
                    })
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
                    instance.confirmButtonLoading = false;
                  }
                })
            } else {
              // done();
            }
            done();
          }
        }).then(action => {
          this.$message({
            type: 'success',
            message: '提交成功'
          });
          instance.confirmButtonLoading = false;
        });
      },
      // 返回  上级路由
      backRoute() {
        window.history.go(-1);
        this.$store.dispatch('delVisitedViews', {
          name: '反欺诈申请-添加'
        }).then((views) => {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.StatefullPath);
          } else {
            this.$router.push('/')
          }
        })
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
      coverFn(flag) {
        switch (flag) {
          case 'shwoList':
            this.coverShow = true;
            this.applySubNos = ''; // 进件编号
            this.custName_la = ''; // 客户名称
            this.subCertCode = ''; // 客户编号
            this.tableData = '';
            break;
        }
      },
      // 每页条数
      handleSizeChange(val) {
        this.pageSize = val;
        // this.queryDetailList();
        this.request();
      },
      // 页码
      handleCurrentChange(val) {
        this.pageNum = val;
        // this.queryDetailList();
        //this.request();
      },
      // 请求列表
      request() {
        // this.post('/workFlowTaskQuery/getTaskToDoList', {
        //   processTemplateId: 'creditApp',
        //   taskNodeName: this.taskNodeName,
        //   taskStatus: '01',
        //   userCode: this.userCode,
        //   orgCode: this.orgCode,
        //   pageNum: this.pageNum,
        //   pageSize: this.pageSize,
        //   applySubNo: this.applySubNo,
        //   custName_la: this.custName_la,
        //   certCode: this.applyCustNo,
        // }).then(res => {
        //   if (res.statusCode == 200) {
        //     this.detailData = res.data.taskDetailList;
        //   } else {
        //     this.directorTableData = [];
        //   }

        // })
        // 
        // // 请求列表
        // this.post('/applyInfoPool/queryByPage', {
        //   applySubno: this.applySubNo, // 进件编号
        //   applyId: '', // 申请单id
        //   certCode: this.subCertCode, // 证件号码
        //   custName: this.custName, // 客户名称
        //   busiStateList: ["04", "14", "21", "42"],
        //   pageNum: this.pageNum,
        //   pageSize: this.pageSize
        // }).then(res => {
        //   if (res.statusCode == 200) {
        //     this.tableData = res.data;
        //   }
        // })
        // 查询图标弹出层

        /*this.post('/workFlowTaskQuery/getTaskToDoList', {
          taskStatus: '01',
          userCode: this.userCode,
          orgCode: this.orgCode,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          }
        })*/
        if (!this.applySubNos && !this.custName_la && !this.subCertCode) {
          return
        } else {
          this.post('/applyInfoPool/queryListForFraud', {
            pageParam: {
              pageNum: this.pageNum,
              pageSize: this.pageSize
            },
            applySubNo: this.applySubNos,
            custName: this.custName_la,
            certCode: this.subCertCode
          }).then(res => {
            if (res.statusCode == 200) {
              this.tableData = res.data;
              for (var i = 0; i < res.data.recordList.length; i++) {
                var regs = /\d{4}-\d{1,2}-\d{1,2}/g;
                //this.appDate = res.data.recordList[i].appDate.replace(regs,'');
                this.tableData.recordList[i].appDate = regs.exec(res.data.recordList[i].appDate)[0];
              }
            }
          })
        }

      },
      // 重置查询
      resetQuery() {
        // 清空数据 重新查询
        // 查询条件 初始化
        this.applySubNos = ''; // 进件编号
        this.custName_la = ''; // 客户名称
        this.subCertCode = ''; // 客户编号
        this.tableData = '';
      },
      // 选中弹窗某行
      itemClick(row, event, column) {
        // 点击的列表数据
        this.rowObj = row;
      },
      // 点击 确定/取消
      btnClick(val) {
        // 确定
        if (val == 'sure') {
          if (this.rowObj.canStartAntiFraudFlag == '1') {
            this.applySubNo = this.rowObj.applySubno; // 进件编号
            this.applyCustName = this.rowObj.custName; // 客户名称
            this.certTypeTxt = this.rowObj.certTypeTxt; // 证件类型
            this.certType = this.rowObj.certType; // 证件类型
            this.certCode = this.rowObj.certCode; // 证件号码
            this.mobile = this.rowObj.mobile; // 移动电话
            this.applyId = this.rowObj.applyId;
            this.proId = this.rowObj.proId;
            this.proCode = this.rowObj.proCode;
            this.proName = this.rowObj.proName;
            this.busiState = this.rowObj.busiState;
            this.applyId = this.rowObj.applyId;
            // 新增字段
            this.processInstanceId = this.rowObj.processInstanceId;
          } else if (this.rowObj.canStartAntiFraudFlag == '0') {
            this.applySubNo = ''; // 进件编号
            this.$message({
              message: "提示：该件无法发起反欺诈!",
              type: 'warning'
            })
            return;
          }
        }
        this.coverShow = false;
      }

    }
  }

</script>