<template>
  <div class="taskWatting main-div">
    <!-- 质检  综合查询 -->
    <div class="taskWinput search-div">
      <el-row class="row row1" type="flex">
        <el-col :span="6" class="search-item" :offset="0">
          <span class="keywordText">进件编号： </span>
          <el-input v-model.trim="params.applySubno" placeholder="请输入进件编号"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">客户名称：</span>
          <el-input v-model.trim="params.custName" placeholder="请输入客户名称"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">证件号码：</span>
          <el-input v-model.trim="params.certCode" placeholder="请输入证件号码"></el-input>
        </el-col>
        <el-col :span="6" class="search-item">
          <span class="keywordText">手机号码：</span>
          <el-input v-model.trim="params.mobile" placeholder="请输入手机号码"></el-input>
        </el-col>
      </el-row>
      <el-row class="row row2" type="flex">
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-item">
        </el-col>
        <el-col :span="6" class="search-item">
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
        综合查询
      </span>
    </div>
    <div class="listContainer">
      <!-- 编辑table -->
      <el-table :data="tableData" style="width: 100%" height="510" highlight-current-row @row-dblclick="handleCurrentChange" border>
        <el-table-column type="index" align='center' label=序号 width="55">
        </el-table-column>
        <el-table-column prop="applySubno" label="进件编号" align='center' min-width="180">
        </el-table-column>
        <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
        </el-table-column>
        <el-table-column label="证件号码" align='center' min-width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.certCode |cerCodeStar }}</span>
          </template>
        </el-table-column>
        <el-table-column label="手机号码" align='center' min-width="140">
          <template slot-scope="scope">
            <span>{{ scope.row.mobile |MobileStar }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="appDate" label="申请日期" align='center' min-width="150">
        </el-table-column>
        <el-table-column prop="proName" label="产品名称" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="operOrgName" label="进件机构" align='center' min-width="120">
        </el-table-column>
        <el-table-column prop="busiStateTxt" label="审批状态" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="reconStateTxt" label="复议状态" align='center' min-width="100">
        </el-table-column>
        <el-table-column prop="fraudStateTxt" label="反欺诈状态" align='center' min-width="100">
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
</template>
<script>
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        query: {
          id: '',
          matchApplyId: "",
          applySubNo: ''
        },
        userInf: null,
        tableData: [],
        reg: /(\w{6})\w*(\w{4})/,
        Telreg: /(\w{7})\w*/,
        reVal: '$1********$2',
        telVal: '$1****',
        params: {
          applySubno: '',
          custName: '',
          certCode: '',
          mobile: '',
          //   pageNum: '', //页数（第几页）
          //   pageSize: '', //页面显示行数
        },
        // currentPage: 1, //分页选中页
        // pageCount: 10, // 每页显示条数
        // totalRecord: 0, //总条数
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
        this.query.id = val.id;
        this.query.matchApplyId = val.applyId;
        this.query.applySubNo = val.applySubno;
        this.query=Object.assign({},this.query,val)
        localStorage.setItem("Query", JSON.stringify(this.query));
        localStorage.setItem("MatchFlag", JSON.stringify({
          MatchFlag: 'Query'
        }));
        // this.$router.push('/MatchingInfQuery');
        this.$router.push({
          name: 'MatchingInfQuery',
          params: {
            newOne: true,
          }
        });
        // this.params.pageNum = val;
        // this.inquire(this.params);
      },
      Rreset() {
        this.params.applySubno = '';
        this.params.custName = '';
        this.params.certCode = '';
        this.params.mobile = '';
      },
      Rsearch() {
        // this.params.pageNum = this.currentPage = 1;
        if (this.params.applySubno != '' || this.params.custName != '' || this.params.certCode != '' || this.params.mobile !=
          '') {
          this.inquire(this.params);
        } else {
          this.$message.error('请输入查询条件')
        }
      },
      inquire(pam) {
        // 基础接口-综合查询
        this.post("applyInfoPool/multipleQuery", pam).then(res => {
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
            for (var i = 0; i < res.data.length; i++) {
              var regs = /\d{4}-\d{1,2}-\d{1,2}/g;
              //this.appDate = res.data.recordList[i].appDate.replace(regs,'');
              this.tableData[i].appDate = regs.exec(res.data[i].appDate)[0];
            }
          } else {
            this.$message.error(res.msg);
          }
        })
      },
    },
    mounted() {
      //   this.params.pageNum = this.currentPage, //页数（第几页）
      //     this.params.pageSize = this.pageCount, //页面显示行数
    },
  }

</script>
