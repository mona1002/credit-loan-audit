<template>
  <div class="workbench">
    <myHead class="top"></myHead>
    <div class="main">
      <!-- 左边 -->
      <div class="main_left">
        <h2>
          <i class="el-icon-edit"> </i>常用 </h2>
      </div>
      <div class="main_right">
        <!-- 中间 -->
        <div class="main_right_task">
          <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
              <template slot="title">
                <i class="el-icon-menu"></i> 待办任务
                <!-- <i class="el-icon-refresh"></i> -->
                <!-- <span @click.stop="more" class="moreC"> 更多 </span> -->
              </template>
              <div class="waitting">
                <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
                  <el-table-column property="processTemplateId" label="任务名称">
                  </el-table-column>
                  <el-table-column property="taskNodeName" label="节点名称">
                  </el-table-column>
                  <el-table-column property="count" label="任务数目">
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
                  <!-- <i class="el-icon-refresh"></i> -->
                  <span @click.stop="more" class="moreC"> 更多 </span>
                  <i class="el-icon-refresh"></i>
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
                  <i class="el-icon-refresh"></i>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <!-- test 信息 之router 带params-->
          <!-- <router-link :to=" {path:'/ProductLists',query:{picName:val.name}}" v-for="(val,index) in pic" :key="index"> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from "../header.vue"
  export default {
    data() {
      return {
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
          taskNodeName: ''
        }
      }
    },
    components: {
      myHead
    },
    methods: {
      more() {
        console.log("more")
        this.$store.commit('workB', {
          processTemplateId: "56789",
          taskNodeName: "67uj"
        })
        console.log(this.$store.state.First)
      },
      handleCurrentChange(val) {
        console.log("我是表格")
        console.log(val.taskNodeName)
        if (val.taskNodeName == "creditApp_firstTrial") {
          this.currentRow = val;
          this.workbenchPass.processTemplateId = val.processTemplateId;
          this.workbenchPass.taskNodeName = val.taskNodeName;
          // this.$store.state
          // console.log(this.$store.state.First.Workbench="ghjkld67890")
          // this.$store.state.First.Workbench=this.workbenchPass;
          // console.log(this.$store.state.First)

          localStorage.setItem("workbenchPass", JSON.stringify(this.workbenchPass)); //工作台部分信息，带入workbenchPass
          this.$router.push({
            path: '/taskInWaitting',
            // query: {
            //   processTemplateId: val.processTemplateId,
            //   taskNodeName: val.taskNodeName,
            //   taskStatus: "01",
            //   userCode: this.loginPass.userCode,
            //   orgCode: this.loginPass.orgCode
            // }
          });
          // localStorage.setItem("tableData", JSON.stringify(tableData));
          // this.$router.push({path:'/taskInWaitting',query:'123'})
          //  console.log(111, this.$route.query.picName)   接参数
        } else if (val.taskNodeName == "creditApp_finalTrial_one" || val.taskNodeName == "creditApp_finalTrial_two" ||
          val.taskNodeName == "creditApp_finalTrial_three" || val.taskNodeName == "creditApp_finalTrial_four" || val.taskNodeName ==
          "creditApp_finalTrial_five") {
          this.currentRow = val;
          this.workbenchPass.processTemplateId = val.processTemplateId;
          this.workbenchPass.taskNodeName = val.taskNodeName;
          localStorage.setItem("FinalWorkbenchPass", JSON.stringify(this.workbenchPass)); //工作台部分信息，带入workbenchPass
          // this.$router.push({
          //   path: '/taskInWaitting',
          // });
        }


      }

    },
    computed: {

    },
    mounted() {
      // 字段
      // ASSIGNED("01", "代办"),
      // COMPLETED("03","已办"),
      // ABORTED("04","历史"),
      //  获取到 路由传参 
      // this.userCode = this.$route.query.userCode;
      // this.orgCode = this.$route.query.orgCode;
      // console.log(this.userCode + "================" + this.orgCode)
      // this.$route.query.picName接参数 

  //  this.get("/smUser/getUserInfo").then(response => {
    this.get("http://coderiskmgt.nuoyuan.com.cn:20717/remote/user/getUserInfo").then(response => {
        // axios 请求
        console.info(response.data);
      });

      this.loginPass = JSON.parse(localStorage.getItem('userInf'));
      this.post("/workFlowTaskQuery/getTaskProfile", {
        taskStatus: "01",
        userCode: this.loginPass.userCode,
        orgCode: this.loginPass.orgCode
      }).then(res => {
        console.log(res.data);
        this.tableData = res.data;
      });
    },
  }

</script>
<style scoped>
  /* public 部分 */

  .moreC {
    float: right;
    margin-right: 35px;
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

  @media screen and (min-width: 1366px) {}

</style>
