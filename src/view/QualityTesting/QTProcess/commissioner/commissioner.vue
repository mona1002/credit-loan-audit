<template>
  <div class="AntiCaseNum IntegratedQuery">
    <!-- 质检  专员列表 -->
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <ul>
          <li>
            <p>
              <label> 进件编号 </label>
              <el-input v-model="params.applySubno" placeholder="请输入进件编号"></el-input>
            </p>
            <p>
              <label> 客户名称</label>
              <el-input v-model="params.custName_la" placeholder="请输入客户名称"></el-input>
            </p>
            <p>
              <label> 证件号码</label>
              <el-input v-model="params.certCode" placeholder="请输入证件号码"></el-input>
            </p>
          </li>
          <li>
            <p>
              <label> 任务类型</label>
              <el-select v-model="params.instaskType" placeholder="请选择">
                <el-option v-for="item in TaskType" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
            <p>

            </p>
            <p class="btn_wrap">
              <el-button class="btn" type="primary" style="marginLeft:228px" @click="Rsearch">查询</el-button>
              <el-button class="btn" type="primary" @click="Rreset">重置</el-button>
            </p>
          </li>
        </ul>
      </div>
      <div class="title">
        <h1>质检信息</h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" @row-dblclick="handleCurrentChange" border>
          <el-table-column type="index" align='center' label=序号 width="55">
          </el-table-column>
          <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="auditNamec" label="初审姓名" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="auditNamez" label="终审姓名" align='center' min-width="130">
          </el-table-column>
          <el-table-column prop="enterTime" label="进入本环节时间" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="assignName" label="分派人员" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="checkStateTxt" label="质检状态" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="instaskTypeTxt" label="任务类型" align='center' min-width="100">
          </el-table-column>
          <el-table-column prop="remark" label="备注" align='center' min-width="150">
          </el-table-column>
        </el-table>
        <!-- 分页  -->
        <!-- <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="this.totalRecord">
          </el-pagination>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import myHead from '../../../header.vue';
  import baseU from '../../../../util/constant';
  export default {
    data() {
      return {
        query: {
          id: '',
          ApplyId: "",
          taskId: '',
          processInstanceId: '',
          listType: '',
        },
        QTquery: {
          id: '',
          matchApplyId: "",
          applySubNo: '',
          businessId:'',
        },
        taskList: '',
        tableData: [],
        reg: /(\w{6})\w*(\w{4})/,
        Telreg: /(\w{7})\w*/,
        reVal: '$1********$2',
        telVal: '$1****',
        params: {
          processTemplateId: '',
          taskNodeName: '',
          taskStatus: '',
          applySubno: '',
          custName_la: '',
          certCode: '',
          instaskType: '',
          //   pageNum: '', //页数（第几页）
          //   pageSize: '', //页面显示行数
        },
        // currentPage: 1, //分页选中页
        // pageCount: 10, // 每页显示条数
        // totalRecord: 0, //总条数
        TaskType: [{ //任务类型
          value: '00',
          label: '常规质检'
        }, {
          value: '01',
          label: '专项质检'
        }, {
          value: '02',
          label: '纵向质检'
        }],
      }
    },
    methods: {

      //   handleSizeChange(val) {
      //     this.params.pageSize = val;
      //     this.params.pageNum = 1;
      //     // this.getInf(this.params);
      //     this.inquire(this.params);
      //   },
      handleCurrentChange(val) {
        console.log(val)
        // 根据两个条件去判断，首先根据 isSecondIns
        // 如果是 1 ，显示常规又专项
        // 如果不是： 根据instaskType 判断， instaskType=00 时：常规质检 ， instaskType=01 或 02：专项质检
        if (val.isSecondIns == '1') {
          this.query.listType = '常规又专项质检';
        } else if (val.isSecondIns == '0') {
          if (val.instaskType == '00') {
            this.query.listType = '常规质检';
          } else if (val.instaskType == '01' || val.instaskType == '02') {
            this.query.listType = '专项质检';
          }
        }
        this.QTquery.id = this.query.id = val.id;
        this.QTquery.matchApplyId = this.query.ApplyId = val.applyId;
        this.QTquery.applySubNo = val.applySubno;
         this.QTquery.businessId = val.businessId;
        this.query.taskId = val.taskId;
        this.query.processInstanceId = val.processInstanceId;
        // 存储质检结论参数
        console.log( this.query)
        localStorage.setItem("QTTaskWait", JSON.stringify(this.query));
        this.$router.push('/MatchingInfQT?checkApp_apply');
        // 存储components参数
        localStorage.setItem("QT", JSON.stringify(this.QTquery));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'QT'
        }));
        // this.params.pageNum = val;
        // this.inquire(this.params);
      },
      Rreset() {
        this.params.applySubno = '';
        this.params.custName_la = '';
        this.params.certCode = '';
        this.params.instaskType = '';
        this.inquire(this.params);
      },
      Rsearch() { //  查询
        // this.params.pageNum = this.currentPage = 1;
        this.inquire(this.params);
      },
      inquire(pam) {
        //查询列表
        this.post("insConclusion/queryZJZYTaskList", pam).then(res => {
          if (res.statusCode == 200) {
            // for (var i = 0; i < res.data.length; i++) {
            //   if (res.data[i].certCode) {
            //     res.data[i].certCode = res.data[i].certCode.replace(this.reg, this.reVal);
            //   }
            //   if (res.data[i].mobile) {
            //     res.data[i].mobile = res.data[i].mobile.replace(this.Telreg, this.telVal);
            //   }
            // }
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        })
      },
    },
    mounted() {
      this.taskList = JSON.parse(localStorage.getItem('QTWorkbenchPass'))
      this.params.processTemplateId = this.taskList.processTemplateId;
      this.params.taskNodeName = this.taskList.taskNodeName;
      this.params.taskStatus = this.taskList.taskStatus;
      this.inquire(this.params);
      // QTWorkbenchPass
      //   this.userInf = JSON.parse(localStorage.getItem('userInf'));
      //   this.params.applySubno = this.params.applySubno.replace(this.reg, this.reVal)
      //   this.params.mobile = this.params.mobile.replace(this.Telreg, this.telVal)
      //   this.params.pageNum = this.currentPage, //页数（第几页）
      //     this.params.pageSize = this.pageCount, //页面显示行数
    },
    components: {
      myHead
    }
  }

</script>
<style scoped>
  .AntiCaseNum {
    width: 100%;
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
    /* 统一导航 --去掉高度*/
    height: 100%;
  }

  .AntiCaseNum label {
    font-size: 14px;
    color: #475669;
    text-align: right;
    display: inline-block;
    width: 126px;
    height: 20px;
    margin-right: 10px;
  }

  .AntiCaseNum i {
    color: #ff7676;
    font-weight: 700;
    font-size: 16px;
    vertical-align: middle;
    font-style: normal;
  }

  .content {
    padding: 30px 30px;
    width: 100%;
    height: calc( 100% - 70px);
    /* 统一导航 */
    /* height: 100%; */
  }

  .search {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    margin-bottom: 20px;
    padding-bottom: 20px;
    height: auto;
  }

  .search li {
    clear: both;
    height: 55px;
  }

  .search li p {
    width: 33.3%;
    float: left;
    margin-top: 20px;
  }

  .btn_wrap {
    margin-top: 20px;
    height: 33px;
    width: calc( 66.6% + 394px);
  }

  .btn {
    border-radius: 8px;
    width: 79px;
    font-size: 14px;
    line-height: 33px;
    padding: 0;
  }

  .noBk {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    opacity: 0.75;
    background: #ebedf8;
    border-radius: 6px;
    width: 100%;
    height: 50px;
  }

  .title h1 {
    font-size: 16px;
    color: #1f2d3d;
    padding-left: 37px;
    text-align: left;
    line-height: 50px;
    padding-right: 37px;
  }

  .icon {
    margin-right: 5px;
    vertical-align: middle;
    font-size: 30px;
  }

  /* 综合查询页面加上分页pad-bottom 改为20px*/

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    padding: 25px 25px 20px 25px;
    width: 100%;
    height: 100%;
    /* height: calc( 100% - 255px); */
  }

  .paging {
    /* margin-top: 15px; */
    text-align: center;
    /* 统一导航 */
    margin-top: 28px;
  }

  .emerColor {
    color: #0077ff;
  }

</style>
