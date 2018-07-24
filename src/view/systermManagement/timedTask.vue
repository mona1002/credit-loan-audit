<template>
  <!-- 修改PC业务状态异常通知 - 定时任务 -->
  <div class="taskWatting main-div">
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model="params.applySubNo" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item date_picker">
          <span class="keywordText">发送日期：</span>
          <el-date-picker v-model="sendDate" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">发送状态：</span>
          <el-select v-model="params.validate" placeholder="请选择">
            <el-option v-for="item in sendStatus" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6" class="search-btn">
          <el-button class="btn query" type="primary" @click="Rsearch">查询</el-button>
          <el-button class="btn reset" @click="Rreset">重置</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="title titleContainer edit-div">
      <span class="titleText">
        <i class="el-icon title-icon"></i>
        异常通知
      </span>
      <span class="iconContainer">
        <span class="icon-item" @click='resend'>
          <i class="el-icon appro"></i>
          <span class="el-icon-text">重新发送</span>
        </span>
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @selection-change="handleSelectionChange"
        border>
        <el-table-column type="selection" align='center' width="55">
        </el-table-column>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applySubNo" label="进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="date" label="最新发送时间" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="num" label="发送次数" align='center' min-width="80">
        </el-table-column>
        <el-table-column prop="validateTxt" label="发送状态" align='center' min-width="80">
        </el-table-column>
        <el-table-column prop="errorMsg" label="错误原因" align='center' min-width="130">
        </el-table-column>
      </el-table>
      <!-- 分页  -->
      <div class="page">
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
</template>
<script>
  export default {
    data() {
      return {
        sendStatus: [{
          label: '请求失败',
          value: '00',
        }, {
          label: '请求成功',
          value: '01'
        }],
        sendDate: '', //发送日期
        tableData: [],
        selectedList: '', //手动发送请求入参
        selectedListParams: [],
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
      getDefaultTime() { //查询条件为诶空，默认查询当天件
        var MyDate = new Date();
        this.DefaultTime = MyDate.getFullYear() + '-' + (MyDate.getMonth() + 1) + '-' + MyDate.getDate()
        this.params.dateEnd = this.params.dateBegin = this.DefaultTime; //	默认请求当天数据
        this.sendDate = [];
        this.sendDate.push(this.params.dateBegin);
        this.sendDate.push(this.params.dateEnd);
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
        // this.sendDate.push( )
        this.params.pageSize = this.pageCount;
        this.inquire(this.params);
      },
      resend() { //重新发送
        if (!this.selectedList) {
          this.$confirm('请选择一条数据！', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
            cancelButtonText: '取消',
            showCancelButton: true
          }).then(() => {}).catch(() => {});
          return
        }
        var obj = {};
        this.selectedListParams = [];
        for (var i = 0; i < this.selectedList.length; i++) {
          obj = {};
          obj.url = this.selectedList[i].url;
          obj.sendMsg = this.selectedList[i].sendMsg;
          obj.num = this.selectedList[i].num;
          obj.errorMsg = this.selectedList[i].errorMsg;
          obj.date = this.selectedList[i].date;
          obj.validate = this.selectedList[i].validate;
          obj.validateTxt = this.selectedList[i].validateTxt;
          this.selectedListParams.push(obj)
        }
        this.post("/sendErrorController/sendErrorMsg", this.selectedListParams).then(res => {
          if (res.statusCode == 200) {
            this.$message({
              type: 'success',
              message: res.msg
            })
            this.inquire(this.params);
          } else {
            this.$message.error(res.msg);
          }
        })
      },
      handleSelectionChange(val) {
        this.selectedList = val;
      },
      handleSizeChange(val) {
        this.pageCount = val;
        this.Rsearch();
      },
      handlePageChange(val) {
        this.pageNum = this.currentPage = val;
        this.Rsearch();
      }
    },
    mounted() {},
  }

</script>
