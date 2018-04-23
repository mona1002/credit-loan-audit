<template>

</template>
<template>
  <div class="AntiCaseNum IntegratedQuery">
    <!-- 质检  综合查询 -->
    <myHead></myHead>
    <div class="content">
      <div class="search">
        <ul>
          <li>
            <p>
              <label> 进件编号 </label>
              <el-input v-model="params.applySubno" @blur="num('Subno')" placeholder="请输入进件编号"></el-input>
            </p>
            <p>
              <label> 客户名称</label>
              <el-input v-model="params.custName" placeholder="请输入客户名称"></el-input>
            </p>
            <p>
              <label> 证件号码</label>
              <el-input v-model="params.certCode" placeholder="请输入证件号码"></el-input>
            </p>
          </li>
          <li>
            <p>
              <label> 手机号码</label>
              <el-input v-model="params.mobile" @blur="num('mobile')" placeholder="请输入手机号码"></el-input>
            </p>
            <p>
            </p>
            <p class="btn_wrap">
              <el-button class="btn" type="primary" style="marginLeft:228px" @click="Rsearch">查询</el-button>
              <el-button class="btn" type="primary" @click="Rreset">重置</el-button>
            </p>
          </li>
          <!-- <li>
            <p>
            </p>
            <p>
            </p>
            <p class="btn_wrap">
              <el-button class="btn" type="primary" style="marginLeft:228px" @click="Rsearch">查询</el-button>
              <el-button class="btn" type="primary" @click="Rreset">重置</el-button>
            </p>
          </li> -->
        </ul>
      </div>
      <div class="title">
        <h1>综合查询</h1>
      </div>
      <div class="table_wrap">
        <!-- 编辑table -->
        <el-table :data="tableData" style="width: 100%" height="100%" @current-change="handleCurrentChange" border>
          <el-table-column type="index" align='center' label=序号 width="55">
          </el-table-column>
          <el-table-column prop="applySubno" label="进件编号" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="custName" label="客户名称" align='center' min-width="120">
          </el-table-column>
          <el-table-column prop="certCode" label="证件号码" align='center' min-width="180">
          </el-table-column>
          <el-table-column prop="mobile" label="手机号码" align='center' min-width="140">
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
  </div>
</template>
<script>
  import myHead from '../../header.vue';
  import baseU from '../../../util/constant';
  export default {
    data() {
      return {
        query: {
          id: '',
          matchApplyId: "",
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
      num(el, val) {
        switch (el) {
          case 'Subno':
            isNaN(this.params.applySubno) ? this.params.applySubno = '' : this.params.applySubno;
            break;
          case 'mobile':
            isNaN(this.params.mobile) ? this.params.mobile = '' : this.params.mobile;
            break;
        }
      },

      //   handleSizeChange(val) {
      //     this.params.pageSize = val;
      //     this.params.pageNum = 1;
      //     // this.getInf(this.params);
      //     this.inquire(this.params);
      //   },
      gopath() {
        this.$store.dispatch('addVisitedViews', {
          name: '综合查询-查看',
          path: '/MatchingInfQuery',
          flag: '',
          params: '',
          StatefullPath: '/MatchingInfQuery',
        })
      },
      handleCurrentChange(val) {
        this.query.id = val.id;
        this.query.matchApplyId = val.applyId;
        localStorage.setItem("Query", JSON.stringify(this.query));
        localStorage.setItem("MatchFlag", JSON.stringify({ MatchFlag:'Query' }));
        this.$router.push('/MatchingInfQuery');
        this.gopath();
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
            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].certCode) {
                res.data[i].certCode = res.data[i].certCode.replace(this.reg, this.reVal);
              }
              if (res.data[i].mobile) {
                res.data[i].mobile = res.data[i].mobile.replace(this.Telreg, this.telVal);
              }
            }
            this.tableData = res.data;
          } else {
            this.$message.error(res.msg);
          }
        })
      },
    },
    mounted() {
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
    height: 100%;
    background-color: #fafbfc;
    overflow-y: auto;
    overflow-x: hidden;
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
    height: calc( 100% - 255px);
  }

  .paging {
    margin-top: 15px;
    text-align: center;
  }

  .emerColor {
    color: #0077ff;
  }

</style>
