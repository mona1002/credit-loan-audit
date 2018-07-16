<template>
  <div class="workbench">
    <div class="main">
      <!-- 左边 -->
      <div class="main_left">
        <h2 style="font-weight:bold;">
          <i class="el-icon-edit"> </i>常用 </h2>
      </div>
      <div class="main_right">
        <!-- 中间 -->
        <div class="main_right_task">
          <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
              <template slot="title">
                <i class="el-icon-menu"></i> 待办任务(
                <b>{{this.taskCount}}</b> )
                <span class="moreC" @click.stop="refresh">
                  <img src="../../../static/images/shuaxin.png" class="moreCIcon trans" ref="worktask">
                </span>
              </template>
              <div class="waitting">
                <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
                  <el-table-column property="processTemplateTxt" label="任务名称" >
                  </el-table-column>
                  <el-table-column property="taskNodeNameTxt" label="节点名称" >
                  </el-table-column>
                  <el-table-column property="count" label="任务数目" >
                  </el-table-column>
                </el-table>
                <!-- 表格结束 -->
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!-- 右边 -->
        <div class="main_right_work">
          <!-- 工作通知 -->
          <div class="workbench_right_top">
            <el-collapse v-model="activeNames1">
              <el-collapse-item name="1">
                <template slot="title">
                  <i class="el-icon-menu"></i> 工作通知
                  <span @click.stop="more" class="moreC"> 更多 </span>
                  <span class="moreC">
                    <img src="../../../static/images/shuaxin.png" class="moreCIcon">
                  </span>
                </template>
                <div>
                </div>
                <div> </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <!-- 公司动态 -->
          <div class="workbench_right_bottom">
            <el-collapse v-model="activeNames2">
              <el-collapse-item name="1">
                <template slot="title" class="border_top_bottom">
                  <i class="el-icon-menu"></i> 公司动态
                  <span @click.stop="more" class="moreC"> 更多 </span>
                  <span class="moreC">
                    <img src="../../../static/images/shuaxin.png" class="moreCIcon">
                  </span>
                </template>
                <div> </div>
                <div> </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import UserURL from "../../util/constantUser";
  export default {
    data() {
      return {
        judge: {
          flag: ''
        },
        userInf: '',
        TaskCount: 0,
        activeNames: ['1'],
        activeNames1: ['1'],
        activeNames2: ['1'],
        taskStatus: '', //任务状态
        loginPass: [],
        userCode: '', //用户编码
        orgCode: '', //机构编码
        pageNum: '', //页数（第几页）
        pageSize: '', //页面显示行数
        processTemplateId: '', // 流程模板Id
        taskNodeName: '', // 任务节点名称
        tableData: [],
        LSworkbench: '',
        currentRow: null,
        workbenchPass: {
          processTemplateId: '',
          taskStatus: "01",
          taskNodeName: '',
        },
        rot: 0,
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.path === '/') {
          this.mountedInf();
        }
      }
    },
    methods: {
      mountedInf() {
        // 统一登录平台  
        // this.get(UserURL + 'remote/user/getUserInfo?' + Math.random()).then(response => {
        //   this.userInf = {
        //     userCode: response.data.userCode,
        //     orgCode: response.data.orgCode,
        //     orgId: response.data.orgId,
        //     userName: response.data.userName,
        //     roleCodesList: response.data.roleCodesList, // 初审拒绝按钮
        //     flowRoleCodesList: response.data.flowRoleCodesList
        //   }
        //   localStorage.setItem("userInf", JSON.stringify(this.userInf));
        // });
        this.post("/workFlowTaskQuery/getTaskProfile", {
          taskStatus: "01",
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      more() {
        this.$store.commit('workB', {
          processTemplateId: "56789",
          taskNodeName: "67uj"
        })
      },
      refresh() {
        this.rot += 360;
        this.$refs.worktask.style.transform = "rotate(" + this.rot + "deg)";
        // this.$refs.worktask.style = " -ms-transform: rotate("+this.rot+"deg)"; IE9
        this.post("/workFlowTaskQuery/getTaskProfile", {
          taskStatus: "01",
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      handleCurrentChange(val) {
        this.currentRow = val;
        val.processTemplateId ? this.workbenchPass.processTemplateId = val.processTemplateId : '';
        this.workbenchPass.taskNodeName = val.taskNodeName;
        // 列表 存储  taskNodeName
        localStorage.setItem('taskNodeName', val.taskNodeName);
        var nodeName, RoutePath, taskNodeName, routeParams, pth, nodeFlag;
        nodeName = RoutePath = routeParams = '';
        if (val.taskNodeName == "creditApp_firstTrial") { // 初审
          this.judge.flag = "01";
          RoutePath = '/taskInWaitting';
          this.LSworkbench = "workbenchPass";
        } else if (val.taskNodeName == "creditApp_finalTrial_one" || val.taskNodeName == "creditApp_finalTrial_two" ||
          val.taskNodeName == "creditApp_finalTrial_three" || val.taskNodeName == "creditApp_finalTrial_four" || val.taskNodeName ==
          "creditApp_finalTrial_five") { // 终审
          this.judge.flag = "02";
          RoutePath = '/FtaskInWaitting';
          this.LSworkbench = "FinalWorkbenchPass";
        } else if (val.taskNodeName == "antiFraudApp_commissioner") { //反欺诈专员 
          this.judge.flag = "03";
          RoutePath = '/AntiFraud34';
          this.LSworkbench = "AntiWorkbenchPass";
        } else if (val.taskNodeName == "antiFraudApp_manager") { // 反欺诈主管 
          this.judge.flag = "04";
          RoutePath = '/AntiFraud34';
          this.LSworkbench = "AntiManagerWorkbenchPass";
        } else if (val.taskNodeName == "reconsiderApp_commissioner") { // 复议专员 
          this.judge.flag = "05";
          RoutePath = '/reconsiderList';
          this.LSworkbench = "ReWorkbenchPass";
        } else if (val.taskNodeName == "reconsiderApp_manager") { // 复议经理
          this.judge.flag = "06";
          RoutePath = '/reconsiderList'
          this.LSworkbench = "ReManagerWorkbenchPass";
        }
        // -----------------------------质检-------------------------------
        else if (val.taskNodeName == "checkApp_apply") { //质检开始- 质检专员列表 
          this.judge.flag = "07";
          RoutePath = '/commissioner'
          this.LSworkbench = "QTWorkbenchPass";
        } else if (val.taskNodeName == "checkApp_check_manager") { // 质检主管复核--质检主管列表 
          this.judge.flag = "08";
          RoutePath = '/manager'
          this.LSworkbench = "QTManagerWorkbenchPass";
        } else if (val.taskNodeName == "checkApp_trial_self") { //初终审本人复查- 初终审本人任务列表 
          this.judge.flag = "09";
          RoutePath = '/SelfTaskList'
          this.LSworkbench = "QTTrialSelftWorkbenchPass";
        } else if (val.taskNodeName == "checkApp_trial_manager") { // 初终审主管复核异议--初终审主管任务列表 
          this.judge.flag = "10";
          RoutePath = '/ManagerTaskList'
          this.LSworkbench = "QTTrialManagerWorkbenchPass";
        } else if (val.taskNodeName == "checkApp_check_recon_manager") { // 质检主管复核异议--复议任务列表（首次） 
          this.judge.flag = "11";
          RoutePath = '/ReManagerTaskList'
          this.LSworkbench = "QTReWorkbenchPass";
        } else if (val.taskNodeName == "checkApp_regional_manager") { // 区域经理复核--区域经理任务列表 
          this.judge.flag = "12";
          RoutePath = '/ACManagerTaskList'
          this.LSworkbench = "QTAreaWorkbenchPass";
        } else if (val.taskNodeName == "checkApp_compliance_manager") { // 合规经理复核--合规经理任务列表 
          this.judge.flag = "13";
          RoutePath = '/ACManagerTaskList'
          this.LSworkbench = "QTComplianceWorkbenchPass";
        }
        routeParams = '?taskNodeName=' + val.taskNodeName + "&flag=" + this.judge.flag;
        localStorage.setItem(this.LSworkbench, JSON.stringify(this.workbenchPass)); //工作台部分信息，带入workbenchPass
        localStorage.setItem("judge", JSON.stringify(this.judge));
        this.$router.push({
          path: RoutePath + routeParams,
        });
      },
    },
    //        beforeRouteLeave(to, from, next) {  
    //     from.meta.keepAlive = ''; 
    //       // this.$route.meta.keepAlive='' 
    //     next();  
    // }  ,
    computed: {
      taskCount() {
        this.TaskCount = null;
        if (this.tableData.length == 0) {
          return this.TaskCount = 0;
        } else {
          for (var i = 0; i < this.tableData.length; i++) {
            this.TaskCount += this.tableData[i].count;
          }
          return this.TaskCount;
        }
      }
    },
    mounted() {
      // 统一登录平台  
      this.get(UserURL + 'remote/user/getUserInfo?' + Math.random()).then(response => {
        this.userInf = {
          userCode: response.data.userCode,
          orgCode: response.data.orgCode,
          orgId: response.data.orgId,
          userName: response.data.userName,
          roleCodesList: response.data.roleCodesList, // 初审拒绝按钮
          flowRoleCodesList: response.data.flowRoleCodesList
        }
        localStorage.setItem("userInf", JSON.stringify(this.userInf));
        console.log(response.data.orgLevel)
        localStorage.setItem("userc", JSON.stringify(response.data.orgLevel));
        localStorage.setItem("userctcode", JSON.stringify(response.data.subOrgCode));
        console.log(JSON.parse(localStorage.getItem('userc')))
        console.log(JSON.parse(localStorage.getItem('userctcode')))
        this.post("/workFlowTaskQuery/getTaskProfile", {
          taskStatus: "01",
        }).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      });
    },
  }

</script>
<style scoped>
  .trans {
    transition: All 1s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
  }

  .border_top_bottom {
    border-top: 1px solid gray;
  }

  /* 大框  */

  .workbench {
    background: #ededed;
    width: 100%;
    height: calc( 100% -90px);
  }

  .workbench .top {
    height: 70px;
  }

  .workbench .main {
    /* height: calc( 100% - 40px); */
    height: 100%;
    overflow: hidden;
    background: #ededed;
  }

  .main .main_left,
  .main .main_right {
    float: left;
  }

  /* 左边-常用 */

  .main .main_left {
    height: 100%;
    width: 148px;
    background: white;
    text-align: center;
    padding-top: 10px;
  }

  .main .main_left h2 {
    font-size: 16.5px;
    margin-top: 3px;
  }

  /* 右边-折叠面板 */

  .main .main_right {
    width: calc( 100% - 148px);
    background: white;
    height: 100%;
  }

  /* 代办任务 */

  .main_right .main_right_task,
  .main_right .main_right_work {
    float: left;
    width: 50%;
    /* height: 100vh; */
    /* height: calc( 100% - 40px); */
    height: 100%;
    padding: 19px 20px 0 20px;
    /* background: black; */
    background: #ededed;
  }

  .main_right .main_right_work {
    padding-left: 0;
  }

  .moreC {
    float: right;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
    height: 25px;
    /* display: inline-block; */
    background-color: #f3f3f3;
    color: #3b5469;
    font-size: 13px;
    line-height: 25px;
    text-align: center;
    font-weight: normal;
    margin-top: 6px;
    margin-right: 8px;
    cursor: pointer;
  }

  .moreCIcon {
    margin-top: 6px;
  }

  .workbench_right_top,
  .workbench_right_bottom {
    height: 47.5%;
    height: 43vh;
  }

</style>
