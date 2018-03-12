<template>
  <div class="workbench">
    <myHead class="top"></myHead>
    <div class="main">
      <!-- 左边 -->
      <div class="main_left">
        <h2>
          <i class="el-icon-edit"> </i>常用 </h2>
        <router-link to="/processMoni?creditApp00">
          <el-button type="primary">信审未分配监控</el-button>
        </router-link>
        <router-link to="/processMoni?creditApp01">
          <el-button type="primary">信审已分配监控</el-button>
        </router-link>
        <router-link to="/processMoni?creditApp03">
          <el-button type="primary">信审已完成监控</el-button>
        </router-link>
        <router-link to="/processMoni?reconsiderApp00">
          <el-button type="primary">复议未分配监控</el-button>
        </router-link>
        <router-link to="/processMoni?reconsiderApp01">
          <el-button type="primary">复议已分配监控</el-button>
        </router-link>
        <router-link to="/processMoni?reconsiderApp03">
          <el-button type="primary">复议已完成监控</el-button>
        </router-link>
        <router-link to="/processMoni?antiFraudApp00">
          <el-button type="primary">反欺诈未分配监控</el-button>
        </router-link>
        <router-link to="/processMoni?antiFraudApp01">
          <el-button type="primary">反欺诈已分配监控</el-button>
        </router-link>
        <router-link to="/processMoni?antiFraudApp03">
          <el-button type="primary">反欺诈已完成监控</el-button>
        </router-link>
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
                  <el-table-column property="processTemplateTxt" label="任务名称" align="center">
                  </el-table-column>
                  <el-table-column property="taskNodeNameTxt" label="节点名称" align="center">
                  </el-table-column>
                  <el-table-column property="count" label="任务数目" align="center">
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
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from "../header.vue";
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
        currentRow: null,
        workbenchPass: {
          processTemplateId: '',
          taskStatus: "01",
          taskNodeName: '',
        },
        rot: 0,
      }
    },
    components: {
      myHead
    },
    methods: {
      more() {
        this.$store.commit('workB', {
          processTemplateId: "56789",
          taskNodeName: "67uj"
        })
      },
      refresh() {
        this.rot += 360;
        this.$refs.worktask.style = "transform: rotate(" + this.rot + "deg)";
        // this.$refs.worktask.style = " -ms-transform: rotate("+this.rot+"deg)"; IE9
        this.post("/workFlowTaskQuery/getTaskProfile", {
          taskStatus: "01",
        }).then(res => {
          if (res.statusCode == 200) {
            console.log(res.data)
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      handleCurrentChange(val) {
        console.log(val)
        //         creditApp_antiFraud_commissioner 和 creditApp_antiFraud_manager
        // 其中第一个是 反欺诈专员审批，第二个是 反欺诈主管审批
        // reconsiderApp_apply  复议申请
        // reconsiderApp_credit_manager 信审经理审批
        // reconsiderApp_credit_seniro_manager 信审高级经理审批
        // reconsiderApp_credit_director 信审总监审批
        // 这4个是 复议
        // localStorage.setItem("tableData", JSON.stringify(tableData));
        // this.$router.push({path:'/taskInWaitting',query:'123'})
        //  console.log(111, this.$route.query.picName)   接参数
        this.currentRow = val;
        this.workbenchPass.processTemplateId = val.processTemplateId;
        this.workbenchPass.taskNodeName = val.taskNodeName;
        // 列表 存储  taskNodeName
        localStorage.setItem('taskNodeName',val.taskNodeName);
        if (val.taskNodeName == "creditApp_firstTrial") {       // 初审
          this.judge.flag = "01";
          localStorage.setItem("workbenchPass", JSON.stringify(this.workbenchPass)); //工作台部分信息，带入workbenchPass
          localStorage.setItem("judge", JSON.stringify(this.judge)); //请求localstorage 标识
          this.$router.push({
            path: '/taskInWaitting',
          });
          // this.$store.commit("ADD_VISITED_VIEWS", {
          //   name: "初审审批",
          //   path: '/taskInWaitting'
          // })
        } else if (val.taskNodeName == "creditApp_finalTrial_one" || val.taskNodeName == "creditApp_finalTrial_two" ||
          val.taskNodeName == "creditApp_finalTrial_three" || val.taskNodeName == "creditApp_finalTrial_four" || val.taskNodeName ==
          "creditApp_finalTrial_five") {                    // 终审
          this.judge.flag = "02";
          localStorage.setItem("FinalWorkbenchPass", JSON.stringify(this.workbenchPass)); 
          localStorage.setItem("judge", JSON.stringify(this.judge));         
          this.$router.push({
            path: '/FtaskInWaitting',
          });
        } else if (val.taskNodeName == "antiFraudApp_commissioner") { //反欺诈专员 
          this.judge.flag = "03";
          localStorage.setItem("AntiWorkbenchPass", JSON.stringify(this.workbenchPass)); 
          localStorage.setItem("judge", JSON.stringify(this.judge));  
          this.$router.push({
            path: '/AntiFraud34',
          });
        } else if (val.taskNodeName == "antiFraudApp_manager") { // 反欺诈主管 
          this.judge.flag = "04";
          localStorage.setItem("AntiManagerWorkbenchPass", JSON.stringify(this.workbenchPass)); 
          localStorage.setItem("judge", JSON.stringify(this.judge));         
          this.$router.push({
            path: '/AntiFraud34',
          });
        } else if (val.taskNodeName == "reconsiderApp_commissioner") { // 复议专员 
          this.judge.flag = "05";
          localStorage.setItem("ReWorkbenchPass", JSON.stringify(this.workbenchPass)); 
          localStorage.setItem("judge", JSON.stringify(this.judge));         
          this.$router.push({
            path: '/reconsiderList',
          });
        } else if (val.taskNodeName == "reconsiderApp_manager") { // 复议经理
          this.judge.flag = "06";
          localStorage.setItem("ReWorkbenchPass", JSON.stringify(this.workbenchPass));           
          // localStorage.setItem("ReManagerWorkbenchPass", JSON.stringify(this.workbenchPass)); //工作台部分信息，带入workbenchPass
          localStorage.setItem("judge", JSON.stringify(this.judge));         
          this.$router.push({
            path: '/reconsiderList',
          });
        }
        // else if (val.taskNodeName == "antiFraudApp_commissioner") { //复议反欺诈专员 
        //   this.judge.flag = "07";
        //   localStorage.setItem("ReAntiWorkbenchPass", JSON.stringify(this.workbenchPass)); //工作台部分信息，带入workbenchPass
        //   localStorage.setItem("judge", JSON.stringify(this.judge)); //请求localstorage 标识         
        //   this.$router.push({
        //     // path: '/AntiFraud',
        //   });
        // } else if (val.taskNodeName == "antiFraudApp_commissioner") { //复议反欺诈主管 
        //   this.judge.flag = "08";
        //   localStorage.setItem("ReAntiManagerWorkbenchPass", JSON.stringify(this.workbenchPass)); //工作台部分信息，带入workbenchPass
        //   localStorage.setItem("judge", JSON.stringify(this.judge)); //请求localstorage 标识         
        //   this.$router.push({
        //     // path: '/AntiFraud',
        //   });
        // }
      },
    },
    computed: {
      taskCount() {
        this.TaskCount = null;
        console.log(this.tableData)
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
      // 统一登录平台  调试   start 
      // console.log(UserURL)
      // this.get("http://testplatform.nuoyuan.com.cn/remote/user/getUserInfo").then(response => {
      this.get( UserURL+'remote/user/getUserInfo').then(response => {
        console.info(response.data);
        this.userInf = {
          userCode: response.data.userCode,
          orgCode: response.data.orgCode,
          orgId: response.data.orgId,
          userName: response.data.userName,
          roleCodesList: response.data.roleCodesList, // 初审拒绝按钮
        }
        localStorage.setItem("userInf", JSON.stringify(this.userInf));
        this.post("/workFlowTaskQuery/getTaskProfile", {
          taskStatus: "01",
        }).then(res => {
          console.log(res)
          if (res.statusCode == 200) {
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        });
      });
      // 统一登录 平台  调测 end

      //   // 取登陆信息 
      //   localStorage.setItem("userInf", JSON.stringify(this.userInf));
      //   this.post("/workFlowTaskQuery/getTaskProfile", {
      //     taskStatus: "01",
      //   }).then(res => {
      //     this.tableData = res.data;
      //   });
      // }
    },
  }

</script>
<style scoped>
  /* public 部分 */

  .trans {
    transition: All 1s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
  }

  .moreC {
    float: right;
    margin-right: 35px;
  }

  .border_top_bottom {
    border-top: 1px solid gray;
  }

  .main .main_left {
    height: 100%;
    width: 148px;
    background: white;
    text-align: center;
    padding-top: 10px;
  }

  /* 大框  */

  .workbench {
    background: #ededed;
    width: 100%;
    height: 100%;
  }

  .workbench .top {
    height: 70px;
  }

  .workbench .main {
    height: calc( 100% - 70px);
    overflow: hidden;
    background: #ededed;
  }

  /* main */

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
  }

  .main .main_left h2 {
    font-size: 16.5px;
    margin-top: 3px;
  }

  /* 右边-折叠面板 */

  .main .main_right {
    width: calc( 100% - 148px);
    background: white;
  }

  /* 代办任务 */

  .main_right .main_right_task,
  .main_right .main_right_work {
    float: left;
    width: 50%;
    height: 100vh;
    padding: 19px 20px 0 20px;
    /* background: black; */
    background: #ededed;
  }

  .main_right .main_right_work {
    padding-left: 0;
  }

  .waitting {
    /* height:800px; */
    background: red;
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
    margin-top: 11px;
    margin-right: 8px;
    cursor: pointer;
  }

  .moreCIcon {
    margin-top: 6px;
  }

  .border_top_bottom {
    border-top: 1px solid gray;
  }

  /* 大框  */

  .workbench {
    background: #ededed;
    width: 100%;
    height: 100%;
  }

  .workbench .top {
    height: 70px;
  }

  .workbench .main {
    height: calc( 100% - 70px);
    overflow: hidden;
    background: #ededed;
  }

  /* main */

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
  }

  .main .main_left h2 {
    font-size: 16.5px;
    margin-top: 3px;
  }

  /* 右边-折叠面板 */

  .main .main_right {
    width: calc( 100% - 148px);
    background: white;
  }

  /* 代办任务 */

  .main_right .main_right_task,
  .main_right .main_right_work {
    float: left;
    width: 50%;
    height: 100vh;
    padding: 19px 20px 0 20px;
    /* background: black; */
    background: #ededed;
  }

  .main_right .main_right_work {
    padding-left: 0;
  }

  .waitting {
    /* height:800px; */
    background: red;
  }

</style>
