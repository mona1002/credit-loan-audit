<template>
  <div class="workbench">
    <!-- <myHead class="top"></myHead> -->
    <div class="main">
      <!-- 左边 -->
      <div class="main_left">
        <h2>
          <i class="el-icon-edit"> </i>常用 </h2>
      </div>
      <div class="main_right">
        <!-- 中间 -->
        <div class="main_right_task">
          <el-collapse v-model="activeNames" @change="waitting">
            <el-collapse-item name="1">
              <template slot="title">
                <i class="el-icon-menu"></i> 待办任务
                <!-- <i class="el-icon-refresh"></i> -->
                <!-- <span @click.stop="more" class="moreC"> 更多 </span> -->
              </template>float:right;
              margin-right: 10px;
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
            <el-collapse v-model="activeNames1" @change="handleChange">
              <el-collapse-item name="1">
                <template slot="title">
                  <i class="el-icon-menu"></i> 工作通知
                  <i class="el-icon-refresh"></i>
                  <span @click.stop="more" class="moreC"> 更多 </span>
                </template>float:right;
                margin-right: 10px;
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <!-- 公司动态 -->
          <div class="workbench_right_bottom">
            <el-collapse v-model="activeNames2" @change="workNotify">
              <el-collapse-item name="1">
                <template slot="title" class="border_top_bottom">
                  <i class="el-icon-menu"></i> 公司动态
                  <i class="el-icon-refresh"></i>
                  <span @click.stop="more" class="moreC"> 更多 </span>
                </template>float:right;
                margin-right: 10px;
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
        userCode: '', //用户编码
        orgCode: '', //机构编码
        pageNum: '', //页数（第几页）
        pageSize: '', //页面显示行数
        processTemplateId: '', // 流程模板Id
        taskNodeName: '', // 任务节点名称
        tableData: [],
        currentRow: null
      }
    },
components:{
  myHead
},
    methods: {
      waitting() {

      },
      handleChange() { // 手风琴

      },
      more() {
        console.log("more")
      },
      workNotify() {
        console.log("workNotify")
      },
      setCurrent(row) {
        console.log("我是按钮")

        console.log(row)
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        console.log("我是表格")
        // console.log(val)
        this.currentRow = val;
        this.$router.push({
          path: '/taskInWaitting',
          query: {
            processTemplateId: val.processTemplateId,
            taskNodeName: val.taskNodeName,
            taskStatus: "01",
            userCode: this.userCode,
            orgCode: this.orgCode
          }
        });
        // this.$router.push({path:'/taskInWaitting',query:'123'})
        //  console.log(111, this.$route.query.picName)   接参数
      }

    },
     created() {
      // console.log('created')
      // //  获取到 路由传参 
      // console.log(this.$route.params.userCode);
      // console.log(this.$route.params.orgCode);
    },
    mounted() {
// 字段
// ASSIGNED("01", "代办"),
// COMPLETED("03","已办"),
// ABORTED("04","历史"),
 //  获取到 路由传参 
      this.userCode=this.$route.params.userCode;
      this.orgCode=this.$route.params.orgCode;
      console.log(this.userCode +"================"+ this.orgCode )
      // this.$route.query.picName接参数
      this.post("/workFlowTaskQuery/getTaskProfile", {
        taskStatus: "01",
        userCode:this.userCode ,
        orgCode:this.orgCode 
      }).then(res => {
        console.log(res.data);
        this.tableData=res.data;
      });

    },
    }

</script>
<style scoped>
  /* public 部分 */
.moreC{
  /* float:right; */
  margin-left: 35px;
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
    padding: 19px 0 0 20px;
    /* background: black; */
    background: #ededed;
  }
  .waitting {
    /* height:800px; */
    background: red;
  }

  @media screen and (min-width: 1366px) {}

</style>
