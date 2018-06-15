<template>
  <!-- 修改PC业务状态异常通知 - 定时任务 -->
  <div class="AntiCaseNum IntegratedQuery">
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <ul>
          <li>
            <p>
              <label> 进件编号： </label>
              <el-input v-model="params.applySubNo" placeholder="请输入进件编号"></el-input>
            </p>
            <p>
              <label> 发送日期： </label>
              <el-date-picker v-model="sendDate" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </p>
            <p>
              <label> 发送状态： </label>
              <el-select v-model="params.validate" placeholder="请选择">
                <el-option v-for="item in sendStatus" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </p>
          </li>
          <li>
            <p>
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
        <h1>异常通知
          <span @click="resend">
            <img src="../../../static/images/appro.png" style=" vertical-align: middle;"> 重新发送
          </span>
        </h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" border>
          <el-table-column type="selection" align='center' width="55">
          </el-table-column>
          <el-table-column type="index" align='center' label=序号 width="55">
          </el-table-column>
          <el-table-column prop="applySubNo" label="进件编号" align='center' width="180">
          </el-table-column>
          <el-table-column prop="date" label="最新发送时间" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="num" label="发送次数" align='center' width="80">
          </el-table-column>
          <el-table-column prop="validateTxt" label="发送状态" align='center' width="80">
          </el-table-column>
          <el-table-column prop="errorMsg" label="错误原因" align='center' min-width="130">
          </el-table-column>
        </el-table>
        <!-- 分页  -->handlePageChange
        <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handlePageChange" :page-sizes="[10, 50, 80, 100]" :current-page.sync="currentPage"
            :page-size="pageCount" layout="total, sizes, prev, pager, next, jumper" :total="totalRecord">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- ==============================任务分配=================================== -->
    <!-- <el-dialog title="提示" :modal="false" :visible.sync="Confirm" width="420px">
      <span>您确定重新发送？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="calbtn" @click="Confirm=false">取消</el-button>
        <el-button class="subtn" type="primary" :loading="loadsitu" @click="allot">{{adbtn}}</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
  import myHead from '../header.vue';
  export default {
    data() {
      return {
        sendStatus: [{
          label: '未成功',
          value: '00',
        }, {
          label: '成功',
          value: '01'
        }],
        sendDate: '', //发送日期
        tableData: [],
        selectedList: '', //手动发送请求入参
        DefaultTime: '',
        currentPage: 1, //分页选中页
        pageCount: 10, // 每页显示条数
        totalRecord: 0, //总条数       
        params: {
          pageNum: 1, //当前页
          pageSize: 10, //每页的显示数量
          validate: '', //00：查询发送失败，01：查询已发送成功
          applySubNo: '', //进件编号
          dateBegin: '', //	发送时间最小值
          dateEnd: '', //	发送时间最大值
        },
        // Confirm: false,
        // loadsitu: false,
        // adbtn: '确定',
      }
    },
    methods: {
      getDefaultTime() {
        var MyDate = new Date();
        this.DefaultTime = MyDate.getFullYear() + '-' + (MyDate.getMonth() + 1) + '-' + MyDate.getDate()
        this.params.dateEnd = this.params.dateBegin = this.DefaultTime; //	默认请求当天数据
      },
      inquire(pam) { //查询列表    基础接口-5.分页查询请求错误数据
        this.post("/sendErrorController/querySendErrorByPage", pam).then(res => {
          if (res.statusCode == 200) {
            this.tableData = res.data.recordList;
            this.totalRecord = res.data.totalRecord; //总记录数
          } else {
            this.$message.error(res.msg);
          }
        });
      },
      Rreset() { // 重置
        this.params.validate = ''; //00：查询发送失败，01：查询已发送成功
        this.params.applySubNo = ''; //进件编号
        this.params.dateBegin = ''; //	发送时间开始时间
        this.params.dateEnd = ''; //	发送时间结束时间
        this.sendDate = ''; //发送日期
      },
      Rsearch() { // 查询
        if (!this.sendDate && !this.params.validate && !this.params.applySubNo) {
          this.getDefaultTime(); //全部为空时，发送时间设置为默认当天
        } else {
          this.sendDate[0] ? this.params.dateBegin = this.sendDate[0] : this.params.dateBegin = '';
          this.sendDate[1] ? this.params.dateEnd = this.sendDate[1] : this.params.dateEnd = '';
        }
        this.params.pageSize = this.pageCount; 
        this.inquire(this.params);
      },
      resend() {
        if (!this.selectedList) {
          this.$message.error('请选择一条数据！');
          return
        }
        this.post("/sendErrorController/sendErrorMsg", this.selectedList).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: '发送请求成功！'
            })
          } else {
            this.$message.error(res.msg);
          }
        })
        // this.selectedList='';
      },
      handleSelectionChange(val) {
        this.selectedList = val;
      },
      handleSizeChange(val) {
        this.pageCount = val;
      },
      handlePageChange(val) {
        this.pageNum = this.currentPage = val;
        this.Rsearch();
      }
    },
    mounted() {
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

  .title span {
    float: right;
    cursor: pointer;
  }

  /* 综合查询页面加上分页pad-bottom 改为20px*/

  .table_wrap {
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    padding: 25px 25px 20px 25px;
    width: 100%;
    margin-bottom: 45px;
  }

  .paging {
    text-align: center;
    /* 统一导航 */
    margin-top: 28px;
  }

  .emerColor {
    color: #0077ff;
  }

</style>
