<!-- 反欺诈申请 - - 详情编辑页面 -->
<template>
  <div date="AntiApplyAdd" class="anti-apply-add-class">
    <myHead class="top"></myHead>
    <!-- 反欺诈申请信息=========================默认显示1-条？分页？ -->
    <div>
      <div class="address-title">
        <img src="../../../static/images/C4A8A526-401A-43D1-B835-5EFEBC7E2F23@1x.png" class="icon_hat">
        <span class="headFont">基本信息</span>
      </div>
      <div class="header-area" style="padding-left:20px;">
        <li class="item-column3">
          <span class="require-icon" style="left:40px;top:3px;">*</span>
          <div class="left-title">
            进件编号：
          </div>
          <div class="item-content">
            {{applySubNo}}
          </div>
          <el-button icon="el-icon-search" class="search-btn" @click="coverFn('shwoList')"></el-button>
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
          <span class="require-icon" style="left:0px;top:0px;">*</span>
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
            <span class="require-icon" style="left:15px;top:3px;">*</span>欺诈上报描述：</div>
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
      <!-- 弹窗 -->
      <el-dialog :visible.sync="coverShow" :modal="false" top="10vh" width='1130px'>
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
                  <el-input v-model="applySubNo"></el-input>
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
            <el-table :data="tableData.taskDetailList" height="250" border style="width: 100%" highlight-current-row center @row-click="itemClick">
              <el-table-column type="index" label="序号" align="center" width="60">
              </el-table-column>
              <el-table-column prop="applySubNo" label="进件编号" width="170">
              </el-table-column>
              <el-table-column prop="appDate" label="申请日期" width="170">
              </el-table-column>
              <el-table-column prop="custName" label="客户名称" width="120">
              </el-table-column>
              <el-table-column prop="certType" label="证件类型" width="80">
              </el-table-column>
              <el-table-column prop="certCode" label="证件号码" width="170">
              </el-table-column>
              <el-table-column prop="appOrgName" label="进件机构名称" width="130">
              </el-table-column>
              <el-table-column prop="proName" label="产品名称" width="100">
              </el-table-column>
              <el-table-column prop="operName" label="进件客服" width="120" show-overflow-tooltip>
              </el-table-column>
            </el-table>
            <div class="block tool-bar">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 20, 30]"
                :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.totalNum" v-show="tableData.totalNum">
              </el-pagination>
            </div>
          </div>
          <div class="back-form-li" style="text-align:right;padding:10px;">
            <el-button type="primary" @click="btnClick('sure')">确定</el-button>
            <el-button plain @click="btnClick">取消</el-button>
          </div>
        </div>
      </el-dialog>
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
        // id: '', // 主管/专员 用 列表id
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
        coverShow: false, // 弹窗
        tableData: [], // 详情列表数据

        processTemplateId: '',
        taskNodeName: '',
        taskStatus: '',
        userCode: '',
        // orgCode: '',
        pageNum: 1, // 页码
        pageSize: 5, // 每页条数
        applySubNo: '',
        custName_la: '',
        certCode: '',
        rowObj: '', // 点击的列表数据
        subCertCode: '', // 弹窗的证件号码
        processInstanceId: ''
      }
    },
    mounted() {
      console.log(this.showFqz);
      // 经办人 登录用户名
      var userInfo = JSON.parse(localStorage.getItem('userInf'));
      this.userCode = userInfo.userCode;
      this.orgCode = userInfo.orgCode;
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
    methods: {
      // 请求系统时间
      getSystemDate() {
        // 获取系统时间
        this.get('system/getSystemDate').then(res => {
          console.log('回退', res)
          // 请求系统时间
          this.dealroperDate = res.data;
          console.log('this.', this.dealroperDate);
        })
      },
      // 反欺诈申请 获取 主原因子原因
      firstNodeReason() {
        this.get('/credit/firstNodeReason?reasonType=' + '08,09').then(res => {
          console.log(res);
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
      //       console.log(res.data.applyInfoPool);
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
      //     console.log(res);

      //   })
      // },
      submitForm() {
        console.log('提交反欺诈')
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
              this.post('/fraudApplyInfoController/startAntiFraudApply', {
                  userCode: this.userCode, // 用户编号
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
                    processInstanceId: this.processInstanceId
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
                    // -----------------------待判断flag并更改----待检查测试-------------
                    this.$store.dispatch('addVisitedViews', {
                      name: '反欺诈申请',
                      path: '/AntiFraud',
                      flag: '',
                      params: '',
                      StatefullPath: '/AntiFraud'
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
        this.get('/credit/findNodeFirstChildren?id=' + this.mainId).then(res => {
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
      },
      coverFn(flag) {
        switch (flag) {
          case 'shwoList':
            this.coverShow = true;
            // this.showFlag = 'shwoList';
            this.request();
            break;
        }
      },
      // 每页条数
      handleSizeChange(val) {
        console.log("每页 ${val}条", val);
        this.pageSize = val;
        // this.queryDetailList();
        this.request();
      },
      // 页码
      handleCurrentChange(val) {
        console.log("当前页: ${val}", val);
        this.pageNum = val;
        // this.queryDetailList();
        this.request();
      },
      // 请求列表
      request() {
        console.log('详情列表 选择数据')
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

        this.post('/workFlowTaskQuery/getTaskToDoList', {
          taskStatus: '01',
          userCode: this.userCode,
          orgCode: this.orgCode,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          }
        })
      },
      // 重置查询
      resetQuery() {
        // 清空数据 重新查询
        // 查询条件 初始化
        this.applySubNo = ''; // 进件编号
        this.custName_la = ''; // 客户名称
        this.subCertCode = ''; // 客户编号
        this.request();
      },
      // 选中弹窗某行
      itemClick(row, event, column) {
        console.log('点击了弹窗列表')
        // 点击的列表数据
        this.rowObj = row;
      },
      // 点击 确定/取消
      btnClick(val) {
        // 确定
        if (val == 'sure') {
          this.applySubNo = this.rowObj.applySubNo; // 进件编号
          this.applyCustName = this.rowObj.custName; // 客户名称
          this.certTypeTxt = this.rowObj.certTypeTxt; // 证件类型
          this.certType = this.rowObj.certType; // 证件类型
          this.certCode = this.rowObj.certCode; // 证件号码
          this.mobile = this.rowObj.mobile; // 移动电话
          this.applyId = this.rowObj.applyId;
          this.proId = this.rowObj.proId;
          this.proCode = this.rowObj.proCode;
          this.proName = this.rowObj.proName;
          this.channel = this.rowObj.channel;
          // this.applyCustNo = this.rowObj.custNo;
          //??????????????
          // this.applyCustId = this.rowObj.custNo;// 客户id
          // 新增字段
          this.processInstanceId = this.rowObj.processInstanceId;
        }
        this.coverShow = false;
      }

    }
  }

</script>
<style>
  .anti-apply-add-class {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .anti-apply-add-class .el-table th .cell {
    font-weight: 800;
  }


























  /* 一列 */

  .anti-apply-add-class .item-column1 {
    /*width: 100%;*/
    min-width: 1366px;
    float: left;
    /*max-width: 1366px;*/
  }




























  /* 两列 */

  .anti-apply-add-class .item-column2 {
    width: 50%;
    min-width: 450px;
    float: left;
    margin: 0;
    min-height: 50px;
    margin-bottom: 10px;
  }




























  /* 三列 */

  .anti-apply-add-class .item-column3 {
    width: 33%;
    min-width: 350px;
    float: left;
    margin: 0;
    margin-bottom: 10px;
    /*border: 1px solid;*/
    /*min-width: 300px;*/
  }






  /* 弹窗 3列*/

  .anti-apply-add-class .item-column3-list {
    width: 33%;
    /*min-width: 350px;*/
    float: left;
    margin: 0;
    margin-bottom: 10px;
  }






  /* 弹窗 */

  .anti-apply-add-class .left-title-list {
    float: left;
    width: 90px;
    line-height: 30px;
    min-height: 30px;
    padding-right: 10px;
    text-align: right;
    font-size: 13px;
  }






  /* 弹窗 */

  .anti-apply-add-class .item-content-list {
    float: left;
    width: calc( 100% - 90px);
    height: 28px;
    line-height: 28px;
    text-align: left;
  }

  .anti-apply-add-class .item-content-list .el-input {
    position: relative;
    font-size: 13px;
    display: inline-block;
    width: 100%;
  }

  .anti-apply-add-class .item-content-list .el-input__inner {
    height: 30px;
    line-height: 30px;
  }























  /* 折叠面板头部背景色和icon */

  .anti-apply-add-class .icon_hat {
    padding: 10px 10px 10px 13px;
    vertical-align: middle;
  }

  .anti-apply-add-class .headFont {
    font-size: 16px;
  }


  .anti-apply-add-class .address-title {
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


  .anti-apply-add-class .header-area {
    width: 100%;
    height: auto;
  }

  .anti-apply-add-class .left-title {
    float: left;
    width: 130px;
    line-height: 30px;
    min-height: 30px;
    padding-right: 10px;
    text-align: right;
    font-size: 14px;
  }

  .anti-apply-add-class .left-title2 {
    line-height: 20px;
  }

  .anti-apply-add-class .item-content {
    float: left;
    width: calc( 100% - 130px);
    height: 30px;
    line-height: 30px;
    text-align: left;
  }

  .anti-apply-add-class li .textarea-class {
    height: auto;
    float: left;
    /*width: 795px;*/
    /*min-width: 300px;*/
    min-width: 400px;
    padding-bottom: 10px;
    width: calc(66% - 195px);
  }




























  /* 必填 * */

  .anti-apply-add-class .require-icon {
    color: #ff0000;
    display: inline-block;
    width: 0px;
    float: left;
    left: 38px;
    line-height: 30px;
    position: relative;
  }




























  /* 提交按钮 */

  .anti-apply-add-class .submit-class {
    margin-top: 50px;
    /*margin-left: calc( 66% - 140px);*/
    width: calc(66% - 500px);
    text-align: right;
  }














  /* 放大 按钮  */

  .anti-apply-add-class .el-icon-check-fangda {
    background: url(../../../static/images/fangda.png);
    width: 30px;
    height: 30px;
    background-size: 30px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
    display: inline-block;
  }











  /* 搜索按钮  */

  .anti-apply-add-class .search-btn {
    width: 30px;
    height: 30px;
    padding: 0;
    float: left;
    position: absolute;
    left: 300px;
    border: none;
  }



  .anti-apply-add-class .el-dialog {
    width: 700px;
    /* margin-top: 15vh !important; */
  }

  .anti-apply-add-class .el-dialog__header {
    display: none;
  }

  .anti-apply-add-class .el-dialog__body {
    padding: 0;
  }








  /* 流程轨迹 */

  .anti-apply-add-class .detail-list {
    min-width: 760px;
    width: auto;
    height: 400px;
    margin: 0 auto;
    /*margin-top: 250px;*/
    overflow: hidden;

    background: #fff;
    border-radius: 5px;
    height: auto;
    /*padding: 10px;*/
  }










  /* form-title */

  .anti-apply-add-class .form-title {
    width: 100%;
    height: 40px;
    font-size: 18px;
    /*font-weight: bold;*/
    /*background: #ededed;*/
    background: #eef0f9;
    line-height: 40px;
    padding-left: 10px;
    display: block;
    margin-bottom: 10px;
    overflow: hidden;
    font-size: 16px;
    text-align: left;
  }










  /* 弹窗页面 关闭按钮*/

  .anti-apply-add-class .el-tag {
    width: 0;
    height: 0;
    color: none;
    border: none;
    position: absolute;
    right: 20px;
    top: 0;
  }

  .anti-apply-add-class .el-tag .el-icon-close {
    right: 0px;
    top: 5px;
  }




  /* 弹窗 按钮 */

  .anti-apply-add-class .submit-class-list {
    width: 100%;
    float: right;
    text-align: right;
    margin: 0 5px 5px 0;
  }






  /* 分页 */

  .anti-apply-add-class .tool-bar {
    width: 100%;
    text-align: center;
    padding: 10px 0 0 10px;
  }



  /* 隐藏分页 */

  .anti-apply-add-class .el-pagination__jump {
    display: none;
  }

</style>
