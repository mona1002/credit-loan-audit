<template>
  <div class="workbench">
    <myHead></myHead>
   <!-- 左边 -->
    <div class="workbench_left">
      <i class="el-icon-edit"> 常用</i>
      <br>
      <i class="el-icon-plus"> 常用</i>
      <i class="el-icon-refresh"> </i>
    </div>
    <!-- 中间 -->
    <div class="workbench_middle">
      <el-tabs type="border-card">
        <el-tab-pane label="待办任务">
          <!-- 表格 -->
          <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
            <el-table-column property="TaskName" label="任务名称">
            </el-table-column>
            <el-table-column property="Nname" label="节点名称">
            </el-table-column>
            <el-table-column property="Num" label="任务数目">
            </el-table-column>
          </el-table>
          <!-- 表格结束 -->
        </el-tab-pane>
        <el-tab-pane label="已办任务">配置管理</el-tab-pane>
        <el-tab-pane label="历史任务">角色管理</el-tab-pane>
      </el-tabs>
    </div>
    <!-- 右边 -->
    <div class="workbench_right">
      <!-- 工作通知 -->
      <div class="workbench_right_top">
<el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            <i class="el-icon-menu"></i> 工作通知
            <i class="el-icon-refresh"></i>
            <span @click.stop="more" class="moreC"> 更多 </span>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
      </el-collapse>
      </div>

      <!-- 公司动态 -->
         <div class="workbench_right_bottom">
<el-collapse v-model="activeNames1" @change="workNotify">
          <el-collapse-item name="1">
            <template slot="title" class="border_top_bottom">
              <i class="el-icon-menu"></i> 公司动态
              <i class="el-icon-refresh"></i>
              <span @click.stop="more" class="moreC"> 更多 </span>
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
</template>
<script>
import myHead from "../header.vue"
  export default {
   data() {
      return {
        activeNames: ['1'],

        activeNames1: ['1'],
        // tableData: [{
        //   taskName: '信审流程',
        //   nName: '初审审批',
        //   Num: 4,
        // }, {
        //   taskName: '2016-05-04',
        //   nName: '王小虎',
        //   Num: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   taskName: '2016-05-01',
        //   nName: '王小虎',
        //   Num: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   taskName: '2016-05-03',
        //   nName: '王小虎',
        //   Num: '上海市普陀区金沙江路 1516 弄'
        // }],
        tableData: [{
          TaskName: '审批流程',
          Nname: '反欺诈专员审批',
          Num: '3'
        }, {
          TaskName: '审批流程',
          Nname: '反欺诈专员审批',
          Num: '3'
        }, {
          TaskName: '审批流程',
          Nname: '反欺诈专员审批',
          Num: '3'
        }, {
         TaskName: '审批流程',
          Nname: '反欺诈专员审批',
          Num: '3'
        }],
        currentRow: null
      }
    },
    methods: {
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
        console.log(val)
        

        this.currentRow = val;
        this.$router.push({path:'/taskInWaitting'})
        
        // this.$router.push({path:'/taskInWaitting',query:'123'})
        //  console.log(111, this.$route.query.picName)   接参数
      }

    },
    mounted($event) {
      // var ev = ev || window.event;
console.log(this.$event)
    },
    components:{
      myHead
    }
  }

</script>
<style scoped>

  /* public 部分 */

  .border_top_bottom {
    border-top: 1px solid gray;
  }
  /* private 部分 */

  .workbench_left,
  .workbench_middle,
  .workbench_right {
    float: left;
  }

  .workbench_left {
    background: #eee;
    width: 200px;
    height: 100vh;
  }

  .workbench_middle {
          width: calc( 70% - 200px );      
    height: 100vh;
    /* border: 1px solid black; */
    padding: 20px 10px;
  }

  .workbench_right {
    width: 30%;
    height: calc( 100% - 60px );
    /* height: 100vh; */
    margin-top: 20px;    
    /* padding:0 10px; */
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);

  }
/* .workbench_right_top,.workbench_right_bottom{
  height:40vh;
} */
  .moreC {
    /* background: red; */
    float: right;
    margin-right: 30px;
  }

  @media screen and (min-width: 1366px) {
/*    
  .workbench_left {
    background: #eee;
    width:200px;
    height: 100vh;
  }

    .workbench_middle {
      width: calc( 100% - 200px );      
      height: 100vh;
      background: red;
    }

  .workbench_right {
    width: 30%;
    height: 100vh;
    position: relative;
  }

    */
   

  }


</style>
